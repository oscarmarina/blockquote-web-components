/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const c=Symbol.for("BLOCKQUOTE"),l=Symbol.for("blockquoteBaseMeta"),a=Symbol.for("types"),u=Symbol.for("uuid"),o=window[c]||Object.create(null),s=o[l]||Object.create(null);s[a]=s[a]||new Map;s[u]=s[u]||Math.random().toString(36).substring(2,10);o[l]=s;window[c]=o;class n{constructor(e){this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}static get types(){return s[a]}static get uuid(){return s[u]}get value(){const{type:e}=this,t=this.__key||this.key;if(this.__key=void 0,e&&t)return n.types.get(e)&&n.types.get(e).get(t)}set value(e){const{type:t}=this,{key:r}=this;let i;t&&r&&(n.types.get(t)===void 0&&n.types.set(t,new Map),i=n.types.get(t),e===null?i.delete(r):i.set(r,e))}get list(){const{type:e}=this,t=n.types.get(e);return t?Array.from(t.values()):[]}get mapList(){const{type:e}=this,t=n.types.get(e);return t||new Map}get objectList(){return Object.fromEntries(this.mapList)}byKey(e){return this.__key=e,this.value}}const m=new n({key:"basic",value:"foo/bar"}),y=new n({type:"article",key:"indefinite",value:"a/an"});new n({type:"article",key:"definite",value:"the"});new n({type:"article",key:"negative",value:"no"});const p=document.querySelector(".meta-key .inner-meta-key"),d=document.querySelector(".meta-key .inner-meta-value");p.textContent=`${m.key}`;d.textContent=`${m.byKey("basic")}`;const b=document.querySelector(".meta-query .inner-meta-key"),g=document.querySelector(".meta-query .inner-meta-value");b.textContent=`${y.type}`;g.textContent=`${JSON.stringify(y.list)}`;const k=document.querySelector(".meta-query .inner-meta-keys"),h=document.querySelector(".meta-query .inner-meta-values");k.textContent=`${y.type}`;h.textContent=`${JSON.stringify(y.objectList)}`;console.info("objectList: ",y.objectList);console.info("mapList: ",y.mapList);const f={id:"dsfaskj0"},v=new n({type:"two",key:f,value:"foo/bar"});console.info(v.byKey(f));