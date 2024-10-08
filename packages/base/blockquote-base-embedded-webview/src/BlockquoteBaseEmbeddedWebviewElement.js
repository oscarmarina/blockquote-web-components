import {html, LitElement, render as LitHtmlRender} from 'lit';
import {styles} from './styles/blockquote-base-embedded-webview-element-styles.css.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `blockquote-base-embedded-webview-element` wraps an `iframe` or `object` and shows it through light dom.
 *
 * @attribute embedded-title
 * @attribute src
 * @attribute type
 */
export class BlockquoteBaseEmbeddedWebviewElement extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      /**
       * The title attribute on an <element> to label its content
       */
      embeddedTitle: {
        type: String,
        attribute: 'embedded-title',
      },

      /**
       * The URL of the page to embed
       */
      src: {
        type: String,
      },

      /**
       * The type of the tag to embed - iframe or object
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
  }

  willUpdate(props) {
    super.willUpdate && super.willUpdate(props);

    if ((props.has('src') || props.has('embeddedTitle')) && this.src !== '') {
      this._fetch(this.src);
    }
  }

  render() {
    return html`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `;
  }

  _litHtmlRender() {
    LitHtmlRender(this._lightDomTpl, this, {host: this});
  }

  get _lightDomTpl() {
    return this._embeddedElement;
  }

  get _loadResource() {
    return this.type === 'iframe' ? 'src' : 'data';
  }

  get _embeddedTpl() {
    return html`
      <slot name="embedded"></slot>
    `;
  }

  _fetch(resource) {
    if (resource) {
      Object.assign(
        this._embeddedElement ?? {},
        this.type === 'iframe' && {
          allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
          allowFullscreen: true,
          loading: 'lazy',
        },
        this.embeddedTitle && {title: this.embeddedTitle}
      );

      Object.assign(this._embeddedElement ?? {}, {
        [this._loadResource]: resource,
      });

      window.performance.mark('iframestart');

      Object.assign(
        this._embeddedElement?.style ?? {},
        resource.indexOf('http') !== 0 && {
          opacity: 0,
        }
      );
    }
  }

  _onLoadElement = ({target}) => {
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
  };
}
