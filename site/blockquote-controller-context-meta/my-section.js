import{a as e,f as t,h as n,o as r,s as i}from"./assets/src-BnYe8xbO.js";var a=[`indianred`,`blue`,`orange`,`green`,`purple`],o=class extends i{constructor(){super(),this._consumer=new r(this,{context:Symbol.for(`level`),initialValue:{level:1,color:a[0]},callback:e=>{let{level:t}=e;this._consumer.setValue({level:t+1,color:a[(t+1)%a.length]})}})}render(){return t`
      <section><slot></slot></section>
    `}};e(o,`styles`,n`
    :host {
      display: block;
      text-align: center;
    }

    :host([hidden]) {
      display: none;
    }
  `),customElements.define(`my-section`,o);export{o as MySection};