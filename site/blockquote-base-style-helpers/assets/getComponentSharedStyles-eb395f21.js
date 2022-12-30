import{e as u,r as c,i}from"./lit-element-7df6f5eb.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r;window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface?r=window.ShadyCSS.CustomStyleInterface:r=void 0;class d extends HTMLElement{constructor(){super(),r&&(this._style=null,r.addCustomStyle(this))}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");return t?(this._style=t,this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style):null}}customElements.get("custom-style")||customElements.define("custom-style",d);const S=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&!window.ShadyCSS.nativeShadow,m=u?document:document.head,a=(s,t)=>{u?s.adoptedStyleSheets=[...s.adoptedStyleSheets,...t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet)]:t.forEach(e=>{const o=document.createElement("style");o.textContent=e.cssText,s.appendChild(o)})},f=s=>{const t=document.createElement("custom-style"),e=document.createElement("style");e.textContent=s.cssText,t.appendChild(e),document.head.appendChild(t)},w=s=>{S?f(s):a(m,[s])};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/window[Symbol.for("BLOCKQUOTE")]=window[Symbol.for("BLOCKQUOTE")]||Object.create(null);window[Symbol.for("BLOCKQUOTE")][Symbol.for("blockquoteBaseMeta")]=window[Symbol.for("BLOCKQUOTE")][Symbol.for("blockquoteBaseMeta")]||Object.create(null);const y=window[Symbol.for("BLOCKQUOTE")][Symbol.for("blockquoteBaseMeta")];y[Symbol.for("types")]=y[Symbol.for("types")]||new Map;y[Symbol.for("uuid")]=y[Symbol.for("uuid")]||Math.random().toString(36).substr(2,10);class n{constructor(t){this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}static get types(){return y[Symbol.for("types")]}static get uuid(){return y[Symbol.for("uuid")]}get value(){const{type:t}=this,e=this.__key||this.key;if(this.__key=void 0,t&&e)return n.types.get(t)&&n.types.get(t).get(e)}set value(t){const{type:e}=this,{key:o}=this;let l;e&&o&&(n.types.get(e)===void 0&&n.types.set(e,new Map),l=n.types.get(e),t===null?l.delete(o):l.set(o,t))}get list(){const{type:t}=this,e=n.types.get(t);return e?Array.from(e.values()):[]}get mapList(){const{type:t}=this,e=n.types.get(t);return e||new Map}get objectList(){return Object.fromEntries(this.mapList)}byKey(t){return this.__key=t,this.value}}const h=new n({type:"sharedStyles"}),C=s=>{const t=h.byKey(s);if(t){const e=t.filter(l=>l.cssText),o=c(e.join(""));return i`
      ${o}
    `}return i``};export{n as B,C as g,w as s};
