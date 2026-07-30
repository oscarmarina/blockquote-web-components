/**
 * `RovingTabindexEngine`
 *
 * Fallback focus engine for composite widgets. It replicates the semantics of
 * the Open UI `focusgroup` proposal until browsers ship it natively:
 *
 * - Directional navigation (arrow keys) restricted to the widget's axis and
 *   resolved in logical direction (`direction`-aware: RTL swaps the arrow
 *   mapping; `writing-mode` is NOT consulted), wrapping around at both ends.
 * - `Home` / `End` move focus to the first / last item.
 * - Roving tabindex entry point: the entry item is the only tab stop of the
 *   group; every other item gets `tabindex="-1"`.
 *
 * The engine ONLY moves DOM focus. Selection is committed elsewhere
 * (focusin / click / activation handlers), mirroring the native model where
 * focus and selection are decoupled. Cross-axis keys are never handled nor
 * canceled, so they remain available for scrolling or supplementary actions.
 */
import {describeInteractionElement} from './InteractionLogger.js';

export class RovingTabindexEngine {
  #container = null;

  /** @type {() => HTMLElement[]} */
  #getItems;

  /** @type {() => 'horizontal' | 'vertical'} */
  #getOrientation;

  #logger;

  /**
   * @param {Object} options
   * @param {() => HTMLElement[]} options.getItems
   * @param {() => 'horizontal' | 'vertical'} options.getOrientation
   * @param {import('./InteractionLogger.js').InteractionLogger} options.logger
   */
  constructor({getItems, getOrientation, logger}) {
    this.#getItems = getItems;
    this.#getOrientation = getOrientation;
    this.#logger = logger;
  }

  /**
   * @param {HTMLElement} container
   */
  attach(container) {
    if (!container || this.#container === container) {
      return;
    }
    this.#container = container;
    container.addEventListener('keydown', this.#onKeyDown);
    this.#logger.step(
      'CICLO',
      'RovingTabindexEngine.attach()',
      'EventTarget.addEventListener(keydown)',
      'Motor fallback conectado después del listener de activación. Para cada keydown, activación decide primero y navegación de foco decide después.'
    );
  }

  detach() {
    this.#logger.step(
      'CICLO',
      'RovingTabindexEngine.detach()',
      'EventTarget.removeEventListener(keydown)',
      'Se desconecta el motor fallback de navegación.'
    );
    this.#container?.removeEventListener('keydown', this.#onKeyDown);
    this.#container = null;
  }

  /**
   * No-op: the fallback resolves orientation live on every keydown, so there
   * is no orientation-dependent state to push. It exists to keep the engine
   * interface symmetric with `NativeFocusgroupEngine`.
   */
  syncOrientation() {
    this.#logger.step(
      'DECISIÓN',
      'RovingTabindexEngine.syncOrientation()',
      'no-op',
      'No se guarda ningún eje: #nextIndex() leerá orientation en vivo en el próximo keydown.'
    );
  }

  /**
   * Roving tabindex: `entryItem` becomes the only tab stop of the group.
   * Idempotent; safe to call on every selection commit or slot change.
   *
   * @param {HTMLElement | undefined} entryItem
   */
  setEntryItem(entryItem) {
    if (!entryItem) {
      this.#logger.step(
        'DECISIÓN',
        'RovingTabindexEngine.setEntryItem()',
        'return',
        'No existe tab seleccionado; no hay tabindex que sincronizar.'
      );
      return;
    }
    const items = this.#getItems();
    this.#logger.step(
      'FOCO',
      'RovingTabindexEngine.setEntryItem()',
      'HTMLElement.setAttribute(tabindex)',
      'Roving tabindex: el tab seleccionado será el único tabindex="0"; el resto pasa a -1. Esto define la reentrada con Tab, pero NO enfoca.',
      {
        entryItem: describeInteractionElement(entryItem, items),
        llamaAFocus: false,
      }
    );
    items.forEach((item) => {
      const tabIndex = item === entryItem ? '0' : '-1';
      item.setAttribute('tabindex', tabIndex);
    });
  }

  /**
   * Resolves the index targeted by a navigation key, in logical direction.
   * Returns `null` for keys the engine does not handle.
   *
   * @param {number} currentIndex
   * @param {string} key
   */
  #nextIndex(currentIndex, key) {
    const horizontal = this.#getOrientation() !== 'vertical';
    const rtl = this.#container !== null && getComputedStyle(this.#container).direction === 'rtl';

    const forward = horizontal ? (rtl ? 'ArrowLeft' : 'ArrowRight') : 'ArrowDown';
    const backward = horizontal ? (rtl ? 'ArrowRight' : 'ArrowLeft') : 'ArrowUp';

    if (key === forward) {
      return currentIndex + 1;
    }
    if (key === backward) {
      return currentIndex - 1;
    }
    if (key === 'Home') {
      return 0;
    }
    if (key === 'End') {
      return this.#getItems().length - 1;
    }
    return null;
  }

  #onKeyDown = (ev) => {
    const items = this.#getItems();
    this.#logger.event(
      ev,
      'keydown',
      'RovingTabindexEngine.#onKeyDown()',
      'Segundo listener de teclado: el motor fallback solo decidirá movimiento de FOCO; jamás escribe selected.',
      {
        orientation: this.#getOrientation(),
        tabsGestionados: items.length,
      }
    );
    if (items.length === 0) {
      this.#logger.step(
        'DECISIÓN',
        'RovingTabindexEngine.#onKeyDown()',
        'return',
        'No hay tabs gestionados; la tecla queda intacta.'
      );
      return;
    }
    const item = ev.composedPath().find((node) => items.includes(node));
    if (!item) {
      this.#logger.step(
        'DECISIÓN',
        'RovingTabindexEngine.#onKeyDown()',
        'return',
        'El origen del evento no es un tab de este grupo.'
      );
      return;
    }

    const currentIndex = items.indexOf(item);
    const horizontal = this.#getOrientation() !== 'vertical';
    const rtl = this.#container !== null && getComputedStyle(this.#container).direction === 'rtl';
    this.#logger.step(
      'DECISIÓN',
      'RovingTabindexEngine.#onKeyDown()',
      'RovingTabindexEngine.#nextIndex()',
      'Se traduce la tecla a un índice lógico según eje y dirección. Home/End son absolutos; las flechas del eje cruzado no se consumen.',
      {
        tecla: ev.key,
        indiceActual0Based: currentIndex,
        orientation: horizontal ? 'horizontal' : 'vertical',
        direction: rtl ? 'rtl' : 'ltr',
      }
    );
    const next = this.#nextIndex(currentIndex, ev.key);
    if (next === null) {
      this.#logger.step(
        'DECISIÓN',
        'RovingTabindexEngine.#nextIndex()',
        'return',
        'La tecla no pertenece al eje de navegación. No se cancela y no cambian foco ni selected.',
        {
          tecla: ev.key,
          defaultPrevented: ev.defaultPrevented,
        }
      );
      return;
    }

    const targetIndex = (next + items.length) % items.length;
    const target = items[targetIndex];
    this.#logger.step(
      'FOCO',
      'RovingTabindexEngine.#onKeyDown()',
      'Event.preventDefault()',
      'La tecla sí navega: se cancela el comportamiento nativo y se aplica wrap con módulo para calcular el destino.',
      {
        indiceSinWrap: next,
        indiceDestino0Based: targetIndex,
        tabDestino: describeInteractionElement(target, items),
      }
    );
    ev.preventDefault();
    this.#logger.step(
      'FOCO',
      'RovingTabindexEngine.#onKeyDown()',
      'HTMLElement.focus()',
      'FOCO PRIMERO: el motor llama a focus() y no toca selected. focusout/focusin se ejecutarán de forma síncrona dentro de esta llamada.',
      {
        tabOrigen: describeInteractionElement(item, items),
        tabDestino: describeInteractionElement(target, items),
        selectedSeModificaEnElMotor: false,
      }
    );
    target.focus();
    this.#logger.step(
      'FOCO',
      'HTMLElement.focus()',
      'RovingTabindexEngine.#onKeyDown()',
      'focus() retornó. El foco ya está en destino; en modo auto, #onFocusIn() ya solicitó selected. En manual, selected sigue intacto.',
      {
        focoFinal: describeInteractionElement(document.activeElement, items),
        defaultPrevented: ev.defaultPrevented,
      }
    );
  };
}
