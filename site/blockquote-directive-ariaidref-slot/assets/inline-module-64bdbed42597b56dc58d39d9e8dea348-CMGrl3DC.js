var n=Object.defineProperty;var a=(o,e,t)=>e in o?n(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var s=(o,e,t)=>a(o,typeof e!="symbol"?e+"":e,t);import{e as c,i as h,t as b,w as p,s as u,a as f,x as y,T as g}from"./directive-Dn0V1ncY.js";class m extends h{constructor(e){if(super(e),e.type!==b.CHILD)throw new Error("blockquoteDirectiveAriaidrefSlot can only be used in child expressions");this.hasSlotNode=!1}render(e,t=!1){if(!e||typeof e!="string"||this.hasSlotNode)return p;const i=document.createElement("slot");return Object.assign(i,{name:e,id:e,hidden:!t}),this.hasSlotNode=!0,i}}const S=c(m);class l extends u{constructor(){super(),this._open=!1,this.labelledby=""}set open(e){var i,r;const t=this._open;e!==t&&(this._open=e,e?(i=this.dialog)==null||i.showModal():(r=this.dialog)==null||r.close())}firstUpdated(){var e;this.addEventListener("submit",this._handleSubmit),this.dialog=(e=this.shadowRoot)==null?void 0:e.querySelector("dialog")}render(){return y`
      <dialog aria-labelledby="${this.labelledby||g}"><slot></slot></dialog>
      ${S(this.labelledby)}
    `}_handleSubmit(){this.open=!1}}s(l,"styles",f`
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
  `),s(l,"properties",{open:{type:Boolean,reflect:!0},labelledby:{type:String}});customElements.define("wrapper-dialog",l);const w=document.getElementById("open-dialog"),d=document.querySelector("wrapper-dialog");d.labelledby="idref";w.addEventListener("click",()=>{d.setAttribute("open","")});
