import {RovingTabindexEngine} from './RovingTabindexEngine.js';
import {NativeFocusgroupEngine} from './NativeFocusgroupEngine.js';
import {supportsFocusgroup} from './focusgroup-capability.js';
import {describeInteractionElement} from './InteractionLogger.js';

/**
 * Finds the managed item in an event's composed path.
 *
 * @param {Event} ev
 * @param {HTMLElement[]} items
 */
const eventItem = (ev, items) => ev.composedPath().find((node) => items.includes(node));

/**
 * Checks if a tab item is disabled.
 *
 * @param {HTMLElement} item
 */
const isItemDisabled = (item) =>
  item.hasAttribute('disabled') ||
  item.getAttribute('aria-disabled') === 'true' ||
  Boolean(/** @type {any} */ (item).disabled);

/**
 * `FocusGroupController`
 *
 * Orchestrates the focus-driven interaction of a composite widget, following
 * the Open UI `focusgroup` model where focus movement and selection are
 * decoupled:
 *
 * - Entry-point management is delegated to an engine (the roving-tabindex
 *   fallback engine today; the native `focusgroup` attribute in Phase 3).
 * - Commit triggers: `focusin` (auto activation), and click / Enter / Space
 *   (both activation modes). Directional navigation only moves DOM focus.
 * - Focus is placed exclusively inside user-interaction handlers. The commit
 *   pipeline (`selected` -> SelectionController) NEVER moves focus, which
 *   makes programmatic selection changes focus-safe by construction
 *   (structural event-origin tracking; no focus latch anywhere).
 *
 * @implements {ReactiveController}
 */
export class FocusGroupController {
  #container = null;

  #engine;

  /** @type {() => HTMLElement[]} */
  #getItems;

  /** @type {() => number} */
  #getSelectedIndex;

  /** @type {() => 'auto' | 'manual'} */
  #getActivation;

  /** @type {(index: number) => void} */
  #onSelect;

  /** @type {(item: HTMLElement) => void} */
  #onReveal;

  #logger;

  /**
   * @param {ReactiveControllerHost} host
   * @param {Object} options
   * @param {() => HTMLElement[]} options.getItems
   * @param {() => number} options.getSelectedIndex 0-based selected index
   * @param {() => 'horizontal' | 'vertical'} options.getOrientation
   * @param {() => 'auto' | 'manual'} options.getActivation
   * @param {(index: number) => void} options.onSelect requests a selection commit (0-based)
   * @param {(item: HTMLElement) => void} options.onReveal reveals an item (scroll into view)
   * @param {import('./InteractionLogger.js').InteractionLogger} options.logger
   */
  constructor(
    host,
    {getItems, getSelectedIndex, getOrientation, getActivation, onSelect, onReveal, logger}
  ) {
    this.host = host;
    this.#getItems = getItems;
    this.#getSelectedIndex = getSelectedIndex;
    this.#getActivation = getActivation;
    this.#onSelect = onSelect;
    this.#onReveal = onReveal;
    this.#logger = logger;
    const nativeFocusgroup = supportsFocusgroup();
    const engineOptions = {getItems, getOrientation, logger};
    this.#engine = nativeFocusgroup
      ? new NativeFocusgroupEngine(engineOptions)
      : new RovingTabindexEngine(engineOptions);
    this.#logger.step(
      'CICLO',
      'FocusGroupController.constructor()',
      this.#engine.constructor.name,
      nativeFocusgroup
        ? 'El navegador declara soporte nativo: las flechas moverán foco dentro del navegador; JavaScript observará focusin para seleccionar.'
        : 'No hay focusgroup nativo: RovingTabindexEngine gestionará flechas/Home/End y llamará a focus(); FocusGroupController seleccionará al observar focusin.',
      {
        motor: this.#engine.constructor.name,
        separacionClave: 'el motor mueve FOCO; FocusGroupController solicita SELECCIÓN',
      }
    );
    host.addController(this);
  }

  get entryItem() {
    return this.#getItems()[this.#getSelectedIndex()];
  }

  hostConnected() {
    // Re-attach after a disconnect/reconnect cycle (shadow DOM persists).
    const container = this.host.shadowRoot?.querySelector('[role="tablist"]');
    if (container) {
      this.#logger.step(
        'CICLO',
        'FocusGroupController.hostConnected()',
        'FocusGroupController.attach()',
        'El host se reconectó y su shadow DOM conserva el tablist: se restauran listeners y motor.'
      );
      this.attach(container);
    }
  }

  hostDisconnected() {
    this.#logger.step(
      'CICLO',
      'FocusGroupController.hostDisconnected()',
      'EventTarget.removeEventListener() + engine.detach()',
      'El host se desconectó: se retiran listeners y estado del motor para no observar interacciones huérfanas.'
    );
    this.#container?.removeEventListener('pointerdown', this.#onPointerDown);
    this.#container?.removeEventListener('keydown', this.#onActivationKeyDown);
    this.#container?.removeEventListener('click', this.#onClick);
    this.#container?.removeEventListener('focusout', this.#onFocusOut);
    this.#container?.removeEventListener('focusin', this.#onFocusIn);
    this.#container = null;
    this.#engine.detach();
  }

  /**
   * @param {HTMLElement} container the tablist container in the host's shadow DOM
   */
  attach(container) {
    if (!container || this.#container === container) {
      return;
    }
    this.#container = container;
    container.addEventListener('pointerdown', this.#onPointerDown);
    container.addEventListener('keydown', this.#onActivationKeyDown);
    container.addEventListener('click', this.#onClick);
    container.addEventListener('focusout', this.#onFocusOut);
    container.addEventListener('focusin', this.#onFocusIn);
    this.#logger.step(
      'CICLO',
      'FocusGroupController.attach()',
      'EventTarget.addEventListener()',
      'Listeners conectados en el tablist: pointerdown inicia la historia; keydown/click activan; focusout/focusin cuentan el cambio real de foco.',
      {
        listeners: ['pointerdown', 'keydown', 'click', 'focusout', 'focusin'],
      }
    );
    this.#engine.attach(container);
    this.syncEntryPoint();
  }

  /**
   * Pushes an `orientation` change to the engine. The native engine encodes
   * the axis in the `focusgroup` token and must be synced explicitly; the
   * fallback reads orientation live and treats this as a no-op.
   */
  syncOrientation() {
    this.#logger.step(
      'CICLO',
      'FocusGroupController.syncOrientation()',
      `${this.#engine.constructor.name}.syncOrientation()`,
      'El controlador delega la orientación sin mezclarla con selección ni foco.'
    );
    this.#engine.syncOrientation();
  }

  /**
   * Moves the group's entry point to the currently selected item. Idempotent;
   * call on every selection commit and whenever the slotted items change.
   */
  syncEntryPoint() {
    const entryItem = this.entryItem;
    this.#logger.step(
      'FOCO',
      'FocusGroupController.syncEntryPoint()',
      `${this.#engine.constructor.name}.setEntryItem()`,
      'Se actualiza qué tab recibirá foco al entrar con Tab. Es bookkeeping del grupo, no un movimiento de foco.',
      {
        entryItem: describeInteractionElement(entryItem, this.#getItems()),
        llamaAFocus: false,
      }
    );
    this.#engine.setEntryItem(entryItem);
  }

  #onPointerDown = (ev) => {
    const item = eventItem(ev, this.#getItems());
    this.#logger.event(
      ev,
      'pointerdown',
      'FocusGroupController.#onPointerDown()',
      'Comienza una interacción de puntero. Aún no se llama a focus() ni se solicita selected; el navegador puede enfocar antes de emitir click.',
      {
        tabObjetivo: describeInteractionElement(item, this.#getItems()),
      }
    );
  };

  #onFocusOut = (ev) => {
    const item = eventItem(ev, this.#getItems());
    const relatedTarget =
      ev instanceof FocusEvent && ev.relatedTarget instanceof Element ? ev.relatedTarget : null;
    this.#logger.event(
      ev,
      'focusout',
      'FocusGroupController.#onFocusOut()',
      'El foco abandona este tab. focusout informa el origen antes de que focusin confirme el destino; no modifica selected.',
      {
        tabQuePierdeFoco: describeInteractionElement(item, this.#getItems()),
        destinoRelacionado: describeInteractionElement(relatedTarget, this.#getItems()),
        selectedSeModifica: false,
      }
    );
  };

  #onFocusIn = (ev) => {
    const items = this.#getItems();
    const item = eventItem(ev, items);
    this.#logger.event(
      ev,
      'focusin',
      'FocusGroupController.#onFocusIn()',
      'FOCO YA CAMBIÓ: el navegador terminó focus() y focusin llega de forma síncrona. Ahora se decide si ese foco debe arrastrar la selección.',
      {
        tabConFoco: describeInteractionElement(item, items),
        activation: this.#getActivation(),
      }
    );
    if (!item) {
      this.#logger.step(
        'DECISIÓN',
        'FocusGroupController.#onFocusIn()',
        'return',
        'El composedPath no contiene un tab gestionado: el evento no afecta a este grupo.'
      );
      return;
    }
    if (isItemDisabled(item)) {
      this.#logger.step(
        'DECISIÓN',
        'FocusGroupController.#onFocusIn()',
        'return',
        'El tab está disabled/aria-disabled. Puede conservar el foco, pero la selección queda bloqueada.',
        {
          tab: describeInteractionElement(item, items),
          selectedSeModifica: false,
        }
      );
      return;
    }
    this.#logger.step(
      'SCROLL',
      'FocusGroupController.#onFocusIn()',
      'BlockquoteTabs.onReveal()',
      'Primero se solicita que el tab enfocado quede visible.'
    );
    this.#onReveal(item);
    if (this.#getActivation() === 'auto') {
      const index = items.indexOf(item);
      this.#logger.step(
        'SELECCIÓN',
        'FocusGroupController.#onFocusIn()',
        'BlockquoteTabs.onSelect()',
        'Modo auto: DESPUÉS DEL FOCO, focusin solicita que selected siga al tab enfocado.',
        {
          indiceInterno0Based: index,
          selectedPublico1Based: index + 1,
        }
      );
      this.#onSelect(index);
    } else {
      this.#logger.step(
        'DECISIÓN',
        'FocusGroupController.#onFocusIn()',
        'return',
        'Modo manual: focusin termina sin seleccionar. Foco y selected permanecen desacoplados hasta Enter, Space o click.',
        {
          selectedSeModifica: false,
        }
      );
    }
  };

  #onClick = (ev) => {
    const items = this.#getItems();
    const item = eventItem(ev, items);
    this.#logger.event(
      ev,
      'click',
      'FocusGroupController.#onClick()',
      'El click llega después de pointerdown y, en un click real, normalmente después del foco nativo. El handler garantiza foco antes de confirmar selección.',
      {
        tabObjetivo: describeInteractionElement(item, items),
      }
    );
    if (!item) {
      this.#logger.step(
        'DECISIÓN',
        'FocusGroupController.#onClick()',
        'return',
        'El click no pertenece a un tab gestionado.'
      );
      return;
    }
    if (isItemDisabled(item)) {
      ev.preventDefault();
      this.#logger.step(
        'DECISIÓN',
        'FocusGroupController.#onClick()',
        'Event.preventDefault() + return',
        'Click bloqueado: el tab está deshabilitado, así que no se enfoca por script ni se selecciona.',
        {
          tab: describeInteractionElement(item, items),
          defaultPrevented: ev.defaultPrevented,
        }
      );
      return;
    }
    this.#logger.step(
      'FOCO',
      'FocusGroupController.#onClick()',
      'HTMLElement.focus()',
      'ORDEN EXPLÍCITO DEL CLICK: se llama a focus() antes de evaluar/solicitar selected. Si el tab aún no tenía foco, focusout y focusin se ejecutarán anidados antes de que focus() retorne.',
      {
        tabDestino: describeInteractionElement(item, items),
      }
    );
    item.focus();
    const index = items.indexOf(item);
    this.#logger.step(
      'FOCO',
      'HTMLElement.focus()',
      'FocusGroupController.#onClick()',
      'focus() retornó: document.activeElement ya apunta al destino. En modo auto, el focusin anidado ya pudo solicitar selected; el commit de Lit sigue pendiente.',
      {
        tabConFoco: describeInteractionElement(document.activeElement, items),
      }
    );
    if (index === this.#getSelectedIndex()) {
      this.#logger.step(
        'DECISIÓN',
        'FocusGroupController.#onClick()',
        'BlockquoteTabs.onReveal() + return',
        'El tab ya era la selección confirmada: no se agenda otro selected; solo se asegura su visibilidad.',
        {
          indiceConfirmado0Based: this.#getSelectedIndex(),
        }
      );
      this.#onReveal(item);
      return;
    }
    this.#logger.step(
      'SELECCIÓN',
      'FocusGroupController.#onClick()',
      'BlockquoteTabs.onSelect()',
      'Con el foco ya resuelto, click solicita la selección del tab (tanto en auto como en manual).',
      {
        indiceInterno0Based: index,
        selectedPublico1Based: index + 1,
      }
    );
    this.#onSelect(index);
  };

  #onActivationKeyDown = (ev) => {
    const items = this.#getItems();
    const item = eventItem(ev, items);
    this.#logger.event(
      ev,
      'keydown',
      'FocusGroupController.#onActivationKeyDown()',
      'Primer listener de teclado: decide si la tecla activa selected (Enter/Space) o si debe continuar hacia el motor de navegación.',
      {
        tabOrigen: describeInteractionElement(item, items),
      }
    );
    if (ev.key !== 'Enter' && ev.key !== ' ') {
      this.#logger.step(
        'DECISIÓN',
        'FocusGroupController.#onActivationKeyDown()',
        `${this.#engine.constructor.name} / navegador`,
        'No es Enter ni Space: este controlador no selecciona. Flechas/Home/End continúan hacia el motor de foco; otras teclas quedan libres.',
        {
          tecla: ev.key,
          selectedSeModificaAqui: false,
        }
      );
      return;
    }
    if (!item) {
      this.#logger.step(
        'DECISIÓN',
        'FocusGroupController.#onActivationKeyDown()',
        'return',
        'La tecla de activación no se originó en un tab gestionado.'
      );
      return;
    }
    if (isItemDisabled(item)) {
      this.#logger.step(
        'DECISIÓN',
        'FocusGroupController.#onActivationKeyDown()',
        'return',
        'El tab enfocado está deshabilitado: Enter/Space no modifican selected.',
        {
          tab: describeInteractionElement(item, items),
        }
      );
      return;
    }
    ev.preventDefault();
    const index = items.indexOf(item);
    this.#logger.step(
      'SELECCIÓN',
      'FocusGroupController.#onActivationKeyDown()',
      'Event.preventDefault() + BlockquoteTabs.onSelect()',
      'El foco ya estaba en este tab antes del keydown. Se cancela la acción nativa (Space no desplazará la página) y se solicita selected sin mover foco.',
      {
        tecla: ev.key === ' ' ? 'Space' : ev.key,
        tabEnfocado: describeInteractionElement(item, items),
        selectedPublico1Based: index + 1,
        defaultPrevented: ev.defaultPrevented,
      }
    );
    this.#onSelect(index);
  };
}
