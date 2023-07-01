import { html, LitElement } from 'lit';
import { styles } from './styles/blockquote-base-embedded-webview-size-styles.css.js';
// https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/panels/emulation/DeviceModeView.ts;l=164

/**
  ![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

  `blockquote-base-embedded-webview-size` provides a list of ideal screen sizes for responsive designs.

  ```html
<blockquote-base-embedded-webview-size
  screen-sizes="[
    { width: 360, height: 640, id: '360x640' },
    { width: 360, height: 800, id: '360x800' },
    { width: 414, height: 896, id: '414x896' },
    { width: 768, height: 1024, id: '768x1024' },
    { width: 810, height: 1080, id: '810x1080' },
    { width: 1280, height: 800, id: '1280x800' },
    { width: 1366, height: 768, id: '1366x768' },
    { width: 1536, height: 864, id: '1536x864' },
    { width: 1920, height: 1080, id: '1920x1080' },
  ]"
></blockquote-base-embedded-webview-size>
  ```

  ## Exports

- BlockquoteBaseEmbeddedWebviewSize

  @tagname blockquote-base-embedded-webview-size
*/
export class BlockquoteBaseEmbeddedWebviewSize extends LitElement {
  static get is() {
    return 'blockquote-base-embedded-webview-size';
  }

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      /**
       * The screen size options to display
       * @type {Array}
       */
      screenSizes: {
        type: Array,
        attribute: 'screen-sizes',
      },
      /**
       * The screen size option selected
       * @type {Number}
       */
      selected: {
        type: Number,
      },

      /**
       * Percentage value for the width
       * @type {Boolean}
       */
      widthInPercent: {
        type: Boolean,
        attribute: 'width-in-percent',
      },

      /**
       * Show screen size options that are too large for the container
       * @type {Boolean}
       */
      showOverflowSize: {
        type: Boolean,
        attribute: 'show-overflow-size',
      },

      /**
       * If true, selected size text is disabled
       * @type {Boolean}
       */
      disabledSelectedSizeText: {
        type: Boolean,
        attribute: 'disabled-selected-size-text',
      },
    };
  }

  constructor() {
    super();
    this.showOverflowSize = false;
    this.selected = 0;
    this.disabledSelectedSizeText = false;
    this.screenSizes = [
      { width: 360, height: 640, id: '360x640' },
      { width: 360, height: 800, id: '360x800' },
      { width: 414, height: 896, id: '414x896' },
      { width: 768, height: 1024, id: '768x1024' },
      { width: 810, height: 1080, id: '810x1080' },
      { width: 1280, height: 800, id: '1280x800' },
      { width: 1366, height: 768, id: '1366x768' },
      { width: 1536, height: 864, id: '1536x864' },
      { width: 1920, height: 1080, id: '1920x1080' },
    ];
    this.widthInPercent = false;

    this._onResize = this._onResize.bind(this);
  }

  get selectedSize() {
    return this.screenSizes[this.selected - 1];
  }

  get selectedDetail() {
    return { ...this.selectedSize, ...{ index: this.selected } };
  }

  get computedStyleWidth() {
    return parseInt(window.getComputedStyle(this).width, 10);
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    window.addEventListener('resize', this._onResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback && super.disconnectedCallback();
    window.removeEventListener('resize', this._onResize);
  }

  willUpdate(props) {
    super.willUpdate && super.willUpdate(props);

    if (props.has('screenSizes')) {
      this.screenSizes.sort((a, b) => b.width - a.width);
    }

    if (props.has('selected')) {
      if (this.selected > this.screenSizes.length || this.selected === 0) {
        this.selected = this.screenSizes.length;
      }
    }
  }

  updated(props) {
    super.updated && super.updated(props);

    if (props.has('selected')) {
      /**
       * Raised when the `selected` property changes.
       *
       * @event selectedchange
       */
      const event = new CustomEvent('selectedchange', {
        bubbles: true,
        detail: this.selectedDetail,
      });
      this.dispatchEvent(event);
    }
  }

  render() {
    return html`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `;
  }

  get _toolbarTpl() {
    return html`
      ${this.screenSizes.map(
        (item, index) => html`<button
          @click="${this._setSelected}"
          id="${item.id}"
          data-index="${index + 1}"
          ?data-selected="${this.selected === index + 1}"
          ?hidden="${!this.showOverflowSize && item.width > this.computedStyleWidth}"
          style="${this.widthInPercent
            ? `width: calc(100% / ${index + 1});`
            : `width: ${item.width}px;`}"
        >
          <span>${item.id}</span>
        </button>`,
      )}
    `;
  }

  get _visualTextTpl() {
    return html` <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true"
      >${this.selectedSize.id}</span
    >`;
  }

  _onResize(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    window.requestAnimationFrame(() => {
      this.requestUpdate();
    });
  }

  _setSelected(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.selected = Number(ev.target.dataset.index);

    /**
     * Fired `click` event.
     * @event click
     */
    const event = new CustomEvent('click', {
      detail: this.selectedDetail,
    });
    this.dispatchEvent(event);
  }
}
