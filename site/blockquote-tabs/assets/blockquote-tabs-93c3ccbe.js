var fe=Object.defineProperty,pe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var H=(s,e,t)=>e in s?fe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,B=(s,e)=>{for(var t in e||(e={}))_e.call(e,t)&&H(s,t,e[t]);if(U)for(var t of U(e))we.call(e,t)&&H(s,t,e[t]);return s},L=(s,e)=>pe(s,ge(e));import{i as q,s as D,e as me,x as b,n as xe,A as Te}from"./ref-2381c9b0.js";var f=[],ye=function(){return f.some(function(s){return s.activeTargets.length>0})},Ce=function(){return f.some(function(s){return s.skippedTargets.length>0})},X="ResizeObserver loop completed with undelivered notifications.",Re=function(){var s;typeof ErrorEvent=="function"?s=new ErrorEvent("error",{message:X}):(s=document.createEvent("Event"),s.initEvent("error",!1,!1),s.message=X),window.dispatchEvent(s)},T;(function(s){s.BORDER_BOX="border-box",s.CONTENT_BOX="content-box",s.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(T||(T={}));var p=function(s){return Object.freeze(s)},Se=function(){function s(e,t){this.inlineSize=e,this.blockSize=t,p(this)}return s}(),ie=function(){function s(e,t,o,i){return this.x=e,this.y=t,this.width=o,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,p(this)}return s.prototype.toJSON=function(){var e=this,t=e.x,o=e.y,i=e.top,n=e.right,r=e.bottom,a=e.left,d=e.width,c=e.height;return{x:t,y:o,top:i,right:n,bottom:r,left:a,width:d,height:c}},s.fromRect=function(e){return new s(e.x,e.y,e.width,e.height)},s}(),P=function(s){return s instanceof SVGElement&&"getBBox"in s},ne=function(s){if(P(s)){var e=s.getBBox(),t=e.width,o=e.height;return!t&&!o}var i=s,n=i.offsetWidth,r=i.offsetHeight;return!(n||r||s.getClientRects().length)},G=function(s){var e;if(s instanceof Element)return!0;var t=(e=s==null?void 0:s.ownerDocument)===null||e===void 0?void 0:e.defaultView;return!!(t&&s instanceof t.Element)},ke=function(s){switch(s.tagName){case"INPUT":if(s.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},x=typeof window<"u"?window:{},R=new WeakMap,K=/auto|scroll/,Ee=/^tb|vertical/,Oe=/msie|trident/i.test(x.navigator&&x.navigator.userAgent),u=function(s){return parseFloat(s||"0")},w=function(s,e,t){return s===void 0&&(s=0),e===void 0&&(e=0),t===void 0&&(t=!1),new Se((t?e:s)||0,(t?s:e)||0)},j=p({devicePixelContentBoxSize:w(),borderBoxSize:w(),contentBoxSize:w(),contentRect:new ie(0,0,0,0)}),re=function(s,e){if(e===void 0&&(e=!1),R.has(s)&&!e)return R.get(s);if(ne(s))return R.set(s,j),j;var t=getComputedStyle(s),o=P(s)&&s.ownerSVGElement&&s.getBBox(),i=!Oe&&t.boxSizing==="border-box",n=Ee.test(t.writingMode||""),r=!o&&K.test(t.overflowY||""),a=!o&&K.test(t.overflowX||""),d=o?0:u(t.paddingTop),c=o?0:u(t.paddingRight),v=o?0:u(t.paddingBottom),h=o?0:u(t.paddingLeft),m=o?0:u(t.borderTopWidth),g=o?0:u(t.borderRightWidth),_=o?0:u(t.borderBottomWidth),l=o?0:u(t.borderLeftWidth),F=h+c,W=d+v,O=l+g,z=m+_,M=a?s.offsetHeight-z-s.clientHeight:0,$=r?s.offsetWidth-O-s.clientWidth:0,he=i?F+O:0,ue=i?W+z:0,y=o?o.width:u(t.width)-he-$,C=o?o.height:u(t.height)-ue-M,be=y+F+$+O,ve=C+W+M+z,V=p({devicePixelContentBoxSize:w(Math.round(y*devicePixelRatio),Math.round(C*devicePixelRatio),n),borderBoxSize:w(be,ve,n),contentBoxSize:w(y,C,n),contentRect:new ie(h,d,y,C)});return R.set(s,V),V},ae=function(s,e,t){var o=re(s,t),i=o.borderBoxSize,n=o.contentBoxSize,r=o.devicePixelContentBoxSize;switch(e){case T.DEVICE_PIXEL_CONTENT_BOX:return r;case T.BORDER_BOX:return i;default:return n}},ze=function(){function s(e){var t=re(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=p([t.borderBoxSize]),this.contentBoxSize=p([t.contentBoxSize]),this.devicePixelContentBoxSize=p([t.devicePixelContentBoxSize])}return s}(),le=function(s){if(ne(s))return 1/0;for(var e=0,t=s.parentNode;t;)e+=1,t=t.parentNode;return e},Be=function(){var s=1/0,e=[];f.forEach(function(r){if(r.activeTargets.length!==0){var a=[];r.activeTargets.forEach(function(c){var v=new ze(c.target),h=le(c.target);a.push(v),c.lastReportedSize=ae(c.target,c.observedBox),h<s&&(s=h)}),e.push(function(){r.callback.call(r.observer,a,r.observer)}),r.activeTargets.splice(0,r.activeTargets.length)}});for(var t=0,o=e;t<o.length;t++){var i=o[t];i()}return s},J=function(s){f.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(i){i.isActive()&&(le(i.target)>s?t.activeTargets.push(i):t.skippedTargets.push(i))})})},Le=function(){var s=0;for(J(s);ye();)s=Be(),J(s);return Ce()&&Re(),s>0},A,ce=[],Ae=function(){return ce.splice(0).forEach(function(s){return s()})},Ne=function(s){if(!A){var e=0,t=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return Ae()}).observe(t,o),A=function(){t.textContent="".concat(e?e--:e++)}}ce.push(s),A()},Ie=function(s){Ne(function(){requestAnimationFrame(s)})},E=0,qe=function(){return!!E},De=250,Pe={attributes:!0,characterData:!0,childList:!0,subtree:!0},Y=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Q=function(s){return s===void 0&&(s=0),Date.now()+s},N=!1,Fe=function(){function s(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return s.prototype.run=function(e){var t=this;if(e===void 0&&(e=De),!N){N=!0;var o=Q(e);Ie(function(){var i=!1;try{i=Le()}finally{if(N=!1,e=o-Q(),!qe())return;i?t.run(1e3):e>0?t.run(e):t.start()}})}},s.prototype.schedule=function(){this.stop(),this.run()},s.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,Pe)};document.body?t():x.addEventListener("DOMContentLoaded",t)},s.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Y.forEach(function(t){return x.addEventListener(t,e.listener,!0)}))},s.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Y.forEach(function(t){return x.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},s}(),I=new Fe,Z=function(s){!E&&s>0&&I.start(),E+=s,!E&&I.stop()},We=function(s){return!P(s)&&!ke(s)&&getComputedStyle(s).display==="inline"},Me=function(){function s(e,t){this.target=e,this.observedBox=t||T.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return s.prototype.isActive=function(){var e=ae(this.target,this.observedBox,!0);return We(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},s}(),$e=function(){function s(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return s}(),S=new WeakMap,ee=function(s,e){for(var t=0;t<s.length;t+=1)if(s[t].target===e)return t;return-1},k=function(){function s(){}return s.connect=function(e,t){var o=new $e(e,t);S.set(e,o)},s.observe=function(e,t,o){var i=S.get(e),n=i.observationTargets.length===0;ee(i.observationTargets,t)<0&&(n&&f.push(i),i.observationTargets.push(new Me(t,o&&o.box)),Z(1),I.schedule())},s.unobserve=function(e,t){var o=S.get(e),i=ee(o.observationTargets,t),n=o.observationTargets.length===1;i>=0&&(n&&f.splice(f.indexOf(o),1),o.observationTargets.splice(i,1),Z(-1))},s.disconnect=function(e){var t=this,o=S.get(e);o.observationTargets.slice().forEach(function(i){return t.unobserve(e,i.target)}),o.activeTargets.splice(0,o.activeTargets.length)},s}(),Ve=function(){function s(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");k.connect(this,e)}return s.prototype.observe=function(e,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!G(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");k.observe(this,e,t)},s.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!G(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");k.unobserve(this,e)},s.prototype.disconnect=function(){k.disconnect(this)},s.toString=function(){return"function ResizeObserver () { [polyfill code] }"},s}();class Ue{constructor(e,{target:t,config:o,callback:i,skipInitial:n}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,t!==null&&this.t.add(t!=null?t:e),this.l=o,this.o=n!=null?n:this.o,this.callback=i,window.ResizeObserver?(this.u=new ResizeObserver(r=>{this.handleChanges(r),this.h.requestUpdate()}),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){var t;this.value=(t=this.callback)===null||t===void 0?void 0:t.call(this,e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let He=0;const Xe=function(s){let e=s.__mixinApplications;e||(e=new WeakMap,s.__mixinApplications=e);let t=He++;return function(o){let i=o.__mixinSet;if(i&&i[t])return o;let n=e,r=n.get(o);if(!r){r=s(o),n.set(o,r);let a=Object.create(r.__mixinSet||i||null);a[t]=!0,r.__mixinSet=a}return r}},Ge=s=>!/[^\t\n\r ]/.test(s.textContent),Ke=s=>s.nodeType===8||s.nodeType===3&&Ge(s),de=Xe(s=>class extends s{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchange",this._onSlotChange.bind(this))}_onSlotChange(t){var _;const{target:o}=t,i=o.name||o.getAttribute("name")||"",n=[...o.assignedNodes(),...o.childNodes],r=o.assignedNodes({flatten:!0}),a=[];n.length&&n.forEach(l=>{Ke(l)||a.push({flatten:l.assignedSlot===null,assignedNodes:l.nodeType===3?l.textContent.trim():l,assignedSlot:l.assignedSlot})});const d=a.filter(l=>l.flatten===!1),c=a.filter(l=>l.flatten===!0),v={assignedNodesByNode:d,assignedNodes:d.map(l=>l.assignedNodes)},h={assignedNodesByNode:c,assignedNodes:c.map(l=>l.assignedNodes)},m={slotName:i,assignedSlot:((_=d[0])==null?void 0:_.assignedSlot)||null},g=new CustomEvent("slotchanges",{bubbles:!0,detail:{assignedSlotContent:m,assignedNodesContent:v,flattenedNodesContent:h,originalEvent:{event:t,assignedNodes:r}}});this.shadowRoot.dispatchEvent(g)}}),je=q`:host {
  --_unselected-color: var(--blockquote-tabs-unselected-color, rgb(234 234 234));
  --_scroll-gradient-start-color: var(--blockquote-tabs-scroll-gradient-start-color, rgba(255, 255, 255, 0));
  --_scroll-gradient-end-color: var(--blockquote-tabs-scroll-gradient-end-color, rgba(252, 252, 252, 1));
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
  bottom: 0;
  height: 1px;
  left: 0;
  right: 0;
  background-color: var(--_unselected-color);
}
.hold .indicator {
  position: absolute;
  width: 1rem;
  pointer-events: none;
  top: 0;
  bottom: 1px;
  left: 0;
  box-shadow: rgb(255, 255, 255) 4px 0 12px 4px inset, rgb(210, 210, 210) 4px 0 4px -4px;
  background-color: rgba(234, 234, 234, 0.5);
  transition: opacity 92ms ease-in-out;
  opacity: 0;
  background-clip: padding-box;
}
.hold .indicator.show-indicator {
  opacity: 1;
}
.hold .indicator + .indicator {
  left: auto;
  right: 0;
  transform: scale(-1);
}

.scroll-content {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
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

[role=tablist] {
  display: flex;
}`;window.ResizeObserver||(window.ResizeObserver=Ve);class te extends de(D){static get is(){return"blockquote-tabs"}static get styles(){return[je]}static get properties(){return{autofocus:{type:Boolean},label:{type:String},selected:{type:Number,reflect:!0},_hasScrollLeftIndicator:{type:Boolean,state:!0},_hasScrollRightIndicator:{type:Boolean,state:!0}}}constructor(){super(),this.autofocus=!1,this.label="",this.selected=1,this._tabList=[],this._tabpanelList=[],this._selectTabLast=void 0,this._selectTabpanelLast=void 0,this._observedFocus=!1,this._observeScrollBehavior=!1,this._slotChangesCount=0,this._slotNodesCount=void 0,this._scrollContentRef=me(),this._onTabClick=this._onTabClick.bind(this),this._onTabKeyDown=this._onTabKeyDown.bind(this),this._resizeControllerObserver=new Ue(this,{callback:()=>{this._onResizeObserverChange()},skipInitial:!0})}_selectedIsInRange(e){return e>=0&&e<=this._getTabListLength?e:0}get _selectedTab(){return this._tabList[this._selectedIsInRange(this.selected-1)]}get _selectedTabIndex(){return this._tabList.indexOf(this._selectedTab)}get _selectedTabIndexFromOne(){return this._selectedTabIndex+1}get _getTabListLength(){return this._tabList.length}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchanges",this._onSlotChanges.bind(this))}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e);const t=this.shadowRoot.querySelector('[name="tab"]'),o=this.shadowRoot.querySelector('[name="tabpanel"]');this._slotNodesCount=this.shadowRoot.querySelectorAll("slot"),this._tabList=t.assignedElements(),this._tabpanelList=o.assignedElements(),this._indicators=this.shadowRoot.querySelectorAll(".indicator")}updated(e){if(super.updated&&super.updated(e),e.has("selected")){this._selectTab();const t=new CustomEvent("selectedchange",{bubbles:!0,detail:{selected:this._selectedTabIndexFromOne,tab:this._selectedTab,tabpanel:this._tabpanelList[this._selectedTabIndex]}});this.dispatchEvent(t)}}_onSlotChanges(e){e.stopPropagation(),e.preventDefault(),this._slotChangesCount+=1;const{detail:t}=e,o=t.assignedNodesContent.assignedNodes;t.assignedSlotContent.slotName==="tab"&&(this._tabList=o),t.assignedSlotContent.slotName==="tabpanel"&&(this._tabpanelList=o),this._slotChangesCount>this._slotNodesCount.length&&this._requestPropertyUpdate("selected")}get _scrollContentTpl(){return b` <div
      class="scroll-content"
      ${xe(this._scrollContentRef)}
      @scroll="${this._scrollEdge}"
    >
      ${this._tablistTpl}
    </div>`}get _tablistTpl(){return b` <div role="tablist" aria-label="${this.label||Te}">
      <slot @click="${this._onTabClick}" @keydown="${this._onTabKeyDown}" name="tab"></slot>
    </div>`}get _separatorTpl(){return b`<span aria-hidden="true" class="separator"></span>`}get _indicatorsTpl(){return b` <span
        aria-hidden="true"
        class="indicator ${this._hasScrollLeftIndicator?"show-indicator":""}"
      ></span>
      <span
        aria-hidden="true"
        class="indicator ${this._hasScrollRightIndicator?"show-indicator":""}"
      ></span>`}get _holdTpl(){return b`<div class="hold">
      ${this._scrollContentTpl} ${this._separatorTpl} ${this._indicatorsTpl}
    </div>`}get _tabpanelTpl(){return b` <div>
      <slot name="tabpanel"></slot>
    </div>`}render(){return b` ${this._holdTpl} ${this._tabpanelTpl} `}_scrollEdge({target:e=this._scrollContentRef.value}={}){const{scrollLeft:t,scrollWidth:o,offsetWidth:i}=e,n=o-i;this._hasScrollLeftIndicator=t>0,this._hasScrollRightIndicator=t<n}_onTabClick(e){const t=e.composedPath().find(i=>i instanceof Element&&i.slot==="tab"),o=this._tabList.indexOf(t)+1;this.selected===o&&this._scrollIntoView(),this.selected=o}_onTabKeyDown(e){let t="";switch(e.key){case"ArrowLeft":e.preventDefault(),t=this._selectedTabIndexFromOne-1,this.selected=t<=0?this._getTabListLength:t;break;case"ArrowRight":e.preventDefault(),t=this._selectedTabIndexFromOne+1,this.selected=t>this._getTabListLength?1:t;break;case"Home":e.preventDefault(),this.selected=1;break;case"End":e.preventDefault(),this.selected=this._getTabListLength;break}}_selectTab(){const e=this._tabList[this._selectedTabIndex],t=this._tabpanelList[this._selectedTabIndex];this._selectTabLast&&(this._selectTabLast.selected=!1,this._selectTabPanelLast.selected=!1),this._selectTabLast=e,this._selectTabPanelLast=t,e.selected=!0,t.selected=!0,(this.autofocus||this._observedFocus)&&this._requestFocusUpdate(),this._observedFocus=!0}_moveFocusSelectedTab(e=this._selectedTab){window.setTimeout(()=>{e.focus()},0)}async _requestFocusUpdate(){await this.updateComplete,this._moveFocusSelectedTab(),this._scrollIntoView()}_scrollIntoView(){window.requestAnimationFrame(()=>{this._scrollIntoViewWithOffset(),this._observeScrollBehavior=!0})}_scrollIntoViewWithOffset(e=this._selectedTab,t=this._observeScrollBehavior?"smooth":"auto"){const[o,i]=this._indicators,n=this._scrollContentRef.value,{right:r}=n.getBoundingClientRect(),{offsetLeft:a}=e,{left:d,right:c,width:v}=e.getBoundingClientRect(),{right:h}=o.getBoundingClientRect(),{width:m,left:g}=i.getBoundingClientRect();if(c>g||d<h){const _=c>g?a-r+v+m:a-h;n.scroll({left:_,behavior:t})}}_requestPropertyUpdate(e){const t=this[e];this[e]=void 0,this[e]=t}_onResizeObserverChange(){this._scrollIntoView(),this._scrollEdge()}}const Je=q`:host {
  --__color: var(--blockquote-tab-color-dark-mode, var(--blockquote-tab-color-ambient, var(--theme-colors-secondary500, rgb(32, 32, 32))));
  --_color: var(--blockquote-tab-color, var(--__color));
  --_selected-border-color: var(--blockquote-tab-selected-border-color, var(--blockquote-tab-selected-border-color-ambient, var(--theme-colors-secondary500, rgb(184, 184, 184))));
  --_focus-outline-color: var(--blockquote-tab-focus-outline-color, var(--blockquote-tab-focus-outline-color-ambient, var(--theme-colors-secondary500, rgb(184, 184, 184))));
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  color: var(--_color);
  padding: 1em 0.5em;
  min-width: 6.25rem;
  border-bottom: 0.0625rem solid transparent;
  transition: border-bottom-color 192ms ease-in-out;
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

:host([aria-selected=true]) {
  font-weight: 700;
  border-bottom-color: var(--_selected-border-color);
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
  width: inherit;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}`;class se extends de(D){static get is(){return"blockquote-tab"}static get properties(){return{selected:{type:Boolean}}}constructor(){super(),this.selected=!1,this.globalRootAttributes={role:"tab",slot:"tab",tabindex:0}}static get styles(){return[Je]}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchanges",this._onSlotChanges.bind(this)),this.__setArrayAttibute(this.globalRootAttributes)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const t=L(B({},this.globalRootAttributes),{"aria-selected":!!this.selected,tabindex:this.selected?0:-1});this.__setArrayAttibute(t)}}_onSlotChanges(e){const{detail:t}=e;e.stopPropagation(),e.preventDefault();const o=t.assignedSlotContent.assignedSlot;Object.assign(o.dataset,{text:this.textContent})}render(){return b`<slot></slot>`}__setArrayAttibute(e=[]){Object.entries(e).forEach(([t,o])=>{this.setAttribute(t,o)})}}window.customElements.define(se.is,se);const Ye=q`:host {
  display: block;
  box-sizing: border-box;
  padding: 1rem;
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

:host([aria-hidden=true]) {
  display: none;
}

:host(:focus:not(:focus-visible)) {
  outline: none;
}

:host(:focus-visible) {
  outline: #9e9e9e dashed 0.0625rem;
  outline-offset: -2px;
}`;class oe extends D{static get is(){return"blockquote-tabpanel"}static get properties(){return{selected:{type:Boolean}}}constructor(){super(),this.selected=!1,this.globalRootAttributes={role:"tabpanel",slot:"tabpanel",tabindex:0}}static get styles(){return[Ye]}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.__setArrayAttibute(this.globalRootAttributes)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const t=L(B({},this.globalRootAttributes),{"aria-hidden":!this.selected});this.__setArrayAttibute(t)}}render(){return b` <slot></slot> `}__setArrayAttibute(e=[]){Object.entries(e).forEach(([t,o])=>{this.setAttribute(t,o)})}}window.customElements.define(oe.is,oe);window.customElements.define(te.is,te);
