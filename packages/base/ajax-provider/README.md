# AJAX Provider Documentation

A robust, event-driven HTTP request service that bridges the **XMLHttpRequest** Web API with **RxJS 9** cold observables and native **Promises**.

## Table of Contents

- [Overview](#overview)
- [Architecture: Why XMLHttpRequest + RxJS 9?](#architecture-why-xmlhttprequest--rxjs-9)
- [API Selection: Promises vs Observables](#api-selection-promises-vs-observables)
- [Installation](#installation)
- [Usage Examples](#usage-examples)
  - [1. Promise-based Request (`generateRequest`)](#1-promise-based-request-generaterequest)
  - [2. Reactive Request with Retry (`request$`)](#2-reactive-request-with-retry-request)
  - [3. Progress Monitoring (Upload & Download)](#3-progress-monitoring-upload--download)
  - [4. Request Cancellation](#4-request-cancellation)
  - [5. Event-Driven Request Chaining](#5-event-driven-request-chaining)
- [Lifecycle Events](#lifecycle-events)
- [API Reference](#api-reference)

## Overview

`AjaxProvider` extends `EventTarget` (via `AjaxProviderMixin`) to deliver an event-based, observable HTTP client for modern web components and applications. It allows developers to choose between an `async/await` Promise interface or a fully reactive RxJS 9 `Observable` stream.

## Architecture: Why XMLHttpRequest + RxJS 9?

Modern web development frequently defaults to `fetch()`, but `XMLHttpRequest` (XHR) paired with **RxJS 9** provides unique capabilities essential for robust enterprise web applications:

1. **Upload Progress Tracking**: Unlike standard `fetch()`, `XMLHttpRequest` exposes `xhr.upload.onprogress`. This allows `AjaxProvider` to report real-time percentage updates when uploading large files, `FormData`, or `ArrayBuffer` payloads.
2. **Immediate Socket Teardown**: Calling `xhr.abort()` instantly terminates the underlying TCP/HTTP connection, guaranteeing zero resource waste upon cancellation.
3. **Cold Observable Execution**: Requests created via `request$()` are **lazy**. The network request is deferred until a subscriber calls `.subscribe()`. Re-subscribing re-executes the request cleanly.
4. **Automatic Teardown**: Unsubscribing from a `request$()` observable automatically triggers `xhr.abort()`, preventing memory leaks and race conditions.

## API Selection: Promises vs Observables

`AjaxProvider` provides two primary execution methods depending on your application needs:

| Feature | `generateRequest()` (Promise) | `request$()` (Observable) |
| :--- | :--- | :--- |
| **Return Type** | `Promise<AjaxResponse>` | `Observable<AjaxResponse>` |
| **Primary Use Case** | Standard single-response `async/await` flows | Complex reactive flows, streaming & cancellation |
| **RxJS Operators** | N/A | Full support (`retry`, `switchMap`, `debounceTime`) |
| **Cancellation** | Not directly cancelable | Cancelable via `unsubscribe()` or `AbortSignal` |
| **Progress Events** | Dispatches `ajaxprogress` events | Dispatches `ajaxprogress` & emits progress items |
| **Internal Engine** | Wraps `request$()` via `lastValueFrom()` | Native RxJS `fromXMLHttpRequest` stream |

> **Note**: `generateRequest()` internally calls `lastValueFrom(this.request$())`. Both APIs share the exact same underlying RxJS pipeline.

## Installation

```bash
npm install \@blockquote-web-components/ajax-provider
```

## Usage Examples

### 1. Promise-based Request (`generateRequest`)

Ideal for straightforward fetch operations using `async/await`:

```js
import { AjaxProvider } from '\@blockquote-web-components/ajax-provider';

const provider = new AjaxProvider({
  url: 'https://httpbingo.org',
  path: 'get',
  queryParams: { search: 'lit-element' },
});

try {
  const response = await provider.generateRequest();
  console.log('Response status:', response.status);
  console.log('Response body:', response.response);
} catch (error) {
  console.error('Request failed:', error.message);
}
```

### 2. Reactive Request with Retry (`request$`)

Leverage RxJS operators to handle automatic retries on server failures (e.g., HTTP 500):

```js
import { pipe } from 'rxjs/pipe';
import { retry } from 'rxjs/retry';
import { AjaxProvider } from '\@blockquote-web-components/ajax-provider';

const provider = new AjaxProvider({
  url: 'https://httpbingo.org',
  path: 'status/500',
});

// Automatically retry up to 2 additional times before erroring out
provider
  .request$()
  [pipe]((values) => values[retry]({ count: 2 }))
  .subscribe({
    next: (res) => console.log('Success:', res),
    error: (err) => console.error('Failed after 3 attempts:', err),
  });
```

### 3. Progress Monitoring (Upload & Download)

Track progress percentages during file uploads or large payload downloads:

```js
const formData = new FormData();
formData.append('file', fileInput.files[0]);

const provider = new AjaxProvider({
  url: 'https://httpbingo.org',
  path: 'post',
  method: 'POST',
  body: formData,
  includeUploadProgress: true,
  includeDownloadProgress: true,
});

provider.addEventListener('ajaxprogress', ({ detail }) => {
  const { type, loaded, total } = detail;
  const percent = total ? Math.round((loaded / total) * 100) : 0;
  console.log(`[${type}] ${percent}% (${loaded}/${total} bytes)`);
});

await provider.generateRequest();
```

### 4. Request Cancellation

Cancel an in-flight HTTP request cleanly using `AbortController`:

```js
const controller = new AbortController();
const provider = new AjaxProvider({
  url: 'https://httpbingo.org',
  path: 'drip',
  queryParams: 'duration=5&delay=0&numbytes=1024',
});

provider.request$().subscribe({
  next: (res) => console.log('Data:', res),
  error: (err) => console.log('Aborted or failed:', err),
}, { signal: controller.signal });

// Cancel the request after 1 second
setTimeout(() => controller.abort(), 1000);
```

### 5. Event-Driven Request Chaining

Chain dependent requests using `EventTarget.when()` and RxJS `switchMap`:

```js
import { pipe } from 'rxjs/pipe';
import { switchMap } from 'rxjs/switch-map';

const requestAuth = new AjaxProvider({ url: 'https://httpbingo.org', path: 'uuid' });
const requestData = new AjaxProvider({ url: 'https://httpbingo.org' });

requestAuth
  .when('ajaxresponse')
  [pipe]((values) =>
    values[switchMap](({ detail }) => {
      requestData.path = `anything/${detail.response.uuid}`;
      return requestData.request$();
    })
  )
  .subscribe({
    next: (result) => console.log('Chained response:', result),
  });

requestAuth.generateRequest();
```

## Lifecycle Events

`AjaxProvider` dispatches standard custom events on its `EventTarget` context during execution (identically for both `generateRequest()` and `request$()`):

- `ajaxpresend`: Fired right before the request is opened.
- `ajaxprogress`: Fired when upload or download progress events occur.
- `ajaxresponse`: Fired when a successful response (`status < 400`) is received.
- `ajaxresponseend`: Fired after a successful response completes.
- `ajaxerror`: Fired when a request error or HTTP status `>= 400` occurs.
- `ajaxerrorend`: Fired after error handling finishes.

## API Reference

### Request Configuration Options (`AjaxProviderConfig`)

- `url`: The base URL for the AJAX request. _(string)_
- `path`: Path to append to the base URL (e.g. `'users'`). _(string)_
- `method`: The HTTP request method (e.g., `'GET'`, `'POST'`, `'PUT'`, `'DELETE'`, `'PATCH'`). Default: `'GET'`. _(string)_
- `headers`: Custom headers for the request. Default headers:
  - `Accept`: `'application/json, text/plain, *\/*; q=0.01'`
  - `Content-Type`: `'application/json'`
- `body`: Request payload (JSON object, `FormData`, string, `Blob`, `ArrayBuffer`, etc.).
- `queryParams`: Query parameters (object or string) appended to the request URL. _(Object|string|undefined)_
- `async`: Whether to send the request asynchronously. Default: `true`. _(boolean)_
- `timeout`: Request timeout in milliseconds. Default: `0` (no timeout). _(number)_
- `user`: Username for HTTP basic authentication. _(string)_
- `password`: Password for HTTP basic authentication. _(string)_
- `withCredentials`: Indicates whether to include cross-site credentials with the request. Default: `false`. _(boolean)_
- `xsrfCookieName`: The name of the XSRF cookie. _(string)_
- `xsrfHeaderName`: The name of the XSRF header. _(string)_
- `responseType`: The response type (`'json'`, `'text'`, `'blob'`, `'arraybuffer'`, `'document'`). Default: `'json'`. _(string)_
- `includeDownloadProgress`: Indicates whether to include download progress events (`ajaxprogress`). Default: `false`. _(boolean)_
- `includeUploadProgress`: Indicates whether to include upload progress events (`ajaxprogress`). Default: `false`. _(boolean)_
- `avoidBoundary`: Set to `true` to stop delegating boundary management for multipart requests to the browser. Default: `false`. _(boolean)_
- `dispatchEventContext`: The context for dispatching custom events. Default: `this`.
- `customEventPrefix`: Custom event prefix for lifecycle events. Default: `'ajax'`. _(string)_

### Instance Properties

- `lastResponse`: Stores the last `AjaxResponse` object received. _(AjaxResponse|undefined)_
- `lastError`: Stores the last `AjaxError` object encountered. _(AjaxError|undefined)_

### Methods

- `generateRequest()`: Generates and sends the AJAX request, returning a `Promise<AjaxResponse>`.
- `request$()`: Returns a cold RxJS `Observable<AjaxResponse>` that executes the AJAX request per subscription.


### `src/AjaxProvider.ts`:

#### class: `AjaxProvider`

##### Mixins

| Name                | Module                    | Package |
| ------------------- | ------------------------- | ------- |
| `AjaxProviderMixin` | /src/AjaxProviderMixin.js |         |

##### Fields

| Name                      | Privacy | Type                                                     | Default                                                                                        | Description                                                                                                                                                      | Inherited From    |
| ------------------------- | ------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `dispatchEventContext`    |         | `{dispatchEvent(event: CustomEvent): void} \| undefined` | `this`                                                                                         | The context for dispatching events.                                                                                                                              | AjaxProviderMixin |
| `lastResponse`            |         | `AjaxResponse<unknown> \| undefined`                     | `undefined`                                                                                    | The last AJAX response object.                                                                                                                                   | AjaxProviderMixin |
| `lastError`               |         | `AjaxError \| undefined`                                 | `undefined`                                                                                    | The last error object.                                                                                                                                           | AjaxProviderMixin |
| `customEventPrefix`       |         | `string \| undefined`                                    | `'ajax'`                                                                                       | A custom event prefix for events related to HTTP requests.                                                                                                       | AjaxProviderMixin |
| `avoidBoundary`           |         | `boolean \| undefined`                                   | `false`                                                                                        | Set to \`true\` to stop delegating the use of boundaries for multipart requests to the browser.&#xA;Only change this to \`true\` if you know what you are doing. | AjaxProviderMixin |
| `url`                     |         | `string`                                                 | `''`                                                                                           |                                                                                                                                                                  | AjaxProviderMixin |
| `path`                    |         | `string`                                                 | `''`                                                                                           |                                                                                                                                                                  | AjaxProviderMixin |
| `body`                    |         | `unknown`                                                | `undefined`                                                                                    |                                                                                                                                                                  | AjaxProviderMixin |
| `async`                   |         | `boolean`                                                | `true`                                                                                         |                                                                                                                                                                  | AjaxProviderMixin |
| `method`                  |         | `string`                                                 | `'GET'`                                                                                        |                                                                                                                                                                  | AjaxProviderMixin |
| `_headers`                |         | `Record<string, string>`                                 | `{ Accept: 'application/json, text/plain, */*; q=0.01', 'Content-Type': 'application/json', }` |                                                                                                                                                                  | AjaxProviderMixin |
| `headers`                 |         | `Record<string, string> \| undefined`                    | `undefined`                                                                                    |                                                                                                                                                                  | AjaxProviderMixin |
| `timeout`                 |         | `number`                                                 | `0`                                                                                            |                                                                                                                                                                  | AjaxProviderMixin |
| `user`                    |         | `string`                                                 | `''`                                                                                           |                                                                                                                                                                  | AjaxProviderMixin |
| `password`                |         | `string`                                                 | `''`                                                                                           |                                                                                                                                                                  | AjaxProviderMixin |
| `withCredentials`         |         | `boolean`                                                | `false`                                                                                        |                                                                                                                                                                  | AjaxProviderMixin |
| `xsrfCookieName`          |         | `string`                                                 | `''`                                                                                           |                                                                                                                                                                  | AjaxProviderMixin |
| `xsrfHeaderName`          |         | `string`                                                 | `''`                                                                                           |                                                                                                                                                                  | AjaxProviderMixin |
| `responseType`            |         | `string`                                                 | `''`                                                                                           |                                                                                                                                                                  | AjaxProviderMixin |
| `queryParams`             |         | `unknown \| undefined`                                   | `undefined`                                                                                    |                                                                                                                                                                  | AjaxProviderMixin |
| `includeDownloadProgress` |         | `boolean`                                                | `false`                                                                                        |                                                                                                                                                                  | AjaxProviderMixin |
| `includeUploadProgress`   |         | `boolean`                                                | `false`                                                                                        |                                                                                                                                                                  | AjaxProviderMixin |

##### Methods

| Name                        | Privacy | Description                                                                                                                                                                                                                                          | Parameters                   | Return                                  | Inherited From    |
| --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------- | ----------------- |
| `_assignAjaxProviderConfig` |         | Assigns configuration options to the AjaxProvider instance.                                                                                                                                                                                          | `config: AjaxProviderConfig` | `void`                                  |                   |
| `request$`                  |         | Returns a cold Observable that performs the AJAX request on each subscription.&#xA;&#xA;Progress is reported through the \`ajaxprogress\` event. Errors are reported&#xA;through \`ajaxerror\`/\`ajaxerrorend\` events before the observable errors. |                              | `ColdObservable<AjaxResponse<unknown>>` | AjaxProviderMixin |
| `generateRequest`           |         | Generates and sends the AJAX request.                                                                                                                                                                                                                |                              | `Promise<any>`                          | AjaxProviderMixin |

<details><summary>Private API</summary>

##### Methods

| Name                    | Privacy | Description                                                     | Parameters                 | Return   | Inherited From    |
| ----------------------- | ------- | --------------------------------------------------------------- | -------------------------- | -------- | ----------------- |
| `_assignAjaxRxjsConfig` | private | Assigns the configuration settings for the AJAX request.        |                            | `Object` | AjaxProviderMixin |
| `_joinUrlData`          | private | Joins the base URL and path to create the complete request URL. |                            | `string` | AjaxProviderMixin |
| `_joinHeaders`          | private | Joins the default headers with custom headers.                  | `formData: unknown`        | `Object` | AjaxProviderMixin |
| `_dispatchEvent`        | private | Dispatches a custom event with the specified type and payload.  | `type: string, payload: *` | `void`   | AjaxProviderMixin |

</details>

<hr/>

#### Exports

| Kind | Name           | Declaration  | Module              | Package |
| ---- | -------------- | ------------ | ------------------- | ------- |
| `js` | `AjaxProvider` | AjaxProvider | src/AjaxProvider.ts |         |

Mixin for providing AJAX functionality using RxJS. This mixin can be used to enhance classes with AJAX capabilities.


### `src/AjaxProviderMixin.ts`:

#### mixin: `AjaxProviderMixin`

##### Mixins

| Name          | Module | Package               |
| ------------- | ------ | --------------------- |
| `dedupeMixin` |        | @open-wc/dedupe-mixin |

##### Parameters

| Name   | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `Base` | `T`  |         |             |

##### Fields

| Name                      | Privacy | Type                                                     | Default                                                                                        | Description | Inherited From |
| ------------------------- | ------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `url`                     |         | `string`                                                 | `''`                                                                                           |             |                |
| `path`                    |         | `string`                                                 | `''`                                                                                           |             |                |
| `body`                    |         | `unknown`                                                | `undefined`                                                                                    |             |                |
| `async`                   |         | `boolean`                                                | `true`                                                                                         |             |                |
| `method`                  |         | `string`                                                 | `'GET'`                                                                                        |             |                |
| `_headers`                |         | `Record<string, string>`                                 | `{ Accept: 'application/json, text/plain, */*; q=0.01', 'Content-Type': 'application/json', }` |             |                |
| `headers`                 |         | `Record<string, string> \| undefined`                    | `undefined`                                                                                    |             |                |
| `timeout`                 |         | `number`                                                 | `0`                                                                                            |             |                |
| `user`                    |         | `string`                                                 | `''`                                                                                           |             |                |
| `password`                |         | `string`                                                 | `''`                                                                                           |             |                |
| `withCredentials`         |         | `boolean`                                                | `false`                                                                                        |             |                |
| `xsrfCookieName`          |         | `string`                                                 | `''`                                                                                           |             |                |
| `xsrfHeaderName`          |         | `string`                                                 | `''`                                                                                           |             |                |
| `responseType`            |         | `string`                                                 | `''`                                                                                           |             |                |
| `queryParams`             |         | `unknown \| undefined`                                   | `undefined`                                                                                    |             |                |
| `includeDownloadProgress` |         | `boolean`                                                | `false`                                                                                        |             |                |
| `includeUploadProgress`   |         | `boolean`                                                | `false`                                                                                        |             |                |
| `avoidBoundary`           |         | `boolean \| undefined`                                   |                                                                                                |             |                |
| `dispatchEventContext`    |         | `{dispatchEvent(event: CustomEvent): void} \| undefined` |                                                                                                |             |                |
| `customEventPrefix`       |         | `string \| undefined`                                    |                                                                                                |             |                |
| `lastResponse`            |         | `AjaxResponse<unknown> \| undefined`                     |                                                                                                |             |                |
| `lastError`               |         | `AjaxError \| undefined`                                 |                                                                                                |             |                |

##### Methods

| Name              | Privacy | Description                                                                                                                                                                                                                                          | Parameters | Return                                  | Inherited From |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------- | -------------- |
| `request$`        |         | Returns a cold Observable that performs the AJAX request on each subscription.&#xA;&#xA;Progress is reported through the \`ajaxprogress\` event. Errors are reported&#xA;through \`ajaxerror\`/\`ajaxerrorend\` events before the observable errors. |            | `ColdObservable<AjaxResponse<unknown>>` |                |
| `generateRequest` |         | Generates and sends the AJAX request.                                                                                                                                                                                                                |            | `Promise<any>`                          |                |

<details><summary>Private API</summary>

##### Methods

| Name                    | Privacy | Description                                                     | Parameters                 | Return   | Inherited From |
| ----------------------- | ------- | --------------------------------------------------------------- | -------------------------- | -------- | -------------- |
| `_assignAjaxRxjsConfig` | private | Assigns the configuration settings for the AJAX request.        |                            | `Object` |                |
| `_joinUrlData`          | private | Joins the base URL and path to create the complete request URL. |                            | `string` |                |
| `_joinHeaders`          | private | Joins the default headers with custom headers.                  | `formData: unknown`        | `Object` |                |
| `_dispatchEvent`        | private | Dispatches a custom event with the specified type and payload.  | `type: string, payload: *` | `void`   |                |

</details>

<hr/>

#### Exports

| Kind | Name                | Declaration       | Module                   | Package |
| ---- | ------------------- | ----------------- | ------------------------ | ------- |
| `js` | `AjaxProviderMixin` | AjaxProviderMixin | src/AjaxProviderMixin.ts |         |

### `src/fromAjax.ts`:

#### class: `AjaxResponse`

##### Fields

| Name              | Privacy | Type                     | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Description | Inherited From |
| ----------------- | ------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `originalEvent`   |         | `Event`                  | `originalEvent`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |                |
| `xhr`             |         | `XMLHttpRequest`         | `xhr`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |             |                |
| `request`         |         | `AjaxRequest`            | `{ url, headers, body, async: config.async, crossDomain: config.crossDomain, withCredentials: config.withCredentials, method: config.method, timeout: config.timeout, responseType: config.responseType as XMLHttpRequestResponseType, user: config.user, password: config.password, xsrfCookieName: config.xsrfCookieName, xsrfHeaderName: config.xsrfHeaderName, queryParams: config.queryParams, includeDownloadProgress: config.includeDownloadProgress, includeUploadProgress: config.includeUploadProgress, }` |             |                |
| `type`            |         | `string`                 | `type`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |             |                |
| `status`          |         | `number`                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |                |
| `responseType`    |         | `string`                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |                |
| `responseHeaders` |         | `Record<string, string>` |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |                |
| `response`        |         | `T`                      | `getXHRResponse(xhr)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |             |                |
| `loaded`          |         | `number`                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |                |
| `total`           |         | `number`                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |                |

<hr/>

#### class: `AjaxError`

##### Fields

| Name           | Privacy | Type             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Description | Inherited From |
| -------------- | ------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `name`         |         | `string`         | `'AjaxError'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |             |                |
| `xhr`          |         | `XMLHttpRequest` | `xhr`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |             |                |
| `request`      |         | `AjaxRequest`    | `{ url, headers, body, async: config.async, crossDomain: config.crossDomain, withCredentials: config.withCredentials, method: config.method, timeout: config.timeout, responseType: config.responseType as XMLHttpRequestResponseType, user: config.user, password: config.password, xsrfCookieName: config.xsrfCookieName, xsrfHeaderName: config.xsrfHeaderName, queryParams: config.queryParams, includeDownloadProgress: config.includeDownloadProgress, includeUploadProgress: config.includeUploadProgress, }` |             |                |
| `status`       |         | `number`         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |                |
| `responseType` |         | `string`         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |                |
| `response`     |         | `unknown`        | `response`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |             |                |

<hr/>

#### class: `AjaxTimeoutError`

##### Fields

| Name           | Privacy | Type             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Description | Inherited From |
| -------------- | ------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `name`         |         | `string`         | `'AjaxTimeoutError'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             | AjaxError      |
| `xhr`          |         | `XMLHttpRequest` | `xhr`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |             | AjaxError      |
| `request`      |         | `AjaxRequest`    | `{ url, headers, body, async: config.async, crossDomain: config.crossDomain, withCredentials: config.withCredentials, method: config.method, timeout: config.timeout, responseType: config.responseType as XMLHttpRequestResponseType, user: config.user, password: config.password, xsrfCookieName: config.xsrfCookieName, xsrfHeaderName: config.xsrfHeaderName, queryParams: config.queryParams, includeDownloadProgress: config.includeDownloadProgress, includeUploadProgress: config.includeUploadProgress, }` |             | AjaxError      |
| `status`       |         | `number`         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             | AjaxError      |
| `responseType` |         | `string`         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             | AjaxError      |
| `response`     |         | `unknown`        | `response`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |             | AjaxError      |

<hr/>

#### Variables

| Name      | Description | Type                     |
| --------- | ----------- | ------------------------ |
| `url`     |             |                          |
| `headers` |             | `Record<string, string>` |
| `body`    |             |                          |

<hr/>

#### Functions

| Name                 | Description                                                                                                                                                                                                                   | Parameters                 | Return                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `fromXMLHttpRequest` | Creates an \`XMLHttpRequest\` observable that emits \`AjaxResponse\` values,&#xA;replicating the behavior of the removed \`rxjs/ajax\` \`fromAjax\` factory&#xA;using the Web Platform Observable (\`ColdObservable\`) model. | `init: AjaxConfig`         | `ColdObservable<AjaxResponse<unknown>>` |
| `lastValueFrom`      | Resolves with the last value emitted by the observable before completion.                                                                                                                                                     | `source$: Subscribable<T>` | `Promise<T>`                            |

<hr/>

#### Exports

| Kind | Name                 | Declaration        | Module          | Package |
| ---- | -------------------- | ------------------ | --------------- | ------- |
| `js` | `fromXMLHttpRequest` | fromXMLHttpRequest | src/fromAjax.ts |         |
| `js` | `lastValueFrom`      | lastValueFrom      | src/fromAjax.ts |         |
| `js` | `AjaxResponse`       | AjaxResponse       | src/fromAjax.ts |         |
| `js` | `AjaxError`          | AjaxError          | src/fromAjax.ts |         |
| `js` | `AjaxTimeoutError`   | AjaxTimeoutError   | src/fromAjax.ts |         |

### `src/index.ts`:

#### Exports

| Kind | Name                 | Declaration        | Module                 | Package |
| ---- | -------------------- | ------------------ | ---------------------- | ------- |
| `js` | `AjaxProvider`       | AjaxProvider       | ./AjaxProvider.js      |         |
| `js` | `AjaxProviderConfig` | AjaxProviderConfig | ./AjaxProvider.js      |         |
| `js` | `AjaxProviderMixin`  | AjaxProviderMixin  | ./AjaxProviderMixin.js |         |

### `src/utils.ts`:

#### Variables

| Name                            | Description                                                                                                                                                                                                                                                                                                                                    | Type |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| `isStandardBrowserEnv`          | Determines if the code is running in a standard browser environment.&#xA;&#xA;This function checks for specific conditions that indicate whether the code is&#xA;running in a standard browser environment, allowing Axios to work in various&#xA;environments like web workers, React Native, or NativeScript.                                |      |
| `isStandardBrowserWebWorkerEnv` | Determines if the code is running in a standard browser WebWorker environment.&#xA;&#xA;This function checks for specific conditions that indicate whether the code is&#xA;running in a standard browser WebWorker environment. It takes into account the&#xA;limitations of the \`isStandardBrowserEnv\` method when working with WebWorkers. |      |

<hr/>

#### Functions

| Name              | Description                                                                 | Parameters                            | Return    |
| ----------------- | --------------------------------------------------------------------------- | ------------------------------------- | --------- |
| `isFormData`      | Determine if a value is a FormData                                          | `thing: *`                            | `boolean` |
| `assignIfDefined` | Utility function to assign a property to an object if the value is defined. | `obj: Object, prop: string, value: *` | `void`    |

<hr/>

#### Exports

| Kind | Name                            | Declaration                   | Module       | Package |
| ---- | ------------------------------- | ----------------------------- | ------------ | ------- |
| `js` | `isStandardBrowserEnv`          | isStandardBrowserEnv          | src/utils.ts |         |
| `js` | `isStandardBrowserWebWorkerEnv` | isStandardBrowserWebWorkerEnv | src/utils.ts |         |
| `js` | `isFormData`                    | isFormData                    | src/utils.ts |         |
| `js` | `assignIfDefined`               | assignIfDefined               | src/utils.ts |         |
