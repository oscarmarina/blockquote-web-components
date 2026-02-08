var i=Object.defineProperty;var r=(s,e,t)=>e in s?i(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>r(s,typeof e!="symbol"?e+"":e,t);import{a as c,i as a,C as u,b as d}from"./assets/BaseContextMetaElement-BHhKyWvZ.js";const l=["indianred","blue","orange","green","purple"];class n extends c{constructor(){super(),this._consumer=new u(this,{context:Symbol.for("level"),initialValue:{level:1,color:l[0]},callback:e=>{const{level:t}=e;this._consumer.setValue({level:t+1,color:l[(t+1)%l.length]})}})}render(){return d`
      <section><slot></slot></section>
    `}}o(n,"styles",a`
    :host {
      display: block;
      text-align: center;
    }

    :host([hidden]) {
      display: none;
    }
  `);customElements.define("my-section",n);export{n as MySection};
