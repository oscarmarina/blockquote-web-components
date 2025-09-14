import {html, LitElement, css} from 'lit';
import {BlockquoteControllerContextMeta, contextMetaProvider} from '../../src/index.js';
export const consumerContext = Symbol.for('symbol-for-surface');

export class ProviderEl extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #adadad;
      padding: 0.5rem;
    }

    p {
      margin-block: 0.25rem;
    }

    p ~ * {
      margin-block-start: 1rem;
    }

    div {
      border: 1px solid #adadad;
      padding: 0.5rem;
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

  willUpdate(props) {
    super.willUpdate?.(props);
    if (props.has('data')) {
      this._provider.setValue(this.data);
    }
  }

  render() {
    return html`
      <p>
        Provider data:
        <code>${this.data}</code>
      </p>
      <consumer-el></consumer-el>
      <div
        id="data-info-1"
        data-info="${contextMetaProvider(`${this.data} #data-info-1`, {
          context: consumerContext,
        })}">
        <p>Div Element (Provider)</p>
        <consumer-el></consumer-el>
      </div>
      <div
        id="data-info-2"
        ${contextMetaProvider(`${this.data} #data-info-2`, {
          context: consumerContext,
        })}>
        <p>Div Element (Provider)</p>
        <slot></slot>
        <hr />
        <consumer-el></consumer-el>
      </div>
    `;
  }
}
customElements.define('provider-el', ProviderEl);

export class ConsumerEl extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px dashed #adadad;
      padding: 0.25rem;
      padding-inline: 0.5rem;
    }
  `;

  _consumer = new BlockquoteControllerContextMeta(this, {
    context: consumerContext,
  });

  render() {
    return html`
      <p>
        Consumer data:
        <code>${this._consumer.value}</code>
      </p>
    `;
  }
}
customElements.define('consumer-el', ConsumerEl);
