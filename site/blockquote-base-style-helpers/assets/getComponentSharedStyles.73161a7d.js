import{e as u,r as c,i}from"./lit-element.2d757a94.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r;window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface?r=window.ShadyCSS.CustomStyleInterface:r=void 0;class d extends HTMLElement{constructor(){super(),r&&(this._style=null,r.addCustomStyle(this))}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");return t?(this._style=t,this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style):null}}customElements.get("custom-style")||customElements.define("custom-style",d);const m=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface,S=u?document:document.head,a=(s,t)=>{u?s.adoptedStyleSheets=s.adoptedStyleSheets.concat(t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach(e=>{const n=document.createElement("style"),y=window.litNonce;y!==void 0&&n.setAttribute("nonce",y),n.textContent=e.cssText,s.appendChild(n)})},f=s=>{const t=document.createElement("custom-style"),e=document.createElement("style");return e.textContent=s.cssText,t.appendChild(e),document.head.appendChild(t),t},w=s=>{m?f(s):a(S,[s])};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/window[Symbol.for("BLOCKQUOTE")]=window[Symbol.for("BLOCKQUOTE")]||Object.create(null);window[Symbol.for("BLOCKQUOTE")][Symbol.for("blockquoteBaseMeta")]=window[Symbol.for("BLOCKQUOTE")][Symbol.for("blockquoteBaseMeta")]||Object.create(null);const l=window[Symbol.for("BLOCKQUOTE")][Symbol.for("blockquoteBaseMeta")];l[Symbol.for("types")]=l[Symbol.for("types")]||new Map;l[Symbol.for("uuid")]=l[Symbol.for("uuid")]||Math.random().toString(36).substr(2,10);class o{constructor(t){this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}static get types(){return l[Symbol.for("types")]}static get uuid(){return l[Symbol.for("uuid")]}get value(){const{type:t}=this,e=this.__key||this.key;if(this.__key=void 0,t&&e)return o.types.get(t)&&o.types.get(t).get(e)}set value(t){const{type:e}=this,{key:n}=this;let y;e&&n&&(o.types.get(e)===void 0&&o.types.set(e,new Map),y=o.types.get(e),t===null?y.delete(n):y.set(n,t))}get list(){const{type:t}=this,e=o.types.get(t);return e?Array.from(e.values()):[]}get mapList(){const{type:t}=this,e=o.types.get(t);return e||new Map}get objectList(){return Object.fromEntries(this.mapList)}byKey(t){return this.__key=t,this.value}}const h=new o({type:"sharedStyles"}),C=s=>{const t=h.byKey(s);if(t){const e=t.filter(y=>y.cssText),n=c(e.join(""));return i`
      ${n}
    `}return i``};export{o as B,C as g,w as s};
