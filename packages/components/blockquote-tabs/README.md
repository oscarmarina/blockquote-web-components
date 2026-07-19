![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

[ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/components/blockquote-tabs)

### Usage

```html
<blockquote-tabs label="List of tabs">
  <blockquote-tab id="tab-1">Tab 1</blockquote-tab>
  <blockquote-tab id="tab-2">Tab 2</blockquote-tab>
  <blockquote-tab id="tab-3">Tab 3</blockquote-tab>
  <blockquote-tab id="tab-4">Tab 4</blockquote-tab>
  <blockquote-tab id="tab-5">Tab 5</blockquote-tab>
  <blockquote-tab id="tab-6">Tab 6</blockquote-tab>
  <blockquote-tab id="tab-7">Tab 7</blockquote-tab>
  <blockquote-tab id="tab-8">Tab 8</blockquote-tab>
  <blockquote-tab id="tab-9">Tab 9</blockquote-tab>
  <blockquote-tab id="tab-10">Tab 10</blockquote-tab>
  <blockquote-tabpanel aria-labelledby="tab-1"><p>Panel 1</p></blockquote-tabpanel>
  <blockquote-tabpanel aria-labelledby="tab-2"><p>Panel 2</p></blockquote-tabpanel>
  <blockquote-tabpanel aria-labelledby="tab-3"><p>Panel 3</p></blockquote-tabpanel>
  <blockquote-tabpanel aria-labelledby="tab-4"><p>Panel 4</p></blockquote-tabpanel>
  <blockquote-tabpanel aria-labelledby="tab-5"><p>Panel 5</p></blockquote-tabpanel>
  <blockquote-tabpanel aria-labelledby="tab-6"><p>Panel 6</p></blockquote-tabpanel>
  <blockquote-tabpanel aria-labelledby="tab-7"><p>Panel 7</p></blockquote-tabpanel>
  <blockquote-tabpanel aria-labelledby="tab-8"><p>Panel 8</p></blockquote-tabpanel>
  <blockquote-tabpanel aria-labelledby="tab-9"><p>Panel 9</p></blockquote-tabpanel>
  <blockquote-tabpanel aria-labelledby="tab-10"><p>Panel 10</p></blockquote-tabpanel>
</blockquote-tabs>
```


### `src/BlockquoteTabs.js`:

#### class: `BlockquoteTabs`, `blockquote-tabs`

##### Mixins

| Name                         | Module | Package                                                  |
| ---------------------------- | ------ | -------------------------------------------------------- |
| `BlockquoteMixinSlotContent` |        | @blockquote-web-components/blockquote-mixin-slot-content |

##### Fields

| Name                | Privacy | Type      | Default                                                                                                                                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                              | Inherited From |
| ------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `_selectedTab`      |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_onSlotChanges`    |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_scrollContentTpl` |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_tablistTpl`       |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_separatorTpl`     |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_indicatorsTpl`    |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_holdTpl`          |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_tabpanelTpl`      |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `autofocus`         | public  | `boolean` | `false`                                                                                                                                                                                                                                                                                                                                                                                                  | If present, the selected tab is focused on boot. Alternatively, set the&#xA;native \`autofocus\` attribute on the desired \`\<blockquote-tab>\` (takes&#xA;precedence): the component delegates it in JS because native support is&#xA;unreliable across browsers today (see focusgroup redesign notes). |                |
| `label`             | public  | `string`  | `''`                                                                                                                                                                                                                                                                                                                                                                                                     | \`aria-label\` for tabs group                                                                                                                                                                                                                                                                            |                |
| `selected`          | public  | `number`  | `1`                                                                                                                                                                                                                                                                                                                                                                                                      | The tab selected.                                                                                                                                                                                                                                                                                        |                |
| `activation`        | public  | `string`  | `'auto'`                                                                                                                                                                                                                                                                                                                                                                                                 | Activation mode:&#xA;- \`auto\` (default): selection follows focus (arrow keys select).&#xA;- \`manual\`: arrow keys only move focus; Enter, Space or click select.                                                                                                                                      |                |
| `orientation`       | public  | `string`  | `'horizontal'`                                                                                                                                                                                                                                                                                                                                                                                           | Orientation of the tablist: \`horizontal\` (default) or \`vertical\`.&#xA;Determines the arrow-key axis, \`aria-orientation\`, and the scroll&#xA;axis (scroll indicators, reveal-on-focus, separator).                                                                                                  |                |
| `_tabList`          |         | `array`   | `[]`                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                          |                |
| `_tabpanelList`     |         | `array`   | `[]`                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                          |                |
| `_scrollContentRef` |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_tablistRef`       |         |           |                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_selection`        |         |           | `new SelectionController(this)`                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                          |                |
| `_focusGroup`       |         |           | `new FocusGroupController(this, { getItems: () => this._tabList, getSelectedIndex: () => this._selection.selectedIndex, getOrientation: () => (this.orientation === 'vertical' ? 'vertical' : 'horizontal'), getActivation: () => (this.activation === 'manual' ? 'manual' : 'auto'), onSelect: (index) => { this.selected = index + 1; }, onReveal: (tab) => { this._scroll.scrollIntoView(tab); }, })` |                                                                                                                                                                                                                                                                                                          |                |
| `_scroll`           |         |           | `new ScrollController(this, { getScrollContent: () => this._scrollContentRef.value, getIndicators: () => this._indicators, getSelectedTab: () => this._selectedTab, getOrientation: () => (this.orientation === 'vertical' ? 'vertical' : 'horizontal'), })`                                                                                                                                             |                                                                                                                                                                                                                                                                                                          |                |

##### Methods

| Name                 | Privacy | Description | Parameters        | Return | Inherited From |
| -------------------- | ------- | ----------- | ----------------- | ------ | -------------- |
| `_scrollEdge`        |         |             | `ev: CustomEvent` |        |                |
| `_onSelectionCommit` |         |             |                   |        |                |

##### Events

| Name             | Type | Description | Inherited From |
| ---------------- | ---- | ----------- | -------------- |
| `selectedchange` |      |             |                |

##### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `autofocus`   | autofocus   |                |
| `label`       | label       |                |
| `selected`    | selected    |                |
| `activation`  | activation  |                |
| `orientation` | orientation |                |

<hr/>

#### Exports

| Kind | Name             | Declaration    | Module                | Package |
| ---- | ---------------- | -------------- | --------------------- | ------- |
| `js` | `BlockquoteTabs` | BlockquoteTabs | src/BlockquoteTabs.js |         |

### `src/index.js`:

#### Exports

| Kind | Name                 | Declaration        | Module                           | Package |
| ---- | -------------------- | ------------------ | -------------------------------- | ------- |
| `js` | `BlockquoteTabs`     | BlockquoteTabs     | ./BlockquoteTabs.js              |         |
| `js` | `BlockquoteTab`      | BlockquoteTab      | ./tab/BlockquoteTab.js           |         |
| `js` | `BlockquoteTabPanel` | BlockquoteTabPanel | ./tabpanel/BlockquoteTabPanel.js |         |

`FocusGroupController`

Orchestrates the focus-driven interaction of a composite widget, following
the Open UI `focusgroup` model where focus movement and selection are
decoupled:

- Entry-point management is delegated to an engine (the roving-tabindex
  fallback engine today; the native `focusgroup` attribute in Phase 3).
- Commit triggers: `focusin` (auto activation), and click / Enter / Space
  (both activation modes). Directional navigation only moves DOM focus.
- Focus is placed exclusively inside user-interaction handlers. The commit
  pipeline (`selected` -> SelectionController) NEVER moves focus, which
  makes programmatic selection changes focus-safe by construction
  (structural event-origin tracking; no focus latch anywhere).


### `src/controllers/FocusGroupController.js`:

#### class: `FocusGroupController`

##### Fields

| Name        | Privacy | Type | Default | Description | Inherited From |
| ----------- | ------- | ---- | ------- | ----------- | -------------- |
| `entryItem` |         |      |         |             |                |
| `host`      |         |      | `host`  |             |                |

##### Methods

| Name               | Privacy | Description                                                                                                                                                                                                           | Parameters               | Return | Inherited From |
| ------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------ | -------------- |
| `hostConnected`    |         |                                                                                                                                                                                                                       |                          |        |                |
| `hostDisconnected` |         |                                                                                                                                                                                                                       |                          |        |                |
| `attach`           |         |                                                                                                                                                                                                                       | `container: HTMLElement` |        |                |
| `syncOrientation`  |         | Pushes an \`orientation\` change to the engine. The native engine encodes&#xA;the axis in the \`focusgroup\` token and must be synced explicitly; the&#xA;fallback reads orientation live and treats this as a no-op. |                          |        |                |
| `syncEntryPoint`   |         | Moves the group's entry point to the currently selected item. Idempotent;&#xA;call on every selection commit and whenever the slotted items change.                                                                   |                          |        |                |

<details><summary>Private API</summary>

##### Fields

| Name                   | Privacy | Type                          | Default            | Description | Inherited From |
| ---------------------- | ------- | ----------------------------- | ------------------ | ----------- | -------------- |
| `#container`           | private | `null`                        | `null`             |             |                |
| `#engine`              | private |                               |                    |             |                |
| `#getItems`            | private | `() => HTMLElement[]`         | `getItems`         |             |                |
| `#getSelectedIndex`    | private | `() => number`                | `getSelectedIndex` |             |                |
| `#getActivation`       | private | `() => 'auto' \| 'manual'`    | `getActivation`    |             |                |
| `#onSelect`            | private | `(index: number) => void`     | `onSelect`         |             |                |
| `#onReveal`            | private | `(item: HTMLElement) => void` | `onReveal`         |             |                |
| `#onFocusIn`           | private |                               |                    |             |                |
| `#onClick`             | private |                               |                    |             |                |
| `#onActivationKeyDown` | private |                               |                    |             |                |

</details>

<hr/>

#### Exports

| Kind | Name                   | Declaration          | Module                                  | Package |
| ---- | ---------------------- | -------------------- | --------------------------------------- | ------- |
| `js` | `FocusGroupController` | FocusGroupController | src/controllers/FocusGroupController.js |         |

`NativeFocusgroupEngine`

Focus engine backed by the browser's native `focusgroup` behavior. It does
NO key handling and NO tabindex management: the browser provides
directional navigation, `Home`/`End`, wrap, logical (writing-mode aware)
direction, the guaranteed single tab stop, last-focused memory and
focus-into-view scrolling.

What remains here is exactly what the explainer assigns to author code for
the tabs pattern:

- Declare the group on the tablist container:
  `focusgroup="tablist [block] nomemory"`. `tablist` supplies the
  `inline wrap` default modifiers; `block` overrides the axis for vertical
  tablists; `nomemory` reproduces roving-by-selection entry semantics
  (sequential re-entry always lands on the SELECTED item, not on the last
  arrowed-to one).
- Move `focusgroupstart` to the newly selected item on every commit.

The engine intentionally leaves every item's `tabindex` untouched: native
directional navigation requires items to be focusable (non-negative
tabindex), and the guaranteed tab stop collapses them into a single
sequential stop.


### `src/controllers/NativeFocusgroupEngine.js`:

#### class: `NativeFocusgroupEngine`

##### Methods

| Name              | Privacy | Description                                                                                                                                                                                                                                                           | Parameters                            | Return | Inherited From |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------ | -------------- |
| `attach`          |         |                                                                                                                                                                                                                                                                       | `container: HTMLElement`              |        |                |
| `detach`          |         |                                                                                                                                                                                                                                                                       |                                       |        |                |
| `syncOrientation` |         | Pushes the current orientation to the \`focusgroup\` token. The token&#xA;encodes the axis (\`block\` for vertical tablists), so a dynamic&#xA;\`orientation\` change must be synced explicitly. Safe to call before&#xA;\`attach\` (no-op until a container exists). |                                       |        |                |
| `setEntryItem`    |         | Moves \`focusgroupstart\` to the selected item. Idempotent; safe to call on&#xA;every selection commit or slot change.                                                                                                                                                | `entryItem: HTMLElement \| undefined` |        |                |

<details><summary>Private API</summary>

##### Fields

| Name              | Privacy | Type                               | Default          | Description | Inherited From |
| ----------------- | ------- | ---------------------------------- | ---------------- | ----------- | -------------- |
| `#container`      | private | `null`                             | `null`           |             |                |
| `#getItems`       | private | `() => HTMLElement[]`              | `getItems`       |             |                |
| `#getOrientation` | private | `() => 'horizontal' \| 'vertical'` | `getOrientation` |             |                |

##### Methods

| Name          | Privacy | Description | Parameters | Return | Inherited From |
| ------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `#syncTokens` | private |             |            |        |                |

</details>

<hr/>

#### Exports

| Kind | Name                     | Declaration            | Module                                    | Package |
| ---- | ------------------------ | ---------------------- | ----------------------------------------- | ------- |
| `js` | `NativeFocusgroupEngine` | NativeFocusgroupEngine | src/controllers/NativeFocusgroupEngine.js |         |

`RovingTabindexEngine`

Fallback focus engine for composite widgets. It replicates the semantics of
the Open UI `focusgroup` proposal until browsers ship it natively:

- Directional navigation (arrow keys) restricted to the widget's axis and
  resolved in logical direction (`direction`-aware: RTL swaps the arrow
  mapping; `writing-mode` is NOT consulted), wrapping around at both ends.
- `Home` / `End` move focus to the first / last item.
- Roving tabindex entry point: the entry item is the only tab stop of the
  group; every other item gets `tabindex="-1"`.

The engine ONLY moves DOM focus. Selection is committed elsewhere
(focusin / click / activation handlers), mirroring the native model where
focus and selection are decoupled. Cross-axis keys are never handled nor
canceled, so they remain available for scrolling or supplementary actions.


### `src/controllers/RovingTabindexEngine.js`:

#### class: `RovingTabindexEngine`

##### Methods

| Name              | Privacy | Description                                                                                                                                                                                                   | Parameters                            | Return | Inherited From |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------ | -------------- |
| `attach`          |         |                                                                                                                                                                                                               | `container: HTMLElement`              |        |                |
| `detach`          |         |                                                                                                                                                                                                               |                                       |        |                |
| `syncOrientation` |         | No-op: the fallback resolves orientation live on every keydown, so there&#xA;is no orientation-dependent state to push. It exists to keep the engine&#xA;interface symmetric with \`NativeFocusgroupEngine\`. |                                       |        |                |
| `setEntryItem`    |         | Roving tabindex: \`entryItem\` becomes the only tab stop of the group.&#xA;Idempotent; safe to call on every selection commit or slot change.                                                                 | `entryItem: HTMLElement \| undefined` |        |                |

<details><summary>Private API</summary>

##### Fields

| Name              | Privacy | Type                               | Default          | Description | Inherited From |
| ----------------- | ------- | ---------------------------------- | ---------------- | ----------- | -------------- |
| `#container`      | private | `null`                             | `null`           |             |                |
| `#getItems`       | private | `() => HTMLElement[]`              | `getItems`       |             |                |
| `#getOrientation` | private | `() => 'horizontal' \| 'vertical'` | `getOrientation` |             |                |
| `#onKeyDown`      | private |                                    |                  |             |                |

##### Methods

| Name         | Privacy | Description                                                                                                                      | Parameters                          | Return | Inherited From |
| ------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------ | -------------- |
| `#nextIndex` | private | Resolves the index targeted by a navigation key, in logical direction.&#xA;Returns \`null\` for keys the engine does not handle. | `currentIndex: number, key: string` |        |                |

</details>

<hr/>

#### Exports

| Kind | Name                   | Declaration          | Module                                  | Package |
| ---- | ---------------------- | -------------------- | --------------------------------------- | ------- |
| `js` | `RovingTabindexEngine` | RovingTabindexEngine | src/controllers/RovingTabindexEngine.js |         |

### `src/controllers/ScrollController.js`:

#### class: `ScrollController`

##### Fields

| Name                      | Privacy | Type      | Default            | Description | Inherited From |
| ------------------------- | ------- | --------- | ------------------ | ----------- | -------------- |
| `host`                    |         |           | `host`             |             |                |
| `getScrollContent`        |         |           | `getScrollContent` |             |                |
| `getIndicators`           |         |           | `getIndicators`    |             |                |
| `getSelectedTab`          |         |           | `getSelectedTab`   |             |                |
| `getOrientation`          |         |           |                    |             |                |
| `hasScrollLeftIndicator`  |         | `boolean` | `false`            |             |                |
| `hasScrollRightIndicator` |         | `boolean` | `false`            |             |                |

##### Methods

| Name                       | Privacy | Description                                                      | Parameters                                           | Return | Inherited From |
| -------------------------- | ------- | ---------------------------------------------------------------- | ---------------------------------------------------- | ------ | -------------- |
| `scrollEdge`               |         | Updates scroll edge indicators.                                  | `target: HTMLElement`                                |        |                |
| `scrollIntoView`           |         | Schedules a reveal-into-view operation for the given tab item.   | `tab: HTMLElement`                                   |        |                |
| `scrollIntoViewWithOffset` |         | Calculates offsets and scrolls the tab into view if overflowing. | `tabScroller: HTMLElement, behavior: ScrollBehavior` |        |                |
| `onResizeChange`           |         |                                                                  |                                                      |        |                |

<details><summary>Private API</summary>

##### Fields

| Name                     | Privacy | Type      | Default | Description | Inherited From |
| ------------------------ | ------- | --------- | ------- | ----------- | -------------- |
| `#observeScrollBehavior` | private | `boolean` | `false` |             |                |

</details>

<hr/>

#### Exports

| Kind | Name               | Declaration      | Module                              | Package |
| ---- | ------------------ | ---------------- | ----------------------------------- | ------- |
| `js` | `ScrollController` | ScrollController | src/controllers/ScrollController.js |         |

`SelectionController`

Owns the selection semantics of a tab set:

- Sanitizes the 1-based `selected` index on write (nearest-bound clamp) and
  reports the committed value so the host can correct its reflected attribute
  (attribute and effective state never diverge).
- Applies the selection idempotently to every tab/tabpanel pair, so no
  "last selected item" bookkeeping is needed.
- Wires the bidirectional ARIA relationship of each pair (`aria-controls` on
  the tab <-> `aria-labelledby` on the tabpanel), generating missing ids and
  always respecting author-supplied values; warns when an author-supplied
  half does not close the pair (dangling idref).
- Re-syncs selection and wiring when the slotted items change.

Focus and activation are intentionally out of scope here.


### `src/controllers/SelectionController.js`:

#### class: `SelectionController`

##### Fields

| Name                   | Privacy | Type | Default | Description | Inherited From |
| ---------------------- | ------- | ---- | ------- | ----------- | -------------- |
| `length`               |         |      |         |             |                |
| `selectedIndex`        |         |      |         |             |                |
| `selectedIndexFromOne` |         |      |         |             |                |
| `selectedTab`          |         |      |         |             |                |
| `selectedTabpanel`     |         |      |         |             |                |
| `host`                 |         |      | `host`  |             |                |

##### Methods

| Name       | Privacy | Description                                                                                                                                                                                                                                | Parameters                                      | Return | Inherited From |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- | ------ | -------------- |
| `setItems` |         | Updates the slotted items, wires their ARIA relationships and re-syncs the&#xA;selection. When the current selection falls outside the new range, the&#xA;host's \`selected\` is corrected and the commit happens on the next update.      | `tabs: HTMLElement[], tabpanels: HTMLElement[]` |        |                |
| `commit`   |         | Applies a 1-based selection and returns the committed 1-based value. When&#xA;the committed value differs from the requested one, nothing is applied and&#xA;the host should correct \`selected\` (the commit happens on the next update). | `selectedFromOne: number`                       |        |                |

<details><summary>Private API</summary>

##### Fields

| Name                | Privacy | Type            | Default     | Description                                       | Inherited From |
| ------------------- | ------- | --------------- | ----------- | ------------------------------------------------- | -------------- |
| `#tabs`             | private | `HTMLElement[]` | `[]`        |                                                   |                |
| `#tabpanels`        | private | `HTMLElement[]` | `[]`        |                                                   |                |
| `#selectedIndex`    | private | `number`        | `0`         |                                                   |                |
| `#warnedMismatches` | private | `Set<string>`   | `new Set()` | mismatches already surfaced (each one warns once) |                |

##### Methods

| Name                     | Privacy | Description | Parameters                            | Return | Inherited From |
| ------------------------ | ------- | ----------- | ------------------------------------- | ------ | -------------- |
| `#apply`                 | private |             | `index: number`                       |        |                |
| `#wireAriaRelationships` | private |             |                                       |        |                |
| `#warnOnce`              | private |             | `condition: boolean, message: string` |        |                |

</details>

<hr/>

#### Exports

| Kind | Name                  | Declaration         | Module                                 | Package |
| ---- | --------------------- | ------------------- | -------------------------------------- | ------- |
| `js` | `SelectionController` | SelectionController | src/controllers/SelectionController.js |         |

### `src/controllers/focusgroup-capability.js`:

#### Functions

| Name                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Parameters                    | Return |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ------ |
| `supportsFocusgroup`    | Capability detection for the Open UI \`focusgroup\` attribute.&#xA;&#xA;The explainer specifies IDL reflection as the feature-detection surface:&#xA;&#xA;\`\`\`webidl&#xA;partial interface mixin HTMLOrSVGElement {&#xA;  \[SameObject, PutForwards=value, Reflect] readonly attribute DOMTokenList focusGroup;&#xA;  \[CEReactions, Reflect] attribute boolean focusGroupStart;&#xA;};&#xA;\`\`\`&#xA;&#xA;No UA sniffing. Unknown or absent reflection means \`false\`, which fails&#xA;safe: the component stays on the JS fallback engine until a browser&#xA;positively confirms support. |                               |        |
| `setFocusgroupOverride` | Override hook for tests (dual-run suites) and enterprise pinning. Pass&#xA;\`undefined\` to restore real detection. Evaluated per component instance at&#xA;construction time, so set it before creating elements.                                                                                                                                                                                                                                                                                                                                                                               | `value: boolean \| undefined` |        |

<hr/>

#### Exports

| Kind | Name                    | Declaration           | Module                                   | Package |
| ---- | ----------------------- | --------------------- | ---------------------------------------- | ------- |
| `js` | `supportsFocusgroup`    | supportsFocusgroup    | src/controllers/focusgroup-capability.js |         |
| `js` | `setFocusgroupOverride` | setFocusgroupOverride | src/controllers/focusgroup-capability.js |         |

### `src/controllers/focusgroup-tokens.js`:

#### Functions

| Name                 | Description                                                    | Parameters                                                    | Return |
| -------------------- | -------------------------------------------------------------- | ------------------------------------------------------------- | ------ |
| `toFocusgroupTokens` | Maps a declarative behavior spec to a focusgroup token string. | `{behavior, axis, wrap, memory = true}, spec: FocusGroupSpec` |        |

<hr/>

#### Exports

| Kind | Name                 | Declaration        | Module                               | Package |
| ---- | -------------------- | ------------------ | ------------------------------------ | ------- |
| `js` | `toFocusgroupTokens` | toFocusgroupTokens | src/controllers/focusgroup-tokens.js |         |

### `src/define/blockquote-tab.js`:

#### Exports

| Kind                        | Name             | Declaration   | Module                    | Package |
| --------------------------- | ---------------- | ------------- | ------------------------- | ------- |
| `custom-element-definition` | `blockquote-tab` | BlockquoteTab | /src/tab/BlockquoteTab.js |         |

### `src/define/blockquote-tabpanel.js`:

#### Exports

| Kind                        | Name                  | Declaration        | Module                              | Package |
| --------------------------- | --------------------- | ------------------ | ----------------------------------- | ------- |
| `custom-element-definition` | `blockquote-tabpanel` | BlockquoteTabPanel | /src/tabpanel/BlockquoteTabPanel.js |         |

### `src/define/blockquote-tabs.js`:

#### Exports

| Kind                        | Name              | Declaration    | Module                 | Package |
| --------------------------- | ----------------- | -------------- | ---------------------- | ------- |
| `custom-element-definition` | `blockquote-tabs` | BlockquoteTabs | /src/BlockquoteTabs.js |         |

### `src/styles/blockquote-tabs-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                   | Package |
| ---- | -------- | ----------- | ---------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-tabs-styles.css.js |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`<blockquote-tab>`
A tab element that can be used inside a `blockquote-tabs` element.


### `src/tab/BlockquoteTab.js`:

#### class: `BlockquoteTab`, `blockquote-tab`

##### Mixins

| Name                         | Module | Package                                                  |
| ---------------------------- | ------ | -------------------------------------------------------- |
| `BlockquoteMixinSlotContent` |        | @blockquote-web-components/blockquote-mixin-slot-content |

##### Static Fields

| Name             | Privacy | Type     | Default                                      | Description | Inherited From |
| ---------------- | ------- | -------- | -------------------------------------------- | ----------- | -------------- |
| `rootAttributes` |         | `object` | `{ role: 'tab', slot: 'tab', tabindex: 0, }` |             |                |

##### Fields

| Name             | Privacy | Type      | Default | Description                             | Inherited From |
| ---------------- | ------- | --------- | ------- | --------------------------------------- | -------------- |
| `_onSlotChanges` |         |           |         |                                         |                |
| `selected`       | public  | `boolean` | `false` | Whether or not the tab is \`selected\`. |                |
| `disabled`       | public  | `boolean` | `false` | Whether or not the tab is \`disabled\`. |                |

##### Methods

| Name                  | Privacy | Description                                                   | Parameters                         | Return    | Inherited From |
| --------------------- | ------- | ------------------------------------------------------------- | ---------------------------------- | --------- | -------------- |
| `_shouldSyncState`    |         | Returns whether the component state needs to be synchronized. | `props: Map<PropertyKey, unknown>` | `boolean` |                |
| `_syncState`          |         | Synchronizes the derived DOM state.                           | `props: Map<PropertyKey, unknown>` |           |                |
| `_syncRootAttributes` |         | Synchronizes the host attributes that are always present.     |                                    |           |                |
| `_setAttributes`      |         | Sets multiple attributes on the host element.                 | `attributes: Record<string, *>`    |           |                |

##### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `selected` | selected |                |
| `disabled` | disabled |                |

<hr/>

#### Exports

| Kind | Name            | Declaration   | Module                   | Package |
| ---- | --------------- | ------------- | ------------------------ | ------- |
| `js` | `BlockquoteTab` | BlockquoteTab | src/tab/BlockquoteTab.js |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`<blockquote-tabpanel>`
A tab panel element that can be used inside a `blockquote-tabs` element.


### `src/tabpanel/BlockquoteTabPanel.js`:

#### class: `BlockquoteTabPanel`, `blockquote-tabpanel`

##### Static Fields

| Name             | Privacy | Type     | Default                                                | Description | Inherited From |
| ---------------- | ------- | -------- | ------------------------------------------------------ | ----------- | -------------- |
| `rootAttributes` |         | `object` | `{ role: 'tabpanel', slot: 'tabpanel', tabindex: 0, }` |             |                |

##### Fields

| Name       | Privacy | Type      | Default | Description                                   | Inherited From |
| ---------- | ------- | --------- | ------- | --------------------------------------------- | -------------- |
| `selected` | public  | `boolean` | `false` | Whether or not the tab panel is \`selected\`. |                |

##### Methods

| Name                  | Privacy | Description                                                   | Parameters                         | Return    | Inherited From |
| --------------------- | ------- | ------------------------------------------------------------- | ---------------------------------- | --------- | -------------- |
| `_shouldSyncState`    |         | Returns whether the component state needs to be synchronized. | `props: Map<PropertyKey, unknown>` | `boolean` |                |
| `_syncState`          |         | Synchronizes the derived DOM state.                           |                                    |           |                |
| `_syncRootAttributes` |         | Synchronizes the host attributes that are always present.     |                                    |           |                |
| `_setAttributes`      |         | Sets multiple attributes on the host element.                 | `attributes: Record<string, *>`    |           |                |

##### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `selected` | selected |                |

<hr/>

#### Exports

| Kind | Name                 | Declaration        | Module                             | Package |
| ---- | -------------------- | ------------------ | ---------------------------------- | ------- |
| `js` | `BlockquoteTabPanel` | BlockquoteTabPanel | src/tabpanel/BlockquoteTabPanel.js |         |

### `src/tab/styles/blockquote-tab-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                      | Package |
| ---- | -------- | ----------- | ------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/tab/styles/blockquote-tab-styles.css.js |         |

### `src/tabpanel/styles/blockquote-tabpanel-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                | Package |
| ---- | -------- | ----------- | ----------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/tabpanel/styles/blockquote-tabpanel-styles.css.js |         |
