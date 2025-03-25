import {Directive, directive, PartType} from 'lit/directive.js';
import {noChange} from 'lit';
import {cacheContextMetaProvider, contextMetaKeyProvider} from './cache-context-meta-provider.js';

/**
 * `contextMetaProviderDirective` is a Lit directive that enables normal DOM elements to act as context providers.
 * You can use this directive in both attribute and element bindings in Lit templates.
 *
 * > https://github.com/lit/lit/discussions/4690
 *
 * Usage:
 * This directive transforms a DOM element into a Lit context provider using the BlockquoteControllerContextMeta class, a
 * Lit Reactive Controller that encapsulates controllers provided by [@lit/context](https://lit.dev/docs/data/context/).
 *
 * ## Features
 * - Enables non-Lit elements to provide context.
 * - Works seamlessly with [`@lit/context`](https://lit.dev/docs/data/context/).
 * - Utilizes `BlockquoteControllerContextMeta`, a Lit Reactive Controller for managing context.
 *
 * js```
 *   <div ${contextMetaProviderDirective(myContext, someValue)}>
 *     <!-- Children can consume the provided context -->
 *   </div>
 *   //
 *   <div data-info="${contextMetaProviderDirective(myContext, someValue)}">
 *     <!-- Children can consume the provided context -->
 *   </div>
 * ```
 */
class ContextMetaProviderDirective extends Directive {
  /** @type {*} */
  #partInfo = undefined;
  #currentValue = undefined;

  /**
   * @param {import('lit/directive.js').PartInfo} partInfo - Information about the part this directive is bound to
   */
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE && partInfo.type !== PartType.ELEMENT) {
      throw new Error(
        'contextMetaProviderDirective can only be used in an attribute or element directive.'
      );
    }

    this.#partInfo = partInfo;
  }

  /**
   * Main render method called by Lit.
   * @param {*} value - The context value to provide.
   * @param {{
   *  context?: *,
   *  initialValue?: import('@lit/context').ContextType<*>,
   * }} context - The context object.
   * @returns {unknown} - The serialized context value or noChange.
   */
  render(value, context) {
    if (value !== this.#currentValue) {
      this.#currentValue = value;
      this.updateValue(value, context);
      return this.resolveAttrValue();
    }
    return noChange;
  }

  /**
   * Updates the context value for the element.
   * @param {*} value - The new context value.
   * @param {{
   *  context?: *,
   *  initialValue?: import('@lit/context').ContextType<*>,
   * }} context - The context object.
   */
  updateValue(value, context) {
    const element = this.#partInfo.element;
    cacheContextMetaProvider(element, context);
    element[contextMetaKeyProvider].setValue(value);
  }

  /**
   * Decides whether to return the currentValue if the directive is used as an attribute.
   * @returns {unknown} - The serialized context value or noChange.
   */
  resolveAttrValue() {
    if (this.#partInfo.type !== PartType.ATTRIBUTE) {
      return noChange;
    }
    return this.#currentValue;
  }
}

export const contextMetaProvider = directive(ContextMetaProviderDirective);
