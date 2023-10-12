/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import { LitElement } from 'lit';
import { BlockquoteMixinSlotContent } from '../index.js';

const slotContentBase = class slotContent extends BlockquoteMixinSlotContent(LitElement) {
  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.shadowRoot?.addEventListener('slotchanges', ev => {
      ev.stopPropagation();
      ev.preventDefault();
      this.setAttribute('propSlot', '');
      if (/** @type {CustomEvent} */ (ev).detail.assignedNodesContent.assignedNodes.length) {
        this.setAttribute('slotContent', '');
      } else {
        this.removeAttribute('slotContent');
      }
    });
  }

  render() {
    return html` <slot></slot> `;
  }
};

customElements.define('slot-element', slotContentBase);

suite('BlockquoteMixinSlotContent', () => {
  /**
   * @type {slotContentBase}
   */
  let el;

  teardown(() => fixtureCleanup());

  suite('Without content', () => {
    setup(async () => {
      el = await fixture(html`<slot-element></slot-element>`);
      await el.updateComplete;
    });

    test('slotchanges event is not fired', () => {
      assert.isFalse(el.hasAttribute('propSlot'));
    });
  });

  suite('With content', () => {
    setup(async () => {
      el = await fixture(html`<slot-element>s</slot-element>`);
      await el.updateComplete;
    });

    test('slotchanges event is fired', () => {
      assert.isTrue(el.hasAttribute('propSlot'));
    });

    test('slotchanges event has content for the slot', () => {
      assert.isTrue(el.hasAttribute('slotContent'));
    });
  });
  suite('Removing content', () => {
    setup(async () => {
      el = await fixture(html`<slot-element><span>s</span></slot-element>`);
      await el.updateComplete;
    });

    test('removing content sends empty array as contentSlots', async () => {
      assert.isTrue(el.hasAttribute('slotContent'));
      const childSpan = el.querySelector('span');
      childSpan?.remove();
      await el.updateComplete;
      assert.isFalse(el.hasAttribute('slotContent'));
    });
  });

  suite('Content is a blank space', () => {
    setup(async () => {
      el = await fixture(html`<slot-element> </slot-element>`);
      await el.updateComplete;
    });

    test('slotchanges event is fired', () => {
      assert.isTrue(el.hasAttribute('propSlot'));
    });

    test('slotchanges event has not content for the slot', () => {
      assert.isFalse(el.hasAttribute('slotContent'));
    });
  });
});
