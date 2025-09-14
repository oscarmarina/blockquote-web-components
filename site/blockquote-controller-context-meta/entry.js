var je=Object.defineProperty;var ce=r=>{throw TypeError(r)};var We=(r,e,t)=>e in r?je(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var v=(r,e,t)=>We(r,typeof e!="symbol"?e+"":e,t),he=(r,e,t)=>e.has(r)||ce("Cannot "+t);var N=(r,e,t)=>(he(r,e,"read from private field"),t?t.call(r):e.get(r)),F=(r,e,t)=>e.has(r)?ce("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Y=(r,e,t,s)=>(he(r,e,"write to private field"),s?s.call(r,t):e.set(r,t),t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,ie=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol(),ue=new WeakMap;let Te=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ie&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ue.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ue.set(t,e))}return e}toString(){return this.cssText}};const Ge=r=>new Te(typeof r=="string"?r:r+"",void 0,re),$=(r,...e)=>{const t=r.length===1?r[0]:e.reduce(((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1]),r[0]);return new Te(t,r,re)},Fe=(r,e)=>{if(ie)r.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const s=document.createElement("style"),i=V.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},pe=ie?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ge(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ye,defineProperty:Ze,getOwnPropertyDescriptor:Xe,getOwnPropertyNames:Ke,getOwnPropertySymbols:Je,getPrototypeOf:Qe}=Object,w=globalThis,be=w.trustedTypes,et=be?be.emptyScript:"",Z=w.reactiveElementPolyfillSupport,T=(r,e)=>r,te={toAttribute(r,e){switch(e){case Boolean:r=r?et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Pe=(r,e)=>!Ye(r,e),me={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:Pe};var Ee,Ae;(Ee=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Ae=w.litPropertyMetadata)!=null||(w.litPropertyMetadata=new WeakMap);let k=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ze(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){var n;const{get:i,set:o}=(n=Xe(this.prototype,e))!=null?n:{get(){return this[t]},set(l){this[t]=l}};return{get:i,set(l){const a=i==null?void 0:i.call(this);o==null||o.call(this,l),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:me}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=Qe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,s=[...Ke(t),...Je(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(pe(i))}else e!==void 0&&t.push(pe(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach((t=>t(this)))}addController(e){var t,s;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Fe(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach((s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach((t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var o;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:te).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var o,n,l;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:te;this._$Em=i;const c=d.fromAttribute(t,a.type);this[i]=(l=c!=null?c:(n=this._$Ej)==null?void 0:n.get(i))!=null?l:c,this._$Em=null}}requestUpdate(e,t,s){var i,o;if(e!==void 0){const n=this.constructor,l=this[e];if(s!=null||(s=n.getPropertyOptions(e)),!(((i=s.hasChanged)!=null?i:Pe)(l,t)||s.useDefault&&s.reflect&&l===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:o},n){var l,a,d;s&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(a=n!=null?n:t)!=null?a:this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&((d=this._$Eq)!=null?d:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,l]of o){const{wrapped:a}=l,d=this[n];a!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,l,d)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach((o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)})),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach((s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach((t=>this._$ET(t,this[t])))),this._$EM()}updated(e){}firstUpdated(e){}};var ke;k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[T("elementProperties")]=new Map,k[T("finalized")]=new Map,Z==null||Z({ReactiveElement:k}),((ke=w.reactiveElementVersions)!=null?ke:w.reactiveElementVersions=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,j=P.trustedTypes,ge=j?j.createPolicy("lit-html",{createHTML:r=>r}):void 0,He="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,qe="?"+f,tt=`<${qe}>`,A=document,M=()=>A.createComment(""),L=r=>r===null||typeof r!="object"&&typeof r!="function",ne=Array.isArray,st=r=>ne(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",X=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,_e=/>/g,z=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,we=/"/g,Me=/^(?:script|style|textarea|title)$/i,it=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=it(1),_=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),$e=new WeakMap,x=A.createTreeWalker(A,129);function Le(r,e){if(!ne(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ge!==void 0?ge.createHTML(e):e}const rt=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=R;for(let l=0;l<t;l++){const a=r[l];let d,c,h=-1,b=0;for(;b<a.length&&(n.lastIndex=b,c=n.exec(a),c!==null);)b=n.lastIndex,n===R?c[1]==="!--"?n=ve:c[1]!==void 0?n=_e:c[2]!==void 0?(Me.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=z):c[3]!==void 0&&(n=z):n===z?c[0]===">"?(n=i!=null?i:R,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?z:c[3]==='"'?we:fe):n===we||n===fe?n=z:n===ve||n===_e?n=R:(n=z,i=void 0);const g=n===z&&r[l+1].startsWith("/>")?" ":"";o+=n===R?a+tt:h>=0?(s.push(d),a.slice(0,h)+He+a.slice(h)+f+g):a+f+(h===-2?l:g)}return[Le(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class U{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[d,c]=rt(e,t);if(this.el=U.createElement(d,s),x.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=x.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(He)){const b=c[n++],g=i.getAttribute(h).split(f),y=/([.?@])?(.*)/.exec(b);a.push({type:1,index:o,name:y[2],strings:g,ctor:y[1]==="."?ot:y[1]==="?"?at:y[1]==="@"?lt:G}),i.removeAttribute(h)}else h.startsWith(f)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(Me.test(i.tagName)){const h=i.textContent.split(f),b=h.length-1;if(b>0){i.textContent=j?j.emptyScript:"";for(let g=0;g<b;g++)i.append(h[g],M()),x.nextNode(),a.push({type:2,index:++o});i.append(h[b],M())}}}else if(i.nodeType===8)if(i.data===qe)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(f,h+1))!==-1;)a.push({type:7,index:o}),h+=f.length-1}o++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function S(r,e,t=r,s){var n,l,a;if(e===_)return e;let i=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const o=L(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[s]=i:t._$Cl=i),i!==void 0&&(e=S(r,i._$AS(r,e.values),i,s)),e}class nt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var d;const{el:{content:t},parts:s}=this._$AD,i=((d=e==null?void 0:e.creationScope)!=null?d:A).importNode(t,!0);x.currentNode=i;let o=x.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new B(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new dt(o,this,e)),this._$AV.push(c),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=x.nextNode(),n++)}return x.currentNode=A,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class B{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,s,i){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(o=i==null?void 0:i.isConnected)!=null?o:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),L(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==_&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):st(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=U.createElement(Le(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const n=new nt(i,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=$e.get(e.strings);return t===void 0&&$e.set(e.strings,t=new U(e)),t}k(e){ne(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new B(this.O(M()),this.O(M()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=S(this,e,t,0),n=!L(e)||e!==this._$AH&&e!==_,n&&(this._$AH=e);else{const l=e;let a,d;for(e=o[0],a=0;a<o.length-1;a++)d=S(this,l[s+a],t,a),d===_&&(d=this._$AH[a]),n||(n=!L(d)||d!==this._$AH[a]),d===p?e=p:e!==p&&(e+=(d!=null?d:"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ot extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class at extends G{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class lt extends G{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=S(this,e,t,0))!=null?n:p)===_)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)==null?void 0:t.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}}class dt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const K=P.litHtmlPolyfillSupport;var Ce;K==null||K(U,B),((Ce=P.litHtmlVersions)!=null?Ce:P.litHtmlVersions=[]).push("3.3.1");const oe=(r,e,t)=>{var o,n;const s=(o=t==null?void 0:t.renderBefore)!=null?o:e;let i=s._$litPart$;if(i===void 0){const l=(n=t==null?void 0:t.renderBefore)!=null?n:null;s._$litPart$=i=new B(e.insertBefore(M(),l),l,void 0,t!=null?t:{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;let m=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;const e=super.createRenderRoot();return(s=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return _}};var Se;m._$litElement$=!0,m.finalized=!0,(Se=E.litElementHydrateSupport)==null||Se.call(E,{LitElement:m});const J=E.litElementPolyfillSupport;J==null||J({LitElement:m});var Re;((Re=E.litElementVersions)!=null?Re:E.litElementVersions=[]).push("4.2.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H={ATTRIBUTE:1,CHILD:2,ELEMENT:6},ae=r=>(...e)=>({_$litDirective$:r,values:e});let le=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=(r,e)=>{var s;const t=r._$AN;if(t===void 0)return!1;for(const i of t)(s=i._$AO)==null||s.call(i,e,!1),q(i,e);return!0},W=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Ue=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),pt(e)}};function ht(r){this._$AN!==void 0?(W(this),this._$AM=r,Ue(this)):this._$AM=r}function ut(r,e=!1,t=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let o=t;o<s.length;o++)q(s[o],!1),W(s[o]);else s!=null&&(q(s,!1),W(s));else q(this,r)}const pt=r=>{var e,t;r.type==H.CHILD&&((e=r._$AP)!=null||(r._$AP=ut),(t=r._$AQ)!=null||(r._$AQ=ht))};class bt extends le{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),Ue(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),t&&(q(this,e),W(this))}setValue(e){if(ct(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=()=>new gt;class gt{}const Q=new WeakMap,vt=ae(class extends bt{render(r){return p}update(r,[e]){var s;const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(s=r.options)==null?void 0:s.host,this.rt(this.ct=r.element)),p}rt(r){var e;if(this.isConnected||(r=void 0),typeof this.G=="function"){const t=(e=this.ht)!=null?e:globalThis;let s=Q.get(t);s===void 0&&(s=new WeakMap,Q.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,e,t;return typeof this.G=="function"?(e=Q.get((r=this.ht)!=null?r:globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),_t=$`
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
`;class ft extends m{constructor(){super();v(this,"_onResize",t=>{t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[_t]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((s,i)=>i.width-s.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const s=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(s)}}render(){return u`
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
    `}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const s=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(s)}}window.customElements.define("blockquote-base-embedded-webview-size",ft);const wt=$`
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
    padding-block: calc(var(--__resizer-factor) * 1) calc(var(--__resizer-factor) * 2);
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
`;class $t extends m{constructor(){super();v(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[wt]}async connectedCallback(){var t,s,i,o,n,l,a,d,c,h,b,g,y;(t=super.connectedCallback)==null||t.call(this),await this.updateComplete,this.rect=(s=this.shadowRoot)==null?void 0:s.querySelector(".rect"),this.bottomRightResizerElement=(i=this.shadowRoot)==null?void 0:i.querySelector(".resizer-se"),this.bottomLeftResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-sw"),this.rightResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-e"),this.leftResizerElement=(l=this.shadowRoot)==null?void 0:l.querySelector(".resizer-w"),this.bottomResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-s"),(d=this.leftResizerElement)==null||d.addEventListener("pointerdown",this._createResizerLeft),(c=this.rightResizerElement)==null||c.addEventListener("pointerdown",this._createResizerRight),(h=this.bottomResizerElement)==null||h.addEventListener("pointerdown",this._createResizerBottom),(b=this.bottomLeftResizerElement)==null||b.addEventListener("pointerdown",this._createResizerBottomLeft),(g=this.bottomRightResizerElement)==null||g.addEventListener("pointerdown",this._createResizerBottomRight),(y=this.bottomResizerElement)==null||y.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return u`
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
    `}_createResizer(t,s){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:i,pointerId:o,clientX:n,clientY:l}=s;i==null||i.setPointerCapture(o);const a=({clientX:c,clientY:h})=>{const b=Math.floor(c-n),g=Math.floor(h-l);this._resize({detail:{dx:b,dy:g}})};i==null||i.addEventListener("pointermove",a);const d=()=>{this.removeAttribute("resizing"),i==null||i.releasePointerCapture(o),i==null||i.removeEventListener("pointermove",a),i==null||i.removeEventListener("pointerup",d),this._dispatchResizeEvent()};i==null||i.addEventListener("pointerup",d)}_resize({detail:t}){let s,i;const o=Math.floor(t.dx*2.04),n=Math.floor(t.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",s=`${this._getBoundingClientRectWidth-o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s);break;case"left":this._cursor="e",s=`${this._getBoundingClientRectWidth+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s);break;case"top":this._cursor="n",i=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",i);break;case"scaleTopLeft":this._cursor="ne",s=`${this._getBoundingClientRectWidth+o}px`,i=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",i);break;case"scaleTopRight":this._cursor="nw",s=`${this._getBoundingClientRectWidth-o}px`,i=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",s),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",i);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var s;return Math.abs(parseInt((s=this.rect)==null?void 0:s.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",$t);const yt=$`
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
`;class zt extends m{constructor(){super();v(this,"_onLoadElement",({target:t})=>{if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const s=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(s)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[yt]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return u`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){oe(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return u`
      <slot name="embedded"></slot>
    `}_fetch(t){var s,i,o,n;t&&(Object.assign((s=this._embeddedElement)!=null?s:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((i=this._embeddedElement)!=null?i:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((n=(o=this._embeddedElement)==null?void 0:o.style)!=null?n:{},t.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",zt);const xt=$`
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
    padding-block: 0.5rem;
    padding-inline: 1.5rem;
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
    padding-block: 0.25em;
    padding-inline: 0 1em;
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
    margin-inline: 0;
    margin-block: 0.5rem 1rem;
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
    overflow-x: hidden;
    overflow-inline: hidden;
  }
`,Et=u`
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
`,At=u`
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
`;class kt extends m{constructor(){super();v(this,"_updateSize",({detail:t})=>{var s,i,o,n;(i=(s=this._embeddedResizeRef)==null?void 0:s.value)==null||i.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(n=(o=this._embeddedResizeRef)==null?void 0:o.value)==null||n.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=Et,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=mt()}static get styles(){return[xt]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0,useDefault:!0}}}async connectedCallback(){var s,i;(s=super.connectedCallback)==null||s.call(this),await this.updateComplete,this.addEventListener("webviewresize",o=>{var l;const{detail:n}=o;Object.assign(this.__readDataPos,n),this.__resetResizing=!0,(n.cursor==="n"||n.cursor==="ne"||n.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((l=this._controlBottom)!=null?l:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(o=>{const{src:n="",option:l="",description:a=""}=o.dataset;return{src:n,option:l,description:a}}),this._src=this._sources[this.selected].src),this.embedded=(i=this.shadowRoot)==null?void 0:i.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return u`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){oe(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return u`
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
              <select id="select-sources" @change="${this._onChangeFile}" aria-label="Cases">
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
        <span aria-hidden="true">${At}</span>
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
        <blockquote-base-embedded-webview-resize ${vt(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return u`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",kt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Oe=class extends Event{constructor(e,t,s,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=s,this.subscribe=i!=null?i:!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ct=class{constructor(e,t,s,i){var o;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=(o=n.subscribe)!=null?o:!1}else this.context=t,this.callback=s,this.subscribe=i!=null?i:!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Oe(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let St=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rt extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}}let Tt=class extends St{constructor(e,t,s){var i,o;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=n=>{var a;if(n.context!==this.context)return;const l=(a=n.contextTarget)!=null?a:n.composedPath()[0];l!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,l,n.subscribe))},this.onProviderRequest=n=>{var a;if(n.context!==this.context||((a=n.contextTarget)!=null?a:n.composedPath()[0])===this.host)return;const l=new Set;for(const[d,{consumerHost:c}]of this.subscriptions)l.has(d)||(l.add(d),c.dispatchEvent(new Oe(this.context,c,d,!0)));n.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(o=(i=this.host).addController)==null||o.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Rt(this.context,this.host))}};const Be=Symbol.for("context-meta-symbol");class D{constructor(e,{context:t=Be,initialValue:s,callback:i},o=!1){var n,l;this.context=t,this.initialValue=s,this.callback=i,this.host=e,o||(this._contextMetaProvider=new Tt(this.host,{context:this.context,initialValue:this.initialValue})),(l=(n=this.host).addController)==null||l.call(n,this)}get value(){var e;return(e=this._contextMetaConsumer)==null?void 0:e.value}setValue(e,t=!1){var s,i;(i=(s=this._contextMetaProvider)==null?void 0:s.setValue)==null||i.call(s,e,t)}async hostConnected(){await this.host.updateComplete,window.queueMicrotask(()=>{this._contextMetaConsumer=new Ct(this.host,{context:this.context,subscribe:!0,callback:this.callback})})}}class De extends m{connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.hasAttribute("role")||this.setAttribute("role","none")}render(){return u`
      <slot></slot>
    `}}v(De,"styles",$`
    :host {
      display: block;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }
  `);customElements.define("base-context-meta",De);const ye=new WeakMap,Pt=r=>{let e=ye.get(r);return e||(e=new Map,ye.set(r,e)),e},Ht=(r,{context:e=Be,initialValue:t})=>{const s={context:e,initialValue:t},i=s.context,o=Pt(r);let n=o.get(i);return n||(n=new D(r,s),o.set(i,n)),n};var C,O;class qt extends le{constructor(t){super(t);F(this,C);F(this,O);if(t.type!==H.ATTRIBUTE&&t.type!==H.ELEMENT)throw new Error("contextMetaProviderDirective can only be used in an attribute or element directive.");Y(this,C,t)}render(t,s){return t!==N(this,O)?(Y(this,O,t),this.updateValue(t,s),this.resolveAttrValue(t)):_}updateValue(t,s){const i=N(this,C).element;Ht(i,s).setValue(t)}resolveAttrValue(t){return N(this,C).type!==H.ATTRIBUTE?_:t}}C=new WeakMap,O=new WeakMap;const ze=ae(qt),ee=["indianred","blue","orange","green","purple"];class Ne extends m{constructor(){super(),this._consumer=new D(this,{context:Symbol.for("level"),initialValue:{level:1,color:ee[0]},callback:e=>{const{level:t}=e;this._consumer.setValue({level:t+1,color:ee[(t+1)%ee.length]})}})}render(){return u`
      <section><slot></slot></section>
    `}}v(Ne,"styles",$`
    :host {
      display: block;
      text-align: center;
    }

    :host([hidden]) {
      display: none;
    }
  `);customElements.define("my-section",Ne);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=Symbol.for(""),Mt=r=>{if((r==null?void 0:r.r)===de)return r==null?void 0:r._$litStatic$},Lt=r=>({_$litStatic$:r,r:de}),Ut=(r,...e)=>({_$litStatic$:e.reduce(((t,s,i)=>t+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+r[i+1]),r[0]),r:de}),xe=new Map,Ot=r=>(e,...t)=>{const s=t.length;let i,o;const n=[],l=[];let a,d=0,c=!1;for(;d<s;){for(a=e[d];d<s&&(o=t[d],(i=Mt(o))!==void 0);)a+=i+e[++d],c=!0;d!==s&&l.push(o),n.push(a),d++}if(d===s&&n.push(e[s]),c){const h=n.join("$$lit$$");(e=xe.get(h))===void 0&&(n.raw=n,xe.set(h,e=n)),t=l}return r(e,...t)},Bt=Ot(u);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve="important",Dt=" !"+Ve,Nt=ae(class extends le{constructor(r){var e;if(super(r),r.type!==H.ATTRIBUTE||r.name!=="style"||((e=r.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce(((e,t)=>{const s=r[t];return s==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(r,[e]){const{style:t}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?t.removeProperty(s):t[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ft.add(s);const o=typeof i=="string"&&i.endsWith(Dt);s.includes("-")||o?t.setProperty(s,o?i.slice(0,-11):i,o?Ve:""):t[s]=i}}return _}});class Vt extends m{constructor(){super(),this._level=new D(this,{context:Symbol.for("level")})}get _tag(){var t,s;const e=(s=(t=this._level)==null?void 0:t.value)==null?void 0:s.level;return typeof e=="number"&&e>=0&&e<=5?Lt(`h${e}`):Ut`p`}render(){var e,t;return Bt`
      <${this._tag} style=${Nt({color:(t=(e=this._level)==null?void 0:e.value)==null?void 0:t.color})}>
        <slot></slot>
      </${this._tag}>`}}customElements.define("my-heading",Vt);class It extends m{render(){return u`
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
    `}}customElements.define("my-app",It);const I=Symbol.for("symbol-for-surface");class se extends m{constructor(){super(),this._provider=new D(this,{context:I}),this.data=void 0}willUpdate(e){var t;(t=super.willUpdate)==null||t.call(this,e),e.has("data")&&this._provider.setValue(this.data)}render(){return u`
      <p>
        Provider data:
        <code>${this.data}</code>
      </p>
      <consumer-el></consumer-el>
      <div
        id="data-info-1"
        data-info="${ze(`${this.data} #data-info-1`,{context:I})}">
        <p>Div Element (Provider)</p>
        <consumer-el></consumer-el>
      </div>
      <div
        id="data-info-2"
        ${ze(`${this.data} #data-info-2`,{context:I})}>
        <p>Div Element (Provider)</p>
        <slot></slot>
        <hr />
        <consumer-el></consumer-el>
      </div>
    `}}v(se,"styles",$`
    :host {
      display: block;
      border: 1px solid #adadad;
      padding: 0.5rem;
    }

    p {
      margin-block: 0.25rem;
    }

    p ~ * {
      margin-block-start: 1rem;
    }

    div {
      border: 1px solid #adadad;
      padding: 0.5rem;
    }
  `),v(se,"properties",{data:{reflect:!0}});customElements.define("provider-el",se);class Ie extends m{constructor(){super(...arguments);v(this,"_consumer",new D(this,{context:I}))}render(){return u`
      <p>
        Consumer data:
        <code>${this._consumer.value}</code>
      </p>
    `}}v(Ie,"styles",$`
    :host {
      display: block;
      border: 1px dashed #adadad;
      padding: 0.25rem;
      padding-inline: 0.5rem;
    }
  `);customElements.define("consumer-el",Ie);
