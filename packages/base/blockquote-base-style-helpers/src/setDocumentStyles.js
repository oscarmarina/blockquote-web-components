const supportsAdoptingStyleSheets =
  window.ShadowRoot &&
  (window.ShadyCSS === undefined || /* c8 ignore next */ window.ShadyCSS.nativeShadow) &&
  'adoptedStyleSheets' in Document.prototype &&
  'replace' in CSSStyleSheet.prototype;

const renderDocumentRoot = supportsAdoptingStyleSheets
  ? document
  : /* c8 ignore next */ document.head;

export const adoptDocumentStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    // https://github.com/lit/lit/issues/2984#issuecomment-1150224373
    // eslint-disable-next-line no-param-reassign
    renderRoot.adoptedStyleSheets = [
      ...renderRoot.adoptedStyleSheets,
      ...styles.map(s => (s instanceof CSSStyleSheet ? s : s.styleSheet)),
    ];
  } else {
    styles.forEach(s => {
      const style = document.createElement('style');
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    });
  }
};

export const setDocumentStyles = styles => {
  adoptDocumentStyles(renderDocumentRoot, [styles]);
};
