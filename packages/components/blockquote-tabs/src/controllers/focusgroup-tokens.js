/**
 * Token grammar for the Open UI `focusgroup` attribute (scoped explainer,
 * whatwg/html#11641).
 *
 * ISOLATED ON PURPOSE: the grammar has already changed once (original ->
 * scoped: `focusgroup="wrap horizontal"` became
 * `focusgroup="tablist inline wrap"`) and open questions still float
 * alternative spellings (e.g. splitting into `pattern` + `focusgroup`).
 * Nothing outside this module may build focusgroup token strings.
 *
 * Behavior tokens carry default modifiers (e.g. `tablist` defaults to
 * `inline wrap`); defaults are never repeated in the output.
 *
 * @typedef {Object} FocusGroupSpec
 * @property {'tablist' | 'toolbar' | 'radiogroup' | 'listbox' | 'menu' | 'menubar'} behavior
 * @property {'inline' | 'block'} [axis] omit to keep the behavior's default axis
 * @property {boolean} [wrap] omit to keep the behavior's default; `false` -> `nowrap`
 * @property {boolean} [memory] default `true`; `false` -> `nomemory`
 */

/**
 * Maps a declarative behavior spec to a focusgroup token string.
 *
 * @param {FocusGroupSpec} spec
 */
export const toFocusgroupTokens = ({behavior, axis, wrap, memory = true}) =>
  [behavior, axis, wrap === false ? 'nowrap' : null, memory ? null : 'nomemory']
    .filter(Boolean)
    .join(' ');
