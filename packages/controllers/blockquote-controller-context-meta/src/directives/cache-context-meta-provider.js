import {
  BlockquoteControllerContextMeta,
  contextMetaSymbol,
} from '../BlockquoteControllerContextMeta.js';

const metaByElement = new WeakMap();

/**
 * Get or create the per-element Map that holds ContextMeta instances for
 * different context keys.
 *
 * The per-element map is stored in the private WeakMap `metaByElement`.
 *
 * @param {HTMLElement|*} element - target used as WeakMap key
 */
const getPerElementMap = (element) => {
  let per = metaByElement.get(element);
  if (!per) {
    per = new Map();
    metaByElement.set(element, per);
  }
  return per;
};

/**
 * Return or create a cached BlockquoteControllerContextMeta for (element, context).
 *
 * This function memoizes BlockquoteControllerContextMeta instances per (element, contextKey).
 * If a BlockquoteControllerContextMeta already exists for the given element and context, it is
 * returned; otherwise a new BlockquoteControllerContextMeta is created, cached and returned.
 *
 * @param {HTMLElement|*} element - element
 *  @param {{
 *   context?: *,
 *   initialValue?: import('@lit/context').ContextType<*>,
 * }} arg - options for the context provider.
 */
export const cacheContextMetaProvider = (element, {context = contextMetaSymbol, initialValue}) => {
  const options = {context, initialValue};
  const contextKey = options.context;
  const perElement = getPerElementMap(element);
  let meta = perElement.get(contextKey);

  if (!meta) {
    meta = new BlockquoteControllerContextMeta(element, options);
    perElement.set(contextKey, meta);
  }

  return meta;
};
