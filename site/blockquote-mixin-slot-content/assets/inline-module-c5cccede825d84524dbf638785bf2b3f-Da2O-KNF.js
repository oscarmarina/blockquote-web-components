var l=Object.defineProperty;var r=(t,n,e)=>n in t?l(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var i=(t,n,e)=>r(t,typeof n!="symbol"?n+"":n,e);import{s as a,x as d}from"./lit-element-CH2uaVH_.js";import{B as c}from"./BlockquoteMixinSlotContent-C1OxpoYq.js";const s=document.querySelector("slot-element");function m(t){let n="",e;for(let o=0;o<t;o++)e=Math.floor(Math.random()*25+97),n+=String.fromCharCode(e);return n}document.getElementById("add").addEventListener("click",()=>{const t=document.createElement("p");t.textContent=m(5),s.appendChild(t)});document.getElementById("remove").addEventListener("click",()=>{const t=s.children;t[t.length-1]&&s.removeChild(t[t.length-1])});class g extends c(a){constructor(){super(...arguments);i(this,"_onSlotChanges",e=>{const{detail:o}=e;this._contentSlots=o.assignedNodesContent.assignedNodes,this._originalContentSlots=o.originalEvent.assignedNodes,this.counter=this._contentSlots.length,this.originalCounter=this._originalContentSlots.length,console.info(o),console.info("assignedNodes ==>",this._contentSlots)})}static get properties(){return{counter:{type:Number},originalCounter:{type:Number}}}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.shadowRoot.addEventListener("slotchanges",this._onSlotChanges)}render(){return d`
            <p>
              <strong>contentSlots:</strong>
              ${this.counter} -
              <span style="font-size: 90%;">(originalEvent: ${this.originalCounter})</span>
            </p>
            <hr />
            <slot></slot>
          `}}customElements.define("slot-element",g);
