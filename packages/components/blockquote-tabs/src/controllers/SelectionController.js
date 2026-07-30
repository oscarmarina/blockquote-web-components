import {describeInteractionElement, registerInteractionElement} from './InteractionLogger.js';

let idCount = 0;
const generateId = () => `bq-tabs-${(idCount += 1)}`;

/**
 * Clamps a 1-based index to the nearest bound of a list of `length` items.
 * Non-finite values fall back to the first item. With an empty list there is
 * nothing to clamp against, so the value is only normalized (never below 1).
 *
 * @param {number} value
 * @param {number} length
 */
const clampFromOne = (value, length) => {
  const idx = Number.isFinite(value) ? Math.trunc(value) : 1;
  return length > 0 ? Math.min(Math.max(idx, 1), length) : Math.max(idx, 1);
};

/**
 * `SelectionController`
 *
 * Owns the selection semantics of a tab set:
 *
 * - Sanitizes the 1-based `selected` index on write (nearest-bound clamp) and
 *   reports the committed value so the host can correct its reflected attribute
 *   (attribute and effective state never diverge).
 * - Applies the selection idempotently to every tab/tabpanel pair, so no
 *   "last selected item" bookkeeping is needed.
 * - Wires the bidirectional ARIA relationship of each pair (`aria-controls` on
 *   the tab <-> `aria-labelledby` on the tabpanel), generating missing ids and
 *   always respecting author-supplied values; warns when an author-supplied
 *   half does not close the pair (dangling idref).
 * - Re-syncs selection and wiring when the slotted items change.
 *
 * Focus and activation are intentionally out of scope here.
 *
 * @implements {ReactiveController}
 */
export class SelectionController {
  /** @type {HTMLElement[]} */
  #tabs = [];

  /** @type {HTMLElement[]} */
  #tabpanels = [];

  #selectedIndex = 0;

  /** @type {Set<string>} mismatches already surfaced (each one warns once) */
  #warnedMismatches = new Set();

  #logger;

  /**
   * @param {ReactiveControllerHost & {selected: number}} host
   * @param {Object} options
   * @param {import('./InteractionLogger.js').InteractionLogger} options.logger
   */
  constructor(host, {logger}) {
    this.host = host;
    this.#logger = logger;
    host.addController(this);
  }

  get length() {
    return this.#tabs.length;
  }

  get selectedIndex() {
    return this.#selectedIndex;
  }

  get selectedIndexFromOne() {
    return this.#selectedIndex + 1;
  }

  get selectedTab() {
    return this.#tabs[this.#selectedIndex];
  }

  get selectedTabpanel() {
    return this.#tabpanels[this.#selectedIndex];
  }

  /**
   * Updates the slotted items, wires their ARIA relationships and re-syncs the
   * selection. When the current selection falls outside the new range, the
   * host's `selected` is corrected and the commit happens on the next update.
   *
   * @param {HTMLElement[]} [tabs]
   * @param {HTMLElement[]} [tabpanels]
   */
  setItems(tabs = [], tabpanels = []) {
    this.#tabs = [...tabs];
    this.#tabpanels = [...tabpanels];
    this.#tabs.forEach((tab, index) => {
      registerInteractionElement(tab, this.#logger, 'tab', index);
    });
    this.#tabpanels.forEach((tabpanel, index) => {
      registerInteractionElement(tabpanel, this.#logger, 'tabpanel', index);
    });
    this.#logger.step(
      'SELECCIÓN',
      'SelectionController.setItems()',
      'SelectionController.#wireAriaRelationships()',
      'Se copia la lista de slots, se registra cada hijo en esta historia y se prepara el pareo ARIA por índice.',
      {
        tabs: this.#tabs.length,
        tabpanels: this.#tabpanels.length,
        paresCompletos: Math.min(this.#tabs.length, this.#tabpanels.length),
      }
    );
    this.#wireAriaRelationships();

    const clamped = clampFromOne(this.host.selected, this.length);
    if (clamped !== this.host.selected) {
      this.#logger.step(
        'SELECCIÓN',
        'SelectionController.setItems()',
        'BlockquoteTabs.selected (write-back)',
        'El cambio de slots dejó selected fuera del rango válido. Se corrige la propiedad y se espera al próximo updated() antes de aplicar.',
        {
          selectedAnterior: this.host.selected,
          selectedCorregido: clamped,
          rangoValido: this.length > 0 ? `1..${this.length}` : 'sin límite superior',
        }
      );
      this.#logger.expectSelectionCorrection(clamped);
      this.host.selected = clamped;
      return;
    }
    this.#logger.step(
      'SELECCIÓN',
      'SelectionController.setItems()',
      'SelectionController.#apply()',
      'selected ya es válido para la nueva lista: se reaplica idempotentemente a todos los hijos.'
    );
    this.#apply(this.host.selected - 1);
  }

  /**
   * Applies a 1-based selection and returns the committed 1-based value. When
   * the committed value differs from the requested one, nothing is applied and
   * the host should correct `selected` (the commit happens on the next update).
   *
   * @param {number} selectedFromOne
   */
  commit(selectedFromOne) {
    const clamped = clampFromOne(selectedFromOne, this.length);
    this.#logger.step(
      'SELECCIÓN',
      'SelectionController.commit()',
      'clampFromOne()',
      clamped === selectedFromOne
        ? 'El valor 1-based es válido y puede aplicarse.'
        : 'El valor solicitado no es válido; se devuelve el límite más cercano sin aplicar todavía.',
      {
        solicitado1Based: selectedFromOne,
        longitud: this.length,
        resultado1Based: clamped,
        requiereWriteBack: clamped !== selectedFromOne,
      }
    );
    if (clamped !== selectedFromOne) {
      return clamped;
    }
    this.#logger.step(
      'SELECCIÓN',
      'SelectionController.commit()',
      'SelectionController.#apply()',
      `Se convierte selected=${clamped} de la API pública al índice interno ${clamped - 1} (0-based).`
    );
    this.#apply(clamped - 1);
    return clamped;
  }

  /**
   * @param {number} index
   */
  #apply(index) {
    if (this.length === 0) {
      this.#logger.step(
        'DECISIÓN',
        'SelectionController.#apply()',
        'return',
        'No hay tabs: no existe estado visual que aplicar.'
      );
      return;
    }
    const previousIndex = this.#selectedIndex;
    this.#selectedIndex = index;
    this.#logger.step(
      'SELECCIÓN',
      'SelectionController.#apply()',
      'blockquote-tab.selected + blockquote-tabpanel.selected',
      'La selección confirmada cambia en memoria y después se escribe un booleano en TODOS los tabs y paneles para evitar estado residual.',
      {
        indiceConfirmadoAnterior0Based: previousIndex,
        indiceConfirmadoActual0Based: index,
        selectedConfirmado1Based: index + 1,
        mueveFoco: false,
      }
    );
    this.#tabs.forEach((tab, i) => {
      const selected = i === index;
      const previous = Boolean(tab.selected);
      this.#logger.step(
        'SELECCIÓN',
        'SelectionController.#apply()',
        `BlockquoteTab.selected (tab ${i + 1})`,
        `Se asigna ${selected}. La propiedad cambia ahora; aria-selected se reflejará cuando Lit ejecute updated() del hijo.`,
        {
          tab: describeInteractionElement(tab, this.#tabs),
          selectedAnterior: previous,
          selectedAsignado: selected,
          agendaUpdateHijo: previous !== selected,
        }
      );
      tab.selected = selected;
    });
    this.#tabpanels.forEach((tabpanel, i) => {
      const selected = i === index;
      const previous = Boolean(tabpanel.selected);
      this.#logger.step(
        'SELECCIÓN',
        'SelectionController.#apply()',
        `BlockquoteTabPanel.selected (panel ${i + 1})`,
        `Se asigna ${selected}. hidden/aria-hidden/tabindex se sincronizarán en updated() del panel.`,
        {
          tabpanel: describeInteractionElement(tabpanel, this.#tabpanels),
          selectedAnterior: previous,
          selectedAsignado: selected,
          agendaUpdateHijo: previous !== selected,
        }
      );
      tabpanel.selected = selected;
    });
  }

  #wireAriaRelationships() {
    const pairs = Math.min(this.#tabs.length, this.#tabpanels.length);
    this.#logger.step(
      'DOM',
      'SelectionController.#wireAriaRelationships()',
      'bucle de pares tab ↔ tabpanel',
      'Cada índice representa un par. Se generan ids solo cuando faltan y se conservan los atributos escritos por el autor.',
      {
        pares: pairs,
      }
    );
    for (let i = 0; i < pairs; i += 1) {
      const tab = this.#tabs[i];
      const tabpanel = this.#tabpanels[i];
      const tabIdWasMissing = !tab.id;
      const tabpanelIdWasMissing = !tabpanel.id;
      const controlsWasMissing = !tab.hasAttribute('aria-controls');
      const labelledbyWasMissing = !tabpanel.hasAttribute('aria-labelledby');

      if (!tab.id) {
        tab.id = generateId();
      }
      if (!tabpanel.id) {
        tabpanel.id = generateId();
      }
      if (!tab.hasAttribute('aria-controls')) {
        tab.setAttribute('aria-controls', tabpanel.id);
      }
      if (!tabpanel.hasAttribute('aria-labelledby')) {
        tabpanel.setAttribute('aria-labelledby', tab.id);
      }
      this.#logger.step(
        'DOM',
        'SelectionController.#wireAriaRelationships()',
        `pareo ARIA ${i + 1}`,
        'Par conectado: tab aria-controls → panel id; panel aria-labelledby → tab id.',
        {
          tab: describeInteractionElement(tab, this.#tabs),
          tabpanel: describeInteractionElement(tabpanel, this.#tabpanels),
          tabId: tab.id,
          tabIdGenerado: tabIdWasMissing,
          tabpanelId: tabpanel.id,
          tabpanelIdGenerado: tabpanelIdWasMissing,
          ariaControls: tab.getAttribute('aria-controls'),
          ariaControlsGenerado: controlsWasMissing,
          ariaLabelledby: tabpanel.getAttribute('aria-labelledby'),
          ariaLabelledbyGenerado: labelledbyWasMissing,
        }
      );

      // Author-supplied halves are respected verbatim. When one half does not
      // close the pair, the relationship is left broken (dangling idref), so
      // surface it instead of failing silently (once per distinct mismatch:
      // the wiring re-runs on every slot change).
      const controls = tab.getAttribute('aria-controls');
      this.#warnOnce(
        controls !== tabpanel.id,
        `tab "${tab.id}" has aria-controls="${controls}" but its paired tabpanel has id ` +
          `"${tabpanel.id}". Align the ids or remove the attribute to let the component wire ` +
          `the pair.`
      );
      const labelledby = tabpanel.getAttribute('aria-labelledby');
      this.#warnOnce(
        labelledby !== tab.id,
        `tabpanel "${tabpanel.id}" has aria-labelledby="${labelledby}" but its paired tab has ` +
          `id "${tab.id}". Align the ids or remove the attribute to let the component wire ` +
          `the pair.`
      );
    }
  }

  /**
   * @param {boolean} condition
   * @param {string} message
   */
  #warnOnce(condition, message) {
    if (!condition || this.#warnedMismatches.has(message)) {
      return;
    }
    this.#warnedMismatches.add(message);
    this.#logger.step(
      'DECISIÓN',
      'SelectionController.#warnOnce()',
      'console.warn()',
      'La relación ARIA escrita por el autor no cierra el par. Se respeta el valor y se avisa una sola vez.',
      {
        warning: message,
      }
    );
    console.warn(`[blockquote-tabs] ${message}`);
  }
}
