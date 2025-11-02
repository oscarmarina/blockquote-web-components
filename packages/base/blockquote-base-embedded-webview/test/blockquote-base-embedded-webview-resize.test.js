/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll, chai} from 'vitest';
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

describe('BlockquoteBaseEmbeddedWebviewResize', () => {
  /**
   * @type {import('../src/index').BlockquoteBaseEmbeddedWebviewResize}
   */
  let el;
  /** @type {string | null | undefined} */
  let elShadowRootHTML;

  const dblclickEvent = new MouseEvent('dblclick');

  describe('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-resize></blockquote-base-embedded-webview-resize>
      `);
      elShadowRootHTML = el?.shadowRoot?.innerHTML;
      return () => {
        fixtureCleanup();
      };
    });

    it('SHADOW DOM - Structure test', () => {
      if (elShadowRootHTML == null) {
        throw new Error('Expected shadow root HTML content');
      }
      expect(getDiffableHTML(elShadowRootHTML)).toMatchSnapshot('SHADOW DOM');
    });

    it('LIGHT DOM - Structure test', () => {
      expect(getDiffableHTML(el)).toMatchSnapshot('LIGHT DOM');
    });

    it('a11y', async () => {
      await expect(el).accessible();
    });
  });

  describe('Resizing', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-base-embedded-webview-resize></blockquote-base-embedded-webview-resize>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('Initial size is defined by CSS', () => {
      const rectEl = el.shadowRoot?.querySelector('.rect');
      if (!rectEl) {
        throw new Error('Expected resizable element');
      }
      expect(rectEl.getBoundingClientRect().width).toBe(
        parseInt(getComputedStyle(rectEl).width, 10)
      );
      expect(rectEl.getBoundingClientRect().height).toBe(
        parseInt(getComputedStyle(rectEl).height, 10)
      );
    });

    it('Double click go back initial CSS', async () => {
      const elDblclick = await fixture(html`
        <blockquote-base-embedded-webview-resize
          id="dblclick"
          style="
            --blockquote-base-embedded-webview-resize-rect-width:360px;
            --blockquote-base-embedded-webview-resize-rect-height:640px;"></blockquote-base-embedded-webview-resize>
      `);
      const bottomResizerElementDblclick = elDblclick.shadowRoot?.querySelector('.resizer-s');
      expect(elDblclick.hasAttribute('style')).toBe(true);
      bottomResizerElementDblclick?.dispatchEvent(dblclickEvent);
      expect(elDblclick.hasAttribute('style')).toBe(false);
    });

    it('Resize bottomRight', () => {
      const bottomRight = el.shadowRoot?.querySelector('.resizer-se');
      if (!bottomRight) {
        throw new Error('Expected bottom-right resizer element');
      }
      expect(el.hasAttribute('resizing')).toBe(false);
      makePointerEvent('pointerdown', {y: 4, x: 4}, bottomRight);
      makePointerEvent('pointermove', {y: 10, x: 10}, bottomRight);
      expect(el.hasAttribute('resizing')).toBe(true);
      makePointerEvent('pointerup', {y: 10, x: 10}, bottomRight);
    });
    it('Resize bottomLeft', () => {
      const bottomLeft = el.shadowRoot?.querySelector('.resizer-sw');
      if (!bottomLeft) {
        throw new Error('Expected bottom-left resizer element');
      }
      expect(el.hasAttribute('resizing')).toBe(false);
      makePointerEvent('pointerdown', {y: 4, x: 4}, bottomLeft);
      makePointerEvent('pointermove', {y: 10, x: 10}, bottomLeft);
      expect(el.hasAttribute('resizing')).toBe(true);
      makePointerEvent('pointerup', {y: 10, x: 10}, bottomLeft);
    });
    it('Resize right', () => {
      const rightResizer = el.shadowRoot?.querySelector('.resizer-e');
      if (!rightResizer) {
        throw new Error('Expected right resizer element');
      }
      expect(el.hasAttribute('resizing')).toBe(false);
      makePointerEvent('pointerdown', {y: 4, x: 4}, rightResizer);
      makePointerEvent('pointermove', {y: 10, x: 10}, rightResizer);
      expect(el.hasAttribute('resizing')).toBe(true);
      makePointerEvent('pointerup', {y: 10, x: 10}, rightResizer);
    });
    it('Resize left', () => {
      const leftResizer = el.shadowRoot?.querySelector('.resizer-w');
      if (!leftResizer) {
        throw new Error('Expected left resizer element');
      }
      expect(el.hasAttribute('resizing')).toBe(false);
      makePointerEvent('pointerdown', {y: 4, x: 4}, leftResizer);
      makePointerEvent('pointermove', {y: 10, x: 10}, leftResizer);
      expect(el.hasAttribute('resizing')).toBe(true);
      makePointerEvent('pointerup', {y: 10, x: 10}, leftResizer);
    });
    it('Resize bottom', () => {
      const bottomResizer = el.shadowRoot?.querySelector('.resizer-s');
      if (!bottomResizer) {
        throw new Error('Expected bottom resizer element');
      }
      expect(el.hasAttribute('resizing')).toBe(false);
      makePointerEvent('pointerdown', {y: 4, x: 4}, bottomResizer);
      makePointerEvent('pointermove', {y: 10, x: 10}, bottomResizer);
      expect(el.hasAttribute('resizing')).toBe(true);
      makePointerEvent('pointerup', {y: 10, x: 10}, bottomResizer);
    });
    it('Toogle resizing attribute', () => {
      const bottomResizer = el.shadowRoot?.querySelector('.resizer-s');
      if (!bottomResizer) {
        throw new Error('Expected bottom resizer element');
      }
      makePointerEvent('pointerdown', {y: 4, x: 4}, bottomResizer);
      makePointerEvent('pointermove', {y: 10, x: 10}, bottomResizer);
      expect(el.hasAttribute('resizing')).toBe(true);
      makePointerEvent('pointerup', {y: 10, x: 10}, bottomResizer);
      expect(el.hasAttribute('resizing')).toBe(false);
    });
  });
});
