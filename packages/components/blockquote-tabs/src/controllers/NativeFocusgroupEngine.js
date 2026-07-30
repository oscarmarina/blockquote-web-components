import {toFocusgroupTokens} from './focusgroup-tokens.js';
import {describeInteractionElement} from './InteractionLogger.js';

/**
 * `NativeFocusgroupEngine`
 *
 * Focus engine backed by the browser's native `focusgroup` behavior. It does
 * NO key handling and NO tabindex management: the browser provides
 * directional navigation, `Home`/`End`, wrap, logical (writing-mode aware)
 * direction, the guaranteed single tab stop, last-focused memory and
 * focus-into-view scrolling.
 *
 * What remains here is exactly what the explainer assigns to author code for
 * the tabs pattern:
 *
 * - Declare the group on the tablist container:
 *   `focusgroup="tablist [block] nomemory"`. `tablist` supplies the
 *   `inline wrap` default modifiers; `block` overrides the axis for vertical
 *   tablists; `nomemory` reproduces roving-by-selection entry semantics
 *   (sequential re-entry always lands on the SELECTED item, not on the last
 *   arrowed-to one).
 * - Move `focusgroupstart` to the newly selected item on every commit.
 *
 * The engine intentionally leaves every item's `tabindex` untouched: native
 * directional navigation requires items to be focusable (non-negative
 * tabindex), and the guaranteed tab stop collapses them into a single
 * sequential stop.
 */
export class NativeFocusgroupEngine {
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
    this.#logger.step(
      'CICLO',
      'NativeFocusgroupEngine.attach()',
      'NativeFocusgroupEngine.#syncTokens()',
      'Motor nativo conectado sin listeners keydown propios: el navegador será quien mueva el foco y JavaScript lo observará mediante focusin.'
    );
    this.#syncTokens();
  }

  detach() {
    this.#logger.step(
      'CICLO',
      'NativeFocusgroupEngine.detach()',
      'HTMLElement.removeAttribute(focusgroup)',
      'Se elimina la declaración focusgroup del tablist.'
    );
    this.#container?.removeAttribute('focusgroup');
    this.#container = null;
  }

  /**
   * Pushes the current orientation to the `focusgroup` token. The token
   * encodes the axis (`block` for vertical tablists), so a dynamic
   * `orientation` change must be synced explicitly. Safe to call before
   * `attach` (no-op until a container exists).
   */
  syncOrientation() {
    this.#logger.step(
      'CICLO',
      'NativeFocusgroupEngine.syncOrientation()',
      'NativeFocusgroupEngine.#syncTokens()',
      'La orientación forma parte del token nativo y debe reescribirse.'
    );
    this.#syncTokens();
  }

  /**
   * Moves `focusgroupstart` to the selected item. Idempotent; safe to call on
   * every selection commit or slot change.
   *
   * @param {HTMLElement | undefined} entryItem
   */
  setEntryItem(entryItem) {
    if (!entryItem) {
      this.#logger.step(
        'DECISIÓN',
        'NativeFocusgroupEngine.setEntryItem()',
        'return',
        'No existe tab seleccionado; no se puede marcar focusgroupstart.'
      );
      return;
    }
    this.#syncTokens();
    const items = this.#getItems();
    this.#logger.step(
      'FOCO',
      'NativeFocusgroupEngine.setEntryItem()',
      'HTMLElement.toggleAttribute(focusgroupstart)',
      'El tab seleccionado se convierte en inicio nativo del grupo. Cambiar focusgroupstart NO mueve el foco actual.',
      {
        entryItem: describeInteractionElement(entryItem, items),
        llamaAFocus: false,
      }
    );
    items.forEach((item) => {
      item.toggleAttribute('focusgroupstart', item === entryItem);
    });
  }

  #syncTokens() {
    if (!this.#container) {
      this.#logger.step(
        'DECISIÓN',
        'NativeFocusgroupEngine.#syncTokens()',
        'return',
        'El tablist todavía no está conectado; no hay atributo focusgroup que actualizar.'
      );
      return;
    }
    const tokens = toFocusgroupTokens({
      behavior: 'tablist',
      axis: this.#getOrientation() === 'vertical' ? 'block' : undefined,
      memory: false,
    });
    this.#logger.step(
      'FOCO',
      'NativeFocusgroupEngine.#syncTokens()',
      'HTMLElement.setAttribute(focusgroup)',
      'Se declara al navegador el patrón, eje y semántica nomemory. A partir de aquí el navegador resuelve la navegación de foco.',
      {
        focusgroup: tokens,
        orientation: this.#getOrientation(),
      }
    );
    this.#container.setAttribute('focusgroup', tokens);
  }
}
