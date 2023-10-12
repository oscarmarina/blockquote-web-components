# AJAX Provider Documentation

A class that provides AJAX functionality with event handling capabilities.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [Creating an Instance](#creating-an-instance)
  - [Configuring AJAX Requests](#configuring-ajax-requests)
  - [Sending AJAX Requests](#sending-ajax-requests)
  - [Event Handling](#event-handling)
- [API Reference](#api-reference)

## Introduction

The AJAX Provider is a JavaScript class that provides AJAX functionality with event handling capabilities through [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget). It uses the `AjaxProviderMixin`, a mixin that leverages RxJS to manage AJAX requests efficiently.

## Installation

To use the AJAX Provider, you need to install it as a package dependency.

```bash
npm install @blockquote-web-components/ajax-provider
```

## Usage

### Creating an Instance

To use the AJAX Provider, first, create an instance of the `AjaxProvider` class.

```js
import { AjaxProvider } from '@blockquote-web-components/ajax-provider';

// A basic request configuration looks like this:
const ajaxProvider = new AjaxProvider({
  url: 'https://httpbin.org/get',
});
```

```js
  // Default method
  method: 'GET',

  // Default request Headers.
  headers: {
    Accept: 'application/json, text/plain, *\/*; q=0.01',
    'Content-Type': 'application/json',
  }
```

### Configuring AJAX Requests

You can configure your AJAX request by setting various options on the `ajaxProvider` instance. Here are some common configuration options:

```js
const ajaxProvider = new AjaxProvider({
  url: 'https://httpbin.org/get',
  path: method.toLowerCase(),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'rxjs-custom-header': 'Rxjs',
  },
  body: {
    rxjs: `Hi`,
  },
  includeDownloadProgress: true,
  includeUploadProgress: true,
});
```

### Sending AJAX Requests

Once you have configured the AJAX request, you can send it using the `generateRequest` method. This method returns a promise that resolves with the AJAX response or attaching event listeners to handle various stages of the AJAX request.

```js
const ajaxProvider = new AjaxProvider({
  url: 'https://api.github.com/users',
  queryParams: 'per_page=4',
});

ajaxProvider
  .generateRequest()
  .then(response => {
    console.log('Response:', response.response);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
```

### Event Handling

The AJAX Provider allows you to handle events related to HTTP requests. You can listen to events such as:

- `'presend'` --> `'progress'` --> `'response'` --> `'responseend'`
- `'presend'` --> `'error'` --> `'errorend'`

Here's how to set up event listeners:

```js
const ajaxProvider = new AjaxProvider({
  url: 'https://api.github.com/users',
  queryParams: 'per_page=3',
});

ajaxProvider.addEventListener('ajaxpresend', ({ detail }) => {
  console.log('Preparing to send request...', detail);
});

ajaxProvider.addEventListener('ajaxprogress', ({ detail }) => {
  console.log(`Progress: ${detail.loaded} of ${detail.total} bytes`);
});

ajaxProvider.addEventListener('ajaxresponse', ({ detail }) => {
  const { response } = detail;
  console.log('Received response:', response);
});

ajaxProvider.addEventListener('ajaxresponseend', ({ detail }) => {
  console.log('End request:', detail);
});

ajaxProvider.addEventListener('ajaxerror', ({ detail }) => {
  const error = detail;
  console.log('Request error:', error.message);
});

ajaxProvider.addEventListener('ajaxerrorend', ({ detail }) => {
  console.log('End error:', detail);
});

ajaxProvider.generateRequest();
```

## API Reference

Requests can be made by passing the relevant config to `AjaxProvider`.

#### Properties

#### [Configuration for the RxJS/ajax creation function.](https://rxjs.dev/api/ajax/AjaxConfig)

- `url`: The base URL for the AJAX request. _(string)_
- `body`: The request body. (\*)
- `async`: Whether or not to send the request asynchronously. _(boolean)_
  - Default value: `true`
- `method`: The HTTP request method (e.g., GET, POST). _(string)_
  - Default value: `GET`
- `headers`: Custom headers for the request. _(Object|undefined)_
  - Default value:
    - Accept: 'application/json, text/plain, *\/*; q=0.01'
    - Content-Type: 'application/json'
- `timeout`: The request timeout in milliseconds. _(number)_
  - Default value: `0`
- `user`: The user for authentication. _(string)_
- `password`: The password for authentication. _(string)_
- `withCredentials`: Indicates whether to include credentials with the request. _(boolean)_
  - Default value: `false`
- `xsrfCookieName`: The name of the XSRF cookie. _(string)_
- `xsrfHeaderName`: The name of the XSRF header. _(string)_
- `responseType`: The response type (e.g., 'json', 'text'). _(string)_
  - Default value: `json`
- `queryParams`: The query parameters to include in the request URL. _(Object|undefined)_
- `includeDownloadProgress`: Indicates whether to include download progress in the response. _(boolean)_
  - Default value: `false`
- `includeUploadProgress`: Indicates whether to include upload progress in the response. _(boolean)_
  - Default value: `false`

#### Configuration `AJAX Provider`.

- `path`: The path to append to the base URL. _(string)_
- `dispatchEventContext`: The context for dispatching events. _(AjaxProvider instance)_
- `lastResponse`: The last AJAX response object. _(Object)_
- `lastError`: The last error object. _(Object)_
- `customEventPrefix`: A custom event prefix for events related to HTTP requests. _(string)_
  - Default value: `ajax`
- `avoidBoundary`: Set to `true` to stop delegating the use of [boundaries for multipart requests to the browser](https://github.com/axios/axios/issues/4631). _(boolean)_
  - Only change this to `true` if you know what you are doing.
    Default value: `false`

#### Methods

- `generateRequest()`: Generates and sends the AJAX request. This method can be used both with promises and by attaching event listeners to handle various stages of the AJAX request.


### `src/AjaxProvider.js`:

#### class: `AjaxProvider`

##### Mixins

| Name                | Module                    | Package |
| ------------------- | ------------------------- | ------- |
| `AjaxProviderMixin` | /src/AjaxProviderMixin.js |         |

##### Fields

| Name                      | Privacy | Type                | Default                                                                                                           | Description                                                                                                                                                      | Inherited From    |
| ------------------------- | ------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `dispatchEventContext`    |         | `Object`            | `this`                                                                                                            | The context for dispatching events.                                                                                                                              |                   |
| `lastResponse`            |         | `Object`            | `undefined`                                                                                                       | The last AJAX response object.                                                                                                                                   |                   |
| `lastError`               |         | `Object`            | `undefined`                                                                                                       | The last error object.                                                                                                                                           |                   |
| `customEventPrefix`       |         | `string`            | `'ajax'`                                                                                                          | A custom event prefix for events related to HTTP requests.                                                                                                       |                   |
| `avoidBoundary`           |         | `boolean`           | `false`                                                                                                           | Set to \`true\` to stop delegating the use of boundaries for multipart requests to the browser.&#xA;Only change this to \`true\` if you know what you are doing. |                   |
| `url`                     |         | `string`            | `''`                                                                                                              | The base URL for the AJAX request.                                                                                                                               | AjaxProviderMixin |
| `path`                    |         | `string`            | `''`                                                                                                              | The path to append to the base URL.                                                                                                                              | AjaxProviderMixin |
| `body`                    |         | `*`                 | `undefined`                                                                                                       | The request body.                                                                                                                                                | AjaxProviderMixin |
| `async`                   |         | `boolean`           | `true`                                                                                                            | Whether or not to send the request asynchronously.                                                                                                               | AjaxProviderMixin |
| `method`                  |         | `string`            | `'GET'`                                                                                                           | The HTTP request method (e.g., GET, POST).                                                                                                                       | AjaxProviderMixin |
| `_headers`                |         | `Object`            | `{        Accept: 'application/json, text/plain, */*; q=0.01',        'Content-Type': 'application/json',      }` | The default headers for the request.                                                                                                                             | AjaxProviderMixin |
| `headers`                 |         | `Object\|undefined` | `undefined`                                                                                                       | Custom headers for the request.                                                                                                                                  | AjaxProviderMixin |
| `timeout`                 |         | `number`            | `0`                                                                                                               | The request timeout in milliseconds.                                                                                                                             | AjaxProviderMixin |
| `user`                    |         | `string`            | `''`                                                                                                              | The user for authentication.                                                                                                                                     | AjaxProviderMixin |
| `password`                |         | `string`            | `''`                                                                                                              | The password for authentication.                                                                                                                                 | AjaxProviderMixin |
| `withCredentials`         |         | `boolean`           | `false`                                                                                                           | Indicates whether to include credentials with the request.                                                                                                       | AjaxProviderMixin |
| `xsrfCookieName`          |         | `string`            | `''`                                                                                                              | The name of the XSRF cookie.                                                                                                                                     | AjaxProviderMixin |
| `xsrfHeaderName`          |         | `string`            | `''`                                                                                                              | The name of the XSRF header.                                                                                                                                     | AjaxProviderMixin |
| `responseType`            |         | `string`            | `''`                                                                                                              | The response type (e.g., 'json', 'text').                                                                                                                        | AjaxProviderMixin |
| `queryParams`             |         | `Object\|undefined` | `undefined`                                                                                                       | The query parameters to include in the request URL.                                                                                                              | AjaxProviderMixin |
| `includeDownloadProgress` |         | `boolean`           | `false`                                                                                                           | Indicates whether to include download progress in the response.                                                                                                  | AjaxProviderMixin |
| `includeUploadProgress`   |         | `boolean`           | `false`                                                                                                           | Indicates whether to include upload progress in the response.                                                                                                    | AjaxProviderMixin |

##### Methods

| Name                        | Privacy | Description                                                 | Parameters       | Return         | Inherited From    |
| --------------------------- | ------- | ----------------------------------------------------------- | ---------------- | -------------- | ----------------- |
| `_assignAjaxProviderConfig` |         | Assigns configuration options to the AjaxProvider instance. | `config: Object` |                |                   |
| `generateRequest`           |         | Generates and sends the AJAX request.                       |                  | `Promise<any>` | AjaxProviderMixin |

<details><summary>Private API</summary>

##### Methods

| Name                    | Privacy | Description                                                     | Parameters                 | Return   | Inherited From    |
| ----------------------- | ------- | --------------------------------------------------------------- | -------------------------- | -------- | ----------------- |
| `_assignAjaxRxjsConfig` | private | Assigns the configuration settings for the AJAX request.        |                            | `Object` | AjaxProviderMixin |
| `_joinUrlData`          | private | Joins the base URL and path to create the complete request URL. |                            | `string` | AjaxProviderMixin |
| `_joinHeaders`          | private | Joins the default headers with custom headers.                  | `formData`                 | `Object` | AjaxProviderMixin |
| `_dispatchEvent`        | private | Dispatches a custom event with the specified type and payload.  | `type: string, payload: *` |          | AjaxProviderMixin |

</details>

<hr/>

#### Exports

| Kind | Name           | Declaration  | Module              | Package |
| ---- | -------------- | ------------ | ------------------- | ------- |
| `js` | `AjaxProvider` | AjaxProvider | src/AjaxProvider.js |         |

Mixin for providing AJAX functionality using RxJS. This mixin can be used to enhance classes with AJAX capabilities.


### `src/AjaxProviderMixin.js`:

#### mixin: `AjaxProviderMixin`

##### Mixins

| Name          | Module | Package               |
| ------------- | ------ | --------------------- |
| `dedupeMixin` |        | @open-wc/dedupe-mixin |

##### Parameters

| Name   | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `Base` |      |         |             |

##### Fields

| Name                      | Privacy | Type                | Default                                                                                                           | Description                                                     | Inherited From |
| ------------------------- | ------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------- |
| `url`                     |         | `string`            | `''`                                                                                                              | The base URL for the AJAX request.                              |                |
| `path`                    |         | `string`            | `''`                                                                                                              | The path to append to the base URL.                             |                |
| `body`                    |         | `*`                 | `undefined`                                                                                                       | The request body.                                               |                |
| `async`                   |         | `boolean`           | `true`                                                                                                            | Whether or not to send the request asynchronously.              |                |
| `method`                  |         | `string`            | `'GET'`                                                                                                           | The HTTP request method (e.g., GET, POST).                      |                |
| `_headers`                |         | `Object`            | `{        Accept: 'application/json, text/plain, */*; q=0.01',        'Content-Type': 'application/json',      }` | The default headers for the request.                            |                |
| `headers`                 |         | `Object\|undefined` | `undefined`                                                                                                       | Custom headers for the request.                                 |                |
| `timeout`                 |         | `number`            | `0`                                                                                                               | The request timeout in milliseconds.                            |                |
| `user`                    |         | `string`            | `''`                                                                                                              | The user for authentication.                                    |                |
| `password`                |         | `string`            | `''`                                                                                                              | The password for authentication.                                |                |
| `withCredentials`         |         | `boolean`           | `false`                                                                                                           | Indicates whether to include credentials with the request.      |                |
| `xsrfCookieName`          |         | `string`            | `''`                                                                                                              | The name of the XSRF cookie.                                    |                |
| `xsrfHeaderName`          |         | `string`            | `''`                                                                                                              | The name of the XSRF header.                                    |                |
| `responseType`            |         | `string`            | `''`                                                                                                              | The response type (e.g., 'json', 'text').                       |                |
| `queryParams`             |         | `Object\|undefined` | `undefined`                                                                                                       | The query parameters to include in the request URL.             |                |
| `includeDownloadProgress` |         | `boolean`           | `false`                                                                                                           | Indicates whether to include download progress in the response. |                |
| `includeUploadProgress`   |         | `boolean`           | `false`                                                                                                           | Indicates whether to include upload progress in the response.   |                |

##### Methods

| Name              | Privacy | Description                           | Parameters | Return         | Inherited From |
| ----------------- | ------- | ------------------------------------- | ---------- | -------------- | -------------- |
| `generateRequest` |         | Generates and sends the AJAX request. |            | `Promise<any>` |                |

<details><summary>Private API</summary>

##### Methods

| Name                    | Privacy | Description                                                     | Parameters                 | Return   | Inherited From |
| ----------------------- | ------- | --------------------------------------------------------------- | -------------------------- | -------- | -------------- |
| `_assignAjaxRxjsConfig` | private | Assigns the configuration settings for the AJAX request.        |                            | `Object` |                |
| `_joinUrlData`          | private | Joins the base URL and path to create the complete request URL. |                            | `string` |                |
| `_joinHeaders`          | private | Joins the default headers with custom headers.                  | `formData`                 | `Object` |                |
| `_dispatchEvent`        | private | Dispatches a custom event with the specified type and payload.  | `type: string, payload: *` |          |                |

</details>

<hr/>

#### Exports

| Kind | Name                | Declaration       | Module                   | Package |
| ---- | ------------------- | ----------------- | ------------------------ | ------- |
| `js` | `AjaxProviderMixin` | AjaxProviderMixin | src/AjaxProviderMixin.js |         |

### `src/utils.js`:

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
| `assignIfDefined` | Utility function to assign a property to an object if the value is defined. | `obj: Object, prop: string, value: *` |           |

<hr/>

#### Exports

| Kind | Name                            | Declaration                   | Module       | Package |
| ---- | ------------------------------- | ----------------------------- | ------------ | ------- |
| `js` | `isStandardBrowserEnv`          | isStandardBrowserEnv          | src/utils.js |         |
| `js` | `isStandardBrowserWebWorkerEnv` | isStandardBrowserWebWorkerEnv | src/utils.js |         |
| `js` | `isFormData`                    | isFormData                    | src/utils.js |         |
| `js` | `assignIfDefined`               | assignIfDefined               | src/utils.js |         |

### `index.js`:

#### Exports

| Kind | Name                | Declaration       | Module                     | Package |
| ---- | ------------------- | ----------------- | -------------------------- | ------- |
| `js` | `AjaxProvider`      | AjaxProvider      | ./src/AjaxProvider.js      |         |
| `js` | `AjaxProviderMixin` | AjaxProviderMixin | ./src/AjaxProviderMixin.js |         |
