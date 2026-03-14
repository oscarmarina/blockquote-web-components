import{a as e,f as t,h as n,o as r,s as i,t as a}from"../assets/src-BnYe8xbO.js";var o=Symbol.for(`symbol-for-surface`),s=class extends i{constructor(){super(),this._provider=new r(this,{context:o}),this.data=void 0}willUpdate(e){var t;(t=super.willUpdate)==null||t.call(this,e),e.has(`data`)&&this._provider.setValue(this.data)}render(){return t`
      <p>
        Provider data:
        <code>${this.data}</code>
      </p>
      <consumer-el></consumer-el>
      <div
        id="data-info-1"
        data-info="${a(`${this.data} #data-info-1`,{context:o})}">
        <p>Div Element (Provider)</p>
        <consumer-el></consumer-el>
      </div>
      <div
        id="data-info-2"
        ${a(`${this.data} #data-info-2`,{context:o})}>
        <p>
          Div Element (Provider)
          <span>with slotted consumer</span>
        </p>
        <slot></slot>
        <hr />
        <consumer-el></consumer-el>
      </div>
    `}};e(s,`styles`,n`
    :host {
      display: block;
      border: 2px solid #adadad;
      padding: 0.5rem;
    }

    p {
      margin-block: 0.25rem;
    }

    p ~ * {
      margin-block-start: 1rem;
    }

    div {
      border: 1px solid #adadad;
      padding: 0.5rem;
    }

    span {
      display: block;
    }

    span,
    ::slotted(*) {
      margin-inline-start: 0.5em;
    }
  `),e(s,`properties`,{data:{reflect:!0}}),customElements.define(`provider-el`,s);var c=class extends i{constructor(...t){super(...t),e(this,`_consumer`,new r(this,{context:o}))}render(){return t`
      <p>
        Consumer data:
        <code>${this._consumer.value}</code>
      </p>
    `}};e(c,`styles`,n`
    :host {
      display: block;
      border: 1px dashed #adadad;
      padding: 0.25rem;
      padding-inline: 0.5rem;
    }
  `),customElements.define(`consumer-el`,c);export{c as ConsumerEl,s as ProviderEl,o as consumerContext};