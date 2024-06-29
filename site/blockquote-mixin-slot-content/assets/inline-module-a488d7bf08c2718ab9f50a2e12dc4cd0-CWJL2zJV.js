var i=Object.defineProperty;var r=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var l=(t,e,n)=>r(t,typeof e!="symbol"?e+"":e,n);import{s as a,x as c}from"./lit-element-CH2uaVH_.js";import{B as d}from"./BlockquoteMixinSlotContent-D---esK8.js";const s=document.querySelector("slot-element");function g(t){let e="",n;for(let o=0;o<t;o++)n=Math.floor(Math.random()*25+97),e+=String.fromCharCode(n);return e}document.getElementById("add").addEventListener("click",()=>{const t=document.createElement("p");t.textContent=g(5),s.appendChild(t)});document.getElementById("remove").addEventListener("click",()=>{const t=s.children;t[t.length-1]&&s.removeChild(t[t.length-1])});class m extends d(a){constructor(){super(...arguments);l(this,"_onSlotChanges",n=>{const{detail:o}=n;n.stopPropagation(),n.preventDefault(),this._contentSlots=o.assignedNodesContent.assignedNodes,this._originalContentSlots=o.originalEvent.assignedNodes,this.counter=this._contentSlots.length,this.originalCounter=this._originalContentSlots.length,console.info(o),console.info("assignedNodes ==>",this._contentSlots)})}static get properties(){return{counter:{type:Number},originalCounter:{type:Number}}}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchanges",this._onSlotChanges)}render(){return c`
            <p>
              <strong>contentSlots:</strong>
              ${this.counter} -
              <span style="font-size: 90%;">(originalEvent: ${this.originalCounter})</span>
            </p>
            <hr />
            <slot></slot>
          `}}customElements.define("slot-element",m);
