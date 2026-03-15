var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,l,u,{is:d,defineProperty:f,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,p=globalThis,m=p.trustedTypes,h=m?m.emptyScript:``,g=p.reactiveElementPolyfillSupport,_=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ie=(e,t)=>!d(e,t),y={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:ie};(l=Symbol).metadata!=null||(l.metadata=Symbol(`metadata`)),p.litPropertyMetadata!=null||(p.litPropertyMetadata=new WeakMap);var b=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)==null?this.l=[]:t).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){var r;let{get:i,set:a}=(r=ee(this.prototype,e))==null?{get(){return this[t]},set(e){this[t]=e}}:r;return{get:i,set(t){let r=i==null?void 0:i.call(this);a==null||a.call(this,t),this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))==null?y:t}static _$Ei(){if(this.hasOwnProperty(_(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(e=>e(this))}addController(e){var t,n;((t=this._$EO)==null?this._$EO=new Set:t).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;let t=(e=this.shadowRoot)==null?this.attachShadow(this.constructor.shadowRootOptions):e;return s(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(e=>{var t;return(t=e.hostConnected)==null?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){var i;let a=(((i=n.converter)==null?void 0:i.toAttribute)===void 0?v:n.converter).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){var i,a,o;let e=n.getPropertyOptions(r),s=typeof e.converter==`function`?{fromAttribute:e.converter}:((i=e.converter)==null?void 0:i.fromAttribute)===void 0?v:e.converter;this._$Em=r;let c=s.fromAttribute(t,e.type);this[r]=(a=c==null?(o=this._$Ej)==null?void 0:o.get(r):c)==null?c:a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){var a,o;let s=this.constructor;if(!1===r&&(i=this[e]),n!=null||(n=s.getPropertyOptions(e)),!(((a=n.hasChanged)==null?ie:a)(i,t)||n.useDefault&&n.reflect&&i===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){var o,s,c;n&&!((o=this._$Ej)==null?this._$Ej=new Map:o).has(e)&&(this._$Ej.set(e,(s=a==null?t:a)==null?this[e]:s),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&((c=this._$Eq)==null?this._$Eq=new Set:c).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{var n;e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(e=>{var t;return(t=e.hostUpdate)==null?void 0:t.call(e)}),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(e=>{var t;return(t=e.hostUpdated)==null?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:`open`},b[_(`elementProperties`)]=new Map,b[_(`finalized`)]=new Map,g==null||g({ReactiveElement:b}),((u=p.reactiveElementVersions)==null?p.reactiveElementVersions=[]:u).push(`2.1.2`);var ae,x=globalThis,S=e=>e,C=x.trustedTypes,oe=C?C.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,se=`$lit$`,w=`lit$${Math.random().toFixed(9).slice(2)}$`,ce=`?`+w,le=`<${ce}>`,T=document,E=()=>T.createComment(``),D=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ue=Array.isArray,de=e=>ue(e)||typeof(e==null?void 0:e[Symbol.iterator])==`function`,fe=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,me=/>/g,k=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),he=/'/g,ge=/"/g,_e=/^(?:script|style|textarea|title)$/i,A=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),j=Symbol.for(`lit-noChange`),M=Symbol.for(`lit-nothing`),ve=new WeakMap,N=T.createTreeWalker(T,129);function ye(e,t){if(!ue(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return oe===void 0?t:oe.createHTML(t)}var be=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=O;for(let t=0;t<n;t++){var s;let n=e[t],c,l,u=-1,d=0;for(;d<n.length&&(o.lastIndex=d,l=o.exec(n),l!==null);)d=o.lastIndex,o===O?l[1]===`!--`?o=pe:l[1]===void 0?l[2]===void 0?l[3]!==void 0&&(o=k):(_e.test(l[2])&&(i=RegExp(`</`+l[2],`g`)),o=k):o=me:o===k?l[0]===`>`?(o=(s=i)==null?O:s,u=-1):l[1]===void 0?u=-2:(u=o.lastIndex-l[2].length,c=l[1],o=l[3]===void 0?k:l[3]===`"`?ge:he):o===ge||o===he?o=k:o===pe||o===me?o=O:(o=k,i=void 0);let f=o===k&&e[t+1].startsWith(`/>`)?` `:``;a+=o===O?n+le:u>=0?(r.push(c),n.slice(0,u)+se+n.slice(u)+w+f):n+w+(u===-2?t:f)}return[ye(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},xe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=be(t,n);if(this.el=e.createElement(l,r),N.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=N.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(se)){let t=u[o++],n=i.getAttribute(e).split(w),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ce:r[1]===`?`?we:r[1]===`@`?Te:I}),i.removeAttribute(e)}else e.startsWith(w)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(_e.test(i.tagName)){let e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=C?C.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],E()),N.nextNode(),c.push({type:2,index:++a});i.append(e[t],E())}}}else if(i.nodeType===8)if(i.data===ce)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(w,e+1))!==-1;)c.push({type:7,index:a}),e+=w.length-1}a++}}static createElement(e,t){let n=T.createElement(`template`);return n.innerHTML=e,n}};function P(e,t,n=e,r){var i,a,o;if(t===j)return t;let s=r===void 0?n._$Cl:(i=n._$Co)==null?void 0:i[r],c=D(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==c&&(s==null||(a=s._$AO)==null||a.call(s,!1),c===void 0?s=void 0:(s=new c(e),s._$AT(e,n,r)),r===void 0?n._$Cl=s:((o=n._$Co)==null?n._$Co=[]:o)[r]=s),s!==void 0&&(t=P(e,s._$AS(e,t.values),s,r)),t}var Se=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:n},parts:r}=this._$AD,i=((t=e==null?void 0:e.creationScope)==null?T:t).importNode(n,!0);N.currentNode=i;let a=N.nextNode(),o=0,s=0,c=r[0];for(;c!==void 0;){if(o===c.index){let t;c.type===2?t=new F(a,a.nextSibling,this,e):c.type===1?t=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(t=new Ee(a,this,e)),this._$AV.push(t),c=r[++s]}o!==(c==null?void 0:c.index)&&(a=N.nextNode(),o++)}return N.currentNode=T,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},F=class e{get _$AU(){var e,t;return(e=(t=this._$AM)==null?void 0:t._$AU)==null?this._$Cv:e}constructor(e,t,n,r){var i;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(i=r==null?void 0:r.isConnected)==null?!0:i}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),D(e)?e===M||e==null||e===``?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==j&&this._(e):e._$litType$===void 0?e.nodeType===void 0?de(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){var t;let{values:n,_$litType$:r}=e,i=typeof r==`number`?this._$AC(e):(r.el===void 0&&(r.el=xe.createElement(ye(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)==null?void 0:t._$AD)===i)this._$AH.p(n);else{let e=new Se(i,this),t=e.u(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=ve.get(e.strings);return t===void 0&&ve.set(e.strings,t=new xe(e)),t}k(t){ue(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(E()),this.O(E()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null||n.call(this,!1,!0,t);e!==this._$AB;){let t=S(e).nextSibling;S(e).remove(),e=t}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=P(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==j,a&&(this._$AH=e);else{var o;let r=e,s,c;for(e=i[0],s=0;s<i.length-1;s++)c=P(this,r[n+s],t,s),c===j&&(c=this._$AH[s]),a||(a=!D(c)||c!==this._$AH[s]),c===M?e=M:e!==M&&(e+=((o=c)==null?``:o)+i[s+1]),this._$AH[s]=c}a&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e==null?``:e)}},Ce=class extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},we=class extends I{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Te=class extends I{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){var n;if((e=(n=P(this,e,t,0))==null?M:n)===j)return;let r=this._$AH,i=e===M&&r!==M||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==M&&(r===M||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH==`function`?this._$AH.call((t=(n=this.options)==null?void 0:n.host)==null?this.element:t,e):this._$AH.handleEvent(e)}},Ee=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}},De={M:se,P:w,A:ce,C:1,L:be,R:Se,D:de,V:P,I:F,H:I,N:we,U:Te,B:Ce,F:Ee},Oe=x.litHtmlPolyfillSupport;Oe==null||Oe(xe,F),((ae=x.litHtmlVersions)==null?x.litHtmlVersions=[]:ae).push(`3.3.2`);var ke=(e,t,n)=>{var r;let i=(r=n==null?void 0:n.renderBefore)==null?t:r,a=i._$litPart$;if(a===void 0){var o;let e=(o=n==null?void 0:n.renderBefore)==null?null:o;i._$litPart$=a=new F(t.insertBefore(E(),e),e,void 0,n==null?{}:n)}return a._$AI(e),a},Ae,je,L=globalThis,R=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore!=null||(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return j}};R._$litElement$=!0,R.finalized=!0,(Ae=L.litElementHydrateSupport)==null||Ae.call(L,{LitElement:R});var Me=L.litElementPolyfillSupport;Me==null||Me({LitElement:R}),((je=L.litElementVersions)==null?L.litElementVersions=[]:je).push(`4.2.2`);var{I:Ne}=De,Pe=e=>e.strings===void 0,Fe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ie=e=>(...t)=>({_$litDirective$:e,values:t}),Le=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},z=(e,t)=>{var n;let r=e._$AN;if(r===void 0)return!1;for(let e of r)(n=e._$AO)==null||n.call(e,t,!1),z(e,t);return!0},B=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},Re=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ve(t)}};function ze(e){this._$AN===void 0?this._$AM=e:(B(this),this._$AM=e,Re(this))}function Be(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)z(r[e],!1),B(r[e]);else r!=null&&(z(r,!1),B(r));else z(this,e)}var Ve=e=>{e.type==Fe.CHILD&&(e._$AP!=null||(e._$AP=Be),e._$AQ!=null||(e._$AQ=ze))},He=class extends Le{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Re(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(z(this,e),B(this))}setValue(e){if(Pe(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ue=()=>new We,We=class{},Ge=new WeakMap,Ke=Ie(class extends He{render(e){return M}update(e,[t]){var n;let r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),M}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){var t;let n=(t=this.ht)==null?globalThis:t,r=Ge.get(n);r===void 0&&(r=new WeakMap,Ge.set(n,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t,n;return typeof this.G==`function`?(e=Ge.get((t=this.ht)==null?globalThis:t))==null?void 0:e.get(this.G):(n=this.G)==null?void 0:n.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),qe=o`
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
`;function V(e){"@babel/helpers - typeof";return V=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},V(e)}function Je(e,t){if(V(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(V(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ye(e){var t=Je(e,`string`);return V(t)==`symbol`?t:t+``}function H(e,t,n){return(t=Ye(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xe=class extends R{static get styles(){return[qe]}static get properties(){return{screenSizes:{type:Array,attribute:`screen-sizes`},selected:{type:Number},widthInPercent:{type:Boolean,attribute:`width-in-percent`},showOverflowSize:{type:Boolean,attribute:`show-overflow-size`},disabledSelectedSizeText:{type:Boolean,attribute:`disabled-selected-size-text`}}}constructor(){super(),H(this,`_onResize`,e=>{e.preventDefault(),e.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})}),this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:`360x800`},{width:390,height:864,id:`390x864`},{width:414,height:896,id:`414x896`},{width:768,height:1024,id:`768x1024`},{width:810,height:1080,id:`810x1080`},{width:1280,height:720,id:`1280x800`},{width:1366,height:768,id:`1366x768`},{width:1536,height:864,id:`1536x864`},{width:1920,height:1080,id:`1920x1080`}],this.widthInPercent=!1}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener(`resize`,this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener(`resize`,this._onResize)}willUpdate(e){super.willUpdate&&super.willUpdate(e),e.has(`screenSizes`)&&this.screenSizes.sort((e,t)=>t.width-e.width),e.has(`selected`)&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(e){if(super.updated&&super.updated(e),e.has(`selected`)){let e=new CustomEvent(`selectedchange`,{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(e)}}render(){return A`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return A`
      ${this.screenSizes.map((e,t)=>A`
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
    `}get _visualTextTpl(){return A`
      <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true">
        ${this.selectedSize.id}
      </span>
    `}_setSelected(e){e.preventDefault(),e.stopPropagation(),this.selected=Number(e.target.dataset.index);let t=new CustomEvent(`click`,{detail:this.selectedDetail});this.dispatchEvent(t)}};window.customElements.define(`blockquote-base-embedded-webview-size`,Xe);var Ze=o`
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
`,Qe=class extends R{static get styles(){return[Ze]}constructor(){super(),H(this,`_doubleclickForCssInitialSize`,()=>{this.removeAttribute(`style`)}),this._cursor=``,this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,`right`),this._createResizerRight=this._createResizer.bind(this,`left`),this._createResizerBottom=this._createResizer.bind(this,`top`),this._createResizerBottomLeft=this._createResizer.bind(this,`scaleTopRight`),this._createResizerBottomRight=this._createResizer.bind(this,`scaleTopLeft`),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}async connectedCallback(){var e,t,n,r,i,a,o,s,c,l,u,d,f;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.rect=(t=this.shadowRoot)==null?void 0:t.querySelector(`.rect`),this.bottomRightResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(`.resizer-se`),this.bottomLeftResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(`.resizer-sw`),this.rightResizerElement=(i=this.shadowRoot)==null?void 0:i.querySelector(`.resizer-e`),this.leftResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(`.resizer-w`),this.bottomResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(`.resizer-s`),(s=this.leftResizerElement)==null||s.addEventListener(`pointerdown`,this._createResizerLeft),(c=this.rightResizerElement)==null||c.addEventListener(`pointerdown`,this._createResizerRight),(l=this.bottomResizerElement)==null||l.addEventListener(`pointerdown`,this._createResizerBottom),(u=this.bottomLeftResizerElement)==null||u.addEventListener(`pointerdown`,this._createResizerBottomLeft),(d=this.bottomRightResizerElement)==null||d.addEventListener(`pointerdown`,this._createResizerBottomRight),(f=this.bottomResizerElement)==null||f.addEventListener(`dblclick`,this._doubleclickForCssInitialSize)}render(){return A`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `}get _resizersTpl(){return A`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `}_createResizer(e,t){this.setAttribute(`resizing`,``),this._getBoundingClientRecDOMRect=e,this._getBoundingClientRectWidth=this._getBoundingClientRect(`width`),this._getBoundingClientRectHeight=this._getBoundingClientRect(`height`);let{target:n,pointerId:r,clientX:i,clientY:a}=t;n==null||n.setPointerCapture(r);let o=({clientX:e,clientY:t})=>{let n=Math.floor(e-i),r=Math.floor(t-a);this._resize({detail:{dx:n,dy:r}})};n==null||n.addEventListener(`pointermove`,o);let s=()=>{this.removeAttribute(`resizing`),n==null||n.releasePointerCapture(r),n==null||n.removeEventListener(`pointermove`,o),n==null||n.removeEventListener(`pointerup`,s),this._dispatchResizeEvent()};n==null||n.addEventListener(`pointerup`,s)}_resize({detail:e}){let t,n,r=Math.floor(e.dx*2.04),i=Math.floor(e.dy*1.04);switch(this._getBoundingClientRecDOMRect){case`right`:this._cursor=`w`,t=`${this._getBoundingClientRectWidth-r}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t);break;case`left`:this._cursor=`e`,t=`${this._getBoundingClientRectWidth+r}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t);break;case`top`:this._cursor=`n`,n=`${this._getBoundingClientRectHeight+i}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,n);break;case`scaleTopLeft`:this._cursor=`ne`,t=`${this._getBoundingClientRectWidth+r}px`,n=`${this._getBoundingClientRectHeight+i}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t),this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,n);break;case`scaleTopRight`:this._cursor=`nw`,t=`${this._getBoundingClientRectWidth-r}px`,n=`${this._getBoundingClientRectHeight+i}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t),this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,n);break;default:}this._dispatchResizeEvent()}_dispatchResizeEvent(){let e=new CustomEvent(`webviewresize`,{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue(`--blockquote-base-embedded-webview-resize-rect-width`),y:getComputedStyle(this).getPropertyValue(`--blockquote-base-embedded-webview-resize-rect-height`),resizing:this.hasAttribute(`resizing`),cursor:this._cursor}});this.dispatchEvent(e)}_getBoundingClientRect(e){var t;return Math.abs(parseInt((t=this.rect)==null?void 0:t.getBoundingClientRect()[e],10))}};window.customElements.define(`blockquote-base-embedded-webview-resize`,Qe);var $e=o`
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
`,et=class extends R{static get styles(){return[$e]}static get properties(){return{embeddedTitle:{type:String,attribute:`embedded-title`},src:{type:String},type:{type:String}}}constructor(){super(),H(this,`_onLoadElement`,({target:e})=>{if(!e.contentDocument||!e.contentDocument.head.childNodes.length)return;Object.assign(e.contentDocument.body.dataset,{embedded:``}),window.performance.mark(`iframeend`),window.performance.measure(`iframe`,`iframestart`,`iframeend`),window.requestAnimationFrame(()=>e.removeAttribute(`style`));let t=new CustomEvent(`elementloaded`,{bubbles:!0,detail:e});this.dispatchEvent(t)}),this.embeddedTitle=``,this.src=``,this.type=`iframe`}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:`embedded`}),this._embeddedElement.addEventListener(`load`,this._onLoadElement))}willUpdate(e){super.willUpdate&&super.willUpdate(e),(e.has(`src`)||e.has(`embeddedTitle`))&&this.src!==``&&this._fetch(this.src)}render(){return A`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){ke(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type===`iframe`?`src`:`data`}get _embeddedTpl(){return A`
      <slot name="embedded"></slot>
    `}_fetch(e){if(e){var t,n,r,i;Object.assign((t=this._embeddedElement)==null?{}:t,this.type===`iframe`&&{allow:`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,allowFullscreen:!0,loading:`lazy`},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((n=this._embeddedElement)==null?{}:n,{[this._loadResource]:e}),window.performance.mark(`iframestart`),Object.assign((r=(i=this._embeddedElement)==null?void 0:i.style)==null?{}:r,e.indexOf(`http`)!==0&&{opacity:0})}}};window.customElements.define(`blockquote-base-embedded-webview-element`,et);var tt=o`
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

  select,
  select::picker(select) {
    -webkit-appearance: base-select;
    -moz-appearance: base-select;
    appearance: base-select;
  }

  select:open > button svg {
    transform: rotate(0.5turn);
  }

  select button {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    padding-inline-start: 0.2ch;
  }

  select button svg {
    inline-size: 1.62ch;
    transition: transform 192ms cubic-bezier(0.5, 1, 0.75, 1.25);
  }

  select::picker-icon {
    display: none;
  }

  select::picker(select) {
    background-color: inherit;
    border: 0.0625rem solid var(--_select-bgcolor);
    margin-block: 0.125rem;
    overflow: visible;
  }

  select {
    field-sizing: content;
    color: inherit;
    font: inherit;
    background-color: #fff;
    border: none;
    border-block-end: 0.125rem solid var(--_select-bgcolor);
    padding: 0;
    margin: 0;
    cursor: pointer;
    outline: none;
    border-radius: 0;
    min-inline-size: 16ch;
    max-inline-size: 20ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: var(--_select-transition);
  }

  select:hover,
  select:focus {
    border-block-end-color: currentcolor;
  }

  option {
    gap: 0.25em;
    padding: 0.25em 0.5em;
  }

  option::checkmark {
    content: '⊙';
    color: currentcolor;
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
      inline-size: 0.875rem;
      justify-self: end;
      pointer-events: none;
      display: block;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding-block: 0.25em;
      padding-inline: 0 1em;
      inline-size: 100%;
    }
  }

  @supports (
    (-webkit-appearance: base-select) or (-moz-appearance: base-select) or (appearance: base-select)
  ) {
    .select > svg {
      display: none;
    }
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
`,nt=A`
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
`,rt=A`
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
`,it=class extends R{static get styles(){return[tt]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:`heading-level`,reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:`screen-size-selected`},limitHeight:{type:Boolean,attribute:`limit-height`,reflect:!0,useDefault:!0}}}constructor(){super(),H(this,`_updateSize`,({detail:e})=>{var t,n;(t=this._embeddedResizeRef)==null||(t=t.value)==null||t.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,`${e.width}px`),(n=this._embeddedResizeRef)==null||(n=n.value)==null||n.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,this.limitHeight?`100%`:`${e.height}px`),this.__resetResizing=!1,this.requestUpdate()}),this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading=``,this.__resetResizing=!1,this.__selectArrow=nt,this.__readDataPos={x:`0`,y:`0`,resizing:!1,cursor:``},this.limitHeight=!1,this._sources=[{src:``,option:``,description:``}],this._embeddedResizeRef=Ue()}async connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.addEventListener(`webviewresize`,e=>{let{detail:t}=e;if(Object.assign(this.__readDataPos,t),this.__resetResizing=!0,t.cursor===`n`||t.cursor===`ne`||t.cursor===`nw`){var n;window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((n=this._controlBottom)==null?0:n)),left:0,behavior:`smooth`})}this.requestUpdate()});let n=Array.from(this.querySelectorAll(`template`));n.length&&(this._sources=n.map(e=>{let{src:t=``,option:n=``,description:r=``}=e.dataset;return{src:t,option:n,description:r}}),this._src=this._sources[this.selected].src),this.embedded=(t=this.shadowRoot)==null?void 0:t.querySelector(`[slot="embedded"]`),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return A`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){ke(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return A`
      <header>
        <div>
          ${this._headingTpl} ${this._navigationDemosTpl} ${this._descriptionTpl}
          ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return A`
      <div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>
    `}get _navigationDemosTpl(){return A`
      <div>${this._selectTpl}${this._externalLinkTpl}</div>
    `}get _selectTpl(){return A`
      ${this._sources.some(e=>e.option)?A`
            <div class="select">
              <select id="select-sources" @change="${this._onChangeFile}" aria-label="Cases">
                <button>
                  <selectedcontent></selectedcontent>
                  ${this.__selectArrow}
                </button>
                ${this._sources.map((e,t)=>A`
                    <option ?selected="${this.selected===t}" value="${t}">
                      ${e.option}
                    </option>
                  `)}
              </select>
              ${this.__selectArrow}
            </div>
          `:``}
    `}get _externalLinkTpl(){return A`
      <a href="${this._src||`#`}" target="_blank" class="open-externally">
        <span class="sr-only">View demo in a new tab</span>
        <span aria-hidden="true">${rt}</span>
      </a>
    `}get _descriptionTpl(){return A`
      <p class="description">${this._sources[this.selected].description}</p>
    `}get _readDataPosTpl(){return A`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing?1:0}">
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return A`
      <blockquote-base-embedded-webview-size
        .disabledSelectedSizeText="${this.__resetResizing}"
        @click="${this._updateSize}"
        @selectedchange="${this._updateSize}"
        .selected="${this.screenSizeSelected}"></blockquote-base-embedded-webview-size>
    `}get _mainTpl(){return A`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${Ke(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return A`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||``}"
        .embeddedTitle="${this._sources[this.selected].option||`Demo`}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:e}){this.selected=e.selectedIndex,this._src=this._sources[this.selected].src}};window.customElements.define(`blockquote-base-embedded-webview`,it);var U=[],at=function(){return U.some(function(e){return e.activeTargets.length>0})},ot=function(){return U.some(function(e){return e.skippedTargets.length>0})},st=`ResizeObserver loop completed with undelivered notifications.`,ct=function(){var e;typeof ErrorEvent==`function`?e=new ErrorEvent(`error`,{message:st}):(e=document.createEvent(`Event`),e.initEvent(`error`,!1,!1),e.message=st),window.dispatchEvent(e)},W;(function(e){e.BORDER_BOX=`border-box`,e.CONTENT_BOX=`content-box`,e.DEVICE_PIXEL_CONTENT_BOX=`device-pixel-content-box`})(W||(W={}));var G=function(e){return Object.freeze(e)},lt=function(){function e(e,t){this.inlineSize=e,this.blockSize=t,G(this)}return e}(),ut=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,G(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),dt=function(e){return e instanceof SVGElement&&`getBBox`in e},ft=function(e){if(dt(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,a=i.offsetWidth,o=i.offsetHeight;return!(a||o||e.getClientRects().length)},pt=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},mt=function(e){switch(e.tagName){case`INPUT`:if(e.type!==`image`)break;case`VIDEO`:case`AUDIO`:case`EMBED`:case`OBJECT`:case`CANVAS`:case`IFRAME`:case`IMG`:return!0}return!1},K=typeof window<`u`?window:{},q=new WeakMap,ht=/auto|scroll/,gt=/^tb|vertical/,_t=/msie|trident/i.test(K.navigator&&K.navigator.userAgent),J=function(e){return parseFloat(e||`0`)},Y=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new lt((n?t:e)||0,(n?e:t)||0)},vt=G({devicePixelContentBoxSize:Y(),borderBoxSize:Y(),contentBoxSize:Y(),contentRect:new ut(0,0,0,0)}),yt=function(e,t){if(t===void 0&&(t=!1),q.has(e)&&!t)return q.get(e);if(ft(e))return q.set(e,vt),vt;var n=getComputedStyle(e),r=dt(e)&&e.ownerSVGElement&&e.getBBox(),i=!_t&&n.boxSizing===`border-box`,a=gt.test(n.writingMode||``),o=!r&&ht.test(n.overflowY||``),s=!r&&ht.test(n.overflowX||``),c=r?0:J(n.paddingTop),l=r?0:J(n.paddingRight),u=r?0:J(n.paddingBottom),d=r?0:J(n.paddingLeft),f=r?0:J(n.borderTopWidth),ee=r?0:J(n.borderRightWidth),te=r?0:J(n.borderBottomWidth),ne=r?0:J(n.borderLeftWidth),re=d+l,p=c+u,m=ne+ee,h=f+te,g=s?e.offsetHeight-h-e.clientHeight:0,_=o?e.offsetWidth-m-e.clientWidth:0,v=i?re+m:0,ie=i?p+h:0,y=r?r.width:J(n.width)-v-_,b=r?r.height:J(n.height)-ie-g,ae=y+re+_+m,x=b+p+g+h,S=G({devicePixelContentBoxSize:Y(Math.round(y*devicePixelRatio),Math.round(b*devicePixelRatio),a),borderBoxSize:Y(ae,x,a),contentBoxSize:Y(y,b,a),contentRect:new ut(d,c,y,b)});return q.set(e,S),S},bt=function(e,t,n){var r=yt(e,n),i=r.borderBoxSize,a=r.contentBoxSize,o=r.devicePixelContentBoxSize;switch(t){case W.DEVICE_PIXEL_CONTENT_BOX:return o;case W.BORDER_BOX:return i;default:return a}},xt=function(){function e(e){var t=yt(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=G([t.borderBoxSize]),this.contentBoxSize=G([t.contentBoxSize]),this.devicePixelContentBoxSize=G([t.devicePixelContentBoxSize])}return e}(),St=function(e){if(ft(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},Ct=function(){var e=1/0,t=[];U.forEach(function(n){if(n.activeTargets.length!==0){var r=[];n.activeTargets.forEach(function(t){var n=new xt(t.target),i=St(t.target);r.push(n),t.lastReportedSize=bt(t.target,t.observedBox),i<e&&(e=i)}),t.push(function(){n.callback.call(n.observer,r,n.observer)}),n.activeTargets.splice(0,n.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},wt=function(e){U.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(n){n.isActive()&&(St(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))})})},Tt=function(){var e=0;for(wt(e);at();)e=Ct(),wt(e);return ot()&&ct(),e>0},Et,Dt=[],Ot=function(){return Dt.splice(0).forEach(function(e){return e()})},kt=function(e){if(!Et){var t=0,n=document.createTextNode(``);new MutationObserver(function(){return Ot()}).observe(n,{characterData:!0}),Et=function(){n.textContent=`${t?t--:t++}`}}Dt.push(e),Et()},At=function(e){kt(function(){requestAnimationFrame(e)})},X=0,jt=function(){return!!X},Mt=250,Nt={attributes:!0,characterData:!0,childList:!0,subtree:!0},Pt=[`resize`,`load`,`transitionend`,`animationend`,`animationstart`,`animationiteration`,`keyup`,`keydown`,`mouseup`,`mousedown`,`mouseover`,`mouseout`,`blur`,`focus`],Ft=function(e){return e===void 0&&(e=0),Date.now()+e},It=!1,Lt=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(e===void 0&&(e=Mt),!It){It=!0;var n=Ft(e);At(function(){var r=!1;try{r=Tt()}finally{if(It=!1,e=n-Ft(),!jt())return;r?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,Nt)};document.body?t():K.addEventListener(`DOMContentLoaded`,t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Pt.forEach(function(t){return K.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Pt.forEach(function(t){return K.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),Rt=function(e){!X&&e>0&&Lt.start(),X+=e,!X&&Lt.stop()},zt=function(e){return!dt(e)&&!mt(e)&&getComputedStyle(e).display===`inline`},Bt=function(){function e(e,t){this.target=e,this.observedBox=t||W.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e=bt(this.target,this.observedBox,!0);return zt(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},e}(),Vt=function(){function e(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return e}(),Z=new WeakMap,Ht=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Q=function(){function e(){}return e.connect=function(e,t){var n=new Vt(e,t);Z.set(e,n)},e.observe=function(e,t,n){var r=Z.get(e),i=r.observationTargets.length===0;Ht(r.observationTargets,t)<0&&(i&&U.push(r),r.observationTargets.push(new Bt(t,n&&n.box)),Rt(1),Lt.schedule())},e.unobserve=function(e,t){var n=Z.get(e),r=Ht(n.observationTargets,t),i=n.observationTargets.length===1;r>=0&&(i&&U.splice(U.indexOf(n),1),n.observationTargets.splice(r,1),Rt(-1))},e.disconnect=function(e){var t=this,n=Z.get(e);n.observationTargets.slice().forEach(function(n){return t.unobserve(e,n.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),Ut=function(){function e(e){if(arguments.length===0)throw TypeError(`Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.`);if(typeof e!=`function`)throw TypeError(`Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.`);Q.connect(this,e)}return e.prototype.observe=function(e,t){if(arguments.length===0)throw TypeError(`Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.`);if(!pt(e))throw TypeError(`Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element`);Q.observe(this,e,t)},e.prototype.unobserve=function(e){if(arguments.length===0)throw TypeError(`Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.`);if(!pt(e))throw TypeError(`Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element`);Q.unobserve(this,e)},e.prototype.disconnect=function(){Q.disconnect(this)},e.toString=function(){return`function ResizeObserver () { [polyfill code] }`},e}(),Wt=class{constructor(e,{target:t,config:n,callback:r,skipInitial:i}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,t!==null&&this.t.add(t==null?e:t),this.l=n,this.o=i==null?this.o:i,this.callback=r,window.ResizeObserver?(this.u=new ResizeObserver(e=>{this.handleChanges(e),this.h.requestUpdate()}),e.addController(this)):console.warn(`ResizeController error: browser does not support ResizeObserver.`)}handleChanges(e){var t;this.value=(t=this.callback)==null?void 0:t.call(this,e,this.u)}hostConnected(){for(let e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}target(e){return Gt(this,e)}},Gt=Ie(class extends He{constructor(){super(...arguments),this.observing=!1}render(e,t){}update(e,[t,n]){this.controller=t,this.part=e,this.observe=n,!1===n?(t.unobserve(e.element),this.observing=!1):!1===this.observing&&(t.observe(e.element),this.observing=!0)}disconnected(){var e;(e=this.controller)==null||e.unobserve(this.part.element),this.observing=!1}reconnected(){var e;!1!==this.observe&&!1===this.observing&&((e=this.controller)==null||e.observe(this.part.element),this.observing=!0)}}),Kt=new WeakMap;function qt(e,t){let n=t;for(;n;){if(Kt.get(n)===e)return!0;n=Object.getPrototypeOf(n)}return!1}function Jt(e){return t=>{if(qt(e,t))return t;let n=e(t);return Kt.set(n,e),n}}function Yt(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function Xt(e,t){Yt(e,t),t.add(e)}function Zt(e,t,n){Yt(e,t),t.set(e,n)}function $(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function Qt(e,t){return e.get($(e,t))}var $t=e=>{var t;return!/[^\t\n\r ]/.test((t=e==null?void 0:e.textContent)==null?``:t)},en=e=>e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE&&$t(e),tn=Jt(e=>{var t,n;return t=new WeakSet,n=new WeakMap,class extends e{constructor(...e){super(...e),Xt(this,t),Zt(this,n,e=>{let n=e.target;if(n){var a,o;let s=n.name||n.getAttribute(`name`)||``,c=n.assignedNodes({flatten:!0}),l=$(t,this,r).call(this,n),u={assignedSlotContent:{slotName:s,assignedSlot:((a=l.assignedContent[0])==null?void 0:a.assignedSlot)||null},assignedNodesContent:$(t,this,i).call(this,l.assignedContent),flattenedNodesContent:$(t,this,i).call(this,l.flattenedContent),originalEvent:{event:e,assignedNodes:c}},d=new CustomEvent(`slotchanges`,{composed:!0,detail:u});(o=this.shadowRoot)==null||o.dispatchEvent(d)}})}connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),(t=this.shadowRoot)==null||t.addEventListener(`slotchange`,Qt(n,this))}disconnectedCallback(){var e,t;(e=super.disconnectedCallback)==null||e.call(this),(t=this.shadowRoot)==null||t.removeEventListener(`slotchange`,Qt(n,this))}};function r(e){let t=[...e.assignedNodes(),...e.childNodes].filter(e=>!en(e)).map(e=>{var t;return{isFlattened:e.assignedSlot===null,assignedNodes:e.nodeType===Node.TEXT_NODE?(t=e.textContent)==null?void 0:t.trim():e,assignedSlot:e.assignedSlot}});return{assignedContent:t.filter(e=>e.isFlattened===!1),flattenedContent:t.filter(e=>e.isFlattened===!0)}}function i(e){return{assignedNodesByNode:e,assignedNodes:e.map(e=>e.assignedNodes)}}}),nn=o`
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
`;window.ResizeObserver||(window.ResizeObserver=Ut);var rn=class extends tn(R){static get styles(){return[nn]}static get properties(){return{autofocus:{type:Boolean},label:{type:String},selected:{type:Number,reflect:!0},_hasScrollLeftIndicator:{type:Boolean,state:!0},_hasScrollRightIndicator:{type:Boolean,state:!0}}}constructor(){super(),H(this,`_onSlotChanges`,e=>{e.stopPropagation(),e.preventDefault(),this._slotChangesCount+=1;let{detail:t}=e,n=t.assignedNodesContent.assignedNodes;t.assignedSlotContent.slotName===`tab`&&(this._tabList=n),t.assignedSlotContent.slotName===`tabpanel`&&(this._tabpanelList=n)}),H(this,`_onTabClick`,e=>{let t=e.composedPath().find(e=>e instanceof Element&&e.slot===`tab`),n=this._tabList.indexOf(t)+1;this.selected===n&&this._scrollIntoView(),this.selected=n}),H(this,`_onTabKeyDown`,e=>{let t;switch(e.key){case`ArrowLeft`:e.preventDefault(),t=this._selectedTabIndexFromOne-1,this.selected=t<=0?this._getTabListLength:t;break;case`ArrowRight`:e.preventDefault(),t=this._selectedTabIndexFromOne+1,this.selected=t>this._getTabListLength?1:t;break;case`Home`:e.preventDefault(),this.selected=1;break;case`End`:e.preventDefault(),this.selected=this._getTabListLength;break;default:break}}),this.autofocus=!1,this.label=``,this.selected=1,this._tabList=[],this._tabpanelList=[],this._selectTabLast=void 0,this._selectTabpanelLast=void 0,this._observedFocus=!1,this._observeScrollBehavior=!1,this._slotChangesCount=0,this._slotNodesCount=void 0,this._scrollContentRef=Ue(),this._resizeControllerObserver=new Wt(this,{callback:()=>{this._onResizeObserverChange()},skipInitial:!0}),this.addEventListener(`slotchanges`,this._onSlotChanges)}_selectedIsInRange(e){return e>=0&&e<=this._getTabListLength?e:0}get _selectedTab(){return this._tabList[this._selectedIsInRange(this.selected-1)]}get _selectedTabIndex(){return this._tabList.indexOf(this._selectedTab)}get _selectedTabIndexFromOne(){return this._selectedTabIndex+1}get _getTabListLength(){return this._tabList.length}firstUpdated(e){var t,n,r,i;super.firstUpdated&&super.firstUpdated(e);let a=(t=this.shadowRoot)==null?void 0:t.querySelector(`[name="tab"]`),o=(n=this.shadowRoot)==null?void 0:n.querySelector(`[name="tabpanel"]`);this._slotNodesCount=(r=this.shadowRoot)==null?void 0:r.querySelectorAll(`slot`),this._tabList=a==null?void 0:a.assignedElements(),this._tabpanelList=o==null?void 0:o.assignedElements(),this._indicators=(i=this.shadowRoot)==null?void 0:i.querySelectorAll(`.indicator`)}updated(e){if(super.updated&&super.updated(e),e.has(`selected`)){this._selectTab();let e=new CustomEvent(`selectedchange`,{bubbles:!0,detail:{selected:this._selectedTabIndexFromOne,tab:this._selectedTab,tabpanel:this._tabpanelList[this._selectedTabIndex]}});this.dispatchEvent(e)}}get _scrollContentTpl(){return A`
      <div class="scroll-content" ${Ke(this._scrollContentRef)} @scroll="${this._scrollEdge}">
        ${this._tablistTpl}
      </div>
    `}get _tablistTpl(){return A`
      <div role="tablist" aria-label="${this.label||M}">
        <slot @click="${this._onTabClick}" @keydown="${this._onTabKeyDown}" name="tab"></slot>
      </div>
    `}get _separatorTpl(){return A`
      <span aria-hidden="true" class="separator"></span>
    `}get _indicatorsTpl(){return A`
      <span
        aria-hidden="true"
        class="indicator ${this._hasScrollLeftIndicator?`show-indicator`:``}"></span>
      <span
        aria-hidden="true"
        class="indicator ${this._hasScrollRightIndicator?`show-indicator`:``}"></span>
    `}get _holdTpl(){return A`
      <div class="hold">${this._scrollContentTpl} ${this._separatorTpl} ${this._indicatorsTpl}</div>
    `}get _tabpanelTpl(){return A`
      <div>
        <slot name="tabpanel"></slot>
      </div>
    `}render(){return A`
      ${this._holdTpl} ${this._tabpanelTpl}
    `}_scrollEdge({target:e=this._scrollContentRef.value}={}){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=n-r;this._hasScrollLeftIndicator=t>0,this._hasScrollRightIndicator=t<i}_selectTab(){let e=this._tabList[this._selectedTabIndex],t=this._tabpanelList[this._selectedTabIndex];this._selectTabLast&&(this._selectTabLast.selected=!1,this._selectTabPanelLast.selected=!1),this._selectTabLast=e,this._selectTabPanelLast=t,e.selected=!0,t.selected=!0,(this.autofocus||this._observedFocus)&&this._requestFocusUpdate(),this._observedFocus=!0}_moveFocusSelectedTab(e=this._selectedTab){window.setTimeout(()=>{e.focus()},0)}async _requestFocusUpdate(){await this.updateComplete,this._moveFocusSelectedTab(),this._scrollIntoView()}_scrollIntoView(){window.requestAnimationFrame(()=>{this._scrollIntoViewWithOffset(),this._observeScrollBehavior=!0})}_scrollIntoViewWithOffset(e=this._selectedTab,t=this._observeScrollBehavior?`smooth`:`auto`){let n=this._scrollContentRef.value;if(!n)return;let[r,i]=this._indicators||[],{right:a}=n.getBoundingClientRect(),{offsetLeft:o}=e,{left:s,right:c,width:l}=e.getBoundingClientRect(),{right:u}=r.getBoundingClientRect(),{width:d,left:f}=i.getBoundingClientRect();if(c>f||s<u){let e=c>f?o-a+l+d:o-u;n.scroll({left:e,behavior:t})}}_onResizeObserverChange(){this._scrollIntoView(),this._scrollEdge()}},an=o`
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
`,on=class extends tn(R){static get properties(){return{selected:{type:Boolean}}}constructor(){super(),H(this,`_onSlotChanges`,e=>{let{detail:t}=e;e.stopPropagation(),e.preventDefault();let n=t.assignedSlotContent.assignedSlot;Object.assign(n.dataset,{text:this.textContent})}),this.selected=!1,this.globalRootAttributes={role:`tab`,slot:`tab`,tabindex:0},this.addEventListener(`slotchanges`,this._onSlotChanges)}static get styles(){return[an]}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.__setArrayAttibute(this.globalRootAttributes)}updated(e){if(super.updated&&super.updated(e),e.has(`selected`)){let e={...this.globalRootAttributes,"aria-selected":!!this.selected,tabindex:this.selected?0:-1};this.__setArrayAttibute(e)}}render(){return A`
      <slot></slot>
    `}__setArrayAttibute(e={}){Object.entries(e).forEach(([e,t])=>{this.setAttribute(e,t)})}};window.customElements.define(`blockquote-tab`,on);var sn=o`
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
`,cn=class extends R{static get properties(){return{selected:{type:Boolean}}}constructor(){super(),this.selected=!1,this.globalRootAttributes={role:`tabpanel`,slot:`tabpanel`,tabindex:0}}static get styles(){return[sn]}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.__setArrayAttibute(this.globalRootAttributes)}updated(e){if(super.updated&&super.updated(e),e.has(`selected`)){let e={...this.globalRootAttributes,"aria-hidden":!this.selected};this.__setArrayAttibute(e)}}render(){return A`
      <slot></slot>
    `}__setArrayAttibute(e={}){Object.entries(e).forEach(([e,t])=>{this.setAttribute(e,t)})}};window.customElements.define(`blockquote-tabpanel`,cn),window.customElements.define(`blockquote-tabs`,rn);