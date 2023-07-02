import { html, LitElement } from 'lit';
import { BlockquoteMixinSlotContent } from '@blockquote-web-components/blockquote-mixin-slot-content';
import { styles } from './styles/blockquote-tab-styles.css.js';

export class BlockquoteTab extends BlockquoteMixinSlotContent(LitElement) {
  static get is() {
    return 'blockquote-tab';
  }

  static get properties() {
    return {
      /**
       * The tab selected.
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
      role: 'tab',
      slot: 'tab',
      tabindex: 0,
    };
  }

  static get styles() {
    return [styles];
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.shadowRoot.addEventListener('slotchanges', this._onSlotChanges.bind(this));

    this.__setArrayAttibute(this.globalRootAttributes);
  }

  updated(props) {
    super.updated && super.updated(props);
    if (props.has('selected')) {
      const globalRootAttributes = {
        ...this.globalRootAttributes,
        ...{
          'aria-selected': !!this.selected,
          tabindex: this.selected ? 0 : -1,
        },
      };

      this.__setArrayAttibute(globalRootAttributes);
    }
  }

  _onSlotChanges(ev) {
    const { detail } = ev;
    ev.stopPropagation();
    ev.preventDefault();
    const assignedNodesList = detail.assignedSlotContent.assignedSlot;
    Object.assign(assignedNodesList.dataset, { text: this.textContent });
  }

  render() {
    return html`<slot></slot>`;
  }

  __setArrayAttibute(entries = []) {
    Object.entries(entries).forEach(([key, value]) => {
      this.setAttribute(key, value);
    });
  }
}
