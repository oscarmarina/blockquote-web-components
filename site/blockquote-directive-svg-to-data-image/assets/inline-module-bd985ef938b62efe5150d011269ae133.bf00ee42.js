import{e as i,i as l,n as c,a as o,s as m,b as v,w as u,y as d}from"./directive-helpers.d0d4c120.js";const h=(t="")=>`data:image/svg+xml;charset=utf-8,${encodeURI(t).replace(/#/g,"%23")}`,r=t=>c(t,o.SVG),g=(t=[],e=[])=>t.map((n,s)=>[n,r(e[s])?g(e[s].strings,e[s].values).join(""):e[s]].join(""));class b extends l{render(e){if(!e||!r(e))return"";const n=e.strings,s=e.values,a=g(n,s).join("");return h(a)}}const p=i(b);class S extends m{static get styles(){return v`
            :host {
              display: flex;
              align-items: center;
              justify-content: center;
              box-sizing: border-box;
            }

            div {
              width: 6.25rem;
              height: 6.25rem;
              border-radius: 50%;
              background: center center / cover no-repeat rgb(255, 235, 59);
            }
          `}get _svgTag(){return u`<svg id="${Math.random().toString(36).substring(2,10)}" width="51" height="51" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.417 0 0 11.417 0 25.5S11.417 51 25.5 51 51 39.583 51 25.5 39.583 0 25.5 0zm-.385 5.064a3.3 3.3 0 0 1 3.307 3.291 3.304 3.304 0 0 1-3.307 3.306 3.3 3.3 0 0 1-3.29-3.306 3.29 3.29 0 0 1 3.29-3.291zm14.289 10.652l-9.809 1.24.005 9.817 4.755 15.867a1.85 1.85 0 0 1-1.344 2.252c-.989.25-2.003-.3-2.252-1.298l-4.87-14.443h-1.498l-4.48 14.742c-.374.964-1.448 1.404-2.407 1.03-.954-.37-1.533-1.454-1.158-2.418l4.115-15.572v-9.978l-9.04-1.228c-.928-.075-1.558-.89-1.483-1.818.07-.934.914-1.628 1.838-1.554l10.982.944h4.815l11.69-.963a1.68 1.68 0 0 1 1.749 1.623c.04.924-.68 1.718-1.608 1.758z"></path></svg>`}render(){return d`
            <div
              aria-hidden="true"
              style="background-image: url('${p(this._svgTag)}');"
            ></div>
          `}}customElements.define("bg-element",S);