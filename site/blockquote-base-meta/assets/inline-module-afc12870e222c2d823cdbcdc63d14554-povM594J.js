/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,ae=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),pe=new WeakMap;let Pe=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ae&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=pe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&pe.set(t,e))}return e}toString(){return this.cssText}};const Xe=i=>new Pe(typeof i=="string"?i:i+"",void 0,de),Y=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new Pe(t,i,de)},Ge=(i,e)=>{if(ae)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=B.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},be=ae?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Xe(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fe,defineProperty:Ze,getOwnPropertyDescriptor:Je,getOwnPropertyNames:Ke,getOwnPropertySymbols:Qe,getPrototypeOf:et}=Object,v=globalThis,me=v.trustedTypes,tt=me?me.emptyScript:"",F=v.reactiveElementPolyfillSupport,L=(i,e)=>i,se={toAttribute(i,e){switch(e){case Boolean:i=i?tt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Me=(i,e)=>!Fe(i,e),ge={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:Me};var xe,ke;(xe=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ke=v.litPropertyMetadata)!=null||(v.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ze(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){var n;const{get:r,set:o}=(n=Je(this.prototype,e))!=null?n:{get(){return this[t]},set(d){this[t]=d}};return{get(){return r==null?void 0:r.call(this)},set(d){const a=r==null?void 0:r.call(this);o.call(this,d),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:ge}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;const e=et(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){const t=this.properties,s=[...Ke(t),...Qe(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(be(r))}else e!==void 0&&t.push(be(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$E_)!=null?t:this._$E_=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Ge(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){var o;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:se).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var o;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:se;this._$Em=r,this[r]=d.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,s,r=!1,o){var n;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((n=s.hasChanged)!=null?n:Me)(r?o:this[e],t))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,s){var r;this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,d]of this._$Ep)this[n]=d;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,d]of o)d.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],d)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$E_)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$ET()}catch(o){throw e=!1,this._$ET(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}};var Se;S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[L("elementProperties")]=new Map,S[L("finalized")]=new Map,F==null||F({ReactiveElement:S}),((Se=v.reactiveElementVersions)!=null?Se:v.reactiveElementVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,I=q.trustedTypes,fe=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,Le="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,qe="?"+_,it=`<${qe}>`,x=document,O=()=>x.createComment(""),H=i=>i===null||typeof i!="object"&&typeof i!="function",Ne=Array.isArray,st=i=>Ne(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Z=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ve=/>/g,y=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,$e=/"/g,Oe=/^(?:script|style|textarea|title)$/i,rt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),p=rt(1),R=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ye=new WeakMap,A=x.createTreeWalker(x,129);function He(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return fe!==void 0?fe.createHTML(e):e}const ot=(i,e)=>{const t=i.length-1,s=[];let r,o=e===2?"<svg>":"",n=P;for(let d=0;d<t;d++){const a=i[d];let l,c,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,c=n.exec(a),c!==null);)u=n.lastIndex,n===P?c[1]==="!--"?n=_e:c[1]!==void 0?n=ve:c[2]!==void 0?(Oe.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=y):c[3]!==void 0&&(n=y):n===y?c[0]===">"?(n=r!=null?r:P,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,l=c[1],n=c[3]===void 0?y:c[3]==='"'?$e:we):n===$e||n===we?n=y:n===_e||n===ve?n=P:(n=y,r=void 0);const m=n===y&&i[d+1].startsWith("/>")?" ":"";o+=n===P?a+it:h>=0?(s.push(l),a.slice(0,h)+Le+a.slice(h)+_+m):a+_+(h===-2?d:m)}return[He(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),s]};class D{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let o=0,n=0;const d=e.length-1,a=this.parts,[l,c]=ot(e,t);if(this.el=D.createElement(l,s),A.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=A.nextNode())!==null&&a.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(Le)){const u=c[n++],m=r.getAttribute(h).split(_),$=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:$[2],strings:m,ctor:$[1]==="."?at:$[1]==="?"?dt:$[1]==="@"?ht:j}),r.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:o}),r.removeAttribute(h));if(Oe.test(r.tagName)){const h=r.textContent.split(_),u=h.length-1;if(u>0){r.textContent=I?I.emptyScript:"";for(let m=0;m<u;m++)r.append(h[m],O()),A.nextNode(),a.push({type:2,index:++o});r.append(h[u],O())}}}else if(r.nodeType===8)if(r.data===qe)a.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:o}),h+=_.length-1}o++}}static createElement(e,t){const s=x.createElement("template");return s.innerHTML=e,s}}function T(i,e,t=i,s){var n,d,a;if(e===R)return e;let r=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const o=H(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((d=r==null?void 0:r._$AO)==null||d.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,s)),s!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[s]=r:t._$Cl=r),r!==void 0&&(e=T(i,r._$AS(i,e.values),r,s)),e}class nt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var l;const{el:{content:t},parts:s}=this._$AD,r=((l=e==null?void 0:e.creationScope)!=null?l:x).importNode(t,!0);A.currentNode=r;let o=A.nextNode(),n=0,d=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new he(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new ct(o,this,e)),this._$AV.push(c),a=s[++d]}n!==(a==null?void 0:a.index)&&(o=A.nextNode(),n++)}return A.currentNode=x,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}let he=class De{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,s,r){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(o=r==null?void 0:r.isConnected)!=null?o:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),H(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):st(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&H(this._$AH)?this._$AA.nextSibling.data=e:this.$(x.createTextNode(e)),this._$AH=e}g(e){var o;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=D.createElement(He(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const n=new nt(r,this),d=n.u(this.options);n.p(t),this.$(d),this._$AH=n}}_$AC(e){let t=ye.get(e.strings);return t===void 0&&ye.set(e.strings,t=new D(e)),t}T(e){Ne(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const o of e)r===t.length?t.push(s=new De(this.k(O()),this.k(O()),this,this.options)):s=t[r],s._$AI(o),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(e,t=this,s,r){const o=this.strings;let n=!1;if(o===void 0)e=T(this,e,t,0),n=!H(e)||e!==this._$AH&&e!==R,n&&(this._$AH=e);else{const d=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=T(this,d[s+a],t,a),l===R&&(l=this._$AH[a]),n||(n=!H(l)||l!==this._$AH[a]),l===b?e=b:e!==b&&(e+=(l!=null?l:"")+o[a+1]),this._$AH[a]=l}n&&!r&&this.O(e)}O(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}let at=class extends j{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===b?void 0:e}};class dt extends j{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class ht extends j{constructor(e,t,s,r,o){super(e,t,s,r,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=T(this,e,t,0))!=null?n:b)===R)return;const s=this._$AH,r=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)==null?void 0:t.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}}let ct=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}};const J=q.litHtmlPolyfillSupport;var Ce;J==null||J(D,he),((Ce=q.litHtmlVersions)!=null?Ce:q.litHtmlVersions=[]).push("3.1.0");const ce=(i,e,t)=>{var o,n;const s=(o=t==null?void 0:t.renderBefore)!=null?o:e;let r=s._$litPart$;if(r===void 0){const d=(n=t==null?void 0:t.renderBefore)!=null?n:null;s._$litPart$=r=new he(e.insertBefore(O(),d),d,void 0,t!=null?t:{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;const e=super.createRenderRoot();return(s=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return R}};var Re;w._$litElement$=!0,w.finalized=!0,(Re=globalThis.litElementHydrateSupport)==null||Re.call(globalThis,{LitElement:w});const K=globalThis.litElementPolyfillSupport;K==null||K({LitElement:w});var Te;((Te=globalThis.litElementVersions)!=null?Te:globalThis.litElementVersions=[]).push("4.0.2");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pt=i=>(...e)=>({_$litDirective$:i,values:e});let bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=(i,e)=>{var s;const t=i._$AN;if(t===void 0)return!1;for(const r of t)(s=r._$AO)==null||s.call(r,e,!1),N(r,e);return!0},W=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},Ue=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),ft(e)}};function mt(i){this._$AN!==void 0?(W(this),this._$AM=i,Ue(this)):this._$AM=i}function gt(i,e=!1,t=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let o=t;o<s.length;o++)N(s[o],!1),W(s[o]);else s!=null&&(N(s,!1),W(s));else N(this,i)}const ft=i=>{var e,t;i.type==ut.CHILD&&((e=i._$AP)!=null||(i._$AP=gt),(t=i._$AQ)!=null||(i._$AQ=mt))};let _t=class extends bt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),Ue(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,r;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),t&&(N(this,e),W(this))}setValue(e){if(lt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=()=>new wt;let wt=class{};const Q=new WeakMap,$t=pt(class extends _t{render(i){return b}update(i,[e]){var s;const t=e!==this.G;return t&&this.G!==void 0&&this.ot(void 0),(t||this.rt!==this.lt)&&(this.G=e,this.ct=(s=i.options)==null?void 0:s.host,this.ot(this.lt=i.element)),b}ot(i){var e;if(typeof this.G=="function"){const t=(e=this.ct)!=null?e:globalThis;let s=Q.get(t);s===void 0&&(s=new WeakMap,Q.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ct,void 0),s.set(this.G,i),i!==void 0&&this.G.call(this.ct,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=Q.get((i=this.ct)!=null?i:globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),yt=Y`:host {
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
}`;class zt extends w{static get styles(){return[yt]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}constructor(){super(),this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:640,id:"360x640"},{width:360,height:800,id:"360x800"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:800,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1,this._onResize=this._onResize.bind(this)}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(e){super.willUpdate&&super.willUpdate(e),e.has("screenSizes")&&this.screenSizes.sort((t,s)=>s.width-t.width),e.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const t=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(t)}}render(){return p`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return p`
      ${this.screenSizes.map((e,t)=>p`<button
            @click="${this._setSelected}"
            id="${e.id}"
            data-index="${t+1}"
            ?data-selected="${this.selected===t+1}"
            ?hidden="${!this.showOverflowSize&&e.width>this.computedStyleWidth}"
            style="${this.widthInPercent?`width: calc(100% / ${t+1});`:`width: ${e.width}px;`}"
          >
            <span>${e.id}</span>
          </button>`)}
    `}get _visualTextTpl(){return p` <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true"
      >${this.selectedSize.id}</span
    >`}_onResize(e){e.preventDefault(),e.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})}_setSelected(e){e.preventDefault(),e.stopPropagation(),this.selected=Number(e.target.dataset.index);const t=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(t)}}window.customElements.define("blockquote-base-embedded-webview-size",zt);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let At=0,Be=0,C=[],Et=0,re=!1,Ie=document.createTextNode("");new window.MutationObserver(function(){re=!1;const i=C.length;for(let e=0;e<i;e++){let t=C[e];if(t)try{t()}catch(s){setTimeout(()=>{throw s})}}C.splice(0,i),Be+=i}).observe(Ie,{characterData:!0});const xt={run:i=>(re||(re=!0,Ie.textContent=Et++),C.push(i),At++),cancel(i){const e=i-Be;if(e>=0){if(!C[e])throw new Error("invalid async handle: "+i);C[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let We=typeof document.head.style.touchAction=="string",oe="__polymerGestures",ee="__polymerGesturesHandled",ne="__polymerGesturesTouchAction",St=["mousedown","mousemove","mouseup","click"],Ct=[0,1,4,2],Rt=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Ve(i){return St.indexOf(i)>-1}let Tt=!1;(function(){try{let i=Object.defineProperty({},"passive",{get(){Tt=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();let Pt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Mt={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function z(i){let e=i.type;if(!Ve(e))return!1;if(e==="mousemove"){let t=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!Rt&&(t=Ct[i.which]||0),!!(1&t)}return(i.button===void 0?0:i.button)===0}let g={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ze(i,e,t){i.movefn=e,i.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function k(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const Ye=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],U={},E=[];function Lt(i,e){let t=document.elementFromPoint(i,e),s=t;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(i,e),r===s)break;s&&(t=s)}return t}function f(i){const e=Ye(i);return e.length>0?e[0]:i.target}function je(i){let e,t=i.type,s=i.currentTarget.__polymerGestures;if(!s)return;let r=s[t];if(r){if(!i[ee]&&(i[ee]={},t.slice(0,5)==="touch")){let o=i.changedTouches[0];if(t==="touchstart"&&i.touches.length===1&&(g.touch.id=o.identifier),g.touch.id!==o.identifier)return;We||t!=="touchstart"&&t!=="touchmove"||function(n){let d=n.changedTouches[0],a=n.type;if(a==="touchstart")g.touch.x=d.clientX,g.touch.y=d.clientY,g.touch.scrollDecided=!1;else if(a==="touchmove"){if(g.touch.scrollDecided)return;g.touch.scrollDecided=!0;let l=function(m){let $="auto",ue=Ye(m);for(let X,G=0;G<ue.length;G++)if(X=ue[G],X[ne]){$=X[ne];break}return $}(n),c=!1,h=Math.abs(g.touch.x-d.clientX),u=Math.abs(g.touch.y-d.clientY);n.cancelable&&(l==="none"?c=!0:l==="pan-x"?c=u>h:l==="pan-y"&&(c=h>u)),c?n.preventDefault():V("track")}}(i)}if(e=i[ee],!e.skip){for(let o,n=0;n<E.length;n++)o=E[n],r[o.name]&&!e[o.name]&&o.flow&&o.flow.start.indexOf(i.type)>-1&&o.reset&&o.reset();for(let o,n=0;n<E.length;n++)o=E[n],r[o.name]&&!e[o.name]&&(e[o.name]=!0,o[t](i))}}}function qt(i,e,t){return!!U[e]&&(function(s,r,o){let n=U[r],d=n.deps,a=n.name,l=s[oe];l||(s[oe]=l={});for(let c,h,u=0;u<d.length;u++)c=d[u],Pt&&Ve(c)&&c!=="click"||(h=l[c],h||(l[c]=h={_count:0}),h._count===0&&s.addEventListener(c,je,void 0),h[a]=(h[a]||0)+1,h._count=(h._count||0)+1);s.addEventListener(r,o),n.touchAction&&Ot(s,n.touchAction)}(i,e,t),!0)}function Nt(i,e,t){return!!U[e]&&(function(s,r,o){let n=U[r],d=n.deps,a=n.name,l=s[oe];if(l)for(let c,h,u=0;u<d.length;u++)c=d[u],h=l[c],h&&h[a]&&(h[a]=(h[a]||1)-1,h._count=(h._count||1)-1,h._count===0&&s.removeEventListener(c,je,void 0));s.removeEventListener(r,o)}(i,e,t),!0)}function te(i){E.push(i);for(let e=0;e<i.emits.length;e++)U[i.emits[e]]=i}function Ot(i,e){We&&i instanceof HTMLElement&&xt.run(()=>{i.style.touchAction=e}),i[ne]=e}function le(i,e,t){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=t,kt(i).dispatchEvent(s),s.defaultPrevented){let r=t.preventer||t.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function V(i){let e=function(t){for(let s,r=0;r<E.length;r++){s=E[r];for(let o,n=0;n<s.emits.length;n++)if(o=s.emits[n],o===t)return s}return null}(i);e.info&&(e.info.prevent=!0)}function M(i,e,t,s){e&&le(e,i,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:s,prevent:function(r){return V(r)}})}function Ae(i,e,t){if(i.prevent)return!1;if(i.started)return!0;let s=Math.abs(i.x-e),r=Math.abs(i.y-t);return s>=5||r>=5}function ie(i,e,t){if(!e)return;let s,r=i.moves[i.moves.length-2],o=i.moves[i.moves.length-1],n=o.x-i.x,d=o.y-i.y,a=0;r&&(s=o.x-r.x,a=o.y-r.y),le(e,"track",{state:i.state,x:t.clientX,y:t.clientY,dx:n,dy:d,ddx:s,ddy:a,sourceEvent:t,hover:function(){return Lt(t.clientX,t.clientY)}})}function Ee(i,e,t){let s=Math.abs(e.clientX-i.x),r=Math.abs(e.clientY-i.y),o=f(t||e);!o||Mt[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=25&&r<=25||function(n){if(n.type==="click"){if(n.detail===0)return!0;let d=f(n);if(!d.nodeType||d.nodeType!==Node.ELEMENT_NODE)return!0;let a=d.getBoundingClientRect(),l=n.pageX,c=n.pageY;return!(l>=a.left&&l<=a.right&&c>=a.top&&c<=a.bottom)}return!1}(e))&&(i.prevent||le(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}te({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){k(this.info)},mousedown:function(i){if(!z(i))return;let e=f(i),t=this;ze(this.info,function(s){z(s)||(M("up",e,s),k(t.info))},function(s){z(s)&&M("up",e,s),k(t.info)}),M("down",e,i)},touchstart:function(i){M("down",f(i),i.changedTouches[0],i)},touchend:function(i){M("up",f(i),i.changedTouches[0],i)}}),te({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(i){this.moves.length>2&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,k(this.info)},mousedown:function(i){if(!z(i))return;let e=f(i),t=this,s=function(r){let o=r.clientX,n=r.clientY;Ae(t.info,o,n)&&(t.info.state=t.info.started?r.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&V("tap"),t.info.addMove({x:o,y:n}),z(r)||(t.info.state="end",k(t.info)),e&&ie(t.info,e,r),t.info.started=!0)};ze(this.info,s,function(r){t.info.started&&s(r),k(t.info)}),this.info.x=i.clientX,this.info.y=i.clientY},touchstart:function(i){let e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(i){let e=f(i),t=i.changedTouches[0],s=t.clientX,r=t.clientY;Ae(this.info,s,r)&&(this.info.state==="start"&&V("tap"),this.info.addMove({x:s,y:r}),ie(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend:function(i){let e=f(i),t=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),ie(this.info,e,t))}}),te({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(i){z(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click:function(i){z(i)&&Ee(this.info,i)},touchstart:function(i){const e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(i){Ee(this.info,i.changedTouches[0],i)}});const Ht=Y`:host {
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
  padding: calc(var(--__resizer-factor) * 1) 0 calc(var(--__resizer-factor) * 2) 0;
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
}`;class Dt extends w{static get styles(){return[Ht]}constructor(){super(),this._cursor="",this._resizer=this._resizer.bind(this),this._removeResizer=this._removeResizer.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._doubleclickForCssInitialSize=this._doubleclickForCssInitialSize.bind(this),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}firstUpdated(e){var t,s,r,o,n,d,a,l,c,h,u,m;super.firstUpdated&&super.firstUpdated(e),this.rect=(t=this.shadowRoot)==null?void 0:t.querySelector(".rect"),this.bottomRightResizerElement=(s=this.shadowRoot)==null?void 0:s.querySelector(".resizer-se"),this.bottomLeftResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(".resizer-sw"),this.rightResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-e"),this.leftResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-w"),this.bottomResizerElement=(d=this.shadowRoot)==null?void 0:d.querySelector(".resizer-s"),(a=this.leftResizerElement)==null||a.addEventListener("mousedown",this._createResizerLeft),(l=this.rightResizerElement)==null||l.addEventListener("mousedown",this._createResizerRight),(c=this.bottomResizerElement)==null||c.addEventListener("mousedown",this._createResizerBottom),(h=this.bottomLeftResizerElement)==null||h.addEventListener("mousedown",this._createResizerBottomLeft),(u=this.bottomRightResizerElement)==null||u.addEventListener("mousedown",this._createResizerBottomRight),(m=this.bottomResizerElement)==null||m.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return p`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `}get _resizersTpl(){return p`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `}_doubleclickForCssInitialSize(){this.removeAttribute("style")}_createResizer(e){this._getBoundingClientRecDOMRect=e,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height"),this.setAttribute("resizing",""),qt(document,"track",this._resizer),document.addEventListener("mouseup",this._removeResizer)}_removeResizer(){this.removeAttribute("resizing"),Nt(document,"track",this._resizer),document.removeEventListener("mouseup",this._removeResizer),this._dispatchResizeEvent()}_resizer({detail:e}){let t,s;const r=Math.floor(e.dx*2.02),o=Math.floor(e.dy*1.02);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",t=`${this._getBoundingClientRectWidth-r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t);break;case"left":this._cursor="e",t=`${this._getBoundingClientRectWidth+r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t);break;case"top":this._cursor="n",s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopLeft":this._cursor="ne",t=`${this._getBoundingClientRectWidth+r}px`,s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopRight":this._cursor="nw",t=`${this._getBoundingClientRectWidth-r}px`,s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const e=new CustomEvent("webviewresize",{bubbles:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(e)}_getBoundingClientRect(e){var t;return Math.abs(parseInt((t=this.rect)==null?void 0:t.getBoundingClientRect()[e],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",Dt);const Ut=Y`:host,
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
}`;class Bt extends w{static get styles(){return[Ut]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}constructor(){super(),this.embeddedTitle="",this.src="",this.type="iframe",this._onLoadElement=this._onLoadElement.bind(this)}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(e){super.willUpdate&&super.willUpdate(e),(e.has("src")||e.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return p` ${this._embeddedTpl} ${this._litHtmlRender()} `}_litHtmlRender(){ce(this._lightDomTpl,this)}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return p`<slot name="embedded"></slot>`}_fetch(e){var t,s,r,o;e&&(Object.assign((t=this._embeddedElement)!=null?t:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((s=this._embeddedElement)!=null?s:{},{[this._loadResource]:e}),window.performance.mark("iframestart"),Object.assign((o=(r=this._embeddedElement)==null?void 0:r.style)!=null?o:{},e.indexOf("http")!==0&&{opacity:0}))}_onLoadElement({target:e}){if(!e.contentDocument||!e.contentDocument.head.childNodes.length)return;Object.assign(e.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>e.removeAttribute("style"));const t=new CustomEvent("elementloaded",{bubbles:!0,detail:e});this.dispatchEvent(t)}}window.customElements.define("blockquote-base-embedded-webview-element",Bt);const It=Y`:host {
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
}`,Wt=p`<svg
  aria-hidden="true"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentcolor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="6 9 12 15 18 9" />
</svg>`,Vt=p`
  <svg
    viewBox="0 0 20 20"
    fill-rule="evenodd"
    fill="currentcolor"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H10V4.5H4.5V15.5H15.5V10H17V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM8.062 13L7 11.938L14.438 4.5H12V3H17V8H15.5V5.562L8.062 13Z"
    />
  </svg>
`;class Yt extends w{static get styles(){return[It]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0}}}constructor(){super(),this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=Wt,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._updateSize=this._updateSize.bind(this),this._embeddedResizeRef=vt()}connectedCallback(){var t;super.connectedCallback&&super.connectedCallback(),(t=this.shadowRoot)==null||t.addEventListener("webviewresize",s=>{var o;const{detail:r}=s;Object.assign(this.__readDataPos,r),this.__resetResizing=!0,(r.cursor==="n"||r.cursor==="ne"||r.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((o=this._controlBottom)!=null?o:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const e=Array.from(this.querySelectorAll("template"));e.length&&(this._sources=e.map(s=>{const{src:r="",option:o="",description:n=""}=s.dataset;return{src:r,option:o,description:n}}),this._src=this._sources[this.selected].src)}firstUpdated(e){var t;super.firstUpdated&&super.firstUpdated(e),this.embedded=(t=this.shadowRoot)==null?void 0:t.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}_updateSize({detail:e}){var t,s,r,o;(s=(t=this._embeddedResizeRef)==null?void 0:t.value)==null||s.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${e.width}px`),(o=(r=this._embeddedResizeRef)==null?void 0:r.value)==null||o.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${e.height}px`),this.__resetResizing=!1,this.requestUpdate()}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return p` ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}`}_litHtmlRender(){ce(this._lightDomTpl,this)}get _lightDomTpl(){return this.embedded}get _headerTpl(){return p`
      <header>
        <div>
          ${this._headingTpl} ${this._navigationDemosTpl} ${this._descriptionTpl}
          ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return p`<div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>`}get _navigationDemosTpl(){return p` <div>${this._selectTpl}${this._externalLinkTpl}</div> `}get _selectTpl(){return p`
      ${this._sources.some(e=>e.option)?p`
            <div class="select">
              <select @change="${this._onChangeFile}" aria-label="Cases">
                ${this._sources.map((e,t)=>p`
                    <option ?selected="${this.selected===t}" value="${t}">
                      ${e.option}
                    </option>
                  `)}
              </select>
              ${this.__selectArrow}
            </div>
          `:""}
    `}get _externalLinkTpl(){return p`<a href="${this._src||"#"}" target="_blank" class="open-externally">
      <span class="sr-only">View demo in a new tab</span
      ><span aria-hidden="true">${Vt}</span></a
    >`}get _descriptionTpl(){return p` <p class="description">${this._sources[this.selected].description}</p>`}get _readDataPosTpl(){return p`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing?1:0}"
      >
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return p` <blockquote-base-embedded-webview-size
      .disabledSelectedSizeText="${this.__resetResizing}"
      @click="${this._updateSize}"
      @selectedchange="${this._updateSize}"
      .selected="${this.screenSizeSelected}"
    ></blockquote-base-embedded-webview-size>`}get _mainTpl(){return p`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${$t(this._embeddedResizeRef)}>
          <slot name="embedded"> ${this._embeddedSlotTpl} </slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return p` <blockquote-base-embedded-webview-element
      slot="embedded"
      .src="${this._src||""}"
      .embeddedTitle="${this._sources[this.selected].option||"Demo"}"
    >
    </blockquote-base-embedded-webview-element>`}_onChangeFile({target:e}){this.selected=e.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",Yt);
