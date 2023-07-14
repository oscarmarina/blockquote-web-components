import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';

const meta = new BlockquoteBaseMeta({
  type: 'sharedStyles',
});

/**
 * Get styles (as cssResult) already associated to provided ID string (using setComponentSharedStyles helper) and returns them
 * @param {String} id Identifier of styles; usually will be `[component-name]-shared-styles`
 * @returns [CSSResult]
 */
export const getComponentSharedStyles = id => {
  const sharedStyles = meta.byKey(id);
  if (sharedStyles) {
    const onlyCSSResult = sharedStyles.filter(cssResultObject => cssResultObject.cssText);
    return onlyCSSResult;
  }
  return [];
};
