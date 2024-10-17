var d=Object.defineProperty;var a=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var s=(o,e,t)=>a(o,typeof e!="symbol"?e+"":e,t);import{e as c,i as h,t as b,T as p,r as f,a as u,x as y,E as g}from"./directive-BjmeAx3g.js";class m extends h{constructor(e){if(super(e),e.type!==b.CHILD)throw new Error("blockquoteDirectiveAriaidrefSlot can only be used in child expressions");this.hasSlotNode=!1}render(e,t=!1){if(!e||typeof e!="string"||this.hasSlotNode)return p;const i=document.createElement("slot");return Object.assign(i,{name:e,id:e,hidden:!t}),this.hasSlotNode=!0,i}}const S=c(m);class l extends f{constructor(){super(),this._open=!1,this.labelledby=""}set open(e){var i,r;const t=this._open;e!==t&&(this._open=e,e?(i=this.dialog)==null||i.showModal():(r=this.dialog)==null||r.close())}firstUpdated(){var e;this.addEventListener("submit",this._handleSubmit),this.dialog=(e=this.shadowRoot)==null?void 0:e.querySelector("dialog")}render(){return y`
      <dialog @close=${this._handleClose} aria-labelledby="${this.labelledby||g}">
        <slot></slot>
      </dialog>
      ${S(this.labelledby)}
    `}_handleClose(){this.open=!1}_handleSubmit(){this.open=!1}}s(l,"styles",u`
    :host {
      display: block;
      box-sizing: border-box;
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
  `),s(l,"properties",{open:{type:Boolean,reflect:!0},labelledby:{type:String}});customElements.define("wrapper-dialog",l);const x=document.getElementById("open-dialog"),n=document.querySelector("wrapper-dialog");n.labelledby="idref";x.addEventListener("click",()=>{n.setAttribute("open","")});
