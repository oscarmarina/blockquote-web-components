import { html, LitElement, svg } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import '../define/blockquote-base-embedded-webview-size.js';
import '../define/blockquote-base-embedded-webview-resize.js';
import '../define/blockquote-base-embedded-webview-element.js';
import styles from './styles/BlockquoteBaseEmbeddedWebview-styles.js';

const chevronDownIcon = svg`<svg aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<polyline points="6 9 12 15 18 9" />
</svg>`;

/**
![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

`blockquote-base-embedded-webview` offers a responsive display using individual HTML files as content with the different use cases to be displayed.
It will create a `select` tag with the provided demo HTML files and add the `[data-embedded]` attribute to the loaded body tag.

## Base usage

```html
<blockquote-base-embedded-webview heading="My demo title">
  <template data-src="./base.html" data-option="Base" data-description="base - description"></template>
  <template data-src="./complex.html" data-option="Complex" data-description="complex - description"></template>
</blockquote-base-embedded-webview>
```

## base.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Demo Base</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <style>
      :root {
        font: normal medium/1.25 sans-serif;
      }
      body {
        margin: 0;
      }
      [data-embedded] .hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <h1 class="hidden">Heading</h1>
    <p>Base Demo</p>
  </body>
</html>
```

  ## Exports

  - BlockquoteBaseEmbeddedWebview

  @tagname blockquote-base-embedded-webview
*/
export class BlockquoteBaseEmbeddedWebview extends LitElement {
  static get is() {
    return 'blockquote-base-embedded-webview';
  }

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      /**
       * The heading of the webview.
       * @type {String}
       */
      heading: {
        type: String,
      },

      /**
       * Index of currently srcset file
       * @type {Number}
       */
      selected: {
        type: Number,
      },

      /**
       * Heading level from 1 to 6
       * @type {Number}
       */
      headingLevel: {
        type: Number,
        attribute: 'heading-level',
        reflect: true,
      },

      /**
       * Index of currently screen size selected
       * @type {Number}
       */
      screenSizeSelected: {
        type: Number,
        attribute: 'screen-size-selected',
      },

      /**
       * Limit height to 100% available
       * @type {Boolean}
       */
      limitHeight: {
        type: Boolean,
        attribute: 'limit-height',
        reflect: true,
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
    this.__readDataPos = { x: 0, y: 0, resizing: false };
    this.limitHeight = false;
    this._sources = [{ file: '', option: '', description: '' }];
    this._updateSize = this._updateSize.bind(this);
    this._embeddedResizeRef = createRef();
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();

    this.shadowRoot.addEventListener('webviewresize', ({ detail }) => {
      Object.assign(this.__readDataPos, detail);
      this.__resetResizing = true;
      this.requestUpdate();
    });

    const _sources = Array.from(this.querySelectorAll('template'));
    if (_sources.length) {
      this._sources = _sources.map(item => {
        const { src, option, description } = item.dataset;
        return {
          src,
          option,
          description,
        };
      });

      this._src = this._sources[this.selected].src;
    }
  }

  firstUpdated(props) {
    super.firstUpdated && super.firstUpdated(props);

    this.embedded = this.shadowRoot.querySelector('[slot="embedded"]');
    this.append(this.embedded);
  }

  _updateSize({ detail }) {
    this._embeddedResizeRef.value.style.setProperty(
      '--blockquote-base-embedded-webview-resize-rect-width',
      `${detail.width}px`,
    );
    this._embeddedResizeRef.value.style.setProperty(
      '--blockquote-base-embedded-webview-resize-rect-height',
      this.limitHeight ? '100%' : `${detail.height}px`,
    );
    this.__resetResizing = false;
    this.requestUpdate();
  }

  get _headingLevel() {
    return this.headingLevel >= 1 && this.headingLevel <= 6 ? this.headingLevel : 2;
  }

  render() {
    return html` ${this._headerTpl} ${this._mainTpl} `;
  }

  get _headerTpl() {
    return html`
      <header>
        <div>
          ${this._headingTpl} ${this._selectTpl} ${this._descriptionTpl} ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `;
  }

  get _headingTpl() {
    return html`<div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>`;
  }

  get _selectTpl() {
    return html`
      ${this._sources.some(options => options.option)
        ? html`
            <div class="select">
              <select @change="${this._onChangeFile}" aria-label="Cases">
                ${this._sources.map(
                  (item, index) => html`
                    <option ?selected="${this.selected === index}" value="${index}">
                      ${item.option}
                    </option>
                  `,
                )}
              </select>
              ${this.__selectArrow}
            </div>
          `
        : ''}
    `;
  }

  get _descriptionTpl() {
    return html` <p class="description">${this._sources[this.selected].description}</p>`;
  }

  get _readDataPosTpl() {
    return html`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing ? 1 : 0}"
      >
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `;
  }

  get _screenSizeTpl() {
    return html` <blockquote-base-embedded-webview-size
      ?data-resizing="${this.__resetResizing}"
      @click="${this._updateSize}"
      @selectedchange="${this._updateSize}"
      .selected="${this.screenSizeSelected}"
    ></blockquote-base-embedded-webview-size>`;
  }

  get _mainTpl() {
    return html`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${ref(this._embeddedResizeRef)}>
          <slot name="embedded"> ${this._embeddedSlotTpl} </slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `;
  }

  get _embeddedSlotTpl() {
    return html` <blockquote-base-embedded-webview-element
      slot="embedded"
      .src="${this._src}"
      .embeddedTitle="${this._sources[this.selected].option || 'Demo'}"
    >
    </blockquote-base-embedded-webview-element>`;
  }

  _onChangeFile({ target }) {
    this.selected = target.selectedIndex;
    this._src = this._sources[this.selected].src;
  }
}
