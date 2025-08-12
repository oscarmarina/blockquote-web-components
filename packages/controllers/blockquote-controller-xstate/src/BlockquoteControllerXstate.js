import {createActor} from 'xstate';
/**
 * # BlockquoteControllerXstate
 *
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * ### Connect XState machines with Lit
 * The BlockquoteControllerXstate is a Lit Reactive Controller that is specifically designed to facilitate a integration with XState. This controller provides the capability to subscribe to an XState actor. It also provides a callback function to handle the state changes.
 *
 * - [xstate v5](https://stately.ai/docs/installation)
 * - [xstate v5 - examples](https://stately.ai/docs/examples)
 *
 * <hr>
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-xstate)
 *
 * [![Open in Stately.ai](https://img.shields.io/badge/Open%20in%20Stately.ai-black.svg)](https://stately.ai/registry/editor/154a7a42-9338-4cc0-8c0c-131c859d8349)
 *
 * ### Usage
 *
 * ***counterMachine.js***
 *
 * ```javascript
 * import { createMachine, assign } from 'xstate';
 *
 * const states = {
 *   enabled: 'enabled',
 *   disabled: 'disabled',
 * };
 *
 * const increment = {
 *   counter: ({ context }) => context.counter + 1,
 *   event: ({ event }) => event,
 * };
 * const decrement = {
 *   counter: ({ context }) => context.counter - 1,
 *   event: ({ event }) => event,
 * };
 *
 * const isNotMax = ({ context }) => context.counter < 10;
 * const isNotMin = ({ context }) => context.counter > 0;
 *
 * export const counterMachine = createMachine(
 *   {
 *     id: 'counter',
 *     context: { counter: 0, event: undefined },
 *     initial: 'enabled',
 *     states: {
 *       enabled: {
 *         on: {
 *           INC: {
 *             actions: {
 *               type: 'increment',
 *             },
 *             guard: {
 *               type: 'isNotMax',
 *             },
 *           },
 *           DEC: {
 *             actions: {
 *               type: 'decrement',
 *             },
 *             guard: {
 *               type: 'isNotMin',
 *             },
 *           },
 *           TOGGLE: {
 *             target: states.disabled,
 *           },
 *         },
 *       },
 *       disabled: {
 *         on: {
 *           TOGGLE: {
 *             target: states.enabled,
 *           },
 *         },
 *       },
 *     },
 *   },
 *   {
 *     actions: {
 *       increment: assign(increment),
 *       decrement: assign(decrement),
 *     },
 *     guards: {
 *       isNotMax,
 *       isNotMin,
 *     },
 *   },
 * );
 * ```
 *
 * **`new BlockquoteControllerXstate(this, {machine, options?, callback?})`**
 *
 * ***Usage***
 *
 * ```javascript
 * import { html, LitElement } from 'lit';
 * import { BlockquoteControllerXstate } from '@blockquote-web-components/blockquote-controller-xstate';
 * import { counterMachine } from './counterMachine.js';
 * import { styles } from './styles/xstate-counter-styles.css.js';
 *
 * export class XstateCounter extends LitElement {
 *   static properties = {
 *     _xstate: {
 *       type: Object,
 *       state: true,
 *     },
 *   };
 *
 *   static styles = [styles];
 *
 *   constructor() {
 *     super();
 *     this._xstate = {};
 *     this.counterController = new BlockquoteControllerXstate(this, {
 *       machine: counterMachine,
 *       options: {
 *         inspect: this._inspectEvents,
 *       },
 *       callback: this._callbackCounterController,
 *     });
 *   }
 *
 *   _callbackCounterController = snapshot => {
 *     this._xstate = snapshot;
 *   };
 *
 *   _inspectEvents = inspEvent => {
 *     if (inspEvent.type === '@xstate.snapshot' && inspEvent.event.type === 'xstate.stop') {
 *       this._xstate = {};
 *     }
 *   };
 *
 *   updated(props) {
 *     super.updated && super.updated(props);
 *     if (props.has('_xstate')) {
 *       const { context, value } = this._xstate;
 *       const counterEvent = new CustomEvent('counterchange', {
 *         bubbles: true,
 *         detail: { ...context, value },
 *       });
 *       this.dispatchEvent(counterEvent);
 *     }
 *   }
 *
 *   get #disabled() {
 *     return this.counterController.snapshot.matches('disabled');
 *   }
 *
 *   render() {
 *     return html`
 *       <slot></slot>
 *       <div aria-disabled="${this.#disabled}">
 *         <span>
 *           <button
 *             ?disabled="${this.#disabled}"
 *             data-counter="increment"
 *             \@click=${() => this.counterController.send({ type: 'INC' })}
 *           >
 *             Increment
 *           </button>
 *           <button
 *             ?disabled="${this.#disabled}"
 *             data-counter="decrement"
 *             \@click=${() => this.counterController.send({ type: 'DEC' })}
 *           >
 *             Decrement
 *           </button>
 *         </span>
 *         <p>${this.counterController.snapshot.context.counter}</p>
 *       </div>
 *       <div>
 *         <button \@click=${() => this.counterController.send({ type: 'TOGGLE' })}>
 *           ${this.#disabled ? 'Enabled counter' : 'Disabled counter'}
 *         </button>
 *       </div>
 *     `;
 *   }
 * }
 * ```
 * <hr>
 */
class UseMachine {
  /**
   * @param {import('lit').ReactiveElement} host - The host object.
   * @param {{
   *   machine: import('xstate').StateMachine,
   *   options?: import('xstate').ActorOptions,
   *   callback?: Function
   * }} arg - The arguments for the constructor.
   */
  constructor(host, {machine, options, callback}) {
    this.machine = machine;
    this.options = options;
    this.callback = callback;
    this.currentSnapshot = this.snapshot;

    (this.host = host).addController(this);
  }

  /**
   * The underlying ActorRef from XState
   */
  get actor() {
    return this.actorRef;
  }

  /**
   * The latest snapshot of the actor's state
   */
  get snapshot() {
    return this.actorRef?.getSnapshot?.();
  }

  /**
   * Send an event to the actor service
   * @param {import('xstate').EventFrom<typeof this.machine>} ev
   */
  send(ev) {
    this.actorRef?.send(ev);
  }

  unsubscribe() {
    this.subs?.unsubscribe();
  }

  /**
   * Internal subscriber for state changes
   * @param {import('xstate').SnapshotFrom<typeof this.machine>} snapshot
   */
  onNext = (snapshot) => {
    if (this.currentSnapshot !== snapshot) {
      this.currentSnapshot = snapshot;
      this.callback?.(snapshot);
      this.host.requestUpdate();
    }
  };

  startService() {
    this.actorRef = createActor(this.machine, this.options);
    this.subs = this.actorRef?.subscribe(this.onNext);
    this.actorRef?.start();
  }

  stopService() {
    this.actorRef?.stop();
  }

  hostConnected() {
    this.startService();
  }

  hostDisconnected() {
    this.stopService();
  }
}

export {UseMachine as BlockquoteControllerXstate};
