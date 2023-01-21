import { html, LitElement } from 'lit';
import { styles } from './styles/pe-pe-styles.css.js';

export class PePe extends LitElement {
  static is = 'pe-pe';

  static styles = [styles];

  static properties = {
    /**
     * The heading to say "Hello" to.
     * @type {string}
     */
    heading: { type: String },

    /**
     * The number of times the button has been clicked.
     * @type {number}
     */
    counter: { type: Number },
  };

  constructor() {
    super();
    this.heading = 'Hey there';
    this.counter = 5;
  }

  render() {
    return html`
      <h1>${this.sayHello(this.heading)}!</h1>
      <button @click=${this.#onClick}>Counter: ${this.counter}</button>
      <hr />
      <slot></slot>
    `;
  }

  #onClick() {
    this.counter += 1;
    this.dispatchEvent(new CustomEvent('counterchange', { detail: this.counter }));
  }

  /**
   * Formats a greeting
   * @param heading {string} The heading to say "Hello" to
   * @returns {string} A greeting directed at `heading`
   */
  sayHello(heading) {
    return `Hello, ${heading}`;
  }
}
