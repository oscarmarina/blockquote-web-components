/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, assert, expect, beforeAll, chai} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {chaiA11yAxe} from 'chai-a11y-axe';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';
import '../src/define/blockquote-base-embedded-webview-resize.js';

chai.use(chaiA11yAxe);

/**
 * @param {string} type The type of event
 * @param {{ x: number, y: number }} xy The (x,y) coordinates event
 * @param {!Element} node The node to fire the event on.
 */
export const makePointerEvent = (type, xy = {x: 0, y: 0}, node) => {
  const props = {
    bubbles: true,
    cancelable: true,
    composed: true,
    pointerId: 1,
    clientX: xy.x,
    clientY: xy.y,
  };
  node.dispatchEvent(new PointerEvent(type, props));
};

suite('BlockquoteBaseEmbeddedWebviewResize', () => {
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebviewResize}
   */
  let el;
  let elShadowRoot;
  let rect;
  let bottomRightResizerElement;
  let bottomLeftResizerElement;
  let rightResizerElement;
  let leftResizerElement;
  let bottomResizerElement;

  const dblclickEvent = new MouseEvent('dblclick');

  suite('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-resize></blockquote-base-embedded-webview-resize>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;
      return () => {
        fixtureCleanup();
      };
    });

    test('SHADOW DOM - Structure test', () => {
      expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
    });

    test('LIGHT DOM - Structure test', () => {
      expect(getDiffableHTML(el)).toMatchSnapshot('LIGHT DOM');
    });

    test('a11y', async () => {
      await assert.isAccessible(el);
    });
  });

  suite('Resizing', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-resize></blockquote-base-embedded-webview-resize>
      `);
      elShadowRoot = el?.shadowRoot;
      rect = elShadowRoot?.querySelector('.rect');
      bottomRightResizerElement = elShadowRoot?.querySelector('.resizer-se');
      bottomLeftResizerElement = elShadowRoot?.querySelector('.resizer-sw');
      rightResizerElement = elShadowRoot?.querySelector('.resizer-e');
      leftResizerElement = elShadowRoot?.querySelector('.resizer-w');
      bottomResizerElement = elShadowRoot?.querySelector('.resizer-s');

      return () => {
        fixtureCleanup();
      };
    });

    test('Initial size is defined by CSS', () => {
      assert.strictEqual(
        rect.getBoundingClientRect().width,
        parseInt(getComputedStyle(rect).width, 10)
      );
      assert.strictEqual(
        rect.getBoundingClientRect().height,
        parseInt(getComputedStyle(rect).height, 10)
      );
    });

    test('Double click go back initial CSS', async () => {
      const elDblclick = await fixture(html`
        <blockquote-base-embedded-webview-resize
          id="dblclick"
          style="
            --blockquote-base-embedded-webview-resize-rect-width:360px;
            --blockquote-base-embedded-webview-resize-rect-height:640px;"></blockquote-base-embedded-webview-resize>
      `);
      const bottomResizerElementDblclick = elDblclick.shadowRoot?.querySelector('.resizer-s');
      assert.isTrue(elDblclick.hasAttribute('style'));
      bottomResizerElementDblclick?.dispatchEvent(dblclickEvent);
      assert.isFalse(elDblclick.hasAttribute('style'));
    });

    test('Resize bottomRight', () => {
      assert.isFalse(el.hasAttribute('resizing'));
      makePointerEvent('pointerdown', {y: 4, x: 4}, bottomRightResizerElement);
      makePointerEvent('pointermove', {y: 10, x: 10}, bottomRightResizerElement);
      assert.isTrue(el.hasAttribute('resizing'));
      makePointerEvent('pointerup', {y: 10, x: 10}, bottomRightResizerElement);
    });
    test('Resize bottomLeft', () => {
      assert.isFalse(el.hasAttribute('resizing'));
      makePointerEvent('pointerdown', {y: 4, x: 4}, bottomLeftResizerElement);
      makePointerEvent('pointermove', {y: 10, x: 10}, bottomLeftResizerElement);
      assert.isTrue(el.hasAttribute('resizing'));
      makePointerEvent('pointerup', {y: 10, x: 10}, bottomLeftResizerElement);
    });
    test('Resize right', () => {
      assert.isFalse(el.hasAttribute('resizing'));
      makePointerEvent('pointerdown', {y: 4, x: 4}, rightResizerElement);
      makePointerEvent('pointermove', {y: 10, x: 10}, rightResizerElement);
      assert.isTrue(el.hasAttribute('resizing'));
      makePointerEvent('pointerup', {y: 10, x: 10}, rightResizerElement);
    });
    test('Resize left', () => {
      assert.isFalse(el.hasAttribute('resizing'));
      makePointerEvent('pointerdown', {y: 4, x: 4}, leftResizerElement);
      makePointerEvent('pointermove', {y: 10, x: 10}, leftResizerElement);
      assert.isTrue(el.hasAttribute('resizing'));
      makePointerEvent('pointerup', {y: 10, x: 10}, leftResizerElement);
    });
    test('Resize bottom', () => {
      assert.isFalse(el.hasAttribute('resizing'));
      makePointerEvent('pointerdown', {y: 4, x: 4}, bottomResizerElement);
      makePointerEvent('pointermove', {y: 10, x: 10}, bottomResizerElement);
      assert.isTrue(el.hasAttribute('resizing'));
      makePointerEvent('pointerup', {y: 10, x: 10}, bottomResizerElement);
    });
    test('Toogle resizing attribute', () => {
      makePointerEvent('pointerdown', {y: 4, x: 4}, bottomResizerElement);
      makePointerEvent('pointermove', {y: 10, x: 10}, bottomResizerElement);
      assert.isTrue(el.hasAttribute('resizing'));
      makePointerEvent('pointerup', {y: 10, x: 10}, bottomResizerElement);
      assert.isFalse(el.hasAttribute('resizing'));
    });
  });
});
