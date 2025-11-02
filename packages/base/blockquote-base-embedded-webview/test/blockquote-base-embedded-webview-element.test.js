/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll, chai} from 'vitest';
import {fixture, fixtureCleanup, oneEvent} from '@open-wc/testing-helpers';
import {chaiA11yAxe} from 'chai-a11y-axe';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';
import '../src/define/blockquote-base-embedded-webview-element.js';

chai.use(chaiA11yAxe);

describe('BlockquoteBaseEmbeddedWebviewElement', () => {
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebviewElement}
   */
  let el;
  /** @type {string | null | undefined} */
  let elShadowRoot;

  describe('Default', () => {
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

    it('SHADOW DOM - Structure test', () => {
      if (elShadowRoot == null) {
        throw new Error('Expected shadow root HTML content');
      }
      expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['loading']})).toMatchSnapshot(
        'SHADOW DOM'
      );
    });

    it('LIGHT DOM - Structure test', () => {
      expect(getDiffableHTML(el, {ignoreAttributes: ['loading']})).toMatchSnapshot('LIGHT DOM');
    });

    it('a11y', async () => {
      await expect(el).accessible();
    });
  });

  describe('Loading Behavior', () => {
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

    it('element content updates correctly when src changes', async () => {
      el.src = '/test/test2.html';
      const {detail} = await oneEvent(el, 'elementloaded');
      const contentBody = detail.contentDocument?.body;
      if (!contentBody) {
        throw new Error('Expected embedded document body');
      }
      expect(contentBody.hasAttribute('data-embedded')).toBe(true);
    });

    it('connectedCallback is called only one time', () => {
      const bodyNode = document.querySelector('body');
      bodyNode?.appendChild(el);
      expect(el.querySelectorAll('iframe').length).toBe(1);
      bodyNode?.removeChild(el);
    });

    it('element like object', async () => {
      const elObject = await fixture(html`
        <blockquote-base-embedded-webview-element
          type="object"
          src="/test/test.html"
          embedded-title="test"></blockquote-base-embedded-webview-element>
      `);
      const objectNode = elObject.querySelector('object');
      expect(objectNode?.tagName).toBe('OBJECT');
    });
  });
});
