import type {ReactiveController, ReactiveControllerHost} from 'lit';
import {RovingTabindexEngine} from './RovingTabindexEngine.js';
import {NativeFocusgroupEngine} from './NativeFocusgroupEngine.js';
import {supportsFocusgroup} from './focusgroup-capability.js';

interface FocusGroupOptions {
  getItems: () => HTMLElement[];
  getSelectedIndex: () => number;
  getOrientation: () => 'horizontal' | 'vertical';
  getActivation: () => 'auto' | 'manual';
  /** requests a selection commit (0-based) */
  onSelect: (index: number) => void;
  /** reveals an item (scroll into view) */
  onReveal: (item: HTMLElement) => void;
}

interface FocusGroupControllerHost extends ReactiveControllerHost {
  shadowRoot: ShadowRoot | null;
}

/**
 * Finds the managed item in an event's composed path.
 */
const eventItem = (ev: Event, items: HTMLElement[]) =>
  ev.composedPath().find((node): node is HTMLElement => items.includes(node as HTMLElement));

/**
 * Checks if a tab item is disabled.
 */
const isItemDisabled = (item: HTMLElement): boolean =>
  item.hasAttribute('disabled') ||
  item.getAttribute('aria-disabled') === 'true' ||
  Boolean((item as HTMLElement & {disabled?: boolean}).disabled);

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
 */
export class FocusGroupController implements ReactiveController {
  #container: HTMLElement | null = null;

  #engine: NativeFocusgroupEngine | RovingTabindexEngine;

  #getItems: () => HTMLElement[];

  #getSelectedIndex: () => number;

  #getActivation: () => 'auto' | 'manual';

  #onSelect: (index: number) => void;

  #onReveal: (item: HTMLElement) => void;

  host: FocusGroupControllerHost;

  constructor(
    host: FocusGroupControllerHost,
    {
      getItems,
      getSelectedIndex,
      getOrientation,
      getActivation,
      onSelect,
      onReveal,
    }: FocusGroupOptions
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
      this.attach(container as HTMLElement);
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
   * @param container the tablist container in the host's shadow DOM
   */
  attach(container: HTMLElement | undefined) {
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

  #onFocusIn = (ev: Event) => {
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

  #onClick = (ev: Event) => {
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

  #onActivationKeyDown = (ev: KeyboardEvent) => {
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
