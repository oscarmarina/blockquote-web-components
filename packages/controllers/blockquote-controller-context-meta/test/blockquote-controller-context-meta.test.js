/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect, fixtureCleanup } from '@open-wc/testing';
import './elements.js';
import './flow-element.js';

suite('BlockquoteControllerContextMeta', () => {
  /**
   * @type {import('./elements').ProviderEl}
   */
  let el;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(html`
        <provider-el>
          <consumer-el></consumer-el>
        </provider-el>
      `);
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot();
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot();
      });
    });
  });

  suite('Override ', () => {
    setup(async () => {
      el = await fixture(html`
        <provider-el data="specified from attribute">
          <consumer-el></consumer-el>
        </provider-el>
      `);
    });
    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot();
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot();
      });
    });
  });

  suite('Extend', () => {
    setup(async () => {
      el = await fixture(html`
        <flow-element></flow-element>
      `);
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot();
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot();
      });
    });
  });
});
