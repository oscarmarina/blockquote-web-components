/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {html, css} from 'lit';
import {setDocumentStyles} from '../src/index.js';
import './document-element.js';
import './shared-element.js';

const setCss = css`
  .docu-element2 {
    background-color: blue;
  }
`;

const setCss2 = css`
  .docu-element3 {
    background-color: peru;
  }
`;

setDocumentStyles(setCss);
setDocumentStyles([setCss2]);

describe('BlockquoteBaseStyleHelpers', () => {
  describe('document styles', () => {
    /**
     * @type {import('./document-element').DocumentElement | null}
     */
    let el;
    /** @type {HTMLElement} */
    let fixtureNode;
    /** @type {HTMLElement | null} */
    let outerShared;

    beforeAll(async () => {
      fixtureNode = await fixture(html`
        <div>
          <document-element></document-element>
          <div class="docu-element2">d</div>
        </div>
      `);
      el = fixtureNode.querySelector('document-element');
      outerShared = fixtureNode.querySelector('.docu-element2');

      return () => {
        fixtureCleanup();
      };
    });

    it('`<document-element>` .docu-element1 has red background-color - component default styles', () => {
      const docuElement1 = el?.shadowRoot?.querySelector('.docu-element1');
      if (docuElement1) {
        expect(window.getComputedStyle(docuElement1).backgroundColor).toBe('rgb(255, 0, 0)');
      }
    });

    it('`<document-element>` .docu-element1 has pink background-color - document-level styles', () => {
      fixtureNode.style.cssText = '--docu-element1-bg: pink;';
      const docuElement1 = el?.shadowRoot?.querySelector('.docu-element1');
      if (docuElement1) {
        expect(window.getComputedStyle(docuElement1).backgroundColor).toBe('rgb(255, 192, 203)');
      }
    });

    it('`<document-element>` .docu-element2 has green background-color - component default styles', () => {
      const docuElement2 = el?.shadowRoot?.querySelector('.docu-element2');
      if (docuElement2) {
        expect(window.getComputedStyle(docuElement2).backgroundColor).toBe('rgb(0, 128, 0)');
      }
    });

    it('`<div class="docu-element2">` .docu-element2 has blue background-color - document-level styles', () => {
      if (!outerShared) {
        throw new Error('Expected outer shared element to exist');
      }
      expect(window.getComputedStyle(outerShared).backgroundColor).toBe('rgb(0, 0, 255)');
    });
  });

  describe('shared styles', () => {
    /**
     * @type {import('./shared-element').SharedElement}
     */
    let el;
    beforeAll(async () => {
      el = await fixture(html`
        <shared-element></shared-element>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    it('`<shared-element>` .shared1 has red background-color - component default styling', () => {
      const shared1 = el?.shadowRoot?.querySelector('.shared1');
      if (shared1) {
        expect(window.getComputedStyle(shared1).backgroundColor).toBe('rgb(255, 0, 0)');
      }
    });

    it('`<shared-element>` .shared2 has pink background-color - component shared styles', () => {
      const shared2 = el?.shadowRoot?.querySelector('.shared2');
      if (shared2) {
        expect(window.getComputedStyle(shared2).backgroundColor).toBe('rgb(255, 192, 203)');
      }
    });
  });
});
