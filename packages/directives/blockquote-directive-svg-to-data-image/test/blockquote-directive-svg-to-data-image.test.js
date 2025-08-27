/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, expect, beforeAll} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {LitElement, svg, html} from 'lit';
import {blockquoteDirectiveSvgToDataImage} from '../src/index.js';

const svgTag1 = html`
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="white" />
    <circle cx="50" cy="50" r="40" fill="black" />
    <circle cx="50" cy="50" r="30" fill="white" />
    <circle cx="50" cy="50" r="20" fill="black" />
    <circle cx="50" cy="50" r="10" fill="white" />
  </svg>
`;

const svgTag2 = html`
  <svg
    id="${String(1)}"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="white" />
    <circle cx="50" cy="50" r="40" fill="black" />
    <circle cx="50" cy="50" r="30" fill="white" />
    <circle cx="50" cy="50" r="20" fill="black" />
    <circle cx="50" cy="50" r="10" fill="white" />
  </svg>
`;

const circleTag = svg`<circle cx="50" cy="50" r="10" fill="pink" />`;

const circleString = `<circle cx="50" cy="50" r="10" fill="pink" />`;

const svgTag3 = html`
  <svg
    id="${String(2)}"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="white" />
    <circle cx="50" cy="50" r="40" fill="black" />
    <circle cx="50" cy="50" r="30" fill="white" />
    <circle cx="50" cy="50" r="20" fill="black" />
    ${circleTag}
  </svg>
`;

const SvgToDataImageDemo = class BlockquoteDirectiveSvgToDataImageDemo extends LitElement {
  static get properties() {
    return {
      svgToRender: {
        type: Object,
        attribute: false,
      },
    };
  }

  constructor() {
    super();
    this.svgToRender = svgTag1;
  }

  render() {
    return html`
      <div
        style="background: url('${blockquoteDirectiveSvgToDataImage(
          // @ts-ignore
          this.svgToRender
        )}') no-repeat center center #e4e4e4"></div>
    `;
  }
};

customElements.define('svg-to-data-image', SvgToDataImageDemo);

suite('SVGtoDataImage', () => {
  /**
   * @type {SvgToDataImageDemo}
   */
  let el;
  let elShadowRoot;

  suite('base', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <svg-to-data-image></svg-to-data-image>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    test('Shadow DOM: SVG string', async () => {
      el.svgToRender = svgTag1;
      await el.updateComplete;
      expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
    });

    test('Shadow DOM: SVG with interpolation', async () => {
      el.svgToRender = svgTag2;
      await el.updateComplete;
      expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
    });

    test('Shadow DOM: SVG with interpolation 2', async () => {
      el.svgToRender = svgTag3;
      await el.updateComplete;
      expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
    });

    test('Shadow DOM: non-TemplateResult', async () => {
      el.svgToRender = /** @type {*} */ (circleString);
      await el.updateComplete;
      expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
    });
  });
});
