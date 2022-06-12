import { dedupingMixin } from '@blockquote/polymer/lib/utils/mixin.js';

const onlyContenlWhiteSpace = nod => !/[^\t\n\r ]/.test(nod.textContent);

const isIgnorable = nod =>
  nod.nodeType === 8 || // A comment node
  (nod.nodeType === 3 && onlyContenlWhiteSpace(nod)); // a text node, all white space

/**
![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

`BlockquoteMixinSlotContent` is a mixin for manage the flattened set of nodes assigned to a slot when the node(s)contained in some slot change.

## Usage:

`BlockquoteMixinSlotContent` implement the event handling pattern called [event delegation](https://javascript.info/event-delegation).

It's necessary to setup the "catch-all" handler on **this.shadowRoot** node.

```js
this.shadowRoot.addEventListener('slotchanges', this._onSlotChanges.bind(this));
```

### Example:

```js
class slotElement extends BlockquoteMixinSlotContent(LitElement) {
  ...
  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.shadowRoot.addEventListener('slotchanges', this._onSlotChanges.bind(this));
  }

   _onSlotChanges(ev) {
      const { detail } = ev;
      console.log(detail);
    }
  ...
}
```

## Caveats with whitespace:

It's important to understand some of the nuances between text nodes that contain _`text`_ and text nodes that contain only [`whitespace`](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace#what_is_whitespace).

```html
<slot-element>
  nodeTex1
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

also another problem with whitespace is that when the content is just whitespace assignedNodes is no longer able to return `flattened` nodes.

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

The mixin will return only nodes [whose content is not white space](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace#whitespace_helper_functions)
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
    "slotName": "",
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
            isTrusted: true, type: 'slotchange', target: null, currentTarget: null, ...
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
    "slotName": "",
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
            isTrusted: true, type: 'slotchange', target: null, currentTarget: null, ...
        },
        "assignedNodes": [text]
    }
}
```

## Exports

- BlockquoteMixinSlotContent

*/
export const BlockquoteMixinSlotContent = dedupingMixin(
  Base =>
    class BlockquoteSlotContent extends Base {
      connectedCallback() {
        super.connectedCallback && super.connectedCallback();
        this.shadowRoot.addEventListener('slotchange', this._onSlotChange.bind(this));
      }

      _onSlotChange(ev) {
        const { target } = ev;
        const contentSlotName = target.name || target.getAttribute('name') || '';
        const allNodes = [...target.assignedNodes(), ...target.childNodes];
        const originalAssignedNodes = target.assignedNodes({ flatten: true });
        const nodesWithContent = [];

        if (allNodes.length) {
          allNodes.forEach(nod => {
            if (!isIgnorable(nod)) {
              nodesWithContent.push({
                flatten: nod.assignedSlot === null,
                assignedNodes: nod.nodeType === 3 ? nod.textContent.trim() : nod,
                assignedSlot: nod.assignedSlot,
              });
            }
          });
        }

        const assignedContent = nodesWithContent.filter(nod => nod.flatten === false);
        const flattenedContent = nodesWithContent.filter(nod => nod.flatten === true);

        const assignedNodesContent = {
          assignedNodesByNode: assignedContent,
          assignedNodes: assignedContent.map(nod => nod.assignedNodes),
        };

        const flattenedNodesContent = {
          assignedNodesByNode: flattenedContent,
          assignedNodes: flattenedContent.map(nod => nod.assignedNodes),
        };

        /**
         * Raised when the node(s)contained in some slot change.
         * @event slotchanges
         */
        const event = new CustomEvent('slotchanges', {
          bubbles: true,
          detail: {
            slotName: contentSlotName,
            assignedNodesContent,
            flattenedNodesContent,
            originalEvent: { event: ev, assignedNodes: originalAssignedNodes },
          },
        });

        this.shadowRoot.dispatchEvent(event);
      }
    },
);
