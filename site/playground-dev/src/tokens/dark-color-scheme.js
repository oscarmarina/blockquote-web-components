/* eslint-disable import/no-extraneous-dependencies */
import { setDocumentStyles } from '@blockquote-web-components/blockquote-base-style-helpers';
import { css, unsafeCSS } from 'lit';
import { cssStyleRule } from './generate-tokens.js';
import palette from './blk-ref-palette.js';
import sysName, { dark } from './blk-sys-color.js';

const { namespace } = sysName;

const colorScheme = Object.keys(dark)
  .map(
    item => `
  --${namespace}-${item}: ${palette[dark[item]]};
  `,
  )
  .join(' ');

const darkColorScheme = unsafeCSS(
  cssStyleRule(`[data-prefers-color-scheme="dark"]`, [colorScheme]),
);

setDocumentStyles(css`
  ${darkColorScheme}
`);

export { darkColorScheme, setDocumentStyles };
