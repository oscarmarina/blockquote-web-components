var a=Object.defineProperty;var d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var s=(e,t,n)=>d(e,typeof t!="symbol"?t+"":t,n);import{s as c,x as m}from"./lit-element-CH2uaVH_.js";import{B as i}from"./BlockquoteMixinSlotContent-D---esK8.js";const o=document.querySelector("slot-element");document.getElementById("add").addEventListener("click",()=>{if(o.querySelector('[slot="fullName"]'))return;const e=document.createElement("p");Object.assign(e,{slot:"fullName",textContent:"Commit Queue"}),o.appendChild(e)});document.getElementById("remove").addEventListener("click",()=>{const e=o.querySelector('[slot="fullName"]');e&&o.removeChild(e)});class r extends i(c){constructor(){super(...arguments);s(this,"_onSlotChanges",n=>{const{detail:l}=n;n.stopPropagation(),n.preventDefault(),console.info(l),console.info("assignedNodes ==>",l.assignedNodesContent.assignedNodes)})}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchanges",this._onSlotChanges)}render(){return m`
            <div>
              <slot name="fullName">
                <slot name="firstName"></slot>
                <slot name="lastName"></slot>
              </slot>
            </div>
          `}}customElements.define("slot-element",r);
