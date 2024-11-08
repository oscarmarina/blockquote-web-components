import { LitElement, html } from 'lit';
import { styleTokens } from './styles/blk-button-tokens.js';
import { styles } from './styles/blk-button-styles.css.js';
import '../src/define/blk-ripple.js';

export class BlkButton extends LitElement {
  /**
   * @internal
   */
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static styles = [styleTokens, styles];

  static properties = {
    disabled: {
      type: Boolean,
      reflect: true,
    },
  };

  constructor() {
    super();
    this.disabled = false;
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.setAttribute('role', 'none');
  }

  render() {
    return html`
      <button ?disabled="${this.disabled}">
        <blk-ripple ?disabled="${this.disabled}" role="none"></blk-ripple>
        <slot></slot>
      </button>
    `;
  }
}
