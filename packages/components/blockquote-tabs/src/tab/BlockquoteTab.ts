import {html, LitElement} from 'lit';
import {BlockquoteMixinSlotContent} from '@blockquote-web-components/blockquote-mixin-slot-content';
import {styles} from './styles/blockquote-tab-styles.css.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `<blockquote-tab>`
 * A tab element that can be used inside a `blockquote-tabs` element.
 *
 * @attribute selected
 */
export class BlockquoteTab extends BlockquoteMixinSlotContent(LitElement) {
  static override get properties() {
    return {
      /**
       * Whether or not the tab is `selected`.
       */
      selected: {
        type: Boolean,
      },

      /**
       * Whether or not the tab is `disabled`.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static rootAttributes = {
    role: 'tab',
    slot: 'tab',
    tabindex: 0,
  };

  static override get styles() {
    return [styles];
  }

  selected!: boolean;
  disabled!: boolean;

  constructor() {
    super();

    this.selected = false;
    this.disabled = false;

    this.addEventListener('slotchanges', this._onSlotChanges as EventListener);
  }

  override connectedCallback() {
    super.connectedCallback?.();

    this._syncRootAttributes();
  }

  override updated(props: Map<PropertyKey, unknown>) {
    super.updated?.(props);

    if (this._shouldSyncState(props)) {
      this._syncState(props);
    }
  }

  override render() {
    return html`
      <slot></slot>
    `;
  }

  /**
   * Returns whether the component state needs to be synchronized.
   */
  _shouldSyncState(props: Map<PropertyKey, unknown>): boolean {
    const keys = ['selected', 'disabled'];

    return keys.some((prop) => props.has(prop));
  }

  /**
   * Synchronizes the derived DOM state.
   */
  _syncState(props: Map<PropertyKey, unknown>) {
    // Only ARIA state is reflected here. The `tabindex` entry point is
    // managed by the host's FocusGroupController (roving tabindex).

    if (props.has('selected')) {
      this._setAttributes({
        'aria-selected': this.selected ? 'true' : null,
      });
    }

    if (props.has('disabled')) {
      if (this.disabled) {
        this._setAttributes({
          'aria-disabled': 'true',
        });
      } else {
        this.removeAttribute('aria-disabled');
      }
    }
  }

  /**
   * Synchronizes the host attributes that are always present.
   */
  _syncRootAttributes() {
    const {rootAttributes} = this.constructor as typeof BlockquoteTab;
    this._setAttributes(rootAttributes);
  }

  /**
   * Sets multiple attributes on the host element.
   */
  _setAttributes(attributes: Record<string, string | number | boolean | null | undefined> = {}) {
    for (const [name, value] of Object.entries(attributes)) {
      if (value === false || value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, String(value));
      }
    }
  }

  _onSlotChanges = (ev: CustomEvent) => {
    const {detail} = ev;
    ev.stopPropagation();
    ev.preventDefault();

    const assignedNodesList = detail.assignedSlotContent.assignedSlot;
    Object.assign(assignedNodesList.dataset, {
      text: this.textContent,
    });
  };
}
