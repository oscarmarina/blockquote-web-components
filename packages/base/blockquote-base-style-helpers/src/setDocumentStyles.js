const globalThisOrWindow = globalThis /* istanbul ignore next */ || window;

/**
 * Checks if the current environment supports adopting style sheets.
 * @type {boolean}
 */
const supportsAdoptingStyleSheets =
  globalThisOrWindow.ShadowRoot &&
  // @ts-ignore
  (globalThisOrWindow.ShadyCSS === undefined /* istanbul ignore next */ ||
    globalThisOrWindow.ShadyCSS.nativeShadow) &&
  'adoptedStyleSheets' in Document.prototype &&
  'replace' in CSSStyleSheet.prototype;

/**
 * The root element where styles will be rendered.
 * @type {Document | HTMLElement}
 */
const renderDocumentRoot = supportsAdoptingStyleSheets
  ? document
  : /* istanbul ignore next */ document.head;

/**
 * Flattens the styles array.
 * @param {Array} styles - The styles to flatten.
 * @returns {Array} The flattened styles.
 */
const flattenStyles = (styles) => (Array.isArray(styles) ? styles.flat(Infinity) : [styles]);

/**
 * Adopts the given styles into the render root.
 * @param {Document | HTMLElement} renderRoot - The root element where styles will be rendered.
 * @param {Array} styles - The styles to adopt.
 */
export const adoptDocumentStyles = (renderRoot, styles) => {
  /* istanbul ignore else */
  if (supportsAdoptingStyleSheets) {
    // https://github.com/lit/lit/issues/2984#issuecomment-1150224373
    const documentRoot = /** @type {Document} */ (renderRoot);
    documentRoot.adoptedStyleSheets = [
      ...documentRoot.adoptedStyleSheets,
      ...styles.map((s) => (s instanceof CSSStyleSheet ? s : s.styleSheet)),
    ];
  } else {
    styles.forEach((s) => {
      const style = document.createElement('style');
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    });
  }
};

/**
 * Sets the document styles.
 * @param {!*} styles - The styles to set.
 */
export const setDocumentStyles = (styles) => {
  const flattenedArray = flattenStyles(styles);
  adoptDocumentStyles(renderDocumentRoot, flattenedArray);
};
