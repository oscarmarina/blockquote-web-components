import {createActor} from 'xstate';
import type {
  Actor,
  ActorOptions,
  AnyMachineSnapshot,
  AnyStateMachine,
  EventFrom,
  EventObject,
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

/**
 * `controller.trigger`: one typed sender per event type, from `schemas.events`. Same signatures
 * as XState's `actor.trigger`, but a stable proxy owned by the controller: it always sends to
 * the current actor, so it can be kept or destructured.
 */
export type ControllerTrigger<TMachine extends AnyStateMachine> = Actor<TMachine>['trigger'];

/**
 * `controller.can`: the `trigger` keys and payloads, returning `snapshot.can(...)` for the
 * current actor. A stable proxy owned by the controller, like `trigger`.
 */
export type ControllerCan<TMachine extends AnyStateMachine> = {
  [K in keyof ControllerTrigger<TMachine>]: (
    ...args: Parameters<ControllerTrigger<TMachine>[K]>
  ) => boolean;
};

/**
 * A stable object whose keys are event types: `proxy.X(payload)` calls
 * `fn({ ...payload, type: 'X' })`. Nothing is stored: `fn` decides which actor answers.
 * Symbols (`Symbol.toPrimitive`, ...) are not events, and a `then` function would make the
 * proxy a thenable that never settles when awaited, so an event named `then` is not reachable.
 */
const createEventProxy = <T extends object>(fn: (event: EventObject) => unknown): T =>
  new Proxy({} as T, {
    get: (_, type) =>
      typeof type === 'string' && type !== 'then'
        ? (payload?: object) => fn({...payload, type})
        : undefined,
  });

export type UseMachineOptions<TMachine extends AnyStateMachine> = {
  machine: TMachine;
  /** Called with every new snapshot emitted by the actor. */
  callback?: (snapshot: SnapshotFrom<TMachine>) => void;
  /**
   * Called when the actor errors. The `'error'` snapshot is also sent to `callback`.
   * If omitted, XState reports the error as unhandled, unless another subscriber of the
   * actor handles it.
   */
  onError?: (error: unknown) => void;
} & ControllerActorOptions<TMachine>;

export type BlockquoteControllerXstateOptions<TMachine extends AnyStateMachine> =
  UseMachineOptions<TMachine>;

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
 *});
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
 *});
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
 *   `callback`). If omitted, XState reports the error as unhandled, unless another subscriber
 *   of the actor handles it.
 *
 * ***Machine with required input***
 *
 * ```ts
 * const userMachine = setup({
 *   schemas: {
 *     input: types<{userId: string}>(),
 *     context: types<{userId: string}>(),
 *   },
 *}).createMachine({
 *   context: ({input}) => ({userId: input.userId}),
 *});
 *
 * new BlockquoteControllerXstate(this, {machine: userMachine}); // type error: `input` is required
 * new BlockquoteControllerXstate(this, {machine: userMachine, options: {input: {userId: '123'}}});
 * ```
 *
 * Machines whose input accepts `undefined` (or that declare no input) can omit `options`.
 *
 * The actor is created in the constructor, so `snapshot`, `actor`, `send`, `trigger` and `can`
 * are available before the host is connected. It is started on `hostConnected` and stopped on
 * `hostDisconnected`;
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
 *     this._xstate = undefined;
 *     this.counterController = new BlockquoteControllerXstate(this, {
 *       machine: counterMachine,
 *       options: {
 *         inspect: this._inspectEvents,
 *       },
 *       callback: this._callbackCounterController,
 *     });
 *   }
 *
 *   // The last snapshot (`status: 'stopped'`) is sent when the host is disconnected
 *   _callbackCounterController = (snapshot) => {
 *     this._xstate = snapshot.status === 'stopped' ? undefined : snapshot;
 *   };
 *
 *   // xstate v6 inspection events: '@xstate.actor' | '@xstate.transition'
 *   _inspectEvents = (inspEvent) => {
 *     console.info('inspect event', inspEvent);
 *   };
 *
 *   updated(props) {
 *     super.updated?.(props);
 *     if (props.has('_xstate') && this._xstate) {
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
 *     return this.counterController.snapshot.matches('disabled');
 *   }
 *
 *   render() {
 *     // `can.X()`: `false` when the event would be ignored (guards, `disabled` state) or the
 *     // actor has finished. `trigger` and `can` always target the current actor.
 *     const {can, trigger, snapshot} = this.counterController;
 *     return html`
 *       <slot></slot>
 *       <div data-disabled="${this.#disabled}">
 *         <span>
 *           <button
 *             ?disabled="${!can.INC()}"
 *             data-counter="increment"
 *             \@click=${() => trigger.INC()}>
 *             Increment
 *           </button>
 *           <button
 *             ?disabled="${!can.DEC()}"
 *             data-counter="decrement"
 *             \@click=${() => trigger.DEC()}>
 *             Decrement
 *           </button>
 *         </span>
 *         <p>${snapshot.context.counter}</p>
 *       </div>
 *       <div>
 *         <button \@click=${() => trigger.TOGGLE()}>
 *           ${this.#disabled ? 'Enabled counter' : 'Disabled counter'}
 *         </button>
 *       </div>
 *     `;
 *   }
 *}
 * ```
 *
 * ***`trigger` and `can`***
 *
 * `trigger` sends typed events generated from `schemas.events`: `trigger.INC()`,
 * `trigger.RENAME({label})`, like `send({type: 'RENAME', label})`. It has the same signatures as
 * XState v6's `actor.trigger`, with one difference: XState's belongs to one actor, while the
 * controller's is a stable proxy (`ControllerTrigger`) that always sends to the current actor.
 *
 * That matters because a new actor is created each time the host is connected again (stopped
 * actors cannot restart). `actor.trigger` kept from the first connection would send to a stopped
 * actor, and the event would be lost; `controller.trigger` can be kept or destructured safely.
 *
 * `can` (`ControllerCan`) has the same shape, is also a stable proxy, and returns
 * `snapshot.can(event)` for the current actor: `can.INC()`, `can.RENAME({label})`. It is `false`
 * when the transition function ignores the event (returns `undefined`) or the actor has finished
 * (`'stopped'`, `'done'` or `'error'`). The machine still rejects invalid events: `can` only
 * drives the UI.
 *
 * ***`controller.trigger` vs `controller.actor.trigger`***
 *
 * | | Sends to | After the host is connected again |
 * | --- | --- | --- |
 * | `controller.trigger` | the current actor, looked up on each call | reaches the new actor |
 * | `controller.actor.trigger` | the actor that was current when it was read | reaches the stopped actor: the event is dropped (a warning in development builds) |
 *
 * Use `controller.trigger` for events from the UI. Use `controller.actor.trigger` when an event
 * belongs to one session of the machine, such as a response to a request: read it before the
 * `await`, so a response that arrives after the host was disconnected does not reach the new
 * actor.
 *
 * ```ts
 * async #onInput(ev: InputEvent) {
 *   const query = (ev.target as HTMLInputElement).value;
 *   this.search.trigger.typed({query});
 *
 *   // Bound to this session: read before the `await`
 *   const session = this.search.actor.trigger;
 *   const items = await fetchSuggestions(query);
 *
 *   // Dropped if the actor that asked was stopped in the meantime.
 *   // `this.search.trigger.results({items})` would show results for `query` in the new session.
 *   session.results({items});
 *}
 * ```
 *
 * Moving the request into the machine (an invoked `createAsyncLogic`) avoids the choice: the
 * request belongs to the actor, and stopping the actor cancels it (its `AbortSignal` is aborted).
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
  /**
   * Whether it is set decides, when the host connects, if XState reports errors as unhandled:
   * adding or removing it applies from the next connection.
   */
  onError?: (error: unknown) => void;
  actorRef: Actor<TMachine>;
  subscription?: Subscription;
  currentSnapshot: SnapshotFrom<TMachine> | undefined;
  readonly host: THost;
  /**
   * Typed event senders generated from `schemas.events`: `trigger.INC()`,
   * `trigger['feedback.update']({ value })`, like `send({ type, ...payload })`.
   * A stable proxy: it always sends to the current actor (a new one is created each time the
   * host is connected again), so it can be kept or destructured.
   *
   * Not `actor.trigger`, which is bound to one actor. For an event that belongs to one session,
   * such as the response to a request, read `actor.trigger` before the `await`: if the host was
   * disconnected meanwhile, the response is dropped instead of reaching the new actor.
   */
  readonly trigger: ControllerTrigger<TMachine>;
  /**
   * Typed `snapshot.can(...)` per event type, shaped like `trigger`:
   * `can.INC()`, `can['feedback.update']({ value })`.
   * `false` when the event would be ignored or the actor has finished (`'stopped'`, `'done'`
   * or `'error'`). Before the host connects, it answers for the initial state.
   * A stable proxy, like `trigger`: it always checks the current actor.
   */
  readonly can: ControllerCan<TMachine>;

  /**
   * @param {THost} host - The host object.
   * @param {UseMachineOptions<TMachine>} arg - The arguments for the constructor.
   */
  constructor(host: THost, {machine, options, callback, onError}: UseMachineOptions<TMachine>) {
    this.machine = machine;
    this.options = options;
    this.callback = callback;
    this.onError = onError;
    // The actor is created (not started) eagerly so `actor`, `snapshot`, `send` and
    // `trigger` are available before the host is connected.
    this.actorRef = this.#createActor();
    this.currentSnapshot = this.snapshot;
    // Both read `this.actorRef` on each call, never at creation: they follow the current actor
    this.trigger = createEventProxy((event) => this.actorRef.send(event as EventFrom<TMachine>));
    this.can = createEventProxy((event) =>
      // `SnapshotFrom<TMachine>` does not resolve to a machine snapshot while generic.
      // XState already answers `false` once the actor has finished.
      (this.snapshot as AnyMachineSnapshot).can(event)
    );

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
   * The underlying ActorRef from XState. A new actor is created each time the host is
   * connected again, so do not keep a reference to it across connections.
   */
  get actor(): Actor<TMachine> {
    return this.actorRef;
  }

  /**
   * The latest snapshot of the actor's state
   */
  get snapshot(): SnapshotFrom<TMachine> {
    return this.actorRef.getSnapshot();
  }

  /**
   * Send an event to the actor service
   * @param {import('xstate').EventFrom<typeof this.machine>} ev
   */
  send(ev: EventFrom<TMachine>): void {
    this.actorRef.send(ev);
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
    const snapshot: Snapshot<unknown> = this.actorRef.getSnapshot();
    return snapshot.status === 'active';
  }

  /**
   * Starts the actor. A new actor is created if the previous one is no longer active
   * (e.g. stopped when the host was disconnected), because stopped actors cannot be restarted.
   */
  startService(): void {
    if (this.subscription) {
      return;
    }

    if (!this.isActive) {
      this.actorRef = this.#createActor();
    }

    const actorRef = this.actorRef;

    // New session: always notify the first snapshot.
    this.currentSnapshot = undefined;
    this.subscription = actorRef.subscribe({
      next: this.onNext,
      // XState does not emit the `'error'` snapshot through `next`: forward it, so `callback`
      // receives it and the host re-renders.
      error: (error: unknown) => {
        this.onNext(actorRef.getSnapshot());
        this.onError?.(error);
      },
      // `stop()` (and final states) complete the observers without emitting a last snapshot
      complete: () => this.onNext(actorRef.getSnapshot()),
      // Without `onError` the controller only tracks the actor's lifecycle: XState still
      // reports the error as unhandled, unless another subscriber handles it.
      passive: !this.onError,
    });
    actorRef.start();
    this.onNext(actorRef.getSnapshot());
  }

  stopService(): void {
    this.actorRef.stop();
    this.unsubscribe();
  }

  hostConnected(): void {
    this.startService();
  }

  hostDisconnected(): void {
    this.stopService();
  }
}
