import { dedupeMixin } from '@open-wc/dedupe-mixin';
import { lastValueFrom, catchError, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { assignIfDefined, isFormData } from './utils.js';

/**
 * Mixin for providing AJAX functionality using RxJS. This mixin can be used to enhance classes with AJAX capabilities.
 */
const AjaxProvider = Base =>
  // @ts-ignore
  class AjaxProviderBase extends Base {
    constructor() {
      super();

      /**
       * The base URL for the AJAX request.
       * @type {string}
       */
      this.url = '';

      /**
       * The path to append to the base URL.
       * @type {string}
       */
      this.path = '';

      /**
       * The request body.
       * @type {*}
       */
      this.body = undefined;

      /**
       * Whether or not to send the request asynchronously.
       * @type {boolean}
       */
      this.async = true;

      /**
       * The HTTP request method (e.g., GET, POST).
       * @type {string}
       */
      this.method = 'GET';

      /**
       * The default headers for the request.
       * @type {Object}
       */
      this._headers = {
        Accept: 'application/json, text/plain, */*; q=0.01',
        'Content-Type': 'application/json',
      };

      /**
       * Custom headers for the request.
       * @type {Object|undefined}
       */
      this.headers = undefined;

      /**
       * The request timeout in milliseconds.
       * @type {number}
       */
      this.timeout = 0;

      /**
       * The user for authentication.
       * @type {string}
       */
      this.user = '';

      /**
       * The password for authentication.
       * @type {string}
       */
      this.password = '';

      /**
       * Indicates whether to include credentials with the request.
       * @type {boolean}
       */
      this.withCredentials = false;

      /**
       * The name of the XSRF cookie.
       * @type {string}
       */
      this.xsrfCookieName = '';

      /**
       * The name of the XSRF header.
       * @type {string}
       */
      this.xsrfHeaderName = '';

      /**
       * The response type (e.g., 'json', 'text').
       * @type {string}
       */
      this.responseType = '';

      /**
       * The query parameters to include in the request URL.
       * @type {Object|undefined}
       */
      this.queryParams = undefined;

      /**
       * Indicates whether to include download progress in the response.
       * @type {boolean}
       */
      this.includeDownloadProgress = false;

      /**
       * Indicates whether to include upload progress in the response.
       * @type {boolean}
       */
      this.includeUploadProgress = false;
    }

    /**
     * Assigns the configuration settings for the AJAX request.
     *
     * @returns {Object} config - Configuration for the ajax creation function.
     * @private
     */
    _assignAjaxRxjsConfig() {
      const config = {
        url: this._joinUrlData(),
        async: this.async,
        method: this.method,
        timeout: this.timeout,
        withCredentials: this.withCredentials,
        includeDownloadProgress: this.includeDownloadProgress,
        includeUploadProgress: this.includeUploadProgress,
      };

      assignIfDefined(config, 'body', this.body);
      assignIfDefined(config, 'headers', this._joinHeaders(this.body));
      assignIfDefined(config, 'user', this.user);
      assignIfDefined(config, 'password', this.password);
      assignIfDefined(config, 'xsrfCookieName', this.xsrfHeaderName);
      assignIfDefined(config, 'xsrfHeaderName', this.xsrfHeaderName);
      assignIfDefined(config, 'responseType', this.responseType);
      assignIfDefined(config, 'queryParams', this.queryParams);
      return config;
    }

    /**
     * Joins the base URL and path to create the complete request URL.
     *
     * @returns {string} The complete request URL or an empty string if not valid.
     * @private
     */
    _joinUrlData() {
      if (typeof this.url === 'string' && typeof this.path === 'string') {
        if (this.url.length && this.path.length) {
          return `${this.url}/${this.path}`;
        }
        return this.url;
      }
      return '';
    }

    /**
     * Joins the default headers with custom headers.
     *
     * @returns {Object} Merged headers.
     * @private
     */
    _joinHeaders(formData) {
      const assignHeaders = { ...this._headers, ...(this.headers || {}) };

      if (isFormData(formData) && !this.avoidBoundary) {
        delete assignHeaders['Content-Type']; // Let the browser set it
      }

      return assignHeaders;
    }

    /**
     * Dispatches a custom event with the specified type and payload.
     *
     * @param {string} type - The type of the custom event.
     * @param {*} payload - The payload to include in the custom event.
     * @private
     */
    _dispatchEvent(type, payload) {
      if (this.dispatchEventContext) {
        const event = new CustomEvent(`${this.customEventPrefix}${type}`, {
          bubbles: true,
          composed: true,
          detail: payload,
        });

        this.dispatchEventContext.dispatchEvent(event);
      }
    }

    /**
     * Generates and sends the AJAX request.
     *
     * @returns {Promise<any>} A promise that resolves with the AJAX response.
     *
     * @fires ajaxpresend - Fired before a request is sent.
     * @fires ajaxprogress - Fired when some progress state is received.
     * @fires ajaxresponse - Fired when a response is received.
     * @fires ajaxresponseend - Fired after a response is received.
     * @fires ajaxerror - Fired when an error is received.
     * @fires ajaxerrorend - Fired after a error is received.
     */
    async generateRequest() {
      this._dispatchEvent('presend', true);

      const toPromise$ = await lastValueFrom(
        ajax(this._assignAjaxRxjsConfig()).pipe(
          tap(response => {
            const setProgress = {
              type: response.type,
              loaded: response.loaded,
              total: response.total,
            };
            this._dispatchEvent('progress', setProgress);
          }),
          catchError(error => {
            this._dispatchEvent('error', error);
            this._dispatchEvent('errorend', true);
            this.lastError = error;
            return Promise.reject(error);
          }),
        ),
      );

      this._dispatchEvent('response', toPromise$);
      this._dispatchEvent('responseend', true);
      this.lastResponse = toPromise$;
      return toPromise$;
    }
  };

export const AjaxProviderMixin = dedupeMixin(AjaxProvider);
