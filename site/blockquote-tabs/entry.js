var mt=Object.defineProperty;var xe=i=>{throw TypeError(i)};var wt=(i,e,t)=>e in i?mt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var m=(i,e,t)=>wt(i,typeof e!="symbol"?e+"":e,t),Ee=(i,e,t)=>e.has(i)||xe("Cannot "+t);var ie=(i,e,t)=>(Ee(i,e,"read from private field"),t?t.call(i):e.get(i)),re=(i,e,t)=>e.has(i)?xe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);var j=(i,e,t)=>(Ee(i,e,"access private method"),t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,ve=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),Ce=new WeakMap;let Je=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ve&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ce.set(t,e))}return e}toString(){return this.cssText}};const yt=i=>new Je(typeof i=="string"?i:i+"",void 0,ge),A=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new Je(t,i,ge)},$t=(i,e)=>{if(ve)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=G.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},Ae=ve?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return yt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zt,defineProperty:xt,getOwnPropertyDescriptor:Et,getOwnPropertyNames:Ct,getOwnPropertySymbols:At,getPrototypeOf:St}=Object,y=globalThis,Se=y.trustedTypes,Rt=Se?Se.emptyScript:"",oe=y.reactiveElementPolyfillSupport,L=(i,e)=>i,ue={toAttribute(i,e){switch(e){case Boolean:i=i?Rt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ke=(i,e)=>!zt(i,e),Re={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:Ke};var Fe,je;(Fe=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(je=y.litPropertyMetadata)!=null||(y.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Re){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&xt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){var o;const{get:r,set:n}=(o=Et(this.prototype,e))!=null?o:{get(){return this[t]},set(l){this[t]=l}};return{get(){return r==null?void 0:r.call(this)},set(l){const a=r==null?void 0:r.call(this);n.call(this,l),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:Re}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;const e=St(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){const t=this.properties,s=[...Ct(t),...At(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(Ae(r))}else e!==void 0&&t.push(Ae(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return $t(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var n;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:ue).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ue;this._$Em=r,this[r]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){var r;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((r=s.hasChanged)!=null?r:Ke)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){var r;this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,l]of this._$Ep)this[o]=l;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,l]of n)l.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],l)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}var Ye;S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[L("elementProperties")]=new Map,S[L("finalized")]=new Map,oe==null||oe({ReactiveElement:S}),((Ye=y.reactiveElementVersions)!=null?Ye:y.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,K=P.trustedTypes,ke=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,Qe="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+w,kt=`<${et}>`,C=document,D=()=>C.createComment(""),I=i=>i===null||typeof i!="object"&&typeof i!="function",fe=Array.isArray,Tt=i=>fe(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,Oe=/>/g,$=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Be=/'/g,Le=/"/g,tt=/^(?:script|style|textarea|title)$/i,Ot=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),u=Ot(1),k=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Pe=new WeakMap,z=C.createTreeWalker(C,129);function st(i,e){if(!fe(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(e):e}const Bt=(i,e)=>{const t=i.length-1,s=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=B;for(let l=0;l<t;l++){const a=i[l];let c,h,d=-1,b=0;for(;b<a.length&&(o.lastIndex=b,h=o.exec(a),h!==null);)b=o.lastIndex,o===B?h[1]==="!--"?o=Te:h[1]!==void 0?o=Oe:h[2]!==void 0?(tt.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=$):h[3]!==void 0&&(o=$):o===$?h[0]===">"?(o=r!=null?r:B,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?$:h[3]==='"'?Le:Be):o===Le||o===Be?o=$:o===Te||o===Oe?o=B:(o=$,r=void 0);const v=o===$&&i[l+1].startsWith("/>")?" ":"";n+=o===B?a+kt:d>=0?(s.push(c),a.slice(0,d)+Qe+a.slice(d)+w+v):a+w+(d===-2?l:v)}return[st(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class H{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,h]=Bt(e,t);if(this.el=H.createElement(c,s),z.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=z.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Qe)){const b=h[o++],v=r.getAttribute(d).split(w),g=/([.?@])?(.*)/.exec(b);a.push({type:1,index:n,name:g[2],strings:v,ctor:g[1]==="."?Pt:g[1]==="?"?qt:g[1]==="@"?Nt:ee}),r.removeAttribute(d)}else d.startsWith(w)&&(a.push({type:6,index:n}),r.removeAttribute(d));if(tt.test(r.tagName)){const d=r.textContent.split(w),b=d.length-1;if(b>0){r.textContent=K?K.emptyScript:"";for(let v=0;v<b;v++)r.append(d[v],D()),z.nextNode(),a.push({type:2,index:++n});r.append(d[b],D())}}}else if(r.nodeType===8)if(r.data===et)a.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(w,d+1))!==-1;)a.push({type:7,index:n}),d+=w.length-1}n++}}static createElement(e,t){const s=C.createElement("template");return s.innerHTML=e,s}}function T(i,e,t=i,s){var o,l,a;if(e===k)return e;let r=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=I(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,s)),s!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[s]=r:t._$Cl=r),r!==void 0&&(e=T(i,r._$AS(i,e.values),r,s)),e}class Lt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;const{el:{content:t},parts:s}=this._$AD,r=((c=e==null?void 0:e.creationScope)!=null?c:C).importNode(t,!0);z.currentNode=r;let n=z.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new U(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new Dt(n,this,e)),this._$AV.push(h),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=z.nextNode(),o++)}return z.currentNode=C,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class U{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,s,r){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(n=r==null?void 0:r.isConnected)!=null?n:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),I(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Tt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=H.createElement(st(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new Lt(r,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new H(e)),t}k(e){fe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const n of e)r===t.length?t.push(s=new U(this.O(D()),this.O(D()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,r){const n=this.strings;let o=!1;if(n===void 0)e=T(this,e,t,0),o=!I(e)||e!==this._$AH&&e!==k,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=T(this,l[s+a],t,a),c===k&&(c=this._$AH[a]),o||(o=!I(c)||c!==this._$AH[a]),c===p?e=p:e!==p&&(e+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}o&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Pt extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class qt extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Nt extends ee{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=T(this,e,t,0))!=null?o:p)===k)return;const s=this._$AH,r=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)==null?void 0:t.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}}class Dt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const ae=P.litHtmlPolyfillSupport;var Xe;ae==null||ae(H,U),((Xe=P.litHtmlVersions)!=null?Xe:P.litHtmlVersions=[]).push("3.2.1");const _e=(i,e,t)=>{var n,o;const s=(n=t==null?void 0:t.renderBefore)!=null?n:e;let r=s._$litPart$;if(r===void 0){const l=(o=t==null?void 0:t.renderBefore)!=null?o:null;s._$litPart$=r=new U(e.insertBefore(D(),l),l,void 0,t!=null?t:{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;const e=super.createRenderRoot();return(s=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_e(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return k}};var Ze;f._$litElement$=!0,f.finalized=!0,(Ze=globalThis.litElementHydrateSupport)==null||Ze.call(globalThis,{LitElement:f});const le=globalThis.litElementPolyfillSupport;le==null||le({LitElement:f});var Ge;((Ge=globalThis.litElementVersions)!=null?Ge:globalThis.litElementVersions=[]).push("4.1.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={CHILD:2},Mt=i=>(...e)=>({_$litDirective$:i,values:e});class Ut{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=(i,e)=>{var s;const t=i._$AN;if(t===void 0)return!1;for(const r of t)(s=r._$AO)==null||s.call(r,e,!1),q(r,e);return!0},Q=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},it=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Ft(e)}};function Wt(i){this._$AN!==void 0?(Q(this),this._$AM=i,it(this)):this._$AM=i}function Vt(i,e=!1,t=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let n=t;n<s.length;n++)q(s[n],!1),Q(s[n]);else s!=null&&(q(s,!1),Q(s));else q(this,i)}const Ft=i=>{var e,t;i.type==Ht.CHILD&&((e=i._$AP)!=null||(i._$AP=Vt),(t=i._$AQ)!=null||(i._$AQ=Wt))};class jt extends Ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),it(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,r;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),t&&(q(this,e),Q(this))}setValue(e){if(It(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=()=>new Yt;class Yt{}const de=new WeakMap,ot=Mt(class extends jt{render(i){return p}update(i,[e]){var s;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),p}rt(i){var e;if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=(e=this.ht)!=null?e:globalThis;let s=de.get(t);s===void 0&&(s=new WeakMap,de.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e,t;return typeof this.Y=="function"?(e=de.get((i=this.ht)!=null?i:globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Xt=A`:host {
  --_host-color: var(--blockquote-base-embedded-webview-size-color, inherit);
  --_rect-height: var(--blockquote-base-embedded-webview-size-rect-height, 1.125rem);
  --_rect-size: var(--blockquote-base-embedded-webview-size-rect-size, 0.6875rem);
  --_button-border-color: var(--blockquote-base-embedded-webview-size-button-border-color, rgb(184, 184, 184));
  --_button-bgcolor: var(--blockquote-base-embedded-webview-size-button-bgcolor, rgb(234, 234, 234));
  --_button-bgcolor-hover: var(--blockquote-base-embedded-webview-size-button-bgcolor-hover, rgb(220, 220, 220));
  --_button-bgcolor-selected-hover: var(--blockquote-base-embedded-webview-size-button-bgcolor-selected-hover, rgb(210, 210, 210));
  color: var(--_host-color);
  display: block;
  box-sizing: border-box;
  pointer-events: none;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

button {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  pointer-events: auto;
  font: inherit;
  margin: 0;
  padding: 0;
  height: inherit;
  text-align: inherit;
  text-decoration: none;
  text-transform: inherit;
  text-shadow: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  width: auto;
}

.rect {
  overflow: hidden;
  height: var(--_rect-height);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--_rect-size);
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.0625rem;
  box-shadow: 0 1px 0 0 var(--_button-bgcolor);
}
.rect [aria-hidden=true] {
  cursor: pointer;
  letter-spacing: inherit;
  position: absolute;
}
.rect [aria-disabled=true] {
  opacity: 0.4;
}
.rect [aria-disabled=true]::after {
  content: "";
  display: block;
  height: 1px;
  width: calc(100% + 2rem);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0));
}

button {
  position: absolute;
  background-color: var(--_button-bgcolor);
  border-left: 1px solid var(--_button-border-color);
  border-right: 1px solid var(--_button-border-color);
}
button span {
  opacity: 0;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
button:hover {
  background-color: var(--_button-bgcolor-hover);
}
button[data-selected], button[data-selected] ~ button {
  background-color: var(--_button-bgcolor-hover);
}
button:hover ~ button {
  background-color: transparent;
}
button:not([data-selected]):hover span {
  opacity: 1;
}
button:not([data-selected]):hover ~ span {
  visibility: hidden;
}
button[data-selected] ~ button:hover {
  background-color: var(--_button-bgcolor-selected-hover);
}`;class Zt extends f{constructor(){super();m(this,"_onResize",t=>{t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[Xt]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((s,r)=>r.width-s.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const s=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(s)}}render(){return u`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return u`
      ${this.screenSizes.map((t,s)=>u`
          <button
            @click="${this._setSelected}"
            id="${t.id}"
            data-index="${s+1}"
            ?data-selected="${this.selected===s+1}"
            ?hidden="${!this.showOverflowSize&&t.width>this.computedStyleWidth}"
            style="${this.widthInPercent?`width: calc(100% / ${s+1});`:`width: ${t.width}px;`}">
            <span>${t.id}</span>
          </button>
        `)}
    `}get _visualTextTpl(){return u`
      <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true">
        ${this.selectedSize.id}
      </span>
    `}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const s=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(s)}}window.customElements.define("blockquote-base-embedded-webview-size",Zt);const Gt=A`:host {
  --__resizer-factor: calc(1.25rem * var(--blockquote-base-embedded-webview-resize-factor, 1));
  --_rect-min-width: var(--blockquote-base-embedded-webview-resize-rect-min-width, 18.75rem);
  --_rect-min-height: var(--blockquote-base-embedded-webview-resize-rect-min-height, 9.375rem);
  --_rect-max-width: var(--blockquote-base-embedded-webview-resize-rect-max-width, 100%);
  --_rect-max-height: var(--blockquote-base-embedded-webview-resize-rect-max-height, 100%);
  --_rect-width: var(--blockquote-base-embedded-webview-resize-rect-width, 40rem);
  --_rect-height: var(--blockquote-base-embedded-webview-resize-rect-height, 22.5rem);
  --_resizer-bgcolor: var(--blockquote-base-embedded-webview-resize-resizer-bgcolor, rgb(234, 234, 234));
  --_resizer-bgcolor-hover: var(--blockquote-base-embedded-webview-resize-resizer-bgcolor-hover, rgb(220, 220, 220));
  --_resizer-bgimage-ew-hover: var(--blockquote-base-embedded-webview-resize-resizer-bgcolor-hover, linear-gradient(0deg, rgba(220, 220, 220, 0.2), rgba(220, 220, 220, 1) 50%, rgba(220, 220, 220, 0.2)));
  --_resizer-bgimage-s-hover: var(--blockquote-base-embedded-webview-resize-resizer-bgcolor-hover, linear-gradient(90deg, rgba(220, 220, 220, 0.2), rgba(220, 220, 220, 1) 50%, rgba(220, 220, 220, 0.2)));
  contain: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  padding: calc(var(--__resizer-factor) * 1) 0 calc(var(--__resizer-factor) * 2);
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.rect {
  position: relative;
  align-self: center;
  min-width: var(--_rect-min-width);
  min-height: var(--_rect-min-height);
  max-width: var(--_rect-max-width);
  max-height: var(--_rect-max-height);
  width: var(--_rect-width);
  height: var(--_rect-height);
  transform: translateZ(0);
}

.resizer {
  /* https://github.com/ChromeDevTools/devtools-frontend/tree/main/front_end/Images/src */
  display: block;
  position: absolute;
  background-color: var(--_resizer-bgcolor);
  width: 100%;
  height: 100%;
}
.resizer::after {
  content: url("data:image/svg+xml,%0A%3Csvg width='6' height='26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='26' rx='1' fill='%23848282'/%3E%3Crect x='4' width='2' height='26' rx='1' fill='%23848282'/%3E%3C/svg%3E");
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
.resizer-n {
  height: calc(var(--__resizer-factor) / 4);
  top: calc(var(--__resizer-factor) / 4 * -1);
  left: calc(var(--__resizer-factor) * -1);
  width: calc(100% + var(--__resizer-factor) * 2);
  border-top-left-radius: calc(var(--__resizer-factor) / 10);
  border-top-right-radius: calc(var(--__resizer-factor) / 10);
}
.resizer-n::after {
  content: none;
}
.resizer-se {
  cursor: nwse-resize;
  border-bottom-right-radius: calc(var(--__resizer-factor) / 10);
}
.resizer-se::after {
  transform: translate(-50%, -50%);
}
.resizer-sw {
  cursor: nesw-resize;
  border-bottom-left-radius: calc(var(--__resizer-factor) / 10);
}
.resizer-sw::after {
  transform: translate(-50%, -50%) translateY(-0.0938rem) rotate(90deg);
}
.resizer-se, .resizer-e {
  right: calc(var(--__resizer-factor) * -1);
}
.resizer-se, .resizer-sw, .resizer-s {
  bottom: calc(var(--__resizer-factor) * -1);
}
.resizer-w, .resizer-sw {
  left: calc(var(--__resizer-factor) * -1);
}
.resizer-se, .resizer-sw {
  height: var(--__resizer-factor);
  width: var(--__resizer-factor);
}
.resizer-se::after, .resizer-sw::after {
  content: url("data:image/svg+xml,%0A%3Csvg width='13' height='13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)' fill='%23848282'%3E%3Crect x='-.195' y='10.775' width='15.566' height='2' rx='1' transform='rotate(-45 -.195 10.775)'/%3E%3Crect x='5.346' y='11.241' width='8.401' height='2' rx='1' transform='rotate(-45 5.346 11.24)'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h13v13H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
}
.resizer-se:hover, .resizer-sw:hover {
  background-color: var(--_resizer-bgcolor-hover);
}
.resizer-s {
  cursor: ns-resize;
  height: var(--__resizer-factor);
}
.resizer-s::after {
  content: url("data:image/svg+xml,%0A%3Csvg width='26' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='26' height='2' rx='1' fill='%23848282'/%3E%3Crect y='4' width='26' height='2' rx='1' fill='%23848282'/%3E%3C/svg%3E");
  transform: translate(-50%, -50%) translateY(-0.1875rem);
}
.resizer-s:hover {
  background-image: var(--_resizer-bgimage-s-hover);
}
.resizer-e, .resizer-w {
  cursor: ew-resize;
  width: var(--__resizer-factor);
}
.resizer-e:hover, .resizer-w:hover {
  background-image: var(--_resizer-bgimage-ew-hover);
  background-position: bottom;
}

:host([resizing]),
:host([resizing]) ::slotted(*) {
  cursor: move;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

:host([resizing]) ::slotted(*) {
  pointer-events: none;
}`;class Jt extends f{constructor(){super();m(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[Gt]}async connectedCallback(){var t,s,r,n,o,l,a,c,h,d,b,v,g;(t=super.connectedCallback)==null||t.call(this),await this.updateComplete,this.rect=(s=this.shadowRoot)==null?void 0:s.querySelector(".rect"),this.bottomRightResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(".resizer-se"),this.bottomLeftResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-sw"),this.rightResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-e"),this.leftResizerElement=(l=this.shadowRoot)==null?void 0:l.querySelector(".resizer-w"),this.bottomResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-s"),(c=this.leftResizerElement)==null||c.addEventListener("pointerdown",this._createResizerLeft),(h=this.rightResizerElement)==null||h.addEventListener("pointerdown",this._createResizerRight),(d=this.bottomResizerElement)==null||d.addEventListener("pointerdown",this._createResizerBottom),(b=this.bottomLeftResizerElement)==null||b.addEventListener("pointerdown",this._createResizerBottomLeft),(v=this.bottomRightResizerElement)==null||v.addEventListener("pointerdown",this._createResizerBottomRight),(g=this.bottomResizerElement)==null||g.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return u`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `}get _resizersTpl(){return u`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `}_createResizer(t,s){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:r,pointerId:n,clientX:o,clientY:l}=s;r==null||r.setPointerCapture(n);const a=({clientX:h,clientY:d})=>{const b=Math.floor(h-o),v=Math.floor(d-l);this._resize({detail:{dx:b,dy:v}})};r==null||r.addEventListener("pointermove",a);const c=()=>{this.removeAttribute("resizing"),r==null||r.releasePointerCapture(n),r==null||r.removeEventListener("pointermove",a),r==null||r.removeEventListener("pointerup",c),this._dispatchResizeEvent()};r==null||r.addEventListener("pointerup",c)}_resize({detail:t}){let s,r;const n=Math.floor(t.dx*2.04),o=Math.floor(t.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",s=`${this._getBoundingClientRectWidth-n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s);break;case"left":this._cursor="e",s=`${this._getBoundingClientRectWidth+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s);break;case"top":this._cursor="n",r=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopLeft":this._cursor="ne",s=`${this._getBoundingClientRectWidth+n}px`,r=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopRight":this._cursor="nw",s=`${this._getBoundingClientRectWidth-n}px`,r=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var s;return Math.abs(parseInt((s=this.rect)==null?void 0:s.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",Jt);const Kt=A`:host,
::slotted([slot=embedded]) {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}`;class Qt extends f{constructor(){super();m(this,"_onLoadElement",({target:t})=>{if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const s=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(s)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[Kt]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return u`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){_e(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return u`
      <slot name="embedded"></slot>
    `}_fetch(t){var s,r,n,o;t&&(Object.assign((s=this._embeddedElement)!=null?s:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((r=this._embeddedElement)!=null?r:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((o=(n=this._embeddedElement)==null?void 0:n.style)!=null?o:{},t.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",Qt);const es=A`:host {
  --_host-color: var(--blockquote-base-embedded-webview-color, rgb(32, 32, 32));
  --_main-bgcolor: var(--blockquote-base-embedded-webview-main-bgcolor, rgb(250, 250, 250));
  --_select-bgcolor: var(--blockquote-base-embedded-webview-select-bgcolor, rgb(222, 222, 222));
  --_select-transition: var(--blockquote-base-embedded-webview-select-transition, border-bottom 196ms ease-out, var(--blockquote-base-embedded-webview-select-transition, border-bottom 196ms ease-out));
  --blockquote-base-embedded-webview-resize-rect-width: 40rem; /* 40rem */
  --blockquote-base-embedded-webview-resize-rect-height: 22.5rem; /* 22.5rem */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: var(--_host-color);
}

:host([hidden]),
[hidden] {
  display: none !important;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.main {
  contain: content;
  flex: 1;
  background-color: var(--_main-bgcolor);
}

:host([limit-height]) .main {
  height: inherit;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

header > div {
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
}

[role=heading] {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

[role=heading] + div {
  display: flex;
  align-items: center;
}

.open-externally {
  width: 1rem;
  display: inline-block;
  margin-left: 1rem;
  color: inherit;
}
.open-externally svg {
  vertical-align: bottom;
}

.select {
  display: inline-grid;
  grid-template-areas: select;
  align-items: center;
}
.select > * {
  grid-area: select;
}
.select svg {
  width: 0.875rem;
  justify-self: end;
  pointer-events: none;
}
.select select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  color: inherit;
  font: inherit;
  background-color: transparent;
  border: none;
  border-bottom: 0.125rem solid var(--_select-bgcolor);
  padding: 0.25em 1em 0.25em 0;
  margin: 0;
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 0;
  min-width: 10ch;
  max-width: 18ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: var(--_select-transition);
}
.select select:hover, .select select:focus {
  border-bottom-color: currentcolor;
}

.description {
  margin: 0.5rem 0 1rem;
  font-size: 0.875rem;
}

.description:empty {
  visibility: hidden;
}

.read-data-pos {
  font-size: 0.875rem;
  letter-spacing: 0.0156rem;
  position: fixed;
  z-index: 1;
  right: 0.375rem;
  top: 0.3125rem;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

blockquote-base-embedded-webview-resize {
  overflow-x: hidden;
}`,ts=u`
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentcolor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
`,ss=u`
  <svg
    viewBox="0 0 20 20"
    fill-rule="evenodd"
    fill="currentcolor"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H10V4.5H4.5V15.5H15.5V10H17V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM8.062 13L7 11.938L14.438 4.5H12V3H17V8H15.5V5.562L8.062 13Z" />
  </svg>
`;class is extends f{constructor(){super();m(this,"_updateSize",({detail:t})=>{var s,r,n,o;(r=(s=this._embeddedResizeRef)==null?void 0:s.value)==null||r.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(o=(n=this._embeddedResizeRef)==null?void 0:n.value)==null||o.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=ts,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=rt()}static get styles(){return[es]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0}}}async connectedCallback(){var s,r;(s=super.connectedCallback)==null||s.call(this),await this.updateComplete,this.addEventListener("webviewresize",n=>{var l;const{detail:o}=n;Object.assign(this.__readDataPos,o),this.__resetResizing=!0,(o.cursor==="n"||o.cursor==="ne"||o.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((l=this._controlBottom)!=null?l:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(n=>{const{src:o="",option:l="",description:a=""}=n.dataset;return{src:o,option:l,description:a}}),this._src=this._sources[this.selected].src),this.embedded=(r=this.shadowRoot)==null?void 0:r.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return u`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){_e(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return u`
      <header>
        <div>
          ${this._headingTpl} ${this._navigationDemosTpl} ${this._descriptionTpl}
          ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return u`
      <div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>
    `}get _navigationDemosTpl(){return u`
      <div>${this._selectTpl}${this._externalLinkTpl}</div>
    `}get _selectTpl(){return u`
      ${this._sources.some(t=>t.option)?u`
            <div class="select">
              <select @change="${this._onChangeFile}" aria-label="Cases">
                ${this._sources.map((t,s)=>u`
                    <option ?selected="${this.selected===s}" value="${s}">
                      ${t.option}
                    </option>
                  `)}
              </select>
              ${this.__selectArrow}
            </div>
          `:""}
    `}get _externalLinkTpl(){return u`
      <a href="${this._src||"#"}" target="_blank" class="open-externally">
        <span class="sr-only">View demo in a new tab</span>
        <span aria-hidden="true">${ss}</span>
      </a>
    `}get _descriptionTpl(){return u`
      <p class="description">${this._sources[this.selected].description}</p>
    `}get _readDataPosTpl(){return u`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing?1:0}">
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return u`
      <blockquote-base-embedded-webview-size
        .disabledSelectedSizeText="${this.__resetResizing}"
        @click="${this._updateSize}"
        @selectedchange="${this._updateSize}"
        .selected="${this.screenSizeSelected}"></blockquote-base-embedded-webview-size>
    `}get _mainTpl(){return u`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${ot(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return u`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",is);var x=[],rs=function(){return x.some(function(i){return i.activeTargets.length>0})},os=function(){return x.some(function(i){return i.skippedTargets.length>0})},qe="ResizeObserver loop completed with undelivered notifications.",ns=function(){var i;typeof ErrorEvent=="function"?i=new ErrorEvent("error",{message:qe}):(i=document.createEvent("Event"),i.initEvent("error",!1,!1),i.message=qe),window.dispatchEvent(i)},M;(function(i){i.BORDER_BOX="border-box",i.CONTENT_BOX="content-box",i.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(M||(M={}));var E=function(i){return Object.freeze(i)},as=function(){function i(e,t){this.inlineSize=e,this.blockSize=t,E(this)}return i}(),nt=function(){function i(e,t,s,r){return this.x=e,this.y=t,this.width=s,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,E(this)}return i.prototype.toJSON=function(){var e=this,t=e.x,s=e.y,r=e.top,n=e.right,o=e.bottom,l=e.left,a=e.width,c=e.height;return{x:t,y:s,top:r,right:n,bottom:o,left:l,width:a,height:c}},i.fromRect=function(e){return new i(e.x,e.y,e.width,e.height)},i}(),me=function(i){return i instanceof SVGElement&&"getBBox"in i},at=function(i){if(me(i)){var e=i.getBBox(),t=e.width,s=e.height;return!t&&!s}var r=i,n=r.offsetWidth,o=r.offsetHeight;return!(n||o||i.getClientRects().length)},Ne=function(i){var e;if(i instanceof Element)return!0;var t=(e=i==null?void 0:i.ownerDocument)===null||e===void 0?void 0:e.defaultView;return!!(t&&i instanceof t.Element)},ls=function(i){switch(i.tagName){case"INPUT":if(i.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},N=typeof window<"u"?window:{},Y=new WeakMap,De=/auto|scroll/,ds=/^tb|vertical/,cs=/msie|trident/i.test(N.navigator&&N.navigator.userAgent),_=function(i){return parseFloat(i||"0")},R=function(i,e,t){return i===void 0&&(i=0),e===void 0&&(e=0),t===void 0&&(t=!1),new as((t?e:i)||0,(t?i:e)||0)},Ie=E({devicePixelContentBoxSize:R(),borderBoxSize:R(),contentBoxSize:R(),contentRect:new nt(0,0,0,0)}),lt=function(i,e){if(e===void 0&&(e=!1),Y.has(i)&&!e)return Y.get(i);if(at(i))return Y.set(i,Ie),Ie;var t=getComputedStyle(i),s=me(i)&&i.ownerSVGElement&&i.getBBox(),r=!cs&&t.boxSizing==="border-box",n=ds.test(t.writingMode||""),o=!s&&De.test(t.overflowY||""),l=!s&&De.test(t.overflowX||""),a=s?0:_(t.paddingTop),c=s?0:_(t.paddingRight),h=s?0:_(t.paddingBottom),d=s?0:_(t.paddingLeft),b=s?0:_(t.borderTopWidth),v=s?0:_(t.borderRightWidth),g=s?0:_(t.borderBottomWidth),O=s?0:_(t.borderLeftWidth),W=d+c,we=a+h,te=O+v,se=b+g,ye=l?i.offsetHeight-se-i.clientHeight:0,$e=o?i.offsetWidth-te-i.clientWidth:0,vt=r?W+te:0,gt=r?we+se:0,V=s?s.width:_(t.width)-vt-$e,F=s?s.height:_(t.height)-gt-ye,ft=V+W+$e+te,_t=F+we+ye+se,ze=E({devicePixelContentBoxSize:R(Math.round(V*devicePixelRatio),Math.round(F*devicePixelRatio),n),borderBoxSize:R(ft,_t,n),contentBoxSize:R(V,F,n),contentRect:new nt(d,a,V,F)});return Y.set(i,ze),ze},dt=function(i,e,t){var s=lt(i,t),r=s.borderBoxSize,n=s.contentBoxSize,o=s.devicePixelContentBoxSize;switch(e){case M.DEVICE_PIXEL_CONTENT_BOX:return o;case M.BORDER_BOX:return r;default:return n}},hs=function(){function i(e){var t=lt(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=E([t.borderBoxSize]),this.contentBoxSize=E([t.contentBoxSize]),this.devicePixelContentBoxSize=E([t.devicePixelContentBoxSize])}return i}(),ct=function(i){if(at(i))return 1/0;for(var e=0,t=i.parentNode;t;)e+=1,t=t.parentNode;return e},us=function(){var i=1/0,e=[];x.forEach(function(o){if(o.activeTargets.length!==0){var l=[];o.activeTargets.forEach(function(c){var h=new hs(c.target),d=ct(c.target);l.push(h),c.lastReportedSize=dt(c.target,c.observedBox),d<i&&(i=d)}),e.push(function(){o.callback.call(o.observer,l,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var t=0,s=e;t<s.length;t++){var r=s[t];r()}return i},He=function(i){x.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(ct(r.target)>i?t.activeTargets.push(r):t.skippedTargets.push(r))})})},bs=function(){var i=0;for(He(i);rs();)i=us(),He(i);return os()&&ns(),i>0},ce,ht=[],ps=function(){return ht.splice(0).forEach(function(i){return i()})},vs=function(i){if(!ce){var e=0,t=document.createTextNode(""),s={characterData:!0};new MutationObserver(function(){return ps()}).observe(t,s),ce=function(){t.textContent="".concat(e?e--:e++)}}ht.push(i),ce()},gs=function(i){vs(function(){requestAnimationFrame(i)})},J=0,fs=function(){return!!J},_s=250,ms={attributes:!0,characterData:!0,childList:!0,subtree:!0},Me=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Ue=function(i){return i===void 0&&(i=0),Date.now()+i},he=!1,ws=function(){function i(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return i.prototype.run=function(e){var t=this;if(e===void 0&&(e=_s),!he){he=!0;var s=Ue(e);gs(function(){var r=!1;try{r=bs()}finally{if(he=!1,e=s-Ue(),!fs())return;r?t.run(1e3):e>0?t.run(e):t.start()}})}},i.prototype.schedule=function(){this.stop(),this.run()},i.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,ms)};document.body?t():N.addEventListener("DOMContentLoaded",t)},i.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Me.forEach(function(t){return N.addEventListener(t,e.listener,!0)}))},i.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Me.forEach(function(t){return N.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},i}(),be=new ws,We=function(i){!J&&i>0&&be.start(),J+=i,!J&&be.stop()},ys=function(i){return!me(i)&&!ls(i)&&getComputedStyle(i).display==="inline"},$s=function(){function i(e,t){this.target=e,this.observedBox=t||M.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return i.prototype.isActive=function(){var e=dt(this.target,this.observedBox,!0);return ys(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},i}(),zs=function(){function i(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return i}(),X=new WeakMap,Ve=function(i,e){for(var t=0;t<i.length;t+=1)if(i[t].target===e)return t;return-1},Z=function(){function i(){}return i.connect=function(e,t){var s=new zs(e,t);X.set(e,s)},i.observe=function(e,t,s){var r=X.get(e),n=r.observationTargets.length===0;Ve(r.observationTargets,t)<0&&(n&&x.push(r),r.observationTargets.push(new $s(t,s&&s.box)),We(1),be.schedule())},i.unobserve=function(e,t){var s=X.get(e),r=Ve(s.observationTargets,t),n=s.observationTargets.length===1;r>=0&&(n&&x.splice(x.indexOf(s),1),s.observationTargets.splice(r,1),We(-1))},i.disconnect=function(e){var t=this,s=X.get(e);s.observationTargets.slice().forEach(function(r){return t.unobserve(e,r.target)}),s.activeTargets.splice(0,s.activeTargets.length)},i}(),xs=function(){function i(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Z.connect(this,e)}return i.prototype.observe=function(e,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ne(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Z.observe(this,e,t)},i.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ne(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Z.unobserve(this,e)},i.prototype.disconnect=function(){Z.disconnect(this)},i.toString=function(){return"function ResizeObserver () { [polyfill code] }"},i}();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Es{constructor(e,{target:t,config:s,callback:r,skipInitial:n}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,t!==null&&this.t.add(t!=null?t:e),this.l=s,this.o=n!=null?n:this.o,this.callback=r,window.ResizeObserver?(this.u=new ResizeObserver(o=>{this.handleChanges(o),this.h.requestUpdate()}),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){var t;this.value=(t=this.callback)==null?void 0:t.call(this,e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}const ut=new WeakMap;function Cs(i,e){let t=e;for(;t;){if(ut.get(t)===i)return!0;t=Object.getPrototypeOf(t)}return!1}function As(i){return e=>{if(Cs(i,e))return e;const t=i(e);return ut.set(t,i),t}}const Ss=i=>{var e;return!/[^\t\n\r ]/.test((e=i==null?void 0:i.textContent)!=null?e:"")},Rs=i=>i.nodeType===Node.COMMENT_NODE||i.nodeType===Node.TEXT_NODE&&Ss(i),ks=i=>{var e,bt,pe,r,n;return n=class extends i{constructor(){super(...arguments);re(this,e);re(this,r,a=>{var h,d;const c=a.target;if(c){const b=c.name||c.getAttribute("name")||"",v=c.assignedNodes({flatten:!0}),g=j(this,e,bt).call(this,c),O={assignedSlotContent:{slotName:b,assignedSlot:((h=g.assignedContent[0])==null?void 0:h.assignedSlot)||null},assignedNodesContent:j(this,e,pe).call(this,g.assignedContent),flattenedNodesContent:j(this,e,pe).call(this,g.flattenedContent),originalEvent:{event:a,assignedNodes:v}},W=new CustomEvent("slotchanges",{composed:!0,detail:O});(d=this.shadowRoot)==null||d.dispatchEvent(W)}})}connectedCallback(){var a,c;(a=super.connectedCallback)==null||a.call(this),(c=this.shadowRoot)==null||c.addEventListener("slotchange",ie(this,r))}disconnectedCallback(){var a,c;(a=super.disconnectedCallback)==null||a.call(this),(c=this.shadowRoot)==null||c.removeEventListener("slotchange",ie(this,r))}},e=new WeakSet,bt=function(a){const h=[...a.assignedNodes(),...a.childNodes].filter(d=>!Rs(d)).map(d=>{var b;return{isFlattened:d.assignedSlot===null,assignedNodes:d.nodeType===Node.TEXT_NODE?(b=d.textContent)==null?void 0:b.trim():d,assignedSlot:d.assignedSlot}});return{assignedContent:h.filter(d=>d.isFlattened===!1),flattenedContent:h.filter(d=>d.isFlattened===!0)}},pe=function(a){return{assignedNodesByNode:a,assignedNodes:a.map(c=>c.assignedNodes)}},r=new WeakMap,n},pt=As(ks),Ts=A`:host {
  --_unselected-color: var(--blockquote-tabs-unselected-color, rgb(234 234 234));
  --_scroll-gradient-start-color: var(--blockquote-tabs-scroll-gradient-start-color, rgba(255, 255, 255, 0));
  --_scroll-gradient-end-color: var(--blockquote-tabs-scroll-gradient-end-color, rgba(252, 252, 252, 1));
  --_scroll-arrow-color: var(--blockquote-tabs-scroll-arrow-color, rgb(94, 94, 94));
  contain: content;
  display: block;
  box-sizing: border-box;
  color: #202020;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.hold {
  position: relative;
  display: flex;
}
.hold .separator {
  position: absolute;
  z-index: -1;
  bottom: 0;
  height: 1px;
  left: 0;
  right: 0;
  background-color: var(--_unselected-color);
}
.hold .indicator {
  position: absolute;
  width: 1rem;
  pointer-events: none;
  top: 0;
  bottom: 1px;
  left: 0;
  box-shadow: rgb(255, 255, 255) 4px 0 12px 4px inset, rgb(210, 210, 210) 4px 0 4px -4px;
  background-color: rgba(234, 234, 234, 0.5);
  transition: opacity 92ms ease-in-out;
  opacity: 0;
  background-clip: padding-box;
}
.hold .indicator.show-indicator {
  opacity: 1;
}
.hold .indicator + .indicator {
  left: auto;
  right: 0;
  transform: scale(-1);
}

.scroll-content {
  width: 100%;
  overflow: auto hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  overscroll-behavior: none;
}
.scroll-content::-webkit-scrollbar {
  display: none;
}
.scroll-content:focus-visible {
  outline: #9e9e9e dashed 0.0625rem;
  outline-offset: -2px;
}
.scroll-content:focus:not(:focus-visible) {
  outline: none;
}

[role=tablist] {
  display: flex;
}`;window.ResizeObserver||(window.ResizeObserver=xs);class Os extends pt(f){constructor(){super();m(this,"_onSlotChanges",t=>{t.stopPropagation(),t.preventDefault(),this._slotChangesCount+=1;const{detail:s}=t,r=s.assignedNodesContent.assignedNodes;s.assignedSlotContent.slotName==="tab"&&(this._tabList=r),s.assignedSlotContent.slotName==="tabpanel"&&(this._tabpanelList=r),Array.isArray(this._slotNodesCount)&&this._slotChangesCount>this._slotNodesCount.length&&this._requestPropertyUpdate("selected")});m(this,"_onTabClick",t=>{const s=t.composedPath().find(n=>n instanceof Element&&n.slot==="tab"),r=this._tabList.indexOf(s)+1;this.selected===r&&this._scrollIntoView(),this.selected=r});m(this,"_onTabKeyDown",t=>{let s="";switch(t.key){case"ArrowLeft":t.preventDefault(),s=this._selectedTabIndexFromOne-1,this.selected=s<=0?this._getTabListLength:s;break;case"ArrowRight":t.preventDefault(),s=this._selectedTabIndexFromOne+1,this.selected=s>this._getTabListLength?1:s;break;case"Home":t.preventDefault(),this.selected=1;break;case"End":t.preventDefault(),this.selected=this._getTabListLength;break}});this.autofocus=!1,this.label="",this.selected=1,this._tabList=[],this._tabpanelList=[],this._selectTabLast=void 0,this._selectTabpanelLast=void 0,this._observedFocus=!1,this._observeScrollBehavior=!1,this._slotChangesCount=0,this._slotNodesCount=void 0,this._scrollContentRef=rt(),this._resizeControllerObserver=new Es(this,{callback:()=>{this._onResizeObserverChange()},skipInitial:!0}),this.addEventListener("slotchanges",this._onSlotChanges)}static get styles(){return[Ts]}static get properties(){return{autofocus:{type:Boolean},label:{type:String},selected:{type:Number,reflect:!0},_hasScrollLeftIndicator:{type:Boolean,state:!0},_hasScrollRightIndicator:{type:Boolean,state:!0}}}_selectedIsInRange(t){return t>=0&&t<=this._getTabListLength?t:0}get _selectedTab(){return this._tabList[this._selectedIsInRange(this.selected-1)]}get _selectedTabIndex(){return this._tabList.indexOf(this._selectedTab)}get _selectedTabIndexFromOne(){return this._selectedTabIndex+1}get _getTabListLength(){return this._tabList.length}firstUpdated(t){var n,o,l,a;super.firstUpdated&&super.firstUpdated(t);const s=(n=this.shadowRoot)==null?void 0:n.querySelector('[name="tab"]'),r=(o=this.shadowRoot)==null?void 0:o.querySelector('[name="tabpanel"]');this._slotNodesCount=(l=this.shadowRoot)==null?void 0:l.querySelectorAll("slot"),this._tabList=s==null?void 0:s.assignedElements(),this._tabpanelList=r==null?void 0:r.assignedElements(),this._indicators=(a=this.shadowRoot)==null?void 0:a.querySelectorAll(".indicator")}updated(t){if(super.updated&&super.updated(t),t.has("selected")){this._selectTab();const s=new CustomEvent("selectedchange",{bubbles:!0,detail:{selected:this._selectedTabIndexFromOne,tab:this._selectedTab,tabpanel:this._tabpanelList[this._selectedTabIndex]}});this.dispatchEvent(s)}}get _scrollContentTpl(){return u`
      <div class="scroll-content" ${ot(this._scrollContentRef)} @scroll="${this._scrollEdge}">
        ${this._tablistTpl}
      </div>
    `}get _tablistTpl(){return u`
      <div role="tablist" aria-label="${this.label||p}">
        <slot @click="${this._onTabClick}" @keydown="${this._onTabKeyDown}" name="tab"></slot>
      </div>
    `}get _separatorTpl(){return u`
      <span aria-hidden="true" class="separator"></span>
    `}get _indicatorsTpl(){return u`
      <span
        aria-hidden="true"
        class="indicator ${this._hasScrollLeftIndicator?"show-indicator":""}"></span>
      <span
        aria-hidden="true"
        class="indicator ${this._hasScrollRightIndicator?"show-indicator":""}"></span>
    `}get _holdTpl(){return u`
      <div class="hold">${this._scrollContentTpl} ${this._separatorTpl} ${this._indicatorsTpl}</div>
    `}get _tabpanelTpl(){return u`
      <div>
        <slot name="tabpanel"></slot>
      </div>
    `}render(){return u`
      ${this._holdTpl} ${this._tabpanelTpl}
    `}_scrollEdge({target:t=this._scrollContentRef.value}={}){const{scrollLeft:s,scrollWidth:r,offsetWidth:n}=t,o=r-n;this._hasScrollLeftIndicator=s>0,this._hasScrollRightIndicator=s<o}_selectTab(){const t=this._tabList[this._selectedTabIndex],s=this._tabpanelList[this._selectedTabIndex];this._selectTabLast&&(this._selectTabLast.selected=!1,this._selectTabPanelLast.selected=!1),this._selectTabLast=t,this._selectTabPanelLast=s,t.selected=!0,s.selected=!0,(this.autofocus||this._observedFocus)&&this._requestFocusUpdate(),this._observedFocus=!0}_moveFocusSelectedTab(t=this._selectedTab){window.setTimeout(()=>{t.focus()},0)}async _requestFocusUpdate(){await this.updateComplete,this._moveFocusSelectedTab(),this._scrollIntoView()}_scrollIntoView(){window.requestAnimationFrame(()=>{this._scrollIntoViewWithOffset(),this._observeScrollBehavior=!0})}_scrollIntoViewWithOffset(t=this._selectedTab,s=this._observeScrollBehavior?"smooth":"auto"){const r=this._scrollContentRef.value;if(!r)return;const[n,o]=this._indicators||[],{right:l}=r.getBoundingClientRect(),{offsetLeft:a}=t,{left:c,right:h,width:d}=t.getBoundingClientRect(),{right:b}=n.getBoundingClientRect(),{width:v,left:g}=o.getBoundingClientRect();if(h>g||c<b){const O=h>g?a-l+d+v:a-b;r.scroll({left:O,behavior:s})}}_requestPropertyUpdate(t){const s=this[t];this[t]=void 0,this[t]=s}_onResizeObserverChange(){this._scrollIntoView(),this._scrollEdge()}}const Bs=A`:host {
  --__color: var(--blockquote-tab-color-dark-mode, var(--blockquote-tab-color-ambient, var(--theme-colors-secondary500, rgb(32, 32, 32))));
  --_color: var(--blockquote-tab-color, var(--__color));
  --_selected-border-color: var(--blockquote-tab-selected-border-color, var(--blockquote-tab-selected-border-color-ambient, var(--theme-colors-secondary500, rgb(184, 184, 184))));
  --_focus-outline-color: var(--blockquote-tab-focus-outline-color, var(--blockquote-tab-focus-outline-color-ambient, var(--theme-colors-secondary500, rgb(184, 184, 184))));
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  color: var(--_color);
  padding: 1em 0.5em;
  min-width: 6.25rem;
  border-bottom: 0.0625rem solid transparent;
  transition: border-bottom-color 192ms ease-in-out;
  cursor: pointer;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

:host([aria-selected=true]) {
  font-weight: 700;
  border-bottom-color: var(--_selected-border-color);
}

:host(:focus:not(:focus-visible)) {
  outline: none;
}

:host(:focus-visible) {
  outline: 0.0625rem dashed var(--_focus-outline-color);
  outline-offset: -0.125rem;
}

slot::before {
  content: attr(data-text);
  display: block;
  font: inherit;
  font-weight: 700;
  width: inherit;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}`;class Ls extends pt(f){constructor(){super();m(this,"_onSlotChanges",t=>{const{detail:s}=t;t.stopPropagation(),t.preventDefault();const r=s.assignedSlotContent.assignedSlot;Object.assign(r.dataset,{text:this.textContent})});this.selected=!1,this.globalRootAttributes={role:"tab",slot:"tab",tabindex:0},this.addEventListener("slotchanges",this._onSlotChanges)}static get properties(){return{selected:{type:Boolean}}}static get styles(){return[Bs]}connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),this.__setArrayAttibute(this.globalRootAttributes)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const s={...this.globalRootAttributes,"aria-selected":!!this.selected,tabindex:this.selected?0:-1};this.__setArrayAttibute(s)}}render(){return u`
      <slot></slot>
    `}__setArrayAttibute(t={}){Object.entries(t).forEach(([s,r])=>{this.setAttribute(s,r)})}}window.customElements.define("blockquote-tab",Ls);const Ps=A`:host {
  display: block;
  box-sizing: border-box;
  padding: 1rem;
  color: var(--tabpanel, inherit);
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

:host([aria-hidden=true]) {
  display: none;
}

:host(:focus:not(:focus-visible)) {
  outline: none;
}

:host(:focus-visible) {
  outline: #9e9e9e dashed 0.0625rem;
  outline-offset: -2px;
}`;class qs extends f{static get properties(){return{selected:{type:Boolean}}}constructor(){super(),this.selected=!1,this.globalRootAttributes={role:"tabpanel",slot:"tabpanel",tabindex:0}}static get styles(){return[Ps]}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.__setArrayAttibute(this.globalRootAttributes)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const t={...this.globalRootAttributes,"aria-hidden":!this.selected};this.__setArrayAttibute(t)}}render(){return u`
      <slot></slot>
    `}__setArrayAttibute(e={}){Object.entries(e).forEach(([t,s])=>{this.setAttribute(t,s)})}}window.customElements.define("blockquote-tabpanel",qs);window.customElements.define("blockquote-tabs",Os);
