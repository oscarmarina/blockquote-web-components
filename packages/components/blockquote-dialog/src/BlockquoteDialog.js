import { html, LitElement, nothing, isServer } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { blockquoteDirectiveAriaidrefSlot } from '@blockquote-web-components/blockquote-directive-ariaidref-slot';
import {
  redispatchEvent,
  isElementInvisible,
  isFocusable,
  getFirstAndLastFocusableChildren,
  walkComposedTree,
} from '@blockquote/dev-utilities';
import { styles } from './styles/blockquote-dialog-styles.css.js';
import { styles as animations } from './styles/blockqoute-dialog-animations-styles.css.js';

// https://web.dev/learn/html/dialog
// https://github.com/oscarmarina/material-web/blob/main/dialog/dialog.ts
// https://a11y-dialog.netlify.app/

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * [ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
 *
 * A dialog is a window overlaid on either the primary window or another dialog window. Windows under a modal dialog are inert. That is, users cannot interact with content outside an active dialog window.
 * Inert content outside an active dialog is typically visually obscured or dimmed so it is difficult to discern, and in some implementations, attempts to interact with the inert content cause the dialog to close.
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/components/blockquote-dialog)
 *
 * ### Usage
 *
 * ```html
 * <blockquote-dialog>
 *   <button form="form1" aria-label="close" formnovalidate>X</button>
 *   <p>Fill in your email address to receive our newsletter!</p>
 *   <form  id="form1 method="dialog">
 *     <label for="email">Email (required)</label>
 *     <input type="email" name="EMAIL" id="email" placeholder="john.doe@gmail.com" required />
 *     <button type="submit" name="button">Sign up</button>
 *   </form>
 * </blockquote-dialog>
 * ```
 *
 * @attribute open
 * @attribute label
 * @attribute labelledby
 * @attribute labelledbyVisible
 * @attribute type
 * @fires open
 * @fires close
 * @fires cancel
 * @slot - This element has a slot
 */
export class BlockquoteDialog extends LitElement {
  treewalker = walkComposedTree(this, NodeFilter.SHOW_ELEMENT, isFocusable, isElementInvisible);

  #open = false;

  dialogRef = createRef();

  /**
   * @override
   */
  static styles = [styles, animations];

  /**
   * @override
   */
  static properties = {
    /**
     * Opens the dialog when set to `true` and closes it when set to `false`.
     */
    open: {
      type: Boolean,
      reflect: true,
    },

    /**
     * Gets or sets the dialog's return value, usually to indicate which button
     * a user pressed to close it.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue returnValue}
     */
    returnValue: {
      attribute: false,
    },

    /**
     * The 'label' attribute will be used as the 'aria-label' for the dialog
     */
    label: {
      type: String,
    },

    /**
     * The 'labelledby' attribute will be used as the 'aria-labelledby' for the dialog.
     * It will also be used to create a slot with the same 'id' and 'name'.
     * This slot is hidden by default and its 'name' and 'id' should correspond to the 'slot' attribute of an element in the Light DOM.
     * This connects the 'slot', 'name', and 'id' attributes of a slot to be used with ARIA relationships.
     */
    labelledby: {
      type: String,
    },

    /**
     * The 'labelledbyVisible' attribute will control the visibility of the slot created by 'labelledby'.
     * By default, it is set to 'hidden'.
     */
    labelledbyVisible: {
      type: String,
      attribute: 'labelledby-visibile',
    },

    /**
     * The type of dialog for accessibility. Set this to `alert` to announce a
     * dialog as an alert dialog.
     */
    type: {
      type: String,
      reflect: true,
    },
  };

  set open(value) {
    const old = this.#open;
    if (value === old) {
      return;
    }

    this.#open = value;
    if (value) {
      this.show();
    } else {
      this.close();
    }
  }

  get open() {
    return this.#open;
  }

  constructor() {
    super();
    this._isConnectedCallbackResolve = () => undefined;
    this._isConnectedCallback = this.getIsConnectedCallbackResolve();
    this._firstFocusableChild = undefined;
    this._lastFocusableChild = undefined;
    this._nextClickIsFromContent = false;
    this._overflowRoot = document.body;
    this.type = 'alert';
    this.label = '';
    this.labelledby = '';
    this.labelledbyVisible = false;

    if (!isServer) {
      this.addEventListener('submit', this._handleSubmit);
    }
  }

  getIsConnectedCallbackResolve() {
    return new Promise(resolve => {
      /** @type {unknown} */ (this._isConnectedCallbackResolve) = resolve;
    });
  }

  async connectedCallback() {
    super.connectedCallback?.();
    await this.updateComplete;
    this.scroller = this.shadowRoot?.querySelector('.scroller');
    const [first, last] = getFirstAndLastFocusableChildren(
      /** @type {IterableIterator<HTMLElement>} */ (this.treewalker),
    );

    this._firstFocusableChild = first;
    this._lastFocusableChild = last;
    this.role = 'presentation';

    this._isConnectedCallbackResolve();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.isConnectedPromise = this.getIsConnectedCallbackResolve();
  }

  async show() {
    await this._isConnectedCallback;
    const { value } = this.dialogRef;

    if (/** @type {HTMLDialogElement} */ (value)?.open) {
      return;
    }

    const preventDefault = !this._handleOpen();
    if (preventDefault) {
      this.open = false;
      return;
    }

    /** @type {HTMLDialogElement} */ (value)?.showModal();
    this.requestUpdate();

    const autofocusNode = this.querySelector('[autofocus]');
    if (autofocusNode) {
      /** @type {HTMLElement} */ (autofocusNode)?.focus();
    } else if (this._firstFocusableChild) {
      this._firstFocusableChild?.focus();
    }

    this._overflowRoot && this._overflowRoot.style.setProperty('overflow', 'hidden');

    if (this.scroller) {
      this.scroller.scrollTop = 0;
    }
  }

  close() {
    const { value } = this.dialogRef;
    if (!(/** @type {HTMLDialogElement} */ (value)?.open)) {
      return;
    }

    /** @type {HTMLDialogElement} */ (value)?.close();
    this.requestUpdate();
    this._overflowRoot && this._overflowRoot.style.setProperty('overflow', '');
  }

  get _slotTpl() {
    return html`
      <slot></slot>
    `;
  }

  get _labeledbyTpl() {
    return html`
      ${this.labelledby
        ? blockquoteDirectiveAriaidrefSlot(this.labelledby, this.labelledbyVisible)
        : ''}
    `;
  }

  get _contentTpl() {
    return html`
      <div class="content" @click=${this._handleContentClick}>${this._slotTpl}</div>
    `;
  }

  get _scrollerTpl() {
    return html`
      <div class="scroller">${this._contentTpl} ${this._labeledbyTpl}</div>
    `;
  }

  get _firstNodeFocusTrapTpl() {
    return html`
      <span
        ?hidden="${!(/** @type {HTMLDialogElement} */ (this.dialogRef.value)?.open)}"
        tabindex="0"
        @focus="${this._lastFocusTrap}"></span>
    `;
  }

  get _lastNodeFocusTrapTpl() {
    return html`
      <span
        ?hidden="${!(/** @type {HTMLDialogElement} */ (this.dialogRef.value)?.open)}"
        tabindex="0"
        @focus="${this._firstFocusTrap}"></span>
    `;
  }

  /**
   * @override
   */
  render() {
    return html`
      <dialog
        ${ref(this.dialogRef)}
        aria-label=${this.label || nothing}
        aria-labelledby="${this.labelledby || nothing}"
        role=${this.type === 'alert' ? 'alertdialog' : nothing}
        @click=${this._handleDialogClick}
        @cancel=${this._handleCancel}
        @close=${this._handleClose}
        .returnValue=${this.returnValue || nothing}>
        ${this._firstNodeFocusTrapTpl} ${this._scrollerTpl} ${this._lastNodeFocusTrapTpl}
      </dialog>
    `;
  }

  /**
   * @param {SubmitEvent} ev
   */
  _handleSubmit(ev) {
    const { target, submitter } = ev;
    const isFormMethodDialog = /** @type {HTMLFormElement} */ (target)?.method === 'dialog';
    const isSubmitterFormMethodDialog =
      /** @type {HTMLButtonElement} */ (submitter)?.formMethod === 'dialog';

    if (!isFormMethodDialog && !isSubmitterFormMethodDialog) {
      return;
    }

    this._submitter = submitter;
    this.open = false;
  }

  _handleOpen() {
    /**
     * Dispatched when the dialog is open.
     * @event open
     */
    const preventDefault = redispatchEvent(this, 'open', { cancelable: true });
    return preventDefault;
  }

  /**
   * @param {Event} ev
   */
  _handleClose(ev) {
    this.returnValue = this._submitter ?? this.returnValue;

    /**
     * Dispatched when the dialog is close.
     * @event close
     */
    const preventDefault = !redispatchEvent(this, ev, { cancelable: true });
    if (preventDefault) {
      return;
    }

    this.open = false;
  }

  /**
   * @param {Event} ev
   */
  _handleCancel(ev) {
    const { target } = ev;
    if (target !== this.dialogRef.value) {
      return;
    }

    /**
     * Dispatched when the dialog is cancel.
     * @event cancel
     */
    const preventDefault = !redispatchEvent(this, ev, { cancelable: true });
    if (preventDefault) {
      return;
    }

    this.open = false;
  }

  _handleDialogClick() {
    if (this._nextClickIsFromContent) {
      this._nextClickIsFromContent = false;
      return;
    }

    const { value } = this.dialogRef;
    value?.dispatchEvent(new Event('cancel'));
  }

  _handleContentClick() {
    this._nextClickIsFromContent = true;
  }

  _firstFocusTrap({ relatedTarget }) {
    (relatedTarget != null ? this._firstFocusableChild : this._lastFocusableChild)?.focus();
  }

  _lastFocusTrap({ relatedTarget }) {
    (relatedTarget != null ? this._lastFocusableChild : this._firstFocusableChild)?.focus();
  }
}
