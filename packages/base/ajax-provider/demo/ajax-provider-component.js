/* eslint-disable import/no-extraneous-dependencies */
import {LitElement, html, css} from 'lit';
import 'inspector-elements';
import {AjaxProvider} from '../src/index.js';

class AjaxProviderComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      inline-size: clamp(45ch, 50%, 75ch);
      margin-block: 0;
      margin-inline: auto;
      padding: 2rem;
    }

    a {
      text-decoration: none;
    }

    label {
      display: inline-block;
      margin-block-end: 1rem;
    }

    .select-dropdown {
      position: relative;
      background-color: #e6e6e6;
      margin-block-end: 1rem;
    }

    .select-dropdown select {
      font: inherit;
      inline-size: 100%;
      padding-block: 12px;
      padding-inline: 10px 30px;
      border: none;
      background-color: transparent;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
    }

    .select-dropdown select:active,
    .select-dropdown select:focus {
      outline: 1px solid #9e9e9e;
      outline-offset: 2px;
    }

    .select-dropdown::after {
      content: ' ';
      pointer-events: none;
      position: absolute;
      inset-block-start: 50%;
      margin-block-start: -0.1rem;
      inset-inline-end: 0.75rem;
      width: 0;
      height: 0;
      border-inline-start: 5px solid transparent;
      border-inline-end: 5px solid transparent;
      border-block-start: 5px solid #aaa;
    }

    p,
    a {
      font-size: 0.9rem;
    }

    p {
      text-align: center;
    }

    ix-object-inspector {
      padding: 0.5rem;
      background-color: #fff;
    }
  `;

  async connectedCallback() {
    super.connectedCallback?.();
    await this.updateComplete;
    this.json = /** @type {(HTMLElement & { data?: any }) | null} */ (
      this.shadowRoot?.getElementById('json')
    );
  }

  render() {
    return html`
      <label for="selectOption">
        Testing different HTTP Verbs
        <a target="_blank" rel="noopener" href="https://httpbin.org/#/HTTP_Methods/">
          - httpbin.org
        </a>
      </label>
      <div class="select-dropdown">
        <select id="selectOption" @change=${this._onHandleChange}>
          <option>[ HTTP Methods ]</option>
          <option value="GET">Get</option>
          <option value="POST">Post</option>
          <option value="FORMDATA">Post - FormData</option>
          <option value="PATCH">Patch</option>
          <option value="PUT">Put</option>
          <option value="DELETE">Delete</option>
          <option value="ERROR">Error</option>
        </select>
      </div>
      <p>Open DevTools to view different events</p>
      <ix-object-inspector name="object-inspector" expandLevel="2" id="json"></ix-object-inspector>
    `;
  }

  _onHandleChange({target}) {
    const {value} = /** @type {HTMLSelectElement} */ (target);
    this._makeRequest(value);
  }

  _makeRequest(selectedMethod) {
    const method = selectedMethod === 'FORMDATA' ? 'POST' : selectedMethod;
    const baseMethod = {
      url: 'https://httpbin.org',
      method,
    };

    let optionsMethod = {};

    const formData = new FormData();
    formData.append('rxjs', 'Ajax');
    formData.append('ajax', 'RxJS');

    switch (selectedMethod) {
      case 'GET':
        optionsMethod = {path: selectedMethod.toLowerCase()};
        break;
      case 'POST':
        optionsMethod = {
          path: selectedMethod.toLowerCase(),
          headers: {
            'Content-Type': 'application/json',
            'rxjs-custom-header': 'Rxjs',
          },
          body: {rxjs: `Body ${method}`},
          includeDownloadProgress: true,
          includeUploadProgress: true,
        };
        break;
      case 'FORMDATA':
        optionsMethod = {
          path: 'post',
          headers: {'rxjs-custom-header': 'Rxjs'},
          body: formData,
        };
        break;
      case 'PATCH':
        optionsMethod = {
          path: selectedMethod.toLowerCase(),
          body: {
            rxjs: `Body ${method}`,
          },
        };
        break;
      case 'PUT':
        optionsMethod = {
          path: selectedMethod.toLowerCase(),
          body: {rxjs: `Body ${method}`},
        };
        break;
      case 'DELETE':
        optionsMethod = {
          path: selectedMethod.toLowerCase(),
          body: {rxjs: `Body ${method}`},
          includeDownloadProgress: true,
          includeUploadProgress: true,
        };
        break;
      case 'ERROR':
        optionsMethod = {path: 'status/500', method: 'GET'};
        break;
      default:
        console.error('Invalid HTTP method');
        return;
    }

    const request = new AjaxProvider({...baseMethod, ...optionsMethod});

    request.addEventListener('ajaxpresend', ({detail}) => {
      if (this.json) this.json.data = undefined;
      console.log(`ajaxpresend: ${detail}`);
    });

    request.addEventListener('ajaxresponse', ({detail}) => console.log(detail));
    request.addEventListener('ajaxprogress', ({detail}) => console.log(detail));
    request.addEventListener('ajaxresponseend', ({detail}) =>
      console.log(`ajaxresponseend: ${detail}`)
    );

    request.addEventListener('ajaxerror', ({detail}) => console.dir(detail));
    request.addEventListener('ajaxerrorend', ({detail}) => console.log(`ajaxerrorend: ${detail}`));

    request
      .generateRequest()
      .then((result) => {
        if (this.json) this.json.data = result;
        console.log(`RESULT ${selectedMethod}`, result);
      })
      .catch((error) => {
        if (this.json) this.json.data = error;
        console.dir(error);
      });
  }
}

customElements.define('ajax-provider-component', AjaxProviderComponent);
