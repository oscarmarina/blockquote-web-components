var l=Object.defineProperty;var c=(a,e,t)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var i=(a,e,t)=>(c(a,typeof e!="symbol"?e+"":e,t),t);import{s as h,i as x,x as g}from"./lit-element-58y1EBFb.js";import{A as b}from"./AjaxProvider-SfJeoDf4.js";class p extends h{firstUpdated(){this.json=this.renderRoot.getElementById("json")}render(){return g`
            <label for="selectOption">Testing different HTTP verbs</label>
            <div class="select-dropdown">
              <select id="selectOption" @change=${this._onHandleChange}>
                <option>[ HTTP Methods ]</option>
                <option value="GET">Get</option>
                <option value="POST">Post</option>
                <option value="FORMDATA">Post - FormData</option>
                <option value="PATCH">Patch</option>
                <option value="PUT">Put</option>
                <option value="DELETE">Delete</option>
                <option value="ERROR">Error</option>
              </select>
            </div>
            <p>
              <span>Open DevTools</span>
              <a target="_blank" rel="noopener" href="https://httpbin.org/#/HTTP_Methods/"
                >httpbin.org</a
              >
            </p>
            <json-viewer id="json"></json-viewer>
          `}_onHandleChange(e){const t=e.target.value;this._makeRequest(t)}_makeRequest(e){const t=e==="FORMDATA"?"POST":e,d={url:"https://httpbin.org",method:t};let n={};const s=new FormData;switch(s.append("rxjs","Ajax"),s.append("ajax","RxJS"),e){case"GET":n={path:e.toLowerCase()};break;case"POST":n={path:e.toLowerCase(),headers:{"Content-Type":"application/json","rxjs-custom-header":"Rxjs"},body:{rxjs:`Body ${t}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case"FORMDATA":n={path:"POST".toLowerCase(),headers:{"rxjs-custom-header":"Rxjs"},body:s};break;case"PATCH":n={path:e.toLowerCase(),body:{rxjs:`Body ${t}`}};break;case"PUT":n={path:e.toLowerCase(),body:{rxjs:`Body ${t}`}};break;case"DELETE":n={path:e.toLowerCase(),body:{rxjs:`Body ${t}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case"ERROR":n={path:"status/500",method:"GET"};break;default:console.error("Invalid HTTP method");return}const r=new b({...d,...n});r.addEventListener("ajaxpresend",({detail:o})=>console.log(`ajaxpresend: ${o}`)),r.addEventListener("ajaxresponse",({detail:o})=>console.log(o)),r.addEventListener("ajaxprogress",({detail:o})=>console.log(o)),r.addEventListener("ajaxresponseend",({detail:o})=>console.log(`ajaxresponseend: ${o}`)),r.addEventListener("ajaxerror",({detail:o})=>console.dir(o)),r.addEventListener("ajaxerrorend",({detail:o})=>console.log(`ajaxerrorend: ${o}`)),r.generateRequest().then(o=>{this.json.data=(o.request={})&&o,console.log(`RESULT ${e}`,o)}).catch(o=>{this.json.data=(o.request={})&&o,console.dir(o)})}}i(p,"styles",x`
                :host {
                  display: flex;
                  flex-direction: column;
                  align-items: center;

                  padding: 2rem;
                }

                label {
                  display: inline-block;
                  margin-bottom: 1rem;
                }

                .select-dropdown {
                  position: relative;
                  background-color: #e6e6e6;
                }

                .select-dropdown select {
                  font: inherit;
                  max-width: 100%;
                  padding: 12px 30px 12px 10px;
                  border: none;
                  background-color: transparent;
                  -moz-appearance:none
                  -webkit-appearance: none;
                  appearance: none;
                  cursor: pointer;
                }

                .select-dropdown select:active,
                .select-dropdown select:focus {
                  outline: 1px solid #9e9e9e;
                  outline-offset: 2px;
                }

                .select-dropdown:after {
                  content: ' ';
                  pointer-events: none;
                  position: absolute;
                  top: 50%;
                  margin-top: -0.1rem;
                  right:0.75rem;
                  width: 0;
                  height: 0;
                  border-left: 5px solid transparent;
                  border-right: 5px solid transparent;
                  border-top: 5px solid #aaa;
                }

                p {
                  text-align: center;
                  margin-top: 0.5rem;
                  font-size: 0.8rem;
                }

                span {
                  display:block;
                  margin-bottom: 0.4rem;
                }

                json-viewer {
                  --font-family: monospace;
                  --font-size: inherit;

                  max-width: max(42%, 300px);
                }

                json-viewer::part(object) {
                  padding: 0 1em;
                }

                json-viewer::part(property) {
                  line-height: 1.48;
                }
              `);customElements.define("ajax-provider-component",p);
