import {createActor} from 'xstate';
import type {
  Actor,
  ActorOptions,
  AnyMachineSnapshot,
  AnyStateMachine,
  EmittedFrom,
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

/**
 * The DOM events dispatched on the host with `dispatchEmitted`, from `schemas.emitted`: each
 * emitted type becomes a `CustomEvent` whose `detail` is the rest of the emitted event. Merge it
 * into `HTMLElementEventMap` to type `addEventListener`:
 *
 * ```ts
 * declare global {
 *   interface HTMLElementEventMap extends EmittedEventMap<typeof counterMachine> {}
 *}
 * ```
 */
export type EmittedEventMap<TMachine extends AnyStateMachine> = {
  [E in EmittedFrom<TMachine> as E['type']]: CustomEvent<Omit<E, 'type'>>;
};

/** How `dispatchEmitted` creates the DOM events: `true` is `{ composed: true }`. */
export type DispatchEmittedOptions = Pick<EventInit, 'bubbles' | 'composed'>;

export type UseMachineOptions<TMachine extends AnyStateMachine> = {
  machine: TMachine;
  /** Called with every new snapshot emitted by the actor. */
  onSnapshot?: (snapshot: SnapshotFrom<TMachine>) => void;
  /**
   * Called when the actor errors. The `'error'` snapshot is also sent to `onSnapshot`.
   * If omitted, XState reports the error as unhandled, unless another subscriber of the
   * actor handles it.
   */
  onError?: (error: unknown) => void;
  /**
   * What the new actor starts from when the host is connected again (a stopped actor cannot
   * restart, so a new one is always created):
   * - `'restart'` (default): the initial state, or `options.snapshot`.
   * - `'restore'`: the state the actor had when the host was disconnected, from its persisted
   *   snapshot (context, state value, children and pending timers, which keep their deadlines).
   *   An actor that had finished (`'done'` or `'error'`) restarts.
   */
  reconnect?: 'restart' | 'restore';
  /**
   * Dispatch each event the machine emits (`enq.emit`) as a DOM `CustomEvent` on the host (which
   * must be an `EventTarget`, such as a `LitElement`): the emitted `type` is the event name and
   * the rest of the emitted event is its `detail`. `true` uses `{ composed: true }`: the event does
   * not bubble, so listen on the element itself (or in the capture phase).
   */
  dispatchEmitted?: boolean | DispatchEmittedOptions;
} & ControllerActorOptions<TMachine>;

export type BlockquoteControllerXstateOptions<TMachine extends AnyStateMachine> =
  UseMachineOptions<TMachine>;

/**
 * # BlockquoteControllerXstate
 *
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * ### Connect XState machines with Lit
 * The BlockquoteControllerXstate is a Lit Reactive Controller that is specifically designed to facilitate an integration with XState. This controller provides the capability to subscribe to an XState actor. It also calls `onSnapshot` with every state change.
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
 *     // The element's public events, dispatched on the host with `dispatchEmitted`
 *     emitted: {
 *       counterchange: types<{counter: number}>(),
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
 *         // Transition functions (typed from `schemas`): return the next `context`, or
 *         // `undefined` to ignore the event. The guard comes first: a function that calls
 *         // `enq` handles the event even when it returns nothing.
 *         INC: ({context, guards}, enq) => {
 *           if (!guards.canIncrement({context})) {
 *             return undefined;
 *           }
 *           const counter = context.counter + 1;
 *           enq.emit({type: 'counterchange', counter});
 *           return {context: {counter}};
 *         },
 *         DEC: ({context, guards}, enq) => {
 *           if (!guards.canDecrement({context})) {
 *             return undefined;
 *           }
 *           const counter = context.counter - 1;
 *           enq.emit({type: 'counterchange', counter});
 *           return {context: {counter}};
 *         },
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
 * **`new BlockquoteControllerXstate(this, {machine, options, onSnapshot, onError, reconnect, dispatchEmitted})`**
 *
 * - `this`: the host component (a Lit `ReactiveControllerHost`, usually the `LitElement` itself).
 * - `machine` (required): the XState machine.
 * - `options`: `createActor` options (`input`, `inspect`, ...). Optional, unless the machine requires
 *   input: then `{input}` or `{snapshot}` must be provided, as when calling `createActor`.
 * - `onSnapshot` (optional): called with every new snapshot: the first one on each connection
 *   and the last one (`snapshot.status === 'stopped'`) when the host is disconnected.
 * - `onError` (optional): called when the actor errors (the `'error'` snapshot is also sent to
 *   `onSnapshot`). If omitted, XState reports the error as unhandled, unless another subscriber
 *   of the actor handles it.
 * - `reconnect` (optional): `'restart'` (default) or `'restore'`, what the new actor starts from
 *   when the host is connected again.
 * - `dispatchEmitted` (optional): dispatch the events the machine emits as DOM events on the
 *   host. `true` uses `{ composed: true }`.
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
 * `hostDisconnected`; a new actor is created if the host is connected again. With
 * `reconnect: 'restore'` it resumes the state the previous actor had (pending timers keep their
 * deadlines); by default (`'restart'`) it starts from the initial state.
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
 *   static styles = [styles];
 *
 *   constructor() {
 *     super();
 *     // The controller re-renders the host on every snapshot. The machine emits the element's
 *     // public events, and `dispatchEmitted` dispatches them on it: `counterchange` with
 *     // `detail: {counter}`, `{composed: true}` (listen on the element, or capture).
 *     this.counterController = new BlockquoteControllerXstate(this, {
 *       machine: counterMachine,
 *       // Moving the element in the DOM keeps its state
 *       reconnect: 'restore',
 *       dispatchEmitted: true,
 *       options: {
 *         inspect: this._inspectEvents,
 *       },
 *     });
 *   }
 *
 *   // xstate v6 inspection events: '@xstate.actor' | '@xstate.transition'
 *   _inspectEvents = (inspEvent) => {
 *     console.info('inspect event', inspEvent);
 *   };
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
 * ***Disconnect and reconnect: `restart` or `restore`***
 *
 * A Lit element is disconnected and connected again more often than it seems: moving it in the
 * DOM, reordering a `repeat`, changing its parent. The actor is stopped on disconnect, and a
 * stopped actor cannot restart, so a new actor is created on reconnect. The `reconnect` option
 * decides what it starts from:
 *
 * | `reconnect` | The new actor starts from |
 * | --- | --- |
 * | `'restart'` (default) | the initial state, or `options.snapshot` |
 * | `'restore'` | the state the previous actor had: its persisted snapshot |
 *
 * With `'restore'`, the snapshot is persisted before the actor stops
 * (`actor.getPersistedSnapshot()`) and the new actor is created from it
 * (`createActor(machine, {snapshot})`). It keeps:
 *
 * - `context`, the state value and children.
 * - Pending timers, with their original deadlines: a timer that expired while disconnected fires
 *   right away.
 * - Invoked work in flight, such as a `createAsyncLogic` request: stopping aborts it, and the new
 *   actor runs it again.
 *
 * An actor that had finished (`'done'` or `'error'`) restarts, and so does one whose `machine` was
 * reassigned meanwhile. `onSnapshot` still receives the `'stopped'` snapshot on disconnect, then the
 * restored one.
 *
 * ***Emitted events: `on` and `dispatchEmitted`***
 *
 * A machine emits events with `enq.emit(...)` to say that something happened once: the counter
 * changed, a form was submitted. Declared in `schemas.emitted`, the element's public events live
 * in the machine, typed and testable without a DOM.
 *
 * `dispatchEmitted: true` dispatches each emitted event on the host as a `CustomEvent`: the
 * emitted `type` is the event name and the rest is its `detail`, with `{composed: true}` (pass an
 * object to change it). The event does not bubble: listen on the element itself, or on an
 * ancestor in the capture phase (`{capture: true}`). `EmittedEventMap` types `addEventListener`:
 *
 * ```ts
 * declare global {
 *   interface HTMLElementEventMap extends EmittedEventMap<typeof counterMachine> {}
 *}
 *
 * el.addEventListener('counterchange', (ev) => ev.detail.counter); // `number`
 * ```
 *
 * To handle emitted events in code, use `controller.on(type, handler)` (or `'*'`). It has the
 * signature of `actor.on`, but XState removes `actor.on` handlers when the actor stops, while
 * `controller.on` handlers keep receiving events from the actors created on reconnect.
 *
 * When they are delivered:
 *
 * - After the transition is applied: `controller.snapshot` already has the new state (the host
 *   has not re-rendered yet).
 * - Not when the host is disconnected (stopping the actor does not run `exit`), nor when an actor
 *   is restored with `reconnect: 'restore'` (`entry` does not run again): moving an element in the
 *   DOM dispatches nothing.
 * - `can.X()` does not emit: it only evaluates the transition.
 *
 * Listeners run synchronously, inside the `trigger` (or `send`) that caused the event:
 *
 * - `controller.snapshot` is already the new state, but the host has not re-rendered yet. To read
 *   its rendered DOM, `await el.updateComplete` first.
 * - A `trigger` called from a listener is queued: it is processed when the current event is done,
 *   so `controller.snapshot` right after it is still the current state. Its own emitted events
 *   follow, in order.
 * - A listener that throws is reported as an uncaught error. Other listeners still receive the
 *   event, and the actor keeps running.
 *
 * ***`controller.trigger` vs `controller.actor.trigger`***
 *
 * | | Sends to | After the host is connected again |
 * | --- | --- | --- |
 * | `controller.trigger` | the current actor, looked up on each call | reaches the new actor |
 * | `controller.actor.trigger` | the actor that was current when it was read | reaches the stopped actor: the event is dropped (a warning in development builds) |
 *
 * Use `controller.trigger` for events from the UI. For a response to a request made from the
 * component, it depends on `reconnect`:
 *
 * - `'restore'`: the new actor continues the same session, so a response that arrives after a
 *   reconnection is still valid. Use `controller.trigger`.
 * - `'restart'`: the new actor starts a new session, so the response belongs to the old one. Read
 *   `controller.actor.trigger` before the `await`: the response is dropped instead of reaching the
 *   new actor.
 *
 * ```ts
 * // `reconnect: 'restart'`
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
 * With `'restore'` the new actor runs it again; with `'restart'` it is gone with the old session.
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
  onSnapshot?: (snapshot: SnapshotFrom<TMachine>) => void;
  /**
   * Whether it is set decides, when the host connects, if XState reports errors as unhandled:
   * adding or removing it applies from the next connection.
   */
  onError?: (error: unknown) => void;
  /** Read when the host is connected again. */
  reconnect: 'restart' | 'restore';
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
   * Not `actor.trigger`, which is bound to one actor. With `reconnect: 'restart'`, for an event
   * that belongs to one session, such as the response to a request, read `actor.trigger` before
   * the `await`: if the host was disconnected meanwhile, the response is dropped instead of
   * reaching the new actor. With `'restore'` the session continues, so use `trigger`.
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
   * Handles events the machine emits (`enq.emit`), like `actor.on(type, handler)`, with `'*'` for
   * every event. Unlike `actor.on`, whose handlers are removed when the actor stops, the handler
   * keeps receiving events from the actors created when the host is connected again.
   */
  readonly on: Actor<TMachine>['on'];
  /** `dispatchEmitted` resolved to an `EventInit`, or `undefined` when it is off. */
  readonly #dispatchInit?: DispatchEmittedOptions;
  readonly #emittedHandlers = new Set<{
    type: string;
    handler: (event: EventObject) => void;
  }>();
  #emittedSubscription?: Subscription;

  /**
   * @param {THost} host - The host object.
   * @param {UseMachineOptions<TMachine>} arg - The arguments for the constructor.
   */
  constructor(
    host: THost,
    {
      machine,
      options,
      onSnapshot,
      onError,
      reconnect = 'restart',
      dispatchEmitted = false,
    }: UseMachineOptions<TMachine>
  ) {
    if (dispatchEmitted && !(host instanceof EventTarget)) {
      throw new TypeError('`dispatchEmitted` requires a host that is an `EventTarget`.');
    }
    this.#dispatchInit = dispatchEmitted === true ? {composed: true} : dispatchEmitted || undefined;
    this.machine = machine;
    this.options = options;
    this.onSnapshot = onSnapshot;
    this.onError = onError;
    this.reconnect = reconnect;
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
    // Typed by `Actor<TMachine>['on']`; `EmittedFrom<TMachine>` does not resolve while generic
    this.on = ((type: string, handler: (event: EventObject) => void): Subscription => {
      const entry = {type, handler};
      this.#emittedHandlers.add(entry);
      return {
        unsubscribe: () => {
          this.#emittedHandlers.delete(entry);
        },
      };
    }) as unknown as Actor<TMachine>['on'];

    (this.host = host).addController(this);
  }

  /** Persisted on disconnect with `reconnect: 'restore'`, with the machine it belongs to. */
  #persisted?: {
    machine: TMachine;
    snapshot: ActorOptions<TMachine>['snapshot'];
  };

  #createActor(snapshot?: ActorOptions<TMachine>['snapshot']): Actor<TMachine> {
    // `TMachine` is generic here, so TypeScript cannot resolve `createActor`'s conditional
    // options (required `input`). The check is enforced where `options` is set instead: the
    // constructor argument (`UseMachineOptions`) and the `options` property share that condition.
    return (createActor as (logic: TMachine, options?: ActorOptions<TMachine>) => Actor<TMachine>)(
      this.machine,
      snapshot ? {...this.options, snapshot} : this.options
    );
  }

  /**
   * The snapshot to restore on reconnect: only with `reconnect: 'restore'`, and only for the
   * machine it was persisted from (`machine` may have been reassigned meanwhile).
   */
  #takePersisted(): ActorOptions<TMachine>['snapshot'] {
    const persisted = this.#persisted;
    this.#persisted = undefined;
    return this.reconnect === 'restore' && persisted?.machine === this.machine
      ? persisted.snapshot
      : undefined;
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
      this.onSnapshot?.(snapshot);
      this.host.requestUpdate();
    }
  };

  /** Delivers an event emitted by the current actor to the DOM and to `on` handlers. */
  #onEmitted = (event: EventObject): void => {
    if (this.#dispatchInit) {
      const {type, ...detail} = event;
      (this.host as unknown as EventTarget).dispatchEvent(
        new CustomEvent(type, {...this.#dispatchInit, detail})
      );
    }
    for (const {type, handler} of this.#emittedHandlers) {
      if (type === '*' || type === event.type) {
        // One failing handler does not keep the others from receiving the event
        try {
          handler(event);
        } catch (error) {
          setTimeout(() => {
            throw error;
          });
        }
      }
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
      this.actorRef = this.#createActor(this.#takePersisted());
    }

    const actorRef = this.actorRef;

    // Before `start()`: the initial state's entry may emit
    this.#emittedSubscription = actorRef.on('*', this.#onEmitted);
    // New session: always notify the first snapshot.
    this.currentSnapshot = undefined;
    this.subscription = actorRef.subscribe({
      next: this.onNext,
      // XState does not emit the `'error'` snapshot through `next`: forward it, so `onSnapshot`
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
    // Persisted before `stop()`: a stopped snapshot keeps no pending timers.
    // A finished actor (`'done'`, `'error'`) is not persisted, so it restarts.
    this.#persisted =
      this.reconnect === 'restore' && this.isActive
        ? {
            machine: this.machine,
            snapshot: this.actorRef.getPersistedSnapshot() as ActorOptions<TMachine>['snapshot'],
          }
        : undefined;
    this.actorRef.stop();
    this.unsubscribe();
    this.#emittedSubscription?.unsubscribe();
    this.#emittedSubscription = undefined;
  }

  hostConnected(): void {
    this.startService();
  }

  hostDisconnected(): void {
    this.stopService();
  }
}
