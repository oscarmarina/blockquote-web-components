/// <reference types="vite/client" />

import {html, LitElement, type PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {createRef, type Ref, ref} from 'lit/directives/ref.js';
import {basicSetup} from 'codemirror';
import {oneDark} from '@codemirror/theme-one-dark';
import {EditorView, keymap, type ViewUpdate} from '@codemirror/view';
import {indentWithTab} from '@codemirror/commands';
import {html as htmlLang} from '@codemirror/lang-html';
import {styles} from './styles/codemirror-component-styles.css.js';
import {formatter as codeFormatter} from './utils/prettierUtils.js';

class CodemirrorService {
  createEditor(
    container: HTMLElement,
    doc: string,
    options: boolean,
    updateListener: (update: ViewUpdate) => void
  ): EditorView {
    const isOneDark = options ? oneDark : [];
    return new EditorView({
      parent: container,
      doc,
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        htmlLang(),
        EditorView.updateListener.of(updateListener),
        isOneDark,
      ],
    });
  }

  editorValue(editor: EditorView) {
    return editor?.state.doc.toString() ?? '';
  }

  disposeEditor(editor: EditorView): void {
    editor.destroy();
  }
}

export class CodemirrorComponent extends LitElement {
  private wrapperEditor: Ref<HTMLElement> = createRef();
  private mediaQueryList?: MediaQueryList;
  private editor?: EditorView;
  private editorService: CodemirrorService;
  private formatter;

  static override styles = [styles];

  @property() code = '';

  constructor(
    formatter = codeFormatter,
    editorService: CodemirrorService = new CodemirrorService()
  ) {
    super();
    this.formatter = formatter;
    this.editorService = editorService;
  }

  get isDark(): boolean {
    return this.mediaQueryList?.matches ?? false;
  }

  override connectedCallback() {
    super.connectedCallback?.();
    this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQueryList.addEventListener('change', this.#onMediaChange);
  }

  override disconnectedCallback() {
    super.disconnectedCallback?.();
    this.mediaQueryList?.removeEventListener('change', this.#onMediaChange);
  }

  override render() {
    return html`
      <slot hidden @slotchange="${this.#onSlotChange}"></slot>
      <div class="wrapper" ${ref(this.wrapperEditor)}></div>
    `;
  }

  protected override updated(props: PropertyValues): void {
    super.updated?.(props);
    if (props.has('code') || props.has('language') || props.has('theme')) {
      this.setEditor();
    }
  }

  async setEditor() {
    if (this.code && this.wrapperEditor.value) {
      try {
        const formatted = await this.formatter(this.code);
        if (this.editor) {
          this.editorService.disposeEditor(this.editor);
        }
        this.editor = this.editorService.createEditor(
          this.wrapperEditor.value,
          formatted,
          this.isDark,
          this.#handleEditorContentChange
        );
      } catch (error) {
        console.error('Codemirror Editor error:', error);
      }
    }
  }

  #onMediaChange = () => {
    this.setEditor();
  };

  #onSlotChange() {
    const code = [...this.children].find((el) => el.tagName === 'TEMPLATE');
    this.code = code?.innerHTML ?? '';
  }

  #handleEditorContentChange = ({docChanged}: {docChanged: boolean}) => {
    if (!docChanged) {
      return;
    }
    const detail = this.editorService.editorValue(this.editor!);
    console.log('handleEditorContentChange', detail);
    this.dispatchEvent(new CustomEvent('change', {detail}));
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'codemirror-component': CodemirrorComponent;
  }
}
