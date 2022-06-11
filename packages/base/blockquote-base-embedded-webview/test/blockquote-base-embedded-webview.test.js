/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup, oneEvent } from '@open-wc/testing';

import '../define/blockquote-base-embedded-webview.js';

suite('BlockquoteBaseEmbeddedWebview', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(
        html` <blockquote-base-embedded-webview heading="blockquote-base-embedded-webview">
          <template data-src="./test/test.html" data-option="Basic Complex"></template>
          <template data-src="./test/test2.html" data-option="Other"></template>
        </blockquote-base-embedded-webview>`,
      );
      await el.updateComplete;
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await assert.shadowDom.equalSnapshot(el, { ignoreAttributes: ['style'] });
      });

      test('LIGHT DOM - Structure test', async () => {
        await assert.lightDom.equalSnapshot(el, { ignoreAttributes: ['style'] });
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });

      test('limit height', async () => {
        const elLimit = await fixture(
          html` <blockquote-base-embedded-webview
            limit-height
            heading="blockquote-base-embedded-webview"
          >
            <template data-src="./test/test.html" data-option="Basic Complex"></template>
          </blockquote-base-embedded-webview>`,
        );
        await assert.shadowDom.equalSnapshot(elLimit, { ignoreAttributes: ['style'] });
      });

      test('aria level', async () => {
        const heading = el.shadowRoot.querySelector('[aria-level]');
        el.headingLevel = 200;
        await el.updateComplete;
        assert.isTrue(heading.getAttribute('aria-level') === '2');
      });

      test('select option load resource', async () => {
        const select = el.shadowRoot.querySelector('select');
        const embedded = el.querySelector('blockquote-base-embedded-webview-element');
        select.options[select.selectedIndex + 1].selected = true;
        await el.updateComplete;
        select.dispatchEvent(new CustomEvent('change'));
        const { detail } = await oneEvent(embedded, 'elementloaded');
        assert.isTrue(detail.title === select.options[select.selectedIndex].text);
      });
    });
  });
});
