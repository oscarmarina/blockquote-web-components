let idCount = 0;
const generateId = () => `bq-tabs-${(idCount += 1)}`;

/**
 * Clamps a 1-based index to the nearest bound of a list of `length` items.
 * Non-finite values fall back to the first item. With an empty list there is
 * nothing to clamp against, so the value is only normalized (never below 1).
 *
 * @param {number} value
 * @param {number} length
 */
const clampFromOne = (value, length) => {
  const idx = Number.isFinite(value) ? Math.trunc(value) : 1;
  return length > 0 ? Math.min(Math.max(idx, 1), length) : Math.max(idx, 1);
};

/**
 * `SelectionController`
 *
 * Owns the selection semantics of a tab set:
 *
 * - Sanitizes the 1-based `selected` index on write (nearest-bound clamp) and
 *   reports the committed value so the host can correct its reflected attribute
 *   (attribute and effective state never diverge).
 * - Applies the selection idempotently to every tab/tabpanel pair, so no
 *   "last selected item" bookkeeping is needed.
 * - Wires the bidirectional ARIA relationship of each pair (`aria-controls` on
 *   the tab <-> `aria-labelledby` on the tabpanel), generating missing ids and
 *   always respecting author-supplied values; warns when an author-supplied
 *   half does not close the pair (dangling idref).
 * - Re-syncs selection and wiring when the slotted items change.
 *
 * Focus and activation are intentionally out of scope here.
 *
 * @implements {ReactiveController}
 */
export class SelectionController {
  /** @type {HTMLElement[]} */
  #tabs = [];

  /** @type {HTMLElement[]} */
  #tabpanels = [];

  #selectedIndex = 0;

  /** @type {Set<string>} mismatches already surfaced (each one warns once) */
  #warnedMismatches = new Set();

  /**
   * @param {ReactiveControllerHost & {selected: number}} host
   */
  constructor(host) {
    this.host = host;
    host.addController(this);
  }

  get length() {
    return this.#tabs.length;
  }

  get selectedIndex() {
    return this.#selectedIndex;
  }

  get selectedIndexFromOne() {
    return this.#selectedIndex + 1;
  }

  get selectedTab() {
    return this.#tabs[this.#selectedIndex];
  }

  get selectedTabpanel() {
    return this.#tabpanels[this.#selectedIndex];
  }

  /**
   * Updates the slotted items, wires their ARIA relationships and re-syncs the
   * selection. When the current selection falls outside the new range, the
   * host's `selected` is corrected and the commit happens on the next update.
   *
   * @param {HTMLElement[]} [tabs]
   * @param {HTMLElement[]} [tabpanels]
   */
  setItems(tabs = [], tabpanels = []) {
    this.#tabs = [...tabs];
    this.#tabpanels = [...tabpanels];
    this.#wireAriaRelationships();

    const clamped = clampFromOne(this.host.selected, this.length);
    if (clamped !== this.host.selected) {
      this.host.selected = clamped;
      return;
    }
    this.#apply(this.host.selected - 1);
  }

  /**
   * Applies a 1-based selection and returns the committed 1-based value. When
   * the committed value differs from the requested one, nothing is applied and
   * the host should correct `selected` (the commit happens on the next update).
   *
   * @param {number} selectedFromOne
   */
  commit(selectedFromOne) {
    const clamped = clampFromOne(selectedFromOne, this.length);
    if (clamped !== selectedFromOne) {
      return clamped;
    }
    this.#apply(clamped - 1);
    return clamped;
  }

  /**
   * @param {number} index
   */
  #apply(index) {
    if (this.length === 0) {
      return;
    }
    this.#selectedIndex = index;
    this.#tabs.forEach((tab, i) => {
      tab.selected = i === index;
    });
    this.#tabpanels.forEach((tabpanel, i) => {
      tabpanel.selected = i === index;
    });
  }

  #wireAriaRelationships() {
    const pairs = Math.min(this.#tabs.length, this.#tabpanels.length);
    for (let i = 0; i < pairs; i += 1) {
      const tab = this.#tabs[i];
      const tabpanel = this.#tabpanels[i];

      if (!tab.id) {
        tab.id = generateId();
      }
      if (!tabpanel.id) {
        tabpanel.id = generateId();
      }
      if (!tab.hasAttribute('aria-controls')) {
        tab.setAttribute('aria-controls', tabpanel.id);
      }
      if (!tabpanel.hasAttribute('aria-labelledby')) {
        tabpanel.setAttribute('aria-labelledby', tab.id);
      }

      // Author-supplied halves are respected verbatim. When one half does not
      // close the pair, the relationship is left broken (dangling idref), so
      // surface it instead of failing silently (once per distinct mismatch:
      // the wiring re-runs on every slot change).
      const controls = tab.getAttribute('aria-controls');
      this.#warnOnce(
        controls !== tabpanel.id,
        `tab "${tab.id}" has aria-controls="${controls}" but its paired tabpanel has id ` +
          `"${tabpanel.id}". Align the ids or remove the attribute to let the component wire ` +
          `the pair.`
      );
      const labelledby = tabpanel.getAttribute('aria-labelledby');
      this.#warnOnce(
        labelledby !== tab.id,
        `tabpanel "${tabpanel.id}" has aria-labelledby="${labelledby}" but its paired tab has ` +
          `id "${tab.id}". Align the ids or remove the attribute to let the component wire ` +
          `the pair.`
      );
    }
  }

  /**
   * @param {boolean} condition
   * @param {string} message
   */
  #warnOnce(condition, message) {
    if (!condition || this.#warnedMismatches.has(message)) {
      return;
    }
    this.#warnedMismatches.add(message);
    console.warn(`[blockquote-tabs] ${message}`);
  }
}
