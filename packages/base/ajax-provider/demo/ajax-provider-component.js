import {LitElement, html, css} from 'lit';
import 'inspector-elements';
import {AjaxProvider} from '../src/index.js';
import {pipe} from 'rxjs/pipe';
import {retry} from 'rxjs/retry';
import {switchMap} from 'rxjs/switch-map';

class AjaxProviderComponent extends LitElement {
  static properties = {
    _status: {state: true},
    _progress: {state: true},
  };

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

    .log {
      margin-block-end: 1rem;
      padding: 0.5rem 0.75rem;
      background-color: #f4f4f4;
      font-family: monospace;
      font-size: 0.85rem;
      min-block-size: 5rem;
      max-block-size: 10rem;
      overflow-block: auto;
    }

    .log p {
      margin: 0;
      color: #9e9e9e;
      font-size: 0.9rem;
      text-align: left;
    }

    .log .event {
      margin: 0.15rem 0;
      color: #333;
    }

    .log .event .name {
      font-weight: 700;
    }

    .progress {
      display: inline-grid;
      grid-template-columns: auto 1fr;
      gap: 0 0.75rem;
      align-items: center;
      margin-block-end: 1rem;
    }

    .progress-label {
      font-family: monospace;
      font-size: 0.8rem;
      color: #757575;
    }

    .progress-track {
      inline-size: 100%;
      block-size: 0.6rem;
      background-color: #e6e6e6;
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-fill {
      block-size: 100%;
      inline-size: 0;
      background-color: #2196f3;
      transition: inline-size 120ms linear;
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

  constructor() {
    super();
    this._status = [];
    this._progress = {};
  }

  async connectedCallback() {
    super.connectedCallback?.();
    await this.updateComplete;
    this.json = /** @type {(HTMLElement & { data?: any }) | null} */ (
      this.shadowRoot?.getElementById('json')
    );
  }

  render() {
    const download = this._progress.download ?? {};
    const upload = this._progress.upload ?? {};

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
          <option value="DRIP">Get - stream (download progress)</option>
          <option value="ERROR">Error</option>
          <option value="REQ$">Get - request$() + retry(2)</option>
          <option value="CHAIN">Chain - when('ajaxresponse') → request$()</option>
        </select>
      </div>
      <div class="progress">
        <span class="progress-label">download</span>
        <div class="progress-track">
          <div class="progress-fill" style="inline-size: ${download.percent ?? 0}%"></div>
        </div>
        <span class="progress-label">upload</span>
        <div class="progress-track">
          <div class="progress-fill" style="inline-size: ${upload.percent ?? 0}%"></div>
        </div>
      </div>
      <div class="log">
        ${
          this._status.length
            ? ''
            : html`
                <p>Event log — open DevTools for full detail</p>
              `
        }
        ${this._status.map(
          (line) => html`
            <div class="event">${line}</div>
          `
        )}
      </div>
      <ix-object-inspector name="object-inspector" expandLevel="2" id="json"></ix-object-inspector>
    `;
  }

  _onHandleChange({target}) {
    const {value} = /** @type {HTMLSelectElement} */ (target);
    this._makeRequest(value);
  }

  _makeRequest(selectedMethod) {
    const method =
      selectedMethod === 'FORMDATA' ? 'POST' : selectedMethod === 'DRIP' ? 'GET' : selectedMethod;
    const baseMethod = {
      url: 'https://httpbin.org',
      method,
    };

    let optionsMethod;

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
          path: '/post',
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
      case 'DRIP':
        // httpbin.org/drip streams a response over `duration` seconds, so the
        // download progress events fire progressively instead of all at once.
        optionsMethod = {
          path: 'drip',
          queryParams: 'duration=3&numbytes=1024&code=200',
          includeDownloadProgress: true,
        };
        break;
      case 'ERROR':
        optionsMethod = {path: 'status/500', method: 'GET'};
        break;
      case 'REQ$':
        // httpbin.org/status/500 always fails, so retry(2) resubscribes twice
        // and the observer receives the error only after the third attempt.
        optionsMethod = {path: 'status/500', method: 'GET'};
        break;
      case 'CHAIN':
        // First request resolves to a uuid; the second request depends on it.
        optionsMethod = {path: 'uuid', method: 'GET'};
        break;
      default:
        console.error('Invalid HTTP method');
        return;
    }

    this._status = [
      html`
        <span class="name">presend</span>
        — dispatching request
      `,
    ];
    this._progress = {};

    const request = new AjaxProvider({...baseMethod, ...optionsMethod});

    request.addEventListener('ajaxpresend', ({detail}) => {
      this.json && (this.json.data = undefined);
      console.log(`ajaxpresend: ${detail}`);
    });

    request.addEventListener('ajaxprogress', ({detail}) => {
      const {type, loaded, total} = detail;
      console.log(detail);
      const direction = type.startsWith('upload_') ? 'upload' : 'download';
      const percent = total ? Math.min(100, Math.round((loaded / total) * 100)) : 0;
      this._progress = {
        ...this._progress,
        [direction]: {percent, loaded, total},
      };
      this._status = [
        ...this._status,
        html`
          <span class="name">progress</span>
          — ${type} ${loaded}/${total} (${percent}%)
        `,
      ];
    });

    request.addEventListener('ajaxresponse', ({detail}) => {
      this._status = [
        ...this._status,
        html`
          <span class="name">response</span>
          — received response
        `,
      ];
      console.log(detail);
    });

    request.addEventListener('ajaxresponseend', ({detail}) => {
      this._status = [
        ...this._status,
        html`
          <span class="name">responseend</span>
          — finished
        `,
      ];
      console.log(`ajaxresponseend: ${detail}`);
    });

    request.addEventListener('ajaxerror', ({detail}) => {
      this._status = [
        ...this._status,
        html`
          <span class="name">error</span>
          — ${detail.message}
        `,
      ];
      console.dir(detail);
    });

    request.addEventListener('ajaxerrorend', ({detail}) => {
      this._status = [
        ...this._status,
        html`
          <span class="name">errorend</span>
          — finished
        `,
      ];
      console.log(`ajaxerrorend: ${detail}`);
    });

    if (selectedMethod === 'CHAIN') {
      // request$() inside switchMap() composes the second (dependent) request;
      // when('ajaxresponse') is the trigger source and never completes.
      const requestData = new AjaxProvider({url: 'https://httpbin.org'});

      request
        .when('ajaxresponse')
        [pipe]((values) =>
          values[switchMap](({detail}) => {
            requestData.path = `anything/${detail.response.uuid}`;
            return requestData.request$();
          })
        )
        .subscribe({
          next: (result) => {
            if (this.json) {
              this.json.data = result;
            }
            console.log(`RESULT ${selectedMethod}`, result);
          },
          error: (error) => {
            if (this.json) {
              this.json.data = error;
            }
            console.dir(error);
          },
        });

      request.generateRequest().catch((error) => {
        if (this.json) {
          this.json.data = error;
        }
        console.dir(error);
      });
      return;
    }

    if (selectedMethod === 'REQ$') {
      // request$() returns a cold observable, so operators like retry can be
      // composed on top of the request lifecycle (progress events still fire).
      request
        .request$()
        [pipe]((values) => values[retry]({count: 2}))
        .subscribe({
          next: (result) => {
            if (this.json) {
              this.json.data = result;
            }
            console.log(`RESULT ${selectedMethod}`, result);
          },
          error: (error) => {
            if (this.json) {
              this.json.data = error;
            }
            console.dir(error);
          },
          complete: () => {
            this._status = [
              ...this._status,
              html`
                <span class="name">complete</span>
                — observable completed after ${2 + 1} attempts
              `,
            ];
          },
        });
      return;
    }

    request
      .generateRequest()
      .then((result) => {
        if (this.json) {
          this.json.data = result;
        }
        console.log(`RESULT ${selectedMethod}`, result);
      })
      .catch((error) => {
        if (this.json) {
          this.json.data = error;
        }
        console.dir(error);
      });
  }
}

customElements.define('ajax-provider-component', AjaxProviderComponent);
