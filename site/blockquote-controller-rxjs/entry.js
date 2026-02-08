var De=Object.defineProperty;var Ie=(s,e,t)=>e in s?De(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var u=(s,e,t)=>Ie(s,typeof e!="symbol"?e+"":e,t);const N=globalThis,ie=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol(),le=new WeakMap;let Se=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ie&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&le.set(t,e))}return e}toString(){return this.cssText}};const Ne=s=>new Se(typeof s=="string"?s:s+"",void 0,re),F=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Se(t,s,re)},We=(s,e)=>{if(ie)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=N.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},ae=ie?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ne(t)})(s):s;const{is:je,defineProperty:Ve,getOwnPropertyDescriptor:Fe,getOwnPropertyNames:Ge,getOwnPropertySymbols:Ye,getPrototypeOf:Ze}=Object,$=globalThis,ce=$.trustedTypes,Xe=ce?ce.emptyScript:"",Y=$.reactiveElementPolyfillSupport,q=(s,e)=>s,se={toAttribute(s,e){switch(e){case Boolean:s=s?Xe:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},xe=(s,e)=>!je(s,e),de={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:xe};var we,$e;(we=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),($e=$.litPropertyMetadata)!=null||($.litPropertyMetadata=new WeakMap);let x=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Ve(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){var o;const{get:r,set:n}=(o=Fe(this.prototype,e))!=null?o:{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){const l=r==null?void 0:r.call(this);n==null||n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:de}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const e=Ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const t=this.properties,i=[...Ge(t),...Ye(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ae(r))}else e!==void 0&&t.push(ae(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return We(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:se).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n,o,a;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:se;this._$Em=r;const d=c.fromAttribute(t,l.type);this[r]=(a=d!=null?d:(o=this._$Ej)==null?void 0:o.get(r))!=null?a:d,this._$Em=null}}requestUpdate(e,t,i,r=!1,n){var o,a;if(e!==void 0){const l=this.constructor;if(r===!1&&(n=this[e]),i!=null||(i=l.getPropertyOptions(e)),!(((o=i.hasChanged)!=null?o:xe)(n,t)||i.useDefault&&i.reflect&&n===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(l._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},o){var a,l,c;i&&!((a=this._$Ej)!=null?a:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(l=o!=null?o:t)!=null?l:this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,a]of n){const{wrapped:l}=a,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};var ye;x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[q("elementProperties")]=new Map,x[q("finalized")]=new Map,Y==null||Y({ReactiveElement:x}),((ye=$.reactiveElementVersions)!=null?ye:$.reactiveElementVersions=[]).push("2.1.2");const M=globalThis,he=s=>s,W=M.trustedTypes,ue=W?W.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ce="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Re="?"+w,Je=`<${Re}>`,S=document,U=()=>S.createComment(""),B=s=>s===null||typeof s!="object"&&typeof s!="function",ne=Array.isArray,Qe=s=>ne(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Z=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,pe=/>/g,A=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),me=/'/g,fe=/"/g,Pe=/^(?:script|style|textarea|title)$/i,Ke=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),b=Ke(1),R=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),_e=new WeakMap,E=S.createTreeWalker(S,129);function Te(s,e){if(!ne(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ue!==void 0?ue.createHTML(e):e}const et=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=O;for(let a=0;a<t;a++){const l=s[a];let c,d,h=-1,_=0;for(;_<l.length&&(o.lastIndex=_,d=o.exec(l),d!==null);)_=o.lastIndex,o===O?d[1]==="!--"?o=be:d[1]!==void 0?o=pe:d[2]!==void 0?(Pe.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=A):d[3]!==void 0&&(o=A):o===A?d[0]===">"?(o=r!=null?r:O,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?A:d[3]==='"'?fe:me):o===fe||o===me?o=A:o===be||o===pe?o=O:(o=A,r=void 0);const g=o===A&&s[a+1].startsWith("/>")?" ":"";n+=o===O?l+Je:h>=0?(i.push(c),l.slice(0,h)+Ce+l.slice(h)+w+g):l+w+(h===-2?a:g)}return[Te(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class D{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[c,d]=et(e,t);if(this.el=D.createElement(c,i),E.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=E.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(Ce)){const _=d[o++],g=r.getAttribute(h).split(w),z=/([.?@])?(.*)/.exec(_);l.push({type:1,index:n,name:z[2],strings:g,ctor:z[1]==="."?st:z[1]==="?"?it:z[1]==="@"?rt:G}),r.removeAttribute(h)}else h.startsWith(w)&&(l.push({type:6,index:n}),r.removeAttribute(h));if(Pe.test(r.tagName)){const h=r.textContent.split(w),_=h.length-1;if(_>0){r.textContent=W?W.emptyScript:"";for(let g=0;g<_;g++)r.append(h[g],U()),E.nextNode(),l.push({type:2,index:++n});r.append(h[_],U())}}}else if(r.nodeType===8)if(r.data===Re)l.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(w,h+1))!==-1;)l.push({type:7,index:n}),h+=w.length-1}n++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function P(s,e,t=s,i){var o,a,l;if(e===R)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=B(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?((l=t._$Co)!=null?l:t._$Co=[])[i]=r:t._$Cl=r),r!==void 0&&(e=P(s,r._$AS(s,e.values),r,i)),e}class tt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;const{el:{content:t},parts:i}=this._$AD,r=((c=e==null?void 0:e.creationScope)!=null?c:S).importNode(t,!0);E.currentNode=r;let n=E.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new I(n,n.nextSibling,this,e):l.type===1?d=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(d=new nt(n,this,e)),this._$AV.push(d),l=i[++a]}o!==(l==null?void 0:l.index)&&(n=E.nextNode(),o++)}return E.currentNode=S,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class I{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,r){var n;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(n=r==null?void 0:r.isConnected)!=null?n:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),B(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=D.createElement(Te(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new tt(r,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=_e.get(e.strings);return t===void 0&&_e.set(e.strings,t=new D(e)),t}k(e){ne(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new I(this.O(U()),this.O(U()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const r=he(e).nextSibling;he(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=P(this,e,t,0),o=!B(e)||e!==this._$AH&&e!==R,o&&(this._$AH=e);else{const a=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=P(this,a[i+l],t,l),c===R&&(c=this._$AH[l]),o||(o=!B(c)||c!==this._$AH[l]),c===m?e=m:e!==m&&(e+=(c!=null?c:"")+n[l+1]),this._$AH[l]=c}o&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class st extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class it extends G{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class rt extends G{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=P(this,e,t,0))!=null?o:m)===R)return;const i=this._$AH,r=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==m&&(i===m||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}}class nt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const X=M.litHtmlPolyfillSupport;var ze;X==null||X(D,I),((ze=M.litHtmlVersions)!=null?ze:M.litHtmlVersions=[]).push("3.3.2");const oe=(s,e,t)=>{var n,o;const i=(n=t==null?void 0:t.renderBefore)!=null?n:e;let r=i._$litPart$;if(r===void 0){const a=(o=t==null?void 0:t.renderBefore)!=null?o:null;i._$litPart$=r=new I(e.insertBefore(U(),a),a,void 0,t!=null?t:{})}return r._$AI(s),r};const k=globalThis;let y=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return R}};var Ae;y._$litElement$=!0,y.finalized=!0,(Ae=k.litElementHydrateSupport)==null||Ae.call(k,{LitElement:y});const J=k.litElementPolyfillSupport;J==null||J({LitElement:y});var Ee;((Ee=k.litElementVersions)!=null?Ee:k.litElementVersions=[]).push("4.2.2");const ot=s=>s.strings===void 0;const lt={CHILD:2},at=s=>(...e)=>({_$litDirective$:s,values:e});class ct{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const H=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const r of t)(i=r._$AO)==null||i.call(r,e,!1),H(r,e);return!0},j=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Oe=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),ut(e)}};function dt(s){this._$AN!==void 0?(j(this),this._$AM=s,Oe(this)):this._$AM=s}function ht(s,e=!1,t=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)H(i[n],!1),j(i[n]);else i!=null&&(H(i,!1),j(i));else H(this,s)}const ut=s=>{var e,t;s.type==lt.CHILD&&((e=s._$AP)!=null||(s._$AP=ht),(t=s._$AQ)!=null||(s._$AQ=dt))};class bt extends ct{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Oe(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),t&&(H(this,e),j(this))}setValue(e){if(ot(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const pt=()=>new mt;class mt{}const Q=new WeakMap,ft=at(class extends bt{render(s){return m}update(s,[e]){var i;const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(i=s.options)==null?void 0:i.host,this.rt(this.ct=s.element)),m}rt(s){var e;if(this.isConnected||(s=void 0),typeof this.G=="function"){const t=(e=this.ht)!=null?e:globalThis;let i=Q.get(t);i===void 0&&(i=new WeakMap,Q.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){var s,e,t;return typeof this.G=="function"?(e=Q.get((s=this.ht)!=null?s:globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),_t=F`
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
`;class gt extends y{constructor(){super();u(this,"_onResize",t=>{t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[_t]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((i,r)=>r.width-i.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const i=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(i)}}render(){return b`
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
    `}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const i=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(i)}}window.customElements.define("blockquote-base-embedded-webview-size",gt);const vt=F`
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
`;class wt extends y{constructor(){super();u(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[vt]}async connectedCallback(){var t,i,r,n,o,a,l,c,d,h,_,g,z;(t=super.connectedCallback)==null||t.call(this),await this.updateComplete,this.rect=(i=this.shadowRoot)==null?void 0:i.querySelector(".rect"),this.bottomRightResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(".resizer-se"),this.bottomLeftResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-sw"),this.rightResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-e"),this.leftResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-w"),this.bottomResizerElement=(l=this.shadowRoot)==null?void 0:l.querySelector(".resizer-s"),(c=this.leftResizerElement)==null||c.addEventListener("pointerdown",this._createResizerLeft),(d=this.rightResizerElement)==null||d.addEventListener("pointerdown",this._createResizerRight),(h=this.bottomResizerElement)==null||h.addEventListener("pointerdown",this._createResizerBottom),(_=this.bottomLeftResizerElement)==null||_.addEventListener("pointerdown",this._createResizerBottomLeft),(g=this.bottomRightResizerElement)==null||g.addEventListener("pointerdown",this._createResizerBottomRight),(z=this.bottomResizerElement)==null||z.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return b`
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
    `}_createResizer(t,i){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:r,pointerId:n,clientX:o,clientY:a}=i;r==null||r.setPointerCapture(n);const l=({clientX:d,clientY:h})=>{const _=Math.floor(d-o),g=Math.floor(h-a);this._resize({detail:{dx:_,dy:g}})};r==null||r.addEventListener("pointermove",l);const c=()=>{this.removeAttribute("resizing"),r==null||r.releasePointerCapture(n),r==null||r.removeEventListener("pointermove",l),r==null||r.removeEventListener("pointerup",c),this._dispatchResizeEvent()};r==null||r.addEventListener("pointerup",c)}_resize({detail:t}){let i,r;const n=Math.floor(t.dx*2.04),o=Math.floor(t.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",i=`${this._getBoundingClientRectWidth-n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"left":this._cursor="e",i=`${this._getBoundingClientRectWidth+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"top":this._cursor="n",r=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopLeft":this._cursor="ne",i=`${this._getBoundingClientRectWidth+n}px`,r=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break;case"scaleTopRight":this._cursor="nw",i=`${this._getBoundingClientRectWidth-n}px`,r=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",r);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var i;return Math.abs(parseInt((i=this.rect)==null?void 0:i.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",wt);const $t=F`
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
`;class yt extends y{constructor(){super();u(this,"_onLoadElement",({target:t})=>{if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const i=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(i)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[$t]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return b`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){oe(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return b`
      <slot name="embedded"></slot>
    `}_fetch(t){var i,r,n,o;t&&(Object.assign((i=this._embeddedElement)!=null?i:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((r=this._embeddedElement)!=null?r:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((o=(n=this._embeddedElement)==null?void 0:n.style)!=null?o:{},t.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",yt);const zt=F`
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
`,At=b`
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
`,Et=b`
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
`;class kt extends y{constructor(){super();u(this,"_updateSize",({detail:t})=>{var i,r,n,o;(r=(i=this._embeddedResizeRef)==null?void 0:i.value)==null||r.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(o=(n=this._embeddedResizeRef)==null?void 0:n.value)==null||o.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=At,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=pt()}static get styles(){return[zt]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0,useDefault:!0}}}async connectedCallback(){var i,r;(i=super.connectedCallback)==null||i.call(this),await this.updateComplete,this.addEventListener("webviewresize",n=>{var a;const{detail:o}=n;Object.assign(this.__readDataPos,o),this.__resetResizing=!0,(o.cursor==="n"||o.cursor==="ne"||o.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((a=this._controlBottom)!=null?a:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(n=>{const{src:o="",option:a="",description:l=""}=n.dataset;return{src:o,option:a,description:l}}),this._src=this._sources[this.selected].src),this.embedded=(r=this.shadowRoot)==null?void 0:r.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return b`
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
              <select id="select-sources" @change="${this._onChangeFile}" aria-label="Cases">
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
        <span aria-hidden="true">${Et}</span>
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
        <blockquote-base-embedded-webview-resize ${ft(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return b`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",kt);class K extends Error{constructor(t){super(t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"");u(this,"errors");this.errors=t,this.name="UnsubscriptionError"}}const V=class V{constructor(e){u(this,"initialTeardown");u(this,"closed",!1);u(this,"_finalizers",null);this.initialTeardown=e}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{initialTeardown:t}=this;if(p(t))try{t()}catch(r){e=r instanceof K?r.errors:[r]}const{_finalizers:i}=this;if(i){this._finalizers=null;for(const r of i)try{ge(r)}catch(n){e=e!=null?e:[],n instanceof K?e.push(...n.errors):e.push(n)}}if(e)throw new K(e)}}add(e){var t;e&&e!==this&&(this.closed?ge(e):(e&&"add"in e&&e.add(()=>{this.remove(e)}),(t=this._finalizers)!=null||(this._finalizers=new Set),this._finalizers.add(e)))}remove(e){var t;(t=this._finalizers)==null||t.delete(e)}};u(V,"EMPTY",(()=>{const e=new V;return e.closed=!0,e})());let T=V;typeof Symbol.dispose=="symbol"&&(T.prototype[Symbol.dispose]=T.prototype.unsubscribe);function ge(s){p(s)?s():s.unsubscribe()}class C extends T{constructor(t,i){var r,n,o,a;super();u(this,"isStopped",!1);u(this,"destination");u(this,"_nextOverride",null);u(this,"_errorOverride",null);u(this,"_completeOverride",null);u(this,"_onFinalize",null);this.destination=t instanceof C?t:Pt(t),this._nextOverride=(r=i==null?void 0:i.next)!=null?r:null,this._errorOverride=(n=i==null?void 0:i.error)!=null?n:null,this._completeOverride=(o=i==null?void 0:i.complete)!=null?o:null,this._onFinalize=(a=i==null?void 0:i.finalize)!=null?a:null,this._next=this._nextOverride?St:this._next,this._error=this._errorOverride?xt:this._error,this._complete=this._completeOverride?Ct:this._complete,Tt(t)&&t.add(this)}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){var t;this.closed||(this.isStopped=!0,super.unsubscribe(),(t=this._onFinalize)==null||t.call(this))}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}function St(s){try{this._nextOverride(s)}catch(e){this.destination.error(e)}}function xt(s){try{this._errorOverride(s)}catch(e){this.destination.error(e)}finally{this.unsubscribe()}}function Ct(){try{this._completeOverride()}catch(s){this.destination.error(s)}finally{this.unsubscribe()}}class Rt{constructor(e){u(this,"partialObserver");this.partialObserver=e}next(e){const{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){L(i)}}error(e){const{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){L(i)}else L(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){L(t)}}}function Pt(s){return new Rt(!s||p(s)?{next:s!=null?s:void 0}:s)}function Tt(s){return s&&p(s.unsubscribe)&&p(s.add)}function Le({destination:s,...e}){return new C(s,e)}var ke;class v{constructor(e){e&&(this._subscribe=e)}subscribe(e){const t=e instanceof C?e:new C(e);return t.add(this._trySubscribe(t)),t}_trySubscribe(e){try{return this._subscribe(e)}catch(t){e.error(t)}}forEach(e){return new Promise((t,i)=>{const r=new C({next:n=>{try{e(n)}catch(o){i(o),r.unsubscribe()}},error:i,complete:t});this.subscribe(r)})}_subscribe(e){}[(ke=Symbol.observable)!=null?ke:"@@observable"](){return this}pipe(...e){return e.reduce(Ot,this)}[Symbol.asyncIterator](){let e,t=!1,i,r=!1;const n=[],o=[],a=c=>{for(t=!0,i=c;o.length;){const[d,h]=o.shift();h(c)}},l=()=>{for(r=!0;o.length;){const[c]=o.shift();c({value:void 0,done:!0})}};return{next:()=>(e||(e=this.subscribe({next:c=>{if(o.length){const[d]=o.shift();d({value:c,done:!1})}else n.push(c)},error:a,complete:l})),n.length?Promise.resolve({value:n.shift(),done:!1}):r?Promise.resolve({value:void 0,done:!0}):t?Promise.reject(i):new Promise((c,d)=>{o.push([c,d])})),throw:c=>(e==null||e.unsubscribe(),a(c),Promise.reject(c)),return:()=>(e==null||e.unsubscribe(),l(),Promise.resolve({value:void 0,done:!0})),[Symbol.asyncIterator](){return this}}}}function Ot(s,e){return e(s)}function L(s){setTimeout(()=>{throw s})}function Lt(s){switch(Nt(s)){case f.Own:return s;case f.InteropObservable:return qt(s);case f.ArrayLike:return Mt(s);case f.Promise:return Ht(s);case f.AsyncIterable:return qe(s);case f.Iterable:return Ut(s);case f.ReadableStreamLike:return Bt(s)}}function qt(s){return new v(e=>{var i;const t=s[(i=Symbol.observable)!=null?i:"@@observable"]();if(p(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Mt(s){return new v(e=>{It(s,e)})}function Ht(s){return new v(e=>{s.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,L)})}function Ut(s){return new v(e=>{for(const t of s)if(e.next(t),e.closed)return;e.complete()})}function qe(s){return new v(e=>{Dt(s,e).catch(t=>e.error(t))})}function Bt(s){return qe(jt(s))}async function Dt(s,e){for await(const t of s)if(e.next(t),e.closed)return;e.complete()}function It(s,e){const t=s.length;for(let i=0;i<t;i++){if(e.closed)return;e.next(s[i])}e.complete()}var f;(function(s){s[s.Own=0]="Own",s[s.InteropObservable=1]="InteropObservable",s[s.ArrayLike=2]="ArrayLike",s[s.Promise=3]="Promise",s[s.AsyncIterable=4]="AsyncIterable",s[s.Iterable=5]="Iterable",s[s.ReadableStreamLike=6]="ReadableStreamLike"})(f||(f={}));function Nt(s){if(s instanceof v)return f.Own;if(Gt(s))return f.InteropObservable;if(Me(s))return f.ArrayLike;if(Ft(s))return f.Promise;if(Wt(s))return f.AsyncIterable;if(Yt(s))return f.Iterable;if(Vt(s))return f.ReadableStreamLike;throw new TypeError(`You provided ${s!==null&&typeof s=="object"?"an invalid object":`'${s}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function p(s){return typeof s=="function"}function Wt(s){return Symbol.asyncIterator&&p(s==null?void 0:s[Symbol.asyncIterator])}async function*jt(s){const e=s.getReader();try{for(;;){const{value:t,done:i}=await e.read();if(i)return;yield t}}finally{e.releaseLock()}}function Vt(s){return p(s==null?void 0:s.getReader)}function Ft(s){return p(s==null?void 0:s.then)}function Gt(s){var e;return p(s[(e=Symbol.observable)!=null?e:"@@observable"])}function Yt(s){return p(s==null?void 0:s[Symbol.iterator])}function Me(s){return s&&typeof s.length=="number"&&!p(s)}function Zt(s){return!!s&&(s instanceof v||p(s.lift)&&p(s.subscribe))}class Xt extends v{constructor(){super();u(this,"_closed",!1);u(this,"_observerCounter",0);u(this,"currentObservers",new Map);u(this,"observerSnapshot");u(this,"hasError",!1);u(this,"thrownError",null)}get closed(){return this._closed}get observers(){var t;return(t=this.observerSnapshot)!=null?t:this.observerSnapshot=Array.from(this.currentObservers.values())}_clearObservers(){this.currentObservers.clear(),this.observerSnapshot=void 0}next(t){if(!this._closed){const{observers:i}=this,r=i.length;for(let n=0;n<r;n++)i[n].next(t)}}error(t){if(!this._closed){this.hasError=this._closed=!0,this.thrownError=t;const{observers:i}=this,r=i.length;for(let n=0;n<r;n++)i[n].error(t);this._clearObservers()}}complete(){if(!this._closed){this._closed=!0;const{observers:t}=this,i=t.length;for(let r=0;r<i;r++)t[r].complete();this._clearObservers()}}unsubscribe(){this._closed=!0,this._clearObservers()}get observed(){return this.currentObservers.size>0}_subscribe(t){return this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){if(this.hasError||this._closed)return T.EMPTY;const{currentObservers:i}=this,r=this._observerCounter++;return i.set(r,t),this.observerSnapshot=void 0,t.add(()=>{i.delete(r),this.observerSnapshot=void 0}),t}_checkFinalizedStatuses(t){const{hasError:i,thrownError:r,_closed:n}=this;i?t.error(r):n&&t.complete()}asObservable(){return new v(t=>this.subscribe(t))}}function Jt(){}function Qt(s){return e=>new v(t=>{let i=0;e.subscribe(Le({destination:t,next:r=>{t.next(s(r,i++))}}))})}const{isArray:Kt}=Array;function es(s,e){return Kt(e)?s(...e):s(e)}function ts(s){return Qt(e=>es(s,e))}const ss=["addListener","removeListener"],is=["addEventListener","removeEventListener"],rs=["on","off"];function ns(s,e,t,i){if(p(t)&&(i=t,t=void 0),i)return ts(i)(ns(s,e,t));const r=He(s)||Ue(s)||Be(s);if(!r&&!Me(s))throw new TypeError("Invalid event target");return new v(n=>{const o=(...a)=>n.next(1<a.length?a:a[0]);if(r)ve(o,n,s,e,t);else for(let a=0;a<s.length&&!n.closed;a++){const l=s[a];ve(o,n,l,e,t)}})}function ve(s,e,t,i,r){const[n,o]=os(t);if(!n||!o)throw new TypeError("Invalid event target");t[n](i,s,r),e.add(()=>t[o](i,s,r))}function os(s){return Be(s)?is:He(s)?ss:Ue(s)?rs:[]}function He(s){return p(s.addListener)&&p(s.removeListener)}function Ue(s){return p(s.on)&&p(s.off)}function Be(s){return p(s.addEventListener)&&p(s.removeEventListener)}function ls(s){return e=>new v(t=>{Lt(s).subscribe(Le({destination:t,next:()=>t.complete(),complete:Jt})),!t.closed&&e.subscribe(t)})}const ee=Symbol("unsubscribe"),te=Symbol("subscriptions");class us{constructor(e){this[ee]=new Xt,this[te]=new Map,(this.host=e).addController(this)}subscribe(e,t){var n;if(!Zt(t))throw new Error("Invalid Observable!");const i=this[te].get(e);if(i){if((i==null?void 0:i.stream$)===t)return t;(n=i==null?void 0:i.subscription)==null||n.unsubscribe()}const r=t.pipe(ls(this[ee])).subscribe(o=>{e in this.host&&(this.host[e]=o),this.host.requestUpdate()});return this[te].set(e,{stream$:t,subscription:r}),t}hostDisconnected(){this[ee].next(null)}}export{us as BlockquoteControllerRxjs,y as LitElement,ns as fromEvent,b as html,Qt as map};
