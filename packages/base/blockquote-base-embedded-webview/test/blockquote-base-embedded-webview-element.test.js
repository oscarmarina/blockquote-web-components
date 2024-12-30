/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, assert, expect, beforeAll} from 'vitest';
import {assert as a11y, fixture, fixtureCleanup, oneEvent} from '@open-wc/testing';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff';
import {html} from 'lit';
import '../src/define/blockquote-base-embedded-webview-element.js';

suite('BlockquoteBaseEmbeddedWebviewElement', () => {
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebviewElement}
   */
  let el;
  let elShadowRoot;

  suite('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-element
          src="/test/test.html"
          embedded-title="test"></blockquote-base-embedded-webview-element>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    test('SHADOW DOM - Structure test', () => {
      expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['loading']})).toMatchSnapshot(
        'SHADOW DOM'
      );
    });

    test('LIGHT DOM - Structure test', () => {
      expect(getDiffableHTML(el, {ignoreAttributes: ['loading']})).toMatchSnapshot('LIGHT DOM');
    });

    test('a11y', async () => {
      await a11y.isAccessible(el);
    });
  });

  suite('Loading Behavior', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-element
          src="/test/test.html"
          embedded-title="test"></blockquote-base-embedded-webview-element>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    test('element content updates correctly when src changes', async () => {
      el.src = '/test/test2.html';
      const {detail} = await oneEvent(el, 'elementloaded');
      assert.isTrue(detail.contentDocument.body.hasAttribute('data-embedded'));
    });

    test('connectedCallback is called only one time', () => {
      const bodyNode = document.querySelector('body');
      bodyNode?.appendChild(el);
      assert.strictEqual(el.querySelectorAll('iframe').length, 1);
      bodyNode?.removeChild(el);
    });

    test('element like object', async () => {
      const elObject = await fixture(html`
        <blockquote-base-embedded-webview-element
          type="object"
          src="/test/test.html"
          embedded-title="test"></blockquote-base-embedded-webview-element>
      `);
      const objectNode = elObject.querySelector('object');
      assert.strictEqual(objectNode?.tagName, 'OBJECT');
    });
  });
});
