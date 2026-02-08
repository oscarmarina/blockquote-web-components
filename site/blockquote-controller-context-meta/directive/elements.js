var T=Object.defineProperty;var x=r=>{throw TypeError(r)};var V=(r,t,e)=>t in r?T(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>V(r,typeof t!="symbol"?t+"":t,e),b=(r,t,e)=>t.has(r)||x("Cannot "+e);var c=(r,t,e)=>(b(r,t,"read from private field"),e?e.call(r):t.get(r)),m=(r,t,e)=>t.has(r)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),u=(r,t,e,n)=>(b(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e);import{c as k,C as f,E as y,a as w,i as M,b as P}from"../assets/BaseContextMetaElement-BHhKyWvZ.js";import{e as C,i as A,t as h}from"../assets/directive-BfKz1_qq.js";const E=new WeakMap,D=r=>{let t=E.get(r);return t||(t=new Map,E.set(r,t)),t},U=(r,{context:t=k,initialValue:e})=>{const n={context:t,initialValue:e},i=n.context,p=D(r);let d=p.get(i);return d||(d=new f(r,n),p.set(i,d)),d};var s,a;class _ extends A{constructor(e){super(e);m(this,s);m(this,a);if(e.type!==h.ATTRIBUTE&&e.type!==h.ELEMENT)throw new Error("contextMetaProviderDirective can only be used in an attribute or element directive.");u(this,s,e)}render(e,n){return e!==c(this,a)?(u(this,a,e),this.updateValue(e,n),this.resolveAttrValue(e)):y}updateValue(e,n){const i=c(this,s).element;U(i,n).setValue(e)}resolveAttrValue(e){return c(this,s).type!==h.ATTRIBUTE?y:e}}s=new WeakMap,a=new WeakMap;const g=C(_),l=Symbol.for("symbol-for-surface");class v extends w{constructor(){super(),this._provider=new f(this,{context:l}),this.data=void 0}willUpdate(t){var e;(e=super.willUpdate)==null||e.call(this,t),t.has("data")&&this._provider.setValue(this.data)}render(){return P`
      <p>
        Provider data:
        <code>${this.data}</code>
      </p>
      <consumer-el></consumer-el>
      <div
        id="data-info-1"
        data-info="${g(`${this.data} #data-info-1`,{context:l})}">
        <p>Div Element (Provider)</p>
        <consumer-el></consumer-el>
      </div>
      <div
        id="data-info-2"
        ${g(`${this.data} #data-info-2`,{context:l})}>
        <p>
          Div Element (Provider)
          <span>with slotted consumer</span>
        </p>
        <slot></slot>
        <hr />
        <consumer-el></consumer-el>
      </div>
    `}}o(v,"styles",M`
    :host {
      display: block;
      border: 2px solid #adadad;
      padding: 0.5rem;
    }

    p {
      margin-block: 0.25rem;
    }

    p ~ * {
      margin-block-start: 1rem;
    }

    div {
      border: 1px solid #adadad;
      padding: 0.5rem;
    }

    span {
      display: block;
    }

    span,
    ::slotted(*) {
      margin-inline-start: 0.5em;
    }
  `),o(v,"properties",{data:{reflect:!0}});customElements.define("provider-el",v);class $ extends w{constructor(){super(...arguments);o(this,"_consumer",new f(this,{context:l}))}render(){return P`
      <p>
        Consumer data:
        <code>${this._consumer.value}</code>
      </p>
    `}}o($,"styles",M`
    :host {
      display: block;
      border: 1px dashed #adadad;
      padding: 0.25rem;
      padding-inline: 0.5rem;
    }
  `);customElements.define("consumer-el",$);export{$ as ConsumerEl,v as ProviderEl,l as consumerContext};
