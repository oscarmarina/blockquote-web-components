import {
  BlockquoteControllerContextMeta,
  contextMetaSymbol,
} from '../BlockquoteControllerContextMeta.js';
import type {Context, ContextType} from '@lit/context';
import type {ReactiveControllerHost} from 'lit';

type ContextMetaHost = ReactiveControllerHost & HTMLElement;

type ContextMetaInstance = BlockquoteControllerContextMeta<
  Context<unknown, unknown>,
  ContextMetaHost
>;

interface CacheOptions {
  context?: unknown;
  initialValue?: ContextType<Context<unknown, unknown>>;
}

const metaByElement = new WeakMap<HTMLElement, Map<unknown, ContextMetaInstance>>();

/**
 * Get or create the per-element Map that holds ContextMeta instances for
 * different context keys.
 *
 * The per-element map is stored in the private WeakMap `metaByElement`.
 *
 * @param {HTMLElement} element - target used as WeakMap key
 */
const getPerElementMap = (element: HTMLElement): Map<unknown, ContextMetaInstance> => {
  let per = metaByElement.get(element);
  if (!per) {
    per = new Map<unknown, ContextMetaInstance>();
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
 * @param {HTMLElement} element - element
 * @param {{
 *   context?: unknown,
 *   initialValue?: ContextType<Context<unknown, unknown>>,
 * }} options - options for the context provider.
 */
export const cacheContextMetaProvider = (
  element: HTMLElement,
  {context = contextMetaSymbol, initialValue}: CacheOptions
): ContextMetaInstance => {
  const options = {context, initialValue};
  const contextKey = options.context;
  const perElement = getPerElementMap(element);
  let meta = perElement.get(contextKey);

  if (!meta) {
    meta = new BlockquoteControllerContextMeta(element as unknown as ContextMetaHost, options);
    perElement.set(contextKey, meta);
  }

  return meta;
};
