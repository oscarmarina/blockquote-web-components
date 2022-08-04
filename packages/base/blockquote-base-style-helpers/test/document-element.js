import { LitElement, html, css } from 'lit';

class DocumentElement extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        .docu-element1 {
          background-color: var(--docu-element1-bg, red);
        }

        .docu-element2 {
          background-color: green;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="docu-element1">d</div>
      <div class="docu-element2">d</div>
    `;
  }
}
customElements.define('document-element', DocumentElement);
