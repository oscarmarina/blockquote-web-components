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

| Name                        | Privacy | Description                                                                                                                                                                                                                                          | Parameters                   | Return                              | Inherited From    |
| --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------- | ----------------- |
| `_assignAjaxProviderConfig` |         | Assigns configuration options to the AjaxProvider instance.                                                                                                                                                                                          | `config: AjaxProviderConfig` | `void`                              |                   |
| `request$`                  |         | Returns a cold Observable that performs the AJAX request on each subscription.&#xA;&#xA;Progress is reported through the \`ajaxprogress\` event. Errors are reported&#xA;through \`ajaxerror\`/\`ajaxerrorend\` events before the observable errors. |                              | `Observable<AjaxResponse<unknown>>` | AjaxProviderMixin |
| `generateRequest`           |         | Generates and sends the AJAX request.                                                                                                                                                                                                                |                              | `Promise<any>`                      | AjaxProviderMixin |

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

| Name              | Privacy | Description                                                                                                                                                                                                                                          | Parameters | Return                              | Inherited From |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------- | -------------- |
| `request$`        |         | Returns a cold Observable that performs the AJAX request on each subscription.&#xA;&#xA;Progress is reported through the \`ajaxprogress\` event. Errors are reported&#xA;through \`ajaxerror\`/\`ajaxerrorend\` events before the observable errors. |            | `Observable<AjaxResponse<unknown>>` |                |
| `generateRequest` |         | Generates and sends the AJAX request.                                                                                                                                                                                                                |            | `Promise<any>`                      |                |

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
