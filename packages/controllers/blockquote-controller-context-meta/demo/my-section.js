import { html, css, LitElement } from 'lit';
import { BlockquoteControllerContextMeta } from '../src/index.js';

const COLORS = ['indianred', 'blue', 'orange', 'green', 'purple'];

export class MySection extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
    }
    :host([hidden]) {
      display: none;
    }
  `;

  constructor() {
    super();
    this._consumer = new BlockquoteControllerContextMeta(this, {
      context: 'level',
      initialValue: { level: 1, color: COLORS[0] },
      callback: v => {
        const { level } = /** @type {{level:number, color:string}} */ (v);
        this._consumer.setValue({
          level: level + 1,
          color: COLORS[(level + 1) % COLORS.length],
        });
      },
    });
  }

  render() {
    return html`<section><slot></slot></section>`;
  }
}

customElements.define('my-section', MySection);
