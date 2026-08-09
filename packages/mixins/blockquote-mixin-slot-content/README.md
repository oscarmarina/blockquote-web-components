![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`BlockquoteMixinSlotContent` is a mixin for managing the flattened set of nodes assigned to a slot when the node(s) contained in some slot change.

It implements the event handling pattern called [event delegation](https://javascript.info/event-delegation).

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/mixins/blockquote-mixin-slot-content)

### Example:

```js
class SlotElement extends BlockquoteMixinSlotContent(LitElement) {
  // ...
  constructor() {
    super();
    this.addEventListener('slotchanges', this._onSlotChanges);
  }

  _onSlotChanges = (ev) => {
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
    <div>Default Fallback</div>
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
  "hasComposed": true,
  "isFallback": false,
  "assignedSlotContent": {
    "slotName": "",
    "assignedSlot": slot
  },
  "assignedNodesContent": {
    "assignedNodesByNode": [
      {
        "isFlattened": true,
        "hasComposed": true,
        "isFallback": false,
        "assignedNodes": p,
        "assignedSlot": slot
      },
      {
        "isFlattened": true,
        "hasComposed": true,
        "isFallback": false,
        "assignedNodes": p,
        "assignedSlot": slot
      }
    ],
    "assignedNodes": [p, p]
  },
  "fallbackNodesContent": {
    "assignedNodesByNode": [
      {
        "isFlattened": true,
        "hasComposed": true,
        "isFallback": true,
        "assignedNodes": div,
        "assignedSlot": null
      }
    ],
    "assignedNodes": [div]
  },
  "flattenedNodesContent": {
    "assignedNodesByNode": [
      {
        "isFlattened": true,
        "hasComposed": true,
        "isFallback": false,
        "assignedNodes": p,
        "assignedSlot": slot
      },
      {
        "isFlattened": true,
        "hasComposed": true,
        "isFallback": false,
        "assignedNodes": p,
        "assignedSlot": slot
      }
    ],
    "assignedNodes": [p, p]
  },
  "originalEvent": {
    "event": {
      "isTrusted": true,
      "type": "slotchange",
      "target": null,
      "currentTarget": null
    },
    "assignedNodes": [text, p, text, p, text]
  }
}
```


### `src/BlockquoteMixinSlotContent.ts`:

#### mixin: `BlockquoteMixinSlotContent`

##### Mixins

| Name          | Module | Package               |
| ------------- | ------ | --------------------- |
| `dedupeMixin` |        | @open-wc/dedupe-mixin |

##### Parameters

| Name   | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `Base` | `T`  |         |             |

<details><summary>Private API</summary>

##### Fields

| Name            | Privacy | Type | Default | Description | Inherited From |
| --------------- | ------- | ---- | ------- | ----------- | -------------- |
| `#onSlotChange` | private |      |         |             |                |

##### Methods

| Name                      | Privacy | Description | Parameters                  | Return                                                                                                        | Inherited From |
| ------------------------- | ------- | ----------- | --------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------- |
| `#processSlotContent`     | private |             | `slotNode: HTMLSlotElement` | `SlotContent`                                                                                                 |                |
| `#createContentStructure` | private |             | `content: *`                | `{
      assignedNodesByNode: SlotContentNode[];
      assignedNodes: (string \| undefined \| Node)[];
    }` |                |

</details>

<hr/>

#### Variables

| Name          | Description | Type |
| ------------- | ----------- | ---- |
| `hasComposed` |             |      |
| `isFallback`  |             |      |

<hr/>

#### Exports

| Kind | Name                         | Declaration                | Module                            | Package |
| ---- | ---------------------------- | -------------------------- | --------------------------------- | ------- |
| `js` | `BlockquoteMixinSlotContent` | BlockquoteMixinSlotContent | src/BlockquoteMixinSlotContent.ts |         |

### `src/index.ts`:

#### Exports

| Kind | Name                         | Declaration                | Module                          | Package |
| ---- | ---------------------------- | -------------------------- | ------------------------------- | ------- |
| `js` | `BlockquoteMixinSlotContent` | BlockquoteMixinSlotContent | ./BlockquoteMixinSlotContent.js |         |
