const P=window,j=P.ShadowRoot&&(P.ShadyCSS===void 0||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),V=new WeakMap;let et=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(j&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=V.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&V.set(e,t))}return t}toString(){return this.cssText}};const lt=n=>new et(typeof n=="string"?n:n+"",void 0,D),mt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new et(e,n,D)},ht=(n,t)=>{j?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=P.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},W=j?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return lt(e)})(n):n;var M;const O=window,q=O.trustedTypes,at=q?q.emptyScript:"",Z=O.reactiveElementPolyfillSupport,z={toAttribute(n,t){switch(t){case Boolean:n=n?at:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},st=(n,t)=>t!==n&&(t==t||n==n),k={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:st};let A=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||k}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(W(i))}else t!==void 0&&e.push(W(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ht(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=k){var i;const r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:z).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=i.getPropertyOptions(r),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:z;this._$El=r,this[r]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||st)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},Z==null||Z({ReactiveElement:A}),((M=O.reactiveElementVersions)!==null&&M!==void 0?M:O.reactiveElementVersions=[]).push("1.5.0");var L;const N=window,g=N.trustedTypes,J=g?g.createPolicy("lit-html",{createHTML:n=>n}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,it="?"+v,dt=`<${it}>`,y=document,b=(n="")=>y.createComment(n),C=n=>n===null||typeof n!="object"&&typeof n!="function",nt=Array.isArray,ct=n=>nt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,G=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,F=/"/g,ot=/^(?:script|style|textarea|title)$/i,rt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),St=rt(1),bt=rt(2),m=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Q=new WeakMap,f=y.createTreeWalker(y,129,null,!1),ut=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":"",o=S;for(let l=0;l<e;l++){const h=n[l];let $,a,c=-1,p=0;for(;p<h.length&&(o.lastIndex=p,a=o.exec(h),a!==null);)p=o.lastIndex,o===S?a[1]==="!--"?o=K:a[1]!==void 0?o=G:a[2]!==void 0?(ot.test(a[2])&&(i=RegExp("</"+a[2],"g")),o=_):a[3]!==void 0&&(o=_):o===_?a[0]===">"?(o=i!=null?i:S,c=-1):a[1]===void 0?c=-2:(c=o.lastIndex-a[2].length,$=a[1],o=a[3]===void 0?_:a[3]==='"'?F:Y):o===F||o===Y?o=_:o===K||o===G?o=S:(o=_,i=void 0);const U=o===_&&n[l+1].startsWith("/>")?" ":"";r+=o===S?h+dt:c>=0?(s.push($),h.slice(0,c)+"$lit$"+h.slice(c)+v+U):h+v+(c===-2?(s.push(void 0),l):U)}const d=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[J!==void 0?J.createHTML(d):d,s]};class w{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const d=t.length-1,l=this.parts,[h,$]=ut(t,e);if(this.el=w.createElement(h,s),f.currentNode=this.el.content,e===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(i=f.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const a=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(v)){const p=$[o++];if(a.push(c),p!==void 0){const U=i.getAttribute(p.toLowerCase()+"$lit$").split(v),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:x[2],strings:U,ctor:x[1]==="."?$t:x[1]==="?"?_t:x[1]==="@"?At:R})}else l.push({type:6,index:r})}for(const c of a)i.removeAttribute(c)}if(ot.test(i.tagName)){const a=i.textContent.split(v),c=a.length-1;if(c>0){i.textContent=g?g.emptyScript:"";for(let p=0;p<c;p++)i.append(a[p],b()),f.nextNode(),l.push({type:2,index:++r});i.append(a[c],b())}}}else if(i.nodeType===8)if(i.data===it)l.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(v,a+1))!==-1;)l.push({type:7,index:r}),a+=v.length-1}r++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function E(n,t,e=n,s){var i,r,o,d;if(t===m)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const h=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=E(n,l._$AS(n,t.values),l,s)),t}class pt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(s,!0);f.currentNode=r;let o=f.nextNode(),d=0,l=0,h=i[0];for(;h!==void 0;){if(d===h.index){let $;h.type===2?$=new T(o,o.nextSibling,this,t):h.type===1?$=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&($=new ft(o,this,t)),this.u.push($),h=i[++l]}d!==(h==null?void 0:h.index)&&(o=f.nextNode(),d++)}return r}p(t){let e=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{constructor(t,e,s,i){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==m&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ct(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=w.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(s);else{const o=new pt(r,this),d=o.v(this.options);o.p(s),this.T(d),this._$AH=o}}_$AC(t){let e=Q.get(t.strings);return e===void 0&&Q.set(t.strings,e=new w(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new T(this.O(b()),this.O(b()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class R{constructor(t,e,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=E(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const d=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=E(this,d[s+l],e,l),h===m&&(h=this._$AH[l]),o||(o=!C(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h!=null?h:"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class $t extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const vt=g?g.emptyScript:"";class _t extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,vt):this.element.removeAttribute(this.name)}}class At extends R{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=E(this,t,e,0))!==null&&s!==void 0?s:u)===m)return;const i=this._$AH,r=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class ft{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const X=N.litHtmlPolyfillSupport;X==null||X(w,T),((L=N.litHtmlVersions)!==null&&L!==void 0?L:N.litHtmlVersions=[]).push("2.5.0");const gt=(n,t,e)=>{var s,i;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new T(t.insertBefore(b(),d),d,void 0,e!=null?e:{})}return o._$AI(n),o};var B,I;class H extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return m}}H.finalized=!0,H._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:H});const tt=globalThis.litElementPolyfillSupport;tt==null||tt({LitElement:H});((I=globalThis.litElementVersions)!==null&&I!==void 0?I:globalThis.litElementVersions=[]).push("3.2.2");const Ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wt=n=>(...t)=>({_$litDirective$:n,values:t});let Tt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const xt={HTML:1,SVG:2},Pt=(n,t)=>t===void 0?(n==null?void 0:n._$litType$)!==void 0:(n==null?void 0:n._$litType$)===t,Ht=n=>n.strings===void 0;export{xt as a,mt as b,Ht as c,u as d,wt as e,Tt as i,Pt as n,H as s,Ct as t,bt as w,St as y};