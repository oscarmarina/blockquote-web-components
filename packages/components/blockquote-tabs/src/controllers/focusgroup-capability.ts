let override: boolean | undefined;

/**
 * Capability detection for the Open UI `focusgroup` attribute.
 *
 * The explainer specifies IDL reflection as the feature-detection surface:
 *
 * ```webidl
 * partial interface mixin HTMLOrSVGElement {
 *   [SameObject, PutForwards=value, Reflect] readonly attribute DOMTokenList focusGroup;
 *   [CEReactions, Reflect] attribute boolean focusGroupStart;
 * };
 * ```
 *
 * No UA sniffing. Unknown or absent reflection means `false`, which fails
 * safe: the component stays on the JS fallback engine until a browser
 * positively confirms support.
 */
export const supportsFocusgroup = (): boolean =>
  override ?? ('focusGroup' in HTMLElement.prototype && 'focusGroupStart' in HTMLElement.prototype);

/**
 * Override hook for tests (dual-run suites) and enterprise pinning. Pass
 * `undefined` to restore real detection. Evaluated per component instance at
 * construction time, so set it before creating elements.
 */
export const setFocusgroupOverride = (value: boolean | undefined) => {
  override = value;
};
