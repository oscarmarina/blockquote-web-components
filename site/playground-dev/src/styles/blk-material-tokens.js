import { css, unsafeCSS } from 'lit';
import {
  cssStyleRule,
  concatenateStringsByKey,
  ROLES,
  setTokens,
  setRoles,
  /* setVariables */
} from '../tokens/generate-tokens.js';
import { rolesComposition as blkButtonRolesComposition } from './blk-button-tokens.js';

export const PREFIX = 'blk-material';

const sysHardcoded = {
  'container-shape': '0.25rem',
};

const sysSpacing = {
  'spacing-unit': 'spacing-unit',
  'spacing-relative-unit': 'spacing-relative-unit',
};

const sysAlpha = {};

const sysTypescale = {
  'body-text-type': 'label-large',
  'body-text-weight': 'label-large-weight',
  'body-text-line-height': 'label-large-line-height',
  'body-text-size': 'label-large-size',
  'body-text-font': 'label-large-font',
  'body-text-tracking': 'label-large-tracking',

  'header-supporting-text-type': 'body-large',
  'header-supporting-text-weight': 'body-large-weight',
  'header-supporting-text-line-height': 'body-large-line-height',
  'header-supporting-text-size': 'body-large-size',
  'header-supporting-text-font': 'body-large-font',
  'header-supporting-text-tracking': 'body-large-tracking',

  'header-headline-type': 'title-large',
  'header-headline-weight': 'title-large-weight',
  'header-headline-line-height': 'title-large-line-height',
  'header-headline-size': 'title-large-size',
  'header-headline-base-size': 'title-large-base-size',
  'header-headline-font': 'title-large-font',
  'header-headline-tracking': 'title-large-tracking',
};

const sysColor = {
  'container-color': 'surface-container',
  'label-text-color': 'on-surface',
};

const systemTokens = { sysColor, sysTypescale, sysAlpha, sysSpacing, sysHardcoded };
const tokens = setTokens(systemTokens, PREFIX);

// roles
const dim = {
  'container-color': 'surface-container-low',
  'label-text-color': 'on-surface-variant',
};

const surface = {
  'container-color': 'surface-container',
  'label-text-color': 'on-surface',
};

const bright = {
  'container-color': 'surface-container-high',
  'label-text-color': 'on-surface-variant',
};

const systemRoles = { dim, surface, bright };
const roles = setRoles(systemRoles, PREFIX);

// roles values composition
export const rolesComposition = concatenateStringsByKey([roles, blkButtonRolesComposition]);

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
  ${unsafeCSS(cssStyleRule(`:host`, [tokens]))}
  ${unsafeCSS(textFromStyleRoles)}
`;
