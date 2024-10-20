/* eslint-disable import/no-extraneous-dependencies */
import {html, fixture, assert, expect, fixtureCleanup, aTimeout} from '@open-wc/testing';

import '../define/blockquote-tabs.js';

suite('BlockquoteTabs', () => {
  /**
   * @type {import('../src/index').BlockquoteTabs}
   */
  let el;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
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
      await el.updateComplete;
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot({ignoreAttributes: ['id']});
        await aTimeout(100);
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot({ignoreAttributes: ['id']});
        await aTimeout(100);
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
        await aTimeout(100);
      });

      test('Click on tab updates selected tab', async () => {
        assert.equal(el.selected, 1);
        const tab = el.querySelectorAll('[role="tab"]')[2];
        tab.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
        await el.updateComplete;
        assert.equal(el.selected, 3);
        await aTimeout(100);
      });

      test('ArrowRight on tab updates selected tab', async () => {
        assert.equal(el.selected, 1);
        const tab = el.querySelector('[role="tab"]');
        tab?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowRight', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        assert.equal(el.selected, 2);
        await aTimeout(100);
      });

      test('ArrowLeft on tab updates selected tab', async () => {
        assert.equal(el.selected, 1);
        const tab = el.querySelector('[role="tab"]');
        tab?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowLeft', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        assert.equal(el.selected, 3);
        await aTimeout(100);
      });
    });
  });

  suite('Autofocus', () => {
    setup(async () => {
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
      await el.updateComplete;
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot({ignoreAttributes: ['id']});
        await aTimeout(100);
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot({ignoreAttributes: ['id']});
        await aTimeout(100);
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
        await aTimeout(100);
      });
    });
  });

  suite('Selected', () => {
    setup(async () => {
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
      await el.updateComplete;
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot({ignoreAttributes: ['id']});
        await aTimeout(100);
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot({ignoreAttributes: ['id']});
        await aTimeout(100);
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
        await aTimeout(100);
      });
    });
  });
});
