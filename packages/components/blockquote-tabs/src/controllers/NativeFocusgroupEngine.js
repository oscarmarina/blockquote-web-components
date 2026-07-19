import {toFocusgroupTokens} from './focusgroup-tokens.js';

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

  /**
   * @param {Object} options
   * @param {() => HTMLElement[]} options.getItems
   * @param {() => 'horizontal' | 'vertical'} options.getOrientation
   */
  constructor({getItems, getOrientation}) {
    this.#getItems = getItems;
    this.#getOrientation = getOrientation;
  }

  /**
   * @param {HTMLElement} container
   */
  attach(container) {
    if (!container || this.#container === container) {
      return;
    }
    this.#container = container;
    this.#syncTokens();
  }

  detach() {
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
      return;
    }
    this.#syncTokens();
    this.#getItems().forEach((item) => {
      item.toggleAttribute('focusgroupstart', item === entryItem);
    });
  }

  #syncTokens() {
    this.#container?.setAttribute(
      'focusgroup',
      toFocusgroupTokens({
        behavior: 'tablist',
        axis: this.#getOrientation() === 'vertical' ? 'block' : undefined,
        memory: false,
      })
    );
  }
}
