import {describe, it, expect, beforeEach, afterEach, chai, vi} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {chaiA11yAxe} from 'chai-a11y-axe';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html} from 'lit';
import {setFocusgroupOverride} from '../src/controllers/focusgroup-capability.js';
import type {BlockquoteTabs, BlockquoteTabPanel} from '../src/index.js';
import '../src/define/blockquote-tabs.js';

chai.use(chaiA11yAxe);

// Force fallback engine for all tests (test browser may have focusGroup behind flag)
beforeEach(() => {
  setFocusgroupOverride(false);
});

/**
 * Waits until the element has no more scheduled updates. Lit resolves
 * `updateComplete` to `false` when another update was scheduled during the
 * current one (e.g. the SelectionController write-back after clamping).
 */
const settle = async (element: BlockquoteTabs) => {
  let done = false;
  while (!done) {
    done = await element.updateComplete;
  }
};

const keydown = (target: HTMLElement | null, key: string) => {
  target?.dispatchEvent(new KeyboardEvent('keydown', {key, bubbles: true, cancelable: true}));
};

describe('BlockquoteTabs', () => {
  let el: BlockquoteTabs;
  let elShadowRoot: string | null | undefined;

  describe('Default', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-tabs>
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom and a11y', () => {
      it('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot || '', {ignoreAttributes: ['id']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      it('LIGHT DOM - Structure test', async () => {
        expect(
          getDiffableHTML(el, {ignoreAttributes: ['id', 'aria-controls', 'aria-labelledby']})
        ).toMatchSnapshot('LIGHT DOM');
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });

      it('Click on tab updates selected tab', async () => {
        expect(el.selected).toBe(1);
        const tab = el.querySelectorAll('[role="tab"]')[2];
        tab.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
        await el.updateComplete;
        expect(el.selected).toBe(3);
      });

      it('ArrowRight on tab updates selected tab', async () => {
        expect(el.selected).toBe(1);
        const tab = el.querySelector('[role="tab"]');
        tab?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowRight', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        expect(el.selected).toBe(2);
      });

      it('ArrowLeft on tab updates selected tab', async () => {
        expect(el.selected).toBe(1);
        const tab = el.querySelector('[role="tab"]');
        tab?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowLeft', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        expect(el.selected).toBe(3);
      });

      it('Home Key', async () => {
        expect(el.selected).toBe(1);
        const tabs = el.querySelectorAll('[role="tab"]');
        tabs[0]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowLeft', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        expect(el.selected).toBe(3);
        tabs[el.selected - 1]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'Home', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        expect(el.selected).toBe(1);
      });

      it('End Key', async () => {
        expect(el.selected).toBe(1);
        const tabs = el.querySelectorAll('[role="tab"]');
        tabs[el.selected - 1]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'End', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        expect(el.selected).toBe(3);
      });

      it('Default Key', async () => {
        expect(el.selected).toBe(1);
        const tabs = el.querySelectorAll('[role="tab"]');
        tabs[0]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowLeft', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        expect(el.selected).toBe(3);
        tabs[el.selected - 1]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'PageUp', bubbles: true, cancelable: true})
        );
        await el.updateComplete;
        expect(el.selected).toBe(3);
      });
    });

    describe('Characterization (Phase 0)', () => {
      it('selectedchange bubbles, is not composed, and carries selection detail', async () => {
        // Decisión de diseño deliberada: composed: false. El evento pertenece al
        // scope del componente; cada componente maneja únicamente su propio scope.
        const events: CustomEvent[] = [];
        el.addEventListener('selectedchange', (ev) => events.push(ev as CustomEvent));

        el.selected = 2;
        await el.updateComplete;

        expect(events.length).toBe(1);
        const [ev] = events;
        expect(ev.bubbles).toBe(true);
        expect(ev.composed).toBe(false);
        expect(ev.detail.selected).toBe(2);
        expect(ev.detail.tab).toBe(el.querySelectorAll<BlockquoteTabs>('blockquote-tab')[1]);
        expect(ev.detail.tabpanel).toBe(
          el.querySelectorAll<BlockquoteTabPanel>('blockquote-tabpanel')[1]
        );
      });

      it('deselects the previously selected tab and tabpanel on each commit', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
        const tabpanels = [...el.querySelectorAll<BlockquoteTabPanel>('blockquote-tabpanel')];

        el.selected = 2;
        await el.updateComplete;
        el.selected = 3;
        await el.updateComplete;
        await Promise.all([...tabs, ...tabpanels].map((node) => node.updateComplete));

        expect(tabs.map((tab) => tab.getAttribute('aria-selected'))).toEqual([null, null, 'true']);
        expect(tabs.map((tab) => tab.getAttribute('tabindex'))).toEqual(['-1', '-1', '0']);
        expect(tabpanels.map((panel) => panel.getAttribute('aria-hidden'))).toEqual([
          'true',
          'true',
          null,
        ]);
      });

      it('RTL: arrow keys use logical direction', async () => {
        // Phase 2: the RovingTabindexEngine resolves arrows in logical
        // direction. In RTL, ArrowLeft moves FORWARD and ArrowRight BACKWARD.
        el.setAttribute('dir', 'rtl');
        const tabs = [...el.querySelectorAll('[role="tab"]')];

        tabs[0]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowLeft', bubbles: true, cancelable: true})
        );
        await settle(el);
        expect(el.selected).toBe(2); // ArrowLeft moves forward in RTL

        el.selected = 1;
        await settle(el);

        tabs[0]?.dispatchEvent(
          new KeyboardEvent('keydown', {key: 'ArrowRight', bubbles: true, cancelable: true})
        );
        await settle(el);
        expect(el.selected).toBe(3); // ArrowRight moves backward (wraps) in RTL
      });

      it('programmatic selected change does not steal focus (commit never focuses)', async () => {
        // Phase 2: focus is only placed inside user-interaction handlers; the
        // commit pipeline never moves focus (the _observedFocus latch is gone).
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

        el.selected = 3;
        await settle(el);
        await new Promise((resolve) => {
          window.setTimeout(resolve, 30);
        });

        expect(document.activeElement).not.toBe(tabs[2]);
      });
    });
  });

  describe('Autofocus', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-tabs autofocus>
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;
      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom and a11y', () => {
      it('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot || '', {ignoreAttributes: ['id']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      it('LIGHT DOM - Structure test', async () => {
        expect(
          getDiffableHTML(el, {ignoreAttributes: ['id', 'aria-controls', 'aria-labelledby']})
        ).toMatchSnapshot('LIGHT DOM');
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });

      it('property (deprecated): focuses the selected tab on boot', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
        await new Promise((resolve) => {
          window.requestAnimationFrame(() => window.setTimeout(resolve, 0));
        });

        expect(document.activeElement).toBe(tabs[0]);
        expect(el.selected).toBe(1);
      });
    });
  });

  describe('Tab-level autofocus attribute (JS-delegated)', () => {
    // Native global autofocus is unreliable today: Chromium ignores it on
    // generic elements and no engine honors it for dynamically inserted
    // elements. The component delegates the attribute in JS instead.
    // Isolated describe: any other autofocus fixture would race for focus.
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-tabs>
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2" autofocus>Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('focuses the tab with autofocus on boot, and selection follows (auto)', async () => {
      const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
      await settle(el);
      await new Promise((resolve) => {
        window.setTimeout(resolve, 50);
      });

      expect(document.activeElement).toBe(tabs[1]);
      expect(el.selected).toBe(2); // focusin -> auto activation commit
      expect(tabs[1].getAttribute('aria-selected')).toBe('true');
      expect(tabs[1].getAttribute('tabindex')).toBe('0'); // entry point moved
    });
  });

  describe('Selected', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-tabs selected="2">
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;
      return () => {
        fixtureCleanup();
      };
    });

    describe('Semantic Dom and a11y', () => {
      it('SHADOW DOM - Structure test', async () => {
        expect(getDiffableHTML(elShadowRoot || '', {ignoreAttributes: ['id']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      it('LIGHT DOM - Structure test', async () => {
        expect(
          getDiffableHTML(el, {ignoreAttributes: ['id', 'aria-controls', 'aria-labelledby']})
        ).toMatchSnapshot('LIGHT DOM');
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });
    });
  });

  describe('Selection (Phase 1)', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <blockquote-tabs>
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('clamps an out-of-range selected and corrects the reflected value', async () => {
      const events: CustomEvent[] = [];
      el.addEventListener('selectedchange', (ev) => events.push(ev as CustomEvent));

      el.selected = 4; // tab count + 1 (previously threw in _selectTab)
      await settle(el);

      expect(el.selected).toBe(3);
      expect(el.getAttribute('selected')).toBe('3');

      const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
      await Promise.all(tabs.map((tab) => tab.updateComplete));
      expect(tabs[2].getAttribute('aria-selected')).toBe('true');

      expect(events.length).toBe(1);
      expect(events[0].detail.selected).toBe(3);
      expect(events[0].detail.tab).toBe(tabs[2]);
    });

    it('clamps selected below the range to the first tab', async () => {
      el.selected = 0;
      await settle(el);

      expect(el.selected).toBe(1);
      expect(el.getAttribute('selected')).toBe('1');
    });

    it('wires aria-controls and aria-labelledby bidirectionally, respecting author values', async () => {
      const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
      const tabpanels = [...el.querySelectorAll<BlockquoteTabPanel>('blockquote-tabpanel')];

      tabs.forEach((tab, i) => {
        const tabpanel = tabpanels[i];
        expect(tabpanel.id).not.toBe(''); // generated when missing
        expect(tab.getAttribute('aria-controls')).toBe(tabpanel.id);
        // author-supplied ids and aria-labelledby are preserved
        expect(tab.id).toBe(`tab-${i + 1}`);
        expect(tabpanel.getAttribute('aria-labelledby')).toBe(tab.id);
      });
    });

    it('generates ids for tabs and tabpanels when missing', async () => {
      const bare = await fixture(html`
        <blockquote-tabs>
          <blockquote-tab>Tab 1</blockquote-tab>
          <blockquote-tabpanel><p>Panel 1</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      const [tab] = bare.querySelectorAll<BlockquoteTabs>('blockquote-tab');
      const [tabpanel] = bare.querySelectorAll<BlockquoteTabPanel>('blockquote-tabpanel');

      expect(tab.id).not.toBe('');
      expect(tabpanel.id).not.toBe('');
      expect(tab.getAttribute('aria-controls')).toBe(tabpanel.id);
      expect(tabpanel.getAttribute('aria-labelledby')).toBe(tab.id);

      fixtureCleanup();
    });

    it('re-syncs wiring and selection when tabs are added dynamically', async () => {
      const events: CustomEvent[] = [];
      el.addEventListener('selectedchange', (ev) => events.push(ev as CustomEvent));

      const tab = document.createElement('blockquote-tab');
      tab.textContent = 'Tab 4';
      const tabpanel = document.createElement('blockquote-tabpanel');
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Panel 4';
      tabpanel.appendChild(paragraph);
      el.append(tab, tabpanel);

      await new Promise((resolve) => {
        window.setTimeout(resolve, 30);
      });
      await settle(el);

      const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
      const tabpanels = [...el.querySelectorAll<BlockquoteTabPanel>('blockquote-tabpanel')];
      expect(tabs.length).toBe(4);
      expect(tabs[3].getAttribute('aria-controls')).toBe(tabpanels[3].id);
      expect(tabpanels[3].getAttribute('aria-labelledby')).toBe(tabs[3].id);
      expect(el.selected).toBe(1);
      expect(events.length).toBe(0); // selection unchanged: no commit, no event
    });

    it('clamps the selection when the selected tab is removed', async () => {
      el.selected = 3;
      await settle(el);

      const events: CustomEvent[] = [];
      el.addEventListener('selectedchange', (ev) => events.push(ev as CustomEvent));

      el.querySelectorAll<BlockquoteTabs>('blockquote-tab')[2].remove();
      el.querySelectorAll<BlockquoteTabPanel>('blockquote-tabpanel')[2].remove();

      await new Promise((resolve) => {
        window.setTimeout(resolve, 30);
      });
      await settle(el);

      expect(el.selected).toBe(2);
      expect(el.getAttribute('selected')).toBe('2');
      expect(events.length).toBe(1);
      expect(events[0].detail.selected).toBe(2);
      expect(events[0].detail.tab).toBe(el.querySelectorAll<BlockquoteTabs>('blockquote-tab')[1]);
    });

    it('warns when an author-supplied ARIA half does not close the pair', async () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

      const broken = await fixture(html`
        <blockquote-tabs>
          <blockquote-tab id="tab-1" aria-controls="panel-x">Tab 1</blockquote-tab>
          <blockquote-tabpanel><p>Panel 1</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      const [tab] = broken.querySelectorAll<BlockquoteTabs>('blockquote-tab');
      const [tabpanel] = broken.querySelectorAll<BlockquoteTabPanel>('blockquote-tabpanel');

      // Author values are respected verbatim (no coercion)...
      expect(tab.getAttribute('aria-controls')).toBe('panel-x');
      expect(tabpanel.getAttribute('aria-labelledby')).toBe(tab.id);
      // ...but the dangling idref is surfaced: exactly one warning, naming it.
      expect(warn).toHaveBeenCalledTimes(1);
      expect(String(warn.mock.calls[0]?.[0])).toContain('panel-x');

      warn.mockRestore();
      fixtureCleanup();
    });

    it('does not warn when author-supplied ARIA halves close the pair', async () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

      await fixture(html`
        <blockquote-tabs>
          <blockquote-tab id="tab-1" aria-controls="panel-1">Tab 1</blockquote-tab>
          <blockquote-tabpanel id="panel-1" aria-labelledby="tab-1">
            <p>Panel 1</p>
          </blockquote-tabpanel>
        </blockquote-tabs>
      `);

      expect(warn).not.toHaveBeenCalled();

      warn.mockRestore();
      fixtureCleanup();
    });
  });

  describe('FocusGroup (Phase 2)', () => {
    describe('Auto activation (default)', () => {
      beforeEach(async () => {
        el = await fixture(html`
          <blockquote-tabs>
            <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
            <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
            <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
            <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
            <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
            <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
          </blockquote-tabs>
        `);
        return () => {
          fixtureCleanup();
        };
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });

      it('arrow keys move DOM focus and selection follows focus', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

        keydown(tabs[0], 'ArrowRight');
        await settle(el);

        expect(document.activeElement).toBe(tabs[1]);
        expect(el.selected).toBe(2);
      });

      it('selection follows programmatic focus (native focusgroup parity)', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

        tabs[2].focus();
        await settle(el);

        expect(el.selected).toBe(3);
      });

      it('click focuses and selects the tab', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

        tabs[1].dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
        await settle(el);

        expect(document.activeElement).toBe(tabs[1]);
        expect(el.selected).toBe(2);
      });

      it('applies a dynamic orientation change to the arrow axis', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
        const tablist = el.shadowRoot?.querySelector<HTMLElement>('[role="tablist"]');

        el.orientation = 'vertical';
        await settle(el);
        expect(tablist?.getAttribute('aria-orientation')).toBe('vertical');

        keydown(tabs[0], 'ArrowDown');
        await settle(el);
        expect(el.selected).toBe(2);
        expect(document.activeElement).toBe(tabs[1]);

        keydown(tabs[1], 'ArrowRight'); // now cross-axis: not handled
        await settle(el);
        expect(el.selected).toBe(2);
      });
    });

    describe('Manual activation', () => {
      beforeEach(async () => {
        el = await fixture(html`
          <blockquote-tabs activation="manual">
            <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
            <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
            <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
            <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
            <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
            <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
          </blockquote-tabs>
        `);
        return () => {
          fixtureCleanup();
        };
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });

      it('arrows move focus without selecting; Enter commits', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
        const events: CustomEvent[] = [];
        el.addEventListener('selectedchange', (ev) => events.push(ev as CustomEvent));

        keydown(tabs[0], 'ArrowRight');
        await settle(el);

        expect(document.activeElement).toBe(tabs[1]);
        expect(el.selected).toBe(1); // focus and selection are decoupled
        expect(events.length).toBe(0);
        // the roving tab stop stays on the selected tab
        expect(tabs[0].getAttribute('tabindex')).toBe('0');
        expect(tabs[1].getAttribute('tabindex')).toBe('-1');

        keydown(tabs[1], 'Enter');
        await settle(el);

        expect(el.selected).toBe(2);
        expect(events.length).toBe(1);
        expect(events[0].detail.selected).toBe(2);
        // the entry point moves to the newly selected tab
        expect(tabs[0].getAttribute('tabindex')).toBe('-1');
        expect(tabs[1].getAttribute('tabindex')).toBe('0');
      });

      it('Space commits the focused tab', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

        tabs[2].focus();
        await settle(el);
        expect(el.selected).toBe(1); // focus alone does not select

        keydown(tabs[2], ' ');
        await settle(el);
        expect(el.selected).toBe(3);
      });

      it('focus alone never selects', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
        const events: CustomEvent[] = [];
        el.addEventListener('selectedchange', (ev) => events.push(ev as CustomEvent));

        tabs[1].focus();
        await settle(el);

        expect(document.activeElement).toBe(tabs[1]);
        expect(el.selected).toBe(1);
        expect(events.length).toBe(0);
      });
    });

    describe('Vertical orientation', () => {
      beforeEach(async () => {
        el = await fixture(html`
          <blockquote-tabs orientation="vertical">
            <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
            <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
            <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
            <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
            <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
            <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
          </blockquote-tabs>
        `);
        return () => {
          fixtureCleanup();
        };
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });

      it('exposes aria-orientation="vertical" on the tablist', () => {
        const tablist = el.shadowRoot?.querySelector<HTMLElement>('[role="tablist"]');
        expect(tablist?.getAttribute('aria-orientation')).toBe('vertical');
      });

      it('ArrowDown/ArrowUp navigate; horizontal keys stay free', async () => {
        const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

        keydown(tabs[0], 'ArrowDown');
        await settle(el);
        expect(el.selected).toBe(2);
        expect(document.activeElement).toBe(tabs[1]);

        keydown(tabs[1], 'ArrowUp');
        await settle(el);
        expect(el.selected).toBe(1);

        keydown(tabs[0], 'ArrowLeft'); // cross-axis: not handled
        await settle(el);
        expect(el.selected).toBe(1);
        expect(document.activeElement).toBe(tabs[0]);
      });
    });
  });

  describe('FocusGroup native engine (Phase 3)', () => {
    // The local browser matrix has no focusgroup support, so the native engine
    // is exercised by forcing the capability override. These tests verify OUR
    // half of the native contract: attribute bookkeeping, no JS key handling,
    // and engine-independent activation/selection semantics.
    beforeEach(async () => {
      setFocusgroupOverride(true);
      el = await fixture(html`
        <blockquote-tabs>
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    afterEach(() => {
      setFocusgroupOverride(undefined);
    });

    it('declares focusgroup="tablist nomemory" on the tablist', () => {
      const tablist = el.shadowRoot?.querySelector<HTMLElement>('[role="tablist"]');
      expect(tablist?.getAttribute('focusgroup')).toBe('tablist nomemory');
    });

    it('overrides the axis to block for vertical tablists', async () => {
      const vertical = await fixture(html`
        <blockquote-tabs orientation="vertical">
          <blockquote-tab>Tab 1</blockquote-tab>
          <blockquote-tabpanel><p>Panel 1</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      const tablist = vertical.shadowRoot?.querySelector<HTMLElement>('[role="tablist"]');
      expect(tablist?.getAttribute('focusgroup')).toBe('tablist block nomemory');
      fixtureCleanup();
    });

    it('re-syncs the focusgroup token on a dynamic orientation change', async () => {
      const tablist = el.shadowRoot?.querySelector<HTMLElement>('[role="tablist"]');
      expect(tablist?.getAttribute('focusgroup')).toBe('tablist nomemory');

      el.orientation = 'vertical';
      await settle(el);
      expect(tablist?.getAttribute('focusgroup')).toBe('tablist block nomemory');
      expect(tablist?.getAttribute('aria-orientation')).toBe('vertical');

      el.orientation = 'horizontal';
      await settle(el);
      expect(tablist?.getAttribute('focusgroup')).toBe('tablist nomemory');
    });

    it('marks the selected tab with focusgroupstart and moves it on commit', async () => {
      const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

      expect(tabs[0].hasAttribute('focusgroupstart')).toBe(true);
      expect(tabs[1].hasAttribute('focusgroupstart')).toBe(false);
      expect(tabs[2].hasAttribute('focusgroupstart')).toBe(false);

      el.selected = 2;
      await settle(el);

      expect(tabs[0].hasAttribute('focusgroupstart')).toBe(false);
      expect(tabs[1].hasAttribute('focusgroupstart')).toBe(true);
      expect(tabs[2].hasAttribute('focusgroupstart')).toBe(false);
    });

    it('does not manage tabindex (native guaranteed tab stop)', () => {
      const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
      tabs.forEach((tab) => {
        expect(tab.getAttribute('tabindex')).toBe('0');
      });
    });

    it('does not bind JS arrow-key handlers (all-or-nothing per group)', async () => {
      const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

      keydown(tabs[0], 'ArrowRight');
      await settle(el);

      // In a browser without native support nothing happens at all: no focus
      // move and no selection change. This proves the fallback key handling is
      // never active alongside the native engine (no double navigation).
      expect(document.activeElement).not.toBe(tabs[1]);
      expect(el.selected).toBe(1);
    });

    it('keeps engine-independent activation: Enter and click commit', async () => {
      const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

      keydown(tabs[1], 'Enter');
      await settle(el);
      expect(el.selected).toBe(2);

      tabs[2].dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
      await settle(el);
      expect(el.selected).toBe(3);
      expect(document.activeElement).toBe(tabs[2]);
      expect(tabs[2].hasAttribute('focusgroupstart')).toBe(true);
    });

    it('keeps selection-follows-focus in auto activation', async () => {
      const tabs = [...el.querySelectorAll<BlockquoteTabs>('blockquote-tab')];

      tabs[1].focus();
      await settle(el);

      expect(el.selected).toBe(2);
      expect(tabs[1].hasAttribute('focusgroupstart')).toBe(true);
    });
  });

  describe('Disabled Tabs', () => {
    let disabledEl: BlockquoteTabs;

    beforeEach(async () => {
      disabledEl = await fixture(html`
        <blockquote-tabs>
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2" disabled>Tab 2</blockquote-tab>
          <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('sets aria-disabled on disabled tab', () => {
      const tabs = [...disabledEl.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
      expect(tabs[1].getAttribute('aria-disabled')).toBe('true');
    });

    it('prevents selection of disabled tab on click', async () => {
      expect(disabledEl.selected).toBe(1);
      const tabs = [...disabledEl.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
      tabs[1].dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
      await settle(disabledEl);
      expect(disabledEl.selected).toBe(1);
    });

    it('prevents selection of disabled tab on activation keydown', async () => {
      expect(disabledEl.selected).toBe(1);
      const tabs = [...disabledEl.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
      keydown(tabs[1], 'Enter');
      await settle(disabledEl);
      expect(disabledEl.selected).toBe(1);
    });

    it('removes aria-disabled when disabled is removed', async () => {
      const tabs = [...disabledEl.querySelectorAll<BlockquoteTabs>('blockquote-tab')];
      expect(tabs[1].getAttribute('aria-disabled')).toBe('true');

      tabs[1].removeAttribute('disabled');
      await disabledEl.updateComplete;
      await Promise.all(tabs.map((tab) => tab.updateComplete));

      expect(tabs[1].hasAttribute('aria-disabled')).toBe(false);
    });
  });

  describe('Vertical Orientation Scroll', () => {
    let vertEl: BlockquoteTabs;

    beforeEach(async () => {
      vertEl = await fixture(html`
        <blockquote-tabs orientation="vertical">
          <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
          <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
          <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
          <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
        </blockquote-tabs>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('sets orientation attribute and updates focus group engine', async () => {
      expect(vertEl.getAttribute('orientation')).toBe('vertical');
      vertEl.orientation = 'horizontal';
      await settle(vertEl);
      expect(vertEl.orientation).toBe('horizontal');
    });
  });
});
