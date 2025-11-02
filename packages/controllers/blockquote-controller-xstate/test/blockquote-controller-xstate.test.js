/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll, beforeEach, chai} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {chaiA11yAxe} from 'chai-a11y-axe';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';
import '../demo/xstate-counter.js';

chai.use(chaiA11yAxe);

describe('BlockquoteControllerXstate', () => {
  /**
   * * @type {import('../demo/xstate-counter').XstateCounter}
   */
  let el;
  /** @type {string | null | undefined} */
  let elShadowRoot;

  describe('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <xstate-counter>light-dom</xstate-counter>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    it('default counter 0', () => {
      expect(el.counterController.snapshot.context.counter).toBe(0);
    });

    it('should get an instance of actor', () => {
      expect(typeof el.counterController.actor).toBe('object');
      expect(el.counterController.actor).not.toBeNull();
    });

    describe('Semantic Dom and a11y', () => {
      it('SHADOW DOM - Structure test', async () => {
        if (elShadowRoot == null) {
          throw new Error('Expected shadow root HTML content');
        }
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      it('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id']})).toMatchSnapshot('LIGHT DOM');
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });
    });
  });

  describe('Events ', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <xstate-counter></xstate-counter>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    it('increases the counter on Increment button click', () => {
      el.shadowRoot?.querySelector('button')?.click();
      expect(el.counterController.snapshot.context.counter).toBe(1);
    });

    it('decreases the counter on Decrement button click', () => {
      el.shadowRoot?.querySelector('button')?.click();
      /** @type {HTMLButtonElement} */ (el.shadowRoot?.querySelector('button + button'))?.click();
      expect(el.counterController.snapshot.context.counter).toBe(0);
    });

    it('disable the counter on Enabled/Disabled button click', () => {
      let lastCounter = el.counterController.snapshot.context.counter;
      const counterButton = el.shadowRoot?.querySelector('button');
      const disabledButton = el.shadowRoot?.querySelector('div + div button');

      counterButton?.click();
      expect(el.counterController.snapshot.context.counter).toBe(lastCounter + 1);
      lastCounter = el.counterController.snapshot.context.counter;

      /** @type {HTMLButtonElement} */ (disabledButton)?.click();
      expect(el.counterController.snapshot.value).toBe('disabled');

      counterButton?.click();
      expect(el.counterController.snapshot.context.counter).toBe(lastCounter);
    });
  });
});
