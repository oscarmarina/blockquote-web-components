var $t=Object.defineProperty;var Ee=s=>{throw TypeError(s)};var xt=(s,e,t)=>e in s?$t(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var m=(s,e,t)=>xt(s,typeof e!="symbol"?e+"":e,t),ke=(s,e,t)=>e.has(s)||Ee("Cannot "+t);var re=(s,e,t)=>(ke(s,e,"read from private field"),t?t.call(s):e.get(s)),oe=(s,e,t)=>e.has(s)?Ee("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);var X=(s,e,t)=>(ke(s,e,"access private method"),t);const J=globalThis,ge=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),Ce=new WeakMap;let Qe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ge&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ce.set(t,e))}return e}toString(){return this.cssText}};const Et=s=>new Qe(typeof s=="string"?s:s+"",void 0,fe),A=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new Qe(t,s,fe)},kt=(s,e)=>{if(ge)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=J.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},Ae=ge?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Et(t)})(s):s;const{is:Ct,defineProperty:At,getOwnPropertyDescriptor:St,getOwnPropertyNames:Rt,getOwnPropertySymbols:Tt,getPrototypeOf:Ot}=Object,z=globalThis,Se=z.trustedTypes,Bt=Se?Se.emptyScript:"",ne=z.reactiveElementPolyfillSupport,q=(s,e)=>s,be={toAttribute(s,e){switch(e){case Boolean:s=s?Bt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},et=(s,e)=>!Ct(s,e),Re={attribute:!0,type:String,converter:be,reflect:!1,useDefault:!1,hasChanged:et};var Xe,Ge;(Xe=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Ge=z.litPropertyMetadata)!=null||(z.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&At(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){var n;const{get:r,set:o}=(n=St(this.prototype,e))!=null?n:{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){const a=r==null?void 0:r.call(this);o==null||o.call(this,l),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:Re}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const e=Ot(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const t=this.properties,i=[...Rt(t),...Tt(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Ae(r))}else e!==void 0&&t.push(Ae(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return kt(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:be).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var o,n,l;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:be;this._$Em=r;const h=c.fromAttribute(t,a.type);this[r]=(l=h!=null?h:(n=this._$Ej)==null?void 0:n.get(r))!=null?l:h,this._$Em=null}}requestUpdate(e,t,i,r=!1,o){var n,l;if(e!==void 0){const a=this.constructor;if(r===!1&&(o=this[e]),i!=null||(i=a.getPropertyOptions(e)),!(((n=i.hasChanged)!=null?n:et)(o,t)||i.useDefault&&i.reflect&&o===((l=this._$Ej)==null?void 0:l.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},n){var l,a,c;i&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(a=n!=null?n:t)!=null?a:this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,l]of o){const{wrapped:a}=l,c=this[n];a!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,l,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};var Ye;S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[q("elementProperties")]=new Map,S[q("finalized")]=new Map,ne==null||ne({ReactiveElement:S}),((Ye=z.reactiveElementVersions)!=null?Ye:z.reactiveElementVersions=[]).push("2.1.2");const P=globalThis,Te=s=>s,Q=P.trustedTypes,Oe=Q?Q.createPolicy("lit-html",{createHTML:s=>s}):void 0,tt="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+w,Lt=`<${st}>`,C=document,M=()=>C.createComment(""),I=s=>s===null||typeof s!="object"&&typeof s!="function",_e=Array.isArray,qt=s=>_e(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ae=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,Le=/>/g,y=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,Pe=/"/g,it=/^(?:script|style|textarea|title)$/i,Pt=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),u=Pt(1),T=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ne=new WeakMap,$=C.createTreeWalker(C,129);function rt(s,e){if(!_e(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oe!==void 0?Oe.createHTML(e):e}const Nt=(s,e)=>{const t=s.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=L;for(let l=0;l<t;l++){const a=s[l];let c,h,d=-1,b=0;for(;b<a.length&&(n.lastIndex=b,h=n.exec(a),h!==null);)b=n.lastIndex,n===L?h[1]==="!--"?n=Be:h[1]!==void 0?n=Le:h[2]!==void 0?(it.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=y):h[3]!==void 0&&(n=y):n===y?h[0]===">"?(n=r!=null?r:L,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?y:h[3]==='"'?Pe:qe):n===Pe||n===qe?n=y:n===Be||n===Le?n=L:(n=y,r=void 0);const v=n===y&&s[l+1].startsWith("/>")?" ":"";o+=n===L?a+Lt:d>=0?(i.push(c),a.slice(0,d)+tt+a.slice(d)+w+v):a+w+(d===-2?l:v)}return[rt(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class H{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[c,h]=Nt(e,t);if(this.el=H.createElement(c,i),$.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=$.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(tt)){const b=h[n++],v=r.getAttribute(d).split(w),g=/([.?@])?(.*)/.exec(b);a.push({type:1,index:o,name:g[2],strings:v,ctor:g[1]==="."?Mt:g[1]==="?"?It:g[1]==="@"?Ht:te}),r.removeAttribute(d)}else d.startsWith(w)&&(a.push({type:6,index:o}),r.removeAttribute(d));if(it.test(r.tagName)){const d=r.textContent.split(w),b=d.length-1;if(b>0){r.textContent=Q?Q.emptyScript:"";for(let v=0;v<b;v++)r.append(d[v],M()),$.nextNode(),a.push({type:2,index:++o});r.append(d[b],M())}}}else if(r.nodeType===8)if(r.data===st)a.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(w,d+1))!==-1;)a.push({type:7,index:o}),d+=w.length-1}o++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function O(s,e,t=s,i){var n,l,a;if(e===T)return e;let r=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=I(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,i)),i!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[i]=r:t._$Cl=r),r!==void 0&&(e=O(s,r._$AS(s,e.values),r,i)),e}class Dt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;const{el:{content:t},parts:i}=this._$AD,r=((c=e==null?void 0:e.creationScope)!=null?c:C).importNode(t,!0);$.currentNode=r;let o=$.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new W(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new Ut(o,this,e)),this._$AV.push(h),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=$.nextNode(),n++)}return $.currentNode=C,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class W{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,r){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(o=r==null?void 0:r.isConnected)!=null?o:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),I(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==T&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=H.createElement(rt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const n=new Dt(r,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=Ne.get(e.strings);return t===void 0&&Ne.set(e.strings,t=new H(e)),t}k(e){_e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new W(this.O(M()),this.O(M()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const r=Te(e).nextSibling;Te(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=O(this,e,t,0),n=!I(e)||e!==this._$AH&&e!==T,n&&(this._$AH=e);else{const l=e;let a,c;for(e=o[0],a=0;a<o.length-1;a++)c=O(this,l[i+a],t,a),c===T&&(c=this._$AH[a]),n||(n=!I(c)||c!==this._$AH[a]),c===p?e=p:e!==p&&(e+=(c!=null?c:"")+o[a+1]),this._$AH[a]=c}n&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Mt extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class It extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Ht extends te{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=O(this,e,t,0))!=null?n:p)===T)return;const i=this._$AH,r=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}}class Ut{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const le=P.litHtmlPolyfillSupport;var Ze;le==null||le(H,W),((Ze=P.litHtmlVersions)!=null?Ze:P.litHtmlVersions=[]).push("3.3.2");const me=(s,e,t)=>{var o,n;const i=(o=t==null?void 0:t.renderBefore)!=null?o:e;let r=i._$litPart$;if(r===void 0){const l=(n=t==null?void 0:t.renderBefore)!=null?n:null;i._$litPart$=r=new W(e.insertBefore(M(),l),l,void 0,t!=null?t:{})}return r._$AI(s),r};const x=globalThis;let f=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=me(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return T}};var Je;f._$litElement$=!0,f.finalized=!0,(Je=x.litElementHydrateSupport)==null||Je.call(x,{LitElement:f});const ce=x.litElementPolyfillSupport;ce==null||ce({LitElement:f});var Ke;((Ke=x.litElementVersions)!=null?Ke:x.litElementVersions=[]).push("4.2.2");const Wt=s=>s.strings===void 0;const Ft={CHILD:2},ot=s=>(...e)=>({_$litDirective$:s,values:e});class Vt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const N=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const r of t)(i=r._$AO)==null||i.call(r,e,!1),N(r,e);return!0},ee=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},nt=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),Gt(e)}};function jt(s){this._$AN!==void 0?(ee(this),this._$AM=s,nt(this)):this._$AM=s}function Xt(s,e=!1,t=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)N(i[o],!1),ee(i[o]);else i!=null&&(N(i,!1),ee(i));else N(this,s)}const Gt=s=>{var e,t;s.type==Ft.CHILD&&((e=s._$AP)!=null||(s._$AP=Xt),(t=s._$AQ)!=null||(s._$AQ=jt))};class at extends Vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),nt(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),t&&(N(this,e),ee(this))}setValue(e){if(Wt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const lt=()=>new Yt;let Yt=class{};const de=new WeakMap,ct=ot(class extends at{render(s){return p}update(s,[e]){var i;const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(i=s.options)==null?void 0:i.host,this.rt(this.ct=s.element)),p}rt(s){var e;if(this.isConnected||(s=void 0),typeof this.G=="function"){const t=(e=this.ht)!=null?e:globalThis;let i=de.get(t);i===void 0&&(i=new WeakMap,de.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){var s,e,t;return typeof this.G=="function"?(e=de.get((s=this.ht)!=null?s:globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Zt=A`
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
`;class Jt extends f{constructor(){super();m(this,"_onResize",t=>{t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[Zt]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((i,r)=>r.width-i.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const i=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(i)}}render(){return u`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return u`
      ${this.screenSizes.map((t,i)=>u`
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
    `}get _visualTextTpl(){return u`
      <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true">
        ${this.selectedSize.id}
      </span>
    `}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const i=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(i)}}window.customElements.define("blockquote-base-embedded-webview-size",Jt);const Kt=A`
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
`;class Qt extends f{constructor(){super();m(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[Kt]}async connectedCallback(){var t,i,r,o,n,l,a,c,h,d,b,v,g;(t=super.connectedCallback)==null||t.call(this),await this.updateComplete,this.rect=(i=this.shadowRoot)==null?void 0:i.querySelector(".rect"),this.bottomRightResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(".resizer-se"),this.bottomLeftResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-sw"),this.rightResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-e"),this.leftResizerElement=(l=this.shadowRoot)==null?void 0:l.querySelector(".resizer-w"),this.bottomResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-s"),(c=this.leftResizerElement)==null||c.addEventListener("pointerdown",this._createResizerLeft),(h=this.rightResizerElement)==null||h.addEventListener("pointerdown",this._createResizerRight),(d=this.bottomResizerElement)==null||d.addEventListener("pointerdown",this._createResizerBottom),(b=this.bottomLeftResizerElement)==null||b.addEventListener("pointerdown",this._createResizerBottomLeft),(v=this.bottomRightResizerElement)==null||v.addEventListener("pointerdown",this._createResizerBottomRight),(g=this.bottomResizerElement)==null||g.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return u`
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
    `}_createResizer(t,i){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:r,pointerId:o,clientX:n,clientY:l}=i;r==null||r.setPointerCapture(o);const a=({clientX:h,clientY:d})=>{const b=Math.floor(h-n),v=Math.floor(d-l);this._resize({detail:{dx:b,dy:v}})};r==null||r.addEventListener("pointermove",a);const c=()=>{this.removeAttribute("resizing"),r==null||r.releasePointerCapture(o),r==null||r.removeEventListener("pointermove",a),r==null||r.removeEventListener("pointerup",c),this._dispatchResizeEvent()};r==null||r.addEventListener("pointerup",c)}_resize({detail:t}){let i,r;const o=Math.floor(t.dx*2.04),n=Math.floor(t.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",i=`${this._getBoundingClientRectWidth-o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"left":this._cursor="e",i=`${this._getBoundingClientRectWidth+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"top":this._cursor="n",r=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopLeft":this._cursor="ne",i=`${this._getBoundingClientRectWidth+o}px`,r=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopRight":this._cursor="nw",i=`${this._getBoundingClientRectWidth-o}px`,r=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var i;return Math.abs(parseInt((i=this.rect)==null?void 0:i.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",Qt);const es=A`
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
`;class ts extends f{constructor(){super();m(this,"_onLoadElement",({target:t})=>{if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const i=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(i)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[es]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return u`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){me(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return u`
      <slot name="embedded"></slot>
    `}_fetch(t){var i,r,o,n;t&&(Object.assign((i=this._embeddedElement)!=null?i:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((r=this._embeddedElement)!=null?r:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((n=(o=this._embeddedElement)==null?void 0:o.style)!=null?n:{},t.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",ts);const ss=A`
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
    overflow: hidden;
    clip-path: inset(50%);
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
`,is=u`
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
`,rs=u`
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
`;class os extends f{constructor(){super();m(this,"_updateSize",({detail:t})=>{var i,r,o,n;(r=(i=this._embeddedResizeRef)==null?void 0:i.value)==null||r.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(n=(o=this._embeddedResizeRef)==null?void 0:o.value)==null||n.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=is,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=lt()}static get styles(){return[ss]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0,useDefault:!0}}}async connectedCallback(){var i,r;(i=super.connectedCallback)==null||i.call(this),await this.updateComplete,this.addEventListener("webviewresize",o=>{var l;const{detail:n}=o;Object.assign(this.__readDataPos,n),this.__resetResizing=!0,(n.cursor==="n"||n.cursor==="ne"||n.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((l=this._controlBottom)!=null?l:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(o=>{const{src:n="",option:l="",description:a=""}=o.dataset;return{src:n,option:l,description:a}}),this._src=this._sources[this.selected].src),this.embedded=(r=this.shadowRoot)==null?void 0:r.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return u`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){me(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return u`
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
                ${this._sources.map((t,i)=>u`
                    <option ?selected="${this.selected===i}" value="${i}">
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
        <span aria-hidden="true">${rs}</span>
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
        <blockquote-base-embedded-webview-resize ${ct(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return u`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",os);var E=[],ns=function(){return E.some(function(s){return s.activeTargets.length>0})},as=function(){return E.some(function(s){return s.skippedTargets.length>0})},De="ResizeObserver loop completed with undelivered notifications.",ls=function(){var s;typeof ErrorEvent=="function"?s=new ErrorEvent("error",{message:De}):(s=document.createEvent("Event"),s.initEvent("error",!1,!1),s.message=De),window.dispatchEvent(s)},U;(function(s){s.BORDER_BOX="border-box",s.CONTENT_BOX="content-box",s.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(U||(U={}));var k=function(s){return Object.freeze(s)},cs=(function(){function s(e,t){this.inlineSize=e,this.blockSize=t,k(this)}return s})(),dt=(function(){function s(e,t,i,r){return this.x=e,this.y=t,this.width=i,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,k(this)}return s.prototype.toJSON=function(){var e=this,t=e.x,i=e.y,r=e.top,o=e.right,n=e.bottom,l=e.left,a=e.width,c=e.height;return{x:t,y:i,top:r,right:o,bottom:n,left:l,width:a,height:c}},s.fromRect=function(e){return new s(e.x,e.y,e.width,e.height)},s})(),we=function(s){return s instanceof SVGElement&&"getBBox"in s},ht=function(s){if(we(s)){var e=s.getBBox(),t=e.width,i=e.height;return!t&&!i}var r=s,o=r.offsetWidth,n=r.offsetHeight;return!(o||n||s.getClientRects().length)},Me=function(s){var e;if(s instanceof Element)return!0;var t=(e=s==null?void 0:s.ownerDocument)===null||e===void 0?void 0:e.defaultView;return!!(t&&s instanceof t.Element)},ds=function(s){switch(s.tagName){case"INPUT":if(s.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},D=typeof window<"u"?window:{},G=new WeakMap,Ie=/auto|scroll/,hs=/^tb|vertical/,us=/msie|trident/i.test(D.navigator&&D.navigator.userAgent),_=function(s){return parseFloat(s||"0")},R=function(s,e,t){return s===void 0&&(s=0),e===void 0&&(e=0),t===void 0&&(t=!1),new cs((t?e:s)||0,(t?s:e)||0)},He=k({devicePixelContentBoxSize:R(),borderBoxSize:R(),contentBoxSize:R(),contentRect:new dt(0,0,0,0)}),ut=function(s,e){if(e===void 0&&(e=!1),G.has(s)&&!e)return G.get(s);if(ht(s))return G.set(s,He),He;var t=getComputedStyle(s),i=we(s)&&s.ownerSVGElement&&s.getBBox(),r=!us&&t.boxSizing==="border-box",o=hs.test(t.writingMode||""),n=!i&&Ie.test(t.overflowY||""),l=!i&&Ie.test(t.overflowX||""),a=i?0:_(t.paddingTop),c=i?0:_(t.paddingRight),h=i?0:_(t.paddingBottom),d=i?0:_(t.paddingLeft),b=i?0:_(t.borderTopWidth),v=i?0:_(t.borderRightWidth),g=i?0:_(t.borderBottomWidth),B=i?0:_(t.borderLeftWidth),F=d+c,ze=a+h,se=B+v,ie=b+g,ye=l?s.offsetHeight-ie-s.clientHeight:0,$e=n?s.offsetWidth-se-s.clientWidth:0,mt=r?F+se:0,wt=r?ze+ie:0,V=i?i.width:_(t.width)-mt-$e,j=i?i.height:_(t.height)-wt-ye,zt=V+F+$e+se,yt=j+ze+ye+ie,xe=k({devicePixelContentBoxSize:R(Math.round(V*devicePixelRatio),Math.round(j*devicePixelRatio),o),borderBoxSize:R(zt,yt,o),contentBoxSize:R(V,j,o),contentRect:new dt(d,a,V,j)});return G.set(s,xe),xe},bt=function(s,e,t){var i=ut(s,t),r=i.borderBoxSize,o=i.contentBoxSize,n=i.devicePixelContentBoxSize;switch(e){case U.DEVICE_PIXEL_CONTENT_BOX:return n;case U.BORDER_BOX:return r;default:return o}},bs=(function(){function s(e){var t=ut(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=k([t.borderBoxSize]),this.contentBoxSize=k([t.contentBoxSize]),this.devicePixelContentBoxSize=k([t.devicePixelContentBoxSize])}return s})(),pt=function(s){if(ht(s))return 1/0;for(var e=0,t=s.parentNode;t;)e+=1,t=t.parentNode;return e},ps=function(){var s=1/0,e=[];E.forEach(function(n){if(n.activeTargets.length!==0){var l=[];n.activeTargets.forEach(function(c){var h=new bs(c.target),d=pt(c.target);l.push(h),c.lastReportedSize=bt(c.target,c.observedBox),d<s&&(s=d)}),e.push(function(){n.callback.call(n.observer,l,n.observer)}),n.activeTargets.splice(0,n.activeTargets.length)}});for(var t=0,i=e;t<i.length;t++){var r=i[t];r()}return s},Ue=function(s){E.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(pt(r.target)>s?t.activeTargets.push(r):t.skippedTargets.push(r))})})},vs=function(){var s=0;for(Ue(s);ns();)s=ps(),Ue(s);return as()&&ls(),s>0},he,vt=[],gs=function(){return vt.splice(0).forEach(function(s){return s()})},fs=function(s){if(!he){var e=0,t=document.createTextNode(""),i={characterData:!0};new MutationObserver(function(){return gs()}).observe(t,i),he=function(){t.textContent="".concat(e?e--:e++)}}vt.push(s),he()},_s=function(s){fs(function(){requestAnimationFrame(s)})},K=0,ms=function(){return!!K},ws=250,zs={attributes:!0,characterData:!0,childList:!0,subtree:!0},We=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Fe=function(s){return s===void 0&&(s=0),Date.now()+s},ue=!1,ys=(function(){function s(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return s.prototype.run=function(e){var t=this;if(e===void 0&&(e=ws),!ue){ue=!0;var i=Fe(e);_s(function(){var r=!1;try{r=vs()}finally{if(ue=!1,e=i-Fe(),!ms())return;r?t.run(1e3):e>0?t.run(e):t.start()}})}},s.prototype.schedule=function(){this.stop(),this.run()},s.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,zs)};document.body?t():D.addEventListener("DOMContentLoaded",t)},s.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),We.forEach(function(t){return D.addEventListener(t,e.listener,!0)}))},s.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),We.forEach(function(t){return D.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},s})(),pe=new ys,Ve=function(s){!K&&s>0&&pe.start(),K+=s,!K&&pe.stop()},$s=function(s){return!we(s)&&!ds(s)&&getComputedStyle(s).display==="inline"},xs=(function(){function s(e,t){this.target=e,this.observedBox=t||U.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return s.prototype.isActive=function(){var e=bt(this.target,this.observedBox,!0);return $s(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},s})(),Es=(function(){function s(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return s})(),Y=new WeakMap,je=function(s,e){for(var t=0;t<s.length;t+=1)if(s[t].target===e)return t;return-1},Z=(function(){function s(){}return s.connect=function(e,t){var i=new Es(e,t);Y.set(e,i)},s.observe=function(e,t,i){var r=Y.get(e),o=r.observationTargets.length===0;je(r.observationTargets,t)<0&&(o&&E.push(r),r.observationTargets.push(new xs(t,i&&i.box)),Ve(1),pe.schedule())},s.unobserve=function(e,t){var i=Y.get(e),r=je(i.observationTargets,t),o=i.observationTargets.length===1;r>=0&&(o&&E.splice(E.indexOf(i),1),i.observationTargets.splice(r,1),Ve(-1))},s.disconnect=function(e){var t=this,i=Y.get(e);i.observationTargets.slice().forEach(function(r){return t.unobserve(e,r.target)}),i.activeTargets.splice(0,i.activeTargets.length)},s})(),ks=(function(){function s(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Z.connect(this,e)}return s.prototype.observe=function(e,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Me(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Z.observe(this,e,t)},s.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Me(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Z.unobserve(this,e)},s.prototype.disconnect=function(){Z.disconnect(this)},s.toString=function(){return"function ResizeObserver () { [polyfill code] }"},s})();class Cs{constructor(e,{target:t,config:i,callback:r,skipInitial:o}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,t!==null&&this.t.add(t!=null?t:e),this.l=i,this.o=o!=null?o:this.o,this.callback=r,window.ResizeObserver?(this.u=new ResizeObserver(n=>{this.handleChanges(n),this.h.requestUpdate()}),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){var t;this.value=(t=this.callback)==null?void 0:t.call(this,e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}target(e){return As(this,e)}}const As=ot(class extends at{constructor(){super(...arguments),this.observing=!1}render(s,e){}update(s,[e,t]){this.controller=e,this.part=s,this.observe=t,t===!1?(e.unobserve(s.element),this.observing=!1):this.observing===!1&&(e.observe(s.element),this.observing=!0)}disconnected(){var s;(s=this.controller)==null||s.unobserve(this.part.element),this.observing=!1}reconnected(){var s;this.observe!==!1&&this.observing===!1&&((s=this.controller)==null||s.observe(this.part.element),this.observing=!0)}}),gt=new WeakMap;function Ss(s,e){let t=e;for(;t;){if(gt.get(t)===s)return!0;t=Object.getPrototypeOf(t)}return!1}function Rs(s){return e=>{if(Ss(s,e))return e;const t=s(e);return gt.set(t,s),t}}const Ts=s=>{var e;return!/[^\t\n\r ]/.test((e=s==null?void 0:s.textContent)!=null?e:"")},Os=s=>s.nodeType===Node.COMMENT_NODE||s.nodeType===Node.TEXT_NODE&&Ts(s),Bs=s=>{var e,ft,ve,r,o;return o=class extends s{constructor(){super(...arguments);oe(this,e);oe(this,r,a=>{var h,d;const c=a.target;if(c){const b=c.name||c.getAttribute("name")||"",v=c.assignedNodes({flatten:!0}),g=X(this,e,ft).call(this,c),B={assignedSlotContent:{slotName:b,assignedSlot:((h=g.assignedContent[0])==null?void 0:h.assignedSlot)||null},assignedNodesContent:X(this,e,ve).call(this,g.assignedContent),flattenedNodesContent:X(this,e,ve).call(this,g.flattenedContent),originalEvent:{event:a,assignedNodes:v}},F=new CustomEvent("slotchanges",{composed:!0,detail:B});(d=this.shadowRoot)==null||d.dispatchEvent(F)}})}connectedCallback(){var a,c;(a=super.connectedCallback)==null||a.call(this),(c=this.shadowRoot)==null||c.addEventListener("slotchange",re(this,r))}disconnectedCallback(){var a,c;(a=super.disconnectedCallback)==null||a.call(this),(c=this.shadowRoot)==null||c.removeEventListener("slotchange",re(this,r))}},e=new WeakSet,ft=function(a){const h=[...a.assignedNodes(),...a.childNodes].filter(d=>!Os(d)).map(d=>{var b;return{isFlattened:d.assignedSlot===null,assignedNodes:d.nodeType===Node.TEXT_NODE?(b=d.textContent)==null?void 0:b.trim():d,assignedSlot:d.assignedSlot}});return{assignedContent:h.filter(d=>d.isFlattened===!1),flattenedContent:h.filter(d=>d.isFlattened===!0)}},ve=function(a){return{assignedNodesByNode:a,assignedNodes:a.map(c=>c.assignedNodes)}},r=new WeakMap,o},_t=Rs(Bs),Ls=A`
  :host {
    --_unselected-color: var(--blockquote-tabs-unselected-color, rgb(234 234 234));
    --_scroll-gradient-start-color: var(
      --blockquote-tabs-scroll-gradient-start-color,
      rgb(255, 255, 255, 0)
    );
    --_scroll-gradient-end-color: var(
      --blockquote-tabs-scroll-gradient-end-color,
      rgb(252, 252, 252, 1)
    );
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
    inset-block-end: 0;
    block-size: 1px;
    inset-inline: 0;
    background-color: var(--_unselected-color);
  }

  .hold .indicator {
    position: absolute;
    inline-size: 1rem;
    pointer-events: none;
    inset-block: 0 1px;
    inset-inline-start: 0;
    box-shadow:
      rgb(255, 255, 255) 4px 0 12px 4px inset,
      rgb(210, 210, 210) 4px 0 4px -4px;
    background-color: rgb(234, 234, 234, 0.5);
    transition: opacity 92ms ease-in-out;
    opacity: 0;
    background-clip: padding-box;
  }

  .hold .indicator.show-indicator {
    opacity: 1;
  }

  .hold .indicator + .indicator {
    inset-inline: auto 0;
    transform: scale(-1);
  }

  .scroll-content {
    inline-size: 100%;
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

  [role='tablist'] {
    display: flex;
  }
`;window.ResizeObserver||(window.ResizeObserver=ks);class qs extends _t(f){constructor(){super();m(this,"_onSlotChanges",t=>{t.stopPropagation(),t.preventDefault(),this._slotChangesCount+=1;const{detail:i}=t,r=i.assignedNodesContent.assignedNodes;i.assignedSlotContent.slotName==="tab"&&(this._tabList=r),i.assignedSlotContent.slotName==="tabpanel"&&(this._tabpanelList=r)});m(this,"_onTabClick",t=>{const i=t.composedPath().find(o=>o instanceof Element&&o.slot==="tab"),r=this._tabList.indexOf(i)+1;this.selected===r&&this._scrollIntoView(),this.selected=r});m(this,"_onTabKeyDown",t=>{let i="";switch(t.key){case"ArrowLeft":t.preventDefault(),i=this._selectedTabIndexFromOne-1,this.selected=i<=0?this._getTabListLength:i;break;case"ArrowRight":t.preventDefault(),i=this._selectedTabIndexFromOne+1,this.selected=i>this._getTabListLength?1:i;break;case"Home":t.preventDefault(),this.selected=1;break;case"End":t.preventDefault(),this.selected=this._getTabListLength;break}});this.autofocus=!1,this.label="",this.selected=1,this._tabList=[],this._tabpanelList=[],this._selectTabLast=void 0,this._selectTabpanelLast=void 0,this._observedFocus=!1,this._observeScrollBehavior=!1,this._slotChangesCount=0,this._slotNodesCount=void 0,this._scrollContentRef=lt(),this._resizeControllerObserver=new Cs(this,{callback:()=>{this._onResizeObserverChange()},skipInitial:!0}),this.addEventListener("slotchanges",this._onSlotChanges)}static get styles(){return[Ls]}static get properties(){return{autofocus:{type:Boolean},label:{type:String},selected:{type:Number,reflect:!0},_hasScrollLeftIndicator:{type:Boolean,state:!0},_hasScrollRightIndicator:{type:Boolean,state:!0}}}_selectedIsInRange(t){return t>=0&&t<=this._getTabListLength?t:0}get _selectedTab(){return this._tabList[this._selectedIsInRange(this.selected-1)]}get _selectedTabIndex(){return this._tabList.indexOf(this._selectedTab)}get _selectedTabIndexFromOne(){return this._selectedTabIndex+1}get _getTabListLength(){return this._tabList.length}firstUpdated(t){var o,n,l,a;super.firstUpdated&&super.firstUpdated(t);const i=(o=this.shadowRoot)==null?void 0:o.querySelector('[name="tab"]'),r=(n=this.shadowRoot)==null?void 0:n.querySelector('[name="tabpanel"]');this._slotNodesCount=(l=this.shadowRoot)==null?void 0:l.querySelectorAll("slot"),this._tabList=i==null?void 0:i.assignedElements(),this._tabpanelList=r==null?void 0:r.assignedElements(),this._indicators=(a=this.shadowRoot)==null?void 0:a.querySelectorAll(".indicator")}updated(t){if(super.updated&&super.updated(t),t.has("selected")){this._selectTab();const i=new CustomEvent("selectedchange",{bubbles:!0,detail:{selected:this._selectedTabIndexFromOne,tab:this._selectedTab,tabpanel:this._tabpanelList[this._selectedTabIndex]}});this.dispatchEvent(i)}}get _scrollContentTpl(){return u`
      <div class="scroll-content" ${ct(this._scrollContentRef)} @scroll="${this._scrollEdge}">
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
    `}_scrollEdge({target:t=this._scrollContentRef.value}={}){const{scrollLeft:i,scrollWidth:r,offsetWidth:o}=t,n=r-o;this._hasScrollLeftIndicator=i>0,this._hasScrollRightIndicator=i<n}_selectTab(){const t=this._tabList[this._selectedTabIndex],i=this._tabpanelList[this._selectedTabIndex];this._selectTabLast&&(this._selectTabLast.selected=!1,this._selectTabPanelLast.selected=!1),this._selectTabLast=t,this._selectTabPanelLast=i,t.selected=!0,i.selected=!0,(this.autofocus||this._observedFocus)&&this._requestFocusUpdate(),this._observedFocus=!0}_moveFocusSelectedTab(t=this._selectedTab){window.setTimeout(()=>{t.focus()},0)}async _requestFocusUpdate(){await this.updateComplete,this._moveFocusSelectedTab(),this._scrollIntoView()}_scrollIntoView(){window.requestAnimationFrame(()=>{this._scrollIntoViewWithOffset(),this._observeScrollBehavior=!0})}_scrollIntoViewWithOffset(t=this._selectedTab,i=this._observeScrollBehavior?"smooth":"auto"){const r=this._scrollContentRef.value;if(!r)return;const[o,n]=this._indicators||[],{right:l}=r.getBoundingClientRect(),{offsetLeft:a}=t,{left:c,right:h,width:d}=t.getBoundingClientRect(),{right:b}=o.getBoundingClientRect(),{width:v,left:g}=n.getBoundingClientRect();if(h>g||c<b){const B=h>g?a-l+d+v:a-b;r.scroll({left:B,behavior:i})}}_onResizeObserverChange(){this._scrollIntoView(),this._scrollEdge()}}const Ps=A`
  :host {
    --__color: var(
      --blockquote-tab-color-dark-mode,
      var(--blockquote-tab-color-ambient, var(--theme-colors-secondary500, rgb(32, 32, 32)))
    );
    --_color: var(--blockquote-tab-color, var(--__color));
    --_selected-border-color: var(
      --blockquote-tab-selected-border-color,
      var(
        --blockquote-tab-selected-border-color-ambient,
        var(--theme-colors-secondary500, rgb(184, 184, 184))
      )
    );
    --_focus-outline-color: var(
      --blockquote-tab-focus-outline-color,
      var(
        --blockquote-tab-focus-outline-color-ambient,
        var(--theme-colors-secondary500, rgb(184, 184, 184))
      )
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: nowrap;
    color: var(--_color);
    padding-block: 1em;
    padding-inline: 0.5em;
    min-inline-size: 6.25rem;
    border-block-end: 0.0625rem solid transparent;
    transition: border-block-end-color 192ms ease-in-out;
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

  :host([aria-selected='true']) {
    font-weight: 700;
    border-block-end-color: var(--_selected-border-color);
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
    inline-size: inherit;
    block-size: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;class Ns extends _t(f){constructor(){super();m(this,"_onSlotChanges",t=>{const{detail:i}=t;t.stopPropagation(),t.preventDefault();const r=i.assignedSlotContent.assignedSlot;Object.assign(r.dataset,{text:this.textContent})});this.selected=!1,this.globalRootAttributes={role:"tab",slot:"tab",tabindex:0},this.addEventListener("slotchanges",this._onSlotChanges)}static get properties(){return{selected:{type:Boolean}}}static get styles(){return[Ps]}connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),this.__setArrayAttibute(this.globalRootAttributes)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const i={...this.globalRootAttributes,"aria-selected":!!this.selected,tabindex:this.selected?0:-1};this.__setArrayAttibute(i)}}render(){return u`
      <slot></slot>
    `}__setArrayAttibute(t={}){Object.entries(t).forEach(([i,r])=>{this.setAttribute(i,r)})}}window.customElements.define("blockquote-tab",Ns);const Ds=A`
  :host {
    display: block;
    box-sizing: border-box;
    padding-block: 1rem;
    padding-inline: 1rem;
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

  :host([aria-hidden='true']) {
    display: none;
  }

  :host(:focus:not(:focus-visible)) {
    outline: none;
  }

  :host(:focus-visible) {
    outline: #9e9e9e dashed 0.0625rem;
    outline-offset: -2px;
  }
`;class Ms extends f{static get properties(){return{selected:{type:Boolean}}}constructor(){super(),this.selected=!1,this.globalRootAttributes={role:"tabpanel",slot:"tabpanel",tabindex:0}}static get styles(){return[Ds]}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.__setArrayAttibute(this.globalRootAttributes)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const t={...this.globalRootAttributes,"aria-hidden":!this.selected};this.__setArrayAttibute(t)}}render(){return u`
      <slot></slot>
    `}__setArrayAttibute(e={}){Object.entries(e).forEach(([t,i])=>{this.setAttribute(t,i)})}}window.customElements.define("blockquote-tabpanel",Ms);window.customElements.define("blockquote-tabs",qs);
