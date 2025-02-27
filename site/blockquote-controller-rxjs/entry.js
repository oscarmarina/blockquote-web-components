var Me=Object.defineProperty;var Be=(s,e,t)=>e in s?Me(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var u=(s,e,t)=>Be(s,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,se=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),ne=new WeakMap;let Ee=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(se&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ne.set(t,e))}return e}toString(){return this.cssText}};const Ie=s=>new Ee(typeof s=="string"?s:s+"",void 0,ie),V=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new Ee(t,s,ie)},De=(s,e)=>{if(se)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=D.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},ae=se?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ie(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ne,defineProperty:We,getOwnPropertyDescriptor:Ye,getOwnPropertyNames:Ve,getOwnPropertySymbols:je,getPrototypeOf:Fe}=Object,$=globalThis,le=$.trustedTypes,Ze=le?le.emptyScript:"",F=$.reactiveElementPolyfillSupport,O=(s,e)=>s,te={toAttribute(s,e){switch(e){case Boolean:s=s?Ze:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Se=(s,e)=>!Ne(s,e),ce={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:Se};var ge,ve;(ge=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ve=$.litPropertyMetadata)!=null||($.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&We(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){var n;const{get:r,set:o}=(n=Ye(this.prototype,e))!=null?n:{get(){return this[t]},set(a){this[t]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){const l=r==null?void 0:r.call(this);o.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:ce}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Fe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,i=[...Ve(t),...je(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ae(r))}else e!==void 0&&t.push(ae(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return De(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:te).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:te;this._$Em=r,this[r]=a.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){var r;if(e!==void 0){if(i!=null||(i=this.constructor.getPropertyOptions(e)),!((r=i.hasChanged)!=null?r:Se)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){var r;this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}var we;x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[O("elementProperties")]=new Map,x[O("finalized")]=new Map,F==null||F({ReactiveElement:x}),((we=$.reactiveElementVersions)!=null?we:$.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,N=q.trustedTypes,he=N?N.createPolicy("lit-html",{createHTML:s=>s}):void 0,xe="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,ke="?"+w,Xe=`<${ke}>`,S=document,H=()=>S.createComment(""),M=s=>s===null||typeof s!="object"&&typeof s!="function",re=Array.isArray,Je=s=>re(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Z=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,de=/-->/g,ue=/>/g,A=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),be=/'/g,pe=/"/g,Ce=/^(?:script|style|textarea|title)$/i,Qe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),b=Qe(1),C=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),me=new WeakMap,E=S.createTreeWalker(S,129);function Re(s,e){if(!re(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}const Ge=(s,e)=>{const t=s.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=T;for(let a=0;a<t;a++){const l=s[a];let c,h,d=-1,_=0;for(;_<l.length&&(n.lastIndex=_,h=n.exec(l),h!==null);)_=n.lastIndex,n===T?h[1]==="!--"?n=de:h[1]!==void 0?n=ue:h[2]!==void 0?(Ce.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=A):h[3]!==void 0&&(n=A):n===A?h[0]===">"?(n=r!=null?r:T,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?A:h[3]==='"'?pe:be):n===pe||n===be?n=A:n===de||n===ue?n=T:(n=A,r=void 0);const g=n===A&&s[a+1].startsWith("/>")?" ":"";o+=n===T?l+Xe:d>=0?(i.push(c),l.slice(0,d)+xe+l.slice(d)+w+g):l+w+(d===-2?a:g)}return[Re(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class B{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[c,h]=Ge(e,t);if(this.el=B.createElement(c,i),E.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=E.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(xe)){const _=h[n++],g=r.getAttribute(d).split(w),z=/([.?@])?(.*)/.exec(_);l.push({type:1,index:o,name:z[2],strings:g,ctor:z[1]==="."?et:z[1]==="?"?tt:z[1]==="@"?st:j}),r.removeAttribute(d)}else d.startsWith(w)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(Ce.test(r.tagName)){const d=r.textContent.split(w),_=d.length-1;if(_>0){r.textContent=N?N.emptyScript:"";for(let g=0;g<_;g++)r.append(d[g],H()),E.nextNode(),l.push({type:2,index:++o});r.append(d[_],H())}}}else if(r.nodeType===8)if(r.data===ke)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(w,d+1))!==-1;)l.push({type:7,index:o}),d+=w.length-1}o++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function R(s,e,t=s,i){var n,a,l;if(e===C)return e;let r=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=M(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,i)),i!==void 0?((l=t._$Co)!=null?l:t._$Co=[])[i]=r:t._$Cl=r),r!==void 0&&(e=R(s,r._$AS(s,e.values),r,i)),e}class Ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;const{el:{content:t},parts:i}=this._$AD,r=((c=e==null?void 0:e.creationScope)!=null?c:S).importNode(t,!0);E.currentNode=r;let o=E.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new I(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new it(o,this,e)),this._$AV.push(h),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=E.nextNode(),n++)}return E.currentNode=S,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class I{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,r){var o;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(o=r==null?void 0:r.isConnected)!=null?o:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),M(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=B.createElement(Re(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const n=new Ke(r,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new B(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new I(this.O(H()),this.O(H()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=R(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==C,n&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=R(this,a[i+l],t,l),c===C&&(c=this._$AH[l]),n||(n=!M(c)||c!==this._$AH[l]),c===m?e=m:e!==m&&(e+=(c!=null?c:"")+o[l+1]),this._$AH[l]=c}n&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class et extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class tt extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class st extends j{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=R(this,e,t,0))!=null?n:m)===C)return;const i=this._$AH,r=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==m&&(i===m||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}}class it{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const X=q.litHtmlPolyfillSupport;var $e;X==null||X(B,I),(($e=q.litHtmlVersions)!=null?$e:q.litHtmlVersions=[]).push("3.2.1");const oe=(s,e,t)=>{var o,n;const i=(o=t==null?void 0:t.renderBefore)!=null?o:e;let r=i._$litPart$;if(r===void 0){const a=(n=t==null?void 0:t.renderBefore)!=null?n:null;i._$litPart$=r=new I(e.insertBefore(H(),a),a,void 0,t!=null?t:{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let y=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}};var ye;y._$litElement$=!0,y.finalized=!0,(ye=globalThis.litElementHydrateSupport)==null||ye.call(globalThis,{LitElement:y});const J=globalThis.litElementPolyfillSupport;J==null||J({LitElement:y});var ze;((ze=globalThis.litElementVersions)!=null?ze:globalThis.litElementVersions=[]).push("4.1.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot={CHILD:2},nt=s=>(...e)=>({_$litDirective$:s,values:e});class at{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const r of t)(i=r._$AO)==null||i.call(r,e,!1),U(r,e);return!0},W=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Pe=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),ht(e)}};function lt(s){this._$AN!==void 0?(W(this),this._$AM=s,Pe(this)):this._$AM=s}function ct(s,e=!1,t=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)U(i[o],!1),W(i[o]);else i!=null&&(U(i,!1),W(i));else U(this,s)}const ht=s=>{var e,t;s.type==ot.CHILD&&((e=s._$AP)!=null||(s._$AP=ct),(t=s._$AQ)!=null||(s._$AQ=lt))};class dt extends at{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Pe(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),t&&(U(this,e),W(this))}setValue(e){if(rt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=()=>new bt;class bt{}const Q=new WeakMap,pt=nt(class extends dt{render(s){return m}update(s,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=s.options)==null?void 0:i.host,this.rt(this.ct=s.element)),m}rt(s){var e;if(this.isConnected||(s=void 0),typeof this.Y=="function"){const t=(e=this.ht)!=null?e:globalThis;let i=Q.get(t);i===void 0&&(i=new WeakMap,Q.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,s),s!==void 0&&this.Y.call(this.ht,s)}else this.Y.value=s}get lt(){var s,e,t;return typeof this.Y=="function"?(e=Q.get((s=this.ht)!=null?s:globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),mt=V`
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
`;class ft extends y{constructor(){super();u(this,"_onResize",t=>{t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[mt]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((i,r)=>r.width-i.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const i=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(i)}}render(){return b`
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
    `}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const i=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(i)}}window.customElements.define("blockquote-base-embedded-webview-size",ft);const _t=V`
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
`;class gt extends y{constructor(){super();u(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[_t]}async connectedCallback(){var t,i,r,o,n,a,l,c,h,d,_,g,z;(t=super.connectedCallback)==null||t.call(this),await this.updateComplete,this.rect=(i=this.shadowRoot)==null?void 0:i.querySelector(".rect"),this.bottomRightResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(".resizer-se"),this.bottomLeftResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-sw"),this.rightResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-e"),this.leftResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-w"),this.bottomResizerElement=(l=this.shadowRoot)==null?void 0:l.querySelector(".resizer-s"),(c=this.leftResizerElement)==null||c.addEventListener("pointerdown",this._createResizerLeft),(h=this.rightResizerElement)==null||h.addEventListener("pointerdown",this._createResizerRight),(d=this.bottomResizerElement)==null||d.addEventListener("pointerdown",this._createResizerBottom),(_=this.bottomLeftResizerElement)==null||_.addEventListener("pointerdown",this._createResizerBottomLeft),(g=this.bottomRightResizerElement)==null||g.addEventListener("pointerdown",this._createResizerBottomRight),(z=this.bottomResizerElement)==null||z.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return b`
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
    `}_createResizer(t,i){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:r,pointerId:o,clientX:n,clientY:a}=i;r==null||r.setPointerCapture(o);const l=({clientX:h,clientY:d})=>{const _=Math.floor(h-n),g=Math.floor(d-a);this._resize({detail:{dx:_,dy:g}})};r==null||r.addEventListener("pointermove",l);const c=()=>{this.removeAttribute("resizing"),r==null||r.releasePointerCapture(o),r==null||r.removeEventListener("pointermove",l),r==null||r.removeEventListener("pointerup",c),this._dispatchResizeEvent()};r==null||r.addEventListener("pointerup",c)}_resize({detail:t}){let i,r;const o=Math.floor(t.dx*2.04),n=Math.floor(t.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",i=`${this._getBoundingClientRectWidth-o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"left":this._cursor="e",i=`${this._getBoundingClientRectWidth+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"top":this._cursor="n",r=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopLeft":this._cursor="ne",i=`${this._getBoundingClientRectWidth+o}px`,r=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopRight":this._cursor="nw",i=`${this._getBoundingClientRectWidth-o}px`,r=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var i;return Math.abs(parseInt((i=this.rect)==null?void 0:i.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",gt);const vt=V`
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
`;class wt extends y{constructor(){super();u(this,"_onLoadElement",({target:t})=>{if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const i=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(i)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[vt]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return b`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){oe(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return b`
      <slot name="embedded"></slot>
    `}_fetch(t){var i,r,o,n;t&&(Object.assign((i=this._embeddedElement)!=null?i:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((r=this._embeddedElement)!=null?r:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((n=(o=this._embeddedElement)==null?void 0:o.style)!=null?n:{},t.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",wt);const $t=V`
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
`,yt=b`
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
`,zt=b`
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
`;class At extends y{constructor(){super();u(this,"_updateSize",({detail:t})=>{var i,r,o,n;(r=(i=this._embeddedResizeRef)==null?void 0:i.value)==null||r.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(n=(o=this._embeddedResizeRef)==null?void 0:o.value)==null||n.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=yt,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=ut()}static get styles(){return[$t]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0}}}async connectedCallback(){var i,r;(i=super.connectedCallback)==null||i.call(this),await this.updateComplete,this.addEventListener("webviewresize",o=>{var a;const{detail:n}=o;Object.assign(this.__readDataPos,n),this.__resetResizing=!0,(n.cursor==="n"||n.cursor==="ne"||n.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((a=this._controlBottom)!=null?a:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(o=>{const{src:n="",option:a="",description:l=""}=o.dataset;return{src:n,option:a,description:l}}),this._src=this._sources[this.selected].src),this.embedded=(r=this.shadowRoot)==null?void 0:r.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return b`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){oe(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return b`
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
        <span aria-hidden="true">${zt}</span>
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
        <blockquote-base-embedded-webview-resize ${pt(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return b`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",At);class G extends Error{constructor(t){super(t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"");u(this,"errors");this.errors=t,this.name="UnsubscriptionError"}}const Y=class Y{constructor(e){u(this,"initialTeardown");u(this,"closed",!1);u(this,"_finalizers",null);this.initialTeardown=e}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{initialTeardown:t}=this;if(p(t))try{t()}catch(r){e=r instanceof G?r.errors:[r]}const{_finalizers:i}=this;if(i){this._finalizers=null;for(const r of i)try{fe(r)}catch(o){e=e!=null?e:[],o instanceof G?e.push(...o.errors):e.push(o)}}if(e)throw new G(e)}}add(e){var t;e&&e!==this&&(this.closed?fe(e):(e&&"add"in e&&e.add(()=>{this.remove(e)}),(t=this._finalizers)!=null||(this._finalizers=new Set),this._finalizers.add(e)))}remove(e){var t;(t=this._finalizers)==null||t.delete(e)}};u(Y,"EMPTY",(()=>{const e=new Y;return e.closed=!0,e})());let P=Y;typeof Symbol.dispose=="symbol"&&(P.prototype[Symbol.dispose]=P.prototype.unsubscribe);function fe(s){p(s)?s():s.unsubscribe()}class k extends P{constructor(t,i){var r,o,n,a;super();u(this,"isStopped",!1);u(this,"destination");u(this,"_nextOverride",null);u(this,"_errorOverride",null);u(this,"_completeOverride",null);u(this,"_onFinalize",null);this.destination=t instanceof k?t:Ct(t),this._nextOverride=(r=i==null?void 0:i.next)!=null?r:null,this._errorOverride=(o=i==null?void 0:i.error)!=null?o:null,this._completeOverride=(n=i==null?void 0:i.complete)!=null?n:null,this._onFinalize=(a=i==null?void 0:i.finalize)!=null?a:null,this._next=this._nextOverride?Et:this._next,this._error=this._errorOverride?St:this._error,this._complete=this._completeOverride?xt:this._complete,Rt(t)&&t.add(this)}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){var t;this.closed||(this.isStopped=!0,super.unsubscribe(),(t=this._onFinalize)==null||t.call(this))}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}function Et(s){try{this._nextOverride(s)}catch(e){this.destination.error(e)}}function St(s){try{this._errorOverride(s)}catch(e){this.destination.error(e)}finally{this.unsubscribe()}}function xt(){try{this._completeOverride()}catch(s){this.destination.error(s)}finally{this.unsubscribe()}}class kt{constructor(e){u(this,"partialObserver");this.partialObserver=e}next(e){const{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){L(i)}}error(e){const{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){L(i)}else L(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){L(t)}}}function Ct(s){return new kt(!s||p(s)?{next:s!=null?s:void 0}:s)}function Rt(s){return s&&p(s.unsubscribe)&&p(s.add)}function Te({destination:s,...e}){return new k(s,e)}var Ae;class v{constructor(e){e&&(this._subscribe=e)}subscribe(e){const t=e instanceof k?e:new k(e);return t.add(this._trySubscribe(t)),t}_trySubscribe(e){try{return this._subscribe(e)}catch(t){e.error(t)}}forEach(e){return new Promise((t,i)=>{const r=new k({next:o=>{try{e(o)}catch(n){i(n),r.unsubscribe()}},error:i,complete:t});this.subscribe(r)})}_subscribe(e){}[(Ae=Symbol.observable)!=null?Ae:"@@observable"](){return this}pipe(...e){return e.reduce(Pt,this)}[Symbol.asyncIterator](){let e,t=!1,i,r=!1;const o=[],n=[],a=c=>{for(t=!0,i=c;n.length;){const[h,d]=n.shift();d(c)}},l=()=>{for(r=!0;n.length;){const[c]=n.shift();c({value:void 0,done:!0})}};return{next:()=>(e||(e=this.subscribe({next:c=>{if(n.length){const[h]=n.shift();h({value:c,done:!1})}else o.push(c)},error:a,complete:l})),o.length?Promise.resolve({value:o.shift(),done:!1}):r?Promise.resolve({value:void 0,done:!0}):t?Promise.reject(i):new Promise((c,h)=>{n.push([c,h])})),throw:c=>(e==null||e.unsubscribe(),a(c),Promise.reject(c)),return:()=>(e==null||e.unsubscribe(),l(),Promise.resolve({value:void 0,done:!0})),[Symbol.asyncIterator](){return this}}}}function Pt(s,e){return e(s)}function L(s){setTimeout(()=>{throw s})}function Tt(s){switch(It(s)){case f.Own:return s;case f.InteropObservable:return Lt(s);case f.ArrayLike:return Ot(s);case f.Promise:return qt(s);case f.AsyncIterable:return Le(s);case f.Iterable:return Ut(s);case f.ReadableStreamLike:return Ht(s)}}function Lt(s){return new v(e=>{var i;const t=s[(i=Symbol.observable)!=null?i:"@@observable"]();if(p(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ot(s){return new v(e=>{Bt(s,e)})}function qt(s){return new v(e=>{s.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,L)})}function Ut(s){return new v(e=>{for(const t of s)if(e.next(t),e.closed)return;e.complete()})}function Le(s){return new v(e=>{Mt(s,e).catch(t=>e.error(t))})}function Ht(s){return Le(Nt(s))}async function Mt(s,e){for await(const t of s)if(e.next(t),e.closed)return;e.complete()}function Bt(s,e){const t=s.length;for(let i=0;i<t;i++){if(e.closed)return;e.next(s[i])}e.complete()}var f;(function(s){s[s.Own=0]="Own",s[s.InteropObservable=1]="InteropObservable",s[s.ArrayLike=2]="ArrayLike",s[s.Promise=3]="Promise",s[s.AsyncIterable=4]="AsyncIterable",s[s.Iterable=5]="Iterable",s[s.ReadableStreamLike=6]="ReadableStreamLike"})(f||(f={}));function It(s){if(s instanceof v)return f.Own;if(Vt(s))return f.InteropObservable;if(Oe(s))return f.ArrayLike;if(Yt(s))return f.Promise;if(Dt(s))return f.AsyncIterable;if(jt(s))return f.Iterable;if(Wt(s))return f.ReadableStreamLike;throw new TypeError(`You provided ${s!==null&&typeof s=="object"?"an invalid object":`'${s}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function p(s){return typeof s=="function"}function Dt(s){return Symbol.asyncIterator&&p(s==null?void 0:s[Symbol.asyncIterator])}async function*Nt(s){const e=s.getReader();try{for(;;){const{value:t,done:i}=await e.read();if(i)return;yield t}}finally{e.releaseLock()}}function Wt(s){return p(s==null?void 0:s.getReader)}function Yt(s){return p(s==null?void 0:s.then)}function Vt(s){var e;return p(s[(e=Symbol.observable)!=null?e:"@@observable"])}function jt(s){return p(s==null?void 0:s[Symbol.iterator])}function Oe(s){return s&&typeof s.length=="number"&&!p(s)}function Ft(s){return!!s&&(s instanceof v||p(s.lift)&&p(s.subscribe))}class Zt extends v{constructor(){super();u(this,"_closed",!1);u(this,"_observerCounter",0);u(this,"currentObservers",new Map);u(this,"observerSnapshot");u(this,"hasError",!1);u(this,"thrownError",null)}get closed(){return this._closed}get observers(){var t;return(t=this.observerSnapshot)!=null?t:this.observerSnapshot=Array.from(this.currentObservers.values())}_clearObservers(){this.currentObservers.clear(),this.observerSnapshot=void 0}next(t){if(!this._closed){const{observers:i}=this,r=i.length;for(let o=0;o<r;o++)i[o].next(t)}}error(t){if(!this._closed){this.hasError=this._closed=!0,this.thrownError=t;const{observers:i}=this,r=i.length;for(let o=0;o<r;o++)i[o].error(t);this._clearObservers()}}complete(){if(!this._closed){this._closed=!0;const{observers:t}=this,i=t.length;for(let r=0;r<i;r++)t[r].complete();this._clearObservers()}}unsubscribe(){this._closed=!0,this._clearObservers()}get observed(){return this.currentObservers.size>0}_subscribe(t){return this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){if(this.hasError||this._closed)return P.EMPTY;const{currentObservers:i}=this,r=this._observerCounter++;return i.set(r,t),this.observerSnapshot=void 0,t.add(()=>{i.delete(r),this.observerSnapshot=void 0}),t}_checkFinalizedStatuses(t){const{hasError:i,thrownError:r,_closed:o}=this;i?t.error(r):o&&t.complete()}asObservable(){return new v(t=>this.subscribe(t))}}function Xt(){}function Jt(s){return e=>new v(t=>{let i=0;e.subscribe(Te({destination:t,next:r=>{t.next(s(r,i++))}}))})}const{isArray:Qt}=Array;function Gt(s,e){return Qt(e)?s(...e):s(e)}function Kt(s){return Jt(e=>Gt(s,e))}const es=["addListener","removeListener"],ts=["addEventListener","removeEventListener"],ss=["on","off"];function is(s,e,t,i){if(p(t)&&(i=t,t=void 0),i)return Kt(i)(is(s,e,t));const r=qe(s)||Ue(s)||He(s);if(!r&&!Oe(s))throw new TypeError("Invalid event target");return new v(o=>{const n=(...a)=>o.next(1<a.length?a:a[0]);if(r)_e(n,o,s,e,t);else for(let a=0;a<s.length&&!o.closed;a++){const l=s[a];_e(n,o,l,e,t)}})}function _e(s,e,t,i,r){const[o,n]=rs(t);if(!o||!n)throw new TypeError("Invalid event target");t[o](i,s,r),e.add(()=>t[n](i,s,r))}function rs(s){return He(s)?ts:qe(s)?es:Ue(s)?ss:[]}function qe(s){return p(s.addListener)&&p(s.removeListener)}function Ue(s){return p(s.on)&&p(s.off)}function He(s){return p(s.addEventListener)&&p(s.removeEventListener)}function os(s){return e=>new v(t=>{Tt(s).subscribe(Te({destination:t,next:()=>t.complete(),complete:Xt})),!t.closed&&e.subscribe(t)})}const K=Symbol("unsubscribe"),ee=Symbol("subscriptions");class cs{constructor(e){this[K]=new Zt,this[ee]=new Map,(this.host=e).addController(this)}subscribe(e,t){var o;if(!Ft(t))throw new Error("Invalid Observable!");const i=this[ee].get(e);if(i){if((i==null?void 0:i.stream$)===t)return t;(o=i==null?void 0:i.subscription)==null||o.unsubscribe()}const r=t.pipe(os(this[K])).subscribe(n=>{e in this.host&&(this.host[e]=n),this.host.requestUpdate()});return this[ee].set(e,{stream$:t,subscription:r}),t}hostDisconnected(){this[K].next(null)}}export{cs as BlockquoteControllerRxjs,y as LitElement,is as fromEvent,b as html,Jt as map};
