import {AjaxProviderMixin} from './AjaxProviderMixin.js';

/**
 * # AJAX Provider Documentation
 *
 * A class that provides AJAX functionality with event handling capabilities.
 *
 * ## Table of Contents
 *
 * - [Introduction](#introduction)
 * - [Installation](#installation)
 * - [Usage](#usage)
 *   - [Creating an Instance](#creating-an-instance)
 *   - [Configuring AJAX Requests](#configuring-ajax-requests)
 *   - [Sending AJAX Requests](#sending-ajax-requests)
 *   - [Event Handling](#event-handling)
 * - [API Reference](#api-reference)
 *
 * ## Introduction
 *
 * The AJAX Provider is a JavaScript class that provides AJAX functionality with event handling capabilities through [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget). It uses the `AjaxProviderMixin`, which implements the request lifecycle with `XMLHttpRequest` (as a `ColdObservable`) and exposes the request stages through events.
 *
 * ## Installation
 *
 * To use the AJAX Provider, you need to install it as a package dependency.
 *
 * ```bash
 * npm install @blockquote-web-components/ajax-provider
 * ```
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/base/ajax-provider)
 *
 * ### Usage
 *
 * ### Creating an Instance
 *
 * To use the AJAX Provider, first, create an instance of the `AjaxProvider` class.
 *
 * ```js
 * import { AjaxProvider } from '@blockquote-web-components/ajax-provider';
 *
 * // A basic request configuration looks like this:
 * const ajaxProvider = new AjaxProvider({
 *   url: 'https://httpbin.org/get',
 * });
 * ```
 *
 * ```js
 *   // Default method
 *   method: 'GET',
 *
 *   // Default request Headers.
 *   headers: {
 *     Accept: 'application/json, text/plain, *\/*; q=0.01',
 *     'Content-Type': 'application/json',
 *   }
 * ```
 *
 * ### Configuring AJAX Requests
 *
 * You can configure your AJAX request by setting various options on the `ajaxProvider` instance. Here are some common configuration options:
 *
 * ```js
 * const ajaxProvider = new AjaxProvider({
 *   url: 'https://httpbin.org/get',
 *   path: method.toLowerCase(),
 *   method: 'POST',
 *   headers: {
 *     'Content-Type': 'application/json',
 *     'rxjs-custom-header': 'Rxjs',
 *   },
 *   body: {
 *     rxjs: `Hi`,
 *   },
 *   includeDownloadProgress: true,
 *   includeUploadProgress: true,
 * });
 * ```
 *
 * ### Sending AJAX Requests
 *
 * Once you have configured the AJAX request, you can send it using the `generateRequest` method. This method returns a promise that resolves with the AJAX response or attaching event listeners to handle various stages of the AJAX request.
 *
 * ```js
 * const ajaxProvider = new AjaxProvider({
 *   url: 'https://api.github.com/users',
 *   queryParams: 'per_page=4',
 * });
 *
 * ajaxProvider
 *   .generateRequest()
 *   .then(response => {
 *     console.log('Response:', response.response);
 *   })
 *   .catch(error => {
 *     console.log('Error:', error.message);
 *   });
 * ```
 *
 * ### Event Handling
 *
 * The AJAX Provider allows you to handle events related to HTTP requests. You can listen to events such as:
 *
 * - `'presend'` --> `'progress'` --> `'response'` --> `'responseend'`
 * - `'presend'` --> `'error'` --> `'errorend'`
 *
 * Here's how to set up event listeners:
 *
 * ```js
 * const ajaxProvider = new AjaxProvider({
 *   url: 'https://api.github.com/users',
 *   queryParams: 'per_page=3',
 * });
 *
 * ajaxProvider.addEventListener('ajaxpresend', ({ detail }) => {
 *   console.log('Preparing to send request...', detail);
 * });
 *
 * ajaxProvider.addEventListener('ajaxprogress', ({ detail }) => {
 *   console.log(`Progress: ${detail.loaded} of ${detail.total} bytes`);
 * });
 *
 * ajaxProvider.addEventListener('ajaxresponse', ({ detail }) => {
 *   const { response } = detail;
 *   console.log('Received response:', response);
 * });
 *
 * ajaxProvider.addEventListener('ajaxresponseend', ({ detail }) => {
 *   console.log('End request:', detail);
 * });
 *
 * ajaxProvider.addEventListener('ajaxerror', ({ detail }) => {
 *   const error = detail;
 *   console.log('Request error:', error.message);
 * });
 *
 * ajaxProvider.addEventListener('ajaxerrorend', ({ detail }) => {
 *   console.log('End error:', detail);
 * });
 *
 * ajaxProvider.generateRequest();
 * ```
 *
 * ## API Reference
 *
 * Requests can be made by passing the relevant config to `AjaxProvider`.
 *
 * #### Properties
 *
 * #### Configuration for the request.
 *
 * - `url`: The base URL for the AJAX request. _(string)_
 * - `body`: The request body. (\*)
 * - `async`: Whether or not to send the request asynchronously. _(boolean)_
 *   - Default value: `true`
 * - `method`: The HTTP request method (e.g., GET, POST). _(string)_
 *   - Default value: `GET`
 * - `headers`: Custom headers for the request. _(Object|undefined)_
 *   - Default value:
 *     - Accept: 'application/json, text/plain, *\/*; q=0.01'
 *     - Content-Type: 'application/json'
 * - `timeout`: The request timeout in milliseconds. _(number)_
 *   - Default value: `0`
 * - `user`: The user for authentication. _(string)_
 * - `password`: The password for authentication. _(string)_
 * - `withCredentials`: Indicates whether to include credentials with the request. _(boolean)_
 *   - Default value: `false`
 * - `xsrfCookieName`: The name of the XSRF cookie. _(string)_
 * - `xsrfHeaderName`: The name of the XSRF header. _(string)_
 * - `responseType`: The response type (e.g., 'json', 'text'). _(string)_
 *   - Default value: `json`
 * - `queryParams`: The query parameters to include in the request URL. _(Object|string|undefined)_
 * - `includeDownloadProgress`: Indicates whether to include download progress in the response. _(boolean)_
 *   - Default value: `false`
 * - `includeUploadProgress`: Indicates whether to include upload progress in the response. _(boolean)_
 *   - Default value: `false`
 *
 * #### Configuration `AJAX Provider`.
 *
 * - `path`: The path to append to the base URL. _(string)_
 * - `dispatchEventContext`: The context for dispatching events. _(AjaxProvider instance)_
 * - `lastResponse`: The last AJAX response object. _(Object|undefined)_
 * - `lastError`: The last error object. _(Object|undefined)_
 * - `customEventPrefix`: A custom event prefix for events related to HTTP requests. _(string)_
 *   - Default value: `ajax`
 * - `avoidBoundary`: Set to `true` to stop delegating the use of [boundaries for multipart requests to the browser](https://github.com/axios/axios/issues/4631). _(boolean)_
 *   - Only change this to `true` if you know what you are doing.
 *     Default value: `false`
 *
 * #### Methods
 *
 * - `generateRequest()`: Generates and sends the AJAX request. This method can be used both with promises and by attaching event listeners to handle various stages of the AJAX request.
 */

export interface AjaxProviderConfig {
  /** The base URL for the AJAX request. */
  url?: string;
  /** The path to append to the base URL. */
  path?: string;
  /** The request body. */
  body?: unknown;
  /** Whether or not to send the request asynchronously. Defaults to `true`. */
  async?: boolean;
  /** The HTTP request method (e.g., GET, POST). Defaults to `GET`. */
  method?: string;
  /** Custom headers for the request. */
  headers?: Record<string, string>;
  /** The request timeout in milliseconds. Defaults to `0` (no timeout). */
  timeout?: number;
  /** The user for authentication. */
  user?: string;
  /** The password for authentication. */
  password?: string;
  /** Indicates whether to include credentials with the request. Defaults to `false`. */
  withCredentials?: boolean;
  /** The name of the XSRF cookie. */
  xsrfCookieName?: string;
  /** The name of the XSRF header. */
  xsrfHeaderName?: string;
  /** The response type (e.g., 'json', 'text'). Defaults to `json`. */
  responseType?: string;
  /** The query parameters to include in the request URL. */
  queryParams?: unknown;
  /** Indicates whether to include download progress in the response. Defaults to `false`. */
  includeDownloadProgress?: boolean;
  /** Indicates whether to include upload progress in the response. Defaults to `false`. */
  includeUploadProgress?: boolean;
  /**
   * Set to `true` to stop delegating the use of boundaries for multipart requests to the browser.
   * Only change this to `true` if you know what you are doing.
   */
  avoidBoundary?: boolean;
  /** The context for dispatching events. */
  dispatchEventContext?: {dispatchEvent(event: CustomEvent): void};
  /** A custom event prefix for events related to HTTP requests. Defaults to `ajax`. */
  customEventPrefix?: string;
}

export class AjaxProvider extends AjaxProviderMixin(EventTarget) {
  /**
   * Creates an instance of AjaxProvider.
   * @param {AjaxProviderConfig} [config={}] - Configuration options for the AjaxProvider.
   */
  constructor(config: AjaxProviderConfig = {}) {
    super();

    /** The context for dispatching events. */
    this.dispatchEventContext = this;

    /** The last AJAX response object. */
    this.lastResponse = undefined;

    /** The last error object. */
    this.lastError = undefined;

    /** A custom event prefix for events related to HTTP requests. */
    this.customEventPrefix = 'ajax';

    /**
     * Set to `true` to stop delegating the use of boundaries for multipart requests to the browser.
     * Only change this to `true` if you know what you are doing.
     */
    this.avoidBoundary = false;

    this._assignAjaxProviderConfig(config);
  }

  /**
   * Assigns configuration options to the AjaxProvider instance.
   * @param {AjaxProviderConfig} config - Configuration config to be assigned.
   */
  _assignAjaxProviderConfig(config: AjaxProviderConfig): void {
    if (config && typeof config === 'object') {
      Object.assign(this, config);
    }
  }
}
