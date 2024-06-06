// @ts-nocheck
/* eslint-disable max-classes-per-file */
import { LitElement, html } from 'lit';
import { blockquoteDirectiveAriaidrefSlot } from '../src/index.js';

export class SlotIdrefHidden extends LitElement {
  render() {
    return html`
      <slot></slot>
      <hr />
      ${blockquoteDirectiveAriaidrefSlot('hi')}
    `;
  }
}

customElements.define('slot-idref-hidden', SlotIdrefHidden);

export class SlotIdrefVisible extends LitElement {
  render() {
    return html`
      <slot></slot>
      <hr />
      ${blockquoteDirectiveAriaidrefSlot('hi', true)}
    `;
  }
}

customElements.define('slot-idref-visible', SlotIdrefVisible);

export class SlotIdrefError extends LitElement {
  render() {
    return html`
      <slot></slot>
      <hr />
      <div ${blockquoteDirectiveAriaidrefSlot('hi')}></div>
    `;
  }
}

customElements.define('slot-idref-error', SlotIdrefError);

export class SlotIdrefNothing extends LitElement {
  render() {
    return html`
      <slot></slot>
      <hr />
      ${blockquoteDirectiveAriaidrefSlot()}
    `;
  }
}

customElements.define('slot-idref-nothing', SlotIdrefNothing);
