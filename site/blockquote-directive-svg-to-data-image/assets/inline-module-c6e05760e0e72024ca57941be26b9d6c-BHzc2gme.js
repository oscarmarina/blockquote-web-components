import{s as r,i,b as e,x as t}from"./directive-helpers-CfvjnJE5.js";import{b as s}from"./BlockquoteDirectiveSvgToDataImage-BRjzJET2.js";class l extends r{static get properties(){return{bgFill:{type:"String",attribute:"bg-fill"}}}constructor(){super(),this.bgFill="rgb(32, 32, 32)"}static get styles(){return i`
            :host {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              box-sizing: border-box;
            }

            a {
              display: block;
              width: 6.25rem;
              height: 6.25rem;
              border-radius: 50%;
              background: center center / cover no-repeat;
            }

            /*
              https://zellwk.com/blog/style-hover-focus-active-states
              https://bugs.webkit.org/show_bug.cgi?id=20807
            */
            a:hover,
            a:focus,
            a:active {
              outline: 2px dashed rgb(184, 184, 184);
              outline-offset: 2px;
            }

            .sr-only {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border: 0;
            }
          `}get _bgTpl(){return e` <circle fill="${this.bgFill}" cx="100" cy="100" r="100"></circle> `}get _shapeTpl(){return e`
            <g fill="#fff">
              <circle cx="100" cy="35.819" r="14.926"></circle>
              <path
                d="M164.771 50.73a7.459 7.459 0 0 0-8.814-5.802L100 56.465 44.043 44.928a7.46 7.46 0 0 0-8.815 5.802 7.461 7.461 0 0 0 5.803 8.815l41.805 8.62v45.563l-11.782 56.387a7.46 7.46 0 0 0 5.778 8.83c.515.107 1.028.16 1.535.16a7.467 7.467 0 0 0 7.297-5.938l12.015-57.498c.224-1.188 1.086-2.237 2.323-2.237 1.236 0 2.123 1.049 2.322 2.237l12.016 57.498a7.464 7.464 0 0 0 8.831 5.778 7.458 7.458 0 0 0 5.776-8.83l-11.781-56.391V68.166l41.807-8.62a7.46 7.46 0 0 0 5.798-8.816z"
              ></path>
            </g>
          `}get _svgTag(){return t`<svg
            id="${Math.random().toString(36).substring(2,10)}"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            focusable="false"
            role="presentation"
            viewBox="0 0 200 200"
          >
            ${this._bgTpl} ${this._shapeTpl}
          </svg>`}render(){return t`
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://accessibility-club.org/"
              style="background-image:var(--bgUrl,
              url('${s(this._svgTag)}'));"
            >
              <span class="sr-only">Accessibility Club</span>
            </a>
          `}}customElements.define("bg-element",l);
