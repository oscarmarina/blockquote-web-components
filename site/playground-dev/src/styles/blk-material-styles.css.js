import { css } from 'lit';

export const styles = css`:host {
  --_block-spacing: var(--_spacing-relative-unit);
  --_inline-spacing: var(--_spacing-relative-unit);
  display: block;
  contain: content;
  background-color: var(--_container-color);
  color: var(--_label-text-color);
  font: var(--_body-text-type);
  letter-spacing: var(--_body-text-tracking);
  padding: calc(var(--_block-spacing) * 2 * 1rem) calc(var(--_inline-spacing) * 2 * 1rem);
  border-radius: var(--_container-shape);
}

@container style(--roles: surface) {
  :host {
    --kk-roles: surface;
    background-color: pink;
  }
}
:host(:hover) {
  opacity: var(--_selected-hover-state-layer);
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

[role=heading] {
  display: block;
  font: var(--_header-headline-type);
  padding-block-start: calc(var(--_spacing-unit) / var(--_header-headline-base-size) * 0.5 * 1em);
  margin-block-end: calc(var(--_block-spacing) * 2 * 1rem);
}
[role=heading] + div {
  display: flex;
}

.supporting-text {
  font: var(--_header-supporting-text-type);
  margin-block-end: calc(var(--_block-spacing) * 1 * 1rem);
}

figure {
  margin: 0;
  margin-inline-end: calc(var(--_inline-spacing) * 1.5 * 1rem);
  flex: none;
  width: 6.25rem;
  height: 6.25rem;
}
figure svg {
  fill: var(--_with-icon-icon-color);
}

blk-button {
  margin-block: calc(var(--_block-spacing) * 3 * 1rem) calc(var(--_block-spacing) * 2 * 1rem);
}

::slotted(blk-material) {
  margin-top: calc(var(--_block-spacing) * 1 * 1rem);
}`;
