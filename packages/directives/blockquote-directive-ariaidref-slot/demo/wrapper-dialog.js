import { LitElement, html, css, nothing } from 'lit';
import { blockquoteDirectiveAriaidrefSlot } from '../src/index.js';

class WrapperDialog extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  `;

  static properties = {
    open: {
      type: Boolean,
      reflect: true,
    },

    labelledby: {
      type: String,
    },
  };

  constructor() {
    super();
    this._open = false;
    this.labelledby = '';
  }

  set open(value) {
    const old = this._open;
    if (value === old) {
      return;
    }

    this._open = value;
    if (value) {
      this.dialog?.showModal();
    } else {
      this.dialog?.close();
    }
  }

  firstUpdated() {
    this.addEventListener('submit', this._handleSubmit);
    this.dialog = this.shadowRoot?.querySelector('dialog');
  }

  render() {
    return html`
      <dialog aria-labelledby="${this.labelledby || nothing}"><slot></slot></dialog>
      ${blockquoteDirectiveAriaidrefSlot(this.labelledby)}
    `;
  }

  _handleSubmit() {
    this.open = false;
  }
}

customElements.define('wrapper-dialog', WrapperDialog);
