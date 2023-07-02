import{r as p,i as u}from"./lit-element-7c5eb4d3.js";const d=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h=d?document:document.head,f=(o,t)=>{d?o.adoptedStyleSheets=[...o.adoptedStyleSheets,...t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet)]:t.forEach(e=>{const n=document.createElement("style");n.textContent=e.cssText,o.appendChild(n)})},w=o=>{f(h,[o])};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const a=Symbol.for("BLOCKQUOTE"),S=Symbol.for("blockquoteBaseMeta"),i=Symbol.for("types"),c=Symbol.for("uuid"),l=window[a]||Object.create(null),y=l[S]||Object.create(null);y[i]=y[i]||new Map;y[c]=y[c]||Math.random().toString(36).substring(2,10);l[S]=y;window[a]=l;class s{constructor(t){this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}static get types(){return y[i]}static get uuid(){return y[c]}get value(){const{type:t}=this,e=this.__key||this.key;if(this.__key=void 0,t&&e)return s.types.get(t)&&s.types.get(t).get(e)}set value(t){const{type:e}=this,{key:n}=this;let r;e&&n&&(s.types.get(e)===void 0&&s.types.set(e,new Map),r=s.types.get(e),t===null?r.delete(n):r.set(n,t))}get list(){const{type:t}=this,e=s.types.get(t);return e?Array.from(e.values()):[]}get mapList(){const{type:t}=this,e=s.types.get(t);return e||new Map}get objectList(){return Object.fromEntries(this.mapList)}byKey(t){return this.__key=t,this.value}}const m=new s({type:"sharedStyles"}),b=o=>{const t=m.byKey(o);if(t){const e=t.filter(r=>r.cssText),n=p(e.join(""));return u`
      ${n}
    `}return u``};export{s as B,b as g,w as s};
