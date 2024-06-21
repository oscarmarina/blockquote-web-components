/* eslint-disable lit-a11y/no-autofocus */
/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, expect, fixtureCleanup, aTimeout } from '@open-wc/testing';
import sinon from 'sinon';
import '../define/blockquote-dialog.js';

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

suite('BlockquoteDialog', () => {
  /**
   * @type {import('../src/index').BlockquoteDialog}
   */
  let el;

  teardown(() => fixtureCleanup());

  suite('Default Close', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-dialog>${_formTpl}</blockquote-dialog>
      `);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes: ['id', 'name'] });
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot({ ignoreAttributes: ['id', 'name'] });
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });

    suite('Method and Property', () => {
      test('Method and Property Close', async () => {
        el.close();
        await el.updateComplete;
        assert.isNotTrue(el?.hasAttribute('open'));
      });
    });
  });

  suite('Default Close with "label"', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-dialog label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes: ['id', 'name'] });
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot({ ignoreAttributes: ['id', 'name'] });
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });

    suite('Method and Property', () => {
      test('Method and Property Close', async () => {
        el.close();
        await el.updateComplete;
        assert.isNotTrue(el?.hasAttribute('open'));
      });
    });
  });

  suite('Default Close role dialog', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-dialog type="">${_formTpl}</blockquote-dialog>
      `);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes: ['id', 'name'] });
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot({ ignoreAttributes: ['id', 'name'] });
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });

    suite('Method and Property', () => {
      test('Method and Property Close', async () => {
        el.close();
        await el.updateComplete;
        assert.isNotTrue(el?.hasAttribute('open'));
      });
    });
  });

  suite('Default Open', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-dialog labelledby="labelledby" open>
          ${_formTpl}
          <span slot="labelledby">All fields are required</span>
        </blockquote-dialog>
      `);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes: ['id', 'name'] });
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot({ ignoreAttributes: ['id', 'name'] });
      });

      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });

    suite('Method and Property', () => {
      test('Method and Property Open', async () => {
        el.show();
        await el.updateComplete;
        assert.isTrue(el?.hasAttribute('open'));
      });
    });
  });

  suite('Event', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-dialog open label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);
    });

    test('Dialog should close when "Click" in backdrop', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      dialog?.click();
      await el.updateComplete;
      assert.isNotTrue(el?.hasAttribute('open'));
    });

    test('Dialog should not close when clicking inside the content', async () => {
      const content = el.shadowRoot?.querySelector('.content');
      /** @type {HTMLElement} */ (content)?.click();
      await el.updateComplete;
      assert.isTrue(el?.hasAttribute('open'));
    });

    test('The "cancel" event should close the dialog if the target is the same', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      const event = new Event('cancel');
      dialog?.dispatchEvent(event);
      await el.updateComplete;
      assert.isNotTrue(el?.hasAttribute('open'));
    });

    test('The "cancel" event should not close the dialog if the target is different from the dialog itself', async () => {
      const content = el.shadowRoot?.querySelector('.content');
      const event = new Event('cancel', { bubbles: true });
      content?.dispatchEvent(event);
      await el.updateComplete;
      assert.isTrue(el?.hasAttribute('open'));
    });

    test('The "close" event should close the dialog', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog');
      const event = new Event('close');
      dialog?.dispatchEvent(event);
      await el.updateComplete;
      assert.isNotTrue(el?.hasAttribute('open'));
    });

    test('The "close" set returnValue', async () => {
      const button = el?.querySelector('button');
      button?.click();
      await el.updateComplete;
      await aTimeout(200);
      const { returnValue } = el;
      assert.equal(returnValue.tagName, 'BUTTON');
    });
  });

  suite('Form - with method', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-dialog label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);
    });

    test('The dialog should close when the form has the dialog method', async () => {
      const button = el?.querySelector('button');
      button?.click();
      await el.updateComplete;
      assert.isNotTrue(el?.hasAttribute('open'));
    });
  });

  suite('Form - without method', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-dialog open label="aria-label Name">${_formNoDialogTpl}</blockquote-dialog>
      `);
    });

    test('Dialog does not should close when "Form Submit"', async () => {
      const button = el?.querySelector('button');
      const form = el?.querySelector('form');
      form?.addEventListener('submit', ev => ev.preventDefault());
      button?.click();
      await el.updateComplete;
      assert.isTrue(el?.hasAttribute('open'));
    });
  });

  suite('focus', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-dialog label="aria-label Name">${_formTpl}</blockquote-dialog>
      `);
    });

    test('focus on first focus trap sets focus to last element', async () => {
      el.open = true;
      await el.updateComplete;
      const lastButton = el.querySelector('#confirm');
      const spy = sinon.spy(/** @type {HTMLButtonElement} */ (lastButton), 'focus');
      assert.isTrue(spy.notCalled);
      await el.updateComplete;
      const firstFocusTrap = el.shadowRoot?.querySelector('dialog > span:first-of-type');
      /** @type {HTMLElement} */ (firstFocusTrap)?.focus();
      assert.isTrue(spy.called);
    });

    test('focus on first focus trap sets focus to first element when relatedTarget is undefined', async () => {
      el.open = true;
      await el.updateComplete;
      const firstButton = el.querySelector('#cancel');
      const spy = sinon.spy(/** @type {HTMLButtonElement} */ (firstButton), 'focus');
      assert.isTrue(spy.notCalled);
      await el.updateComplete;
      const firstFocusTrap = el.shadowRoot?.querySelector('dialog > span:first-of-type');
      /** @type {HTMLElement} */ (firstFocusTrap)?.dispatchEvent(
        new FocusEvent('focus', { relatedTarget: null }),
      );
      assert.isTrue(spy.called);
    });

    test('focus on last focus trap sets focus to first element', async () => {
      el.open = true;
      await el.updateComplete;
      const firstButton = el.querySelector('#cancel');
      const spy = sinon.spy(/** @type {HTMLButtonElement} */ (firstButton), 'focus');
      assert.isTrue(spy.notCalled);
      await el.updateComplete;
      const lastFocusTrap = el.shadowRoot?.querySelector('dialog > span:last-of-type');
      /** @type {HTMLElement} */ (lastFocusTrap)?.focus();
      assert.isTrue(spy.called);
    });

    test('focus on last focus trap sets focus to last element when relatedTarget is undefined', async () => {
      el.open = true;
      await el.updateComplete;
      const lastButton = el.querySelector('#confirm');
      const spy = sinon.spy(/** @type {HTMLButtonElement} */ (lastButton), 'focus');
      assert.isTrue(spy.notCalled);
      await el.updateComplete;
      const firstFocusTrap = el.shadowRoot?.querySelector('dialog > span:last-of-type');
      /** @type {HTMLElement} */ (firstFocusTrap)?.dispatchEvent(
        new FocusEvent('focus', { relatedTarget: null }),
      );
      assert.isTrue(spy.called);
    });

    test('autofocus', async () => {
      /**
       * @type {import('../src/index').BlockquoteDialog}
       */
      const elAutofocus = await fixture(html`
        <blockquote-dialog label="aria-label Name">${_formAutofocusTpl}</blockquote-dialog>
      `);

      elAutofocus.open = true;
      await elAutofocus.updateComplete;
      assert.isTrue(document.activeElement?.tagName === 'INPUT');
    });
  });
});
