/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, assert, expect, beforeEach, chai} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {chaiA11yAxe} from 'chai-a11y-axe';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';

chai.use(chaiA11yAxe);

import '../src/define/blockquote-tabs.js';

suite('BlockquoteTabs', () => {
  /**
   * @type {import('../src/index').BlockquoteTabs}
   */
  let el;
  let elShadowRoot;

  suite('Default', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-tabs>
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      test('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id']})).toMatchSnapshot('LIGHT DOM');
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });

      test('Click on tab updates selected tab', async () => {
        assert.equal(el.selected, 1);
        const tab = el.querySelectorAll('[role="tab"]')[2];
        tab.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
        await el.updateComplete;
        assert.equal(el.selected, 3);
      });

      test('ArrowRight on tab updates selected tab', async () => {
        assert.equal(el.selected, 1);
        const tab = el.querySelector('[role="tab"]');
        tab?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowRight', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        assert.equal(el.selected, 2);
      });

      test('ArrowLeft on tab updates selected tab', async () => {
        assert.equal(el.selected, 1);
        const tab = el.querySelector('[role="tab"]');
        tab?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowLeft', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        assert.equal(el.selected, 3);
      });

      test('Home Key', async () => {
        assert.equal(el.selected, 1);
        const tabs = el.querySelectorAll('[role="tab"]');
        tabs[0]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowLeft', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        assert.equal(el.selected, 3);
        tabs[el.selected - 1]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'Home', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        assert.equal(el.selected, 1);
      });

      test('End Key', async () => {
        assert.equal(el.selected, 1);
        const tabs = el.querySelectorAll('[role="tab"]');
        tabs[el.selected - 1]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'End', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        assert.equal(el.selected, 3);
      });

      test('Default Key', async () => {
        assert.equal(el.selected, 1);
        const tabs = el.querySelectorAll('[role="tab"]');
        tabs[0]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowLeft', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        assert.equal(el.selected, 3);
        tabs[el.selected - 1]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'PageUp', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        assert.equal(el.selected, 3);
      });
    });
  });

  suite('Autofocus', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-tabs autofocus>
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;
      return () => {
        fixtureCleanup();
      };
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      test('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id']})).toMatchSnapshot('LIGHT DOM');
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });
  });

  suite('Selected', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-tabs selected="2">
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;
      return () => {
        fixtureCleanup();
      };
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      test('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id']})).toMatchSnapshot('LIGHT DOM');
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });
  });
});
