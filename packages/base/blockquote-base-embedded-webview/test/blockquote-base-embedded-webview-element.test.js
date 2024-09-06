/* eslint-disable import/no-extraneous-dependencies */
import {html, fixture, assert, fixtureCleanup, oneEvent} from '@open-wc/testing';
import '../define/blockquote-base-embedded-webview-element.js';

suite('BlockquoteBaseEmbeddedWebviewElement', () => {
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebviewElement}
   */
  let el;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-element
          src="test/test.html"
          embedded-title="test"></blockquote-base-embedded-webview-element>
      `);
      await el.updateComplete;
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        // @ts-ignore
        await assert.shadowDom.equalSnapshot(el, {ignoreAttributes: ['loading']});
      });

      test('LIGHT DOM - Structure test', async () => {
        // @ts-ignore
        await assert.lightDom.equalSnapshot(el, {ignoreAttributes: ['loading']});
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });

      test('element content loaded', async () => {
        el.src = 'test/test2.html';
        const {detail} = await oneEvent(el, 'elementloaded', true);
        assert.isTrue(detail.contentDocument.body.hasAttribute('data-embedded'));
      });

      test('connectedCallback is called only one time', async () => {
        const bodyNode = document.querySelector('body');
        bodyNode?.appendChild(el);
        assert.strictEqual(el.querySelectorAll('iframe').length, 1);
      });

      test('element like object', async () => {
        const elObject = await fixture(html`
          <blockquote-base-embedded-webview-element
            type="object"
            src="test/test.html"
            embedded-title="test"></blockquote-base-embedded-webview-element>
        `);
        const objectNode = elObject.querySelector('object');
        assert.strictEqual(objectNode?.tagName, 'OBJECT');
      });
    });
  });
});
