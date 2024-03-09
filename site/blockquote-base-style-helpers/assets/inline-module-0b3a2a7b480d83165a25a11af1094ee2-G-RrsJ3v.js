import{i as a,s as n,x as l}from"./lit-element-ZSkjWwnh.js";import{B as t}from"./BlockquoteBaseMeta-Uzmt6UKH.js";const o=(s,e)=>{if(!e.cssText)throw new Error("Value passed to 'setComponentSharedStyles' function must be a 'css' function result");const r=new t({type:"sharedStyles",key:s});r.value=r.value||[],r.value.push(e)},c=new t({type:"sharedStyles"}),h=s=>{const e=c.byKey(s);return e?e.filter(d=>d.cssText):[]};o("shared-element-shared-styles",a`
          .shared2 {
            background-color: #e1f3f8;
          }
        `);o("shared-element-shared-styles",a`
          .shared3 {
            background-color: #fad980;
          }
        `);class u extends n{static get styles(){return[a`
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
            `,h("shared-element-shared-styles")]}render(){return l`
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
          `}}customElements.define("shared-element",u);o("shared-element-shared-styles",a`
          .shared1 {
            background-color: yellow;
          }
        `);
