import {dedupeMixin} from '@open-wc/dedupe-mixin';

type CustomElement = HTMLElement & {
  adoptedCallback?(): void;
  attributeChangedCallback?(
    attributeName: string,
    oldValue: unknown,
    newValue: unknown,
    namespace?: string
  ): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomElementConstructor = new (...params: any[]) => HTMLElement & CustomElement;

interface SlotContentNode {
  isFlattened: boolean;
  hasComposed: boolean;
  isFallback: boolean;
  assignedNodes: string | undefined | Node;
  assignedSlot: HTMLSlotElement | null;
}

interface SlotContent {
  assignedContent: SlotContentNode[];
  fallbackContent: SlotContentNode[];
  flattenedContent: SlotContentNode[];
}

/**
 * Checks if a node's text content contains only whitespace.
 *
 * @param {Node} nod - The node to check.
 * @returns {boolean} - True if the node's text content contains only whitespace, false otherwise.
 */
const hasOnlyWhitespace = (nod: Node): boolean => !/[^\t\n\r ]/.test(nod?.textContent ?? '');

/**
 * Checks if a node is a comment node or a text node with only whitespace.
 *
 * @param {Node} nod - The node to check.
 * @returns {boolean} - True if the node is ignorable, false otherwise.
 */
const isIgnorableNode = (nod: Node): boolean =>
  nod.nodeType === Node.COMMENT_NODE || (nod.nodeType === Node.TEXT_NODE && hasOnlyWhitespace(nod));

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `BlockquoteMixinSlotContent` is a mixin for managing the flattened set of nodes assigned to a slot when the node(s) contained in some slot change.
 *
 * It implements the event handling pattern called [event delegation](https://javascript.info/event-delegation).
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/mixins/blockquote-mixin-slot-content)
 *
 * ### Example:
 *
 * ```js
 * class SlotElement extends BlockquoteMixinSlotContent(LitElement) {
 *   // ...
 *   constructor() {
 *     super();
 *     this.addEventListener('slotchanges', this._onSlotChanges);
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
 *     <div>Default Fallback</div>
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
 *   "hasComposed": true,
 *   "isFallback": false,
 *   "assignedSlotContent": {
 *     "slotName": "",
 *     "assignedSlot": slot
 *   },
 *   "assignedNodesContent": {
 *     "assignedNodesByNode": [
 *       {
 *         "isFlattened": true,
 *         "hasComposed": true,
 *         "isFallback": false,
 *         "assignedNodes": p,
 *         "assignedSlot": slot
 *       },
 *       {
 *         "isFlattened": true,
 *         "hasComposed": true,
 *         "isFallback": false,
 *         "assignedNodes": p,
 *         "assignedSlot": slot
 *       }
 *     ],
 *     "assignedNodes": [p, p]
 *   },
 *   "fallbackNodesContent": {
 *     "assignedNodesByNode": [
 *       {
 *         "isFlattened": true,
 *         "hasComposed": true,
 *         "isFallback": true,
 *         "assignedNodes": div,
 *         "assignedSlot": null
 *       }
 *     ],
 *     "assignedNodes": [div]
 *   },
 *   "flattenedNodesContent": {
 *     "assignedNodesByNode": [
 *       {
 *         "isFlattened": true,
 *         "hasComposed": true,
 *         "isFallback": false,
 *         "assignedNodes": p,
 *         "assignedSlot": slot
 *       },
 *       {
 *         "isFlattened": true,
 *         "hasComposed": true,
 *         "isFallback": false,
 *         "assignedNodes": p,
 *         "assignedSlot": slot
 *       }
 *     ],
 *     "assignedNodes": [p, p]
 *   },
 *   "originalEvent": {
 *     "event": {
 *       "isTrusted": true,
 *       "type": "slotchange",
 *       "target": null,
 *       "currentTarget": null
 *     },
 *     "assignedNodes": [text, p, text, p, text]
 *   }
 * }
 * ```
 *
 * @fires slotchanges
 */
const BlockquoteSlotContentBase = <T extends CustomElementConstructor>(Base: T) =>
  class BlockquoteSlotContent extends Base {
    /**
     * @param {HTMLSlotElement} slotNode
     */
    #processSlotContent(slotNode: HTMLSlotElement): SlotContent {
      const assigned = slotNode.assignedNodes();
      const validAssigned = assigned.filter((nod) => !isIgnorableNode(nod));
      const hasAssigned = validAssigned.length > 0;
      const rawFallbackNodes = Array.from(slotNode.childNodes).filter(
        (nod) => !isIgnorableNode(nod)
      );
      const parentAssignedSlot = slotNode.assignedSlot;
      const isFlattened = parentAssignedSlot === null;

      const assignedContent: SlotContentNode[] = validAssigned.map((nod) => ({
        isFlattened,
        hasComposed: isFlattened,
        isFallback: false,
        assignedNodes: nod.nodeType === Node.TEXT_NODE ? nod.textContent?.trim() : nod,
        assignedSlot: 'assignedSlot' in nod ? (nod as Element | Text).assignedSlot : null,
      }));

      const fallbackContent: SlotContentNode[] = rawFallbackNodes.map((nod) => ({
        isFlattened,
        hasComposed: isFlattened,
        isFallback: true,
        assignedNodes: nod.nodeType === Node.TEXT_NODE ? nod.textContent?.trim() : nod,
        assignedSlot: 'assignedSlot' in nod ? (nod as Element | Text).assignedSlot : null,
      }));

      const activeNodes = hasAssigned ? assignedContent : fallbackContent;

      return {
        assignedContent,
        fallbackContent,
        flattenedContent: activeNodes.filter((node) => node.isFlattened),
      };
    }

    /**
     * @param {*} content
     */
    #createContentStructure(content: SlotContentNode[]): {
      assignedNodesByNode: SlotContentNode[];
      assignedNodes: (string | undefined | Node)[];
    } {
      return {
        assignedNodesByNode: content,
        assignedNodes: content.map((nod) => nod.assignedNodes),
      };
    }

    /**
     * @param {Event} ev
     */
    #onSlotChange = (ev: Event): void => {
      const slotNode = ev.target;

      if (!(slotNode instanceof HTMLSlotElement)) {
        return;
      }

      const contentSlotName = slotNode.name || slotNode.getAttribute('name') || '';
      const originalAssignedNodes = slotNode.assignedNodes({flatten: true});
      const contentSlots = this.#processSlotContent(slotNode);

      const hasComposed = contentSlots.flattenedContent.length > 0;
      const isFallback = contentSlots.flattenedContent.some((node) => node.isFallback);

      // slotNode.toggleAttribute('data-has-composed', hasComposed);
      // slotNode.toggleAttribute('data-is-fallback', isFallback);

      const detail = {
        hasComposed,
        isFallback,
        assignedSlotContent: {
          slotName: contentSlotName,
          assignedSlot: contentSlots.assignedContent[0]?.assignedSlot || null,
        },
        assignedNodesContent: this.#createContentStructure(contentSlots.assignedContent),
        fallbackNodesContent: this.#createContentStructure(contentSlots.fallbackContent),
        flattenedNodesContent: this.#createContentStructure(contentSlots.flattenedContent),
        originalEvent: {
          event: ev,
          assignedNodes: originalAssignedNodes,
        },
      };

      const event = new CustomEvent('slotchanges', {
        composed: true,
        detail,
      });

      this.shadowRoot?.dispatchEvent(event);
    };

    override connectedCallback() {
      super.connectedCallback?.();
      this.shadowRoot?.addEventListener('slotchange', this.#onSlotChange);
    }

    override disconnectedCallback() {
      super.disconnectedCallback?.();
      this.shadowRoot?.removeEventListener('slotchange', this.#onSlotChange);
    }
  };

export const BlockquoteMixinSlotContent: <T extends CustomElementConstructor>(superclass: T) => T =
  dedupeMixin(BlockquoteSlotContentBase);
