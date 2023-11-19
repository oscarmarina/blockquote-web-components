import { css } from 'lit';

export const styles = css`:host {
  --_block-spacing: var(--_spacing-relative-unit);
  --_inline-spacing: var(--_spacing-relative-unit);
  display: inline-flex;
  box-sizing: border-box;
  color: var(--_label-text-color);
  font: var(--_label-text-type);
  letter-spacing: var(--_label-text-tracking);
  border-radius: var(--_container-shape);
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

:host([disabled]) {
  cursor: default;
  pointer-events: none;
}

button {
  -moz-osx-font-smoothing: inherit;
  -webkit-font-smoothing: inherit;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  display: inherit;
  align-items: center;
  justify-content: center;
  padding-block: calc(var(--_block-spacing) * 2 * 1rem);
  padding-inline: calc(var(--_inline-spacing) * 2 * 1rem);
  border: none;
  border-radius: inherit;
  outline: none;
  cursor: inherit;
  font: inherit;
  background-color: inherit;
  color: inherit;
  letter-spacing: inherit;
  overflow: visible;
  text-align: inherit;
  text-decoration: none;
  text-shadow: inherit;
  text-transform: inherit;
  word-spacing: inherit;
  vertical-align: middle;
  inline-size: 100%;
  position: relative;
  z-index: 0;
}
button::before {
  background-color: var(--_container-color);
  border-radius: inherit;
  content: "";
  inset: 0;
  position: absolute;
  z-index: -1;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
button:hover {
  color: var(--_hover-label-text-color);
  cursor: pointer;
}
button:focus {
  color: var(--_focus-label-text-color);
}
button:active {
  color: var(--_pressed-label-text-color);
  outline: none;
}
button:disabled {
  color: var(--_disabled-label-text-color);
  opacity: var(--_disabled-label-text-opacity);
}
button:disabled::before {
  background-color: var(--_disabled-container-color);
  opacity: var(--_disabled-container-opacity);
}`;
