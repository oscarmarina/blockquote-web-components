import { html, LitElement, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { styleTokens } from './styles/blk-material-tokens.js';
import { styles } from './styles/blk-material-styles.css.js';
import '../define/blk-button.js';

const SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 180 180"><path fill="#F1F3F4" d="M0 20C0 8.954 8.954 0 20 0h140c11.046 0 20 8.954 20 20v140c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20Z"/><g clip-path="url(#a)"><circle cx="90" cy="90" r="45" fill="#757575"/><path fill="#BDBDBD" d="M58.848 58.846h62.308v61.615H58.848z"/><path fill="#fff" d="M89.999 120.462 58.845 58.846h62.307l-31.153 61.616Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M45 45h90v90H45z"/></clipPath></defs></svg>';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * ## `<blk-material>`
 * > Exercise to understand the use of tokens by Google web material.
 * > Read [NOTES.md](./NOTES.md) to understand the proof of concept;
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blk-material)
 *
 * - https://material.io/blog/tone-based-surface-color-m3
 * - https://m3.material.io/styles/color/the-color-system/tokens
 * - https://m3.material.io/theme-builder#/dynamic
 *
 * ## Installation
 *
 * ```bash
 * npm i blk-material
 * ```
 *
 * ## Usage
 *
 * ```html
 * <script type="module">
 *   import 'blk-material/blk-material.js';
 * </script>
 *
 * <blk-material></blk-material>
 * ```
 *
 * ## Local Demo with `vite`
 *
 * ```bash
 * npm start
 * ```
 *
 * To run a local development server that serves the basic demo located in demo/index.html
 *
 *
 * @attribute heading
 * @attribute counter
 * @fires counterchange - Indicates when the count changes
 * @slot - This element has a slot
 */
export class BlkMaterial extends LitElement {
  static styles = [styleTokens, styles];

  static properties = {
    /**
     * The heading to say "Hello" to.
     */
    heading: { type: String },
    roles: { type: String },
    /**
     * The number of times the button has been clicked.
     */
    counter: { type: Number },
  };

  constructor() {
    super();
    this.heading = 'Hey there';
    this.counter = 5;
  }

  get _svgTag() {
    return unsafeHTML(SVG);
  }

  get _isNested() {
    const thisTagName = this.tagName.toLowerCase();
    return [...this.children].some(child => child.tagName.toLowerCase() === thisTagName);
    // return this.matches(`:has(> ${thisTagName})`); // firefox does not support :has() selector
  }

  render() {
    return html`
      <span role="heading" aria-level="1">${this._sayHello(this.heading)}</span>
      <div>
        <figure aria-hidden="true">${this._svgTag}</figure>
        <div>
          <div class="supporting-text">Building on top of the Web Components standards</div>
          <div><slot data-roles="${this._isNested ? 'bright' : nothing}"></slot></div>
          <blk-button @click=${this.#onClick}>Counter: ${this.counter}</blk-button>
        </div>
      </div>
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
  _sayHello(heading) {
    return `Hello, ${heading}`;
  }
}
