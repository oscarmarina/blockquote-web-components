# blockquote-base-style-helpers

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

[Adaptation of the Polymer ideas so for defining styles in the main document](https://polymer-library.polymer-project.org/2.0/docs/devguide/style-shadow-dom#custom-style)

### Progressive Enhancement:

- support browsers without native `Shadow DOM`
- support browsers with native `Shadow DOM` but without `adoptedStyleSheets`
- support browsers with native `Shadow DOM` and `adoptedStyleSheets`

#### support browsers without native `Shadow DOM`

The responsibility is delegated to:

- [custom-style](https://polymer-library.polymer-project.org/2.0/docs/devguide/style-shadow-dom#custom-style)
 - [customstyleinterface](https://github.com/webcomponents/polyfills/tree/master/packages/shadycss#about-customstyleinterface)

#### **support browsers with native `Shadow DOM`**

The responsibility is delegated to:

- [Lit - adoptedStyleSheets](https://github.com/lit/lit/blob/main/packages/reactive-element/src/css-tag.ts#L160)

```js
import { css } from 'lit';
import { setDocumentCustomStyles } from 'document-styles';

setDocumentCustomStyles(css`
 :root {
   --bg-color: rgba(0, 0, 255, 0.5);
 }
 p {
   background-color: rgba(255, 0, 0, 0.5);
   padding: 0.25rem 0.5rem;
 }
`);
```
