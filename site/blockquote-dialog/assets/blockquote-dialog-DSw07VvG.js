var x=Object.defineProperty;var f=o=>{throw TypeError(o)};var R=(o,t,e)=>t in o?x(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var d=(o,t,e)=>R(o,typeof t!="symbol"?t+"":t,e),g=(o,t,e)=>t.has(o)||f("Cannot "+e);var h=(o,t,e)=>(g(o,t,"read from private field"),e?e.call(o):t.get(o)),m=(o,t,e)=>t.has(o)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),_=(o,t,e,i)=>(g(o,t,"write to private field"),i?i.call(o,e):t.set(o,e),e);import{e as F,i as $,t as S,T as E,a as w,r as D,b as q,x as n,n as N,E as c}from"./ref-DhbzZLmG.js";class M extends ${constructor(t){if(super(t),t.type!==S.CHILD)throw new Error("blockquoteDirectiveAriaidrefSlot can only be used in child expressions");this.hasSlotNode=!1}render(t,e=!1){if(!t||typeof t!="string"||this.hasSlotNode)return E;const i=document.createElement("slot");return Object.assign(i,{name:t,id:t,hidden:!e}),this.hasSlotNode=!0,i}}const L=F(M),V=o=>{let t=null,e=null;for(const i of o)t||(t=i),e=i;return[t,e]},I=(o,t=["dialog","[popover]"])=>{if(!o||!(o instanceof HTMLElement)||o.matches(t.join(",")))return!1;const{display:e,visibility:i,opacity:s}=window.getComputedStyle(o),l=e==="none"||i==="hidden"||i==="collapse"||s==="0",r=o.matches('[disabled], [hidden], [inert], [aria-hidden="true"]');return l||r},j=o=>{var e;var t;return o instanceof HTMLElement?o.matches('a[href],area[href],button:not([disabled]),details,iframe,object,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]:not([tabindex^="-"]),audio[controls],video[controls]')?!0:o.localName.includes("-")&&o.matches('[disabled], [aria-disabled="true"]')?!1:(e=(t=o.shadowRoot)==null?void 0:t.delegatesFocus)!=null?e:!1:!1},y=(o,t,e)=>{t.bubbles&&(!o.shadowRoot||t.composed)&&t.stopPropagation();const{bubbles:i,cancelable:s,composed:l}=t,r=t instanceof CustomEvent?t.detail:null,v={composed:l,bubbles:i,cancelable:s,detail:r,...e},k=e?[t.type,{...t,...v}]:[t.type,t],T=Reflect.construct(t.constructor,k),p=o.dispatchEvent(T);return p||t.preventDefault(),p},u=(o,t,e)=>{if(typeof t=="string"){const i=t,s=new CustomEvent(i);return y(o,s,e)}return y(o,t,e)};function*C({root:o,whatToShow:t=0,filterAccept:e=()=>!0,filterReject:i=()=>!1}){if(t&&o.nodeType!==t||i(o))return;e(o)&&(yield o);const s=o instanceof HTMLElement&&o.shadowRoot?o.shadowRoot.children:o instanceof HTMLSlotElement?o.assignedNodes({flatten:!0}):o.childNodes;for(const l of s)yield*C({root:l,whatToShow:t,filterAccept:e,filterReject:i})}const A=w`:host {
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
}`,H=w`/* Closed state of the dialog */
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
}`;var a;class b extends D{constructor(){super();d(this,"treewalker",C({root:this,whatToShow:NodeFilter.SHOW_ELEMENT,filterAccept:j,filterReject:I}));m(this,a,!1);d(this,"dialogRef",q());this._isConnectedCallbackResolve=()=>{},this._isConnectedCallback=this.getIsConnectedCallbackResolve(),this._firstFocusableChild=void 0,this._lastFocusableChild=void 0,this._nextClickIsFromContent=!1,this._overflowRoot=document.body,this.type="alert",this.label="",this.labelledby="",this.labelledbyVisible=!1,this.addEventListener("submit",this._handleSubmit)}set open(e){const i=h(this,a);e!==i&&(_(this,a,e),e?this.show():this.close())}get open(){return h(this,a)}getIsConnectedCallbackResolve(){return new Promise(e=>{this._isConnectedCallbackResolve=e})}async connectedCallback(){var s,l;(s=super.connectedCallback)==null||s.call(this),await this.updateComplete,this.scroller=(l=this.shadowRoot)==null?void 0:l.querySelector(".scroller");const[e,i]=V(this.treewalker);this._firstFocusableChild=e,this._lastFocusableChild=i,this.role="presentation",this._isConnectedCallbackResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedCallbackResolve()}async show(){var l;await this._isConnectedCallback;const{value:e}=this.dialogRef;if(e!=null&&e.open)return;if(!this._handleOpen()){this.open=!1;return}e==null||e.showModal(),this.requestUpdate();const s=this.querySelector("[autofocus]");s?s==null||s.focus():this._firstFocusableChild&&((l=this._firstFocusableChild)==null||l.focus()),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow","hidden"),this.scroller&&(this.scroller.scrollTop=0)}close(){const{value:e}=this.dialogRef;e!=null&&e.open&&(e==null||e.close(),this.requestUpdate(),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow",""))}get _slotTpl(){return n`
      <slot></slot>
    `}get _labeledbyTpl(){return n`
      ${this.labelledby?L(this.labelledby,this.labelledbyVisible):""}
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
        ${N(this.dialogRef)}
        aria-label=${this.label||c}
        aria-labelledby="${this.labelledby||c}"
        role=${this.type==="alert"?"alertdialog":c}
        @click=${this._handleDialogClick}
        @cancel=${this._handleCancel}
        @close=${this._handleClose}
        .returnValue=${this.returnValue||c}>
        ${this._firstNodeFocusTrapTpl} ${this._scrollerTpl} ${this._lastNodeFocusTrapTpl}
      </dialog>
    `}_handleSubmit(e){const{target:i,submitter:s}=e,l=(i==null?void 0:i.method)==="dialog",r=(s==null?void 0:s.formMethod)==="dialog";!l&&!r||(this._submitter=s,this.open=!1)}_handleOpen(){return u(this,"open",{cancelable:!0})}_handleClose(e){var s;this.returnValue=(s=this._submitter)!=null?s:this.returnValue,u(this,e,{cancelable:!0})&&(this.open=!1)}_handleCancel(e){const{target:i}=e;i!==this.dialogRef.value||!u(this,e,{cancelable:!0})||(this.open=!1)}_handleDialogClick(){if(this._nextClickIsFromContent){this._nextClickIsFromContent=!1;return}const{value:e}=this.dialogRef;e==null||e.dispatchEvent(new Event("cancel"))}_handleContentClick(){this._nextClickIsFromContent=!0}_firstFocusTrap({relatedTarget:e}){var i;(i=e!=null?this._firstFocusableChild:this._lastFocusableChild)==null||i.focus()}_lastFocusTrap({relatedTarget:e}){var i;(i=e!=null?this._lastFocusableChild:this._firstFocusableChild)==null||i.focus()}}a=new WeakMap,d(b,"styles",[A,H]),d(b,"properties",{open:{type:Boolean,reflect:!0},returnValue:{attribute:!1},label:{type:String},labelledby:{type:String},labelledbyVisible:{type:String,attribute:"labelledby-visibile"},type:{type:String,reflect:!0}});window.customElements.define("blockquote-dialog",b);
