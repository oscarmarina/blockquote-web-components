/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, assert, expect, beforeAll, vi, chai} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {chaiA11yAxe} from 'chai-a11y-axe';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';
import '../src/define/blockquote-base-embedded-webview-size.js';

chai.use(chaiA11yAxe);

suite('BlockquoteBaseEmbeddedWebviewSize', () => {
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebviewSize}
   */
  let el;
  let elShadowRoot;
  let screenSizesButtons;
  let buttonSize3;

  const screenSizes = [
    {width: 360, height: 640, id: '360x640'},
    {width: 1024, height: 768, id: '1024x768'},
    {width: 1920, height: 1080, id: '1920x1080'},
  ];

  suite('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-size
          .screenSizes="${screenSizes}"></blockquote-base-embedded-webview-size>
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
      await assert.isAccessible(el);
    });
  });

  suite('Behavior', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-size
          .screenSizes="${screenSizes}"></blockquote-base-embedded-webview-size>
      `);
      elShadowRoot = el?.shadowRoot;
      screenSizesButtons = elShadowRoot?.querySelectorAll('button');
      buttonSize3 = screenSizesButtons?.[2];

      return () => {
        fixtureCleanup();
      };
    });

    test('selectedchange event is raised', async () => {
      const spyEvent = vi.fn();
      el.addEventListener('selectedchange', spyEvent);
      el.selected = 1;
      await el.updateComplete;
      expect(spyEvent).toHaveBeenCalled();
    });

    test('click event is raised', () => {
      const spyEvent = vi.fn();
      el.addEventListener('click', spyEvent);
      buttonSize3.click();
      expect(spyEvent).toHaveBeenCalled();
    });

    test('screen-sizes array are sorted in descending order (by width)', () => {
      const lastIndex = Number(buttonSize3.dataset.index);
      assert.isTrue(lastIndex === screenSizesButtons.length);
    });

    test('Hidden screen size options that are too large for the container', async () => {
      assert.strictEqual(el.shadowRoot?.querySelectorAll('button[hidden]').length, 2);
      el.style.width = '1024px';
      window.dispatchEvent(new Event('resize'));
      el.requestUpdate();
      await el.updateComplete;
      assert.strictEqual(el.shadowRoot?.querySelectorAll('button[hidden]').length, 1);
    });
  });

  suite('Custom selected', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-size
          selected="3"
          width-in-percent></blockquote-base-embedded-webview-size>
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
      await assert.isAccessible(el);
    });
  });
});
