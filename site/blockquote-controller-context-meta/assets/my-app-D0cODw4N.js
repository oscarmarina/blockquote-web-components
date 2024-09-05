var P=Object.defineProperty;var f=s=>{throw TypeError(s)};var V=(s,e,t)=>e in s?P(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var y=(s,e,t)=>V(s,typeof e!="symbol"?e+"":e,t),$=(s,e,t)=>e.has(s)||f("Cannot "+t);var b=(s,e,t)=>($(s,e,"read from private field"),t?t.call(s):e.get(s)),k=(s,e,t)=>e.has(s)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),C=(s,e,t,i)=>($(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t);import{h as u,a as w,k as m,e as q,i as R,t as L,R as j}from"./directive-81j-zTOk.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i!=null?i:!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class{constructor(e,t,i,o){var c;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=(c=n.subscribe)!=null?c:!1}else this.context=t,this.callback=i,this.subscribe=o!=null?o:!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new _(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class U extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class B extends A{constructor(e,t,i){var o,c;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=n=>{const l=n.composedPath()[0];n.context===this.context&&l!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,l,n.subscribe))},this.onProviderRequest=n=>{const l=n.composedPath()[0];if(n.context!==this.context||l===this.host)return;const h=new Set;for(const[a,{consumerHost:d}]of this.subscriptions)h.has(a)||(h.add(a),d.dispatchEvent(new _(this.context,a,!0)));n.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(c=(o=this.host).addController)==null||c.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new U(this.context))}}const E="context-meta-symbol";class v{constructor(e,{context:t=E,initialValue:i,callback:o}){var c,n;this.context=Symbol.for(t),this.initialValue=i,this.callback=o,this.host=e,this._contextMetaProvider=new B(this.host,{context:this.context,initialValue:this.initialValue}),(n=(c=this.host).addController)==null||n.call(c,this)}get value(){var e;return(e=this._contextMetaConsumer)==null?void 0:e.value}setValue(e,t=!1){var i,o;(o=(i=this._contextMetaProvider)==null?void 0:i.setValue)==null||o.call(i,e,t)}async hostConnected(){await this.host.updateComplete,this._contextMetaConsumer=new T(this.host,{context:this.context,subscribe:!0,callback:this.callback})}}var r;class z extends u{constructor(){super(...arguments);k(this,r)}initOrGetContextProvider(t=E){const i=(t==null?void 0:t.context)!==void 0?{...t}:{context:t};return b(this,r)||C(this,r,new v(this,i)),b(this,r)}connectedCallback(){var t,i;(t=super.connectedCallback)==null||t.call(this),Object.assign(this,{role:(i=this.role)!=null?i:"presentation"})}render(){return m`
      <slot></slot>
    `}}r=new WeakMap,y(z,"styles",[w`
      :host {
        display: block;
      }
      :host([hidden]),
      [hidden] {
        display: none !important;
      }
    `]);const g=["indianred","blue","orange","green","purple"];class M extends u{constructor(){super(),this._consumer=new v(this,{context:"level",initialValue:{level:1,color:g[0]},callback:e=>{const{level:t}=e;this._consumer.setValue({level:t+1,color:g[(t+1)%g.length]})}})}render(){return m`
      <section><slot></slot></section>
    `}}y(M,"styles",w`
    :host {
      display: block;
      text-align: center;
    }
    :host([hidden]) {
      display: none;
    }
  `);customElements.define("my-section",M);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),D=s=>{if((s==null?void 0:s.r)===p)return s==null?void 0:s._$litStatic$},G=s=>({_$litStatic$:s,r:p}),I=(s,...e)=>({_$litStatic$:e.reduce((t,i,o)=>t+(c=>{if(c._$litStatic$!==void 0)return c._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${c}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+s[o+1],s[0]),r:p}),H=new Map,W=s=>(e,...t)=>{const i=t.length;let o,c;const n=[],l=[];let h,a=0,d=!1;for(;a<i;){for(h=e[a];a<i&&(c=t[a],(o=D(c))!==void 0);)h+=o+e[++a],d=!0;a!==i&&l.push(c),n.push(h),a++}if(a===i&&n.push(e[i]),d){const x=n.join("$$lit$$");(e=H.get(x))===void 0&&(n.raw=n,H.set(x,e=n)),t=l}return s(e,...t)},Z=W(m);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S="important",F=" !"+S,J=q(class extends R{constructor(s){var e;if(super(s),s.type!==L.ATTRIBUTE||s.name!=="style"||((e=s.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,t)=>{const i=s[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[e]){const{style:t}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(const i in e){const o=e[i];if(o!=null){this.ft.add(i);const c=typeof o=="string"&&o.endsWith(F);i.includes("-")||c?t.setProperty(i,c?o.slice(0,-11):o,c?S:""):t[i]=o}}return j}});class K extends u{constructor(){super(),this._level=new v(this,{context:"level"})}get _tag(){var t,i;const e=(i=(t=this._level)==null?void 0:t.value)==null?void 0:i.level;return typeof e=="number"&&e>=0&&e<=5?G(`h${e}`):I`p`}render(){var e,t;return Z`
      <${this._tag} style=${J({color:(t=(e=this._level)==null?void 0:e.value)==null?void 0:t.color})}>
        <slot></slot>
      </${this._tag}>`}}customElements.define("my-heading",K);class N extends u{render(){return m`
      <my-section id="root-1">
        <my-heading>Heading level 1</my-heading>
        <my-section id="1">
          <my-heading>Heading level 2</my-heading>
        </my-section>
        <my-section id="2">
          <my-heading>Heading level 2</my-heading>
          <my-section id="2.1">
            <my-heading>Heading level 3</my-heading>
          </my-section>
          <my-section id="2.2">
            <my-heading>Heading level 3</my-heading>
            <my-section id="2.3">
              <my-heading>Heading level 4</my-heading>
            </my-section>
          </my-section>
        </my-section>
        <my-section id="3">
          <my-heading>Heading level 2</my-heading>
          <my-section id="3.1">
            <my-heading>Heading level 3</my-heading>
            <my-section id="3.2">
              <my-heading>Heading level 4</my-heading>
            </my-section>
            <my-section id="3.3">
              <my-heading>Heading level 4</my-heading>
            </my-section>
          </my-section>
        </my-section>
      </my-section>
      <hr />
      <my-section id="root-2">
        <my-heading>Heading level 1</my-heading>
        <my-section id="1">
          <my-heading>Heading level 2</my-heading>
          <my-section id="1.1">
            <my-heading>Heading level 3</my-heading>
            <my-section id="1.2">
              <my-heading>Heading level 4</my-heading>
              <my-section id="1.3">
                <my-heading>Heading level 5</my-heading>
              </my-section>
            </my-section>
          </my-section>
        </my-section>
        <my-section id="2">
          <my-heading>Heading level 2</my-heading>
          <my-section id="2.1">
            <my-heading>Heading level 3</my-heading>
            <my-section id="2.3">
              <my-heading>Heading level 4</my-heading>
            </my-section>
          </my-section>
        </my-section>
      </my-section>
    `}}customElements.define("my-app",N);
