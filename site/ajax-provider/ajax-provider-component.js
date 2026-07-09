import{a as e,c as t,d as n,f as r,i,n as a,r as o,s,t as c,u as l}from"./assets/directive-Ct1PbJP0.js";import{t as u}from"./assets/src-DSbyPQNl.js";import{t as ee}from"./assets/defineProperty-BbfpZ9Tg.js";function te(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function d(e,t,n){te(e,t),t.set(e,n)}function f(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function p(e,t,n){return e.set(f(e,t),n),n}function m(e,t){return e.get(f(e,t))}var h=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ne={attribute:!0,type:String,converter:n,reflect:!1,hasChanged:l},re=(e=ne,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function g(e){return(t,n)=>typeof n==`object`?re(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function*ie(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var _,v=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},y=(_=class extends i{constructor(){super(...arguments),this.dimmed=!1}render(){return this.name}},_.styles=r`
    :host {
      color: var(--ix-object-name-color);
    }
    :host([dimmed]) {
      opacity: var(--ix-object-name-dimmed-opacity, 0.6);
    }
  `,_);v([g({reflect:!0})],y.prototype,`name`,void 0),v([g({type:Boolean,reflect:!0})],y.prototype,`dimmed`,void 0),y=v([h(`ix-object-name`)],y);var b,x=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},S=class{constructor(e){this.map=e}},C=class{constructor(e){this.set=e}},w=(b=class extends i{render(){let e=this.data;switch(typeof e){case`bigint`:return t`<span class="number">${String(e)}n</span>`;case`number`:return t`<span class="number">${String(e)}</span>`;case`string`:return t`<span class="string">"${e}"</span>`;case`boolean`:return t`<span class="boolean">${String(e)}</span>`;case`undefined`:return t`<span class="undefined">undefined</span>`;case`object`:return e===null?t`<span class="null">null</span>`:e instanceof Map?t`<span>Map(${e.size})</span>`:e instanceof Set?t`<span>Set(${e.size})</span>`:e instanceof S?t`<span>(${e.map.size})</span>`:e instanceof C?t`<span>(${e.set.size})</span>`:e instanceof Date?t`<span>${e.toString()}</span>`:e instanceof RegExp?t`<span class="RegExp"> ${e.toString()} </span>`:Array.isArray(e)?t`<span>${`Array(${e.length})`}</span>`:e.constructor?typeof e.constructor.isBuffer==`function`&&e.constructor.isBuffer(e)?t`<span>${`Buffer[${e.length}]`}</span>`:t`<span>${e.constructor.name}</span>`:t`<span>Object</span>`;case`function`:return t`<span>
          <span class="FunctionPrefix">ƒ&nbsp;</span>
          <span class="FunctionName"> ${e.name}() </span>
        </span>`;case`symbol`:return t`<span class="symbol">${e.toString()}</span>`;default:return t`<span></span>`}}},b.styles=r`
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
  `,b);x([g({attribute:!1})],w.prototype,`data`,void 0),w=x([h(`ix-object-value`)],w);var T=r`
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
`,ae=`*`,oe=e=>Array.from({length:e},(e,t)=>[`$`].concat(Array.from({length:t},()=>`*`)).join(`.`)),se=(e,t,n,r=0,i)=>{let a=[...oe(r)].concat(n).filter(e=>typeof e==`string`),o=new Map;if(a.forEach(n=>{let r=n.split(`.`),i=(e,n,a)=>{if(a===r.length){o.set(n,!0);return}let s=r[a],c=t.hasChildren(e);if(a===0)c&&(s===`$`||s===ae)&&i(e,`$`,a+1);else if(s===ae){var l;for(let{data:r,name:o}of(l=t.children(e))==null?[]:l)c&&i(r,`${n}.${o}`,a+1)}else if(e!=null){let t=e[s];c&&i(t,`${n}.${s}`,a+1)}};i(e,``,0)}),i!==void 0)for(let[e,t]of i)t&&o.set(e,!0);return o};function ce(e,t){te(e,t),t.add(e)}var le=c(class extends a{constructor(e){var t;if(super(e),e.type!==o.ATTRIBUTE||e.name!==`class`||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){var n;this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!((n=this.nt)!=null&&n.has(e))&&this.st.add(e);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){var i;let n=!!t[e];n===this.st.has(e)||(i=this.nt)!=null&&i.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return s}}),E,D,O,ue,k=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A=(E=new WeakSet,D=new WeakMap,O=class extends i{constructor(){super(),ce(this,E),d(this,D,void 0),this.expanded=!1,this.showGutter=!1,p(D,this,e=>{if(!j.call(f(E,this)))return;let t=this.renderRoot.querySelector(`slot#children`);e.composedPath().includes(t)||this.dispatchEvent(new M)}),this.addEventListener(`click`,m(D,this))}render(){return t`
      <div
        id="gutter"
        class=${le({hidden:!j.call(f(E,this)),placeholder:this.showGutter})}
      >
        <span id="arrow">▶</span>
      </div>
      <div id="container">
        <slot name="label"></slot>
        <slot id="children" role="group"></slot>
      </div>
    `}},O.styles=[T,r`
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
    `],O);function j(){var e;return this.item&&((e=this.treeAdapter)==null?void 0:e.hasChildren(this.item.data))}k([g({type:Boolean,reflect:!0})],A.prototype,`expanded`,void 0),k([g({attribute:!1})],A.prototype,`treeAdapter`,void 0),k([g({type:Boolean})],A.prototype,`showGutter`,void 0),k([g({attribute:!1})],A.prototype,`item`,void 0),A=k([h(`ix-tree-node`)],A);var M=class e extends Event{constructor(){super(e.eventName,{cancelable:!0})}};ue=M,ue.eventName=`toggle-expanded`;var de=Object.getOwnPropertyNames;Object.hasOwn;function fe(e,t){let n=Object.getOwnPropertyDescriptor(e,t);if(n!=null&&n.get)try{return n.get()}catch{return n.get}return e[t]}function*pe(e,t){let n=typeof t==`function`;if(e!==void 0){let r=-1;for(let i of e)r>-1&&(yield n?t(r):t),r++,yield i}}var N,P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=(N=class extends i{constructor(){super(...arguments),this.maxProperties=5,this.maxArrayItems=10}render(){let e=this.data;if(typeof e!=`object`||!e||e instanceof Date||e instanceof RegExp)return t`<ix-object-value .data=${e}></ix-object-value>`;if(Array.isArray(e)){let n=e.slice(0,this.maxArrayItems).map(e=>t`<ix-object-value .data=${e}></ix-object-value>`),r=e.length;return r>this.maxArrayItems&&n.push(t`<span>…</span>`),t`
        <span>${r===0?``:`(${r})\xa0`}</span
        ><span>[${pe(n,`, `)}]</span>
      `}else{let n=de(e),r=n.slice(0,this.maxProperties).map(n=>{let r=fe(e,n);return t`<span
            ><ix-object-name .name=${n||`""`}></ix-object-name
            >:&nbsp;<ix-object-value .data=${r}></ix-object-value
          ></span>`});return n.length>this.maxProperties&&r.push(t`<span>…</span>`),t`
        <span>${e.constructor===void 0||e.constructor.name===`Object`?void 0:`${e.constructor.name} `}</span
        ><span>{${pe(r,`, `)}}</span>
      `}}},N.styles=r`
    :host {
      color: var(--ix-object-preview-color);
      font-style: var(--ix-object-preview-font-style);
    }
  `,N);P([g({attribute:!1})],F.prototype,`data`,void 0),P([g({type:Number})],F.prototype,`maxProperties`,void 0),P([g({type:Number})],F.prototype,`maxArrayItems`,void 0),F=P([h(`ix-object-preview`)],F);var I,L,R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},z=new WeakMap,me=class{constructor(e){d(this,z,void 0),this.expandedPaths=new Map,p(z,this,e)}requestUpdate(){return m(z,this).requestUpdate()}hasChildren(e){return typeof e==`object`&&e||typeof e==`function`?Array.isArray(e)?e.length>0:typeof e[Symbol.iterator]==`function`||de(e).length>0:!1}children(e){if(!this.hasChildren(e))return;let t=[];if(e instanceof Map)t.push({name:`[[Entries]]`,data:new S(e),synthetic:!0,expanded:!0});else if(e instanceof S)return t.push(...Array.from(e.map.entries()).map(([e,t])=>({name:String(e),data:t}))),t;else if(e instanceof Set)t.push({name:`[[Entries]]`,data:new C(e),synthetic:!0,expanded:!0});else if(e instanceof C)return t.push(...Array.from(e.set.values()).map((e,t)=>({name:String(t),data:e}))),t;else!Array.isArray(e)&&typeof e[Symbol.iterator]==`function`&&t.push(...Array.from(e).map((e,t)=>({name:t.toString(),data:e})));let n=Object.getOwnPropertyDescriptors(e);return t.push(...Object.entries(n).map(([t,n])=>({name:t,data:e[t],isNonEnumerable:!n.enumerable}))),t}render({item:e,depth:n=0,isNonEnumerable:r,parentPath:i}){var a,o;let s=i===void 0?`$`:`${i}.${e.name}`,c=(a=(o=this.expandedPaths.get(s))==null?e.expanded:o)!=null&&a,l=typeof e.name==`string`&&e.name!==``?t`<ix-object-name
            .name=${e.name}
            .dimmed=${r!=null&&r}
          ></ix-object-name>`:n===0?void 0:t`<ix-object-preview .data=${e.name}></ix-object-preview>`,u=e.data instanceof S||e.data instanceof C?void 0:n===0?t`<ix-object-preview .data=${e.data}></ix-object-preview>`:t`<ix-object-value .data=${e.data}></ix-object-value>`,ee=l&&u?t`<span>: </span>`:void 0;return t`<ix-tree-node
      .item=${e}
      .treeAdapter=${this}
      .expanded=${c}
      .showGutter=${n>0}
      @toggle-expanded=${()=>{var t,n;let r=(t=(n=this.expandedPaths.get(s))==null?e.expanded:n)!=null&&t;this.expandedPaths.set(s,!r),m(z,this).requestUpdate()}}
      ><span slot="label">${l}${ee}${u}</span
      >${ie(this.children(e.data),e=>this.render({item:e,depth:n+1,parentPath:s}))}</ix-tree-node
    >`}},B=(I=new WeakMap,L=class extends i{constructor(){super(...arguments),d(this,I,void 0),this.expandLevel=1,this.showNonenumerable=!1,this.sortObjectKeys=!1,p(I,this,new me(this))}willUpdate(e){if(e.has(`data`)||e.has(`expandPaths`)||e.has(`expandLevel`)){let e=Array.isArray(this.expandPaths)?this.expandPaths:this.expandPaths===void 0?[]:[this.expandPaths];m(I,this).expandedPaths=se(this.data,m(I,this),e,this.expandLevel,m(I,this).expandedPaths),this.requestUpdate()}}render(){return m(I,this).render({item:{data:this.data,name:this.name}})}},L.styles=[T,r`
      :host {
        display: block;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `],L);R([g({type:Number})],B.prototype,`expandLevel`,void 0),R([g()],B.prototype,`expandPaths`,void 0),R([g()],B.prototype,`name`,void 0),R([g({type:Object})],B.prototype,`data`,void 0),R([g({type:Boolean})],B.prototype,`showNonenumerable`,void 0),R([g({attribute:!1})],B.prototype,`sortObjectKeys`,void 0),B=R([h(`ix-object-inspector`)],B);var V,H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U=(V=class extends i{constructor(){super(...arguments),this.expanded=!1}render(){return t`&lt;/<span class="tagName">${this.name}</span>&gt;`}},V.styles=r`
    :host {
      white-space: nowrap;
      color: var(--ix-html-tag-color);
    }

    .tagName {
      color: var(--ix-html-tagname-color);
      text-transform: var(--ix-html-tagname-text-transform);
    }
  `,V);H([g({attribute:!1})],U.prototype,`name`,void 0),H([g({type:Boolean,reflect:!0})],U.prototype,`expanded`,void 0),U=H([h(`ix-dom-close-tag`)],U);var W,G=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},K=(W=class extends i{constructor(){super(...arguments),this.expanded=!1}render(){var e;return t`<span
      >&lt;<span class="tagName">${this.name}</span>${(e=this.attributeData)==null?void 0:e.map(e=>t`<span>
            <span class="htmlAttributeName">${e.name}</span>="<span
              class="htmlAttributeValue"
              >${e.value}</span
            >"</span
          >`)}&gt;</span
    >`}},W.styles=r`
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
  `,W);G([g()],K.prototype,`name`,void 0),G([g({attribute:!1})],K.prototype,`attributeData`,void 0),G([g({type:Boolean,reflect:!0})],K.prototype,`expanded`,void 0),K=G([h(`ix-dom-open-tag`)],K);var he=(e,t=80)=>{var n,r;return e.nodeType===Node.ELEMENT_NODE&&((n=e.childNodes)==null?void 0:n.length)===1&&e.childNodes[0].nodeType===Node.TEXT_NODE&&((r=e.childNodes[0].textContent)==null?void 0:r.length)<t},q,J=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Y=(q=class extends i{constructor(){super(...arguments),this.expanded=!1}render(){let{data:n}=this;if(n===void 0)return t`<span>undefined</span>`;switch(n.nodeType){case Node.ELEMENT_NODE:{let r=this.expanded?e:he(n)?n.childNodes[0].textContent:`…`;return t`<span
          >${t`<ix-dom-open-tag
            .name=${n.tagName}
            .attributeData=${n.attributes}
          ></ix-dom-open-tag>`}${r}${this.expanded?e:t`<ix-dom-close-tag
                .name=${n.tagName}
              ></ix-dom-close-tag>`}</span
        >`}case Node.TEXT_NODE:return t`<span>${n.textContent}</span>`;case Node.CDATA_SECTION_NODE:return t`<span>${`<![CDATA[`+n.textContent+`]]>`}</span>`;case Node.PROCESSING_INSTRUCTION_NODE:return t`<span>${n.nodeName}</span>`;case Node.COMMENT_NODE:return t`<span class="htmlComment"
          >&lt;!--${n.textContent}--&gt;</span
        >`;case Node.DOCUMENT_NODE:return t`<span>${n.nodeName}</span>`;case Node.DOCUMENT_TYPE_NODE:return t`<span class="htmlDoctype">
          &lt;!DOCTYPE ${n.name}
          ${n.publicId?` PUBLIC "${n.publicId}"`:``}
          ${!n.publicId&&n.systemId?` SYSTEM`:``}
          ${n.systemId?` "${n.systemId}"`:``} &gt;
        </span>`;case Node.DOCUMENT_FRAGMENT_NODE:return t`<span>${n.nodeName}</span>`;default:return}}},q.styles=[T,r`
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
    `],q);J([g({attribute:!1})],Y.prototype,`data`,void 0),J([g({type:Boolean,reflect:!0})],Y.prototype,`expanded`,void 0),Y=J([h(`ix-dom-node-preview`)],Y);var X,Z,ge=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Q=new WeakMap,_e=class{constructor(e){d(this,Q,void 0),this.expandedPaths=new Map,p(Q,this,e)}hasChildren(e){var t,n;return((t=(n=e.childNodes)==null?void 0:n.length)==null?0:t)>0&&!(e.nodeType===Node.ELEMENT_NODE&&he(e))}children(e){if(this.hasChildren(e))return e.childNodes.map((e,t)=>({name:`${e.nodeName}[${t}]`,data:e}))}render({item:n,depth:r=0,parentPath:i}){var a,o;let s=i===void 0?`$`:`${i}.${n.name}`,c=(a=(o=this.expandedPaths.get(s))==null?n.expanded:o)!=null&&a;return t`<ix-tree-node
      .item=${n}
      .treeAdapter=${this}
      .depth=${r}
      .expanded=${c}
      .shouldShowPlaceholder=${r>0}
      @toggle-expanded=${()=>{var e,t;let r=(e=(t=this.expandedPaths.get(s))==null?n.expanded:t)!=null&&e;this.expandedPaths.set(s,!r),m(Q,this).requestUpdate()}}
      ><ix-dom-node-preview
        slot="label"
        .data=${n.data}
        .expanded=${c}
      ></ix-dom-node-preview
      >${ie(this.children(n.data),e=>this.render({item:e,depth:r+1,parentPath:s}))}${n.data.nodeType===Node.ELEMENT_NODE?t`<ix-dom-close-tag .name=${n.data.tagName}></ix-dom-close-tag>`:e}</ix-tree-node
    >`}},$=(X=new WeakMap,Z=class extends i{constructor(...e){super(...e),d(this,X,new _e(this))}render(){return this.data===void 0?t`<span>undefined</span>`:m(X,this).render({item:{data:this.data}})}},Z.styles=[T,r`
      :host {
        display: block;
      }
    `],Z);ge([g({attribute:!1})],$.prototype,`data`,void 0),$=ge([h(`ix-dom-inspector`)],$);var ve=class extends i{async connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.json=(t=this.shadowRoot)==null?void 0:t.getElementById(`json`)}render(){return t`
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
    `}_onHandleChange({target:e}){let{value:t}=e;this._makeRequest(t)}_makeRequest(e){let t=e===`FORMDATA`?`POST`:e,n={url:`https://httpbin.org`,method:t},r,i=new FormData;switch(i.append(`rxjs`,`Ajax`),i.append(`ajax`,`RxJS`),e){case`GET`:r={path:e.toLowerCase()};break;case`POST`:r={path:e.toLowerCase(),headers:{"Content-Type":`application/json`,"rxjs-custom-header":`Rxjs`},body:{rxjs:`Body ${t}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case`FORMDATA`:r={path:`post`,headers:{"rxjs-custom-header":`Rxjs`},body:i};break;case`PATCH`:r={path:e.toLowerCase(),body:{rxjs:`Body ${t}`}};break;case`PUT`:r={path:e.toLowerCase(),body:{rxjs:`Body ${t}`}};break;case`DELETE`:r={path:e.toLowerCase(),body:{rxjs:`Body ${t}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case`ERROR`:r={path:`status/500`,method:`GET`};break;default:console.error(`Invalid HTTP method`);return}let a=new u({...n,...r});a.addEventListener(`ajaxpresend`,({detail:e})=>{this.json&&(this.json.data=void 0),console.log(`ajaxpresend: ${e}`)}),a.addEventListener(`ajaxresponse`,({detail:e})=>console.log(e)),a.addEventListener(`ajaxprogress`,({detail:e})=>console.log(e)),a.addEventListener(`ajaxresponseend`,({detail:e})=>console.log(`ajaxresponseend: ${e}`)),a.addEventListener(`ajaxerror`,({detail:e})=>console.dir(e)),a.addEventListener(`ajaxerrorend`,({detail:e})=>console.log(`ajaxerrorend: ${e}`)),a.generateRequest().then(t=>{this.json&&(this.json.data=t),console.log(`RESULT ${e}`,t)}).catch(e=>{this.json&&(this.json.data=e),console.dir(e)})}};ee(ve,`styles`,r`
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
  `),customElements.define(`ajax-provider-component`,ve);