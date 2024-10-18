import {Directive, directive} from 'lit/directive.js';
import {isTemplateResult} from 'lit/directive-helpers.js';
import {noChange} from 'lit';

/**
 * # blockquoteDirectiveSvgToDataImage
 *
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * This directive receives an `<svg>` HTML element from a [Template Result](https://lit.dev/docs/api/templates/#TemplateResult)
 * and returns it as data URI (data:image/svg+xml).
 *
 * > [svg-templates](https://lit.dev/tutorials/svg-templates/#1)
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/directives/blockquote-directive-svg-to-data-image)
 *
 * ### Usage
 *
 * ### Simple SVG
 *
 * ```js
 * get _svgTag() {
 *   return html` <svg
 *     xmlns="htt://www.w3.org/2000/svg"
 *     viewBox="0 0 100 100"
 *     height="100px"
 *     width="100px"
 *   >
 *     <!-- ... (SVG content) ... -->
 *   </svg>`;
 * }
 *
 * render() {
 *   return html`
 *     <div
 *       aria-hidden="true"
 *       style="background-image: url('${blockquoteDirectiveSvgToDataImage(this._svgTag)}');"
 *     ></div>
 *   `;
 * }
 * ```
 *
 * ### Complex SVG
 *
 * ```js
 * get _bgTpl() {
 *   return svg` <circle fill="${this.bgFill}" cx="100" cy="100" r="100"></circle> `;
 * }
 *
 * get _shapeTpl() {
 *   return svg`
 *     <g fill="#fff">
 *       <!-- ... (SVG content) ... -->
 *     </g>
 *   `;
 * }
 *
 * get _svgTag() {
 *   return html`<svg
 *     id="${Math.random().toString(36).substring(2, 10)}"
 *     xmlns="http://www.w3.org/2000/svg"
 *     width="200"
 *     height="200"
 *     focusable="false"
 *     role="presentation"
 *     viewBox="0 0 200 200"
 *   >
 *     ${this._bgTpl} ${this._shapeTpl}
 *   </svg>`;
 * }
 *
 * render() {
 *   return html`
 *     <div
 *       aria-hidden="true"
 *       style="background-image:var(--bgUrl, url('${blockquoteDirectiveSvgToDataImage(this._svgTag)}'));"
 *     ></div>
 *   `;
 * }
 * ```
 *
 */
export class README extends Text {}

/**
 * Encodes SVG XML to a data URI.
 * @param {string} url - The SVG XML string.
 * @returns {string} The encoded data URI.
 */
const svgXmlEncode = (url = '') => {
  const svgEncode = encodeURI(url).replace(/#/g, '%23');
  return `data:image/svg+xml;charset=utf-8,${svgEncode}`;
};

/**
 * Merges two arrays in an alternating pattern.
 * @param {Array} firstArray - The first array.
 * @param {Array} secondArray - The second array.
 * @returns {Array} The merged array.
 */
const mergeAlternatingValues = (firstArray = [], secondArray = []) =>
  firstArray.map((strings, index) =>
    [
      strings,
      isTemplateResult(secondArray[index])
        ? mergeAlternatingValues(secondArray[index].strings, secondArray[index].values).join('')
        : secondArray[index],
    ].join('')
  );

/**
 * A Lit directive that converts an SVG template result into a data URI.
 */
class BlockquoteDirectiveSvgToDataImage extends Directive {
  /**
   * @param {HTMLOrSVGElement} svgNodeInfo - The SVG template result.
   * @returns {string | *} The data URI.
   */
  render(svgNodeInfo) {
    if (!svgNodeInfo || !isTemplateResult(svgNodeInfo)) {
      return noChange;
    }
    // @ts-ignore
    const svgTemplateStrings = svgNodeInfo.strings;
    const svgTemplateResultValues = svgNodeInfo.values;

    const svgXmlEncodeString = mergeAlternatingValues(
      svgTemplateStrings,
      svgTemplateResultValues
    ).join('');

    return svgXmlEncode(svgXmlEncodeString);
  }
}

export const blockquoteDirectiveSvgToDataImage = directive(BlockquoteDirectiveSvgToDataImage);
