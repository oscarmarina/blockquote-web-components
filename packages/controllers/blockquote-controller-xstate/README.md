# BlockquoteControllerXstate

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

### Connect XState machines with Lit
The BlockquoteControllerXstate is a Lit Reactive Controller that is specifically designed to facilitate an integration with XState. This controller provides the capability to subscribe to an XState actor. It also calls `onSnapshot` with every state change.

- [xstate v6](https://stately.ai/docs/installation)
- [xstate v6 - examples](https://stately.ai/docs/examples)

<hr>

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-xstate)

[![Open in Stately.ai](https://img.shields.io/badge/Open%20in%20Stately.ai-black.svg)](https://stately.ai/registry/editor/154a7a42-9338-4cc0-8c0c-131c859d8349)

### Usage

***counterMachine.ts***

```ts
import {setup, types} from 'xstate';

const counterSetup = setup({
  // v6: `schemas` (Standard Schema). `types<T>()` is type-only, no runtime validation.
  // Zod, Valibot, ArkType... can be used instead to validate at runtime.
  schemas: {
    context: types<{counter: number}>(),
    events: {
      INC: types<void>(),
      DEC: types<void>(),
      TOGGLE: types<void>(),
    },
    // The element's public events, dispatched on the host with `dispatchEmitted`
    emitted: {
      counterchange: types<{counter: number}>(),
    },
  },
  guards: {
    canIncrement: ({context}) => context.counter < 10,
    canDecrement: ({context}) => context.counter > 0,
  },
  delays: {
    backoff: ({context}) => context.counter * 1000,
  },
});

export const counterMachine = counterSetup.createMachine({
  context: {counter: 0},
  initial: 'enabled',
  states: {
    enabled: {
      on: {
        // Transition functions (typed from `schemas`): return the next `context`, or
        // `undefined` to ignore the event. The guard comes first: a function that calls
        // `enq` handles the event even when it returns nothing.
        INC: ({context, guards}, enq) => {
          if (!guards.canIncrement({context})) {
            return undefined;
          }
          const counter = context.counter + 1;
          enq.emit({type: 'counterchange', counter});
          return {context: {counter}};
        },
        DEC: ({context, guards}, enq) => {
          if (!guards.canDecrement({context})) {
            return undefined;
          }
          const counter = context.counter - 1;
          enq.emit({type: 'counterchange', counter});
          return {context: {counter}};
        },
        // v6 types do not accept the string shorthand (`TOGGLE: 'disabled'`)
        TOGGLE: {target: 'disabled'},
      },
    },
    disabled: {
      after: {
        backoff: {target: 'enabled'},
      },
      on: {
        TOGGLE: {target: 'enabled'},
      },
    },
  },
});
```

**`new BlockquoteControllerXstate(this, {machine, options, onSnapshot, onError, reconnect, dispatchEmitted})`**

- `this`: the host component (a Lit `ReactiveControllerHost`, usually the `LitElement` itself).
- `machine` (required): the XState machine.
- `options`: `createActor` options (`input`, `inspect`, ...). Optional, unless the machine requires
  input: then `{input}` or `{snapshot}` must be provided, as when calling `createActor`.
- `onSnapshot` (optional): called with every new snapshot: the first one on each connection
  and the last one (`snapshot.status === 'stopped'`) when the host is disconnected.
- `onError` (optional): called when the actor errors (the `'error'` snapshot is also sent to
  `onSnapshot`). If omitted, XState reports the error as unhandled, unless another subscriber
  of the actor handles it.
- `reconnect` (optional): `'restart'` (default) or `'restore'`, what the new actor starts from
  when the host is connected again.
- `dispatchEmitted` (optional): dispatch the events the machine emits as DOM events on the
  host. `true` uses `{ composed: true }`.

***Machine with required input***

```ts
const userMachine = setup({
  schemas: {
    input: types<{userId: string}>(),
    context: types<{userId: string}>(),
  },
}).createMachine({
  context: ({input}) => ({userId: input.userId}),
});

new BlockquoteControllerXstate(this, {machine: userMachine}); // type error: `input` is required
new BlockquoteControllerXstate(this, {machine: userMachine, options: {input: {userId: '123'}}});
```

Machines whose input accepts `undefined` (or that declare no input) can omit `options`.

The actor is created in the constructor, so `snapshot`, `actor`, `send`, `trigger` and `can`
are available before the host is connected. It is started on `hostConnected` and stopped on
`hostDisconnected`; a new actor is created if the host is connected again. With
`reconnect: 'restore'` it resumes the state the previous actor had (pending timers keep their
deadlines); by default (`'restart'`) it starts from the initial state.

***xstate-counter.js***

```javascript
import {html, LitElement} from 'lit';
import {BlockquoteControllerXstate} from '@blockquote-web-components/blockquote-controller-xstate';
import {counterMachine} from './counterMachine.js';
import {styles} from './styles/xstate-counter-styles.css.js';

export class XstateCounter extends LitElement {
  static styles = [styles];

  constructor() {
    super();
    // The controller re-renders the host on every snapshot. The machine emits the element's
    // public events, and `dispatchEmitted` dispatches them on it: `counterchange` with
    // `detail: {counter}`, `{composed: true}` (listen on the element, or capture).
    this.counterController = new BlockquoteControllerXstate(this, {
      machine: counterMachine,
      // Moving the element in the DOM keeps its state
      reconnect: 'restore',
      dispatchEmitted: true,
      options: {
        inspect: this._inspectEvents,
      },
    });
  }

  // xstate v6 inspection events: '@xstate.actor' | '@xstate.transition'
  _inspectEvents = (inspEvent) => {
    console.info('inspect event', inspEvent);
  };

  get #disabled() {
    return this.counterController.snapshot.matches('disabled');
  }

  render() {
    // `can.X()`: `false` when the event would be ignored (guards, `disabled` state) or the
    // actor has finished. `trigger` and `can` always target the current actor.
    const {can, trigger, snapshot} = this.counterController;
    return html`
      <slot></slot>
      <div data-disabled="${this.#disabled}">
        <span>
          <button
            ?disabled="${!can.INC()}"
            data-counter="increment"
            \@click=${() => trigger.INC()}>
            Increment
          </button>
          <button
            ?disabled="${!can.DEC()}"
            data-counter="decrement"
            \@click=${() => trigger.DEC()}>
            Decrement
          </button>
        </span>
        <p>${snapshot.context.counter}</p>
      </div>
      <div>
        <button \@click=${() => trigger.TOGGLE()}>
          ${this.#disabled ? 'Enabled counter' : 'Disabled counter'}
        </button>
      </div>
    `;
  }
}
```

***`trigger` and `can`***

`trigger` sends typed events generated from `schemas.events`: `trigger.INC()`,
`trigger.RENAME({label})`, like `send({type: 'RENAME', label})`. It has the same signatures as
XState v6's `actor.trigger`, with one difference: XState's belongs to one actor, while the
controller's is a stable proxy (`ControllerTrigger`) that always sends to the current actor.

That matters because a new actor is created each time the host is connected again (stopped
actors cannot restart). `actor.trigger` kept from the first connection would send to a stopped
actor, and the event would be lost; `controller.trigger` can be kept or destructured safely.

`can` (`ControllerCan`) has the same shape, is also a stable proxy, and returns
`snapshot.can(event)` for the current actor: `can.INC()`, `can.RENAME({label})`. It is `false`
when the transition function ignores the event (returns `undefined`) or the actor has finished
(`'stopped'`, `'done'` or `'error'`). The machine still rejects invalid events: `can` only
drives the UI.

***Disconnect and reconnect: `restart` or `restore`***

A Lit element is disconnected and connected again more often than it seems: moving it in the
DOM, reordering a `repeat`, changing its parent. The actor is stopped on disconnect, and a
stopped actor cannot restart, so a new actor is created on reconnect. The `reconnect` option
decides what it starts from:

| `reconnect` | The new actor starts from |
| --- | --- |
| `'restart'` (default) | the initial state, or `options.snapshot` |
| `'restore'` | the state the previous actor had: its persisted snapshot |

With `'restore'`, the snapshot is persisted before the actor stops
(`actor.getPersistedSnapshot()`) and the new actor is created from it
(`createActor(machine, {snapshot})`). It keeps:

- `context`, the state value and children.
- Pending timers, with their original deadlines: a timer that expired while disconnected fires
  right away.
- Invoked work in flight, such as a `createAsyncLogic` request: stopping aborts it, and the new
  actor runs it again.

An actor that had finished (`'done'` or `'error'`) restarts, and so does one whose `machine` was
reassigned meanwhile. `onSnapshot` still receives the `'stopped'` snapshot on disconnect, then the
restored one.

***Emitted events: `on` and `dispatchEmitted`***

A machine emits events with `enq.emit(...)` to say that something happened once: the counter
changed, a form was submitted. Declared in `schemas.emitted`, the element's public events live
in the machine, typed and testable without a DOM.

`dispatchEmitted: true` dispatches each emitted event on the host as a `CustomEvent`: the
emitted `type` is the event name and the rest is its `detail`, with `{composed: true}` (pass an
object to change it). The event does not bubble: listen on the element itself, or on an
ancestor in the capture phase (`{capture: true}`). `EmittedEventMap` types `addEventListener`:

```ts
declare global {
  interface HTMLElementEventMap extends EmittedEventMap<typeof counterMachine> {}
}

el.addEventListener('counterchange', (ev) => ev.detail.counter); // `number`
```

To handle emitted events in code, use `controller.on(type, handler)` (or `'*'`). It has the
signature of `actor.on`, but XState removes `actor.on` handlers when the actor stops, while
`controller.on` handlers keep receiving events from the actors created on reconnect.

When they are delivered:

- After the transition is applied: `controller.snapshot` already has the new state (the host
  has not re-rendered yet).
- Not when the host is disconnected (stopping the actor does not run `exit`), nor when an actor
  is restored with `reconnect: 'restore'` (`entry` does not run again): moving an element in the
  DOM dispatches nothing.
- `can.X()` does not emit: it only evaluates the transition.

Listeners run synchronously, inside the `trigger` (or `send`) that caused the event:

- `controller.snapshot` is already the new state, but the host has not re-rendered yet. To read
  its rendered DOM, `await el.updateComplete` first.
- A `trigger` called from a listener is queued: it is processed when the current event is done,
  so `controller.snapshot` right after it is still the current state. Its own emitted events
  follow, in order.
- A listener that throws is reported as an uncaught error. Other listeners still receive the
  event, and the actor keeps running.

***`controller.trigger` vs `controller.actor.trigger`***

| | Sends to | After the host is connected again |
| --- | --- | --- |
| `controller.trigger` | the current actor, looked up on each call | reaches the new actor |
| `controller.actor.trigger` | the actor that was current when it was read | reaches the stopped actor: the event is dropped (a warning in development builds) |

Use `controller.trigger` for events from the UI. For a response to a request made from the
component, it depends on `reconnect`:

- `'restore'`: the new actor continues the same session, so a response that arrives after a
  reconnection is still valid. Use `controller.trigger`.
- `'restart'`: the new actor starts a new session, so the response belongs to the old one. Read
  `controller.actor.trigger` before the `await`: the response is dropped instead of reaching the
  new actor.

```ts
// `reconnect: 'restart'`
async #onInput(ev: InputEvent) {
  const query = (ev.target as HTMLInputElement).value;
  this.search.trigger.typed({query});

  // Bound to this session: read before the `await`
  const session = this.search.actor.trigger;
  const items = await fetchSuggestions(query);

  // Dropped if the actor that asked was stopped in the meantime.
  // `this.search.trigger.results({items})` would show results for `query` in the new session.
  session.results({items});
}
```

Moving the request into the machine (an invoked `createAsyncLogic`) avoids the choice: the
request belongs to the actor, and stopping the actor cancels it (its `AbortSignal` is aborted).
With `'restore'` the new actor runs it again; with `'restart'` it is gone with the old session.
<hr>


### `src/BlockquoteControllerXstate.ts`:

#### class: `BlockquoteControllerXstate`

##### Fields

| Name              | Privacy | Type                                                      | Default                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Inherited From |
| ----------------- | ------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `machine`         |         | `TMachine`                                                | `machine`                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                |
| `options`         |         | `ControllerActorOptions<TMachine>['options']`             | `options`                                                                                                                                                                                                                           | \`createActor\` options. Typed like the constructor argument, so it cannot be reassigned&#xA;without \`input\` when the machine requires it (a new actor is created on reconnect).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                |
| `onSnapshot`      |         | `(snapshot: SnapshotFrom<TMachine>) => void \| undefined` | `onSnapshot`                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                |
| `onError`         |         | `(error: unknown) => void \| undefined`                   | `onError`                                                                                                                                                                                                                           | Whether it is set decides, when the host connects, if XState reports errors as unhandled:&#xA;adding or removing it applies from the next connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |
| `reconnect`       |         | `'restart' \| 'restore'`                                  | `reconnect`                                                                                                                                                                                                                         | Read when the host is connected again.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                |
| `actorRef`        |         | `Actor<TMachine>`                                         |                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                |
| `subscription`    |         | `Subscription \| undefined`                               |                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                |
| `currentSnapshot` |         | `SnapshotFrom<TMachine> \| undefined`                     |                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                |
| `host`            |         | `THost`                                                   |                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                |
| `trigger`         |         | `ControllerTrigger<TMachine>`                             |                                                                                                                                                                                                                                     | Typed event senders generated from \`schemas.events\`: \`trigger.INC()\`,&#xA;\`trigger\['feedback.update']\({ value })\`, like \`send({ type, ...payload })\`.&#xA;A stable proxy: it always sends to the current actor (a new one is created each time the&#xA;host is connected again), so it can be kept or destructured.&#xA;&#xA;Not \`actor.trigger\`, which is bound to one actor. With \`reconnect: 'restart'\`, for an event&#xA;that belongs to one session, such as the response to a request, read \`actor.trigger\` before&#xA;the \`await\`: if the host was disconnected meanwhile, the response is dropped instead of&#xA;reaching the new actor. With \`'restore'\` the session continues, so use \`trigger\`. |                |
| `can`             |         | `ControllerCan<TMachine>`                                 |                                                                                                                                                                                                                                     | Typed \`snapshot.can(...)\` per event type, shaped like \`trigger\`:&#xA;\`can.INC()\`, \`can\['feedback.update']\({ value })\`.&#xA;\`false\` when the event would be ignored or the actor has finished (\`'stopped'\`, \`'done'\`&#xA;or \`'error'\`). Before the host connects, it answers for the initial state.&#xA;A stable proxy, like \`trigger\`: it always checks the current actor.                                                                                                                                                                                                                                                                                                                                   |                |
| `on`              |         | `Actor<TMachine>['on']`                                   | `((type: string, handler: (event: EventObject) => void): Subscription => { const entry = {type, handler}; this.#emittedHandlers.add(entry); return { unsubscribe: () => { this.#emittedHandlers.delete(entry); }, }; }) as unknown` | Handles events the machine emits (\`enq.emit\`), like \`actor.on(type, handler)\`, with \`'\*'\` for&#xA;every event. Unlike \`actor.on\`, whose handlers are removed when the actor stops, the handler&#xA;keeps receiving events from the actors created when the host is connected again.                                                                                                                                                                                                                                                                                                                                                                                                                                     |                |
| `actor`           |         | `Actor<TMachine>`                                         |                                                                                                                                                                                                                                     | The underlying ActorRef from XState. A new actor is created each time the host is&#xA;connected again, so do not keep a reference to it across connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                |
| `snapshot`        |         | `SnapshotFrom<TMachine>`                                  |                                                                                                                                                                                                                                     | The latest snapshot of the actor's state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                |
| `onNext`          |         |                                                           |                                                                                                                                                                                                                                     | Internal subscriber for state changes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |
| `isActive`        |         | `boolean`                                                 |                                                                                                                                                                                                                                     | \`true\` while the current actor can be (or is being) run.&#xA;A snapshot is \`'active'\` both before \`start()\` and while running; after \`stop()\`&#xA;it is \`'stopped'\` (and \`'done'\` / \`'error'\` when it finishes or fails).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                |

##### Methods

| Name               | Privacy | Description                                                                                                                                                                     | Parameters                           | Return | Inherited From |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------ | -------------- |
| `send`             |         | Send an event to the actor service                                                                                                                                              | `ev: EventFrom<typeof this.machine>` | `void` |                |
| `unsubscribe`      |         |                                                                                                                                                                                 |                                      | `void` |                |
| `startService`     |         | Starts the actor. A new actor is created if the previous one is no longer active&#xA;(e.g. stopped when the host was disconnected), because stopped actors cannot be restarted. |                                      | `void` |                |
| `stopService`      |         |                                                                                                                                                                                 |                                      | `void` |                |
| `hostConnected`    |         |                                                                                                                                                                                 |                                      | `void` |                |
| `hostDisconnected` |         |                                                                                                                                                                                 |                                      | `void` |                |

<details><summary>Private API</summary>

##### Fields

| Name                   | Privacy | Type                                                                                          | Default                                                               | Description                                                                            | Inherited From |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------- |
| `#dispatchInit`        | private | `DispatchEmittedOptions \| undefined`                                                         |                                                                       | \`dispatchEmitted\` resolved to an \`EventInit\`, or \`undefined\` when it is off.     |                |
| `#emittedHandlers`     | private |                                                                                               | `new Set<{ type: string; handler: (event: EventObject) => void; }>()` |                                                                                        |                |
| `#emittedSubscription` | private | `Subscription \| undefined`                                                                   |                                                                       |                                                                                        |                |
| `#persisted`           | private | `{
    machine: TMachine;
    snapshot: ActorOptions<TMachine>['snapshot'];
  } \| undefined` |                                                                       | Persisted on disconnect with \`reconnect: 'restore'\`, with the machine it belongs to. |                |
| `#onEmitted`           | private |                                                                                               |                                                                       | Delivers an event emitted by the current actor to the DOM and to \`on\` handlers.      |                |

##### Methods

| Name             | Privacy | Description                                                                                                                                                                    | Parameters                                     | Return                               | Inherited From |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------ | -------------- |
| `#createActor`   | private |                                                                                                                                                                                | `snapshot: ActorOptions<TMachine>['snapshot']` | `Actor<TMachine>`                    |                |
| `#takePersisted` | private | The snapshot to restore on reconnect: only with \`reconnect: 'restore'\`, and only for the&#xA;machine it was persisted from (\`machine\` may have been reassigned meanwhile). |                                                | `ActorOptions<TMachine>['snapshot']` |                |

</details>

<hr/>

#### Exports

| Kind | Name                         | Declaration                | Module                            | Package |
| ---- | ---------------------------- | -------------------------- | --------------------------------- | ------- |
| `js` | `BlockquoteControllerXstate` | BlockquoteControllerXstate | src/BlockquoteControllerXstate.ts |         |

### `src/index.ts`:

#### Exports

| Kind | Name                                | Declaration                       | Module                          | Package |
| ---- | ----------------------------------- | --------------------------------- | ------------------------------- | ------- |
| `js` | `BlockquoteControllerXstate`        | BlockquoteControllerXstate        | ./BlockquoteControllerXstate.js |         |
| `js` | `BlockquoteControllerXstateOptions` | BlockquoteControllerXstateOptions | ./BlockquoteControllerXstate.js |         |
| `js` | `ControllerCan`                     | ControllerCan                     | ./BlockquoteControllerXstate.js |         |
| `js` | `ControllerTrigger`                 | ControllerTrigger                 | ./BlockquoteControllerXstate.js |         |
| `js` | `DispatchEmittedOptions`            | DispatchEmittedOptions            | ./BlockquoteControllerXstate.js |         |
| `js` | `EmittedEventMap`                   | EmittedEventMap                   | ./BlockquoteControllerXstate.js |         |
| `js` | `UseMachineOptions`                 | UseMachineOptions                 | ./BlockquoteControllerXstate.js |         |
