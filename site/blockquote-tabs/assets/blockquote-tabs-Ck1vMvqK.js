import{i as q,s as D,e as ce,x as b,n as de,T as he}from"./ref-BqUYaS6T.js";var f=[],ue=function(){return f.some(function(s){return s.activeTargets.length>0})},be=function(){return f.some(function(s){return s.skippedTargets.length>0})},$="ResizeObserver loop completed with undelivered notifications.",ve=function(){var s;typeof ErrorEvent=="function"?s=new ErrorEvent("error",{message:$}):(s=document.createEvent("Event"),s.initEvent("error",!1,!1),s.message=$),window.dispatchEvent(s)},x;(function(s){s.BORDER_BOX="border-box",s.CONTENT_BOX="content-box",s.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(x||(x={}));var p=function(s){return Object.freeze(s)},fe=function(){function s(e,t){this.inlineSize=e,this.blockSize=t,p(this)}return s}(),Y=function(){function s(e,t,o,i){return this.x=e,this.y=t,this.width=o,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,p(this)}return s.prototype.toJSON=function(){var e=this,t=e.x,o=e.y,i=e.top,n=e.right,r=e.bottom,c=e.left,d=e.width,l=e.height;return{x:t,y:o,top:i,right:n,bottom:r,left:c,width:d,height:l}},s.fromRect=function(e){return new s(e.x,e.y,e.width,e.height)},s}(),P=function(s){return s instanceof SVGElement&&"getBBox"in s},Q=function(s){if(P(s)){var e=s.getBBox(),t=e.width,o=e.height;return!t&&!o}var i=s,n=i.offsetWidth,r=i.offsetHeight;return!(n||r||s.getClientRects().length)},V=function(s){var e;if(s instanceof Element)return!0;var t=(e=s==null?void 0:s.ownerDocument)===null||e===void 0?void 0:e.defaultView;return!!(t&&s instanceof t.Element)},pe=function(s){switch(s.tagName){case"INPUT":if(s.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},T=typeof window<"u"?window:{},k=new WeakMap,U=/auto|scroll/,ge=/^tb|vertical/,_e=/msie|trident/i.test(T.navigator&&T.navigator.userAgent),u=function(s){return parseFloat(s||"0")},_=function(s,e,t){return s===void 0&&(s=0),e===void 0&&(e=0),t===void 0&&(t=!1),new fe((t?e:s)||0,(t?s:e)||0)},H=p({devicePixelContentBoxSize:_(),borderBoxSize:_(),contentBoxSize:_(),contentRect:new Y(0,0,0,0)}),Z=function(s,e){if(e===void 0&&(e=!1),k.has(s)&&!e)return k.get(s);if(Q(s))return k.set(s,H),H;var t=getComputedStyle(s),o=P(s)&&s.ownerSVGElement&&s.getBBox(),i=!_e&&t.boxSizing==="border-box",n=ge.test(t.writingMode||""),r=!o&&U.test(t.overflowY||""),c=!o&&U.test(t.overflowX||""),d=o?0:u(t.paddingTop),l=o?0:u(t.paddingRight),v=o?0:u(t.paddingBottom),h=o?0:u(t.paddingLeft),w=o?0:u(t.borderTopWidth),g=o?0:u(t.borderRightWidth),m=o?0:u(t.borderBottomWidth),C=o?0:u(t.borderLeftWidth),a=h+l,y=d+v,B=C+g,L=w+m,F=c?s.offsetHeight-L-s.clientHeight:0,W=r?s.offsetWidth-B-s.clientWidth:0,ne=i?a+B:0,re=i?y+L:0,R=o?o.width:u(t.width)-ne-W,S=o?o.height:u(t.height)-re-F,ae=R+a+W+B,le=S+y+F+L,M=p({devicePixelContentBoxSize:_(Math.round(R*devicePixelRatio),Math.round(S*devicePixelRatio),n),borderBoxSize:_(ae,le,n),contentBoxSize:_(R,S,n),contentRect:new Y(h,d,R,S)});return k.set(s,M),M},ee=function(s,e,t){var o=Z(s,t),i=o.borderBoxSize,n=o.contentBoxSize,r=o.devicePixelContentBoxSize;switch(e){case x.DEVICE_PIXEL_CONTENT_BOX:return r;case x.BORDER_BOX:return i;default:return n}},we=function(){function s(e){var t=Z(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=p([t.borderBoxSize]),this.contentBoxSize=p([t.contentBoxSize]),this.devicePixelContentBoxSize=p([t.devicePixelContentBoxSize])}return s}(),te=function(s){if(Q(s))return 1/0;for(var e=0,t=s.parentNode;t;)e+=1,t=t.parentNode;return e},me=function(){var s=1/0,e=[];f.forEach(function(r){if(r.activeTargets.length!==0){var c=[];r.activeTargets.forEach(function(l){var v=new we(l.target),h=te(l.target);c.push(v),l.lastReportedSize=ee(l.target,l.observedBox),h<s&&(s=h)}),e.push(function(){r.callback.call(r.observer,c,r.observer)}),r.activeTargets.splice(0,r.activeTargets.length)}});for(var t=0,o=e;t<o.length;t++){var i=o[t];i()}return s},X=function(s){f.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(i){i.isActive()&&(te(i.target)>s?t.activeTargets.push(i):t.skippedTargets.push(i))})})},ye=function(){var s=0;for(X(s);ue();)s=me(),X(s);return be()&&ve(),s>0},A,se=[],Te=function(){return se.splice(0).forEach(function(s){return s()})},xe=function(s){if(!A){var e=0,t=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return Te()}).observe(t,o),A=function(){t.textContent="".concat(e?e--:e++)}}se.push(s),A()},Ce=function(s){xe(function(){requestAnimationFrame(s)})},z=0,Re=function(){return!!z},Se=250,ke={attributes:!0,characterData:!0,childList:!0,subtree:!0},G=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],K=function(s){return s===void 0&&(s=0),Date.now()+s},N=!1,Oe=function(){function s(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return s.prototype.run=function(e){var t=this;if(e===void 0&&(e=Se),!N){N=!0;var o=K(e);Ce(function(){var i=!1;try{i=ye()}finally{if(N=!1,e=o-K(),!Re())return;i?t.run(1e3):e>0?t.run(e):t.start()}})}},s.prototype.schedule=function(){this.stop(),this.run()},s.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,ke)};document.body?t():T.addEventListener("DOMContentLoaded",t)},s.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),G.forEach(function(t){return T.addEventListener(t,e.listener,!0)}))},s.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),G.forEach(function(t){return T.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},s}(),I=new Oe,j=function(s){!z&&s>0&&I.start(),z+=s,!z&&I.stop()},Ee=function(s){return!P(s)&&!pe(s)&&getComputedStyle(s).display==="inline"},ze=function(){function s(e,t){this.target=e,this.observedBox=t||x.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return s.prototype.isActive=function(){var e=ee(this.target,this.observedBox,!0);return Ee(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},s}(),Be=function(){function s(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return s}(),O=new WeakMap,J=function(s,e){for(var t=0;t<s.length;t+=1)if(s[t].target===e)return t;return-1},E=function(){function s(){}return s.connect=function(e,t){var o=new Be(e,t);O.set(e,o)},s.observe=function(e,t,o){var i=O.get(e),n=i.observationTargets.length===0;J(i.observationTargets,t)<0&&(n&&f.push(i),i.observationTargets.push(new ze(t,o&&o.box)),j(1),I.schedule())},s.unobserve=function(e,t){var o=O.get(e),i=J(o.observationTargets,t),n=o.observationTargets.length===1;i>=0&&(n&&f.splice(f.indexOf(o),1),o.observationTargets.splice(i,1),j(-1))},s.disconnect=function(e){var t=this,o=O.get(e);o.observationTargets.slice().forEach(function(i){return t.unobserve(e,i.target)}),o.activeTargets.splice(0,o.activeTargets.length)},s}(),Le=function(){function s(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");E.connect(this,e)}return s.prototype.observe=function(e,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!V(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");E.observe(this,e,t)},s.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!V(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");E.unobserve(this,e)},s.prototype.disconnect=function(){E.disconnect(this)},s.toString=function(){return"function ResizeObserver () { [polyfill code] }"},s}();class Ae{constructor(e,{target:t,config:o,callback:i,skipInitial:n}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,t!==null&&this.t.add(t!=null?t:e),this.l=o,this.o=n!=null?n:this.o,this.callback=i,window.ResizeObserver?(this.u=new ResizeObserver(r=>{this.handleChanges(r),this.h.requestUpdate()}),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){var t;this.value=(t=this.callback)==null?void 0:t.call(this,e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}const oe=new WeakMap;function Ne(s,e){let t=e;for(;t;){if(oe.get(t)===s)return!0;t=Object.getPrototypeOf(t)}return!1}function Ie(s){return e=>{if(Ne(s,e))return e;const t=s(e);return oe.set(t,s),t}}const qe=s=>!/[^\t\n\r ]/.test(s.textContent),De=s=>s.nodeType===8||s.nodeType===3&&qe(s),Pe=s=>class extends s{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchange",this._onSlotChange.bind(this))}_onSlotChange(t){var C;const{target:o}=t,i=o;if(!i)return;const n=i.name||i.getAttribute("name")||"",r=[...i.assignedNodes(),...i.childNodes],c=i.assignedNodes({flatten:!0}),d=[];r.length&&r.forEach(a=>{var y;De(a)||d.push({flatten:a.assignedSlot===null,assignedNodes:a.nodeType===3?(y=a.textContent)==null?void 0:y.trim():a,assignedSlot:a.assignedSlot})});const l=d.filter(a=>a.flatten===!1),v=d.filter(a=>a.flatten===!0),h={assignedNodesByNode:l,assignedNodes:l.map(a=>a.assignedNodes)},w={assignedNodesByNode:v,assignedNodes:v.map(a=>a.assignedNodes)},g={slotName:n,assignedSlot:((C=l[0])==null?void 0:C.assignedSlot)||null},m=new CustomEvent("slotchanges",{bubbles:!0,detail:{assignedSlotContent:g,assignedNodesContent:h,flattenedNodesContent:w,originalEvent:{event:t,assignedNodes:c}}});this.shadowRoot.dispatchEvent(m)}},ie=Ie(Pe),Fe=q`:host {
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

[role=tablist] {
  display: flex;
}`;window.ResizeObserver||(window.ResizeObserver=Le);class We extends ie(D){static get styles(){return[Fe]}static get properties(){return{autofocus:{type:Boolean},label:{type:String},selected:{type:Number,reflect:!0},_hasScrollLeftIndicator:{type:Boolean,state:!0},_hasScrollRightIndicator:{type:Boolean,state:!0}}}constructor(){super(),this.autofocus=!1,this.label="",this.selected=1,this._tabList=[],this._tabpanelList=[],this._selectTabLast=void 0,this._selectTabpanelLast=void 0,this._observedFocus=!1,this._observeScrollBehavior=!1,this._slotChangesCount=0,this._slotNodesCount=void 0,this._scrollContentRef=ce(),this._onTabClick=this._onTabClick.bind(this),this._onTabKeyDown=this._onTabKeyDown.bind(this),this._resizeControllerObserver=new Ae(this,{callback:()=>{this._onResizeObserverChange()},skipInitial:!0})}_selectedIsInRange(e){return e>=0&&e<=this._getTabListLength?e:0}get _selectedTab(){return this._tabList[this._selectedIsInRange(this.selected-1)]}get _selectedTabIndex(){return this._tabList.indexOf(this._selectedTab)}get _selectedTabIndexFromOne(){return this._selectedTabIndex+1}get _getTabListLength(){return this._tabList.length}connectedCallback(){var e;super.connectedCallback&&super.connectedCallback(),(e=this.shadowRoot)==null||e.addEventListener("slotchanges",this._onSlotChanges.bind(this))}firstUpdated(e){var i,n,r,c;super.firstUpdated&&super.firstUpdated(e);const t=(i=this.shadowRoot)==null?void 0:i.querySelector('[name="tab"]'),o=(n=this.shadowRoot)==null?void 0:n.querySelector('[name="tabpanel"]');this._slotNodesCount=(r=this.shadowRoot)==null?void 0:r.querySelectorAll("slot"),this._tabList=t==null?void 0:t.assignedElements(),this._tabpanelList=o==null?void 0:o.assignedElements(),this._indicators=(c=this.shadowRoot)==null?void 0:c.querySelectorAll(".indicator")}updated(e){if(super.updated&&super.updated(e),e.has("selected")){this._selectTab();const t=new CustomEvent("selectedchange",{bubbles:!0,detail:{selected:this._selectedTabIndexFromOne,tab:this._selectedTab,tabpanel:this._tabpanelList[this._selectedTabIndex]}});this.dispatchEvent(t)}}_onSlotChanges(e){e.stopPropagation(),e.preventDefault(),this._slotChangesCount+=1;const{detail:t}=e,o=t.assignedNodesContent.assignedNodes;t.assignedSlotContent.slotName==="tab"&&(this._tabList=o),t.assignedSlotContent.slotName==="tabpanel"&&(this._tabpanelList=o),Array.isArray(this._slotNodesCount)&&this._slotChangesCount>this._slotNodesCount.length&&this._requestPropertyUpdate("selected")}get _scrollContentTpl(){return b` <div
      class="scroll-content"
      ${de(this._scrollContentRef)}
      @scroll="${this._scrollEdge}"
    >
      ${this._tablistTpl}
    </div>`}get _tablistTpl(){return b` <div role="tablist" aria-label="${this.label||he}">
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
    </div>`}render(){return b` ${this._holdTpl} ${this._tabpanelTpl} `}_scrollEdge({target:e=this._scrollContentRef.value}={}){const{scrollLeft:t,scrollWidth:o,offsetWidth:i}=e,n=o-i;this._hasScrollLeftIndicator=t>0,this._hasScrollRightIndicator=t<n}_onTabClick(e){const t=e.composedPath().find(i=>i instanceof Element&&i.slot==="tab"),o=this._tabList.indexOf(t)+1;this.selected===o&&this._scrollIntoView(),this.selected=o}_onTabKeyDown(e){let t="";switch(e.key){case"ArrowLeft":e.preventDefault(),t=this._selectedTabIndexFromOne-1,this.selected=t<=0?this._getTabListLength:t;break;case"ArrowRight":e.preventDefault(),t=this._selectedTabIndexFromOne+1,this.selected=t>this._getTabListLength?1:t;break;case"Home":e.preventDefault(),this.selected=1;break;case"End":e.preventDefault(),this.selected=this._getTabListLength;break}}_selectTab(){const e=this._tabList[this._selectedTabIndex],t=this._tabpanelList[this._selectedTabIndex];this._selectTabLast&&(this._selectTabLast.selected=!1,this._selectTabPanelLast.selected=!1),this._selectTabLast=e,this._selectTabPanelLast=t,e.selected=!0,t.selected=!0,(this.autofocus||this._observedFocus)&&this._requestFocusUpdate(),this._observedFocus=!0}_moveFocusSelectedTab(e=this._selectedTab){window.setTimeout(()=>{e.focus()},0)}async _requestFocusUpdate(){await this.updateComplete,this._moveFocusSelectedTab(),this._scrollIntoView()}_scrollIntoView(){window.requestAnimationFrame(()=>{this._scrollIntoViewWithOffset(),this._observeScrollBehavior=!0})}_scrollIntoViewWithOffset(e=this._selectedTab,t=this._observeScrollBehavior?"smooth":"auto"){const o=this._scrollContentRef.value;if(!o)return;const[i,n]=this._indicators||[],{right:r}=o.getBoundingClientRect(),{offsetLeft:c}=e,{left:d,right:l,width:v}=e.getBoundingClientRect(),{right:h}=i.getBoundingClientRect(),{width:w,left:g}=n.getBoundingClientRect();if(l>g||d<h){const m=l>g?c-r+v+w:c-h;o.scroll({left:m,behavior:t})}}_requestPropertyUpdate(e){const t=this[e];this[e]=void 0,this[e]=t}_onResizeObserverChange(){this._scrollIntoView(),this._scrollEdge()}}const Me=q`:host {
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
}`;class $e extends ie(D){static get properties(){return{selected:{type:Boolean}}}constructor(){super(),this.selected=!1,this.globalRootAttributes={role:"tab",slot:"tab",tabindex:0}}static get styles(){return[Me]}connectedCallback(){var e;super.connectedCallback&&super.connectedCallback(),(e=this.shadowRoot)==null||e.addEventListener("slotchanges",this._onSlotChanges.bind(this)),this.__setArrayAttibute(this.globalRootAttributes)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const t={...this.globalRootAttributes,"aria-selected":!!this.selected,tabindex:this.selected?0:-1};this.__setArrayAttibute(t)}}_onSlotChanges(e){const{detail:t}=e;e.stopPropagation(),e.preventDefault();const o=t.assignedSlotContent.assignedSlot;Object.assign(o.dataset,{text:this.textContent})}render(){return b`<slot></slot>`}__setArrayAttibute(e={}){Object.entries(e).forEach(([t,o])=>{this.setAttribute(t,o)})}}window.customElements.define("blockquote-tab",$e);const Ve=q`:host {
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
}`;class Ue extends D{static get properties(){return{selected:{type:Boolean}}}constructor(){super(),this.selected=!1,this.globalRootAttributes={role:"tabpanel",slot:"tabpanel",tabindex:0}}static get styles(){return[Ve]}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.__setArrayAttibute(this.globalRootAttributes)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const t={...this.globalRootAttributes,"aria-hidden":!this.selected};this.__setArrayAttibute(t)}}render(){return b` <slot></slot> `}__setArrayAttibute(e={}){Object.entries(e).forEach(([t,o])=>{this.setAttribute(t,o)})}}window.customElements.define("blockquote-tabpanel",Ue);window.customElements.define("blockquote-tabs",We);
