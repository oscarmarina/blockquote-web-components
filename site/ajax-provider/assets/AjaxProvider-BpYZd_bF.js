var et=t=>{throw TypeError(t)};var tt=(t,e,r)=>e.has(t)||et("Cannot "+r);var E=(t,e,r)=>(tt(t,e,"read from private field"),r?r.call(t):e.get(t)),C=(t,e,r)=>e.has(t)?et("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),K=(t,e,r,o)=>(tt(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r);import{u as St,f as Tt,r as A,a as $,x as u,e as _t,i as Rt,t as Nt,T as Dt,E as Oe}from"./directive-ezkwLk_9.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:Tt},It=(t=Ct,e,r)=>{const{kind:o,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),o==="accessor"){const{name:a}=r;return{set(s){const c=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,c,t)},init(s){return s!==void 0&&this.P(a,void 0,t),s}}}if(o==="setter"){const{name:a}=r;return function(s){const c=this[a];e.call(this,s),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+o)};function m(t){return(e,r)=>typeof r=="object"?It(t,e,r):((o,i,n)=>{const a=i.hasOwnProperty(n);return i.constructor.createProperty(n,a?{...o,wrapped:!0}:o),a?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ut(t,e){if(t!==void 0){let r=0;for(const o of t)yield e(o,r++)}}var Ce=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},B;let ue=(B=class extends A{constructor(){super(...arguments),this.dimmed=!1}render(){return this.name}},B.styles=$`
    :host {
      color: var(--ix-object-name-color);
    }
    :host([dimmed]) {
      opacity: var(--ix-object-name-dimmed-opacity, 0.6);
    }
  `,B);Ce([m({reflect:!0})],ue.prototype,"name",void 0);Ce([m({type:Boolean,reflect:!0})],ue.prototype,"dimmed",void 0);ue=Ce([S("ix-object-name")],ue);var ft=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n};class ce{constructor(e){this.map=e}}class le{constructor(e){this.set=e}}var H;let $e=(H=class extends A{render(){const e=this.data;switch(typeof e){case"bigint":return u`<span class="number">${String(e)}n</span>`;case"number":return u`<span class="number">${String(e)}</span>`;case"string":return u`<span class="string">"${e}"</span>`;case"boolean":return u`<span class="boolean">${String(e)}</span>`;case"undefined":return u`<span class="undefined">undefined</span>`;case"object":return e===null?u`<span class="null">null</span>`:e instanceof Map?u`<span>Map(${e.size})</span>`:e instanceof Set?u`<span>Set(${e.size})</span>`:e instanceof ce?u`<span>(${e.map.size})</span>`:e instanceof le?u`<span>(${e.set.size})</span>`:e instanceof Date?u`<span>${e.toString()}</span>`:e instanceof RegExp?u`<span class="RegExp"> ${e.toString()} </span>`:Array.isArray(e)?u`<span>${`Array(${e.length})`}</span>`:e.constructor?typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)?u`<span>${`Buffer[${e.length}]`}</span>`:u`<span>${e.constructor.name}</span>`:u`<span>Object</span>`;case"function":return u`<span>
          <span class="FunctionPrefix">ƒ&nbsp;</span>
          <span class="FunctionName"> ${e.name}() </span>
        </span>`;case"symbol":return u`<span class="symbol">${e.toString()}</span>`;default:return u`<span></span>`}}},H.styles=$`
    :host {
      color: var(--ix-object-value-color);
    }
    .number {
      color: var(--ix-object-value-number-color);
    }
    .string {
      color: var(--ix-object-value-string-color);
    }
    .boolean {
      color: var(--ix-object-value-boolean-color);
    }
    .undefined {
      color: var(--ix-object-value-undefined-color);
    }
    .null {
      color: var(--ix-object-value-null-color);
    }
    .RegExp {
      color: var(--ix-object-value-regexp-color);
    }
    .FunctionPrefix {
      color: var(--ix-object-value-function-prefix-color);
      font-style: 'italic';
    }
    .FunctionName {
      color: var(--ix-object-value-function-name-color);
      font-style: 'italic';
    }
    .symbol {
      color: var(--ix-object-value-symbol-color);
    }
  `,H);ft([m({attribute:!1})],$e.prototype,"data",void 0);$e=ft([S("ix-object-value")],$e);const me=$`
  :host {
    --ix-base-font-family: Menlo, monospace;
    --ix-base-font-size: 11px;
    --ix-base-line-height: 1.2;

    --ix-base-background-color: white;
    --ix-base-color: black;

    --ix-object-name-color: rgb(136, 19, 145);
    --ix-object-value-null-color: rgb(128, 128, 128);
    --ix-object-value-undefined-color: rgb(128, 128, 128);
    --ix-object-value-regexp-color: rgb(196, 26, 22);
    --ix-object-value-string-color: rgb(196, 26, 22);
    --ix-object-value-symbol-color: rgb(196, 26, 22);
    --ix-object-value-number-color: rgb(28, 0, 207);
    --ix-object-value-boolean-color: rgb(28, 0, 207);
    --ix-object-value-function-prefix-color: rgb(13, 34, 170);
    --ix-object-preview-font-style: italic;

    --ix-html-tag-color: rgb(168, 148, 166);
    --ix-html-tagname-color: rgb(136, 18, 128);
    --ix-html-tagname-text-transform: lowercase;
    --ix-html-attribute-name-color: rgb(153, 69, 0);
    --ix-html-attribute-value-color: rgb(26, 26, 166);
    --ix-html-comment-color: rgb(35, 110, 37);
    --ix-html-doctype-color: rgb(192, 192, 192);

    --ix-arrow-color: #6e6e6e;
    --ix-arrow-margin-right: 3;
    --ix-arrow-font-size: 12;
    --ix-arrow-animation-duration: 0.1s;

    --ix-treenode-font-family: Menlo, monospace;
    --ix-treenode-font-size: 11px;
    --ix-treenode-line-height: 1.2;
    --ix-treenode-padding-left: 12;

    --ix-table-border-color: #aaa;
    --ix-table-th-background-color: #eee;
    --ix-table-th-hover-color: hsla(0, 0%, 90%, 1);
    --ix-table-sort-icon-color: #6e6e6e;
    --ix-table-tr-even-background-color: rgb(234, 243, 255);
    --ix-table-tr-odd-background-color: #fff;
  }
`,Q="$",rt="*",Lt=t=>Array.from({length:t},(e,r)=>[Q].concat(Array.from({length:r},()=>"*")).join(".")),Ut=(t,e,r,o=0,i)=>{const n=[...Lt(o)].concat(r).filter(s=>typeof s=="string"),a=new Map;if(n.forEach(s=>{const c=s.split("."),l=(f,p,h)=>{var y;if(h===c.length){a.set(p,!0);return}const d=c[h],w=e.hasChildren(f);if(h===0)w&&(d===Q||d===rt)&&l(f,Q,h+1);else if(d===rt)for(const{data:T,name:M}of(y=e.children(f))!=null?y:[])w&&l(T,`${p}.${M}`,h+1);else if(f!=null){const T=f[d];w&&l(T,`${p}.${d}`,h+1)}};l(t,"",0)}),i!==void 0)for(const[s,c]of i)c&&a.set(s,!0);return a};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=_t(class extends Rt{constructor(t){var e;if(super(t),t.type!==Nt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(i=this.nt)!=null&&i.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Dt}});var ae=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},ne,Ae,oe,F;let J=(F=class extends A{constructor(){super();C(this,ne);C(this,oe);this.expanded=!1,this.showGutter=!1,K(this,oe,r=>{if(!E(this,ne,Ae))return;const o=this.renderRoot.querySelector("slot#children");r.composedPath().includes(o)||this.dispatchEvent(new Se)}),this.addEventListener("click",E(this,oe))}render(){return u`
      <div
        id="gutter"
        class=${Mt({hidden:!E(this,ne,Ae),placeholder:this.showGutter})}
      >
        <span id="arrow">▶</span>
      </div>
      <div id="container">
        <slot name="label"></slot>
        <slot id="children" role="group"></slot>
      </div>
    `}},ne=new WeakSet,Ae=function(){var r;return this.item&&((r=this.treeAdapter)==null?void 0:r.hasChildren(this.item.data))},oe=new WeakMap,F.styles=[me,$`
      :host {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        cursor: default;
        color: var(--ix-base-color);
        background-color: var(--ix-base-background-color);
        line-height: var(--ix-treenode-line-height);
        font-family: var(--ix-treenode-font-family);
        font-size: var(--ix-treenode-font-size);
      }

      #gutter {
        color: var(--ix-arrow-color);
        font-size: var(--ix-arrow-font-size);
        margin-right: var(--ix-arrow-margin-right);
        user-select: none;
        transform: rotateZ(0deg);
        flex: 0 0 1em;

        &.hidden:not(.placeholder) {
          width: 0;
        }

        &.hidden > #arrow {
          display: none;
        }
      }

      #container {
        flex: auto;
      }

      #arrow {
        display: inline-block;
        transition: transform var(--ix-arrow-animation-duration) ease 0s;
      }

      slot#children {
        display: none;
        margin: 0;
        padding-left: var(--ix-treenode-padding-left);
      }

      :host([expanded]) {
        #arrow {
          transform: rotateZ(90deg);
        }
        slot#children {
          display: block;
        }
      }
    `],F);ae([m({type:Boolean,reflect:!0})],J.prototype,"expanded",void 0);ae([m({attribute:!1})],J.prototype,"treeAdapter",void 0);ae([m({type:Boolean})],J.prototype,"showGutter",void 0);ae([m({attribute:!1})],J.prototype,"item",void 0);J=ae([S("ix-tree-node")],J);const he=class he extends Event{constructor(){super(he.eventName,{cancelable:!0})}};he.eventName="toggle-expanded";let Se=he;const dt=Object.getOwnPropertyNames;function qt(t,e){const r=Object.getOwnPropertyDescriptor(t,e);if(r!=null&&r.get)try{return r.get()}catch{return r.get}return t[e]}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*nt(t,e){if(t!==void 0){let r=-1;for(const o of t)r>-1&&(yield e),r++,yield o}}var ye=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},G;let ee=(G=class extends A{constructor(){super(...arguments),this.maxProperties=5,this.maxArrayItems=10}render(){const e=this.data;if(typeof e!="object"||e===null||e instanceof Date||e instanceof RegExp)return u`<ix-object-value .data=${e}></ix-object-value>`;if(Array.isArray(e)){const r=e.slice(0,this.maxArrayItems).map(i=>u`<ix-object-value .data=${i}></ix-object-value>`),o=e.length;return o>this.maxArrayItems&&r.push(u`<span>…</span>`),u`
        <span>${o===0?"":`(${o}) `}</span
        ><span>[${nt(r,", ")}]</span>
      `}else{const r=dt(e),o=r.slice(0,this.maxProperties).map(n=>{const a=qt(e,n);return u`<span
            ><ix-object-name .name=${n||'""'}></ix-object-name
            >:&nbsp;<ix-object-value .data=${a}></ix-object-value
          ></span>`});r.length>this.maxProperties&&o.push(u`<span>…</span>`);const i=e.constructor===void 0||e.constructor.name==="Object"?void 0:`${e.constructor.name} `;return u`
        <span>${i}</span
        ><span>{${nt(o,", ")}}</span>
      `}}},G.styles=$`
    :host {
      color: var(--ix-object-preview-color);
      font-style: var(--ix-object-preview-font-style);
    }
  `,G);ye([m({attribute:!1})],ee.prototype,"data",void 0);ye([m({type:Number})],ee.prototype,"maxProperties",void 0);ye([m({type:Number})],ee.prototype,"maxArrayItems",void 0);ee=ye([S("ix-object-preview")],ee);var I=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},z;class Bt{constructor(e){C(this,z);this.expandedPaths=new Map,K(this,z,e)}requestUpdate(){return E(this,z).requestUpdate()}hasChildren(e){return typeof e=="object"&&e!==null||typeof e=="function"?Array.isArray(e)?e.length>0:typeof e[Symbol.iterator]=="function"?!0:dt(e).length>0:!1}children(e){if(!this.hasChildren(e))return;const r=[];if(e instanceof Map)r.push({name:"[[Entries]]",data:new ce(e),synthetic:!0,expanded:!0});else{if(e instanceof ce)return r.push(...Array.from(e.map.entries()).map(([i,n])=>({name:String(i),data:n}))),r;if(e instanceof Set)r.push({name:"[[Entries]]",data:new le(e),synthetic:!0,expanded:!0});else{if(e instanceof le)return r.push(...Array.from(e.set.values()).map((i,n)=>({name:String(n),data:i}))),r;!Array.isArray(e)&&typeof e[Symbol.iterator]=="function"&&r.push(...Array.from(e).map((i,n)=>({name:n.toString(),data:i})))}}const o=Object.getOwnPropertyDescriptors(e);return r.push(...Object.entries(o).map(([i,n])=>({name:i,data:e[i],isNonEnumerable:!n.enumerable}))),r}render({item:e,depth:r=0,isNonEnumerable:o,parentPath:i}){var f,p;const n=i===void 0?Q:`${i}.${e.name}`,a=(p=(f=this.expandedPaths.get(n))!=null?f:e.expanded)!=null?p:!1,s=typeof e.name=="string"&&e.name!==""?u`<ix-object-name
            .name=${e.name}
            .dimmed=${o!=null?o:!1}
          ></ix-object-name>`:r===0?void 0:u`<ix-object-preview .data=${e.name}></ix-object-preview>`,c=e.data instanceof ce||e.data instanceof le?void 0:r===0?u`<ix-object-preview .data=${e.data}></ix-object-preview>`:u`<ix-object-value .data=${e.data}></ix-object-value>`,l=s&&c?u`<span>: </span>`:void 0;return u`<ix-tree-node
      .item=${e}
      .treeAdapter=${this}
      .expanded=${a}
      .showGutter=${r>0}
      @toggle-expanded=${()=>{var d,w;const h=(w=(d=this.expandedPaths.get(n))!=null?d:e.expanded)!=null?w:!1;this.expandedPaths.set(n,!h),E(this,z).requestUpdate()}}
      ><span slot="label">${s}${l}${c}</span
      >${ut(this.children(e.data),h=>this.render({item:h,depth:r+1,parentPath:n}))}</ix-tree-node
    >`}}z=new WeakMap;var R,V;let N=(V=class extends A{constructor(){super(...arguments);C(this,R);this.expandLevel=1,this.showNonenumerable=!1,this.sortObjectKeys=!1,K(this,R,new Bt(this))}willUpdate(r){if(r.has("data")||r.has("expandPaths")||r.has("expandLevel")){const o=Array.isArray(this.expandPaths)?this.expandPaths:this.expandPaths===void 0?[]:[this.expandPaths];E(this,R).expandedPaths=Ut(this.data,E(this,R),o,this.expandLevel,E(this,R).expandedPaths),this.requestUpdate()}}render(){return E(this,R).render({item:{data:this.data,name:this.name}})}},R=new WeakMap,V.styles=[me,$`
      :host {
        display: block;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `],V);I([m({type:Number})],N.prototype,"expandLevel",void 0);I([m()],N.prototype,"expandPaths",void 0);I([m()],N.prototype,"name",void 0);I([m({type:Object})],N.prototype,"data",void 0);I([m({type:Boolean})],N.prototype,"showNonenumerable",void 0);I([m({attribute:!1})],N.prototype,"sortObjectKeys",void 0);N=I([S("ix-object-inspector")],N);var Ie=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},X;let fe=(X=class extends A{constructor(){super(...arguments),this.expanded=!1}render(){return u`&lt;/<span class="tagName">${this.name}</span>&gt;`}},X.styles=$`
    :host {
      white-space: nowrap;
      color: var(--ix-html-tag-color);
    }

    .tagName {
      color: var(--ix-html-tagname-color);
      text-transform: var(--ix-html-tagname-text-transform);
    }
  `,X);Ie([m({attribute:!1})],fe.prototype,"name",void 0);Ie([m({type:Boolean,reflect:!0})],fe.prototype,"expanded",void 0);fe=Ie([S("ix-dom-close-tag")],fe);var be=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Y;let te=(Y=class extends A{constructor(){super(...arguments),this.expanded=!1}render(){var e;return u`<span
      >&lt;<span class="tagName">${this.name}</span>${(e=this.attributeData)==null?void 0:e.map(r=>u`<span>
            <span class="htmlAttributeName">${r.name}</span>="<span
              class="htmlAttributeValue"
              >${r.value}</span
            >"</span
          >`)}&gt;</span
    >`}},Y.styles=$`
    :host {
      white-space: nowrap;
      color: var(--ix-html-tag-color);
    }

    .tagName {
      color: var(--ix-html-tagname-color);
      text-transform: var(--ix-html-tagname-text-transform);
    }

    .htmlAttributeName {
      color: var(--ix-html-attribute-name-color);
    }

    .htmlAttributeValue {
      color: var(--ix-html-attribute-value-color);
    }
  `,Y);be([m()],te.prototype,"name",void 0);be([m({attribute:!1})],te.prototype,"attributeData",void 0);be([m({type:Boolean,reflect:!0})],te.prototype,"expanded",void 0);te=be([S("ix-dom-open-tag")],te);const pt=(t,e=80)=>{var r,o;return t.nodeType===Node.ELEMENT_NODE&&((r=t.childNodes)==null?void 0:r.length)===1&&t.childNodes[0].nodeType===Node.TEXT_NODE&&((o=t.childNodes[0].textContent)==null?void 0:o.length)<e};var Le=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},k;let de=(k=class extends A{constructor(){super(...arguments),this.expanded=!1}render(){const{data:e}=this;if(e===void 0)return u`<span>undefined</span>`;switch(e.nodeType){case Node.ELEMENT_NODE:{const r=this.expanded?Oe:pt(e)?e.childNodes[0].textContent:"…";return u`<span
          >${u`<ix-dom-open-tag
            .name=${e.tagName}
            .attributeData=${e.attributes}
          ></ix-dom-open-tag>`}${r}${this.expanded?Oe:u`<ix-dom-close-tag
                .name=${e.tagName}
              ></ix-dom-close-tag>`}</span
        >`}case Node.TEXT_NODE:return u`<span>${e.textContent}</span>`;case Node.CDATA_SECTION_NODE:return u`<span>${"<![CDATA["+e.textContent+"]]>"}</span>`;case Node.PROCESSING_INSTRUCTION_NODE:return u`<span>${e.nodeName}</span>`;case Node.COMMENT_NODE:return u`<span class="htmlComment"
          >&lt;!--${e.textContent}--&gt;</span
        >`;case Node.DOCUMENT_NODE:return u`<span>${e.nodeName}</span>`;case Node.DOCUMENT_TYPE_NODE:return u`<span class="htmlDoctype">
          &lt;!DOCTYPE ${e.name}
          ${e.publicId?` PUBLIC "${e.publicId}"`:""}
          ${!e.publicId&&e.systemId?" SYSTEM":""}
          ${e.systemId?` "${e.systemId}"`:""} &gt;
        </span>`;case Node.DOCUMENT_FRAGMENT_NODE:return u`<span>${e.nodeName}</span>`;default:return}}},k.styles=[me,$`
      :host {
        display: inline-block;
        white-space: nowrap;
      }
      .htmlComment {
        color: var(--ix-html-comment-color);
      }
      .htmlDoctype {
        color: var(--ix-html-doctype-color);
      }
    `],k);Le([m({attribute:!1})],de.prototype,"data",void 0);Le([m({type:Boolean,reflect:!0})],de.prototype,"expanded",void 0);de=Le([S("ix-dom-node-preview")],de);var ht=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},ie;class Ht{constructor(e){C(this,ie);this.expandedPaths=new Map,K(this,ie,e)}hasChildren(e){var r,o;return((o=(r=e.childNodes)==null?void 0:r.length)!=null?o:0)>0&&!(e.nodeType===Node.ELEMENT_NODE&&pt(e))}children(e){if(this.hasChildren(e))return e.childNodes.map((r,o)=>({name:`${r.nodeName}[${o}]`,data:r}))}render({item:e,depth:r=0,parentPath:o}){var a,s;const i=o===void 0?Q:`${o}.${e.name}`,n=(s=(a=this.expandedPaths.get(i))!=null?a:e.expanded)!=null?s:!1;return u`<ix-tree-node
      .item=${e}
      .treeAdapter=${this}
      .depth=${r}
      .expanded=${n}
      .shouldShowPlaceholder=${r>0}
      @toggle-expanded=${()=>{var l,f;const c=(f=(l=this.expandedPaths.get(i))!=null?l:e.expanded)!=null?f:!1;this.expandedPaths.set(i,!c),E(this,ie).requestUpdate()}}
      ><ix-dom-node-preview
        slot="label"
        .data=${e.data}
        .expanded=${n}
      ></ix-dom-node-preview
      >${ut(this.children(e.data),c=>this.render({item:c,depth:r+1,parentPath:i}))}${e.data.nodeType===Node.ELEMENT_NODE?u`<ix-dom-close-tag .name=${e.data.tagName}></ix-dom-close-tag>`:Oe}</ix-tree-node
    >`}}ie=new WeakMap;var ve,W;let Te=(W=class extends A{constructor(){super(...arguments);C(this,ve,new Ht(this))}render(){return this.data===void 0?u`<span>undefined</span>`:E(this,ve).render({item:{data:this.data}})}},ve=new WeakMap,W.styles=[me,$`
      :host {
        display: block;
      }
    `],W);ht([m({attribute:!1})],Te.prototype,"data",void 0);Te=ht([S("ix-dom-inspector")],Te);const vt=new WeakMap;function Ft(t,e){let r=e;for(;r;){if(vt.get(r)===t)return!0;r=Object.getPrototypeOf(r)}return!1}function Gt(t){return e=>{if(Ft(t,e))return e;const r=t(e);return vt.set(r,t),r}}var _e=function(t,e){return _e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},_e(t,e)};function Ue(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");_e(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var Z=function(){return Z=Object.assign||function(e){for(var r,o=1,i=arguments.length;o<i;o++){r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Z.apply(this,arguments)};function zt(t,e,r,o){function i(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function s(f){try{l(o.next(f))}catch(p){a(p)}}function c(f){try{l(o.throw(f))}catch(p){a(p)}}function l(f){f.done?n(f.value):i(f.value).then(s,c)}l((o=o.apply(t,e||[])).next())})}function mt(t,e){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(f){return c([l,f])}}function c(l){if(o)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(r=0)),r;)try{if(o=1,i&&(n=l[0]&2?i.return:l[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,l[1])).done)return n;switch(i=0,n&&(l=[l[0]&2,n.value]),l[0]){case 0:case 1:n=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){r.label=l[1];break}if(l[0]===6&&r.label<n[1]){r.label=n[1],n=l;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(l);break}n[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(f){l=[6,f],i=0}finally{o=n=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function re(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],o=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Re(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var o=r.call(t),i,n=[],a;try{for(;(e===void 0||e-- >0)&&!(i=o.next()).done;)n.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return n}function Ne(t,e,r){if(r||arguments.length===2)for(var o=0,i=e.length,n;o<i;o++)(n||!(o in e))&&(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}function q(t){return this instanceof q?(this.v=t,this):new q(t)}function Vt(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=r.apply(t,e||[]),i,n=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),i[Symbol.asyncIterator]=function(){return this},i;function a(d){return function(w){return Promise.resolve(w).then(d,p)}}function s(d,w){o[d]&&(i[d]=function(y){return new Promise(function(T,M){n.push([d,y,T,M])>1||c(d,y)})},w&&(i[d]=w(i[d])))}function c(d,w){try{l(o[d](w))}catch(y){h(n[0][3],y)}}function l(d){d.value instanceof q?Promise.resolve(d.value.v).then(f,p):h(n[0][2],d)}function f(d){c("next",d)}function p(d){c("throw",d)}function h(d,w){d(w),n.shift(),n.length&&c(n[0][0],n[0][1])}}function Xt(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],r;return e?e.call(t):(t=typeof re=="function"?re(t):t[Symbol.iterator](),r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r);function o(n){r[n]=t[n]&&function(a){return new Promise(function(s,c){a=t[n](a),i(s,c,a.done,a.value)})}}function i(n,a,s,c){Promise.resolve(c).then(function(l){n({value:l,done:s})},a)}}function j(t){return typeof t=="function"}function Me(t){var e=function(o){Error.call(o),o.stack=new Error().stack},r=t(e);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var we=Me(function(t){return function(r){t(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(o,i){return i+1+") "+o.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function ot(t,e){if(t){var r=t.indexOf(e);0<=r&&t.splice(r,1)}}var qe=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,r,o,i,n;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=re(a),c=s.next();!c.done;c=s.next()){var l=c.value;l.remove(this)}}catch(y){e={error:y}}finally{try{c&&!c.done&&(r=s.return)&&r.call(s)}finally{if(e)throw e.error}}else a.remove(this);var f=this.initialTeardown;if(j(f))try{f()}catch(y){n=y instanceof we?y.errors:[y]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var h=re(p),d=h.next();!d.done;d=h.next()){var w=d.value;try{it(w)}catch(y){n=n!=null?n:[],y instanceof we?n=Ne(Ne([],Re(n)),Re(y.errors)):n.push(y)}}}catch(y){o={error:y}}finally{try{d&&!d.done&&(i=h.return)&&i.call(h)}finally{if(o)throw o.error}}}if(n)throw new we(n)}},t.prototype.add=function(e){var r;if(e&&e!==this)if(this.closed)it(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(e)}},t.prototype._hasParent=function(e){var r=this._parentage;return r===e||Array.isArray(r)&&r.includes(e)},t.prototype._addParent=function(e){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(e),r):r?[r,e]:e},t.prototype._removeParent=function(e){var r=this._parentage;r===e?this._parentage=null:Array.isArray(r)&&ot(r,e)},t.prototype.remove=function(e){var r=this._finalizers;r&&ot(r,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}();qe.EMPTY;function yt(t){return t instanceof qe||t&&"closed"in t&&j(t.remove)&&j(t.add)&&j(t.unsubscribe)}function it(t){j(t)?t():t.unsubscribe()}var bt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},xt={setTimeout:function(t,e){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return setTimeout.apply(void 0,Ne([t,e],Re(r)))},clearTimeout:function(t){var e=xt.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function gt(t){xt.setTimeout(function(){throw t})}function at(){}function Yt(t){t()}var Be=function(t){Ue(e,t);function e(r){var o=t.call(this)||this;return o.isStopped=!1,r?(o.destination=r,yt(r)&&r.add(o)):o.destination=Kt,o}return e.create=function(r,o,i){return new De(r,o,i)},e.prototype.next=function(r){this.isStopped||this._next(r)},e.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(r){this.destination.next(r)},e.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(qe),kt=Function.prototype.bind;function je(t,e){return kt.call(t,e)}var Wt=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var r=this.partialObserver;if(r.next)try{r.next(e)}catch(o){se(o)}},t.prototype.error=function(e){var r=this.partialObserver;if(r.error)try{r.error(e)}catch(o){se(o)}else se(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(r){se(r)}},t}(),De=function(t){Ue(e,t);function e(r,o,i){var n=t.call(this)||this,a;if(j(r)||!r)a={next:r!=null?r:void 0,error:o!=null?o:void 0,complete:i!=null?i:void 0};else{var s;n&&bt.useDeprecatedNextContext?(s=Object.create(r),s.unsubscribe=function(){return n.unsubscribe()},a={next:r.next&&je(r.next,s),error:r.error&&je(r.error,s),complete:r.complete&&je(r.complete,s)}):a=r}return n.destination=new Wt(a),n}return e}(Be);function se(t){gt(t)}function Jt(t){throw t}var Kt={closed:!0,next:at,error:Jt,complete:at},He=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function wt(t){return t}function Zt(t){return t.length===0?wt:t.length===1?t[0]:function(r){return t.reduce(function(o,i){return i(o)},r)}}var L=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(e,r,o){var i=this,n=er(e)?e:new De(e,r,o);return Yt(function(){var a=i,s=a.operator,c=a.source;n.add(s?s.call(n,c):c?i._subscribe(n):i._trySubscribe(n))}),n},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(r){e.error(r)}},t.prototype.forEach=function(e,r){var o=this;return r=st(r),new r(function(i,n){var a=new De({next:function(s){try{e(s)}catch(c){n(c),a.unsubscribe()}},error:n,complete:i});o.subscribe(a)})},t.prototype._subscribe=function(e){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(e)},t.prototype[He]=function(){return this},t.prototype.pipe=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return Zt(e)(this)},t.prototype.toPromise=function(e){var r=this;return e=st(e),new e(function(o,i){var n;r.subscribe(function(a){return n=a},function(a){return i(a)},function(){return o(n)})})},t.create=function(e){return new t(e)},t}();function st(t){var e;return(e=t!=null?t:bt.Promise)!==null&&e!==void 0?e:Promise}function Qt(t){return t&&j(t.next)&&j(t.error)&&j(t.complete)}function er(t){return t&&t instanceof Be||Qt(t)&&yt(t)}function tr(t){return j(t==null?void 0:t.lift)}function Fe(t){return function(e){if(tr(e))return e.lift(function(r){try{return t(r,this)}catch(o){this.error(o)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ge(t,e,r,o,i){return new rr(t,e,r,o,i)}var rr=function(t){Ue(e,t);function e(r,o,i,n,a,s){var c=t.call(this,r)||this;return c.onFinalize=a,c.shouldUnsubscribe=s,c._next=o?function(l){try{o(l)}catch(f){r.error(f)}}:t.prototype._next,c._error=n?function(l){try{n(l)}catch(f){r.error(f)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=i?function(){try{i()}catch(l){r.error(l)}finally{this.unsubscribe()}}:t.prototype._complete,c}return e.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var o=this.closed;t.prototype.unsubscribe.call(this),!o&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},e}(Be),nr=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function or(t){return j(t==null?void 0:t.then)}function ir(t){return j(t[He])}function ar(t){return Symbol.asyncIterator&&j(t==null?void 0:t[Symbol.asyncIterator])}function sr(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function cr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var lr=cr();function ur(t){return j(t==null?void 0:t[lr])}function fr(t){return Vt(this,arguments,function(){var r,o,i,n;return mt(this,function(a){switch(a.label){case 0:r=t.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,q(r.read())];case 3:return o=a.sent(),i=o.value,n=o.done,n?[4,q(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,q(i)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}})})}function dr(t){return j(t==null?void 0:t.getReader)}function pr(t){if(t instanceof L)return t;if(t!=null){if(ir(t))return hr(t);if(nr(t))return vr(t);if(or(t))return mr(t);if(ar(t))return jt(t);if(ur(t))return yr(t);if(dr(t))return br(t)}throw sr(t)}function hr(t){return new L(function(e){var r=t[He]();if(j(r.subscribe))return r.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function vr(t){return new L(function(e){for(var r=0;r<t.length&&!e.closed;r++)e.next(t[r]);e.complete()})}function mr(t){return new L(function(e){t.then(function(r){e.closed||(e.next(r),e.complete())},function(r){return e.error(r)}).then(null,gt)})}function yr(t){return new L(function(e){var r,o;try{for(var i=re(t),n=i.next();!n.done;n=i.next()){var a=n.value;if(e.next(a),e.closed)return}}catch(s){r={error:s}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}e.complete()})}function jt(t){return new L(function(e){xr(t,e).catch(function(r){return e.error(r)})})}function br(t){return jt(fr(t))}function xr(t,e){var r,o,i,n;return zt(this,void 0,void 0,function(){var a,s;return mt(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),r=Xt(t),c.label=1;case 1:return[4,r.next()];case 2:if(o=c.sent(),!!o.done)return[3,4];if(a=o.value,e.next(a),e.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),i={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),o&&!o.done&&(n=r.return)?[4,n.call(r)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}var gr=Me(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function wr(t,e){return new Promise(function(r,o){var i=!1,n;t.subscribe({next:function(a){n=a,i=!0},error:o,complete:function(){i?r(n):o(new gr)}})})}function jr(t,e){return Fe(function(r,o){var i=0;r.subscribe(Ge(o,function(n){o.next(t.call(e,n,i++))}))})}function Pt(t){return Fe(function(e,r){var o=null,i=!1,n;o=e.subscribe(Ge(r,void 0,void 0,function(a){n=pr(t(a,Pt(t)(e))),o?(o.unsubscribe(),o=null,n.subscribe(r)):i=!0})),i&&(o.unsubscribe(),o=null,n.subscribe(r))})}function Pr(t,e,r){var o=j(t)||e||r?{next:t,error:e,complete:r}:t;return o?Fe(function(i,n){var a;(a=o.subscribe)===null||a===void 0||a.call(o);var s=!0;i.subscribe(Ge(n,function(c){var l;(l=o.next)===null||l===void 0||l.call(o,c),n.next(c)},function(){var c;s=!1,(c=o.complete)===null||c===void 0||c.call(o),n.complete()},function(c){var l;s=!1,(l=o.error)===null||l===void 0||l.call(o,c),n.error(c)},function(){var c,l;s&&((c=o.unsubscribe)===null||c===void 0||c.call(o)),(l=o.finalize)===null||l===void 0||l.call(o)}))}):wt}function Et(t){switch(t.responseType){case"json":{if("response"in t)return t.response;var e=t;return JSON.parse(e.responseText)}case"document":return t.responseXML;case"text":default:{if("response"in t)return t.response;var e=t;return e.responseText}}}var Er=function(){function t(e,r,o,i){i===void 0&&(i="download_load"),this.originalEvent=e,this.xhr=r,this.request=o,this.type=i;var n=r.status,a=r.responseType;this.status=n!=null?n:0,this.responseType=a!=null?a:"";var s=r.getAllResponseHeaders();this.responseHeaders=s?s.split(`
`).reduce(function(f,p){var h=p.indexOf(": ");return f[p.slice(0,h)]=p.slice(h+2),f},{}):{},this.response=Et(r);var c=e.loaded,l=e.total;this.loaded=c,this.total=l}return t}(),pe=Me(function(t){return function(r,o,i){this.message=r,this.name="AjaxError",this.xhr=o,this.request=i,this.status=o.status,this.responseType=o.responseType;var n;try{n=Et(o)}catch{n=o.responseText}this.response=n}}),Or=function(){function t(e,r){return pe.call(this,"ajax timeout",e,r),this.name="AjaxTimeoutError",this}return t.prototype=Object.create(pe.prototype),t}();function $r(t,e){return U({method:"GET",url:t,headers:e})}function Ar(t,e,r){return U({method:"POST",url:t,body:e,headers:r})}function Sr(t,e){return U({method:"DELETE",url:t,headers:e})}function Tr(t,e,r){return U({method:"PUT",url:t,body:e,headers:r})}function _r(t,e,r){return U({method:"PATCH",url:t,body:e,headers:r})}var Rr=jr(function(t){return t.response});function Nr(t,e){return Rr(U({method:"GET",url:t,headers:e}))}var U=function(){var t=function(e){var r=typeof e=="string"?{url:e}:e;return Cr(r)};return t.get=$r,t.post=Ar,t.delete=Sr,t.put=Tr,t.patch=_r,t.getJSON=Nr,t}(),Dr="upload",ct="download",Pe="loadstart",Ee="progress",lt="load";function Cr(t){return new L(function(e){var r,o,i=Z({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},t),n=i.queryParams,a=i.body,s=i.headers,c=i.url;if(!c)throw new TypeError("url is required");if(n){var l;if(c.includes("?")){var f=c.split("?");if(2<f.length)throw new TypeError("invalid url");l=new URLSearchParams(f[1]),new URLSearchParams(n).forEach(function(x,g){return l.set(g,x)}),c=f[0]+"?"+l}else l=new URLSearchParams(n),c=c+"?"+l}var p={};if(s)for(var h in s)s.hasOwnProperty(h)&&(p[h.toLowerCase()]=s[h]);var d=i.crossDomain;!d&&!("x-requested-with"in p)&&(p["x-requested-with"]="XMLHttpRequest");var w=i.withCredentials,y=i.xsrfCookieName,T=i.xsrfHeaderName;if((w||!d)&&y&&T){var M=(o=(r=document==null?void 0:document.cookie.match(new RegExp("(^|;\\s*)("+y+")=([^;]*)")))===null||r===void 0?void 0:r.pop())!==null&&o!==void 0?o:"";M&&(p[T]=M)}var xe=Ir(a,p),O=Z(Z({},i),{url:c,headers:p,body:xe}),v;v=t.createXHR?t.createXHR():new XMLHttpRequest;{var b=t.progressSubscriber,Ve=t.includeDownloadProgress,Ot=Ve===void 0?!1:Ve,Xe=t.includeUploadProgress,$t=Xe===void 0?!1:Xe,Ye=function(x,g){v.addEventListener(x,function(){var P,D=g();(P=b==null?void 0:b.error)===null||P===void 0||P.call(b,D),e.error(D)})};Ye("timeout",function(){return new Or(v,O)}),Ye("abort",function(){return new pe("aborted",v,O)});var ke=function(x,g){return new Er(g,v,O,x+"_"+g.type)},We=function(x,g,P){x.addEventListener(g,function(D){e.next(ke(P,D))})};$t&&[Pe,Ee,lt].forEach(function(x){return We(v.upload,x,Dr)}),b&&[Pe,Ee].forEach(function(x){return v.upload.addEventListener(x,function(g){var P;return(P=b==null?void 0:b.next)===null||P===void 0?void 0:P.call(b,g)})}),Ot&&[Pe,Ee].forEach(function(x){return We(v,x,ct)});var Je=function(x){var g="ajax error"+(x?" "+x:"");e.error(new pe(g,v,O))};v.addEventListener("error",function(x){var g;(g=b==null?void 0:b.error)===null||g===void 0||g.call(b,x),Je()}),v.addEventListener(lt,function(x){var g,P,D=v.status;if(D<400){(g=b==null?void 0:b.complete)===null||g===void 0||g.call(b);var Qe=void 0;try{Qe=ke(ct,x)}catch(At){e.error(At);return}e.next(Qe),e.complete()}else(P=b==null?void 0:b.error)===null||P===void 0||P.call(b,x),Je(D)})}var Ke=O.user,Ze=O.method,ge=O.async;Ke?v.open(Ze,c,ge,Ke,O.password):v.open(Ze,c,ge),ge&&(v.timeout=O.timeout,v.responseType=O.responseType),"withCredentials"in v&&(v.withCredentials=O.withCredentials);for(var h in p)p.hasOwnProperty(h)&&v.setRequestHeader(h,p[h]);return xe?v.send(xe):v.send(),function(){v&&v.readyState!==4&&v.abort()}})}function Ir(t,e){var r;if(!t||typeof t=="string"||Hr(t)||Fr(t)||Ur(t)||Mr(t)||qr(t)||Gr(t))return t;if(Br(t))return t.buffer;if(typeof t=="object")return e["content-type"]=(r=e["content-type"])!==null&&r!==void 0?r:"application/json;charset=utf-8",JSON.stringify(t);throw new TypeError("Unknown body type")}var Lr=Object.prototype.toString;function ze(t,e){return Lr.call(t)==="[object "+e+"]"}function Ur(t){return ze(t,"ArrayBuffer")}function Mr(t){return ze(t,"File")}function qr(t){return ze(t,"Blob")}function Br(t){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(t)}function Hr(t){return typeof FormData<"u"&&t instanceof FormData}function Fr(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}function Gr(t){return typeof ReadableStream<"u"&&t instanceof ReadableStream}typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const zr=t=>t&&t instanceof FormData||typeof t=="object"&&typeof t.append=="function"&&Object.prototype.toString.call(t)==="[object FormData]",_=(t,e,r)=>{r&&(t[e]=r)},Vr=t=>class extends t{constructor(){super(),this.url="",this.path="",this.body=void 0,this.async=!0,this.method="GET",this._headers={Accept:"application/json, text/plain, */*; q=0.01","Content-Type":"application/json"},this.headers=void 0,this.timeout=0,this.user="",this.password="",this.withCredentials=!1,this.xsrfCookieName="",this.xsrfHeaderName="",this.responseType="",this.queryParams=void 0,this.includeDownloadProgress=!1,this.includeUploadProgress=!1}_assignAjaxRxjsConfig(){const r={url:this._joinUrlData(),async:this.async,method:this.method,timeout:this.timeout,withCredentials:this.withCredentials,includeDownloadProgress:this.includeDownloadProgress,includeUploadProgress:this.includeUploadProgress};return _(r,"body",this.body),_(r,"headers",this._joinHeaders(this.body)),_(r,"user",this.user),_(r,"password",this.password),_(r,"xsrfCookieName",this.xsrfHeaderName),_(r,"xsrfHeaderName",this.xsrfHeaderName),_(r,"responseType",this.responseType),_(r,"queryParams",this.queryParams),r}_joinUrlData(){return typeof this.url=="string"&&typeof this.path=="string"?this.url.length&&this.path.length?`${this.url}/${this.path}`:this.url:""}_joinHeaders(r){const o={...this._headers,...this.headers||{}};return zr(r)&&!this.avoidBoundary&&delete o["Content-Type"],o}_dispatchEvent(r,o){if(this.dispatchEventContext){const i=new CustomEvent(`${this.customEventPrefix}${r}`,{bubbles:!0,composed:!0,detail:o});this.dispatchEventContext.dispatchEvent(i)}}async generateRequest(){this._dispatchEvent("presend",!0);const r=await wr(U(this._assignAjaxRxjsConfig()).pipe(Pr(o=>{const i={type:o.type,loaded:o.loaded,total:o.total};this._dispatchEvent("progress",i)}),Pt(o=>(this._dispatchEvent("error",o),this._dispatchEvent("errorend",!0),this.lastError=o,Promise.reject(o)))));return this._dispatchEvent("response",r),this._dispatchEvent("responseend",!0),this.lastResponse=r,r}},Xr=Gt(Vr);class Jr extends Xr(EventTarget){constructor(e={}){super(),this.dispatchEventContext=this,this.lastResponse=void 0,this.lastError=void 0,this.customEventPrefix="ajax",this.avoidBoundary=!1,this._assignAjaxProviderConfig(e)}_assignAjaxProviderConfig(e){e&&typeof e=="object"&&Object.assign(this,e)}}export{Jr as A};
