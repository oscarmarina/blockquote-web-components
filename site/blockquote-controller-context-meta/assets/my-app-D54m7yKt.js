var H=Object.defineProperty;var k=(i,e,t)=>e in i?H(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var g=(i,e,t)=>k(i,typeof e!="symbol"?e+"":e,t);import{s as u,a as w,x as m,e as C,i as _,t as E,w as S}from"./directive-Dn0V1ncY.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let p=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s!=null?s:!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let V=class{constructor(e,t,s,o){var c;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=(c=n.subscribe)!=null?c:!1}else this.context=t,this.callback=s,this.subscribe=o!=null?o:!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new p(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let M=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},q=class extends M{constructor(e,t,s){var o,c;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=n=>{const l=n.composedPath()[0];n.context===this.context&&l!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,l,n.subscribe))},this.onProviderRequest=n=>{const l=n.composedPath()[0];if(n.context!==this.context||l===this.host)return;const h=new Set;for(const[a,{consumerHost:r}]of this.subscriptions)h.has(a)||(h.add(a),r.dispatchEvent(new p(this.context,a,!0)));n.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(c=(o=this.host).addController)==null||c.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new P(this.context))}};class x{constructor(e,{context:t,initialValue:s,callback:o}){var c,n;this.context=Symbol.for(t),this.initialValue=s,this.callback=o,this.host=e,this._contextMetaProvider=new q(this.host,{context:this.context,initialValue:this.initialValue}),(n=(c=this.host).addController)==null||n.call(c,this)}get value(){var e;return(e=this._contextMetaConsumer)==null?void 0:e.value}setValue(e,t=!1){var s,o;(o=(s=this._contextMetaProvider)==null?void 0:s.setValue)==null||o.call(s,e,t)}async hostConnected(){await this.host.updateComplete,this._contextMetaConsumer=new V(this.host,{context:this.context,subscribe:!0,callback:this.callback})}}const d=["indianred","blue","orange","green","purple"];class f extends u{constructor(){super(),this._consumer=new x(this,{context:"level",initialValue:{level:1,color:d[0]},callback:e=>{const{level:t}=e;this._consumer.setValue({level:t+1,color:d[(t+1)%d.length]})}})}render(){return m`
      <section><slot></slot></section>
    `}}g(f,"styles",w`
    :host {
      display: block;
      text-align: center;
    }
    :host([hidden]) {
      display: none;
    }
  `);customElements.define("my-section",f);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=Symbol.for(""),R=i=>{if((i==null?void 0:i.r)===y)return i==null?void 0:i._$litStatic$},O=i=>({_$litStatic$:i,r:y}),L=(i,...e)=>({_$litStatic$:e.reduce((t,s,o)=>t+(c=>{if(c._$litStatic$!==void 0)return c._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${c}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+i[o+1],i[0]),r:y}),v=new Map,j=i=>(e,...t)=>{const s=t.length;let o,c;const n=[],l=[];let h,a=0,r=!1;for(;a<s;){for(h=e[a];a<s&&(c=t[a],(o=R(c))!==void 0);)h+=o+e[++a],r=!0;a!==s&&l.push(c),n.push(h),a++}if(a===s&&n.push(e[s]),r){const b=n.join("$$lit$$");(e=v.get(b))===void 0&&(n.raw=n,v.set(b,e=n)),t=l}return i(e,...t)},T=j(m);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $="important",A=" !"+$,U=C(class extends _{constructor(i){var e;if(super(i),i.type!==E.ATTRIBUTE||i.name!=="style"||((e=i.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{const s=i[t];return s==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[e]){const{style:t}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?t.removeProperty(s):t[s]=null);for(const s in e){const o=e[s];if(o!=null){this.ft.add(s);const c=typeof o=="string"&&o.endsWith(A);s.includes("-")||c?t.setProperty(s,c?o.slice(0,-11):o,c?$:""):t[s]=o}}return S}});class z extends u{constructor(){super(),this._level=new x(this,{context:"level"})}get _tag(){var t,s;const e=(s=(t=this._level)==null?void 0:t.value)==null?void 0:s.level;return typeof e=="number"&&e>=0&&e<=5?O(`h${e}`):L`p`}render(){var e,t;return T`
      <${this._tag} style=${U({color:(t=(e=this._level)==null?void 0:e.value)==null?void 0:t.color})}>
        <slot></slot>
      </${this._tag}>`}}customElements.define("my-heading",z);class B extends u{render(){return m`
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
    `}}customElements.define("my-app",B);
