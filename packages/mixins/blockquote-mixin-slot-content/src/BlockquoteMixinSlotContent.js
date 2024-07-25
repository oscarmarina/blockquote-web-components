import { dedupeMixin } from '@open-wc/dedupe-mixin';

/**
 * Checks if a node's text content contains only whitespace.
 *
 * @param {Node} nod - The node to check.
 * @returns {boolean} - True if the node's text content contains only whitespace, false otherwise.
 */
const onlyContentWhiteSpace = nod => !/[^\t\n\r ]/.test(nod?.textContent ?? '');

/**
 * Checks if a node is a comment node or a text node with only whitespace.
 *
 * @param {Node} nod - The node to check.
 * @returns {boolean} - True if the node is ignorable, false otherwise.
 */
const isIgnorable = nod => nod.nodeType === 8 || (nod.nodeType === 3 && onlyContentWhiteSpace(nod));

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `BlockquoteMixinSlotContent` is a mixin for managing the flattened set of nodes assigned to a slot when the node(s) contained in some slot change.
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/mixins/blockquote-mixin-slot-content)
 *
 * ### Usage
 *
 * `BlockquoteMixinSlotContent` implements the event handling pattern called [event delegation](https://javascript.info/event-delegation).
 *
 * It's necessary to set up the "catch-all" handler on **this.shadowRoot** node.
 *
 * ```js
 * this.shadowRoot.addEventListener('slotchanges', this._onSlotChanges);
 * ```
 *
 * ### Example:
 *
 * ```js
 * class SlotElement extends BlockquoteMixinSlotContent(LitElement) {
 *   // ...
 *   connectedCallback() {
 *     super.connectedCallback?.();
 *     this.shadowRoot.addEventListener('slotchanges', this._onSlotChanges);
 *   }
 *
 *   _onSlotChanges = (ev) => {
 *     const { detail } = ev;
 *     console.log(detail);
 *   }
 *   // ...
 * }
 * ```
 *
 * ## Caveats with whitespace:
 *
 * It's important to understand some of the nuances between text nodes that contain _`text`_ and text nodes that contain only [`whitespace`](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace#what_is_whitespace).
 *
 * ```html
 * <slot-element>
 *   nodeText1
 *   <p>Element 1</p>
 *   <p>Element 2</p>
 * </slot-element>
 * ```
 *
 * #### assignedNodes returns 5 Nodes
 *
 * ```js
 * assignedNodes: Array(5)
 * 0: text // textContent: "\n        nodeText1\n        "
 * 1: p    // textContent: "Element 1"
 * 2: text // textContent: "\n        "
 * 3: p    // textContent: "Element 2"
 * 4: text // textContent: "\n        "
 * length: 5
 * ```
 *
 * Also, another problem with whitespace is that when the content is just whitespace, assignedNodes are no longer able to return `flattened` nodes.
 *
 * #### without `whitespace`
 *
 * ```html
 * <slot-element>
 *   #shadow-root
 *   <slot>
 *     <img src="icon.svg" />
 *   </slot>
 * </slot-element>
 *
 * <slot-element>Hello</slot-element>
 * ```
 *
 * ```js
 * document.querySelector('slot-element').textContent = '';
 *
 * // assignedNodes [`img`]
 * ```
 *
 * <hr>
 *
 * #### with `whitespace`
 *
 * ```html
 * <slot-element>
 *   #shadow-root
 *   <slot>
 *     <img src="icon.svg" />
 *   </slot>
 * </slot-element>
 *
 * <slot-element>Hello</slot-element>
 * ```
 *
 * ```js
 * document.querySelector('slot-element').textContent = ' ';
 *
 * // assignedNodes [`#text`]
 * // * missing `flattened` node
 * ```
 *
 * <hr>
 *
 * ## The `detail property` - keeping that in mind.
 *
 * The mixin will return only nodes [whose content is not whitespace](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace#whitespace_helper_functions)
 * and equally for flattened nodes.
 *
 * ```html
 * <slot-element>
 *   #shadow-root
 *   <slot>
 *     <img src="icon.svg" />
 *   </slot>
 * </slot-element>
 *
 * <slot-element>
 *   <p>sdfas</p>
 *   <p>2jfie</p>
 * </slot-element>
 * ```
 *
 * #### `event.detail`
 *
 * ```json
 * {
 *   "assignedSlotContent": {
 *     "slotName": "",
 *     "assignedSlot": slot
 *   },
 *   "assignedNodesContent": {
 *     "assignedNodesByNode": [
 *       {
 *         "flatten": false,
 *         "assignedNodes": p,
 *         "assignedSlot": slot
 *       },
 *       {
 *         "flatten": false,
 *         "assignedNodes": p,
 *         "assignedSlot": slot
 *       }
 *     ],
 *     "assignedNodes": [p, p]
 *   },
 *   "flattenedNodesContent": {
 *     "assignedNodesByNode": [
 *       {
 *         "flatten": true,
 *         "assignedNodes": img,
 *         "assignedSlot": null
 *       }
 *     ],
 *     "assignedNodes": [img]
 *   },
 *   "originalEvent": {
 *     "event": {
 *       "isTrusted": true,
 *       "type": "slotchange",
 *       "target": null,
 *       "currentTarget": null,
 *       // ...
 *     },
 *     "assignedNodes": [text, p, text, p, text, text, text]
 *   }
 * }
 * ```
 *
 * <hr>
 *
 * ```html
 * <slot-element>
 *   #shadow-root
 *   <slot></slot>
 * </slot-element>
 *
 * <slot-element> </slot-element>
 * ```
 *
 * #### `event.detail`
 *
 * ```json
 * {
 *   "assignedSlotContent": {
 *     "slotName": "",
 *     "assignedSlot": null
 *   },
 *   "assignedNodesContent": {
 *     "assignedNodesByNode": [],
 *     "assignedNodes": []
 *   },
 *   "flattenedNodesContent": {
 *     "assignedNodesByNode": [],
 *     "assignedNodes": []
 *   },
 *   "originalEvent": {
 *     "event": {
 *       "isTrusted": true,
 *       "type": "slotchange",
 *       "target": null,
 *       "currentTarget": null,
 *       // ...
 *     },
 *     "assignedNodes": [text]
 *   }
 * }
 * ```
 *
 * @fires slotchanges
 */
const BlockquoteSlotContentBase = Base =>
  class BlockquoteSlotContent extends Base {
    connectedCallback() {
      super.connectedCallback?.();
      this.shadowRoot.addEventListener('slotchange', this._onSlotChange);
    }

    /**
     * @param {Event} ev
     */
    _onSlotChange = ev => {
      const { target } = ev;
      const slotNode = /** @type {HTMLSlotElement} */ (target);

      if (!slotNode) {
        return;
      }

      const contentSlotName = slotNode.name || slotNode.getAttribute('name') || '';
      const allNodes = [...slotNode.assignedNodes(), ...slotNode.childNodes];
      const originalAssignedNodes = slotNode.assignedNodes({ flatten: true });
      const nodesWithContent = [];

      if (allNodes.length) {
        allNodes.forEach(nod => {
          if (!isIgnorable(nod)) {
            nodesWithContent.push({
              flatten: /** @type {*} */ (nod).assignedSlot === null,
              assignedNodes: nod.nodeType === 3 ? nod.textContent?.trim() : nod,
              assignedSlot: /** @type {*} */ (nod).assignedSlot,
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

      const assignedSlotContent = {
        slotName: contentSlotName,
        assignedSlot: assignedContent[0]?.assignedSlot || null,
      };

      const event = new CustomEvent('slotchanges', {
        composed: true,
        detail: {
          assignedSlotContent,
          assignedNodesContent,
          flattenedNodesContent,
          originalEvent: { event: ev, assignedNodes: originalAssignedNodes },
        },
      });

      this.shadowRoot.dispatchEvent(event);
    };
  };

export const BlockquoteMixinSlotContent = dedupeMixin(BlockquoteSlotContentBase);
