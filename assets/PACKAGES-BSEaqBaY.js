import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as t}from"./index-3YbjYt95.js";import{ae as s}from"./index-BRnk6Jss.js";import"./index-IfJi-UCQ.js";import"./iframe-gI3eSQDE.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function i(a){const n={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",strong:"strong",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Guides/Packages"}),`
`,e.jsx(n.h3,{id:"main",children:"Main"}),`
`,e.jsxs(n.p,{children:["Our Main package of Canvas Kit components and utilities at ",e.jsx(n.code,{children:"@workday/canvas-kit-react"}),` has undergone
a full design and a11y review and is approved for use in product.`]}),`
`,e.jsx(n.p,{children:`Breaking changes to code in Main will only occur during major version updates and will always be
communicated in advance and accompanied by migration strategies.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"preview",children:"Preview"}),`
`,e.jsxs(n.p,{children:["Our Preview package of Canvas Kit components and utilities at ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),`
has undergone a full design and a11y review and is approved for use in product, but may not be up to
the high code standards upheld in the `,e.jsx(n.a,{href:"#main",children:"Main"})," package. Preview is analagous to code in beta."]}),`
`,e.jsx(n.p,{children:`Breaking changes are unlikely, but possible, and can be deployed to Preview at any time without
triggering a major version update, though such changes will be communicated in advance and
accompanied by migration strategies.`}),`
`,e.jsxs(n.p,{children:["Generally speaking, our goal is to eventually promote code from Preview to ",e.jsx(n.a,{href:"#main",children:"Main"}),`.
Occasionally, a component with the same name will exist in both `,e.jsx(n.a,{href:"#main",children:"Main"}),` and Preview (for
example, see Segmented Control in `,e.jsx(n.a,{href:"?path=/docs/preview-segmented-control--docs",children:"Preview"}),` and
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit//?path=/docs/components-buttons-segmented-control--docs",rel:"nofollow",children:"Main"}),`).
In these cases, Preview serves as a staging ground for an improved version of the component with a
different API. The component in `,e.jsx(n.a,{href:"#main",children:"Main"})," will eventually be replaced with the one in Preview."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"labs",children:"Labs"}),`
`,e.jsxs(n.p,{children:["Our Labs package of Canvas Kit components and utilities at ",e.jsx(n.code,{children:"@workday/canvas-kit-labs-react"}),` has
`,e.jsx(n.strong,{children:"not"}),` undergone a full design and a11y review. Labs serves as an incubator space for new and
experimental code and is analagous to code in alpha.`]}),`
`,e.jsxs(n.p,{children:[`Breaking changes can be deployed to Labs at any time without triggering a major version update and
may not be subject to the same rigor in communcation and migration strategies reserved for breaking
changes in `,e.jsx(n.a,{href:"#preview",children:"Preview"})," and ",e.jsx(n.a,{href:"#main",children:"Main"}),`.
`,e.jsx(n.code,{children:'import { opacity } from "@workday/canvas-tokens-web/dist/es6/system"'})]}),`
`,e.jsx(n.h3,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:[`This package contains everything needed to create CSS styling. This styling package contains a
runtime for development and a static parsing process for build time. For more information, visit
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-why-canvas-styling--docs",rel:"nofollow",children:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-why-canvas-styling--docs"})]})]})}function v(a={}){const{wrapper:n}={...t(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{v as default};
