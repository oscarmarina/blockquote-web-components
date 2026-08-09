import type {CSSResult} from 'lit';

type GlobalWindow = typeof globalThis & {ShadyCSS?: {nativeShadow: boolean}};

/* c8 ignore next */
const globalThisOrWindow = (globalThis || window) as GlobalWindow;

/**
 * Checks if the current environment supports adopting style sheets.
 * @type {boolean}
 */
const supportsAdoptingStyleSheets: boolean =
  globalThisOrWindow.ShadowRoot &&
  (globalThisOrWindow.ShadyCSS === undefined || globalThisOrWindow.ShadyCSS.nativeShadow) &&
  'adoptedStyleSheets' in Document.prototype &&
  'replace' in CSSStyleSheet.prototype;

/**
 * The root element where styles will be rendered.
 * @type {Document | HTMLElement}
 */
const renderDocumentRoot: Document | HTMLElement = supportsAdoptingStyleSheets
  ? document
  : /* c8 ignore next */ document.head;

/**
 * Flattens the styles array.
 * @param {Array<*>} styles - The styles to flatten.
 * @returns {Array<*>} The flattened styles.
 */
const flattenStyles = (styles: CSSResult | CSSResult[]): CSSResult[] =>
  Array.isArray(styles) ? styles.flat(Infinity) : [styles];

/**
 * Adopts the given styles into the render root.
 * @param {Document | HTMLElement} renderRoot - The root element where styles will be rendered.
 * @param {Array<*>} styles - The styles to adopt.
 */
export const adoptDocumentStyles = (
  renderRoot: Document | HTMLElement,
  styles: unknown[]
): void => {
  if (supportsAdoptingStyleSheets) {
    // https://github.com/lit/lit/issues/2984#issuecomment-1150224373
    const documentRoot = renderRoot as Document;
    documentRoot.adoptedStyleSheets = [
      ...documentRoot.adoptedStyleSheets,
      ...styles.map((s) =>
        s instanceof CSSStyleSheet ? s : ((s as CSSResult).styleSheet as CSSStyleSheet)
      ),
    ];
  } else {
    /* c8 ignore next */
    styles.forEach((s) => {
      const style = document.createElement('style');
      style.textContent = (s as CSSResult).cssText;
      renderRoot.appendChild(style);
    });
  }
};

/**
 * Sets the document styles.
 * @param {!*} styles - The styles to set.
 */
export const setDocumentStyles = (styles: CSSResult | CSSResult[]): void => {
  const flattenedArray = flattenStyles(styles);
  adoptDocumentStyles(renderDocumentRoot, flattenedArray);
};
