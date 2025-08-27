/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, assert, expect, beforeAll} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';

import './blockquote-directive-ariaidref-slot-component.js';

suite('BlockquoteDirectiveAriaidrefSlot', () => {
  let el;
  let elShadowRoot;

  suite('Slot is hidden', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-idref-hidden></slot-idref-hidden>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });
    });
  });

  suite('Slot is visible', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-idref-visible></slot-idref-visible>
      `);

      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });
    });
  });

  suite('Thrown Error', () => {
    test('Error', async () => {
      try {
        await fixture(html`
          <slot-idref-error></slot-idref-error>
        `);
        assert.fail('Expected an error to be thrown');
      } catch (error) {
        assert.instanceOf(error, Error);
      }
    });
  });

  suite('No render', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-idref-nothing></slot-idref-nothing>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });
    });
  });
});
