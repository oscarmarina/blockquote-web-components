var C=Object.defineProperty;var v=(o,t,e)=>t in o?C(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var r=(o,t,e)=>(v(o,typeof t!="symbol"?t+"":t,e),e),p=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)};var c=(o,t,e)=>(p(o,t,"read from private field"),e?e.call(o):t.get(o)),f=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},b=(o,t,e,i)=>(p(o,t,"write to private field"),i?i.call(o,e):t.set(o,e),e);import{e as w,i as k,t as T,w as x,a as m,s as F,b as R,x as n,n as $,T as d}from"./ref-D3YXDBdl.js";class E extends k{constructor(t){if(super(t),t.type!==T.CHILD)throw new Error("blockquoteDirectiveAriaidrefSlot can only be used in child expressions");this.hasSlotNode=!1}render(t,e=!1){if(!t||typeof t!="string"||this.hasSlotNode)return x;const i=document.createElement("slot");return Object.assign(i,{name:t,id:t,hidden:!e}),this.hasSlotNode=!0,i}}const S=w(E),g=(o,t,e={})=>{t.bubbles&&(!o.shadowRoot||t.composed)&&t.stopPropagation();const i=Reflect.construct(t.constructor,[t.type,{...t,...e}]),s=o.dispatchEvent(i);return s||t.preventDefault(),s},h=(o,t,e={})=>{if(typeof t=="string"){const i=t,s=new CustomEvent(i);return g(o,s,e)}return g(o,t,e)},D=(o,t=["dialog","[popover]"])=>{if(!o||!(o instanceof HTMLElement)||o.matches(t.join(",")))return!1;const e=window.getComputedStyle(o),i=e.display==="none"||e.visibility==="hidden",s=o.matches('[disabled], [hidden], [inert], [aria-hidden="true"]');return i||s},q=o=>{var e;var t;return o instanceof HTMLElement?o.matches('a[href],area[href],button:not([disabled]),details,iframe,object,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]:not([tabindex^="-"]),audio[controls],video[controls]')?!0:o.localName.includes("-")&&o.matches('[disabled], [aria-disabled="true"]')?!1:(e=(t=o.shadowRoot)==null?void 0:t.delegatesFocus)!=null?e:!1:!1},N=o=>{let t=null,e=null;for(const i of o)t||(t=i),e=i;return[t,e]};function*_(o,t=0,e=()=>!0,i=()=>!1){if(t&&o.nodeType!==t||i(o))return;e(o)&&(yield o);const s=o instanceof HTMLElement&&o.shadowRoot?o.shadowRoot.children:o instanceof HTMLSlotElement?o.assignedNodes({flatten:!0}):o.childNodes;console.log({o:s});for(const l of s)yield*_(l,t,e,i)}const M=m`:host {
  --_background-color: var(--blockquote-dialog-background-color, rgb(255, 255, 255));
  --_max-height: var(--blockquote-dialog-max-height, min(35rem, calc(100% - 3rem)));
  --_max-width: var(--blockquote-dialog-max-width, min(35rem, calc(100% - 3rem)));
  --_min-height: var(--blockquote-dialog-min-height, 8.75rem);
  --_min-width: var(--blockquote-dialog-min-width, 17.5rem);
  --_padding: var(--blockquote-padding, 1rem);
  box-sizing: border-box;
  display: contents;
  background-color: var(--_background-color);
  margin: auto;
  max-height: var(--_max-height);
  max-width: var(--_max-width);
  min-height: var(--_min-height);
  min-width: var(--_min-width);
  position: fixed;
  height: -moz-fit-content;
  height: fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

dialog {
  background: inherit;
  border: none;
  border-radius: inherit;
  flex-direction: column;
  margin: inherit;
  height: inherit;
  width: inherit;
  max-height: inherit;
  max-width: inherit;
  min-height: inherit;
  min-width: inherit;
  outline: none;
  overflow: visible;
  padding: 0;
}

:host([open]) dialog {
  display: flex;
}

.scroller {
  overflow-y: auto;
  min-height: var(--_min-height);
}

.content {
  padding: var(--_padding);
  min-height: inherit;
}`,I=m`/* Closed state of the dialog */
dialog {
  opacity: 0;
  transform: translateY(16%);
  transition: opacity 200ms ease-out, transform 200ms ease-out, overlay 200ms ease-out allow-discrete, display 200ms ease-out allow-discrete;
  /* Equivalent to
  transition: all 200ms allow-discrete; */
}

/* Open state of the dialog */
dialog[open] {
  opacity: 1;
  transform: translateY(0);
}

/* Before-open state */
/* Needs to be after the previous dialog[open] rule to take effect,
as the specificity is the same */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: translateY(16%);
  }
}
/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
  background-color: rgba(120, 120, 120, 0);
  transition: display 190ms ease-in allow-discrete, overlay 190ms ease-in allow-discrete, background-color 190ms;
  /* Equivalent to
  transition: all 190ms allow-discrete; */
}

dialog[open]::backdrop {
  background-color: rgba(120, 120, 120, 0.25);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */
@starting-style {
  dialog[open]::backdrop {
    background-color: rgba(120, 120, 120, 0);
  }
}`;var a;class u extends F{constructor(){super();r(this,"treewalker",_(this,NodeFilter.SHOW_ELEMENT,q,D));f(this,a,!1);r(this,"dialogRef",R());this._isConnectedCallbackResolve=()=>{},this._isConnectedCallback=this.getIsConnectedCallbackResolve(),this._firstFocusableChild=void 0,this._lastFocusableChild=void 0,this._nextClickIsFromContent=!1,this._overflowRoot=document.body,this.type="alert",this.label="",this.labelledby="",this.addEventListener("submit",this._handleSubmit)}set open(e){const i=c(this,a);e!==i&&(b(this,a,e),e?this.show():this.close())}get open(){return c(this,a)}getIsConnectedCallbackResolve(){return new Promise(e=>{this._isConnectedCallbackResolve=e})}async connectedCallback(){var s,l;(s=super.connectedCallback)==null||s.call(this),await this.updateComplete,this.scroller=(l=this.shadowRoot)==null?void 0:l.querySelector(".scroller");const[e,i]=N(this.treewalker);this._firstFocusableChild=e,this._lastFocusableChild=i,this.role="presentation",this._isConnectedCallbackResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedCallbackResolve()}async show(){var l;await this._isConnectedCallback;const{value:e}=this.dialogRef;if(e!=null&&e.open)return;if(!this._handleOpen()){this.open=!1;return}e==null||e.showModal(),this.requestUpdate();const s=this.querySelector("[autofocus]");s?s==null||s.focus():this._firstFocusableChild&&((l=this._firstFocusableChild)==null||l.focus()),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow","hidden"),this.scroller&&(this.scroller.scrollTop=0)}close(){const{value:e}=this.dialogRef;e!=null&&e.open&&(e==null||e.close(),this.requestUpdate(),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow",""))}get _slotTpl(){return n` <slot></slot> `}get _labeledbyTpl(){return n` ${this.labelledby?S(this.labelledby):""} `}get _contentTpl(){return n` <div class="content" @click=${this._handleContentClick}>${this._slotTpl}</div>`}get _scrollerTpl(){return n` <div class="scroller">${this._contentTpl} ${this._labeledbyTpl}</div> `}get _firstNodeFocusTrapTpl(){var e;return n`
      <span
        ?hidden="${!((e=this.dialogRef.value)!=null&&e.open)}"
        tabindex="0"
        @focus="${this._lastFocusTrap}"
      ></span>
    `}get _lastNodeFocusTrapTpl(){var e;return n`
      <span
        ?hidden="${!((e=this.dialogRef.value)!=null&&e.open)}"
        tabindex="0"
        @focus="${this._firstFocusTrap}"
      ></span>
    `}render(){return n`
      <dialog
        ${$(this.dialogRef)}
        aria-label=${this.label||d}
        aria-labelledby="${this.labelledby||d}"
        role=${this.type==="alert"?"alertdialog":d}
        @click=${this._handleDialogClick}
        @cancel=${this._handleCancel}
        @close=${this._handleClose}
        .returnValue=${this.returnValue||d}
      >
        ${this._firstNodeFocusTrapTpl} ${this._scrollerTpl} ${this._lastNodeFocusTrapTpl}
      </dialog>
    `}_handleSubmit(e){const{target:i,submitter:s}=e,l=(i==null?void 0:i.method)==="dialog",y=(s==null?void 0:s.formMethod)==="dialog";!l&&!y||(this._submitter=s,this.open=!1)}_handleOpen(){return h(this,"open",{cancelable:!0})}_handleClose(e){var s;this.returnValue=(s=this._submitter)!=null?s:this.returnValue,h(this,e,{cancelable:!0})&&(this.open=!1)}_handleCancel(e){const{target:i}=e;i!==this.dialogRef.value||!h(this,e,{cancelable:!0})||(this.open=!1)}_handleDialogClick(){if(this._nextClickIsFromContent){this._nextClickIsFromContent=!1;return}const{value:e}=this.dialogRef;e==null||e.dispatchEvent(new Event("cancel"))}_handleContentClick(){this._nextClickIsFromContent=!0}_firstFocusTrap({relatedTarget:e}){var i;(i=e!=null?this._firstFocusableChild:this._lastFocusableChild)==null||i.focus()}_lastFocusTrap({relatedTarget:e}){var i;(i=e!=null?this._lastFocusableChild:this._firstFocusableChild)==null||i.focus()}}a=new WeakMap,r(u,"styles",[M,I]),r(u,"properties",{open:{type:Boolean,reflect:!0},returnValue:{attribute:!1},label:{type:String},labelledby:{type:String},type:{type:String,reflect:!0}});window.customElements.define("blockquote-dialog",u);
