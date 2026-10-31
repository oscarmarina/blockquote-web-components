import{a as e,n as t,t as n}from"./xstate-counter-styles.css-pUD8Ej47.js";import{n as r,t as i}from"./counterMachine-DxcHqyu5.js";function a(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function o(e,t){a(e,t),t.add(e)}function s(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}var c=e=>new Proxy({},{get:(t,n)=>typeof n==`string`&&n!==`then`?t=>e({...t,type:n}):void 0}),l=new WeakSet,u=class{constructor(e,{machine:t,options:n,callback:r,onError:i}){o(this,l),this.onNext=e=>{if(this.currentSnapshot!==e){var t;this.currentSnapshot=e,(t=this.callback)==null||t.call(this,e),this.host.requestUpdate()}},this.machine=t,this.options=n,this.callback=r,this.onError=i,this.actorRef=s(l,this,d).call(this),this.currentSnapshot=this.snapshot,this.trigger=c(e=>this.actorRef.send(e)),this.can=c(e=>this.snapshot.can(e)),(this.host=e).addController(this)}get actor(){return this.actorRef}get snapshot(){return this.actorRef.getSnapshot()}send(e){this.actorRef.send(e)}unsubscribe(){var e;(e=this.subscription)==null||e.unsubscribe(),this.subscription=void 0}get isActive(){return this.actorRef.getSnapshot().status===`active`}startService(){if(this.subscription)return;this.isActive||(this.actorRef=s(l,this,d).call(this));let e=this.actorRef;this.currentSnapshot=void 0,this.subscription=e.subscribe({next:this.onNext,error:t=>{var n;this.onNext(e.getSnapshot()),(n=this.onError)==null||n.call(this,t)},complete:()=>this.onNext(e.getSnapshot()),passive:!this.onError}),e.start(),this.onNext(e.getSnapshot())}stopService(){this.actorRef.stop(),this.unsubscribe()}hostConnected(){this.startService()}hostDisconnected(){this.stopService()}};function d(){return r(this.machine,this.options)}function f(e){"@babel/helpers - typeof";return f=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},f(e)}function p(e,t){if(f(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(f(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function m(e){var t=p(e,`string`);return f(t)==`symbol`?t:t+``}function h(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=new WeakSet,_=class extends t{constructor(){super(),o(this,g),h(this,`_callbackCounterController`,e=>{this._xstate=e.status===`stopped`?void 0:e}),h(this,`_inspectEvents`,e=>{console.info(`inspect event`,e)}),this._xstate=void 0,this.counterController=new u(this,{machine:i,options:{inspect:this._inspectEvents},callback:this._callbackCounterController})}updated(e){var t;if((t=super.updated)==null||t.call(this,e),e.has(`_xstate`)&&this._xstate){let{context:e,value:t}=this._xstate,n=new CustomEvent(`counterchange`,{bubbles:!0,detail:{...e,value:t}});this.dispatchEvent(n)}}render(){let{can:t,trigger:n,snapshot:r}=this.counterController;return e`
      <slot></slot>
      <div data-disabled="${v.call(s(g,this))}">
        <span>
          <button ?disabled="${!t.INC()}" data-counter="increment" @click=${()=>n.INC()}>
            Increment
          </button>
          <button ?disabled="${!t.DEC()}" data-counter="decrement" @click=${()=>n.DEC()}>
            Decrement
          </button>
        </span>
        <p>${r.context.counter}</p>
      </div>
      <div>
        <button @click=${()=>n.TOGGLE()}>
          ${v.call(s(g,this))?`Enabled counter`:`Disabled counter`}
        </button>
      </div>
      <span>
        <slot></slot>
        <span>
          The “Disabled counter” disables the counter for: ${r.context.counter*1e3}
          milliseconds.
        </span>
      </span>
    `}};function v(){return this.counterController.snapshot.matches(`disabled`)}h(_,`properties`,{_xstate:{type:Object,state:!0}}),h(_,`styles`,[n]),window.customElements.define(`xstate-counter`,_);export{_ as t};