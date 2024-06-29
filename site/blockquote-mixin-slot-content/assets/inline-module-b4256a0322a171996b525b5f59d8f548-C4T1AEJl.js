var d=Object.defineProperty;var i=(e,s,t)=>s in e?d(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var a=(e,s,t)=>i(e,typeof s!="symbol"?s+"":s,t);import{s as r,x as l}from"./lit-element-CH2uaVH_.js";import{B as c}from"./BlockquoteMixinSlotContent-D---esK8.js";const o=document.querySelector("slot-element");document.getElementById("add").addEventListener("click",()=>{const e=document.createElement("p"),s=Math.floor(Math.random()*Number(o.getAttribute("slots"))+1);Object.assign(e,{slot:`slot${s}`,textContent:`Slot-Random-Group-${s}`}),o.appendChild(e)});document.getElementById("remove").addEventListener("click",()=>{const e=o.children,s=Math.floor(Math.random()*Number(o.getAttribute("slots"))+1);e[s]&&o.removeChild(e[s])});document.getElementById("add-group").addEventListener("click",()=>{const e=document.createElement("p");o.slots+=1,Object.assign(e,{slot:`slot${o.slots}`,textContent:`Slot-New-Group ${o.slots}-1`}),o.appendChild(e)});class m extends c(r){constructor(){super();a(this,"_onSlotChanges",t=>{const{detail:n}=t;t.stopPropagation(),t.preventDefault(),console.info(n),console.info("assignedNodes ==>",n.assignedNodesContent.assignedNodes,"-",n.assignedSlotContent.slotName)});this.slots=0}static get properties(){return{slots:{type:Number,reflect:!0}}}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchanges",this._onSlotChanges)}update(t){t.has("slots")&&this._initializeSlots(),super.update&&super.update(t)}_initializeSlots(){this._slots=[];for(let t=0;t<this.slots;t+=1)this._slots[t]=[]}render(){return l`
            ${this._slotsTpl}
          `}get _slotsTpl(){return l`
            ${this._slots.map((t,n)=>l`
                <div>
                  <span>==</span>
                  <slot name="slot${n+1}"></slot>
                </div>
              `)}
          `}}customElements.define("slot-element",m);
