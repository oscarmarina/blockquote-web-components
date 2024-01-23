const l=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=l?document:document.head,d=(n,t)=>{l?n.adoptedStyleSheets=[...n.adoptedStyleSheets,...t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet)]:t.forEach(e=>{const s=document.createElement("style");s.textContent=e.cssText,n.appendChild(s)})},S=n=>{d(u,[n])};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const r=globalThis||window,h=Symbol.for("BLOCKQUOTE"),p=Symbol.for("blockquoteBaseMeta"),y=Symbol.for("types"),a=Symbol.for("uuid"),c=r[h]||Object.create(null),o=c[p]||Object.create(null);o[y]=o[y]||new Map;o[a]=o[a]||Math.random().toString(36).substring(2,10);c[p]=o;r[h]=c;class i{constructor({type:t="default",key:e,value:s}={}){this.type=t,this.key=e,s!=null&&(this.value=s)}static get types(){return o[y]}static get uuid(){return o[a]}get value(){const t=this.__key||this.key;this.__key=void 0;const e=i.types.get(this.type);return e==null?void 0:e.get(t)}set value(t){var e;if(this.type&&this.key){const s=(e=i.types.get(this.type))!=null?e:new Map;i.types.set(this.type,s),t!=null?s.set(this.key,t):s.delete(this.key)}}get list(){return Array.from(this.mapList.values())}get mapList(){var t;return(t=i.types.get(this.type))!=null?t:new Map}get objectList(){return Object.fromEntries(this.mapList)}byKey(t){return this.__key=t,this.value}}export{i as B,S as s};
