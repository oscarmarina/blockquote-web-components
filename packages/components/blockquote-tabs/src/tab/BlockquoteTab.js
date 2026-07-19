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
  static get properties() {
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

  static get styles() {
    return [styles];
  }

  constructor() {
    super();

    this.selected = false;
    this.disabled = false;

    this.addEventListener('slotchanges', /** @type {EventListener} */ (this._onSlotChanges));
  }

  connectedCallback() {
    super.connectedCallback?.();

    this._syncRootAttributes();
  }

  /**
   * @param {Map<PropertyKey, unknown>} props
   */
  updated(props) {
    super.updated?.(props);

    if (this._shouldSyncState(props)) {
      this._syncState(props);
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  /**
   * Returns whether the component state needs to be synchronized.
   *
   * @param {Map<PropertyKey, unknown>} props
   * @returns {boolean}
   */
  _shouldSyncState(props) {
    const keys = ['selected', 'disabled'];

    return keys.some((prop) => props.has(prop));
  }

  /**
   * Synchronizes the derived DOM state.
   *
   * @param {Map<PropertyKey, unknown>} props
   */
  _syncState(props) {
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
    const {rootAttributes} = /** @type {typeof BlockquoteTab} */ (this.constructor);
    this._setAttributes(rootAttributes);
  }

  /**
   * Sets multiple attributes on the host element.
   *
   * @param {Record<string, *>} attributes
   */
  _setAttributes(attributes = {}) {
    for (const [name, value] of Object.entries(attributes)) {
      if (value === false || value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, String(value));
      }
    }
  }

  /**
   * @param {CustomEvent} ev
   */
  _onSlotChanges = (ev) => {
    const {detail} = ev;
    ev.stopPropagation();
    ev.preventDefault();

    const assignedNodesList = detail.assignedSlotContent.assignedSlot;
    Object.assign(assignedNodesList.dataset, {
      text: this.textContent,
    });
  };
}
