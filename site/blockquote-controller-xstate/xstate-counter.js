var p=Object.defineProperty;var u=s=>{throw TypeError(s)};var b=(s,t,e)=>t in s?p(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>b(s,typeof t!="symbol"?t+"":t,e),m=(s,t,e)=>t.has(s)||u("Cannot "+e);var r=(s,t,e)=>(m(s,t,"read from private field"),e?e.call(s):t.get(s)),l=(s,t,e)=>t.has(s)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);import{a as x,s as v,b as C}from"./assets/xstate-counter-styles.css-Cve7lvfW.js";import{c as f,a as _}from"./assets/counterMachine-CFIe7BBL.js";class k{constructor(t,{machine:e,options:c,callback:a}){o(this,"onNext",t=>{var e;this.currentSnapshot!==t&&(this.currentSnapshot=t,(e=this.callback)==null||e.call(this,t),this.host.requestUpdate())});this.machine=e,this.options=c,this.callback=a,this.currentSnapshot=this.snapshot,(this.host=t).addController(this)}get actor(){return this.actorRef}get snapshot(){var t,e;return(e=(t=this.actorRef)==null?void 0:t.getSnapshot)==null?void 0:e.call(t)}send(t){var e;(e=this.actorRef)==null||e.send(t)}unsubscribe(){var t;(t=this.subs)==null||t.unsubscribe()}startService(){var t,e;this.actorRef=f(this.machine,this.options),this.subs=(t=this.actorRef)==null?void 0:t.subscribe(this.onNext),(e=this.actorRef)==null||e.start()}stopService(){var t;(t=this.actorRef)==null||t.stop()}hostConnected(){this.startService()}hostDisconnected(){this.stopService()}}var n,i;class h extends x{constructor(){super();l(this,n);o(this,"_callbackCounterController",e=>{this._xstate=e});o(this,"_inspectEvents",e=>{e.type==="@xstate.snapshot"&&e.event.type==="xstate.stop"&&(this._xstate={})});this._xstate={},this.counterController=new k(this,{machine:_,options:{inspect:this._inspectEvents},callback:this._callbackCounterController})}updated(e){if(super.updated&&super.updated(e),e.has("_xstate")){const{context:c,value:a}=this._xstate,d=new CustomEvent("counterchange",{bubbles:!0,detail:{...c,value:a}});this.dispatchEvent(d)}}render(){return C`
      <slot></slot>
      <div aria-disabled="${r(this,n,i)}">
        <span>
          <button
            ?disabled="${r(this,n,i)}"
            data-counter="increment"
            @click=${()=>this.counterController.send({type:"INC"})}>
            Increment
          </button>
          <button
            ?disabled="${r(this,n,i)}"
            data-counter="decrement"
            @click=${()=>this.counterController.send({type:"DEC"})}>
            Decrement
          </button>
        </span>
        <p>${this.counterController.snapshot.context.counter}</p>
      </div>
      <div>
        <button @click=${()=>this.counterController.send({type:"TOGGLE"})}>
          ${r(this,n,i)?"Enabled counter":"Disabled counter"}
        </button>
      </div>
    `}}n=new WeakSet,i=function(){return this.counterController.snapshot.matches("disabled")},o(h,"properties",{_xstate:{type:Object,state:!0}}),o(h,"styles",[v]);window.customElements.define("xstate-counter",h);export{h as XstateCounter};
