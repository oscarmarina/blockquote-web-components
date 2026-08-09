import {html, LitElement} from 'lit';
import {styles} from './styles/blockquote-base-embedded-webview-resize-styles.css.js';

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#value - window.scrollY to get a bounding rectangle which is independent from the current scrolling position.
// https://www.browserstack.com/guide/ideal-screen-sizes-for-responsive-design
// https://stackoverflow.com/questions/26233180/resize-a-div-on-border-drag-and-drop-without-adding-extra-markup
// https://github.com/ChromeDevTools/devtools-frontend/blob/main/front_end/Images/src/resizeHorizontal.svg

type ResizeDirection = 'right' | 'left' | 'top' | 'scaleTopLeft' | 'scaleTopRight';

type DOMRectProp = 'x' | 'y' | 'width' | 'height' | 'top' | 'right' | 'bottom' | 'left';

interface ResizeDetail {
  dx: number;
  dy: number;
}

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `blockquote-base-embedded-webview-resize`
 *
 * @fires webviewresize - Raised when the element's dimensions changes
 */
export class BlockquoteBaseEmbeddedWebviewResize extends LitElement {
  static override get styles() {
    return [styles];
  }

  private _cursor: string;
  private _resizeDirection: ResizeDirection | undefined;
  private _getBoundingClientRectWidth: number;
  private _getBoundingClientRectHeight: number;
  private rect: HTMLElement | null | undefined;
  private bottomRightResizerElement: HTMLElement | null | undefined;
  private bottomLeftResizerElement: HTMLElement | null | undefined;
  private rightResizerElement: HTMLElement | null | undefined;
  private leftResizerElement: HTMLElement | null | undefined;
  private bottomResizerElement: HTMLElement | null | undefined;
  private _createResizerLeft: (ev: PointerEvent) => void;
  private _createResizerRight: (ev: PointerEvent) => void;
  private _createResizerBottom: (ev: PointerEvent) => void;
  private _createResizerBottomLeft: (ev: PointerEvent) => void;
  private _createResizerBottomRight: (ev: PointerEvent) => void;

  constructor() {
    super();
    this._cursor = '';
    this._resize = this._resize.bind(this);
    this._createResizerLeft = this._createResizer.bind(this, 'right');
    this._createResizerRight = this._createResizer.bind(this, 'left');
    this._createResizerBottom = this._createResizer.bind(this, 'top');
    this._createResizerBottomLeft = this._createResizer.bind(this, 'scaleTopRight');
    this._createResizerBottomRight = this._createResizer.bind(this, 'scaleTopLeft');

    this._getBoundingClientRectWidth = 0;
    this._getBoundingClientRectHeight = 0;
  }

  override async connectedCallback() {
    super.connectedCallback?.();
    await this.updateComplete;

    this.rect = this.shadowRoot?.querySelector('.rect');
    this.bottomRightResizerElement = this.shadowRoot?.querySelector('.resizer-se');
    this.bottomLeftResizerElement = this.shadowRoot?.querySelector('.resizer-sw');
    this.rightResizerElement = this.shadowRoot?.querySelector('.resizer-e');
    this.leftResizerElement = this.shadowRoot?.querySelector('.resizer-w');
    this.bottomResizerElement = this.shadowRoot?.querySelector('.resizer-s');

    this.leftResizerElement?.addEventListener('pointerdown', this._createResizerLeft);
    this.rightResizerElement?.addEventListener('pointerdown', this._createResizerRight);
    this.bottomResizerElement?.addEventListener('pointerdown', this._createResizerBottom);
    this.bottomLeftResizerElement?.addEventListener('pointerdown', this._createResizerBottomLeft);
    this.bottomRightResizerElement?.addEventListener('pointerdown', this._createResizerBottomRight);

    this.bottomResizerElement?.addEventListener('dblclick', this._doubleclickForCssInitialSize);
  }

  override render() {
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

  _doubleclickForCssInitialSize = () => {
    this.removeAttribute('style');
  };

  _createResizer(resizeDirection: ResizeDirection, ev: PointerEvent) {
    this.setAttribute('resizing', '');

    this._resizeDirection = resizeDirection;
    this._getBoundingClientRectWidth = this._getBoundingClientRect('width');
    this._getBoundingClientRectHeight = this._getBoundingClientRect('height');
    const {target, pointerId, clientX: trackDistanceX, clientY: trackDistanceY} = ev;

    (target as Element | null)?.setPointerCapture(pointerId);

    const addResizer = (ev: Event) => {
      const {clientX, clientY} = ev as PointerEvent;
      const dx = Math.floor(clientX - trackDistanceX);
      const dy = Math.floor(clientY - trackDistanceY);
      this._resize({detail: {dx, dy}});
    };
    target?.addEventListener('pointermove', addResizer);

    const removeResizer = () => {
      this.removeAttribute('resizing');
      (target as Element | null)?.releasePointerCapture(pointerId);
      target?.removeEventListener('pointermove', addResizer);
      target?.removeEventListener('pointerup', removeResizer);

      this._dispatchResizeEvent();
    };
    target?.addEventListener('pointerup', removeResizer);
  }

  _resize({detail}: {detail: ResizeDetail}) {
    let cssOffsetX: string | undefined;
    let cssOffsetY: string | undefined;
    const dx = Math.floor(detail.dx * 2.04);
    const dy = Math.floor(detail.dy * 1.04);
    // http://jsfiddle.net/MissoulaLorenzo/gfn6ob3j/
    switch (this._resizeDirection) {
      case 'right':
        this._cursor = 'w';
        cssOffsetX = `${this._getBoundingClientRectWidth - dx}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-width', cssOffsetX);
        break;
      case 'left':
        this._cursor = 'e';
        cssOffsetX = `${this._getBoundingClientRectWidth + dx}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-width', cssOffsetX);
        break;
      case 'top':
        this._cursor = 'n';
        cssOffsetY = `${this._getBoundingClientRectHeight + dy}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-height', cssOffsetY);
        break;
      case 'scaleTopLeft':
        this._cursor = 'ne';
        cssOffsetX = `${this._getBoundingClientRectWidth + dx}px`;
        cssOffsetY = `${this._getBoundingClientRectHeight + dy}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-width', cssOffsetX);
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-height', cssOffsetY);
        break;
      case 'scaleTopRight':
        this._cursor = 'nw';
        cssOffsetX = `${this._getBoundingClientRectWidth - dx}px`;
        cssOffsetY = `${this._getBoundingClientRectHeight + dy}px`;
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-width', cssOffsetX);
        this.style.setProperty('--blockquote-base-embedded-webview-resize-rect-height', cssOffsetY);
        break;
      /* c8 ignore next */ default:
    }

    this._dispatchResizeEvent();
  }

  _dispatchResizeEvent() {
    const event = new CustomEvent('webviewresize', {
      composed: true,
      detail: {
        x: getComputedStyle(this).getPropertyValue(
          '--blockquote-base-embedded-webview-resize-rect-width'
        ),
        y: getComputedStyle(this).getPropertyValue(
          '--blockquote-base-embedded-webview-resize-rect-height'
        ),
        resizing: this.hasAttribute('resizing'),
        cursor: this._cursor,
      },
    });
    this.dispatchEvent(event);
  }

  _getBoundingClientRect(rectProp: DOMRectProp) {
    const rect = this.rect?.getBoundingClientRect();
    return rect ? Math.abs(rect[rectProp]) : 0;
  }
}
