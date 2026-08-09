import type {CSSResult} from 'lit';
import {BlockquoteBaseMeta} from '@blockquote-web-components/blockquote-base-meta';

/**
 * Set styles (as cssResult) associated to provided ID string which can then be retrieved by components
 * @param {String} id Identifier of styles; usually will be `[component-name]-shared-styles`
 * @param {CSSResult} styles Styles to add, wrapper in a Lit css tagged template literal
 */
export const setComponentSharedStyles = (id: string, styles: CSSResult): void => {
  /* c8 ignore if */
  if (!styles.cssText) {
    throw new Error(
      `Value passed to 'setComponentSharedStyles' function must be a 'css' function result`
    );
  }
  const meta = new BlockquoteBaseMeta({
    type: 'sharedStyles',
    key: id,
  });
  meta.value = meta.value || [];
  (meta.value as CSSResult[]).push(styles);
};
