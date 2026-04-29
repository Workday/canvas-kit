import{j as s}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as o}from"./index-3YbjYt95.js";import{ae as r}from"./index-DHWTzE-b.js";import{S as t}from"./index-2foTGvgy.js";import"./index-IfJi-UCQ.js";import"./iframe-DW6TaI9H.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./InformationHighlight-D4P1IwVv.js";import"./models-CHTjB2ql.js";import"./components-XIe_upcR.js";import"./Text-8N36XMNq.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./TypeLevelComponents-Co8mkrwa.js";import"./exclamation-circle-Be30iaM7.js";import"./types-wqmYQQWa.js";import"./exclamation-triangle-C8Vr-J7R.js";import"./info-B24MaYO9.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./Hyperlink-Cmi71RJg.js";import"./ExternalHyperlink-D7iOffGf.js";import"./external-link-Bfm4m86M.js";function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"Guides/Tokens Migration/Installation & Setup"}),`
`,s.jsx(n.h1,{id:"installation--setup",children:"Installation & Setup"}),`
`,s.jsxs(n.p,{children:["If you are migrating from the old raw values tokens (",s.jsx(n.code,{children:"@workday/canvas-kit-react/tokens"}),`), you should
now use `,s.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` for CSS variable tokens, and pair it with the
`,s.jsx(n.code,{children:"@workday/canvas-kit-styling"}),` package for utilities that help you consume these tokens in your
application.`]}),`
`,s.jsx(t,{emphasis:"high",title:"Canvas Tokens v4",description:"Check out the new v4 tokens package to explore the updated token structure and see how the new CSS variable tokens look in practice. Learn more about how tokens are organized, how to use them in your application, and the benefits of migrating to the new system.",link:"https://workday.github.io/canvas-tokens/?path=/docs/guides-upgrade-guides-v4-overview--docs",linkText:"View v4 Upgrade Guide",isExternal:!0}),`
`,s.jsx("br",{}),`
`,s.jsx(n.h2,{id:"install-the-new-package",children:"Install the New Package"}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-bash",children:`npm install @workday/canvas-tokens-web
# or
yarn add @workday/canvas-tokens-web
`})}),`
`,s.jsx(n.h2,{id:"import-css-variables",children:"Import CSS Variables"}),`
`,s.jsx(n.p,{children:"Import the variables at the top level of your application:"}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"In your root CSS file:"})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';
@import '@workday/canvas-tokens-web/css/component/_variables.css';
`})}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"OR"})}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"In you root App JavaScript/TypeScript file:"})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:`import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/component/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';
`})}),`
`,s.jsx(n.h2,{id:"updating-your-styling-approach",children:"Updating Your Styling Approach"}),`
`,s.jsx("br",{}),`
`,s.jsx(n.h3,{id:"styles",children:"Styles"}),`
`,s.jsx(t,{title:"How To Customize Styles",description:"There are multiple ways to customize styles for components within Canvas Kit. The approach you choose will depend on your use case.",link:"/?path=/docs/styling-guides-customizing-styles--docs",linkText:"Styling utilities"}),`
`,s.jsxs(n.p,{children:["If you're not already using ",s.jsx(n.code,{children:"createStyles"}),", migrate from style props to the styling functions:"]}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Old style props approach"})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:`// as style props (old)
import {space, colors} from '@workday/canvas-kit-react/tokens';

<Component padding={space.s} color={colors.blackPepper400}>
`})}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Within Canvas styling functions"})}),`
`,s.jsxs(n.p,{children:["If you are using Canvas styling functions, such as ",s.jsx(n.code,{children:"createStyles"})," or ",s.jsx(n.code,{children:"createStencil"}),`, it is not
required to wrap tokens with `,s.jsx(n.code,{children:"var()"}),". You can still use it to provide value fallback."]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:`import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

//
const styles = createStyles({
  padding: system.padding.md, // not required in most cases
  color: cssVar(system.color.fg.default, '#000') // used to provide fallback
})

<Component cs={styles}>
`})}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Within non-Canvas functions or objects"})}),`
`,s.jsxs(n.p,{children:[`In all functions or objects that doesn't use Canvas styling functionality it is required to wrap
variable with `,s.jsx(n.code,{children:"var()"}),". The ",s.jsx(n.code,{children:"cssVar"})," function from ",s.jsx(n.code,{children:"@workday/canvas-kit-styling"}),` automatially wraps
variables and returns a string as `,s.jsx(n.code,{children:"var($token)"}),"."]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:`import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

<Component style={{
  padding: cssVar(system.padding.md),
  color: cssVar(system.color.fg.default)
}}>
`})}),`
`,s.jsx(n.h3,{id:"calculations",children:"Calculations"}),`
`,s.jsx(t,{title:"Calculation Functions",description:"Calc functions are useful for doing basic math operations with CSS calc() and variables. They will also wrap variables automatically in var().",link:"/?path=/docs/styling-utilities--docs#calc-functions",linkText:"See all utilities"}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-js",children:`import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  // returns 'calc(var(--cnvs-sys-padding-xxs) + 0.125rem)'
  padding: calc.add(system.padding.xxs, '0.125rem'),
  // returns 'calc(var(--cnvs-sys-gap-sm) - 0.125rem)'
  margin: calc.subtract(system.gap.sm, '0.125rem'),
  // returns 'calc(var(--cnvs-sys-size-xxxs) * 3)'
  maxWidth: calc.multiply(system.size.xxxs, 3),
};
`})})]})}function L(e={}){const{wrapper:n}={...o(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(a,{...e})}):a(e)}export{L as default};
