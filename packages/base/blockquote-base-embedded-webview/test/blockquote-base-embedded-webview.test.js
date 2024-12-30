/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, assert, expect, beforeAll} from 'vitest';
import {assert as a11y, fixture, fixtureCleanup, oneEvent} from '@open-wc/testing';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff';
import {html} from 'lit';
import '../src/define/blockquote-base-embedded-webview.js';

suite('BlockquoteBaseEmbeddedWebview', () => {
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebview}
   */
  let el;
  let elShadowRoot;
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebview}
   */
  let variant;
  let variantShadowRoot;

  suite('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview heading="blockquote-base-embedded-webview">
          <template
            data-src="/test/test.html"
            data-option="Base"
            data-description="base - description"></template>
          <template
            data-src="/test/test2.html"
            data-option="Other"
            data-description="other - description"></template>
        </blockquote-base-embedded-webview>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    test('SHADOW DOM - Structure test', () => {
      expect(
        getDiffableHTML(elShadowRoot, {ignoreAttributes: ['style', 'loading']})
      ).toMatchSnapshot('SHADOW DOM');
    });

    test('LIGHT DOM - Structure test', () => {
      expect(getDiffableHTML(el, {ignoreAttributes: ['style', 'loading']})).toMatchSnapshot(
        'LIGHT DOM'
      );
    });

    test('a11y', async () => {
      await a11y.isAccessible(el);
    });
  });

  suite('Behavior', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview heading="blockquote-base-embedded-webview">
          <template
            data-src="/test/test.html"
            data-option="Base"
            data-description="base - description"></template>
          <template
            data-src="/test/test2.html"
            data-option="Other"
            data-description="other - description"></template>
        </blockquote-base-embedded-webview>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    test('limit height', async () => {
      const elLimit = await fixture(html`
        <blockquote-base-embedded-webview limit-height heading="blockquote-base-embedded-webview">
          <template data-src="/test/test.html" data-option="Base Complex"></template>
        </blockquote-base-embedded-webview>
      `);
      const elLimitShadowRoot = elLimit?.shadowRoot?.innerHTML || '';
      expect(
        getDiffableHTML(elLimitShadowRoot, {ignoreAttributes: ['style', 'loading']})
      ).toMatchSnapshot('SHADOW DOM');
    });

    test('aria level', async () => {
      const heading = el.shadowRoot?.querySelector('[aria-level]');
      el.headingLevel = 200;
      await el.updateComplete;
      assert.isTrue(heading?.getAttribute('aria-level') === '2');
    });

    test('select option load resource', async () => {
      const select = el.shadowRoot?.querySelector('select');
      const embedded = el.querySelector('blockquote-base-embedded-webview-element');
      if (select && embedded) {
        select.options[select.selectedIndex + 1].selected = true;
        await el.updateComplete;
        select.dispatchEvent(new CustomEvent('change'));
        const {detail} = await oneEvent(embedded, 'elementloaded');
        assert.isTrue(detail.title === select.options[select.selectedIndex].text);
      }
    });
  });

  suite('variant', () => {
    beforeAll(async () => {
      variant = await fixture(html`
        <blockquote-base-embedded-webview heading="blockquote-base-embedded-webview">
          <template data-src="/test/test.html"></template>
        </blockquote-base-embedded-webview>
      `);
      variantShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    test('SHADOW DOM - Structure test', () => {
      expect(
        getDiffableHTML(variantShadowRoot, {ignoreAttributes: ['style', 'loading']})
      ).toMatchSnapshot('VARIANT - SHADOW DOM');
    });

    test('LIGHT DOM - Structure test', () => {
      expect(getDiffableHTML(variant, {ignoreAttributes: ['style', 'loading']})).toMatchSnapshot(
        'VARIANT - LIGHT DOM'
      );
    });

    test('a11y', async () => {
      await a11y.isAccessible(variant);
    });
  });
});
