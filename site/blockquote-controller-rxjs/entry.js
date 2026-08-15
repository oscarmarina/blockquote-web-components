var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,l,u,{is:d,defineProperty:f,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,p=globalThis,ie=p.trustedTypes,ae=ie?ie.emptyScript:``,oe=p.reactiveElementPolyfillSupport,m=(e,t)=>e,se={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ce=(e,t)=>!d(e,t),le={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:ce};(l=Symbol).metadata!=null||(l.metadata=Symbol(`metadata`)),p.litPropertyMetadata!=null||(p.litPropertyMetadata=new WeakMap);var h=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)==null?this.l=[]:t).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){var r;let{get:i,set:a}=(r=ee(this.prototype,e))==null?{get(){return this[t]},set(e){this[t]=e}}:r;return{get:i,set(t){let r=i==null?void 0:i.call(this);a==null||a.call(this,t),this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))==null?le:t}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(e=>e(this))}addController(e){var t,n;((t=this._$EO)==null?this._$EO=new Set:t).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;let t=(e=this.shadowRoot)==null?this.attachShadow(this.constructor.shadowRootOptions):e;return s(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(e=>{var t;return(t=e.hostConnected)==null?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){var i;let a=(((i=n.converter)==null?void 0:i.toAttribute)===void 0?se:n.converter).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){var i,a,o;let e=n.getPropertyOptions(r),s=typeof e.converter==`function`?{fromAttribute:e.converter}:((i=e.converter)==null?void 0:i.fromAttribute)===void 0?se:e.converter;this._$Em=r;let c=s.fromAttribute(t,e.type);this[r]=(a=c==null?(o=this._$Ej)==null?void 0:o.get(r):c)==null?c:a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){var a,o;let s=this.constructor;if(!1===r&&(i=this[e]),n!=null||(n=s.getPropertyOptions(e)),!(((a=n.hasChanged)==null?ce:a)(i,t)||n.useDefault&&n.reflect&&i===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){var o,s,c;n&&!((o=this._$Ej)==null?this._$Ej=new Map:o).has(e)&&(this._$Ej.set(e,(s=a==null?t:a)==null?this[e]:s),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&((c=this._$Eq)==null?this._$Eq=new Set:c).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{var n;e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(e=>{var t;return(t=e.hostUpdate)==null?void 0:t.call(e)}),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(e=>{var t;return(t=e.hostUpdated)==null?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};h.elementStyles=[],h.shadowRootOptions={mode:`open`},h[m(`elementProperties`)]=new Map,h[m(`finalized`)]=new Map,oe==null||oe({ReactiveElement:h}),((u=p.reactiveElementVersions)==null?p.reactiveElementVersions=[]:u).push(`2.1.2`);var ue,g=globalThis,de=e=>e,fe=g.trustedTypes,pe=fe?fe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,me=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,he=`?`+_,ge=`<${he}>`,v=document,y=()=>v.createComment(``),b=e=>e===null||typeof e!=`object`&&typeof e!=`function`,_e=Array.isArray,ve=e=>_e(e)||typeof(e==null?void 0:e[Symbol.iterator])==`function`,ye=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,xe=/>/g,S=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Se=/'/g,Ce=/"/g,we=/^(?:script|style|textarea|title)$/i,C=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),w=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),Te=new WeakMap,E=v.createTreeWalker(v,129);function Ee(e,t){if(!_e(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return pe===void 0?t:pe.createHTML(t)}var De=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=x;for(let t=0;t<n;t++){var s;let n=e[t],c,l,u=-1,d=0;for(;d<n.length&&(o.lastIndex=d,l=o.exec(n),l!==null);)d=o.lastIndex,o===x?l[1]===`!--`?o=be:l[1]===void 0?l[2]===void 0?l[3]!==void 0&&(o=S):(we.test(l[2])&&(i=RegExp(`</`+l[2],`g`)),o=S):o=xe:o===S?l[0]===`>`?(o=(s=i)==null?x:s,u=-1):l[1]===void 0?u=-2:(u=o.lastIndex-l[2].length,c=l[1],o=l[3]===void 0?S:l[3]===`"`?Ce:Se):o===Ce||o===Se?o=S:o===be||o===xe?o=x:(o=S,i=void 0);let f=o===S&&e[t+1].startsWith(`/>`)?` `:``;a+=o===x?n+ge:u>=0?(r.push(c),n.slice(0,u)+me+n.slice(u)+_+f):n+_+(u===-2?t:f)}return[Ee(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Oe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=De(t,n);if(this.el=e.createElement(l,r),E.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=E.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(me)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ae:r[1]===`?`?je:r[1]===`@`?Me:k}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(we.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=fe?fe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],y()),E.nextNode(),c.push({type:2,index:++a});i.append(e[t],y())}}}else if(i.nodeType===8){if(i.data===he)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function D(e,t,n=e,r){var i,a,o;if(t===w)return t;let s=r===void 0?n._$Cl:(i=n._$Co)==null?void 0:i[r],c=b(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==c&&(s==null||(a=s._$AO)==null||a.call(s,!1),c===void 0?s=void 0:(s=new c(e),s._$AT(e,n,r)),r===void 0?n._$Cl=s:((o=n._$Co)==null?n._$Co=[]:o)[r]=s),s!==void 0&&(t=D(e,s._$AS(e,t.values),s,r)),t}var ke=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:n},parts:r}=this._$AD,i=((t=e==null?void 0:e.creationScope)==null?v:t).importNode(n,!0);E.currentNode=i;let a=E.nextNode(),o=0,s=0,c=r[0];for(;c!==void 0;){if(o===c.index){let t;c.type===2?t=new O(a,a.nextSibling,this,e):c.type===1?t=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(t=new Ne(a,this,e)),this._$AV.push(t),c=r[++s]}o!==(c==null?void 0:c.index)&&(a=E.nextNode(),o++)}return E.currentNode=v,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},O=class e{get _$AU(){var e,t;return(e=(t=this._$AM)==null?void 0:t._$AU)==null?this._$Cv:e}constructor(e,t,n,r){var i;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(i=r==null?void 0:r.isConnected)==null||i}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),b(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==w&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ve(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&b(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){var t;let{values:n,_$litType$:r}=e,i=typeof r==`number`?this._$AC(e):(r.el===void 0&&(r.el=Oe.createElement(Ee(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)==null?void 0:t._$AD)===i)this._$AH.p(n);else{let e=new ke(i,this),t=e.u(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=Te.get(e.strings);return t===void 0&&Te.set(e.strings,t=new Oe(e)),t}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(y()),this.O(y()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null||n.call(this,!1,!0,t);e!==this._$AB;){let t=de(e).nextSibling;de(e).remove(),e=t}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},k=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=D(this,e,t,0),a=!b(e)||e!==this._$AH&&e!==w,a&&(this._$AH=e);else{var o;let r=e,s,c;for(e=i[0],s=0;s<i.length-1;s++)c=D(this,r[n+s],t,s),c===w&&(c=this._$AH[s]),a||(a=!b(c)||c!==this._$AH[s]),c===T?e=T:e!==T&&(e+=((o=c)==null?``:o)+i[s+1]),this._$AH[s]=c}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e==null?``:e)}},Ae=class extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},je=class extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Me=class extends k{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){var n;if((e=(n=D(this,e,t,0))==null?T:n)===w)return;let r=this._$AH,i=e===T&&r!==T||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==T&&(r===T||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH==`function`?this._$AH.call((t=(n=this.options)==null?void 0:n.host)==null?this.element:t,e):this._$AH.handleEvent(e)}},Ne=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}},Pe={M:me,P:_,A:he,C:1,L:De,R:ke,D:ve,V:D,I:O,H:k,N:je,U:Me,B:Ae,F:Ne},Fe=g.litHtmlPolyfillSupport;Fe==null||Fe(Oe,O),((ue=g.litHtmlVersions)==null?g.litHtmlVersions=[]:ue).push(`3.3.3`);var Ie=(e,t,n)=>{var r;let i=(r=n==null?void 0:n.renderBefore)==null?t:r,a=i._$litPart$;if(a===void 0){var o;let e=(o=n==null?void 0:n.renderBefore)==null?null:o;i._$litPart$=a=new O(t.insertBefore(y(),e),e,void 0,n==null?{}:n)}return a._$AI(e),a},Le,Re,A=globalThis,j=class extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore!=null||(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return w}};j._$litElement$=!0,j.finalized=!0,(Le=A.litElementHydrateSupport)==null||Le.call(A,{LitElement:j});var ze=A.litElementPolyfillSupport;ze==null||ze({LitElement:j}),((Re=A.litElementVersions)==null?A.litElementVersions=[]:Re).push(`4.2.2`);var{I:Be}=Pe,Ve=e=>e.strings===void 0,He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=e=>(...t)=>({_$litDirective$:e,values:t}),We=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},M=(e,t)=>{var n;let r=e._$AN;if(r===void 0)return!1;for(let e of r)(n=e._$AO)==null||n.call(e,t,!1),M(e,t);return!0},Ge=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},Ke=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ye(t)}};function qe(e){this._$AN===void 0?this._$AM=e:(Ge(this),this._$AM=e,Ke(this))}function Je(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)M(r[e],!1),Ge(r[e]);else r!=null&&(M(r,!1),Ge(r))}else M(this,e)}}var Ye=e=>{e.type==He.CHILD&&(e._$AP!=null||(e._$AP=Je),e._$AQ!=null||(e._$AQ=qe))},Xe=class extends We{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ke(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(M(this,e),Ge(this))}setValue(e){if(Ve(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ze=()=>new Qe,Qe=class{},$e=new WeakMap,et=Ue(class extends Xe{render(e){return T}update(e,[t]){var n;let r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),T}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){var t;let n=(t=this.ht)==null?globalThis:t,r=$e.get(n);r===void 0&&(r=new WeakMap,$e.set(n,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){var e,t,n;return typeof this.G==`function`?(e=$e.get((t=this.ht)==null?globalThis:t))==null?void 0:e.get(this.G):(n=this.G)==null?void 0:n.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),tt=o`
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
`,nt=class extends j{static get styles(){return[tt]}static get properties(){return{screenSizes:{type:Array,attribute:`screen-sizes`},selected:{type:Number},widthInPercent:{type:Boolean,attribute:`width-in-percent`},showOverflowSize:{type:Boolean,attribute:`show-overflow-size`},disabledSelectedSizeText:{type:Boolean,attribute:`disabled-selected-size-text`}}}constructor(){super(),this._onResize=e=>{e.preventDefault(),e.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})},this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:800,id:`360x800`},{width:390,height:864,id:`390x864`},{width:414,height:896,id:`414x896`},{width:768,height:1024,id:`768x1024`},{width:810,height:1080,id:`810x1080`},{width:1280,height:720,id:`1280x800`},{width:1366,height:768,id:`1366x768`},{width:1536,height:864,id:`1536x864`},{width:1920,height:1080,id:`1920x1080`}],this.widthInPercent=!1}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener(`resize`,this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener(`resize`,this._onResize)}willUpdate(e){super.willUpdate&&super.willUpdate(e),e.has(`screenSizes`)&&this.screenSizes.sort((e,t)=>t.width-e.width),e.has(`selected`)&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(e){if(super.updated&&super.updated(e),e.has(`selected`)){let e=new CustomEvent(`selectedchange`,{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(e)}}render(){return C`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return C`
      ${this.screenSizes.map((e,t)=>C`
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
    `}get _visualTextTpl(){return C`
      <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true">
        ${this.selectedSize.id}
      </span>
    `}_setSelected(e){e.preventDefault(),e.stopPropagation(),this.selected=Number(e.target.dataset.index);let t=new CustomEvent(`click`,{detail:this.selectedDetail});this.dispatchEvent(t)}};window.customElements.define(`blockquote-base-embedded-webview-size`,nt);var rt=o`
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
`,it=class extends j{static get styles(){return[rt]}constructor(){super(),this._doubleclickForCssInitialSize=()=>{this.removeAttribute(`style`)},this._cursor=``,this._resize=this._resize.bind(this),this._createResizerLeft=this._createResizer.bind(this,`right`),this._createResizerRight=this._createResizer.bind(this,`left`),this._createResizerBottom=this._createResizer.bind(this,`top`),this._createResizerBottomLeft=this._createResizer.bind(this,`scaleTopRight`),this._createResizerBottomRight=this._createResizer.bind(this,`scaleTopLeft`),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}async connectedCallback(){var e,t,n,r,i,a,o,s,c,l,u,d,f;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.rect=(t=this.shadowRoot)==null?void 0:t.querySelector(`.rect`),this.bottomRightResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(`.resizer-se`),this.bottomLeftResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(`.resizer-sw`),this.rightResizerElement=(i=this.shadowRoot)==null?void 0:i.querySelector(`.resizer-e`),this.leftResizerElement=(a=this.shadowRoot)==null?void 0:a.querySelector(`.resizer-w`),this.bottomResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(`.resizer-s`),(s=this.leftResizerElement)==null||s.addEventListener(`pointerdown`,this._createResizerLeft),(c=this.rightResizerElement)==null||c.addEventListener(`pointerdown`,this._createResizerRight),(l=this.bottomResizerElement)==null||l.addEventListener(`pointerdown`,this._createResizerBottom),(u=this.bottomLeftResizerElement)==null||u.addEventListener(`pointerdown`,this._createResizerBottomLeft),(d=this.bottomRightResizerElement)==null||d.addEventListener(`pointerdown`,this._createResizerBottomRight),(f=this.bottomResizerElement)==null||f.addEventListener(`dblclick`,this._doubleclickForCssInitialSize)}render(){return C`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `}get _resizersTpl(){return C`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `}_createResizer(e,t){this.setAttribute(`resizing`,``),this._resizeDirection=e,this._getBoundingClientRectWidth=this._getBoundingClientRect(`width`),this._getBoundingClientRectHeight=this._getBoundingClientRect(`height`);let{target:n,pointerId:r,clientX:i,clientY:a}=t;n==null||n.setPointerCapture(r);let o=e=>{let{clientX:t,clientY:n}=e,r=Math.floor(t-i),o=Math.floor(n-a);this._resize({detail:{dx:r,dy:o}})};n==null||n.addEventListener(`pointermove`,o);let s=()=>{this.removeAttribute(`resizing`),n==null||n.releasePointerCapture(r),n==null||n.removeEventListener(`pointermove`,o),n==null||n.removeEventListener(`pointerup`,s),this._dispatchResizeEvent()};n==null||n.addEventListener(`pointerup`,s)}_resize({detail:e}){let t,n,r=Math.floor(e.dx*2.04),i=Math.floor(e.dy*1.04);switch(this._resizeDirection){case`right`:this._cursor=`w`,t=`${this._getBoundingClientRectWidth-r}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t);break;case`left`:this._cursor=`e`,t=`${this._getBoundingClientRectWidth+r}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t);break;case`top`:this._cursor=`n`,n=`${this._getBoundingClientRectHeight+i}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,n);break;case`scaleTopLeft`:this._cursor=`ne`,t=`${this._getBoundingClientRectWidth+r}px`,n=`${this._getBoundingClientRectHeight+i}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t),this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,n);break;case`scaleTopRight`:this._cursor=`nw`,t=`${this._getBoundingClientRectWidth-r}px`,n=`${this._getBoundingClientRectHeight+i}px`,this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,t),this.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,n)}this._dispatchResizeEvent()}_dispatchResizeEvent(){let e=new CustomEvent(`webviewresize`,{composed:!0,detail:{x:getComputedStyle(this).getPropertyValue(`--blockquote-base-embedded-webview-resize-rect-width`),y:getComputedStyle(this).getPropertyValue(`--blockquote-base-embedded-webview-resize-rect-height`),resizing:this.hasAttribute(`resizing`),cursor:this._cursor}});this.dispatchEvent(e)}_getBoundingClientRect(e){var t;let n=(t=this.rect)==null?void 0:t.getBoundingClientRect();return n?Math.abs(n[e]):0}};window.customElements.define(`blockquote-base-embedded-webview-resize`,it);var at=o`
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
`,ot=class extends j{static get styles(){return[at]}static get properties(){return{embeddedTitle:{type:String,attribute:`embedded-title`},src:{type:String},type:{type:String}}}constructor(){super(),this._onLoadElement=({target:e})=>{let t=e;if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:``}),window.performance.mark(`iframeend`),window.performance.measure(`iframe`,`iframestart`,`iframeend`),window.requestAnimationFrame(()=>t.removeAttribute(`style`));let n=new CustomEvent(`elementloaded`,{bubbles:!0,detail:e});this.dispatchEvent(n)},this.embeddedTitle=``,this.src=``,this.type=`iframe`}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:`embedded`}),this._embeddedElement.addEventListener(`load`,this._onLoadElement))}willUpdate(e){super.willUpdate&&super.willUpdate(e),(e.has(`src`)||e.has(`embeddedTitle`))&&this.src!==``&&this._fetch(this.src)}render(){return C`
      ${this._embeddedTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){Ie(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type===`iframe`?`src`:`data`}get _embeddedTpl(){return C`
      <slot name="embedded"></slot>
    `}_fetch(e){if(e){var t,n,r,i;Object.assign((t=this._embeddedElement)==null?{}:t,this.type===`iframe`&&{allow:`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,allowFullscreen:!0,loading:`lazy`},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((n=this._embeddedElement)==null?{}:n,{[this._loadResource]:e}),window.performance.mark(`iframestart`),Object.assign((r=(i=this._embeddedElement)==null?void 0:i.style)==null?{}:r,e.indexOf(`http`)!==0&&{opacity:0})}}};window.customElements.define(`blockquote-base-embedded-webview-element`,ot);var st=o`
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
`,ct=C`
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
`,lt=C`
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
`,ut=class extends j{static get styles(){return[st]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:`heading-level`,reflect:!0,useDefault:!0},screenSizeSelected:{type:Number,attribute:`screen-size-selected`},limitHeight:{type:Boolean,attribute:`limit-height`,reflect:!0,useDefault:!0}}}constructor(){super(),this.__resetResizing=!1,this.__selectArrow=ct,this.__readDataPos={x:`0`,y:`0`,resizing:!1,cursor:``},this._embeddedResizeRef=Ze(),this._updateSize=({detail:e})=>{var t,n;(t=this._embeddedResizeRef)==null||(t=t.value)==null||t.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-width`,`${e.width}px`),(n=this._embeddedResizeRef)==null||(n=n.value)==null||n.style.setProperty(`--blockquote-base-embedded-webview-resize-rect-height`,this.limitHeight?`100%`:`${e.height}px`),this.__resetResizing=!1,this.requestUpdate()},this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading=``,this.__resetResizing=!1,this.__selectArrow=ct,this.__readDataPos={x:`0`,y:`0`,resizing:!1,cursor:``},this.limitHeight=!1,this._sources=[{src:``,option:``,description:``}],this._embeddedResizeRef=Ze()}async connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.addEventListener(`webviewresize`,e=>{let{detail:t}=e;if(Object.assign(this.__readDataPos,t),this.__resetResizing=!0,t.cursor===`n`||t.cursor===`ne`||t.cursor===`nw`){var n;window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((n=this._controlBottom)==null?0:n)),left:0,behavior:`smooth`})}this.requestUpdate()});let n=Array.from(this.querySelectorAll(`template`));n.length&&(this._sources=n.map(e=>{let{src:t=``,option:n=``,description:r=``}=e.dataset;return{src:t,option:n,description:r}}),this._src=this._sources[this.selected].src),this.embedded=(t=this.shadowRoot)==null?void 0:t.querySelector(`[slot="embedded"]`),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return C`
      ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}
    `}_litHtmlRender(){Ie(this._lightDomTpl,this,{host:this})}get _lightDomTpl(){return this.embedded}get _headerTpl(){return C`
      <header>
        <div>
          ${this._headingTpl} ${this._navigationDemosTpl} ${this._descriptionTpl}
          ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return C`
      <div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>
    `}get _navigationDemosTpl(){return C`
      <div>${this._selectTpl}${this._externalLinkTpl}</div>
    `}get _selectTpl(){return C`
      ${this._sources.some(e=>e.option)?C`
              <div class="select">
                <select id="select-sources" @change="${this._onChangeFile}" aria-label="Cases">
                  <button>
                    <selectedcontent></selectedcontent>
                  </button>
                  ${this._sources.map((e,t)=>C`
                      <option ?selected="${this.selected===t}" value="${t}">
                        ${e.option}
                      </option>
                    `)}
                </select>
                ${this.__selectArrow}
              </div>
            `:``}
    `}get _externalLinkTpl(){return C`
      <a href="${this._src||`#`}" target="_blank" class="open-externally">
        <span class="sr-only">View demo in a new tab</span>
        <span aria-hidden="true">${lt}</span>
      </a>
    `}get _descriptionTpl(){return C`
      <p class="description">${this._sources[this.selected].description}</p>
    `}get _readDataPosTpl(){return C`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${+!!this.__readDataPos.resizing}">
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return C`
      <blockquote-base-embedded-webview-size
        .disabledSelectedSizeText="${this.__resetResizing}"
        @click="${this._updateSize}"
        @selectedchange="${this._updateSize}"
        .selected="${this.screenSizeSelected}"></blockquote-base-embedded-webview-size>
    `}get _mainTpl(){return C`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${et(this._embeddedResizeRef)}>
          <slot name="embedded">${this._embeddedSlotTpl}</slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return C`
      <blockquote-base-embedded-webview-element
        slot="embedded"
        .src="${this._src||``}"
        .embeddedTitle="${this._sources[this.selected].option||`Demo`}"></blockquote-base-embedded-webview-element>
    `}_onChangeFile({target:e}){this.selected=e.selectedIndex,this._src=this._sources[this.selected].src}};window.customElements.define(`blockquote-base-embedded-webview`,ut);function dt(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function N(e,t,n){dt(e,t),t.set(e,n)}function P(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function F(e,t,n){return e.set(P(e,t),n),n}function I(e,t){return e.get(P(e,t))}function ft(e,t){dt(e,t),t.add(e)}function L(e){"@babel/helpers - typeof";return L=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},L(e)}function pt(e,t){if(L(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(L(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function mt(e){var t=pt(e,`string`);return L(t)==`symbol`?t:t+``}function R(e,t,n){return(t=mt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=new WeakMap,ht=class{constructor(e){N(this,z,void 0),F(z,this,typeof e==`function`?{next:e}:e)}next(e){if(G())try{var t,n;(t=I(z,this))==null||(n=t.next)==null||n.call(t,e)}catch(e){W(e)}}error(e,t=!0){var n;if(G()){if(!((n=I(z,this))!=null&&n.error)){W(e,t);return}try{I(z,this).error(e)}catch(e){W(e)}}}complete(){if(G())try{var e,t;(e=I(z,this))==null||(t=e.complete)==null||t.call(e)}catch(e){W(e)}}},gt=Symbol(`addObserver`),B=Symbol(`closeSubscriber`),_t=Symbol(`errorSubscriber`),vt=Symbol(`subscriberToken`),yt=Symbol(`propagateTeardownError`),bt=new WeakMap,xt;function St(e){let t=this.signal,n,r=!1;if(!t.aborted){let i=bt.get(t);if(i)for(let t of Array.from(i))try{t(e)}catch(e){r?W(e):(n=e,r=!0)}}if(xt.call(this,e),r)throw n}function Ct(e,t,n){var r;let i=(r=bt.get(e))==null?new Set:r;bt.set(e,i);let a=!0,o=e=>{a&&(a=!1,i.delete(o),t(e))};i.add(o),e.addEventListener(`abort`,()=>o(e.reason),n?{once:!0,signal:n}:{once:!0}),n==null||n.addEventListener(`abort`,()=>{a=!1,i.delete(o)},{once:!0})}var wt=new WeakMap,Tt=new WeakMap,V=new WeakMap,Et=new WeakMap,H=new WeakSet,U=class{constructor(...e){if(ft(this,H),N(this,wt,[]),N(this,Tt,!1),N(this,V,new Set),N(this,Et,new AbortController),e[0]!==vt)throw TypeError(`Illegal constructor`)}[gt](e){return I(V,this).add(e),t=>{I(V,this).delete(e),I(V,this).size===0&&this[B](t)}}[B](e){if(!this.active)return;F(Tt,this,!0);let t,n=!1;try{I(Et,this).abort(e)}catch(e){t=e,n=!0}I(V,this).clear();let r=I(wt,this);F(wt,this,[]);for(let e=r.length-1;e>=0;e--){let i=r[e];try{i()}catch(e){i[yt]&&!n?(t=e,n=!0):W(e)}}if(n)throw t}get active(){return!I(Tt,this)}get signal(){return I(Et,this).signal}addTeardown(e){if(P(H,this,Dt).call(this),arguments.length===0||typeof e!=`function`)throw TypeError(`Subscriber.addTeardown requires a callback`);if(!this.active){e();return}I(wt,this).push(e)}next(e){if(P(H,this,Dt).call(this),arguments.length===0)throw TypeError(`Subscriber.next requires a value`);if(this.active){let t=Array.from(I(V,this));for(let n of t)n.next(e)}}error(e){if(P(H,this,Dt).call(this),arguments.length===0)throw TypeError(`Subscriber.error requires an error`);this[_t](e,!0)}[_t](e,t){if(!this.active){W(e,t);return}let n=Array.from(I(V,this));this[B](e);for(let r of n)r.error(e,t)}complete(){if(P(H,this,Dt).call(this),this.active){let e=Array.from(I(V,this));this[B]();for(let t of e)t.complete()}}};function Dt(){}function W(e,t=!0){if(G()){if(t&&globalThis.reportError){globalThis.reportError(e);return}if(typeof ErrorEvent==`function`&&typeof globalThis.dispatchEvent==`function`){let n=e instanceof Error,r=new ErrorEvent(`error`,{cancelable:!0,colno:+!!t,error:e,lineno:+!!t,message:n?e.message:String(e)});r.preventDefault(),globalThis.dispatchEvent(r);return}if(globalThis.reportError){globalThis.reportError(e);return}globalThis.setTimeout(()=>{throw e})}}function Ot(e){if(typeof PromiseRejectionEvent==`function`&&typeof globalThis.dispatchEvent==`function`){let t=new PromiseRejectionEvent(`unhandledrejection`,{cancelable:!0,promise:Promise.resolve(),reason:e});t.preventDefault(),globalThis.dispatchEvent(t);return}Promise.reject(e)}var kt=typeof window<`u`&&typeof document<`u`&&window.parent!==window;function G(){return!kt||window.frameElement!==null}function K(e){return typeof e==`object`&&!!e||typeof e==`function`}function At(e){let t=Number(e);if(!Number.isFinite(t)||t===0)return 0;let n=Math.trunc(t),r=2**64;if(n>0&&n<r)return n;let i=n%r;return i<0?i+r:i}function q(e,t){let n=e[t];if(n!=null){if(typeof n!=`function`)throw TypeError(`${String(t)} must be callable`);return n}}function jt(e){let t=q(e,Symbol.iterator);if(!t)throw TypeError(`Object does not define a callable Symbol.iterator method`);let n=t.call(e);if(!K(n))throw TypeError(`Symbol.iterator must return an object`);let r=q(n,`next`);if(!r)throw TypeError(`Iterator must define a callable next() method`);return{iterator:n,next:r}}function Mt(e){let t=q(e,Symbol.asyncIterator);if(t){let n=t.call(e);if(!K(n))throw TypeError(`Symbol.asyncIterator must return an object`);return{iterator:n}}return{iterator:jt(e).iterator}}function Nt(e,t){let n=q(e.iterator,`return`);if(n&&!K(n.call(e.iterator,t)))throw TypeError(`Iterator return() must return an Object`)}function Pt(e,t){let n;try{let r=q(e.iterator,`return`);if(!r)return;n=r.call(e.iterator,t)}catch(e){globalThis.queueMicrotask(()=>Ot(e));return}Promise.resolve(n).then(e=>{K(e)||Ot(TypeError(`Iterator return() must return an Object`))},e=>Ot(e))}function Ft(e,t){return new e(e=>{if(!e.active)return;let n;try{n=jt(t)}catch(t){e.error(t);return}if(!e.active)return;let r=!1,i=()=>{r||Nt(n,e.signal.reason)};i[yt]=!0,e.addTeardown(i);try{for(;e.active;){let t=n.next.call(n.iterator);if(!K(t))throw TypeError(`Iterator next() must return an Object`);let i=t;if(i.done){r=!0,e.complete();return}e.next(i.value)}}catch(t){e.error(t)}})}function It(e,t){return new e(e=>{if(!e.active)return;let n;try{n=Mt(t)}catch(t){e.error(t);return}if(!e.active)return;let r=!1,i;e.addTeardown(()=>{r||Pt(n,e.signal.reason)});let a=()=>{if(!e.active)return;let t;try{if(i!=null||(i=q(n.iterator,`next`)),!i)throw TypeError(`Iterator must define a callable next() method`);t=i.call(n.iterator)}catch(t){globalThis.queueMicrotask(()=>e.error(t));return}Promise.resolve(t).then(t=>{try{if(!K(t))throw TypeError(`Iterator next() must return an Object`);let n=t;if(n.done){r=!0,e.active&&e.complete();return}if(!e.active)return;e.next(n.value),a()}catch(t){e.error(t)}},t=>e.error(t))};a()})}var Lt=new WeakMap,Rt=new WeakMap,J=class{static from(e){if(e instanceof Observable)return e;if(!K(e))throw TypeError(`${String(e)} is not observable`);let t=Vt(this);if(q(e,Symbol.asyncIterator))return It(t,e);if(q(e,Symbol.iterator))return Ft(t,e);if(q(e,`then`))return new t(t=>{Promise.resolve(e).then(e=>{t.next(e),t.complete()},e=>t[_t](e,!1))});throw TypeError(`${String(e)} is not observable`)}constructor(e){if(N(this,Lt,null),N(this,Rt,void 0),typeof e!=`function`)throw TypeError(`Observable constructor requires a callback`);F(Rt,this,e)}subscribe(e={},t={}){var n;if(!G())return;let r=(n=I(Lt,this))==null?void 0:n.deref(),i=!(r!=null&&r.active);i&&(r=new U(vt),F(Lt,this,new WeakRef(r)));let a=new ht(e),o=t.signal;if(o!=null&&o.aborted)i&&r[B](o.reason);else{let e=r[gt](a);o&&Ct(o,e,r.signal)}if(i)try{I(Rt,this).call(this,r)}catch(e){r.error(e)}}takeUntil(e){return new(X(this))(t=>{Observable.from(e).subscribe({next:()=>t.complete(),error:()=>t.complete()},{signal:t.signal}),t.active&&this.subscribe(t,{signal:t.signal})})}map(e){return new(X(this))(t=>{let n=0;this.subscribe({next:r=>{let i;try{i=e(r,n++)}catch(e){t.error(e);return}t.next(i)},error:e=>t.error(e),complete:()=>t.complete()},{signal:t.signal})})}filter(e){return new(X(this))(t=>{let n=0;this.subscribe({next:r=>{let i;try{i=e(r,n++)}catch(e){t.error(e);return}i&&t.next(r)},error:e=>t.error(e),complete:()=>t.complete()},{signal:t.signal})})}take(e){return new(X(this))(t=>{let n=At(e);if(n<=0){t.complete();return}this.subscribe({next:e=>{n>0&&(n--,t.next(e)),n<=0&&t.complete()},error:e=>t.error(e),complete:()=>t.complete()},{signal:t.signal})})}drop(e){return new(X(this))(t=>{let n=At(e);this.subscribe({next:e=>{n<=0?t.next(e):n--},error:e=>t.error(e),complete:()=>t.complete()},{signal:t.signal})})}flatMap(e){return new(X(this))(t=>{let n=0,r=[],i=0,a=!1,o=s=>{let c;try{c=Observable.from(e(s,n++))}catch(e){t.error(e);return}i++,c.subscribe({next:e=>t.next(e),error:e=>t.error(e),complete:()=>{if(i--,r.length>0){o(r.shift());return}a&&i===0&&t.complete()}},{signal:t.signal})};this.subscribe({next:e=>{i<1?o(e):r.push(e)},error:e=>t.error(e),complete:()=>{a=!0,i===0&&r.length===0&&t.complete()}},{signal:t.signal})})}switchMap(e){return new(X(this))(t=>{let n=null,r=!1,i=0;this.subscribe({next:a=>{n&&(n.abort(),n=null);let o;try{o=Observable.from(e(a,i++))}catch(e){t.error(e);return}n=new AbortController,o.subscribe({next:e=>t.next(e),error:e=>t.error(e),complete:()=>{n=null,r&&t.complete()}},{signal:AbortSignal.any([n.signal,t.signal])})},error:e=>t.error(e),complete:()=>{r=!0,n||t.complete()}},{signal:t.signal})})}inspect(e){return new(X(this))(t=>{let n=typeof e==`function`?{next:e}:e;try{var r;(r=n.subscribe)==null||r.call(n)}catch(e){t.error(e);return}let i=!1,a=!1;Ct(t.signal,e=>{if(!i&&!a)try{var t;(t=n.abort)==null||t.call(n,e)}catch(e){W(e)}}),this.subscribe({next:e=>{try{var r;(r=n.next)==null||r.call(n,e)}catch(e){t.error(e);return}t.next(e)},error:e=>{a=!0;try{var r;(r=n.error)==null||r.call(n,e)}catch(e){t.error(e);return}t.error(e)},complete:()=>{i=!0;try{var e;(e=n.complete)==null||e.call(n)}catch(e){t.error(e);return}t.complete()}},{signal:t.signal})})}catch(e){return new(X(this))(t=>{this.subscribe({next:e=>t.next(e),error:n=>{let r;try{r=Observable.from(e(n))}catch(e){t.error(e);return}r.subscribe(t,{signal:t.signal})},complete:()=>t.complete()},{signal:t.signal})})}finally(e){return new(X(this))(t=>{t.addTeardown(e),this.subscribe(t,{signal:t.signal})})}forEach(e,t){let n=new Y(t);return this.subscribe({next:t=>{try{e(t)}catch(e){n.reject(e)}},error:e=>n.reject(e),complete:()=>n.resolve()},{signal:n.signal}),n.promise}first(e){let t=new Y(e);return this.subscribe({next:e=>t.resolve(e),error:e=>t.reject(e),complete:()=>t.reject(RangeError(`Observable completed without emitting a value`))},{signal:t.signal}),t.promise}last(e){let t=!1,n,r=new Y(e);return this.subscribe({next:e=>{t=!0,n=e},error:e=>r.reject(e),complete:()=>{t?r.resolve(n):r.reject(RangeError(`Observable completed without emitting a value`))}},{signal:r.signal}),r.promise}find(e,t){let n=new Y(t),r=0;return this.subscribe({next:t=>{let i;try{i=e(t,r++)}catch(e){n.reject(e);return}i&&n.resolve(t)},error:e=>n.reject(e),complete:()=>n.resolve(void 0)},{signal:n.signal}),n.promise}some(e,t){let n=new Y(t),r=0;return this.subscribe({next:t=>{let i;try{i=e(t,r++)}catch(e){n.reject(e);return}i&&n.resolve(!0)},error:e=>n.reject(e),complete:()=>n.resolve(!1)},{signal:n.signal}),n.promise}every(e,t){let n=new Y(t),r=0;return this.subscribe({next:t=>{let i;try{i=e(t,r++)}catch(e){n.reject(e);return}i||n.resolve(!1)},error:e=>n.reject(e),complete:()=>n.resolve(!0)},{signal:n.signal}),n.promise}reduce(e,t,n){let r=new Y(n),i=arguments.length>1,a=t,o=0;return this.subscribe({next:t=>{if(!i){a=t,i=!0,o=1;return}try{a=e(a,t,o++)}catch(e){r.reject(e)}},error:e=>r.reject(e),complete:()=>{i?r.resolve(a):r.reject(TypeError(`Reduce of empty observable with no initial value`))}},{signal:r.signal}),r.promise}toArray(e){let t=new Y(e,!0),n=[];return this.subscribe({next:e=>n.push(e),error:e=>t.reject(e),complete:()=>t.resolve(n)},{signal:t.signal}),t.promise}};Object.defineProperty(J,"name",{value:`Observable`}),Object.defineProperty(J.prototype,Symbol.toStringTag,{configurable:!0,value:`Observable`}),Object.defineProperty(U.prototype,Symbol.toStringTag,{configurable:!0,value:`Subscriber`});for(let e of[`next`,`error`,`complete`,`addTeardown`,`active`,`signal`]){let t=Object.getOwnPropertyDescriptor(U.prototype,e);Object.defineProperty(U.prototype,e,{...t,enumerable:!0})}var zt=Object.getOwnPropertyDescriptor(J.prototype,`subscribe`);Object.defineProperty(J.prototype,"subscribe",{...zt,enumerable:!0});var Y=class{get signal(){return this.abortController.signal}constructor(e,t=!1){R(this,`resolver`,void 0),R(this,`rejector`,void 0),R(this,`abortController`,new AbortController),R(this,`settled`,!1),R(this,`promise`,void 0);let n,r;this.promise=new Promise((e,t)=>{n=e,r=t}),this.promise.catch(()=>{}),this.resolver=n,this.rejector=r;let i=e==null?void 0:e.signal;if(i){let e=()=>this.reject(i.reason);i.aborted?e():t?Ct(i,e,this.abortController.signal):i.addEventListener(`abort`,e,{once:!0,signal:this.abortController.signal})}}resolve(e){this.settled||(this.settled=!0,this.resolver(e),this.abortController.abort())}reject(e){this.settled||(this.settled=!0,this.rejector(e),this.abortController.abort(e))}};function Bt(e,t){return new Observable(n=>{this.addEventListener(e,e=>n.next(e),{capture:t==null?void 0:t.capture,passive:t==null?void 0:t.passive,once:!1,signal:n.signal})})}function X(e){return e.constructor}function Vt(e){return e}var Ht=Symbol.for(`rxjs.observable.polyfill.info.v1`),Ut=Object.freeze({packageName:`@rxjs/observable-polyfill`,version:`9.0.0-beta.0`});Object.defineProperty(J,Ht,{configurable:!1,enumerable:!1,value:Ut,writable:!1});function Wt(e,t,n,r){let i=Object.getOwnPropertyDescriptor(e,t);if(!Gt(e,i,n))throw TypeError(`Cannot initialize @rxjs/observable-polyfill: ${r} is not writable or configurable`);return{key:t,label:r,next:n,previous:i,target:e}}function Gt(e,t,n){return t?t.configurable?!0:`value`in t&&`value`in n&&t.writable?n.configurable===!1&&n.enumerable===t.enumerable&&n.writable!==!1:!1:Object.isExtensible(e)}function Kt(e){let t=[];try{for(let n of e)Object.defineProperty(n.target,n.key,n.next),t.push(n)}catch(e){let n=[];for(let e=t.length-1;e>=0;e--){let r=t[e];try{r.previous?Object.defineProperty(r.target,r.key,r.previous):Reflect.deleteProperty(r.target,r.key)}catch(e){n.push(e)}}throw n.length>0?AggregateError([e,...n],`Cannot initialize @rxjs/observable-polyfill and could not fully restore the realm`):e}}function qt(){let e=[];if(globalThis.Observable===void 0){let t=globalThis.AbortController,n=t&&Object.getOwnPropertyDescriptor(t.prototype,`abort`);if(!t||!n||typeof n.value!=`function`)throw TypeError(`Cannot initialize @rxjs/observable-polyfill: AbortController.prototype.abort is unavailable`);xt=n.value,e.push(Wt(t.prototype,`abort`,{...n,value:St},`AbortController.prototype.abort`),Wt(globalThis,`Subscriber`,{configurable:!0,enumerable:!1,value:U,writable:!0},`globalThis.Subscriber`),Wt(globalThis,`Observable`,{configurable:!0,enumerable:!1,value:J,writable:!0},`globalThis.Observable`))}let t=globalThis.EventTarget;t&&t.prototype.when===void 0&&e.push(Wt(t.prototype,`when`,{configurable:!0,enumerable:!1,value:Bt,writable:!0},`EventTarget.prototype.when`)),Kt(e)}qt();function Jt(e){return e!=null&&e instanceof Observable}var Yt=`rxjs.kernel.create.v1`,Z=Symbol.for(Yt);$t(Observable),$t(Observable.prototype);function Xt(e){return new(Jt(this)?Zt(this):Qt(this))(e)}function Zt(e){return e.constructor}function Qt(e){return typeof e==`function`?e:Observable}function $t(e){let t=Object.getOwnPropertyDescriptor(e,Z);if(t){if(typeof t.value!=`function`)throw TypeError(`Cannot install the RxJS create protocol: ${Yt} is already occupied`);return}Object.defineProperty(e,Z,{configurable:!0,value:Xt,writable:!0})}Observable,Observable;var en=Observable,Q=new WeakMap,tn=new WeakMap,nn=new WeakMap,$=new WeakMap,rn=class extends en{get active(){return!I(Q,this)&&!I(tn,this)}constructor(){super(e=>{if(I(Q,this)){e.complete();return}if(I(tn,this)){e.error(I(nn,this));return}I($,this).add(e),e.addTeardown(()=>{I($,this).delete(e)})}),N(this,Q,!1),N(this,tn,!1),N(this,nn,null),N(this,$,new Set),R(this,Z,e=>new en(e))}next(e){if(this.active)for(let t of Array.from(I($,this)))t.next(e)}error(e){if(this.active){F(tn,this,!0),F(nn,this,e);let t=Array.from(I($,this));I($,this).clear();for(let n of t)n.error(e)}}complete(){if(this.active){F(Q,this,!0);let e=Array.from(I($,this));I($,this).clear();for(let t of e)t.complete()}}asObservable(){return new en(e=>{this.subscribe(e,{signal:e.signal})})}};Observable;var an,on;(function(e){e.NEXT=`N`,e.ERROR=`E`,e.COMPLETE=`C`})(on||(on={}));var sn=class e{constructor(e,t,n){R(this,`kind`,void 0),R(this,`value`,void 0),R(this,`error`,void 0),R(this,`hasValue`,void 0),this.kind=e,this.value=t,this.error=n,this.hasValue=e===`N`}observe(e){cn(this,e)}do(e,t,n){this.kind===`N`?e==null||e(this.value):this.kind===`E`?t==null||t(this.error):n==null||n()}accept(e,t,n){typeof e==`object`&&e?this.observe(e):this.do(e,t,n)}toObservable(){let{kind:e,value:t,error:n}=this;if(e!==`N`&&e!==`E`&&e!==`C`)throw TypeError(`Unexpected notification kind ${e}`);return new Observable(r=>{e===`N`?(r.next(t),r.complete()):e===`E`?r.error(n):r.complete()})}static createNext(t){return new e(`N`,t)}static createError(t){return new e(`E`,void 0,t)}static createComplete(){return e.completeNotification}};an=sn,R(sn,`completeNotification`,new an(`C`)),Object.freeze({kind:`C`});function cn(e,t){if(typeof e.kind!=`string`)throw TypeError(`Invalid notification, missing "kind"`);if(e.kind===`N`){var n;(n=t.next)==null||n.call(t,e.value)}else if(e.kind===`E`){var r;(r=t.error)==null||r.call(t,e.error)}else{var i;(i=t.complete)==null||i.call(t)}}function ln(e,t,n,r){let i=(e,n)=>e?(...n)=>{try{e(...n)}catch(e){t.error(e)}}:n,a=i(n==null?void 0:n.error,e=>t.error(e));try{e.subscribe({next:i(n==null?void 0:n.next,e=>t.next(e)),error:a,complete:i(n==null?void 0:n.complete,()=>t.complete())},{signal:r?AbortSignal.any([t.signal,r]):t.signal})}catch(e){a(e)}}var un=Symbol(`map`);function dn(e,t){return this[Z](n=>{let r=0;ln(this,n,{next(i){n.next(e.call(t,i,r++))}})})}Observable.prototype[un]=dn;function fn(e,t,n){return Observable[Z](r=>{let i=!1,a=!1,o=!1,s=!1,c,l=(...e)=>{if(!r.active)return;let t;if(n)try{t=n(...e)}catch(e){r.error(e);return}else t=e.length===1?e[0]:e;r.next(t)},u=()=>{if(!(!t||s)){if(!i){o=!0;return}a&&(s=!0,t(l,c))}};t&&r.addTeardown(u);try{c=e(l),a=!0}catch(e){i=!0,r.error(e);return}if(i=!0,o)try{u()}catch(e){r.error(e)}})}var pn=class{constructor(e){this.subscriptions=new Map,this.host=e,e.addController(this)}subscribe(e,t){let n=this.subscriptions.get(e);if(n){if(n.stream$===t)return t;n.controller.abort()}let r=new AbortController;return t.subscribe(t=>{e in this.host&&(this.host[e]=t),this.host.requestUpdate()},{signal:r.signal}),this.subscriptions.set(e,{stream$:t,controller:r}),t}hostDisconnected(){for(let{controller:e}of this.subscriptions.values())e.abort();this.subscriptions.clear()}};export{pn as BlockquoteControllerRxjs,j as LitElement,rn as Subject,fn as fromEventPattern,C as html,un as map};