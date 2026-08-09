import {describe, it, expect, beforeAll} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {html, LitElement} from 'lit';
import {BlockquoteMixinSlotContent} from '../src/index.js';

const slotContentBase = class slotContent extends BlockquoteMixinSlotContent(LitElement) {
  detail: Record<string, unknown> | null = null;

  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.shadowRoot?.addEventListener('slotchanges', (ev: Event) => {
      const customEvent = ev as CustomEvent<{
        assignedNodesContent: {assignedNodes: Node[]};
      }>;
      customEvent.stopPropagation();
      customEvent.preventDefault();
      this.detail = customEvent.detail as unknown as Record<string, unknown>;
      this.setAttribute('propSlot', '');
      if (customEvent.detail.assignedNodesContent.assignedNodes[0]) {
        this.setAttribute('slotContent', '');
      } else {
        this.removeAttribute('slotContent');
      }
    });
  }

  override render() {
    return html`
      <slot name="namedSlot"></slot>
      <slot><div>Fallback</div></slot>
    `;
  }
};

customElements.define('slot-element', slotContentBase);

type SlotContentBase = InstanceType<typeof slotContentBase>;

describe('BlockquoteMixinSlotContent', () => {
  let el: SlotContentBase;

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

  describe('Branch Coverage Edge Cases', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-element>
          <!-- Comment Node -->
          <p slot="namedSlot">Named content</p>
        </slot-element>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('handles named slots and ignores comment nodes', async () => {
      const namedSlot = el.shadowRoot?.querySelector('slot[name="namedSlot"]');
      namedSlot?.dispatchEvent(new Event('slotchange', {bubbles: true}));
      await el.updateComplete;

      const detail = el.detail as any;
      expect(detail.assignedSlotContent.slotName).toBe('namedSlot');
      expect(detail.isFallback).toBe(false);
    });

    it('returns early when event target is not an HTMLSlotElement', () => {
      const div = document.createElement('div');
      el.detail = null;

      el.shadowRoot?.dispatchEvent(new Event('slotchange', {bubbles: true, cancelable: true}));

      div.dispatchEvent(new Event('slotchange', {bubbles: true}));

      expect(el.detail).toBeNull();
    });

    it('evaluates slot fallback branch when assigned content is emptied', async () => {
      const defaultSlot = el.shadowRoot?.querySelectorAll('slot')[1];
      defaultSlot?.dispatchEvent(new Event('slotchange', {bubbles: true}));
      await el.updateComplete;

      const detail = el.detail as any;
      expect(detail.isFallback).toBe(true);
      expect(detail.fallbackNodesContent.assignedNodes).toHaveLength(1);
    });
  });
});
