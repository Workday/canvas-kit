import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as o}from"./index-3YbjYt95.js";import{ae as t}from"./index-B7JPaHCe.js";import"./index-IfJi-UCQ.js";import"./iframe-Dac7Hedr.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function a(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Guides/Fonts"}),`
`,n.jsx(e.h1,{id:"fonts",children:"Fonts"}),`
`,n.jsxs(e.p,{children:[`Canvas Kit doesn't include fonts by default. Which font you need, and how to load it, depends on
whether your application has the `,n.jsx(e.a,{href:"#sana-sans",children:"Sana Canvas theme"})," (",n.jsx(e.code,{children:'data-theme="sana-canvas"'}),`)
enabled.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["If the Sana Canvas theme ",n.jsx(e.strong,{children:"is"})," enabled, use ",n.jsx(e.a,{href:"#sana-sans",children:"Sana Sans"}),"."]}),`
`,n.jsxs(e.li,{children:["If the Sana Canvas theme ",n.jsx(e.strong,{children:"is not"}),` enabled (the default/legacy Canvas theme), configure your app
to use `,n.jsx(e.a,{href:"#roboto",children:"Roboto"})," instead."]}),`
`]}),`
`,n.jsx(e.h2,{id:"sana-sans",children:"Sana Sans"}),`
`,n.jsxs(e.p,{children:[`Sana Sans should be applied whenever the
`,n.jsx(e.a,{href:"#using-sana-sans-with-the-sana-canvas-theme",children:"Sana Canvas theme"})," is enabled in your application."]}),`
`,n.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"fonts"})," module, exported from ",n.jsx(e.code,{children:"@workday/canvas-kit-react"}),`, makes importing font files simple so
you know you're using the correct font in your environment. We use Sana Sans for most languages we
support at Workday.`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`Note: If your application environment already provides Sana Sans, you don't need to inject it as
in the example below. Otherwise, follow these steps to inject it.`}),`
`]}),`
`,n.jsxs(e.p,{children:["You can inject our CSS ",n.jsx(e.code,{children:"@font-face"})," styles into your application by using ",n.jsx(e.code,{children:"injectGlobal"}),`. We prefer
this approach over `,n.jsx(e.code,{children:"@emotion/react"}),"'s ",n.jsx(e.a,{href:"https://emotion.sh/docs/globals",rel:"nofollow",children:"Global"}),` component that
injects the styles at runtime.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {fonts} from '@workday/canvas-kit-react/fonts';
import {injectGlobal} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

injectGlobal({
  ...fonts,
  'html, body': {
    fontFamily: system.fontFamily.default,
    margin: 0,
    minHeight: '100vh',
  },
});
`})}),`
`,n.jsx(e.h3,{id:"hosting-fonts",children:"Hosting Fonts"}),`
`,n.jsxs(e.p,{children:["We currently host Sana Sans on AWS S3, and the ",n.jsx(e.code,{children:"fonts"})," module includes ",n.jsx(e.code,{children:"@font-face"}),` rules to connect
the proper font files.`]}),`
`,n.jsx(e.h3,{id:"variable-fonts",children:"Variable Fonts"}),`
`,n.jsxs(e.p,{children:[`Sana Sans is a
`,n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Fonts/Variable_fonts",rel:"nofollow",children:"variable font"}),`. That
means instead of importing multiple static files, you can import a single, dynamic file that
supports multiple font weights and styles. It also provides more flexibility and customization than
traditional, static fonts. But you should be able to use it identically to how you've been using
other fonts.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Family"}),": Sana Sans VF"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Format"}),": TrueType variable font"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Weight range"}),": 100–700 (Regular through Bold)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Styles"}),": normal, italic"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Source"}),": ",n.jsx(e.code,{children:"https://design.workdaycdn.com/assets/fonts/Sana-Sans/SanaSansLCG05-Variable.ttf"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"monospace-font",children:"Monospace Font"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"fonts"})," module also includes IBM Plex Mono, used for ",n.jsx(e.code,{children:"system.fontFamily.mono"}),` under the Sana
Canvas theme.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Family"}),": IBM Plex Mono"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Format"}),": WOFF2"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Weight"}),": 400 (Regular)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Styles"}),": normal"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Source"}),": ",n.jsx(e.code,{children:"https://design.workdaycdn.com/assets/fonts/IBM-Plex-Mono/IBMPlexMono-Regular.woff2"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"using-sana-sans-with-the-sana-canvas-theme",children:"Using Sana Sans with the Sana Canvas Theme"}),`
`,n.jsxs(e.p,{children:["The Sana Canvas theme is enabled by setting ",n.jsx(e.code,{children:'data-theme="sana-canvas"'})," on ",n.jsx(e.code,{children:"<html>"}),` (or a scoped
ancestor element). This switches the `,n.jsx(e.code,{children:"--cnvs-sys-font-family-default"}),` token
(`,n.jsx(e.code,{children:"system.fontFamily.default"}),") to reference ",n.jsx(e.code,{children:"'Sana Sans VF'"}),` via the cascade in
`,n.jsx(e.code,{children:"@workday/canvas-tokens-web/css/sana/_variables.css"}),"."]}),`
`,n.jsxs(e.p,{children:["To use this theme, you also must import ",n.jsx(e.code,{children:"@workday/canvas-tokens-web/css/sana/_variables.css"}),` in
addition to the other token CSS files. See the
`,n.jsx(e.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-getting-started--docs",rel:"nofollow",children:"Getting Started guide"}),`
for a full tokens CSS file import example.`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," This requires ",n.jsx(e.code,{children:"@workday/canvas-tokens-web"})," ",n.jsx(e.code,{children:"4.4.0"}),` or later. If you're on an older
version, upgrade `,n.jsx(e.code,{children:"@workday/canvas-tokens-web"})," first."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Once the theme's font-family token and the loaded ",n.jsx(e.code,{children:"@font-face"}),` share the same family name, no
additional CSS override is required — import and use the `,n.jsx(e.code,{children:"fonts"}),` module exactly as described in
`,n.jsx(e.a,{href:"#usage",children:"Usage"})," above, and Sana Sans will render automatically wherever ",n.jsx(e.code,{children:'data-theme="sana-canvas"'}),`
is set.`]}),`
`,n.jsx(e.h2,{id:"roboto",children:"Roboto"}),`
`,n.jsxs(e.p,{children:[`If your application doesn't have the Sana Canvas theme enabled, install
`,n.jsx(e.a,{href:"https://github.com/Workday/canvas-kit/blob/master/modules/react-fonts/README.md",rel:"nofollow",children:n.jsx(e.code,{children:"@workday/canvas-kit-react-fonts"})}),`
to load Roboto instead. This module also includes Roboto Mono, used for `,n.jsx(e.code,{children:"system.fontFamily.mono"}),"."]}),`
`,n.jsx(e.h3,{id:"installation-1",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react-fonts
`})}),`
`,n.jsx(e.h3,{id:"usage-1",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {fonts} from '@workday/canvas-kit-react-fonts';
import {injectGlobal} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

injectGlobal({
  ...fonts,
  'html, body': {
    fontFamily: system.fontFamily.default,
    margin: 0,
    minHeight: '100vh',
  },
});
`})})]})}function u(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(a,{...s})}):a(s)}export{u as default};
