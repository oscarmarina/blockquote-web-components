var $e=Object.defineProperty;var de=o=>{throw TypeError(o)};var we=(o,e,t)=>e in o?$e(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var pe=(o,e,t)=>we(o,typeof e!="symbol"?e+"":e,t),ue=(o,e,t)=>e.has(o)||de("Cannot "+t);var p=(o,e,t)=>(ue(o,e,"read from private field"),t?t.call(o):e.get(o)),j=(o,e,t)=>e.has(o)?de("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),M=(o,e,t,r)=>(ue(o,e,"write to private field"),r?r.call(o,t):e.set(o,t),t);import{f as Oe,u as Pe,i as m,a as f,b as l,e as Ee,c as Ne,t as Te,E as Re,A as te}from"./assets/directive-p80Jr2dA.js";import{A as Ae}from"./assets/AjaxProvider-DH8UFSpT.js";const x=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};const De={attribute:!0,type:String,converter:Pe,reflect:!1,hasChanged:Oe},_e=(o=De,e,t)=>{const{kind:r,metadata:a}=t;let n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(t.name,o),r==="accessor"){const{name:i}=t;return{set(s){const d=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,d,o,!0,s)},init(s){return s!==void 0&&this.C(i,void 0,o,s),s}}}if(r==="setter"){const{name:i}=t;return function(s){const d=this[i];e.call(this,s),this.requestUpdate(i,d,o,!0,s)}}throw Error("Unsupported decorator location: "+r)};function c(o){return(e,t)=>typeof t=="object"?_e(o,e,t):((r,a,n)=>{const i=a.hasOwnProperty(n);return a.constructor.createProperty(n,r),i?Object.getOwnPropertyDescriptor(a,n):void 0})(o,e,t)}function*me(o,e){if(o!==void 0){let t=0;for(const r of o)yield e(r,t++)}}var se=function(o,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},P;let V=(P=class extends m{constructor(){super(...arguments),this.dimmed=!1}render(){return this.name}},P.styles=f`
    :host {
      color: var(--ix-object-name-color);
    }
    :host([dimmed]) {
      opacity: var(--ix-object-name-dimmed-opacity, 0.6);
    }
  `,P);se([c({reflect:!0})],V.prototype,"name",void 0);se([c({type:Boolean,reflect:!0})],V.prototype,"dimmed",void 0);V=se([x("ix-object-name")],V);var be=function(o,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n};class H{constructor(e){this.map=e}}class k{constructor(e){this.set=e}}var E;let ne=(E=class extends m{render(){const e=this.data;switch(typeof e){case"bigint":return l`<span class="number">${String(e)}n</span>`;case"number":return l`<span class="number">${String(e)}</span>`;case"string":return l`<span class="string">"${e}"</span>`;case"boolean":return l`<span class="boolean">${String(e)}</span>`;case"undefined":return l`<span class="undefined">undefined</span>`;case"object":return e===null?l`<span class="null">null</span>`:e instanceof Map?l`<span>Map(${e.size})</span>`:e instanceof Set?l`<span>Set(${e.size})</span>`:e instanceof H?l`<span>(${e.map.size})</span>`:e instanceof k?l`<span>(${e.set.size})</span>`:e instanceof Date?l`<span>${e.toString()}</span>`:e instanceof RegExp?l`<span class="RegExp"> ${e.toString()} </span>`:Array.isArray(e)?l`<span>${`Array(${e.length})`}</span>`:e.constructor?typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)?l`<span>${`Buffer[${e.length}]`}</span>`:l`<span>${e.constructor.name}</span>`:l`<span>Object</span>`;case"function":return l`<span>
          <span class="FunctionPrefix">ƒ&nbsp;</span>
          <span class="FunctionName"> ${e.name}() </span>
        </span>`;case"symbol":return l`<span class="symbol">${e.toString()}</span>`;default:return l`<span></span>`}}},E.styles=f`
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
  `,E);be([c({attribute:!1})],ne.prototype,"data",void 0);ne=be([x("ix-object-value")],ne);const J=f`
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
`,I="$",fe="*",Ce=o=>Array.from({length:o},(e,t)=>[I].concat(Array.from({length:t},()=>"*")).join(".")),Se=(o,e,t,r=0,a)=>{const n=[...Ce(r)].concat(t).filter(s=>typeof s=="string"),i=new Map;if(n.forEach(s=>{const d=s.split("."),b=(u,w,h)=>{var ce;if(h===d.length){i.set(w,!0);return}const v=d[h],O=e.hasChildren(u);if(h===0)O&&(v===I||v===fe)&&b(u,I,h+1);else if(v===fe)for(const{data:ee,name:je}of(ce=e.children(u))!=null?ce:[])O&&b(ee,`${w}.${je}`,h+1);else if(u!=null){const ee=u[v];O&&b(ee,`${w}.${v}`,h+1)}};b(o,"",0)}),a!==void 0)for(const[s,d]of a)d&&i.set(s,!0);return i};const Le=Ee(class extends Ne{constructor(o){var e;if(super(o),o.type!==Te.ATTRIBUTE||o.name!=="class"||((e=o.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var r,a;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(e)}const t=o.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const i=!!e[n];i===this.st.has(n)||(a=this.nt)!=null&&a.has(n)||(i?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Re}});var G=function(o,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},B,oe,q,N;let L=(N=class extends m{constructor(){super();j(this,B);j(this,q);this.expanded=!1,this.showGutter=!1,M(this,q,t=>{if(!p(this,B,oe))return;const r=this.renderRoot.querySelector("slot#children");t.composedPath().includes(r)||this.dispatchEvent(new re)}),this.addEventListener("click",p(this,q))}render(){return l`
      <div
        id="gutter"
        class=${Le({hidden:!p(this,B,oe),placeholder:this.showGutter})}
      >
        <span id="arrow">▶</span>
      </div>
      <div id="container">
        <slot name="label"></slot>
        <slot id="children" role="group"></slot>
      </div>
    `}},B=new WeakSet,oe=function(){var t;return this.item&&((t=this.treeAdapter)==null?void 0:t.hasChildren(this.item.data))},q=new WeakMap,N.styles=[J,f`
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
    `],N);G([c({type:Boolean,reflect:!0})],L.prototype,"expanded",void 0);G([c({attribute:!1})],L.prototype,"treeAdapter",void 0);G([c({type:Boolean})],L.prototype,"showGutter",void 0);G([c({attribute:!1})],L.prototype,"item",void 0);L=G([x("ix-tree-node")],L);const X=class X extends Event{constructor(){super(X.eventName,{cancelable:!0})}};X.eventName="toggle-expanded";let re=X;const xe=Object.getOwnPropertyNames;function Me(o,e){const t=Object.getOwnPropertyDescriptor(o,e);if(t!=null&&t.get)try{return t.get()}catch{return t.get}return o[e]}function*he(o,e){if(o!==void 0){let t=-1;for(const r of o)t>-1&&(yield e),t++,yield r}}var W=function(o,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},T;let U=(T=class extends m{constructor(){super(...arguments),this.maxProperties=5,this.maxArrayItems=10}render(){const e=this.data;if(typeof e!="object"||e===null||e instanceof Date||e instanceof RegExp)return l`<ix-object-value .data=${e}></ix-object-value>`;if(Array.isArray(e)){const t=e.slice(0,this.maxArrayItems).map(a=>l`<ix-object-value .data=${a}></ix-object-value>`),r=e.length;return r>this.maxArrayItems&&t.push(l`<span>…</span>`),l`
        <span>${r===0?"":`(${r}) `}</span
        ><span>[${he(t,", ")}]</span>
      `}else{const t=xe(e),r=t.slice(0,this.maxProperties).map(n=>{const i=Me(e,n);return l`<span
            ><ix-object-name .name=${n||'""'}></ix-object-name
            >:&nbsp;<ix-object-value .data=${i}></ix-object-value
          ></span>`});t.length>this.maxProperties&&r.push(l`<span>…</span>`);const a=e.constructor===void 0||e.constructor.name==="Object"?void 0:`${e.constructor.name} `;return l`
        <span>${a}</span
        ><span>{${he(r,", ")}}</span>
      `}}},T.styles=f`
    :host {
      color: var(--ix-object-preview-color);
      font-style: var(--ix-object-preview-font-style);
    }
  `,T);W([c({attribute:!1})],U.prototype,"data",void 0);W([c({type:Number})],U.prototype,"maxProperties",void 0);W([c({type:Number})],U.prototype,"maxArrayItems",void 0);U=W([x("ix-object-preview")],U);var $=function(o,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},R;class Ie{constructor(e){j(this,R);this.expandedPaths=new Map,M(this,R,e)}requestUpdate(){return p(this,R).requestUpdate()}hasChildren(e){return typeof e=="object"&&e!==null||typeof e=="function"?Array.isArray(e)?e.length>0:typeof e[Symbol.iterator]=="function"?!0:xe(e).length>0:!1}children(e){if(!this.hasChildren(e))return;const t=[];if(e instanceof Map)t.push({name:"[[Entries]]",data:new H(e),synthetic:!0,expanded:!0});else{if(e instanceof H)return t.push(...Array.from(e.map.entries()).map(([a,n])=>({name:String(a),data:n}))),t;if(e instanceof Set)t.push({name:"[[Entries]]",data:new k(e),synthetic:!0,expanded:!0});else{if(e instanceof k)return t.push(...Array.from(e.set.values()).map((a,n)=>({name:String(n),data:a}))),t;!Array.isArray(e)&&typeof e[Symbol.iterator]=="function"&&t.push(...Array.from(e).map((a,n)=>({name:n.toString(),data:a})))}}const r=Object.getOwnPropertyDescriptors(e);return t.push(...Object.entries(r).map(([a,n])=>({name:a,data:e[a],isNonEnumerable:!n.enumerable}))),t}render({item:e,depth:t=0,isNonEnumerable:r,parentPath:a}){var u,w;const n=a===void 0?I:`${a}.${e.name}`,i=(w=(u=this.expandedPaths.get(n))!=null?u:e.expanded)!=null?w:!1,s=typeof e.name=="string"&&e.name!==""?l`<ix-object-name
            .name=${e.name}
            .dimmed=${r!=null?r:!1}
          ></ix-object-name>`:t===0?void 0:l`<ix-object-preview .data=${e.name}></ix-object-preview>`,d=e.data instanceof H||e.data instanceof k?void 0:t===0?l`<ix-object-preview .data=${e.data}></ix-object-preview>`:l`<ix-object-value .data=${e.data}></ix-object-value>`,b=s&&d?l`<span>: </span>`:void 0;return l`<ix-tree-node
      .item=${e}
      .treeAdapter=${this}
      .expanded=${i}
      .showGutter=${t>0}
      @toggle-expanded=${()=>{var v,O;const h=(O=(v=this.expandedPaths.get(n))!=null?v:e.expanded)!=null?O:!1;this.expandedPaths.set(n,!h),p(this,R).requestUpdate()}}
      ><span slot="label">${s}${b}${d}</span
      >${me(this.children(e.data),h=>this.render({item:h,depth:t+1,parentPath:n}))}</ix-tree-node
    >`}}R=new WeakMap;var g,A;let y=(A=class extends m{constructor(){super(...arguments);j(this,g);this.expandLevel=1,this.showNonenumerable=!1,this.sortObjectKeys=!1,M(this,g,new Ie(this))}willUpdate(t){if(t.has("data")||t.has("expandPaths")||t.has("expandLevel")){const r=Array.isArray(this.expandPaths)?this.expandPaths:this.expandPaths===void 0?[]:[this.expandPaths];p(this,g).expandedPaths=Se(this.data,p(this,g),r,this.expandLevel,p(this,g).expandedPaths),this.requestUpdate()}}render(){return p(this,g).render({item:{data:this.data,name:this.name}})}},g=new WeakMap,A.styles=[J,f`
      :host {
        display: block;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `],A);$([c({type:Number})],y.prototype,"expandLevel",void 0);$([c()],y.prototype,"expandPaths",void 0);$([c()],y.prototype,"name",void 0);$([c({type:Object})],y.prototype,"data",void 0);$([c({type:Boolean})],y.prototype,"showNonenumerable",void 0);$([c({attribute:!1})],y.prototype,"sortObjectKeys",void 0);y=$([x("ix-object-inspector")],y);var ie=function(o,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},D;let Y=(D=class extends m{constructor(){super(...arguments),this.expanded=!1}render(){return l`&lt;/<span class="tagName">${this.name}</span>&gt;`}},D.styles=f`
    :host {
      white-space: nowrap;
      color: var(--ix-html-tag-color);
    }

    .tagName {
      color: var(--ix-html-tagname-color);
      text-transform: var(--ix-html-tagname-text-transform);
    }
  `,D);ie([c({attribute:!1})],Y.prototype,"name",void 0);ie([c({type:Boolean,reflect:!0})],Y.prototype,"expanded",void 0);Y=ie([x("ix-dom-close-tag")],Y);var Q=function(o,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},_;let z=(_=class extends m{constructor(){super(...arguments),this.expanded=!1}render(){var e;return l`<span
      >&lt;<span class="tagName">${this.name}</span>${(e=this.attributeData)==null?void 0:e.map(t=>l`<span>
            <span class="htmlAttributeName">${t.name}</span>="<span
              class="htmlAttributeValue"
              >${t.value}</span
            >"</span
          >`)}&gt;</span
    >`}},_.styles=f`
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
  `,_);Q([c()],z.prototype,"name",void 0);Q([c({attribute:!1})],z.prototype,"attributeData",void 0);Q([c({type:Boolean,reflect:!0})],z.prototype,"expanded",void 0);z=Q([x("ix-dom-open-tag")],z);const ve=(o,e=80)=>{var t,r;return o.nodeType===Node.ELEMENT_NODE&&((t=o.childNodes)==null?void 0:t.length)===1&&o.childNodes[0].nodeType===Node.TEXT_NODE&&((r=o.childNodes[0].textContent)==null?void 0:r.length)<e};var le=function(o,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},C;let K=(C=class extends m{constructor(){super(...arguments),this.expanded=!1}render(){const{data:e}=this;if(e===void 0)return l`<span>undefined</span>`;switch(e.nodeType){case Node.ELEMENT_NODE:{const t=this.expanded?te:ve(e)?e.childNodes[0].textContent:"…";return l`<span
          >${l`<ix-dom-open-tag
            .name=${e.tagName}
            .attributeData=${e.attributes}
          ></ix-dom-open-tag>`}${t}${this.expanded?te:l`<ix-dom-close-tag
                .name=${e.tagName}
              ></ix-dom-close-tag>`}</span
        >`}case Node.TEXT_NODE:return l`<span>${e.textContent}</span>`;case Node.CDATA_SECTION_NODE:return l`<span>${"<![CDATA["+e.textContent+"]]>"}</span>`;case Node.PROCESSING_INSTRUCTION_NODE:return l`<span>${e.nodeName}</span>`;case Node.COMMENT_NODE:return l`<span class="htmlComment"
          >&lt;!--${e.textContent}--&gt;</span
        >`;case Node.DOCUMENT_NODE:return l`<span>${e.nodeName}</span>`;case Node.DOCUMENT_TYPE_NODE:return l`<span class="htmlDoctype">
          &lt;!DOCTYPE ${e.name}
          ${e.publicId?` PUBLIC "${e.publicId}"`:""}
          ${!e.publicId&&e.systemId?" SYSTEM":""}
          ${e.systemId?` "${e.systemId}"`:""} &gt;
        </span>`;case Node.DOCUMENT_FRAGMENT_NODE:return l`<span>${e.nodeName}</span>`;default:return}}},C.styles=[J,f`
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
    `],C);le([c({attribute:!1})],K.prototype,"data",void 0);le([c({type:Boolean,reflect:!0})],K.prototype,"expanded",void 0);K=le([x("ix-dom-node-preview")],K);var ge=function(o,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},F;class Ue{constructor(e){j(this,F);this.expandedPaths=new Map,M(this,F,e)}hasChildren(e){var t,r;return((r=(t=e.childNodes)==null?void 0:t.length)!=null?r:0)>0&&!(e.nodeType===Node.ELEMENT_NODE&&ve(e))}children(e){if(this.hasChildren(e))return e.childNodes.map((t,r)=>({name:`${t.nodeName}[${r}]`,data:t}))}render({item:e,depth:t=0,parentPath:r}){var i,s;const a=r===void 0?I:`${r}.${e.name}`,n=(s=(i=this.expandedPaths.get(a))!=null?i:e.expanded)!=null?s:!1;return l`<ix-tree-node
      .item=${e}
      .treeAdapter=${this}
      .depth=${t}
      .expanded=${n}
      .shouldShowPlaceholder=${t>0}
      @toggle-expanded=${()=>{var b,u;const d=(u=(b=this.expandedPaths.get(a))!=null?b:e.expanded)!=null?u:!1;this.expandedPaths.set(a,!d),p(this,F).requestUpdate()}}
      ><ix-dom-node-preview
        slot="label"
        .data=${e.data}
        .expanded=${n}
      ></ix-dom-node-preview
      >${me(this.children(e.data),d=>this.render({item:d,depth:t+1,parentPath:a}))}${e.data.nodeType===Node.ELEMENT_NODE?l`<ix-dom-close-tag .name=${e.data.tagName}></ix-dom-close-tag>`:te}</ix-tree-node
    >`}}F=new WeakMap;var Z,S;let ae=(S=class extends m{constructor(){super(...arguments);j(this,Z,new Ue(this))}render(){return this.data===void 0?l`<span>undefined</span>`:p(this,Z).render({item:{data:this.data}})}},Z=new WeakMap,S.styles=[J,f`
      :host {
        display: block;
      }
    `],S);ge([c({attribute:!1})],ae.prototype,"data",void 0);ae=ge([x("ix-dom-inspector")],ae);class ye extends m{async connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.json=(t=this.shadowRoot)==null?void 0:t.getElementById("json")}render(){return l`
      <label for="selectOption">
        Testing different HTTP Verbs
        <a target="_blank" rel="noopener" href="https://httpbin.org/#/HTTP_Methods/">
          - httpbin.org
        </a>
      </label>
      <div class="select-dropdown">
        <select id="selectOption" @change=${this._onHandleChange}>
          <option>[ HTTP Methods ]</option>
          <option value="GET">Get</option>
          <option value="POST">Post</option>
          <option value="FORMDATA">Post - FormData</option>
          <option value="PATCH">Patch</option>
          <option value="PUT">Put</option>
          <option value="DELETE">Delete</option>
          <option value="ERROR">Error</option>
        </select>
      </div>
      <p>Open DevTools to view different events</p>
      <ix-object-inspector name="object-inspector" expandLevel="2" id="json"></ix-object-inspector>
    `}_onHandleChange({target:e}){const{value:t}=e;this._makeRequest(t)}_makeRequest(e){const t=e==="FORMDATA"?"POST":e,r={url:"https://httpbin.org",method:t};let a={};const n=new FormData;switch(n.append("rxjs","Ajax"),n.append("ajax","RxJS"),e){case"GET":a={path:e.toLowerCase()};break;case"POST":a={path:e.toLowerCase(),headers:{"Content-Type":"application/json","rxjs-custom-header":"Rxjs"},body:{rxjs:`Body ${t}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case"FORMDATA":a={path:"post",headers:{"rxjs-custom-header":"Rxjs"},body:n};break;case"PATCH":a={path:e.toLowerCase(),body:{rxjs:`Body ${t}`}};break;case"PUT":a={path:e.toLowerCase(),body:{rxjs:`Body ${t}`}};break;case"DELETE":a={path:e.toLowerCase(),body:{rxjs:`Body ${t}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case"ERROR":a={path:"status/500",method:"GET"};break;default:console.error("Invalid HTTP method");return}const i=new Ae({...r,...a});i.addEventListener("ajaxpresend",({detail:s})=>{this.json&&(this.json.data=void 0),console.log(`ajaxpresend: ${s}`)}),i.addEventListener("ajaxresponse",({detail:s})=>console.log(s)),i.addEventListener("ajaxprogress",({detail:s})=>console.log(s)),i.addEventListener("ajaxresponseend",({detail:s})=>console.log(`ajaxresponseend: ${s}`)),i.addEventListener("ajaxerror",({detail:s})=>console.dir(s)),i.addEventListener("ajaxerrorend",({detail:s})=>console.log(`ajaxerrorend: ${s}`)),i.generateRequest().then(s=>{this.json&&(this.json.data=s),console.log(`RESULT ${e}`,s)}).catch(s=>{this.json&&(this.json.data=s),console.dir(s)})}}pe(ye,"styles",f`
    :host {
      display: flex;
      flex-direction: column;
      inline-size: clamp(45ch, 50%, 75ch);
      margin-block: 0;
      margin-inline: auto;
      padding: 2rem;
    }

    a {
      text-decoration: none;
    }

    label {
      display: inline-block;
      margin-block-end: 1rem;
    }

    .select-dropdown {
      position: relative;
      background-color: #e6e6e6;
      margin-block-end: 1rem;
    }

    .select-dropdown select {
      font: inherit;
      inline-size: 100%;
      padding-block: 12px;
      padding-inline: 10px 30px;
      border: none;
      background-color: transparent;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
    }

    .select-dropdown select:active,
    .select-dropdown select:focus {
      outline: 1px solid #9e9e9e;
      outline-offset: 2px;
    }

    .select-dropdown::after {
      content: ' ';
      pointer-events: none;
      position: absolute;
      inset-block-start: 50%;
      margin-block-start: -0.1rem;
      inset-inline-end: 0.75rem;
      width: 0;
      height: 0;
      border-inline-start: 5px solid transparent;
      border-inline-end: 5px solid transparent;
      border-block-start: 5px solid #aaa;
    }

    p,
    a {
      font-size: 0.9rem;
    }

    p {
      text-align: center;
    }

    ix-object-inspector {
      padding: 0.5rem;
      background-color: #fff;
    }
  `);customElements.define("ajax-provider-component",ye);
