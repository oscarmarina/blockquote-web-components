import{s as i,y as l}from"./lit-element-7d972d0c.js";import{B as r}from"./BlockquoteMixinSlotContent-2991345e.js";const o=document.querySelector("slot-element");function a(t){let e="",n;for(let s=0;s<t;s++)n=Math.floor(Math.random()*25+97),e+=String.fromCharCode(n);return e}document.getElementById("add").addEventListener("click",()=>{const t=document.createElement("p");t.textContent=a(5),o.appendChild(t)});document.getElementById("remove").addEventListener("click",()=>{const t=o.children;t[t.length-1]&&o.removeChild(t[t.length-1])});class c extends r(i){static get properties(){return{counter:{type:Number},originalCounter:{type:Number}}}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchanges",this._onSlotChanges.bind(this))}_onSlotChanges(e){const{detail:n}=e;e.stopPropagation(),e.preventDefault(),this._contentSlots=n.assignedNodesContent.assignedNodes,this._originalContentSlots=n.originalEvent.assignedNodes,this.counter=this._contentSlots.length,this.originalCounter=this._originalContentSlots.length,console.info(n),console.info("assignedNodes ==>",this._contentSlots)}render(){return l`
            <p>
              <strong>contentSlots: </strong> ${this.counter} -
              <span style="font-size: 90%;">(originalEvent: ${this.originalCounter})</span>
            </p>
            <hr />
            <slot></slot>
          `}}customElements.define("slot-element",c);
