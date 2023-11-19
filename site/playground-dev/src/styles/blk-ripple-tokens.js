import { css, unsafeCSS } from 'lit';
import {
  cssStyleRule,
  /* concatenateStringsByKey,
  ROLES, */
  setTokens,
  /* setRoles,
  setVariables, */
} from '../tokens/generate-tokens.js';

export const PREFIX = 'blk-ripple';

const sysAlpha = {
  'hover-opacity': 'hover-state-layer-opacity',
  'focus-opacity': 'focus-state-layer-opacity',
  'pressed-opacity': 'pressed-state-layer-opacity',
};

const sysColor = {
  'hover-color': 'on-surface',
  'focus-color': 'on-surface',
  'pressed-color': 'on-surface',
};

const systemTokens = { sysColor, sysAlpha };
const tokens = setTokens(systemTokens, PREFIX);

export const styleTokens = css`
  ${unsafeCSS(cssStyleRule(`:host`, [tokens]))}
`;
