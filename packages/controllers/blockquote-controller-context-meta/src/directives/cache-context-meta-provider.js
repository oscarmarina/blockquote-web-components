import {BlockquoteControllerContextMeta} from '../BlockquoteControllerContextMeta.js';

export const contextMetaKeyProvider = Symbol();

export const cacheContextMetaProvider = (element, contextOrOptions) => {
  if (element[contextMetaKeyProvider]) {
    return element[contextMetaKeyProvider];
  }

  const ctx =
    contextOrOptions?.context !== undefined ? {...contextOrOptions} : {context: contextOrOptions};

  element[contextMetaKeyProvider] = new BlockquoteControllerContextMeta(element, ctx);
  return element[contextMetaKeyProvider];
};
