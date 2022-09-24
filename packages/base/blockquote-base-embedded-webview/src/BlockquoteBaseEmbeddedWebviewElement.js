import { html, LitElement } from 'lit';
import styles from './styles/BlockquoteBaseEmbeddedWebviewElement-styles.js';
/**
  ![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

  `blockquote-base-embedded-webview-element` wraps an `iframe` or `object` and shows it through light dom.

  ## Exports

  - BlockquoteBaseEmbeddedWebviewElement

  @tagname blockquote-base-embedded-webview-element
*/
export class BlockquoteBaseEmbeddedWebviewElement extends LitElement {
  static get is() {
    return 'blockquote-base-embedded-webview-element';
  }

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      /**
       * The title attribute on an <element> to label its content
       * @type {string}
       */
      embeddedTitle: {
        type: String,
        attribute: 'embedded-title',
      },

      /**
       * The URL of the page to embed
       * @type {string}
       */
      src: {
        type: String,
      },

      /**
       * The type of the tag to embed - iframe or object
       * @type {string}
       */
      type: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.embeddedTitle = '';
    this.src = '';
    this.type = 'iframe';
    this._onLoadElement = this._onLoadElement.bind(this);
  }

  connectedCallback() {
    if (this._embeddedElement) {
      return;
    }
    super.connectedCallback && super.connectedCallback();

    this._embeddedElement = document.createElement(this.type);

    Object.assign(this._embeddedElement, {
      slot: 'embedded',
    });

    this._embeddedElement.addEventListener('load', this._onLoadElement);

    // append element after add listener `load`
    this.append(this._embeddedElement);
  }

  willUpdate(props) {
    super.willUpdate && super.willUpdate(props);

    if (props.has('src') && this.src !== '') {
      this._fetch(this.src);
    }
  }

  render() {
    return html` ${this._embeddedTpl} `;
  }

  get _loadResource() {
    return this.type === 'iframe' ? 'src' : 'data';
  }

  get _embeddedTpl() {
    return html`<slot name="embedded"></slot>`;
  }

  _fetch(resource) {
    if (resource) {
      Object.assign(
        this._embeddedElement,
        this.type === 'iframe' && {
          allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
          allowFullscreen: true,
          loading: 'lazy',
        },
        this.embeddedTitle && { title: this.embeddedTitle },
      );

      this._embeddedElement[this._loadResource] = resource;
      window.performance.mark('iframestart');

      Object.assign(
        this._embeddedElement.style,
        resource.indexOf('http') !== 0 && {
          opacity: 0,
        },
      );
    }
  }

  _onLoadElement({ target }) {
    if (!target.contentDocument || !target.contentDocument.head.childNodes.length) {
      return;
    }
    Object.assign(target.contentDocument.body.dataset, {
      embedded: '',
    });

    window.performance.mark('iframeend');
    window.performance.measure('iframe', 'iframestart', 'iframeend');
    window.requestAnimationFrame(() => target.removeAttribute('style'));

    /**
     * Raised when the `resource` is load.
     *
     * @event elementloaded
     */
    const event = new CustomEvent('elementloaded', {
      bubbles: true,
      detail: target,
    });
    this.dispatchEvent(event);
  }
}
