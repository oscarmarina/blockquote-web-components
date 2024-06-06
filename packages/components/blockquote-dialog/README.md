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

##### Fields

| Name                          | Privacy | Type      | Default     | Description                                                                                                                                                                                                   | Inherited From |
| ----------------------------- | ------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `treewalker`                  |         |           |             |                                                                                                                                                                                                               |                |
| `dialogRef`                   |         |           |             |                                                                                                                                                                                                               |                |
| `open`                        | public  | `boolean` |             | Opens the dialog when set to \`true\` and closes it when set to \`false\`.                                                                                                                                    |                |
| `_slotTpl`                    |         |           |             |                                                                                                                                                                                                               |                |
| `_labeledbyTpl`               |         |           |             |                                                                                                                                                                                                               |                |
| `_contentTpl`                 |         |           |             |                                                                                                                                                                                                               |                |
| `_scrollerTpl`                |         |           |             |                                                                                                                                                                                                               |                |
| `_firstNodeFocusTrapTpl`      |         |           |             |                                                                                                                                                                                                               |                |
| `_lastNodeFocusTrapTpl`       |         |           |             |                                                                                                                                                                                                               |                |
| `_isConnectedCallbackResolve` |         |           |             |                                                                                                                                                                                                               |                |
| `_isConnectedCallback`        |         |           |             |                                                                                                                                                                                                               |                |
| `_firstFocusableChild`        |         |           | `undefined` |                                                                                                                                                                                                               |                |
| `_lastFocusableChild`         |         |           | `undefined` |                                                                                                                                                                                                               |                |
| `_nextClickIsFromContent`     |         | `boolean` | `false`     |                                                                                                                                                                                                               |                |
| `_overflowRoot`               |         |           |             |                                                                                                                                                                                                               |                |
| `type`                        | public  | `string`  | `'alert'`   | The type of dialog for accessibility. Set this to \`alert\` to announce a&#xA;dialog as an alert dialog.                                                                                                      |                |
| `label`                       | public  | `string`  | `''`        |                                                                                                                                                                                                               |                |
| `labelledby`                  | public  | `string`  | `''`        |                                                                                                                                                                                                               |                |
| `returnValue`                 | public  |           |             | Gets or sets the dialog's return value, usually to indicate which button&#xA;a user pressed to close it.&#xA;&#xA;https\://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue returnValue |                |

##### Methods

| Name                            | Privacy | Description | Parameters          | Return | Inherited From |
| ------------------------------- | ------- | ----------- | ------------------- | ------ | -------------- |
| `getIsConnectedCallbackResolve` |         |             |                     |        |                |
| `show`                          |         |             |                     |        |                |
| `close`                         |         |             |                     |        |                |
| `_handleSubmit`                 |         |             | `ev: SubmitEvent`   |        |                |
| `_handleOpen`                   |         |             |                     |        |                |
| `_handleClose`                  |         |             | `ev: Event`         |        |                |
| `_handleCancel`                 |         |             | `ev: Event`         |        |                |
| `_handleDialogClick`            |         |             |                     |        |                |
| `_handleContentClick`           |         |             |                     |        |                |
| `_firstFocusTrap`               |         |             | `{ relatedTarget }` |        |                |
| `_lastFocusTrap`                |         |             | `{ relatedTarget }` |        |                |

##### Events

| Name     | Type | Description | Inherited From |
| -------- | ---- | ----------- | -------------- |
| `open`   |      |             |                |
| `close`  |      |             |                |
| `cancel` |      |             |                |

##### Attributes

| Name         | Field      | Inherited From |
| ------------ | ---------- | -------------- |
| `open`       | open       |                |
| `label`      | label      |                |
| `labelledby` | labelledby |                |
| `type`       | type       |                |

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

### `src/dom-utils.js`:

#### Functions

| Name                               | Description                                                                                                                                                                                                                                                                                      | Parameters                                                             | Return                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| `redispatchEvent`                  | Re-dispatches an event from the provided element.&#xA;&#xA;This function is useful for forwarding non-composed events, such as \`change\`&#xA;events.                                                                                                                                            | `element: Element, event: Event\|string, options: Object`              | `boolean`                                             |
| `isElementInvisible`               | Checks if an element should be ignored.                                                                                                                                                                                                                                                          | `element: Element, exceptions: Array`                                  | `boolean`                                             |
| `isFocusable`                      | Checks if an element is focusable. An element is considered focusable if it matches&#xA;standard focusable elements criteria (such as buttons, inputs, etc., that are not disabled&#xA;and do not have a negative tabindex) or is a custom element with a shadow root that delegates focus.      | `element: Element`                                                     | `boolean`                                             |
| `getFirstAndLastFocusableChildren` | Retrieves the first and last focusable children of a node using a TreeWalker.                                                                                                                                                                                                                    | `walker: IterableIterator<HTMLElement>`                                | `[first: HTMLElement\|null, last: HTMLElement\|null]` |
| `walkComposedTree`                 | Traverse the composed tree from the root, selecting elements that meet the provided filter criteria.&#xA;You can pass \[NodeFilter]\(https\://developer.mozilla.org/en-US/docs/Web/API/NodeFilter) or 0 to retrieve all nodes.                                                                   | `node: Node, whatToShow: number, filter: function, skipNode: function` | `IterableIterator<Node>`                              |
| `getDeepActiveElement`             | Returns the deepest active element, considering Shadow DOM subtrees                                                                                                                                                                                                                              | `root: Document \| ShadowRoot`                                         | `Element`                                             |
| `deepContains`                     | Returns true if the first node contains the second, even if the second node&#xA;is in a shadow tree.&#xA;&#xA;The standard Node.contains() function does not account for Shadow DOM, and&#xA;returns false if the supplied target node is sitting inside a shadow tree&#xA;within the container. | `container: Node, target: Node`                                        | `boolean`                                             |
| `indexOfItemContainingTarget`      | Search a list element for the item that contains the specified target.&#xA;&#xA;When dealing with UI events (e.g., mouse clicks) that may occur in&#xA;subelements inside a list item, you can use this routine to obtain the&#xA;containing list item.                                          | `items: NodeList\|Node[], target: Node`                                | `number`                                              |
| `composedAncestors`                | Return the ancestors of the given node in the composed tree.&#xA;&#xA;In the composed tree, the ancestor of a node assigned to a slot is that slot,&#xA;not the node's DOM ancestor. The ancestor of a shadow root is its host.                                                                  | `node: Node`                                                           | `Iterable<Node>`                                      |
| `isClickInsideRect`                | Checks if a click event occurred inside a given bounding rectangle.                                                                                                                                                                                                                              | `rect: DOMRect, ev: PointerEvent`                                      | `boolean`                                             |
| `randomID`                         |                                                                                                                                                                                                                                                                                                  | `length`                                                               |                                                       |

<hr/>

#### Exports

| Kind | Name                               | Declaration                      | Module           | Package |
| ---- | ---------------------------------- | -------------------------------- | ---------------- | ------- |
| `js` | `redispatchEvent`                  | redispatchEvent                  | src/dom-utils.js |         |
| `js` | `isElementInvisible`               | isElementInvisible               | src/dom-utils.js |         |
| `js` | `isFocusable`                      | isFocusable                      | src/dom-utils.js |         |
| `js` | `getFirstAndLastFocusableChildren` | getFirstAndLastFocusableChildren | src/dom-utils.js |         |
| `js` | `walkComposedTree`                 | walkComposedTree                 | src/dom-utils.js |         |
| `js` | `getDeepActiveElement`             | getDeepActiveElement             | src/dom-utils.js |         |
| `js` | `deepContains`                     | deepContains                     | src/dom-utils.js |         |
| `js` | `indexOfItemContainingTarget`      | indexOfItemContainingTarget      | src/dom-utils.js |         |
| `js` | `composedAncestors`                | composedAncestors                | src/dom-utils.js |         |
| `js` | `isClickInsideRect`                | isClickInsideRect                | src/dom-utils.js |         |
| `js` | `randomID`                         | randomID                         | src/dom-utils.js |         |

### `src/index.js`:

#### Exports

| Kind | Name               | Declaration      | Module                | Package |
| ---- | ------------------ | ---------------- | --------------------- | ------- |
| `js` | `BlockquoteDialog` | BlockquoteDialog | ./BlockquoteDialog.js |         |

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

### `define/blockquote-dialog.js`:

#### Exports

| Kind                        | Name                | Declaration      | Module                   | Package |
| --------------------------- | ------------------- | ---------------- | ------------------------ | ------- |
| `custom-element-definition` | `blockquote-dialog` | BlockquoteDialog | /src/BlockquoteDialog.js |         |
