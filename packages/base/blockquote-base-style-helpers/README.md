![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

`BlockquoteBaseStyleHelpers` offers a set of helper functions for working with CSS.

There are two kinds of helps:

- Shared styles between components
- Document-level styles

## Shared styles between components

[Adaptation of the Polymer ideas so that components can share styles, using native JS modules](https://polymer-library.polymer-project.org/2.0/docs/devguide/style-shadow-dom#share-styles-between-elements)

Using the shared styles is a two-step process:

- setComponentSharedStyles
- getComponentSharedStyles

### setComponentSharedStyles

Define a shared-style inside a JS module.

The id attribute specifies the name you'll use to reference your shared styles, multiple shared styles can be registered using the same ID.
These will be applied to the component in the order they were registered.

__shared-styles__

```js
import { css } from 'lit';
import { setComponentSharedStyles } from blockquote-base-style-helpers.js;

setComponentSharedStyles('x-foo-shared-styles', css`
:host {
  background-color: red;
}
p {
  color: blue;
}
`);
```

### getComponentSharedStyles

A component can use `getComponentSharedStyles` for retrieving style blocks and add it to its local styles extending or overriding it.

__Component__

```js
import { LitElement, html, css } from 'lit';
import { getComponentSharedStyles } from 'blockquote-base-style-helpers';

class XFoo extends LitElement {
  static get styles() {
    return [
      css`...`,
      getComponentSharedStyles('x-foo-shared-styles)
    ];
  }
}
```

## Document-level styles

#### [Adaptation of the Polymer ideas so for defining styles in the main document](https://polymer-library.polymer-project.org/2.0/docs/devguide/style-shadow-dom#custom-style)

---

### Define reusable design tokens

Lit provide a perfect API, [adoptStyles](https://lit.dev/docs/api/styles/#adoptStyles) & [css](https://lit.dev/docs/api/styles/#css) for Built-in support Theming and managing tokens for a design system.

The last step in the Built-in theme support creation is to [provide the CSS variables to be able to inherit, lit.dev theming](https://lit.dev/docs/components/styles/#theming)

> But the function `adoptStyles` does not preserve any existing StyleSheets added via adoptedStyleSheets.
>
> - [preserveExisting option to adoptStyles](https://github.com/lit/lit/issues/2984#issuecomment-1150224373)

---

### 1. From tokens to CSS variables

```js
export const theme = {
  colors: {
    ...tertiary0,
    ...tertiary1,
    ...tertiary2,
    ...neutral,
  },
  fontFace: {
    ...fontFace,
  },
  fonts: {
    main: 'Kaisei HarunoUmi, serif',
  },
};

const THEME = `
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

  --neutral-300: ${theme.colors['--neutral-300']};
  --neutral-400: ${theme.colors['--neutral-400']};
  --neutral-500: ${theme.colors['--neutral-500']};
  --neutral-600: ${theme.colors['--neutral-600']};
  --neutral-700: ${theme.colors['--neutral-700']};

  font: normal medium/1.25 sans-serif;

}`;
```

#### 2. Styles are injected in document, adoptedStyleSheets, or inside `<style>` tags in the document's `<head>`

```js
// Two call (setDocumentStyles) preserves any existing StyleSheets added via adoptedStyleSheets

setDocumentStyles(css`
  ${unsafeCSS(theme.fontFace.root)}
`);

setDocumentStyles(css`
  ${unsafeCSS(THEME)}
`);
```

#### 3. Themable component

```js
// CSS var fallback from the same theme just a source of truth
import { css, unsafeCSS } from 'lit';
import { theme } from '../theme/theme.js';

export default css`
  :host {
    display: block;
    color: var(--neutral-600, ${unsafeCSS(theme.colors['--neutral-600'])});
  }
`;
```

#### Demo

- [stackblitz](https://stackblitz.com/github/oscarmarina/theme-tokens?file=src%2FsetDocumentStyles.js&terminal=start)

---

### Progressive Enhancement:

- support browsers with native `Shadow DOM` but without `adoptedStyleSheets`
- support browsers with native `Shadow DOM` and `adoptedStyleSheets`


### `src/getComponentSharedStyles.js`:

#### Functions

| Name                       | Description                                                                                                                 | Parameters   | Return |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------ | ------ |
| `getComponentSharedStyles` | Get styles (as cssResult) already associated to provided ID string (using setComponentSharedStyles helper) and returns them | `id: String` |        |

<hr/>

#### Exports

| Kind | Name                       | Declaration              | Module                          | Package |
| ---- | -------------------------- | ------------------------ | ------------------------------- | ------- |
| `js` | `README`                   | README                   | src/getComponentSharedStyles.js |         |
| `js` | `getComponentSharedStyles` | getComponentSharedStyles | src/getComponentSharedStyles.js |         |

### `src/setComponentSharedStyles.js`:

#### Functions

| Name                       | Description                                                                                          | Parameters                      | Return |
| -------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------- | ------ |
| `setComponentSharedStyles` | Set styles (as cssResult) associated to provided ID string which can then be retrieved by components | `id: String, styles: CSSResult` |        |

<hr/>

#### Exports

| Kind | Name                       | Declaration              | Module                          | Package |
| ---- | -------------------------- | ------------------------ | ------------------------------- | ------- |
| `js` | `setComponentSharedStyles` | setComponentSharedStyles | src/setComponentSharedStyles.js |         |

### `src/setDocumentStyles.js`:

#### Functions

| Name                  | Description | Parameters           | Return |
| --------------------- | ----------- | -------------------- | ------ |
| `adoptDocumentStyles` |             | `renderRoot, styles` |        |
| `setDocumentStyles`   |             | `styles`             |        |

<hr/>

#### Exports

| Kind | Name                  | Declaration         | Module                   | Package |
| ---- | --------------------- | ------------------- | ------------------------ | ------- |
| `js` | `adoptDocumentStyles` | adoptDocumentStyles | src/setDocumentStyles.js |         |
| `js` | `setDocumentStyles`   | setDocumentStyles   | src/setDocumentStyles.js |         |

### `index.js`:

#### Exports

| Kind | Name                       | Declaration              | Module                            | Package |
| ---- | -------------------------- | ------------------------ | --------------------------------- | ------- |
| `js` | `setDocumentStyles`        | setDocumentStyles        | ./src/setDocumentStyles.js        |         |
| `js` | `adoptDocumentStyles`      | adoptDocumentStyles      | ./src/setDocumentStyles.js        |         |
| `js` | `setComponentSharedStyles` | setComponentSharedStyles | ./src/setComponentSharedStyles.js |         |
| `js` | `getComponentSharedStyles` | getComponentSharedStyles | ./src/getComponentSharedStyles.js |         |
