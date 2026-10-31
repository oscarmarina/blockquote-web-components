import{a as e,n as t,t as n}from"./xstate-counter-styles.css-GMG3tkFQ.js";import{n as r,t as i}from"./counterMachine-CDLfN5Ye.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./TickController-DgPWQsZZ.js";var d=e=>new Proxy({},{get:(t,n)=>typeof n==`string`&&n!==`then`?t=>e({...t,type:n}):void 0}),f=new WeakMap,p=new WeakMap,m=new WeakMap,h=new WeakMap,g=new WeakSet,_=new WeakMap,v=class{constructor(e,{machine:t,options:n,onSnapshot:r,onError:i,reconnect:u=`restart`,dispatchEmitted:v=!1}){if(c(this,g),a(this,f,void 0),a(this,p,void 0),a(this,m,void 0),a(this,h,void 0),a(this,_,void 0),l(p,this,new Set),this.onNext=e=>{if(this.currentSnapshot!==e){var t;this.currentSnapshot=e,(t=this.onSnapshot)==null||t.call(this,e),this.host.requestUpdate()}},l(_,this,e=>{if(s(f,this)){let{type:t,...n}=e;this.host.dispatchEvent(new CustomEvent(t,{...s(f,this),detail:n}))}for(let{type:t,handler:n}of s(p,this))if(t===`*`||t===e.type)try{n(e)}catch(e){setTimeout(()=>{throw e})}}),v&&!(e instanceof EventTarget))throw TypeError("`dispatchEmitted` requires a host that is an `EventTarget`.");l(f,this,v===!0?{composed:!0}:v||void 0),this.machine=t,this.options=n,this.onSnapshot=r,this.onError=i,this.reconnect=u,this.actorRef=o(g,this,y).call(this),this.currentSnapshot=this.snapshot,this.trigger=d(e=>this.actorRef.send(e)),this.can=d(e=>this.snapshot.can(e)),this.on=((e,t)=>{let n={type:e,handler:t};return s(p,this).add(n),{unsubscribe:()=>{s(p,this).delete(n)}}}),(this.host=e).addController(this)}get actor(){return this.actorRef}get snapshot(){return this.actorRef.getSnapshot()}send(e){this.actorRef.send(e)}unsubscribe(){var e;(e=this.subscription)==null||e.unsubscribe(),this.subscription=void 0}get isActive(){return this.actorRef.getSnapshot().status===`active`}startService(){if(this.subscription)return;this.isActive||(this.actorRef=o(g,this,y).call(this,o(g,this,b).call(this)));let e=this.actorRef;l(m,this,e.on(`*`,s(_,this))),this.currentSnapshot=void 0,this.subscription=e.subscribe({next:this.onNext,error:t=>{var n;this.onNext(e.getSnapshot()),(n=this.onError)==null||n.call(this,t)},complete:()=>this.onNext(e.getSnapshot()),passive:!this.onError}),e.start(),this.onNext(e.getSnapshot())}stopService(){var e;l(h,this,this.reconnect===`restore`&&this.isActive?{machine:this.machine,snapshot:this.actorRef.getPersistedSnapshot()}:void 0),this.actorRef.stop(),this.unsubscribe(),(e=s(m,this))==null||e.unsubscribe(),l(m,this,void 0)}hostConnected(){this.startService()}hostDisconnected(){this.stopService()}};function y(e){return r(this.machine,e?{...this.options,snapshot:e}:this.options)}function b(){let e=s(h,this);return l(h,this,void 0),this.reconnect===`restore`&&(e==null?void 0:e.machine)===this.machine?e.snapshot:void 0}function x(e){"@babel/helpers - typeof";return x=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},x(e)}function S(e,t){if(x(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(x(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function C(e){var t=S(e,`string`);return x(t)==`symbol`?t:t+``}function w(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=new WeakSet,E=class extends t{constructor(){super(),c(this,T),w(this,`_inspectEvents`,e=>{console.info(`inspect event`,e)}),this.counterController=new v(this,{machine:i,reconnect:`restore`,dispatchEmitted:!0,options:{inspect:this._inspectEvents}}),this.countdownController=new u(this,{interval:100,while:()=>D.call(o(T,this))})}render(){let{can:t,trigger:n,snapshot:r}=this.counterController;return e`
      <slot></slot>
      <div data-disabled="${D.call(o(T,this))}">
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
          ${D.call(o(T,this))?`Enabled counter`:`Disabled counter`}
        </button>
        ${D.call(o(T,this))?e`
                <span class="countdown" role="timer">${O.call(o(T,this))} s</span>
              `:``}
      </div>
      <span>
        <slot></slot>
        <span>
          The “Disabled counter” disables the counter for: ${r.context.counter*1e3}
          milliseconds.
        </span>
      </span>
    `}};function D(){return this.counterController.snapshot.matches(`disabled`)}function O(){let{disabledUntil:e}=this.counterController.snapshot.context;return(Math.max(0,e-Date.now())/1e3).toFixed(1)}w(E,`styles`,[n]),window.customElements.define(`xstate-counter`,E);export{E as t};