var Te=Object.defineProperty;var Pe=(r,e,t)=>e in r?Te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var w=(r,e,t)=>Pe(r,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,Y=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),Q=new WeakMap;let ge=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Y&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Q.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(t,e))}return e}toString(){return this.cssText}};const He=r=>new ge(typeof r=="string"?r:r+"",void 0,Z),k=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new ge(t,r,Z)},qe=(r,e)=>{if(Y)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=O.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},ee=Y?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return He(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Me,defineProperty:Le,getOwnPropertyDescriptor:Oe,getOwnPropertyNames:Ue,getOwnPropertySymbols:Be,getPrototypeOf:De}=Object,v=globalThis,te=v.trustedTypes,Ne=te?te.emptyScript:"",N=v.reactiveElementPolyfillSupport,R=(r,e)=>r,F={toAttribute(r,e){switch(e){case Boolean:r=r?Ne:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},_e=(r,e)=>!Me(r,e),se={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:_e};var le,ce;(le=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ce=v.litPropertyMetadata)!=null||(v.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Le(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){var o;const{get:i,set:n}=(o=Oe(this.prototype,e))!=null?o:{get(){return this[t]},set(h){this[t]=h}};return{get:i,set(h){const a=i==null?void 0:i.call(this);n==null||n.call(this,h),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:se}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const e=De(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const t=this.properties,s=[...Ue(t),...Be(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(ee(i))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return qe(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:F).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n,o,h,a;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const d=s.getPropertyOptions(i),l=typeof d.converter=="function"?{fromAttribute:d.converter}:((n=d.converter)==null?void 0:n.fromAttribute)!==void 0?d.converter:F;this._$Em=i,this[i]=(a=(h=l.fromAttribute(t,d.type))!=null?h:(o=this._$Ej)==null?void 0:o.get(i))!=null?a:null,this._$Em=null}}requestUpdate(e,t,s){var i,n;if(e!==void 0){const o=this.constructor,h=this[e];if(s!=null||(s=o.getPropertyOptions(e)),!(((i=s.hasChanged)!=null?i:_e)(h,t)||s.useDefault&&s.reflect&&h===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},o){var h,a,d;s&&!((h=this._$Ej)!=null?h:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(a=o!=null?o:t)!=null?a:this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&((d=this._$Eq)!=null?d:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,h]of this._$Ep)this[o]=h;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,h]of n){const{wrapped:a}=h,d=this[o];a!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,h,d)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};var ue;E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[R("elementProperties")]=new Map,E[R("finalized")]=new Map,N==null||N({ReactiveElement:E}),((ue=v.reactiveElementVersions)!=null?ue:v.reactiveElementVersions=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,U=T.trustedTypes,ie=U?U.createPolicy("lit-html",{createHTML:r=>r}):void 0,ve="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,fe="?"+_,Ie=`<${fe}>`,x=document,H=()=>x.createComment(""),q=r=>r===null||typeof r!="object"&&typeof r!="function",X=Array.isArray,Ve=r=>X(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",I=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,oe=/>/g,$=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,ae=/"/g,we=/^(?:script|style|textarea|title)$/i,je=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=je(1),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),he=new WeakMap,y=x.createTreeWalker(x,129);function $e(r,e){if(!X(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ie!==void 0?ie.createHTML(e):e}const We=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",o=S;for(let h=0;h<t;h++){const a=r[h];let d,l,c=-1,b=0;for(;b<a.length&&(o.lastIndex=b,l=o.exec(a),l!==null);)b=o.lastIndex,o===S?l[1]==="!--"?o=re:l[1]!==void 0?o=oe:l[2]!==void 0?(we.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=$):l[3]!==void 0&&(o=$):o===$?l[0]===">"?(o=i!=null?i:S,c=-1):l[1]===void 0?c=-2:(c=o.lastIndex-l[2].length,d=l[1],o=l[3]===void 0?$:l[3]==='"'?ae:ne):o===ae||o===ne?o=$:o===re||o===oe?o=S:(o=$,i=void 0);const m=o===$&&r[h+1].startsWith("/>")?" ":"";n+=o===S?a+Ie:c>=0?(s.push(d),a.slice(0,c)+ve+a.slice(c)+_+m):a+_+(c===-2?h:m)}return[$e(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class M{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const h=e.length-1,a=this.parts,[d,l]=We(e,t);if(this.el=M.createElement(d,s),y.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=y.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ve)){const b=l[o++],m=i.getAttribute(c).split(_),f=/([.?@])?(.*)/.exec(b);a.push({type:1,index:n,name:f[2],strings:m,ctor:f[1]==="."?Fe:f[1]==="?"?Ye:f[1]==="@"?Ze:D}),i.removeAttribute(c)}else c.startsWith(_)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(we.test(i.tagName)){const c=i.textContent.split(_),b=c.length-1;if(b>0){i.textContent=U?U.emptyScript:"";for(let m=0;m<b;m++)i.append(c[m],H()),y.nextNode(),a.push({type:2,index:++n});i.append(c[b],H())}}}else if(i.nodeType===8)if(i.data===fe)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(_,c+1))!==-1;)a.push({type:7,index:n}),c+=_.length-1}n++}}static createElement(e,t){const s=x.createElement("template");return s.innerHTML=e,s}}function C(r,e,t=r,s){var o,h,a;if(e===A)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=q(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}class Ge{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var d;const{el:{content:t},parts:s}=this._$AD,i=((d=e==null?void 0:e.creationScope)!=null?d:x).importNode(t,!0);y.currentNode=i;let n=y.nextNode(),o=0,h=0,a=s[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new L(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new Xe(n,this,e)),this._$AV.push(l),a=s[++h]}o!==(a==null?void 0:a.index)&&(n=y.nextNode(),o++)}return y.currentNode=x,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class L{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,s,i){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(n=i==null?void 0:i.isConnected)!=null?n:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),q(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ve(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=M.createElement($e(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Ge(i,this),h=o.u(this.options);o.p(t),this.T(h),this._$AH=o}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new M(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new L(this.O(H()),this.O(H()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=C(this,e,t,0),o=!q(e)||e!==this._$AH&&e!==A,o&&(this._$AH=e);else{const h=e;let a,d;for(e=n[0],a=0;a<n.length-1;a++)d=C(this,h[s+a],t,a),d===A&&(d=this._$AH[a]),o||(o=!q(d)||d!==this._$AH[a]),d===p?e=p:e!==p&&(e+=(d!=null?d:"")+n[a+1]),this._$AH[a]=d}o&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Fe extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Ye extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Ze extends D{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=C(this,e,t,0))!=null?o:p)===A)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)==null?void 0:t.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}}class Xe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const V=T.litHtmlPolyfillSupport;var pe;V==null||V(M,L),((pe=T.litHtmlVersions)!=null?pe:T.litHtmlVersions=[]).push("3.3.0");const J=(r,e,t)=>{var n,o;const s=(n=t==null?void 0:t.renderBefore)!=null?n:e;let i=s._$litPart$;if(i===void 0){const h=(o=t==null?void 0:t.renderBefore)!=null?o:null;s._$litPart$=i=new L(e.insertBefore(H(),h),h,void 0,t!=null?t:{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis;let g=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;const e=super.createRenderRoot();return(s=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=J(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return A}};var be;g._$litElement$=!0,g.finalized=!0,(be=z.litElementHydrateSupport)==null||be.call(z,{LitElement:g});const j=z.litElementPolyfillSupport;j==null||j({LitElement:g});var me;((me=z.litElementVersions)!=null?me:z.litElementVersions=[]).push("4.2.0");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye={ATTRIBUTE:1,CHILD:2},ze=r=>(...e)=>({_$litDirective$:r,values:e});let xe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(r,e)=>{var s;const t=r._$AN;if(t===void 0)return!1;for(const i of t)(s=i._$AO)==null||s.call(i,e,!1),P(i,e);return!0},B=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Ae=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),et(e)}};function Ke(r){this._$AN!==void 0?(B(this),this._$AM=r,Ae(this)):this._$AM=r}function Qe(r,e=!1,t=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let n=t;n<s.length;n++)P(s[n],!1),B(s[n]);else s!=null&&(P(s,!1),B(s));else P(this,r)}const et=r=>{var e,t;r.type==ye.CHILD&&((e=r._$AP)!=null||(r._$AP=Qe),(t=r._$AQ)!=null||(r._$AQ=Ke))};class tt extends xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),Ae(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),t&&(P(this,e),B(this))}setValue(e){if(Je(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=()=>new it;class it{}const W=new WeakMap,rt=ze(class extends tt{render(r){return p}update(r,[e]){var s;const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(s=r.options)==null?void 0:s.host,this.rt(this.ct=r.element)),p}rt(r){var e;if(this.isConnected||(r=void 0),typeof this.G=="function"){const t=(e=this.ht)!=null?e:globalThis;let s=W.get(t);s===void 0&&(s=new WeakMap,W.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,e,t;return typeof this.G=="function"?(e=W.get((r=this.ht)!=null?r:globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ot=k`
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
`;class nt extends g{constructor(){super();w(this,"_onResize",t=>{t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[ot]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((s,i)=>i.width-s.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const s=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(s)}}render(){return u`
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
    `}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const s=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(s)}}window.customElements.define("blockquote-base-embedded-webview-size",nt);const at=k`
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
`;class ht extends g{constructor(){super();w(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[at]}async connectedCallback(){var t,s,i,n,o,h,a,d,l,c,b,m,f;(t=super.connectedCallback)==null||t.call(this),await this.updateComplete,this.rect=(s=this.shadowRoot)==null?void 0:s.querySelector(".rect"),this.bottomRightResizerElement=(i=this.shadowRoot)==null?void 0:i.querySelector(".resizer-se"),this.bottomLeftResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-sw"),this.rightResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-e"),this.leftResizerElement=(h=this.shadowRoot)==null?void 0:h.querySelector(".resizer-w"),this.bottomResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-s"),(d=this.leftResizerElement)==null||d.addEventListener("pointerdown",this._createResizerLeft),(l=this.rightResizerElement)==null||l.addEventListener("pointerdown",this._createResizerRight),(c=this.bottomResizerElement)==null||c.addEventListener("pointerdown",this._createResizerBottom),(b=this.bottomLeftResizerElement)==null||b.addEventListener("pointerdown",this._createResizerBottomLeft),(m=this.bottomRightResizerElement)==null||m.addEventListener("pointerdown",this._createResizerBottomRight),(f=this.bottomResizerElement)==null||f.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return u`
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
    `}_createResizer(t,s){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:i,pointerId:n,clientX:o,clientY:h}=s;i==null||i.setPointerCapture(n);const a=({clientX:l,clientY:c})=>{const b=Math.floor(l-o),m=Math.floor(c-h);this._resize({detail:{dx:b,dy:m}})};i==null||i.addEventListener("pointermove",a);const d=()=>{this.removeAttribute("resizing"),i==null||i.releasePointerCapture(n),i==null||i.removeEventListener("pointermove",a),i==null||i.removeEventListener("pointerup",d),this._dispatchResizeEvent()};i==null||i.addEventListener("pointerup",d)}_resize({detail:t}){let s,i;const n=Math.floor(t.dx*2.04),o=Math.floor(t.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",s=`${this._getBoundingClientRectWidth-n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s);break;case"left":this._cursor="e",s=`${this._getBoundingClientRectWidth+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s);break;case"top":this._cursor="n",i=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",i);break;case"scaleTopLeft":this._cursor="ne",s=`${this._getBoundingClientRectWidth+n}px`,i=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",i);break;case"scaleTopRight":this._cursor="nw",s=`${this._getBoundingClientRectWidth-n}px`,i=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",i);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var s;return Math.abs(parseInt((s=this.rect)==null?void 0:s.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",ht);const dt=k`
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
`;class lt extends g{constructor(){super();w(this,"_onLoadElement",({target:t})=>{if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const s=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(s)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[dt]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return u`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){J(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return u`
      <slot name="embedded"></slot>
    `}_fetch(t){var s,i,n,o;t&&(Object.assign((s=this._embeddedElement)!=null?s:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((i=this._embeddedElement)!=null?i:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((o=(n=this._embeddedElement)==null?void 0:n.style)!=null?o:{},t.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",lt);const ct=k`
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
`,ut=u`
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
`,pt=u`
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
`;class bt extends g{constructor(){super();w(this,"_updateSize",({detail:t})=>{var s,i,n,o;(i=(s=this._embeddedResizeRef)==null?void 0:s.value)==null||i.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(o=(n=this._embeddedResizeRef)==null?void 0:n.value)==null||o.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=ut,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=st()}static get styles(){return[ct]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0,useDefault:!0}}}async connectedCallback(){var s,i;(s=super.connectedCallback)==null||s.call(this),await this.updateComplete,this.addEventListener("webviewresize",n=>{var h;const{detail:o}=n;Object.assign(this.__readDataPos,o),this.__resetResizing=!0,(o.cursor==="n"||o.cursor==="ne"||o.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((h=this._controlBottom)!=null?h:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(n=>{const{src:o="",option:h="",description:a=""}=n.dataset;return{src:o,option:h,description:a}}),this._src=this._sources[this.selected].src),this.embedded=(i=this.shadowRoot)==null?void 0:i.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return u`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){J(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return u`
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
        <span aria-hidden="true">${pt}</span>
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
        <blockquote-base-embedded-webview-resize ${rt(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return u`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",bt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ee=class extends Event{constructor(e,t,s,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=s,this.subscribe=i!=null?i:!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mt=class{constructor(e,t,s,i){var n;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,h)=>{this.unsubscribe&&(this.unsubscribe!==h&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,h)),this.unsubscribe=h},this.host=e,t.context!==void 0){const o=t;this.context=o.context,this.callback=o.callback,this.subscribe=(n=o.subscribe)!=null?n:!1}else this.context=t,this.callback=s,this.subscribe=i!=null?i:!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ee(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gt=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _t extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}}let vt=class extends gt{constructor(e,t,s){var i,n;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=o=>{var a;if(o.context!==this.context)return;const h=(a=o.contextTarget)!=null?a:o.composedPath()[0];h!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,h,o.subscribe))},this.onProviderRequest=o=>{var a;if(o.context!==this.context||((a=o.contextTarget)!=null?a:o.composedPath()[0])===this.host)return;const h=new Set;for(const[d,{consumerHost:l}]of this.subscriptions)h.has(d)||(h.add(d),l.dispatchEvent(new Ee(this.context,l,d,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(i=this.host).addController)==null||n.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new _t(this.context,this.host))}};const ft=Symbol.for("context-meta-symbol");class Ce{constructor(e,{context:t=ft,initialValue:s,callback:i}){var n,o;this.context=t,this.initialValue=s,this.callback=i,this.host=e,this._contextMetaProvider=new vt(this.host,{context:this.context,initialValue:this.initialValue}),(o=(n=this.host).addController)==null||o.call(n,this)}get value(){var e;return(e=this._contextMetaConsumer)==null?void 0:e.value}setValue(e,t=!1){var s,i;(i=(s=this._contextMetaProvider)==null?void 0:s.setValue)==null||i.call(s,e,t)}async hostConnected(){await this.host.updateComplete,window.queueMicrotask(()=>{this._contextMetaConsumer=new mt(this.host,{context:this.context,subscribe:!0,callback:this.callback})})}}class ke extends g{connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.hasAttribute("role")||this.setAttribute("role","none")}render(){return u`
      <slot></slot>
    `}}w(ke,"styles",k`
    :host {
      display: block;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }
  `);customElements.define("base-context-meta",ke);const G=["indianred","blue","orange","green","purple"];class Se extends g{constructor(){super(),this._consumer=new Ce(this,{context:Symbol.for("level"),initialValue:{level:1,color:G[0]},callback:e=>{const{level:t}=e;this._consumer.setValue({level:t+1,color:G[(t+1)%G.length]})}})}render(){return u`
      <section><slot></slot></section>
    `}}w(Se,"styles",k`
    :host {
      display: block;
      text-align: center;
    }

    :host([hidden]) {
      display: none;
    }
  `);customElements.define("my-section",Se);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=Symbol.for(""),wt=r=>{if((r==null?void 0:r.r)===K)return r==null?void 0:r._$litStatic$},$t=r=>({_$litStatic$:r,r:K}),yt=(r,...e)=>({_$litStatic$:e.reduce((t,s,i)=>t+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+r[i+1],r[0]),r:K}),de=new Map,zt=r=>(e,...t)=>{const s=t.length;let i,n;const o=[],h=[];let a,d=0,l=!1;for(;d<s;){for(a=e[d];d<s&&(n=t[d],(i=wt(n))!==void 0);)a+=i+e[++d],l=!0;d!==s&&h.push(n),o.push(a),d++}if(d===s&&o.push(e[s]),l){const c=o.join("$$lit$$");(e=de.get(c))===void 0&&(o.raw=o,de.set(c,e=o)),t=h}return r(e,...t)},xt=zt(u);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re="important",At=" !"+Re,Et=ze(class extends xe{constructor(r){var e;if(super(r),r.type!==ye.ATTRIBUTE||r.name!=="style"||((e=r.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{const s=r[t];return s==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(r,[e]){const{style:t}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?t.removeProperty(s):t[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ft.add(s);const n=typeof i=="string"&&i.endsWith(At);s.includes("-")||n?t.setProperty(s,n?i.slice(0,-11):i,n?Re:""):t[s]=i}}return A}});class Ct extends g{constructor(){super(),this._level=new Ce(this,{context:Symbol.for("level")})}get _tag(){var t,s;const e=(s=(t=this._level)==null?void 0:t.value)==null?void 0:s.level;return typeof e=="number"&&e>=0&&e<=5?$t(`h${e}`):yt`p`}render(){var e,t;return xt`
      <${this._tag} style=${Et({color:(t=(e=this._level)==null?void 0:e.value)==null?void 0:t.color})}>
        <slot></slot>
      </${this._tag}>`}}customElements.define("my-heading",Ct);class kt extends g{render(){return u`
      <my-section id="root-1">
        <my-heading>Heading level 1</my-heading>
        <my-section id="1">
          <my-heading>Heading level 2</my-heading>
        </my-section>
        <my-section id="2">
          <my-heading>Heading level 2</my-heading>
          <my-section id="2.1">
            <my-heading>Heading level 3</my-heading>
          </my-section>
          <my-section id="2.2">
            <my-heading>Heading level 3</my-heading>
            <my-section id="2.3">
              <my-heading>Heading level 4</my-heading>
            </my-section>
          </my-section>
        </my-section>
        <my-section id="3">
          <my-heading>Heading level 2</my-heading>
          <my-section id="3.1">
            <my-heading>Heading level 3</my-heading>
            <my-section id="3.2">
              <my-heading>Heading level 4</my-heading>
            </my-section>
            <my-section id="3.3">
              <my-heading>Heading level 4</my-heading>
            </my-section>
          </my-section>
        </my-section>
      </my-section>
      <hr />
      <my-section id="root-2">
        <my-heading>Heading level 1</my-heading>
        <my-section id="1">
          <my-heading>Heading level 2</my-heading>
          <my-section id="1.1">
            <my-heading>Heading level 3</my-heading>
            <my-section id="1.2">
              <my-heading>Heading level 4</my-heading>
              <my-section id="1.3">
                <my-heading>Heading level 5</my-heading>
              </my-section>
            </my-section>
          </my-section>
        </my-section>
        <my-section id="2">
          <my-heading>Heading level 2</my-heading>
          <my-section id="2.1">
            <my-heading>Heading level 3</my-heading>
            <my-section id="2.3">
              <my-heading>Heading level 4</my-heading>
            </my-section>
          </my-section>
        </my-section>
      </my-section>
    `}}customElements.define("my-app",kt);
