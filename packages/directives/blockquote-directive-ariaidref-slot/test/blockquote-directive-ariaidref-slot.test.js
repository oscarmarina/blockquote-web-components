/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';

import './blockquote-directive-ariaidref-slot-component.js';

describe('BlockquoteDirectiveAriaidrefSlot', () => {
  /** @type {HTMLElement} */
  let el;
  /** @type {string | null | undefined} */
  let elShadowRoot;

  describe('Slot is hidden', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-idref-hidden></slot-idref-hidden>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom', () => {
      it('SHADOW DOM - Structure test', async () => {
        if (elShadowRoot == null) {
          throw new Error('Expected shadow root HTML content');
        }
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });
    });
  });

  describe('Slot is visible', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-idref-visible></slot-idref-visible>
      `);

      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom', () => {
      it('SHADOW DOM - Structure test', async () => {
        if (elShadowRoot == null) {
          throw new Error('Expected shadow root HTML content');
        }
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });
    });
  });

  describe('Thrown Error', () => {
    it('Error', async () => {
      try {
        await fixture(html`
          <slot-idref-error></slot-idref-error>
        `);
        expect.fail('Expected an error to be thrown');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    });
  });

  describe('No render', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <slot-idref-nothing></slot-idref-nothing>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom', () => {
      it('SHADOW DOM - Structure test', async () => {
        if (elShadowRoot == null) {
          throw new Error('Expected shadow root HTML content');
        }
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });
    });
  });
});
