var d=Object.defineProperty;var r=(t,e,s)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var i=(t,e,s)=>r(t,typeof e!="symbol"?e+"":e,s);import{r as a,x as l}from"./lit-element-C9kYRCFM.js";import{B as m}from"./BlockquoteMixinSlotContent-DTbssDG8.js";const o=document.querySelector("slot-element");document.getElementById("add").addEventListener("click",()=>{const t=document.createElement("p"),e=Math.floor(Math.random()*Number(o.getAttribute("slots"))+1);Object.assign(t,{slot:`slot${e}`,textContent:`Slot-Random-Group-${e}`}),o.appendChild(t)});document.getElementById("remove").addEventListener("click",()=>{const t=o.children,e=Math.floor(Math.random()*Number(o.getAttribute("slots"))+1);t[e]&&o.removeChild(t[e])});document.getElementById("add-group").addEventListener("click",()=>{const t=document.createElement("p");o.slots+=1,Object.assign(t,{slot:`slot${o.slots}`,textContent:`Slot-New-Group ${o.slots}-1`}),o.appendChild(t)});class c extends m(a){constructor(){super();i(this,"_onSlotChanges",s=>{const{detail:n}=s;console.info(n),console.info("assignedNodes ==>",n.assignedNodesContent.assignedNodes,"-",n.assignedSlotContent.slotName)});this.slots=0,this.addEventListener("slotchanges",this._onSlotChanges)}static get properties(){return{slots:{type:Number,reflect:!0}}}update(s){s.has("slots")&&this._initializeSlots(),super.update&&super.update(s)}_initializeSlots(){this._slots=[];for(let s=0;s<this.slots;s+=1)this._slots[s]=[]}render(){return l`
            ${this._slotsTpl}
          `}get _slotsTpl(){return l`
            ${this._slots.map((s,n)=>l`
                <div>
                  <span>==</span>
                  <slot name="slot${n+1}"></slot>
                </div>
              `)}
          `}}customElements.define("slot-element",c);
