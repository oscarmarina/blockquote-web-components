import { html, LitElement } from 'lit';
import * as Gestures from '@blockquote/polymer/lib/utils/gestures.js';
import styles from './styles/BlockquoteBaseEmbeddedWebviewResize-styles.js';
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#value - window.scrollY to get a bounding rectangle which is independent from the current scrolling position.
// https://www.browserstack.com/guide/ideal-screen-sizes-for-responsive-design
// https://stackoverflow.com/questions/26233180/resize-a-div-on-border-drag-and-drop-without-adding-extra-markup
// https://github.com/ChromeDevTools/devtools-frontend/blob/main/front_end/Images/src/resizeHorizontal.svg

/**
  ![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

  `blockquote-base-embedded-webview-resize`

  ## Exports

  - BlockquoteBaseEmbeddedWebviewResize

  @tagname blockquote-base-embedded-webview-resize
*/
export class BlockquoteBaseEmbeddedWebviewResize extends LitElement {
  static get is() {
    return 'blockquote-base-embedded-webview-resize';
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this._resizer = this._resizer.bind(this);
    this._removeResizer = this._removeResizer.bind(this);
    this._createResizerLeft = this._createResizer.bind(this, 'right');
    this._createResizerRight = this._createResizer.bind(this, 'left');
    this._createResizerBottom = this._createResizer.bind(this, 'top');
    this._createResizerBottomLeft = this._createResizer.bind(this, 'scaleTopRight');
    this._createResizerBottomRight = this._createResizer.bind(this, 'scaleTopLeft');
    this._doubleclickForCssInitialSize = this._doubleclickForCssInitialSize.bind(this);
  }

  firstUpdated(props) {
    super.firstUpdated && super.firstUpdated(props);

    this.rect = this.shadowRoot.querySelector('.rect');
    this.bottomRightResizerElement = this.shadowRoot.querySelector('.resizer-se');
    this.bottomLeftResizerElement = this.shadowRoot.querySelector('.resizer-sw');
    this.rightResizerElement = this.shadowRoot.querySelector('.resizer-e');
    this.leftResizerElement = this.shadowRoot.querySelector('.resizer-w');
    this.bottomResizerElement = this.shadowRoot.querySelector('.resizer-s');

    this.leftResizerElement.addEventListener('mousedown', this._createResizerLeft);
    this.rightResizerElement.addEventListener('mousedown', this._createResizerRight);
    this.bottomResizerElement.addEventListener('mousedown', this._createResizerBottom);
    this.bottomLeftResizerElement.addEventListener('mousedown', this._createResizerBottomLeft);
    this.bottomRightResizerElement.addEventListener('mousedown', this._createResizerBottomRight);

    this.bottomResizerElement.addEventListener('dblclick', this._doubleclickForCssInitialSize);
  }

  render() {
    return html`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `;
  }

  get _resizersTpl() {
    return html`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `;
  }

  _doubleclickForCssInitialSize() {
    this.removeAttribute('style');
    // this._dispatchResizeEvent();
  }

  _createResizer(DOMRect) {
    this._getBoundingClientRecDOMRect = DOMRect;
    this._getBoundingClientRectWidth = this._getBoundingClientRect('width');
    this._getBoundingClientRectHeight = this._getBoundingClientRect('height');

    this.setAttribute('resizing', '');
    Gestures.addListener(document, 'track', this._resizer);
    document.addEventListener('mouseup', this._removeResizer);
  }

  _removeResizer() {
    this.removeAttribute('resizing');
    Gestures.removeListener(document, 'track', this._resizer);
    document.removeEventListener('mouseup', this._removeResizer);
    this._dispatchResizeEvent();
  }

  _resizer({ detail }) {
    let cssOffsetX;
    let cssOffsetY;
    const dx = Math.floor(detail.dx * 2);
    const dy = Math.floor(detail.dy * 1.1);

    switch (this._getBoundingClientRecDOMRect) {
      case 'right':
        cssOffsetX = `${this._getBoundingClientRectWidth - dx}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-width', cssOffsetX);
        break;
      case 'left':
        cssOffsetX = `${this._getBoundingClientRectWidth + dx}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-width', cssOffsetX);
        break;
      case 'top':
        cssOffsetY = `${this._getBoundingClientRectHeight + dy * 1}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-height', cssOffsetY);
        break;
      case 'scaleTopLeft':
        cssOffsetX = `${this._getBoundingClientRectWidth + dx}px`;
        cssOffsetY = `${this._getBoundingClientRectHeight + dy * 1}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-width', cssOffsetX);
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-height', cssOffsetY);
        break;
      case 'scaleTopRight':
        cssOffsetX = `${this._getBoundingClientRectWidth - dx}px`;
        cssOffsetY = `${this._getBoundingClientRectHeight + dy * 1}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-width', cssOffsetX);
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-height', cssOffsetY);
        break;
      /* c8 ignore next */
      default:
    }

    this._dispatchResizeEvent();
  }

  _dispatchResizeEvent() {
    /**
     * Raised when the element's dimensions changes.
     *
     * @event webviewresize
     */
    const event = new CustomEvent('webviewresize', {
      bubbles: true,
      detail: {
        x: getComputedStyle(this).getPropertyValue(
          '--blockquote-base-embedded-webview-resize-rect-width',
        ),
        y: getComputedStyle(this).getPropertyValue(
          '--blockquote-base-embedded-webview-resize-rect-height',
        ),
        resizing: this.hasAttribute('resizing'),
      },
    });
    this.dispatchEvent(event);
  }

  _getBoundingClientRect(DOMRect) {
    return Math.abs(parseInt(this.rect.getBoundingClientRect()[DOMRect], 10));
  }
}
