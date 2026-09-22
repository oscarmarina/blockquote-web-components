# BlockquoteControllerXstate

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

### Connect XState machines with Lit
The BlockquoteControllerXstate is a Lit Reactive Controller that is specifically designed to facilitate a integration with XState. This controller provides the capability to subscribe to an XState actor. It also provides a callback function to handle the state changes.

- [xstate v6](https://stately.ai/docs/installation)
- [xstate v6 - examples](https://stately.ai/docs/examples)

<hr>

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-xstate)

[![Open in Stately.ai](https://img.shields.io/badge/Open%20in%20Stately.ai-black.svg)](https://stately.ai/registry/editor/154a7a42-9338-4cc0-8c0c-131c859d8349)

### Usage

***counterMachine.js***

```javascript
import { createMachine } from 'xstate';

const states = {
  enabled: 'enabled',
  disabled: 'disabled',
};

export const counterMachine = createMachine(
  {
    id: 'counter',
    context: { counter: 0 },
    initial: 'enabled',
    states: {
      enabled: {
        on: {
          INC: ({ context }) => {
            if (context.counter < 10) {
              return { context: { counter: context.counter + 1 } };
            }
          },
          DEC: ({ context }) => {
            if (context.counter > 0) {
              return { context: { counter: context.counter - 1 } };
            }
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
    this.counterController = new BlockquoteControllerXstate(this, {
      machine: counterMachine,
      options: {
        inspect: this._inspectEvents,
      },
      callback: this._callbackCounterController,
    });
  }

  _callbackCounterController = snapshot => {
    this._xstate = snapshot;
  };

  _inspectEvents = inspEvent => {
    if (inspEvent.type === '@xstate.snapshot' && inspEvent.event.type === 'xstate.stop') {
      this._xstate = {};
    }
  };

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


### `src/BlockquoteControllerXstate.ts`:

#### class: `BlockquoteControllerXstate`

##### Fields

| Name              | Privacy | Type                                                      | Default    | Description                              | Inherited From |
| ----------------- | ------- | --------------------------------------------------------- | ---------- | ---------------------------------------- | -------------- |
| `machine`         |         | `TMachine`                                                | `machine`  |                                          |                |
| `options`         |         | `ActorOptions<TMachine> \| undefined`                     | `options`  |                                          |                |
| `callback`        |         | `(snapshot: SnapshotFrom<TMachine>) => void \| undefined` | `callback` |                                          |                |
| `actorRef`        |         | `Actor<TMachine> \| undefined`                            |            |                                          |                |
| `subscription`    |         | `Subscription \| undefined`                               |            |                                          |                |
| `currentSnapshot` |         | `SnapshotFrom<TMachine> \| undefined`                     |            |                                          |                |
| `host`            |         | `THost`                                                   |            |                                          |                |
| `actor`           |         | `Actor<TMachine> \| undefined`                            |            | The underlying ActorRef from XState      |                |
| `snapshot`        |         | `SnapshotFrom<TMachine> \| undefined`                     |            | The latest snapshot of the actor's state |                |
| `onNext`          |         |                                                           |            | Internal subscriber for state changes    |                |

##### Methods

| Name               | Privacy | Description                        | Parameters                           | Return | Inherited From |
| ------------------ | ------- | ---------------------------------- | ------------------------------------ | ------ | -------------- |
| `send`             |         | Send an event to the actor service | `ev: EventFrom<typeof this.machine>` | `void` |                |
| `unsubscribe`      |         |                                    |                                      | `void` |                |
| `startService`     |         |                                    |                                      | `void` |                |
| `stopService`      |         |                                    |                                      | `void` |                |
| `hostConnected`    |         |                                    |                                      | `void` |                |
| `hostDisconnected` |         |                                    |                                      | `void` |                |

<hr/>

#### Exports

| Kind | Name                         | Declaration                | Module                            | Package |
| ---- | ---------------------------- | -------------------------- | --------------------------------- | ------- |
| `js` | `BlockquoteControllerXstate` | BlockquoteControllerXstate | src/BlockquoteControllerXstate.ts |         |

### `src/index.ts`:

#### Exports

| Kind | Name                         | Declaration                | Module                          | Package |
| ---- | ---------------------------- | -------------------------- | ------------------------------- | ------- |
| `js` | `BlockquoteControllerXstate` | BlockquoteControllerXstate | ./BlockquoteControllerXstate.js |         |
