/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, assert, expect, beforeAll, beforeEach} from 'vitest';
import {assert as a11y, fixture, fixtureCleanup} from '@open-wc/testing';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff';
import {html} from 'lit';
import '../demo/xstate-counter.js';

suite('BlockquoteControllerXstate', () => {
  /**
   * * @type {import('../demo/xstate-counter').XstateCounter}
   */
  let el;
  let elShadowRoot;

  suite('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <xstate-counter>light-dom</xstate-counter>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    test('default counter 0', () => {
      assert.equal(el.counterController.snapshot.context.counter, 0);
    });

    test('should get an instance of actor', () => {
      assert.isObject(el.counterController.actor);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      test('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id']})).toMatchSnapshot('LIGHT DOM');
      });

      test('a11y', async () => {
        await a11y.isAccessible(el);
      });
    });
  });

  suite('Events ', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <xstate-counter></xstate-counter>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    test('increases the counter on Increment button click', () => {
      el.shadowRoot?.querySelector('button')?.click();
      assert.equal(el.counterController.snapshot.context.counter, 1);
    });

    test('decreases the counter on Decrement button click', () => {
      el.shadowRoot?.querySelector('button')?.click();
      /** @type {HTMLButtonElement} */ (el.shadowRoot?.querySelector('button + button'))?.click();
      assert.equal(el.counterController.snapshot.context.counter, 0);
    });

    test('disable the counter on Enabled/Disabled button click', () => {
      let lastCounter = el.counterController.snapshot.context.counter;
      const counterButton = el.shadowRoot?.querySelector('button');
      const disabledButton = el.shadowRoot?.querySelector('div + div button');

      counterButton?.click();
      assert.equal(el.counterController.snapshot.context.counter, lastCounter + 1);
      lastCounter = el.counterController.snapshot.context.counter;

      /** @type {HTMLButtonElement} */ (disabledButton)?.click();
      assert.equal(el.counterController.snapshot.value, 'disabled');

      counterButton?.click();
      assert.equal(el.counterController.snapshot.context.counter, lastCounter);
    });
  });
});
