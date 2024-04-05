/* eslint-disable max-classes-per-file */
import { html, LitElement, css } from 'lit';
import { BlockquoteControllerContextMeta } from '../src/index.js';

export class ProviderEl extends LitElement {
  static styles = css`
    slot {
      display: block;
      border: dashed 4px #dadada;
      padding: 0px 10px;
    }

    :host {
      display: block;
      border: solid 4px #adadad;
      padding: 2px;
    }

    h3 {
      margin-top: 0;
    }
  `;

  static properties = {
    data: {},
  };

  constructor() {
    super();
    this._provider = new BlockquoteControllerContextMeta(this, {
      context: 'contextKey',
    });

    this.data = 'Initial';
  }

  /**
   * `data` will be provided to any consumer that is in the DOM tree below it.
   */
  set data(value) {
    this._data = value;
    this._provider.setValue(value);
  }

  get data() {
    return this._data;
  }

  render() {
    return html`
      <h3>Provider's data: <code>${this.data}</code></h3>
      <slot></slot>
    `;
  }
}
customElements.define('provider-el', ProviderEl);

export class ConsumerEl extends LitElement {
  _consumer = new BlockquoteControllerContextMeta(this, {
    context: 'contextKey',
    callback: v => {
      this.setAttribute('data-callback', String(v));
    },
  });

  /**
   * `providedData` will be populated by the first ancestor element which
   * provides a value for `context`.
   */
  get providedData() {
    return this._consumer.value;
  }

  render() {
    return html`<h3>Consumer data: <code>${this.providedData}</code></h3>
      <hr />
      <slot></slot>`;
  }
}
customElements.define('consumer-el', ConsumerEl);
