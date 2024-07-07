import { LitElement, html, css } from 'lit';
import {
  BlockquoteControllerContextMeta,
  contextMetaSymbol,
} from './BlockquoteControllerContextMeta.js';
/**
 * `BaseContextMetaElement` is inspired by the concept of 'Customized Built-in Elements', focusing on extending native HTML elements like `div` using Lit's features and the Context API.
 *  This approach simplifies the integration of context providers into a standard elements, enhancing functionality while preserving the core behavior of standard elements. **[All Structural Roles and Their HTML Equivalents](https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/#allstructuralrolesandtheirhtmlequivalents)**
 * > [Is it possible to make normal dom elements context providers?](https://github.com/lit/lit/discussions/4690)
 *
 *  <hr>
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/flow-element)
 *
 * ### Features
 * It incorporates functionality to handle context consumption and presentation as a standard block element.
 *
 * 1. The `:host` CSS rules ensure the element behaves like a block-level element and respects the `hidden` attribute to hide itself.
 *    ```js
 *    static styles = [
 *      css`
 *        :host {
 *          display: block;
 *        }
 *        :host([hidden]),
 *        [hidden] {
 *          display: none !important;
 *        }
 *      `,
 *    ];
 *    ```
 *
 * 2. The initOrGetContextProvider method allows setting up a context consumer on the element. It creates a new BlockquoteControllerContextMeta if one does not already exist.
 *    ```js
 *      initOrGetContextProvider(contextOrOptions = contextMetaSymbol) {
 *        const ctx =
 *          contextOrOptions?.context !== undefined
 *            ? { ...contextOrOptions }
 *            : { context: contextOrOptions };
 *
 *        if (!this.#controllerBaseContextMeta) {
 *          this.#controllerBaseContextMeta = new BlockquoteControllerContextMeta(this, ctx);
 *        }
 *        return this.#controllerBaseContextMeta;
 *      }
 *    ```
 *
 * 3. Set a default role of 'presentation' to ensure it behaves semantically like a non-interactive container.
 *    ```js
 *    connectedCallback() {
 *      super.connectedCallback?.();
 *      Object.assign(this, { role: this.role ?? 'presentation' });
 *    }
 *    ```
 *
 * 4. The render method includes a <slot>, which allows this element to be a flexible container for any child content, mimicking the behavior of a [flow element](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content).
 *    ```js
 *    render() {
 *      return html`<slot></slot>`;
 *    }
 *    ```
 *
 *
 * ### Usage Example: FlownElement
 * To demonstrate the utility of BaseContextMetaElement, let's create a derived class called FlownElement:
 *
 * 1. Define Properties: The surface property is declared with reflection, allowing it to influence rendering and context behavior dynamically.
 *   ```js
 *   static properties = {
 *     surface: { reflect: true },
 *   };
 *   ```
 *
 * 2. Set Context on Construction: The constructor calls initOrGetContextProvider with a specific context, enabling the element to participate in the context API from its inception.
 *   ```js
 *   constructor() {
 *     super();
 *     this.surface = undefined;
 *     this.flowController = this.initOrGetContextProvider(consumerContext);
 *   }
 *   ```
 *
 * 3. Update Context Values: The willUpdate lifecycle method updates the context value whenever the surface property changes, ensuring context-sensitive operations react appropriately.
 *   ```js
 *   willUpdate(props) {
 *     super.willUpdate?.(props);
 *     if (props.has('surface')) {
 *       this.flowController?.setValue(this.surface);
 *     }
 *   }
 *   ```
 *
 *
 * ### Usage Example:
 * Here's how you might use the FlownElement in your HTML:
 *
 * ```html
 * <flow-element surface="dim">
 *   <!-- Child content that can consume context from this provider -->
 * </flow-element>
 * ```
 *
 * With this setup, FlownElement behaves like a [flow element](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content) but provides the additional benefit of context management via Lit's context API, allowing you to seamlessly integrate context-sensitive behavior without altering the parent element hierarchy.
 */
export class BaseContextMetaElement extends LitElement {
  /**
   * Stores the context controller instance.
   * @type {BlockquoteControllerContextMeta | undefined}
   */
  #controllerBaseContextMeta = undefined;

  static styles = [
    css`
      :host {
        display: block;
      }
      :host([hidden]),
      [hidden] {
        display: none !important;
      }
    `,
  ];

  /**
   * Initializes or returns the existing context meta controller.
   * @param {string | Object} [contextOrOptions=contextMetaSymbol] - context name.
   * @returns {BlockquoteControllerContextMeta} The instance of the context meta.
   */
  initOrGetContextProvider(contextOrOptions = contextMetaSymbol) {
    const ctx =
      contextOrOptions?.context !== undefined
        ? { ...contextOrOptions }
        : { context: contextOrOptions };

    if (!this.#controllerBaseContextMeta) {
      this.#controllerBaseContextMeta = new BlockquoteControllerContextMeta(this, ctx);
    }
    return this.#controllerBaseContextMeta;
  }

  connectedCallback() {
    super.connectedCallback?.();
    Object.assign(this, { role: this.role ?? 'presentation' });
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
