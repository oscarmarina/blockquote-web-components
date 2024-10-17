import{i as r,a as o,r as n,x as s}from"./lit-element-CjHJb2xE.js";import{s as c}from"./BlockquoteBaseMeta-5nwymq77.js";const t={main:`
  @font-face {
    font-family: 'Kaisei HarunoUmi';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/kaiseiharunoumi/v8/HI_WiZQSLqBQoAHhK_C6N_nzy_jcInfWlMIFxGC8ThDZtKQqORxzCer7-Vk2pnmh8MIy1A.118.woff2)
      format('woff2');
    unicode-range: U+21-22, U+27-2a, U+2c-3b, U+3f, U+41-4d, U+4f-5d, U+61-7b, U+7d, U+ab, U+ae,
      U+b2-b3, U+b7, U+bb, U+c9, U+cd, U+d6, U+d8, U+dc, U+e0-e5, U+e7-ed, U+ef, U+f1-f4, U+f6, U+f8,
      U+fa, U+fc-fd, U+103, U+14d, U+1b0, U+300-301, U+1ebf, U+1ec7, U+2013-2014, U+201c-201d,
      U+2039-203a, U+203c, U+2048-2049, U+2113, U+2122, U+65e5, U+6708, U+70b9;
  }
  `},a={"--red-300":"#e57373","--red-400":"#ef5350","--red-500":"#f44336","--red-600":"#e53935","--red-700":"#c04545"},f={"--green-300":"#aed581","--green-400":"#9ccc65","--green-500":"#8bc34a","--green-600":"#7cb342","--green-700":"#689f38"},l={"--blue-300":"#0f3058","--blue-400":"#102a4c","--blue-500":"#10243e","--blue-600":"#0f1b2d","--blue-700":"#0f1720"},e={colors:{...a,...f,...l},fontFace:{...t},fonts:{main:"Kaisei HarunoUmi, serif"}},i=`
${e.fontFace.main}
:root {
  --red-300: ${e.colors["--red-300"]};
  --red-400: ${e.colors["--red-400"]};
  --red-500: ${e.colors["--red-500"]};
  --red-600: ${e.colors["--red-600"]};
  --red-700: ${e.colors["--red-700"]};

  --green-300: ${e.colors["--green-300"]};
  --green-400: ${e.colors["--green-400"]};
  --green-500: ${e.colors["--green-500"]};
  --green-600: ${e.colors["--green-600"]};
  --green-700: ${e.colors["--green-700"]};

  --blue-300: ${e.colors["--blue-300"]};
  --blue-400: ${e.colors["--blue-400"]};
  --blue-500: ${e.colors["--blue-500"]};
  --blue-600: ${e.colors["--blue-600"]};
  --blue-700: ${e.colors["--blue-700"]};

  font: normal medium/1.25 ${e.fonts.main};

}`;c(r`
  ${o(i)}
`);class d extends n{static get styles(){return r`
            :host {
              box-sizing: border-box;
              display: block;
              color: var(--blue-700, #0f1720);
            }

            * {
              box-sizing: inherit;
            }

            p {
              font-size: 1.5rem;
              margin: 0;
            }

            pre {
              background-color: #f8f9f9;
              padding: 0 1em;
              margin: 0.5rem 0;
              white-space: break-spaces;
              line-height: 1.06;
            }

            code {
              color: var(--blue-300, #0f3058);
              font-size: 0.875rem;
            }

            span:first-of-type {
              color: var(--green-700, #689f38);
            }

            span {
              color: var(--red-700, #c04545);
            }
          `}render(){return s`
            <p>From <span>Design tokens</span> to <span>CSS</span></p>
            <pre>
<code>
  const theme = {
    fontFace: {
      ...fontFace,
    },
    fonts: {
      main: 'Kaisei HarunoUmi, sans-serif',
    },
    colors: {
      ...tertiary0,
      ...tertiary1,
      ...tertiary2,
    },
};
</code>
</pre>
            <pre>
<code>
:root {
  font: normal medium/1.25 "Kaisei HarunoUmi", sans-serif;
  --red-300: #e57373;
  --red-400: #ef5350;
  --red-500: #f44336;
  --red-600: #e53935;
  --red-700: #c04545;

  --green-300: #aed581;
  --green-400: #9ccc65;
  --green-500: #8bc34a;
  --green-600: #7cb342;
  --green-700: #689f38;
  --blue-300: #0f3058;

  --blue-400: #102a4c;
  --blue-500: #10243e;
  --blue-600: #0f1b2d;
  --blue-700: #0f1720;
}
  </code>
  </pre>
          `}}customElements.define("document-element",d);
