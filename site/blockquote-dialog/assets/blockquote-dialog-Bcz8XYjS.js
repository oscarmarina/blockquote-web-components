var v=Object.defineProperty;var b=t=>{throw TypeError(t)};var w=(t,i,e)=>i in t?v(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var r=(t,i,e)=>w(t,typeof i!="symbol"?i+"":i,e),p=(t,i,e)=>i.has(t)||b("Cannot "+e);var c=(t,i,e)=>(p(t,i,"read from private field"),e?e.call(t):i.get(t)),f=(t,i,e)=>i.has(t)?b("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,e),g=(t,i,e,o)=>(p(t,i,"write to private field"),o?o.call(t,e):i.set(t,e),e);import{e as k,i as T,t as x,R as F,a as _,h as R,b as $,k as n,K as E,D as d}from"./ref-BSaKGIbi.js";class S extends T{constructor(i){if(super(i),i.type!==x.CHILD)throw new Error("blockquoteDirectiveAriaidrefSlot can only be used in child expressions");this.hasSlotNode=!1}render(i,e=!1){if(!i||typeof i!="string"||this.hasSlotNode)return F;const o=document.createElement("slot");return Object.assign(o,{name:i,id:i,hidden:!e}),this.hasSlotNode=!0,o}}const D=k(S),m=(t,i,e={})=>{i.bubbles&&(!t.shadowRoot||i.composed)&&i.stopPropagation();const o=Reflect.construct(i.constructor,[i.type,{...i,...e}]),s=t.dispatchEvent(o);return s||i.preventDefault(),s},h=(t,i,e={})=>{if(typeof i=="string"){const o=i,s=new CustomEvent(o);return m(t,s,e)}return m(t,i,e)},q=(t,i=["dialog","[popover]"])=>{if(!t||!(t instanceof HTMLElement)||t.matches(i.join(",")))return!1;const e=window.getComputedStyle(t),o=e.display==="none"||e.visibility==="hidden",s=t.matches('[disabled], [hidden], [inert], [aria-hidden="true"]');return o||s},N=t=>{var e;var i;return t instanceof HTMLElement?t.matches('a[href],area[href],button:not([disabled]),details,iframe,object,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]:not([tabindex^="-"]),audio[controls],video[controls]')?!0:t.localName.includes("-")&&t.matches('[disabled], [aria-disabled="true"]')?!1:(e=(i=t.shadowRoot)==null?void 0:i.delegatesFocus)!=null?e:!1:!1},M=t=>{let i=null,e=null;for(const o of t)i||(i=o),e=o;return[i,e]};function*y(t,i=0,e=()=>!0,o=()=>!1){if(i&&t.nodeType!==i||o(t))return;e(t)&&(yield t);const s=t instanceof HTMLElement&&t.shadowRoot?t.shadowRoot.children:t instanceof HTMLSlotElement?t.assignedNodes({flatten:!0}):t.childNodes;for(const l of s)yield*y(l,i,e,o)}const V=_`:host {
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
}`,I=_`/* Closed state of the dialog */
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
}`;var a;class u extends R{constructor(){super();r(this,"treewalker",y(this,NodeFilter.SHOW_ELEMENT,N,q));f(this,a,!1);r(this,"dialogRef",$());this._isConnectedCallbackResolve=()=>{},this._isConnectedCallback=this.getIsConnectedCallbackResolve(),this._firstFocusableChild=void 0,this._lastFocusableChild=void 0,this._nextClickIsFromContent=!1,this._overflowRoot=document.body,this.type="alert",this.label="",this.labelledby="",this.labelledbyVisible=!1,this.addEventListener("submit",this._handleSubmit)}set open(e){const o=c(this,a);e!==o&&(g(this,a,e),e?this.show():this.close())}get open(){return c(this,a)}getIsConnectedCallbackResolve(){return new Promise(e=>{this._isConnectedCallbackResolve=e})}async connectedCallback(){var s,l;(s=super.connectedCallback)==null||s.call(this),await this.updateComplete,this.scroller=(l=this.shadowRoot)==null?void 0:l.querySelector(".scroller");const[e,o]=M(this.treewalker);this._firstFocusableChild=e,this._lastFocusableChild=o,this.role="presentation",this._isConnectedCallbackResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedCallbackResolve()}async show(){var l;await this._isConnectedCallback;const{value:e}=this.dialogRef;if(e!=null&&e.open)return;if(!this._handleOpen()){this.open=!1;return}e==null||e.showModal(),this.requestUpdate();const s=this.querySelector("[autofocus]");s?s==null||s.focus():this._firstFocusableChild&&((l=this._firstFocusableChild)==null||l.focus()),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow","hidden"),this.scroller&&(this.scroller.scrollTop=0)}close(){const{value:e}=this.dialogRef;e!=null&&e.open&&(e==null||e.close(),this.requestUpdate(),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow",""))}get _slotTpl(){return n`
      <slot></slot>
    `}get _labeledbyTpl(){return n`
      ${this.labelledby?D(this.labelledby,this.labelledbyVisible):""}
    `}get _contentTpl(){return n`
      <div class="content" @click=${this._handleContentClick}>${this._slotTpl}</div>
    `}get _scrollerTpl(){return n`
      <div class="scroller">${this._contentTpl} ${this._labeledbyTpl}</div>
    `}get _firstNodeFocusTrapTpl(){var e;return n`
      <span
        ?hidden="${!((e=this.dialogRef.value)!=null&&e.open)}"
        tabindex="0"
        @focus="${this._lastFocusTrap}"></span>
    `}get _lastNodeFocusTrapTpl(){var e;return n`
      <span
        ?hidden="${!((e=this.dialogRef.value)!=null&&e.open)}"
        tabindex="0"
        @focus="${this._firstFocusTrap}"></span>
    `}render(){return n`
      <dialog
        ${E(this.dialogRef)}
        aria-label=${this.label||d}
        aria-labelledby="${this.labelledby||d}"
        role=${this.type==="alert"?"alertdialog":d}
        @click=${this._handleDialogClick}
        @cancel=${this._handleCancel}
        @close=${this._handleClose}
        .returnValue=${this.returnValue||d}>
        ${this._firstNodeFocusTrapTpl} ${this._scrollerTpl} ${this._lastNodeFocusTrapTpl}
      </dialog>
    `}_handleSubmit(e){const{target:o,submitter:s}=e,l=(o==null?void 0:o.method)==="dialog",C=(s==null?void 0:s.formMethod)==="dialog";!l&&!C||(this._submitter=s,this.open=!1)}_handleOpen(){return h(this,"open",{cancelable:!0})}_handleClose(e){var s;this.returnValue=(s=this._submitter)!=null?s:this.returnValue,h(this,e,{cancelable:!0})&&(this.open=!1)}_handleCancel(e){const{target:o}=e;o!==this.dialogRef.value||!h(this,e,{cancelable:!0})||(this.open=!1)}_handleDialogClick(){if(this._nextClickIsFromContent){this._nextClickIsFromContent=!1;return}const{value:e}=this.dialogRef;e==null||e.dispatchEvent(new Event("cancel"))}_handleContentClick(){this._nextClickIsFromContent=!0}_firstFocusTrap({relatedTarget:e}){var o;(o=e!=null?this._firstFocusableChild:this._lastFocusableChild)==null||o.focus()}_lastFocusTrap({relatedTarget:e}){var o;(o=e!=null?this._lastFocusableChild:this._firstFocusableChild)==null||o.focus()}}a=new WeakMap,r(u,"styles",[V,I]),r(u,"properties",{open:{type:Boolean,reflect:!0},returnValue:{attribute:!1},label:{type:String},labelledby:{type:String},labelledbyVisible:{type:String,attribute:"labelledby-visibile"},type:{type:String,reflect:!0}});window.customElements.define("blockquote-dialog",u);
