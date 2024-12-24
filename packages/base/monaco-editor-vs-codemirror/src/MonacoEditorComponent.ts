/// <reference types="vite/client" />

import {html, LitElement, type PropertyValues} from 'lit';
import {property} from 'lit/decorators.js';
import {createRef, type Ref, ref} from 'lit/directives/ref.js';
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker.js?worker';

import {monacoEditorStyles} from './styles/monaco-editor.css.js';
import {styles} from './styles/monaco-editor-component-styles.css.js';
import {formatter as codeFormatter} from './utils/prettierUtils.js';

self.MonacoEnvironment = {
  getWorker(_: unknown, label: string) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (['css', 'scss', 'less'].includes(label)) {
      return new cssWorker();
    }
    if (['html', 'handlebars', 'razor'].includes(label)) {
      return new htmlWorker();
    }
    if (['typescript', 'javascript'].includes(label)) {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

class MonacoEditorService {
  createEditor(
    container: HTMLElement,
    options: monaco.editor.IStandaloneEditorConstructionOptions,
    updateListener: (update: monaco.editor.IModelContentChangedEvent) => void
  ): monaco.editor.IStandaloneCodeEditor {
    const monacoEditor = monaco.editor.create(container, options);
    monacoEditor.onDidChangeModelContent(updateListener);
    return monacoEditor;
  }

  editorValue(editor: monaco.editor.IStandaloneCodeEditor) {
    return editor?.getValue() ?? '';
  }

  disposeEditor(editor: monaco.editor.IStandaloneCodeEditor): void {
    editor.dispose();
  }
}

export class MonacoEditorComponent extends LitElement {
  private wrapperEditor: Ref<HTMLElement> = createRef();
  private mediaQueryList?: MediaQueryList;
  private editor?: monaco.editor.IStandaloneCodeEditor;
  private editorService: MonacoEditorService;
  private formatter;

  static override styles = [monacoEditorStyles, styles];

  @property({type: Boolean, attribute: 'readonly'}) readOnly?: boolean = false;
  @property() theme?: string;
  @property() language?: string;
  @property({attribute: false}) options?: monaco.editor.IStandaloneEditorConstructionOptions;
  @property() code = '';

  constructor(
    formatter = codeFormatter,
    editorService: MonacoEditorService = new MonacoEditorService()
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
    if (props.has('code') || props.has('language') || props.has('theme') || props.has('options')) {
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
          {
            value: formatted,
            language: this.language ?? 'html',
            theme: this.theme ?? (this.isDark ? 'vs-dark' : 'vs-light'),
            automaticLayout: true,
            tabSize: 2,
            readOnly: this.readOnly,
            ...this.options,
          },
          this.#handleEditorContentChange
        );
      } catch (error) {
        console.error('Monaco Editor error:', error);
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

  #handleEditorContentChange = () => {
    const detail = this.editorService.editorValue(this.editor!);
    console.log('handleEditorContentChange', detail);
    this.dispatchEvent(new CustomEvent('change', {detail}));
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'monaco-editor-component': MonacoEditorComponent;
  }
}
