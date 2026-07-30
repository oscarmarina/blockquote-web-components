import {html, LitElement, nothing} from 'lit';
import {ref, createRef} from 'lit/directives/ref.js';
import {BlockquoteMixinSlotContent} from '@blockquote-web-components/blockquote-mixin-slot-content';
import {SelectionController} from './controllers/SelectionController.js';
import {FocusGroupController} from './controllers/FocusGroupController.js';
import {ScrollController} from './controllers/ScrollController.js';
import {InteractionLogger, describeInteractionElement} from './controllers/InteractionLogger.js';
import {styles} from './styles/blockquote-tabs-styles.css.js';

// https://gist.github.com/ebidel/2d2bb0cdec3f2a16cf519dbaa791ce1b
// https://darn.es/building-tabs-in-web-components/
// https://slides.com/daviddarnes/tabs-web-components

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * [ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
 *
 * Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/components/blockquote-tabs)
 *
 * ### Usage
 *
 * ```html
 * <blockquote-tabs label="List of tabs">
 *   <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
 *   <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
 *   <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
 *   <blockquote-tab id="tab-4">Tab 4</blockquote-tab>
 *   <blockquote-tab id="tab-5">Tab 5</blockquote-tab>
 *   <blockquote-tab id="tab-6">Tab 6</blockquote-tab>
 *   <blockquote-tab id="tab-7">Tab 7</blockquote-tab>
 *   <blockquote-tab id="tab-8">Tab 8</blockquote-tab>
 *   <blockquote-tab id="tab-9">Tab 9</blockquote-tab>
 *   <blockquote-tab id="tab-10">Tab 10</blockquote-tab>
 *   <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
 *   <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
 *   <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
 *   <blockquote-tabpanel aria-labelledby="tab-4"><p>Panel 4</p></blockquote-tabpanel>
 *   <blockquote-tabpanel aria-labelledby="tab-5"><p>Panel 5</p></blockquote-tabpanel>
 *   <blockquote-tabpanel aria-labelledby="tab-6"><p>Panel 6</p></blockquote-tabpanel>
 *   <blockquote-tabpanel aria-labelledby="tab-7"><p>Panel 7</p></blockquote-tabpanel>
 *   <blockquote-tabpanel aria-labelledby="tab-8"><p>Panel 8</p></blockquote-tabpanel>
 *   <blockquote-tabpanel aria-labelledby="tab-9"><p>Panel 9</p></blockquote-tabpanel>
 *   <blockquote-tabpanel aria-labelledby="tab-10"><p>Panel 10</p></blockquote-tabpanel>
 * </blockquote-tabs>
 * ```
 *
 * @attribute autofocus
 * @attribute label
 * @attribute selected
 * @attribute activation
 * @attribute orientation
 * @fires selectedchange
 */
export class BlockquoteTabs extends BlockquoteMixinSlotContent(LitElement) {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      /**
       * If present, the selected tab is focused on boot. Alternatively, set the
       * native `autofocus` attribute on the desired `<blockquote-tab>` (takes
       * precedence): the component delegates it in JS because native support is
       * unreliable across browsers today (see focusgroup redesign notes).
       */
      autofocus: {
        type: Boolean,
      },

      /**
       * `aria-label` for tabs group
       */
      label: {
        type: String,
      },

      /**
       * The tab selected.
       */
      selected: {
        type: Number,
        reflect: true,
      },

      /**
       * Activation mode:
       * - `auto` (default): selection follows focus (arrow keys select).
       * - `manual`: arrow keys only move focus; Enter, Space or click select.
       */
      activation: {
        type: String,
      },

      /**
       * Orientation of the tablist: `horizontal` (default) or `vertical`.
       * Determines the arrow-key axis, `aria-orientation`, and the scroll
       * axis (scroll indicators, reveal-on-focus, separator).
       */
      orientation: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    /* initial state */
    this.autofocus = false;
    this.label = '';
    this.selected = 1;
    this.activation = 'auto';
    this.orientation = 'horizontal';

    this._tabList = [];
    this._tabpanelList = [];

    this._scrollContentRef = createRef();
    this._tablistRef = createRef();

    this._interaction = new InteractionLogger(this, () => ({
      activation: this.activation,
      orientation: this.orientation,
      selectedSolicitado: this.selected,
      selectedConfirmado:
        this._selection?.length > 0 ? this._selection.selectedIndexFromOne : 'sin tabs todavía',
      focoDOM: describeInteractionElement(
        document.activeElement,
        /** @type {HTMLElement[]} */ (this._tabList)
      ),
    }));

    this._selection = new SelectionController(this, {
      logger: this._interaction,
    });

    this._focusGroup = new FocusGroupController(this, {
      getItems: () => this._tabList,
      getSelectedIndex: () => this._selection.selectedIndex,
      getOrientation: () => (this.orientation === 'vertical' ? 'vertical' : 'horizontal'),
      getActivation: () => (this.activation === 'manual' ? 'manual' : 'auto'),
      onSelect: (index) => {
        const requested = index + 1;
        const previous = this.selected;
        this._interaction.step(
          'SELECCIÓN',
          'FocusGroupController',
          'BlockquoteTabs.onSelect()',
          `Se solicita selected=${requested} (API pública 1-based). Asignar la propiedad solo ` +
            `agenda el update de Lit; todavía no cambia aria-selected ni el panel visible.`,
          {
            selectedAntesDeAsignar: previous,
            selectedSolicitado: requested,
            agendaUpdateLit: previous !== requested,
          }
        );
        if (previous !== requested) {
          this._interaction.expectSelection(requested);
        }
        this.selected = requested;
      },
      onReveal: (tab) => {
        this._interaction.step(
          'SCROLL',
          'FocusGroupController',
          'BlockquoteTabs.onReveal()',
          'El tab que acaba de recibir foco se delega al ScrollController para asegurar que sea visible.',
          {
            tab: describeInteractionElement(tab, this._tabList),
          }
        );
        this._scroll.scrollIntoView(tab);
      },
      logger: this._interaction,
    });

    this._scroll = new ScrollController(this, {
      getScrollContent: () => this._scrollContentRef.value,
      getIndicators: () => this._indicators,
      getSelectedTab: () => this._selectedTab,
      getOrientation: () => (this.orientation === 'vertical' ? 'vertical' : 'horizontal'),
      logger: this._interaction,
    });

    this.addEventListener('slotchanges', /** @type {EventListener} */ (this._onSlotChanges));
    this._interaction.step(
      'CICLO',
      'BlockquoteTabs.constructor()',
      'SelectionController + FocusGroupController + ScrollController',
      'Controladores construidos. El motor de foco ya está elegido, pero se conectará al tablist después del primer render.'
    );
  }

  get _selectedTab() {
    return this._selection.selectedTab;
  }

  /**
   * @param {Map<PropertyKey, unknown>} props
   */
  firstUpdated(props) {
    super.firstUpdated && super.firstUpdated(props);
    this._interaction.step(
      'CICLO',
      'LitElement.firstUpdated()',
      'BlockquoteTabs.firstUpdated()',
      'Primer render terminado: ahora existen el tablist, los slots y el contenedor de scroll.'
    );
    const tabSlot = this.shadowRoot?.querySelector('[name="tab"]');
    const tabpanelSlot = this.shadowRoot?.querySelector('[name="tabpanel"]');

    this._tabList = /** @type {HTMLSlotElement} */ (tabSlot)?.assignedElements();
    this._tabpanelList = /** @type {HTMLSlotElement} */ (tabpanelSlot)?.assignedElements();
    this._indicators = this.shadowRoot?.querySelectorAll('.indicator');
    this._interaction.step(
      'CICLO',
      'BlockquoteTabs.firstUpdated()',
      'SelectionController.setItems()',
      'Los elementos asignados a ambos slots se entregan al controlador de selección para parearlos y aplicar su estado.',
      {
        tabsEncontrados: this._tabList.length,
        tabpanelsEncontrados: this._tabpanelList.length,
      }
    );
    this._selection.setItems(this._tabList, this._tabpanelList);
    this._interaction.step(
      'CICLO',
      'BlockquoteTabs.firstUpdated()',
      'FocusGroupController.attach()',
      'Se conectan los listeners de interacción al tablist y se establece el punto de entrada de foco.'
    );
    this._focusGroup.attach(this._tablistRef.value);

    // Boot focus: a tab-level `autofocus` attribute (delegated in JS, since
    // native global autofocus is unreliable across browsers today) takes
    // precedence over the host-level `autofocus` property.
    const bootTab =
      this._tabList.find((tab) => tab.hasAttribute('autofocus')) ??
      (this.autofocus ? this._focusGroup.entryItem : undefined);
    if (bootTab) {
      this._interaction.step(
        'FOCO',
        'BlockquoteTabs.firstUpdated()',
        'window.requestAnimationFrame()',
        'Autofocus detectado. El focus se aplaza al siguiente frame; selected aún no se modifica.',
        {
          tabAutofocus: describeInteractionElement(bootTab, this._tabList),
          origen:
            this._tabList.find((tab) => tab.hasAttribute('autofocus')) === bootTab
              ? 'atributo autofocus del tab (tiene prioridad)'
              : 'propiedad autofocus del host',
        }
      );
      window.requestAnimationFrame(() => {
        this._interaction.begin(
          'autofocus',
          'El callback de requestAnimationFrame ejecuta el autofocus delegado.'
        );
        this._interaction.step(
          'FOCO',
          'window.requestAnimationFrame()',
          'HTMLElement.focus()',
          'FOCO PRIMERO: focus() cambiará document.activeElement y disparará focusin de forma síncrona; en modo auto, ese focusin solicitará selected después.',
          {
            tabDestino: describeInteractionElement(bootTab, this._tabList),
          }
        );
        bootTab.focus();
      });
    } else {
      this._interaction.step(
        'DECISIÓN',
        'BlockquoteTabs.firstUpdated()',
        'autofocus',
        'No hay autofocus en el host ni en ningún tab: el componente no mueve el foco durante el arranque.'
      );
    }
  }

  /**
   * @param {Map<PropertyKey, unknown>} props
   */
  updated(props) {
    super.updated && super.updated(props);
    // Before the `selected` branch: its clamping early-return must not skip
    // the orientation sync (the native engine's focusgroup token encodes the
    // axis; the fallback treats this as a no-op).
    if (props.has('orientation')) {
      this._interaction.step(
        'CICLO',
        'LitElement.updated()',
        'FocusGroupController.syncOrientation()',
        'La orientación cambió: el motor nativo debe reescribir su token; el fallback lee el eje en vivo.',
        {
          orientationAnterior: props.get('orientation'),
          orientationActual: this.orientation,
        }
      );
      this._focusGroup.syncOrientation();
    }
    if (props.has('selected')) {
      this._interaction.selectionUpdate(
        /** @type {number | undefined} */ (props.get('selected')),
        this.selected
      );
      this._interaction.step(
        'SELECCIÓN',
        'LitElement.updated()',
        'SelectionController.commit()',
        'Lit entra en la microtarea de commit. AHORA se valida el índice y se preparan los estados selected de tabs y paneles; este pipeline nunca llama a focus().',
        {
          selectedAnterior: props.get('selected'),
          selectedSolicitado: this.selected,
          mueveFoco: false,
        }
      );
      const committed = this._selection.commit(this.selected);
      if (committed !== this.selected) {
        // Correct the reflected value; the commit happens on the next update.
        this._interaction.step(
          'SELECCIÓN',
          'SelectionController.commit()',
          'BlockquoteTabs.selected (write-back)',
          `El valor estaba fuera de rango: se corrige a ${committed}. No se aplica un estado parcial; Lit ejecutará otro updated() para confirmar el valor corregido.`,
          {
            valorRechazado: this.selected,
            valorCorregido: committed,
          }
        );
        this._interaction.expectSelectionCorrection(committed);
        this.selected = committed;
        return;
      }

      this._interaction.step(
        'SELECCIÓN',
        'SelectionController.commit()',
        'BlockquoteTabs._onSelectionCommit()',
        'Selección confirmada en memoria. A continuación se mueve el punto de entrada del grupo al tab seleccionado y se solicita su revelado visual; el foco DOM permanece donde estaba.'
      );
      this._onSelectionCommit();

      /**
       * Fired when selected changes
       * @event selectedchange
       */
      const event = new CustomEvent('selectedchange', {
        bubbles: true,
        detail: {
          selected: this._selection.selectedIndexFromOne,
          tab: this._selection.selectedTab,
          tabpanel: this._selection.selectedTabpanel,
        },
      });
      this._interaction.step(
        'EVENTO',
        'BlockquoteTabs.updated()',
        'EventTarget.dispatchEvent(selectedchange)',
        'El host publica el commit con selectedchange. Las propiedades selected de los hijos ya están asignadas, pero sus updated() de Lit pueden ejecutarse justo después para reflejar ARIA/hidden.',
        {
          bubbles: event.bubbles,
          composed: event.composed,
          detailSelected: event.detail.selected,
          tab: describeInteractionElement(event.detail.tab, this._tabList),
          tabpanel: describeInteractionElement(event.detail.tabpanel),
        }
      );
      this.dispatchEvent(event);
      this._interaction.selectionCommitted();
    }
  }

  /**
   * @param {CustomEvent} ev
   */
  _onSlotChanges = (ev) => {
    this._interaction.event(
      ev,
      'slotchanges',
      'BlockquoteTabs._onSlotChanges()',
      'El mixin de slots notifica una nueva lista de elementos asignados.'
    );
    ev.stopPropagation();
    ev.preventDefault();

    const {detail} = ev;
    const assignedNodesList = detail.assignedNodesContent.assignedNodes;

    if (detail.assignedSlotContent.slotName === 'tab') {
      this._tabList = assignedNodesList;
    }
    if (detail.assignedSlotContent.slotName === 'tabpanel') {
      this._tabpanelList = assignedNodesList;
    }

    this._interaction.step(
      'CICLO',
      'BlockquoteTabs._onSlotChanges()',
      'SelectionController.setItems()',
      'Se vuelven a registrar tabs y paneles; la selección actual se clampea si el nuevo tamaño la deja fuera de rango.',
      {
        slot: detail.assignedSlotContent.slotName,
        tabs: this._tabList.length,
        tabpanels: this._tabpanelList.length,
      }
    );
    this._selection.setItems(this._tabList, this._tabpanelList);
    this._interaction.step(
      'FOCO',
      'BlockquoteTabs._onSlotChanges()',
      'FocusGroupController.syncEntryPoint()',
      'Se resincroniza el único punto de entrada de teclado con el tab seleccionado; no se llama a focus().'
    );
    this._focusGroup.syncEntryPoint();
  };

  get _scrollContentTpl() {
    return html`
      <div class="scroll-content" ${ref(this._scrollContentRef)} @scroll="${this._scrollEdge}">
        ${this._tablistTpl}
      </div>
    `;
  }

  get _tablistTpl() {
    return html`
      <div
        role="tablist"
        ${ref(this._tablistRef)}
        aria-label="${this.label || nothing}"
        aria-orientation="${this.orientation === 'vertical' ? 'vertical' : nothing}">
        <slot name="tab"></slot>
      </div>
    `;
  }

  get _separatorTpl() {
    return html`
      <span aria-hidden="true" class="separator"></span>
    `;
  }

  get _indicatorsTpl() {
    return html`
      <span
        aria-hidden="true"
        class="indicator ${this._scroll?.hasScrollLeftIndicator ? 'show-indicator' : ''}"></span>
      <span
        aria-hidden="true"
        class="indicator ${this._scroll?.hasScrollRightIndicator ? 'show-indicator' : ''}"></span>
    `;
  }

  get _holdTpl() {
    return html`
      <div class="hold">${this._scrollContentTpl} ${this._separatorTpl} ${this._indicatorsTpl}</div>
    `;
  }

  get _tabpanelTpl() {
    return html`
      <div>
        <slot name="tabpanel"></slot>
      </div>
    `;
  }

  render() {
    return html`
      ${this._holdTpl} ${this._tabpanelTpl}
    `;
  }

  /**
   * @param {CustomEvent} ev
   */
  _scrollEdge(ev) {
    this._interaction.event(
      ev,
      'scroll',
      'BlockquoteTabs._scrollEdge()',
      'El usuario o una operación programática desplazó la tira de tabs; se recalculan los indicadores.'
    );
    this._scroll.scrollEdge(ev?.target instanceof HTMLElement ? ev.target : undefined);
  }

  _onSelectionCommit() {
    this._interaction.step(
      'FOCO',
      'BlockquoteTabs._onSelectionCommit()',
      'FocusGroupController.syncEntryPoint()',
      'Se cambia el TAB STOP de reentrada al tab seleccionado (tabindex o focusgroupstart). Esto NO cambia document.activeElement.'
    );
    this._focusGroup.syncEntryPoint();
    this._interaction.step(
      'SCROLL',
      'BlockquoteTabs._onSelectionCommit()',
      'ScrollController.scrollIntoView()',
      'Se agenda el revelado del tab seleccionado para el siguiente frame.'
    );
    this._scroll.scrollIntoView();
  }
}
