var Be=Object.defineProperty;var De=(i,e,t)=>e in i?Be(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var u=(i,e,t)=>De(i,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,ie=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol(),ae=new WeakMap;let Se=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ie&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ae.set(t,e))}return e}toString(){return this.cssText}};const Ie=i=>new Se(typeof i=="string"?i:i+"",void 0,re),F=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new Se(t,i,re)},Ne=(i,e)=>{if(ie)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=N.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},le=ie?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ie(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:We,defineProperty:Ve,getOwnPropertyDescriptor:je,getOwnPropertyNames:Fe,getOwnPropertySymbols:Ge,getPrototypeOf:Ye}=Object,$=globalThis,he=$.trustedTypes,Ze=he?he.emptyScript:"",Y=$.reactiveElementPolyfillSupport,q=(i,e)=>i,se={toAttribute(i,e){switch(e){case Boolean:i=i?Ze:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},xe=(i,e)=>!We(i,e),ce={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:xe};var ve,we;(ve=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(we=$.litPropertyMetadata)!=null||($.litPropertyMetadata=new WeakMap);let k=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ve(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){var n;const{get:r,set:o}=(n=je(this.prototype,e))!=null?n:{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){const a=r==null?void 0:r.call(this);o==null||o.call(this,l),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:ce}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const e=Ye(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const t=this.properties,s=[...Fe(t),...Ge(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(le(r))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var o;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:se).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var o,n,l,a;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const h=s.getPropertyOptions(r),c=typeof h.converter=="function"?{fromAttribute:h.converter}:((o=h.converter)==null?void 0:o.fromAttribute)!==void 0?h.converter:se;this._$Em=r,this[r]=(a=(l=c.fromAttribute(t,h.type))!=null?l:(n=this._$Ej)==null?void 0:n.get(r))!=null?a:null,this._$Em=null}}requestUpdate(e,t,s){var r,o;if(e!==void 0){const n=this.constructor,l=this[e];if(s!=null||(s=n.getPropertyOptions(e)),!(((r=s.hasChanged)!=null?r:xe)(l,t)||s.useDefault&&s.reflect&&l===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:o},n){var l,a,h;s&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(a=n!=null?n:t)!=null?a:this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&((h=this._$Eq)!=null?h:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,l]of o){const{wrapped:a}=l,h=this[n];a!==!0||this._$AL.has(n)||h===void 0||this.C(n,void 0,l,h)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};var $e;k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[q("elementProperties")]=new Map,k[q("finalized")]=new Map,Y==null||Y({ReactiveElement:k}),(($e=$.reactiveElementVersions)!=null?$e:$.reactiveElementVersions=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,W=M.trustedTypes,de=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,ke="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce="?"+w,Xe=`<${Ce}>`,x=document,U=()=>x.createComment(""),B=i=>i===null||typeof i!="object"&&typeof i!="function",oe=Array.isArray,Je=i=>oe(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Z=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,be=/>/g,A=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pe=/'/g,me=/"/g,Re=/^(?:script|style|textarea|title)$/i,Qe=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),b=Qe(1),R=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),fe=new WeakMap,E=x.createTreeWalker(x,129);function Pe(i,e){if(!oe(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}const Ke=(i,e)=>{const t=i.length-1,s=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=O;for(let l=0;l<t;l++){const a=i[l];let h,c,d=-1,_=0;for(;_<a.length&&(n.lastIndex=_,c=n.exec(a),c!==null);)_=n.lastIndex,n===O?c[1]==="!--"?n=ue:c[1]!==void 0?n=be:c[2]!==void 0?(Re.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=A):c[3]!==void 0&&(n=A):n===A?c[0]===">"?(n=r!=null?r:O,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,h=c[1],n=c[3]===void 0?A:c[3]==='"'?me:pe):n===me||n===pe?n=A:n===ue||n===be?n=O:(n=A,r=void 0);const g=n===A&&i[l+1].startsWith("/>")?" ":"";o+=n===O?a+Xe:d>=0?(s.push(h),a.slice(0,d)+ke+a.slice(d)+w+g):a+w+(d===-2?l:g)}return[Pe(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class D{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[h,c]=Ke(e,t);if(this.el=D.createElement(h,s),E.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=E.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(ke)){const _=c[n++],g=r.getAttribute(d).split(w),z=/([.?@])?(.*)/.exec(_);a.push({type:1,index:o,name:z[2],strings:g,ctor:z[1]==="."?tt:z[1]==="?"?st:z[1]==="@"?it:G}),r.removeAttribute(d)}else d.startsWith(w)&&(a.push({type:6,index:o}),r.removeAttribute(d));if(Re.test(r.tagName)){const d=r.textContent.split(w),_=d.length-1;if(_>0){r.textContent=W?W.emptyScript:"";for(let g=0;g<_;g++)r.append(d[g],U()),E.nextNode(),a.push({type:2,index:++o});r.append(d[_],U())}}}else if(r.nodeType===8)if(r.data===Ce)a.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(w,d+1))!==-1;)a.push({type:7,index:o}),d+=w.length-1}o++}}static createElement(e,t){const s=x.createElement("template");return s.innerHTML=e,s}}function P(i,e,t=i,s){var n,l,a;if(e===R)return e;let r=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const o=B(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,s)),s!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[s]=r:t._$Cl=r),r!==void 0&&(e=P(i,r._$AS(i,e.values),r,s)),e}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var h;const{el:{content:t},parts:s}=this._$AD,r=((h=e==null?void 0:e.creationScope)!=null?h:x).importNode(t,!0);E.currentNode=r;let o=E.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new I(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new rt(o,this,e)),this._$AV.push(c),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=E.nextNode(),n++)}return E.currentNode=x,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class I{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,s,r){var o;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(o=r==null?void 0:r.isConnected)!=null?o:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),B(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=D.createElement(Pe(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const n=new et(r,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=fe.get(e.strings);return t===void 0&&fe.set(e.strings,t=new D(e)),t}k(e){oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const o of e)r===t.length?t.push(s=new I(this.O(U()),this.O(U()),this,this.options)):s=t[r],s._$AI(o),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(e,t=this,s,r){const o=this.strings;let n=!1;if(o===void 0)e=P(this,e,t,0),n=!B(e)||e!==this._$AH&&e!==R,n&&(this._$AH=e);else{const l=e;let a,h;for(e=o[0],a=0;a<o.length-1;a++)h=P(this,l[s+a],t,a),h===R&&(h=this._$AH[a]),n||(n=!B(h)||h!==this._$AH[a]),h===m?e=m:e!==m&&(e+=(h!=null?h:"")+o[a+1]),this._$AH[a]=h}n&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class tt extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class st extends G{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class it extends G{constructor(e,t,s,r,o){super(e,t,s,r,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=P(this,e,t,0))!=null?n:m)===R)return;const s=this._$AH,r=e===m&&s!==m||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==m&&(s===m||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)==null?void 0:t.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}}class rt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const X=M.litHtmlPolyfillSupport;var ye;X==null||X(D,I),((ye=M.litHtmlVersions)!=null?ye:M.litHtmlVersions=[]).push("3.3.0");const ne=(i,e,t)=>{var o,n;const s=(o=t==null?void 0:t.renderBefore)!=null?o:e;let r=s._$litPart$;if(r===void 0){const l=(n=t==null?void 0:t.renderBefore)!=null?n:null;s._$litPart$=r=new I(e.insertBefore(U(),l),l,void 0,t!=null?t:{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;let y=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;const e=super.createRenderRoot();return(s=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ne(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return R}};var ze;y._$litElement$=!0,y.finalized=!0,(ze=S.litElementHydrateSupport)==null||ze.call(S,{LitElement:y});const J=S.litElementPolyfillSupport;J==null||J({LitElement:y});var Ae;((Ae=S.litElementVersions)!=null?Ae:S.litElementVersions=[]).push("4.2.0");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt={CHILD:2},at=i=>(...e)=>({_$litDirective$:i,values:e});class lt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=(i,e)=>{var s;const t=i._$AN;if(t===void 0)return!1;for(const r of t)(s=r._$AO)==null||s.call(r,e,!1),H(r,e);return!0},V=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},Te=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),dt(e)}};function ht(i){this._$AN!==void 0?(V(this),this._$AM=i,Te(this)):this._$AM=i}function ct(i,e=!1,t=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let o=t;o<s.length;o++)H(s[o],!1),V(s[o]);else s!=null&&(H(s,!1),V(s));else H(this,i)}const dt=i=>{var e,t;i.type==nt.CHILD&&((e=i._$AP)!=null||(i._$AP=ct),(t=i._$AQ)!=null||(i._$AQ=ht))};class ut extends lt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),Te(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,r;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),t&&(H(this,e),V(this))}setValue(e){if(ot(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=()=>new pt;class pt{}const Q=new WeakMap,mt=at(class extends ut{render(i){return m}update(i,[e]){var s;const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),m}rt(i){var e;if(this.isConnected||(i=void 0),typeof this.G=="function"){const t=(e=this.ht)!=null?e:globalThis;let s=Q.get(t);s===void 0&&(s=new WeakMap,Q.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,e,t;return typeof this.G=="function"?(e=Q.get((i=this.ht)!=null?i:globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ft=F`
  :host {
    --_host-color: var(--blockquote-base-embedded-webview-size-color, inherit);
    --_rect-height: var(--blockquote-base-embedded-webview-size-rect-height, 1.125rem);
    --_rect-size: var(--blockquote-base-embedded-webview-size-rect-size, 0.6875rem);
    --_button-border-color: var(
      --blockquote-base-embedded-webview-size-button-border-color,
      rgb(184, 184, 184)
    );
    --_button-bgcolor: var(
      --blockquote-base-embedded-webview-size-button-bgcolor,
      rgb(234, 234, 234)
    );
    --_button-bgcolor-hover: var(
      --blockquote-base-embedded-webview-size-button-bgcolor-hover,
      rgb(220, 220, 220)
    );
    --_button-bgcolor-selected-hover: var(
      --blockquote-base-embedded-webview-size-button-bgcolor-selected-hover,
      rgb(210, 210, 210)
    );
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

  .rect [aria-hidden='true'] {
    cursor: pointer;
    letter-spacing: inherit;
    position: absolute;
  }

  .rect [aria-disabled='true'] {
    opacity: 0.4;
  }

  .rect [aria-disabled='true']::after {
    content: '';
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

  button[data-selected],
  button[data-selected] ~ button {
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
  }
`;class _t extends y{constructor(){super();u(this,"_onResize",t=>{t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[ft]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((s,r)=>r.width-s.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const s=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(s)}}render(){return b`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return b`
      ${this.screenSizes.map((t,s)=>b`
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
    `}get _visualTextTpl(){return b`
      <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true">
        ${this.selectedSize.id}
      </span>
    `}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const s=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(s)}}window.customElements.define("blockquote-base-embedded-webview-size",_t);const gt=F`
  :host {
    --__resizer-factor: calc(1.25rem * var(--blockquote-base-embedded-webview-resize-factor, 1));
    --_rect-min-width: var(--blockquote-base-embedded-webview-resize-rect-min-width, 18.75rem);
    --_rect-min-height: var(--blockquote-base-embedded-webview-resize-rect-min-height, 9.375rem);
    --_rect-max-width: var(--blockquote-base-embedded-webview-resize-rect-max-width, 100%);
    --_rect-max-height: var(--blockquote-base-embedded-webview-resize-rect-max-height, 100%);
    --_rect-width: var(--blockquote-base-embedded-webview-resize-rect-width, 40rem);
    --_rect-height: var(--blockquote-base-embedded-webview-resize-rect-height, 22.5rem);
    --_resizer-bgcolor: var(
      --blockquote-base-embedded-webview-resize-resizer-bgcolor,
      rgb(234, 234, 234)
    );
    --_resizer-bgcolor-hover: var(
      --blockquote-base-embedded-webview-resize-resizer-bgcolor-hover,
      rgb(220, 220, 220)
    );
    --_resizer-bgimage-ew-hover: var(
      --blockquote-base-embedded-webview-resize-resizer-bgcolor-hover,
      linear-gradient(
        0deg,
        rgba(220, 220, 220, 0.2),
        rgba(220, 220, 220, 1) 50%,
        rgba(220, 220, 220, 0.2)
      )
    );
    --_resizer-bgimage-s-hover: var(
      --blockquote-base-embedded-webview-resize-resizer-bgcolor-hover,
      linear-gradient(
        90deg,
        rgba(220, 220, 220, 0.2),
        rgba(220, 220, 220, 1) 50%,
        rgba(220, 220, 220, 0.2)
      )
    );
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

  .resizer-se,
  .resizer-e {
    right: calc(var(--__resizer-factor) * -1);
  }

  .resizer-se,
  .resizer-sw,
  .resizer-s {
    bottom: calc(var(--__resizer-factor) * -1);
  }

  .resizer-w,
  .resizer-sw {
    left: calc(var(--__resizer-factor) * -1);
  }

  .resizer-se,
  .resizer-sw {
    height: var(--__resizer-factor);
    width: var(--__resizer-factor);
  }

  .resizer-se::after,
  .resizer-sw::after {
    content: url("data:image/svg+xml,%0A%3Csvg width='13' height='13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)' fill='%23848282'%3E%3Crect x='-.195' y='10.775' width='15.566' height='2' rx='1' transform='rotate(-45 -.195 10.775)'/%3E%3Crect x='5.346' y='11.241' width='8.401' height='2' rx='1' transform='rotate(-45 5.346 11.24)'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h13v13H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  }

  .resizer-se:hover,
  .resizer-sw:hover {
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

  .resizer-e,
  .resizer-w {
    cursor: ew-resize;
    width: var(--__resizer-factor);
  }

  .resizer-e:hover,
  .resizer-w:hover {
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
  }
`;class vt extends y{constructor(){super();u(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[gt]}async connectedCallback(){var t,s,r,o,n,l,a,h,c,d,_,g,z;(t=super.connectedCallback)==null||t.call(this),await this.updateComplete,this.rect=(s=this.shadowRoot)==null?void 0:s.querySelector(".rect"),this.bottomRightResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(".resizer-se"),this.bottomLeftResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-sw"),this.rightResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-e"),this.leftResizerElement=(l=this.shadowRoot)==null?void 0:l.querySelector(".resizer-w"),this.bottomResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-s"),(h=this.leftResizerElement)==null||h.addEventListener("pointerdown",this._createResizerLeft),(c=this.rightResizerElement)==null||c.addEventListener("pointerdown",this._createResizerRight),(d=this.bottomResizerElement)==null||d.addEventListener("pointerdown",this._createResizerBottom),(_=this.bottomLeftResizerElement)==null||_.addEventListener("pointerdown",this._createResizerBottomLeft),(g=this.bottomRightResizerElement)==null||g.addEventListener("pointerdown",this._createResizerBottomRight),(z=this.bottomResizerElement)==null||z.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return b`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `}get _resizersTpl(){return b`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `}_createResizer(t,s){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:r,pointerId:o,clientX:n,clientY:l}=s;r==null||r.setPointerCapture(o);const a=({clientX:c,clientY:d})=>{const _=Math.floor(c-n),g=Math.floor(d-l);this._resize({detail:{dx:_,dy:g}})};r==null||r.addEventListener("pointermove",a);const h=()=>{this.removeAttribute("resizing"),r==null||r.releasePointerCapture(o),r==null||r.removeEventListener("pointermove",a),r==null||r.removeEventListener("pointerup",h),this._dispatchResizeEvent()};r==null||r.addEventListener("pointerup",h)}_resize({detail:t}){let s,r;const o=Math.floor(t.dx*2.04),n=Math.floor(t.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",s=`${this._getBoundingClientRectWidth-o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s);break;case"left":this._cursor="e",s=`${this._getBoundingClientRectWidth+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s);break;case"top":this._cursor="n",r=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopLeft":this._cursor="ne",s=`${this._getBoundingClientRectWidth+o}px`,r=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopRight":this._cursor="nw",s=`${this._getBoundingClientRectWidth-o}px`,r=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var s;return Math.abs(parseInt((s=this.rect)==null?void 0:s.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",vt);const wt=F`
  :host,
  ::slotted([slot='embedded']) {
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
  }
`;class $t extends y{constructor(){super();u(this,"_onLoadElement",({target:t})=>{if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const s=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(s)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[wt]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return b`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){ne(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return b`
      <slot name="embedded"></slot>
    `}_fetch(t){var s,r,o,n;t&&(Object.assign((s=this._embeddedElement)!=null?s:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((r=this._embeddedElement)!=null?r:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((n=(o=this._embeddedElement)==null?void 0:o.style)!=null?n:{},t.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",$t);const yt=F`
  :host {
    --_host-color: var(--blockquote-base-embedded-webview-color, rgb(32, 32, 32));
    --_main-bgcolor: var(--blockquote-base-embedded-webview-main-bgcolor, rgb(250, 250, 250));
    --_select-bgcolor: var(--blockquote-base-embedded-webview-select-bgcolor, rgb(222, 222, 222));
    --_select-transition: var(
      --blockquote-base-embedded-webview-select-transition,
      border-bottom 196ms ease-out,
      var(--blockquote-base-embedded-webview-select-transition, border-bottom 196ms ease-out)
    );
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

  [role='heading'] {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  [role='heading'] + div {
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

  .select select:hover,
  .select select:focus {
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
  }
`,zt=b`
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
`,At=b`
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
`;class Et extends y{constructor(){super();u(this,"_updateSize",({detail:t})=>{var s,r,o,n;(r=(s=this._embeddedResizeRef)==null?void 0:s.value)==null||r.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(n=(o=this._embeddedResizeRef)==null?void 0:o.value)==null||n.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=zt,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=bt()}static get styles(){return[yt]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0,useDefault:!0}}}async connectedCallback(){var s,r;(s=super.connectedCallback)==null||s.call(this),await this.updateComplete,this.addEventListener("webviewresize",o=>{var l;const{detail:n}=o;Object.assign(this.__readDataPos,n),this.__resetResizing=!0,(n.cursor==="n"||n.cursor==="ne"||n.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((l=this._controlBottom)!=null?l:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(o=>{const{src:n="",option:l="",description:a=""}=o.dataset;return{src:n,option:l,description:a}}),this._src=this._sources[this.selected].src),this.embedded=(r=this.shadowRoot)==null?void 0:r.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return b`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){ne(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return b`
      <header>
        <div>
          ${this._headingTpl} ${this._navigationDemosTpl} ${this._descriptionTpl}
          ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return b`
      <div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>
    `}get _navigationDemosTpl(){return b`
      <div>${this._selectTpl}${this._externalLinkTpl}</div>
    `}get _selectTpl(){return b`
      ${this._sources.some(t=>t.option)?b`
            <div class="select">
              <select @change="${this._onChangeFile}" aria-label="Cases">
                ${this._sources.map((t,s)=>b`
                    <option ?selected="${this.selected===s}" value="${s}">
                      ${t.option}
                    </option>
                  `)}
              </select>
              ${this.__selectArrow}
            </div>
          `:""}
    `}get _externalLinkTpl(){return b`
      <a href="${this._src||"#"}" target="_blank" class="open-externally">
        <span class="sr-only">View demo in a new tab</span>
        <span aria-hidden="true">${At}</span>
      </a>
    `}get _descriptionTpl(){return b`
      <p class="description">${this._sources[this.selected].description}</p>
    `}get _readDataPosTpl(){return b`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing?1:0}">
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return b`
      <blockquote-base-embedded-webview-size
        .disabledSelectedSizeText="${this.__resetResizing}"
        @click="${this._updateSize}"
        @selectedchange="${this._updateSize}"
        .selected="${this.screenSizeSelected}"></blockquote-base-embedded-webview-size>
    `}get _mainTpl(){return b`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${mt(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return b`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",Et);class K extends Error{constructor(t){super(t?`${t.length} errors occurred during unsubscription:
${t.map((s,r)=>`${r+1}) ${s.toString()}`).join(`
  `)}`:"");u(this,"errors");this.errors=t,this.name="UnsubscriptionError"}}const j=class j{constructor(e){u(this,"initialTeardown");u(this,"closed",!1);u(this,"_finalizers",null);this.initialTeardown=e}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{initialTeardown:t}=this;if(p(t))try{t()}catch(r){e=r instanceof K?r.errors:[r]}const{_finalizers:s}=this;if(s){this._finalizers=null;for(const r of s)try{_e(r)}catch(o){e=e!=null?e:[],o instanceof K?e.push(...o.errors):e.push(o)}}if(e)throw new K(e)}}add(e){var t;e&&e!==this&&(this.closed?_e(e):(e&&"add"in e&&e.add(()=>{this.remove(e)}),(t=this._finalizers)!=null||(this._finalizers=new Set),this._finalizers.add(e)))}remove(e){var t;(t=this._finalizers)==null||t.delete(e)}};u(j,"EMPTY",(()=>{const e=new j;return e.closed=!0,e})());let T=j;typeof Symbol.dispose=="symbol"&&(T.prototype[Symbol.dispose]=T.prototype.unsubscribe);function _e(i){p(i)?i():i.unsubscribe()}class C extends T{constructor(t,s){var r,o,n,l;super();u(this,"isStopped",!1);u(this,"destination");u(this,"_nextOverride",null);u(this,"_errorOverride",null);u(this,"_completeOverride",null);u(this,"_onFinalize",null);this.destination=t instanceof C?t:Rt(t),this._nextOverride=(r=s==null?void 0:s.next)!=null?r:null,this._errorOverride=(o=s==null?void 0:s.error)!=null?o:null,this._completeOverride=(n=s==null?void 0:s.complete)!=null?n:null,this._onFinalize=(l=s==null?void 0:s.finalize)!=null?l:null,this._next=this._nextOverride?St:this._next,this._error=this._errorOverride?xt:this._error,this._complete=this._completeOverride?kt:this._complete,Pt(t)&&t.add(this)}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){var t;this.closed||(this.isStopped=!0,super.unsubscribe(),(t=this._onFinalize)==null||t.call(this))}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}function St(i){try{this._nextOverride(i)}catch(e){this.destination.error(e)}}function xt(i){try{this._errorOverride(i)}catch(e){this.destination.error(e)}finally{this.unsubscribe()}}function kt(){try{this._completeOverride()}catch(i){this.destination.error(i)}finally{this.unsubscribe()}}class Ct{constructor(e){u(this,"partialObserver");this.partialObserver=e}next(e){const{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(s){L(s)}}error(e){const{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(s){L(s)}else L(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){L(t)}}}function Rt(i){return new Ct(!i||p(i)?{next:i!=null?i:void 0}:i)}function Pt(i){return i&&p(i.unsubscribe)&&p(i.add)}function Oe({destination:i,...e}){return new C(i,e)}var Ee;class v{constructor(e){e&&(this._subscribe=e)}subscribe(e){const t=e instanceof C?e:new C(e);return t.add(this._trySubscribe(t)),t}_trySubscribe(e){try{return this._subscribe(e)}catch(t){e.error(t)}}forEach(e){return new Promise((t,s)=>{const r=new C({next:o=>{try{e(o)}catch(n){s(n),r.unsubscribe()}},error:s,complete:t});this.subscribe(r)})}_subscribe(e){}[(Ee=Symbol.observable)!=null?Ee:"@@observable"](){return this}pipe(...e){return e.reduce(Tt,this)}[Symbol.asyncIterator](){let e,t=!1,s,r=!1;const o=[],n=[],l=h=>{for(t=!0,s=h;n.length;){const[c,d]=n.shift();d(h)}},a=()=>{for(r=!0;n.length;){const[h]=n.shift();h({value:void 0,done:!0})}};return{next:()=>(e||(e=this.subscribe({next:h=>{if(n.length){const[c]=n.shift();c({value:h,done:!1})}else o.push(h)},error:l,complete:a})),o.length?Promise.resolve({value:o.shift(),done:!1}):r?Promise.resolve({value:void 0,done:!0}):t?Promise.reject(s):new Promise((h,c)=>{n.push([h,c])})),throw:h=>(e==null||e.unsubscribe(),l(h),Promise.reject(h)),return:()=>(e==null||e.unsubscribe(),a(),Promise.resolve({value:void 0,done:!0})),[Symbol.asyncIterator](){return this}}}}function Tt(i,e){return e(i)}function L(i){setTimeout(()=>{throw i})}function Ot(i){switch(It(i)){case f.Own:return i;case f.InteropObservable:return Lt(i);case f.ArrayLike:return qt(i);case f.Promise:return Mt(i);case f.AsyncIterable:return Le(i);case f.Iterable:return Ht(i);case f.ReadableStreamLike:return Ut(i)}}function Lt(i){return new v(e=>{var s;const t=i[(s=Symbol.observable)!=null?s:"@@observable"]();if(p(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function qt(i){return new v(e=>{Dt(i,e)})}function Mt(i){return new v(e=>{i.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,L)})}function Ht(i){return new v(e=>{for(const t of i)if(e.next(t),e.closed)return;e.complete()})}function Le(i){return new v(e=>{Bt(i,e).catch(t=>e.error(t))})}function Ut(i){return Le(Wt(i))}async function Bt(i,e){for await(const t of i)if(e.next(t),e.closed)return;e.complete()}function Dt(i,e){const t=i.length;for(let s=0;s<t;s++){if(e.closed)return;e.next(i[s])}e.complete()}var f;(function(i){i[i.Own=0]="Own",i[i.InteropObservable=1]="InteropObservable",i[i.ArrayLike=2]="ArrayLike",i[i.Promise=3]="Promise",i[i.AsyncIterable=4]="AsyncIterable",i[i.Iterable=5]="Iterable",i[i.ReadableStreamLike=6]="ReadableStreamLike"})(f||(f={}));function It(i){if(i instanceof v)return f.Own;if(Ft(i))return f.InteropObservable;if(qe(i))return f.ArrayLike;if(jt(i))return f.Promise;if(Nt(i))return f.AsyncIterable;if(Gt(i))return f.Iterable;if(Vt(i))return f.ReadableStreamLike;throw new TypeError(`You provided ${i!==null&&typeof i=="object"?"an invalid object":`'${i}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function p(i){return typeof i=="function"}function Nt(i){return Symbol.asyncIterator&&p(i==null?void 0:i[Symbol.asyncIterator])}async function*Wt(i){const e=i.getReader();try{for(;;){const{value:t,done:s}=await e.read();if(s)return;yield t}}finally{e.releaseLock()}}function Vt(i){return p(i==null?void 0:i.getReader)}function jt(i){return p(i==null?void 0:i.then)}function Ft(i){var e;return p(i[(e=Symbol.observable)!=null?e:"@@observable"])}function Gt(i){return p(i==null?void 0:i[Symbol.iterator])}function qe(i){return i&&typeof i.length=="number"&&!p(i)}function Yt(i){return!!i&&(i instanceof v||p(i.lift)&&p(i.subscribe))}class Zt extends v{constructor(){super();u(this,"_closed",!1);u(this,"_observerCounter",0);u(this,"currentObservers",new Map);u(this,"observerSnapshot");u(this,"hasError",!1);u(this,"thrownError",null)}get closed(){return this._closed}get observers(){var t;return(t=this.observerSnapshot)!=null?t:this.observerSnapshot=Array.from(this.currentObservers.values())}_clearObservers(){this.currentObservers.clear(),this.observerSnapshot=void 0}next(t){if(!this._closed){const{observers:s}=this,r=s.length;for(let o=0;o<r;o++)s[o].next(t)}}error(t){if(!this._closed){this.hasError=this._closed=!0,this.thrownError=t;const{observers:s}=this,r=s.length;for(let o=0;o<r;o++)s[o].error(t);this._clearObservers()}}complete(){if(!this._closed){this._closed=!0;const{observers:t}=this,s=t.length;for(let r=0;r<s;r++)t[r].complete();this._clearObservers()}}unsubscribe(){this._closed=!0,this._clearObservers()}get observed(){return this.currentObservers.size>0}_subscribe(t){return this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){if(this.hasError||this._closed)return T.EMPTY;const{currentObservers:s}=this,r=this._observerCounter++;return s.set(r,t),this.observerSnapshot=void 0,t.add(()=>{s.delete(r),this.observerSnapshot=void 0}),t}_checkFinalizedStatuses(t){const{hasError:s,thrownError:r,_closed:o}=this;s?t.error(r):o&&t.complete()}asObservable(){return new v(t=>this.subscribe(t))}}function Xt(){}function Jt(i){return e=>new v(t=>{let s=0;e.subscribe(Oe({destination:t,next:r=>{t.next(i(r,s++))}}))})}const{isArray:Qt}=Array;function Kt(i,e){return Qt(e)?i(...e):i(e)}function es(i){return Jt(e=>Kt(i,e))}const ts=["addListener","removeListener"],ss=["addEventListener","removeEventListener"],is=["on","off"];function rs(i,e,t,s){if(p(t)&&(s=t,t=void 0),s)return es(s)(rs(i,e,t));const r=Me(i)||He(i)||Ue(i);if(!r&&!qe(i))throw new TypeError("Invalid event target");return new v(o=>{const n=(...l)=>o.next(1<l.length?l:l[0]);if(r)ge(n,o,i,e,t);else for(let l=0;l<i.length&&!o.closed;l++){const a=i[l];ge(n,o,a,e,t)}})}function ge(i,e,t,s,r){const[o,n]=os(t);if(!o||!n)throw new TypeError("Invalid event target");t[o](s,i,r),e.add(()=>t[n](s,i,r))}function os(i){return Ue(i)?ss:Me(i)?ts:He(i)?is:[]}function Me(i){return p(i.addListener)&&p(i.removeListener)}function He(i){return p(i.on)&&p(i.off)}function Ue(i){return p(i.addEventListener)&&p(i.removeEventListener)}function ns(i){return e=>new v(t=>{Ot(i).subscribe(Oe({destination:t,next:()=>t.complete(),complete:Xt})),!t.closed&&e.subscribe(t)})}const ee=Symbol("unsubscribe"),te=Symbol("subscriptions");class ds{constructor(e){this[ee]=new Zt,this[te]=new Map,(this.host=e).addController(this)}subscribe(e,t){var o;if(!Yt(t))throw new Error("Invalid Observable!");const s=this[te].get(e);if(s){if((s==null?void 0:s.stream$)===t)return t;(o=s==null?void 0:s.subscription)==null||o.unsubscribe()}const r=t.pipe(ns(this[ee])).subscribe(n=>{e in this.host&&(this.host[e]=n),this.host.requestUpdate()});return this[te].set(e,{stream$:t,subscription:r}),t}hostDisconnected(){this[ee].next(null)}}export{ds as BlockquoteControllerRxjs,y as LitElement,rs as fromEvent,b as html,Jt as map};
