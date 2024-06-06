/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, expect, fixtureCleanup } from '@open-wc/testing';
import './blockquote-directive-ariaidref-slot-component.js';

suite('BlockquoteDirectiveAriaidrefSlot', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('Slot is hidden', () => {
    setup(async () => {
      el = await fixture(html`<slot-idref-hidden></slot-idref-hidden>`);
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot();
      });
    });
  });

  suite('Slot is visible', () => {
    setup(async () => {
      el = await fixture(html`<slot-idref-visible></slot-idref-visible>`);
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot();
      });
    });
  });

  suite('Thrown Error', () => {
    test('Error', async () => {
      try {
        await fixture(html`<slot-idref-error></slot-idref-error>`);
        assert.fail('Expected an error to be thrown');
      } catch (error) {
        assert.instanceOf(error, Error);
      }
    });
  });

  suite('No render', () => {
    setup(async () => {
      el = await fixture(html`<slot-idref-nothing></slot-idref-nothing>`);
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot();
      });
    });
  });
});
