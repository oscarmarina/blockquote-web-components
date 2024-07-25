var d=Object.defineProperty;var m=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var s=(e,n,t)=>m(e,typeof n!="symbol"?n+"":n,t);import{s as a,x as c}from"./lit-element-CH2uaVH_.js";import{B as i}from"./BlockquoteMixinSlotContent-C1OxpoYq.js";const o=document.querySelector("slot-element");document.getElementById("add").addEventListener("click",()=>{if(o.querySelector('[slot="fullName"]'))return;const e=document.createElement("p");Object.assign(e,{slot:"fullName",textContent:"Commit Queue"}),o.appendChild(e)});document.getElementById("remove").addEventListener("click",()=>{const e=o.querySelector('[slot="fullName"]');e&&o.removeChild(e)});class r extends i(a){constructor(){super(...arguments);s(this,"_onSlotChanges",t=>{const{detail:l}=t;console.info(l),console.info("assignedNodes ==>",l.assignedNodesContent.assignedNodes)})}connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),this.shadowRoot.addEventListener("slotchanges",this._onSlotChanges)}render(){return c`
            <div>
              <slot name="fullName">
                <slot name="firstName"></slot>
                <slot name="lastName"></slot>
              </slot>
            </div>
          `}}customElements.define("slot-element",r);
