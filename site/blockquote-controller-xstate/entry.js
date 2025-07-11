var Yt=Object.defineProperty;var Ve=s=>{throw TypeError(s)};var Xt=(s,e,t)=>e in s?Yt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var w=(s,e,t)=>Xt(s,typeof e!="symbol"?e+"":e,t),Zt=(s,e,t)=>e.has(s)||Ve("Cannot "+t);var V=(s,e,t)=>(Zt(s,e,"read from private field"),t?t.call(s):e.get(s)),Ye=(s,e,t)=>e.has(s)?Ve("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=globalThis,Me=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pe=Symbol(),Xe=new WeakMap;let wt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Me&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Xe.set(t,e))}return e}toString(){return this.cssText}};const Ft=s=>new wt(typeof s=="string"?s:s+"",void 0,Pe),ne=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new wt(t,s,Pe)},Kt=(s,e)=>{if(Me)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=ce.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},Ze=Me?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ft(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qt,defineProperty:es,getOwnPropertyDescriptor:ts,getOwnPropertyNames:ss,getOwnPropertySymbols:is,getPrototypeOf:ns}=Object,k=globalThis,Fe=k.trustedTypes,rs=Fe?Fe.emptyScript:"",be=k.reactiveElementPolyfillSupport,F=(s,e)=>s,ze={toAttribute(s,e){switch(e){case Boolean:s=s?rs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},$t=(s,e)=>!Qt(s,e),Ke={attribute:!0,type:String,converter:ze,reflect:!1,useDefault:!1,hasChanged:$t};var gt,mt;(gt=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(mt=k.litPropertyMetadata)!=null||(k.litPropertyMetadata=new WeakMap);let H=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ke){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&es(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){var o;const{get:n,set:r}=(o=ts(this.prototype,e))!=null?o:{get(){return this[t]},set(c){this[t]=c}};return{get:n,set(c){const a=n==null?void 0:n.call(this);r==null||r.call(this,c),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:Ke}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const e=ns(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const t=this.properties,i=[...ss(t),...is(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Ze(n))}else e!==void 0&&t.push(Ze(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Kt(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:ze).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var r,o,c,a;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const h=i.getPropertyOptions(n),f=typeof h.converter=="function"?{fromAttribute:h.converter}:((r=h.converter)==null?void 0:r.fromAttribute)!==void 0?h.converter:ze;this._$Em=n,this[n]=(a=(c=f.fromAttribute(t,h.type))!=null?c:(o=this._$Ej)==null?void 0:o.get(n))!=null?a:null,this._$Em=null}}requestUpdate(e,t,i){var n,r;if(e!==void 0){const o=this.constructor,c=this[e];if(i!=null||(i=o.getPropertyOptions(e)),!(((n=i.hasChanged)!=null?n:$t)(c,t)||i.useDefault&&i.reflect&&c===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:r},o){var c,a,h;i&&!((c=this._$Ej)!=null?c:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(a=o!=null?o:t)!=null?a:this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&((h=this._$Eq)!=null?h:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,c]of this._$Ep)this[o]=c;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,c]of r){const{wrapped:a}=c,h=this[o];a!==!0||this._$AL.has(o)||h===void 0||this.C(o,void 0,c,h)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};var bt;H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[F("elementProperties")]=new Map,H[F("finalized")]=new Map,be==null||be({ReactiveElement:H}),((bt=k.reactiveElementVersions)!=null?bt:k.reactiveElementVersions=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,he=K.trustedTypes,Qe=he?he.createPolicy("lit-html",{createHTML:s=>s}):void 0,St="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,xt="?"+E,os=`<${xt}>`,D=document,ee=()=>D.createComment(""),te=s=>s===null||typeof s!="object"&&typeof s!="function",De=Array.isArray,cs=s=>De(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",_e=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,tt=/>/g,T=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,zt=/^(?:script|style|textarea|title)$/i,as=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),b=as(1),j=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),nt=new WeakMap,I=D.createTreeWalker(D,129);function Et(s,e){if(!De(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(e):e}const hs=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",o=Y;for(let c=0;c<t;c++){const a=s[c];let h,f,d=-1,p=0;for(;p<a.length&&(o.lastIndex=p,f=o.exec(a),f!==null);)p=o.lastIndex,o===Y?f[1]==="!--"?o=et:f[1]!==void 0?o=tt:f[2]!==void 0?(zt.test(f[2])&&(n=RegExp("</"+f[2],"g")),o=T):f[3]!==void 0&&(o=T):o===T?f[0]===">"?(o=n!=null?n:Y,d=-1):f[1]===void 0?d=-2:(d=o.lastIndex-f[2].length,h=f[1],o=f[3]===void 0?T:f[3]==='"'?it:st):o===it||o===st?o=T:o===et||o===tt?o=Y:(o=T,n=void 0);const u=o===T&&s[c+1].startsWith("/>")?" ":"";r+=o===Y?a+os:d>=0?(i.push(h),a.slice(0,d)+St+a.slice(d)+E+u):a+E+(d===-2?c:u)}return[Et(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class se{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const c=e.length-1,a=this.parts,[h,f]=hs(e,t);if(this.el=se.createElement(h,i),I.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=I.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(St)){const p=f[o++],u=n.getAttribute(d).split(E),l=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:l[2],strings:u,ctor:l[1]==="."?ls:l[1]==="?"?us:l[1]==="@"?fs:ge}),n.removeAttribute(d)}else d.startsWith(E)&&(a.push({type:6,index:r}),n.removeAttribute(d));if(zt.test(n.tagName)){const d=n.textContent.split(E),p=d.length-1;if(p>0){n.textContent=he?he.emptyScript:"";for(let u=0;u<p;u++)n.append(d[u],ee()),I.nextNode(),a.push({type:2,index:++r});n.append(d[p],ee())}}}else if(n.nodeType===8)if(n.data===xt)a.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(E,d+1))!==-1;)a.push({type:7,index:r}),d+=E.length-1}r++}}static createElement(e,t){const i=D.createElement("template");return i.innerHTML=e,i}}function N(s,e,t=s,i){var o,c,a;if(e===j)return e;let n=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=te(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,i)),i!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[i]=n:t._$Cl=n),n!==void 0&&(e=N(s,n._$AS(s,e.values),n,i)),e}class ds{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var h;const{el:{content:t},parts:i}=this._$AD,n=((h=e==null?void 0:e.creationScope)!=null?h:D).importNode(t,!0);I.currentNode=n;let r=I.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let f;a.type===2?f=new re(r,r.nextSibling,this,e):a.type===1?f=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(f=new ps(r,this,e)),this._$AV.push(f),a=i[++c]}o!==(a==null?void 0:a.index)&&(r=I.nextNode(),o++)}return I.currentNode=D,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class re{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,n){var r;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(r=n==null?void 0:n.isConnected)!=null?r:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),te(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==j&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):cs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&te(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=se.createElement(Et(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(t);else{const o=new ds(n,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=nt.get(e.strings);return t===void 0&&nt.set(e.strings,t=new se(e)),t}k(e){De(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new re(this.O(ee()),this.O(ee()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ge{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=N(this,e,t,0),o=!te(e)||e!==this._$AH&&e!==j,o&&(this._$AH=e);else{const c=e;let a,h;for(e=r[0],a=0;a<r.length-1;a++)h=N(this,c[i+a],t,a),h===j&&(h=this._$AH[a]),o||(o=!te(h)||h!==this._$AH[a]),h===_?e=_:e!==_&&(e+=(h!=null?h:"")+r[a+1]),this._$AH[a]=h}o&&!n&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ls extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class us extends ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class fs extends ge{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var o;if((e=(o=N(this,e,t,0))!=null?o:_)===j)return;const i=this._$AH,n=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==_&&(i===_||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}}class ps{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const ve=K.litHtmlPolyfillSupport;var _t;ve==null||ve(se,re),((_t=K.litHtmlVersions)!=null?_t:K.litHtmlVersions=[]).push("3.3.0");const qe=(s,e,t)=>{var r,o;const i=(r=t==null?void 0:t.renderBefore)!=null?r:e;let n=i._$litPart$;if(n===void 0){const c=(o=t==null?void 0:t.renderBefore)!=null?o:null;i._$litPart$=n=new re(e.insertBefore(ee(),c),c,void 0,t!=null?t:{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis;let S=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return j}};var vt;S._$litElement$=!0,S.finalized=!0,(vt=P.litElementHydrateSupport)==null||vt.call(P,{LitElement:S});const ye=P.litElementPolyfillSupport;ye==null||ye({LitElement:S});var yt;((yt=P.litElementVersions)!=null?yt:P.litElementVersions=[]).push("4.2.0");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ms={CHILD:2},bs=s=>(...e)=>({_$litDirective$:s,values:e});class _s{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const n of t)(i=n._$AO)==null||i.call(n,e,!1),Q(n,e);return!0},de=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},At=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),ws(e)}};function vs(s){this._$AN!==void 0?(de(this),this._$AM=s,At(this)):this._$AM=s}function ys(s,e=!1,t=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)Q(i[r],!1),de(i[r]);else i!=null&&(Q(i,!1),de(i));else Q(this,s)}const ws=s=>{var e,t;s.type==ms.CHILD&&((e=s._$AP)!=null||(s._$AP=ys),(t=s._$AQ)!=null||(s._$AQ=vs))};class $s extends _s{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),At(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),t&&(Q(this,e),de(this))}setValue(e){if(gs(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ss=()=>new xs;class xs{}const we=new WeakMap,zs=bs(class extends $s{render(s){return _}update(s,[e]){var i;const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(i=s.options)==null?void 0:i.host,this.rt(this.ct=s.element)),_}rt(s){var e;if(this.isConnected||(s=void 0),typeof this.G=="function"){const t=(e=this.ht)!=null?e:globalThis;let i=we.get(t);i===void 0&&(i=new WeakMap,we.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){var s,e,t;return typeof this.G=="function"?(e=we.get((s=this.ht)!=null?s:globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Es=ne`
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
    background-image: linear-gradient(90deg, rgb(0, 0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0, 0));
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
`;class As extends S{constructor(){super();w(this,"_onResize",t=>{t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[Es]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((i,n)=>n.width-i.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const i=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(i)}}render(){return b`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return b`
      ${this.screenSizes.map((t,i)=>b`
          <button
            @click="${this._setSelected}"
            id="${t.id}"
            data-index="${i+1}"
            ?data-selected="${this.selected===i+1}"
            ?hidden="${!this.showOverflowSize&&t.width>this.computedStyleWidth}"
            style="${this.widthInPercent?`width: calc(100% / ${i+1});`:`width: ${t.width}px;`}">
            <span>${t.id}</span>
          </button>
        `)}
    `}get _visualTextTpl(){return b`
      <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true">
        ${this.selectedSize.id}
      </span>
    `}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const i=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(i)}}window.customElements.define("blockquote-base-embedded-webview-size",As);const ks=ne`
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
        rgb(220, 220, 220, 0.2),
        rgb(220, 220, 220, 1) 50%,
        rgb(220, 220, 220, 0.2)
      )
    );
    --_resizer-bgimage-s-hover: var(
      --blockquote-base-embedded-webview-resize-resizer-bgcolor-hover,
      linear-gradient(
        90deg,
        rgb(220, 220, 220, 0.2),
        rgb(220, 220, 220, 1) 50%,
        rgb(220, 220, 220, 0.2)
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
`;class Cs extends S{constructor(){super();w(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[ks]}async connectedCallback(){var t,i,n,r,o,c,a,h,f,d,p,u,l;(t=super.connectedCallback)==null||t.call(this),await this.updateComplete,this.rect=(i=this.shadowRoot)==null?void 0:i.querySelector(".rect"),this.bottomRightResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-se"),this.bottomLeftResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(".resizer-sw"),this.rightResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-e"),this.leftResizerElement=(c=this.shadowRoot)==null?void 0:c.querySelector(".resizer-w"),this.bottomResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-s"),(h=this.leftResizerElement)==null||h.addEventListener("pointerdown",this._createResizerLeft),(f=this.rightResizerElement)==null||f.addEventListener("pointerdown",this._createResizerRight),(d=this.bottomResizerElement)==null||d.addEventListener("pointerdown",this._createResizerBottom),(p=this.bottomLeftResizerElement)==null||p.addEventListener("pointerdown",this._createResizerBottomLeft),(u=this.bottomRightResizerElement)==null||u.addEventListener("pointerdown",this._createResizerBottomRight),(l=this.bottomResizerElement)==null||l.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return b`
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
    `}_createResizer(t,i){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:n,pointerId:r,clientX:o,clientY:c}=i;n==null||n.setPointerCapture(r);const a=({clientX:f,clientY:d})=>{const p=Math.floor(f-o),u=Math.floor(d-c);this._resize({detail:{dx:p,dy:u}})};n==null||n.addEventListener("pointermove",a);const h=()=>{this.removeAttribute("resizing"),n==null||n.releasePointerCapture(r),n==null||n.removeEventListener("pointermove",a),n==null||n.removeEventListener("pointerup",h),this._dispatchResizeEvent()};n==null||n.addEventListener("pointerup",h)}_resize({detail:t}){let i,n;const r=Math.floor(t.dx*2.04),o=Math.floor(t.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",i=`${this._getBoundingClientRectWidth-r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"left":this._cursor="e",i=`${this._getBoundingClientRectWidth+r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"top":this._cursor="n",n=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",n);break;case"scaleTopLeft":this._cursor="ne",i=`${this._getBoundingClientRectWidth+r}px`,n=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",n);break;case"scaleTopRight":this._cursor="nw",i=`${this._getBoundingClientRectWidth-r}px`,n=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",n);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var i;return Math.abs(parseInt((i=this.rect)==null?void 0:i.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",Cs);const Ts=ne`
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
`;class Rs extends S{constructor(){super();w(this,"_onLoadElement",({target:t})=>{if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const i=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(i)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[Ts]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return b`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){qe(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return b`
      <slot name="embedded"></slot>
    `}_fetch(t){var i,n,r,o;t&&(Object.assign((i=this._embeddedElement)!=null?i:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((n=this._embeddedElement)!=null?n:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((o=(r=this._embeddedElement)==null?void 0:r.style)!=null?o:{},t.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",Rs);const Is=ne`
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
`,Os=b`
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
`,Ms=b`
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
`;class Ps extends S{constructor(){super();w(this,"_updateSize",({detail:t})=>{var i,n,r,o;(n=(i=this._embeddedResizeRef)==null?void 0:i.value)==null||n.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(o=(r=this._embeddedResizeRef)==null?void 0:r.value)==null||o.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=Os,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=Ss()}static get styles(){return[Is]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0,useDefault:!0}}}async connectedCallback(){var i,n;(i=super.connectedCallback)==null||i.call(this),await this.updateComplete,this.addEventListener("webviewresize",r=>{var c;const{detail:o}=r;Object.assign(this.__readDataPos,o),this.__resetResizing=!0,(o.cursor==="n"||o.cursor==="ne"||o.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((c=this._controlBottom)!=null?c:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(r=>{const{src:o="",option:c="",description:a=""}=r.dataset;return{src:o,option:c,description:a}}),this._src=this._sources[this.selected].src),this.embedded=(n=this.shadowRoot)==null?void 0:n.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return b`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){qe(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return b`
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
                ${this._sources.map((t,i)=>b`
                    <option ?selected="${this.selected===i}" value="${i}">
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
        <span aria-hidden="true">${Ms}</span>
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
        <blockquote-base-embedded-webview-resize ${zs(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return b`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",Ps);function Ds(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global}function qs(){const s=Ds();if(s.__xstate__)return s.__xstate__}const Ls=s=>{if(typeof window>"u")return;const e=qs();e&&e.register(s)};class rt{constructor(e){this._process=e,this._active=!1,this._current=null,this._last=null}start(){this._active=!0,this.flush()}clear(){this._current&&(this._current.next=null,this._last=this._current)}enqueue(e){const t={value:e,next:null};if(this._current){this._last.next=t,this._last=t;return}this._current=t,this._last=t,this._active&&this.flush()}flush(){for(;this._current;){const e=this._current;this._process(e.value),this._current=e.next}this._last=null}}const kt=".",Hs="",Ct="",Bs="#",Us="*",Tt="xstate.init",Ee="xstate.stop";function js(s,e){return{type:`xstate.after.${s}.${e}`}}function Ae(s,e){return{type:`xstate.done.state.${s}`,output:e}}function Ns(s,e){return{type:`xstate.done.actor.${s}`,output:e,actorId:s}}function Ws(s,e){return{type:`xstate.error.actor.${s}`,error:e,actorId:s}}function Rt(s){return{type:Tt,input:s}}function $(s){setTimeout(()=>{throw s})}const Gs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function It(s,e){const t=ot(s),i=ot(e);return typeof i=="string"?typeof t=="string"?i===t:!1:typeof t=="string"?t in i:Object.keys(t).every(n=>n in i?It(t[n],i[n]):!1)}function Le(s){if(Mt(s))return s;const e=[];let t="";for(let i=0;i<s.length;i++){switch(s.charCodeAt(i)){case 92:t+=s[i+1],i++;continue;case 46:e.push(t),t="";continue}t+=s[i]}return e.push(t),e}function ot(s){if(zi(s))return s.value;if(typeof s!="string")return s;const e=Le(s);return Js(e)}function Js(s){if(s.length===1)return s[0];const e={};let t=e;for(let i=0;i<s.length-1;i++)if(i===s.length-2)t[s[i]]=s[i+1];else{const n=t;t={},n[s[i]]=t}return e}function ct(s,e){const t={},i=Object.keys(s);for(let n=0;n<i.length;n++){const r=i[n];t[r]=e(s[r],r,s,n)}return t}function Ot(s){return Mt(s)?s:[s]}function A(s){return s===void 0?[]:Ot(s)}function ke(s,e,t,i){return typeof s=="function"?s({context:e,event:t,self:i}):s}function Mt(s){return Array.isArray(s)}function Vs(s){return s.type.startsWith("xstate.error.actor")}function B(s){return Ot(s).map(e=>typeof e>"u"||typeof e=="string"?{target:e}:e)}function Pt(s){if(!(s===void 0||s===Hs))return A(s)}function Ce(s,e,t){var r,o,c;const i=typeof s=="object",n=i?s:void 0;return{next:(r=i?s.next:s)==null?void 0:r.bind(n),error:(o=i?s.error:e)==null?void 0:o.bind(n),complete:(c=i?s.complete:t)==null?void 0:c.bind(n)}}function at(s,e){return`${e}.${s}`}function He(s,e){const t=e.match(/^xstate\.invoke\.(\d+)\.(.*)/);if(!t)return s.implementations.actors[e];const[,i,n]=t,o=s.getStateNodeById(n).config.invoke;return(Array.isArray(o)?o[i]:o).src}function ht(s,e){return`${s.sessionId}.${e}`}let Ys=0;function Xs(s,e){var p;const t=new Map,i=new Map,n=new WeakMap,r=new Set,o={},{clock:c,logger:a}=e,h={schedule:(u,l,g,m,y=Math.random().toString(36).slice(2))=>{const x={source:u,target:l,event:g,delay:m,id:y,startedAt:Date.now()},z=ht(u,y);d._snapshot._scheduledEvents[z]=x;const Vt=c.setTimeout(()=>{delete o[z],delete d._snapshot._scheduledEvents[z],d._relay(u,l,g)},m);o[z]=Vt},cancel:(u,l)=>{const g=ht(u,l),m=o[g];delete o[g],delete d._snapshot._scheduledEvents[g],m!==void 0&&c.clearTimeout(m)},cancelAll:u=>{for(const l in d._snapshot._scheduledEvents){const g=d._snapshot._scheduledEvents[l];g.source===u&&h.cancel(u,g.id)}}},f=u=>{if(!r.size)return;const l={...u,rootId:s.sessionId};r.forEach(g=>{var m;return(m=g.next)==null?void 0:m.call(g,l)})},d={_snapshot:{_scheduledEvents:(p=(e==null?void 0:e.snapshot)&&e.snapshot.scheduler)!=null?p:{}},_bookId:()=>`x:${Ys++}`,_register:(u,l)=>(t.set(u,l),u),_unregister:u=>{t.delete(u.sessionId);const l=n.get(u);l!==void 0&&(i.delete(l),n.delete(u))},get:u=>i.get(u),_set:(u,l)=>{const g=i.get(u);if(g&&g!==l)throw new Error(`Actor with system ID '${u}' already exists.`);i.set(u,l),n.set(l,u)},inspect:u=>{const l=Ce(u);return r.add(l),{unsubscribe(){r.delete(l)}}},_sendInspectionEvent:f,_relay:(u,l,g)=>{d._sendInspectionEvent({type:"@xstate.event",sourceRef:u,actorRef:l,event:g}),l._send(g)},scheduler:h,getSnapshot:()=>({_scheduledEvents:{...d._snapshot._scheduledEvents}}),start:()=>{const u=d._snapshot._scheduledEvents;d._snapshot._scheduledEvents={};for(const l in u){const{source:g,target:m,event:y,delay:x,id:z}=u[l];h.schedule(g,m,y,x,z)}},_clock:c,_logger:a};return d}let $e=!1;const Be=1;let v=function(s){return s[s.NotStarted=0]="NotStarted",s[s.Running=1]="Running",s[s.Stopped=2]="Stopped",s}({});const Zs={clock:{setTimeout:(s,e)=>setTimeout(s,e),clearTimeout:s=>clearTimeout(s)},logger:console.log.bind(console),devTools:!1};class Fs{constructor(e,t){var d,p,u,l;this.logic=e,this._snapshot=void 0,this.clock=void 0,this.options=void 0,this.id=void 0,this.mailbox=new rt(this._process.bind(this)),this.observers=new Set,this.eventListeners=new Map,this.logger=void 0,this._processingStatus=v.NotStarted,this._parent=void 0,this._syncSnapshot=void 0,this.ref=void 0,this._actorScope=void 0,this._systemId=void 0,this.sessionId=void 0,this.system=void 0,this._doneEvent=void 0,this.src=void 0,this._deferred=[];const i={...Zs,...t},{clock:n,logger:r,parent:o,syncSnapshot:c,id:a,systemId:h,inspect:f}=i;this.system=o?o.system:Xs(this,{clock:n,logger:r}),f&&!o&&this.system.inspect(Ce(f)),this.sessionId=this.system._bookId(),this.id=a!=null?a:this.sessionId,this.logger=(d=t==null?void 0:t.logger)!=null?d:this.system._logger,this.clock=(p=t==null?void 0:t.clock)!=null?p:this.system._clock,this._parent=o,this._syncSnapshot=c,this.options=i,this.src=(u=i.src)!=null?u:e,this.ref=this,this._actorScope={self:this,id:this.id,sessionId:this.sessionId,logger:this.logger,defer:g=>{this._deferred.push(g)},system:this.system,stopChild:g=>{if(g._parent!==this)throw new Error(`Cannot stop child actor ${g.id} of ${this.id} because it is not a child`);g._stop()},emit:g=>{const m=this.eventListeners.get(g.type),y=this.eventListeners.get("*");if(!m&&!y)return;const x=[...m?m.values():[],...y?y.values():[]];for(const z of x)z(g)},actionExecutor:g=>{const m=()=>{if(this._actorScope.system._sendInspectionEvent({type:"@xstate.action",actorRef:this,action:{type:g.type,params:g.params}}),!g.exec)return;const y=$e;try{$e=!0,g.exec(g.info,g.params)}finally{$e=y}};this._processingStatus===v.Running?m():this._deferred.push(m)}},this.send=this.send.bind(this),this.system._sendInspectionEvent({type:"@xstate.actor",actorRef:this}),h&&(this._systemId=h,this.system._set(h,this)),this._initState((l=t==null?void 0:t.snapshot)!=null?l:t==null?void 0:t.state),h&&this._snapshot.status!=="active"&&this.system._unregister(this)}_initState(e){var t;try{this._snapshot=e?this.logic.restoreSnapshot?this.logic.restoreSnapshot(e,this._actorScope):e:this.logic.getInitialSnapshot(this._actorScope,(t=this.options)==null?void 0:t.input)}catch(i){this._snapshot={status:"error",output:void 0,error:i}}}update(e,t){var n,r;this._snapshot=e;let i;for(;i=this._deferred.shift();)try{i()}catch(o){this._deferred.length=0,this._snapshot={...e,status:"error",error:o}}switch(this._snapshot.status){case"active":for(const o of this.observers)try{(n=o.next)==null||n.call(o,e)}catch(c){$(c)}break;case"done":for(const o of this.observers)try{(r=o.next)==null||r.call(o,e)}catch(c){$(c)}this._stopProcedure(),this._complete(),this._doneEvent=Ns(this.id,this._snapshot.output),this._parent&&this.system._relay(this,this._parent,this._doneEvent);break;case"error":this._error(this._snapshot.error);break}this.system._sendInspectionEvent({type:"@xstate.snapshot",actorRef:this,event:t,snapshot:e})}subscribe(e,t,i){var r;const n=Ce(e,t,i);if(this._processingStatus!==v.Stopped)this.observers.add(n);else switch(this._snapshot.status){case"done":try{(r=n.complete)==null||r.call(n)}catch(o){$(o)}break;case"error":{const o=this._snapshot.error;if(!n.error)$(o);else try{n.error(o)}catch(c){$(c)}break}}return{unsubscribe:()=>{this.observers.delete(n)}}}on(e,t){let i=this.eventListeners.get(e);i||(i=new Set,this.eventListeners.set(e,i));const n=t.bind(void 0);return i.add(n),{unsubscribe:()=>{i.delete(n)}}}start(){if(this._processingStatus===v.Running)return this;this._syncSnapshot&&this.subscribe({next:i=>{i.status==="active"&&this.system._relay(this,this._parent,{type:`xstate.snapshot.${this.id}`,snapshot:i})},error:()=>{}}),this.system._register(this.sessionId,this),this._systemId&&this.system._set(this._systemId,this),this._processingStatus=v.Running;const e=Rt(this.options.input);switch(this.system._sendInspectionEvent({type:"@xstate.event",sourceRef:this._parent,actorRef:this,event:e}),this._snapshot.status){case"done":return this.update(this._snapshot,e),this;case"error":return this._error(this._snapshot.error),this}if(this._parent||this.system.start(),this.logic.start)try{this.logic.start(this._snapshot,this._actorScope)}catch(i){return this._snapshot={...this._snapshot,status:"error",error:i},this._error(i),this}return this.update(this._snapshot,e),this.options.devTools&&this.attachDevTools(),this.mailbox.start(),this}_process(e){let t,i;try{t=this.logic.transition(this._snapshot,e,this._actorScope)}catch(n){i={err:n}}if(i){const{err:n}=i;this._snapshot={...this._snapshot,status:"error",error:n},this._error(n);return}this.update(t,e),e.type===Ee&&(this._stopProcedure(),this._complete())}_stop(){return this._processingStatus===v.Stopped?this:(this.mailbox.clear(),this._processingStatus===v.NotStarted?(this._processingStatus=v.Stopped,this):(this.mailbox.enqueue({type:Ee}),this))}stop(){if(this._parent)throw new Error("A non-root actor cannot be stopped directly.");return this._stop()}_complete(){var e;for(const t of this.observers)try{(e=t.complete)==null||e.call(t)}catch(i){$(i)}this.observers.clear()}_reportError(e){if(!this.observers.size){this._parent||$(e);return}let t=!1;for(const i of this.observers){const n=i.error;t||(t=!n);try{n==null||n(e)}catch(r){$(r)}}this.observers.clear(),t&&$(e)}_error(e){this._stopProcedure(),this._reportError(e),this._parent&&this.system._relay(this,this._parent,Ws(this.id,e))}_stopProcedure(){return this._processingStatus!==v.Running?this:(this.system.scheduler.cancelAll(this),this.mailbox.clear(),this.mailbox=new rt(this._process.bind(this)),this._processingStatus=v.Stopped,this.system._unregister(this),this)}_send(e){this._processingStatus!==v.Stopped&&this.mailbox.enqueue(e)}send(e){this.system._relay(void 0,this,e)}attachDevTools(){const{devTools:e}=this.options;e&&(typeof e=="function"?e:Ls)(this)}toJSON(){return{xstate$$type:Be,id:this.id}}getPersistedSnapshot(e){return this.logic.getPersistedSnapshot(this._snapshot,e)}[Gs](){return this}getSnapshot(){return this._snapshot}}function ie(s,...[e]){return new Fs(s,e)}function Ks(s,e,t,i,{sendId:n}){const r=typeof n=="function"?n(t,i):n;return[e,{sendId:r},void 0]}function Qs(s,e){s.defer(()=>{s.system.scheduler.cancel(s.self,e.sendId)})}function ei(s){function e(t,i){}return e.type="xstate.cancel",e.sendId=s,e.resolve=Ks,e.execute=Qs,e}function ti(s,e,t,i,{id:n,systemId:r,src:o,input:c,syncSnapshot:a}){const h=typeof o=="string"?He(e.machine,o):o,f=typeof n=="function"?n(t):n;let d,p;return h&&(p=typeof c=="function"?c({context:e.context,event:t.event,self:s.self}):c,d=ie(h,{id:f,src:o,parent:s.self,syncSnapshot:a,systemId:r,input:p})),[q(e,{children:{...e.children,[f]:d}}),{id:n,systemId:r,actorRef:d,src:o,input:p},void 0]}function si(s,{actorRef:e}){e&&s.defer(()=>{e._processingStatus!==v.Stopped&&e.start()})}function ii(...[s,{id:e,systemId:t,input:i,syncSnapshot:n=!1}={}]){function r(o,c){}return r.type="xstate.spawnChild",r.id=e,r.systemId=t,r.src=s,r.input=i,r.syncSnapshot=n,r.resolve=ti,r.execute=si,r}function ni(s,e,t,i,{actorRef:n}){const r=typeof n=="function"?n(t,i):n,o=typeof r=="string"?e.children[r]:r;let c=e.children;return o&&(c={...c},delete c[o.id]),[q(e,{children:c}),o,void 0]}function ri(s,e){if(e){if(s.system._unregister(e),e._processingStatus!==v.Running){s.stopChild(e);return}s.defer(()=>{s.stopChild(e)})}}function Dt(s){function e(t,i){}return e.type="xstate.stopChild",e.actorRef=s,e.resolve=ni,e.execute=ri,e}function Ue(s,e,t,i){const{machine:n}=i,r=typeof s=="function",o=r?s:n.implementations.guards[typeof s=="string"?s:s.type];if(!r&&!o)throw new Error(`Guard '${typeof s=="string"?s:s.type}' is not implemented.'.`);if(typeof o!="function")return Ue(o,e,t,i);const c={context:e,event:t},a=r||typeof s=="string"?void 0:"params"in s?typeof s.params=="function"?s.params({context:e,event:t}):s.params:void 0;return"check"in o?o.check(i,c,o):o(c,a)}const je=s=>s.type==="atomic"||s.type==="final";function W(s){return Object.values(s.states).filter(e=>e.type!=="history")}function oe(s,e){const t=[];if(e===s)return t;let i=s.parent;for(;i&&i!==e;)t.push(i),i=i.parent;return t}function le(s){const e=new Set(s),t=Lt(e);for(const i of e)if(i.type==="compound"&&(!t.get(i)||!t.get(i).length))dt(i).forEach(n=>e.add(n));else if(i.type==="parallel"){for(const n of W(i))if(n.type!=="history"&&!e.has(n)){const r=dt(n);for(const o of r)e.add(o)}}for(const i of e){let n=i.parent;for(;n;)e.add(n),n=n.parent}return e}function qt(s,e){const t=e.get(s);if(!t)return{};if(s.type==="compound"){const n=t[0];if(n){if(je(n))return n.key}else return{}}const i={};for(const n of t)i[n.key]=qt(n,e);return i}function Lt(s){const e=new Map;for(const t of s)e.has(t)||e.set(t,[]),t.parent&&(e.has(t.parent)||e.set(t.parent,[]),e.get(t.parent).push(t));return e}function Ht(s,e){const t=le(e);return qt(s,Lt(t))}function Ne(s,e){return e.type==="compound"?W(e).some(t=>t.type==="final"&&s.has(t)):e.type==="parallel"?W(e).every(t=>Ne(s,t)):e.type==="final"}const me=s=>s[0]===Bs;function oi(s,e){return s.transitions.get(e)||[...s.transitions.keys()].filter(i=>{if(i===Us)return!0;if(!i.endsWith(".*"))return!1;const n=i.split("."),r=e.split(".");for(let o=0;o<n.length;o++){const c=n[o],a=r[o];if(c==="*")return o===n.length-1;if(c!==a)return!1}return!0}).sort((i,n)=>n.length-i.length).flatMap(i=>s.transitions.get(i))}function ci(s){const e=s.config.after;if(!e)return[];const t=n=>{const r=js(n,s.id),o=r.type;return s.entry.push(Pi(r,{id:o,delay:n})),s.exit.push(ei(o)),o};return Object.keys(e).flatMap(n=>{const r=e[n],o=typeof r=="string"?{target:r}:r,c=Number.isNaN(+n)?n:+n,a=t(c);return A(o).map(h=>({...h,event:a,delay:c}))}).map(n=>{const{delay:r}=n;return{...R(s,n.event,n),delay:r}})}function R(s,e,t){var c;const i=Pt(t.target),n=(c=t.reenter)!=null?c:!1,r=di(s,i),o={...t,actions:A(t.actions),guard:t.guard,target:r,source:s,reenter:n,eventType:e,toJSON:()=>({...o,source:`#${s.id}`,target:r?r.map(a=>`#${a.id}`):void 0})};return o}function ai(s){const e=new Map;if(s.config.on)for(const t of Object.keys(s.config.on)){if(t===Ct)throw new Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');const i=s.config.on[t];e.set(t,B(i).map(n=>R(s,t,n)))}if(s.config.onDone){const t=`xstate.done.state.${s.id}`;e.set(t,B(s.config.onDone).map(i=>R(s,t,i)))}for(const t of s.invoke){if(t.onDone){const i=`xstate.done.actor.${t.id}`;e.set(i,B(t.onDone).map(n=>R(s,i,n)))}if(t.onError){const i=`xstate.error.actor.${t.id}`;e.set(i,B(t.onError).map(n=>R(s,i,n)))}if(t.onSnapshot){const i=`xstate.snapshot.${t.id}`;e.set(i,B(t.onSnapshot).map(n=>R(s,i,n)))}}for(const t of s.after){let i=e.get(t.eventType);i||(i=[],e.set(t.eventType,i)),i.push(t)}return e}function hi(s,e){const t=typeof e=="string"?s.states[e]:e?s.states[e.target]:void 0;if(!t&&e)throw new Error(`Initial state node "${e}" not found on parent state node #${s.id}`);const i={source:s,actions:!e||typeof e=="string"?[]:A(e.actions),eventType:null,reenter:!1,target:t?[t]:[],toJSON:()=>({...i,source:`#${s.id}`,target:t?[`#${t.id}`]:[]})};return i}function di(s,e){if(e!==void 0)return e.map(t=>{if(typeof t!="string")return t;if(me(t))return s.machine.getStateNodeById(t);const i=t[0]===kt;if(i&&!s.parent)return ue(s,t.slice(1));const n=i?s.key+t:t;if(s.parent)try{return ue(s.parent,n)}catch(r){throw new Error(`Invalid transition definition for state node '${s.id}':
${r.message}`)}else throw new Error(`Invalid target: "${t}" is not a valid target from the root node. Did you mean ".${t}"?`)})}function Bt(s){const e=Pt(s.config.target);return e?{target:e.map(t=>typeof t=="string"?ue(s.parent,t):t)}:s.parent.initial}function O(s){return s.type==="history"}function dt(s){const e=Ut(s);for(const t of e)for(const i of oe(t,s))e.add(i);return e}function Ut(s){const e=new Set;function t(i){if(!e.has(i)){if(e.add(i),i.type==="compound")t(i.initial.target[0]);else if(i.type==="parallel")for(const n of W(i))t(n)}}return t(s),e}function G(s,e){if(me(e))return s.machine.getStateNodeById(e);if(!s.states)throw new Error(`Unable to retrieve child state '${e}' from '${s.id}'; no child states exist.`);const t=s.states[e];if(!t)throw new Error(`Child state '${e}' does not exist on '${s.id}'`);return t}function ue(s,e){if(typeof e=="string"&&me(e))try{return s.machine.getStateNodeById(e)}catch{}const t=Le(e).slice();let i=s;for(;t.length;){const n=t.shift();if(!n.length)break;i=G(i,n)}return i}function fe(s,e){if(typeof e=="string"){const n=s.states[e];if(!n)throw new Error(`State '${e}' does not exist on '${s.id}'`);return[s,n]}const t=Object.keys(e),i=t.map(n=>G(s,n)).filter(Boolean);return[s.machine.root,s].concat(i,t.reduce((n,r)=>{const o=G(s,r);if(!o)return n;const c=fe(o,e[r]);return n.concat(c)},[]))}function li(s,e,t,i){const r=G(s,e).next(t,i);return!r||!r.length?s.next(t,i):r}function ui(s,e,t,i){const n=Object.keys(e),r=G(s,n[0]),o=We(r,e[n[0]],t,i);return!o||!o.length?s.next(t,i):o}function fi(s,e,t,i){const n=[];for(const r of Object.keys(e)){const o=e[r];if(!o)continue;const c=G(s,r),a=We(c,o,t,i);a&&n.push(...a)}return n.length?n:s.next(t,i)}function We(s,e,t,i){return typeof e=="string"?li(s,e,t,i):Object.keys(e).length===1?ui(s,e,t,i):fi(s,e,t,i)}function pi(s){return Object.keys(s.states).map(e=>s.states[e]).filter(e=>e.type==="history")}function C(s,e){let t=s;for(;t.parent&&t.parent!==e;)t=t.parent;return t.parent===e}function gi(s,e){const t=new Set(s),i=new Set(e);for(const n of t)if(i.has(n))return!0;for(const n of i)if(t.has(n))return!0;return!1}function jt(s,e,t){const i=new Set;for(const n of s){let r=!1;const o=new Set;for(const c of i)if(gi(Te([n],e,t),Te([c],e,t)))if(C(n.source,c.source))o.add(c);else{r=!0;break}if(!r){for(const c of o)i.delete(c);i.add(n)}}return Array.from(i)}function mi(s){const[e,...t]=s;for(const i of oe(e,void 0))if(t.every(n=>C(n,i)))return i}function Ge(s,e){if(!s.target)return[];const t=new Set;for(const i of s.target)if(O(i))if(e[i.id])for(const n of e[i.id])t.add(n);else for(const n of Ge(Bt(i),e))t.add(n);else t.add(i);return[...t]}function Nt(s,e){const t=Ge(s,e);if(!t)return;if(!s.reenter&&t.every(n=>n===s.source||C(n,s.source)))return s.source;const i=mi(t.concat(s.source));if(i)return i;if(!s.reenter)return s.source.machine.root}function Te(s,e,t){var n;const i=new Set;for(const r of s)if((n=r.target)!=null&&n.length){const o=Nt(r,t);r.reenter&&r.source===o&&i.add(o);for(const c of e)C(c,o)&&i.add(c)}return[...i]}function bi(s,e){if(s.length!==e.size)return!1;for(const t of s)if(!e.has(t))return!1;return!0}function Re(s,e,t,i,n,r){if(!s.length)return e;const o=new Set(e._nodes);let c=e.historyValue;const a=jt(s,o,c);let h=e;n||([h,c]=wi(h,i,t,a,o,c,r,t.actionExecutor)),h=J(h,i,t,a.flatMap(d=>d.actions),r,void 0),h=vi(h,i,t,a,o,r,c,n);const f=[...o];h.status==="done"&&(h=J(h,i,t,f.sort((d,p)=>p.order-d.order).flatMap(d=>d.exit),r,void 0));try{return c===e.historyValue&&bi(e._nodes,o)?h:q(h,{_nodes:f,historyValue:c})}catch(d){throw d}}function _i(s,e,t,i,n){if(i.output===void 0)return;const r=Ae(n.id,n.output!==void 0&&n.parent?ke(n.output,s.context,e,t.self):void 0);return ke(i.output,s.context,r,t.self)}function vi(s,e,t,i,n,r,o,c){let a=s;const h=new Set,f=new Set;yi(i,o,f,h),c&&f.add(s.machine.root);const d=new Set;for(const p of[...h].sort((u,l)=>u.order-l.order)){n.add(p);const u=[];u.push(...p.entry);for(const l of p.invoke)u.push(ii(l.src,{...l,syncSnapshot:!!l.onSnapshot}));if(f.has(p)){const l=p.initial.actions;u.push(...l)}if(a=J(a,e,t,u,r,p.invoke.map(l=>l.id)),p.type==="final"){const l=p.parent;let g=(l==null?void 0:l.type)==="parallel"?l:l==null?void 0:l.parent,m=g||p;for((l==null?void 0:l.type)==="compound"&&r.push(Ae(l.id,p.output!==void 0?ke(p.output,a.context,e,t.self):void 0));(g==null?void 0:g.type)==="parallel"&&!d.has(g)&&Ne(n,g);)d.add(g),r.push(Ae(g.id)),m=g,g=g.parent;if(g)continue;a=q(a,{status:"done",output:_i(a,e,t,a.machine.root,m)})}}return a}function yi(s,e,t,i){for(const n of s){const r=Nt(n,e);for(const c of n.target||[])!O(c)&&(n.source!==c||n.source!==r||n.reenter)&&(i.add(c),t.add(c)),U(c,e,t,i);const o=Ge(n,e);for(const c of o){const a=oe(c,r);(r==null?void 0:r.type)==="parallel"&&a.push(r),Wt(i,e,t,a,!n.source.parent&&n.reenter?void 0:r)}}}function U(s,e,t,i){var n;if(O(s))if(e[s.id]){const r=e[s.id];for(const o of r)i.add(o),U(o,e,t,i);for(const o of r)Se(o,s.parent,i,e,t)}else{const r=Bt(s);for(const o of r.target)i.add(o),r===((n=s.parent)==null?void 0:n.initial)&&t.add(s.parent),U(o,e,t,i);for(const o of r.target)Se(o,s.parent,i,e,t)}else if(s.type==="compound"){const[r]=s.initial.target;O(r)||(i.add(r),t.add(r)),U(r,e,t,i),Se(r,s,i,e,t)}else if(s.type==="parallel")for(const r of W(s).filter(o=>!O(o)))[...i].some(o=>C(o,r))||(O(r)||(i.add(r),t.add(r)),U(r,e,t,i))}function Wt(s,e,t,i,n){for(const r of i)if((!n||C(r,n))&&s.add(r),r.type==="parallel")for(const o of W(r).filter(c=>!O(c)))[...s].some(c=>C(c,o))||(s.add(o),U(o,e,t,s))}function Se(s,e,t,i,n){Wt(t,i,n,oe(s,e))}function wi(s,e,t,i,n,r,o,c){let a=s;const h=Te(i,n,r);h.sort((d,p)=>p.order-d.order);let f;for(const d of h)for(const p of pi(d)){let u;p.history==="deep"?u=l=>je(l)&&C(l,d):u=l=>l.parent===d,f!=null||(f={...r}),f[p.id]=Array.from(n).filter(u)}for(const d of h)a=J(a,e,t,[...d.exit,...d.invoke.map(p=>Dt(p.id))],o,void 0),n.delete(d);return[a,f||r]}function $i(s,e){return s.implementations.actions[e]}function Gt(s,e,t,i,n,r){const{machine:o}=s;let c=s;for(const a of i){const h=typeof a=="function",f=h?a:$i(o,typeof a=="string"?a:a.type),d={context:c.context,event:e,self:t.self,system:t.system},p=h||typeof a=="string"?void 0:"params"in a?typeof a.params=="function"?a.params({context:c.context,event:e}):a.params:void 0;if(!f||!("resolve"in f)){t.actionExecutor({type:typeof a=="string"?a:typeof a=="object"?a.type:a.name||"(anonymous)",info:d,params:p,exec:f});continue}const u=f,[l,g,m]=u.resolve(t,c,d,p,f,n);c=l,"retryResolve"in u&&(r==null||r.push([u,g])),"execute"in u&&t.actionExecutor({type:u.type,info:d,params:g,exec:u.execute.bind(null,t,g)}),m&&(c=Gt(c,e,t,m,n,r))}return c}function J(s,e,t,i,n,r){const o=r?[]:void 0,c=Gt(s,e,t,i,{internalQueue:n,deferredActorIds:r},o);return o==null||o.forEach(([a,h])=>{a.retryResolve(t,c,h)}),c}function xe(s,e,t,i){let n=s;const r=[];function o(h,f,d){t.system._sendInspectionEvent({type:"@xstate.microstep",actorRef:t.self,event:f,snapshot:h,_transitions:d}),r.push(h)}if(e.type===Ee)return n=q(lt(n,e,t),{status:"stopped"}),o(n,e,[]),{snapshot:n,microstates:r};let c=e;if(c.type!==Tt){const h=c,f=Vs(h),d=ut(h,n);if(f&&!d.length)return n=q(s,{status:"error",error:h.error}),o(n,h,[]),{snapshot:n,microstates:r};n=Re(d,s,t,c,!1,i),o(n,h,d)}let a=!0;for(;n.status==="active";){let h=a?Si(n,c):[];const f=h.length?n:void 0;if(!h.length){if(!i.length)break;c=i.shift(),h=ut(c,n)}n=Re(h,n,t,c,!1,i),a=n!==f,o(n,c,h)}return n.status!=="active"&&lt(n,c,t),{snapshot:n,microstates:r}}function lt(s,e,t){return J(s,e,t,Object.values(s.children).map(i=>Dt(i)),[],void 0)}function ut(s,e){return e.machine.getTransitionData(e,s)}function Si(s,e){const t=new Set,i=s._nodes.filter(je);for(const n of i)e:for(const r of[n].concat(oe(n,void 0)))if(r.always){for(const o of r.always)if(o.guard===void 0||Ue(o.guard,s.context,e,s)){t.add(o);break e}}return jt(Array.from(t),new Set(s._nodes),s.historyValue)}function xi(s,e){const t=le(fe(s,e));return Ht(s,[...t])}function zi(s){return!!s&&typeof s=="object"&&"machine"in s&&"value"in s}const Ei=function(e){return It(e,this.value)},Ai=function(e){return this.tags.has(e)},ki=function(e){const t=this.machine.getTransitionData(this,e);return!!(t!=null&&t.length)&&t.some(i=>i.target!==void 0||i.actions.length)},Ci=function(){const{_nodes:e,tags:t,machine:i,getMeta:n,toJSON:r,can:o,hasTag:c,matches:a,...h}=this;return{...h,tags:Array.from(t)}},Ti=function(){return this._nodes.reduce((e,t)=>(t.meta!==void 0&&(e[t.id]=t.meta),e),{})};function ae(s,e){return{status:s.status,output:s.output,error:s.error,machine:e,context:s.context,_nodes:s._nodes,value:Ht(e.root,s._nodes),tags:new Set(s._nodes.flatMap(t=>t.tags)),children:s.children,historyValue:s.historyValue||{},matches:Ei,hasTag:Ai,can:ki,getMeta:Ti,toJSON:Ci}}function q(s,e={}){return ae({...s,...e},s.machine)}function Ri(s){if(typeof s!="object"||s===null)return{};const e={};for(const t in s){const i=s[t];Array.isArray(i)&&(e[t]=i.map(n=>({id:n.id})))}return e}function Ii(s,e){const{_nodes:t,tags:i,machine:n,children:r,context:o,can:c,hasTag:a,matches:h,getMeta:f,toJSON:d,...p}=s,u={};for(const g in r){const m=r[g];u[g]={snapshot:m.getPersistedSnapshot(e),src:m.src,systemId:m._systemId,syncSnapshot:m._syncSnapshot}}return{...p,context:Jt(o),children:u,historyValue:Ri(p.historyValue)}}function Jt(s){let e;for(const t in s){const i=s[t];if(i&&typeof i=="object")if("sessionId"in i&&"send"in i&&"ref"in i)e!=null||(e=Array.isArray(s)?s.slice():{...s}),e[t]={xstate$$type:Be,id:i.id};else{const n=Jt(i);n!==i&&(e!=null||(e=Array.isArray(s)?s.slice():{...s}),e[t]=n)}}return e!=null?e:s}function Oi(s,e,t,i,{event:n,id:r,delay:o},{internalQueue:c}){const a=e.machine.implementations.delays;if(typeof n=="string")throw new Error(`Only event objects may be used with raise; use raise({ type: "${n}" }) instead`);const h=typeof n=="function"?n(t,i):n;let f;if(typeof o=="string"){const d=a&&a[o];f=typeof d=="function"?d(t,i):d}else f=typeof o=="function"?o(t,i):o;return typeof f!="number"&&c.push(h),[e,{event:h,id:r,delay:f},void 0]}function Mi(s,e){const{event:t,delay:i,id:n}=e;if(typeof i=="number"){s.defer(()=>{const r=s.self;s.system.scheduler.schedule(r,r,t,i,n)});return}}function Pi(s,e){function t(i,n){}return t.type="xstate.raise",t.event=s,t.id=e==null?void 0:e.id,t.delay=e==null?void 0:e.delay,t.resolve=Oi,t.execute=Mi,t}function Di(s,{machine:e,context:t},i,n){const r=(o,c)=>{if(typeof o=="string"){const a=He(e,o);if(!a)throw new Error(`Actor logic '${o}' not implemented in machine '${e.id}'`);const h=ie(a,{id:c==null?void 0:c.id,parent:s.self,syncSnapshot:c==null?void 0:c.syncSnapshot,input:typeof(c==null?void 0:c.input)=="function"?c.input({context:t,event:i,self:s.self}):c==null?void 0:c.input,src:o,systemId:c==null?void 0:c.systemId});return n[h.id]=h,h}else return ie(o,{id:c==null?void 0:c.id,parent:s.self,syncSnapshot:c==null?void 0:c.syncSnapshot,input:c==null?void 0:c.input,src:o,systemId:c==null?void 0:c.systemId})};return(o,c)=>{const a=r(o,c);return n[a.id]=a,s.defer(()=>{a._processingStatus!==v.Stopped&&a.start()}),a}}function qi(s,e,t,i,{assignment:n}){if(!e.context)throw new Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");const r={},o={context:e.context,event:t.event,spawn:Di(s,e,t.event,r),self:s.self,system:s.system};let c={};if(typeof n=="function")c=n(o,i);else for(const h of Object.keys(n)){const f=n[h];c[h]=typeof f=="function"?f(o,i):f}const a=Object.assign({},e.context,c);return[q(e,{context:a,children:Object.keys(r).length?{...e.children,...r}:e.children}),void 0,void 0]}function Ie(s){function e(t,i){}return e.type="xstate.assign",e.assignment=s,e.resolve=qi,e}const ft=new WeakMap;function L(s,e,t){let i=ft.get(s);return i?e in i||(i[e]=t()):(i={[e]:t()},ft.set(s,i)),i[e]}const Li={},X=s=>typeof s=="string"?{type:s}:typeof s=="function"?"resolve"in s?{type:s.type}:{type:s.name}:s;class pe{constructor(e,t){if(this.config=e,this.key=void 0,this.id=void 0,this.type=void 0,this.path=void 0,this.states=void 0,this.history=void 0,this.entry=void 0,this.exit=void 0,this.parent=void 0,this.machine=void 0,this.meta=void 0,this.output=void 0,this.order=-1,this.description=void 0,this.tags=[],this.transitions=void 0,this.always=void 0,this.parent=t._parent,this.key=t._key,this.machine=t._machine,this.path=this.parent?this.parent.path.concat(this.key):[],this.id=this.config.id||[this.machine.id,...this.path].join(kt),this.type=this.config.type||(this.config.states&&Object.keys(this.config.states).length?"compound":this.config.history?"history":"atomic"),this.description=this.config.description,this.order=this.machine.idMap.size,this.machine.idMap.set(this.id,this),this.states=this.config.states?ct(this.config.states,(i,n)=>new pe(i,{_parent:this,_key:n,_machine:this.machine})):Li,this.type==="compound"&&!this.config.initial)throw new Error(`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`);this.history=this.config.history===!0?"shallow":this.config.history||!1,this.entry=A(this.config.entry).slice(),this.exit=A(this.config.exit).slice(),this.meta=this.config.meta,this.output=this.type==="final"||!this.parent?this.config.output:void 0,this.tags=A(e.tags).slice()}_initialize(){this.transitions=ai(this),this.config.always&&(this.always=B(this.config.always).map(e=>R(this,Ct,e))),Object.keys(this.states).forEach(e=>{this.states[e]._initialize()})}get definition(){return{id:this.id,key:this.key,version:this.machine.version,type:this.type,initial:this.initial?{target:this.initial.target,source:this,actions:this.initial.actions.map(X),eventType:null,reenter:!1,toJSON:()=>({target:this.initial.target.map(e=>`#${e.id}`),source:`#${this.id}`,actions:this.initial.actions.map(X),eventType:null})}:void 0,history:this.history,states:ct(this.states,e=>e.definition),on:this.on,transitions:[...this.transitions.values()].flat().map(e=>({...e,actions:e.actions.map(X)})),entry:this.entry.map(X),exit:this.exit.map(X),meta:this.meta,order:this.order||-1,output:this.output,invoke:this.invoke,description:this.description,tags:this.tags}}toJSON(){return this.definition}get invoke(){return L(this,"invoke",()=>A(this.config.invoke).map((e,t)=>{var c;const{src:i,systemId:n}=e,r=(c=e.id)!=null?c:at(this.id,t),o=typeof i=="string"?i:`xstate.invoke.${at(this.id,t)}`;return{...e,src:o,id:r,systemId:n,toJSON(){const{onDone:a,onError:h,...f}=e;return{...f,type:"xstate.invoke",src:o,id:r}}}}))}get on(){return L(this,"on",()=>[...this.transitions].flatMap(([t,i])=>i.map(n=>[t,n])).reduce((t,[i,n])=>(t[i]=t[i]||[],t[i].push(n),t),{}))}get after(){return L(this,"delayedTransitions",()=>ci(this))}get initial(){return L(this,"initial",()=>hi(this,this.config.initial))}next(e,t){const i=t.type,n=[];let r;const o=L(this,`candidates-${i}`,()=>oi(this,i));for(const c of o){const{guard:a}=c,h=e.context;let f=!1;try{f=!a||Ue(a,h,t,e)}catch(d){const p=typeof a=="string"?a:typeof a=="object"?a.type:void 0;throw new Error(`Unable to evaluate guard ${p?`'${p}' `:""}in transition for event '${i}' in state node '${this.id}':
${d.message}`)}if(f){n.push(...c.actions),r=c;break}}return r?[r]:void 0}get events(){return L(this,"events",()=>{const{states:e}=this,t=new Set(this.ownEvents);if(e)for(const i of Object.keys(e)){const n=e[i];if(n.states)for(const r of n.events)t.add(`${r}`)}return Array.from(t)})}get ownEvents(){const e=new Set([...this.transitions.keys()].filter(t=>this.transitions.get(t).some(i=>!(!i.target&&!i.actions.length&&!i.reenter))));return Array.from(e)}}const Hi="#";class Je{constructor(e,t){var i,n,r,o;this.config=e,this.version=void 0,this.schemas=void 0,this.implementations=void 0,this.__xstatenode=!0,this.idMap=new Map,this.root=void 0,this.id=void 0,this.states=void 0,this.events=void 0,this.id=e.id||"(machine)",this.implementations={actors:(i=t==null?void 0:t.actors)!=null?i:{},actions:(n=t==null?void 0:t.actions)!=null?n:{},delays:(r=t==null?void 0:t.delays)!=null?r:{},guards:(o=t==null?void 0:t.guards)!=null?o:{}},this.version=this.config.version,this.schemas=this.config.schemas,this.transition=this.transition.bind(this),this.getInitialSnapshot=this.getInitialSnapshot.bind(this),this.getPersistedSnapshot=this.getPersistedSnapshot.bind(this),this.restoreSnapshot=this.restoreSnapshot.bind(this),this.start=this.start.bind(this),this.root=new pe(e,{_key:this.id,_machine:this}),this.root._initialize(),this.states=this.root.states,this.events=this.root.events}provide(e){const{actions:t,guards:i,actors:n,delays:r}=this.implementations;return new Je(this.config,{actions:{...t,...e.actions},guards:{...i,...e.guards},actors:{...n,...e.actors},delays:{...r,...e.delays}})}resolveState(e){const t=xi(this.root,e.value),i=le(fe(this.root,t));return ae({_nodes:[...i],context:e.context||{},children:{},status:Ne(i,this.root)?"done":e.status||"active",output:e.output,error:e.error,historyValue:e.historyValue},this)}transition(e,t,i){return xe(e,t,i,[]).snapshot}microstep(e,t,i){return xe(e,t,i,[]).microstates}getTransitionData(e,t){return We(this.root,e.value,e,t)||[]}getPreInitialState(e,t,i){const{context:n}=this.config,r=ae({context:typeof n!="function"&&n?n:{},_nodes:[this.root],children:{},status:"active"},this);return typeof n=="function"?J(r,t,e,[Ie(({spawn:c,event:a,self:h})=>n({spawn:c,input:a.input,self:h}))],i,void 0):r}getInitialSnapshot(e,t){const i=Rt(t),n=[],r=this.getPreInitialState(e,i,n),o=Re([{target:[...Ut(this.root)],source:this.root,reenter:!0,actions:[],eventType:null,toJSON:null}],r,e,i,!0,n),{snapshot:c}=xe(o,i,e,n);return c}start(e){Object.values(e.children).forEach(t=>{t.getSnapshot().status==="active"&&t.start()})}getStateNodeById(e){const t=Le(e),i=t.slice(1),n=me(t[0])?t[0].slice(Hi.length):t[0],r=this.idMap.get(n);if(!r)throw new Error(`Child state node '#${n}' does not exist on machine '${this.id}'`);return ue(r,i)}get definition(){return this.root.definition}toJSON(){return this.definition}getPersistedSnapshot(e,t){return Ii(e,t)}restoreSnapshot(e,t){const i={},n=e.children;Object.keys(n).forEach(d=>{const p=n[d],u=p.snapshot,l=p.src,g=typeof l=="string"?He(this,l):l;if(!g)return;const m=ie(g,{id:d,parent:t.self,syncSnapshot:p.syncSnapshot,snapshot:u,src:l,systemId:p.systemId});i[d]=m});function r(d,p){if(p instanceof pe)return p;try{return d.machine.getStateNodeById(p.id)}catch{}}function o(d,p){var l;if(!p||typeof p!="object")return{};const u={};for(const g in p){const m=p[g];for(const y of m){const x=r(d,y);x&&((l=u[g])!=null||(u[g]=[]),u[g].push(x))}}return u}const c=o(this.root,e.historyValue),a=ae({...e,children:i,_nodes:Array.from(le(fe(this.root,e.value))),historyValue:c},this),h=new Set;function f(d,p){if(!h.has(d)){h.add(d);for(const u in d){const l=d[u];if(l&&typeof l=="object"){if("xstate$$type"in l&&l.xstate$$type===Be){d[u]=p[l.id];continue}f(l,p)}}}}return f(a.context,i),a}}function Bi(s,e){return new Je(s,e)}class Ui{constructor(e,{machine:t,options:i,callback:n}){w(this,"onNext",e=>{var t;this.currentSnapshot!==e&&(this.currentSnapshot=e,(t=this.callback)==null||t.call(this,e),this.host.requestUpdate())});this.machine=t,this.options=i,this.callback=n,this.currentSnapshot=this.snapshot,(this.host=e).addController(this)}get actor(){return this.actorRef}get snapshot(){var e,t;return(t=(e=this.actorRef)==null?void 0:e.getSnapshot)==null?void 0:t.call(e)}send(e){var t;(t=this.actorRef)==null||t.send(e)}unsubscribe(){var e;(e=this.subs)==null||e.unsubscribe()}startService(){var e;this.actorRef=ie(this.machine,this.options),this.actorRef&&(this.subs=this.actorRef.subscribe(this.onNext)),(e=this.actorRef)==null||e.start()}stopService(){var e;(e=this.actorRef)==null||e.stop()}hostConnected(){this.startService()}hostDisconnected(){this.stopService()}}const pt={enabled:"enabled",disabled:"disabled"},ji={counter:({context:s})=>s.counter+1,event:({event:s})=>s},Ni={counter:({context:s})=>s.counter-1,event:({event:s})=>s},Wi=({context:s})=>s.counter<10,Gi=({context:s})=>s.counter>0,Ji=Bi({id:"counter",context:{counter:0,event:void 0},initial:"enabled",states:{enabled:{on:{INC:{actions:{type:"increment"},guard:{type:"isNotMax"}},DEC:{actions:{type:"decrement"},guard:{type:"isNotMin"}},TOGGLE:{target:pt.disabled}}},disabled:{on:{TOGGLE:{target:pt.enabled}}}}},{actions:{increment:Ie(ji),decrement:Ie(Ni)},guards:{isNotMax:Wi,isNotMin:Gi}}),Vi=ne`
  :host {
    --_mark-color: rgb(197, 197, 197);
    display: block;
    box-sizing: border-box;
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

  [aria-disabled='true'] {
    opacity: 0.5;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    pointer-events: none;
    cursor: default;
  }

  p {
    font-size: 1.5rem;
    min-width: 4.25rem;
    text-align: center;
    margin: auto;
    padding: 0.8333em;
    background-color: var(--_mark-color);
  }

  button {
    display: inline-block;
    min-width: 9.375rem;
    font: inherit;
    cursor: pointer;
    white-space: nowrap;
    border: none;
    color: rgb(245, 245, 245);
    background-color: rgb(51, 65, 85);
    padding: 0.75em;
  }

  button:first-child:not(:only-child) {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    max-width: 25rem;
    padding: 1em 2em;
    margin: auto;
    background-color: rgb(238, 238, 238);
    border: 0.0625rem solid var(--_mark-color);
    border-bottom: none;
  }

  div + div {
    border-top: 0.0625rem dashed var(--_mark-color);
    border-bottom: 0.0625rem solid var(--_mark-color);
  }

  span {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }

  ::slotted(*) {
    white-space: nowrap;
  }
`;var M,Z;class Oe extends S{constructor(){super();Ye(this,M);w(this,"_callbackCounterController",t=>{this._xstate=t});w(this,"_inspectEvents",t=>{t.type==="@xstate.snapshot"&&t.event.type==="xstate.stop"&&(this._xstate={})});this._xstate={},this.counterController=new Ui(this,{machine:Ji,options:{inspect:this._inspectEvents},callback:this._callbackCounterController})}updated(t){if(super.updated&&super.updated(t),t.has("_xstate")){const{context:i,value:n}=this._xstate,r=new CustomEvent("counterchange",{bubbles:!0,detail:{...i,value:n}});this.dispatchEvent(r)}}render(){return b`
      <slot></slot>
      <div aria-disabled="${V(this,M,Z)}">
        <span>
          <button
            ?disabled="${V(this,M,Z)}"
            data-counter="increment"
            @click=${()=>this.counterController.send({type:"INC"})}>
            Increment
          </button>
          <button
            ?disabled="${V(this,M,Z)}"
            data-counter="decrement"
            @click=${()=>this.counterController.send({type:"DEC"})}>
            Decrement
          </button>
        </span>
        <p>${this.counterController.snapshot.context.counter}</p>
      </div>
      <div>
        <button @click=${()=>this.counterController.send({type:"TOGGLE"})}>
          ${V(this,M,Z)?"Enabled counter":"Disabled counter"}
        </button>
      </div>
    `}}M=new WeakSet,Z=function(){return this.counterController.snapshot.matches("disabled")},w(Oe,"properties",{_xstate:{type:Object,state:!0}}),w(Oe,"styles",[Vi]);window.customElements.define("xstate-counter",Oe);
