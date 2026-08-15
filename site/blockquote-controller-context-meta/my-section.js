import{a as e,d as t,m as n,o as r}from"./assets/src-ZFMlM1TH.js";import{t as i}from"./assets/defineProperty-BbfpZ9Tg.js";var a=[`indianred`,`blue`,`orange`,`green`,`purple`],o=class extends r{constructor(){super(),this._consumer=new e(this,{context:Symbol.for(`level`),initialValue:{level:1,color:a[0]},callback:e=>{let{level:t}=e;this._consumer.setValue({level:t+1,color:a[(t+1)%a.length]})}})}render(){return t`
      <section><slot></slot></section>
    `}};i(o,`styles`,n`
    :host {
      display: block;
      text-align: center;
    }

    :host([hidden]) {
      display: none;
    }
  `),customElements.define(`my-section`,o);export{o as MySection};