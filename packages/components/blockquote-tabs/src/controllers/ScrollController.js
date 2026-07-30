import {ResizeController} from '@lit-labs/observers/resize-controller.js';
import {describeInteractionElement} from './InteractionLogger.js';

/** @typedef {import('lit').ReactiveControllerHost} ReactiveControllerHost */

export class ScrollController {
  #observeScrollBehavior = false;

  #logger;

  /**
   * @param {ReactiveControllerHost & HTMLElement} host
   * @param {Object} options
   * @param {() => HTMLElement | undefined} options.getScrollContent
   * @param {() => NodeListOf<Element> | HTMLElement[] | undefined} options.getIndicators
   * @param {() => HTMLElement | undefined} options.getSelectedTab
   * @param {() => 'horizontal' | 'vertical'} [options.getOrientation]
   * @param {import('./InteractionLogger.js').InteractionLogger} options.logger
   */
  constructor(host, {getScrollContent, getIndicators, getSelectedTab, getOrientation, logger}) {
    this.host = host;
    this.getScrollContent = getScrollContent;
    this.getIndicators = getIndicators;
    this.getSelectedTab = getSelectedTab;
    this.getOrientation =
      getOrientation ??
      (() => (/** @type {any} */ (host).orientation === 'vertical' ? 'vertical' : 'horizontal'));
    this.#logger = logger;

    this.hasScrollLeftIndicator = false;
    this.hasScrollRightIndicator = false;

    new ResizeController(host, {
      callback: () => this.onResizeChange(),
      skipInitial: true,
    });

    host.addController(this);
    this.#logger.step(
      'CICLO',
      'ScrollController.constructor()',
      'ResizeController + ReactiveControllerHost.addController()',
      'ScrollController queda preparado para revelar el tab enfocado/seleccionado y mantener indicadores de borde.'
    );
  }

  /**
   * Updates scroll edge indicators.
   *
   * @param {HTMLElement} [target]
   */
  scrollEdge(target = this.getScrollContent()) {
    if (!target) {
      this.#logger.step(
        'DECISIÓN',
        'ScrollController.scrollEdge()',
        'return',
        'El contenedor de scroll aún no existe; no se calculan indicadores.'
      );
      return;
    }
    const isVertical = this.getOrientation() === 'vertical';
    if (isVertical) {
      const {scrollTop, scrollHeight, offsetHeight} = target;
      const overflowingHeight = scrollHeight - offsetHeight;
      const top = scrollTop > 0;
      const bottom = scrollTop < overflowingHeight;
      this.#logger.step(
        'SCROLL',
        'ScrollController.scrollEdge()',
        'cálculo vertical de indicadores',
        'Se compara scrollTop con el alto desbordado para decidir indicadores superior/inferior.',
        {
          scrollTop,
          scrollHeight,
          offsetHeight,
          overflowingHeight,
          indicadorSuperior: top,
          indicadorInferior: bottom,
        }
      );

      if (this.hasScrollLeftIndicator !== top || this.hasScrollRightIndicator !== bottom) {
        this.hasScrollLeftIndicator = top;
        this.hasScrollRightIndicator = bottom;
        this.host.requestUpdate();
        this.#logger.step(
          'SCROLL',
          'ScrollController.scrollEdge()',
          'ReactiveControllerHost.requestUpdate()',
          'Cambió algún indicador vertical; se agenda un render del host.'
        );
      }
    } else {
      const {scrollLeft, scrollWidth, offsetWidth} = target;
      const overflowingWidth = scrollWidth - offsetWidth;
      const left = scrollLeft > 0;
      const right = scrollLeft < overflowingWidth;
      this.#logger.step(
        'SCROLL',
        'ScrollController.scrollEdge()',
        'cálculo horizontal de indicadores',
        'Se compara scrollLeft con el ancho desbordado para decidir indicadores izquierdo/derecho.',
        {
          scrollLeft,
          scrollWidth,
          offsetWidth,
          overflowingWidth,
          indicadorIzquierdo: left,
          indicadorDerecho: right,
        }
      );

      if (this.hasScrollLeftIndicator !== left || this.hasScrollRightIndicator !== right) {
        this.hasScrollLeftIndicator = left;
        this.hasScrollRightIndicator = right;
        this.host.requestUpdate();
        this.#logger.step(
          'SCROLL',
          'ScrollController.scrollEdge()',
          'ReactiveControllerHost.requestUpdate()',
          'Cambió algún indicador horizontal; se agenda un render del host.'
        );
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
      this.#logger.step(
        'DECISIÓN',
        'ScrollController.scrollIntoView()',
        'return',
        'No existe un tab destino; no se agenda scroll.'
      );
      return;
    }
    this.#logger.step(
      'SCROLL',
      'ScrollController.scrollIntoView()',
      'window.requestAnimationFrame()',
      'El cálculo se aplaza hasta el siguiente frame para usar geometría ya renderizada.',
      {
        tabDestino: describeInteractionElement(tab),
        primerScroll: !this.#observeScrollBehavior,
      }
    );
    const story = this.#logger.capture();
    window.requestAnimationFrame(() => {
      this.#logger.withStory(story, () => {
        this.#logger.step(
          'SCROLL',
          'window.requestAnimationFrame()',
          'ScrollController.scrollIntoViewWithOffset()',
          'El frame ya dispone de offsets; se comprobará si el tab rebasa el viewport del scroller.'
        );
        this.scrollIntoViewWithOffset(tab);
        this.#observeScrollBehavior = true;
      });
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
      this.#logger.step(
        'DECISIÓN',
        'ScrollController.scrollIntoViewWithOffset()',
        'return',
        'Falta el scroller o el tab destino; no se puede calcular geometría.'
      );
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
      this.#logger.step(
        'SCROLL',
        'ScrollController.scrollIntoViewWithOffset()',
        'comparación geométrica vertical',
        'Se comparan bordes del tab y viewport, incluyendo el espacio reservado por el indicador.',
        {
          tabTop,
          tabBottom,
          scrollTop,
          scrollBottom,
          indicatorSize,
          behavior,
        }
      );

      if (tabBottom > scrollBottom) {
        // Tab overflows bottom: scroll down to reveal bottom edge with indicator offset
        scrollContentNode.scroll({
          top: tabBottom - scrollContentNode.clientHeight + indicatorSize,
          // @ts-ignore
          behavior,
        });
        this.#logger.step(
          'SCROLL',
          'ScrollController.scrollIntoViewWithOffset()',
          'HTMLElement.scroll()',
          'El tab rebasa el borde inferior: se desplaza hacia abajo hasta revelarlo.'
        );
      } else if (tabTop < scrollTop) {
        // Tab overflows top: scroll up to reveal top edge with indicator offset
        scrollContentNode.scroll({
          top: tabTop - indicatorSize,
          // @ts-ignore
          behavior,
        });
        this.#logger.step(
          'SCROLL',
          'ScrollController.scrollIntoViewWithOffset()',
          'HTMLElement.scroll()',
          'El tab rebasa el borde superior: se desplaza hacia arriba hasta revelarlo.'
        );
      } else {
        this.#logger.step(
          'DECISIÓN',
          'ScrollController.scrollIntoViewWithOffset()',
          'sin scroll',
          'El tab ya está completamente visible en el eje vertical.'
        );
      }
    } else {
      const tabLeft = tabScroller.offsetLeft;
      const tabRight = tabLeft + tabScroller.offsetWidth;
      const scrollLeft = scrollContentNode.scrollLeft;
      const scrollRight = scrollLeft + scrollContentNode.clientWidth;
      this.#logger.step(
        'SCROLL',
        'ScrollController.scrollIntoViewWithOffset()',
        'comparación geométrica horizontal',
        'Se comparan bordes del tab y viewport, incluyendo el espacio reservado por el indicador.',
        {
          tabLeft,
          tabRight,
          scrollLeft,
          scrollRight,
          indicatorSize,
          behavior,
        }
      );

      if (tabRight > scrollRight) {
        // Tab overflows right: scroll right to reveal right edge with indicator offset
        scrollContentNode.scroll({
          left: tabRight - scrollContentNode.clientWidth + indicatorSize,
          // @ts-ignore
          behavior,
        });
        this.#logger.step(
          'SCROLL',
          'ScrollController.scrollIntoViewWithOffset()',
          'HTMLElement.scroll()',
          'El tab rebasa el borde derecho: se desplaza hacia la derecha hasta revelarlo.'
        );
      } else if (tabLeft < scrollLeft) {
        // Tab overflows left: scroll left to reveal left edge with indicator offset
        scrollContentNode.scroll({
          left: tabLeft - indicatorSize,
          // @ts-ignore
          behavior,
        });
        this.#logger.step(
          'SCROLL',
          'ScrollController.scrollIntoViewWithOffset()',
          'HTMLElement.scroll()',
          'El tab rebasa el borde izquierdo: se desplaza hacia la izquierda hasta revelarlo.'
        );
      } else {
        this.#logger.step(
          'DECISIÓN',
          'ScrollController.scrollIntoViewWithOffset()',
          'sin scroll',
          'El tab ya está completamente visible en el eje horizontal.'
        );
      }
    }
  }

  onResizeChange() {
    this.#logger.begin(
      'resize',
      'ResizeController detectó nueva geometría; se revelará la selección y recalcularán indicadores.'
    );
    this.#logger.step(
      'CICLO',
      'ResizeController.callback()',
      'ScrollController.onResizeChange()',
      'El resize no cambia foco ni selected; solo actualiza presentación de scroll.'
    );
    this.scrollIntoView();
    this.scrollEdge();
  }
}
