import { LitElement } from 'lit';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
import { styleMap } from 'lit/directives/style-map.js';
import { BlockquoteControllerContextMeta } from '../src/index.js';

export class MyHeading extends LitElement {
  constructor() {
    super();
    this._level = new BlockquoteControllerContextMeta(this, { context: 'level' });
  }

  get _tag() {
    const level = /** @type {{level:number, color:string}} */ (this._level?.value)?.level;
    if (typeof level === 'number' && level >= 0 && level <= 5) {
      return unsafeStatic(`h${level}`);
    }
    return literal`p`;
  }

  render() {
    return html`
      <${this._tag} style=${styleMap({ color: /** @type {{level:number, color:string}} */ (this._level?.value)?.color })}>
        <slot></slot>
      </${this._tag}>`;
  }
}
customElements.define('my-heading', MyHeading);
