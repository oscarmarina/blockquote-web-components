import { html, LitElement, nothing } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';
import { ResizeController } from '@lit-labs/observers/resize_controller.js';
import { BlockquoteMixinSlotContent } from '@blockquote-web-components/blockquote-mixin-slot-content';
import { styles } from './styles/blockquote-tabs-styles.css.js';

/* A minimal library which polyfills the ResizeObserver */
window.ResizeObserver || /* c8 ignore next */ (window.ResizeObserver = ResizeObserverPolyfill);

// https://gist.github.com/ebidel/2d2bb0cdec3f2a16cf519dbaa791ce1b
// https://darn.es/building-tabs-in-web-components/
// https://slides.com/daviddarnes/tabs-web-components
/**
![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

[ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

## Usage

```html
      <blockquote-tabs label="List of tabs">
        <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
        <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
        <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
        <blockquote-tab id="tab-4">Tab 4</blockquote-tab>
        <blockquote-tab id="tab-5">Tab 5</blockquote-tab>
        <blockquote-tab id="tab-6">Tab 6</blockquote-tab>
        <blockquote-tab id="tab-7">Tab 7</blockquote-tab>
        <blockquote-tab id="tab-8">Tab 8</blockquote-tab>
        <blockquote-tab id="tab-9">Tab 9</blockquote-tab>
        <blockquote-tab id="tab-10">Tab 10</blockquote-tab>
        <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
        <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
        <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
        <blockquote-tabpanel aria-labelledby="tab-4"><p>Panel 4</p></blockquote-tabpanel>
        <blockquote-tabpanel aria-labelledby="tab-5"><p>Panel 5</p></blockquote-tabpanel>
        <blockquote-tabpanel aria-labelledby="tab-6"><p>Panel 6</p></blockquote-tabpanel>
        <blockquote-tabpanel aria-labelledby="tab-7"><p>Panel 7</p></blockquote-tabpanel>
        <blockquote-tabpanel aria-labelledby="tab-8"><p>Panel 8</p></blockquote-tabpanel>
        <blockquote-tabpanel aria-labelledby="tab-9"><p>Panel 9</p></blockquote-tabpanel>
        <blockquote-tabpanel aria-labelledby="tab-10"><p>Panel 10</p></blockquote-tabpanel>
      </blockquote-tabs>
```

## Exports

  - BlockquoteTabs

@tagname blockquote-tabs
@element blockquote-tabs
*/
export class BlockquoteTabs extends BlockquoteMixinSlotContent(LitElement) {
  static get is() {
    return 'blockquote-tabs';
  }

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      /**
       * If present, the tab automatically have focus
       * @type {Boolean}
       */
      // eslint-disable-next-line lit/no-native-attributes
      autofocus: {
        type: Boolean,
      },

      /**
       * `aria-label` for tabs group
       * @type {String}
       */
      label: {
        type: String,
      },

      /**
       * The tab selected.
       * @type {Number}
       */
      selected: {
        type: Number,
        reflect: true,
      },

      _hasScrollLeftIndicator: {
        type: Boolean,
        state: true,
      },

      _hasScrollRightIndicator: {
        type: Boolean,
        state: true,
      },
    };
  }

  constructor() {
    super();

    /* initial state */
    this.autofocus = false;
    this.label = '';
    this.selected = 1;

    this._tabList = [];
    this._tabpanelList = [];
    this._selectTabLast = undefined;
    this._selectTabpanelLast = undefined;
    this._observedFocus = false;
    this._observeScrollBehavior = false;

    this._slotChangesCount = 0;
    this._slotNodesCount = undefined;

    this._scrollContentRef = createRef();
    this._onTabClick = this._onTabClick.bind(this);
    this._onTabKeyDown = this._onTabKeyDown.bind(this);

    this._resizeControllerObserver = new ResizeController(this, {
      callback: () => {
        this._onResizeObserverChange();
      },
      skipInitial: true,
    });
  }

  _selectedIsInRange(idx) {
    return idx >= 0 && idx <= this._getTabListLength ? idx : 0;
  }

  get _selectedTab() {
    return this._tabList[this._selectedIsInRange(this.selected - 1)];
  }

  get _selectedTabIndex() {
    return this._tabList.indexOf(this._selectedTab);
  }

  get _selectedTabIndexFromOne() {
    return this._selectedTabIndex + 1;
  }

  get _getTabListLength() {
    return this._tabList.length;
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.shadowRoot.addEventListener('slotchanges', this._onSlotChanges.bind(this));
  }

  firstUpdated(props) {
    super.firstUpdated && super.firstUpdated(props);
    const tabSlot = this.shadowRoot.querySelector('[name="tab"]');
    const tabpanelSlot = this.shadowRoot.querySelector('[name="tabpanel"]');

    this._slotNodesCount = this.shadowRoot.querySelectorAll('slot');
    this._tabList = tabSlot.assignedElements();
    this._tabpanelList = tabpanelSlot.assignedElements();
    this._indicators = this.shadowRoot.querySelectorAll('.indicator');
  }

  updated(props) {
    super.updated && super.updated(props);
    if (props.has('selected')) {
      this._selectTab();

      /**
       * Fired when selected changes
       * @event selectedchange
       */
      const event = new CustomEvent('selectedchange', {
        bubbles: true,
        detail: {
          selected: this._selectedTabIndexFromOne,
          tab: this._selectedTab,
          tabpanel: this._tabpanelList[this._selectedTabIndex],
        },
      });
      this.dispatchEvent(event);
    }
  }

  _onSlotChanges(ev) {
    ev.stopPropagation();
    ev.preventDefault();

    this._slotChangesCount += 1;

    const { detail } = ev;
    const assignedNodesList = detail.assignedNodesContent.assignedNodes;

    if (detail.assignedSlotContent.slotName === 'tab') {
      this._tabList = assignedNodesList;
    }
    if (detail.assignedSlotContent.slotName === 'tabpanel') {
      this._tabpanelList = assignedNodesList;
    }

    if (this._slotChangesCount > this._slotNodesCount.length) {
      this._requestPropertyUpdate('selected');
    }
  }

  get _scrollContentTpl() {
    return html` <div
      class="scroll-content"
      ${ref(this._scrollContentRef)}
      @scroll="${this._scrollEdge}"
    >
      ${this._tablistTpl}
    </div>`;
  }

  get _tablistTpl() {
    return html` <div role="tablist" aria-label="${this.label || nothing}">
      <slot @click="${this._onTabClick}" @keydown="${this._onTabKeyDown}" name="tab"></slot>
    </div>`;
  }

  get _separatorTpl() {
    return html`<span aria-hidden="true" class="separator"></span>`;
  }

  get _indicatorsTpl() {
    return html` <span
        aria-hidden="true"
        class="indicator ${this._hasScrollLeftIndicator ? 'show-indicator' : ''}"
      ></span>
      <span
        aria-hidden="true"
        class="indicator ${this._hasScrollRightIndicator ? 'show-indicator' : ''}"
      ></span>`;
  }

  get _holdTpl() {
    return html`<div class="hold">
      ${this._scrollContentTpl} ${this._separatorTpl} ${this._indicatorsTpl}
    </div>`;
  }

  get _tabpanelTpl() {
    return html` <div>
      <slot name="tabpanel"></slot>
    </div>`;
  }

  render() {
    return html` ${this._holdTpl} ${this._tabpanelTpl} `;
  }

  _scrollEdge({ target = this._scrollContentRef.value } = {}) {
    const { scrollLeft, scrollWidth, offsetWidth } = target;
    const overflowingWidth = scrollWidth - offsetWidth;
    this._hasScrollLeftIndicator = scrollLeft > 0;
    this._hasScrollRightIndicator = scrollLeft < overflowingWidth;
  }

  _onTabClick(ev) {
    const findSelectedTab = ev
      .composedPath()
      .find(tab => tab instanceof Element && tab.slot === 'tab');

    const findSelectedTabIdxFromOne = this._tabList.indexOf(findSelectedTab) + 1;

    if (this.selected === findSelectedTabIdxFromOne) {
      this._scrollIntoView();
    }

    this.selected = findSelectedTabIdxFromOne;
  }

  _onTabKeyDown(ev) {
    let idx = '';

    switch (ev.key) {
      case 'ArrowLeft':
        ev.preventDefault();
        idx = this._selectedTabIndexFromOne - 1;
        this.selected = idx <= 0 ? this._getTabListLength : idx;
        break;
      case 'ArrowRight':
        ev.preventDefault();
        idx = this._selectedTabIndexFromOne + 1;
        this.selected = idx > this._getTabListLength ? 1 : idx;
        break;
      case 'Home':
        ev.preventDefault();
        this.selected = 1;
        break;
      case 'End':
        ev.preventDefault();
        this.selected = this._getTabListLength;
        break;
      default:
        break;
    }
  }

  _selectTab() {
    const newSelectedTab = this._tabList[this._selectedTabIndex];
    const newSelectedTabPanel = this._tabpanelList[this._selectedTabIndex];
    if (this._selectTabLast) {
      this._selectTabLast.selected = false;
      this._selectTabPanelLast.selected = false;
    }
    this._selectTabLast = newSelectedTab;
    this._selectTabPanelLast = newSelectedTabPanel;
    newSelectedTab.selected = true;
    newSelectedTabPanel.selected = true;

    if (this.autofocus || this._observedFocus) {
      this._requestFocusUpdate();
    }
    this._observedFocus = true;
  }

  _moveFocusSelectedTab(selectedTab = this._selectedTab) {
    /* same focus behavior between browsers */
    window.setTimeout(() => {
      selectedTab.focus();
    }, 0);
  }

  async _requestFocusUpdate() {
    await this.updateComplete;
    this._moveFocusSelectedTab();
    this._scrollIntoView();
  }

  _scrollIntoView() {
    window.requestAnimationFrame(() => {
      this._scrollIntoViewWithOffset();
      this._observeScrollBehavior = true;
    });
  }

  _scrollIntoViewWithOffset(
    tabScroller = this._selectedTab,
    behavior = this._observeScrollBehavior ? 'smooth' : 'auto',
  ) {
    const [rootA, rootB] = this._indicators;
    const scrollContentNode = this._scrollContentRef.value;
    const { right: boundaryight } = scrollContentNode.getBoundingClientRect();
    const { offsetLeft: scrollerLeft } = tabScroller;
    const {
      left: tabScrollerXLeft,
      right: tabScrollerXRight,
      width: tabScrollerWidth,
    } = tabScroller.getBoundingClientRect();

    const { right: rootARight } = rootA.getBoundingClientRect();
    const { width: rootBWidth, left: rootBLeft } = rootB.getBoundingClientRect();

    if (tabScrollerXRight > rootBLeft || tabScrollerXLeft < rootARight) {
      const left =
        tabScrollerXRight > rootBLeft
          ? scrollerLeft - boundaryight + tabScrollerWidth + rootBWidth
          : scrollerLeft - rootARight;

      scrollContentNode.scroll({
        left,
        behavior,
      });
    }

    // tabScroller.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }

  _requestPropertyUpdate(prop) {
    const oldVal = this[prop];
    this[prop] = undefined;
    this[prop] = oldVal;
  }

  _onResizeObserverChange() {
    this._scrollIntoView();
    this._scrollEdge();
  }
}
