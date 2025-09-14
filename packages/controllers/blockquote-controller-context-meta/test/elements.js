import {html, LitElement, css} from 'lit';
import {BlockquoteControllerContextMeta, contextMetaProvider} from '../src/index.js';
import './flow-element.js';

export const consumerContext = Symbol.for('symbol-for-surface');

export class ProviderEl extends LitElement {
  static styles = css`
    slot {
      display: block;
      border: dashed 4px #dadada;
      padding: 0 10px;
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
    data: {reflect: true},
  };

  constructor() {
    super();
    this._provider = new BlockquoteControllerContextMeta(this, {
      context: consumerContext,
    });

    this.data = undefined;
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
      <h3>
        Provider's data:
        <code>${this.data}</code>
      </h3>
      <hr />
      <consumer-el></consumer-el>
      <hr />
      <div
        data-info="${contextMetaProvider(this.data, {
          context: consumerContext,
        })}">
        normal element 1
        <flow-element .data="${this.data}">
          <consumer-el></consumer-el>
        </flow-element>
      </div>
      <hr />
      <div
        ${contextMetaProvider(this.data, {
          context: consumerContext,
        })}>
        normal element 2
        <consumer-el></consumer-el>
      </div>
      <slot></slot>
    `;
  }
}
customElements.define('provider-el', ProviderEl);

export class ConsumerEl extends LitElement {
  _consumer = new BlockquoteControllerContextMeta(this, {
    context: consumerContext,
    callback: (v) => v && (this.data = v),
  });

  static properties = {
    data: {reflect: true},
  };

  constructor() {
    super();
    this.data = undefined;
  }

  /**
   * `providedData` will be populated by the first ancestor element which
   * provides a value for `context`.
   */
  get providedData() {
    return this._consumer.value;
  }

  render() {
    return html`
      <h3>
        Consumer data:
        <code>${this._consumer.value}</code>
      </h3>
    `;
  }
}
customElements.define('consumer-el', ConsumerEl);
