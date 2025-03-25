import {LitElement, html, css} from 'lit';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `BaseContextMetaElement` emulates the behavior of a flow element using ARIA, preserving standard HTML functionality while enhancing its features.
 *
 * ## Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/flow-element)
 *
 * ## Features
 * - Acts as a structural element that follows HTML flow content rules.
 * - Provides a default ARIA role (`none`) to avoid unintended semantics.
 * - Can be used as a wrapper for contextual metadata.
 *
 * ## Accessibility
 * By default, `BaseContextMetaElement` [assigns the role="none"](https://github.com/w3c/aria/pull/2383),
 * ensuring that it does not introduce unintended semantics in assistive technologies.
 * This behavior can be overridden by explicitly setting a different role.
 *
 * **Related:** [ARIA Structural Roles](https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/#allstructuralrolesandtheirhtmlequivalents)
 *
 * > Inspired by the discussion: [Is it possible to make normal DOM elements context providers?](https://github.com/lit/lit/discussions/4690)
 * **See Also:** [contextmeta provider directive](https://github.com/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-context-meta/src/directives/context-meta-provider.js)
 *
 * With this setup, `BaseContextMetaElement` behaves like a [flow element](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content).
 *
 *
 * <hr>
 */
export class BaseContextMetaElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }
  `;

  connectedCallback() {
    super.connectedCallback?.();
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'none');
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('base-context-meta', BaseContextMetaElement);
