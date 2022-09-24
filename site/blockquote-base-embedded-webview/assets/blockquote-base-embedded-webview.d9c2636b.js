var Ke=Object.defineProperty,Je=Object.defineProperties;var Ze=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Qe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var pe=(i,e,t)=>e in i?Ke(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,be=(i,e)=>{for(var t in e||(e={}))Qe.call(e,t)&&pe(i,t,e[t]);if(ue)for(var t of ue(e))et.call(e,t)&&pe(i,t,e[t]);return i},fe=(i,e)=>Je(i,Ze(e));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=window,oe=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol(),me=new WeakMap;class Le{constructor(e,t,s){if(this._$cssResult$=!0,s!==le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(oe&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=me.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&me.set(t,e))}return e}toString(){return this.cssText}}const tt=i=>new Le(typeof i=="string"?i:i+"",void 0,le),F=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new Le(t,i,le)},it=(i,e)=>{oe?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),r=B.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)})},ve=oe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return tt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;const I=window,ge=I.trustedTypes,st=ge?ge.emptyScript:"",_e=I.reactiveElementPolyfillSupport,se={toAttribute(i,e){switch(e){case Boolean:i=i?st:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch(s){t=null}}return t}},Ue=(i,e)=>e!==i&&(e==e||i==i),K={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:Ue};class z extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const r=this._$Ep(s,t);r!==void 0&&(this._$Ev.set(r,s),e.push(r))}),e}static createProperty(e,t=K){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||K}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of s)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(ve(r))}else e!==void 0&&t.push(ve(e));return t}static _$Ep(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return it(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=K){var r;const o=this.constructor._$Ep(e,s);if(o!==void 0&&s.reflect===!0){const n=(((r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?s.converter:se).toAttribute(t,s.type);this._$El=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var s;const r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){const n=r.getPropertyOptions(o),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:se;this._$El=o,this[o]=a.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,s){let r=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||Ue)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(s)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}z.finalized=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},_e==null||_e({ReactiveElement:z}),((G=I.reactiveElementVersions)!==null&&G!==void 0?G:I.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;const Y=window,S=Y.trustedTypes,we=S?S.createPolicy("lit-html",{createHTML:i=>i}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,qe="?"+v,rt=`<${qe}>`,k=document,O=(i="")=>k.createComment(i),M=i=>i===null||typeof i!="object"&&typeof i!="function",He=Array.isArray,nt=i=>He(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,ye=/>/g,w=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ze=/'/g,Ee=/"/g,De=/^(?:script|style|textarea|title)$/i,Be=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),p=Be(1),ot=Be(2),C=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ae=new WeakMap,lt=(i,e,t)=>{var s,r;const o=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let n=o._$litPart$;if(n===void 0){const a=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new U(e.insertBefore(O(),a),a,void 0,t!=null?t:{})}return n._$AI(i),n},E=k.createTreeWalker(k,129,null,!1),dt=(i,e)=>{const t=i.length-1,s=[];let r,o=e===2?"<svg>":"",n=T;for(let l=0;l<t;l++){const d=i[l];let f,c,h=-1,b=0;for(;b<d.length&&(n.lastIndex=b,c=n.exec(d),c!==null);)b=n.lastIndex,n===T?c[1]==="!--"?n=$e:c[1]!==void 0?n=ye:c[2]!==void 0?(De.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=w):c[3]!==void 0&&(n=w):n===w?c[0]===">"?(n=r!=null?r:T,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,f=c[1],n=c[3]===void 0?w:c[3]==='"'?Ee:ze):n===Ee||n===ze?n=w:n===$e||n===ye?n=T:(n=w,r=void 0);const H=n===w&&i[l+1].startsWith("/>")?" ":"";o+=n===T?d+rt:h>=0?(s.push(f),d.slice(0,h)+"$lit$"+d.slice(h)+v+H):d+v+(h===-2?(s.push(void 0),l):H)}const a=o+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[we!==void 0?we.createHTML(a):a,s]};class L{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[d,f]=dt(e,t);if(this.el=L.createElement(d,s),E.currentNode=this.el.content,t===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(r=E.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const h of r.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(v)){const b=f[n++];if(c.push(h),b!==void 0){const H=r.getAttribute(b.toLowerCase()+"$lit$").split(v),D=/([.?@])?(.*)/.exec(b);l.push({type:1,index:o,name:D[2],strings:H,ctor:D[1]==="."?ct:D[1]==="?"?ut:D[1]==="@"?pt:V})}else l.push({type:6,index:o})}for(const h of c)r.removeAttribute(h)}if(De.test(r.tagName)){const c=r.textContent.split(v),h=c.length-1;if(h>0){r.textContent=S?S.emptyScript:"";for(let b=0;b<h;b++)r.append(c[b],O()),E.nextNode(),l.push({type:2,index:++o});r.append(c[h],O())}}}else if(r.nodeType===8)if(r.data===qe)l.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(v,c+1))!==-1;)l.push({type:7,index:o}),c+=v.length-1}o++}}static createElement(e,t){const s=k.createElement("template");return s.innerHTML=e,s}}function R(i,e,t=i,s){var r,o,n,a;if(e===C)return e;let l=s!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[s]:t._$Cu;const d=M(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),d===void 0?l=void 0:(l=new d(i),l._$AT(i,t,s)),s!==void 0?((n=(a=t)._$Cl)!==null&&n!==void 0?n:a._$Cl=[])[s]=l:t._$Cu=l),l!==void 0&&(e=R(i,l._$AS(i,e.values),l,s)),e}class at{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:r}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:k).importNode(s,!0);E.currentNode=o;let n=E.nextNode(),a=0,l=0,d=r[0];for(;d!==void 0;){if(a===d.index){let f;d.type===2?f=new U(n,n.nextSibling,this,e):d.type===1?f=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(f=new bt(n,this,e)),this.v.push(f),d=r[++l]}a!==(d==null?void 0:d.index)&&(n=E.nextNode(),a++)}return o}m(e){let t=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class U{constructor(e,t,s,r){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$C_=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),M(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==C&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):nt(e)?this.O(e):this.$(e)}S(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==u&&M(this._$AH)?this._$AA.nextSibling.data=e:this.k(k.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=L.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(s);else{const n=new at(o,this),a=n.p(this.options);n.m(s),this.k(a),this._$AH=n}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new L(e)),t}O(e){He(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const o of e)r===t.length?t.push(s=new U(this.S(O()),this.S(O()),this,this.options)):s=t[r],s._$AI(o),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$C_=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class V{constructor(e,t,s,r,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,r){const o=this.strings;let n=!1;if(o===void 0)e=R(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==C,n&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=R(this,a[s+l],t,l),d===C&&(d=this._$AH[l]),n||(n=!M(d)||d!==this._$AH[l]),d===u?e=u:e!==u&&(e+=(d!=null?d:"")+o[l+1]),this._$AH[l]=d}n&&!r&&this.P(e)}P(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ct extends V{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===u?void 0:e}}const ht=S?S.emptyScript:"";class ut extends V{constructor(){super(...arguments),this.type=4}P(e){e&&e!==u?this.element.setAttribute(this.name,ht):this.element.removeAttribute(this.name)}}class pt extends V{constructor(e,t,s,r,o){super(e,t,s,r,o),this.type=5}_$AI(e,t=this){var s;if((e=(s=R(this,e,t,0))!==null&&s!==void 0?s:u)===C)return;const r=this._$AH,o=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==u&&(r===u||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class bt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const xe=Y.litHtmlPolyfillSupport;xe==null||xe(L,U),((J=Y.litHtmlVersions)!==null&&J!==void 0?J:Y.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,Q;class g extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=lt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return C}}g.finalized=!0,g._$litElement$=!0,(Z=globalThis.litElementHydrateSupport)===null||Z===void 0||Z.call(globalThis,{LitElement:g});const Se=globalThis.litElementPolyfillSupport;Se==null||Se({LitElement:g});((Q=globalThis.litElementVersions)!==null&&Q!==void 0?Q:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vt=i=>(...e)=>({_$litDirective$:i,values:e});class gt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=(i,e)=>{var t,s;const r=i._$AN;if(r===void 0)return!1;for(const o of r)(s=(t=o)._$AO)===null||s===void 0||s.call(t,e,!1),N(o,e);return!0},W=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},Ie=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),$t(e)}};function _t(i){this._$AN!==void 0?(W(this),this._$AM=i,Ie(this)):this._$AM=i}function wt(i,e=!1,t=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let o=t;o<s.length;o++)N(s[o],!1),W(s[o]);else s!=null&&(N(s,!1),W(s));else N(this,i)}const $t=i=>{var e,t,s,r;i.type==mt.CHILD&&((e=(s=i)._$AP)!==null&&e!==void 0||(s._$AP=wt),(t=(r=i)._$AQ)!==null&&t!==void 0||(r._$AQ=_t))};class yt extends gt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),Ie(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,r;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)===null||s===void 0||s.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),t&&(N(this,e),W(this))}setValue(e){if(ft(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=()=>new Et;class Et{}const ee=new WeakMap,At=vt(class extends yt{render(i){return u}update(i,[e]){var t;const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.dt)&&(this.Y=e,this.ct=(t=i.options)===null||t===void 0?void 0:t.host,this.rt(this.dt=i.element)),u}rt(i){var e;if(typeof this.Y=="function"){const t=(e=this.ct)!==null&&e!==void 0?e:globalThis;let s=ee.get(t);s===void 0&&(s=new WeakMap,ee.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ct,void 0),s.set(this.Y,i),i!==void 0&&this.Y.call(this.ct,i)}else this.Y.value=i}get lt(){var i,e,t;return typeof this.Y=="function"?(e=ee.get((i=this.ct)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.Y):(t=this.Y)===null||t===void 0?void 0:t.value}disconnected(){this.lt===this.dt&&this.rt(void 0)}reconnected(){this.rt(this.dt)}}),xt=F`:host {
  --_host-color: var(--blockquote-base-embedded-webview-size-color, inherit);
  --_rect-height: var(--blockquote-base-embedded-webview-size-rect-height, 1.125rem);
  --_rect-size: var(--blockquote-base-embedded-webview-size-rect-size, 0.6875rem);
  --_button-border-color: var(--blockquote-base-embedded-webview-size-button-border-color, rgb(255, 255, 255));
  --_button-bgcolor: var(--blockquote-base-embedded-webview-size-button-bgcolor, rgb(222, 225, 230));
  --_button-bgcolor-hover: var(--blockquote-base-embedded-webview-size-button-bgcolor-hover, rgb(218, 220, 224));
  --_button-bgcolor-selected-hover: var(--blockquote-base-embedded-webview-size-button-bgcolor-selected-hover, rgb(207, 208, 208));
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

button {
  position: absolute;
  background-color: var(--_button-bgcolor);
  border-left: 2px solid var(--_button-border-color);
  border-right: 2px solid var(--_button-border-color);
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
}`;class ke extends g{static get is(){return"blockquote-base-embedded-webview-size"}static get styles(){return[xt]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"}}}constructor(){super(),this.showOverflowSize=!1,this.selected=0,this.screenSizes=[{width:360,height:640,id:"360x640"},{width:375,height:667,id:"375x667"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:1024,height:768,id:"1024x768"},{width:1280,height:800,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1,this._onResize=this._onResize.bind(this)}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return fe(be({},this.selectedSize),{index:this.selected})}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(e){super.willUpdate&&super.willUpdate(e),e.has("screenSizes")&&this.screenSizes.sort((t,s)=>s.width-t.width),e.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const t=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(t)}}render(){return p`
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
    `}get _visualTextTpl(){return p` <span aria-hidden="true">${this.selectedSize.id}</span>`}_onResize(e){e.preventDefault(),e.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})}_setSelected(e){e.preventDefault(),e.stopPropagation(),this.selected=Number(e.target.dataset.index);const t=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(t)}}window.customElements.define(ke.is,ke);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let St=0,Ye=0,A=[],kt=0,re=!1,We=document.createTextNode("");new window.MutationObserver(Ct).observe(We,{characterData:!0});function Ct(){re=!1;const i=A.length;for(let e=0;e<i;e++){let t=A[e];if(t)try{t()}catch(s){setTimeout(()=>{throw s})}}A.splice(0,i),Ye+=i}const Rt={run(i){return re||(re=!0,We.textContent=kt++),A.push(i),St++},cancel(i){const e=i-Ye;if(e>=0){if(!A[e])throw new Error("invalid async handle: "+i);A[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Tt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Pt=!1,de=typeof document.head.style.touchAction=="string",j="__polymerGestures",te="__polymerGesturesHandled",ne="__polymerGesturesTouchAction",Ce=25,Re=5,Nt=2,Ot=["mousedown","mousemove","mouseup","click"],Mt=[0,1,4,2],Lt=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch(i){return!1}}();function ae(i){return Ot.indexOf(i)>-1}let je=!1;(function(){try{let i=Object.defineProperty({},"passive",{get(){je=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch(i){}})();function Xe(i){if(!(ae(i)||i==="touchend")&&de&&je&&Pt)return{passive:!0}}let Ut=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const qt={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function y(i){let e=i.type;if(!ae(e))return!1;if(e==="mousemove"){let t=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!Lt&&(t=Mt[i.which]||0),Boolean(t&1)}else return(i.button===void 0?0:i.button)===0}function Ht(i){if(i.type==="click"){if(i.detail===0)return!0;let e=_(i);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let t=e.getBoundingClientRect(),s=i.pageX,r=i.pageY;return!(s>=t.left&&s<=t.right&&r>=t.top&&r<=t.bottom)}return!1}let m={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Dt(i){let e="auto",t=Ve(i);for(let s=0,r;s<t.length;s++)if(r=t[s],r[ne]){e=r[ne];break}return e}function Fe(i,e,t){i.movefn=e,i.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function x(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const Ve=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],q={},$=[];function Bt(i,e){let t=document.elementFromPoint(i,e),s=t;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(i,e),r===s)break;s&&(t=s)}return t}function _(i){const e=Ve(i);return e.length>0?e[0]:i.target}function Ge(i){let e,t=i.type,r=i.currentTarget[j];if(!r)return;let o=r[t];if(!!o){if(!i[te]&&(i[te]={},t.slice(0,5)==="touch")){i=i;let n=i.changedTouches[0];if(t==="touchstart"&&i.touches.length===1&&(m.touch.id=n.identifier),m.touch.id!==n.identifier)return;de||(t==="touchstart"||t==="touchmove")&&It(i)}if(e=i[te],!e.skip){for(let n=0,a;n<$.length;n++)a=$[n],o[a.name]&&!e[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<$.length;n++)a=$[n],o[a.name]&&!e[a.name]&&(e[a.name]=!0,a[t](i))}}}function It(i){let e=i.changedTouches[0],t=i.type;if(t==="touchstart")m.touch.x=e.clientX,m.touch.y=e.clientY,m.touch.scrollDecided=!1;else if(t==="touchmove"){if(m.touch.scrollDecided)return;m.touch.scrollDecided=!0;let s=Dt(i),r=!1,o=Math.abs(m.touch.x-e.clientX),n=Math.abs(m.touch.y-e.clientY);i.cancelable&&(s==="none"?r=!0:s==="pan-x"?r=n>o:s==="pan-y"&&(r=o>n)),r?i.preventDefault():X("track")}}function Yt(i,e,t){return q[e]?(jt(i,e,t),!0):!1}function Wt(i,e,t){return q[e]?(Xt(i,e,t),!0):!1}function jt(i,e,t){let s=q[e],r=s.deps,o=s.name,n=i[j];n||(i[j]=n={});for(let a=0,l,d;a<r.length;a++)l=r[a],!(Ut&&ae(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&i.addEventListener(l,Ge,Xe(l)),d[o]=(d[o]||0)+1,d._count=(d._count||0)+1);i.addEventListener(e,t),s.touchAction&&Vt(i,s.touchAction)}function Xt(i,e,t){let s=q[e],r=s.deps,o=s.name,n=i[j];if(n)for(let a=0,l,d;a<r.length;a++)l=r[a],d=n[l],d&&d[o]&&(d[o]=(d[o]||1)-1,d._count=(d._count||1)-1,d._count===0&&i.removeEventListener(l,Ge,Xe(l)));i.removeEventListener(e,t)}function ce(i){$.push(i);for(let e=0;e<i.emits.length;e++)q[i.emits[e]]=i}function Ft(i){for(let e=0,t;e<$.length;e++){t=$[e];for(let s=0,r;s<t.emits.length;s++)if(r=t.emits[s],r===i)return t}return null}function Vt(i,e){de&&i instanceof HTMLElement&&Rt.run(()=>{i.style.touchAction=e}),i[ne]=e}function he(i,e,t){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=t,Tt(i).dispatchEvent(s),s.defaultPrevented){let r=t.preventer||t.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function X(i){let e=Ft(i);e.info&&(e.info.prevent=!0)}ce({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){x(this.info)},mousedown:function(i){if(!y(i))return;let e=_(i),t=this,s=function(n){y(n)||(P("up",e,n),x(t.info))},r=function(n){y(n)&&P("up",e,n),x(t.info)};Fe(this.info,s,r),P("down",e,i)},touchstart:function(i){P("down",_(i),i.changedTouches[0],i)},touchend:function(i){P("up",_(i),i.changedTouches[0],i)}});function P(i,e,t,s){!e||he(e,i,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:s,prevent:function(r){return X(r)}})}ce({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(i){this.moves.length>Nt&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,x(this.info)},mousedown:function(i){if(!y(i))return;let e=_(i),t=this,s=function(n){let a=n.clientX,l=n.clientY;Te(t.info,a,l)&&(t.info.state=t.info.started?n.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&X("tap"),t.info.addMove({x:a,y:l}),y(n)||(t.info.state="end",x(t.info)),e&&ie(t.info,e,n),t.info.started=!0)},r=function(n){t.info.started&&s(n),x(t.info)};Fe(this.info,s,r),this.info.x=i.clientX,this.info.y=i.clientY},touchstart:function(i){let e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(i){let e=_(i),t=i.changedTouches[0],s=t.clientX,r=t.clientY;Te(this.info,s,r)&&(this.info.state==="start"&&X("tap"),this.info.addMove({x:s,y:r}),ie(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend:function(i){let e=_(i),t=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),ie(this.info,e,t))}});function Te(i,e,t){if(i.prevent)return!1;if(i.started)return!0;let s=Math.abs(i.x-e),r=Math.abs(i.y-t);return s>=Re||r>=Re}function ie(i,e,t){if(!e)return;let s=i.moves[i.moves.length-2],r=i.moves[i.moves.length-1],o=r.x-i.x,n=r.y-i.y,a,l=0;s&&(a=r.x-s.x,l=r.y-s.y),he(e,"track",{state:i.state,x:t.clientX,y:t.clientY,dx:o,dy:n,ddx:a,ddy:l,sourceEvent:t,hover:function(){return Bt(t.clientX,t.clientY)}})}ce({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(i){y(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click:function(i){y(i)&&Pe(this.info,i)},touchstart:function(i){const e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(i){Pe(this.info,i.changedTouches[0],i)}});function Pe(i,e,t){let s=Math.abs(e.clientX-i.x),r=Math.abs(e.clientY-i.y),o=_(t||e);!o||qt[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=Ce&&r<=Ce||Ht(e))&&(i.prevent||he(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}const Gt=F`:host {
  --__resizer-factor: calc(1.25rem * var(--blockquote-base-embedded-webview-resize-factor, 1));
  --_rect-transition: var(--blockquote-base-embedded-webview-resize-rect-transition, width 90ms cubic-bezier(0.25, 0.46, 0.45, 0.94), height 90ms cubic-bezier(0.25, 0.46, 0.45, 0.94));
  --_rect-min-width: var(--blockquote-base-embedded-webview-resize-rect-min-width, 18.75rem);
  --_rect-min-height: var(--blockquote-base-embedded-webview-resize-rect-min-height, 9.375rem);
  --_rect-max-width: var(--blockquote-base-embedded-webview-resize-rect-max-width, 100%);
  --_rect-max-height: var(--blockquote-base-embedded-webview-resize-rect-max-height, 100%);
  --_rect-width: var(--blockquote-base-embedded-webview-resize-rect-width, 40rem);
  --_rect-height: var(--blockquote-base-embedded-webview-resize-rect-height, 22.5rem);
  --_resizer-bgcolor: var(--blockquote-base-embedded-webview-resize-resizer-bgcolor, rgb(222, 225, 230));
  --_resizer-bgcolor-hover: var(--blockquote-base-embedded-webview-resize-resizer-bgcolor-hover, rgb(218, 220, 224));
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
  transition: var(--_rect-transition);
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
.resizer:hover:not(.resizer-n) {
  background-color: var(--_resizer-bgcolor-hover);
}
.resizer-n {
  height: calc(var(--__resizer-factor) / 4);
  top: calc(var(--__resizer-factor) / 4 * -1);
  left: calc(var(--__resizer-factor) * -1);
  width: calc(100% + var(--__resizer-factor) * 2);
}
.resizer-n::after {
  content: none;
}
.resizer-se, .resizer-sw {
  height: var(--__resizer-factor);
  width: var(--__resizer-factor);
}
.resizer-se::after, .resizer-sw::after {
  content: url("data:image/svg+xml,%0A%3Csvg width='13' height='13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)' fill='%23848282'%3E%3Crect x='-.195' y='10.775' width='15.566' height='2' rx='1' transform='rotate(-45 -.195 10.775)'/%3E%3Crect x='5.346' y='11.241' width='8.401' height='2' rx='1' transform='rotate(-45 5.346 11.24)'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h13v13H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  transform: translate(-50%, -50%);
}
.resizer-se {
  cursor: nwse-resize;
}
.resizer-sw {
  cursor: nesw-resize;
}
.resizer-sw::after {
  transform: translate(-50%, -50%) translateY(-1.5px) rotate(90deg);
}
.resizer-s {
  cursor: ns-resize;
  height: var(--__resizer-factor);
}
.resizer-s::after {
  content: url("data:image/svg+xml,%0A%3Csvg width='26' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='26' height='2' rx='1' fill='%23848282'/%3E%3Crect y='4' width='26' height='2' rx='1' fill='%23848282'/%3E%3C/svg%3E");
  transform: translate(-50%, -50%) translateY(-3px);
}
.resizer-e, .resizer-w {
  cursor: ew-resize;
  width: var(--__resizer-factor);
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

:host([resizing]),
:host([resizing]) ::slotted(*) {
  cursor: move;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

:host([resizing]) ::slotted(*) {
  pointer-events: none;
}`;class Ne extends g{static get is(){return"blockquote-base-embedded-webview-resize"}static get styles(){return[Gt]}constructor(){super(),this._resizer=this._resizer.bind(this),this._removeResizer=this._removeResizer.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._doubleclickForCssInitialSize=this._doubleclickForCssInitialSize.bind(this)}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),this.rect=this.shadowRoot.querySelector(".rect"),this.bottomRightResizerElement=this.shadowRoot.querySelector(".resizer-se"),this.bottomLeftResizerElement=this.shadowRoot.querySelector(".resizer-sw"),this.rightResizerElement=this.shadowRoot.querySelector(".resizer-e"),this.leftResizerElement=this.shadowRoot.querySelector(".resizer-w"),this.bottomResizerElement=this.shadowRoot.querySelector(".resizer-s"),this.leftResizerElement.addEventListener("mousedown",this._createResizerLeft),this.rightResizerElement.addEventListener("mousedown",this._createResizerRight),this.bottomResizerElement.addEventListener("mousedown",this._createResizerBottom),this.bottomLeftResizerElement.addEventListener("mousedown",this._createResizerBottomLeft),this.bottomRightResizerElement.addEventListener("mousedown",this._createResizerBottomRight),this.bottomResizerElement.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return p`
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
    `}_doubleclickForCssInitialSize(){this.removeAttribute("style")}_createResizer(e){this._getBoundingClientRecDOMRect=e,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height"),this.setAttribute("resizing",""),Yt(document,"track",this._resizer),document.addEventListener("mouseup",this._removeResizer)}_removeResizer(){this.removeAttribute("resizing"),Wt(document,"track",this._resizer),document.removeEventListener("mouseup",this._removeResizer),this._dispatchResizeEvent()}_resizer({detail:e}){let t,s;const r=Math.floor(e.dx*2),o=Math.floor(e.dy*1.1);switch(this._getBoundingClientRecDOMRect){case"right":t=`${this._getBoundingClientRectWidth-r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t);break;case"left":t=`${this._getBoundingClientRectWidth+r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t);break;case"top":s=`${this._getBoundingClientRectHeight+o*1}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopLeft":t=`${this._getBoundingClientRectWidth+r}px`,s=`${this._getBoundingClientRectHeight+o*1}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopRight":t=`${this._getBoundingClientRectWidth-r}px`,s=`${this._getBoundingClientRectHeight+o*1}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",t),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const e=new CustomEvent("webviewresize",{bubbles:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing")}});this.dispatchEvent(e)}_getBoundingClientRect(e){return Math.abs(parseInt(this.rect.getBoundingClientRect()[e],10))}}window.customElements.define(Ne.is,Ne);const Kt=F`:host,
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
}`;class Oe extends g{static get is(){return"blockquote-base-embedded-webview-element"}static get styles(){return[Kt]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}constructor(){super(),this.embeddedTitle="",this.src="",this.type="iframe",this._onLoadElement=this._onLoadElement.bind(this)}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement),this.append(this._embeddedElement))}willUpdate(e){super.willUpdate&&super.willUpdate(e),e.has("src")&&this.src!==""&&this._fetch(this.src)}render(){return p` ${this._embeddedTpl} `}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return p`<slot name="embedded"></slot>`}_fetch(e){e&&(Object.assign(this._embeddedElement,this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),this._embeddedElement[this._loadResource]=e,window.performance.mark("iframestart"),Object.assign(this._embeddedElement.style,e.indexOf("http")!==0&&{opacity:0}))}_onLoadElement({target:e}){if(!e.contentDocument||!e.contentDocument.head.childNodes.length)return;Object.assign(e.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>e.removeAttribute("style"));const t=new CustomEvent("elementloaded",{bubbles:!0,detail:e});this.dispatchEvent(t)}}window.customElements.define(Oe.is,Oe);const Jt=F`:host {
  --_host-color: var(--blockquote-base-embedded-webview-color, rgb(32, 33, 36));
  --_main-bgcolor: var(--blockquote-base-embedded-webview-main-bgcolor, rgb(248, 249, 249));
  --_select-bgcolor: var(--blockquote-base-embedded-webview-select-bgcolor, rgb(222, 225, 230));
  --_select-transition: var(--blockquote-base-embedded-webview-select-transition, border-bottom 196ms ease-out, var(--blockquote-base-embedded-webview-select-transition, border-bottom 196ms ease-out));
  --blockquote-base-embedded-webview-resize-rect-width: 640px; /* 40rem */
  --blockquote-base-embedded-webview-resize-rect-height: 360px; /* 22.5rem */
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
  margin-bottom: 0.5rem;
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
  font-size: 0.875rem;
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

.read-data-pos {
  font-size: 0.875rem;
  letter-spacing: 0.0156rem;
  position: absolute;
  right: 0.375rem;
  top: 0.3125rem;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

blockquote-base-embedded-webview-resize {
  overflow-x: hidden;
}`,Zt=ot`<svg aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<polyline points="6 9 12 15 18 9" />
</svg>`;class Me extends g{static get is(){return"blockquote-base-embedded-webview"}static get styles(){return[Jt]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0}}}constructor(){super(),this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__selectArrow=Zt,this.__readDataPos={x:0,y:0,resizing:!1},this.limitHeight=!1,this._sources=[{file:"",option:""}],this._updateSize=this._updateSize.bind(this),this._embeddedResizeRef=zt()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("webviewresize",({detail:t})=>{Object.assign(this.__readDataPos,t),this.requestUpdate()});const e=Array.from(this.querySelectorAll("template"));e.length&&(this._sources=e.map(t=>{const{src:s,option:r}=t.dataset;return{src:s,option:r}}),this._src=this._sources[this.selected].src)}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),this.embedded=this.shadowRoot.querySelector('[slot="embedded"]'),this.append(this.embedded)}_updateSize({detail:e}){this._embeddedResizeRef.value.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${e.width}px`),this._embeddedResizeRef.value.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${e.height}px`)}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return p`
      <header>
        <div>${this._headerTpl} ${this._selectTpl} ${this._readDataPosTpl}</div>
        ${this._screenSizeTpl}
      </header>
      <div class="main">
        <blockquote-base-embedded-webview-resize ${At(this._embeddedResizeRef)}>
          <slot name="embedded"> ${this._embeddedSlotTpl} </slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _headerTpl(){return p`<div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>`}get _selectTpl(){return p`
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
    `}get _readDataPosTpl(){return p`
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
      @click="${this._updateSize}"
      @selectedchange="${this._updateSize}"
      .selected="${this.screenSizeSelected}"
    ></blockquote-base-embedded-webview-size>`}get _embeddedSlotTpl(){return p` <blockquote-base-embedded-webview-element
      slot="embedded"
      .src="${this._src}"
      .embeddedTitle="${this._sources[this.selected].option}"
    >
    </blockquote-base-embedded-webview-element>`}_onChangeFile({target:e}){this.selected=e.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define(Me.is,Me);
