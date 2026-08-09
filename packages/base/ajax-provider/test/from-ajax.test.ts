import {describe, it, expect, beforeAll, vi} from 'vitest';
import {fakeServer} from 'nise';
import {
  fromXMLHttpRequest,
  lastValueFrom,
  AjaxResponse,
  AjaxTimeoutError,
} from '../src/fromAjax.js';

/**
 * @param {number | undefined} ms
 */
export function aTimeout(ms?: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

describe('fromXMLHttpRequest', () => {
  let server: import('nise').FakeServer;

  beforeAll(async () => {
    server = fakeServer.create();
    server.respondWith(
      (url: string) => url.startsWith('/query'),
      [200, {'Content-Type': 'application/json'}, '{"ok":true}']
    );
    server.respondWith('POST', '/stringify', [
      200,
      {'Content-Type': 'application/json'},
      '{"ok":true}',
    ]);

    return () => {
      server.restore();
    };
  });

  it('rejects with `url is required` when url is missing', async () => {
    await expect(lastValueFrom(fromXMLHttpRequest({url: ''}))).rejects.toThrow('url is required');
  });

  it('appends queryParams to the url', async () => {
    const spy = vi.fn();
    const request$ = fromXMLHttpRequest({
      url: '/query',
      queryParams: {per_page: '1'},
    });
    const promise = lastValueFrom(request$);
    server.respond();
    await promise.then(spy);
    await aTimeout(16);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('merges queryParams into an existing query string', async () => {
    const spy = vi.fn();
    const request$ = fromXMLHttpRequest({
      url: '/query/merge?per_page=1',
      queryParams: {page: '2'},
    });
    const promise = lastValueFrom(request$);
    const reqUrl = new Promise((resolve) => {
      request$.subscribe({
        next: () => undefined,
        error: () => undefined,
        complete: () => resolve(server.lastRequest?.url),
      });
    });
    server.respond();
    await promise.then(spy);
    await aTimeout(16);
    expect(await reqUrl).toBe('/query/merge?per_page=1&page=2');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('lowercases headers and adds x-requested-with', async () => {
    let requestHeaders!: Record<string, string>;
    server.respondWith(
      (url: string) => url.startsWith('/query/1'),
      [200, {'Content-Type': 'application/json'}, '{"ok":true}']
    );
    const request$ = fromXMLHttpRequest({
      url: '/query/1',
      queryParams: {per_page: '2'},
      headers: {'Content-Type': 'text/plain', 'X-Custom': 'value'},
    });
    const promise = lastValueFrom(request$);
    const req = server.lastRequest;
    await new Promise((resolve) => {
      request$.subscribe({
        next: () => undefined,
        error: (e) => resolve(e),
        complete: () => resolve(undefined),
      });
      requestHeaders = req?.requestHeaders;
      server.respond();
    });
    await promise.catch(() => undefined);
    expect(requestHeaders['x-custom']).toBe('value');
    expect(requestHeaders['x-requested-with']).toBe('XMLHttpRequest');
    expect(requestHeaders['content-type']).toBe('text/plain');
    expect(req?.url).toContain('per_page=2');
  });

  it('adds the XSRF header when xsrfCookieName and xsrfHeaderName are configured', () => {
    document.cookie = 'XSRF-TOKEN=abcd1234; path=/';
    server.respondWith('GET', '/query/2', [
      200,
      {'Content-Type': 'application/json'},
      '{"ok":true}',
    ]);
    const request$ = fromXMLHttpRequest({
      url: '/query/2',
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
    });
    request$.subscribe({
      next: () => undefined,
      error: () => undefined,
      complete: () => undefined,
    });
    const req = server.lastRequest;
    const requestHeaders = req?.requestHeaders;
    server.respond();
    expect(requestHeaders['X-XSRF-TOKEN']).toBe('abcd1234');
    document.cookie = 'XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  });

  it('serializes a plain object body and sets the content-type header', async () => {
    const request$ = fromXMLHttpRequest({
      url: '/stringify',
      method: 'POST',
      body: {rxjs: 'body'},
    });
    const promise = lastValueFrom(request$);
    server.respond();
    await promise;
  });

  it('emits via createXHR when provided', async () => {
    const spy = vi.fn();
    const fakeXhr = new XMLHttpRequest();
    const request$ = fromXMLHttpRequest({
      url: '/query',
      createXHR: () => fakeXhr,
    });
    const promise = lastValueFrom(request$);
    server.respond();
    await promise.then(spy);
    await aTimeout(16);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('rejects with an AjaxTimeoutError on timeout', async () => {
    vi.useFakeTimers();
    try {
      const request$ = fromXMLHttpRequest({
        url: '/never-responds',
        timeout: 1,
      });

      const promise = lastValueFrom(request$);
      await vi.advanceTimersByTimeAsync(1);
      await expect(promise).rejects.toBeInstanceOf(AjaxTimeoutError);
    } finally {
      vi.useRealTimers();
    }
  });

  it('rejects with an aborted AjaxError on abort', async () => {
    const request$ = fromXMLHttpRequest({url: '/never-responds'});
    const promise = lastValueFrom(request$);
    const req = server.lastRequest;
    (req as unknown as {abort: () => void})?.abort();
    await expect(promise).rejects.toMatchObject({name: 'AjaxError', message: 'aborted'});
  });

  it('rejects with an AjaxError on network error', async () => {
    const request$ = fromXMLHttpRequest({url: '/never-responds'});
    const promise = lastValueFrom(request$);
    const req = server.lastRequest;
    req?.error();
    await expect(promise).rejects.toMatchObject({
      name: 'AjaxError',
      message: 'ajax error',
    });
  });

  it('opens with user and password when provided', async () => {
    const spy = vi.fn();
    const request$ = fromXMLHttpRequest({
      url: '/query',
      user: 'user',
      password: 'pass',
    });
    const promise = lastValueFrom(request$);
    server.respond();
    await promise.then(spy);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('aborts the request on teardown while still loading', async () => {
    const controller = new AbortController();
    const request$ = fromXMLHttpRequest({url: '/never-responds'});
    request$.subscribe(
      {
        next: () => undefined,
        error: () => undefined,
        complete: () => undefined,
      },
      {signal: controller.signal}
    );
    const req = server.lastRequest;
    controller.abort();
    expect(req?.aborted).toBe(true);
  });

  it('serializes a string queryParams', async () => {
    const request$ = fromXMLHttpRequest({
      url: '/query',
      queryParams: 'per_page=1',
    });
    const promise = lastValueFrom(request$);
    const req = server.lastRequest;
    const xhrUrl = req?.url;
    server.respond();
    await promise;
    expect(xhrUrl).toBe('/query?per_page=1');
  });

  it('merges a string queryParams into an existing query string', async () => {
    const request$ = fromXMLHttpRequest({
      url: '/query/merge-string?per_page=1',
      queryParams: 'sort=asc',
    });
    const promise = lastValueFrom(request$);
    const req = server.lastRequest;
    const xhrUrl = req?.url;
    server.respond();
    await promise;
    expect(xhrUrl).toBe('/query/merge-string?per_page=1&sort=asc');
  });

  it('skips null values and serializes arrays in queryParams', async () => {
    const request$ = fromXMLHttpRequest({
      url: '/query',
      queryParams: {a: null, b: undefined, tags: ['x', 'y']},
    });
    const promise = lastValueFrom(request$);
    const req = server.lastRequest;
    const xhrUrl = req?.url;
    server.respond();
    await promise;
    expect(xhrUrl).toBe('/query?tags=x&tags=y');
  });

  it('leaves the url unchanged when queryParams object is empty', async () => {
    const request$ = fromXMLHttpRequest({
      url: '/query',
      queryParams: {a: null, b: undefined},
    });
    const promise = lastValueFrom(request$);
    const req = server.lastRequest;
    const xhrUrl = req?.url;
    server.respond();
    await promise;
    expect(xhrUrl).toBe('/query');
  });

  it('sends an ArrayBufferView body as its buffer', async () => {
    const request$ = fromXMLHttpRequest({
      url: '/stringify',
      method: 'POST',
      body: new Uint8Array([1, 2, 3]),
    });
    const promise = lastValueFrom(request$);
    server.respond();
    await expect(promise).resolves.toBeInstanceOf(AjaxResponse);
  });

  it('rejects with an unknown body type error', async () => {
    const request$ = fromXMLHttpRequest({
      url: '/stringify',
      method: 'POST',
      body: () => undefined,
    });
    await expect(lastValueFrom(request$)).rejects.toThrow('Unknown body type');
  });
});
