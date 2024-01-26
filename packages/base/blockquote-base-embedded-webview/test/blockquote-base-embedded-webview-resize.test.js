/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import { track } from '@polymer/iron-test-helpers/mock-interactions.js';
import '../define/blockquote-base-embedded-webview-resize.js';

suite('BlockquoteBaseEmbeddedWebviewResize', () => {
  /**
   * @type {import('../index').BlockquoteBaseEmbeddedWebviewResize}
   */
  let el;
  let rect;
  let bottomRightResizerElement;
  let bottomLeftResizerElement;
  let rightResizerElement;
  let leftResizerElement;
  let bottomResizerElement;

  const dblclickEvent = new MouseEvent('dblclick');
  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(
        html` <blockquote-base-embedded-webview-resize></blockquote-base-embedded-webview-resize>`,
      );
      await el.updateComplete;
      rect = el.shadowRoot?.querySelector('.rect');
      bottomRightResizerElement = el.shadowRoot?.querySelector('.resizer-se');
      bottomLeftResizerElement = el.shadowRoot?.querySelector('.resizer-sw');
      rightResizerElement = el.shadowRoot?.querySelector('.resizer-e');
      leftResizerElement = el.shadowRoot?.querySelector('.resizer-w');
      bottomResizerElement = el.shadowRoot?.querySelector('.resizer-s');
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

    suite('Resizing', () => {
      test('Initial size is defined by CSS', async () => {
        assert.strictEqual(
          rect.getBoundingClientRect().width,
          parseInt(getComputedStyle(rect).width, 10),
        );
        assert.strictEqual(
          rect.getBoundingClientRect().height,
          parseInt(getComputedStyle(rect).height, 10),
        );
      });
      test('Double click go back initial CSS', async () => {
        const elDblclick = await fixture(
          html` <blockquote-base-embedded-webview-resize
            style="
            --blockquote-base-embedded-webview-resize-rect-width:360px;
            --blockquote-base-embedded-webview-resize-rect-height:640px;"
          ></blockquote-base-embedded-webview-resize>`,
        );
        const bottomResizerElementDblclick = elDblclick.shadowRoot?.querySelector('.resizer-s');
        assert.isTrue(elDblclick.hasAttribute('style'));
        bottomResizerElementDblclick?.dispatchEvent(dblclickEvent);
        assert.isFalse(elDblclick.hasAttribute('style'));
      });
      test('Resize bottomRight', async () => {
        assert.isFalse(el.hasAttribute('style'));
        track(bottomRightResizerElement, 10, 10);
        assert.isTrue(el.hasAttribute('style'));
      });
      test('Resize bottomLeft', async () => {
        assert.isFalse(el.hasAttribute('style'));
        track(bottomLeftResizerElement, 10, 10);
        assert.isTrue(el.hasAttribute('style'));
      });
      test('Resize right', async () => {
        assert.isFalse(el.hasAttribute('style'));
        track(rightResizerElement, 10, 0);
        assert.isTrue(el.hasAttribute('style'));
      });
      test('Resize left', async () => {
        assert.isFalse(el.hasAttribute('style'));
        track(leftResizerElement, 10, 0);
        assert.isTrue(el.hasAttribute('style'));
      });
      test('Resize bottom', async () => {
        assert.isFalse(el.hasAttribute('style'));
        track(bottomResizerElement, 0, 10);
        assert.isTrue(el.hasAttribute('style'));
      });
    });
  });
});
