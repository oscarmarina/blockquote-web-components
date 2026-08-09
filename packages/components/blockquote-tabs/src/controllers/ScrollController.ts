import type {ReactiveController, ReactiveControllerHost} from 'lit';
import {ResizeController} from '@lit-labs/observers/resize-controller.js';

interface ScrollControllerOptions {
  getScrollContent: () => HTMLElement | undefined;
  getIndicators: () => NodeListOf<Element> | HTMLElement[] | undefined;
  getSelectedTab: () => HTMLElement | undefined;
  getOrientation?: () => 'horizontal' | 'vertical';
}

export class ScrollController {
  #observeScrollBehavior = false;

  host: ReactiveControllerHost & HTMLElement;

  getScrollContent: () => HTMLElement | undefined;

  getIndicators: () => NodeListOf<Element> | HTMLElement[] | undefined;

  getSelectedTab: () => HTMLElement | undefined;

  getOrientation: () => 'horizontal' | 'vertical';

  hasScrollLeftIndicator = false;

  hasScrollRightIndicator = false;

  constructor(
    host: ReactiveControllerHost & HTMLElement,
    {getScrollContent, getIndicators, getSelectedTab, getOrientation}: ScrollControllerOptions
  ) {
    this.host = host;
    this.getScrollContent = getScrollContent;
    this.getIndicators = getIndicators;
    this.getSelectedTab = getSelectedTab;
    this.getOrientation =
      getOrientation ??
      (() =>
        (host as {orientation?: string}).orientation === 'vertical' ? 'vertical' : 'horizontal');

    this.hasScrollLeftIndicator = false;
    this.hasScrollRightIndicator = false;

    new ResizeController(host, {
      callback: () => this.onResizeChange(),
      skipInitial: true,
    });

    host.addController(this as ReactiveController);
  }

  /**
   * Updates scroll edge indicators.
   */
  scrollEdge(target: HTMLElement | undefined = this.getScrollContent()) {
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
   */
  scrollIntoView(tab: HTMLElement | undefined = this.getSelectedTab()) {
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
   */
  scrollIntoViewWithOffset(
    tabScroller: HTMLElement | undefined = this.getSelectedTab(),
    behavior: ScrollBehavior = this.#observeScrollBehavior ? 'smooth' : 'auto'
  ) {
    const scrollContentNode = this.getScrollContent();
    if (!scrollContentNode || !tabScroller) {
      return;
    }

    const isVertical = this.getOrientation() === 'vertical';
    const indicators = this.getIndicators();
    const indicator = indicators?.[0];
    let indicatorSize = 0;
    if (indicator) {
      const style = getComputedStyle(indicator);
      indicatorSize = isVertical ? parseFloat(style.blockSize) : parseFloat(style.inlineSize);
    }

    if (isVertical) {
      const tabTop = tabScroller.offsetTop;
      const tabBottom = tabTop + tabScroller.offsetHeight;
      const scrollTop = scrollContentNode.scrollTop;
      const scrollBottom = scrollTop + scrollContentNode.clientHeight;

      if (tabBottom > scrollBottom) {
        // Tab overflows bottom: scroll down to reveal bottom edge with indicator offset
        scrollContentNode.scroll({
          top: tabBottom - scrollContentNode.clientHeight + indicatorSize,
          behavior,
        });
      } else if (tabTop < scrollTop) {
        // Tab overflows top: scroll up to reveal top edge with indicator offset
        scrollContentNode.scroll({
          top: tabTop - indicatorSize,
          behavior,
        });
      }
    } else {
      const tabLeft = tabScroller.offsetLeft;
      const tabRight = tabLeft + tabScroller.offsetWidth;
      const scrollLeft = scrollContentNode.scrollLeft;
      const scrollRight = scrollLeft + scrollContentNode.clientWidth;

      if (tabRight > scrollRight) {
        // Tab overflows right: scroll right to reveal right edge with indicator offset
        scrollContentNode.scroll({
          left: tabRight - scrollContentNode.clientWidth + indicatorSize,
          behavior,
        });
      } else if (tabLeft < scrollLeft) {
        // Tab overflows left: scroll left to reveal left edge with indicator offset
        scrollContentNode.scroll({
          left: tabLeft - indicatorSize,
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
