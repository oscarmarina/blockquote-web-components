import {AjaxProviderMixin} from './AjaxProviderMixin.js';

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

/**
 * # AJAX Provider Documentation
 *
 * A robust, event-driven HTTP request service that bridges the **XMLHttpRequest** Web API with **RxJS 9** cold observables and native **Promises**.
 *
 * ## Table of Contents
 *
 * - [Overview](#overview)
 * - [Architecture: Why XMLHttpRequest + RxJS 9?](#architecture-why-xmlhttprequest--rxjs-9)
 * - [API Selection: Promises vs Observables](#api-selection-promises-vs-observables)
 * - [Installation](#installation)
 * - [Usage Examples](#usage-examples)
 *   - [1. Promise-based Request (`generateRequest`)](#1-promise-based-request-generaterequest)
 *   - [2. Reactive Request with Retry (`request$`)](#2-reactive-request-with-retry-request)
 *   - [3. Progress Monitoring (Upload & Download)](#3-progress-monitoring-upload--download)
 *   - [4. Request Cancellation](#4-request-cancellation)
 *   - [5. Event-Driven Request Chaining](#5-event-driven-request-chaining)
 * - [Lifecycle Events](#lifecycle-events)
 * - [API Reference](#api-reference)
 *
 * ## Overview
 *
 * `AjaxProvider` extends `EventTarget` (via `AjaxProviderMixin`) to deliver an event-based, observable HTTP client for modern web components and applications. It allows developers to choose between an `async/await` Promise interface or a fully reactive RxJS 9 `Observable` stream.
 *
 * ## Architecture: Why XMLHttpRequest + RxJS 9?
 *
 * Modern web development frequently defaults to `fetch()`, but `XMLHttpRequest` (XHR) paired with **RxJS 9** provides unique capabilities essential for robust enterprise web applications:
 *
 * 1. **Upload Progress Tracking**: Unlike standard `fetch()`, `XMLHttpRequest` exposes `xhr.upload.onprogress`. This allows `AjaxProvider` to report real-time percentage updates when uploading large files, `FormData`, or `ArrayBuffer` payloads.
 * 2. **Immediate Socket Teardown**: Calling `xhr.abort()` instantly terminates the underlying TCP/HTTP connection, guaranteeing zero resource waste upon cancellation.
 * 3. **Cold Observable Execution**: Requests created via `request$()` are **lazy**. The network request is deferred until a subscriber calls `.subscribe()`. Re-subscribing re-executes the request cleanly.
 * 4. **Automatic Teardown**: Unsubscribing from a `request$()` observable automatically triggers `xhr.abort()`, preventing memory leaks and race conditions.
 *
 * ## API Selection: Promises vs Observables
 *
 * `AjaxProvider` provides two primary execution methods depending on your application needs:
 *
 * | Feature | `generateRequest()` (Promise) | `request$()` (Observable) |
 * | :--- | :--- | :--- |
 * | **Return Type** | `Promise<AjaxResponse>` | `Observable<AjaxResponse>` |
 * | **Primary Use Case** | Standard single-response `async/await` flows | Complex reactive flows, streaming & cancellation |
 * | **RxJS Operators** | N/A | Full support (`retry`, `switchMap`, `debounceTime`) |
 * | **Cancellation** | Not directly cancelable | Cancelable via `unsubscribe()` or `AbortSignal` |
 * | **Progress Events** | Dispatches `ajaxprogress` events | Dispatches `ajaxprogress` & emits progress items |
 * | **Internal Engine** | Wraps `request$()` via `lastValueFrom()` | Native RxJS `fromXMLHttpRequest` stream |
 *
 * > **Note**: `generateRequest()` internally calls `lastValueFrom(this.request$())`. Both APIs share the exact same underlying RxJS pipeline.
 *
 * ## Installation
 *
 * ```bash
 * npm install \@blockquote-web-components/ajax-provider
 * ```
 *
 * ## Usage Examples
 *
 * ### 1. Promise-based Request (`generateRequest`)
 *
 * Ideal for straightforward fetch operations using `async/await`:
 *
 * ```js
 * import { AjaxProvider } from '\@blockquote-web-components/ajax-provider';
 *
 * const provider = new AjaxProvider({
 *   url: 'https://httpbingo.org',
 *   path: 'get',
 *   queryParams: { search: 'lit-element' },
 * });
 *
 * try {
 *   const response = await provider.generateRequest();
 *   console.log('Response status:', response.status);
 *   console.log('Response body:', response.response);
 * } catch (error) {
 *   console.error('Request failed:', error.message);
 * }
 * ```
 *
 * ### 2. Reactive Request with Retry (`request$`)
 *
 * Leverage RxJS operators to handle automatic retries on server failures (e.g., HTTP 500):
 *
 * ```js
 * import { pipe } from 'rxjs/pipe';
 * import { retry } from 'rxjs/retry';
 * import { AjaxProvider } from '\@blockquote-web-components/ajax-provider';
 *
 * const provider = new AjaxProvider({
 *   url: 'https://httpbingo.org',
 *   path: 'status/500',
 * });
 *
 * // Automatically retry up to 2 additional times before erroring out
 * provider
 *   .request$()
 *   [pipe]((values) => values[retry]({ count: 2 }))
 *   .subscribe({
 *     next: (res) => console.log('Success:', res),
 *     error: (err) => console.error('Failed after 3 attempts:', err),
 *   });
 * ```
 *
 * ### 3. Progress Monitoring (Upload & Download)
 *
 * Track progress percentages during file uploads or large payload downloads:
 *
 * ```js
 * const formData = new FormData();
 * formData.append('file', fileInput.files[0]);
 *
 * const provider = new AjaxProvider({
 *   url: 'https://httpbingo.org',
 *   path: 'post',
 *   method: 'POST',
 *   body: formData,
 *   includeUploadProgress: true,
 *   includeDownloadProgress: true,
 * });
 *
 * provider.addEventListener('ajaxprogress', ({ detail }) => {
 *   const { type, loaded, total } = detail;
 *   const percent = total ? Math.round((loaded / total) * 100) : 0;
 *   console.log(`[${type}] ${percent}% (${loaded}/${total} bytes)`);
 * });
 *
 * await provider.generateRequest();
 * ```
 *
 * ### 4. Request Cancellation
 *
 * Cancel an in-flight HTTP request cleanly using `AbortController`:
 *
 * ```js
 * const controller = new AbortController();
 * const provider = new AjaxProvider({
 *   url: 'https://httpbingo.org',
 *   path: 'drip',
 *   queryParams: 'duration=5&delay=0&numbytes=1024',
 * });
 *
 * provider.request$().subscribe({
 *   next: (res) => console.log('Data:', res),
 *   error: (err) => console.log('Aborted or failed:', err),
 * }, { signal: controller.signal });
 *
 * // Cancel the request after 1 second
 * setTimeout(() => controller.abort(), 1000);
 * ```
 *
 * ### 5. Event-Driven Request Chaining
 *
 * Chain dependent requests using `EventTarget.when()` and RxJS `switchMap`:
 *
 * ```js
 * import { pipe } from 'rxjs/pipe';
 * import { switchMap } from 'rxjs/switch-map';
 *
 * const requestAuth = new AjaxProvider({ url: 'https://httpbingo.org', path: 'uuid' });
 * const requestData = new AjaxProvider({ url: 'https://httpbingo.org' });
 *
 * requestAuth
 *   .when('ajaxresponse')
 *   [pipe]((values) =>
 *     values[switchMap](({ detail }) => {
 *       requestData.path = `anything/${detail.response.uuid}`;
 *       return requestData.request$();
 *     })
 *   )
 *   .subscribe({
 *     next: (result) => console.log('Chained response:', result),
 *   });
 *
 * requestAuth.generateRequest();
 * ```
 *
 * ## Lifecycle Events
 *
 * `AjaxProvider` dispatches standard custom events on its `EventTarget` context during execution (identically for both `generateRequest()` and `request$()`):
 *
 * - `ajaxpresend`: Fired right before the request is opened.
 * - `ajaxprogress`: Fired when upload or download progress events occur.
 * - `ajaxresponse`: Fired when a successful response (`status < 400`) is received.
 * - `ajaxresponseend`: Fired after a successful response completes.
 * - `ajaxerror`: Fired when a request error or HTTP status `>= 400` occurs.
 * - `ajaxerrorend`: Fired after error handling finishes.
 *
 * ## API Reference
 *
 * ### Request Configuration Options (`AjaxProviderConfig`)
 *
 * - `url`: The base URL for the AJAX request. _(string)_
 * - `path`: Path to append to the base URL (e.g. `'users'`). _(string)_
 * - `method`: The HTTP request method (e.g., `'GET'`, `'POST'`, `'PUT'`, `'DELETE'`, `'PATCH'`). Default: `'GET'`. _(string)_
 * - `headers`: Custom headers for the request. Default headers:
 *   - `Accept`: `'application/json, text/plain, *\/*; q=0.01'`
 *   - `Content-Type`: `'application/json'`
 * - `body`: Request payload (JSON object, `FormData`, string, `Blob`, `ArrayBuffer`, etc.).
 * - `queryParams`: Query parameters (object or string) appended to the request URL. _(Object|string|undefined)_
 * - `async`: Whether to send the request asynchronously. Default: `true`. _(boolean)_
 * - `timeout`: Request timeout in milliseconds. Default: `0` (no timeout). _(number)_
 * - `user`: Username for HTTP basic authentication. _(string)_
 * - `password`: Password for HTTP basic authentication. _(string)_
 * - `withCredentials`: Indicates whether to include cross-site credentials with the request. Default: `false`. _(boolean)_
 * - `xsrfCookieName`: The name of the XSRF cookie. _(string)_
 * - `xsrfHeaderName`: The name of the XSRF header. _(string)_
 * - `responseType`: The response type (`'json'`, `'text'`, `'blob'`, `'arraybuffer'`, `'document'`). Default: `'json'`. _(string)_
 * - `includeDownloadProgress`: Indicates whether to include download progress events (`ajaxprogress`). Default: `false`. _(boolean)_
 * - `includeUploadProgress`: Indicates whether to include upload progress events (`ajaxprogress`). Default: `false`. _(boolean)_
 * - `avoidBoundary`: Set to `true` to stop delegating boundary management for multipart requests to the browser. Default: `false`. _(boolean)_
 * - `dispatchEventContext`: The context for dispatching custom events. Default: `this`.
 * - `customEventPrefix`: Custom event prefix for lifecycle events. Default: `'ajax'`. _(string)_
 *
 * ### Instance Properties
 *
 * - `lastResponse`: Stores the last `AjaxResponse` object received. _(AjaxResponse|undefined)_
 * - `lastError`: Stores the last `AjaxError` object encountered. _(AjaxError|undefined)_
 *
 * ### Methods
 *
 * - `generateRequest()`: Generates and sends the AJAX request, returning a `Promise<AjaxResponse>`.
 * - `request$()`: Returns a cold RxJS `Observable<AjaxResponse>` that executes the AJAX request per subscription.
 */
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
