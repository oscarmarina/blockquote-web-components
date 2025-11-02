var $=Object.defineProperty;var f=r=>{throw TypeError(r)};var V=(r,t,e)=>t in r?$(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var s=(r,t,e)=>V(r,typeof t!="symbol"?t+"":t,e),y=(r,t,e)=>t.has(r)||f("Cannot "+e);var c=(r,t,e)=>(y(r,t,"read from private field"),e?e.call(r):t.get(r)),m=(r,t,e)=>t.has(r)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),p=(r,t,e,n)=>(y(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e);import{c as C,C as x,T as b,a as g,i as w,x as P}from"../assets/BaseContextMetaElement-bW6Wzad_.js";import{e as k,i as A,t as h}from"../assets/directive-BiCZYpXc.js";const E=new WeakMap,D=r=>{let t=E.get(r);return t||(t=new Map,E.set(r,t)),t},U=(r,{context:t=C,initialValue:e})=>{const n={context:t,initialValue:e},a=n.context,u=D(r);let d=u.get(a);return d||(d=new x(r,n),u.set(a,d)),d};var o,i;class _ extends A{constructor(e){super(e);m(this,o);m(this,i);if(e.type!==h.ATTRIBUTE&&e.type!==h.ELEMENT)throw new Error("contextMetaProviderDirective can only be used in an attribute or element directive.");p(this,o,e)}render(e,n){return e!==c(this,i)?(p(this,i,e),this.updateValue(e,n),this.resolveAttrValue(e)):b}updateValue(e,n){const a=c(this,o).element;U(a,n).setValue(e)}resolveAttrValue(e){return c(this,o).type!==h.ATTRIBUTE?b:e}}o=new WeakMap,i=new WeakMap;const M=k(_),l=Symbol.for("symbol-for-surface");class v extends g{constructor(){super(),this._provider=new x(this,{context:l}),this.data=void 0}willUpdate(t){var e;(e=super.willUpdate)==null||e.call(this,t),t.has("data")&&this._provider.setValue(this.data)}render(){return P`
      <p>
        Provider data:
        <code>${this.data}</code>
      </p>
      <consumer-el></consumer-el>
      <div
        id="data-info-1"
        data-info="${M(`${this.data} #data-info-1`,{context:l})}">
        <p>Div Element (Provider)</p>
        <consumer-el></consumer-el>
      </div>
      <div
        id="data-info-2"
        ${M(`${this.data} #data-info-2`,{context:l})}>
        <p>Div Element (Provider)</p>
        <slot></slot>
        <hr />
        <consumer-el></consumer-el>
      </div>
    `}}s(v,"styles",w`
    :host {
      display: block;
      border: 1px solid #adadad;
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
  `),s(v,"properties",{data:{reflect:!0}});customElements.define("provider-el",v);class T extends g{constructor(){super(...arguments);s(this,"_consumer",new x(this,{context:l}))}render(){return P`
      <p>
        Consumer data:
        <code>${this._consumer.value}</code>
      </p>
    `}}s(T,"styles",w`
    :host {
      display: block;
      border: 1px dashed #adadad;
      padding: 0.25rem;
      padding-inline: 0.5rem;
    }
  `);customElements.define("consumer-el",T);export{T as ConsumerEl,v as ProviderEl,l as consumerContext};
