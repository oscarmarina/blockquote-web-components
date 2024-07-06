import { LitElement, html, css } from 'lit';
import {
  BlockquoteControllerContextMeta,
  contextMetaSymbol,
} from './BlockquoteControllerContextMeta.js';
/**
 * `BaseContextMetaElement` leverages Lit's features and Context API capabilities to facilitate the creation of a component that can be used in place of a standard element, such as a `div`, thus simplifying the use of contexts.
 * > [Is it possible to make normal dom elements context providers?](https://github.com/lit/lit/discussions/4690)
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
 * 2. The setConsumerContext method allows setting up a context consumer on the element. It creates a new BlockquoteControllerContextMeta if one does not already exist.
 *    ```js
 *    setConsumerContext(cc = symbolContextMeta) {
 *      if (!this.controllerBaseContextMeta) {
 *        this.controllerBaseContextMeta = new BlockquoteControllerContextMeta(this, {
 *          context: cc,
 *        });
 *      }
 *    }
 *    ```
 *
 * 3. Set a default role of 'presentation' to ensure it behaves semantically like a non-interactive container.
 *    ```js
 *    connectedCallback() {
 *      super.connectedCallback?.();
 *      Object.assign(this, this.role ? {} : { role: 'presentation' });
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
 * 2. Set Context on Construction: The constructor calls setConsumerContext with a specific context, enabling the element to participate in the context API from its inception.
 *   ```js
 *   constructor() {
 *     super();
 *     this.surface = undefined;
 *     this.setConsumerContext(consumerContext);
 *   }
 *   ```
 *
 * 3. Update Context Values: The willUpdate lifecycle method updates the context value whenever the surface property changes, ensuring context-sensitive operations react appropriately.
 *   ```js
 *   willUpdate(props) {
 *     super.willUpdate?.(props);
 *     if (props.has('surface')) {
 *       this.controllerBaseContextMeta?.setValue(this.surface);
 *     }
 *   }
 *   ```
 *
 * > __Important__: When extending BaseContextMetaElement, it is essential to use this.controllerBaseContextMeta.
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
   * Initializes the context consumer controller if not already present.
   * @param {string} [cc=contextMetaSymbol] - context name.
   */
  setConsumerContext(cc = contextMetaSymbol) {
    if (!this.controllerBaseContextMeta) {
      this.controllerBaseContextMeta = new BlockquoteControllerContextMeta(this, {
        context: cc,
      });
    }
  }

  connectedCallback() {
    super.connectedCallback?.();
    Object.assign(this, this.role ? {} : { role: 'presentation' });
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
