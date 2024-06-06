/* c8 ignore start */
/**
 * Re-dispatches an event from the provided element.
 * @author @material/web
 * @see https://github.com/material-components/material-web/blob/main/internal/events/redispatch-event.ts
 * @param {Element} element - The element to dispatch the event from.
 * @param {Event} event - The event to re-dispatch.
 * @param {Object} [options={}] - An object with properties to override in the new event.
 * @returns {boolean} - Whether or not the event was dispatched (if cancelable).
 */

const redispatchEventFromEvent = (element, event, options = {}) => {
  // For bubbling events in SSR light DOM (or composed), stop their propagation
  // and dispatch the copy.
  if (event.bubbles && (!element.shadowRoot || event.composed)) {
    event.stopPropagation();
  }

  const copy = Reflect.construct(event.constructor, [event.type, { ...event, ...options }]);
  const dispatched = element.dispatchEvent(copy);
  if (!dispatched) {
    event.preventDefault();
  }

  return dispatched;
};

/**
 * Re-dispatches an event from the provided element.
 *
 * This function is useful for forwarding non-composed events, such as `change`
 * events.
 *
 * @example
 * class MyDialog extends LitElement {
 *   render() {
 *     return html`<dialog @close=${this.redispatchEvent}>...</dialog>`;
 *   }
 *
 *   protected redispatchEvent(ev: Event) {
 *     redispatchEvent(this, ev, { cancelable: true });
 *   }
 * }
 *
 * @param {Element} element - The element to dispatch the event from.
 * @param {Event|string} event - The event to re-dispatch. If it's a string, a new Event is created.
 * @param {Object} [options={}] - An object with properties to override in the new event.
 * @returns {boolean} - Whether or not the event was dispatched (if cancelable).
 */
export const redispatchEvent = (element, event, options = {}) => {
  if (typeof event === 'string') {
    const eventType = event;
    const newEvent = new CustomEvent(eventType);
    return redispatchEventFromEvent(element, newEvent, options);
  }
  return redispatchEventFromEvent(element, event, options);
};

/**
 * Checks if an element should be ignored.
 * @param {Element} element - The DOM element to check.
 * @param {Array} [exceptions=['dialog', '[popover]']] - Array of Elements to ignore when checking the element.
 * @returns {boolean} True if the element should be ignored by a screen reader, false otherwise.
 */
export const isElementInvisible = (element, exceptions = ['dialog', '[popover]']) => {
  if (!element || !(element instanceof HTMLElement)) {
    return false;
  }

  if (element.matches(exceptions.join(','))) {
    return false;
  }

  const computedStyle = window.getComputedStyle(element);
  const isStyleHidden = computedStyle.display === 'none' || computedStyle.visibility === 'hidden';
  const isAttributeHidden = element.matches('[disabled], [hidden], [inert], [aria-hidden="true"]');

  return isStyleHidden || isAttributeHidden;
};

/**
 * Checks if an element is focusable. An element is considered focusable if it matches
 * standard focusable elements criteria (such as buttons, inputs, etc., that are not disabled
 * and do not have a negative tabindex) or is a custom element with a shadow root that delegates focus.
 *
 * @param {Element} element - The DOM element to check for focusability.
 * @returns {boolean} True if the element is focusable, false otherwise.
 */
export const isFocusable = element => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  // https://stackoverflow.com/a/30753870/76472
  const knownFocusableElements = `a[href],area[href],button:not([disabled]),details,iframe,object,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]:not([tabindex^="-"]),audio[controls],video[controls]`;

  if (element.matches(knownFocusableElements)) {
    return true;
  }

  const isDisabledCustomElement =
    element.localName.includes('-') && element.matches('[disabled], [aria-disabled="true"]');
  if (isDisabledCustomElement) {
    return false;
  }

  return element.shadowRoot?.delegatesFocus ?? false;
};

/**
 * Retrieves the first and last focusable children of a node using a TreeWalker.
 *
 * @param {IterableIterator<HTMLElement>} walker - The TreeWalker object used to traverse the node's children.
 * @returns {[first: HTMLElement|null, last: HTMLElement|null]} An object containing the first and last focusable children. If no focusable children are found, `null` is returned for both.
 */
export const getFirstAndLastFocusableChildren = walker => {
  let firstFocusableChild = null;
  let lastFocusableChild = null;

  for (const currentNode of walker) {
    if (!firstFocusableChild) {
      firstFocusableChild = currentNode;
    }
    lastFocusableChild = currentNode;
  }

  return [firstFocusableChild, lastFocusableChild];
};

/**
 * Traverse the composed tree from the root, selecting elements that meet the provided filter criteria.
 * You can pass [NodeFilter](https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter) or 0 to retrieve all nodes.
 * @author Jan Miksovsky
 * @see https://github.com/JanMiksovsky/elix/blob/main/src/core/dom.js
 * @param {Node} node - The root node for traversal.
 * @param {number} [whatToShow=0] - NodeFilter code for node types to include.
 * @param {function} [filter=(n: Node) => true] - Filters nodes. Child nodes are considered even if parent does not satisfy the filter.
 * @param {function} [skipNode=(n: Node) => false] - Determines whether to skip a node and its children.
 * @returns {IterableIterator<Node>} An iterator yielding nodes meeting the filter criteria.
 */
export function* walkComposedTree(
  node,
  whatToShow = 0,
  filter = () => true,
  skipNode = () => false,
) {
  if ((whatToShow && node.nodeType !== whatToShow) || skipNode(node)) {
    return;
  }

  if (filter(node)) {
    yield node;
  }

  const children =
    // eslint-disable-next-line no-nested-ternary
    node instanceof HTMLElement && node.shadowRoot
      ? node.shadowRoot.children
      : node instanceof HTMLSlotElement
        ? node.assignedNodes({ flatten: true })
        : node.childNodes;

  for (const child of children) {
    yield* walkComposedTree(child, whatToShow, filter, skipNode);
  }
}

/**
 * Returns the deepest active element, considering Shadow DOM subtrees
 * @param {Document | ShadowRoot} root - The root element to start the search from.
 * @returns {Element} The deepest active element or body element if no active element is found.
 */
export const getDeepActiveElement = (root = document) => {
  const activeEl = root.activeElement;
  if (activeEl) {
    if (activeEl.shadowRoot) {
      return getDeepActiveElement(activeEl.shadowRoot) ?? activeEl;
    }
    return activeEl;
  }
  return document.body;
};

/**
 * Returns true if the first node contains the second, even if the second node
 * is in a shadow tree.
 *
 * The standard Node.contains() function does not account for Shadow DOM, and
 * returns false if the supplied target node is sitting inside a shadow tree
 * within the container.
 *
 * @param {Node} container - The container to search within.
 * @param {Node} target - The node that may be inside the container.
 * @returns {boolean} - True if the container contains the target node.
 */
export const deepContains = (container, target) => {
  /** @type {any} */
  let current = target;
  while (current) {
    const parent = current.assignedSlot || current.parentNode || current.host;
    if (parent === container) {
      return true;
    }
    current = parent;
  }
  return false;
};

/**
 * Search a list element for the item that contains the specified target.
 *
 * When dealing with UI events (e.g., mouse clicks) that may occur in
 * subelements inside a list item, you can use this routine to obtain the
 * containing list item.
 *
 * @author Jan Miksovsky
 * @see https://github.com/JanMiksovsky/elix/blob/main/src/core/dom.js
 * @param {NodeList|Node[]} items - A list element containing a set of items
 * @param {Node} target - A target element that may or may not be an item in the
 * list.
 * @returns {number} - The index of the list child that is or contains the
 * indicated target node. Returns -1 if not found.
 */
export const indexOfItemContainingTarget = (items, target) =>
  Array.prototype.findIndex.call(
    items,
    (/** @type Node */ item) => item === target || deepContains(item, target),
  );

/**
 * Return the ancestors of the given node in the composed tree.
 *
 * In the composed tree, the ancestor of a node assigned to a slot is that slot,
 * not the node's DOM ancestor. The ancestor of a shadow root is its host.
 *
 * @author Jan Miksovsky
 * @see https://github.com/JanMiksovsky/elix/blob/main/src/core/dom.js
 * @param {Node} node
 * @returns {Iterable<Node>}
 */
export function* composedAncestors(node) {
  for (let /** @type {Node|null} */ current = node; current; ) {
    const next =
      // eslint-disable-next-line no-nested-ternary
      current instanceof HTMLElement && current.assignedSlot
        ? current.assignedSlot
        : current instanceof ShadowRoot
          ? current.host
          : current.parentNode;
    if (next) {
      yield next;
    }
    current = next;
  }
}

/**
 * Checks if a click event occurred inside a given bounding rectangle.
 *
 * @param {DOMRect} rect - The bounding rectangle, typically obtained from `element.getBoundingClientRect()`.
 * @param {PointerEvent} ev - The click event.
 * @returns {boolean} True if the click occurred inside the rectangle, false otherwise.
 */
export const isClickInsideRect = (rect, ev) => {
  const { top, left, height, width } = rect;
  const { clientX, clientY } = ev;
  return clientY >= top && clientY <= top + height && clientX >= left && clientX <= left + width;
};

export const randomID = (length = 10) => Math.random().toString(36).substring(2, length);
