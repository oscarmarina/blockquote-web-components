import{s as l,x as s}from"./lit-element-CH2uaVH_.js";import{B as a}from"./BlockquoteMixinSlotContent-DV3zAdFe.js";const t=document.querySelector("slot-element");document.getElementById("add").addEventListener("click",()=>{if(t.querySelector('[slot="fullName"]'))return;const e=document.createElement("p");Object.assign(e,{slot:"fullName",textContent:"Commit Queue"}),t.appendChild(e)});document.getElementById("remove").addEventListener("click",()=>{const e=t.querySelector('[slot="fullName"]');e&&t.removeChild(e)});class d extends a(l){connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchanges",this._onSlotChanges.bind(this))}_onSlotChanges(n){const{detail:o}=n;n.stopPropagation(),n.preventDefault(),console.info(o),console.info("assignedNodes ==>",o.assignedNodesContent.assignedNodes)}render(){return s`
            <div>
              <slot name="fullName"
                ><slot name="firstName"></slot><slot name="lastName"></slot
              ></slot>
            </div>
          `}}customElements.define("slot-element",d);
