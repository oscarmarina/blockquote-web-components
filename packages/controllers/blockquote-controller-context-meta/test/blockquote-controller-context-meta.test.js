/* eslint-disable import/no-extraneous-dependencies */
import {suite, test, expect, beforeAll} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff';
import {html} from 'lit';
import './elements.js';
import './flow-element.js';

suite('BlockquoteControllerContextMeta', () => {
  /**
   * @type {import('./elements').ProviderEl}
   */
  let el;
  let elShadowRoot;

  suite('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <provider-el>
          <consumer-el></consumer-el>
        </provider-el>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });

      test('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el)).toMatchSnapshot('LIGHT DOM');
      });
    });
  });

  suite('Override ', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <provider-el data="specified from attribute">
          <consumer-el></consumer-el>
        </provider-el>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });

      test('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el)).toMatchSnapshot('LIGHT DOM');
      });
    });
  });

  suite('initOrGetContextProvider', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <flow-element></flow-element>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    suite('Semantic Dom', () => {
      test('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot)).toMatchSnapshot('SHADOW DOM');
      });

      test('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el)).toMatchSnapshot('LIGHT DOM');
      });
    });
  });
});
