import {html, LitElement, render as LitHtmlRender} from 'lit';
import {ref, createRef} from 'lit/directives/ref.js';
import './define/blockquote-base-embedded-webview-size.js';
import './define/blockquote-base-embedded-webview-resize.js';
import './define/blockquote-base-embedded-webview-element.js';
import {styles} from './styles/blockquote-base-embedded-webview-styles.css.js';

const chevronDownIcon = html`
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentcolor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
`;

// https://github.com/ChromeDevTools/devtools-frontend/blob/main/front_end/Images/src/open-externally.svg
const openExternallyIcon = html`
  <svg
    viewBox="0 0 20 20"
    fill-rule="evenodd"
    fill="currentcolor"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H10V4.5H4.5V15.5H15.5V10H17V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM8.062 13L7 11.938L14.438 4.5H12V3H17V8H15.5V5.562L8.062 13Z" />
  </svg>
`;

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `blockquote-base-embedded-webview` offers a responsive display using individual HTML files as content with different use cases to be displayed.
 * It will create a `select` tag with the provided demo HTML files and add the `[data-embedded]` attribute to the loaded body tag.
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/base/blockquote-base-embedded-webview)
 *
 * ### Usage
 *
 * ```html
 * <blockquote-base-embedded-webview heading="My demo title">
 *   <template data-src="./base.html" data-option="Base" data-description="base - description"></template>
 *   <template data-src="./complex.html" data-option="Complex" data-description="complex - description"></template>
 * </blockquote-base-embedded-webview>
 * ```
 *
 * ## base.html
 *
 * ```html
 * <!DOCTYPE html>
 * <html lang="en">
 *   <head>
 *     <title>Demo Base</title>
 *     <meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=resizes-content" />
 *     <meta charset="utf-8" />
 *     <style>
 *       :root {
 *         font: normal medium/1.25 sans-serif;
 *       }
 *       body {
 *         margin: 0;
 *       }
 *       [data-embedded] .hidden {
 *         display: none;
 *       }
 *     </style>
 *   </head>
 *   <body>
 *     <h1 class="hidden">Heading</h1>
 *     <p>Base Demo</p>
 *   </body>
 * </html>
 * ```
 *
 * @attribute heading
 * @attribute selected
 * @attribute heading-level
 * @attribute screen-size-selected
 * @attribute limit-height
 */

export class BlockquoteBaseEmbeddedWebview extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      /**
       * The heading of the webview.
       */
      heading: {
        type: String,
      },

      /**
       * Index of currently srcset file
       */
      selected: {
        type: Number,
      },

      /**
       * Heading level from 1 to 6
       */
      headingLevel: {
        type: Number,
        attribute: 'heading-level',
        reflect: true,
        useDefault: true,
      },

      /**
       * Index of currently screen size selected
       */
      screenSizeSelected: {
        type: Number,
        attribute: 'screen-size-selected',
      },

      /**
       * Limit height to 100% available
       */
      limitHeight: {
        type: Boolean,
        attribute: 'limit-height',
        reflect: true,
        useDefault: true,
      },
    };
  }

  constructor() {
    super();
    this.selected = 0;
    this.screenSizeSelected = 0;
    this.headingLevel = 1;
    this.heading = '';
    this.__resetResizing = false;
    this.__selectArrow = chevronDownIcon;
    this.__readDataPos = {x: '0', y: '0', resizing: false, cursor: ''};
    this.limitHeight = false;
    this._sources = [{src: '', option: '', description: ''}];
    this._embeddedResizeRef = createRef();
  }

  async connectedCallback() {
    super.connectedCallback?.();
    await this.updateComplete;

    this.addEventListener('webviewresize', (ev) => {
      const {detail} = /** @type {CustomEvent} */ (ev);

      Object.assign(this.__readDataPos, detail);
      this.__resetResizing = true;

      if (detail.cursor === 'n' || detail.cursor === 'ne' || detail.cursor === 'nw') {
        // http://makeseleniumeasy.com/2018/03/14/part-7-usages-of-javascripts-in-selenium-difference-among-scrollby-scrollto-and-scroll-methods-of-javascript/
        window.scroll({
          top: Math.abs(parseInt(this.__readDataPos.y, 10) + (this._controlBottom ?? 0)),
          left: 0,
          behavior: 'smooth',
        });
      }

      this.requestUpdate();
    });

    const _sources = Array.from(this.querySelectorAll('template'));
    if (_sources.length) {
      this._sources = _sources.map((item) => {
        const {src = '', option = '', description = ''} = item.dataset;
        return {
          src,
          option,
          description,
        };
      });

      this._src = this._sources[this.selected].src;
    }

    this.embedded = this.shadowRoot?.querySelector('[slot="embedded"]');
    if (this._embeddedResizeRef.value) {
      this._controlBottom = parseFloat(
        window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom
      );
    }
  }

  _updateSize = ({detail}) => {
    /** @type {HTMLElement} */ (this._embeddedResizeRef?.value)?.style.setProperty(
      '--blockquote-base-embedded-webview-resize-rect-width',
      `${detail.width}px`
    );
    /** @type {HTMLElement} */ (this._embeddedResizeRef?.value)?.style.setProperty(
      '--blockquote-base-embedded-webview-resize-rect-height',
      this.limitHeight ? '100%' : `${detail.height}px`
    );

    this.__resetResizing = false;
    this.requestUpdate();
  };

  get _headingLevel() {
    return this.headingLevel >= 1 && this.headingLevel <= 6 ? this.headingLevel : 2;
  }

  render() {
    return html`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `;
  }

  _litHtmlRender() {
    LitHtmlRender(this._lightDomTpl, this, {host: this});
  }

  get _lightDomTpl() {
    return this.embedded;
  }

  get _headerTpl() {
    return html`
      <header>
        <div>
          ${this._headingTpl} ${this._navigationDemosTpl} ${this._descriptionTpl}
          ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `;
  }

  get _headingTpl() {
    return html`
      <div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>
    `;
  }

  get _navigationDemosTpl() {
    return html`
      <div>${this._selectTpl}${this._externalLinkTpl}</div>
    `;
  }

  get _selectTpl() {
    return html`
      ${this._sources.some((options) => options.option)
        ? html`
            <div class="select">
              <select id="select-sources" @change="${this._onChangeFile}" aria-label="Cases">
                ${this._sources.map(
                  (item, index) => html`
                    <option ?selected="${this.selected === index}" value="${index}">
                      ${item.option}
                    </option>
                  `
                )}
              </select>
              ${this.__selectArrow}
            </div>
          `
        : ''}
    `;
  }

  get _externalLinkTpl() {
    return html`
      <a href="${this._src || '#'}" target="_blank" class="open-externally">
        <span class="sr-only">View demo in a new tab</span>
        <span aria-hidden="true">${openExternallyIcon}</span>
      </a>
    `;
  }

  get _descriptionTpl() {
    return html`
      <p class="description">${this._sources[this.selected].description}</p>
    `;
  }

  get _readDataPosTpl() {
    return html`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing ? 1 : 0}">
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `;
  }

  get _screenSizeTpl() {
    return html`
      <blockquote-base-embedded-webview-size
        .disabledSelectedSizeText="${this.__resetResizing}"
        @click="${this._updateSize}"
        @selectedchange="${this._updateSize}"
        .selected="${this.screenSizeSelected}"></blockquote-base-embedded-webview-size>
    `;
  }

  get _mainTpl() {
    return html`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${ref(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `;
  }

  get _embeddedSlotTpl() {
    return html`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src || ''}"
        .embeddedTitle="${this._sources[this.selected].option ||
        'Demo'}"></blockquote-base-embedded-webview-element>
    `;
  }

  _onChangeFile({target}) {
    this.selected = target.selectedIndex;
    this._src = this._sources[this.selected].src;
  }
}
