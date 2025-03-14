/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, assert, expect, beforeAll} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing';
import {contextMetaProvider} from '../src/index.js';
import {consumerContext} from './elements.js';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff';
import {html} from 'lit';

suite('BlockquoteControllerContextMeta', () => {
  /**
   * @type {import('./elements').ProviderEl}
   */
  let el;
  let elShadowRoot;

  suite('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <provider-el data="foo">
          <consumer-el></consumer-el>
        </provider-el>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    suite('Default value', () => {
      test('SHADOW DOM', async () => {
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });

      test('LIGHT DOM', async () => {
        expect(getDiffableHTML(el)).toMatchSnapshot('LIGHT DOM');
      });

      test('New value', async () => {
        el.setAttribute('data', 'bar');
        await el.updateComplete;
        assert.isTrue(el.children[0]?.getAttribute('data') === 'bar');
      });
    });
  });

  suite('Thrown Error', () => {
    test('Error', async () => {
      try {
        await fixture(html`
          <div>
            ${contextMetaProvider('data', {
              context: consumerContext,
            })}
          </div>
        `);
        assert.fail('Expected an error to be thrown');
      } catch (err) {
        assert.instanceOf(err, Error);
      }
    });
  });
});
