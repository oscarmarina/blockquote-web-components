/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll, chai} from 'vitest';
import {fixture, fixtureCleanup, oneEvent} from '@open-wc/testing-helpers';
import {chaiA11yAxe} from 'chai-a11y-axe';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';
import '../src/define/blockquote-base-embedded-webview.js';

chai.use(chaiA11yAxe);

describe('BlockquoteBaseEmbeddedWebview', () => {
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebview}
   */
  let el;
  /** @type {string | null | undefined} */
  let elShadowRoot;

  describe('Default', () => {
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

    it('SHADOW DOM - Structure test', () => {
      if (elShadowRoot == null) {
        throw new Error('Expected shadow root HTML content');
      }
      expect(
        getDiffableHTML(elShadowRoot, {ignoreAttributes: ['style', 'loading']})
      ).toMatchSnapshot('SHADOW DOM');
    });

    it('LIGHT DOM - Structure test', () => {
      expect(getDiffableHTML(el, {ignoreAttributes: ['style', 'loading']})).toMatchSnapshot(
        'LIGHT DOM'
      );
    });

    it('a11y', async () => {
      await expect(el).accessible();
    });
  });

  describe('Behavior', () => {
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

    it('limit height', async () => {
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

    it('aria level', async () => {
      const heading = el.shadowRoot?.querySelector('[aria-level]');
      if (!heading) {
        throw new Error('Expected heading element');
      }
      el.headingLevel = 200;
      await el.updateComplete;
      expect(heading.getAttribute('aria-level')).toBe('2');
    });

    it('select option load resource', async () => {
      const select = el.shadowRoot?.querySelector('select');
      const embedded = el.querySelector('blockquote-base-embedded-webview-element');
      if (select && embedded) {
        select.options[select.selectedIndex + 1].selected = true;
        await el.updateComplete;
        select.dispatchEvent(new CustomEvent('change'));
        const {detail} = await oneEvent(embedded, 'elementloaded');
        expect(detail.title).toBe(select.options[select.selectedIndex].text);
      }
    });
  });
});
