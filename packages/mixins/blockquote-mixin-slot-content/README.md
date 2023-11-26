![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`BlockquoteMixinSlotContent` is a mixin for managing the flattened set of nodes assigned to a slot when the node(s) contained in some slot change.

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/mixins/blockquote-mixin-slot-content)

### Usage

`BlockquoteMixinSlotContent` implements the event handling pattern called [event delegation](https://javascript.info/event-delegation).

It's necessary to set up the "catch-all" handler on **this.shadowRoot** node.

```js
this.shadowRoot.addEventListener('slotchanges', this._onSlotChanges.bind(this));
```

### Example:

```js
class SlotElement extends BlockquoteMixinSlotContent(LitElement) {
  // ...
  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.shadowRoot.addEventListener('slotchanges', this._onSlotChanges.bind(this));
  }

  _onSlotChanges(ev) {
    const { detail } = ev;
    console.log(detail);
  }
  // ...
}
```

## Caveats with whitespace:

It's important to understand some of the nuances between text nodes that contain _`text`_ and text nodes that contain only [`whitespace`](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace#what_is_whitespace).

```html
<slot-element>
  nodeText1
  <p>Element 1</p>
  <p>Element 2</p>
</slot-element>
```

#### assignedNodes returns 5 Nodes

```js
assignedNodes: Array(5)
0: text // textContent: "\n        nodeText1\n        "
1: p    // textContent: "Element 1"
2: text // textContent: "\n        "
3: p    // textContent: "Element 2"
4: text // textContent: "\n        "
length: 5
```

Also, another problem with whitespace is that when the content is just whitespace, assignedNodes are no longer able to return `flattened` nodes.

#### without `whitespace`

```html
<slot-element>
  #shadow-root
  <slot>
    <img src="icon.svg" />
  </slot>
</slot-element>

<slot-element>Hello</slot-element>
```

```js
document.querySelector('slot-element').textContent = '';

// assignedNodes [`img`]
```

<hr>

#### with `whitespace`

```html
<slot-element>
  #shadow-root
  <slot>
    <img src="icon.svg" />
  </slot>
</slot-element>

<slot-element>Hello</slot-element>
```

```js
document.querySelector('slot-element').textContent = ' ';

// assignedNodes [`#text`]
// * missing `flattened` node
```

<hr>

## The `detail property` - keeping that in mind.

The mixin will return only nodes [whose content is not whitespace](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace#whitespace_helper_functions)
and equally for flattened nodes.

```html
<slot-element>
  #shadow-root
  <slot>
    <img src="icon.svg" />
  </slot>
</slot-element>

<slot-element>
  <p>sdfas</p>
  <p>2jfie</p>
</slot-element>
```

#### `event.detail`

```json
{
  "assignedSlotContent": {
    "slotName": "",
    "assignedSlot": slot
  },
  "assignedNodesContent": {
    "assignedNodesByNode": [
      {
        "flatten": false,
        "assignedNodes": p,
        "assignedSlot": slot
      },
      {
        "flatten": false,
        "assignedNodes": p,
        "assignedSlot": slot
      }
    ],
    "assignedNodes": [p, p]
  },
  "flattenedNodesContent": {
    "assignedNodesByNode": [
      {
        "flatten": true,
        "assignedNodes": img,
        "assignedSlot": null
      }
    ],
    "assignedNodes": [img]
  },
  "originalEvent": {
    "event": {
      "isTrusted": true,
      "type": "slotchange",
      "target": null,
      "currentTarget": null,
      // ...
    },
    "assignedNodes": [text, p, text, p, text, text, text]
  }
}
```

<hr>

```html
<slot-element>
  #shadow-root
  <slot></slot>
</slot-element>

<slot-element> </slot-element>
```

#### `event.detail`

```json
{
  "assignedSlotContent": {
    "slotName": "",
    "assignedSlot": null
  },
  "assignedNodesContent": {
    "assignedNodesByNode": [],
    "assignedNodes": []
  },
  "flattenedNodesContent": {
    "assignedNodesByNode": [],
    "assignedNodes": []
  },
  "originalEvent": {
    "event": {
      "isTrusted": true,
      "type": "slotchange",
      "target": null,
      "currentTarget": null,
      // ...
    },
    "assignedNodes": [text]
  }
}
```


### `src/BlockquoteMixinSlotContent.js`:

#### mixin: `BlockquoteMixinSlotContent`

##### Mixins

| Name          | Module | Package               |
| ------------- | ------ | --------------------- |
| `dedupeMixin` |        | @open-wc/dedupe-mixin |

##### Parameters

| Name   | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `Base` |      |         |             |

##### Methods

| Name            | Privacy | Description | Parameters  | Return | Inherited From |
| --------------- | ------- | ----------- | ----------- | ------ | -------------- |
| `_onSlotChange` |         |             | `ev: Event` |        |                |

<hr/>

#### Exports

| Kind | Name                         | Declaration                | Module                            | Package |
| ---- | ---------------------------- | -------------------------- | --------------------------------- | ------- |
| `js` | `BlockquoteMixinSlotContent` | BlockquoteMixinSlotContent | src/BlockquoteMixinSlotContent.js |         |

### `index.js`:

#### Exports

| Kind | Name                         | Declaration                | Module                              | Package |
| ---- | ---------------------------- | -------------------------- | ----------------------------------- | ------- |
| `js` | `BlockquoteMixinSlotContent` | BlockquoteMixinSlotContent | ./src/BlockquoteMixinSlotContent.js |         |
