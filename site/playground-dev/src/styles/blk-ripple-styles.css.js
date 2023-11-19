import { css } from 'lit';

export const styles = css`:host,
.focus-ring,
.surface {
  border-radius: inherit;
  display: block;
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.focus-ring {
  display: none;
}

.surface {
  outline: none;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.surface::before, .surface::after {
  position: absolute;
  opacity: 0;
  inset: inherit;
  pointer-events: none;
  content: "";
}
.surface::before {
  background-color: var(--_hover-color);
  transition: opacity 15ms linear, background-color 15ms linear;
}
.surface::after {
  background: radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);
  transition: opacity 375ms linear;
  transform-origin: center center;
}
.surface.hovered::before {
  background-color: var(--_hover-color);
  opacity: var(--_hover-opacity);
}
.surface.focused + .focus-ring {
  display: block;
  outline: 2px solid var(--_focus-color);
  outline-offset: 2px;
}
.surface.pressed::after {
  opacity: var(--_pressed-opacity);
  transition-duration: 105ms;
}`;
