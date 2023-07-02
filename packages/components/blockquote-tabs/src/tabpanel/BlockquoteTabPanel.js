import { html, LitElement } from 'lit';
import { styles } from './styles/blockquote-tabpanel-styles.css.js';

export class BlockquoteTabPanel extends LitElement {
  static get is() {
    return 'blockquote-tabpanel';
  }

  static get properties() {
    return {
      /**
       * The -
       * @type {boolean}
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
    super.connectedCallback && super.connectedCallback();
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
    return html` <slot></slot> `;
  }

  __setArrayAttibute(entries = []) {
    Object.entries(entries).forEach(([key, value]) => {
      this.setAttribute(key, value);
    });
  }
}
