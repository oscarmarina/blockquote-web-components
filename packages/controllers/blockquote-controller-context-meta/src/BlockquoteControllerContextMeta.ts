import {createContext, ContextProvider, ContextConsumer} from '@lit/context';
import type {Context, ContextType} from '@lit/context';
import type {ReactiveController, ReactiveControllerHost} from 'lit';

export const contextMetaSymbol = Symbol.for('context-meta-symbol');

type ContextProviderHost = Partial<ReactiveControllerHost> &
  HTMLElement & {
    hasUpdated?: boolean;
    updateComplete: Promise<unknown>;
  };

/**
 * https://github.com/lit/lit/issues/5116
 * https://discord.com/channels/1012791295170859069/1424796337433612379/1425587605503869030
 *
 * @extends {ContextProvider<*, *>}
 */
// @ts-expect-error -- attachListeners is private in ContextProvider and must be overridden
class ContextProviderHs<
  T extends Context<unknown, unknown>,
  H extends ContextProviderHost,
> extends ContextProvider<T, H> {
  override attachListeners() {
    this.host.addEventListener('context-request', this.onContextRequest);
    let pending = false;
    /* v8 ignore next */
    this.host.addEventListener('context-provider', (ev) => {
      if (!this.host.hasUpdated) {
        return;
      }
      // @ts-expect-error -- this.context is private in ContextProvider
      if (ev.context !== this.context) {
        return;
      }
      const childProviderHost = ev.contextTarget ?? ev.composedPath()[0];
      if (childProviderHost === this.host) {
        return;
      }
      ev.stopPropagation();
      if (pending) {
        return;
      }
      pending = true;
      void this.host.updateComplete.then(() => {
        this.onProviderRequest(ev);
        pending = false;
      });
    });
  }
}
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
class ContextMeta<
  TMeta extends Context<unknown, unknown>,
  HostElement extends ReactiveControllerHost & HTMLElement,
> implements ReactiveController {
  private host: HostElement;
  private context: TMeta;
  private initialValue?: ContextType<TMeta>;
  private callback?: (value: ContextType<TMeta>, dispose?: () => void) => void;
  private _contextMetaProvider?: ContextProviderHs<TMeta, HostElement>;
  private _contextMetaConsumer?: ContextConsumer<TMeta, HostElement>;

  constructor(
    host: HostElement,
    {
      context = contextMetaSymbol,
      initialValue,
      callback,
    }: {
      context?: unknown;
      initialValue?: ContextType<TMeta>;
      callback?: (value: ContextType<TMeta>, dispose?: () => void) => void;
    },
    isConsumerOnly = false
  ) {
    this.context = createContext(context) as TMeta;
    this.initialValue = initialValue;
    this.callback = callback;
    this.host = host;

    if (!isConsumerOnly) {
      this._contextMetaProvider = new ContextProviderHs(this.host, {
        context: this.context,
        initialValue: this.initialValue,
      });
    }

    this.host.addController?.(this);
  }

  get value(): ContextType<TMeta> | undefined {
    return this._contextMetaConsumer?.value;
  }

  setValue(v: ContextType<TMeta>, force = false) {
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
