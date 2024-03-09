# BlockquoteControllerXstate

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

### Connect XState machines with Lit
The BlockquoteControllerXstate is a Lit Reactive Controller that is specifically designed to facilitate a integration with XState. This controller provides the capability to subscribe to an XState actor. It also provides a callback function to handle the state changes.

- [xstate v5](https://stately.ai/docs/installation)
- [xstate v5 - examples](https://stately.ai/docs/examples)

<hr>

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-xstate)

[![Open in Stately.ai](https://img.shields.io/badge/Open%20in%20Stately.ai-black.svg)](https://stately.ai/registry/editor/154a7a42-9338-4cc0-8c0c-131c859d8349)

### Usage

***counterMachine.js***

```javascript
import { createMachine, assign } from 'xstate';

const states = {
  enabled: 'enabled',
  disabled: 'disabled',
};

const increment = {
  counter: ({ context }) => context.counter + 1,
  event: ({ event }) => event,
};
const decrement = {
  counter: ({ context }) => context.counter - 1,
  event: ({ event }) => event,
};

const isNotMax = ({ context }) => context.counter < 10;
const isNotMin = ({ context }) => context.counter > 0;

export const counterMachine = createMachine(
  {
    id: 'counter',
    context: { counter: 0, event: undefined },
    initial: 'enabled',
    states: {
      enabled: {
        on: {
          INC: {
            actions: {
              type: 'increment',
            },
            guard: {
              type: 'isNotMax',
            },
          },
          DEC: {
            actions: {
              type: 'decrement',
            },
            guard: {
              type: 'isNotMin',
            },
          },
          TOGGLE: {
            target: states.disabled,
          },
        },
      },
      disabled: {
        on: {
          TOGGLE: {
            target: states.enabled,
          },
        },
      },
    },
  },
  {
    actions: {
      increment: assign(increment),
      decrement: assign(decrement),
    },
    guards: {
      isNotMax,
      isNotMin,
    },
  },
);
```

**`new BlockquoteControllerXstate(this, {machine, options?, callback?})`**

***Usage***

```javascript
import { html, LitElement } from 'lit';
import { BlockquoteControllerXstate } from '@blockquote-web-components/blockquote-controller-xstate';
import { counterMachine } from './counterMachine.js';
import { styles } from './styles/xstate-counter-styles.css.js';

export class XstateCounter extends LitElement {
  static properties = {
    _xstate: {
      type: Object,
      state: true,
    },
  };

  static styles = [styles];

  constructor() {
    super();
    this._xstate = {};
    this._inspectEvents = this._inspectEvents.bind(this);
    this._callbackCounterController = this._callbackCounterController.bind(this);

    this.counterController = new BlockquoteControllerXstate(this, {
      machine: counterMachine,
      options: {
        inspect: this._inspectEvents,
      },
      callback: this._callbackCounterController,
    });
  }

  _callbackCounterController(snapshot) {
    this._xstate = snapshot;
  }

  _inspectEvents(inspEvent) {
    if (inspEvent.type === '@xstate.snapshot' && inspEvent.event.type === 'xstate.stop') {
      this._xstate = {};
    }
  }

  updated(props) {
    super.updated && super.updated(props);
    if (props.has('_xstate')) {
      const { context, value } = this._xstate;
      const counterEvent = new CustomEvent('counterchange', {
        bubbles: true,
        detail: { ...context, value },
      });
      this.dispatchEvent(counterEvent);
    }
  }

  get #disabled() {
    return this.counterController.snapshot.matches('disabled');
  }

  render() {
    return html`
      <slot></slot>
      <div aria-disabled="${this.#disabled}">
        <span>
          <button
            ?disabled="${this.#disabled}"
            data-counter="increment"
            \@click=${() => this.counterController.send({ type: 'INC' })}
          >
            Increment
          </button>
          <button
            ?disabled="${this.#disabled}"
            data-counter="decrement"
            \@click=${() => this.counterController.send({ type: 'DEC' })}
          >
            Decrement
          </button>
        </span>
        <p>${this.counterController.snapshot.context.counter}</p>
      </div>
      <div>
        <button \@click=${() => this.counterController.send({ type: 'TOGGLE' })}>
          ${this.#disabled ? 'Enabled counter' : 'Disabled counter'}
        </button>
      </div>
    `;
  }
}
```
<hr>


### `src/BlockquoteControllerXstate.js`:

#### class: `UseMachine`

##### Fields

| Name              | Privacy | Type | Default    | Description | Inherited From |
| ----------------- | ------- | ---- | ---------- | ----------- | -------------- |
| `actor`           |         |      |            |             |                |
| `snapshot`        |         |      |            |             |                |
| `machine`         |         |      | `machine`  |             |                |
| `options`         |         |      | `options`  |             |                |
| `callback`        |         |      | `callback` |             |                |
| `currentSnapshot` |         |      |            |             |                |

##### Methods

| Name               | Privacy | Description | Parameters                                    | Return | Inherited From |
| ------------------ | ------- | ----------- | --------------------------------------------- | ------ | -------------- |
| `send`             |         |             | `ev: EventFrom<typeof this.machine>`          |        |                |
| `unsubscribe`      |         |             |                                               |        |                |
| `onNext`           |         |             | `snapshot: SnapshotFrom<typeof this.machine>` |        |                |
| `startService`     |         |             |                                               |        |                |
| `stopService`      |         |             |                                               |        |                |
| `hostConnected`    |         |             |                                               |        |                |
| `hostDisconnected` |         |             |                                               |        |                |

<hr/>

#### Exports

| Kind | Name                         | Declaration | Module                            | Package |
| ---- | ---------------------------- | ----------- | --------------------------------- | ------- |
| `js` | `BlockquoteControllerXstate` | UseMachine  | src/BlockquoteControllerXstate.js |         |

### `src/index.js`:

#### Exports

| Kind | Name                         | Declaration                | Module                          | Package |
| ---- | ---------------------------- | -------------------------- | ------------------------------- | ------- |
| `js` | `BlockquoteControllerXstate` | BlockquoteControllerXstate | ./BlockquoteControllerXstate.js |         |
