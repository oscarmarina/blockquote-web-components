import {css} from 'lit';

export const styles = css`
  :host {
    --_unselected-color: var(--blockquote-tabs-unselected-color, rgb(234 234 234));
    --_scroll-gradient-start-color: var(
      --blockquote-tabs-scroll-gradient-start-color,
      rgb(255, 255, 255, 0)
    );
    --_scroll-gradient-end-color: var(
      --blockquote-tabs-scroll-gradient-end-color,
      rgb(252, 252, 252, 1)
    );
    --_scroll-arrow-color: var(--blockquote-tabs-scroll-arrow-color, rgb(94, 94, 94));
    contain: content;
    display: block;
    box-sizing: border-box;
    color: #202020;
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

  .hold {
    position: relative;
    display: flex;
  }

  .hold .separator {
    position: absolute;
    z-index: -1;
    inset-block-end: 0;
    block-size: 1px;
    inset-inline: 0;
    background-color: var(--_unselected-color);
  }

  .hold .indicator {
    position: absolute;
    inline-size: 1rem;
    pointer-events: none;
    inset-block: 0 1px;
    inset-inline-start: 0;
    box-shadow:
      rgb(255, 255, 255) 4px 0 12px 4px inset,
      rgb(210, 210, 210) 4px 0 4px -4px;
    background-color: rgb(234, 234, 234, 0.5);
    transition: opacity 92ms ease-in-out;
    opacity: 0;
    background-clip: padding-box;
  }

  .hold .indicator.show-indicator {
    opacity: 1;
  }

  .hold .indicator + .indicator {
    inset-inline: auto 0;
    transform: scale(-1);
  }

  .scroll-content {
    inline-size: 100%;
    overflow: auto hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    overscroll-behavior: none;
  }

  .scroll-content::-webkit-scrollbar {
    display: none;
  }

  .scroll-content:focus-visible {
    outline: #9e9e9e dashed 0.0625rem;
    outline-offset: -2px;
  }

  .scroll-content:focus:not(:focus-visible) {
    outline: none;
  }

  [role='tablist'] {
    display: flex;
  }
`;
