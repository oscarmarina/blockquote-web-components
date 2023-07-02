# blockquote-tab

**Mixins:** BlockquoteMixinSlotContent

## Properties

| Property               | Attribute  | Type      | Default                                  | Description       |
|------------------------|------------|-----------|------------------------------------------|-------------------|
| `globalRootAttributes` |            | `object`  | {"role":"tab","slot":"tab","tabindex":0} |                   |
| `selected`             | `selected` | `boolean` | false                                    | The tab selected. |

## Events

| Event         | Type                                             |
|---------------|--------------------------------------------------|
| `slotchanges` | `CustomEvent<{ assignedSlotContent: { slotName: any; assignedSlot: any; }; assignedNodesContent: { assignedNodesByNode: any[]; assignedNodes: any[]; }; flattenedNodesContent: { assignedNodesByNode: any[]; assignedNodes: any[]; }; originalEvent: { ...; }; }>` |


# blockquote-tabpanel

## Properties

| Property               | Attribute  | Type      | Default                                          | Description |
|------------------------|------------|-----------|--------------------------------------------------|-------------|
| `globalRootAttributes` |            | `object`  | {"role":"tabpanel","slot":"tabpanel","tabindex":0} |             |
| `selected`             | `selected` | `boolean` | false                                            | The -       |


# blockquote-tabs

![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

[ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

## Usage

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

## Exports

  - BlockquoteTabs

**Mixins:** BlockquoteMixinSlotContent

## Properties

| Property    | Attribute   | Type      | Default | Description                                  |
|-------------|-------------|-----------|---------|----------------------------------------------|
| `autofocus` | `autofocus` | `Boolean` | false   | If present, the tab automatically have focus |
| `label`     | `label`     | `String`  | ""      | `aria-label` for tabs group                  |
| `selected`  | `selected`  | `Number`  | 1       | The tab selected.                            |

## Events

| Event            | Type                                             |
|------------------|--------------------------------------------------|
| `selectedchange` | `CustomEvent<{ selected: number; tab: any; tabpanel: any; }>` |
| `slotchanges`    | `CustomEvent<{ assignedSlotContent: { slotName: any; assignedSlot: any; }; assignedNodesContent: { assignedNodesByNode: any[]; assignedNodes: any[]; }; flattenedNodesContent: { assignedNodesByNode: any[]; assignedNodes: any[]; }; originalEvent: { ...; }; }>` |


# blockquote-tabs

![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

[ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

## Usage

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

## Exports

  - BlockquoteTabs

**Mixins:** BlockquoteMixinSlotContent

## Properties

| Property    | Attribute   | Type      | Default | Description                                  |
|-------------|-------------|-----------|---------|----------------------------------------------|
| `autofocus` | `autofocus` | `Boolean` | false   | If present, the tab automatically have focus |
| `label`     | `label`     | `String`  | ""      | `aria-label` for tabs group                  |
| `selected`  | `selected`  | `Number`  | 1       | The tab selected.                            |

## Events

| Event            | Type                                             |
|------------------|--------------------------------------------------|
| `selectedchange` | `CustomEvent<{ selected: number; tab: any; tabpanel: any; }>` |
| `slotchanges`    | `CustomEvent<{ assignedSlotContent: { slotName: any; assignedSlot: any; }; assignedNodesContent: { assignedNodesByNode: any[]; assignedNodes: any[]; }; flattenedNodesContent: { assignedNodesByNode: any[]; assignedNodes: any[]; }; originalEvent: { ...; }; }>` |
