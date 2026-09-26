import{n as e,t}from"./counterMachine-M0-Emdre.js";import{a as n,n as r,t as i}from"./xstate-counter-styles.css-pUD8Ej47.js";var a=e=>{typeof globalThis.reportError==`function`?globalThis.reportError(e):setTimeout(()=>{throw e})},o=class{constructor(t,{machine:n,options:r,callback:i,onError:a}){this.onNext=e=>{if(this.currentSnapshot!==e){var t;this.currentSnapshot=e,(t=this.callback)==null||t.call(this,e),this.host.requestUpdate()}},this.machine=n,this.options=r,this.callback=i,this.onError=a,this.actorRef=e(this.machine,this.options),this.currentSnapshot=this.snapshot,(this.host=t).addController(this)}get actor(){return this.actorRef}get snapshot(){var e;return(e=this.actorRef)==null?void 0:e.getSnapshot()}send(e){var t;(t=this.actorRef)==null||t.send(e)}unsubscribe(){var e;(e=this.subscription)==null||e.unsubscribe(),this.subscription=void 0}get isActive(){var e;let t=(e=this.actorRef)==null?void 0:e.getSnapshot();return(t==null?void 0:t.status)===`active`}startService(){if(this.subscription)return;(!this.actorRef||!this.isActive)&&(this.actorRef=e(this.machine,this.options));let t=this.actorRef;this.currentSnapshot=void 0,this.subscription=t.subscribe({next:this.onNext,error:e=>{this.onNext(t.getSnapshot()),this.onError?this.onError(e):a(e)},complete:()=>this.onNext(t.getSnapshot())}),t.start(),this.onNext(t.getSnapshot())}stopService(){var e;(e=this.actorRef)==null||e.stop(),this.unsubscribe()}hostConnected(){this.startService()}hostDisconnected(){this.stopService()}};function s(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function c(e,t){s(e,t),t.add(e)}function l(e){"@babel/helpers - typeof";return l=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},l(e)}function u(e,t){if(l(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(l(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function d(e){var t=u(e,`string`);return l(t)==`symbol`?t:t+``}function f(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}var m=new WeakSet,h=class extends r{constructor(){super(),c(this,m),f(this,`_callbackCounterController`,e=>{this._xstate=(e==null?void 0:e.status)===`stopped`?{}:e}),f(this,`_inspectEvents`,e=>{console.info(`inspect event`,e)}),this._xstate={},this.counterController=new o(this,{machine:t,options:{inspect:this._inspectEvents},callback:this._callbackCounterController})}updated(e){var t;if((t=super.updated)==null||t.call(this,e),e.has(`_xstate`)&&this._xstate&&`value`in this._xstate){let{context:e,value:t}=this._xstate,n=new CustomEvent(`counterchange`,{bubbles:!0,detail:{...e,value:t}});this.dispatchEvent(n)}}render(){var e,t,r;return n`
      <slot></slot>
      <div data-disabled="${g.call(p(m,this))}">
        <span>
          <button
            ?disabled="${g.call(p(m,this))}"
            data-counter="increment"
            @click=${()=>this.counterController.send({type:`INC`})}>
            Increment
          </button>
          <button
            ?disabled="${g.call(p(m,this))}"
            data-counter="decrement"
            @click=${()=>this.counterController.send({type:`DEC`})}>
            Decrement
          </button>
        </span>
        <p>${(e=this.counterController)==null||(e=e.snapshot)==null?void 0:e.context.counter}</p>
      </div>
      <div>
        <button @click=${()=>this.counterController.send({type:`TOGGLE`})}>
          ${g.call(p(m,this))?`Enabled counter`:`Disabled counter`}
        </button>
      </div>
      <span>
        <slot></slot>
        <span>
          The “Disabled counter” disables the counter for:
          ${((t=(r=this.counterController.snapshot)==null?void 0:r.context.counter)==null?0:t)*1e3} milliseconds.
        </span>
      </span>
    `}};function g(){var e;return(e=this.counterController.snapshot)==null?void 0:e.matches(`disabled`)}f(h,`properties`,{_xstate:{type:Object,state:!0}}),f(h,`styles`,[i]),window.customElements.define(`xstate-counter`,h);export{h as t};