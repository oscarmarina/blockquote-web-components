import {createActor} from 'xstate';
import type {
  Actor,
  ActorOptions,
  AnyStateMachine,
  EventFrom,
  RequiredActorOptionsFor,
  RequiredActorOptionsKeys,
  Snapshot,
  SnapshotFrom,
  Subscription,
} from 'xstate';
import type {ReactiveController, ReactiveControllerHost} from 'lit';

/**
 * `createActor` options for `TMachine`: required (`{input}` or `{snapshot}`) when the machine's
 * input does not accept `undefined`, as in `createActor`.
 */
type ControllerActorOptions<TMachine extends AnyStateMachine> = [
  RequiredActorOptionsKeys<TMachine>,
] extends [never]
  ? {options?: ActorOptions<TMachine>}
  : {options: ActorOptions<TMachine> & RequiredActorOptionsFor<TMachine>};

export type UseMachineOptions<TMachine extends AnyStateMachine> = {
  machine: TMachine;
  /** Called with every new snapshot emitted by the actor. */
  callback?: (snapshot: SnapshotFrom<TMachine>) => void;
  /**
   * Called when the actor errors. The `'error'` snapshot is also sent to `callback`.
   * If omitted, the error is reported as unhandled (`reportError`).
   */
  onError?: (error: unknown) => void;
} & ControllerActorOptions<TMachine>;

export type BlockquoteControllerXstateOptions<TMachine extends AnyStateMachine> =
  UseMachineOptions<TMachine>;

const reportUnhandledError = (error: unknown): void => {
  if (typeof globalThis.reportError === 'function') {
    globalThis.reportError(error);
  } else {
    setTimeout(() => {
      throw error;
    });
  }
};

/**
 * # BlockquoteControllerXstate
 *
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * ### Connect XState machines with Lit
 * The BlockquoteControllerXstate is a Lit Reactive Controller that is specifically designed to facilitate an integration with XState. This controller provides the capability to subscribe to an XState actor. It also provides a callback function to handle the state changes.
 *
 * - [xstate v6](https://stately.ai/docs/installation)
 * - [xstate v6 - examples](https://stately.ai/docs/examples)
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
 * ***counterMachine.ts***
 *
 * ```ts
 * import {setup, types} from 'xstate';
 *
 * const counterSetup = setup({
 *   // v6: `schemas` (Standard Schema). `types<T>()` is type-only, no runtime validation.
 *   // Zod, Valibot, ArkType... can be used instead to validate at runtime.
 *   schemas: {
 *     context: types<{counter: number}>(),
 *     events: {
 *       INC: types<void>(),
 *       DEC: types<void>(),
 *       TOGGLE: types<void>(),
 *     },
 *   },
 *   guards: {
 *     canIncrement: ({context}) => context.counter < 10,
 *     canDecrement: ({context}) => context.counter > 0,
 *   },
 *   delays: {
 *     backoff: ({context}) => context.counter * 1000,
 *   },
 * });
 *
 * export const counterMachine = counterSetup.createMachine({
 *   context: {counter: 0},
 *   initial: 'enabled',
 *   states: {
 *     enabled: {
 *       on: {
 *         // Transition functions (typed from `schemas`): return the next `context`,
 *         // or `undefined` to ignore the event
 *         INC: ({context, guards}) =>
 *           guards.canIncrement({context}) ? {context: {counter: context.counter + 1}} : undefined,
 *         DEC: ({context, guards}) =>
 *           guards.canDecrement({context}) ? {context: {counter: context.counter - 1}} : undefined,
 *         // v6 types do not accept the string shorthand (`TOGGLE: 'disabled'`)
 *         TOGGLE: {target: 'disabled'},
 *       },
 *     },
 *     disabled: {
 *       after: {
 *         backoff: {target: 'enabled'},
 *       },
 *       on: {
 *         TOGGLE: {target: 'enabled'},
 *       },
 *     },
 *   },
 * });
 * ```
 *
 * **`new BlockquoteControllerXstate(this, {machine, options, callback, onError})`**
 *
 * - `this`: the host component (a Lit `ReactiveControllerHost`, usually the `LitElement` itself).
 * - `machine` (required): the XState machine.
 * - `options`: `createActor` options (`input`, `inspect`, ...). Optional, unless the machine requires
 *   input: then `{input}` or `{snapshot}` must be provided, as when calling `createActor`.
 * - `callback` (optional): called with every new snapshot: the first one on each connection and the
 *   last one (`snapshot.status === 'stopped'`) when the host is disconnected.
 * - `onError` (optional): called when the actor errors (the `'error'` snapshot is also sent to
 *   `callback`). If omitted, the error is reported as unhandled (`reportError`).
 *
 * ***Machine with required input***
 *
 * ```ts
 * const userMachine = setup({
 *   schemas: {
 *     input: types<{userId: string}>(),
 *     context: types<{userId: string}>(),
 *   },
 * }).createMachine({
 *   context: ({input}) => ({userId: input.userId}),
 * });
 *
 * new BlockquoteControllerXstate(this, {machine: userMachine}); // type error: `input` is required
 * new BlockquoteControllerXstate(this, {machine: userMachine, options: {input: {userId: '123'}}});
 * ```
 *
 * Machines whose input accepts `undefined` (or that declare no input) can omit `options`.
 *
 * The actor is created in the constructor, so `snapshot`, `actor` and `send` are available
 * before the host is connected. It is started on `hostConnected` and stopped on `hostDisconnected`;
 * a new actor (initial state) is created if the host is connected again.
 *
 * ***xstate-counter.js***
 *
 * ```javascript
 * import {html, LitElement} from 'lit';
 * import {BlockquoteControllerXstate} from '@blockquote-web-components/blockquote-controller-xstate';
 * import {counterMachine} from './counterMachine.js';
 * import {styles} from './styles/xstate-counter-styles.css.js';
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
 *   _callbackCounterController = (snapshot) => {
 *     this._xstate = snapshot;
 *   };
 *
 *   // xstate v6 inspection events: '@xstate.actor' | '@xstate.transition'
 *   _inspectEvents = (inspEvent) => {
 *     if (inspEvent.type === '@xstate.transition' && inspEvent.snapshot.status === 'stopped') {
 *       this._xstate = {};
 *     }
 *   };
 *
 *   updated(props) {
 *     super.updated?.(props);
 *     if (props.has('_xstate') && this._xstate && 'value' in this._xstate) {
 *       const {context, value} = this._xstate;
 *       const counterEvent = new CustomEvent('counterchange', {
 *         bubbles: true,
 *         detail: {...context, value},
 *       });
 *       this.dispatchEvent(counterEvent);
 *     }
 *   }
 *
 *   get #disabled() {
 *     return this.counterController.snapshot?.matches('disabled');
 *   }
 *
 *   // `false` when the event would be ignored (guards, `disabled` state) or the actor is stopped
 *   #can(type) {
 *     return this.counterController.snapshot?.can({type}) ?? false;
 *   }
 *
 *   render() {
 *     return html`
 *       <slot></slot>
 *       <div data-disabled="${this.#disabled}">
 *         <span>
 *           <button
 *             ?disabled="${!this.#can('INC')}"
 *             data-counter="increment"
 *             \@click=${() => this.counterController.send({type: 'INC'})}>
 *             Increment
 *           </button>
 *           <button
 *             ?disabled="${!this.#can('DEC')}"
 *             data-counter="decrement"
 *             \@click=${() => this.counterController.send({type: 'DEC'})}>
 *             Decrement
 *           </button>
 *         </span>
 *         <p>${this.counterController.snapshot?.context.counter}</p>
 *       </div>
 *       <div>
 *         <button \@click=${() => this.counterController.send({type: 'TOGGLE'})}>
 *           ${this.#disabled ? 'Enabled counter' : 'Disabled counter'}
 *         </button>
 *       </div>
 *     `;
 *   }
 * }
 * ```
 * <hr>
 */
export class BlockquoteControllerXstate<
  TMachine extends AnyStateMachine,
  THost extends ReactiveControllerHost = ReactiveControllerHost,
> implements ReactiveController {
  machine: TMachine;
  /**
   * `createActor` options. Typed like the constructor argument, so it cannot be reassigned
   * without `input` when the machine requires it (a new actor is created on reconnect).
   */
  options: ControllerActorOptions<TMachine>['options'];
  callback?: (snapshot: SnapshotFrom<TMachine>) => void;
  onError?: (error: unknown) => void;
  actorRef?: Actor<TMachine>;
  subscription?: Subscription;
  currentSnapshot: SnapshotFrom<TMachine> | undefined;
  readonly host: THost;

  /**
   * @param {THost} host - The host object.
   * @param {UseMachineOptions<TMachine>} arg - The arguments for the constructor.
   */
  constructor(host: THost, {machine, options, callback, onError}: UseMachineOptions<TMachine>) {
    this.machine = machine;
    this.options = options;
    this.callback = callback;
    this.onError = onError;
    // The actor is created (not started) eagerly so `actor`, `snapshot` and `send`
    // are available before the host is connected.
    this.actorRef = this.#createActor();
    this.currentSnapshot = this.snapshot;

    (this.host = host).addController(this);
  }

  #createActor(): Actor<TMachine> {
    // `TMachine` is generic here, so TypeScript cannot resolve `createActor`'s conditional
    // options (required `input`). The check is enforced where `options` is set instead: the
    // constructor argument (`UseMachineOptions`) and the `options` property share that condition.
    return (createActor as (logic: TMachine, options?: ActorOptions<TMachine>) => Actor<TMachine>)(
      this.machine,
      this.options
    );
  }

  /**
   * The underlying ActorRef from XState
   */
  get actor(): Actor<TMachine> | undefined {
    return this.actorRef;
  }

  /**
   * The latest snapshot of the actor's state
   */
  get snapshot(): SnapshotFrom<TMachine> | undefined {
    return this.actorRef?.getSnapshot();
  }

  /**
   * Send an event to the actor service
   * @param {import('xstate').EventFrom<typeof this.machine>} ev
   */
  send(ev: EventFrom<TMachine>): void {
    this.actorRef?.send(ev);
  }

  unsubscribe(): void {
    this.subscription?.unsubscribe();
    this.subscription = undefined;
  }

  /**
   * Internal subscriber for state changes
   * @param {import('xstate').SnapshotFrom<typeof this.machine>} snapshot
   */
  onNext = (snapshot: SnapshotFrom<TMachine>): void => {
    if (this.currentSnapshot !== snapshot) {
      this.currentSnapshot = snapshot;
      this.callback?.(snapshot);
      this.host.requestUpdate();
    }
  };

  /**
   * `true` while the current actor can be (or is being) run.
   * A snapshot is `'active'` both before `start()` and while running; after `stop()`
   * it is `'stopped'` (and `'done'` / `'error'` when it finishes or fails).
   */
  get isActive(): boolean {
    const snapshot: Snapshot<unknown> | undefined = this.actorRef?.getSnapshot();
    return snapshot?.status === 'active';
  }

  /**
   * Starts the actor. A new actor is created if the previous one is no longer active
   * (e.g. stopped when the host was disconnected), because stopped actors cannot be restarted.
   */
  startService(): void {
    if (this.subscription) {
      return;
    }

    if (!this.actorRef || !this.isActive) {
      this.actorRef = this.#createActor();
    }

    const actorRef = this.actorRef;

    // New session: always notify the first snapshot.
    this.currentSnapshot = undefined;
    this.subscription = actorRef.subscribe({
      next: this.onNext,
      // XState does not emit the `'error'` snapshot through `next`: forward it, so `callback`
      // receives it and the host re-renders. Without `onError`, the error is still reported
      // as unhandled (`reportError`).
      error: (error: unknown) => {
        this.onNext(actorRef.getSnapshot());

        if (this.onError) {
          this.onError(error);
        } else {
          reportUnhandledError(error);
        }
      },
      // `stop()` (and final states) complete the observers without emitting a last
      // snapshot: forward it, so `callback` receives the `'stopped'` / `'done'` snapshot.
      complete: () => this.onNext(actorRef.getSnapshot()),
    });
    actorRef.start();
    this.onNext(actorRef.getSnapshot());
  }

  stopService(): void {
    this.actorRef?.stop();
    this.unsubscribe();
  }

  hostConnected(): void {
    this.startService();
  }

  hostDisconnected(): void {
    this.stopService();
  }
}
