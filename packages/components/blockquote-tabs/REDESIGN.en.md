# `blockquote-tabs` `focusgroup` redesign — Project status

> Status document for the architectural redesign of the `blockquote-tabs` component,
> aligning it with the Open UI `focusgroup` proposal, WAI-ARIA APG practices and the
> progressive-enhancement pattern.
> As of: **July 26, 2026**.
> Note: this package's `README.md` is auto-generated via `npm run analyze` (cem);
> this document is hand-maintained.

---

**Build · Kimi K3**

Redesigning blockquote-tabs for focusgroup

**Context**
246,760 tokens
24% used
$10.14 spent

**LSP**
LSPs are disabled

---

## 1. Context and mission

The component used to hand-implement three layers the web platform is about to absorb:

1. **Directional focus navigation** (arrows, Home/End, wrap) via a `keydown` switch.
2. **Roving tabindex** (a single tabbable tab, driven by selection) managed by each tab.
3. **Focus placement on selection change**, using a `setTimeout(0)` hack and a latch
   (`_observedFocus`) that made any programmatic `selected` change steal focus.

The Open UI **scoped `focusgroup`** proposal (whatwg/html#11641, PR whatwg/html#11723)
declares those mechanics as browser responsibilities (`focusgroup="tablist nomemory"` +
a `focusgroupstart` attribute moved to the selected tab), while **selection is explicitly
out of scope** ("focusgroup is decoupled from selection").

Governing conclusion of the review: this was never about "adding focusgroup support" but
about a **responsibility inversion**:

- **The browser owns interaction mechanics** (navigation, wrap, RTL, single tab stop).
- **The component owns semantics and state** (selection, activation, ARIA, events).
- **One behavior spec, two engines**: native (attributes) and the corrected JS fallback
  (roving tabindex), chosen by capability detection — never by UA sniffing.

## 2. Platform status (local spike)

Probe run with the repo's Playwright matrix (IDL reflection `focusGroup`/`focusGroupStart`,
the detection surface specified by the explainer):

| Engine  | Version       | `focusGroup` reflection |
| ------- | ------------- | ----------------------- |
| Chromium | 149.0.7827.55 | ✗ (also with `--enable-blink-features` in 3 spellings) |
| WebKit  | 26.5          | ✗ |
| Firefox | 151           | ✗ |

**Consequence:** detection returns `false` everywhere → the component always runs the
fallback engine today → zero risk shipping the native engine, which will activate
automatically once browsers expose the reflection.

## 3. Current architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│ BlockquoteTabs (host)                                                   │
│ Public API · template · commit pipeline · scroll chrome                 │
│                                                                         │
│  ┌───────────────────────────┐   ┌────────────────────────────────────┐ │
│  │ SelectionController       │   │ FocusGroupController               │ │
│  │ · clamp + write-back      │   │ · commit triggers:                 │ │
│  │ · idempotent apply        │   │   focusin (auto) / click /         │ │
│  │ · tab ↔ tabpanel pairing  │   │   Enter / Space (both modes)       │ │
│  │ · ARIA: aria-controls ↔   │   │ · syncEntryPoint() / syncOrientation│ │
│  │   aria-labelledby         │   │ · disabled tab guard               │ │
│  │ · dynamic re-sync         │   │ · NEVER moves focus                │ │
│  │ · Author ARIA mismatch    │   │       │                            │ │
│  │   warning                 │   │       ▼                            │ │
│  └───────────────────────────┘   │  engine (one-line decision)        │ │
│                                  │  ┌──────────────────────────┐      │ │
│  ┌───────────────────────────┐   │  │ RovingTabindexEngine     │      │ │
│  │ ScrollController           │   │  │ (JS fallback, today)     │      │ │
│  │ · scrollEdge() h/v         │   │  ├──────────────────────────┤      │ │
│  │ · scrollIntoView() h/v     │   │  │ NativeFocusgroupEngine   │      │ │
│  │ · axis-aware indicators    │   │  │ (attributes only, gated) │      │ │
│  │ · ResizeController (inner) │   │  └──────────────────────────┘      │ │
│  └───────────────────────────┘   └────────────────────────────────────┘ │
│   focusgroup-tokens.js (isolated grammar)                               │
│   focusgroup-capability.js (detection + override)                       │
└─────────────────────────────────────────────────────────────────────────┘
```

**Ownership of responsibilities:**

| Layer | Responsibility |
| --- | --- |
| Browser (native, future) | Arrows/Home/End, wrap, axis, logical/RTL direction, guaranteed tab stop, focus-into-view scroll |
| `RovingTabindexEngine` (fallback, today) | Same, in JS: logical arrows (RTL), `orientation`, Home/End, wrap, roving tabindex |
| `FocusGroupController` | Commit triggers, entry point, autofocus boot, disabled-tab guard; engine-agnostic |
| `ScrollController` | Scroll-edge indicators, reveal-into-view (`scrollIntoView`), axis-aware (h/v), `ResizeController` integration |
| `SelectionController` | Selection state, sanitizing, pairing, ARIA, re-sync, author ARIA mismatch warning |
| `BlockquoteTab` | Presentation + `role=tab` + `aria-selected` (true/absent); `tabindex` set initially but managed by `FocusGroupController`; `disabled` → `aria-disabled` |
| `BlockquoteTabPanel` | `role=tabpanel`, `tabindex` set initially but removed on hidden panels by `_syncState`; `hidden` + `aria-hidden` fallback |

## 4. Executed phases

### Phase 0 — Hygiene (patch)

- Typo fixed: `_selectTabpanelLast` → `_selectTabPanelLast`.
- Dead state removed: `_slotChangesCount`, `_slotNodesCount` (write-only, no readers).
- `selectedchange` keeps `composed: false` **by design**: the event belongs to the
  component's scope.
- 4 characterization tests added (documenting legacy behavior before changing it).

### Phase 1 — `SelectionController` (internal refactor)

- 1-based clamp to nearest bound **with write-back**: the reflected attribute always tells
  the truth (previously `selected="99"` showed tab 1 with a divergent attribute).
- Latent crash fixed: `selected = tabCount + 1` threw a `TypeError`.
- Idempotent `#apply` over all pairs: `_selectTabLast`/`_selectTabPanelLast` are gone.
- Automatic bidirectional ARIA wiring: `aria-controls` (tab) ↔ `aria-labelledby`
  (tabpanel), generating ids only when missing and **always respecting author values**.
- Dynamic slot re-sync: removing the selected tab clamps selection and fires the event;
  adding tabs wires them with no spurious event.

### Phase 2 — `FocusGroupController` + fallback engine

- **`RovingTabindexEngine`**: arrows resolved in **logical** direction (RTL fixed — it was
  an i18n bug), axis from `orientation`, modulo wrap, `Home`/`End`, cross-axis keys left free.
- **New public API**: `activation` (`'auto'` | `'manual'`, default `'auto'`) and
  `orientation` (`'horizontal'` | `'vertical'`, reflected, with `aria-orientation`).
- **Structural event-origin tracking**: the commit pipeline *never* moves focus; focus is
  only placed inside interaction handlers (keydown/click/focusin). Removed `_observedFocus`,
  `_requestFocusUpdate`, `_moveFocusSelectedTab` and the `setTimeout(0)`.
- In auto mode **selection follows focus** (`focusin` → commit): exact parity with the native
  model. In manual mode, arrows only focus; Enter/Space/click commit; the roving tab stop
  stays on the selected tab.
- `BlockquoteTab` no longer manages `tabindex` (it only reflects `aria-selected`).
- Vertical CSS via the `.scss` source (`*.css.js` files are artifacts generated by
  `sass-style-template`).

### Phase 3 — Native engine + detection

- **`focusgroup-tokens.js`**: grammar isolated in a single module (the spec has already
  changed once). Horizontal → `tablist nomemory`; vertical → `tablist block nomemory`.
- **`focusgroup-capability.js`**: IDL-reflection detection, fail-safe, with
  `setFocusgroupOverride()` for tests and enterprise pinning.
- **`NativeFocusgroupEngine`**: zero key handling, zero `tabindex` management (the native
  guaranteed tab stop replaces it); declares `focusgroup` on the tablist and moves
  `focusgroupstart` to the selected tab on every commit (`nomemory` semantics: sequential
  re-entry always lands on the selected tab).
- Phase 3 **did not touch a single line** of the host or of the Phase 2 tests: the seam worked.
- 7 dual-run tests with a forced override (our half of the native contract).

### Phase 4 — Platform alignment

- **`hidden` + `aria-hidden` fallback** on panels (maintainer's decision): both mechanisms
  kept in sync; `hidden` provides native semantics, `aria-hidden` stays as consumer
  compatibility during the transition.
- **Global `ResizeObserver` patch removed** (an unacceptable import side effect in a
  library) along with the `@juggle/resize-observer` dependency.
- **Tab-level `autofocus`, delegated by the component**: an empirical probe showed the native
  global attribute is **unreliable today** — Chromium 149 ignores it on generic elements
  (`<div tabindex autofocus>`) and **no** engine (Chromium 149 / WebKit 26.5 / Firefox 151)
  honors it for dynamically inserted elements, which is how components are created in any app.
  Therefore the host `autofocus` property is **NOT deprecated** (it remains supported API) and,
  additionally, the component detects `<blockquote-tab autofocus>` on boot and focuses it in JS
  (taking precedence over the property). Once browsers catch up, the delegation becomes
  redundant but harmless.
- **`BlockquoteMixinSlotContent` and `_onSlotChanges`: untouched per maintainer's decision.**

### Phase 5 — Scroll controller, disabled tabs, vertical finalization

- **`ScrollController`** extracted from the host: owns scroll-edge indicators, reveal-into-view geometry and resize-observer integration. Axis-aware (`isVertical` branches in `scrollEdge` and `scrollIntoViewWithOffset`).
- **Disabled tabs**: `isItemDisabled` guard in `FocusGroupController` prevents selection via `focusin`, click, Enter/Space. Tabs remain focusable (roving tabindex) per APG.
- **Vertical orientation finalized**: CSS Grid layout (`auto 1fr`), vertical separator, top/bottom scroll indicators (`scaleY`), vertical axis in `ScrollController`. No longer experimental.
- **`_setAttributes` enhanced**: `false`/`null`/`undefined` values remove the attribute instead of setting it. Applied to `aria-hidden`, `aria-selected`, `tabindex` and `aria-disabled`.
- **`aria-selected` on tabs**: only `"true"` is set (on the selected tab); unselected tabs carry no attribute (`false` is the implicit default per ARIA spec for `tab` role).
- **`aria-hidden` on panels**: only `"true"` is set (on hidden panels); visible panels carry no attribute (removed).
- **`tabindex` on tabpanel**: only the visible panel carries `tabindex="0"`; hidden panels have no `tabindex` attribute.
- **`aria-disabled`**: properly removed when `disabled` is toggled off (bug fix).
- **Dynamic `orientation` sync**: `NativeFocusgroupEngine.syncOrientation()` pushes the axis token on orientation change; `RovingTabindexEngine` no-op (reads live). Host `updated()` delegates to `FocusGroupController.syncOrientation()`. Tested with override.
- **Demo page `orientation-toggle.html`**: live switching between horizontal and vertical, exercising the dynamic sync path.
- **Experimental label removed**: `orientation` JSDoc no longer says "vertical is experimental"; the feature is production-ready.

## 5. Current public API

| API | Values | Notes |
| --- | --- | --- |
| `selected` | 1-based number, reflected | Sanitized with write-back; index identity (id-based `value` still on the backlog) |
| `label` | string | `aria-label` of the tablist |
| `activation` | `'auto'` (default) / `'manual'` | auto: selection follows focus; manual: Enter/Space/click commit |
| `orientation` | `'horizontal'` (default, reflected) / `'vertical'` | Arrow axis + `aria-orientation` + vertical CSS + scroll axis |
| `autofocus` | boolean | Focuses the selected tab on boot; alternative: tab-level `autofocus` attribute (JS-delegated, takes precedence) |
| `selectedchange` | event | `bubbles: true`, **`composed: false` (deliberate)**; `detail: {selected, tab, tabpanel}`; fires on commits only |

**`BlockquoteTab` API:**

| API | Values | Notes |
| --- | --- | --- |
| `disabled` | boolean, reflected | Sets `aria-disabled="true"` when present. Disabled tabs are focusable but not activatable (click, Enter, Space are guarded by `FocusGroupController`). |

## 6. Deliberate design decisions

| Decision | Rationale |
| --- | --- |
| `selected` stays 1-based | Preserve the public API |
| Commit pipeline never focuses | Programmatic changes are focus-safe by construction (latch is gone) |
| `composed: false` on the event | Each component handles only its own scope |
| Slot mixin retained | Not discussed → not touched |
| `hidden` + `aria-hidden` on panels | Smooth transition for consumers; reverting to hidden-only is deleting 1 JS line + 1 CSS rule |
| Entry point = **selected** tab (`nomemory`) | Faithful to legacy behavior and to the explainer's tablist quickstart; the focus-based variant (memory) remains a future option |
| Reflection-based detection, fail-safe | No UA sniffing; unknown ⇒ fallback |
| Token grammar in a single module | The spec is volatile (open questions #1, #5, #7) |
| `_setAttributes` removes on `false`/`null` | Cleaner DOM; avoids redundant `"false"` attributes |
| `aria-selected` only when `true` | Implicit `false` per ARIA spec for `tab` role; reduces DOM noise |
| `aria-hidden` only when `true` | Visible panels don't need explicit `"false"`; `hidden` provides native semantics |
| `tabindex` on tabpanel only when visible | Hidden panels are inert; no need for `tabindex` attribute |
| Author ARIA mismatch warning | Dev aid; surfaces dangling idrefs early |

## 7. Test strategy

**54 tests passing** (real Chromium via Playwright), coverage: 93.63% statements (353/377), 84.23% branches (171/203), 97.16% functions (103/106), 93.47% lines (344/368).

- **Snapshots** (shadow + light DOM) ignoring `id`, `aria-controls`, `aria-labelledby`
  (non-deterministic generated ids); ARIA wiring is verified with dynamic assertions.
- **Characterization tests** (Phase 0) later **inverted** as bugs were fixed:
  physical → logical RTL; programmatic focus theft → commit never focuses.
- **Dynamic orientation sync**: `NativeFocusgroupEngine` re-syncs the `focusgroup` token when `orientation` changes.
- **Dual-run suite**: native-engine tests force `setFocusgroupOverride(true)` and verify our
  half of the contract (tokens, `focusgroupstart`, absence of JS key handlers,
  engine-independent activation). The `settle()` helper resolves chained update cycles.

## 8. Observable behavior changes (for the changelog)

1. Out-of-range `selected`: clamp to nearest bound **and attribute correction** (previously:
   silent clamp to the first tab with a divergent attribute). Crash fix at `tabCount + 1`.
2. Tabs expose `aria-controls` (ARIA improvement; ids generated when missing).
3. RTL: arrows follow logical direction (i18n fix).
4. Programmatic `selected` changes **no longer steal focus**.
5. In auto mode, focusing a tab (even programmatically) selects it.
6. Enter/Space activate the focused tab (Space no longer scrolls the page).
7. Unselected panels carry `hidden` **and** `aria-hidden`.
8. `orientation="horizontal"` is reflected on the host attribute by default.
9. `<blockquote-tab autofocus>` (tab-level attribute) supported via JS delegation by the
   component (the native one is unreliable cross-browser today).
10. The `@juggle/resize-observer` dependency was removed.
11. Scroll logic extracted to `ScrollController`: axis-aware (horizontal/vertical), indicator state, reveal-on-focus.
12. Disabled tabs supported: `aria-disabled`, focusable but not activatable (click, Enter, Space guard).
13. Dynamic `orientation` change now syncs the native `focusgroup` token and the fallback arrow axis.
14. `aria-selected` on unselected tabs removed (implicit `false` per ARIA spec for `tab` role).
15. `aria-hidden` removed on visible tabpanels (no redundant `"false"`).
16. `tabindex` on tabpanels only when visible (no attribute on hidden ones).
17. Author ARIA half-mismatch surfaced via `console.warn` (dev aid).
18. `_setAttributes` enhanced: `false`/`null` values remove the attribute.
19. `aria-disabled` property properly removed when `disabled` attribute removed from tab.

## 9. Pending work / open items

- **Behavioral verification with a flagged build**: slotted-element participation in the
  `focusgroup` scope (flat tree) is not explicit in the explainer; it must be validated in a
  browser with the implementation (the dual-run suite is ready: override + same tests).
- **Id-based `value` selection**: robustness under dynamic tab insertion/removal.
- **Phase 5**: promote `controllers/` to a shared package once a second consumer lands
  (toolbar, radiogroup, menu, listbox, segmented buttons, carousel).
- **Evaluate `@microsoft/focusgroup-polyfill`** once we confirm which explainer revision it
  implements (it was written against the original, pre-scoped grammar).
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.
- **`ScrollController` offset fragility**: `offsetTop`/`offsetLeft` in `scrollIntoViewWithOffset`
  are relative to `.hold` (offsetParent), not `.scroll-content`. Works today but fragile if
  layout changes. Consider using `getBoundingClientRect()` for both elements.

## 10. File inventory

**New (Phases 1–5):**

```
src/controllers/SelectionController.js      — selection: clamp, apply, ARIA, re-sync
src/controllers/FocusGroupController.js     — focus/activation orchestration (engine-agnostic)
src/controllers/ScrollController.js         — scroll-edge indicators, reveal-into-view, axis-aware
src/controllers/RovingTabindexEngine.js     — fallback engine (logical arrows, Home/End, roving)
src/controllers/NativeFocusgroupEngine.js   — native engine (tokens + focusgroupstart)
src/controllers/focusgroup-tokens.js        — isolated focusgroup grammar
src/controllers/focusgroup-capability.js    — reflection detection + override
```

**Modified:** `src/BlockquoteTabs.js`, `src/tab/BlockquoteTab.js`,
`src/tabpanel/BlockquoteTabPanel.js`, `src/styles/blockquote-tabs.scss`,
`src/tabpanel/styles/blockquote-tabpanel.scss`, `package.json`, tests and snapshots,
`README.md` + `custom-elements.json` (regenerated via `npm run analyze`).
