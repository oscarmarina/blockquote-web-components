# blockquoteDirectiveAriaidrefSlot

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

This directive creates a slot element, hidden by default, with a specific name and id.
The name and id of this slot should correspond to the 'slot' attribute of an element in the Light DOM.
It connects the 'slot', 'name', and 'id' attributes of a slot to be used with ARIA relationships.

This slot element is used to overcome some limitations of the Shadow DOM.

> [aria attribute reflection](https://web.dev/articles/aria-labels-and-relationships#relationships)

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/directives/blockquote-directive-ariaidref-slot)

### Usage

__Light Dom__:

```html
<wrapper-dialog>
  <span slot="idref_">Registration - All fields are required</span>
</wrapper-dialog>
```

__Shadow Dom__:

```js
class MyDialog extends LitElement {
  constructor() {
    super();
    this.labelledby = 'idref_';
  }

  get _labeledbyTpl() {
    return html`${this.labelledby ? blockquoteDirectiveAriaidrefSlot(this.labelledby) : ''}`;
  }

  render() {
    return html`
      <dialog aria-labelledby="${this.labelledby || nothing}"><slot></slot></dialog>
      // slot is hidden by default
      ${this._labeledbyTpl} // <slot name="idref_" id="idref_" hidden=""></slot>

      // slot not hidden
      ${this._labeledbyTpl, false} // <slot name="idref_" id="idref_"></slot>
    `;
  }
}
```


### `src/BlockquoteDirectiveAriaidrefSlot.js`:

#### class: `README`

<hr/>

#### Variables

| Name                               | Description | Type |
| ---------------------------------- | ----------- | ---- |
| `blockquoteDirectiveAriaidrefSlot` |             |      |

<hr/>

#### Exports

| Kind | Name                               | Declaration                      | Module                                  | Package |
| ---- | ---------------------------------- | -------------------------------- | --------------------------------------- | ------- |
| `js` | `README`                           | README                           | src/BlockquoteDirectiveAriaidrefSlot.js |         |
| `js` | `blockquoteDirectiveAriaidrefSlot` | blockquoteDirectiveAriaidrefSlot | src/BlockquoteDirectiveAriaidrefSlot.js |         |

### `src/index.js`:

#### Exports

| Kind | Name                               | Declaration                      | Module                                | Package |
| ---- | ---------------------------------- | -------------------------------- | ------------------------------------- | ------- |
| `js` | `blockquoteDirectiveAriaidrefSlot` | blockquoteDirectiveAriaidrefSlot | ./BlockquoteDirectiveAriaidrefSlot.js |         |
