var te=Object.defineProperty,ie=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var N=(e,t,i)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,M=(e,t)=>{for(var i in t||(t={}))re.call(t,i)&&N(e,i,t[i]);if(D)for(var i of D(t))oe.call(t,i)&&N(e,i,t[i]);return e},P=(e,t)=>ie(e,se(t));import{b as B,i as k,s as x,y as c,w as ne}from"./lit-element.177803ef.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ce=e=>(...t)=>({_$litDirective$:e,values:t});class le{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=(e,t)=>{var i,s;const r=e._$AN;if(r===void 0)return!1;for(const o of r)(s=(i=o)._$AO)===null||s===void 0||s.call(i,t,!1),w(o,t);return!0},_=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},j=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),be(t)}};function he(e){this._$AN!==void 0?(_(this),this._$AM=e,j(this)):this._$AM=e}function ue(e,t=!1,i=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=i;o<s.length;o++)w(s[o],!1),_(s[o]);else s!=null&&(w(s,!1),_(s));else w(this,e)}const be=e=>{var t,i,s,r;e.type==ae.CHILD&&((t=(s=e)._$AP)!==null&&t!==void 0||(s._$AP=ue),(i=(r=e)._$AQ)!==null&&i!==void 0||(r._$AQ=he))};class me extends le{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),j(this),this.isConnected=t._$AU}_$AO(t,i=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),i&&(w(this,t),_(this))}setValue(t){if(de(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=()=>new pe;class pe{}const E=new WeakMap,ge=ce(class extends me{render(e){return B}update(e,[t]){var i;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.dt)&&(this.Y=t,this.ct=(i=e.options)===null||i===void 0?void 0:i.host,this.rt(this.dt=e.element)),B}rt(e){var t;if(typeof this.Y=="function"){const i=(t=this.ct)!==null&&t!==void 0?t:globalThis;let s=E.get(i);s===void 0&&(s=new WeakMap,E.set(i,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ct,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ct,e)}else this.Y.value=e}get lt(){var e,t,i;return typeof this.Y=="function"?(t=E.get((e=this.ct)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.Y):(i=this.Y)===null||i===void 0?void 0:i.value}disconnected(){this.lt===this.dt&&this.rt(void 0)}reconnected(){this.rt(this.dt)}}),we=k`:host {
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

:host([data-resizing]) [aria-hidden=true] {
  opacity: 0.4;
}

:host([data-resizing]) [aria-hidden=true]::after {
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
}`;class O extends x{static get is(){return"blockquote-base-embedded-webview-size"}static get styles(){return[we]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"}}}constructor(){super(),this.showOverflowSize=!1,this.selected=0,this.screenSizes=[{width:360,height:640,id:"360x640"},{width:360,height:800,id:"360x800"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:800,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1,this._onResize=this._onResize.bind(this)}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return P(M({},this.selectedSize),{index:this.selected})}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((i,s)=>s.width-i.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const i=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(i)}}render(){return c`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return c`
      ${this.screenSizes.map((t,i)=>c`<button
          @click="${this._setSelected}"
          id="${t.id}"
          data-index="${i+1}"
          ?data-selected="${this.selected===i+1}"
          ?hidden="${!this.showOverflowSize&&t.width>this.computedStyleWidth}"
          style="${this.widthInPercent?`width: calc(100% / ${i+1});`:`width: ${t.width}px;`}"
        >
          <span>${t.id}</span>
        </button>`)}
    `}get _visualTextTpl(){return c` <span aria-disabled="true" aria-hidden="true">${this.selectedSize.id}</span>`}_onResize(t){t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const i=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(i)}}window.customElements.define(O.is,O);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ve=0,V=0,f=[],_e=0,T=!1,G=document.createTextNode("");new window.MutationObserver(ze).observe(G,{characterData:!0});function ze(){T=!1;const e=f.length;for(let t=0;t<e;t++){let i=f[t];if(i)try{i()}catch(s){setTimeout(()=>{throw s})}}f.splice(0,e),V+=e}const ye={run(e){return T||(T=!0,G.textContent=_e++),f.push(e),ve++},cancel(e){const t=e-V;if(t>=0){if(!f[t])throw new Error("invalid async handle: "+e);f[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ke=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let xe=!1,S=typeof document.head.style.touchAction=="string",z="__polymerGestures",$="__polymerGesturesHandled",C="__polymerGesturesTouchAction",Y=25,U=5,Ee=2,$e=["mousedown","mousemove","mouseup","click"],Re=[0,1,4,2],Te=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch(e){return!1}}();function A(e){return $e.indexOf(e)>-1}let K=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){K=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}})();function J(e){if(!(A(e)||e==="touchend")&&S&&K&&xe)return{passive:!0}}let Ce=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Se={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function m(e){let t=e.type;if(!A(t))return!1;if(t==="mousemove"){let i=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!Te&&(i=Re[e.which]||0),Boolean(i&1)}else return(e.button===void 0?0:e.button)===0}function Ae(e){if(e.type==="click"){if(e.detail===0)return!0;let t=u(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),s=e.pageX,r=e.pageY;return!(s>=i.left&&s<=i.right&&r>=i.top&&r<=i.bottom)}return!1}let h={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function qe(e){let t="auto",i=Z(e);for(let s=0,r;s<i.length;s++)if(r=i[s],r[C]){t=r[C];break}return t}function Q(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function p(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const Z=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],v={},b=[];function Le(e,t){let i=document.elementFromPoint(e,t),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(e,t),r===s)break;s&&(i=s)}return i}function u(e){const t=Z(e);return t.length>0?t[0]:e.target}function ee(e){let t,i=e.type,r=e.currentTarget[z];if(!r)return;let o=r[i];if(!!o){if(!e[$]&&(e[$]={},i.slice(0,5)==="touch")){e=e;let n=e.changedTouches[0];if(i==="touchstart"&&e.touches.length===1&&(h.touch.id=n.identifier),h.touch.id!==n.identifier)return;S||(i==="touchstart"||i==="touchmove")&&De(e)}if(t=e[$],!t.skip){for(let n=0,d;n<b.length;n++)d=b[n],o[d.name]&&!t[d.name]&&d.flow&&d.flow.start.indexOf(e.type)>-1&&d.reset&&d.reset();for(let n=0,d;n<b.length;n++)d=b[n],o[d.name]&&!t[d.name]&&(t[d.name]=!0,d[i](e))}}}function De(e){let t=e.changedTouches[0],i=e.type;if(i==="touchstart")h.touch.x=t.clientX,h.touch.y=t.clientY,h.touch.scrollDecided=!1;else if(i==="touchmove"){if(h.touch.scrollDecided)return;h.touch.scrollDecided=!0;let s=qe(e),r=!1,o=Math.abs(h.touch.x-t.clientX),n=Math.abs(h.touch.y-t.clientY);e.cancelable&&(s==="none"?r=!0:s==="pan-x"?r=n>o:s==="pan-y"&&(r=o>n)),r?e.preventDefault():y("track")}}function Ne(e,t,i){return v[t]?(Pe(e,t,i),!0):!1}function Me(e,t,i){return v[t]?(Be(e,t,i),!0):!1}function Pe(e,t,i){let s=v[t],r=s.deps,o=s.name,n=e[z];n||(e[z]=n={});for(let d=0,a,l;d<r.length;d++)a=r[d],!(Ce&&A(a)&&a!=="click")&&(l=n[a],l||(n[a]=l={_count:0}),l._count===0&&e.addEventListener(a,ee,J(a)),l[o]=(l[o]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,i),s.touchAction&&Ye(e,s.touchAction)}function Be(e,t,i){let s=v[t],r=s.deps,o=s.name,n=e[z];if(n)for(let d=0,a,l;d<r.length;d++)a=r[d],l=n[a],l&&l[o]&&(l[o]=(l[o]||1)-1,l._count=(l._count||1)-1,l._count===0&&e.removeEventListener(a,ee,J(a)));e.removeEventListener(t,i)}function q(e){b.push(e);for(let t=0;t<e.emits.length;t++)v[e.emits[t]]=e}function Oe(e){for(let t=0,i;t<b.length;t++){i=b[t];for(let s=0,r;s<i.emits.length;s++)if(r=i.emits[s],r===e)return i}return null}function Ye(e,t){S&&e instanceof HTMLElement&&ye.run(()=>{e.style.touchAction=t}),e[C]=t}function L(e,t,i){let s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,ke(e).dispatchEvent(s),s.defaultPrevented){let r=i.preventer||i.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function y(e){let t=Oe(e);t.info&&(t.info.prevent=!0)}q({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){p(this.info)},mousedown:function(e){if(!m(e))return;let t=u(e),i=this,s=function(n){m(n)||(g("up",t,n),p(i.info))},r=function(n){m(n)&&g("up",t,n),p(i.info)};Q(this.info,s,r),g("down",t,e)},touchstart:function(e){g("down",u(e),e.changedTouches[0],e)},touchend:function(e){g("up",u(e),e.changedTouches[0],e)}});function g(e,t,i,s){!t||L(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(r){return y(r)}})}q({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>Ee&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,p(this.info)},mousedown:function(e){if(!m(e))return;let t=u(e),i=this,s=function(n){let d=n.clientX,a=n.clientY;I(i.info,d,a)&&(i.info.state=i.info.started?n.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&y("tap"),i.info.addMove({x:d,y:a}),m(n)||(i.info.state="end",p(i.info)),t&&R(i.info,t,n),i.info.started=!0)},r=function(n){i.info.started&&s(n),p(i.info)};Q(this.info,s,r),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=u(e),i=e.changedTouches[0],s=i.clientX,r=i.clientY;I(this.info,s,r)&&(this.info.state==="start"&&y("tap"),this.info.addMove({x:s,y:r}),R(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=u(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),R(this.info,t,i))}});function I(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let s=Math.abs(e.x-t),r=Math.abs(e.y-i);return s>=U||r>=U}function R(e,t,i){if(!t)return;let s=e.moves[e.moves.length-2],r=e.moves[e.moves.length-1],o=r.x-e.x,n=r.y-e.y,d,a=0;s&&(d=r.x-s.x,a=r.y-s.y),L(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:o,dy:n,ddx:d,ddy:a,sourceEvent:i,hover:function(){return Le(i.clientX,i.clientY)}})}q({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){m(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){m(e)&&H(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){H(this.info,e.changedTouches[0],e)}});function H(e,t,i){let s=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),o=u(i||t);!o||Se[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=Y&&r<=Y||Ae(t))&&(e.prevent||L(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}const Ue=k`:host {
  --__resizer-factor: calc(1.25rem * var(--blockquote-base-embedded-webview-resize-factor, 1));
  --_rect-transition: var(--blockquote-base-embedded-webview-resize-rect-transition, width 90ms cubic-bezier(0.25, 0.46, 0.45, 0.94), height 90ms cubic-bezier(0.25, 0.46, 0.45, 0.94));
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
.resizer-n {
  height: calc(var(--__resizer-factor) / 4);
  top: calc(var(--__resizer-factor) / 4 * -1);
  left: calc(var(--__resizer-factor) * -1);
  width: calc(100% + var(--__resizer-factor) * 2);
}
.resizer-n::after {
  content: none;
}
.resizer-se {
  cursor: nwse-resize;
}
.resizer-se::after {
  transform: translate(-50%, -50%);
}
.resizer-sw {
  cursor: nesw-resize;
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
}`;class X extends x{static get is(){return"blockquote-base-embedded-webview-resize"}static get styles(){return[Ue]}constructor(){super(),this._resizer=this._resizer.bind(this),this._removeResizer=this._removeResizer.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._doubleclickForCssInitialSize=this._doubleclickForCssInitialSize.bind(this)}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.rect=this.shadowRoot.querySelector(".rect"),this.bottomRightResizerElement=this.shadowRoot.querySelector(".resizer-se"),this.bottomLeftResizerElement=this.shadowRoot.querySelector(".resizer-sw"),this.rightResizerElement=this.shadowRoot.querySelector(".resizer-e"),this.leftResizerElement=this.shadowRoot.querySelector(".resizer-w"),this.bottomResizerElement=this.shadowRoot.querySelector(".resizer-s"),this.leftResizerElement.addEventListener("mousedown",this._createResizerLeft),this.rightResizerElement.addEventListener("mousedown",this._createResizerRight),this.bottomResizerElement.addEventListener("mousedown",this._createResizerBottom),this.bottomLeftResizerElement.addEventListener("mousedown",this._createResizerBottomLeft),this.bottomRightResizerElement.addEventListener("mousedown",this._createResizerBottomRight),this.bottomResizerElement.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return c`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `}get _resizersTpl(){return c`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `}_doubleclickForCssInitialSize(){this.removeAttribute("style")}_createResizer(t){this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height"),this.setAttribute("resizing",""),Ne(document,"track",this._resizer),document.addEventListener("mouseup",this._removeResizer)}_removeResizer(){this.removeAttribute("resizing"),Me(document,"track",this._resizer),document.removeEventListener("mouseup",this._removeResizer),this._dispatchResizeEvent()}_resizer({detail:t}){let i,s;const r=Math.floor(t.dx*2),o=Math.floor(t.dy*1.1);switch(this._getBoundingClientRecDOMRect){case"right":i=`${this._getBoundingClientRectWidth-r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"left":i=`${this._getBoundingClientRectWidth+r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"top":s=`${this._getBoundingClientRectHeight+o*1}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopLeft":i=`${this._getBoundingClientRectWidth+r}px`,s=`${this._getBoundingClientRectHeight+o*1}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopRight":i=`${this._getBoundingClientRectWidth-r}px`,s=`${this._getBoundingClientRectHeight+o*1}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{bubbles:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing")}});this.dispatchEvent(t)}_getBoundingClientRect(t){return Math.abs(parseInt(this.rect.getBoundingClientRect()[t],10))}}window.customElements.define(X.is,X);const Ie=k`:host,
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
}`;class F extends x{static get is(){return"blockquote-base-embedded-webview-element"}static get styles(){return[Ie]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}constructor(){super(),this.embeddedTitle="",this.src="",this.type="iframe",this._onLoadElement=this._onLoadElement.bind(this)}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement),this.append(this._embeddedElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("src")&&this.src!==""&&this._fetch(this.src)}render(){return c` ${this._embeddedTpl} `}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return c`<slot name="embedded"></slot>`}_fetch(t){t&&(Object.assign(this._embeddedElement,this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),this._embeddedElement[this._loadResource]=t,window.performance.mark("iframestart"),Object.assign(this._embeddedElement.style,t.indexOf("http")!==0&&{opacity:0}))}_onLoadElement({target:t}){if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const i=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(i)}}window.customElements.define(F.is,F);const He=k`:host {
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
  margin: 0 0 1rem;
  font-size: 0.875rem;
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
}`,Xe=ne`<svg aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<polyline points="6 9 12 15 18 9" />
</svg>`;class W extends x{static get is(){return"blockquote-base-embedded-webview"}static get styles(){return[He]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0}}}constructor(){super(),this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=Xe,this.__readDataPos={x:0,y:0,resizing:!1},this.limitHeight=!1,this._sources=[{file:"",option:"",description:""}],this._updateSize=this._updateSize.bind(this),this._embeddedResizeRef=fe()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("webviewresize",({detail:i})=>{Object.assign(this.__readDataPos,i),this.__resetResizing=!0,this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(i=>{const{src:s,option:r,description:o}=i.dataset;return{src:s,option:r,description:o}}),this._src=this._sources[this.selected].src)}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.embedded=this.shadowRoot.querySelector('[slot="embedded"]'),this.append(this.embedded)}_updateSize({detail:t}){this._embeddedResizeRef.value.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),this._embeddedResizeRef.value.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return c` ${this._headerTpl} ${this._mainTpl} `}get _headerTpl(){return c`
      <header>
        <div>
          ${this._headingTpl} ${this._selectTpl} ${this._descriptionTpl} ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return c`<div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>`}get _selectTpl(){return c`
      <div class="select">
        <select @change="${this._onChangeFile}" aria-label="Cases">
          ${this._sources.map((t,i)=>c`
              <option ?selected="${this.selected===i}" value="${i}">
                ${t.option}
              </option>
            `)}
        </select>
        ${this.__selectArrow}
      </div>
    `}get _descriptionTpl(){return c` <p class="description">${this._sources[this.selected].description}</p>`}get _readDataPosTpl(){return c`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing?1:0}"
      >
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return c` <blockquote-base-embedded-webview-size
      ?data-resizing="${this.__resetResizing}"
      @click="${this._updateSize}"
      @selectedchange="${this._updateSize}"
      .selected="${this.screenSizeSelected}"
    ></blockquote-base-embedded-webview-size>`}get _mainTpl(){return c`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${ge(this._embeddedResizeRef)}>
          <slot name="embedded"> ${this._embeddedSlotTpl} </slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return c` <blockquote-base-embedded-webview-element
      slot="embedded"
      .src="${this._src}"
      .embeddedTitle="${this._sources[this.selected].option}"
    >
    </blockquote-base-embedded-webview-element>`}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define(W.is,W);
