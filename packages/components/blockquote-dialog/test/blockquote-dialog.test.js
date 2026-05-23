/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll, beforeEach, vi, chai} from 'vitest';
import {fixture, fixtureCleanup, aTimeout} from '@open-wc/testing-helpers';
import {chaiA11yAxe} from 'chai-a11y-axe';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';
import '../src/define/blockquote-dialog.js';

chai.use(chaiA11yAxe);

const _formTpl = html`
  <form method="dialog">
    <header>
      <h2>Dialog header</h2>
    </header>
    <div>Dialog content</div>
    <footer>
      <menu>
        <button id="cancel" value="cancel">Cancel</button>
        <button id="confirm" value="confirm">Confirm</button>
      </menu>
    </footer>
  </form>
`;

const _formNoDialogTpl = html`
  <form>
    <header>
      <h2>Dialog header</h2>
    </header>
    <div>Dialog content</div>
    <footer>
      <menu>
        <button value="cancel">Cancel</button>
        <button value="confirm">Confirm</button>
      </menu>
    </footer>
  </form>
`;

const _formAutofocusTpl = html`
  <form>
    <header>
      <h2>Dialog header</h2>
      <button value="lose">Close</button>
    </header>
    <div>Dialog content</div>
    <div><input autofocus type="text" name="name" /></div>
    <footer>
      <menu>
        <button value="confirm">Confirm</button>
      </menu>
    </footer>
  </form>
`;

describe('BlockquoteDialog', () => {
  /**
   * @type {import('../src/index').BlockquoteDialog}
   */
  let el;
  /** @type {string | null | undefined} */
  let elShadowRoot;

  describe('Default Close', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-dialog label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom and a11y', () => {
      it('SHADOW DOM - Structure test', async () => {
        if (elShadowRoot == null) {
          throw new Error('Expected shadow root HTML content for snapshot');
        }
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id', 'name']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      it('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id', 'name']})).toMatchSnapshot(
          'LIGHT DOM'
        );
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });
    });

    describe('Method and Property', () => {
      it('Method and Property Close', async () => {
        el.close();
        await el.updateComplete;
        expect(el?.hasAttribute('open')).toBe(false);
      });
    });
  });

  describe('Default Close with "label"', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-dialog label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom and a11y', () => {
      it('SHADOW DOM - Structure test', async () => {
        if (elShadowRoot == null) {
          throw new Error('Expected shadow root HTML content for snapshot');
        }
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id', 'name']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      it('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id', 'name']})).toMatchSnapshot(
          'LIGHT DOM'
        );
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });
    });

    describe('Method and Property', () => {
      it('Method and Property Close', async () => {
        el.close();
        await el.updateComplete;
        expect(el?.hasAttribute('open')).toBe(false);
      });
    });
  });

  describe('Default Close role dialog', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-dialog type="">${_formTpl}</blockquote-dialog>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom and a11y', () => {
      it('SHADOW DOM - Structure test', async () => {
        if (elShadowRoot == null) {
          throw new Error('Expected shadow root HTML content for snapshot');
        }
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id', 'name']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      it('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id', 'name']})).toMatchSnapshot(
          'LIGHT DOM'
        );
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });
    });

    describe('Method and Property', () => {
      it('Method and Property Close', async () => {
        el.close();
        await el.updateComplete;
        expect(el?.hasAttribute('open')).toBe(false);
      });
    });
  });

  describe('Default Open', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-dialog labelledby="labelledby" open>
          ${_formTpl}
          <span slot="labelledby">All fields are required</span>
        </blockquote-dialog>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom and a11y', () => {
      it('SHADOW DOM - Structure test', async () => {
        if (elShadowRoot == null) {
          throw new Error('Expected shadow root HTML content for snapshot');
        }
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id', 'name']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      it('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id', 'name']})).toMatchSnapshot(
          'LIGHT DOM'
        );
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });
    });

    describe('Method and Property', () => {
      it('Method and Property Open', async () => {
        el.show();
        await el.updateComplete;
        expect(el?.hasAttribute('open')).toBe(true);
      });
    });
  });

  describe('Event', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-dialog open label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    it('Dialog should close when "Click" in backdrop', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      dialog?.click();
      await el.updateComplete;
      expect(el?.hasAttribute('open')).toBe(false);
    });

    it('Dialog should not close when clicking inside the content', async () => {
      const content = el.shadowRoot?.querySelector('.content');
      /** @type {HTMLElement} */ (content)?.click();
      await el.updateComplete;
      expect(el?.hasAttribute('open')).toBe(true);
    });

    it('The "cancel" event should close the dialog if the target is the same', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      const event = new Event('cancel');
      dialog?.dispatchEvent(event);
      await el.updateComplete;
      expect(el?.hasAttribute('open')).toBe(false);
    });

    it('The "cancel" event should not close the dialog if the target is different from the dialog itself', async () => {
      const content = el.shadowRoot?.querySelector('.content');
      const event = new Event('cancel', {bubbles: true});
      content?.dispatchEvent(event);
      await el.updateComplete;
      expect(el?.hasAttribute('open')).toBe(true);
    });

    it('The "close" event should close the dialog', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      const event = new Event('close');
      dialog?.dispatchEvent(event);
      await el.updateComplete;
      expect(el?.hasAttribute('open')).toBe(false);
    });

    it('The "close" set returnValue', async () => {
      const button = el?.querySelector('button');
      button?.click();
      await el.updateComplete;
      await aTimeout(200);
      const {returnValue} = el;
      expect(returnValue.tagName).toBe('BUTTON');
    });
  });

  describe('Form - with method', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-dialog label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);
    });

    it('The dialog should close when the form has the dialog method', async () => {
      const button = el?.querySelector('button');
      button?.click();
      await el.updateComplete;
      expect(el?.hasAttribute('open')).toBe(false);
    });
  });

  describe('Form - without method', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-dialog open label="aria-label Name">${_formNoDialogTpl}</blockquote-dialog>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    it('Dialog does not should close when "Form Submit"', async () => {
      const button = el?.querySelector('button');
      const form = el?.querySelector('form');
      form?.addEventListener('submit', (ev) => ev.preventDefault());
      button?.click();
      await el.updateComplete;
      expect(el?.hasAttribute('open')).toBe(true);
    });
  });

  describe('Firefox/Safari fallback - is-closing exit animation', () => {
    beforeEach(async () => {
      vi.spyOn(CSS, 'supports').mockImplementation(
        /** @type {any} */ (
          (/** @type {string} */ prop, /** @type {string} */ val) => {
            if (prop === 'overlay' && val === 'auto') {
              return false;
            }
            return true;
          }
        )
      );

      el = await fixture(html`
        <blockquote-dialog open label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);

      return () => {
        vi.restoreAllMocks();
        fixtureCleanup();
      };
    });

    it('adds is-closing class to the dialog immediately on close()', () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      el.close();
      expect(dialog?.classList.contains('is-closing')).toBe(true);
    });

    it('dialog stays open until transitionend fires', () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      el.close();
      expect(dialog?.open).toBe(true);
    });

    it('calls dialog.close() after transitionend fires with opacity', async () => {
      const dialog = /** @type {HTMLDialogElement} */ (el.shadowRoot?.querySelector('dialog'));
      const closeSpy = vi.spyOn(dialog, 'close');

      el.close();
      expect(dialog?.classList.contains('is-closing')).toBe(true);

      // Simulate the transitionend event firing on the dialog for opacity property
      const event = new TransitionEvent('transitionend', {
        propertyName: 'opacity',
        bubbles: false,
      });
      Object.defineProperty(event, 'target', {value: dialog, enumerable: true});
      dialog?.dispatchEvent(event);

      await el.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Handler should have been called and removed the class
      expect(dialog?.classList.contains('is-closing')).toBe(false);
      expect(closeSpy).toHaveBeenCalled();
      closeSpy.mockRestore();
    });

    it('ignores transitionend for non-opacity property (transform)', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      el.close();

      dialog?.dispatchEvent(
        new TransitionEvent('transitionend', {propertyName: 'transform', bubbles: true})
      );

      await el.updateComplete;
      expect(dialog?.classList.contains('is-closing')).toBe(true);
      expect(dialog?.open).toBe(true);
    });

    it('ignores transitionend bubbling from a child element', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      const content = el.shadowRoot?.querySelector('.content');
      el.close();

      content?.dispatchEvent(
        new TransitionEvent('transitionend', {propertyName: 'opacity', bubbles: true})
      );

      await el.updateComplete;
      expect(dialog?.classList.contains('is-closing')).toBe(true);
      expect(dialog?.open).toBe(true);
    });
  });

  describe('focus', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-dialog label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    it('focus on first focus trap sets focus to last element', async () => {
      el.open = true;
      await el.updateComplete;
      const lastButton = el.querySelector('#confirm');
      expect(document.activeElement).not.toBe(lastButton);
      await el.updateComplete;
      const firstFocusTrap = el.shadowRoot?.querySelector('dialog > span:first-of-type');
      /** @type {HTMLElement} */ (firstFocusTrap)?.focus();
      expect(document.activeElement).toBe(lastButton);
    });

    it('focus on first focus trap sets focus to first element when relatedTarget is undefined', async () => {
      el.open = true;
      await el.updateComplete;
      const firstButton = el.querySelector('#cancel');
      const firstFocusTrap = el.shadowRoot?.querySelector('dialog > span:first-of-type');
      /** @type {HTMLElement} */ (firstFocusTrap)?.dispatchEvent(
        new FocusEvent('focus', {relatedTarget: null})
      );
      expect(document.activeElement).toBe(firstButton);
    });

    it('focus on last focus trap sets focus to first element', async () => {
      el.open = true;
      await el.updateComplete;
      const firstButton = el.querySelector('#cancel');
      const lastFocusTrap = el.shadowRoot?.querySelector('dialog > span:last-of-type');
      /** @type {HTMLElement} */ (lastFocusTrap)?.focus();
      expect(document.activeElement).toBe(firstButton);
    });

    it('focus on last focus trap sets focus to last element when relatedTarget is undefined', async () => {
      el.open = true;
      await el.updateComplete;
      const lastButton = el.querySelector('#confirm');
      expect(document.activeElement).not.toBe(lastButton);
      await el.updateComplete;
      const firstFocusTrap = el.shadowRoot?.querySelector('dialog > span:last-of-type');
      /** @type {HTMLElement} */ (firstFocusTrap)?.dispatchEvent(
        new FocusEvent('focus', {relatedTarget: null})
      );
      expect(document.activeElement).toBe(lastButton);
    });

    it('autofocus', async () => {
      /**
       * @type {import('../src/index').BlockquoteDialog}
       */
      const elAutofocus = await fixture(html`
        <blockquote-dialog label="aria-label Name">${_formAutofocusTpl}</blockquote-dialog>
      `);

      elAutofocus.open = true;
      await elAutofocus.updateComplete;
      expect(document.activeElement?.tagName).toBe('INPUT');
    });
  });
});
