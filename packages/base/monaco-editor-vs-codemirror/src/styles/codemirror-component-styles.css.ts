import {css} from 'lit';

export const styles = css`
  :host {
    display: contents;
    width: var(--codemirror-width, 100%);
    height: var(--codemirror-height, 100%);
    box-sizing: border-box;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .wrapper {
    width: inherit;
    height: inherit;
  }

  .cm-editor {
    height: inherit;
    font: inherit;
    direction: ltr;
    -webkit-tap-highlight-color: transparent;
  }
`;
