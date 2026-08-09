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
 */
interface FocusGroupSpec {
  /** omit to keep the behavior's default axis */
  axis?: 'inline' | 'block';
  behavior: 'tablist' | 'toolbar' | 'radiogroup' | 'listbox' | 'menu' | 'menubar';
  /** default `true`; `false` -> `nomemory` */
  memory?: boolean;
  /** omit to keep the behavior's default; `false` -> `nowrap` */
  wrap?: boolean;
}

/**
 * Maps a declarative behavior spec to a focusgroup token string.
 */
export const toFocusgroupTokens = ({behavior, axis, wrap, memory = true}: FocusGroupSpec): string =>
  [behavior, axis, wrap === false ? 'nowrap' : null, memory ? null : 'nomemory']
    .filter(Boolean)
    .join(' ');
