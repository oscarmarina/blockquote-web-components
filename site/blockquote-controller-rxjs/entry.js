var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,l,u,{is:d,defineProperty:f,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,p=globalThis,ie=p.trustedTypes,ae=ie?ie.emptyScript:``,oe=p.reactiveElementPolyfillSupport,m=(e,t)=>e,se={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ce=(e,t)=>!d(e,t),le={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:ce};(l=Symbol).metadata!=null||(l.metadata=Symbol(`metadata`)),p.litPropertyMetadata!=null||(p.litPropertyMetadata=new WeakMap);var h=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)==null?this.l=[]:t).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){var r;let{get:i,set:a}=(r=ee(this.prototype,e))==null?{get(){return this[t]},set(e){this[t]=e}}:r;return{get:i,set(t){let r=i==null?void 0:i.call(this);a==null||a.call(this,t),this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))==null?le:t}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(e=>e(this))}addController(e){var t,n;((t=this._$EO)==null?this._$EO=new Set:t).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;let t=(e=this.shadowRoot)==null?this.attachShadow(this.constructor.shadowRootOptions):e;return s(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(e=>{var t;return(t=e.hostConnected)==null?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){var i;let a=(((i=n.converter)==null?void 0:i.toAttribute)===void 0?se:n.converter).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){var i,a,o;let e=n.getPropertyOptions(r),s=typeof e.converter==`function`?{fromAttribute:e.converter}:((i=e.converter)==null?void 0:i.fromAttribute)===void 0?se:e.converter;this._$Em=r;let c=s.fromAttribute(t,e.type);this[r]=(a=c==null?(o=this._$Ej)==null?void 0:o.get(r):c)==null?c:a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){var a,o;let s=this.constructor;if(!1===r&&(i=this[e]),n!=null||(n=s.getPropertyOptions(e)),!(((a=n.hasChanged)==null?ce:a)(i,t)||n.useDefault&&n.reflect&&i===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){var o,s,c;n&&!((o=this._$Ej)==null?this._$Ej=new Map:o).has(e)&&(this._$Ej.set(e,(s=a==null?t:a)==null?this[e]:s),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&((c=this._$Eq)==null?this._$Eq=new Set:c).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{var n;e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(e=>{var t;return(t=e.hostUpdate)==null?void 0:t.call(e)}),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(e=>{var t;return(t=e.hostUpdated)==null?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};h.elementStyles=[],h.shadowRootOptions={mode:`open`},h[m(`elementProperties`)]=new Map,h[m(`finalized`)]=new Map,oe==null||oe({ReactiveElement:h}),((u=p.reactiveElementVersions)==null?p.reactiveElementVersions=[]:u).push(`2.1.2`);var ue,de=globalThis,fe=e=>e,pe=de.trustedTypes,me=pe?pe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,he=`$lit$`,g=`lit$${Math.random().toFixed(9).slice(2)}$`,ge=`?`+g,_e=`<${ge}>`,_=document,v=()=>_.createComment(``),y=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ve=Array.isArray,ye=e=>ve(e)||typeof(e==null?void 0:e[Symbol.iterator])==`function`,be=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,Se=/>/g,x=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ce=/'/g,we=/"/g,Te=/^(?:script|style|textarea|title)$/i,S=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),C=Symbol.for(`lit-noChange`),w=Symbol.for(`lit-nothing`),Ee=new WeakMap,T=_.createTreeWalker(_,129);function De(e,t){if(!ve(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return me===void 0?t:me.createHTML(t)}var Oe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=b;for(let t=0;t<n;t++){var s;let n=e[t],c,l,u=-1,d=0;for(;d<n.length&&(o.lastIndex=d,l=o.exec(n),l!==null);)d=o.lastIndex,o===b?l[1]===`!--`?o=xe:l[1]===void 0?l[2]===void 0?l[3]!==void 0&&(o=x):(Te.test(l[2])&&(i=RegExp(`</`+l[2],`g`)),o=x):o=Se:o===x?l[0]===`>`?(o=(s=i)==null?b:s,u=-1):l[1]===void 0?u=-2:(u=o.lastIndex-l[2].length,c=l[1],o=l[3]===void 0?x:l[3]===`"`?we:Ce):o===we||o===Ce?o=x:o===xe||o===Se?o=b:(o=x,i=void 0);let f=o===x&&e[t+1].startsWith(`/>`)?` `:``;a+=o===b?n+_e:u>=0?(r.push(c),n.slice(0,u)+he+n.slice(u)+g+f):n+g+(u===-2?t:f)}return[De(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},ke=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Oe(t,n);if(this.el=e.createElement(l,r),T.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=T.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(he)){let t=u[o++],n=i.getAttribute(e).split(g),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Me:r[1]===`?`?Ne:r[1]===`@`?Pe:D}),i.removeAttribute(e)}else e.startsWith(g)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Te.test(i.tagName)){let e=i.textContent.split(g),t=e.length-1;if(t>0){i.textContent=pe?pe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],v()),T.nextNode(),c.push({type:2,index:++a});i.append(e[t],v())}}}else if(i.nodeType===8){if(i.data===ge)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(g,e+1))!==-1;)c.push({type:7,index:a}),e+=g.length-1}}a++}}static createElement(e,t){let n=_.createElement(`template`);return n.innerHTML=e,n}};function E(e,t,n=e,r){var i,a,o;if(t===C)return t;let s=r===void 0?n._$Cl:(i=n._$Co)==null?void 0:i[r],c=y(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==c&&(s==null||(a=s._$AO)==null||a.call(s,!1),c===void 0?s=void 0:(s=new c(e),s._$AT(e,n,r)),r===void 0?n._$Cl=s:((o=n._$Co)==null?n._$Co=[]:o)[r]=s),s!==void 0&&(t=E(e,s._$AS(e,t.values),s,r)),t}var Ae=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:n},parts:r}=this._$AD,i=((t=e==null?void 0:e.creationScope)==null?_:t).importNode(n,!0);T.currentNode=i;let a=T.nextNode(),o=0,s=0,c=r[0];for(;c!==void 0;){if(o===c.index){let t;c.type===2?t=new je(a,a.nextSibling,this,e):c.type===1?t=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(t=new Fe(a,this,e)),this._$AV.push(t),c=r[++s]}o!==(c==null?void 0:c.index)&&(a=T.nextNode(),o++)}return T.currentNode=_,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},je=class e{get _$AU(){var e,t;return(e=(t=this._$AM)==null?void 0:t._$AU)==null?this._$Cv:e}constructor(e,t,n,r){var i;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(i=r==null?void 0:r.isConnected)==null||i}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),y(e)?e===w||e==null||e===``?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==C&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ye(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&y(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){var t;let{values:n,_$litType$:r}=e,i=typeof r==`number`?this._$AC(e):(r.el===void 0&&(r.el=ke.createElement(De(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)==null?void 0:t._$AD)===i)this._$AH.p(n);else{let e=new Ae(i,this),t=e.u(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=Ee.get(e.strings);return t===void 0&&Ee.set(e.strings,t=new ke(e)),t}k(t){ve(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(v()),this.O(v()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null||n.call(this,!1,!0,t);e!==this._$AB;){let t=fe(e).nextSibling;fe(e).remove(),e=t}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=E(this,e,t,0),a=!y(e)||e!==this._$AH&&e!==C,a&&(this._$AH=e);else{var o;let r=e,s,c;for(e=i[0],s=0;s<i.length-1;s++)c=E(this,r[n+s],t,s),c===C&&(c=this._$AH[s]),a||(a=!y(c)||c!==this._$AH[s]),c===w?e=w:e!==w&&(e+=((o=c)==null?``:o)+i[s+1]),this._$AH[s]=c}a&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e==null?``:e)}},Me=class extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},Ne=class extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},Pe=class extends D{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){var n;if((e=(n=E(this,e,t,0))==null?w:n)===C)return;let r=this._$AH,i=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==w&&(r===w||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH==`function`?this._$AH.call((t=(n=this.options)==null?void 0:n.host)==null?this.element:t,e):this._$AH.handleEvent(e)}},Fe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}},Ie={M:he,P:g,A:ge,C:1,L:Oe,R:Ae,D:ye,V:E,I:je,H:D,N:Ne,U:Pe,B:Me,F:Fe},Le=de.litHtmlPolyfillSupport;Le==null||Le(ke,je),((ue=de.litHtmlVersions)==null?de.litHtmlVersions=[]:ue).push(`3.3.3`);var Re=(e,t,n)=>{var r;let i=(r=n==null?void 0:n.renderBefore)==null?t:r,a=i._$litPart$;if(a===void 0){var o;let e=(o=n==null?void 0:n.renderBefore)==null?null:o;i._$litPart$=a=new je(t.insertBefore(v(),e),e,void 0,n==null?{}:n)}return a._$AI(e),a},ze,Be,O=globalThis,k=class extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore!=null||(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}};k._$litElement$=!0,k.finalized=!0,(ze=O.litElementHydrateSupport)==null||ze.call(O,{LitElement:k});var Ve=O.litElementPolyfillSupport;Ve==null||Ve({LitElement:k}),((Be=O.litElementVersions)==null?O.litElementVersions=[]:Be).push(`4.2.2`);var{I:He}=Ie,Ue=e=>e.strings===void 0,We={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=e=>(...t)=>({_$litDirective$:e,values:t}),Ke=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},A=(e,t)=>{var n;let r=e._$AN;if(r===void 0)return!1;for(let e of r)(n=e._$AO)==null||n.call(e,t,!1),A(e,t);return!0},qe=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},Je=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ze(t)}};function Ye(e){this._$AN===void 0?this._$AM=e:(qe(this),this._$AM=e,Je(this))}function Xe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)A(r[e],!1),qe(r[e]);else r!=null&&(A(r,!1),qe(r))}else A(this,e)}}var Ze=e=>{e.type==We.CHILD&&(e._$AP!=null||(e._$AP=Xe),e._$AQ!=null||(e._$AQ=Ye))},Qe=class extends Ke{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Je(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(A(this,e),qe(this))}setValue(e){if(Ue(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},$e=()=>new et,et=class{},tt=new WeakMap,nt=Ge(class extends Qe{render(e){return w}update(e,[t]){var n;let r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),w}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){var t;let n=(t=this.ht)==null?globalThis:t,r=tt.get(n);r===void 0&&(r=new WeakMap,tt.set(n,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){var e,t,n;return typeof this.G==`function`?(e=tt.get((t=this.ht)==null?globalThis:t))==null?void 0:e.get(this.G):(n=this.G)==null?void 0:n.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),rt=o`
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
`,it=class extends k{static get styles(){return[rt]}static get properties(){return{screenSizes:{type:Array,attribute:`screen-sizes`},selected:{type:Number},widthInPercent:{type:Boolean,attribute:`width-in-percent`},showOverflowSize:{type:Boolean,attribute:`show-overflow-size`},disabledSelectedSizeText:{type:Boolean,attribute:`disabled-selected-size-text`}}}constructor(){super(),this._onResize=e=>{e.preventDefault(),e.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})},this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:`360x800`},{width:390,height:864,id:`390x864`},{width:414,height:896,id:`414x896`},{width:768,height:1024,id:`768x1024`},{width:810,height:1080,id:`810x1080`},{width:1280,height:720,id:`1280x800`},{width:1366,height:768,id:`1366x768`},{width:1536,height:864,id:`1536x864`},{width:1920,height:1080,id:`1920x1080`}],this.widthInPercent=!1}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener(`resize`,this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener(`resize`,this._onResize)}willUpdate(e){super.willUpdate&&super.willUpdate(e),e.has(`screenSizes`)&&this.screenSizes.sort((e,t)=>t.width-e.width),e.has(`selected`)&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(e){if(super.updated&&super.updated(e),e.has(`selected`)){let e=new CustomEvent(`selectedchange`,{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(e)}}render(){return S`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return S`
      ${this.screenSizes.map((e,t)=>S`
          <button
            @click="${this._setSelected}"
            id="${e.id}"
            data-index="${t+1}"
            ?data-selected="${this.selected===t+1}"
            ?hidden="${!this.showOverflowSize&&e.width>this.computedStyleWidth}"
            style="${this.widthInPercent?`width: calc(100% / ${t+1});`:`width: ${e.width}px;`}">
            <span>${e.id}</span>
          </button>
        `)}
    `}get _visualTextTpl(){return S`
      <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true">
        ${this.selectedSize.id}
      </span>
    `}_setSelected(e){e.preventDefault(),e.stopPropagation(),this.selected=Number(e.target.dataset.index);let t=new CustomEvent(`click`,{detail:this.selectedDetail});this.dispatchEvent(t)}};window.customElements.define(`blockquote-base-embedded-webview-size`,it);var at=o`
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
`,ot=class extends k{static get styles(){return[at]}constructor(){super(),this._doubleclickForCssInitialSize=()=>{this.removeAttribute(`style`)},this._cursor=``,this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,`right`),this._createResizerRight=this._createResizer.bind(this,`left`),this._createResizerBottom=this._createResizer.bind(this,`top`),this._createResizerBottomLeft=this._createResizer.bind(this,`scaleTopRight`),this._createResizerBottomRight=this._createResizer.bind(this,`scaleTopLeft`),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}async connectedCallback(){var e,t,n,r,i,a,o,s,c,l,u,d,f;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.rect=(t=this.shadowRoot)==null?void 0:t.querySelector(`.rect`),this.bottomRightResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(`.resizer-se`),this.bottomLeftResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(`.resizer-sw`),this.rightResizerElement=(i=this.shadowRoot)==null?void 0:i.querySelector(`.resizer-e`),this.leftResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(`.resizer-w`),this.bottomResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(`.resizer-s`),(s=this.leftResizerElement)==null||s.addEventListener(`pointerdown`,this._createResizerLeft),(c=this.rightResizerElement)==null||c.addEventListener(`pointerdown`,this._createResizerRight),(l=this.bottomResizerElement)==null||l.addEventListener(`pointerdown`,this._createResizerBottom),(u=this.bottomLeftResizerElement)==null||u.addEventListener(`pointerdown`,this._createResizerBottomLeft),(d=this.bottomRightResizerElement)==null||d.addEventListener(`pointerdown`,this._createResizerBottomRight),(f=this.bottomResizerElement)==null||f.addEventListener(`dblclick`,this._doubleclickForCssInitialSize)}render(){return S`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `}get _resizersTpl(){return S`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `}_createResizer(e,t){this.setAttribute(`resizing`,``),this._resizeDirection=e,this._getBoundingClientRectWidth=this._getBoundingClientRect(`width`),this._getBoundingClientRectHeight=this._getBoundingClientRect(`height`);let{target:n,pointerId:r,clientX:i,clientY:a}=t;n==null||n.setPointerCapture(r);let o=e=>{let{clientX:t,clientY:n}=e,r=Math.floor(t-i),o=Math.floor(n-a);this._resize({detail:{dx:r,dy:o}})};n==null||n.addEventListener(`pointermove`,o);let s=()=>{this.removeAttribute(`resizing`),n==null||n.releasePointerCapture(r),n==null||n.removeEventListener(`pointermove`,o),n==null||n.removeEventListener(`pointerup`,s),this._dispatchResizeEvent()};n==null||n.addEventListener(`pointerup`,s)}_resize({detail:e}){let t,n,r=Math.floor(e.dx*2.04),i=Math.floor(e.dy*1.04);switch(this._resizeDirection){case`right`:this._cursor=`w`,t=`${this._getBoundingClientRectWidth-r}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t);break;case`left`:this._cursor=`e`,t=`${this._getBoundingClientRectWidth+r}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t);break;case`top`:this._cursor=`n`,n=`${this._getBoundingClientRectHeight+i}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,n);break;case`scaleTopLeft`:this._cursor=`ne`,t=`${this._getBoundingClientRectWidth+r}px`,n=`${this._getBoundingClientRectHeight+i}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t),this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,n);break;case`scaleTopRight`:this._cursor=`nw`,t=`${this._getBoundingClientRectWidth-r}px`,n=`${this._getBoundingClientRectHeight+i}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t),this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,n)}this._dispatchResizeEvent()}_dispatchResizeEvent(){let e=new CustomEvent(`webviewresize`,{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue(`--blockquote-base-embedded-webview-resize-rect-width`),y:getComputedStyle(this).getPropertyValue(`--blockquote-base-embedded-webview-resize-rect-height`),resizing:this.hasAttribute(`resizing`),cursor:this._cursor}});this.dispatchEvent(e)}_getBoundingClientRect(e){var t;let n=(t=this.rect)==null?void 0:t.getBoundingClientRect();return n?Math.abs(n[e]):0}};window.customElements.define(`blockquote-base-embedded-webview-resize`,ot);var st=o`
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
`,ct=class extends k{static get styles(){return[st]}static get properties(){return{embeddedTitle:{type:String,attribute:`embedded-title`},src:{type:String},type:{type:String}}}constructor(){super(),this._onLoadElement=({target:e})=>{let t=e;if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:``}),window.performance.mark(`iframeend`),window.performance.measure(`iframe`,`iframestart`,`iframeend`),window.requestAnimationFrame(()=>t.removeAttribute(`style`));let n=new CustomEvent(`elementloaded`,{bubbles:!0,detail:e});this.dispatchEvent(n)},this.embeddedTitle=``,this.src=``,this.type=`iframe`}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:`embedded`}),this._embeddedElement.addEventListener(`load`,this._onLoadElement))}willUpdate(e){super.willUpdate&&super.willUpdate(e),(e.has(`src`)||e.has(`embeddedTitle`))&&this.src!==``&&this._fetch(this.src)}render(){return S`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){Re(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type===`iframe`?`src`:`data`}get _embeddedTpl(){return S`
      <slot name="embedded"></slot>
    `}_fetch(e){if(e){var t,n,r,i;Object.assign((t=this._embeddedElement)==null?{}:t,this.type===`iframe`&&{allow:`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,allowFullscreen:!0,loading:`lazy`},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((n=this._embeddedElement)==null?{}:n,{[this._loadResource]:e}),window.performance.mark(`iframestart`),Object.assign((r=(i=this._embeddedElement)==null?void 0:i.style)==null?{}:r,e.indexOf(`http`)!==0&&{opacity:0})}}};window.customElements.define(`blockquote-base-embedded-webview-element`,ct);var lt=o`
  :host {
    --_host-color: var(--blockquote-base-embedded-webview-color, rgb(32, 32, 32));
    --_main-bgcolor: var(--blockquote-base-embedded-webview-main-bgcolor, rgb(250, 250, 250));
    --_select-bgcolor: var(--blockquote-base-embedded-webview-select-bgcolor, rgb(183, 183, 183));
    --_select-transition: var(
      --blockquote-base-embedded-webview-select-transition,
      border-color 196ms ease-out
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
    margin-block-end: 1rem;
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

  select,
  select::picker(select) {
    -webkit-appearance: base-select;
    -moz-appearance: base-select;
    appearance: base-select;
  }

  select:open {
    border-color: currentcolor;
  }

  select:open::picker-icon {
    transform: rotate(0.5turn);
  }

  select button {
    display: inline-flex;
    align-items: center;
    width: 100%;
    min-block-size: 2.5rem;
    padding-inline: 0.4ch 1.25rem;
  }

  select::picker-icon {
    content: '∨';
    display: block;
    font: inherit;
    font-weight: bolder;
    position: absolute;
    inset-inline-end: 0;
    inset-block-start: 50%;
    translate: -50% -50%;
    transition: transform 192ms cubic-bezier(0.5, 1, 0.75, 1.25);
  }

  select::picker(select) {
    background-color: inherit;
    border: 0.0625rem solid var(--_select-bgcolor);
    margin-block: 0.125rem;
    overflow: visible;
  }

  select {
    position: relative;
    field-sizing: content;
    color: oklch(from var(--_host-color) calc(l * 1.25) c h);
    font: inherit;
    background-color: #fff;
    border-color: var(--_select-bgcolor);
    border-width: 0.125em;
    border-radius: 0.25em;
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: none;
    min-inline-size: 24ch;
    max-inline-size: 36ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: var(--_select-transition);
  }

  select:hover,
  select:focus {
    border-color: oklch(from currentcolor calc(l + 0.3) c h);
  }

  option {
    font-size: 0.875rem;
    gap: 0.25em;
    padding: 0.25em 0.5em;
  }

  option::checkmark {
    content: '';
    inline-size: 1rem;
    block-size: 1rem;
    background-color: currentcolor;
    -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='square'><path d='M3 8.5 L6.5 12 L13 5'/></svg>");
    mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='square'><path d='M3 8.5 L6.5 12 L13 5'/></svg>");
  }

  option:checked {
    background-color: oklch(from var(--_host-color) calc(l + 0.72) c h);
    font-weight: 600;
  }

  @supports not (
    (-webkit-appearance: base-select) or (-moz-appearance: base-select) or (appearance: base-select)
  ) {
    .select {
      display: inline-grid;
      grid-template-areas: select;
      align-items: center;
    }

    .select > * {
      grid-area: select;
    }

    .select > svg {
      position: relative;
      inline-size: 0.875rem;
      justify-self: end;
      margin-inline-end: 0.25rem;
      pointer-events: none;
      display: block;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 1px solid var(--_select-bgcolor);
      padding: 0.5em 0.25em;
      inline-size: 100%;
    }
  }

  @supports (
    (-webkit-appearance: base-select) or (-moz-appearance: base-select) or (appearance: base-select)
  ) {
    .select svg {
      display: none;
    }
  }

  .description {
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
`,ut=S`
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
`,dt=S`
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
`,ft=class extends k{static get styles(){return[lt]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:`heading-level`,reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:`screen-size-selected`},limitHeight:{type:Boolean,attribute:`limit-height`,reflect:!0,useDefault:!0}}}constructor(){super(),this.__resetResizing=!1,this.__selectArrow=ut,this.__readDataPos={x:`0`,y:`0`,resizing:!1,cursor:``},this._embeddedResizeRef=$e(),this._updateSize=({detail:e})=>{var t,n;(t=this._embeddedResizeRef)==null||(t=t.value)==null||t.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,`${e.width}px`),(n=this._embeddedResizeRef)==null||(n=n.value)==null||n.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,this.limitHeight?`100%`:`${e.height}px`),this.__resetResizing=!1,this.requestUpdate()},this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading=``,this.__resetResizing=!1,this.__selectArrow=ut,this.__readDataPos={x:`0`,y:`0`,resizing:!1,cursor:``},this.limitHeight=!1,this._sources=[{src:``,option:``,description:``}],this._embeddedResizeRef=$e()}async connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.addEventListener(`webviewresize`,e=>{let{detail:t}=e;if(Object.assign(this.__readDataPos,t),this.__resetResizing=!0,t.cursor===`n`||t.cursor===`ne`||t.cursor===`nw`){var n;window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((n=this._controlBottom)==null?0:n)),left:0,behavior:`smooth`})}this.requestUpdate()});let n=Array.from(this.querySelectorAll(`template`));n.length&&(this._sources=n.map(e=>{let{src:t=``,option:n=``,description:r=``}=e.dataset;return{src:t,option:n,description:r}}),this._src=this._sources[this.selected].src),this.embedded=(t=this.shadowRoot)==null?void 0:t.querySelector(`[slot="embedded"]`),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return S`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){Re(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return S`
      <header>
        <div>
          ${this._headingTpl} ${this._navigationDemosTpl} ${this._descriptionTpl}
          ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return S`
      <div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>
    `}get _navigationDemosTpl(){return S`
      <div>${this._selectTpl}${this._externalLinkTpl}</div>
    `}get _selectTpl(){return S`
      ${this._sources.some(e=>e.option)?S`
              <div class="select">
                <select id="select-sources" @change="${this._onChangeFile}" aria-label="Cases">
                  <button>
                    <selectedcontent></selectedcontent>
                  </button>
                  ${this._sources.map((e,t)=>S`
                      <option ?selected="${this.selected===t}" value="${t}">
                        ${e.option}
                      </option>
                    `)}
                </select>
                ${this.__selectArrow}
              </div>
            `:``}
    `}get _externalLinkTpl(){return S`
      <a href="${this._src||`#`}" target="_blank" class="open-externally">
        <span class="sr-only">View demo in a new tab</span>
        <span aria-hidden="true">${dt}</span>
      </a>
    `}get _descriptionTpl(){return S`
      <p class="description">${this._sources[this.selected].description}</p>
    `}get _readDataPosTpl(){return S`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${+!!this.__readDataPos.resizing}">
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return S`
      <blockquote-base-embedded-webview-size
        .disabledSelectedSizeText="${this.__resetResizing}"
        @click="${this._updateSize}"
        @selectedchange="${this._updateSize}"
        .selected="${this.screenSizeSelected}"></blockquote-base-embedded-webview-size>
    `}get _mainTpl(){return S`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${nt(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return S`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||``}"
        .embeddedTitle="${this._sources[this.selected].option||`Demo`}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:e}){this.selected=e.selectedIndex,this._src=this._sources[this.selected].src}};window.customElements.define(`blockquote-base-embedded-webview`,ft);function pt(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function j(e,t,n){pt(e,t),t.set(e,n)}function M(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function N(e,t,n){return e.set(M(e,t),n),n}function P(e,t){return e.get(M(e,t))}function mt(e,t){pt(e,t),t.add(e)}function F(e){"@babel/helpers - typeof";return F=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},F(e)}function ht(e,t){if(F(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(F(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function gt(e){var t=ht(e,`string`);return F(t)==`symbol`?t:t+``}function I(e,t,n){return(t=gt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=new WeakMap,_t=class{constructor(e){j(this,L,void 0),N(L,this,typeof e==`function`?{next:e}:e)}next(e){if(W())try{var t,n;(t=P(L,this))==null||(n=t.next)==null||n.call(t,e)}catch(e){U(e)}}error(e,t=!0){var n;if(W()){if(!((n=P(L,this))!=null&&n.error)){U(e,t);return}try{P(L,this).error(e)}catch(e){U(e)}}}complete(){if(W())try{var e,t;(e=P(L,this))==null||(t=e.complete)==null||t.call(e)}catch(e){U(e)}}},vt=Symbol(`addObserver`),R=Symbol(`closeSubscriber`),yt=Symbol(`errorSubscriber`),bt=Symbol(`subscriberToken`),xt=Symbol(`propagateTeardownError`),St=new WeakMap,Ct;function wt(e){let t=this.signal,n,r=!1;if(!t.aborted){let i=St.get(t);if(i)for(let t of Array.from(i))try{t(e)}catch(e){r?U(e):(n=e,r=!0)}}if(Ct.call(this,e),r)throw n}function Tt(e,t,n){var r;let i=(r=St.get(e))==null?new Set:r;St.set(e,i);let a=!0,o=e=>{a&&(a=!1,i.delete(o),t(e))};i.add(o),e.addEventListener(`abort`,()=>o(e.reason),n?{once:!0,signal:n}:{once:!0}),n==null||n.addEventListener(`abort`,()=>{a=!1,i.delete(o)},{once:!0})}var z=new WeakMap,Et=new WeakMap,B=new WeakMap,Dt=new WeakMap,V=new WeakSet,H=class{constructor(...e){if(mt(this,V),j(this,z,[]),j(this,Et,!1),j(this,B,new Set),j(this,Dt,new AbortController),e[0]!==bt)throw TypeError(`Illegal constructor`)}[vt](e){return P(B,this).add(e),t=>{P(B,this).delete(e),P(B,this).size===0&&this[R](t)}}[R](e){if(!this.active)return;N(Et,this,!0);let t,n=!1;try{P(Dt,this).abort(e)}catch(e){t=e,n=!0}P(B,this).clear();let r=P(z,this);N(z,this,[]);for(let e=r.length-1;e>=0;e--){let i=r[e];try{i()}catch(e){i[xt]&&!n?(t=e,n=!0):U(e)}}if(n)throw t}get active(){return!P(Et,this)}get signal(){return P(Dt,this).signal}addTeardown(e){if(M(V,this,Ot).call(this),arguments.length===0||typeof e!=`function`)throw TypeError(`Subscriber.addTeardown requires a callback`);if(!this.active){e();return}P(z,this).push(e)}next(e){if(M(V,this,Ot).call(this),arguments.length===0)throw TypeError(`Subscriber.next requires a value`);if(this.active){let t=Array.from(P(B,this));for(let n of t)n.next(e)}}error(e){if(M(V,this,Ot).call(this),arguments.length===0)throw TypeError(`Subscriber.error requires an error`);this[yt](e,!0)}[yt](e,t){if(!this.active){U(e,t);return}let n=Array.from(P(B,this));this[R](e);for(let r of n)r.error(e,t)}complete(){if(M(V,this,Ot).call(this),this.active){let e=Array.from(P(B,this));this[R]();for(let t of e)t.complete()}}};function Ot(){}function U(e,t=!0){if(W()){if(t&&globalThis.reportError){globalThis.reportError(e);return}if(typeof ErrorEvent==`function`&&typeof globalThis.dispatchEvent==`function`){let n=e instanceof Error,r=new ErrorEvent(`error`,{cancelable:!0,colno:+!!t,error:e,lineno:+!!t,message:n?e.message:String(e)});r.preventDefault(),globalThis.dispatchEvent(r);return}if(globalThis.reportError){globalThis.reportError(e);return}globalThis.setTimeout(()=>{throw e})}}function kt(e){if(typeof PromiseRejectionEvent==`function`&&typeof globalThis.dispatchEvent==`function`){let t=new PromiseRejectionEvent(`unhandledrejection`,{cancelable:!0,promise:Promise.resolve(),reason:e});t.preventDefault(),globalThis.dispatchEvent(t);return}Promise.reject(e)}var At=typeof window<`u`&&typeof document<`u`&&window.parent!==window;function W(){return!At||window.frameElement!==null}function G(e){return typeof e==`object`&&!!e||typeof e==`function`}function jt(e){let t=Number(e);if(!Number.isFinite(t)||t===0)return 0;let n=Math.trunc(t),r=2**64;if(n>0&&n<r)return n;let i=n%r;return i<0?i+r:i}function K(e,t){let n=e[t];if(n!=null){if(typeof n!=`function`)throw TypeError(`${String(t)} must be callable`);return n}}function Mt(e){let t=K(e,Symbol.iterator);if(!t)throw TypeError(`Object does not define a callable Symbol.iterator method`);let n=t.call(e);if(!G(n))throw TypeError(`Symbol.iterator must return an object`);let r=K(n,`next`);if(!r)throw TypeError(`Iterator must define a callable next() method`);return{iterator:n,next:r}}function Nt(e){let t=K(e,Symbol.asyncIterator);if(t){let n=t.call(e);if(!G(n))throw TypeError(`Symbol.asyncIterator must return an object`);return{iterator:n}}return{iterator:Mt(e).iterator}}function Pt(e,t){let n=K(e.iterator,`return`);if(n&&!G(n.call(e.iterator,t)))throw TypeError(`Iterator return() must return an Object`)}function Ft(e,t){let n;try{let r=K(e.iterator,`return`);if(!r)return;n=r.call(e.iterator,t)}catch(e){globalThis.queueMicrotask(()=>kt(e));return}Promise.resolve(n).then(e=>{G(e)||kt(TypeError(`Iterator return() must return an Object`))},e=>kt(e))}function It(e,t){return new e(e=>{if(!e.active)return;let n;try{n=Mt(t)}catch(t){e.error(t);return}if(!e.active)return;let r=!1,i=()=>{r||Pt(n,e.signal.reason)};i[xt]=!0,e.addTeardown(i);try{for(;e.active;){let t=n.next.call(n.iterator);if(!G(t))throw TypeError(`Iterator next() must return an Object`);let i=t;if(i.done){r=!0,e.complete();return}e.next(i.value)}}catch(t){e.error(t)}})}function Lt(e,t){return new e(e=>{if(!e.active)return;let n;try{n=Nt(t)}catch(t){e.error(t);return}if(!e.active)return;let r=!1,i;e.addTeardown(()=>{r||Ft(n,e.signal.reason)});let a=()=>{if(!e.active)return;let t;try{if(i!=null||(i=K(n.iterator,`next`)),!i)throw TypeError(`Iterator must define a callable next() method`);t=i.call(n.iterator)}catch(t){globalThis.queueMicrotask(()=>e.error(t));return}Promise.resolve(t).then(t=>{try{if(!G(t))throw TypeError(`Iterator next() must return an Object`);let n=t;if(n.done){r=!0,e.active&&e.complete();return}if(!e.active)return;e.next(n.value),a()}catch(t){e.error(t)}},t=>e.error(t))};a()})}var Rt=new WeakMap,zt=new WeakMap,q=class{static from(e){if(e instanceof Observable)return e;if(!G(e))throw TypeError(`${String(e)} is not observable`);let t=Ht(this);if(K(e,Symbol.asyncIterator))return Lt(t,e);if(K(e,Symbol.iterator))return It(t,e);if(K(e,`then`))return new t(t=>{Promise.resolve(e).then(e=>{t.next(e),t.complete()},e=>t[yt](e,!1))});throw TypeError(`${String(e)} is not observable`)}constructor(e){if(j(this,Rt,null),j(this,zt,void 0),typeof e!=`function`)throw TypeError(`Observable constructor requires a callback`);N(zt,this,e)}subscribe(e={},t={}){var n;if(!W())return;let r=(n=P(Rt,this))==null?void 0:n.deref(),i=!(r!=null&&r.active);i&&(r=new H(bt),N(Rt,this,new WeakRef(r)));let a=new _t(e),o=t.signal;if(o!=null&&o.aborted)i&&r[R](o.reason);else{let e=r[vt](a);o&&Tt(o,e,r.signal)}if(i)try{P(zt,this).call(this,r)}catch(e){r.error(e)}}takeUntil(e){return new(Y(this))(t=>{Observable.from(e).subscribe({next:()=>t.complete(),error:()=>t.complete()},{signal:t.signal}),t.active&&this.subscribe(t,{signal:t.signal})})}map(e){return new(Y(this))(t=>{let n=0;this.subscribe({next:r=>{let i;try{i=e(r,n++)}catch(e){t.error(e);return}t.next(i)},error:e=>t.error(e),complete:()=>t.complete()},{signal:t.signal})})}filter(e){return new(Y(this))(t=>{let n=0;this.subscribe({next:r=>{let i;try{i=e(r,n++)}catch(e){t.error(e);return}i&&t.next(r)},error:e=>t.error(e),complete:()=>t.complete()},{signal:t.signal})})}take(e){return new(Y(this))(t=>{let n=jt(e);if(n<=0){t.complete();return}this.subscribe({next:e=>{n>0&&(n--,t.next(e)),n<=0&&t.complete()},error:e=>t.error(e),complete:()=>t.complete()},{signal:t.signal})})}drop(e){return new(Y(this))(t=>{let n=jt(e);this.subscribe({next:e=>{n<=0?t.next(e):n--},error:e=>t.error(e),complete:()=>t.complete()},{signal:t.signal})})}flatMap(e){return new(Y(this))(t=>{let n=0,r=[],i=0,a=!1,o=s=>{let c;try{c=Observable.from(e(s,n++))}catch(e){t.error(e);return}i++,c.subscribe({next:e=>t.next(e),error:e=>t.error(e),complete:()=>{if(i--,r.length>0){o(r.shift());return}a&&i===0&&t.complete()}},{signal:t.signal})};this.subscribe({next:e=>{i<1?o(e):r.push(e)},error:e=>t.error(e),complete:()=>{a=!0,i===0&&r.length===0&&t.complete()}},{signal:t.signal})})}switchMap(e){return new(Y(this))(t=>{let n=null,r=!1,i=0;this.subscribe({next:a=>{n&&(n.abort(),n=null);let o;try{o=Observable.from(e(a,i++))}catch(e){t.error(e);return}n=new AbortController,o.subscribe({next:e=>t.next(e),error:e=>t.error(e),complete:()=>{n=null,r&&t.complete()}},{signal:AbortSignal.any([n.signal,t.signal])})},error:e=>t.error(e),complete:()=>{r=!0,n||t.complete()}},{signal:t.signal})})}inspect(e){return new(Y(this))(t=>{let n=typeof e==`function`?{next:e}:e;try{var r;(r=n.subscribe)==null||r.call(n)}catch(e){t.error(e);return}let i=!1,a=!1;Tt(t.signal,e=>{if(!i&&!a)try{var t;(t=n.abort)==null||t.call(n,e)}catch(e){U(e)}}),this.subscribe({next:e=>{try{var r;(r=n.next)==null||r.call(n,e)}catch(e){t.error(e);return}t.next(e)},error:e=>{a=!0;try{var r;(r=n.error)==null||r.call(n,e)}catch(e){t.error(e);return}t.error(e)},complete:()=>{i=!0;try{var e;(e=n.complete)==null||e.call(n)}catch(e){t.error(e);return}t.complete()}},{signal:t.signal})})}catch(e){return new(Y(this))(t=>{this.subscribe({next:e=>t.next(e),error:n=>{let r;try{r=Observable.from(e(n))}catch(e){t.error(e);return}r.subscribe(t,{signal:t.signal})},complete:()=>t.complete()},{signal:t.signal})})}finally(e){return new(Y(this))(t=>{t.addTeardown(e),this.subscribe(t,{signal:t.signal})})}forEach(e,t){let n=new J(t);return this.subscribe({next:t=>{try{e(t)}catch(e){n.reject(e)}},error:e=>n.reject(e),complete:()=>n.resolve()},{signal:n.signal}),n.promise}first(e){let t=new J(e);return this.subscribe({next:e=>t.resolve(e),error:e=>t.reject(e),complete:()=>t.reject(RangeError(`Observable completed without emitting a value`))},{signal:t.signal}),t.promise}last(e){let t=!1,n,r=new J(e);return this.subscribe({next:e=>{t=!0,n=e},error:e=>r.reject(e),complete:()=>{t?r.resolve(n):r.reject(RangeError(`Observable completed without emitting a value`))}},{signal:r.signal}),r.promise}find(e,t){let n=new J(t),r=0;return this.subscribe({next:t=>{let i;try{i=e(t,r++)}catch(e){n.reject(e);return}i&&n.resolve(t)},error:e=>n.reject(e),complete:()=>n.resolve(void 0)},{signal:n.signal}),n.promise}some(e,t){let n=new J(t),r=0;return this.subscribe({next:t=>{let i;try{i=e(t,r++)}catch(e){n.reject(e);return}i&&n.resolve(!0)},error:e=>n.reject(e),complete:()=>n.resolve(!1)},{signal:n.signal}),n.promise}every(e,t){let n=new J(t),r=0;return this.subscribe({next:t=>{let i;try{i=e(t,r++)}catch(e){n.reject(e);return}i||n.resolve(!1)},error:e=>n.reject(e),complete:()=>n.resolve(!0)},{signal:n.signal}),n.promise}reduce(e,t,n){let r=new J(n),i=arguments.length>1,a=t,o=0;return this.subscribe({next:t=>{if(!i){a=t,i=!0,o=1;return}try{a=e(a,t,o++)}catch(e){r.reject(e)}},error:e=>r.reject(e),complete:()=>{i?r.resolve(a):r.reject(TypeError(`Reduce of empty observable with no initial value`))}},{signal:r.signal}),r.promise}toArray(e){let t=new J(e,!0),n=[];return this.subscribe({next:e=>n.push(e),error:e=>t.reject(e),complete:()=>t.resolve(n)},{signal:t.signal}),t.promise}};Object.defineProperty(q,"name",{value:`Observable`}),Object.defineProperty(q.prototype,Symbol.toStringTag,{configurable:!0,value:`Observable`}),Object.defineProperty(H.prototype,Symbol.toStringTag,{configurable:!0,value:`Subscriber`});for(let e of[`next`,`error`,`complete`,`addTeardown`,`active`,`signal`]){let t=Object.getOwnPropertyDescriptor(H.prototype,e);Object.defineProperty(H.prototype,e,{...t,enumerable:!0})}var Bt=Object.getOwnPropertyDescriptor(q.prototype,`subscribe`);Object.defineProperty(q.prototype,"subscribe",{...Bt,enumerable:!0});var J=class{get signal(){return this.abortController.signal}constructor(e,t=!1){I(this,`resolver`,void 0),I(this,`rejector`,void 0),I(this,`abortController`,new AbortController),I(this,`settled`,!1),I(this,`promise`,void 0);let n,r;this.promise=new Promise((e,t)=>{n=e,r=t}),this.promise.catch(()=>{}),this.resolver=n,this.rejector=r;let i=e==null?void 0:e.signal;if(i){let e=()=>this.reject(i.reason);i.aborted?e():t?Tt(i,e,this.abortController.signal):i.addEventListener(`abort`,e,{once:!0,signal:this.abortController.signal})}}resolve(e){this.settled||(this.settled=!0,this.resolver(e),this.abortController.abort())}reject(e){this.settled||(this.settled=!0,this.rejector(e),this.abortController.abort(e))}};function Vt(e,t){return new Observable(n=>{this.addEventListener(e,e=>n.next(e),{capture:t==null?void 0:t.capture,passive:t==null?void 0:t.passive,once:!1,signal:n.signal})})}function Y(e){return e.constructor}function Ht(e){return e}var Ut=Symbol.for(`rxjs.observable.polyfill.info.v1`),Wt=Object.freeze({packageName:`@rxjs/observable-polyfill`,version:`9.0.0-beta.0`});Object.defineProperty(q,Ut,{configurable:!1,enumerable:!1,value:Wt,writable:!1});function Gt(e,t,n,r){let i=Object.getOwnPropertyDescriptor(e,t);if(!Kt(e,i,n))throw TypeError(`Cannot initialize @rxjs/observable-polyfill: ${r} is not writable or configurable`);return{key:t,label:r,next:n,previous:i,target:e}}function Kt(e,t,n){return t?t.configurable?!0:`value`in t&&`value`in n&&t.writable?n.configurable===!1&&n.enumerable===t.enumerable&&n.writable!==!1:!1:Object.isExtensible(e)}function qt(e){let t=[];try{for(let n of e)Object.defineProperty(n.target,n.key,n.next),t.push(n)}catch(e){let n=[];for(let e=t.length-1;e>=0;e--){let r=t[e];try{r.previous?Object.defineProperty(r.target,r.key,r.previous):Reflect.deleteProperty(r.target,r.key)}catch(e){n.push(e)}}throw n.length>0?AggregateError([e,...n],`Cannot initialize @rxjs/observable-polyfill and could not fully restore the realm`):e}}function Jt(){let e=[];if(globalThis.Observable===void 0){let t=globalThis.AbortController,n=t&&Object.getOwnPropertyDescriptor(t.prototype,`abort`);if(!t||!n||typeof n.value!=`function`)throw TypeError(`Cannot initialize @rxjs/observable-polyfill: AbortController.prototype.abort is unavailable`);Ct=n.value,e.push(Gt(t.prototype,`abort`,{...n,value:wt},`AbortController.prototype.abort`),Gt(globalThis,`Subscriber`,{configurable:!0,enumerable:!1,value:H,writable:!0},`globalThis.Subscriber`),Gt(globalThis,`Observable`,{configurable:!0,enumerable:!1,value:q,writable:!0},`globalThis.Observable`))}let t=globalThis.EventTarget;t&&t.prototype.when===void 0&&e.push(Gt(t.prototype,`when`,{configurable:!0,enumerable:!1,value:Vt,writable:!0},`EventTarget.prototype.when`)),qt(e)}Jt();function Yt(e){return e!=null&&e instanceof Observable}var Xt=`rxjs.kernel.create.v1`,X=Symbol.for(Xt);en(Observable),en(Observable.prototype);function Zt(e){return new(Yt(this)?Qt(this):$t(this))(e)}function Qt(e){return e.constructor}function $t(e){return typeof e==`function`?e:Observable}function en(e){let t=Object.getOwnPropertyDescriptor(e,X);if(t){if(typeof t.value!=`function`)throw TypeError(`Cannot install the RxJS create protocol: ${Xt} is already occupied`);return}Object.defineProperty(e,X,{configurable:!0,value:Zt,writable:!0})}Observable,Observable;var tn=Observable,nn=new WeakMap,rn=new WeakMap,an=new WeakMap,Z=new WeakMap,on=class extends tn{get active(){return!P(nn,this)&&!P(rn,this)}constructor(){super(e=>{if(P(nn,this)){e.complete();return}if(P(rn,this)){e.error(P(an,this));return}P(Z,this).add(e),e.addTeardown(()=>{P(Z,this).delete(e)})}),j(this,nn,!1),j(this,rn,!1),j(this,an,null),j(this,Z,new Set),I(this,X,e=>new tn(e))}next(e){if(this.active)for(let t of Array.from(P(Z,this)))t.next(e)}error(e){if(this.active){N(rn,this,!0),N(an,this,e);let t=Array.from(P(Z,this));P(Z,this).clear();for(let n of t)n.error(e)}}complete(){if(this.active){N(nn,this,!0);let e=Array.from(P(Z,this));P(Z,this).clear();for(let t of e)t.complete()}}asObservable(){return new tn(e=>{this.subscribe(e,{signal:e.signal})})}};Observable;var sn,cn;(function(e){e.NEXT=`N`,e.ERROR=`E`,e.COMPLETE=`C`})(cn||(cn={}));var ln=class e{constructor(e,t,n){I(this,`kind`,void 0),I(this,`value`,void 0),I(this,`error`,void 0),I(this,`hasValue`,void 0),this.kind=e,this.value=t,this.error=n,this.hasValue=e===`N`}observe(e){un(this,e)}do(e,t,n){this.kind===`N`?e==null||e(this.value):this.kind===`E`?t==null||t(this.error):n==null||n()}accept(e,t,n){typeof e==`object`&&e?this.observe(e):this.do(e,t,n)}toObservable(){let{kind:e,value:t,error:n}=this;if(e!==`N`&&e!==`E`&&e!==`C`)throw TypeError(`Unexpected notification kind ${e}`);return new Observable(r=>{e===`N`?(r.next(t),r.complete()):e===`E`?r.error(n):r.complete()})}static createNext(t){return new e(`N`,t)}static createError(t){return new e(`E`,void 0,t)}static createComplete(){return e.completeNotification}};sn=ln,I(ln,`completeNotification`,new sn(`C`)),Object.freeze({kind:`C`});function un(e,t){if(typeof e.kind!=`string`)throw TypeError(`Invalid notification, missing "kind"`);if(e.kind===`N`){var n;(n=t.next)==null||n.call(t,e.value)}else if(e.kind===`E`){var r;(r=t.error)==null||r.call(t,e.error)}else{var i;(i=t.complete)==null||i.call(t)}}function dn(e,t,n,r){let i=(e,n)=>e?(...n)=>{try{e(...n)}catch(e){t.error(e)}}:n,a=i(n==null?void 0:n.error,e=>t.error(e));try{e.subscribe({next:i(n==null?void 0:n.next,e=>t.next(e)),error:a,complete:i(n==null?void 0:n.complete,()=>t.complete())},{signal:r?AbortSignal.any([t.signal,r]):t.signal})}catch(e){a(e)}}var fn=Symbol(`map`);function pn(e,t){return this[X](n=>{let r=0;dn(this,n,{next(i){n.next(e.call(t,i,r++))}})})}Observable.prototype[fn]=pn;function mn(e,t,n){return Observable[X](r=>{let i=!1,a=!1,o=!1,s=!1,c,l=(...e)=>{if(!r.active)return;let t;if(n)try{t=n(...e)}catch(e){r.error(e);return}else t=e.length===1?e[0]:e;r.next(t)},u=()=>{if(t&&!s){if(!i){o=!0;return}a&&(s=!0,t(l,c))}};t&&r.addTeardown(u);try{c=e(l),a=!0}catch(e){i=!0,r.error(e);return}if(i=!0,o)try{u()}catch(e){r.error(e)}})}var Q=new WeakMap,$=new WeakMap,hn=new WeakSet,gn=class{constructor(e,{stream$:t,initialValue:n,callback:r,onError:i,onComplete:a}){mt(this,hn),j(this,Q,void 0),j(this,$,void 0),this.completed=!1,N(Q,this,t),this.value=n,this.callback=r,this.onError=i,this.onComplete=a,(this.host=e).addController(this)}get stream$(){return P(Q,this)}set stream$(e){e!==P(Q,this)&&(N(Q,this,e),this.subscribed&&(this.unsubscribe(),this.subscribe()))}get subscribed(){return P($,this)!==void 0}subscribe(){if(P($,this))return;let e=new AbortController;N($,this,e),this.error=void 0,this.completed=!1,P(Q,this).subscribe({next:e=>{var t;Object.is(e,this.value)||(this.value=e,(t=this.callback)==null||t.call(this,e),this.host.requestUpdate())},error:t=>{if(M(hn,this,_n).call(this,e),this.error=t,this.onError)this.onError(t);else{var n,r;(n=(r=globalThis).reportError)==null||n.call(r,t)}this.host.requestUpdate()},complete:()=>{var t;M(hn,this,_n).call(this,e),this.completed=!0,(t=this.onComplete)==null||t.call(this),this.host.requestUpdate()}},{signal:e.signal})}unsubscribe(){let e=P($,this);N($,this,void 0),e==null||e.abort()}hostConnected(){this.subscribe()}hostDisconnected(){this.unsubscribe()}};function _n(e){P($,this)===e&&N($,this,void 0)}export{gn as BlockquoteControllerRxjs,k as LitElement,on as Subject,mn as fromEventPattern,S as html,fn as map};