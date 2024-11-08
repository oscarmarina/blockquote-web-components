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

| Name                        | Privacy | Type      | Default                                                                                                   | Description                                  | Inherited From |
| --------------------------- | ------- | --------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------- |
| `_selectedTab`              |         |           |                                                                                                           |                                              |                |
| `_selectedTabIndex`         |         |           |                                                                                                           |                                              |                |
| `_selectedTabIndexFromOne`  |         |           |                                                                                                           |                                              |                |
| `_getTabListLength`         |         |           |                                                                                                           |                                              |                |
| `_onSlotChanges`            |         |           |                                                                                                           |                                              |                |
| `_scrollContentTpl`         |         |           |                                                                                                           |                                              |                |
| `_tablistTpl`               |         |           |                                                                                                           |                                              |                |
| `_separatorTpl`             |         |           |                                                                                                           |                                              |                |
| `_indicatorsTpl`            |         |           |                                                                                                           |                                              |                |
| `_holdTpl`                  |         |           |                                                                                                           |                                              |                |
| `_tabpanelTpl`              |         |           |                                                                                                           |                                              |                |
| `_onTabClick`               |         |           |                                                                                                           |                                              |                |
| `_onTabKeyDown`             |         |           |                                                                                                           |                                              |                |
| `autofocus`                 | public  | `boolean` | `false`                                                                                                   | If present, the tab automatically have focus |                |
| `label`                     | public  | `string`  | `''`                                                                                                      | \`aria-label\` for tabs group                |                |
| `selected`                  | public  | `number`  | `1`                                                                                                       | The tab selected.                            |                |
| `_tabList`                  |         | `array`   | `[]`                                                                                                      |                                              |                |
| `_tabpanelList`             |         | `array`   | `[]`                                                                                                      |                                              |                |
| `_selectTabLast`            |         |           | `undefined`                                                                                               |                                              |                |
| `_selectTabpanelLast`       |         |           | `undefined`                                                                                               |                                              |                |
| `_observedFocus`            |         | `boolean` | `false`                                                                                                   |                                              |                |
| `_observeScrollBehavior`    |         | `boolean` | `false`                                                                                                   |                                              |                |
| `_slotChangesCount`         |         | `number`  | `0`                                                                                                       |                                              |                |
| `_slotNodesCount`           |         |           | `undefined`                                                                                               |                                              |                |
| `_scrollContentRef`         |         |           |                                                                                                           |                                              |                |
| `_resizeControllerObserver` |         |           | `new ResizeController(this, { callback: () => { this._onResizeObserverChange(); }, skipInitial: true, })` |                                              |                |
| `_hasScrollLeftIndicator`   | public  | `boolean` |                                                                                                           |                                              |                |
| `_hasScrollRightIndicator`  | public  | `boolean` |                                                                                                           |                                              |                |

##### Methods

| Name                        | Privacy | Description | Parameters                                | Return | Inherited From |
| --------------------------- | ------- | ----------- | ----------------------------------------- | ------ | -------------- |
| `_selectedIsInRange`        |         |             | `idx`                                     |        |                |
| `_scrollEdge`               |         |             | `{target = this._scrollContentRef.value}` |        |                |
| `_selectTab`                |         |             |                                           |        |                |
| `_moveFocusSelectedTab`     |         |             | `selectedTab`                             |        |                |
| `_requestFocusUpdate`       |         |             |                                           |        |                |
| `_scrollIntoView`           |         |             |                                           |        |                |
| `_scrollIntoViewWithOffset` |         |             | `tabScroller, behavior`                   |        |                |
| `_requestPropertyUpdate`    |         |             | `prop`                                    |        |                |
| `_onResizeObserverChange`   |         |             |                                           |        |                |

##### Events

| Name             | Type | Description | Inherited From |
| ---------------- | ---- | ----------- | -------------- |
| `selectedchange` |      |             |                |

##### Attributes

| Name                       | Field                     | Inherited From |
| -------------------------- | ------------------------- | -------------- |
| `autofocus`                | autofocus                 |                |
| `label`                    | label                     |                |
| `selected`                 | selected                  |                |
| `_hasScrollLeftIndicator`  | \_hasScrollLeftIndicator  |                |
| `_hasScrollRightIndicator` | \_hasScrollRightIndicator |                |

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

`<blockquote-tabpanel>`
A tab element that can be used inside a `blockquote-tabs` element.


### `src/tabpanel/BlockquoteTabPanel.js`:

#### class: `BlockquoteTabPanel`, `blockquote-tabpanel`

##### Fields

| Name                   | Privacy | Type      | Default                                                | Description                                  | Inherited From |
| ---------------------- | ------- | --------- | ------------------------------------------------------ | -------------------------------------------- | -------------- |
| `selected`             | public  | `boolean` | `false`                                                | Whether or not the tabpanel is \`selected\`. |                |
| `globalRootAttributes` |         | `object`  | `{ role: 'tabpanel', slot: 'tabpanel', tabindex: 0, }` |                                              |                |

##### Methods

| Name                 | Privacy | Description                     | Parameters              | Return | Inherited From |
| -------------------- | ------- | ------------------------------- | ----------------------- | ------ | -------------- |
| `__setArrayAttibute` |         | Sets attributes on the element. | `entries: Record<*, *>` |        |                |

##### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `selected` | selected |                |

<hr/>

#### Exports

| Kind | Name                 | Declaration        | Module                             | Package |
| ---- | -------------------- | ------------------ | ---------------------------------- | ------- |
| `js` | `BlockquoteTabPanel` | BlockquoteTabPanel | src/tabpanel/BlockquoteTabPanel.js |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`<blockquote-tab>`
A tab element that can be used inside a `blockquote-tabs` element.


### `src/tab/BlockquoteTab.js`:

#### class: `BlockquoteTab`, `blockquote-tab`

##### Mixins

| Name                         | Module | Package                                                  |
| ---------------------------- | ------ | -------------------------------------------------------- |
| `BlockquoteMixinSlotContent` |        | @blockquote-web-components/blockquote-mixin-slot-content |

##### Fields

| Name                   | Privacy | Type      | Default                                      | Description                             | Inherited From |
| ---------------------- | ------- | --------- | -------------------------------------------- | --------------------------------------- | -------------- |
| `_onSlotChanges`       |         |           |                                              |                                         |                |
| `selected`             | public  | `boolean` | `false`                                      | Whether or not the tab is \`selected\`. |                |
| `globalRootAttributes` |         | `object`  | `{ role: 'tab', slot: 'tab', tabindex: 0, }` |                                         |                |

##### Methods

| Name                 | Privacy | Description                     | Parameters              | Return | Inherited From |
| -------------------- | ------- | ------------------------------- | ----------------------- | ------ | -------------- |
| `__setArrayAttibute` |         | Sets attributes on the element. | `entries: Record<*, *>` |        |                |

##### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `selected` | selected |                |

<hr/>

#### Exports

| Kind | Name            | Declaration   | Module                   | Package |
| ---- | --------------- | ------------- | ------------------------ | ------- |
| `js` | `BlockquoteTab` | BlockquoteTab | src/tab/BlockquoteTab.js |         |

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
