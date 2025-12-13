var De=Object.defineProperty;var te=r=>{throw TypeError(r)};var Me=(r,e,t)=>e in r?De(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var g=(r,e,t)=>Me(r,typeof e!="symbol"?e+"":e,t),ie=(r,e,t)=>e.has(r)||te("Cannot "+t);var I=(r,e,t)=>(ie(r,e,"read from private field"),t?t.call(r):e.get(r)),se=(r,e,t)=>e.has(r)?te("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),re=(r,e,t,i)=>(ie(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t);const N=globalThis,J=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),oe=new WeakMap;let ye=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=oe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&oe.set(t,e))}return e}toString(){return this.cssText}};const Le=r=>new ye(typeof r=="string"?r:r+"",void 0,K),S=(r,...e)=>{const t=r.length===1?r[0]:e.reduce(((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1]),r[0]);return new ye(t,r,K)},Ne=(r,e)=>{if(J)r.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},ne=J?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Le(t)})(r):r;const{is:Oe,defineProperty:Ue,getOwnPropertyDescriptor:Be,getOwnPropertyNames:Ie,getOwnPropertySymbols:Fe,getPrototypeOf:je}=Object,v=globalThis,ae=v.trustedTypes,Ve=ae?ae.emptyScript:"",F=v.reactiveElementPolyfillSupport,T=(r,e)=>r,Z={toAttribute(r,e){switch(e){case Boolean:r=r?Ve:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ze=(r,e)=>!Oe(r,e),le={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:ze};var ge,_e;(ge=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(_e=v.litPropertyMetadata)!=null||(v.litPropertyMetadata=new WeakMap);let A=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ue(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){var n;const{get:s,set:o}=(n=Be(this.prototype,e))!=null?n:{get(){return this[t]},set(l){this[t]=l}};return{get:s,set(l){const a=s==null?void 0:s.call(this);o==null||o.call(this,l),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:le}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,i=[...Ie(t),...Fe(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ne(s))}else e!==void 0&&t.push(ne(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach((t=>t(this)))}addController(e){var t,i;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach((i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach((t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var o;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:Z).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var o,n,l;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Z;this._$Em=s;const c=d.fromAttribute(t,a.type);this[s]=(l=c!=null?c:(n=this._$Ej)==null?void 0:n.get(s))!=null?l:c,this._$Em=null}}requestUpdate(e,t,i){var s,o;if(e!==void 0){const n=this.constructor,l=this[e];if(i!=null||(i=n.getPropertyOptions(e)),!(((s=i.hasChanged)!=null?s:ze)(l,t)||i.useDefault&&i.reflect&&l===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},n){var l,a,d;i&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(a=n!=null?n:t)!=null?a:this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&((d=this._$Eq)!=null?d:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,l]of o){const{wrapped:a}=l,d=this[n];a!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,l,d)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach((o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)})),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach((i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach((t=>this._$ET(t,this[t])))),this._$EM()}updated(e){}firstUpdated(e){}};var fe;A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[T("elementProperties")]=new Map,A[T("finalized")]=new Map,F==null||F({ReactiveElement:A}),((fe=v.reactiveElementVersions)!=null?fe:v.reactiveElementVersions=[]).push("2.1.1");const P=globalThis,O=P.trustedTypes,de=O?O.createPolicy("lit-html",{createHTML:r=>r}):void 0,ke="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce="?"+f,We=`<${Ce}>`,k=document,H=()=>k.createComment(""),D=r=>r===null||typeof r!="object"&&typeof r!="function",Q=Array.isArray,Ge=r=>Q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",j=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,he=/>/g,$=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ue=/'/g,pe=/"/g,Ae=/^(?:script|style|textarea|title)$/i,Ye=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),h=Ye(1),C=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),be=new WeakMap,y=k.createTreeWalker(k,129);function Ee(r,e){if(!Q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}const Ze=(r,e)=>{const t=r.length-1,i=[];let s,o=e===2?"<svg>":e===3?"<math>":"",n=R;for(let l=0;l<t;l++){const a=r[l];let d,c,u=-1,b=0;for(;b<a.length&&(n.lastIndex=b,c=n.exec(a),c!==null);)b=n.lastIndex,n===R?c[1]==="!--"?n=ce:c[1]!==void 0?n=he:c[2]!==void 0?(Ae.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=$):c[3]!==void 0&&(n=$):n===$?c[0]===">"?(n=s!=null?s:R,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?$:c[3]==='"'?pe:ue):n===pe||n===ue?n=$:n===ce||n===he?n=R:(n=$,s=void 0);const m=n===$&&r[l+1].startsWith("/>")?" ":"";o+=n===R?a+We:u>=0?(i.push(d),a.slice(0,u)+ke+a.slice(u)+f+m):a+f+(u===-2?l:m)}return[Ee(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class M{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[d,c]=Ze(e,t);if(this.el=M.createElement(d,i),y.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=y.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(ke)){const b=c[n++],m=s.getAttribute(u).split(f),w=/([.?@])?(.*)/.exec(b);a.push({type:1,index:o,name:w[2],strings:m,ctor:w[1]==="."?Je:w[1]==="?"?Ke:w[1]==="@"?Qe:B}),s.removeAttribute(u)}else u.startsWith(f)&&(a.push({type:6,index:o}),s.removeAttribute(u));if(Ae.test(s.tagName)){const u=s.textContent.split(f),b=u.length-1;if(b>0){s.textContent=O?O.emptyScript:"";for(let m=0;m<b;m++)s.append(u[m],H()),y.nextNode(),a.push({type:2,index:++o});s.append(u[b],H())}}}else if(s.nodeType===8)if(s.data===Ce)a.push({type:2,index:o});else{let u=-1;for(;(u=s.data.indexOf(f,u+1))!==-1;)a.push({type:7,index:o}),u+=f.length-1}o++}}static createElement(e,t){const i=k.createElement("template");return i.innerHTML=e,i}}function x(r,e,t=r,i){var n,l,a;if(e===C)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=D(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[i]=s:t._$Cl=s),s!==void 0&&(e=x(r,s._$AS(r,e.values),s,i)),e}class Xe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var d;const{el:{content:t},parts:i}=this._$AD,s=((d=e==null?void 0:e.creationScope)!=null?d:k).importNode(t,!0);y.currentNode=s;let o=y.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new L(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new et(o,this,e)),this._$AV.push(c),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=y.nextNode(),n++)}return y.currentNode=k,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class L{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(o=s==null?void 0:s.isConnected)!=null?o:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),D(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ge(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=M.createElement(Ee(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const n=new Xe(s,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=be.get(e.strings);return t===void 0&&be.set(e.strings,t=new M(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new L(this.O(H()),this.O(H()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(o===void 0)e=x(this,e,t,0),n=!D(e)||e!==this._$AH&&e!==C,n&&(this._$AH=e);else{const l=e;let a,d;for(e=o[0],a=0;a<o.length-1;a++)d=x(this,l[i+a],t,a),d===C&&(d=this._$AH[a]),n||(n=!D(d)||d!==this._$AH[a]),d===p?e=p:e!==p&&(e+=(d!=null?d:"")+o[a+1]),this._$AH[a]=d}n&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}let Je=class extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}};class Ke extends B{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}let Qe=class extends B{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=x(this,e,t,0))!=null?n:p)===C)return;const i=this._$AH,s=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)==null?void 0:t.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}};class et{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const V=P.litHtmlPolyfillSupport;var ve;V==null||V(M,L),((ve=P.litHtmlVersions)!=null?ve:P.litHtmlVersions=[]).push("3.3.1");const ee=(r,e,t)=>{var o,n;const i=(o=t==null?void 0:t.renderBefore)!=null?o:e;let s=i._$litPart$;if(s===void 0){const l=(n=t==null?void 0:t.renderBefore)!=null?n:null;i._$litPart$=s=new L(e.insertBefore(H(),l),l,void 0,t!=null?t:{})}return s._$AI(r),s};const z=globalThis;let _=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ee(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}};var we;_._$litElement$=!0,_.finalized=!0,(we=z.litElementHydrateSupport)==null||we.call(z,{LitElement:_});const W=z.litElementPolyfillSupport;W==null||W({LitElement:_});var $e;(($e=z.litElementVersions)!=null?$e:z.litElementVersions=[]).push("4.2.1");const tt=r=>r.strings===void 0;const xe={CHILD:2},Se=r=>(...e)=>({_$litDirective$:r,values:e});class Re{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const q=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),q(s,e);return!0},U=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Te=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),rt(e)}};function it(r){this._$AN!==void 0?(U(this),this._$AM=r,Te(this)):this._$AM=r}function st(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)q(i[o],!1),U(i[o]);else i!=null&&(q(i,!1),U(i));else q(this,r)}const rt=r=>{var e,t;r.type==xe.CHILD&&((e=r._$AP)!=null||(r._$AP=st),(t=r._$AQ)!=null||(r._$AQ=it))};class ot extends Re{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Te(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(q(this,e),U(this))}setValue(e){if(tt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Pe=()=>new nt;class nt{}const G=new WeakMap,qe=Se(class extends ot{render(r){return p}update(r,[e]){var i;const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),p}rt(r){var e;if(this.isConnected||(r=void 0),typeof this.G=="function"){const t=(e=this.ht)!=null?e:globalThis;let i=G.get(t);i===void 0&&(i=new WeakMap,G.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,e,t;return typeof this.G=="function"?(e=G.get((r=this.ht)!=null?r:globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),at=S`
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
`;class lt extends _{constructor(){super();g(this,"_onResize",t=>{t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})});this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:"360x800"},{width:390,height:864,id:"390x864"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:720,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1}static get styles(){return[at]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((i,s)=>s.width-i.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const i=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(i)}}render(){return h`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return h`
      ${this.screenSizes.map((t,i)=>h`
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
    `}get _visualTextTpl(){return h`
      <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true">
        ${this.selectedSize.id}
      </span>
    `}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const i=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(i)}}window.customElements.define("blockquote-base-embedded-webview-size",lt);const dt=S`
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
`;class ct extends _{constructor(){super();g(this,"_doubleclickForCssInitialSize",()=>{this.removeAttribute("style")});this._cursor="",this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}static get styles(){return[dt]}async connectedCallback(){var t,i,s,o,n,l,a,d,c,u,b,m,w;(t=super.connectedCallback)==null||t.call(this),await this.updateComplete,this.rect=(i=this.shadowRoot)==null?void 0:i.querySelector(".rect"),this.bottomRightResizerElement=(s=this.shadowRoot)==null?void 0:s.querySelector(".resizer-se"),this.bottomLeftResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-sw"),this.rightResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-e"),this.leftResizerElement=(l=this.shadowRoot)==null?void 0:l.querySelector(".resizer-w"),this.bottomResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(".resizer-s"),(d=this.leftResizerElement)==null||d.addEventListener("pointerdown",this._createResizerLeft),(c=this.rightResizerElement)==null||c.addEventListener("pointerdown",this._createResizerRight),(u=this.bottomResizerElement)==null||u.addEventListener("pointerdown",this._createResizerBottom),(b=this.bottomLeftResizerElement)==null||b.addEventListener("pointerdown",this._createResizerBottomLeft),(m=this.bottomRightResizerElement)==null||m.addEventListener("pointerdown",this._createResizerBottomRight),(w=this.bottomResizerElement)==null||w.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return h`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `}get _resizersTpl(){return h`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `}_createResizer(t,i){this.setAttribute("resizing",""),this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height");const{target:s,pointerId:o,clientX:n,clientY:l}=i;s==null||s.setPointerCapture(o);const a=({clientX:c,clientY:u})=>{const b=Math.floor(c-n),m=Math.floor(u-l);this._resize({detail:{dx:b,dy:m}})};s==null||s.addEventListener("pointermove",a);const d=()=>{this.removeAttribute("resizing"),s==null||s.releasePointerCapture(o),s==null||s.removeEventListener("pointermove",a),s==null||s.removeEventListener("pointerup",d),this._dispatchResizeEvent()};s==null||s.addEventListener("pointerup",d)}_resize({detail:t}){let i,s;const o=Math.floor(t.dx*2.04),n=Math.floor(t.dy*1.04);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",i=`${this._getBoundingClientRectWidth-o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"left":this._cursor="e",i=`${this._getBoundingClientRectWidth+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"top":this._cursor="n",s=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopLeft":this._cursor="ne",i=`${this._getBoundingClientRectWidth+o}px`,s=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopRight":this._cursor="nw",i=`${this._getBoundingClientRectWidth-o}px`,s=`${this._getBoundingClientRectHeight+n}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var i;return Math.abs(parseInt((i=this.rect)==null?void 0:i.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",ct);const ht=S`
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
`;class ut extends _{constructor(){super();g(this,"_onLoadElement",({target:t})=>{if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const i=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(i)});this.embeddedTitle="",this.src="",this.type="iframe"}static get styles(){return[ht]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return h`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){ee(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return h`
      <slot name="embedded"></slot>
    `}_fetch(t){var i,s,o,n;t&&(Object.assign((i=this._embeddedElement)!=null?i:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((s=this._embeddedElement)!=null?s:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((n=(o=this._embeddedElement)==null?void 0:o.style)!=null?n:{},t.indexOf("http")!==0&&{opacity:0}))}}window.customElements.define("blockquote-base-embedded-webview-element",ut);const pt=S`
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
`,bt=h`
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
`,mt=h`
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
`;class gt extends _{constructor(){super();g(this,"_updateSize",({detail:t})=>{var i,s,o,n;(s=(i=this._embeddedResizeRef)==null?void 0:i.value)==null||s.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(n=(o=this._embeddedResizeRef)==null?void 0:o.value)==null||n.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()});this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=bt,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._embeddedResizeRef=Pe()}static get styles(){return[pt]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0,useDefault:!0}}}async connectedCallback(){var i,s;(i=super.connectedCallback)==null||i.call(this),await this.updateComplete,this.addEventListener("webviewresize",o=>{var l;const{detail:n}=o;Object.assign(this.__readDataPos,n),this.__resetResizing=!0,(n.cursor==="n"||n.cursor==="ne"||n.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((l=this._controlBottom)!=null?l:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(o=>{const{src:n="",option:l="",description:a=""}=o.dataset;return{src:n,option:l,description:a}}),this._src=this._sources[this.selected].src),this.embedded=(s=this.shadowRoot)==null?void 0:s.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return h`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){ee(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return h`
      <header>
        <div>
          ${this._headingTpl} ${this._navigationDemosTpl} ${this._descriptionTpl}
          ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return h`
      <div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>
    `}get _navigationDemosTpl(){return h`
      <div>${this._selectTpl}${this._externalLinkTpl}</div>
    `}get _selectTpl(){return h`
      ${this._sources.some(t=>t.option)?h`
            <div class="select">
              <select id="select-sources" @change="${this._onChangeFile}" aria-label="Cases">
                ${this._sources.map((t,i)=>h`
                    <option ?selected="${this.selected===i}" value="${i}">
                      ${t.option}
                    </option>
                  `)}
              </select>
              ${this.__selectArrow}
            </div>
          `:""}
    `}get _externalLinkTpl(){return h`
      <a href="${this._src||"#"}" target="_blank" class="open-externally">
        <span class="sr-only">View demo in a new tab</span>
        <span aria-hidden="true">${mt}</span>
      </a>
    `}get _descriptionTpl(){return h`
      <p class="description">${this._sources[this.selected].description}</p>
    `}get _readDataPosTpl(){return h`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing?1:0}">
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return h`
      <blockquote-base-embedded-webview-size
        .disabledSelectedSizeText="${this.__resetResizing}"
        @click="${this._updateSize}"
        @selectedchange="${this._updateSize}"
        .selected="${this.screenSizeSelected}"></blockquote-base-embedded-webview-size>
    `}get _mainTpl(){return h`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${qe(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return h`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||""}"
        .embeddedTitle="${this._sources[this.selected].option||"Demo"}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",gt);class _t extends Re{constructor(e){if(super(e),e.type!==xe.CHILD)throw new Error("blockquoteDirectiveAriaidrefSlot can only be used in child expressions");this.hasSlotNode=!1}render(e,t=!1){if(!e||typeof e!="string"||this.hasSlotNode)return C;const i=document.createElement("slot");return Object.assign(i,{name:e,id:e,hidden:!t}),this.hasSlotNode=!0,i}}const ft=Se(_t),vt=r=>{let e=null,t=null;for(const i of r)e||(e=i),t=i;return[e,t]},wt=(r,e=["dialog","[popover]"])=>{if(!r||!(r instanceof HTMLElement)||r.matches(e.join(",")))return!1;const{display:t,visibility:i,opacity:s}=window.getComputedStyle(r),o=t==="none"||i==="hidden"||i==="collapse"||s==="0",n=r.matches('[disabled], [hidden], [inert], [aria-hidden="true"]');return o||n},$t=r=>{var t;var e;return r instanceof HTMLElement?r.matches('a[href],area[href],button:not([disabled]),details,iframe,object,input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[contentEditable="true"],[tabindex]:not([tabindex^="-"]),audio[controls],video[controls]')?!0:r.localName.includes("-")&&r.matches('[disabled], [aria-disabled="true"]')?!1:(t=(e=r.shadowRoot)==null?void 0:e.delegatesFocus)!=null?t:!1:!1},me=(r,e,t)=>{e.bubbles&&(!r.shadowRoot||e.composed)&&e.stopPropagation();const{bubbles:i,cancelable:s,composed:o}=e,n=e instanceof CustomEvent?e.detail:null,l={composed:o,bubbles:i,cancelable:s,detail:n,...t},a=t?[e.type,{...e,...l}]:[e.type,e],d=Reflect.construct(e.constructor,a),c=r.dispatchEvent(d);return c||e.preventDefault(),c},Y=(r,e,t)=>{if(typeof e=="string"){const i=e,s=new CustomEvent(i);return me(r,s,t)}return me(r,e,t)};function*He({root:r,whatToShow:e=0,filterAccept:t=()=>!0,filterReject:i=()=>!1}){if(e&&r.nodeType!==e||i(r))return;t(r)&&(yield r);const s=r instanceof HTMLElement&&r.shadowRoot?r.shadowRoot.children:r instanceof HTMLSlotElement?r.assignedNodes({flatten:!0}):r.childNodes;for(const o of s)yield*He({root:o,whatToShow:e,filterAccept:t,filterReject:i})}const yt=S`
  :host {
    --_background-color: var(--blockquote-dialog-background-color, rgb(255, 255, 255));
    --_max-height: var(--blockquote-dialog-max-height, min(35rem, calc(100% - 3rem)));
    --_max-width: var(--blockquote-dialog-max-width, min(35rem, calc(100% - 3rem)));
    --_min-height: var(--blockquote-dialog-min-height, 8.75rem);
    --_min-width: var(--blockquote-dialog-min-width, 17.5rem);
    --_padding: var(--blockquote-padding, 1rem);
    box-sizing: border-box;
    display: contents;
    background-color: var(--_background-color);
    margin-block: auto;
    margin-inline: auto;
    max-block-size: var(--_max-height);
    max-inline-size: var(--_max-width);
    min-block-size: var(--_min-height);
    min-inline-size: var(--_min-width);
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

  dialog {
    inset: 0;
    background: inherit;
    border: none;
    border-radius: inherit;
    margin-block: inherit;
    margin-inline: inherit;
    max-block-size: inherit;
    max-inline-size: inherit;
    min-block-size: inherit;
    min-inline-size: inherit;
    outline: none;
    overflow: visible;
    padding: 0;
  }

  dialog[open],
  .scroller,
  .content {
    display: flex;
    flex-direction: column;
  }

  .scroller {
    overflow-y: auto;
    overflow-block: auto;
  }

  .content {
    padding-block: var(--_padding);
    padding-inline: var(--_padding);
  }
`,zt=S`
  dialog {
    opacity: 0;
    transform: translateY(16%);
    transition:
      opacity 200ms ease-out,
      transform 200ms ease-out;
  }

  @supports (transition-behavior: allow-discrete) {
    dialog {
      transition:
        opacity 200ms ease-out,
        transform 200ms ease-out,
        overlay 200ms ease-out allow-discrete,
        display 200ms ease-out allow-discrete;
    }
  }

  /* [open state] */
  dialog[open] {
    opacity: 1;
    transform: translateY(0);
  }

  /* Before - [open state] Needs to be after the previous dialog[open] rule to take effect, as the specificity is the same */
  @starting-style {
    dialog[open] {
      opacity: 0;
      transform: translateY(16%);
    }
  }

  /* Transition the :backdrop when the dialog modal is promoted to the top layer */
  dialog::backdrop {
    background-color: rgb(120, 120, 120, 0);
    transition: background-color 190ms ease-in;
  }

  @supports (transition-behavior: allow-discrete) {
    dialog::backdrop {
      transition:
        display 190ms ease-in allow-discrete,
        overlay 190ms ease-in allow-discrete,
        background-color 190ms ease-in;
    }
  }

  dialog[open]::backdrop {
    background-color: rgb(120, 120, 120, 0.2);
  }

  @starting-style {
    dialog[open]::backdrop {
      background-color: rgb(120, 120, 120, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    dialog {
      transition: none !important;
      transform: none !important;
    }

    dialog[open] {
      transform: none !important;
    }

    dialog::backdrop,
    dialog[open]::backdrop {
      transition: none !important;
    }
  }
`;var E;class X extends _{constructor(){super();g(this,"treewalker",He({root:this,whatToShow:NodeFilter.SHOW_ELEMENT,filterAccept:$t,filterReject:wt}));se(this,E,!1);g(this,"dialogRef",Pe());this._isConnectedCallbackResolve=()=>{},this._isConnectedCallback=this.getIsConnectedCallbackResolve(),this._firstFocusableChild=void 0,this._lastFocusableChild=void 0,this._nextClickIsFromContent=!1,this._overflowRoot=document.body,this.type="alert",this.label="",this.labelledby="",this.labelledbyVisible=!1,this.addEventListener("submit",this._handleSubmit)}set open(t){const i=I(this,E);t!==i&&(re(this,E,t),t?this.show():this.close())}get open(){return I(this,E)}getIsConnectedCallbackResolve(){return new Promise(t=>{this._isConnectedCallbackResolve=t})}async connectedCallback(){var s,o;(s=super.connectedCallback)==null||s.call(this),await this.updateComplete,this.scroller=(o=this.shadowRoot)==null?void 0:o.querySelector(".scroller");const[t,i]=vt(this.treewalker);this._firstFocusableChild=t,this._lastFocusableChild=i,this.role="presentation",this._isConnectedCallbackResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedCallbackResolve()}async show(){var o;await this._isConnectedCallback;const{value:t}=this.dialogRef;if(t!=null&&t.open)return;if(!this._handleOpen()){this.open=!1;return}t==null||t.showModal(),this.requestUpdate();const s=this.querySelector("[autofocus]");s?s==null||s.focus():this._firstFocusableChild&&((o=this._firstFocusableChild)==null||o.focus()),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow","hidden"),this.scroller&&(this.scroller.scrollTop=0)}close(){const{value:t}=this.dialogRef;t!=null&&t.open&&(t==null||t.close(),this.requestUpdate(),this._overflowRoot&&this._overflowRoot.style.setProperty("overflow",""))}get _slotTpl(){return h`
      <slot></slot>
    `}get _labeledbyTpl(){return h`
      ${this.labelledby?ft(this.labelledby,this.labelledbyVisible):""}
    `}get _contentTpl(){return h`
      <div class="content" @click=${this._handleContentClick}>${this._slotTpl}</div>
    `}get _scrollerTpl(){return h`
      <div class="scroller">${this._contentTpl} ${this._labeledbyTpl}</div>
    `}get _firstNodeFocusTrapTpl(){var t;return h`
      <span
        ?hidden="${!((t=this.dialogRef.value)!=null&&t.open)}"
        tabindex="0"
        @focus="${this._lastFocusTrap}"></span>
    `}get _lastNodeFocusTrapTpl(){var t;return h`
      <span
        ?hidden="${!((t=this.dialogRef.value)!=null&&t.open)}"
        tabindex="0"
        @focus="${this._firstFocusTrap}"></span>
    `}render(){return h`
      <dialog
        ${qe(this.dialogRef)}
        aria-label=${this.label||p}
        aria-labelledby="${this.labelledby||p}"
        role=${this.type==="alert"?"alertdialog":p}
        @click=${this._handleDialogClick}
        @cancel=${this._handleCancel}
        @close=${this._handleClose}
        .returnValue=${this.returnValue||p}>
        ${this._firstNodeFocusTrapTpl} ${this._scrollerTpl} ${this._lastNodeFocusTrapTpl}
      </dialog>
    `}_handleSubmit(t){const{target:i,submitter:s}=t,o=(i==null?void 0:i.method)==="dialog",n=(s==null?void 0:s.formMethod)==="dialog";!o&&!n||(this._submitter=s,this.open=!1)}_handleOpen(){return Y(this,"open",{cancelable:!0})}_handleClose(t){var s;this.returnValue=(s=this._submitter)!=null?s:this.returnValue,Y(this,t,{cancelable:!0})&&(this.open=!1)}_handleCancel(t){const{target:i}=t;i!==this.dialogRef.value||!Y(this,t,{cancelable:!0})||(this.open=!1)}_handleDialogClick(){if(this._nextClickIsFromContent){this._nextClickIsFromContent=!1;return}const{value:t}=this.dialogRef;t==null||t.dispatchEvent(new Event("cancel"))}_handleContentClick(){this._nextClickIsFromContent=!0}_firstFocusTrap({relatedTarget:t}){var i;(i=t!=null?this._firstFocusableChild:this._lastFocusableChild)==null||i.focus()}_lastFocusTrap({relatedTarget:t}){var i;(i=t!=null?this._lastFocusableChild:this._firstFocusableChild)==null||i.focus()}}E=new WeakMap,g(X,"styles",[yt,zt]),g(X,"properties",{open:{type:Boolean,reflect:!0,useDefault:!0},returnValue:{attribute:!1},label:{type:String},labelledby:{type:String},labelledbyVisible:{type:String,attribute:"labelledby-visibile"},type:{type:String}});window.customElements.define("blockquote-dialog",X);
