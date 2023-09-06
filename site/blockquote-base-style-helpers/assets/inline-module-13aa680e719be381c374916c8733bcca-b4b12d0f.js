import{i as e,s as d,x as t}from"./lit-element-d2ccfba6.js";import{B as n,g as c}from"./getComponentSharedStyles-90487c53.js";const s=(a,o)=>{if(!o.cssText)throw new Error("Value passed to 'setComponentSharedStyles' function must be a 'css' function result");const r=new n({type:"sharedStyles",key:a});r.value=r.value||[],r.value.push(o)};s("shared-element-shared-styles",e`
          .shared2 {
            background-color: #e1f3f8;
          }
        `);s("shared-element-shared-styles",e`
          .shared3 {
            background-color: #fad980;
          }
        `);class l extends d{static get styles(){return[e`
              :host {
                display: block;
                box-sizing: border-box;
                color: #212121;
              }

              pre {
                margin: 0;
                padding: 1em;
                white-space: break-spaces;
                line-height: 1.1;
              }
              code {
                font-weight: 700;
              }
              .shared {
                background-color: #e4e2e0;
              }

              .shared ~ .shared {
                margin: 1rem 0 0;
              }
            `,c("shared-element-shared-styles")]}render(){return t`
            <pre class="shared shared1">
<code>
  .shared {
    background-color: #212121;
  }
</code>
</pre>

            <pre class="shared shared2">
<code>
  .shared2 {
    background-color: #e1f3f8;
  }
</code>
</pre>

            <pre class="shared shared3">
<code>
  .shared3 {
    background-color: #fad980;
  }
</code>
</pre>
          `}}customElements.define("shared-element",l);s("shared-element-shared-styles",e`
          .shared1 {
            background-color: yellow;
          }
        `);
