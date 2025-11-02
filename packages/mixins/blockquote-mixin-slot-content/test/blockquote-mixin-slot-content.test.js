/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {html, LitElement} from 'lit';
import {BlockquoteMixinSlotContent} from '../src/index.js';

const slotContentBase = class slotContent extends BlockquoteMixinSlotContent(LitElement) {
  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.shadowRoot?.addEventListener('slotchanges', (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      this.setAttribute('propSlot', '');
      if (/** @type {CustomEvent} */ (ev).detail.assignedNodesContent.assignedNodes[0]) {
        this.setAttribute('slotContent', '');
      } else {
        this.removeAttribute('slotContent');
      }
    });
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
};

customElements.define('slot-element', slotContentBase);

describe('BlockquoteMixinSlotContent', () => {
  /**
   * @type {slotContentBase}
   */
  let el;

  describe('Without content', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-element></slot-element>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('slotchanges event is not fired', () => {
      expect(el.hasAttribute('propSlot')).toBe(false);
    });
  });

  describe('With content', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-element>s</slot-element>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('slotchanges event is fired', () => {
      expect(el.hasAttribute('propSlot')).toBe(true);
    });

    it('slotchanges event has content for the slot', () => {
      expect(el.hasAttribute('slotContent')).toBe(true);
    });
  });
  describe('Removing content', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-element><span>s</span></slot-element>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('removing content sends empty array as contentSlots', async () => {
      expect(el.hasAttribute('slotContent')).toBe(true);
      const childSpan = el.querySelector('span');
      childSpan?.remove();
      await el.updateComplete;
      expect(el.hasAttribute('slotContent')).toBe(false);
    });
  });

  describe('Content is a blank space', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-element>&nbsp;</slot-element>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('slotchanges event is fired', () => {
      expect(el.hasAttribute('propSlot')).toBe(true);
    });

    it('slotchanges event has not content for the slot', () => {
      expect(el.hasAttribute('slotContent')).toBe(false);
    });
  });
});
