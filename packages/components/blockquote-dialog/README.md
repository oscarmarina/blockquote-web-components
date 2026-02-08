![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

[ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)

A dialog is a window overlaid on either the primary window or another dialog window. Windows under a modal dialog are inert. That is, users cannot interact with content outside an active dialog window.
Inert content outside an active dialog is typically visually obscured or dimmed so it is difficult to discern, and in some implementations, attempts to interact with the inert content cause the dialog to close.

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/components/blockquote-dialog)

### Usage

```html
<blockquote-dialog>
  <button form="form1" aria-label="close" formnovalidate>X</button>
  <p>Fill in your email address to receive our newsletter!</p>
  <form  id="form1 method="dialog">
    <label for="email">Email (required)</label>
    <input type="email" name="EMAIL" id="email" placeholder="john.doe@gmail.com" required />
    <button type="submit" name="button">Sign up</button>
  </form>
</blockquote-dialog>
```


### `src/BlockquoteDialog.js`:

#### class: `BlockquoteDialog`, `blockquote-dialog`

##### Static Fields

| Name                | Privacy | Type     | Default                                                                 | Description | Inherited From |
| ------------------- | ------- | -------- | ----------------------------------------------------------------------- | ----------- | -------------- |
| `shadowRootOptions` |         | `object` | `{ ...LitElement.shadowRootOptions, referenceTarget: 'inner-dialog', }` |             |                |

##### Fields

| Name                          | Privacy | Type      | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                            | Inherited From |
| ----------------------------- | ------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `treewalker`                  |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `dialogRef`                   |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `open`                        | public  | `boolean` |             | Opens the dialog when set to \`true\` and closes it when set to \`false\`.                                                                                                                                                                                                                                                                                                                             |                |
| `_slotTpl`                    |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_labeledbyTpl`               |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_contentTpl`                 |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_scrollerTpl`                |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_firstNodeFocusTrapTpl`      |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_lastNodeFocusTrapTpl`       |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_isConnectedCallbackResolve` |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_isConnectedCallback`        |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_firstFocusableChild`        |         |           | `undefined` |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_lastFocusableChild`         |         |           | `undefined` |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_nextClickIsFromContent`     |         | `boolean` | `false`     |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_overflowRoot`               |         |           |             |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `_nativeDialogOpenObserver`   |         |           | `undefined` |                                                                                                                                                                                                                                                                                                                                                                                                        |                |
| `type`                        | public  | `string`  | `'alert'`   | The type of dialog for accessibility. Set this to \`alert\` to announce a&#xA;dialog as an alert dialog.                                                                                                                                                                                                                                                                                               |                |
| `label`                       | public  | `string`  | `''`        | The 'label' attribute will be used as the 'aria-label' for the dialog                                                                                                                                                                                                                                                                                                                                  |                |
| `labelledby`                  | public  | `string`  | `''`        | The 'labelledby' attribute will be used as the 'aria-labelledby' for the dialog.&#xA;It will also be used to create a slot with the same 'id' and 'name'.&#xA;This slot is hidden by default and its 'name' and 'id' should correspond to the 'slot' attribute of an element in the Light DOM.&#xA;This connects the 'slot', 'name', and 'id' attributes of a slot to be used with ARIA relationships. |                |
| `labelledbyVisible`           | public  | `boolean` | `false`     | The 'labelledbyVisible' attribute will control the visibility of the slot created by 'labelledby'.&#xA;By default, it is set to 'hidden'.                                                                                                                                                                                                                                                              |                |
| `returnValue`                 | public  |           |             | Gets or sets the dialog's return value, usually to indicate which button&#xA;a user pressed to close it.&#xA;&#xA;https\://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue returnValue                                                                                                                                                                                          |                |

##### Methods

| Name                            | Privacy | Description | Parameters        | Return | Inherited From |
| ------------------------------- | ------- | ----------- | ----------------- | ------ | -------------- |
| `getIsConnectedCallbackResolve` |         |             |                   |        |                |
| `show`                          |         |             |                   |        |                |
| `close`                         |         |             |                   |        |                |
| `_handleSubmit`                 |         |             | `ev: SubmitEvent` |        |                |
| `_handleNativeOpen`             |         |             | `records`         |        |                |
| `_handleOpen`                   |         |             |                   |        |                |
| `_handleClose`                  |         |             | `ev: Event`       |        |                |
| `_handleCancel`                 |         |             | `ev: Event`       |        |                |
| `_handleDialogClick`            |         |             |                   |        |                |
| `_handleContentClick`           |         |             |                   |        |                |
| `_firstFocusTrap`               |         |             | `{relatedTarget}` |        |                |
| `_lastFocusTrap`                |         |             | `{relatedTarget}` |        |                |

##### Events

| Name     | Type | Description | Inherited From |
| -------- | ---- | ----------- | -------------- |
| `open`   |      |             |                |
| `close`  |      |             |                |
| `cancel` |      |             |                |

##### Attributes

| Name                  | Field             | Inherited From |
| --------------------- | ----------------- | -------------- |
| `open`                | open              |                |
| `label`               | label             |                |
| `labelledby`          | labelledby        |                |
| `labelledbyVisible`   |                   |                |
| `type`                | type              |                |
| `labelledby-visibile` | labelledbyVisible |                |

##### Slots

| Name | Description             |
| ---- | ----------------------- |
|      | This element has a slot |

<details><summary>Private API</summary>

##### Fields

| Name    | Privacy | Type      | Default | Description | Inherited From |
| ------- | ------- | --------- | ------- | ----------- | -------------- |
| `#open` | private | `boolean` | `false` |             |                |

</details>

<hr/>

#### Exports

| Kind | Name               | Declaration      | Module                  | Package |
| ---- | ------------------ | ---------------- | ----------------------- | ------- |
| `js` | `BlockquoteDialog` | BlockquoteDialog | src/BlockquoteDialog.js |         |

### `src/index.js`:

#### Exports

| Kind | Name               | Declaration      | Module                | Package |
| ---- | ------------------ | ---------------- | --------------------- | ------- |
| `js` | `BlockquoteDialog` | BlockquoteDialog | ./BlockquoteDialog.js |         |

### `src/define/blockquote-dialog.js`:

#### Exports

| Kind                        | Name                | Declaration      | Module                   | Package |
| --------------------------- | ------------------- | ---------------- | ------------------------ | ------- |
| `custom-element-definition` | `blockquote-dialog` | BlockquoteDialog | /src/BlockquoteDialog.js |         |

### `src/styles/blockqoute-dialog-animations-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                | Package |
| ---- | -------- | ----------- | ----------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockqoute-dialog-animations-styles.css.js |         |

### `src/styles/blockquote-dialog-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                     | Package |
| ---- | -------- | ----------- | ------------------------------------------ | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-dialog-styles.css.js |         |
