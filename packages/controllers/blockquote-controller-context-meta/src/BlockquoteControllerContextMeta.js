import {createContext, ContextProvider, ContextConsumer} from '@lit/context';

export const contextMetaSymbol = Symbol.for('context-meta-symbol');
/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `BlockquoteControllerContextMeta` is a Lit Reactive Controller that encapsulates the controllers provided by [@lit/context](https://lit.dev/docs/data/context/)
 *
 * **Features:**
 * - Allows a component to act simultaneously as a provider and a consumer.
 * - Delays consumer initialization until after the first update, minimizing the risk of a consumer in the Light DOM requesting a context before a provider is available.
 * <hr>
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-context-meta)
 *
 * ### Usage
 * - [Lit examples context-basics](https://lit.dev/playground/#sample=examples/context-basics)
 * ```js
 *
 * import { html, LitElement, css } from 'lit';
 * import { BlockquoteControllerContextMeta } from '@blockquote-web-components/blockquote-controller-context-meta';
 *
 * export class ProviderEl extends LitElement {
 *   static styles = css`
 *     slot {
 *       display: block;
 *       border: dashed 4px grey;
 *       padding: 10px;
 *     }
 *
 *     :host {
 *       display: block;
 *       border: solid 4px gainsboro;
 *       padding: 2px;
 *     }
 *
 *     h3 {
 *       margin-top: 0;
 *     }
 *   `;
 *
 *   static properties = {
 *     data: {},
 *   };
 *
 *   constructor() {
 *     super();
 *     this._provider = new BlockquoteControllerContextMeta(this, {
 *       context: Symbol.for('contextKey')
 *     });
 *
 *     this.data = 'Initial';
 *   }
 *
 *    // `data` will be provided to any consumer that is in the DOM tree below it.
 *   set data(value) {
 *     this._data = value;
 *     this._provider.setValue(value);
 *   }
 *
 *   get data() {
 *     return this._data;
 *   }
 *
 *   render() {
 *     return html`
 *       <h3>Provider's data: <code>${this.data}</code></h3>
 *       <slot></slot>
 *     `;
 *   }
 * }
 * customElements.define('provider-el', ProviderEl);
 *
 * export class ConsumerEl extends LitElement {
 *   _consumer = new BlockquoteControllerContextMeta(this, {
 *     context: Symbol.for('contextKey')
 *     callback: (v) => {
 *       this.setAttribute('data-callback', v);
 *     },
 *   });
 *
 *
 *   // `providedData` will be populated by the first ancestor element which
 *   // provides a value for `context`.
 *
 *   get providedData() {
 *     return this._consumer.value;
 *   }
 *
 *   render() {
 *     return html`<h3>Consumer data: <code>${this.providedData}</code></h3>
 *       <hr />
 *       <slot></slot>`;
 *   }
 * }
 * customElements.define('consumer-el', ConsumerEl);
 * ```
 *
 *  <hr>
 */
class ContextMeta {
  /**
   * @param {import('lit').ReactiveElement} host - The host object.
   * @param {{
   *   context?: *,
   *   initialValue?: import('@lit/context').ContextType<*>,
   *   callback?: (value: import('@lit/context').ContextType<*>, dispose?: () => void) => void
   * }} arg - The arguments for the constructor.
   * @param {boolean} isConsumerOnly - If true, the controller will only be a consumer. Default is false.
   */
  constructor(host, {context = contextMetaSymbol, initialValue, callback}, isConsumerOnly = false) {
    this.context = createContext(context);
    this.initialValue = initialValue;
    this.callback = callback;
    this.host = host;

    if (!isConsumerOnly) {
      this._contextMetaProvider = new ContextProvider(this.host, {
        context: this.context,
        initialValue: this.initialValue,
      });
    }

    this.host.addController?.(this);
  }

  get value() {
    return this._contextMetaConsumer?.value;
  }

  setValue(v, force = false) {
    this._contextMetaProvider?.setValue?.(v, force);
  }

  async hostConnected() {
    await this.host.updateComplete;
    // Await possible asynchronous completion of the host's update lifecycle
    window.queueMicrotask(() => {
      this._contextMetaConsumer = new ContextConsumer(this.host, {
        context: this.context,
        subscribe: true,
        callback: this.callback,
      });
    });
  }
}
export {ContextMeta as BlockquoteControllerContextMeta};
