import { Subject, isObservable, takeUntil } from 'rxjs';

const unsubscribe = Symbol('unsubscribe');
const subscriptions = Symbol('subscriptions');

/**
 * # BlockquoteControllerRxjs
 *
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `BlockquoteControllerRxjs` is a Reactive Controller.
 *
 * - Original idea by [Adrian Fâciu](https://github.com/adrianfaciu/rx-lit)
 * - [observables-litelement](https://adrianfaciu.dev/posts/observables-litelement/)
 *
 * `BlockquoteControllerRxjs` provides a subscribe method to which pass the property we want to
 * assign values to and the Observable we want to subscribe.
 *
 * - It works with [reactive properties](https://lit.dev/docs/components/properties/) and non-reactive properties
 * - It ignores calls on the same property with the same Observable
 * - It unsubscribes from the old observable if called again on the same property with a different Observable
 * - It unsubscribes when the component is removed
 *
 * ## Usage
 *
 * ```js
 * class BlockquoteControllerRxjsDemo extends LitElement {
 *   static get is() {
 *     return 'blockquote-controller-rxjs-demo';
 *   }
 *
 *   static get properties() {
 *     return {
 *       _pos: {
 *         type: Object,
 *         attribute: false,
 *       },
 *     };
 *   }
 *
 *   constructor() {
 *     super();
 *     this.rx = new BlockquoteControllerRxjs(this);
 *     this._pos = { x: 0, y: 0 };
 *     this.values$ = fromEvent(window, 'mousemove').pipe(
 *       map(({ clientX, clientY }) => ({ x: clientX, y: clientY })),
 *     );
 *   }
 *
 *   connectedCallback() {
 *     super.connectedCallback();
 *
 *     // Property and Observable.
 *     this.rx.subscribe('_pos', this.values$);
 *   }
 *
 *   render() {
 *     return html`
 *       <p>The mouse is at:</p>
 *       <pre>
 *         x: ${this._pos.x}
 *         y: ${this._pos.y}
 *       </pre
 *       >
 *     `;
 *   }
 * }
 * ```
 *
 */
export class BlockquoteControllerRxjs {
  constructor(host) {
    this[unsubscribe] = new Subject();
    this[subscriptions] = new Map();
    (this.host = host).addController(this);
  }

  subscribe(propKey, stream$) {
    if (!isObservable(stream$)) {
      throw new Error('Invalid Observable!');
    }

    const existingSubscription = this[subscriptions].get(propKey);

    if (existingSubscription) {
      if (existingSubscription?.stream$ === stream$) {
        return stream$;
      }
      existingSubscription?.subscription?.unsubscribe();
    }

    const subscription = stream$.pipe(takeUntil(this[unsubscribe])).subscribe(state => {
      propKey in this.host && (this.host[propKey] = state);
      this.host.requestUpdate();
    });

    this[subscriptions].set(propKey, { stream$, subscription });

    return stream$;
  }

  hostDisconnected() {
    this[unsubscribe].next(null);
  }
}
