import {LitElement, html, css} from 'lit';
import {getComponentSharedStyles, setComponentSharedStyles} from '../src/index.js';

setComponentSharedStyles(
  'shared-element-shared-styles',
  css`
    .shared2 {
      width: 200px;
      height: 200px;
      background-color: pink;
    }
  `
);

export class SharedElement extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        .shared1 {
          background-color: red;
        }

        .shared2 {
          background-color: green;
        }
      `,
      getComponentSharedStyles('shared-element-shared-styles'),
      getComponentSharedStyles('non-existing-shared-styles'),
    ];
  }

  render() {
    return html`
      <div class="shared1">s</div>
      <div class="shared2">s</div>
    `;
  }
}
customElements.define('shared-element', SharedElement);
