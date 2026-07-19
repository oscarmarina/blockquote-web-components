import {ResizeController} from '@lit-labs/observers/resize-controller.js';

/** @typedef {import('lit').ReactiveControllerHost} ReactiveControllerHost */

export class ScrollController {
  #observeScrollBehavior = false;

  /**
   * @param {ReactiveControllerHost & HTMLElement} host
   * @param {Object} options
   * @param {() => HTMLElement | undefined} options.getScrollContent
   * @param {() => NodeListOf<Element> | HTMLElement[] | undefined} options.getIndicators
   * @param {() => HTMLElement | undefined} options.getSelectedTab
   * @param {() => 'horizontal' | 'vertical'} [options.getOrientation]
   */
  constructor(host, {getScrollContent, getIndicators, getSelectedTab, getOrientation}) {
    this.host = host;
    this.getScrollContent = getScrollContent;
    this.getIndicators = getIndicators;
    this.getSelectedTab = getSelectedTab;
    this.getOrientation =
      getOrientation ??
      (() => (/** @type {any} */ (host).orientation === 'vertical' ? 'vertical' : 'horizontal'));

    this.hasScrollLeftIndicator = false;
    this.hasScrollRightIndicator = false;

    new ResizeController(host, {
      callback: () => this.onResizeChange(),
      skipInitial: true,
    });

    host.addController(this);
  }

  /**
   * Updates scroll edge indicators.
   *
   * @param {HTMLElement} [target]
   */
  scrollEdge(target = this.getScrollContent()) {
    if (!target) {
      return;
    }
    const isVertical = this.getOrientation() === 'vertical';
    if (isVertical) {
      const {scrollTop, scrollHeight, offsetHeight} = target;
      const overflowingHeight = scrollHeight - offsetHeight;
      const top = scrollTop > 0;
      const bottom = scrollTop < overflowingHeight;

      if (this.hasScrollLeftIndicator !== top || this.hasScrollRightIndicator !== bottom) {
        this.hasScrollLeftIndicator = top;
        this.hasScrollRightIndicator = bottom;
        this.host.requestUpdate();
      }
    } else {
      const {scrollLeft, scrollWidth, offsetWidth} = target;
      const overflowingWidth = scrollWidth - offsetWidth;
      const left = scrollLeft > 0;
      const right = scrollLeft < overflowingWidth;

      if (this.hasScrollLeftIndicator !== left || this.hasScrollRightIndicator !== right) {
        this.hasScrollLeftIndicator = left;
        this.hasScrollRightIndicator = right;
        this.host.requestUpdate();
      }
    }
  }

  /**
   * Schedules a reveal-into-view operation for the given tab item.
   *
   * @param {HTMLElement} [tab]
   */
  scrollIntoView(tab = this.getSelectedTab()) {
    if (!tab) {
      return;
    }
    window.requestAnimationFrame(() => {
      this.scrollIntoViewWithOffset(tab);
      this.#observeScrollBehavior = true;
    });
  }

  /**
   * Calculates offsets and scrolls the tab into view if overflowing.
   *
   * @param {HTMLElement} [tabScroller]
   * @param {ScrollBehavior} [behavior]
   */
  scrollIntoViewWithOffset(
    tabScroller = this.getSelectedTab(),
    behavior = this.#observeScrollBehavior ? 'smooth' : 'auto'
  ) {
    const scrollContentNode = this.getScrollContent();
    if (!scrollContentNode || !tabScroller) {
      return;
    }

    const isVertical = this.getOrientation() === 'vertical';

    if (isVertical) {
      const tabTop = tabScroller.offsetTop;
      const tabBottom = tabTop + tabScroller.offsetHeight;
      const scrollTop = scrollContentNode.scrollTop;
      const scrollBottom = scrollTop + scrollContentNode.clientHeight;

      if (tabBottom > scrollBottom) {
        // Tab overflows bottom: scroll down to reveal bottom edge
        scrollContentNode.scroll({
          top: tabBottom - scrollContentNode.clientHeight,
          // @ts-ignore
          behavior,
        });
      } else if (tabTop < scrollTop) {
        // Tab overflows top: scroll up to reveal top edge
        scrollContentNode.scroll({
          top: tabTop,
          // @ts-ignore
          behavior,
        });
      }
    } else {
      const tabLeft = tabScroller.offsetLeft;
      const tabRight = tabLeft + tabScroller.offsetWidth;
      const scrollLeft = scrollContentNode.scrollLeft;
      const scrollRight = scrollLeft + scrollContentNode.clientWidth;
      if (tabRight > scrollRight) {
        // Tab overflows right: scroll right to reveal right edge
        scrollContentNode.scroll({
          left: tabRight - scrollContentNode.clientWidth,
          // @ts-ignore
          behavior,
        });
      } else if (tabLeft < scrollLeft) {
        // Tab overflows left: scroll left to reveal left edge
        scrollContentNode.scroll({
          left: tabLeft,
          // @ts-ignore
          behavior,
        });
      }
    }
  }

  onResizeChange() {
    this.scrollIntoView();
    this.scrollEdge();
  }
}
