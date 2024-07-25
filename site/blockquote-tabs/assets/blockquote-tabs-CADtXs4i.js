var de=Object.defineProperty;var he=(t,s,e)=>s in t?de(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var m=(t,s,e)=>he(t,typeof s!="symbol"?s+"":s,e);import{i as D,s as P,e as ue,x as v,n as be,T as ve}from"./ref-BqUYaS6T.js";var f=[],fe=function(){return f.some(function(t){return t.activeTargets.length>0})},pe=function(){return f.some(function(t){return t.skippedTargets.length>0})},V="ResizeObserver loop completed with undelivered notifications.",ge=function(){var t;typeof ErrorEvent=="function"?t=new ErrorEvent("error",{message:V}):(t=document.createEvent("Event"),t.initEvent("error",!1,!1),t.message=V),window.dispatchEvent(t)},S;(function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(S||(S={}));var p=function(t){return Object.freeze(t)},_e=function(){function t(s,e){this.inlineSize=s,this.blockSize=e,p(this)}return t}(),Q=function(){function t(s,e,o,r){return this.x=s,this.y=e,this.width=o,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,p(this)}return t.prototype.toJSON=function(){var s=this,e=s.x,o=s.y,r=s.top,i=s.right,n=s.bottom,c=s.left,d=s.width,l=s.height;return{x:e,y:o,top:r,right:i,bottom:n,left:c,width:d,height:l}},t.fromRect=function(s){return new t(s.x,s.y,s.width,s.height)},t}(),F=function(t){return t instanceof SVGElement&&"getBBox"in t},Z=function(t){if(F(t)){var s=t.getBBox(),e=s.width,o=s.height;return!e&&!o}var r=t,i=r.offsetWidth,n=r.offsetHeight;return!(i||n||t.getClientRects().length)},U=function(t){var s;if(t instanceof Element)return!0;var e=(s=t==null?void 0:t.ownerDocument)===null||s===void 0?void 0:s.defaultView;return!!(e&&t instanceof e.Element)},we=function(t){switch(t.tagName){case"INPUT":if(t.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},C=typeof window<"u"?window:{},z=new WeakMap,H=/auto|scroll/,me=/^tb|vertical/,xe=/msie|trident/i.test(C.navigator&&C.navigator.userAgent),b=function(t){return parseFloat(t||"0")},x=function(t,s,e){return t===void 0&&(t=0),s===void 0&&(s=0),e===void 0&&(e=!1),new _e((e?s:t)||0,(e?t:s)||0)},X=p({devicePixelContentBoxSize:x(),borderBoxSize:x(),contentBoxSize:x(),contentRect:new Q(0,0,0,0)}),ee=function(t,s){if(s===void 0&&(s=!1),z.has(t)&&!s)return z.get(t);if(Z(t))return z.set(t,X),X;var e=getComputedStyle(t),o=F(t)&&t.ownerSVGElement&&t.getBBox(),r=!xe&&e.boxSizing==="border-box",i=me.test(e.writingMode||""),n=!o&&H.test(e.overflowY||""),c=!o&&H.test(e.overflowX||""),d=o?0:b(e.paddingTop),l=o?0:b(e.paddingRight),h=o?0:b(e.paddingBottom),u=o?0:b(e.paddingLeft),g=o?0:b(e.borderTopWidth),y=o?0:b(e.borderRightWidth),_=o?0:b(e.borderBottomWidth),T=o?0:b(e.borderLeftWidth),R=u+l,a=d+h,w=T+y,A=g+_,W=c?t.offsetHeight-A-t.clientHeight:0,M=n?t.offsetWidth-w-t.clientWidth:0,ne=r?R+w:0,ae=r?a+A:0,O=o?o.width:b(e.width)-ne-M,E=o?o.height:b(e.height)-ae-W,le=O+R+M+w,ce=E+a+W+A,$=p({devicePixelContentBoxSize:x(Math.round(O*devicePixelRatio),Math.round(E*devicePixelRatio),i),borderBoxSize:x(le,ce,i),contentBoxSize:x(O,E,i),contentRect:new Q(u,d,O,E)});return z.set(t,$),$},te=function(t,s,e){var o=ee(t,e),r=o.borderBoxSize,i=o.contentBoxSize,n=o.devicePixelContentBoxSize;switch(s){case S.DEVICE_PIXEL_CONTENT_BOX:return n;case S.BORDER_BOX:return r;default:return i}},ye=function(){function t(s){var e=ee(s);this.target=s,this.contentRect=e.contentRect,this.borderBoxSize=p([e.borderBoxSize]),this.contentBoxSize=p([e.contentBoxSize]),this.devicePixelContentBoxSize=p([e.devicePixelContentBoxSize])}return t}(),se=function(t){if(Z(t))return 1/0;for(var s=0,e=t.parentNode;e;)s+=1,e=e.parentNode;return s},Te=function(){var t=1/0,s=[];f.forEach(function(n){if(n.activeTargets.length!==0){var c=[];n.activeTargets.forEach(function(l){var h=new ye(l.target),u=se(l.target);c.push(h),l.lastReportedSize=te(l.target,l.observedBox),u<t&&(t=u)}),s.push(function(){n.callback.call(n.observer,c,n.observer)}),n.activeTargets.splice(0,n.activeTargets.length)}});for(var e=0,o=s;e<o.length;e++){var r=o[e];r()}return t},G=function(t){f.forEach(function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach(function(r){r.isActive()&&(se(r.target)>t?e.activeTargets.push(r):e.skippedTargets.push(r))})})},Re=function(){var t=0;for(G(t);fe();)t=Te(),G(t);return pe()&&ge(),t>0},N,oe=[],Ce=function(){return oe.splice(0).forEach(function(t){return t()})},Se=function(t){if(!N){var s=0,e=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return Ce()}).observe(e,o),N=function(){e.textContent="".concat(s?s--:s++)}}oe.push(t),N()},Oe=function(t){Se(function(){requestAnimationFrame(t)})},L=0,Ee=function(){return!!L},ze=250,ke={attributes:!0,characterData:!0,childList:!0,subtree:!0},j=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],J=function(t){return t===void 0&&(t=0),Date.now()+t},I=!1,Be=function(){function t(){var s=this;this.stopped=!0,this.listener=function(){return s.schedule()}}return t.prototype.run=function(s){var e=this;if(s===void 0&&(s=ze),!I){I=!0;var o=J(s);Oe(function(){var r=!1;try{r=Re()}finally{if(I=!1,s=o-J(),!Ee())return;r?e.run(1e3):s>0?e.run(s):e.start()}})}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var s=this,e=function(){return s.observer&&s.observer.observe(document.body,ke)};document.body?e():C.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var s=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),j.forEach(function(e){return C.addEventListener(e,s.listener,!0)}))},t.prototype.stop=function(){var s=this;this.stopped||(this.observer&&this.observer.disconnect(),j.forEach(function(e){return C.removeEventListener(e,s.listener,!0)}),this.stopped=!0)},t}(),q=new Be,K=function(t){!L&&t>0&&q.start(),L+=t,!L&&q.stop()},Le=function(t){return!F(t)&&!we(t)&&getComputedStyle(t).display==="inline"},Ae=function(){function t(s,e){this.target=s,this.observedBox=e||S.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var s=te(this.target,this.observedBox,!0);return Le(this.target)&&(this.lastReportedSize=s),this.lastReportedSize.inlineSize!==s.inlineSize||this.lastReportedSize.blockSize!==s.blockSize},t}(),Ne=function(){function t(s,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=s,this.callback=e}return t}(),k=new WeakMap,Y=function(t,s){for(var e=0;e<t.length;e+=1)if(t[e].target===s)return e;return-1},B=function(){function t(){}return t.connect=function(s,e){var o=new Ne(s,e);k.set(s,o)},t.observe=function(s,e,o){var r=k.get(s),i=r.observationTargets.length===0;Y(r.observationTargets,e)<0&&(i&&f.push(r),r.observationTargets.push(new Ae(e,o&&o.box)),K(1),q.schedule())},t.unobserve=function(s,e){var o=k.get(s),r=Y(o.observationTargets,e),i=o.observationTargets.length===1;r>=0&&(i&&f.splice(f.indexOf(o),1),o.observationTargets.splice(r,1),K(-1))},t.disconnect=function(s){var e=this,o=k.get(s);o.observationTargets.slice().forEach(function(r){return e.unobserve(s,r.target)}),o.activeTargets.splice(0,o.activeTargets.length)},t}(),Ie=function(){function t(s){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof s!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");B.connect(this,s)}return t.prototype.observe=function(s,e){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!U(s))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");B.observe(this,s,e)},t.prototype.unobserve=function(s){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!U(s))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");B.unobserve(this,s)},t.prototype.disconnect=function(){B.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();class qe{constructor(s,{target:e,config:o,callback:r,skipInitial:i}){this.t=new Set,this.o=!1,this.i=!1,this.h=s,e!==null&&this.t.add(e!=null?e:s),this.l=o,this.o=i!=null?i:this.o,this.callback=r,window.ResizeObserver?(this.u=new ResizeObserver(n=>{this.handleChanges(n),this.h.requestUpdate()}),s.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(s){var e;this.value=(e=this.callback)==null?void 0:e.call(this,s,this.u)}hostConnected(){for(const s of this.t)this.observe(s)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(s){this.t.add(s),this.u.observe(s,this.l),this.i=!0,this.h.requestUpdate()}unobserve(s){this.t.delete(s),this.u.unobserve(s)}disconnect(){this.u.disconnect()}}const re=new WeakMap;function De(t,s){let e=s;for(;e;){if(re.get(e)===t)return!0;e=Object.getPrototypeOf(e)}return!1}function Pe(t){return s=>{if(De(t,s))return s;const e=t(s);return re.set(e,t),e}}const Fe=t=>{var s;return!/[^\t\n\r ]/.test((s=t==null?void 0:t.textContent)!=null?s:"")},We=t=>t.nodeType===8||t.nodeType===3&&Fe(t),Me=t=>class extends t{constructor(){super(...arguments);m(this,"_onSlotChange",o=>{var R;const{target:r}=o,i=r;if(!i)return;const n=i.name||i.getAttribute("name")||"",c=[...i.assignedNodes(),...i.childNodes],d=i.assignedNodes({flatten:!0}),l=[];c.length&&c.forEach(a=>{var w;We(a)||l.push({flatten:a.assignedSlot===null,assignedNodes:a.nodeType===3?(w=a.textContent)==null?void 0:w.trim():a,assignedSlot:a.assignedSlot})});const h=l.filter(a=>a.flatten===!1),u=l.filter(a=>a.flatten===!0),g={assignedNodesByNode:h,assignedNodes:h.map(a=>a.assignedNodes)},y={assignedNodesByNode:u,assignedNodes:u.map(a=>a.assignedNodes)},_={slotName:n,assignedSlot:((R=h[0])==null?void 0:R.assignedSlot)||null},T=new CustomEvent("slotchanges",{composed:!0,detail:{assignedSlotContent:_,assignedNodesContent:g,flattenedNodesContent:y,originalEvent:{event:o,assignedNodes:d}}});this.shadowRoot.dispatchEvent(T)})}connectedCallback(){var o;(o=super.connectedCallback)==null||o.call(this),this.shadowRoot.addEventListener("slotchange",this._onSlotChange)}},ie=Pe(Me),$e=D`:host {
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
}`;window.ResizeObserver||(window.ResizeObserver=Ie);class Ve extends ie(P){constructor(){super();m(this,"_onSlotChanges",e=>{e.stopPropagation(),e.preventDefault(),this._slotChangesCount+=1;const{detail:o}=e,r=o.assignedNodesContent.assignedNodes;o.assignedSlotContent.slotName==="tab"&&(this._tabList=r),o.assignedSlotContent.slotName==="tabpanel"&&(this._tabpanelList=r),Array.isArray(this._slotNodesCount)&&this._slotChangesCount>this._slotNodesCount.length&&this._requestPropertyUpdate("selected")});m(this,"_onTabClick",e=>{const o=e.composedPath().find(i=>i instanceof Element&&i.slot==="tab"),r=this._tabList.indexOf(o)+1;this.selected===r&&this._scrollIntoView(),this.selected=r});m(this,"_onTabKeyDown",e=>{let o="";switch(e.key){case"ArrowLeft":e.preventDefault(),o=this._selectedTabIndexFromOne-1,this.selected=o<=0?this._getTabListLength:o;break;case"ArrowRight":e.preventDefault(),o=this._selectedTabIndexFromOne+1,this.selected=o>this._getTabListLength?1:o;break;case"Home":e.preventDefault(),this.selected=1;break;case"End":e.preventDefault(),this.selected=this._getTabListLength;break}});this.autofocus=!1,this.label="",this.selected=1,this._tabList=[],this._tabpanelList=[],this._selectTabLast=void 0,this._selectTabpanelLast=void 0,this._observedFocus=!1,this._observeScrollBehavior=!1,this._slotChangesCount=0,this._slotNodesCount=void 0,this._scrollContentRef=ue(),this._resizeControllerObserver=new qe(this,{callback:()=>{this._onResizeObserverChange()},skipInitial:!0})}static get styles(){return[$e]}static get properties(){return{autofocus:{type:Boolean},label:{type:String},selected:{type:Number,reflect:!0},_hasScrollLeftIndicator:{type:Boolean,state:!0},_hasScrollRightIndicator:{type:Boolean,state:!0}}}_selectedIsInRange(e){return e>=0&&e<=this._getTabListLength?e:0}get _selectedTab(){return this._tabList[this._selectedIsInRange(this.selected-1)]}get _selectedTabIndex(){return this._tabList.indexOf(this._selectedTab)}get _selectedTabIndexFromOne(){return this._selectedTabIndex+1}get _getTabListLength(){return this._tabList.length}connectedCallback(){var e,o;(e=super.connectedCallback)==null||e.call(this),(o=this.shadowRoot)==null||o.addEventListener("slotchanges",this._onSlotChanges)}firstUpdated(e){var i,n,c,d;super.firstUpdated&&super.firstUpdated(e);const o=(i=this.shadowRoot)==null?void 0:i.querySelector('[name="tab"]'),r=(n=this.shadowRoot)==null?void 0:n.querySelector('[name="tabpanel"]');this._slotNodesCount=(c=this.shadowRoot)==null?void 0:c.querySelectorAll("slot"),this._tabList=o==null?void 0:o.assignedElements(),this._tabpanelList=r==null?void 0:r.assignedElements(),this._indicators=(d=this.shadowRoot)==null?void 0:d.querySelectorAll(".indicator")}updated(e){if(super.updated&&super.updated(e),e.has("selected")){this._selectTab();const o=new CustomEvent("selectedchange",{bubbles:!0,detail:{selected:this._selectedTabIndexFromOne,tab:this._selectedTab,tabpanel:this._tabpanelList[this._selectedTabIndex]}});this.dispatchEvent(o)}}get _scrollContentTpl(){return v`
      <div class="scroll-content" ${be(this._scrollContentRef)} @scroll="${this._scrollEdge}">
        ${this._tablistTpl}
      </div>
    `}get _tablistTpl(){return v`
      <div role="tablist" aria-label="${this.label||ve}">
        <slot @click="${this._onTabClick}" @keydown="${this._onTabKeyDown}" name="tab"></slot>
      </div>
    `}get _separatorTpl(){return v`
      <span aria-hidden="true" class="separator"></span>
    `}get _indicatorsTpl(){return v`
      <span
        aria-hidden="true"
        class="indicator ${this._hasScrollLeftIndicator?"show-indicator":""}"></span>
      <span
        aria-hidden="true"
        class="indicator ${this._hasScrollRightIndicator?"show-indicator":""}"></span>
    `}get _holdTpl(){return v`
      <div class="hold">${this._scrollContentTpl} ${this._separatorTpl} ${this._indicatorsTpl}</div>
    `}get _tabpanelTpl(){return v`
      <div>
        <slot name="tabpanel"></slot>
      </div>
    `}render(){return v`
      ${this._holdTpl} ${this._tabpanelTpl}
    `}_scrollEdge({target:e=this._scrollContentRef.value}={}){const{scrollLeft:o,scrollWidth:r,offsetWidth:i}=e,n=r-i;this._hasScrollLeftIndicator=o>0,this._hasScrollRightIndicator=o<n}_selectTab(){const e=this._tabList[this._selectedTabIndex],o=this._tabpanelList[this._selectedTabIndex];this._selectTabLast&&(this._selectTabLast.selected=!1,this._selectTabPanelLast.selected=!1),this._selectTabLast=e,this._selectTabPanelLast=o,e.selected=!0,o.selected=!0,(this.autofocus||this._observedFocus)&&this._requestFocusUpdate(),this._observedFocus=!0}_moveFocusSelectedTab(e=this._selectedTab){window.setTimeout(()=>{e.focus()},0)}async _requestFocusUpdate(){await this.updateComplete,this._moveFocusSelectedTab(),this._scrollIntoView()}_scrollIntoView(){window.requestAnimationFrame(()=>{this._scrollIntoViewWithOffset(),this._observeScrollBehavior=!0})}_scrollIntoViewWithOffset(e=this._selectedTab,o=this._observeScrollBehavior?"smooth":"auto"){const r=this._scrollContentRef.value;if(!r)return;const[i,n]=this._indicators||[],{right:c}=r.getBoundingClientRect(),{offsetLeft:d}=e,{left:l,right:h,width:u}=e.getBoundingClientRect(),{right:g}=i.getBoundingClientRect(),{width:y,left:_}=n.getBoundingClientRect();if(h>_||l<g){const T=h>_?d-c+u+y:d-g;r.scroll({left:T,behavior:o})}}_requestPropertyUpdate(e){const o=this[e];this[e]=void 0,this[e]=o}_onResizeObserverChange(){this._scrollIntoView(),this._scrollEdge()}}const Ue=D`:host {
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
}`;class He extends ie(P){constructor(){super();m(this,"_onSlotChanges",e=>{const{detail:o}=e;e.stopPropagation(),e.preventDefault();const r=o.assignedSlotContent.assignedSlot;Object.assign(r.dataset,{text:this.textContent})});this.selected=!1,this.globalRootAttributes={role:"tab",slot:"tab",tabindex:0}}static get properties(){return{selected:{type:Boolean}}}static get styles(){return[Ue]}connectedCallback(){var e,o;(e=super.connectedCallback)==null||e.call(this),(o=this.shadowRoot)==null||o.addEventListener("slotchanges",this._onSlotChanges),this.__setArrayAttibute(this.globalRootAttributes)}updated(e){if(super.updated&&super.updated(e),e.has("selected")){const o={...this.globalRootAttributes,"aria-selected":!!this.selected,tabindex:this.selected?0:-1};this.__setArrayAttibute(o)}}render(){return v`
      <slot></slot>
    `}__setArrayAttibute(e={}){Object.entries(e).forEach(([o,r])=>{this.setAttribute(o,r)})}}window.customElements.define("blockquote-tab",He);const Xe=D`:host {
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
}`;class Ge extends P{static get properties(){return{selected:{type:Boolean}}}constructor(){super(),this.selected=!1,this.globalRootAttributes={role:"tabpanel",slot:"tabpanel",tabindex:0}}static get styles(){return[Xe]}connectedCallback(){var s;(s=super.connectedCallback)==null||s.call(this),this.__setArrayAttibute(this.globalRootAttributes)}updated(s){if(super.updated&&super.updated(s),s.has("selected")){const e={...this.globalRootAttributes,"aria-hidden":!this.selected};this.__setArrayAttibute(e)}}render(){return v`
      <slot></slot>
    `}__setArrayAttibute(s={}){Object.entries(s).forEach(([e,o])=>{this.setAttribute(e,o)})}}window.customElements.define("blockquote-tabpanel",Ge);window.customElements.define("blockquote-tabs",Ve);
