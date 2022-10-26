import { supportsAdoptingStyleSheets } from 'lit';
import '@blockquote/polymer/lib/elements/custom-style.js';

export const supportCustomStyleInterface =
  /* c8 ignore next */
  window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && !window.ShadyCSS.nativeShadow;

const renderDocumentRoot =
  /* c8 ignore next */
  supportsAdoptingStyleSheets ? document : document.head;

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

const documentCustomStyle = s => {
  const customStyle = document.createElement('custom-style');
  const style = document.createElement('style');
  style.textContent = s.cssText;
  customStyle.appendChild(style);
  document.head.appendChild(customStyle);
};

export const setDocumentStyles = styles => {
  supportCustomStyleInterface
    ? documentCustomStyle(styles)
    : adoptDocumentStyles(renderDocumentRoot, [styles]);
};
