/* eslint-disable import/no-extraneous-dependencies */
import {html, fixture, assert, fixtureCleanup} from '@open-wc/testing';
import {spy} from 'sinon';
import '../define/blockquote-base-embedded-webview-size.js';

suite('BlockquoteBaseEmbeddedWebviewSize', () => {
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebviewSize}
   */
  let el;
  let screenSizesButtons;
  let buttonSize3;

  const screenSizes = [
    {width: 360, height: 640, id: '360x640'},
    {width: 1024, height: 768, id: '1024x768'},
    {width: 1920, height: 1080, id: '1920x1080'},
  ];

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-size
          .screenSizes="${screenSizes}"></blockquote-base-embedded-webview-size>
      `);
      await el.updateComplete;

      screenSizesButtons = el.shadowRoot?.querySelectorAll('button');
      buttonSize3 = screenSizesButtons?.[2];
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await assert.shadowDom.equalSnapshot(el);
      });

      test('LIGHT DOM - Structure test', async () => {
        await assert.lightDom.equalSnapshot(el);
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });

      test('selectedchange event is raised', async () => {
        const spyEvent = spy();
        el.addEventListener('selectedchange', spyEvent);
        el.selected = 1;
        await el.updateComplete;
        assert.isTrue(spyEvent.called, 'selectedchange event is raised');
      });

      test('click event is raised', async () => {
        const spyEvent = spy();
        el.addEventListener('click', spyEvent);
        buttonSize3.click();
        await el.updateComplete;
        assert.isTrue(spyEvent.called, 'click event is raised');
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
  });

  suite('Custom selected', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-size
          selected="3"
          width-in-percent></blockquote-base-embedded-webview-size>
      `);
      await el.updateComplete;
    });
    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await assert.shadowDom.equalSnapshot(el);
      });

      test('LIGHT DOM - Structure test', async () => {
        await assert.lightDom.equalSnapshot(el);
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });
  });
});
