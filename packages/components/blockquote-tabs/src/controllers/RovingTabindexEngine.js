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
export class RovingTabindexEngine {
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
    container.addEventListener('keydown', this.#onKeyDown);
  }

  detach() {
    this.#container?.removeEventListener('keydown', this.#onKeyDown);
    this.#container = null;
  }

  /**
   * No-op: the fallback resolves orientation live on every keydown, so there
   * is no orientation-dependent state to push. It exists to keep the engine
   * interface symmetric with `NativeFocusgroupEngine`.
   */
  syncOrientation() {
    // Intentionally blank: see the method doc.
  }

  /**
   * Roving tabindex: `entryItem` becomes the only tab stop of the group.
   * Idempotent; safe to call on every selection commit or slot change.
   *
   * @param {HTMLElement | undefined} entryItem
   */
  setEntryItem(entryItem) {
    if (!entryItem) {
      return;
    }
    this.#getItems().forEach((item) => {
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
    if (items.length === 0) {
      return;
    }
    const item = ev.composedPath().find((node) => items.includes(node));
    if (!item) {
      return;
    }

    const currentIndex = items.indexOf(item);
    const next = this.#nextIndex(currentIndex, ev.key);
    if (next === null) {
      return;
    }

    const targetIndex = (next + items.length) % items.length;
    const target = items[targetIndex];
    ev.preventDefault();
    target.focus();
  };
}
