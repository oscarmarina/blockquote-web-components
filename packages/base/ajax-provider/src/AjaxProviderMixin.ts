import {dedupeMixin} from '@open-wc/dedupe-mixin';
import {pipe} from 'rxjs/pipe';
import {tap} from 'rxjs/tap';
import {catchError} from 'rxjs/catch-error';
import {fromXMLHttpRequest, lastValueFrom, AjaxError, AjaxResponse} from './fromAjax.js';
import type {AjaxConfig} from './fromAjax.js';
import {assignIfDefined, isFormData} from './utils.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = object> = new (...args: any[]) => T;

interface AjaxProviderMixinInterface {
  /**
   * The base URL for the AJAX request.
   */
  url: string;
  /**
   * The path to append to the base URL.
   */
  path: string;
  /**
   * The request body.
   */
  body: unknown;
  /**
   * Whether or not to send the request asynchronously.
   */
  async: boolean;
  /**
   * The HTTP request method (e.g., GET, POST).
   */
  method: string;
  /**
   * Custom headers for the request.
   */
  headers?: Record<string, string>;
  /**
   * The request timeout in milliseconds.
   */
  timeout: number;
  /**
   * The user for authentication.
   */
  user: string;
  /**
   * The password for authentication.
   */
  password: string;
  /**
   * Indicates whether to include credentials with the request.
   */
  withCredentials: boolean;
  /**
   * The name of the XSRF cookie.
   */
  xsrfCookieName: string;
  /**
   * The name of the XSRF header.
   */
  xsrfHeaderName: string;
  /**
   * The response type (e.g., 'json', 'text').
   */
  responseType: string;
  /**
   * The query parameters to include in the request URL.
   */
  queryParams?: unknown;
  /**
   * Indicates whether to include download progress in the response.
   */
  includeDownloadProgress: boolean;
  /**
   * Indicates whether to include upload progress in the response.
   */
  includeUploadProgress: boolean;
  /**
   * Set to `true` to stop delegating the use of boundaries for multipart requests to the browser.
   * Only change this to `true` if you know what you are doing.
   */
  avoidBoundary?: boolean;
  /**
   * The context for dispatching events.
   */
  dispatchEventContext?: {dispatchEvent(event: CustomEvent): void};
  /**
   * A custom event prefix for events related to HTTP requests.
   */
  customEventPrefix?: string;
  /**
   * The last AJAX response object.
   */
  lastResponse?: AjaxResponse<unknown>;
  /**
   * The last error object.
   */
  lastError?: AjaxError;
  /**
   * Returns a cold Observable that performs the AJAX request on each subscription.
   */
  request$(): Observable<AjaxResponse<unknown>>;
  /**
   * Generates and sends the AJAX request.
   */
  generateRequest(): Promise<AjaxResponse<unknown>>;
}

/**
 * Mixin for providing AJAX functionality using RxJS. This mixin can be used to enhance classes with AJAX capabilities.
 */
const AjaxProvider = <T extends Constructor>(Base: T) =>
  class AjaxProviderBase extends Base implements AjaxProviderMixinInterface {
    url: string;
    path: string;
    body: unknown;
    async: boolean;
    method: string;
    _headers: Record<string, string>;
    headers?: Record<string, string>;
    timeout: number;
    user: string;
    password: string;
    withCredentials: boolean;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    responseType: string;
    queryParams?: unknown;
    includeDownloadProgress: boolean;
    includeUploadProgress: boolean;
    avoidBoundary?: boolean;
    dispatchEventContext?: {dispatchEvent(event: CustomEvent): void};
    customEventPrefix?: string;
    lastResponse?: AjaxResponse<unknown>;
    lastError?: AjaxError;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);

      this.url = '';
      this.path = '';
      this.body = undefined;
      this.async = true;
      this.method = 'GET';
      this._headers = {
        Accept: 'application/json, text/plain, */*; q=0.01',
        'Content-Type': 'application/json',
      };
      this.headers = undefined;
      this.timeout = 0;
      this.user = '';
      this.password = '';
      this.withCredentials = false;
      this.xsrfCookieName = '';
      this.xsrfHeaderName = '';
      this.responseType = '';
      this.queryParams = undefined;
      this.includeDownloadProgress = false;
      this.includeUploadProgress = false;
    }

    /**
     * Assigns the configuration settings for the AJAX request.
     *
     * @returns {Object} config - Configuration for the ajax creation function.
     * @private
     */
    _assignAjaxRxjsConfig(): AjaxConfig {
      const config: AjaxConfig = {
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
      assignIfDefined(config, 'xsrfCookieName', this.xsrfCookieName);
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
    _joinUrlData(): string {
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
    _joinHeaders(formData: unknown): Record<string, string> {
      const assignHeaders = {...this._headers, ...(this.headers || {})};

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
    _dispatchEvent(type: string, payload: unknown): void {
      if (this.dispatchEventContext) {
        const event = new CustomEvent(`${this.customEventPrefix || ''}${type}`, {
          bubbles: true,
          composed: true,
          detail: payload,
        });

        this.dispatchEventContext.dispatchEvent(event);
      }
    }

    /**
     * Returns a cold Observable that performs the AJAX request on each subscription.
     *
     * Progress is reported through the `ajaxprogress` event. Errors are reported
     * through `ajaxerror`/`ajaxerrorend` events before the observable errors.
     *
     * @returns {Observable<AjaxResponse<unknown>>} An observable that emits the AJAX response.
     *
     * @fires ajaxprogress - Fired when some progress state is received.
     * @fires ajaxerror - Fired when an error is received.
     * @fires ajaxerrorend - Fired after a error is received.
     */
    request$(): Observable<AjaxResponse<unknown>> {
      return fromXMLHttpRequest<unknown>(this._assignAjaxRxjsConfig())[pipe](
        (values) =>
          values[tap]((response) => {
            const setProgress = {
              type: response.type,
              loaded: response.loaded,
              total: response.total,
            };
            this._dispatchEvent('progress', setProgress);
          }),
        (values) =>
          values[catchError]((error: AjaxError) => {
            this._dispatchEvent('error', error);
            this._dispatchEvent('errorend', true);
            this.lastError = error;
            throw error;
          })
      );
    }

    /**
     * Generates and sends the AJAX request.
     *
     * @returns {Promise<any>} A promise that resolves with the AJAX response.
     *
     * @fires ajaxpresend - Fired before a request is sent.
     * @fires ajaxresponse - Fired when a response is received.
     * @fires ajaxresponseend - Fired after a response is received.
     */
    async generateRequest(): Promise<AjaxResponse<unknown>> {
      this._dispatchEvent('presend', true);

      const toPromise$ = await lastValueFrom(this.request$());

      this._dispatchEvent('response', toPromise$);
      this._dispatchEvent('responseend', true);
      this.lastResponse = toPromise$;
      return toPromise$;
    }
  };

export const AjaxProviderMixin = dedupeMixin(AjaxProvider);
