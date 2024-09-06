/* eslint-disable import/no-extraneous-dependencies */
import {css, unsafeCSS} from 'lit';
import {setDocumentStyles} from '../../src/index.js';
import {fontFace} from './theme-font-face.js';
import {tertiary0, tertiary1, tertiary2} from './theme-base.js';

const theme = {
  colors: {
    ...tertiary0,
    ...tertiary1,
    ...tertiary2,
  },
  fontFace: {
    ...fontFace,
  },
  fonts: {
    main: 'Kaisei HarunoUmi, serif',
  },
};

const THEME = `
${theme.fontFace.main}
:root {
  --red-300: ${theme.colors['--red-300']};
  --red-400: ${theme.colors['--red-400']};
  --red-500: ${theme.colors['--red-500']};
  --red-600: ${theme.colors['--red-600']};
  --red-700: ${theme.colors['--red-700']};

  --green-300: ${theme.colors['--green-300']};
  --green-400: ${theme.colors['--green-400']};
  --green-500: ${theme.colors['--green-500']};
  --green-600: ${theme.colors['--green-600']};
  --green-700: ${theme.colors['--green-700']};

  --blue-300: ${theme.colors['--blue-300']};
  --blue-400: ${theme.colors['--blue-400']};
  --blue-500: ${theme.colors['--blue-500']};
  --blue-600: ${theme.colors['--blue-600']};
  --blue-700: ${theme.colors['--blue-700']};

  font: normal medium/1.25 ${theme.fonts.main};

}`;

setDocumentStyles(css`
  ${unsafeCSS(THEME)}
`);
