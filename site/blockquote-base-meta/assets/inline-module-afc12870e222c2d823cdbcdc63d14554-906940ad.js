var Ve=Object.defineProperty,Ge=Object.defineProperties;var Ze=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var pe=(i,e,t)=>e in i?Ve(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,be=(i,e)=>{for(var t in e||(e={}))Je.call(e,t)&&pe(i,t,e[t]);if(ue)for(var t of ue(e))Ke.call(e,t)&&pe(i,t,e[t]);return i},ve=(i,e)=>Ge(i,Ze(e));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=window,ae=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),me=new WeakMap;let Ne=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ae&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=me.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&me.set(t,e))}return e}toString(){return this.cssText}};const Qe=i=>new Ne(typeof i=="string"?i:i+"",void 0,he),W=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new Ne(t,i,he)},et=(i,e)=>{ae?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),r=D.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)})},ge=ae?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Qe(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;const H=window,fe=H.trustedTypes,tt=fe?fe.emptyScript:"",_e=H.reactiveElementPolyfillSupport,oe={toAttribute(i,e){switch(e){case Boolean:i=i?tt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch(s){t=null}}return t}},Oe=(i,e)=>e!==i&&(e==e||i==i),J={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:Oe};let x=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const r=this._$Ep(s,t);r!==void 0&&(this._$Ev.set(r,s),e.push(r))}),e}static createProperty(e,t=J){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||J}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of s)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(ge(r))}else e!==void 0&&t.push(ge(e));return t}static _$Ep(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return et(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=J){var r;const o=this.constructor._$Ep(e,s);if(o!==void 0&&s.reflect===!0){const n=(((r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?s.converter:oe).toAttribute(t,s.type);this._$El=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var s;const r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){const n=r.getPropertyOptions(o),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:oe;this._$El=o,this[o]=h.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,s){let r=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||Oe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(s)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},_e==null||_e({ReactiveElement:x}),((Z=H.reactiveElementVersions)!==null&&Z!==void 0?Z:H.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const I=window,C=I.trustedTypes,we=C?C.createPolicy("lit-html",{createHTML:i=>i}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,Le="?"+f,it=`<${Le}>`,R=document,O=(i="")=>R.createComment(i),L=i=>i===null||typeof i!="object"&&typeof i!="function",Ue=Array.isArray,st=i=>Ue(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,ye=/>/g,y=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ze=/'/g,Ee=/"/g,Be=/^(?:script|style|textarea|title)$/i,De=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),b=De(1),rt=De(2),T=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ae=new WeakMap,S=R.createTreeWalker(R,129,null,!1),ot=(i,e)=>{const t=i.length-1,s=[];let r,o=e===2?"<svg>":"",n=M;for(let d=0;d<t;d++){const l=i[d];let u,a,c=-1,v=0;for(;v<l.length&&(n.lastIndex=v,a=n.exec(l),a!==null);)v=n.lastIndex,n===M?a[1]==="!--"?n=$e:a[1]!==void 0?n=ye:a[2]!==void 0?(Be.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=y):a[3]!==void 0&&(n=y):n===y?a[0]===">"?(n=r!=null?r:M,c=-1):a[1]===void 0?c=-2:(c=n.lastIndex-a[2].length,u=a[1],n=a[3]===void 0?y:a[3]==='"'?Ee:ze):n===Ee||n===ze?n=y:n===$e||n===ye?n=M:(n=y,r=void 0);const w=n===y&&i[d+1].startsWith("/>")?" ":"";o+=n===M?l+it:c>=0?(s.push(u),l.slice(0,c)+"$lit$"+l.slice(c)+f+w):l+f+(c===-2?(s.push(void 0),d):w)}const h=o+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[we!==void 0?we.createHTML(h):h,s]};class U{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let o=0,n=0;const h=e.length-1,d=this.parts,[l,u]=ot(e,t);if(this.el=U.createElement(l,s),S.currentNode=this.el.content,t===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(r=S.nextNode())!==null&&d.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const a=[];for(const c of r.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(f)){const v=u[n++];if(a.push(c),v!==void 0){const w=r.getAttribute(v.toLowerCase()+"$lit$").split(f),$=/([.?@])?(.*)/.exec(v);d.push({type:1,index:o,name:$[2],strings:w,ctor:$[1]==="."?dt:$[1]==="?"?at:$[1]==="@"?ht:F})}else d.push({type:6,index:o})}for(const c of a)r.removeAttribute(c)}if(Be.test(r.tagName)){const a=r.textContent.split(f),c=a.length-1;if(c>0){r.textContent=C?C.emptyScript:"";for(let v=0;v<c;v++)r.append(a[v],O()),S.nextNode(),d.push({type:2,index:++o});r.append(a[c],O())}}}else if(r.nodeType===8)if(r.data===Le)d.push({type:2,index:o});else{let a=-1;for(;(a=r.data.indexOf(f,a+1))!==-1;)d.push({type:7,index:o}),a+=f.length-1}o++}}static createElement(e,t){const s=R.createElement("template");return s.innerHTML=e,s}}function P(i,e,t=i,s){var r,o,n,h;if(e===T)return e;let d=s!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[s]:t._$Cl;const l=L(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==l&&((o=d==null?void 0:d._$AO)===null||o===void 0||o.call(d,!1),l===void 0?d=void 0:(d=new l(i),d._$AT(i,t,s)),s!==void 0?((n=(h=t)._$Co)!==null&&n!==void 0?n:h._$Co=[])[s]=d:t._$Cl=d),d!==void 0&&(e=P(i,d._$AS(i,e.values),d,s)),e}class nt{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:s},parts:r}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:R).importNode(s,!0);S.currentNode=o;let n=S.nextNode(),h=0,d=0,l=r[0];for(;l!==void 0;){if(h===l.index){let u;l.type===2?u=new X(n,n.nextSibling,this,e):l.type===1?u=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(u=new ct(n,this,e)),this.u.push(u),l=r[++d]}h!==(l==null?void 0:l.index)&&(n=S.nextNode(),h++)}return o}p(e){let t=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}let X=class{constructor(e,t,s,r){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cm=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),L(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==T&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):st(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==p&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=U.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(s);else{const n=new nt(o,this),h=n.v(this.options);n.p(s),this.T(h),this._$AH=n}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new U(e)),t}k(e){Ue(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const o of e)r===t.length?t.push(s=new X(this.O(O()),this.O(O()),this,this.options)):s=t[r],s._$AI(o),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}};class F{constructor(e,t,s,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,r){const o=this.strings;let n=!1;if(o===void 0)e=P(this,e,t,0),n=!L(e)||e!==this._$AH&&e!==T,n&&(this._$AH=e);else{const h=e;let d,l;for(e=o[0],d=0;d<o.length-1;d++)l=P(this,h[s+d],t,d),l===T&&(l=this._$AH[d]),n||(n=!L(l)||l!==this._$AH[d]),l===p?e=p:e!==p&&(e+=(l!=null?l:"")+o[d+1]),this._$AH[d]=l}n&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}let dt=class extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}};const lt=C?C.emptyScript:"";let at=class extends F{constructor(){super(...arguments),this.type=4}j(e){e&&e!==p?this.element.setAttribute(this.name,lt):this.element.removeAttribute(this.name)}};class ht extends F{constructor(e,t,s,r,o){super(e,t,s,r,o),this.type=5}_$AI(e,t=this){var s;if((e=(s=P(this,e,t,0))!==null&&s!==void 0?s:p)===T)return;const r=this._$AH,o=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==p&&(r===p||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class ct{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const xe=I.litHtmlPolyfillSupport;xe==null||xe(U,X),((K=I.litHtmlVersions)!==null&&K!==void 0?K:I.litHtmlVersions=[]).push("2.6.1");const ut=(i,e,t)=>{var s,r;const o=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let n=o._$litPart$;if(n===void 0){const h=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new X(e.insertBefore(O(),h),h,void 0,t!=null?t:{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q,ee;let _=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ut(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return T}};_.finalized=!0,_._$litElement$=!0,(Q=globalThis.litElementHydrateSupport)===null||Q===void 0||Q.call(globalThis,{LitElement:_});const Se=globalThis.litElementPolyfillSupport;Se==null||Se({LitElement:_});((ee=globalThis.litElementVersions)!==null&&ee!==void 0?ee:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vt=i=>(...e)=>({_$litDirective$:i,values:e});let mt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=(i,e)=>{var t,s;const r=i._$AN;if(r===void 0)return!1;for(const o of r)(s=(t=o)._$AO)===null||s===void 0||s.call(t,e,!1),N(o,e);return!0},Y=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},He=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),_t(e)}};function gt(i){this._$AN!==void 0?(Y(this),this._$AM=i,He(this)):this._$AM=i}function ft(i,e=!1,t=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let o=t;o<s.length;o++)N(s[o],!1),Y(s[o]);else s!=null&&(N(s,!1),Y(s));else N(this,i)}const _t=i=>{var e,t,s,r;i.type==bt.CHILD&&((e=(s=i)._$AP)!==null&&e!==void 0||(s._$AP=ft),(t=(r=i)._$AQ)!==null&&t!==void 0||(r._$AQ=gt))};let wt=class extends mt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),He(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,r;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)===null||s===void 0||s.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),t&&(N(this,e),Y(this))}setValue(e){if(pt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=()=>new yt;let yt=class{};const te=new WeakMap,zt=vt(class extends wt{render(i){return p}update(i,[e]){var t;const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.rt(this.ct=i.element)),p}rt(i){var e;if(typeof this.Y=="function"){const t=(e=this.dt)!==null&&e!==void 0?e:globalThis;let s=te.get(t);s===void 0&&(s=new WeakMap,te.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.dt,void 0),s.set(this.Y,i),i!==void 0&&this.Y.call(this.dt,i)}else this.Y.value=i}get lt(){var i,e,t;return typeof this.Y=="function"?(e=te.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.Y):(t=this.Y)===null||t===void 0?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Et=W`:host {
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
}`;class ke extends _{static get is(){return"blockquote-base-embedded-webview-size"}static get styles(){return[Et]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}constructor(){super(),this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:640,id:"360x640"},{width:360,height:800,id:"360x800"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:800,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1,this._onResize=this._onResize.bind(this)}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return ve(be({},this.selectedSize),{index:this.selected})}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(e){super.willUpdate&&super.willUpdate(e),e.has("screenSizes")&&this.screenSizes.sort((t,s)=>s.width-t.width),e.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const t=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(t)}}render(){return b`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return b`
      ${this.screenSizes.map((e,t)=>b`<button
          @click="${this._setSelected}"
          id="${e.id}"
          data-index="${t+1}"
          ?data-selected="${this.selected===t+1}"
          ?hidden="${!this.showOverflowSize&&e.width>this.computedStyleWidth}"
          style="${this.widthInPercent?`width: calc(100% / ${t+1});`:`width: ${e.width}px;`}"
        >
          <span>${e.id}</span>
        </button>`)}
    `}get _visualTextTpl(){return b` <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true"
      >${this.selectedSize.id}</span
    >`}_onResize(e){e.preventDefault(),e.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})}_setSelected(e){e.preventDefault(),e.stopPropagation(),this.selected=Number(e.target.dataset.index);const t=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(t)}}window.customElements.define(ke.is,ke);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let At=0,Ie=0,k=[],xt=0,ne=!1,Ye=document.createTextNode("");new window.MutationObserver(function(){ne=!1;const i=k.length;for(let e=0;e<i;e++){let t=k[e];if(t)try{t()}catch(s){setTimeout(()=>{throw s})}}k.splice(0,i),Ie+=i}).observe(Ye,{characterData:!0});const St={run:i=>(ne||(ne=!0,Ye.textContent=xt++),k.push(i),At++),cancel(i){const e=i-Ie;if(e>=0){if(!k[e])throw new Error("invalid async handle: "+i);k[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;let je=typeof document.head.style.touchAction=="string",de="__polymerGestures",ie="__polymerGesturesHandled",le="__polymerGesturesTouchAction",Ct=["mousedown","mousemove","mouseup","click"],Rt=[0,1,4,2],Tt=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch(i){return!1}}();function We(i){return Ct.indexOf(i)>-1}let Pt=!1;(function(){try{let i=Object.defineProperty({},"passive",{get(){Pt=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch(i){}})();let Mt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const qt={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function z(i){let e=i.type;if(!We(e))return!1;if(e==="mousemove"){let t=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!Tt&&(t=Rt[i.which]||0),Boolean(1&t)}return(i.button===void 0?0:i.button)===0}let m={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ce(i,e,t){i.movefn=e,i.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function A(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const Xe=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],B={},E=[];function Nt(i,e){let t=document.elementFromPoint(i,e),s=t;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(i,e),r===s)break;s&&(t=s)}return t}function g(i){const e=Xe(i);return e.length>0?e[0]:i.target}function Fe(i){let e,t=i.type,s=i.currentTarget.__polymerGestures;if(!s)return;let r=s[t];if(r){if(!i[ie]&&(i[ie]={},t.slice(0,5)==="touch")){let o=i.changedTouches[0];if(t==="touchstart"&&i.touches.length===1&&(m.touch.id=o.identifier),m.touch.id!==o.identifier)return;je||t!=="touchstart"&&t!=="touchmove"||function(n){let h=n.changedTouches[0],d=n.type;if(d==="touchstart")m.touch.x=h.clientX,m.touch.y=h.clientY,m.touch.scrollDecided=!1;else if(d==="touchmove"){if(m.touch.scrollDecided)return;m.touch.scrollDecided=!0;let l=function(v){let w="auto",$=Xe(v);for(let V,G=0;G<$.length;G++)if(V=$[G],V[le]){w=V[le];break}return w}(n),u=!1,a=Math.abs(m.touch.x-h.clientX),c=Math.abs(m.touch.y-h.clientY);n.cancelable&&(l==="none"?u=!0:l==="pan-x"?u=c>a:l==="pan-y"&&(u=a>c)),u?n.preventDefault():j("track")}}(i)}if(e=i[ie],!e.skip){for(let o,n=0;n<E.length;n++)o=E[n],r[o.name]&&!e[o.name]&&o.flow&&o.flow.start.indexOf(i.type)>-1&&o.reset&&o.reset();for(let o,n=0;n<E.length;n++)o=E[n],r[o.name]&&!e[o.name]&&(e[o.name]=!0,o[t](i))}}}function Ot(i,e,t){return!!B[e]&&(function(s,r,o){let n=B[r],h=n.deps,d=n.name,l=s[de];l||(s[de]=l={});for(let u,a,c=0;c<h.length;c++)u=h[c],Mt&&We(u)&&u!=="click"||(a=l[u],a||(l[u]=a={_count:0}),a._count===0&&s.addEventListener(u,Fe,void 0),a[d]=(a[d]||0)+1,a._count=(a._count||0)+1);s.addEventListener(r,o),n.touchAction&&Ut(s,n.touchAction)}(i,e,t),!0)}function Lt(i,e,t){return!!B[e]&&(function(s,r,o){let n=B[r],h=n.deps,d=n.name,l=s[de];if(l)for(let u,a,c=0;c<h.length;c++)u=h[c],a=l[u],a&&a[d]&&(a[d]=(a[d]||1)-1,a._count=(a._count||1)-1,a._count===0&&s.removeEventListener(u,Fe,void 0));s.removeEventListener(r,o)}(i,e,t),!0)}function se(i){E.push(i);for(let e=0;e<i.emits.length;e++)B[i.emits[e]]=i}function Ut(i,e){je&&i instanceof HTMLElement&&St.run(()=>{i.style.touchAction=e}),i[le]=e}function ce(i,e,t){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=t,kt(i).dispatchEvent(s),s.defaultPrevented){let r=t.preventer||t.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function j(i){let e=function(t){for(let s,r=0;r<E.length;r++){s=E[r];for(let o,n=0;n<s.emits.length;n++)if(o=s.emits[n],o===t)return s}return null}(i);e.info&&(e.info.prevent=!0)}function q(i,e,t,s){e&&ce(e,i,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:s,prevent:function(r){return j(r)}})}function Re(i,e,t){if(i.prevent)return!1;if(i.started)return!0;let s=Math.abs(i.x-e),r=Math.abs(i.y-t);return s>=5||r>=5}function re(i,e,t){if(!e)return;let s,r=i.moves[i.moves.length-2],o=i.moves[i.moves.length-1],n=o.x-i.x,h=o.y-i.y,d=0;r&&(s=o.x-r.x,d=o.y-r.y),ce(e,"track",{state:i.state,x:t.clientX,y:t.clientY,dx:n,dy:h,ddx:s,ddy:d,sourceEvent:t,hover:function(){return Nt(t.clientX,t.clientY)}})}function Te(i,e,t){let s=Math.abs(e.clientX-i.x),r=Math.abs(e.clientY-i.y),o=g(t||e);!o||qt[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=25&&r<=25||function(n){if(n.type==="click"){if(n.detail===0)return!0;let h=g(n);if(!h.nodeType||h.nodeType!==Node.ELEMENT_NODE)return!0;let d=h.getBoundingClientRect(),l=n.pageX,u=n.pageY;return!(l>=d.left&&l<=d.right&&u>=d.top&&u<=d.bottom)}return!1}(e))&&(i.prevent||ce(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}se({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){A(this.info)},mousedown:function(i){if(!z(i))return;let e=g(i),t=this;Ce(this.info,function(s){z(s)||(q("up",e,s),A(t.info))},function(s){z(s)&&q("up",e,s),A(t.info)}),q("down",e,i)},touchstart:function(i){q("down",g(i),i.changedTouches[0],i)},touchend:function(i){q("up",g(i),i.changedTouches[0],i)}}),se({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(i){this.moves.length>2&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,A(this.info)},mousedown:function(i){if(!z(i))return;let e=g(i),t=this,s=function(r){let o=r.clientX,n=r.clientY;Re(t.info,o,n)&&(t.info.state=t.info.started?r.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&j("tap"),t.info.addMove({x:o,y:n}),z(r)||(t.info.state="end",A(t.info)),e&&re(t.info,e,r),t.info.started=!0)};Ce(this.info,s,function(r){t.info.started&&s(r),A(t.info)}),this.info.x=i.clientX,this.info.y=i.clientY},touchstart:function(i){let e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(i){let e=g(i),t=i.changedTouches[0],s=t.clientX,r=t.clientY;Re(this.info,s,r)&&(this.info.state==="start"&&j("tap"),this.info.addMove({x:s,y:r}),re(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend:function(i){let e=g(i),t=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),re(this.info,e,t))}}),se({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(i){z(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click:function(i){z(i)&&Te(this.info,i)},touchstart:function(i){const e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(i){Te(this.info,i.changedTouches[0],i)}});const Bt=W`:host {
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
}`;class Pe extends _{static get is(){return"blockquote-base-embedded-webview-resize"}static get styles(){return[Bt]}constructor(){super(),this._cursor="",this._resizer=this._resizer.bind(this),this._removeResizer=this._removeResizer.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._doubleclickForCssInitialSize=this._doubleclickForCssInitialSize.bind(this)}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),this.rect=this.shadowRoot.querySelector(".rect"),this.bottomRightResizerElement=this.shadowRoot.querySelector(".resizer-se"),this.bottomLeftResizerElement=this.shadowRoot.querySelector(".resizer-sw"),this.rightResizerElement=this.shadowRoot.querySelector(".resizer-e"),this.leftResizerElement=this.shadowRoot.querySelector(".resizer-w"),this.bottomResizerElement=this.shadowRoot.querySelector(".resizer-s"),this.leftResizerElement.addEventListener("mousedown",this._createResizerLeft),this.rightResizerElement.addEventListener("mousedown",this._createResizerRight),this.bottomResizerElement.addEventListener("mousedown",this._createResizerBottom),this.bottomLeftResizerElement.addEventListener("mousedown",this._createResizerBottomLeft),this.bottomRightResizerElement.addEventListener("mousedown",this._createResizerBottomRight),this.bottomResizerElement.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return b`
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
    `}_doubleclickForCssInitialSize(){this.removeAttribute("style")}_createResizer(e){this._getBoundingClientRecDOMRect=e,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height"),this.setAttribute("resizing",""),Ot(document,"track",this._resizer),document.addEventListener("mouseup",this._removeResizer)}_removeResizer(){this.removeAttribute("resizing"),Lt(document,"track",this._resizer),document.removeEventListener("mouseup",this._removeResizer),this._dispatchResizeEvent()}_resizer({detail:e}){let t,s;const r=Math.floor(e.dx*2.02),o=Math.floor(e.dy*1.02);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",t=`${this._getBoundingClientRectWidth-r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t);break;case"left":this._cursor="e",t=`${this._getBoundingClientRectWidth+r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t);break;case"top":this._cursor="n",s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopLeft":this._cursor="ne",t=`${this._getBoundingClientRectWidth+r}px`,s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopRight":this._cursor="nw",t=`${this._getBoundingClientRectWidth-r}px`,s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const e=new CustomEvent("webviewresize",{bubbles:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(e)}_getBoundingClientRect(e){return Math.abs(parseInt(this.rect.getBoundingClientRect()[e],10))}}window.customElements.define(Pe.is,Pe);const Dt=W`:host,
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
}`;class Me extends _{static get is(){return"blockquote-base-embedded-webview-element"}static get styles(){return[Dt]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}constructor(){super(),this.embeddedTitle="",this.src="",this.type="iframe",this._onLoadElement=this._onLoadElement.bind(this)}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement),this.append(this._embeddedElement))}willUpdate(e){super.willUpdate&&super.willUpdate(e),e.has("src")&&this.src!==""&&this._fetch(this.src)}render(){return b` ${this._embeddedTpl} `}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return b`<slot name="embedded"></slot>`}_fetch(e){e&&(Object.assign(this._embeddedElement,this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),this._embeddedElement[this._loadResource]=e,window.performance.mark("iframestart"),Object.assign(this._embeddedElement.style,e.indexOf("http")!==0&&{opacity:0}))}_onLoadElement({target:e}){if(!e.contentDocument||!e.contentDocument.head.childNodes.length)return;Object.assign(e.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>e.removeAttribute("style"));const t=new CustomEvent("elementloaded",{bubbles:!0,detail:e});this.dispatchEvent(t)}}window.customElements.define(Me.is,Me);const Ht=W`:host {
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

[role=heading] {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

header > div {
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
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
  padding: 0.2857142857em 1.2857142857em 0.2857142857em 0;
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
}`,It=rt`<svg aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<polyline points="6 9 12 15 18 9" />
</svg>`;class qe extends _{static get is(){return"blockquote-base-embedded-webview"}static get styles(){return[Ht]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0}}}constructor(){super(),this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=It,this.__readDataPos={x:0,y:0,resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{file:"",option:"",description:""}],this._updateSize=this._updateSize.bind(this),this._embeddedResizeRef=$t()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("webviewresize",({detail:t})=>{Object.assign(this.__readDataPos,t),this.__resetResizing=!0,(t.cursor==="n"||t.cursor==="ne"||t.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+this._controlBottom),left:0,behavior:"smooth"}),this.requestUpdate()});const e=Array.from(this.querySelectorAll("template"));e.length&&(this._sources=e.map(t=>{const{src:s,option:r,description:o}=t.dataset;return{src:s,option:r,description:o}}),this._src=this._sources[this.selected].src)}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),this.embedded=this.shadowRoot.querySelector('[slot="embedded"]'),this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom),this.append(this.embedded)}_updateSize({detail:e}){this._embeddedResizeRef.value.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${e.width}px`),this._embeddedResizeRef.value.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${e.height}px`),this.__resetResizing=!1,this.requestUpdate()}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return b` ${this._headerTpl} ${this._mainTpl} `}get _headerTpl(){return b`
      <header>
        <div>
          ${this._headingTpl} ${this._selectTpl} ${this._descriptionTpl} ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return b`<div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>`}get _selectTpl(){return b`
      ${this._sources.some(e=>e.option)?b`
            <div class="select">
              <select @change="${this._onChangeFile}" aria-label="Cases">
                ${this._sources.map((e,t)=>b`
                    <option ?selected="${this.selected===t}" value="${t}">
                      ${e.option}
                    </option>
                  `)}
              </select>
              ${this.__selectArrow}
            </div>
          `:""}
    `}get _descriptionTpl(){return b` <p class="description">${this._sources[this.selected].description}</p>`}get _readDataPosTpl(){return b`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing?1:0}"
      >
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return b` <blockquote-base-embedded-webview-size
      .disabledSelectedSizeText="${this.__resetResizing}"
      @click="${this._updateSize}"
      @selectedchange="${this._updateSize}"
      .selected="${this.screenSizeSelected}"
    ></blockquote-base-embedded-webview-size>`}get _mainTpl(){return b`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${zt(this._embeddedResizeRef)}>
          <slot name="embedded"> ${this._embeddedSlotTpl} </slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return b` <blockquote-base-embedded-webview-element
      slot="embedded"
      .src="${this._src}"
      .embeddedTitle="${this._sources[this.selected].option||"Demo"}"
    >
    </blockquote-base-embedded-webview-element>`}_onChangeFile({target:e}){this.selected=e.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define(qe.is,qe);
