import { supportsAdoptingStyleSheets /* adoptStyles */ } from 'lit';
import '@blockquote/polymer/lib/elements/custom-style.js';

export { supportsAdoptingStyleSheets /* adoptStyles */ } from 'lit';
export const supportCustomStyleInterface =
  window.ShadyCSS && /* c8 ignore next */ window.ShadyCSS.CustomStyleInterface;

const renderDocumentRoot = supportsAdoptingStyleSheets
  ? document
  : /* c8 ignore next */ document.head;

export const documentAdoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    // eslint-disable-next-line no-param-reassign
    renderRoot.adoptedStyleSheets = renderRoot.adoptedStyleSheets.concat(
      styles.map(s => (s instanceof CSSStyleSheet ? s : s.styleSheet)),
    ); /* TODO PR css-tag.ts */
  } else {
    styles.forEach(s => {
      const style = document.createElement('style');
      // eslint-disable-next-line dot-notation
      const nonce = window['litNonce']; /* original css-tag.ts const nonce = global['litNonce'] */
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
    : documentAdoptStyles(renderDocumentRoot, [styles]);
};
