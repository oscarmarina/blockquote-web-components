var y=Object.defineProperty;var w=(t,i,e)=>i in t?y(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var r=(t,i,e)=>(w(t,typeof i!="symbol"?i+"":i,e),e),f=(t,i,e)=>{if(!i.has(t))throw TypeError("Cannot "+e)};var d=(t,i,e)=>(f(t,i,"read from private field"),e?e.call(t):i.get(t)),p=(t,i,e)=>{if(i.has(t))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(t):i.set(t,e)},b=(t,i,e,s)=>(f(t,i,"write to private field"),s?s.call(t,e):i.set(t,e),e);import{e as k,i as v,t as F,w as T,a as m,s as x,b as E,x as n,n as R,T as c}from"./ref-D3YXDBdl.js";class $ extends v{constructor(i){if(super(i),i.type!==F.CHILD)throw new Error("blockquoteDirectiveAriaidrefSlot can only be used in child expressions");this.hasSlotNode=!1}render(i,e=!1){if(!i||typeof i!="string"||this.hasSlotNode)return T;const s=document.createElement("slot");return Object.assign(s,{name:i,id:i,hidden:!e}),this.hasSlotNode=!0,s}}const D=k($),g=(t,i,e={})=>{i.bubbles&&(!t.shadowRoot||i.composed)&&i.stopPropagation();const s=Reflect.construct(i.constructor,[i.type,{...i,...e}]),o=t.dispatchEvent(s);return o||i.preventDefault(),o},h=(t,i,e={})=>{if(typeof i=="string"){const s=i,o=new CustomEvent(s);return g(t,o,e)}return g(t,i,e)},S=(t,i=["dialog","[popover]"])=>{if(!t||!(t instanceof HTMLElement)||t.matches(i.join(",")))return!1;const e=window.getComputedStyle(t),s=e.display==="none"||e.visibility==="hidden",o=t.matches('[disabled], [hidden], [inert], [aria-hidden="true"]');return s||o},q=t=>{var s,o;return t instanceof HTMLElement?t.matches('a[href],area[href],button:not([disabled]),details,iframe,object,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]:not([tabindex^="-"]),audio[controls],video[controls]')?!0:t.localName.includes("-")&&t.matches('[disabled], [aria-disabled="true"]')?!1:(o=(s=t.shadowRoot)==null?void 0:s.delegatesFocus)!=null?o:!1:!1},N=t=>{let i=null,e=null;for(const s of t)i||(i=s),e=s;return[i,e]};function*_(t,i=0,e=()=>!0,s=()=>!1){if(i&&t.nodeType!==i||s(t))return;e(t)&&(yield t);const o=t instanceof HTMLElement&&t.shadowRoot?t.shadowRoot.children:t instanceof HTMLSlotElement?t.assignedNodes({flatten:!0}):t.childNodes;for(const l of o)yield*_(l,i,e,s)}const M=m`:host {
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
}`,H=m`/* Closed state of the dialog */
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
}`;var a;class u extends x{constructor(){super();r(this,"treewalker",_(this,NodeFilter.SHOW_ELEMENT,q,S));p(this,a,!1);r(this,"dialogRef",E());this._isConnectedCallbackResolve=()=>{},this._isConnectedCallback=this.getIsConnectedCallbackResolve(),this._firstFocusableChild=void 0,this._lastFocusableChild=void 0,this._nextClickIsFromContent=!1,this._overflowRoot=document.body,this.type="alert",this.label="",this.labelledby="",this.addEventListener("submit",this._handleSubmit)}set open(e){const s=d(this,a);e!==s&&(b(this,a,e),e?this.show():this.close())}get open(){return d(this,a)}getIsConnectedCallbackResolve(){return new Promise(e=>{this._isConnectedCallbackResolve=e})}async connectedCallback(){var o,l;(o=super.connectedCallback)==null||o.call(this),await this.updateComplete,this.scroller=(l=this.shadowRoot)==null?void 0:l.querySelector(".scroller");const[e,s]=N(this.treewalker);this._firstFocusableChild=e,this._lastFocusableChild=s,this.role="presentation",this._isConnectedCallbackResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedCallbackResolve()}async show(){var l;await this._isConnectedCallback;const{value:e}=this.dialogRef;if(e!=null&&e.open)return;if(!this._handleOpen()){this.open=!1;return}e==null||e.showModal(),this.requestUpdate();const o=this.querySelector("[autofocus]");o?o==null||o.focus():this._firstFocusableChild&&((l=this._firstFocusableChild)==null||l.focus()),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow","hidden"),this.scroller&&(this.scroller.scrollTop=0)}close(){const{value:e}=this.dialogRef;e!=null&&e.open&&(e==null||e.close(),this.requestUpdate(),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow",""))}get _slotTpl(){return n` <slot></slot> `}get _labeledbyTpl(){return n` ${this.labelledby?D(this.labelledby):""} `}get _contentTpl(){return n` <div class="content" @click=${this._handleContentClick}>${this._slotTpl}</div>`}get _scrollerTpl(){return n` <div class="scroller">${this._contentTpl} ${this._labeledbyTpl}</div> `}get _firstNodeFocusTrapTpl(){var e;return n`
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
        ${R(this.dialogRef)}
        aria-label=${this.label||c}
        aria-labelledby="${this.labelledby||c}"
        role=${this.type==="alert"?"alertdialog":c}
        @click=${this._handleDialogClick}
        @cancel=${this._handleCancel}
        @close=${this._handleClose}
        .returnValue=${this.returnValue||c}
      >
        ${this._firstNodeFocusTrapTpl} ${this._scrollerTpl} ${this._lastNodeFocusTrapTpl}
      </dialog>
    `}_handleSubmit(e){const{target:s,submitter:o}=e,l=(s==null?void 0:s.method)==="dialog",C=(o==null?void 0:o.formMethod)==="dialog";!l&&!C||(this._submitter=o,this.open=!1)}_handleOpen(){return h(this,"open",{cancelable:!0})}_handleClose(e){var o;this.returnValue=(o=this._submitter)!=null?o:this.returnValue,h(this,e,{cancelable:!0})&&(this.open=!1)}_handleCancel(e){const{target:s}=e;s!==this.dialogRef.value||!h(this,e,{cancelable:!0})||(this.open=!1)}_handleDialogClick(){if(this._nextClickIsFromContent){this._nextClickIsFromContent=!1;return}const{value:e}=this.dialogRef;e==null||e.dispatchEvent(new Event("cancel"))}_handleContentClick(){this._nextClickIsFromContent=!0}_firstFocusTrap({relatedTarget:e}){var s;(s=e!=null?this._firstFocusableChild:this._lastFocusableChild)==null||s.focus()}_lastFocusTrap({relatedTarget:e}){var s;(s=e!=null?this._lastFocusableChild:this._firstFocusableChild)==null||s.focus()}}a=new WeakMap,r(u,"styles",[M,H]),r(u,"properties",{open:{type:Boolean,reflect:!0},returnValue:{attribute:!1},label:{type:String},labelledby:{type:String},type:{type:String,reflect:!0}});window.customElements.define("blockquote-dialog",u);
