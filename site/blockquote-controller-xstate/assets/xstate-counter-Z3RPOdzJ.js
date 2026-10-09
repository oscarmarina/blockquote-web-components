import{n as e,t}from"./counterMachine-Bz7h5NJM.js";import{a as n,n as r,t as i}from"./xstate-counter-styles.css-pUD8Ej47.js";function a(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function o(e,t){a(e,t),t.add(e)}function s(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}var c=e=>{typeof globalThis.reportError==`function`?globalThis.reportError(e):setTimeout(()=>{throw e})},l=new WeakSet,u=class{constructor(e,{machine:t,options:n,callback:r,onError:i}){o(this,l),this.onNext=e=>{if(this.currentSnapshot!==e){var t;this.currentSnapshot=e,(t=this.callback)==null||t.call(this,e),this.host.requestUpdate()}},this.machine=t,this.options=n,this.callback=r,this.onError=i,this.actorRef=s(l,this,d).call(this),this.currentSnapshot=this.snapshot,(this.host=e).addController(this)}get actor(){return this.actorRef}get snapshot(){var e;return(e=this.actorRef)==null?void 0:e.getSnapshot()}send(e){var t;(t=this.actorRef)==null||t.send(e)}unsubscribe(){var e;(e=this.subscription)==null||e.unsubscribe(),this.subscription=void 0}get isActive(){var e;let t=(e=this.actorRef)==null?void 0:e.getSnapshot();return(t==null?void 0:t.status)===`active`}startService(){if(this.subscription)return;(!this.actorRef||!this.isActive)&&(this.actorRef=s(l,this,d).call(this));let e=this.actorRef;this.currentSnapshot=void 0,this.subscription=e.subscribe({next:this.onNext,error:t=>{this.onNext(e.getSnapshot()),this.onError?this.onError(t):c(t)},complete:()=>this.onNext(e.getSnapshot())}),e.start(),this.onNext(e.getSnapshot())}stopService(){var e;(e=this.actorRef)==null||e.stop(),this.unsubscribe()}hostConnected(){this.startService()}hostDisconnected(){this.stopService()}};function d(){return e(this.machine,this.options)}function f(e){"@babel/helpers - typeof";return f=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},f(e)}function p(e,t){if(f(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(f(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function m(e){var t=p(e,`string`);return f(t)==`symbol`?t:t+``}function h(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=new WeakSet,_=class extends r{constructor(){super(),o(this,g),h(this,`_callbackCounterController`,e=>{this._xstate=(e==null?void 0:e.status)===`stopped`?{}:e}),h(this,`_inspectEvents`,e=>{console.info(`inspect event`,e)}),this._xstate={},this.counterController=new u(this,{machine:t,options:{inspect:this._inspectEvents},callback:this._callbackCounterController})}updated(e){var t;if((t=super.updated)==null||t.call(this,e),e.has(`_xstate`)&&this._xstate&&`value`in this._xstate){let{context:e,value:t}=this._xstate,n=new CustomEvent(`counterchange`,{bubbles:!0,detail:{...e,value:t}});this.dispatchEvent(n)}}render(){var e,t,r;return n`
      <slot></slot>
      <div data-disabled="${v.call(s(g,this))}">
        <span>
          <button
            ?disabled="${!s(g,this,y).call(this,`INC`)}"
            data-counter="increment"
            @click=${()=>this.counterController.send({type:`INC`})}>
            Increment
          </button>
          <button
            ?disabled="${!s(g,this,y).call(this,`DEC`)}"
            data-counter="decrement"
            @click=${()=>this.counterController.send({type:`DEC`})}>
            Decrement
          </button>
        </span>
        <p>${(e=this.counterController)==null||(e=e.snapshot)==null?void 0:e.context.counter}</p>
      </div>
      <div>
        <button @click=${()=>this.counterController.send({type:`TOGGLE`})}>
          ${v.call(s(g,this))?`Enabled counter`:`Disabled counter`}
        </button>
      </div>
      <span>
        <slot></slot>
        <span>
          The “Disabled counter” disables the counter for:
          ${((t=(r=this.counterController.snapshot)==null?void 0:r.context.counter)==null?0:t)*1e3} milliseconds.
        </span>
      </span>
    `}};function v(){var e;return(e=this.counterController.snapshot)==null?void 0:e.matches(`disabled`)}function y(e){var t,n;return(t=(n=this.counterController.snapshot)==null?void 0:n.can({type:e}))!=null&&t}h(_,`properties`,{_xstate:{type:Object,state:!0}}),h(_,`styles`,[i]),window.customElements.define(`xstate-counter`,_);export{_ as t};