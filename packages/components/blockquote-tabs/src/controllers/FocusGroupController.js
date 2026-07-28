import {RovingTabindexEngine} from './RovingTabindexEngine.js';
import {NativeFocusgroupEngine} from './NativeFocusgroupEngine.js';
import {supportsFocusgroup} from './focusgroup-capability.js';

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

  /**
   * @param {ReactiveControllerHost} host
   * @param {Object} options
   * @param {() => HTMLElement[]} options.getItems
   * @param {() => number} options.getSelectedIndex 0-based selected index
   * @param {() => 'horizontal' | 'vertical'} options.getOrientation
   * @param {() => 'auto' | 'manual'} options.getActivation
   * @param {(index: number) => void} options.onSelect requests a selection commit (0-based)
   * @param {(item: HTMLElement) => void} options.onReveal reveals an item (scroll into view)
   */
  constructor(
    host,
    {getItems, getSelectedIndex, getOrientation, getActivation, onSelect, onReveal}
  ) {
    this.host = host;
    this.#getItems = getItems;
    this.#getSelectedIndex = getSelectedIndex;
    this.#getActivation = getActivation;
    this.#onSelect = onSelect;
    this.#onReveal = onReveal;
    const engineOptions = {getItems, getOrientation};
    this.#engine = supportsFocusgroup()
      ? new NativeFocusgroupEngine(engineOptions)
      : new RovingTabindexEngine(engineOptions);
    host.addController(this);
  }

  get entryItem() {
    return this.#getItems()[this.#getSelectedIndex()];
  }

  hostConnected() {
    // Re-attach after a disconnect/reconnect cycle (shadow DOM persists).
    const container = this.host.shadowRoot?.querySelector('[role="tablist"]');
    if (container) {
      this.attach(container);
    }
  }

  hostDisconnected() {
    this.#container?.removeEventListener('keydown', this.#onActivationKeyDown);
    this.#container?.removeEventListener('click', this.#onClick);
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
    container.addEventListener('keydown', this.#onActivationKeyDown);
    container.addEventListener('click', this.#onClick);
    container.addEventListener('focusin', this.#onFocusIn);
    this.#engine.attach(container);
    this.syncEntryPoint();
  }

  /**
   * Pushes an `orientation` change to the engine. The native engine encodes
   * the axis in the `focusgroup` token and must be synced explicitly; the
   * fallback reads orientation live and treats this as a no-op.
   */
  syncOrientation() {
    this.#engine.syncOrientation();
  }

  /**
   * Moves the group's entry point to the currently selected item. Idempotent;
   * call on every selection commit and whenever the slotted items change.
   */
  syncEntryPoint() {
    this.#engine.setEntryItem(this.entryItem);
  }

  #onFocusIn = (ev) => {
    const item = eventItem(ev, this.#getItems());
    if (!item || isItemDisabled(item)) {
      return;
    }
    this.#onReveal(item);
    if (this.#getActivation() === 'auto') {
      const index = this.#getItems().indexOf(item);
      this.#onSelect(index);
    }
  };

  #onClick = (ev) => {
    const item = eventItem(ev, this.#getItems());
    if (!item) {
      return;
    }
    if (isItemDisabled(item)) {
      ev.preventDefault();
      return;
    }
    item.focus();
    const index = this.#getItems().indexOf(item);
    if (index === this.#getSelectedIndex()) {
      this.#onReveal(item);
      return;
    }
    this.#onSelect(index);
  };

  #onActivationKeyDown = (ev) => {
    if (ev.key !== 'Enter' && ev.key !== ' ') {
      return;
    }
    const item = eventItem(ev, this.#getItems());
    if (!item || isItemDisabled(item)) {
      return;
    }
    ev.preventDefault();
    const index = this.#getItems().indexOf(item);
    this.#onSelect(index);
  };
}
