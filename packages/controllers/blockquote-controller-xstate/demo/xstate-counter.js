import {html, LitElement} from 'lit';
import {BlockquoteControllerXstate} from '../src/index.js';
import {counterMachine} from './counterMachine.js';
import {TickController} from './TickController.js';
import {styles} from './styles/xstate-counter-styles.css.js';

export class XstateCounter extends LitElement {
  static styles = [styles];

  constructor() {
    super();
    // The machine emits the element's public events (`counterchange`, `disabledchange`), and
    // `dispatchEmitted` dispatches them on the element: no `_xstate` mirror or `updated()` needed
    this.counterController = new BlockquoteControllerXstate(this, {
      machine: counterMachine,
      // Moving the element in the DOM keeps the counter (and the `disabled` timer deadline)
      reconnect: 'restore',
      dispatchEmitted: true,
      options: {
        inspect: this._inspectEvents,
      },
    });
    // Re-renders the countdown while `disabled`. The deadline comes from the machine's
    // `context`, so it survives a move in the DOM with `reconnect: 'restore'`.
    this.countdownController = new TickController(this, {
      interval: 100,
      while: () => this.#disabled,
    });
  }

  /**
   * @param {import('xstate').InspectionEvent} inspEvent
   */
  _inspectEvents = (inspEvent) => {
    console.info('inspect event', inspEvent);
  };

  get #disabled() {
    return this.counterController.snapshot.matches('disabled');
  }

  /** Seconds left in the `disabled` state, from the deadline the machine stored. */
  get #secondsLeft() {
    const {disabledUntil} = this.counterController.snapshot.context;
    return (Math.max(0, disabledUntil - Date.now()) / 1000).toFixed(1);
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
        ${
          this.#disabled
            ? html`
                <span class="countdown" role="timer">${this.#secondsLeft} s</span>
              `
            : ''
        }
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
