import {ColdObservable} from 'rxjs';
import {isFormData} from './utils.js';

export interface AjaxConfig {
  url: string;
  body?: unknown;
  headers?: Record<string, string>;
  async?: boolean;
  crossDomain?: boolean;
  withCredentials?: boolean;
  method?: string;
  timeout?: number;
  responseType?: XMLHttpRequestResponseType;
  user?: string;
  password?: string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  queryParams?: unknown;
  includeDownloadProgress?: boolean;
  includeUploadProgress?: boolean;
  createXHR?: () => XMLHttpRequest;
}

export interface AjaxRequest {
  url: string;
  body: unknown;
  headers: Record<string, string>;
  async: boolean;
  crossDomain: boolean;
  withCredentials: boolean;
  method: string;
  timeout: number;
  responseType: XMLHttpRequestResponseType;
  user?: string;
  password?: string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  queryParams?: unknown;
  includeDownloadProgress: boolean;
  includeUploadProgress: boolean;
}

/**
 * Creates an `XMLHttpRequest` observable that emits `AjaxResponse` values,
 * replicating the behavior of the removed `rxjs/ajax` `fromAjax` factory
 * using the Web Platform Observable (`ColdObservable`) model.
 *
 * @param {AjaxConfig} init - The request configuration.
 * @returns {ColdObservable<AjaxResponse<unknown>>} A cold observable that performs the request per subscription.
 */
export function fromXMLHttpRequest<T = unknown>(init: AjaxConfig): ColdObservable<AjaxResponse<T>> {
  return new ColdObservable<AjaxResponse<T>>((subscriber) => {
    const config = {
      async: true,
      crossDomain: false,
      withCredentials: false,
      method: 'GET',
      timeout: 0,
      responseType: 'json' as XMLHttpRequestResponseType,
      xsrfCookieName: undefined as string | undefined,
      xsrfHeaderName: undefined as string | undefined,
      queryParams: undefined as unknown,
      includeDownloadProgress: false,
      includeUploadProgress: false,
      ...init,
    };

    let url = config.url;
    if (!url) {
      throw new TypeError('url is required');
    }

    url = buildUrlWithQueryParams(url, config.queryParams);

    const headers: Record<string, string> = {};
    if (config.headers) {
      for (const key in config.headers) {
        if (Object.prototype.hasOwnProperty.call(config.headers, key)) {
          headers[key.toLowerCase()] = config.headers[key];
        }
      }
    }

    if (!config.crossDomain && !('x-requested-with' in headers)) {
      headers['x-requested-with'] = 'XMLHttpRequest';
    }

    if (
      (config.withCredentials || !config.crossDomain) &&
      config.xsrfCookieName &&
      config.xsrfHeaderName
    ) {
      const cookieMatch = document?.cookie.match(
        new RegExp(`(^|;\\s*)(${config.xsrfCookieName})=([^;]*)`)
      );
      const xsrfCookie = cookieMatch ? (cookieMatch.pop() ?? '') : '';
      if (xsrfCookie) {
        headers[config.xsrfHeaderName] = xsrfCookie;
      }
    }

    const body = extractContentTypeAndMaybeSerializeBody(config.body, headers);

    const request: AjaxRequest = {
      url,
      headers,
      body,
      async: config.async,
      crossDomain: config.crossDomain,
      withCredentials: config.withCredentials,
      method: config.method,
      timeout: config.timeout,
      responseType: config.responseType as XMLHttpRequestResponseType,
      user: config.user,
      password: config.password,
      xsrfCookieName: config.xsrfCookieName,
      xsrfHeaderName: config.xsrfHeaderName,
      queryParams: config.queryParams,
      includeDownloadProgress: config.includeDownloadProgress,
      includeUploadProgress: config.includeUploadProgress,
    };

    const xhr = config.createXHR ? config.createXHR() : new XMLHttpRequest();

    const addErrorEvent = (type: string, errorFactory: () => AjaxError): void => {
      xhr.addEventListener(type, () => {
        if (!subscriber.active) {
          return;
        }
        subscriber.error(errorFactory());
      });
    };
    addErrorEvent('timeout', () => new AjaxTimeoutError(xhr, request));
    addErrorEvent('abort', () => new AjaxError('aborted', xhr, request));

    const createResponse = (direction: 'download' | 'upload', event: Event): AjaxResponse<T> =>
      new AjaxResponse<T>(event, xhr, request, `${direction}_${event.type}`);

    const addProgressEvent = (
      target: XMLHttpRequest | XMLHttpRequestUpload,
      type: string,
      direction: 'download' | 'upload'
    ): void => {
      target.addEventListener(type, (event: Event) => {
        subscriber.next(createResponse(direction, event));
      });
    };

    if (config.includeUploadProgress) {
      ['loadstart', 'progress', 'load'].forEach((type) =>
        addProgressEvent(xhr.upload, type, 'upload')
      );
    }

    if (config.includeDownloadProgress) {
      ['loadstart', 'progress'].forEach((type) => addProgressEvent(xhr, type, 'download'));
    }

    const emitError = (status?: number): void => {
      if (!subscriber.active) {
        return;
      }
      const msg = `ajax error${status ? ` ${status}` : ''}`;
      subscriber.error(new AjaxError(msg, xhr, request));
    };

    xhr.addEventListener('error', () => emitError());

    xhr.addEventListener('load', (event) => {
      if (!subscriber.active) {
        return;
      }
      const {status} = xhr;
      if (status < 400) {
        let response: AjaxResponse<T>;
        try {
          response = createResponse('download', event);
        } catch (err) {
          subscriber.error(err);
          return;
        }
        subscriber.next(response);
        subscriber.complete();
      } else {
        emitError(status);
      }
    });

    const {method, async} = request;
    if (request.user) {
      xhr.open(method, url, async, request.user, request.password);
    } else {
      xhr.open(method, url, async);
    }

    if (async) {
      xhr.timeout = request.timeout;
      xhr.responseType = request.responseType;
    }

    if ('withCredentials' in xhr) {
      xhr.withCredentials = request.withCredentials;
    }

    for (const key in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }

    if (body != null) {
      xhr.send(body as XMLHttpRequestBodyInit);
    } else {
      xhr.send();
    }

    subscriber.addTeardown(() => {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        xhr.abort();
      }
    });
  });
}

/**
 * Resolves with the last value emitted by the observable before completion.
 *
 * @template T
 * @param {Subscribable<T>} source$ - The observable to subscribe to.
 * @returns {Promise<T>} A promise that resolves with the last emitted value.
 */
export function lastValueFrom<T>(source$: Subscribable<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    let lastValue: T | undefined;
    source$.subscribe({
      next: (value) => {
        lastValue = value;
      },
      error: reject,
      complete: () => {
        resolve(lastValue as T);
      },
    });
  });
}

export class AjaxResponse<T = unknown> {
  originalEvent: Event;
  xhr: XMLHttpRequest;
  request: AjaxRequest;
  type: string;
  status: number;
  responseType: string;
  responseHeaders: Record<string, string>;
  response: T;
  loaded: number;
  total: number;

  constructor(
    originalEvent: Event,
    xhr: XMLHttpRequest,
    request: AjaxRequest,
    type = 'download_load'
  ) {
    this.originalEvent = originalEvent;
    this.xhr = xhr;
    this.request = request;
    this.type = type;

    const {status, responseType} = xhr;
    this.status = status ?? 0;
    this.responseType = responseType ?? '';

    const allHeaders = xhr.getAllResponseHeaders();
    this.responseHeaders = allHeaders
      ? allHeaders.split('\n').reduce((acc: Record<string, string>, line) => {
          const index = line.indexOf(': ');
          if (index >= 0) {
            acc[line.slice(0, index)] = line.slice(index + 2);
          }
          return acc;
        }, {})
      : {};

    this.response = getXHRResponse(xhr) as T;

    const progressEvent = originalEvent as ProgressEvent;
    this.loaded = progressEvent.loaded;
    this.total = progressEvent.total;
  }
}

export class AjaxError extends Error {
  override name: string;
  xhr: XMLHttpRequest;
  request: AjaxRequest;
  status: number;
  responseType: string;
  response: unknown;

  constructor(message: string, xhr: XMLHttpRequest, request: AjaxRequest) {
    super(message);
    this.name = 'AjaxError';
    this.xhr = xhr;
    this.request = request;
    this.status = xhr.status;
    this.responseType = xhr.responseType;

    let response: unknown;
    try {
      response = getXHRResponse(xhr);
    } catch {
      response = xhr.responseText;
    }
    this.response = response;
  }
}

export class AjaxTimeoutError extends AjaxError {
  constructor(xhr: XMLHttpRequest, request: AjaxRequest) {
    super('ajax timeout', xhr, request);
    this.name = 'AjaxTimeoutError';
  }
}

function getXHRResponse(xhr: XMLHttpRequest): unknown {
  switch (xhr.responseType) {
    case 'json': {
      if ('response' in xhr) {
        return xhr.response;
      }
      return JSON.parse((xhr as {responseText: string}).responseText);
    }
    case 'document':
      return xhr.responseXML;
    case 'text':
    default: {
      if ('response' in xhr) {
        return xhr.response;
      }
      return (xhr as {responseText: string}).responseText;
    }
  }
}

function extractContentTypeAndMaybeSerializeBody(
  body: unknown,
  headers: Record<string, string>
): unknown {
  if (
    !body ||
    typeof body === 'string' ||
    isFormData(body) ||
    isURLSearchParams(body) ||
    isArrayBuffer(body) ||
    isFile(body) ||
    isBlob(body) ||
    isReadableStream(body)
  ) {
    return body;
  }

  if (isArrayBufferView(body)) {
    return (body as ArrayBufferView).buffer;
  }

  if (typeof body === 'object') {
    headers['content-type'] = headers['content-type'] ?? 'application/json;charset=utf-8';
    return JSON.stringify(body);
  }

  throw new TypeError('Unknown body type');
}

function isURLSearchParams(body: unknown): body is URLSearchParams {
  return typeof URLSearchParams !== 'undefined' && body instanceof URLSearchParams;
}

function isArrayBuffer(body: unknown): body is ArrayBuffer {
  return toStringCheck(body, 'ArrayBuffer');
}

function isFile(body: unknown): body is File {
  return toStringCheck(body, 'File');
}

function isBlob(body: unknown): body is Blob {
  return toStringCheck(body, 'Blob');
}

function isArrayBufferView(body: unknown): body is ArrayBufferView {
  return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(body);
}

function isReadableStream(body: unknown): body is ReadableStream {
  return typeof ReadableStream !== 'undefined' && body instanceof ReadableStream;
}

const _toString = Object.prototype.toString;

function toStringCheck(body: unknown, name: string): boolean {
  return _toString.call(body) === `[object ${name}]`;
}

/**
 * Appends query parameters to a URL, handling string, object and array
 * values while skipping `null`/`undefined` entries. Existing query strings
 * are preserved by merging via `URLSearchParams`.
 *
 * @param {string} url - The base URL.
 * @param {unknown} queryParams - The query parameters to append.
 * @returns {string} The URL with query parameters.
 */
function buildUrlWithQueryParams(url: string, queryParams: unknown): string {
  if (queryParams == null) {
    return url;
  }

  if (typeof queryParams === 'string') {
    if (!queryParams) {
      return url;
    }
    return url.includes('?') ? `${url}&${queryParams}` : `${url}?${queryParams}`;
  }

  if (typeof queryParams === 'object') {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(queryParams)) {
      if (value == null) {
        continue;
      }

      if (Array.isArray(value)) {
        for (const item of value) {
          params.append(key, String(item));
        }
      } else {
        params.append(key, String(value));
      }
    }

    const serialized = params.toString();

    if (serialized) {
      return url.includes('?') ? `${url}&${serialized}` : `${url}?${serialized}`;
    }
  }

  return url;
}
