import{n as e,t}from"./counterMachine-DM7uL9DF.js";import{a as n,n as r,t as i}from"./xstate-counter-styles.css-mU2TAGVr.js";function a(e){"@babel/helpers - typeof";return a=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},a(e)}function o(e,t){if(a(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(a(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function s(e){var t=o(e,`string`);return a(t)==`symbol`?t:t+``}function c(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=class{constructor(e,{machine:t,options:n,callback:r}){c(this,`onNext`,e=>{if(this.currentSnapshot!==e){var t;this.currentSnapshot=e,(t=this.callback)==null||t.call(this,e),this.host.requestUpdate()}}),this.machine=t,this.options=n,this.callback=r,this.currentSnapshot=this.snapshot,(this.host=e).addController(this)}get actor(){return this.actorRef}get snapshot(){var e,t;return(e=this.actorRef)==null||(t=e.getSnapshot)==null?void 0:t.call(e)}send(e){var t;(t=this.actorRef)==null||t.send(e)}unsubscribe(){var e;(e=this.subs)==null||e.unsubscribe()}startService(){var t,n;this.actorRef=e(this.machine,this.options),this.subs=(t=this.actorRef)==null?void 0:t.subscribe(this.onNext),(n=this.actorRef)==null||n.start()}stopService(){var e;(e=this.actorRef)==null||e.stop()}hostConnected(){this.startService()}hostDisconnected(){this.stopService()}};function u(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function d(e,t){u(e,t),t.add(e)}function f(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}var p=new WeakSet,m=class extends r{constructor(){super(),d(this,p),c(this,`_callbackCounterController`,e=>{this._xstate=e}),c(this,`_inspectEvents`,e=>{e.type===`@xstate.snapshot`&&e.event.type===`xstate.stop`&&(this._xstate={})}),this._xstate={},this.counterController=new l(this,{machine:t,options:{inspect:this._inspectEvents},callback:this._callbackCounterController})}updated(e){if(super.updated&&super.updated(e),e.has(`_xstate`)){let{context:e,value:t}=this._xstate,n=new CustomEvent(`counterchange`,{bubbles:!0,detail:{...e,value:t}});this.dispatchEvent(n)}}render(){return n`
      <slot></slot>
      <div aria-disabled="${h.call(f(p,this))}">
        <span>
          <button
            ?disabled="${h.call(f(p,this))}"
            data-counter="increment"
            @click=${()=>this.counterController.send({type:`INC`})}>
            Increment
          </button>
          <button
            ?disabled="${h.call(f(p,this))}"
            data-counter="decrement"
            @click=${()=>this.counterController.send({type:`DEC`})}>
            Decrement
          </button>
        </span>
        <p>${this.counterController.snapshot.context.counter}</p>
      </div>
      <div>
        <button @click=${()=>this.counterController.send({type:`TOGGLE`})}>
          ${h.call(f(p,this))?`Enabled counter`:`Disabled counter`}
        </button>
      </div>
    `}};function h(){return this.counterController.snapshot.matches(`disabled`)}c(m,`properties`,{_xstate:{type:Object,state:!0}}),c(m,`styles`,[i]),window.customElements.define(`xstate-counter`,m);export{c as n,m as t};