import { css, unsafeCSS } from 'lit';
import { setDocumentStyles } from '../../index.js';
import { fontFace } from './theme-font-face.js';
import { tertiary0, tertiary1, tertiary2 } from './theme-base.js';

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
    main: 'Kaisei HarunoUmi, sans-serif',
  },
};

setDocumentStyles(css`
  ${unsafeCSS(theme.fontFace.main)}
  :root {
    font: normal medium/1.25 ${unsafeCSS(theme.fonts.main)};
    --red-300: ${unsafeCSS(theme.colors['--red-300'])};
    --red-400: ${unsafeCSS(theme.colors['--red-400'])};
    --red-500: ${unsafeCSS(theme.colors['--red-500'])};
    --red-600: ${unsafeCSS(theme.colors['--red-600'])};
    --red-700: ${unsafeCSS(theme.colors['--red-700'])};

    --green-300: ${unsafeCSS(theme.colors['--green-300'])};
    --green-400: ${unsafeCSS(theme.colors['--green-400'])};
    --green-500: ${unsafeCSS(theme.colors['--green-500'])};
    --green-600: ${unsafeCSS(theme.colors['--green-600'])};
    --green-700: ${unsafeCSS(theme.colors['--green-700'])};

    --blue-300: ${unsafeCSS(theme.colors['--blue-300'])};
    --blue-400: ${unsafeCSS(theme.colors['--blue-400'])};
    --blue-500: ${unsafeCSS(theme.colors['--blue-500'])};
    --blue-600: ${unsafeCSS(theme.colors['--blue-600'])};
    --blue-700: ${unsafeCSS(theme.colors['--blue-700'])};
  }
`);
