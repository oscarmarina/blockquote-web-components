var at=Object.defineProperty;var ct=(r,t,e)=>t in r?at(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var O=(r,t,e)=>ct(r,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,ve=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),ze=new WeakMap;let Ve=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ve&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ze.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ze.set(e,t))}return t}toString(){return this.cssText}};const lt=r=>new Ve(typeof r=="string"?r:r+"",void 0,me),Q=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1]),r[0]);return new Ve(e,r,me)},dt=(r,t)=>{if(ve)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=F.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},Ee=ve?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return lt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ht,defineProperty:ut,getOwnPropertyDescriptor:pt,getOwnPropertyNames:ft,getOwnPropertySymbols:bt,getPrototypeOf:vt}=Object,w=globalThis,Se=w.trustedTypes,mt=Se?Se.emptyScript:"",ie=w.reactiveElementPolyfillSupport,L=(r,t)=>r,he={toAttribute(r,t){switch(t){case Boolean:r=r?mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},We=(r,t)=>!ht(r,t),Ae={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:We};var Me,He;(Me=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(He=w.litPropertyMetadata)!=null||(w.litPropertyMetadata=new WeakMap);let x=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ae){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ut(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){var o;const{get:s,set:n}=(o=pt(this.prototype,t))!=null?o:{get(){return this[e]},set(c){this[e]=c}};return{get:s,set(c){const a=s==null?void 0:s.call(this);n==null||n.call(this,c),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Ae}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;const t=vt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){const e=this.properties,i=[...ft(e),...bt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Ee(s))}else t!==void 0&&e.push(Ee(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach((e=>e(this)))}addController(t){var e,i;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;const t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach((i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach((e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:he).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var n,o,c;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:he;this._$Em=s;const d=l.fromAttribute(e,a.type);this[s]=(c=d!=null?d:(o=this._$Ej)==null?void 0:o.get(s))!=null?c:d,this._$Em=null}}requestUpdate(t,e,i){var s,n;if(t!==void 0){const o=this.constructor,c=this[t];if(i!=null||(i=o.getPropertyOptions(t)),!(((s=i.hasChanged)!=null?s:We)(c,e)||i.useDefault&&i.reflect&&c===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){var c,a,l;i&&!((c=this._$Ej)!=null?c:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(a=o!=null?o:e)!=null?a:this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&((l=this._$Eq)!=null?l:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,c]of this._$Ep)this[o]=c;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,c]of n){const{wrapped:a}=c,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,c,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach((n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)})),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach((i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach((e=>this._$ET(e,this[e])))),this._$EM()}updated(t){}firstUpdated(t){}};var Be;x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[L("elementProperties")]=new Map,x[L("finalized")]=new Map,ie==null||ie({ReactiveElement:x}),((Be=w.reactiveElementVersions)!=null?Be:w.reactiveElementVersions=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,Y=I.trustedTypes,xe=Y?Y.createPolicy("lit-html",{createHTML:r=>r}):void 0,Fe="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Ge="?"+y,_t=`<${Ge}>`,A=document,M=()=>A.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",_e=Array.isArray,gt=r=>_e(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",se=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Ce=/>/g,z=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Re=/'/g,Te=/"/g,Ye=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),b=yt(1),C=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Pe=new WeakMap,E=A.createTreeWalker(A,129);function Ze(r,t){if(!_e(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return xe!==void 0?xe.createHTML(t):t}const wt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=q;for(let c=0;c<e;c++){const a=r[c];let l,d,h=-1,f=0;for(;f<a.length&&(o.lastIndex=f,d=o.exec(a),d!==null);)f=o.lastIndex,o===q?d[1]==="!--"?o=ke:d[1]!==void 0?o=Ce:d[2]!==void 0?(Ye.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=z):d[3]!==void 0&&(o=z):o===z?d[0]===">"?(o=s!=null?s:q,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,l=d[1],o=d[3]===void 0?z:d[3]==='"'?Te:Re):o===Te||o===Re?o=z:o===ke||o===Ce?o=q:(o=z,s=void 0);const u=o===z&&r[c+1].startsWith("/>")?" ":"";n+=o===q?a+_t:h>=0?(i.push(l),a.slice(0,h)+Fe+a.slice(h)+y+u):a+y+(h===-2?c:u)}return[Ze(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class B{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const c=t.length-1,a=this.parts,[l,d]=wt(t,e);if(this.el=B.createElement(l,i),E.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=E.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Fe)){const f=d[o++],u=s.getAttribute(h).split(y),v=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:v[2],strings:u,ctor:v[1]==="."?zt:v[1]==="?"?Et:v[1]==="@"?St:K}),s.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:n}),s.removeAttribute(h));if(Ye.test(s.tagName)){const h=s.textContent.split(y),f=h.length-1;if(f>0){s.textContent=Y?Y.emptyScript:"";for(let u=0;u<f;u++)s.append(h[u],M()),E.nextNode(),a.push({type:2,index:++n});s.append(h[f],M())}}}else if(s.nodeType===8)if(s.data===Ge)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:n}),h+=y.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function R(r,t,e=r,i){var o,c,a;if(t===C)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const n=H(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?((a=e._$Co)!=null?a:e._$Co=[])[i]=s:e._$Cl=s),s!==void 0&&(t=R(r,s._$AS(r,t.values),s,i)),t}class $t{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var l;const{el:{content:e},parts:i}=this._$AD,s=((l=t==null?void 0:t.creationScope)!=null?l:A).importNode(e,!0);E.currentNode=s;let n=E.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new j(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new At(n,this,t)),this._$AV.push(d),a=i[++c]}o!==(a==null?void 0:a.index)&&(n=E.nextNode(),o++)}return E.currentNode=A,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class j{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,i,s){var n;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(n=s==null?void 0:s.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),H(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=B.createElement(Ze(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const o=new $t(s,this),c=o.u(this.options);o.p(e),this.T(c),this._$AH=o}}_$AC(t){let e=Pe.get(t.strings);return e===void 0&&Pe.set(t.strings,e=new B(t)),e}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new j(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=R(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==C,o&&(this._$AH=t);else{const c=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=R(this,c[i+a],e,a),l===C&&(l=this._$AH[a]),o||(o=!H(l)||l!==this._$AH[a]),l===_?t=_:t!==_&&(t+=(l!=null?l:"")+n[a+1]),this._$AH[a]=l}o&&!s&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class zt extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class Et extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class St extends K{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var o;if((t=(o=R(this,t,e,0))!=null?o:_)===C)return;const i=this._$AH,s=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)==null?void 0:e.host)!=null?i:this.element,t):this._$AH.handleEvent(t)}}class At{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const ne=I.litHtmlPolyfillSupport;var De;ne==null||ne(B,j),((De=I.litHtmlVersions)!=null?De:I.litHtmlVersions=[]).push("3.3.1");const ge=(r,t,e)=>{var n,o;const i=(n=e==null?void 0:e.renderBefore)!=null?n:t;let s=i._$litPart$;if(s===void 0){const c=(o=e==null?void 0:e.renderBefore)!=null?o:null;i._$litPart$=s=new j(t.insertBefore(M(),c),c,void 0,e!=null?e:{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;let $=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;const t=super.createRenderRoot();return(i=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ge(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return C}};var je;$._$litElement$=!0,$.finalized=!0,(je=S.litElementHydrateSupport)==null||je.call(S,{LitElement:$});const oe=S.litElementPolyfillSupport;oe==null||oe({LitElement:$});var Ne;((Ne=S.litElementVersions)!=null?Ne:S.litElementVersions=[]).push("4.2.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={CHILD:2},Ct=r=>(...t)=>({_$litDirective$:r,values:t});class Rt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=(r,t)=>{var i;const e=r._$AN;if(e===void 0)return!1;for(const s of e)(i=s._$AO)==null||i.call(s,t,!1),U(s,t);return!0},Z=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while((e==null?void 0:e.size)===0)},Xe=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),Ot(t)}};function Tt(r){this._$AN!==void 0?(Z(this),this._$AM=r,Xe(this)):this._$AM=r}function Pt(r,t=!1,e=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)U(i[n],!1),Z(i[n]);else i!=null&&(U(i,!1),Z(i));else U(this,r)}const Ot=r=>{var t,e;r.type==kt.CHILD&&((t=r._$AP)!=null||(r._$AP=Pt),(e=r._$AQ)!=null||(r._$AQ=Tt))};class qt extends Rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Xe(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),e&&(U(this,t),Z(this))}setValue(t){if(xt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=()=>new It;class It{}const ae=new WeakMap,Ut=Ct(class extends qt{render(r){return _}update(r,[t]){var i;const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),_}rt(r){var t;if(this.isConnected||(r=void 0),typeof this.G=="function"){const e=(t=this.ht)!=null?t:globalThis;let i=ae.get(e);i===void 0&&(i=new WeakMap,ae.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,t,e;return typeof this.G=="function"?(t=ae.get((r=this.ht)!=null?r:globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Mt=Q`
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
    block-size: inherit;
    text-align: inherit;
    text-decoration: none;
    text-transform: inherit;
    text-shadow: inherit;
    letter-spacing: inherit;
    word-spacing: inherit;
    inline-size: auto;
  }

  .rect {
    overflow: hidden;
    block-size: var(--_rect-height);
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
    block-size: 1px;
    inline-size: calc(100% + 2rem);
    position: absolute;
    inset-inline-start: 50%;
    inset-block-start: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(90deg, rgb(0, 0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0, 0));
  }

  button {
    position: absolute;
    background-color: var(--_button-bgcolor);
    border-inline-start: 1px solid var(--_button-border-color);
    border-inline-end: 1px solid var(--_button-border-color);
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
`;class Ht extends ${constructor(){super();O(this,"_onResize",e=>{e.preventDefault(),e.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[Mt]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(e){super.willUpdate&&super.willUpdate(e),e.has("screenSizes")&&this.screenSizes.sort((i,s)=>s.width-i.width),e.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const i=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(i)}}render(){return b`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return b`
      ${this.screenSizes.map((e,i)=>b`
          <button
            @click="${this._setSelected}"
            id="${e.id}"
            data-index="${i+1}"
            ?data-selected="${this.selected===i+1}"
            ?hidden="${!this.showOverflowSize&&e.width>this.computedStyleWidth}"
            style="${this.widthInPercent?`width: calc(100% / ${i+1});`:`width: ${e.width}px;`}">
            <span>${e.id}</span>
          </button>
        `)}
    `}get _visualTextTpl(){return b`
      <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true">
        ${this.selectedSize.id}
      </span>
    `}_setSelected(e){e.preventDefault(),e.stopPropagation(),this.selected=Number(e.target.dataset.index);const i=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(i)}}window.customElements.define("blockquote-base-embedded-webview-size",Ht);const Bt=Q`
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
    block-size: inherit;
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
    min-inline-size: var(--_rect-min-width);
    min-block-size: var(--_rect-min-height);
    max-inline-size: var(--_rect-max-width);
    max-block-size: var(--_rect-max-height);
    inline-size: var(--_rect-width);
    block-size: var(--_rect-height);
    transform: translateZ(0);
  }

  .resizer {
    /* https://github.com/ChromeDevTools/devtools-frontend/tree/main/front_end/Images/src */
    display: block;
    position: absolute;
    background-color: var(--_resizer-bgcolor);
    inline-size: 100%;
    block-size: 100%;
  }

  .resizer::after {
    content: url("data:image/svg+xml,%0A%3Csvg width='6' height='26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='26' rx='1' fill='%23848282'/%3E%3Crect x='4' width='2' height='26' rx='1' fill='%23848282'/%3E%3C/svg%3E");
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }

  .resizer-n {
    block-size: calc(var(--__resizer-factor) / 4);
    inset-block-start: calc(var(--__resizer-factor) / 4 * -1);
    inset-inline-start: calc(var(--__resizer-factor) * -1);
    inline-size: calc(100% + var(--__resizer-factor) * 2);
    border-start-start-radius: calc(var(--__resizer-factor) / 10);
    border-start-end-radius: calc(var(--__resizer-factor) / 10);
  }

  .resizer-n::after {
    content: none;
  }

  .resizer-se {
    cursor: nwse-resize;
    border-end-end-radius: calc(var(--__resizer-factor) / 10);
  }

  .resizer-se::after {
    transform: translate(-50%, -50%);
  }

  .resizer-sw {
    cursor: nesw-resize;
    border-end-start-radius: calc(var(--__resizer-factor) / 10);
  }

  .resizer-sw::after {
    transform: translate(-50%, -50%) translateY(-0.0938rem) rotate(90deg);
  }

  .resizer-se,
  .resizer-e {
    inset-inline-end: calc(var(--__resizer-factor) * -1);
  }

  .resizer-se,
  .resizer-sw,
  .resizer-s {
    inset-block-end: calc(var(--__resizer-factor) * -1);
  }

  .resizer-w,
  .resizer-sw {
    inset-inline-start: calc(var(--__resizer-factor) * -1);
  }

  .resizer-se,
  .resizer-sw {
    block-size: var(--__resizer-factor);
    inline-size: var(--__resizer-factor);
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
    block-size: var(--__resizer-factor);
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
    inline-size: var(--__resizer-factor);
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
`;class Dt extends ${constructor(){super();O(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[Bt]}async connectedCallback(){var e,i,s,n,o,c,a,l,d,h,f,u,v;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.rect=(i=this.shadowRoot)==null?void 0:i.querySelector(".rect"),this.bottomRightResizerElement=(s=this.shadowRoot)==null?void 0:s.querySelector(".resizer-se"),this.bottomLeftResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-sw"),this.rightResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-e"),this.leftResizerElement=(c=this.shadowRoot)==null?void 0:c.querySelector(".resizer-w"),this.bottomResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-s"),(l=this.leftResizerElement)==null||l.addEventListener("pointerdown",this._createResizerLeft),(d=this.rightResizerElement)==null||d.addEventListener("pointerdown",this._createResizerRight),(h=this.bottomResizerElement)==null||h.addEventListener("pointerdown",this._createResizerBottom),(f=this.bottomLeftResizerElement)==null||f.addEventListener("pointerdown",this._createResizerBottomLeft),(u=this.bottomRightResizerElement)==null||u.addEventListener("pointerdown",this._createResizerBottomRight),(v=this.bottomResizerElement)==null||v.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return b`
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
    `}_createResizer(e,i){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=e,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:s,pointerId:n,clientX:o,clientY:c}=i;s==null||s.setPointerCapture(n);const a=({clientX:d,clientY:h})=>{const f=Math.floor(d-o),u=Math.floor(h-c);this._resize({detail:{dx:f,dy:u}})};s==null||s.addEventListener("pointermove",a);const l=()=>{this.removeAttribute("resizing"),s==null||s.releasePointerCapture(n),s==null||s.removeEventListener("pointermove",a),s==null||s.removeEventListener("pointerup",l),this._dispatchResizeEvent()};s==null||s.addEventListener("pointerup",l)}_resize({detail:e}){let i,s;const n=Math.floor(e.dx*2.04),o=Math.floor(e.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",i=`${this._getBoundingClientRectWidth-n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"left":this._cursor="e",i=`${this._getBoundingClientRectWidth+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"top":this._cursor="n",s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopLeft":this._cursor="ne",i=`${this._getBoundingClientRectWidth+n}px`,s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopRight":this._cursor="nw",i=`${this._getBoundingClientRectWidth-n}px`,s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const e=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(e)}_getBoundingClientRect(e){var i;return Math.abs(parseInt((i=this.rect)==null?void 0:i.getBoundingClientRect()[e],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",Dt);const jt=Q`
  :host,
  ::slotted([slot='embedded']) {
    display: block;
    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
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
`;class Nt extends ${constructor(){super();O(this,"_onLoadElement",({target:e})=>{if(!e.contentDocument||!e.contentDocument.head.childNodes.length)return;Object.assign(e.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>e.removeAttribute("style"));const i=new CustomEvent("elementloaded",{bubbles:!0,detail:e});this.dispatchEvent(i)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[jt]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(e){super.willUpdate&&super.willUpdate(e),(e.has("src")||e.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return b`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){ge(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return b`
      <slot name="embedded"></slot>
    `}_fetch(e){var i,s,n,o;e&&(Object.assign((i=this._embeddedElement)!=null?i:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((s=this._embeddedElement)!=null?s:{},{[this._loadResource]:e}),window.performance.mark("iframestart"),Object.assign((o=(n=this._embeddedElement)==null?void 0:n.style)!=null?o:{},e.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",Nt);const Vt=Q`
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
    inline-size: 100%;
    block-size: 100%;
    color: var(--_host-color);
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  .sr-only {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
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
    block-size: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  header > div {
    position: relative;
    max-inline-size: 80rem;
    margin: 0 auto;
    padding: 0.5rem 1.5rem;
  }

  [role='heading'] {
    font-size: 1.25rem;
    margin-block-end: 0.5rem;
  }

  [role='heading'] + div {
    display: flex;
    align-items: center;
  }

  .open-externally {
    inline-size: 1rem;
    display: inline-block;
    margin-inline-start: 1rem;
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
    inline-size: 0.875rem;
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
    border-block-end: 0.125rem solid var(--_select-bgcolor);
    padding: 0.25em 1em 0.25em 0;
    margin: 0;
    inline-size: 100%;
    cursor: pointer;
    outline: none;
    border-radius: 0;
    min-inline-size: 10ch;
    max-inline-size: 18ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: var(--_select-transition);
  }

  .select select:hover,
  .select select:focus {
    border-block-end-color: currentcolor;
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
    inset-inline-end: 0.375rem;
    inset-block-start: 0.3125rem;
    opacity: 0;
    transition: opacity 90ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  blockquote-base-embedded-webview-resize {
    overflow-inline: hidden;
  }
`,Wt=b`
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
`,Ft=b`
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
`;class Gt extends ${constructor(){super();O(this,"_updateSize",({detail:e})=>{var i,s,n,o;(s=(i=this._embeddedResizeRef)==null?void 0:i.value)==null||s.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${e.width}px`),(o=(n=this._embeddedResizeRef)==null?void 0:n.value)==null||o.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${e.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=Wt,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=Lt()}static get styles(){return[Vt]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0,useDefault:!0}}}async connectedCallback(){var i,s;(i=super.connectedCallback)==null||i.call(this),await this.updateComplete,this.addEventListener("webviewresize",n=>{var c;const{detail:o}=n;Object.assign(this.__readDataPos,o),this.__resetResizing=!0,(o.cursor==="n"||o.cursor==="ne"||o.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((c=this._controlBottom)!=null?c:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const e=Array.from(this.querySelectorAll("template"));e.length&&(this._sources=e.map(n=>{const{src:o="",option:c="",description:a=""}=n.dataset;return{src:o,option:c,description:a}}),this._src=this._sources[this.selected].src),this.embedded=(s=this.shadowRoot)==null?void 0:s.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return b`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){ge(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return b`
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
      ${this._sources.some(e=>e.option)?b`
            <div class="select">
              <select @change="${this._onChangeFile}" aria-label="Cases">
                ${this._sources.map((e,i)=>b`
                    <option ?selected="${this.selected===i}" value="${i}">
                      ${e.option}
                    </option>
                  `)}
              </select>
              ${this.__selectArrow}
            </div>
          `:""}
    `}get _externalLinkTpl(){return b`
      <a href="${this._src||"#"}" target="_blank" class="open-externally">
        <span class="sr-only">View demo in a new tab</span>
        <span aria-hidden="true">${Ft}</span>
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
        <blockquote-base-embedded-webview-resize ${Ut(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return b`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:e}){this.selected=e.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",Gt);var ue=function(r,t){return ue=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])},ue(r,t)};function N(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ue(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Yt(r,t,e,i){function s(n){return n instanceof e?n:new e(function(o){o(n)})}return new(e||(e=Promise))(function(n,o){function c(d){try{l(i.next(d))}catch(h){o(h)}}function a(d){try{l(i.throw(d))}catch(h){o(h)}}function l(d){d.done?n(d.value):s(d.value).then(c,a)}l((i=i.apply(r,t||[])).next())})}function Je(r,t){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,s,n,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=c(0),o.throw=c(1),o.return=c(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(l){return function(d){return a([l,d])}}function a(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(e=0)),e;)try{if(i=1,s&&(n=l[0]&2?s.return:l[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,l[1])).done)return n;switch(s=0,n&&(l=[l[0]&2,n.value]),l[0]){case 0:case 1:n=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,s=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){e.label=l[1];break}if(l[0]===6&&e.label<n[1]){e.label=n[1],n=l;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(l);break}n[2]&&e.ops.pop(),e.trys.pop();continue}l=t.call(r,e)}catch(d){l=[6,d],s=0}finally{i=n=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function T(r){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&r[t],i=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function D(r,t){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var i=e.call(r),s,n=[],o;try{for(;(t===void 0||t-- >0)&&!(s=i.next()).done;)n.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return n}function X(r,t,e){if(e||arguments.length===2)for(var i=0,s=t.length,n;i<s;i++)(n||!(i in t))&&(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return r.concat(n||Array.prototype.slice.call(t))}function k(r){return this instanceof k?(this.v=r,this):new k(r)}function Zt(r,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(r,t||[]),s,n=[];return s=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",o),s[Symbol.asyncIterator]=function(){return this},s;function o(u){return function(v){return Promise.resolve(v).then(u,h)}}function c(u,v){i[u]&&(s[u]=function(m){return new Promise(function(V,P){n.push([u,m,V,P])>1||a(u,m)})},v&&(s[u]=v(s[u])))}function a(u,v){try{l(i[u](v))}catch(m){f(n[0][3],m)}}function l(u){u.value instanceof k?Promise.resolve(u.value.v).then(d,h):f(n[0][2],u)}function d(u){a("next",u)}function h(u){a("throw",u)}function f(u,v){u(v),n.shift(),n.length&&a(n[0][0],n[0][1])}}function Xt(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=r[Symbol.asyncIterator],e;return t?t.call(r):(r=typeof T=="function"?T(r):r[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(n){e[n]=r[n]&&function(o){return new Promise(function(c,a){o=r[n](o),s(c,a,o.done,o.value)})}}function s(n,o,c,a){Promise.resolve(a).then(function(l){n({value:l,done:c})},o)}}function p(r){return typeof r=="function"}function Qe(r){var t=function(i){Error.call(i),i.stack=new Error().stack},e=r(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var ce=Qe(function(r){return function(e){r(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(i,s){return s+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function pe(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var ee=(function(){function r(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var t,e,i,s,n;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var c=T(o),a=c.next();!a.done;a=c.next()){var l=a.value;l.remove(this)}}catch(m){t={error:m}}finally{try{a&&!a.done&&(e=c.return)&&e.call(c)}finally{if(t)throw t.error}}else o.remove(this);var d=this.initialTeardown;if(p(d))try{d()}catch(m){n=m instanceof ce?m.errors:[m]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=T(h),u=f.next();!u.done;u=f.next()){var v=u.value;try{Oe(v)}catch(m){n=n!=null?n:[],m instanceof ce?n=X(X([],D(n)),D(m.errors)):n.push(m)}}}catch(m){i={error:m}}finally{try{u&&!u.done&&(s=f.return)&&s.call(f)}finally{if(i)throw i.error}}}if(n)throw new ce(n)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)Oe(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},r.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},r.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},r.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&pe(e,t)},r.prototype.remove=function(t){var e=this._finalizers;e&&pe(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=(function(){var t=new r;return t.closed=!0,t})(),r})(),Ke=ee.EMPTY;function et(r){return r instanceof ee||r&&"closed"in r&&p(r.remove)&&p(r.add)&&p(r.unsubscribe)}function Oe(r){p(r)?r():r.unsubscribe()}var Jt={Promise:void 0},Qt={setTimeout:function(r,t){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];return setTimeout.apply(void 0,X([r,t],D(e)))},clearTimeout:function(r){return clearTimeout(r)},delegate:void 0};function tt(r){Qt.setTimeout(function(){throw r})}function fe(){}function G(r){r()}var ye=(function(r){N(t,r);function t(e){var i=r.call(this)||this;return i.isStopped=!1,e?(i.destination=e,et(e)&&e.add(i)):i.destination=tr,i}return t.create=function(e,i,s){return new be(e,i,s)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(ee),Kt=(function(){function r(t){this.partialObserver=t}return r.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(i){W(i)}},r.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(i){W(i)}else W(t)},r.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){W(e)}},r})(),be=(function(r){N(t,r);function t(e,i,s){var n=r.call(this)||this,o;return p(e)||!e?o={next:e!=null?e:void 0,error:i!=null?i:void 0,complete:s!=null?s:void 0}:o=e,n.destination=new Kt(o),n}return t})(ye);function W(r){tt(r)}function er(r){throw r}var tr={closed:!0,next:fe,error:er,complete:fe},we=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function rr(r){return r}function ir(r){return r.length===0?rr:r.length===1?r[0]:function(e){return r.reduce(function(i,s){return s(i)},e)}}var g=(function(){function r(t){t&&(this._subscribe=t)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(t,e,i){var s=this,n=nr(t)?t:new be(t,e,i);return G(function(){var o=s,c=o.operator,a=o.source;n.add(c?c.call(n,a):a?s._subscribe(n):s._trySubscribe(n))}),n},r.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},r.prototype.forEach=function(t,e){var i=this;return e=qe(e),new e(function(s,n){var o=new be({next:function(c){try{t(c)}catch(a){n(a),o.unsubscribe()}},error:n,complete:s});i.subscribe(o)})},r.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},r.prototype[we]=function(){return this},r.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return ir(t)(this)},r.prototype.toPromise=function(t){var e=this;return t=qe(t),new t(function(i,s){var n;e.subscribe(function(o){return n=o},function(o){return s(o)},function(){return i(n)})})},r.create=function(t){return new r(t)},r})();function qe(r){var t;return(t=r!=null?r:Jt.Promise)!==null&&t!==void 0?t:Promise}function sr(r){return r&&p(r.next)&&p(r.error)&&p(r.complete)}function nr(r){return r&&r instanceof ye||sr(r)&&et(r)}function or(r){return p(r==null?void 0:r.lift)}function $e(r){return function(t){if(or(t))return t.lift(function(e){try{return r(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function J(r,t,e,i,s){return new ar(r,t,e,i,s)}var ar=(function(r){N(t,r);function t(e,i,s,n,o,c){var a=r.call(this,e)||this;return a.onFinalize=o,a.shouldUnsubscribe=c,a._next=i?function(l){try{i(l)}catch(d){e.error(d)}}:r.prototype._next,a._error=n?function(l){try{n(l)}catch(d){e.error(d)}finally{this.unsubscribe()}}:r.prototype._error,a._complete=s?function(){try{s()}catch(l){e.error(l)}finally{this.unsubscribe()}}:r.prototype._complete,a}return t.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},t})(ye),cr=Qe(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),rt=(function(r){N(t,r);function t(){var e=r.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var i=new Le(this,this);return i.operator=e,i},t.prototype._throwIfClosed=function(){if(this.closed)throw new cr},t.prototype.next=function(e){var i=this;G(function(){var s,n;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var o=T(i.currentObservers),c=o.next();!c.done;c=o.next()){var a=c.value;a.next(e)}}catch(l){s={error:l}}finally{try{c&&!c.done&&(n=o.return)&&n.call(o)}finally{if(s)throw s.error}}}})},t.prototype.error=function(e){var i=this;G(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=e;for(var s=i.observers;s.length;)s.shift().error(e)}})},t.prototype.complete=function(){var e=this;G(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var i=e.observers;i.length;)i.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var i=this,s=this,n=s.hasError,o=s.isStopped,c=s.observers;return n||o?Ke:(this.currentObservers=null,c.push(e),new ee(function(){i.currentObservers=null,pe(c,e)}))},t.prototype._checkFinalizedStatuses=function(e){var i=this,s=i.hasError,n=i.thrownError,o=i.isStopped;s?e.error(n):o&&e.complete()},t.prototype.asObservable=function(){var e=new g;return e.source=this,e},t.create=function(e,i){return new Le(e,i)},t})(g),Le=(function(r){N(t,r);function t(e,i){var s=r.call(this)||this;return s.destination=e,s.source=i,s}return t.prototype.next=function(e){var i,s;(s=(i=this.destination)===null||i===void 0?void 0:i.next)===null||s===void 0||s.call(i,e)},t.prototype.error=function(e){var i,s;(s=(i=this.destination)===null||i===void 0?void 0:i.error)===null||s===void 0||s.call(i,e)},t.prototype.complete=function(){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||i===void 0||i.call(e)},t.prototype._subscribe=function(e){var i,s;return(s=(i=this.source)===null||i===void 0?void 0:i.subscribe(e))!==null&&s!==void 0?s:Ke},t})(rt),it=(function(r){return r&&typeof r.length=="number"&&typeof r!="function"});function lr(r){return p(r==null?void 0:r.then)}function dr(r){return p(r[we])}function hr(r){return Symbol.asyncIterator&&p(r==null?void 0:r[Symbol.asyncIterator])}function ur(r){return new TypeError("You provided "+(r!==null&&typeof r=="object"?"an invalid object":"'"+r+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function pr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var fr=pr();function br(r){return p(r==null?void 0:r[fr])}function vr(r){return Zt(this,arguments,function(){var e,i,s,n;return Je(this,function(o){switch(o.label){case 0:e=r.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,k(e.read())];case 3:return i=o.sent(),s=i.value,n=i.done,n?[4,k(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,k(s)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function mr(r){return p(r==null?void 0:r.getReader)}function te(r){if(r instanceof g)return r;if(r!=null){if(dr(r))return _r(r);if(it(r))return gr(r);if(lr(r))return yr(r);if(hr(r))return st(r);if(br(r))return wr(r);if(mr(r))return $r(r)}throw ur(r)}function _r(r){return new g(function(t){var e=r[we]();if(p(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function gr(r){return new g(function(t){for(var e=0;e<r.length&&!t.closed;e++)t.next(r[e]);t.complete()})}function yr(r){return new g(function(t){r.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,tt)})}function wr(r){return new g(function(t){var e,i;try{for(var s=T(r),n=s.next();!n.done;n=s.next()){var o=n.value;if(t.next(o),t.closed)return}}catch(c){e={error:c}}finally{try{n&&!n.done&&(i=s.return)&&i.call(s)}finally{if(e)throw e.error}}t.complete()})}function st(r){return new g(function(t){zr(r,t).catch(function(e){return t.error(e)})})}function $r(r){return st(vr(r))}function zr(r,t){var e,i,s,n;return Yt(this,void 0,void 0,function(){var o,c;return Je(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),e=Xt(r),a.label=1;case 1:return[4,e.next()];case 2:if(i=a.sent(),!!i.done)return[3,4];if(o=i.value,t.next(o),t.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=a.sent(),s={error:c},[3,11];case 6:return a.trys.push([6,,9,10]),i&&!i.done&&(n=e.return)?[4,n.call(e)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function Er(r){return!!r&&(r instanceof g||p(r.lift)&&p(r.subscribe))}function nt(r,t){return $e(function(e,i){var s=0;e.subscribe(J(i,function(n){i.next(r.call(t,n,s++))}))})}var Sr=Array.isArray;function Ar(r,t){return Sr(t)?r.apply(void 0,X([],D(t))):r(t)}function xr(r){return nt(function(t){return Ar(r,t)})}function kr(r,t,e,i,s,n,o,c){var a=[],l=0,d=0,h=!1,f=function(){h&&!a.length&&!l&&t.complete()},u=function(m){return l<i?v(m):a.push(m)},v=function(m){l++;var V=!1;te(e(m,d++)).subscribe(J(t,function(P){t.next(P)},function(){V=!0},void 0,function(){if(V)try{l--;for(var P=function(){var re=a.shift();o||v(re)};a.length&&l<i;)P();f()}catch(re){t.error(re)}}))};return r.subscribe(J(t,u,function(){h=!0,f()})),function(){}}function ot(r,t,e){return e===void 0&&(e=1/0),p(t)?ot(function(i,s){return nt(function(n,o){return t(i,n,s,o)})(te(r(i,s)))},e):(typeof t=="number"&&(e=t),$e(function(i,s){return kr(i,s,r,e)}))}var Cr=["addListener","removeListener"],Rr=["addEventListener","removeEventListener"],Tr=["on","off"];function Ie(r,t,e,i){if(p(e)&&(i=e,e=void 0),i)return Ie(r,t,e).pipe(xr(i));var s=D(qr(r)?Rr.map(function(c){return function(a){return r[c](t,a,e)}}):Pr(r)?Cr.map(Ue(r,t)):Or(r)?Tr.map(Ue(r,t)):[],2),n=s[0],o=s[1];if(!n&&it(r))return ot(function(c){return Ie(c,t,e)})(te(r));if(!n)throw new TypeError("Invalid event target");return new g(function(c){var a=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return c.next(1<l.length?l:l[0])};return n(a),function(){return o(a)}})}function Ue(r,t){return function(e){return function(i){return r[e](t,i)}}}function Pr(r){return p(r.addListener)&&p(r.removeListener)}function Or(r){return p(r.on)&&p(r.off)}function qr(r){return p(r.addEventListener)&&p(r.removeEventListener)}function Lr(r){return $e(function(t,e){te(r).subscribe(J(e,function(){return e.complete()},fe)),!e.closed&&t.subscribe(e)})}const le=Symbol("unsubscribe"),de=Symbol("subscriptions");class Br{constructor(t){this[le]=new rt,this[de]=new Map,(this.host=t).addController(this)}subscribe(t,e){var n;if(!Er(e))throw new Error("Invalid Observable!");const i=this[de].get(t);if(i){if((i==null?void 0:i.stream$)===e)return e;(n=i==null?void 0:i.subscription)==null||n.unsubscribe()}const s=e.pipe(Lr(this[le])).subscribe(o=>{t in this.host&&(this.host[t]=o),this.host.requestUpdate()});return this[de].set(t,{stream$:e,subscription:s}),e}hostDisconnected(){this[le].next(null)}}export{Br as BlockquoteControllerRxjs,$ as LitElement,Ie as fromEvent,b as html,nt as map};
