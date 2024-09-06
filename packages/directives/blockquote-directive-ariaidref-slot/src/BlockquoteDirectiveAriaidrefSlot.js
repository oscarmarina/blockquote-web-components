// eslint-disable-next-line max-classes-per-file
import {Directive, directive, PartType} from 'lit/directive.js';
import {noChange} from 'lit';

/**
 * # blockquoteDirectiveAriaidrefSlot
 *
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * This directive creates a slot element, hidden by default, with a specific name and id.
 * The name and id of this slot should correspond to the 'slot' attribute of an element in the Light DOM.
 * It connects the 'slot', 'name', and 'id' attributes of a slot to be used with ARIA relationships.
 *
 * This slot element is used to overcome some limitations of the Shadow DOM.
 *
 * > [aria attribute reflection](https://web.dev/articles/aria-labels-and-relationships#relationships)
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/directives/blockquote-directive-ariaidref-slot)
 *
 * ### Usage
 *
 * __Light Dom__:
 *
 * ```html
 * <wrapper-dialog>
 *   <span slot="idref_">Registration - All fields are required</span>
 * </wrapper-dialog>
 * ```
 *
 * __Shadow Dom__:
 *
 * ```js
 * class MyDialog extends LitElement {
 *   constructor() {
 *     super();
 *     this.labelledby = 'idref_';
 *   }
 *
 *   get _labeledbyTpl() {
 *     return html`${this.labelledby ? blockquoteDirectiveAriaidrefSlot(this.labelledby) : ''}`;
 *   }
 *
 *   render() {
 *     return html`
 *       <dialog aria-labelledby="${this.labelledby || nothing}"><slot></slot></dialog>
 *       // slot is hidden by default
 *       ${this._labeledbyTpl} // <slot name="idref_" id="idref_" hidden=""></slot>
 *
 *       // slot not hidden
 *       ${this._labeledbyTpl, false} // <slot name="idref_" id="idref_"></slot>
 *     `;
 *   }
 * }
 * ```
 */
export class README extends Text {}

class BlockquoteDirectiveAriaidrefSlot extends Directive {
  /**
   * @param {*} partInfo - The part information.
   */
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.CHILD) {
      throw new Error('blockquoteDirectiveAriaidrefSlot can only be used in child expressions');
    }
    this.hasSlotNode = false;
  }

  /**
   * Creates an accessible slot element.
   *
   * @param {string} value - The name and id of the slot.
   * @param {boolean} [isVisible=true] - A flag indicating whether the slot is visible (defaults to true).
   * @returns {HTMLSlotElement | import('lit').noChange} - The created slot element, or noChange if the slot was not created.
   */
  render(value, isVisible = false) {
    if (!value || typeof value !== 'string' || this.hasSlotNode) {
      return noChange;
    }
    const slot = document.createElement('slot');
    Object.assign(slot, {name: value, id: value, hidden: !isVisible});
    this.hasSlotNode = true;
    return slot;
  }
}

export const blockquoteDirectiveAriaidrefSlot = directive(BlockquoteDirectiveAriaidrefSlot);
