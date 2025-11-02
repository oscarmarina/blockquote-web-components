/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {contextMetaProvider} from '../src/index.js';
import {consumerContext} from './elements.js';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';

describe('BlockquoteControllerContextMeta', () => {
  /**
   * @type {import('./elements').ProviderEl}
   */
  let el;
  /** @type {string | null | undefined} */
  let elShadowRoot;

  describe('Default', () => {
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

    describe('Default value', () => {
      it('SHADOW DOM', async () => {
        expect(getDiffableHTML(elShadowRoot || '')).toMatchSnapshot('SHADOW DOM');
      });

      it('LIGHT DOM', async () => {
        expect(getDiffableHTML(el)).toMatchSnapshot('LIGHT DOM');
      });

      it('New value', async () => {
        el.setAttribute('data', 'bar');
        await el.updateComplete;
        expect(el.children[0]?.getAttribute('data')).toBe('bar');
        el.requestUpdate();
        expect(el.children[0]?.getAttribute('data')).toBe('bar');
      });
    });
  });

  describe('Thrown Error', () => {
    it('Error', async () => {
      try {
        await fixture(html`
          <div>
            ${contextMetaProvider('data', {
              context: consumerContext,
            })}
          </div>
        `);
        expect.fail('Expected an error to be thrown');
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
    });
  });
});
