import {html, LitElement} from 'lit';
import {BlockquoteControllerXstate} from '../src/index.js';
import {counterMachine} from './counterMachine.js';
import {styles} from './styles/xstate-counter-styles.css.js';

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

  /**
   * @param {import('xstate').SnapshotFrom<unknown>} snapshot
   */
  _callbackCounterController = (snapshot) => {
    this._xstate = snapshot;
  };

  /**
   * @param {import('xstate').InspectionEvent} inspEvent
   */

  _inspectEvents = (inspEvent) => {
    if (inspEvent.type === '@xstate.snapshot' && inspEvent.event.type === 'xstate.stop') {
      this._xstate = {};
    }
  };

  updated(props) {
    super.updated && super.updated(props);
    if (props.has('_xstate')) {
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
    return html`
      <slot></slot>
      <div aria-disabled="${this.#disabled}">
        <span>
          <button
            ?disabled="${this.#disabled}"
            data-counter="increment"
            @click=${() => this.counterController.send({type: 'INC'})}>
            Increment
          </button>
          <button
            ?disabled="${this.#disabled}"
            data-counter="decrement"
            @click=${() => this.counterController.send({type: 'DEC'})}>
            Decrement
          </button>
        </span>
        <p>${this.counterController.snapshot.context.counter}</p>
      </div>
      <div>
        <button @click=${() => this.counterController.send({type: 'TOGGLE'})}>
          ${this.#disabled ? 'Enabled counter' : 'Disabled counter'}
        </button>
      </div>
    `;
  }
}

window.customElements.define('xstate-counter', XstateCounter);
