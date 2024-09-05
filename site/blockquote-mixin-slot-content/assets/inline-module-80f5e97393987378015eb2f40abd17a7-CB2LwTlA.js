var r=Object.defineProperty;var l=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var i=(t,e,n)=>l(t,typeof e!="symbol"?e+"":e,n);import{h as d,k as a}from"./lit-element-DwtXF4uR.js";import{B as c}from"./BlockquoteMixinSlotContent-DTbssDG8.js";const s=document.querySelector("slot-element");function m(t){let e="",n;for(let o=0;o<t;o++)n=Math.floor(Math.random()*25+97),e+=String.fromCharCode(n);return e}document.getElementById("add").addEventListener("click",()=>{const t=document.createElement("p");t.textContent=m(5),s.appendChild(t)});document.getElementById("remove").addEventListener("click",()=>{const t=s.children;t[t.length-1]&&s.removeChild(t[t.length-1])});class g extends c(d){constructor(){super();i(this,"_onSlotChanges",n=>{const{detail:o}=n;this._contentSlots=o.assignedNodesContent.assignedNodes,this._originalContentSlots=o.originalEvent.assignedNodes,this.counter=this._contentSlots.length,this.originalCounter=this._originalContentSlots.length,console.info(o),console.info("assignedNodes ==>",this._contentSlots)});this.addEventListener("slotchanges",this._onSlotChanges)}static get properties(){return{counter:{type:Number},originalCounter:{type:Number}}}render(){return a`
            <p>
              <strong>contentSlots:</strong>
              ${this.counter} -
              <span style="font-size: 90%;">(originalEvent: ${this.originalCounter})</span>
            </p>
            <hr />
            <slot></slot>
          `}}customElements.define("slot-element",g);
