/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import { css } from 'lit';
import { setDocumentStyles } from '../index.js';
import './document-element.js';
import './shared-element.js';

setDocumentStyles(
  css`
    .docu-element2 {
      background-color: blue;
    }
  `,
);

suite('BlockquoteBaseStyleHelpers', () => {
  teardown(() => fixtureCleanup());
  suite('document styles', () => {
    let fixtureNode;
    let el;
    let outerShared;

    setup(async () => {
      fixtureNode = await fixture(html`
        <div>
          <document-element></document-element>
          <div class="docu-element2">d</div>
        </div>
      `);
      el = fixtureNode.querySelector('document-element');
      outerShared = fixtureNode.querySelector('.docu-element2');
      await el.updateComplete;
    });

    test('`<document-element>` .docu-element1 has red background-color - component default styles', () => {
      const docuElement1 = el.shadowRoot.querySelector('.docu-element1');
      assert.equal(window.getComputedStyle(docuElement1).backgroundColor, 'rgb(255, 0, 0)');
    });

    test('`<document-element>` .docu-element1 has pink background-color - document-level styles', () => {
      fixtureNode.style.cssText = '--docu-element1-bg: pink;';
      const docuElement1 = el.shadowRoot.querySelector('.docu-element1');
      assert.equal(window.getComputedStyle(docuElement1).backgroundColor, 'rgb(255, 192, 203)');
    });

    test('`<document-element>` .docu-element2 has green background-color - component default styles', () => {
      const docuElement2 = el.shadowRoot.querySelector('.docu-element2');
      assert.equal(window.getComputedStyle(docuElement2).backgroundColor, 'rgb(0, 128, 0)');
    });

    test('`<div class="docu-element2">` .docu-element2 has blue background-color - document-level styles', () => {
      assert.equal(window.getComputedStyle(outerShared).backgroundColor, 'rgb(0, 0, 255)');
    });
  });

  suite('shared styles', () => {
    let el;
    setup(async () => {
      el = await fixture(html` <shared-element></shared-element> `);
      await el.updateComplete;
    });

    test('`<shared-element>` .shared1 has red background-color - component default styling', () => {
      const shared1 = el.shadowRoot.querySelector('.shared1');
      assert.equal(window.getComputedStyle(shared1).backgroundColor, 'rgb(255, 0, 0)');
    });

    test('`<shared-element>` .shared2 has pink background-color - component shared styles', () => {
      const shared2 = el.shadowRoot.querySelector('.shared2');
      assert.equal(window.getComputedStyle(shared2).backgroundColor, 'rgb(255, 192, 203)');
    });
  });
});
