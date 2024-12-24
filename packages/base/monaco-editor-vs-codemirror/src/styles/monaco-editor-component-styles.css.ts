import {css} from 'lit';

export const styles = css`
  :host {
    display: contents;
    width: var(--moncaco-editor-width, 100%);
    height: var(--moncaco-editor-height, 100%);
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
`;
