import{a as e,c as t,d as n,f as r,i,n as a,r as o,s,t as c,u as l}from"./assets/directive-DQ603siy.js";import{a as u,c as d,d as f,i as ee,l as p,n as m,o as te,r as ne,s as re,t as h,u as g}from"./assets/src-CxfJtSR4.js";var _=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ie={attribute:!0,type:String,converter:n,reflect:!1,hasChanged:l},ae=(e=ie,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function v(e){return(t,n)=>typeof n==`object`?ae(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function*oe(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var y,b=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},x=(y=class extends i{constructor(){super(...arguments),this.dimmed=!1}render(){return this.name}},y.styles=r`
    :host {
      color: var(--ix-object-name-color);
    }
    :host([dimmed]) {
      opacity: var(--ix-object-name-dimmed-opacity, 0.6);
    }
  `,y);b([v({reflect:!0})],x.prototype,`name`,void 0),b([v({type:Boolean,reflect:!0})],x.prototype,`dimmed`,void 0),x=b([_(`ix-object-name`)],x);var S,se=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},C=class{constructor(e){this.map=e}},w=class{constructor(e){this.set=e}},T=(S=class extends i{render(){let e=this.data;switch(typeof e){case`bigint`:return t`<span class="number">${String(e)}n</span>`;case`number`:return t`<span class="number">${String(e)}</span>`;case`string`:return t`<span class="string">"${e}"</span>`;case`boolean`:return t`<span class="boolean">${String(e)}</span>`;case`undefined`:return t`<span class="undefined">undefined</span>`;case`object`:return e===null?t`<span class="null">null</span>`:e instanceof Map?t`<span>Map(${e.size})</span>`:e instanceof Set?t`<span>Set(${e.size})</span>`:e instanceof C?t`<span>(${e.map.size})</span>`:e instanceof w?t`<span>(${e.set.size})</span>`:e instanceof Date?t`<span>${e.toString()}</span>`:e instanceof RegExp?t`<span class="RegExp"> ${e.toString()} </span>`:Array.isArray(e)?t`<span>${`Array(${e.length})`}</span>`:e.constructor?typeof e.constructor.isBuffer==`function`&&e.constructor.isBuffer(e)?t`<span>${`Buffer[${e.length}]`}</span>`:t`<span>${e.constructor.name}</span>`:t`<span>Object</span>`;case`function`:return t`<span>
          <span class="FunctionPrefix">ƒ&nbsp;</span>
          <span class="FunctionName"> ${e.name}() </span>
        </span>`;case`symbol`:return t`<span class="symbol">${e.toString()}</span>`;default:return t`<span></span>`}}},S.styles=r`
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
  `,S);se([v({attribute:!1})],T.prototype,`data`,void 0),T=se([_(`ix-object-value`)],T);var E=r`
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
`,ce=`*`,le=e=>Array.from({length:e},(e,t)=>[`$`].concat(Array.from({length:t},()=>`*`)).join(`.`)),ue=(e,t,n,r=0,i)=>{let a=[...le(r)].concat(n).filter(e=>typeof e==`string`),o=new Map;if(a.forEach(n=>{let r=n.split(`.`),i=(e,n,a)=>{if(a===r.length){o.set(n,!0);return}let s=r[a],c=t.hasChildren(e);if(a===0)c&&(s===`$`||s===ce)&&i(e,`$`,a+1);else if(s===ce){var l;for(let{data:r,name:o}of(l=t.children(e))==null?[]:l)c&&i(r,`${n}.${o}`,a+1)}else if(e!=null){let t=e[s];c&&i(t,`${n}.${s}`,a+1)}};i(e,``,0)}),i!==void 0)for(let[e,t]of i)t&&o.set(e,!0);return o},de=c(class extends a{constructor(e){var t;if(super(e),e.type!==o.ATTRIBUTE||e.name!==`class`||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){var n;this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!((n=this.nt)!=null&&n.has(e))&&this.st.add(e);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){var i;let n=!!t[e];n===this.st.has(e)||(i=this.nt)!=null&&i.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return s}}),D,O,k,fe,A=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=(D=new WeakSet,O=new WeakMap,k=class extends i{constructor(){super(),re(this,D),f(this,O,void 0),this.expanded=!1,this.showGutter=!1,p(O,this,e=>{if(!pe.call(g(D,this)))return;let t=this.renderRoot.querySelector(`slot#children`);e.composedPath().includes(t)||this.dispatchEvent(new me)}),this.addEventListener(`click`,d(O,this))}render(){return t`
      <div
        id="gutter"
        class=${de({hidden:!pe.call(g(D,this)),placeholder:this.showGutter})}
      >
        <span id="arrow">▶</span>
      </div>
      <div id="container">
        <slot name="label"></slot>
        <slot id="children" role="group"></slot>
      </div>
    `}},k.styles=[E,r`
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
    `],k);function pe(){var e;return this.item&&((e=this.treeAdapter)==null?void 0:e.hasChildren(this.item.data))}A([v({type:Boolean,reflect:!0})],j.prototype,`expanded`,void 0),A([v({attribute:!1})],j.prototype,`treeAdapter`,void 0),A([v({type:Boolean})],j.prototype,`showGutter`,void 0),A([v({attribute:!1})],j.prototype,`item`,void 0),j=A([_(`ix-tree-node`)],j);var me=class e extends Event{constructor(){super(e.eventName,{cancelable:!0})}};fe=me,fe.eventName=`toggle-expanded`;var he=Object.getOwnPropertyNames;Object.hasOwn;function ge(e,t){let n=Object.getOwnPropertyDescriptor(e,t);if(n!=null&&n.get)try{return n.get()}catch{return n.get}return e[t]}function*_e(e,t){let n=typeof t==`function`;if(e!==void 0){let r=-1;for(let i of e)r>-1&&(yield n?t(r):t),r++,yield i}}var M,N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=(M=class extends i{constructor(){super(...arguments),this.maxProperties=5,this.maxArrayItems=10}render(){let e=this.data;if(typeof e!=`object`||!e||e instanceof Date||e instanceof RegExp)return t`<ix-object-value .data=${e}></ix-object-value>`;if(Array.isArray(e)){let n=e.slice(0,this.maxArrayItems).map(e=>t`<ix-object-value .data=${e}></ix-object-value>`),r=e.length;return r>this.maxArrayItems&&n.push(t`<span>…</span>`),t`
        <span>${r===0?``:`(${r})\xa0`}</span
        ><span>[${_e(n,`, `)}]</span>
      `}{let n=he(e),r=n.slice(0,this.maxProperties).map(n=>{let r=ge(e,n);return t`<span
            ><ix-object-name .name=${n||`""`}></ix-object-name
            >:&nbsp;<ix-object-value .data=${r}></ix-object-value
          ></span>`});n.length>this.maxProperties&&r.push(t`<span>…</span>`);let i=e.constructor===void 0||e.constructor.name===`Object`?void 0:`${e.constructor.name} `;return t`
        <span>${i}</span
        ><span>{${_e(r,`, `)}}</span>
      `}}},M.styles=r`
    :host {
      color: var(--ix-object-preview-color);
      font-style: var(--ix-object-preview-font-style);
    }
  `,M);N([v({attribute:!1})],P.prototype,`data`,void 0),N([v({type:Number})],P.prototype,`maxProperties`,void 0),N([v({type:Number})],P.prototype,`maxArrayItems`,void 0),P=N([_(`ix-object-preview`)],P);var F,I,L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R=new WeakMap,ve=class{constructor(e){f(this,R,void 0),this.expandedPaths=new Map,p(R,this,e)}requestUpdate(){return d(R,this).requestUpdate()}hasChildren(e){return typeof e==`object`&&e||typeof e==`function`?Array.isArray(e)?e.length>0:typeof e[Symbol.iterator]==`function`||he(e).length>0:!1}children(e){if(!this.hasChildren(e))return;let t=[];if(e instanceof Map)t.push({name:`[[Entries]]`,data:new C(e),synthetic:!0,expanded:!0});else if(e instanceof C)return t.push(...Array.from(e.map.entries()).map(([e,t])=>({name:String(e),data:t}))),t;else if(e instanceof Set)t.push({name:`[[Entries]]`,data:new w(e),synthetic:!0,expanded:!0});else if(e instanceof w)return t.push(...Array.from(e.set.values()).map((e,t)=>({name:String(t),data:e}))),t;else!Array.isArray(e)&&typeof e[Symbol.iterator]==`function`&&t.push(...Array.from(e).map((e,t)=>({name:t.toString(),data:e})));let n=Object.getOwnPropertyDescriptors(e);return t.push(...Object.entries(n).map(([t,n])=>({name:t,data:e[t],isNonEnumerable:!n.enumerable}))),t}render({item:e,depth:n=0,isNonEnumerable:r,parentPath:i}){var a,o;let s=i===void 0?`$`:`${i}.${e.name}`,c=(a=(o=this.expandedPaths.get(s))==null?e.expanded:o)!=null&&a,l=typeof e.name==`string`&&e.name!==``?t`<ix-object-name
            .name=${e.name}
            .dimmed=${r!=null&&r}
          ></ix-object-name>`:n===0?void 0:t`<ix-object-preview .data=${e.name}></ix-object-preview>`,u=e.data instanceof C||e.data instanceof w?void 0:n===0?t`<ix-object-preview .data=${e.data}></ix-object-preview>`:t`<ix-object-value .data=${e.data}></ix-object-value>`,f=l&&u?t`<span>: </span>`:void 0;return t`<ix-tree-node
      .item=${e}
      .treeAdapter=${this}
      .expanded=${c}
      .showGutter=${n>0}
      @toggle-expanded=${()=>{var t,n;let r=(t=(n=this.expandedPaths.get(s))==null?e.expanded:n)!=null&&t;this.expandedPaths.set(s,!r),d(R,this).requestUpdate()}}
      ><span slot="label">${l}${f}${u}</span
      >${oe(this.children(e.data),e=>this.render({item:e,depth:n+1,parentPath:s}))}</ix-tree-node
    >`}},z=(F=new WeakMap,I=class extends i{constructor(){super(...arguments),f(this,F,void 0),this.expandLevel=1,this.showNonenumerable=!1,this.sortObjectKeys=!1,p(F,this,new ve(this))}willUpdate(e){if(e.has(`data`)||e.has(`expandPaths`)||e.has(`expandLevel`)){let e=Array.isArray(this.expandPaths)?this.expandPaths:this.expandPaths===void 0?[]:[this.expandPaths];d(F,this).expandedPaths=ue(this.data,d(F,this),e,this.expandLevel,d(F,this).expandedPaths),this.requestUpdate()}}render(){return d(F,this).render({item:{data:this.data,name:this.name}})}},I.styles=[E,r`
      :host {
        display: block;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `],I);L([v({type:Number})],z.prototype,`expandLevel`,void 0),L([v()],z.prototype,`expandPaths`,void 0),L([v()],z.prototype,`name`,void 0),L([v({type:Object})],z.prototype,`data`,void 0),L([v({type:Boolean})],z.prototype,`showNonenumerable`,void 0),L([v({attribute:!1})],z.prototype,`sortObjectKeys`,void 0),z=L([_(`ix-object-inspector`)],z);var B,V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=(B=class extends i{constructor(){super(...arguments),this.expanded=!1}render(){return t`&lt;/<span class="tagName">${this.name}</span>&gt;`}},B.styles=r`
    :host {
      white-space: nowrap;
      color: var(--ix-html-tag-color);
    }

    .tagName {
      color: var(--ix-html-tagname-color);
      text-transform: var(--ix-html-tagname-text-transform);
    }
  `,B);V([v({attribute:!1})],H.prototype,`name`,void 0),V([v({type:Boolean,reflect:!0})],H.prototype,`expanded`,void 0),H=V([_(`ix-dom-close-tag`)],H);var U,W=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},G=(U=class extends i{constructor(){super(...arguments),this.expanded=!1}render(){var e;return t`<span
      >&lt;<span class="tagName">${this.name}</span>${(e=this.attributeData)==null?void 0:e.map(e=>t`<span>
            <span class="htmlAttributeName">${e.name}</span>="<span
              class="htmlAttributeValue"
              >${e.value}</span
            >"</span
          >`)}&gt;</span
    >`}},U.styles=r`
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
  `,U);W([v()],G.prototype,`name`,void 0),W([v({attribute:!1})],G.prototype,`attributeData`,void 0),W([v({type:Boolean,reflect:!0})],G.prototype,`expanded`,void 0),G=W([_(`ix-dom-open-tag`)],G);var ye=(e,t=80)=>{var n,r;return e.nodeType===Node.ELEMENT_NODE&&((n=e.childNodes)==null?void 0:n.length)===1&&e.childNodes[0].nodeType===Node.TEXT_NODE&&((r=e.childNodes[0].textContent)==null?void 0:r.length)<t},K,q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},J=(K=class extends i{constructor(){super(...arguments),this.expanded=!1}render(){let{data:n}=this;if(n===void 0)return t`<span>undefined</span>`;switch(n.nodeType){case Node.ELEMENT_NODE:{let r=this.expanded?e:ye(n)?n.childNodes[0].textContent:`…`;return t`<span
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
        </span>`;case Node.DOCUMENT_FRAGMENT_NODE:return t`<span>${n.nodeName}</span>`;default:return}}},K.styles=[E,r`
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
    `],K);q([v({attribute:!1})],J.prototype,`data`,void 0),q([v({type:Boolean,reflect:!0})],J.prototype,`expanded`,void 0),J=q([_(`ix-dom-node-preview`)],J);var Y,X,be=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Z=new WeakMap,xe=class{constructor(e){f(this,Z,void 0),this.expandedPaths=new Map,p(Z,this,e)}hasChildren(e){var t,n;return((t=(n=e.childNodes)==null?void 0:n.length)==null?0:t)>0&&!(e.nodeType===Node.ELEMENT_NODE&&ye(e))}children(e){if(this.hasChildren(e))return e.childNodes.map((e,t)=>({name:`${e.nodeName}[${t}]`,data:e}))}render({item:n,depth:r=0,parentPath:i}){var a,o;let s=i===void 0?`$`:`${i}.${n.name}`,c=(a=(o=this.expandedPaths.get(s))==null?n.expanded:o)!=null&&a;return t`<ix-tree-node
      .item=${n}
      .treeAdapter=${this}
      .depth=${r}
      .expanded=${c}
      .shouldShowPlaceholder=${r>0}
      @toggle-expanded=${()=>{var e,t;let r=(e=(t=this.expandedPaths.get(s))==null?n.expanded:t)!=null&&e;this.expandedPaths.set(s,!r),d(Z,this).requestUpdate()}}
      ><ix-dom-node-preview
        slot="label"
        .data=${n.data}
        .expanded=${c}
      ></ix-dom-node-preview
      >${oe(this.children(n.data),e=>this.render({item:e,depth:r+1,parentPath:s}))}${n.data.nodeType===Node.ELEMENT_NODE?t`<ix-dom-close-tag .name=${n.data.tagName}></ix-dom-close-tag>`:e}</ix-tree-node
    >`}},Q=(Y=new WeakMap,X=class extends i{constructor(...e){super(...e),f(this,Y,new xe(this))}render(){return this.data===void 0?t`<span>undefined</span>`:d(Y,this).render({item:{data:this.data}})}},X.styles=[E,r`
      :host {
        display: block;
      }
    `],X);be([v({attribute:!1})],Q.prototype,`data`,void 0),Q=be([_(`ix-dom-inspector`)],Q);var Se=Symbol(`retry`);Observable.prototype[Se]=function(e){let{count:t=1/0,delay:n=null,resetOnSuccess:r=!0}=e==null?{}:e;return this[m](e=>{let i=t,a=0,o=()=>{if(!e.active)return;let s=new AbortController;u(this,e,{next:n=>{r&&(i=t,a=0),e.next(n)},error:t=>{if(s.abort(),i>0){if(i--,a++,n!==null){if(typeof n==`number`){let t=globalThis.setTimeout(o,n);e.addTeardown(()=>globalThis.clearTimeout(t))}else{let r=Observable.from(n(t,a)),i=new AbortController;u(r,e,{next:()=>{i.abort(),o()}},i.signal)}}else o()}else e.error(t)}},s.signal)};o()})};var Ce=Symbol(`switchMap`);function we(e,t){let{concurrent:n=1}=t==null?{}:t;return this[m](t=>{let r=!1,i=0,a=[];u(this,t,{next:o=>{a.length>=n&&a.shift().abort();let s=new AbortController;a.push(s),u(ee({value:e(o,i++)}),t,{next:e=>t.next(e),complete:()=>{let e=a.indexOf(s);e!==-1&&a.splice(e,1),r&&a.length===0&&t.complete()}},s.signal)},complete:()=>{r=!0,a.length===0&&t.complete()}})})}Observable.prototype[Ce]=we;var $=class extends i{constructor(){super(),this._status=[],this._progress={}}async connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.json=(t=this.shadowRoot)==null?void 0:t.getElementById(`json`)}render(){var e,n,r,i;let a=(e=this._progress.download)==null?{}:e,o=(n=this._progress.upload)==null?{}:n;return t`
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
          <option value="DRIP">Get - stream (download progress)</option>
          <option value="ERROR">Error</option>
          <option value="REQ$">Get - request$() + retry(2)</option>
          <option value="CHAIN">Chain - when('ajaxresponse') → request$()</option>
        </select>
      </div>
      <div class="progress">
        <span class="progress-label">download</span>
        <div class="progress-track">
          <div class="progress-fill" style="inline-size: ${(r=a.percent)==null?0:r}%"></div>
        </div>
        <span class="progress-label">upload</span>
        <div class="progress-track">
          <div class="progress-fill" style="inline-size: ${(i=o.percent)==null?0:i}%"></div>
        </div>
      </div>
      <div class="log">
        ${this._status.length?``:t`
                <p>Event log — open DevTools for full detail</p>
              `}
        ${this._status.map(e=>t`
            <div class="event">${e}</div>
          `)}
      </div>
      <ix-object-inspector name="object-inspector" expandLevel="2" id="json"></ix-object-inspector>
    `}_onHandleChange({target:e}){let{value:t}=e;this._makeRequest(t)}_makeRequest(e){let n=e===`FORMDATA`?`POST`:e===`DRIP`?`GET`:e,r={url:`https://httpbin.org`,method:n},i,a=new FormData;switch(a.append(`rxjs`,`Ajax`),a.append(`ajax`,`RxJS`),e){case`GET`:i={path:e.toLowerCase()};break;case`POST`:i={path:e.toLowerCase(),headers:{"Content-Type":`application/json`,"rxjs-custom-header":`Rxjs`},body:{rxjs:`Body ${n}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case`FORMDATA`:i={path:`/post`,headers:{"rxjs-custom-header":`Rxjs`},body:a};break;case`PATCH`:i={path:e.toLowerCase(),body:{rxjs:`Body ${n}`}};break;case`PUT`:i={path:e.toLowerCase(),body:{rxjs:`Body ${n}`}};break;case`DELETE`:i={path:e.toLowerCase(),body:{rxjs:`Body ${n}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case`DRIP`:i={path:`drip`,queryParams:`duration=3&numbytes=1024&code=200`,includeDownloadProgress:!0};break;case`ERROR`:i={path:`status/500`,method:`GET`};break;case`REQ$`:i={path:`status/500`,method:`GET`};break;case`CHAIN`:i={path:`uuid`,method:`GET`};break;default:console.error(`Invalid HTTP method`);return}this._status=[t`
        <span class="name">presend</span>
        — dispatching request
      `],this._progress={};let o=new h({...r,...i});if(o.addEventListener(`ajaxpresend`,({detail:e})=>{this.json&&(this.json.data=void 0),console.log(`ajaxpresend: ${e}`)}),o.addEventListener(`ajaxprogress`,({detail:e})=>{let{type:n,loaded:r,total:i}=e;console.log(e);let a=n.startsWith(`upload_`)?`upload`:`download`,o=i?Math.min(100,Math.round(r/i*100)):0;this._progress={...this._progress,[a]:{percent:o,loaded:r,total:i}},this._status=[...this._status,t`
          <span class="name">progress</span>
          — ${n} ${r}/${i} (${o}%)
        `]}),o.addEventListener(`ajaxresponse`,({detail:e})=>{this._status=[...this._status,t`
          <span class="name">response</span>
          — received response
        `],console.log(e)}),o.addEventListener(`ajaxresponseend`,({detail:e})=>{this._status=[...this._status,t`
          <span class="name">responseend</span>
          — finished
        `],console.log(`ajaxresponseend: ${e}`)}),o.addEventListener(`ajaxerror`,({detail:e})=>{this._status=[...this._status,t`
          <span class="name">error</span>
          — ${e.message}
        `],console.dir(e)}),o.addEventListener(`ajaxerrorend`,({detail:e})=>{this._status=[...this._status,t`
          <span class="name">errorend</span>
          — finished
        `],console.log(`ajaxerrorend: ${e}`)}),e===`CHAIN`){let t=new h({url:`https://httpbin.org`});o.when(`ajaxresponse`)[ne](e=>e[Ce](({detail:e})=>(t.path=`anything/${e.response.uuid}`,t.request$()))).subscribe({next:t=>{this.json&&(this.json.data=t),console.log(`RESULT ${e}`,t)},error:e=>{this.json&&(this.json.data=e),console.dir(e)}}),o.generateRequest().catch(e=>{this.json&&(this.json.data=e),console.dir(e)});return}if(e===`REQ$`){o.request$()[ne](e=>e[Se]({count:2})).subscribe({next:t=>{this.json&&(this.json.data=t),console.log(`RESULT ${e}`,t)},error:e=>{this.json&&(this.json.data=e),console.dir(e)},complete:()=>{this._status=[...this._status,t`
                <span class="name">complete</span>
                — observable completed after ${3} attempts
              `]}});return}o.generateRequest().then(t=>{this.json&&(this.json.data=t),console.log(`RESULT ${e}`,t)}).catch(e=>{this.json&&(this.json.data=e),console.dir(e)})}};te($,`properties`,{_status:{state:!0},_progress:{state:!0}}),te($,`styles`,r`
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

    .log {
      margin-block-end: 1rem;
      padding: 0.5rem 0.75rem;
      background-color: #f4f4f4;
      font-family: monospace;
      font-size: 0.85rem;
      min-block-size: 5rem;
      max-block-size: 10rem;
      overflow-block: auto;
    }

    .log p {
      margin: 0;
      color: #9e9e9e;
      font-size: 0.9rem;
      text-align: left;
    }

    .log .event {
      margin: 0.15rem 0;
      color: #333;
    }

    .log .event .name {
      font-weight: 700;
    }

    .progress {
      display: inline-grid;
      grid-template-columns: auto 1fr;
      gap: 0 0.75rem;
      align-items: center;
      margin-block-end: 1rem;
    }

    .progress-label {
      font-family: monospace;
      font-size: 0.8rem;
      color: #757575;
    }

    .progress-track {
      inline-size: 100%;
      block-size: 0.6rem;
      background-color: #e6e6e6;
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-fill {
      block-size: 100%;
      inline-size: 0;
      background-color: #2196f3;
      transition: inline-size 120ms linear;
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
  `),customElements.define(`ajax-provider-component`,$);