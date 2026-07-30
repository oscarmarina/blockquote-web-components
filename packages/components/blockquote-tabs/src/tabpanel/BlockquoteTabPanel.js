import {html, LitElement} from 'lit';
import {logInteractionElementState} from '../controllers/InteractionLogger.js';
import {styles} from './styles/blockquote-tabpanel-styles.css.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `<blockquote-tabpanel>`
 * A tab panel element that can be used inside a `blockquote-tabs` element.
 *
 * @attribute selected
 */
export class BlockquoteTabPanel extends LitElement {
  static get properties() {
    return {
      /**
       * Whether or not the tab panel is `selected`.
       */
      selected: {
        type: Boolean,
      },
    };
  }

  static rootAttributes = {
    role: 'tabpanel',
    slot: 'tabpanel',
    tabindex: 0,
  };

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.selected = false;
  }

  connectedCallback() {
    super.connectedCallback?.();

    // https://www.scottohara.me/blog/2021/07/23/aria-idl.html
    // https://wpt.fyi/results/html/dom/aria-attribute-reflection.html?label=master&label=experimental&aligned&view=subtest&q=aria-attribute-reflection
    this._syncRootAttributes();
  }

  /**
   * @param {Map<PropertyKey, unknown>} props
   */
  updated(props) {
    super.updated?.(props);

    if (this._shouldSyncState(props)) {
      this._syncState();
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
    const keys = ['selected'];

    return keys.some((prop) => props.has(prop));
  }

  /**
   * Synchronizes the derived DOM state.
   */
  _syncState() {
    // `hidden` provides the native semantics (display:none + removal from
    // the accessibility tree); `aria-hidden` is kept in sync as a compat
    // fallback for a transition period.
    this.hidden = !this.selected;

    this._setAttributes({
      'aria-hidden': this.selected ? null : 'true',
    });

    // Only the visible panel should carry `tabindex="0"` so it can receive
    // focus from the tab via script. Inactive panels get no tabindex: they
    // are hidden (inert) and should not pollute the DOM tab order.
    if (this.selected) {
      this._setAttributes({tabindex: 0});
    } else {
      this._setAttributes({tabindex: null});
    }

    logInteractionElementState(
      this,
      '_syncState()',
      'La microtarea del panel terminó: selected ya determina visibilidad, árbol de accesibilidad y posibilidad de foco del panel.',
      {
        selectedProperty: this.selected,
        hiddenFinal: this.hidden,
        ariaHiddenFinal: this.getAttribute('aria-hidden'),
        tabindexFinal: this.getAttribute('tabindex'),
      }
    );
  }

  /**
   * Synchronizes the host attributes that are always present.
   */
  _syncRootAttributes() {
    const {rootAttributes} = /** @type {typeof BlockquoteTabPanel} */ (this.constructor);
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
}
