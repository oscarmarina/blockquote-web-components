/* eslint-disable import/no-extraneous-dependencies */
import { assert, aTimeout } from '@open-wc/testing';
import sinon from 'sinon';
import { AjaxProvider } from '../index.js';

suite('AjaxProvider', () => {
  const responseHeaders = {
    json: { 'Content-Type': 'application/json' },
    plain: { 'Content-Type': 'text/plain' },
  };
  let server;
  teardown(() => server.restore());

  suite('Default', () => {
    setup(() => {
      server = sinon.fakeServer.create();
      server.respondWith('GET', '/responds_get_with_json', [
        200,
        responseHeaders.json,
        '{"success": "true"}',
      ]);

      server.respondWith('GET', '/responds_get_with_other_json', [
        200,
        responseHeaders.json,
        '{"other":"true"}',
      ]);

      server.respondWith('GET', '/responds_to_get_with_text/and_with_path', [
        200,
        responseHeaders.plain,
        'Hello',
      ]);

      server.respondWith('POST', '/responds_to_post_with_json', [
        200,
        responseHeaders.json,
        '{"post_success":true}',
      ]);

      server.respondWith('GET', '/responds_to_get_with_502_error_json', [
        502,
        responseHeaders.json,
        '{"message":"an error has occurred"}',
      ]);
    });

    test('Does not send request if `url` is not a string', async () => {
      /**
       * @type {import('../index').AjaxProvider}
       */
      const el = new AjaxProvider({
        url: undefined,
        responseType: 'text',
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      el.generateRequest().catch(error => {
        assert.include(error.message, 'required');
      });
      server.respond();
    });

    test('Does not send request if `path` is not a string', async () => {
      const el = new AjaxProvider({
        url: '/responds_to_get_with_text',
        path: undefined,
        responseType: 'text',
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      el.generateRequest().catch(error => {
        assert.include(error.message, 'required');
      });
      server.respond();
    });

    test('Joins `url` and `path` to create the complete URL', async () => {
      const el = new AjaxProvider({
        url: '/responds_to_get_with_text',
        path: 'and_with_path',
        responseType: 'text',
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      el.generateRequest().then(result => {
        assert.equal(result.response, 'Hello');
      });
      server.respond();
    });

    test('The `ajaxpresend` event gets fired', async () => {
      const spy = sinon.spy();
      const el = new AjaxProvider({
        url: '/responds_get_with_json',
      });
      el.addEventListener('ajaxpresend', spy);
      el.generateRequest();
      assert.ok(spy.calledOnce);
    });

    test('The `ajaxprogress` event gets fired', async () => {
      const spy = sinon.spy();
      const el = new AjaxProvider({
        url: '/responds_get_with_json',
      });
      el.addEventListener('ajaxprogress', spy);
      el.generateRequest();
      server.respond();
      await aTimeout(16);
      assert.ok(spy.calledOnce);
    });

    test('The `ajaxresponse` event gets fired', async () => {
      const spy = sinon.spy();
      const el = new AjaxProvider({
        url: '/responds_get_with_json',
      });
      el.addEventListener('ajaxresponse', spy);
      el.generateRequest();
      server.respond();
      await aTimeout(16);
      assert.ok(spy.calledOnce);
    });

    test('The `ajaxresponseend` event gets fired', async () => {
      const spy = sinon.spy();
      const el = new AjaxProvider({
        url: '/responds_get_with_json',
      });
      el.addEventListener('ajaxresponseend', spy);
      el.generateRequest();
      server.respond();
      await aTimeout(16);
      assert.ok(spy.calledOnce);
    });

    test('Response like a promise', async () => {
      const spy = sinon.spy();
      const el = new AjaxProvider({
        url: '/responds_get_with_json',
      });

      el.generateRequest().then(spy);
      server.respond();
      await aTimeout(16);
      assert.ok(spy.calledOnce);
    });

    test('The `ajaxerror` event gets fired', async () => {
      const spy = sinon.spy();
      const el = new AjaxProvider({
        url: '/responds_to_get_with_502_error_json',
      });
      el.addEventListener('ajaxerror', spy);
      el.generateRequest().catch(async error => {
        const errorMessage = JSON.stringify({ message: 'an error has occurred' });
        await aTimeout(16);
        assert.ok(spy.calledOnce);
        assert.equal(JSON.stringify(error.response), errorMessage);
      });
      server.respond();
    });

    test('The `ajaxerrorend` event gets fired', async () => {
      const spy = sinon.spy();
      const el = new AjaxProvider({
        url: '/responds_to_get_with_502_error_json',
      });
      el.addEventListener('ajaxerrorend', spy);
      el.generateRequest().catch(async () => {
        await aTimeout(16);
        assert.ok(spy.calledOnce);
      });
      server.respond();
    });

    test('With includeDownloadProgress or includeUploadProgress, the ajaxprogress event can be triggered multiple times', async () => {
      const spy = sinon.spy();
      const el = new AjaxProvider({
        url: '/responds_to_post_with_json',
        method: 'POST',
        body: {
          rxjs: 'Body Hello World!',
        },
        includeDownloadProgress: true,
        includeUploadProgress: true,
      });
      el.addEventListener('ajaxprogress', spy);
      el.generateRequest();
      server.respond();
      await aTimeout(16);
      assert.isAbove(spy.callCount, 1);
    });

    test('Requests with a Form Data payload automatically remove the Content-Type header by default', async () => {
      const el = new AjaxProvider({
        url: '/responds_to_post_with_json',
        method: 'POST',
        body: new FormData(),
      });
      el.generateRequest();
      server.respond();
      await aTimeout(16);
      const removeContentType = 'content-type' in el.lastResponse.request.headers;
      assert.notOk(removeContentType);
    });

    test('Setting the avoidBoundary property to `true` does not remove the Content-Type header.', async () => {
      const el = new AjaxProvider({
        url: '/responds_to_post_with_json',
        method: 'POST',
        avoidBoundary: true,
        body: new FormData(),
      });
      el.generateRequest();
      server.respond();
      await aTimeout(16);
      const removeContentType = 'content-type' in el.lastResponse.request.headers;
      assert.ok(removeContentType);
    });

    test('Retrieves response/error from lastResponse or lastError', async () => {
      const successMessage = JSON.stringify({ success: 'true' });
      const otherMessage = JSON.stringify({ other: 'true' });
      const errorMessage = JSON.stringify({ message: 'an error has occurred' });

      const el = new AjaxProvider({
        url: '/responds_get_with_json',
      });
      el.generateRequest();
      server.respond();
      await aTimeout(16);

      assert.isUndefined(el.lastError?.response);

      el.url = '/responds_to_get_with_502_error_json';
      el.generateRequest().catch(() => {
        assert.equal(JSON.stringify(el.lastResponse.response), successMessage);
        assert.equal(JSON.stringify(el.lastError.response), errorMessage);
      });
      server.respond();
      await aTimeout(16);

      el.url = '/responds_get_with_other_json';
      el.generateRequest().then(() => {
        assert.equal(JSON.stringify(el.lastResponse.response), otherMessage);
        assert.equal(JSON.stringify(el.lastError.response), errorMessage);
      });
      server.respond();
    });
  });
});
