import {css} from 'lit';

export const styles = css`
  :host {
    --__color: var(
      --blockquote-tab-color-dark-mode,
      var(--blockquote-tab-color-ambient, var(--theme-colors-secondary500, rgb(32, 32, 32)))
    );
    --_color: var(--blockquote-tab-color, var(--__color));
    --_selected-border-color: var(
      --blockquote-tab-selected-border-color,
      var(
        --blockquote-tab-selected-border-color-ambient,
        var(--theme-colors-secondary500, rgb(184, 184, 184))
      )
    );
    --_focus-outline-color: var(
      --blockquote-tab-focus-outline-color,
      var(
        --blockquote-tab-focus-outline-color-ambient,
        var(--theme-colors-secondary500, rgb(184, 184, 184))
      )
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: nowrap;
    color: var(--_color);
    padding: 1em 0.5em;
    min-width: 6.25rem;
    border-bottom: 0.0625rem solid transparent;
    transition: border-bottom-color 192ms ease-in-out;
    cursor: pointer;
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

  :host([aria-selected='true']) {
    font-weight: 700;
    border-bottom-color: var(--_selected-border-color);
  }

  :host(:focus:not(:focus-visible)) {
    outline: none;
  }

  :host(:focus-visible) {
    outline: 0.0625rem dashed var(--_focus-outline-color);
    outline-offset: -0.125rem;
  }

  slot::before {
    content: attr(data-text);
    display: block;
    font: inherit;
    font-weight: 700;
    width: inherit;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;
