import {css} from 'lit';

export const styles = css`
  :host {
    --_host-color: var(--blockquote-base-embedded-webview-color, rgb(32, 32, 32));
    --_main-bgcolor: var(--blockquote-base-embedded-webview-main-bgcolor, rgb(250, 250, 250));
    --_select-bgcolor: var(--blockquote-base-embedded-webview-select-bgcolor, rgb(169, 169, 169));
    --_select-transition: var(
      --blockquote-base-embedded-webview-select-transition,
      border-color 196ms ease-out
    );
    --blockquote-base-embedded-webview-resize-rect-width: 40rem; /* 40rem */
    --blockquote-base-embedded-webview-resize-rect-height: 22.5rem; /* 22.5rem */
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
    color: var(--_host-color);
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  .sr-only {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  .main {
    contain: content;
    flex: 1;
    background-color: var(--_main-bgcolor);
  }

  :host([limit-height]) .main {
    block-size: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  header > div {
    position: relative;
    max-inline-size: 80rem;
    margin: 0 auto;
    padding-block: 0.5rem;
    padding-inline: 1.5rem;
  }

  [role='heading'] {
    font-size: 1.25rem;
    margin-block-end: 1rem;
  }

  [role='heading'] + div {
    display: flex;
    align-items: center;
  }

  .open-externally {
    inline-size: 1rem;
    display: inline-block;
    margin-inline-start: 1rem;
    color: inherit;
  }

  .open-externally svg {
    vertical-align: bottom;
  }

  select,
  select::picker(select) {
    -webkit-appearance: base-select;
    -moz-appearance: base-select;
    appearance: base-select;
  }

  select:open {
    border-color: currentcolor;
  }

  select:open::picker-icon {
    transform: rotate(0.5turn);
  }

  select button {
    display: inline-flex;
    align-items: center;
    width: 100%;
    padding-inline: 0.2ch 1.25rem;
  }

  select::picker-icon {
    content: '∨';
    display: block;
    font: inherit;
    font-weight: bolder;
    position: absolute;
    inset-inline-end: 0;
    inset-block-start: 50%;
    translate: -50% -50%;
    transition: transform 192ms cubic-bezier(0.5, 1, 0.75, 1.25);
  }

  select::picker(select) {
    background-color: inherit;
    border: 0.0625rem solid var(--_select-bgcolor);
    margin-block: 0.125rem;
    overflow: visible;
  }

  select {
    position: relative;
    field-sizing: content;
    color: oklch(from var(--_host-color) calc(l * 1.25) c h);
    font: inherit;
    background-color: #fff;
    border-color: var(--_select-bgcolor);
    border-width: 0.125em;
    border-radius: 0.25em;
    margin: 0;
    padding: 0.5em 0.25em;
    cursor: pointer;
    outline: none;
    min-inline-size: 24ch;
    max-inline-size: 36ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: var(--_select-transition);
  }

  select:hover,
  select:focus {
    border-color: currentcolor;
  }

  option {
    font-size: 0.875rem;
    gap: 0.25em;
    padding: 0.25em 0.5em;
  }

  option::checkmark {
    content: '';
    inline-size: 1rem;
    block-size: 1rem;
    background-color: currentcolor;
    -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='square'><path d='M3 8.5 L6.5 12 L13 5'/></svg>");
    mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='square'><path d='M3 8.5 L6.5 12 L13 5'/></svg>");
  }

  option:checked {
    background-color: oklch(from var(--_host-color) calc(l + 0.72) c h);
    font-weight: 600;
  }

  @supports not (
    (-webkit-appearance: base-select) or (-moz-appearance: base-select) or (appearance: base-select)
  ) {
    .select {
      display: inline-grid;
      grid-template-areas: select;
      align-items: center;
    }

    .select > * {
      grid-area: select;
    }

    .select > svg {
      position: relative;
      inline-size: 0.875rem;
      justify-self: end;
      margin-inline-end: 0.25rem;
      pointer-events: none;
      display: block;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 1px solid var(--_select-bgcolor);
      padding: 0.5em 0.25em;
      inline-size: 100%;
    }
  }

  @supports (
    (-webkit-appearance: base-select) or (-moz-appearance: base-select) or (appearance: base-select)
  ) {
    .select svg {
      display: none;
    }
  }

  .description {
    font-size: 0.875rem;
  }

  .description:empty {
    visibility: hidden;
  }

  .read-data-pos {
    font-size: 0.875rem;
    letter-spacing: 0.0156rem;
    position: fixed;
    z-index: 1;
    inset-inline-end: 0.375rem;
    inset-block-start: 0.3125rem;
    opacity: 0;
    transition: opacity 90ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  blockquote-base-embedded-webview-resize {
    overflow-x: hidden;
    overflow-inline: hidden;
  }
`;
