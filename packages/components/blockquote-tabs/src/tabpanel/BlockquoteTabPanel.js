import { html, LitElement } from 'lit';
import { styles } from './styles/blockquote-tabpanel-styles.css.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `<blockquote-tabpanel>`
 * A tab element that can be used inside a `blockquote-tabs` element.
 *
 * @attribute selected
 */
export class BlockquoteTabPanel extends LitElement {
  static get properties() {
    return {
      /**
       * Whether or not the tabpanel is `selected`.
       */
      selected: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.selected = false;
    this.globalRootAttributes = {
      role: 'tabpanel',
      slot: 'tabpanel',
      tabindex: 0,
    };
  }

  static get styles() {
    return [styles];
  }

  connectedCallback() {
    super.connectedCallback?.();
    // https://www.scottohara.me/blog/2021/07/23/aria-idl.html
    // https://wpt.fyi/results/html/dom/aria-attribute-reflection.html?label=master&label=experimental&aligned&view=subtest&q=aria-attribute-reflection
    this.__setArrayAttibute(this.globalRootAttributes);
  }

  updated(props) {
    super.updated && super.updated(props);
    if (props.has('selected')) {
      const globalRootAttributes = {
        ...this.globalRootAttributes,
        ...{
          'aria-hidden': !this.selected,
        },
      };

      this.__setArrayAttibute(globalRootAttributes);
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  /**
   * Sets attributes on the element.
   *
   * @param {Record<*, *>} entries
   */
  __setArrayAttibute(entries = {}) {
    Object.entries(entries).forEach(([key, value]) => {
      this.setAttribute(key, value);
    });
  }
}
