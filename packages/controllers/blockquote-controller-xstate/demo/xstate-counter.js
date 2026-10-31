import {html, LitElement} from 'lit';
import {BlockquoteControllerXstate} from '../src/index.js';
import {counterMachine} from './counterMachine.js';
import {styles} from './styles/xstate-counter-styles.css.js';

/** @typedef {import('xstate').SnapshotFrom<typeof counterMachine>} CounterSnapshot */

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
    /** @type {CounterSnapshot | undefined} */
    this._xstate = undefined;
    this.counterController = new BlockquoteControllerXstate(this, {
      machine: counterMachine,
      options: {
        inspect: this._inspectEvents,
      },
      callback: this._callbackCounterController,
    });
  }

  /**
   * The last snapshot (`status: 'stopped'`) is sent when the host is disconnected
   * @param {CounterSnapshot} snapshot
   */
  _callbackCounterController = (snapshot) => {
    this._xstate = snapshot.status === 'stopped' ? undefined : snapshot;
  };

  /**
   * @param {import('xstate').InspectionEvent} inspEvent
   */
  _inspectEvents = (inspEvent) => {
    console.info('inspect event', inspEvent);
  };

  /**
   * @param {Map<string, unknown>} props
   */
  updated(props) {
    super.updated?.(props);
    if (props.has('_xstate') && this._xstate) {
      const {context, value} = this._xstate;
      const counterEvent = new CustomEvent('counterchange', {
        bubbles: true,
        detail: {...context, value},
      });
      this.dispatchEvent(counterEvent);
    }
  }

  get #disabled() {
    return this.counterController.snapshot.matches('disabled');
  }

  render() {
    // `can.X()` is `false` when the event would be ignored (guards, `disabled` state) or the
    // actor has finished. `trigger` and `can` always target the current actor.
    const {can, trigger, snapshot} = this.counterController;
    return html`
      <slot></slot>
      <div data-disabled="${this.#disabled}">
        <span>
          <button ?disabled="${!can.INC()}" data-counter="increment" @click=${() => trigger.INC()}>
            Increment
          </button>
          <button ?disabled="${!can.DEC()}" data-counter="decrement" @click=${() => trigger.DEC()}>
            Decrement
          </button>
        </span>
        <p>${snapshot.context.counter}</p>
      </div>
      <div>
        <button @click=${() => trigger.TOGGLE()}>
          ${this.#disabled ? 'Enabled counter' : 'Disabled counter'}
        </button>
      </div>
      <span>
        <slot></slot>
        <span>
          The “Disabled counter” disables the counter for: ${snapshot.context.counter * 1000}
          milliseconds.
        </span>
      </span>
    `;
  }
}

window.customElements.define('xstate-counter', XstateCounter);
