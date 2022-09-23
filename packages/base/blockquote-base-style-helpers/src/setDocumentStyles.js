import { supportsAdoptingStyleSheets /* adoptStyles */ } from 'lit';
import '@blockquote/polymer/lib/elements/custom-style.js';

export { supportsAdoptingStyleSheets /* adoptStyles */ } from 'lit';

export const supportCustomStyleInterface =
  /* c8 ignore next */
  window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && !window.ShadyCSS.nativeShadow;

const renderDocumentRoot =
  /* c8 ignore next */
  supportsAdoptingStyleSheets ? document : document.head;

export const adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    // https://github.com/lit/lit/pull/3061
    // eslint-disable-next-line no-param-reassign
    renderRoot.adoptedStyleSheets = [
      ...renderRoot.adoptedStyleSheets,
      ...styles.map(s => (s instanceof CSSStyleSheet ? s : s.styleSheet)),
    ];
  } else {
    styles.forEach(s => {
      const style = document.createElement('style');
      // eslint-disable-next-line dot-notation
      const nonce = window['litNonce'];
      if (nonce !== undefined) {
        style.setAttribute('nonce', nonce);
      }
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
  return customStyle;
};

export const setDocumentStyles = styles => {
  supportCustomStyleInterface
    ? documentCustomStyle(styles)
    : adoptStyles(renderDocumentRoot, [styles]);
};
