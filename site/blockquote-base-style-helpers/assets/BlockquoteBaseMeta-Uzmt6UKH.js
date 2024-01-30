const a=globalThis||window,c=a.ShadowRoot&&(a.ShadyCSS===void 0||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=c?document:document.head,S=o=>Array.isArray(o)?o.flat(1/0):[o],m=(o,t)=>{if(c){const e=o;e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet)]}else t.forEach(e=>{const s=document.createElement("style");s.textContent=e.cssText,o.appendChild(s)})},f=o=>{const t=S(o);m(u,t)};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const h=globalThis||window,p=Symbol.for("BLOCKQUOTE"),d=Symbol.for("blockquoteBaseMeta"),y=Symbol.for("types"),r=Symbol.for("uuid"),l=h[p]||Object.create(null),n=l[d]||Object.create(null);n[y]=n[y]||new Map;n[r]=n[r]||Math.random().toString(36).substring(2,10);l[d]=n;h[p]=l;class i{constructor({type:t="default",key:e,value:s}={}){this.type=t,this.key=e,s!=null&&(this.value=s)}static get types(){return n[y]}static get uuid(){return n[r]}get value(){const t=this.__key||this.key;this.__key=void 0;const e=i.types.get(this.type);return e==null?void 0:e.get(t)}set value(t){var e;if(this.type&&this.key){const s=(e=i.types.get(this.type))!=null?e:new Map;i.types.set(this.type,s),t!=null?s.set(this.key,t):s.delete(this.key)}}get list(){return Array.from(this.mapList.values())}get mapList(){var t;return(t=i.types.get(this.type))!=null?t:new Map}get objectList(){return Object.fromEntries(this.mapList)}byKey(t){return this.__key=t,this.value}}export{i as B,f as s};
