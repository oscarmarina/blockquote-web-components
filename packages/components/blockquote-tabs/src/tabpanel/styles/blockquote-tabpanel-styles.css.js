import {css} from 'lit';

export const styles = css`
  :host {
    display: block;
    box-sizing: border-box;
    padding-block: 1rem;
    padding-inline: 1rem;
    color: var(--tabpanel, inherit);
  }

  :host([hidden]),
  :host([aria-hidden='true']),
  [hidden] {
    display: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  :host(:focus:not(:focus-visible)) {
    outline: none;
  }

  :host(:focus-visible) {
    outline: #9e9e9e dashed 0.0625rem;
    outline-offset: -2px;
  }
`;
