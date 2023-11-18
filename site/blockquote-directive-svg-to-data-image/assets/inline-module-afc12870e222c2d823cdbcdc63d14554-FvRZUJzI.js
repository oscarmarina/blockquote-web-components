import{a as Q,f as K,t as ee,e as te,T as H,i as R,s as E,x as a,j as G}from"./directive-helpers-cpr_zHCT.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=(e,t)=>{var s;const i=e._$AN;if(i===void 0)return!1;for(const r of i)(s=r._$AO)==null||s.call(r,t,!1),z(r,t);return!0},k=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},U=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),re(t)}};function ie(e){this._$AN!==void 0?(k(this),this._$AM=e,U(this)):this._$AM=e}function se(e,t=!1,i=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=i;o<s.length;o++)z(s[o],!1),k(s[o]);else s!=null&&(z(s,!1),k(s));else z(this,e)}const re=e=>{var t,i;e.type==ee.CHILD&&((t=e._$AP)!=null||(e._$AP=se),(i=e._$AQ)!=null||(e._$AQ=ie))};let oe=class extends Q{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),U(this),this.isConnected=t._$AU}_$AO(t,i=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),i&&(z(this,t),k(this))}setValue(t){if(K(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=()=>new de;let de=class{};const S=new WeakMap,ae=te(class extends oe{render(e){return H}update(e,[t]){var s;const i=t!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=t,this.ct=(s=e.options)==null?void 0:s.host,this.ot(this.lt=e.element)),H}ot(e){var t;if(typeof this.G=="function"){const i=(t=this.ct)!=null?t:globalThis;let s=S.get(i);s===void 0&&(s=new WeakMap,S.set(i,s)),s.get(this.G)!==void 0&&this.G.call(this.ct,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t,i;return typeof this.G=="function"?(t=S.get((e=this.ct)!=null?e:globalThis))==null?void 0:t.get(this.G):(i=this.G)==null?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),ce=R`:host {
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
}`;class le extends E{static get styles(){return[ce]}static get properties(){return{screenSizes:{type:Array,attribute:"screen-sizes"},selected:{type:Number},widthInPercent:{type:Boolean,attribute:"width-in-percent"},showOverflowSize:{type:Boolean,attribute:"show-overflow-size"},disabledSelectedSizeText:{type:Boolean,attribute:"disabled-selected-size-text"}}}constructor(){super(),this.showOverflowSize=!1,this.selected=0,this.disabledSelectedSizeText=!1,this.screenSizes=[{width:360,height:640,id:"360x640"},{width:360,height:800,id:"360x800"},{width:414,height:896,id:"414x896"},{width:768,height:1024,id:"768x1024"},{width:810,height:1080,id:"810x1080"},{width:1280,height:800,id:"1280x800"},{width:1366,height:768,id:"1366x768"},{width:1536,height:864,id:"1536x864"},{width:1920,height:1080,id:"1920x1080"}],this.widthInPercent=!1,this._onResize=this._onResize.bind(this)}get selectedSize(){return this.screenSizes[this.selected-1]}get selectedDetail(){return{...this.selectedSize,index:this.selected}}get computedStyleWidth(){return parseInt(window.getComputedStyle(this).width,10)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}willUpdate(t){super.willUpdate&&super.willUpdate(t),t.has("screenSizes")&&this.screenSizes.sort((i,s)=>s.width-i.width),t.has("selected")&&(this.selected>this.screenSizes.length||this.selected===0)&&(this.selected=this.screenSizes.length)}updated(t){if(super.updated&&super.updated(t),t.has("selected")){const i=new CustomEvent("selectedchange",{bubbles:!0,detail:this.selectedDetail});this.dispatchEvent(i)}}render(){return a`
      <div class="rect">
        ${this._toolbarTpl}
        ${this._visualTextTpl}
        </div>
      </div>
    `}get _toolbarTpl(){return a`
      ${this.screenSizes.map((t,i)=>a`<button
            @click="${this._setSelected}"
            id="${t.id}"
            data-index="${i+1}"
            ?data-selected="${this.selected===i+1}"
            ?hidden="${!this.showOverflowSize&&t.width>this.computedStyleWidth}"
            style="${this.widthInPercent?`width: calc(100% / ${i+1});`:`width: ${t.width}px;`}"
          >
            <span>${t.id}</span>
          </button>`)}
    `}get _visualTextTpl(){return a` <span aria-disabled="${this.disabledSelectedSizeText}" aria-hidden="true"
      >${this.selectedSize.id}</span
    >`}_onResize(t){t.preventDefault(),t.stopPropagation(),window.requestAnimationFrame(()=>{this.requestUpdate()})}_setSelected(t){t.preventDefault(),t.stopPropagation(),this.selected=Number(t.target.dataset.index);const i=new CustomEvent("click",{detail:this.selectedDetail});this.dispatchEvent(i)}}window.customElements.define("blockquote-base-embedded-webview-size",le);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let he=0,W=0,v=[],ue=0,D=!1,F=document.createTextNode("");new window.MutationObserver(function(){D=!1;const e=v.length;for(let t=0;t<e;t++){let i=v[t];if(i)try{i()}catch(s){setTimeout(()=>{throw s})}}v.splice(0,e),W+=e}).observe(F,{characterData:!0});const be={run:e=>(D||(D=!0,F.textContent=ue++),v.push(e),he++),cancel(e){const t=e-W;if(t>=0){if(!v[t])throw new Error("invalid async handle: "+e);v[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const me=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let V=typeof document.head.style.touchAction=="string",M="__polymerGestures",q="__polymerGesturesHandled",B="__polymerGesturesTouchAction",pe=["mousedown","mousemove","mouseup","click"],ge=[0,1,4,2],fe=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function j(e){return pe.indexOf(e)>-1}let we=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){we=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();let ve=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const _e={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function g(e){let t=e.type;if(!j(t))return!1;if(t==="mousemove"){let i=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!fe&&(i=ge[e.which]||0),!!(1&i)}return(e.button===void 0?0:e.button)===0}let m={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Y(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function w(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const Z=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],y={},f=[];function ze(e,t){let i=document.elementFromPoint(e,t),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(e,t),r===s)break;s&&(i=s)}return i}function p(e){const t=Z(e);return t.length>0?t[0]:e.target}function J(e){let t,i=e.type,s=e.currentTarget.__polymerGestures;if(!s)return;let r=s[i];if(r){if(!e[q]&&(e[q]={},i.slice(0,5)==="touch")){let o=e.changedTouches[0];if(i==="touchstart"&&e.touches.length===1&&(m.touch.id=o.identifier),m.touch.id!==o.identifier)return;V||i!=="touchstart"&&i!=="touchmove"||function(n){let h=n.changedTouches[0],l=n.type;if(l==="touchstart")m.touch.x=h.clientX,m.touch.y=h.clientY,m.touch.scrollDecided=!1;else if(l==="touchmove"){if(m.touch.scrollDecided)return;m.touch.scrollDecided=!0;let u=function(x){let N="auto",O=Z(x);for(let C,T=0;T<O.length;T++)if(C=O[T],C[B]){N=C[B];break}return N}(n),c=!1,d=Math.abs(m.touch.x-h.clientX),b=Math.abs(m.touch.y-h.clientY);n.cancelable&&(u==="none"?c=!0:u==="pan-x"?c=b>d:u==="pan-y"&&(c=d>b)),c?n.preventDefault():$("track")}}(e)}if(t=e[q],!t.skip){for(let o,n=0;n<f.length;n++)o=f[n],r[o.name]&&!t[o.name]&&o.flow&&o.flow.start.indexOf(e.type)>-1&&o.reset&&o.reset();for(let o,n=0;n<f.length;n++)o=f[n],r[o.name]&&!t[o.name]&&(t[o.name]=!0,o[i](e))}}}function ye(e,t,i){return!!y[t]&&(function(s,r,o){let n=y[r],h=n.deps,l=n.name,u=s[M];u||(s[M]=u={});for(let c,d,b=0;b<h.length;b++)c=h[b],ve&&j(c)&&c!=="click"||(d=u[c],d||(u[c]=d={_count:0}),d._count===0&&s.addEventListener(c,J,void 0),d[l]=(d[l]||0)+1,d._count=(d._count||0)+1);s.addEventListener(r,o),n.touchAction&&ke(s,n.touchAction)}(e,t,i),!0)}function xe(e,t,i){return!!y[t]&&(function(s,r,o){let n=y[r],h=n.deps,l=n.name,u=s[M];if(u)for(let c,d,b=0;b<h.length;b++)c=h[b],d=u[c],d&&d[l]&&(d[l]=(d[l]||1)-1,d._count=(d._count||1)-1,d._count===0&&s.removeEventListener(c,J,void 0));s.removeEventListener(r,o)}(e,t,i),!0)}function L(e){f.push(e);for(let t=0;t<e.emits.length;t++)y[e.emits[t]]=e}function ke(e,t){V&&e instanceof HTMLElement&&be.run(()=>{e.style.touchAction=t}),e[B]=t}function P(e,t,i){let s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,me(e).dispatchEvent(s),s.defaultPrevented){let r=i.preventer||i.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function $(e){let t=function(i){for(let s,r=0;r<f.length;r++){s=f[r];for(let o,n=0;n<s.emits.length;n++)if(o=s.emits[n],o===i)return s}return null}(e);t.info&&(t.info.prevent=!0)}function _(e,t,i,s){t&&P(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(r){return $(r)}})}function I(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let s=Math.abs(e.x-t),r=Math.abs(e.y-i);return s>=5||r>=5}function A(e,t,i){if(!t)return;let s,r=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],n=o.x-e.x,h=o.y-e.y,l=0;r&&(s=o.x-r.x,l=o.y-r.y),P(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:n,dy:h,ddx:s,ddy:l,sourceEvent:i,hover:function(){return ze(i.clientX,i.clientY)}})}function X(e,t,i){let s=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),o=p(i||t);!o||_e[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=25&&r<=25||function(n){if(n.type==="click"){if(n.detail===0)return!0;let h=p(n);if(!h.nodeType||h.nodeType!==Node.ELEMENT_NODE)return!0;let l=h.getBoundingClientRect(),u=n.pageX,c=n.pageY;return!(u>=l.left&&u<=l.right&&c>=l.top&&c<=l.bottom)}return!1}(t))&&(e.prevent||P(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}L({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){w(this.info)},mousedown:function(e){if(!g(e))return;let t=p(e),i=this;Y(this.info,function(s){g(s)||(_("up",t,s),w(i.info))},function(s){g(s)&&_("up",t,s),w(i.info)}),_("down",t,e)},touchstart:function(e){_("down",p(e),e.changedTouches[0],e)},touchend:function(e){_("up",p(e),e.changedTouches[0],e)}}),L({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,w(this.info)},mousedown:function(e){if(!g(e))return;let t=p(e),i=this,s=function(r){let o=r.clientX,n=r.clientY;I(i.info,o,n)&&(i.info.state=i.info.started?r.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&$("tap"),i.info.addMove({x:o,y:n}),g(r)||(i.info.state="end",w(i.info)),t&&A(i.info,t,r),i.info.started=!0)};Y(this.info,s,function(r){i.info.started&&s(r),w(i.info)}),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=p(e),i=e.changedTouches[0],s=i.clientX,r=i.clientY;I(this.info,s,r)&&(this.info.state==="start"&&$("tap"),this.info.addMove({x:s,y:r}),A(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=p(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),A(this.info,t,i))}}),L({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){g(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){g(e)&&X(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){X(this.info,e.changedTouches[0],e)}});const $e=R`:host {
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
}`;class Re extends E{static get styles(){return[$e]}constructor(){super(),this._cursor="",this._resizer=this._resizer.bind(this),this._removeResizer=this._removeResizer.bind(this),this._createResizerLeft=this._createResizer.bind(this,"right"),this._createResizerRight=this._createResizer.bind(this,"left"),this._createResizerBottom=this._createResizer.bind(this,"top"),this._createResizerBottomLeft=this._createResizer.bind(this,"scaleTopRight"),this._createResizerBottomRight=this._createResizer.bind(this,"scaleTopLeft"),this._doubleclickForCssInitialSize=this._doubleclickForCssInitialSize.bind(this),this._getBoundingClientRectWidth=0,this._getBoundingClientRectHeight=0}firstUpdated(t){var i,s,r,o,n,h,l,u,c,d,b,x;super.firstUpdated&&super.firstUpdated(t),this.rect=(i=this.shadowRoot)==null?void 0:i.querySelector(".rect"),this.bottomRightResizerElement=(s=this.shadowRoot)==null?void 0:s.querySelector(".resizer-se"),this.bottomLeftResizerElement=(r=this.shadowRoot)==null?void 0:r.querySelector(".resizer-sw"),this.rightResizerElement=(o=this.shadowRoot)==null?void 0:o.querySelector(".resizer-e"),this.leftResizerElement=(n=this.shadowRoot)==null?void 0:n.querySelector(".resizer-w"),this.bottomResizerElement=(h=this.shadowRoot)==null?void 0:h.querySelector(".resizer-s"),(l=this.leftResizerElement)==null||l.addEventListener("mousedown",this._createResizerLeft),(u=this.rightResizerElement)==null||u.addEventListener("mousedown",this._createResizerRight),(c=this.bottomResizerElement)==null||c.addEventListener("mousedown",this._createResizerBottom),(d=this.bottomLeftResizerElement)==null||d.addEventListener("mousedown",this._createResizerBottomLeft),(b=this.bottomRightResizerElement)==null||b.addEventListener("mousedown",this._createResizerBottomRight),(x=this.bottomResizerElement)==null||x.addEventListener("dblclick",this._doubleclickForCssInitialSize)}render(){return a`
      <div class="rect">
        ${this._resizersTpl}
        <slot></slot>
      </div>
    `}get _resizersTpl(){return a`
      <span aria-hidden="true" class="resizer resizer-n"></span>
      <span aria-hidden="true" class="resizer resizer-e"></span>
      <span aria-hidden="true" class="resizer resizer-s"></span>
      <span aria-hidden="true" class="resizer resizer-w"></span>
      <span aria-hidden="true" class="resizer resizer-se"></span>
      <span aria-hidden="true" class="resizer resizer-sw"></span>
    `}_doubleclickForCssInitialSize(){this.removeAttribute("style")}_createResizer(t){this._getBoundingClientRecDOMRect=t,this._getBoundingClientRectWidth=this._getBoundingClientRect("width"),this._getBoundingClientRectHeight=this._getBoundingClientRect("height"),this.setAttribute("resizing",""),ye(document,"track",this._resizer),document.addEventListener("mouseup",this._removeResizer)}_removeResizer(){this.removeAttribute("resizing"),xe(document,"track",this._resizer),document.removeEventListener("mouseup",this._removeResizer),this._dispatchResizeEvent()}_resizer({detail:t}){let i,s;const r=Math.floor(t.dx*2.02),o=Math.floor(t.dy*1.02);switch(this._getBoundingClientRecDOMRect){case"right":this._cursor="w",i=`${this._getBoundingClientRectWidth-r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"left":this._cursor="e",i=`${this._getBoundingClientRectWidth+r}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i);break;case"top":this._cursor="n",s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopLeft":this._cursor="ne",i=`${this._getBoundingClientRectWidth+r}px`,s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break;case"scaleTopRight":this._cursor="nw",i=`${this._getBoundingClientRectWidth-r}px`,s=`${this._getBoundingClientRectHeight+o}px`,this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",i),this.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",s);break}this._dispatchResizeEvent()}_dispatchResizeEvent(){const t=new CustomEvent("webviewresize",{bubbles:!0,detail:{x:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-width"),y:getComputedStyle(this).getPropertyValue("--blockquote-base-embedded-webview-resize-rect-height"),resizing:this.hasAttribute("resizing"),cursor:this._cursor}});this.dispatchEvent(t)}_getBoundingClientRect(t){var i;return Math.abs(parseInt((i=this.rect)==null?void 0:i.getBoundingClientRect()[t],10))}}window.customElements.define("blockquote-base-embedded-webview-resize",Re);const Ee=R`:host,
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
}`;class Ce extends E{static get styles(){return[Ee]}static get properties(){return{embeddedTitle:{type:String,attribute:"embedded-title"},src:{type:String},type:{type:String}}}constructor(){super(),this.embeddedTitle="",this.src="",this.type="iframe",this._onLoadElement=this._onLoadElement.bind(this)}connectedCallback(){this._embeddedElement||(super.connectedCallback&&super.connectedCallback(),this._embeddedElement=document.createElement(this.type),Object.assign(this._embeddedElement,{slot:"embedded"}),this._embeddedElement.addEventListener("load",this._onLoadElement))}willUpdate(t){super.willUpdate&&super.willUpdate(t),(t.has("src")||t.has("embeddedTitle"))&&this.src!==""&&this._fetch(this.src)}render(){return a` ${this._embeddedTpl} ${this._litHtmlRender()} `}_litHtmlRender(){G(this._lightDomTpl,this)}get _lightDomTpl(){return this._embeddedElement}get _loadResource(){return this.type==="iframe"?"src":"data"}get _embeddedTpl(){return a`<slot name="embedded"></slot>`}_fetch(t){var i,s,r,o;t&&(Object.assign((i=this._embeddedElement)!=null?i:{},this.type==="iframe"&&{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0,loading:"lazy"},this.embeddedTitle&&{title:this.embeddedTitle}),Object.assign((s=this._embeddedElement)!=null?s:{},{[this._loadResource]:t}),window.performance.mark("iframestart"),Object.assign((o=(r=this._embeddedElement)==null?void 0:r.style)!=null?o:{},t.indexOf("http")!==0&&{opacity:0}))}_onLoadElement({target:t}){if(!t.contentDocument||!t.contentDocument.head.childNodes.length)return;Object.assign(t.contentDocument.body.dataset,{embedded:""}),window.performance.mark("iframeend"),window.performance.measure("iframe","iframestart","iframeend"),window.requestAnimationFrame(()=>t.removeAttribute("style"));const i=new CustomEvent("elementloaded",{bubbles:!0,detail:t});this.dispatchEvent(i)}}window.customElements.define("blockquote-base-embedded-webview-element",Ce);const Te=R`:host {
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

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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

header > div {
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
}

[role=heading] {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

[role=heading] + div {
  display: flex;
  align-items: center;
}

.open-externally {
  width: 1rem;
  display: inline-block;
  margin-left: 1rem;
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
  padding: 0.25em 1em 0.25em 0;
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
}`,Se=a`<svg
  aria-hidden="true"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentcolor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="6 9 12 15 18 9" />
</svg>`,qe=a`
  <svg
    viewBox="0 0 20 20"
    fill-rule="evenodd"
    fill="currentcolor"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H10V4.5H4.5V15.5H15.5V10H17V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM8.062 13L7 11.938L14.438 4.5H12V3H17V8H15.5V5.562L8.062 13Z"
    />
  </svg>
`;class Le extends E{static get styles(){return[Te]}static get properties(){return{heading:{type:String},selected:{type:Number},headingLevel:{type:Number,attribute:"heading-level",reflect:!0},screenSizeSelected:{type:Number,attribute:"screen-size-selected"},limitHeight:{type:Boolean,attribute:"limit-height",reflect:!0}}}constructor(){super(),this.selected=0,this.screenSizeSelected=0,this.headingLevel=1,this.heading="",this.__resetResizing=!1,this.__selectArrow=Se,this.__readDataPos={x:"0",y:"0",resizing:!1,cursor:""},this.limitHeight=!1,this._sources=[{src:"",option:"",description:""}],this._updateSize=this._updateSize.bind(this),this._embeddedResizeRef=ne()}connectedCallback(){var i;super.connectedCallback&&super.connectedCallback(),(i=this.shadowRoot)==null||i.addEventListener("webviewresize",s=>{var o;const{detail:r}=s;Object.assign(this.__readDataPos,r),this.__resetResizing=!0,(r.cursor==="n"||r.cursor==="ne"||r.cursor==="nw")&&window.scroll({top:Math.abs(parseInt(this.__readDataPos.y,10)+((o=this._controlBottom)!=null?o:0)),left:0,behavior:"smooth"}),this.requestUpdate()});const t=Array.from(this.querySelectorAll("template"));t.length&&(this._sources=t.map(s=>{const{src:r="",option:o="",description:n=""}=s.dataset;return{src:r,option:o,description:n}}),this._src=this._sources[this.selected].src)}firstUpdated(t){var i;super.firstUpdated&&super.firstUpdated(t),this.embedded=(i=this.shadowRoot)==null?void 0:i.querySelector('[slot="embedded"]'),this._embeddedResizeRef.value&&(this._controlBottom=parseFloat(window.getComputedStyle(this._embeddedResizeRef.value).paddingBottom))}_updateSize({detail:t}){var i,s,r,o;(s=(i=this._embeddedResizeRef)==null?void 0:i.value)==null||s.style.setProperty("--blockquote-base-embedded-webview-resize-rect-width",`${t.width}px`),(o=(r=this._embeddedResizeRef)==null?void 0:r.value)==null||o.style.setProperty("--blockquote-base-embedded-webview-resize-rect-height",this.limitHeight?"100%":`${t.height}px`),this.__resetResizing=!1,this.requestUpdate()}get _headingLevel(){return this.headingLevel>=1&&this.headingLevel<=6?this.headingLevel:2}render(){return a` ${this._headerTpl} ${this._mainTpl} ${this._litHtmlRender()}`}_litHtmlRender(){G(this._lightDomTpl,this)}get _lightDomTpl(){return this.embedded}get _headerTpl(){return a`
      <header>
        <div>
          ${this._headingTpl} ${this._navigationDemosTpl} ${this._descriptionTpl}
          ${this._readDataPosTpl}
        </div>
        ${this._screenSizeTpl}
      </header>
    `}get _headingTpl(){return a`<div aria-level="${this._headingLevel}" role="heading">${this.heading}</div>`}get _navigationDemosTpl(){return a` <div>${this._selectTpl}${this._externalLinkTpl}</div> `}get _selectTpl(){return a`
      ${this._sources.some(t=>t.option)?a`
            <div class="select">
              <select @change="${this._onChangeFile}" aria-label="Cases">
                ${this._sources.map((t,i)=>a`
                    <option ?selected="${this.selected===i}" value="${i}">
                      ${t.option}
                    </option>
                  `)}
              </select>
              ${this.__selectArrow}
            </div>
          `:""}
    `}get _externalLinkTpl(){return a`<a href="${this._src||"#"}" target="_blank" class="open-externally">
      <span class="sr-only">View demo in a new tab</span
      ><span aria-hidden="true">${qe}</span></a
    >`}get _descriptionTpl(){return a` <p class="description">${this._sources[this.selected].description}</p>`}get _readDataPosTpl(){return a`
      <div
        aria-hidden="true"
        class="read-data-pos"
        style="opacity:${this.__readDataPos.resizing?1:0}"
      >
        <span>${this.__readDataPos.x}</span>
        <span>x</span>
        <span>${this.__readDataPos.y}</span>
      </div>
    `}get _screenSizeTpl(){return a` <blockquote-base-embedded-webview-size
      .disabledSelectedSizeText="${this.__resetResizing}"
      @click="${this._updateSize}"
      @selectedchange="${this._updateSize}"
      .selected="${this.screenSizeSelected}"
    ></blockquote-base-embedded-webview-size>`}get _mainTpl(){return a`
      <div class="main">
        <blockquote-base-embedded-webview-resize ${ae(this._embeddedResizeRef)}>
          <slot name="embedded"> ${this._embeddedSlotTpl} </slot>
        </blockquote-base-embedded-webview-resize>
      </div>
    `}get _embeddedSlotTpl(){return a` <blockquote-base-embedded-webview-element
      slot="embedded"
      .src="${this._src||""}"
      .embeddedTitle="${this._sources[this.selected].option||"Demo"}"
    >
    </blockquote-base-embedded-webview-element>`}_onChangeFile({target:t}){this.selected=t.selectedIndex,this._src=this._sources[this.selected].src}}window.customElements.define("blockquote-base-embedded-webview",Le);
