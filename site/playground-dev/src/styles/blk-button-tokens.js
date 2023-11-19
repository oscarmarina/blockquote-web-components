import { css, unsafeCSS } from 'lit';
import { PREFIX as blkRipplePrefix } from './blk-ripple-tokens.js';
import {
  cssStyleRule,
  concatenateStringsByKey,
  ROLES,
  setTokens,
  setRoles,
  setVariables,
} from '../tokens/generate-tokens.js';

export const PREFIX = 'blk-button';

const sysHardcoded = {
  'container-shape': 'calc((8/16) / 4 * 1rem)',
};

const sysSpacing = {
  'spacing-unit': 'spacing-unit',
  'spacing-relative-unit': 'spacing-relative-unit',
};

const sysAlpha = {
  'disabled-container-opacity': 'semi-clear',
  'disabled-label-text-opacity': 'very-solid',
  /* blkRipple */
  'hover-state-layer-opacity': 'hover-state-layer-opacity', // blk-sys-alpha
  'pressed-state-layer-opacity': 'pressed-state-layer-opacity',
};

const sysTypescale = {
  'label-text-type': 'label-large',
  'label-text-weight': 'label-large-weight',
  'label-text-line-height': 'label-large-line-height',
  'label-text-size': 'label-large-size',
  'label-text-font': 'label-large-font',
  'label-text-tracking': 'label-large-tracking',
};

const sysColor = {
  'container-color': 'primary',
  'label-text-color': 'on-primary',
  'focus-label-text-color': 'on-primary',
  'hover-label-text-color': 'on-primary',
  'pressed-label-text-color': 'on-primary',
  'disabled-container-color': 'on-surface',
  'disabled-label-text-color': 'on-surface',
  /* blkRipple */
  'hover-state-layer-color': 'on-primary',
  'pressed-state-layer-color': 'primary',
};

const systemTokens = { sysColor, sysTypescale, sysAlpha, sysSpacing, sysHardcoded };
const tokens = setTokens(systemTokens, PREFIX); // const PREFIX = 'blk-button';

const blkRipple = {
  'hover-color': 'hover-state-layer-color',
  'hover-opacity': 'hover-state-layer-opacity',
  'pressed-color': 'pressed-state-layer-color',
  'pressed-opacity': 'pressed-state-layer-opacity',
};

const themeVars = setVariables(blkRipple, blkRipplePrefix); // PREFIX as blkRipplePrefix = 'blk-ripple';

// roles
const dim = {
  'container-color': 'secondary',
  'label-text-color': 'on-secondary',
};

const surface = {
  'container-color': 'primary',
  'label-text-color': 'on-primary',
};

const bright = {
  'container-color': 'tertiary',
  'label-text-color': 'on-tertiary',
};

const systemRoles = { dim, surface, bright };
const roles = setRoles(systemRoles, PREFIX);

// roles values composition
export const rolesComposition = concatenateStringsByKey([roles]);

export const styleRoles = Object.keys(rolesComposition).reduce((acc, role) => {
  acc[role] = css`
    ${unsafeCSS(
      cssStyleRule(`[data-${ROLES}~="${role}"], :host([${ROLES}~="${role}"])`, [
        rolesComposition[role],
      ]),
    )}
  `;
  return acc;
}, {});

const textFromStyleRoles = Object.values(styleRoles).join('');
export const styleTokens = css`
  ${unsafeCSS(cssStyleRule(`:host`, [tokens, themeVars]))}
  ${unsafeCSS(textFromStyleRoles)}
`;
