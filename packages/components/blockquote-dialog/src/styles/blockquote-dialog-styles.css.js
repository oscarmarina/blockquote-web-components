import {css} from 'lit';

export const styles = css`
  :host {
    --_background-color: var(--blockquote-dialog-background-color, rgb(255, 255, 255));
    --_max-height: var(--blockquote-dialog-max-height, min(35rem, calc(100% - 3rem)));
    --_max-width: var(--blockquote-dialog-max-width, min(35rem, calc(100% - 3rem)));
    --_min-height: var(--blockquote-dialog-min-height, 8.75rem);
    --_min-width: var(--blockquote-dialog-min-width, 17.5rem);
    --_padding: var(--blockquote-padding, 1rem);
    box-sizing: border-box;
    display: contents;
    background-color: var(--_background-color);
    margin: auto;
    max-height: var(--_max-height);
    max-width: var(--_max-width);
    min-height: var(--_min-height);
    min-width: var(--_min-width);
    position: fixed;
    height: -moz-fit-content;
    height: fit-content;
    width: -moz-fit-content;
    width: fit-content;
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

  dialog {
    background: inherit;
    border: none;
    border-radius: inherit;
    flex-direction: column;
    margin: inherit;
    height: inherit;
    width: inherit;
    max-height: inherit;
    max-width: inherit;
    min-height: inherit;
    min-width: inherit;
    outline: none;
    overflow: visible;
    padding: 0;
  }

  :host([open]) dialog {
    display: flex;
  }

  .scroller {
    overflow-y: auto;
    min-height: var(--_min-height);
  }

  .content {
    padding: var(--_padding);
    min-height: inherit;
  }
`;
