# Rediseño `focusgroup` de `blockquote-tabs` — Estado del proyecto

> Documento de estado del rediseño arquitectónico del componente `blockquote-tabs`
> para alinearlo con la propuesta `focusgroup` de Open UI, las prácticas WAI-ARIA APG
> y el patrón de mejora progresiva.
> Fecha de corte: **26 de julio de 2026**.
> Nota: `README.md` de este paquete se autogenera con `npm run analyze` (cem);
> este documento se mantiene a mano.

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

## 1. Contexto y misión

El componente implementaba a mano tres capas que la plataforma web está a punto de absorber:

1. **Navegación direccional del foco** (flechas, Home/End, wrap) mediante un `switch` en `keydown`.
2. **Roving tabindex** (un único tab tabulable, guiado por la selección) gestionado por cada tab.
3. **Colocación del foco tras cambios de selección**, con un hack `setTimeout(0)` y un latch
   (`_observedFocus`) que hacía que cualquier cambio programático de `selected` robase el foco.

La propuesta **scoped `focusgroup`** de Open UI (whatwg/html#11641, PR whatwg/html#11723)
declara esas mecánicas como responsabilidad del navegador (`focusgroup="tablist nomemory"` +
atributo `focusgroupstart` movido al tab seleccionado), mientras que **la selección queda
explícitamente fuera de su alcance** ("focusgroup is decoupled from selection").

Conclusión rectora del análisis: no se trataba de "añadir soporte focusgroup", sino de una
**inversión de responsabilidades**:

- **El navegador es dueño de las mecánicas de interacción** (navegación, wrap, RTL, tab stop único).
- **El componente es dueño de la semántica y del estado** (selección, activación, ARIA, eventos).
- **Una única especificación de comportamiento, dos motores**: el nativo (atributos) y el
  fallback JS (roving tabindex corregido), elegidos por detección de capacidad, nunca por UA.

## 2. Estado de la plataforma (spike local)

Sonda ejecutada con la matriz Playwright del repo (reflexión IDL `focusGroup`/`focusGroupStart`,
que es la superficie de detección especificada por el explainer):

| Motor      | Versión       | Reflexión `focusGroup` |
| ---------- | ------------- | ---------------------- |
| Chromium   | 149.0.7827.55 | ✗ (también con `--enable-blink-features` en 3 grafías) |
| WebKit     | 26.5          | ✗ |
| Firefox    | 151           | ✗ |

**Consecuencia:** la detección devuelve `false` en todas partes → el componente usa siempre el
motor fallback hoy → riesgo cero al integrar el motor nativo, que se activará automáticamente
cuando los navegadores expongan la reflexión.

## 3. Arquitectura actual

```
┌─────────────────────────────────────────────────────────────────────────┐
│ BlockquoteTabs (host)                                                   │
│ API pública · template · pipeline de commit · scroll chrome             │
│                                                                         │
│  ┌───────────────────────────┐   ┌────────────────────────────────────┐ │
│  │ SelectionController       │   │ FocusGroupController               │ │
│  │ · clamp + write-back      │   │ · triggers de commit:              │ │
│  │ · apply idempotente       │   │   focusin (auto) / click /         │ │
│  │ · pareo tab ↔ tabpanel    │   │   Enter / Space (ambos modos)      │ │
│  │ · ARIA: aria-controls ↔   │   │ · syncEntryPoint() / syncOrientation│ │
│  │   aria-labelledby         │   │ · guardia de tab deshabilitado      │ │
│  │ · re-sync dinámica        │   │ · NUNCA mueve el foco              │ │
│  │ · aviso de desajuste ARIA │   │       │                            │ │
│  │   del autor               │   │       ▼                            │ │
│  └───────────────────────────┘   │  engine (una línea decide)         │ │
│                                  │  ┌──────────────────────────┐      │ │
│  ┌───────────────────────────┐   │  │ RovingTabindexEngine     │      │ │
│  │ ScrollController           │   │  │ (fallback JS, hoy)       │      │ │
│  │ · scrollEdge() h/v         │   │  ├──────────────────────────┤      │ │
│  │ · scrollIntoView() h/v     │   │  │ NativeFocusgroupEngine   │      │ │
│  │ · indicadores por eje      │   │  │ (solo atributos, gated)  │      │ │
│  │ · ResizeController (inner) │   │  └──────────────────────────┘      │ │
│  └───────────────────────────┘   └────────────────────────────────────┘ │
│   focusgroup-tokens.js (gramática aislada)                              │
│   focusgroup-capability.js (detección + override)                       │
└─────────────────────────────────────────────────────────────────────────┘
```

**Propiedad de las responsabilidades:**

| Capa | Responsabilidad |
| --- | --- |
| Navegador (nativo, futuro) | Flechas/Home/End, wrap, eje, RTL/escritura lógica, tab stop garantizado, scroll-del-foco |
| `RovingTabindexEngine` (fallback, hoy) | Lo mismo, en JS: flechas lógicas (RTL), `orientation`, Home/End, wrap, roving tabindex |
| `FocusGroupController` | Triggers de commit, entry point, autofocus boot, guardia disabled; agnóstico de motor |
| `ScrollController` | Indicadores de scroll, reveal-into-view (`scrollIntoView`), consciente de eje (h/v), integración con `ResizeController` |
| `SelectionController` | Estado de selección, saneado, pareo, ARIA, re-sync, aviso de desajuste ARIA del autor |
| `BlockquoteTab` | Presentación + `role=tab` + `aria-selected` (true/ausente); `disabled` → `aria-disabled` |
| `BlockquoteTabPanel` | `role=tabpanel`, `tabindex` solo cuando visible, `hidden` + fallback `aria-hidden` |

## 4. Fases ejecutadas

### Fase 0 — Higiene (patch)

- Typo corregido: `_selectTabpanelLast` → `_selectTabPanelLast`.
- Estado muerto eliminado: `_slotChangesCount`, `_slotNodesCount` (write-only, sin lectores).
- `selectedchange` mantiene `composed: false` **por decisión de diseño**: el evento pertenece
  al scope del componente.
- 4 tests de caracterización añadidos (documentaban el comportamiento heredado antes de tocarlo).

### Fase 1 — `SelectionController` (refactor interno)

- Clamp 1-based al límite más cercano **con write-back**: el atributo reflejado siempre dice la
  verdad (antes `selected="99"` mostraba el tab 1 con el atributo divergente).
- Bug latente eliminado: `selected = nºTabs + 1` lanzaba `TypeError`.
- `#apply` idempotente sobre todos los pares: adiós a `_selectTabLast`/`_selectTabPanelLast`.
- Cableado ARIA bidireccional automático: `aria-controls` (tab) ↔ `aria-labelledby` (tabpanel),
  generando ids solo cuando faltan y **respetando siempre valores del autor**.
- Re-sincronización ante cambios dinámicos de slot: eliminar el tab seleccionado clampea y emite
  evento; añadir tabs los cablea sin evento espurio.

### Fase 2 — `FocusGroupController` + motor fallback

- **`RovingTabindexEngine`**: flechas en dirección **lógica** (RTL corregido — era un bug i18n),
  eje según `orientation`, wrap por módulo, `Home`/`End`, teclas de eje cruzado libres.
- **Nueva API pública**: `activation` (`'auto'` | `'manual'`, default `'auto'`) y
  `orientation` (`'horizontal'` | `'vertical'`, reflejado, con `aria-orientation`).
- **Event-origin tracking estructural**: el pipeline de commit *jamás* mueve el foco; el foco
  solo se coloca dentro de handlers de interacción (keydown/click/focusin). Eliminados
  `_observedFocus`, `_requestFocusUpdate`, `_moveFocusSelectedTab` y el `setTimeout(0)`.
- En modo auto, **la selección sigue al foco** (`focusin` → commit): paridad exacta con el
  modelo nativo. En modo manual, flechas solo enfocan; Enter/Space/click confirman; el tab stop
  roving permanece en el tab seleccionado.
- `BlockquoteTab` deja de gestionar `tabindex` (solo refleja `aria-selected`).
- CSS vertical vía fuente `.scss` (los `*.css.js` son artefactos generados por `sass-style-template`).

### Fase 3 — Motor nativo + detección

- **`focusgroup-tokens.js`**: gramática aislada en un módulo (el spec ya cambió una vez).
  Horizontal → `tablist nomemory`; vertical → `tablist block nomemory`.
- **`focusgroup-capability.js`**: detección por reflexión IDL, fail-safe, con
  `setFocusgroupOverride()` para tests y pinning empresarial.
- **`NativeFocusgroupEngine`**: cero key handling, cero gestión de `tabindex` (el guaranteed tab
  stop nativo lo reemplaza); declara `focusgroup` en el tablist y mueve `focusgroupstart` al tab
  seleccionado en cada commit (semántica `nomemory`: re-entrada con Tab siempre al tab seleccionado).
- La Fase 3 **no tocó ni una línea** del host ni de los tests de Fase 2: el seam funcionó.
- 7 tests dual-run con override forzado (nuestra mitad del contrato nativo).

### Fase 4 — Alineación con plataforma

- **`hidden` + fallback `aria-hidden`** en paneles (decisión del mantenedor): ambos mecanismos
  sincronizados; `hidden` aporta semántica nativa, `aria-hidden` se conserva como compatibilidad
  para consumidores durante la transición.
- **Patch global de `ResizeObserver` eliminado** (efecto secundario de import inaceptable en una
  librería) junto con la dependencia `@juggle/resize-observer`.
- **`autofocus` a nivel tab, delegado por el componente**: la sonda empírica demostró que el
  atributo global nativo **no es fiable hoy** — Chromium 149 lo ignora en elementos genéricos
  (`<div tabindex autofocus>`) y **ningún** navegador (Chromium 149 / WebKit 26.5 / Firefox 151)
  lo honra en elementos insertados dinámicamente, que es como se crean los componentes en
  cualquier app. Por tanto, la propiedad `autofocus` del host **NO está deprecada** (sigue siendo
  API soportada) y, además, el componente detecta `<blockquote-tab autofocus>` al arrancar y lo
  enfoca por JS (tiene prioridad sobre la propiedad). Cuando los navegadores se pongan al día, la
  delegación queda redundante pero inocua.
- **`BlockquoteMixinSlotContent` y `_onSlotChanges`: intactos por decisión del mantenedor.**

### Fase 5 — Scroll controller, tabs deshabilitados, finalización vertical

- **`ScrollController`** extraído del host: gestiona indicadores de scroll, geometría de revelado e integración con `ResizeController`. Consciente de eje (ramas `isVertical` en `scrollEdge` y `scrollIntoViewWithOffset`).
- **Tabs deshabilitados**: guardia `isItemDisabled` en `FocusGroupController` impide la selección por `focusin`, click, Enter/Space. Los tabs siguen siendo enfocables (roving tabindex) según APG.
- **Orientación vertical finalizada**: layout CSS Grid (`auto 1fr`), separador vertical, indicadores superior/inferior (`scaleY`), eje vertical en `ScrollController`. Ya no es experimental.
- **`_setAttributes` mejorado**: los valores `false`/`null`/`undefined` eliminan el atributo en lugar de establecerlo. Aplicado a `aria-hidden`, `aria-selected`, `tabindex` y `aria-disabled`.
- **`aria-selected` en tabs**: solo se establece `"true"` (en el tab seleccionado); los no seleccionados no llevan atributo (`false` es el valor implícito según la especificación ARIA para `tab`).
- **`aria-hidden` en paneles**: solo se establece `"true"` (en paneles ocultos); los paneles visibles no llevan atributo.
- **`tabindex` en tabpanel**: solo el panel visible lleva `tabindex="0"`; los ocultos no tienen atributo `tabindex`.
- **`aria-disabled`**: se elimina correctamente al desactivar `disabled` (corrección de bug).
- **Sincronización dinámica de `orientation`**: `NativeFocusgroupEngine.syncOrientation()` actualiza el token de eje al cambiar la orientación; `RovingTabindexEngine` no-op (lee en vivo). El `updated()` del host delega en `FocusGroupController.syncOrientation()`.
- **Página demo `orientation-toggle.html`**: conmutación en vivo entre horizontal y vertical, ejercitando la sincronización dinámica.

## 5. API pública actual

| API | Valores | Notas |
| --- | --- | --- |
| `selected` | número 1-based, reflejado | Saneado con write-back; identidad por índice (un `value` por id sigue en el backlog) |
| `label` | string | `aria-label` del tablist |
| `activation` | `'auto'` (default) / `'manual'` | auto: selección sigue al foco; manual: Enter/Space/click confirman |
| `orientation` | `'horizontal'` (default, reflejado) / `'vertical'` | Eje de flechas + `aria-orientation` + CSS vertical + eje de scroll |
| `autofocus` | boolean | Enfoca el tab seleccionado al arrancar; alternativa: atributo `autofocus` a nivel tab (delegado en JS, con prioridad) |
| `selectedchange` | evento | `bubbles: true`, **`composed: false` (deliberado)**; `detail: {selected, tab, tabpanel}`; solo se emite en commits |

## 6. Decisiones de diseño deliberadas

| Decisión | Motivo |
| --- | --- |
| `selected` sigue 1-based | Preservar la API pública |
| Commit pipeline nunca enfoca | Los cambios programáticos son focus-safe por construcción (adiós al latch) |
| `composed: false` en el evento | Cada componente maneja solo su scope |
| Mixin de slot conservado | No discutido → no tocado |
| `hidden` + `aria-hidden` en paneles | Transición suave para consumidores; revertir a solo-`hidden` es borrar 1 línea + 1 regla CSS |
| Entry point = tab **seleccionado** (`nomemory`) | Fiel al comportamiento heredado y al quickstart tablist del explainer; la variante "por foco" (memory) queda como opción futura |
| Detección por reflexión, fail-safe | Sin UA sniffing; desconocido ⇒ fallback |
| Gramática de tokens en un solo módulo | El spec es volátil (open questions #1, #5, #7) |

## 7. Estrategia de tests

**54 tests en verde** (Chromium real vía Playwright), cobertura ≈95% statements / 98% funciones.

- **Snapshots** (shadow + light DOM) ignorando `id`, `aria-controls`, `aria-labelledby`
  (ids generados no deterministas); el cableado ARIA se verifica con aserciones dinámicas.
- **Tests de caracterización** (Fase 0) que luego se **invirtieron** al corregir bugs:
  RTL físico → lógico; robo de foco programático → commit nunca enfoca.
- **Suite dual-run**: los tests del motor nativo fuerzan `setFocusgroupOverride(true)` y
  verifican nuestra mitad del contrato (tokens, `focusgroupstart`, ausencia de handlers JS,
  activación engine-independiente). El helper `settle()` resuelve ciclos de update encadenados.

## 8. Cambios de comportamiento observables (para el changelog)

1. `selected` fuera de rango: clamp al límite más cercano **y corrección del atributo** (antes:
   clamp silencioso al primer tab con atributo divergente). Fix de crash en `nºTabs + 1`.
2. Tabs exponen `aria-controls` (mejora ARIA; ids generados cuando faltan).
3. RTL: flechas con dirección lógica (fix i18n).
4. Los cambios programáticos de `selected` **ya no roban el foco**.
5. En modo auto, enfocar un tab (incluso programáticamente) lo selecciona.
6. Enter/Space activan el tab enfocado (Space ya no hace scroll de página).
7. Paneles no seleccionados llevan `hidden` **y** `aria-hidden`.
8. `orientation="horizontal"` se refleja por defecto en el atributo del host.
9. `<blockquote-tab autofocus>` (atributo a nivel tab) soportado vía delegación JS del componente
   (el nativo no es fiable cross-browser hoy).
10. Dependencia `@juggle/resize-observer` eliminada.
11. Lógica de scroll extraída a `ScrollController`: consciente de eje (h/v), estado de indicadores, reveal-on-focus.
12. Tabs deshabilitados soportados: `aria-disabled`, enfocables pero no activables (guardia en click, Enter, Space).
13. Cambio dinámico de `orientation` sincroniza el token `focusgroup` nativo y el eje de flechas del fallback.
14. `aria-selected` eliminado en tabs no seleccionados (`false` implícito según ARIA para `tab`).
15. `aria-hidden` eliminado en tabpanels visibles (sin `"false"` redundante).
16. `tabindex` en tabpanels solo cuando visibles (sin atributo en ocultos).
17. Desajuste de ARIA del autor notificado vía `console.warn` (ayuda en desarrollo).
18. `_setAttributes` mejorado: valores `false`/`null` eliminan el atributo.
19. `aria-disabled` se elimina correctamente al quitar el atributo `disabled` del tab.

## 9. Trabajo pendiente / ítems abiertos

- **Verificación conductual con build flagged**: la participación de elementos slotted en el
  scope del `focusgroup` (flat tree) no está explícita en el explainer; hay que validarla en un
  navegador con la implementación (la suite dual-run está lista: override + mismos tests).
- **`value` / selección por id**: robustez ante inserción/eliminación dinámica de tabs.
- **Fase 5**: promover `controllers/` a un paquete compartido cuando aterrice un segundo
  consumidor (toolbar, radiogroup, menu, listbox, segmented, carousel).
- **Evaluar `@microsoft/focusgroup-polyfill`** cuando se confirme qué revisión del explainer
  implementa (fue escrito contra la gramática original, previa al scoped rewrite).

## 10. Inventario de archivos

**Nuevos (Fases 1–5):**

```
src/controllers/SelectionController.js      — selección: clamp, apply, ARIA, re-sync
src/controllers/FocusGroupController.js     — orquestación de foco/activación (agnóstica de motor)
src/controllers/ScrollController.js         — indicadores de scroll, reveal-into-view, eje-aware
src/controllers/RovingTabindexEngine.js     — motor fallback (flechas lógicas, Home/End, roving)
src/controllers/NativeFocusgroupEngine.js   — motor nativo (tokens + focusgroupstart)
src/controllers/focusgroup-tokens.js        — gramática focusgroup aislada
src/controllers/focusgroup-capability.js    — detección por reflexión + override
```

**Modificados:** `src/BlockquoteTabs.js`, `src/tab/BlockquoteTab.js`,
`src/tabpanel/BlockquoteTabPanel.js`, `src/styles/blockquote-tabs.scss`,
`src/tabpanel/styles/blockquote-tabpanel.scss`, `package.json`, tests y snapshots,
`README.md` + `custom-elements.json` (regenerados con `npm run analyze`).
