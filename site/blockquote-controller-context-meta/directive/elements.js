import{a as e,d as t,m as n,o as r,t as i}from"../assets/src-ZFMlM1TH.js";import{t as a}from"../assets/defineProperty-BbfpZ9Tg.js";var o=Symbol.for(`symbol-for-surface`),s=class extends r{constructor(){super(),this._provider=new e(this,{context:o}),this.data=void 0}willUpdate(e){var t;(t=super.willUpdate)==null||t.call(this,e),e.has(`data`)&&this._provider.setValue(this.data)}render(){return t`
      <p>
        Provider data:
        <code>${this.data}</code>
      </p>
      <consumer-el></consumer-el>
      <div
        id="data-info-1"
        data-info="${i(`${this.data} #data-info-1`,{context:o})}">
        <p>Div Element (Provider)</p>
        <consumer-el></consumer-el>
      </div>
      <div
        id="data-info-2"
        ${i(`${this.data} #data-info-2`,{context:o})}>
        <p>
          Div Element (Provider)
          <span>with slotted consumer</span>
        </p>
        <slot></slot>
        <hr />
        <consumer-el></consumer-el>
      </div>
    `}};a(s,`styles`,n`
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
  `),a(s,`properties`,{data:{reflect:!0}}),customElements.define(`provider-el`,s);var c=class extends r{constructor(...t){super(...t),a(this,`_consumer`,new e(this,{context:o}))}render(){return t`
      <p>
        Consumer data:
        <code>${this._consumer.value}</code>
      </p>
    `}};a(c,`styles`,n`
    :host {
      display: block;
      border: 1px dashed #adadad;
      padding: 0.25rem;
      padding-inline: 0.5rem;
    }
  `),customElements.define(`consumer-el`,c);export{c as ConsumerEl,s as ProviderEl,o as consumerContext};