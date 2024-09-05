var m=Object.defineProperty;var d=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var l=(e,t,n)=>d(e,typeof t!="symbol"?t+"":t,n);import{h as i,k as a}from"./lit-element-DwtXF4uR.js";import{B as c}from"./BlockquoteMixinSlotContent-DTbssDG8.js";const o=document.querySelector("slot-element");document.getElementById("add").addEventListener("click",()=>{if(o.querySelector('[slot="fullName"]'))return;const e=document.createElement("p");Object.assign(e,{slot:"fullName",textContent:"Commit Queue"}),o.appendChild(e)});document.getElementById("remove").addEventListener("click",()=>{const e=o.querySelector('[slot="fullName"]');e&&o.removeChild(e)});class r extends c(i){constructor(){super();l(this,"_onSlotChanges",n=>{const{detail:s}=n;console.info(s),console.info("assignedNodes ==>",s.assignedNodesContent.assignedNodes)});this.addEventListener("slotchanges",this._onSlotChanges)}render(){return a`
            <div>
              <slot name="fullName">
                <slot name="firstName"></slot>
                <slot name="lastName"></slot>
              </slot>
            </div>
          `}}customElements.define("slot-element",r);
