var st=Object.defineProperty;var Fe=t=>{throw TypeError(t)};var it=(t,e,n)=>e in t?st(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var u=(t,e,n)=>it(t,typeof e!="symbol"?e+"":e,n),He=(t,e,n)=>e.has(t)||Fe("Cannot "+n);var P=(t,e,n)=>(He(t,e,"read from private field"),n?n.call(t):e.get(t)),D=(t,e,n)=>e.has(t)?Fe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Z=(t,e,n,r)=>(He(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);import{u as at,f as ct,h as A,a as $,k as c,e as lt,i as dt,t as ut,R as ft,D as $e}from"./directive-D5z0NHIa.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:ct},ht=(t=pt,e,n)=>{const{kind:r,metadata:s}=n;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(n.name,t),r==="accessor"){const{name:i}=n;return{set(a){const h=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,h,t)},init(a){return a!==void 0&&this.P(i,void 0,t),a}}}if(r==="setter"){const{name:i}=n;return function(a){const h=this[i];e.call(this,a),this.requestUpdate(i,h,t)}}throw Error("Unsupported decorator location: "+r)};function p(t){return(e,n)=>typeof n=="object"?ht(t,e,n):((r,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,i?{...r,wrapped:!0}:r),i?Object.getOwnPropertyDescriptor(s,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Je(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}var Te=function(t,e,n,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},M;let ue=(M=class extends A{constructor(){super(...arguments),this.dimmed=!1}render(){return this.name}},M.styles=$`
    :host {
      color: var(--ix-object-name-color);
    }
    :host([dimmed]) {
      opacity: var(--ix-object-name-dimmed-opacity, 0.6);
    }
  `,M);Te([p({reflect:!0})],ue.prototype,"name",void 0);Te([p({type:Boolean,reflect:!0})],ue.prototype,"dimmed",void 0);ue=Te([O("ix-object-name")],ue);var Ke=function(t,e,n,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};class le{constructor(e){this.map=e}}class de{constructor(e){this.set=e}}var z;let _e=(z=class extends A{render(){const e=this.data;switch(typeof e){case"bigint":return c`<span class="number">${String(e)}n</span>`;case"number":return c`<span class="number">${String(e)}</span>`;case"string":return c`<span class="string">"${e}"</span>`;case"boolean":return c`<span class="boolean">${String(e)}</span>`;case"undefined":return c`<span class="undefined">undefined</span>`;case"object":return e===null?c`<span class="null">null</span>`:e instanceof Map?c`<span>Map(${e.size})</span>`:e instanceof Set?c`<span>Set(${e.size})</span>`:e instanceof le?c`<span>(${e.map.size})</span>`:e instanceof de?c`<span>(${e.set.size})</span>`:e instanceof Date?c`<span>${e.toString()}</span>`:e instanceof RegExp?c`<span class="RegExp"> ${e.toString()} </span>`:Array.isArray(e)?c`<span>${`Array(${e.length})`}</span>`:e.constructor?typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)?c`<span>${`Buffer[${e.length}]`}</span>`:c`<span>${e.constructor.name}</span>`:c`<span>Object</span>`;case"function":return c`<span>
          <span class="FunctionPrefix">ƒ&nbsp;</span>
          <span class="FunctionName"> ${e.name}() </span>
        </span>`;case"symbol":return c`<span class="symbol">${e.toString()}</span>`;default:return c`<span></span>`}}},z.styles=$`
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
  `,z);Ke([p({attribute:!1})],_e.prototype,"data",void 0);_e=Ke([O("ix-object-value")],_e);const ye=$`
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
`,ee="$",Ge="*",mt=t=>Array.from({length:t},(e,n)=>[ee].concat(Array.from({length:n},()=>"*")).join(".")),xt=(t,e,n,r=0,s)=>{const o=[...mt(r)].concat(n).filter(a=>typeof a=="string"),i=new Map;if(o.forEach(a=>{const h=a.split("."),f=(m,w,b)=>{var W;if(b===h.length){i.set(w,!0);return}const y=h[b],d=e.hasChildren(m);if(b===0)d&&(y===ee||y===Ge)&&f(m,ee,b+1);else if(y===Ge)for(const{data:U,name:J}of(W=e.children(m))!=null?W:[])d&&f(U,`${w}.${J}`,b+1);else if(m!=null){const U=m[y];d&&f(U,`${w}.${y}`,b+1)}};f(t,"",0)}),s!==void 0)for(const[a,h]of s)h&&i.set(a,!0);return i};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=lt(class extends dt{constructor(t){var e;if(super(t),t.type!==ut.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.st)o in e||(n.remove(o),this.st.delete(o));for(const o in e){const i=!!e[o];i===this.st.has(o)||(s=this.nt)!=null&&s.has(o)||(i?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return ft}});var ae=function(t,e,n,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},oe,Ae,se,q;let Y=(q=class extends A{constructor(){super();D(this,oe);D(this,se);this.expanded=!1,this.showGutter=!1,Z(this,se,n=>{if(!P(this,oe,Ae))return;const r=this.renderRoot.querySelector("slot#children");n.composedPath().includes(r)||this.dispatchEvent(new Oe)}),this.addEventListener("click",P(this,se))}render(){return c`
      <div
        id="gutter"
        class=${yt({hidden:!P(this,oe,Ae),placeholder:this.showGutter})}
      >
        <span id="arrow">▶</span>
      </div>
      <div id="container">
        <slot name="label"></slot>
        <slot id="children" role="group"></slot>
      </div>
    `}},oe=new WeakSet,Ae=function(){var n;return this.item&&((n=this.treeAdapter)==null?void 0:n.hasChildren(this.item.data))},se=new WeakMap,q.styles=[ye,$`
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
    `],q);ae([p({type:Boolean,reflect:!0})],Y.prototype,"expanded",void 0);ae([p({attribute:!1})],Y.prototype,"treeAdapter",void 0);ae([p({type:Boolean})],Y.prototype,"showGutter",void 0);ae([p({attribute:!1})],Y.prototype,"item",void 0);Y=ae([O("ix-tree-node")],Y);const he=class he extends Event{constructor(){super(he.eventName,{cancelable:!0})}};he.eventName="toggle-expanded";let Oe=he;const Ze=Object.getOwnPropertyNames;function bt(t,e){const n=Object.getOwnPropertyDescriptor(t,e);if(n!=null&&n.get)try{return n.get()}catch{return n.get}return t[e]}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ke(t,e){if(t!==void 0){let n=-1;for(const r of t)n>-1&&(yield e),n++,yield r}}var be=function(t,e,n,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},B;let te=(B=class extends A{constructor(){super(...arguments),this.maxProperties=5,this.maxArrayItems=10}render(){const e=this.data;if(typeof e!="object"||e===null||e instanceof Date||e instanceof RegExp)return c`<ix-object-value .data=${e}></ix-object-value>`;if(Array.isArray(e)){const n=e.slice(0,this.maxArrayItems).map(s=>c`<ix-object-value .data=${s}></ix-object-value>`),r=e.length;return r>this.maxArrayItems&&n.push(c`<span>…</span>`),c`
        <span>${r===0?"":`(${r}) `}</span
        ><span>[${ke(n,", ")}]</span>
      `}else{const n=Ze(e),r=n.slice(0,this.maxProperties).map(o=>{const i=bt(e,o);return c`<span
            ><ix-object-name .name=${o||'""'}></ix-object-name
            >:&nbsp;<ix-object-value .data=${i}></ix-object-value
          ></span>`});n.length>this.maxProperties&&r.push(c`<span>…</span>`);const s=e.constructor===void 0||e.constructor.name==="Object"?void 0:`${e.constructor.name} `;return c`
        <span>${s}</span
        ><span>{${ke(r,", ")}}</span>
      `}}},B.styles=$`
    :host {
      color: var(--ix-object-preview-color);
      font-style: var(--ix-object-preview-font-style);
    }
  `,B);be([p({attribute:!1})],te.prototype,"data",void 0);be([p({type:Number})],te.prototype,"maxProperties",void 0);be([p({type:Number})],te.prototype,"maxArrayItems",void 0);te=be([O("ix-object-preview")],te);var C=function(t,e,n,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},F;class vt{constructor(e){D(this,F);this.expandedPaths=new Map,Z(this,F,e)}requestUpdate(){return P(this,F).requestUpdate()}hasChildren(e){return typeof e=="object"&&e!==null||typeof e=="function"?Array.isArray(e)?e.length>0:typeof e[Symbol.iterator]=="function"?!0:Ze(e).length>0:!1}children(e){if(!this.hasChildren(e))return;const n=[];if(e instanceof Map)n.push({name:"[[Entries]]",data:new le(e),synthetic:!0,expanded:!0});else{if(e instanceof le)return n.push(...Array.from(e.map.entries()).map(([s,o])=>({name:String(s),data:o}))),n;if(e instanceof Set)n.push({name:"[[Entries]]",data:new de(e),synthetic:!0,expanded:!0});else{if(e instanceof de)return n.push(...Array.from(e.set.values()).map((s,o)=>({name:String(o),data:s}))),n;!Array.isArray(e)&&typeof e[Symbol.iterator]=="function"&&n.push(...Array.from(e).map((s,o)=>({name:o.toString(),data:s})))}}const r=Object.getOwnPropertyDescriptors(e);return n.push(...Object.entries(r).map(([s,o])=>({name:s,data:e[s],isNonEnumerable:!o.enumerable}))),n}render({item:e,depth:n=0,isNonEnumerable:r,parentPath:s}){var m,w;const o=s===void 0?ee:`${s}.${e.name}`,i=(w=(m=this.expandedPaths.get(o))!=null?m:e.expanded)!=null?w:!1,a=typeof e.name=="string"&&e.name!==""?c`<ix-object-name
            .name=${e.name}
            .dimmed=${r!=null?r:!1}
          ></ix-object-name>`:n===0?void 0:c`<ix-object-preview .data=${e.name}></ix-object-preview>`,h=e.data instanceof le||e.data instanceof de?void 0:n===0?c`<ix-object-preview .data=${e.data}></ix-object-preview>`:c`<ix-object-value .data=${e.data}></ix-object-value>`,f=a&&h?c`<span>: </span>`:void 0;return c`<ix-tree-node
      .item=${e}
      .treeAdapter=${this}
      .expanded=${i}
      .showGutter=${n>0}
      @toggle-expanded=${()=>{var y,d;const b=(d=(y=this.expandedPaths.get(o))!=null?y:e.expanded)!=null?d:!1;this.expandedPaths.set(o,!b),P(this,F).requestUpdate()}}
      ><span slot="label">${a}${f}${h}</span
      >${Je(this.children(e.data),b=>this.render({item:b,depth:n+1,parentPath:o}))}</ix-tree-node
    >`}}F=new WeakMap;var R,H;let T=(H=class extends A{constructor(){super(...arguments);D(this,R);this.expandLevel=1,this.showNonenumerable=!1,this.sortObjectKeys=!1,Z(this,R,new vt(this))}willUpdate(n){if(n.has("data")||n.has("expandPaths")||n.has("expandLevel")){const r=Array.isArray(this.expandPaths)?this.expandPaths:this.expandPaths===void 0?[]:[this.expandPaths];P(this,R).expandedPaths=xt(this.data,P(this,R),r,this.expandLevel,P(this,R).expandedPaths),this.requestUpdate()}}render(){return P(this,R).render({item:{data:this.data,name:this.name}})}},R=new WeakMap,H.styles=[ye,$`
      :host {
        display: block;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `],H);C([p({type:Number})],T.prototype,"expandLevel",void 0);C([p()],T.prototype,"expandPaths",void 0);C([p()],T.prototype,"name",void 0);C([p({type:Object})],T.prototype,"data",void 0);C([p({type:Boolean})],T.prototype,"showNonenumerable",void 0);C([p({attribute:!1})],T.prototype,"sortObjectKeys",void 0);T=C([O("ix-object-inspector")],T);var Se=function(t,e,n,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},G;let fe=(G=class extends A{constructor(){super(...arguments),this.expanded=!1}render(){return c`&lt;/<span class="tagName">${this.name}</span>&gt;`}},G.styles=$`
    :host {
      white-space: nowrap;
      color: var(--ix-html-tag-color);
    }

    .tagName {
      color: var(--ix-html-tagname-color);
      text-transform: var(--ix-html-tagname-text-transform);
    }
  `,G);Se([p({attribute:!1})],fe.prototype,"name",void 0);Se([p({type:Boolean,reflect:!0})],fe.prototype,"expanded",void 0);fe=Se([O("ix-dom-close-tag")],fe);var ve=function(t,e,n,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},k;let ne=(k=class extends A{constructor(){super(...arguments),this.expanded=!1}render(){var e;return c`<span
      >&lt;<span class="tagName">${this.name}</span>${(e=this.attributeData)==null?void 0:e.map(n=>c`<span>
            <span class="htmlAttributeName">${n.name}</span>="<span
              class="htmlAttributeValue"
              >${n.value}</span
            >"</span
          >`)}&gt;</span
    >`}},k.styles=$`
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
  `,k);ve([p()],ne.prototype,"name",void 0);ve([p({attribute:!1})],ne.prototype,"attributeData",void 0);ve([p({type:Boolean,reflect:!0})],ne.prototype,"expanded",void 0);ne=ve([O("ix-dom-open-tag")],ne);const Qe=(t,e=80)=>{var n,r;return t.nodeType===Node.ELEMENT_NODE&&((n=t.childNodes)==null?void 0:n.length)===1&&t.childNodes[0].nodeType===Node.TEXT_NODE&&((r=t.childNodes[0].textContent)==null?void 0:r.length)<e};var De=function(t,e,n,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},V;let pe=(V=class extends A{constructor(){super(...arguments),this.expanded=!1}render(){const{data:e}=this;if(e===void 0)return c`<span>undefined</span>`;switch(e.nodeType){case Node.ELEMENT_NODE:{const n=this.expanded?$e:Qe(e)?e.childNodes[0].textContent:"…";return c`<span
          >${c`<ix-dom-open-tag
            .name=${e.tagName}
            .attributeData=${e.attributes}
          ></ix-dom-open-tag>`}${n}${this.expanded?$e:c`<ix-dom-close-tag
                .name=${e.tagName}
              ></ix-dom-close-tag>`}</span
        >`}case Node.TEXT_NODE:return c`<span>${e.textContent}</span>`;case Node.CDATA_SECTION_NODE:return c`<span>${"<![CDATA["+e.textContent+"]]>"}</span>`;case Node.PROCESSING_INSTRUCTION_NODE:return c`<span>${e.nodeName}</span>`;case Node.COMMENT_NODE:return c`<span class="htmlComment"
          >&lt;!--${e.textContent}--&gt;</span
        >`;case Node.DOCUMENT_NODE:return c`<span>${e.nodeName}</span>`;case Node.DOCUMENT_TYPE_NODE:return c`<span class="htmlDoctype">
          &lt;!DOCTYPE ${e.name}
          ${e.publicId?` PUBLIC "${e.publicId}"`:""}
          ${!e.publicId&&e.systemId?" SYSTEM":""}
          ${e.systemId?` "${e.systemId}"`:""} &gt;
        </span>`;case Node.DOCUMENT_FRAGMENT_NODE:return c`<span>${e.nodeName}</span>`;default:return}}},V.styles=[ye,$`
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
    `],V);De([p({attribute:!1})],pe.prototype,"data",void 0);De([p({type:Boolean,reflect:!0})],pe.prototype,"expanded",void 0);pe=De([O("ix-dom-node-preview")],pe);var et=function(t,e,n,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},ie;class gt{constructor(e){D(this,ie);this.expandedPaths=new Map,Z(this,ie,e)}hasChildren(e){var n,r;return((r=(n=e.childNodes)==null?void 0:n.length)!=null?r:0)>0&&!(e.nodeType===Node.ELEMENT_NODE&&Qe(e))}children(e){if(this.hasChildren(e))return e.childNodes.map((n,r)=>({name:`${n.nodeName}[${r}]`,data:n}))}render({item:e,depth:n=0,parentPath:r}){var i,a;const s=r===void 0?ee:`${r}.${e.name}`,o=(a=(i=this.expandedPaths.get(s))!=null?i:e.expanded)!=null?a:!1;return c`<ix-tree-node
      .item=${e}
      .treeAdapter=${this}
      .depth=${n}
      .expanded=${o}
      .shouldShowPlaceholder=${n>0}
      @toggle-expanded=${()=>{var f,m;const h=(m=(f=this.expandedPaths.get(s))!=null?f:e.expanded)!=null?m:!1;this.expandedPaths.set(s,!h),P(this,ie).requestUpdate()}}
      ><ix-dom-node-preview
        slot="label"
        .data=${e.data}
        .expanded=${o}
      ></ix-dom-node-preview
      >${Je(this.children(e.data),h=>this.render({item:h,depth:n+1,parentPath:s}))}${e.data.nodeType===Node.ELEMENT_NODE?c`<ix-dom-close-tag .name=${e.data.tagName}></ix-dom-close-tag>`:$e}</ix-tree-node
    >`}}ie=new WeakMap;var me,X;let Ne=(X=class extends A{constructor(){super(...arguments);D(this,me,new gt(this))}render(){return this.data===void 0?c`<span>undefined</span>`:P(this,me).render({item:{data:this.data}})}},me=new WeakMap,X.styles=[ye,$`
      :host {
        display: block;
      }
    `],X);et([p({attribute:!1})],Ne.prototype,"data",void 0);Ne=et([O("ix-dom-inspector")],Ne);const tt=new WeakMap;function wt(t,e){let n=e;for(;n;){if(tt.get(n)===t)return!0;n=Object.getPrototypeOf(n)}return!1}function jt(t){return e=>{if(wt(t,e))return e;const n=t(e);return tt.set(n,t),n}}class we extends Error{constructor(n){super(n?`${n.length} errors occurred during unsubscription:
${n.map((r,s)=>`${s+1}) ${r.toString()}`).join(`
  `)}`:"");u(this,"errors");this.errors=n,this.name="UnsubscriptionError"}}const xe=class xe{constructor(e){u(this,"initialTeardown");u(this,"closed",!1);u(this,"_finalizers",null);this.initialTeardown=e}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{initialTeardown:n}=this;if(j(n))try{n()}catch(s){e=s instanceof we?s.errors:[s]}const{_finalizers:r}=this;if(r){this._finalizers=null;for(const s of r)try{Ve(s)}catch(o){e=e!=null?e:[],o instanceof we?e.push(...o.errors):e.push(o)}}if(e)throw new we(e)}}add(e){var n;e&&e!==this&&(this.closed?Ve(e):(e&&"add"in e&&e.add(()=>{this.remove(e)}),(n=this._finalizers)!=null||(this._finalizers=new Set),this._finalizers.add(e)))}remove(e){var n;(n=this._finalizers)==null||n.delete(e)}};u(xe,"EMPTY",(()=>{const e=new xe;return e.closed=!0,e})());let re=xe;typeof Symbol.dispose=="symbol"&&(re.prototype[Symbol.dispose]=re.prototype.unsubscribe);function Ve(t){j(t)?t():t.unsubscribe()}class I extends re{constructor(n,r){var s,o,i,a;super();u(this,"isStopped",!1);u(this,"destination");u(this,"_nextOverride",null);u(this,"_errorOverride",null);u(this,"_completeOverride",null);u(this,"_onFinalize",null);this.destination=n instanceof I?n:At(n),this._nextOverride=(s=r==null?void 0:r.next)!=null?s:null,this._errorOverride=(o=r==null?void 0:r.error)!=null?o:null,this._completeOverride=(i=r==null?void 0:r.complete)!=null?i:null,this._onFinalize=(a=r==null?void 0:r.finalize)!=null?a:null,this._next=this._nextOverride?Pt:this._next,this._error=this._errorOverride?Et:this._error,this._complete=this._completeOverride?$t:this._complete,Ot(n)&&n.add(this)}next(n){this.isStopped?je(Yt(n),this):this._next(n)}error(n){this.isStopped?je(Xt(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?je(Vt,this):(this.isStopped=!0,this._complete())}unsubscribe(){var n;this.closed||(this.isStopped=!0,super.unsubscribe(),(n=this._onFinalize)==null||n.call(this))}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const nt={onUnhandledError:null,onStoppedNotification:null};function Pt(t){try{this._nextOverride(t)}catch(e){this.destination.error(e)}}function Et(t){try{this._errorOverride(t)}catch(e){this.destination.error(e)}finally{this.unsubscribe()}}function $t(){try{this._completeOverride()}catch(t){this.destination.error(t)}finally{this.unsubscribe()}}class _t{constructor(e){u(this,"partialObserver");this.partialObserver=e}next(e){const{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(r){Q(r)}}error(e){const{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(r){Q(r)}else Q(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){Q(n)}}}function At(t){return new _t(!t||j(t)?{next:t!=null?t:void 0}:t)}function je(t,e){const{onStoppedNotification:n}=nt;n&&setTimeout(()=>n(t,e))}function Ot(t){return t&&j(t.unsubscribe)&&j(t.add)}function Ce({destination:t,...e}){return new I(t,e)}var We;class _{constructor(e){e&&(this._subscribe=e)}subscribe(e){const n=e instanceof I?e:new I(e);return n.add(this._trySubscribe(n)),n}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e){return new Promise((n,r)=>{const s=new I({next:o=>{try{e(o)}catch(i){r(i),s.unsubscribe()}},error:r,complete:n});this.subscribe(s)})}_subscribe(e){}[(We=Symbol.observable)!=null?We:"@@observable"](){return this}pipe(...e){return e.reduce(Nt,this)}[Symbol.asyncIterator](){let e,n=!1,r,s=!1;const o=[],i=[],a=f=>{for(n=!0,r=f;i.length;){const[m,w]=i.shift();w(f)}},h=()=>{for(s=!0;i.length;){const[f]=i.shift();f({value:void 0,done:!0})}};return{next:()=>(e||(e=this.subscribe({next:f=>{if(i.length){const[m]=i.shift();m({value:f,done:!1})}else o.push(f)},error:a,complete:h})),o.length?Promise.resolve({value:o.shift(),done:!1}):s?Promise.resolve({value:void 0,done:!0}):n?Promise.reject(r):new Promise((f,m)=>{i.push([f,m])})),throw:f=>(e==null||e.unsubscribe(),a(f),Promise.reject(f)),return:()=>(e==null||e.unsubscribe(),h(),Promise.resolve({value:void 0,done:!0})),[Symbol.asyncIterator](){return this}}}}function Nt(t,e){return e(t)}function Q(t){setTimeout(()=>{const{onUnhandledError:e}=nt;if(e)e(t);else throw t})}function Rt(t){switch(Mt(t)){case g.Own:return t;case g.InteropObservable:return Tt(t);case g.ArrayLike:return St(t);case g.Promise:return Dt(t);case g.AsyncIterable:return rt(t);case g.Iterable:return Ct(t);case g.ReadableStreamLike:return Lt(t)}}function Tt(t){return new _(e=>{var r;const n=t[(r=Symbol.observable)!=null?r:"@@observable"]();if(j(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function St(t){return new _(e=>{It(t,e)})}function Dt(t){return new _(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,Q)})}function Ct(t){return new _(e=>{for(const n of t)if(e.next(n),e.closed)return;e.complete()})}function rt(t){return new _(e=>{Ut(t,e).catch(n=>e.error(n))})}function Lt(t){return rt(qt(t))}async function Ut(t,e){for await(const n of t)if(e.next(n),e.closed)return;e.complete()}function It(t,e){const n=t.length;for(let r=0;r<n;r++){if(e.closed)return;e.next(t[r])}e.complete()}var g;(function(t){t[t.Own=0]="Own",t[t.InteropObservable=1]="InteropObservable",t[t.ArrayLike=2]="ArrayLike",t[t.Promise=3]="Promise",t[t.AsyncIterable=4]="AsyncIterable",t[t.Iterable=5]="Iterable",t[t.ReadableStreamLike=6]="ReadableStreamLike"})(g||(g={}));function Mt(t){if(t instanceof _)return g.Own;if(Ht(t))return g.InteropObservable;if(kt(t))return g.ArrayLike;if(Ft(t))return g.Promise;if(zt(t))return g.AsyncIterable;if(Gt(t))return g.Iterable;if(Bt(t))return g.ReadableStreamLike;throw new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function j(t){return typeof t=="function"}function zt(t){return Symbol.asyncIterator&&j(t==null?void 0:t[Symbol.asyncIterator])}async function*qt(t){const e=t.getReader();try{for(;;){const{value:n,done:r}=await e.read();if(r)return;yield n}}finally{e.releaseLock()}}function Bt(t){return j(t==null?void 0:t.getReader)}function Ft(t){return j(t==null?void 0:t.then)}function Ht(t){var e;return j(t[(e=Symbol.observable)!=null?e:"@@observable"])}function Gt(t){return j(t==null?void 0:t[Symbol.iterator])}function kt(t){return t&&typeof t.length=="number"&&!j(t)}const Vt=Le("C",void 0,void 0);function Xt(t){return Le("E",void 0,t)}function Yt(t){return Le("N",t,void 0)}function Le(t,e,n){return{kind:t,value:e,error:n}}function Wt(t){return t}class Jt extends Error{constructor(){super("no elements in sequence"),this.name="EmptyError"}}function Kt(t,e){return new Promise((n,r)=>{let s=!1,o;t.subscribe({next:i=>{o=i,s=!0},error:r,complete:()=>{s?n(o):r(new Jt)}})})}function Zt(t){return e=>new _(n=>{let r=0;e.subscribe(Ce({destination:n,next:s=>{n.next(t(s,r++))}}))})}function ot(t){return e=>new _(n=>{let r=null,s=!1,o;r=e.subscribe(Ce({destination:n,error:i=>{o=Rt(t(i,ot(t)(e))),r?(r.unsubscribe(),r=null,o.subscribe(n)):s=!0}})),s&&(r.unsubscribe(),r=null,o.subscribe(n))})}function Qt(t){const e=j(t)?{next:t}:t;return e?n=>new _(r=>{var o;(o=e.subscribe)==null||o.call(e);let s=!0;n.subscribe(Ce({destination:r,next:i=>{var a;(a=e.next)==null||a.call(e,i),r.next(i)},error:i=>{var a;s=!1,(a=e.error)==null||a.call(e,i),r.error(i)},complete:()=>{var i;s=!1,(i=e.complete)==null||i.call(e),r.complete()},finalize:()=>{var i,a;s&&((i=e.unsubscribe)==null||i.call(e)),(a=e.finalize)==null||a.call(e)}}))}):Wt}class en{constructor(e,n,r,s="download_load"){u(this,"originalEvent");u(this,"xhr");u(this,"request");u(this,"type");u(this,"status");u(this,"response");u(this,"responseType");u(this,"loaded");u(this,"total");u(this,"responseHeaders");this.originalEvent=e,this.xhr=n,this.request=r,this.type=s;const{status:o,responseType:i}=n;this.status=o!=null?o:0,this.responseType=i!=null?i:"";const a=n.getAllResponseHeaders();this.responseHeaders=a?a.split(`
`).reduce((m,w)=>{const b=w.indexOf(": ");return m[w.slice(0,b)]=w.slice(b+2),m},{}):{},this.response=n.response;const{loaded:h,total:f}=e;this.loaded=h,this.total=f}}class Re extends Error{constructor(n,r,s){super(n);u(this,"xhr");u(this,"request");u(this,"status");u(this,"responseType");u(this,"response");this.name="AjaxError",this.xhr=r,this.request=s,this.status=r.status,this.responseType=r.responseType,this.response=r.response}}class tn extends Re{constructor(e,n){super("ajax timeout",e,n),this.name="AjaxTimeoutError"}}function nn(t,e){return L({method:"GET",url:t,headers:e})}function rn(t,e,n){return L({method:"POST",url:t,body:e,headers:n})}function on(t,e){return L({method:"DELETE",url:t,headers:e})}function sn(t,e,n){return L({method:"PUT",url:t,body:e,headers:n})}function an(t,e,n){return L({method:"PATCH",url:t,body:e,headers:n})}const cn=Zt(t=>t.response);function ln(t,e){return cn(L({method:"GET",url:t,headers:e}))}const L=(()=>{const t=e=>un(typeof e=="string"?{url:e}:e);return t.get=nn,t.post=rn,t.delete=on,t.put=sn,t.patch=an,t.getJSON=ln,t})(),dn="upload",Xe="download",Pe="loadstart",Ee="progress",Ye="load";function un(t){return new _(e=>{var Ie,Me;const n={async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json",...t},{queryParams:r,body:s,headers:o}=n;let i=n.url;if(!i)throw new TypeError("url is required");if(r){let l;if(i.includes("?")){const K=i.split("?");if(2<K.length)throw new TypeError("invalid url");l=new URLSearchParams(K[1]),new URLSearchParams(r).forEach((ge,ce)=>l.set(ce,ge)),i=K[0]+"?"+l}else l=new URLSearchParams(r),i=i+"?"+l}const a={};if(o)for(const l in o)o.hasOwnProperty(l)&&(a[l.toLowerCase()]=o[l]);const h=n.crossDomain;!h&&!("x-requested-with"in a)&&(a["x-requested-with"]="XMLHttpRequest");const{withCredentials:f,xsrfCookieName:m,xsrfHeaderName:w}=n;if((f||!h)&&m&&w){const l=(Me=(Ie=document==null?void 0:document.cookie.match(new RegExp(`(^|;\\s*)(${m})=([^;]*)`)))==null?void 0:Ie.pop())!=null?Me:"";l&&(a[w]=l)}const b=fn(s,a),y={...n,url:i,headers:a,body:b},d=t.createXHR?t.createXHR():new XMLHttpRequest;{const{progressSubscriber:l,includeDownloadProgress:K=!1,includeUploadProgress:ge=!1}=t,ce=(x,v)=>{d.addEventListener(x,()=>{var S;const E=v();(S=l==null?void 0:l.error)==null||S.call(l,E),e.error(E)})};ce("timeout",()=>new tn(d,y)),ce("abort",()=>new Re("aborted",d,y));const ze=(x,v)=>new en(v,d,y,`${x}_${v.type}`),qe=(x,v,E)=>{x.addEventListener(v,S=>{e.next(ze(E,S))})};ge&&[Pe,Ee,Ye].forEach(x=>qe(d.upload,x,dn)),l&&[Pe,Ee].forEach(x=>d.upload.addEventListener(x,v=>{var E;return(E=l==null?void 0:l.next)==null?void 0:E.call(l,v)})),K&&[Pe,Ee].forEach(x=>qe(d,x,Xe));const Be=x=>{const v="ajax error"+(x?" "+x:"");e.error(new Re(v,d,y))};d.addEventListener("error",x=>{var v;(v=l==null?void 0:l.error)==null||v.call(l,x),Be()}),d.addEventListener(Ye,x=>{var E,S;const{status:v}=d;v<400?((E=l==null?void 0:l.complete)==null||E.call(l),e.next(ze(Xe,x)),e.complete()):((S=l==null?void 0:l.error)==null||S.call(l,x),Be(v))})}const{user:W,method:U,async:J}=y;W?d.open(U,i,J,W,y.password):d.open(U,i,J),J&&(d.timeout=y.timeout,d.responseType=y.responseType),"withCredentials"in d&&(d.withCredentials=y.withCredentials);for(const l in a)a.hasOwnProperty(l)&&d.setRequestHeader(l,a[l]);return b?d.send(b):d.send(),()=>{d&&d.readyState!==4&&d.abort()}})}function fn(t,e){var n;if(!t||typeof t=="string"||bn(t)||vn(t)||hn(t)||mn(t)||xn(t)||gn(t))return t;if(yn(t))return t.buffer;if(typeof t=="object")return e["content-type"]=(n=e["content-type"])!=null?n:"application/json;charset=utf-8",JSON.stringify(t);throw new TypeError("Unknown body type")}const pn=Object.prototype.toString;function Ue(t,e){return pn.call(t)===`[object ${e}]`}function hn(t){return Ue(t,"ArrayBuffer")}function mn(t){return Ue(t,"File")}function xn(t){return Ue(t,"Blob")}function yn(t){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(t)}function bn(t){return typeof FormData<"u"&&t instanceof FormData}function vn(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}function gn(t){return typeof ReadableStream<"u"&&t instanceof ReadableStream}typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const wn=t=>t&&t instanceof FormData||typeof t=="object"&&typeof t.append=="function"&&Object.prototype.toString.call(t)==="[object FormData]",N=(t,e,n)=>{n&&(t[e]=n)},jn=t=>class extends t{constructor(){super(),this.url="",this.path="",this.body=void 0,this.async=!0,this.method="GET",this._headers={Accept:"application/json, text/plain, */*; q=0.01","Content-Type":"application/json"},this.headers=void 0,this.timeout=0,this.user="",this.password="",this.withCredentials=!1,this.xsrfCookieName="",this.xsrfHeaderName="",this.responseType="",this.queryParams=void 0,this.includeDownloadProgress=!1,this.includeUploadProgress=!1}_assignAjaxRxjsConfig(){const n={url:this._joinUrlData(),async:this.async,method:this.method,timeout:this.timeout,withCredentials:this.withCredentials,includeDownloadProgress:this.includeDownloadProgress,includeUploadProgress:this.includeUploadProgress};return N(n,"body",this.body),N(n,"headers",this._joinHeaders(this.body)),N(n,"user",this.user),N(n,"password",this.password),N(n,"xsrfCookieName",this.xsrfHeaderName),N(n,"xsrfHeaderName",this.xsrfHeaderName),N(n,"responseType",this.responseType),N(n,"queryParams",this.queryParams),n}_joinUrlData(){return typeof this.url=="string"&&typeof this.path=="string"?this.url.length&&this.path.length?`${this.url}/${this.path}`:this.url:""}_joinHeaders(n){const r={...this._headers,...this.headers||{}};return wn(n)&&!this.avoidBoundary&&delete r["Content-Type"],r}_dispatchEvent(n,r){if(this.dispatchEventContext){const s=new CustomEvent(`${this.customEventPrefix}${n}`,{bubbles:!0,composed:!0,detail:r});this.dispatchEventContext.dispatchEvent(s)}}async generateRequest(){this._dispatchEvent("presend",!0);const n=await Kt(L(this._assignAjaxRxjsConfig()).pipe(Qt(r=>{const s={type:r.type,loaded:r.loaded,total:r.total};this._dispatchEvent("progress",s)}),ot(r=>(this._dispatchEvent("error",r),this._dispatchEvent("errorend",!0),this.lastError=r,Promise.reject(r)))));return this._dispatchEvent("response",n),this._dispatchEvent("responseend",!0),this.lastResponse=n,n}},Pn=jt(jn);class An extends Pn(EventTarget){constructor(e={}){super(),this.dispatchEventContext=this,this.lastResponse=void 0,this.lastError=void 0,this.customEventPrefix="ajax",this.avoidBoundary=!1,this._assignAjaxProviderConfig(e)}_assignAjaxProviderConfig(e){e&&typeof e=="object"&&Object.assign(this,e)}}export{An as A};
