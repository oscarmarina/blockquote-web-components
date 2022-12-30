/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import { LitElement, svg, html as litHtml } from 'lit';
import { blockquoteDirectiveSvgToDataImage } from '../index.js';

const svgTag1 = litHtml`<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="white" />
<circle cx="50" cy="50" r="40" fill="black" />
<circle cx="50" cy="50" r="30" fill="white" />
<circle cx="50" cy="50" r="20" fill="black" />
<circle cx="50" cy="50" r="10" fill="white" />
</svg>`;

const svgTag2 = litHtml`<svg id="${String(
  1,
)}" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="white" />
<circle cx="50" cy="50" r="40" fill="black" />
<circle cx="50" cy="50" r="30" fill="white" />
<circle cx="50" cy="50" r="20" fill="black" />
<circle cx="50" cy="50" r="10" fill="white" />
</svg>`;

const circleTag = svg`<circle cx="50" cy="50" r="10" fill="pink" />`;

const circleString = `<circle cx="50" cy="50" r="10" fill="pink" />`;

const svgTag3 = litHtml`<svg id="${String(
  2,
)}" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="white" />
<circle cx="50" cy="50" r="40" fill="black" />
<circle cx="50" cy="50" r="30" fill="white" />
<circle cx="50" cy="50" r="20" fill="black" />
${circleTag}
</svg>`;

class BlockquoteDirectiveSvgToDataImageDemo extends LitElement {
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
    return litHtml`
      <div style="background: url('${blockquoteDirectiveSvgToDataImage(
        this.svgToRender,
      )}') no-repeat center center #e4e4e4"></div>
    `;
  }
}

customElements.define('svg-to-data-image', BlockquoteDirectiveSvgToDataImageDemo);

suite('SVGtoDataImage', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('base', () => {
    setup(async () => {
      el = await fixture(html` <svg-to-data-image></svg-to-data-image> `);
      await el.updateComplete;
    });

    test('Shadow DOM: SVG string', async () => {
      el.svgToRender = svg`${svgTag1}`;
      await el.updateComplete;
      await assert.shadowDom.equalSnapshot(el);
    });

    test('Shadow DOM: SVG with interpolation', async () => {
      el.svgToRender = svgTag2;
      await el.updateComplete;
      await assert.shadowDom.equalSnapshot(el);
    });

    test('Shadow DOM: SVG with interpolation 2', async () => {
      el.svgToRender = svgTag3;
      await el.updateComplete;
      await assert.shadowDom.equalSnapshot(el);
    });

    test('Shadow DOM: non-TemplateResult', async () => {
      el.svgToRender = circleString;
      await el.updateComplete;
      await assert.shadowDom.equalSnapshot(el);
    });
  });
});
