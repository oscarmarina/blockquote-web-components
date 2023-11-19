import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleTokens } from './styles/blk-ripple-tokens.js';
import { styles } from './styles/blk-ripple-styles.css.js';

const TOUCH_DELAY_MS = 150;

export class BlkRipple extends LitElement {
  static styles = [styleTokens, styles];

  static properties = {
    disabled: {
      type: Boolean,
    },
    hovered: {
      type: Boolean,
    },
    focused: {
      type: Boolean,
    },
    pressed: {
      type: Boolean,
    },
  };

  constructor() {
    super();
    this.disabled = false;
    this.hovered = false;
    this.focused = false;
    this.pressed = false;

    this.element = this.parentElement;
    if (this.element) {
      this.element.addEventListener('click', this);
      // this.element.addEventListener('contextmenu', this);
      this.element.addEventListener('pointercancel', this);
      this.element.addEventListener('pointerdown', this);
      this.element.addEventListener('pointerenter', this);
      this.element.addEventListener('pointerleave', this);
      this.element.addEventListener('pointerup', this);
      this.element.addEventListener('focus', this);
      this.element.addEventListener('blur', this);
    }
  }

  async handleEvent(ev) {
    if (this.disabled) {
      return;
    }
    switch (ev.type) {
      case 'click':
        this.handleClick();
        break;
      case 'contextmenu':
        // this.handleContextmenu();
        break;
      case 'pointercancel':
        // this.handlePointercancel(ev);
        break;
      case 'pointerdown':
        this.handlePointerdown();
        break;
      case 'pointerenter':
        this.handlePointerenter();
        break;
      case 'pointerleave':
        this.handlePointerleave();
        break;
      case 'pointerup':
        this.handlePointerup();
        break;
      case 'focus':
        this.handleFocus(ev);
        break;
      case 'blur':
        this.handleBlur();
        break;
      default:
        break;
    }
  }

  handlePointerenter() {
    this.hovered = true;
  }

  handlePointerleave() {
    this.hovered = false;
  }

  /**
   * Handles the focus event.
   *
   * @param {FocusEvent} ev - The focus event object.
   */
  handleFocus(ev) {
    this.focused = /** @type {Element} */ (ev.target)?.matches(':focus-visible');
  }

  handleBlur() {
    this.focused = false;
  }

  handlePointerdown() {
    this.pressed = true;
  }

  handlePointerup() {
    this.pressed = false;
  }

  async handleClick() {
    this.pressed = true;
    await new Promise(resolve => {
      setTimeout(resolve, TOUCH_DELAY_MS);
    });
    this.pressed = false;
  }

  render() {
    const classes = {
      hovered: this.hovered,
      focused: this.focused,
      pressed: this.pressed,
    };
    return html`<div class="surface ${classMap(classes)}"></div>
      <span class="focus-ring"></span>`;
  }
}
