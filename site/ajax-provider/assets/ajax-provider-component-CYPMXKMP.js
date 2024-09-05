var l=Object.defineProperty;var c=(r,e,t)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>c(r,typeof e!="symbol"?e+"":e,t);import{h,a as u,k as x}from"./directive-D5z0NHIa.js";import{A as b}from"./AjaxProvider-5ku8_tYG.js";class p extends h{async connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),await this.updateComplete,this.json=(t=this.shadowRoot)==null?void 0:t.getElementById("json")}render(){return x`
      <label for="selectOption">
        Testing different HTTP Verbs
        <a target="_blank" rel="noopener" href="https://httpbin.org/#/HTTP_Methods/">
          - httpbin.org
        </a>
      </label>
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
      <p>Open DevTools to view different events</p>
      <ix-object-inspector name="object-inspector" expandLevel="2" id="json"></ix-object-inspector>
    `}_onHandleChange({target:e}){const{value:t}=e;this._makeRequest(t)}_makeRequest(e){const t=e==="FORMDATA"?"POST":e,d={url:"https://httpbin.org",method:t};let n={};const s=new FormData;switch(s.append("rxjs","Ajax"),s.append("ajax","RxJS"),e){case"GET":n={path:e.toLowerCase()};break;case"POST":n={path:e.toLowerCase(),headers:{"Content-Type":"application/json","rxjs-custom-header":"Rxjs"},body:{rxjs:`Body ${t}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case"FORMDATA":n={path:"post",headers:{"rxjs-custom-header":"Rxjs"},body:s};break;case"PATCH":n={path:e.toLowerCase(),body:{rxjs:`Body ${t}`}};break;case"PUT":n={path:e.toLowerCase(),body:{rxjs:`Body ${t}`}};break;case"DELETE":n={path:e.toLowerCase(),body:{rxjs:`Body ${t}`},includeDownloadProgress:!0,includeUploadProgress:!0};break;case"ERROR":n={path:"status/500",method:"GET"};break;default:console.error("Invalid HTTP method");return}const a=new b({...d,...n});a.addEventListener("ajaxpresend",({detail:o})=>{this.json&&(this.json.data=void 0),console.log(`ajaxpresend: ${o}`)}),a.addEventListener("ajaxresponse",({detail:o})=>console.log(o)),a.addEventListener("ajaxprogress",({detail:o})=>console.log(o)),a.addEventListener("ajaxresponseend",({detail:o})=>console.log(`ajaxresponseend: ${o}`)),a.addEventListener("ajaxerror",({detail:o})=>console.dir(o)),a.addEventListener("ajaxerrorend",({detail:o})=>console.log(`ajaxerrorend: ${o}`)),a.generateRequest().then(o=>{this.json.data=o,console.log(`RESULT ${e}`,o)}).catch(o=>{this.json.data=o,console.dir(o)})}}i(p,"styles",u`
    :host {
      display: flex;
      flex-direction: column;
      width: clamp(45ch, 50%, 75ch);
      margin: 0 auto;
      padding: 2rem;
    }

    a {
      text-decoration: none;
    }

    label {
      display: inline-block;
      margin-bottom: 1rem;
    }

    .select-dropdown {
      position: relative;
      background-color: #e6e6e6;
      margin-bottom: 1rem;
    }

    .select-dropdown select {
      font: inherit;
      width: 100%;
      padding: 12px 30px 12px 10px;
      border: none;
      background-color: transparent;
      -moz-appearance: none;
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
      right: 0.75rem;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #aaa;
    }

    p,
    a {
      font-size: 0.9rem;
    }

    p {
      text-align: center;
    }

    ix-object-inspector {
      padding: 0.5rem;
      background-color: #fff;
    }
  `);customElements.define("ajax-provider-component",p);
