import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as o}from"./index-3YbjYt95.js";import{ae as c}from"./index-D_439bJA.js";import{S as d}from"./index-CXD1jsgI.js";import"./index-IfJi-UCQ.js";import"./iframe-Bg3fn7F7.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./InformationHighlight-QNpgYFB4.js";import"./models-CHTjB2ql.js";import"./components-CiYq2Ux-.js";import"./Text-CA4K3XqV.js";import"./mergeStyles-BwsTBQHe.js";import"./Box-B8SJpSaU.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./useConstant-CUZppmaV.js";import"./flex-DEpQdPd9.js";import"./grid-Bptupakt.js";import"./TypeLevelComponents-Bx9MbsnZ.js";import"./exclamation-circle-BJmpTdUQ.js";import"./types-wqmYQQWa.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";import"./SystemIcon-CqoDT-XF.js";import"./Svg-DzPS_4Gv.js";import"./px2rem-C0KbprIx.js";import"./Hyperlink-hH57UZrX.js";import"./ExternalHyperlink-BEkECOId.js";import"./external-link-BZdacz1K.js";function n(r){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Guides/Tokens Migration/Migration Codemod"}),`
`,e.jsx(s.h1,{id:"canvas-kit-tokens-migration-codemod",children:"Canvas Kit Tokens Migration Codemod"}),`
`,e.jsx(d,{variant:"caution",title:"v2 -> v3 Codemod",description:"This codemod automates the migration of old Canvas Kit React tokens or @workday/canvas-tokens-web v2 tokens to the new v3 token format. Note: There is currently no codemod available for migration to v4 tokens."}),`
`,e.jsxs(s.p,{children:["This codemod helps migrate Canvas Kit tokens from ",e.jsx(s.code,{children:"@workday/canvas-kit-react/tokens"}),` or
`,e.jsx(s.code,{children:"@workday/canvas-tokens-web"})," v2 to ",e.jsx(s.code,{children:"@workday/canvas-tokens-web"}),` v3 format. It automatically
transforms token usage in your codebase to use the new token system.`]}),`
`,e.jsx(s.h2,{id:"important-notes",children:"Important Notes"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Run on Small Batches"}),`: We recommend running the codemod on a small number of files in batches
instead of your entire repository all at once. This makes the changes easier to review and allows
you to catch issues more quickly with less frustration. This allows for easier manual review of
the changes and helps catch any potential issues early.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use System Tokens"}),`: You should generally always opt to use system (semantic) tokens over base
tokens. This clarifies the token's intent, simplifies future updates to new tokens, and maintains
better consistency across your codebase.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Codemod Limitations"}),`: The codemod does not cover every possible token usage or migration
scenario. Please review the codemod's changes and be prepared to update tokens as needed. Some
manual changes will be required, especially for:`,`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Custom or dynamic token usages"}),`
`,e.jsx(s.li,{children:"Inline styles, string templates, or non-standard patterns"}),`
`,e.jsx(s.li,{children:"Updating documentation, comments, or non-code files"}),`
`,e.jsx(s.li,{children:"Ensuring correct semantic token choices for your specific use case"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"required-dependencies",children:"Required Dependencies"}),`
`,e.jsx(s.p,{children:"The codemod requires the following packages to be installed:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"@workday/canvas-kit-styling"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@workday/canvas-tokens-web"}),`. See
`,e.jsx(s.a,{href:"/docs/guides-tokens-migration-installation-setup--docs",children:"instructions here"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(s.p,{children:"You can run the codemod using npx:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod v14-tokens [path]
`})}),`
`,e.jsx(s.p,{children:`Or install the package and run it directly. But remember to uninstall the package after you have
completed the upgrade.`}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-codemod
canvas-kit-codemod v14-tokens [path]
`})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:`Note: These codemods only work on .js, .jsx, .ts, and .tsx extensions. You may need to make some
manual changes in other file types (.json, .mdx, .md, etc.).`}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:`Note: You may need to run your linter after executing the codemod, as its resulting formatting
(spacing, quotes, etc.) may not match your project's styling.`}),`
`]}),`
`,e.jsx(s.h2,{id:"what-this-codemod-does",children:"What This Codemod Does"}),`
`,e.jsx(s.p,{children:"The codemod transforms the following tokens:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#colors",children:"Colors"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#depth",children:"Depth"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#shape",children:"Shape"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#space",children:"Space"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#typography",children:"Typography"})}),`
`]}),`
`,e.jsx(s.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Converts color tokens from ",e.jsx(s.code,{children:"@workday/canvas-kit-react/tokens"})," to the new system"]}),`
`,e.jsxs(s.li,{children:["Transforms color usage in ",e.jsx(s.code,{children:"createStyles"}),", ",e.jsx(s.code,{children:"createStencil"}),", and CSS objects"]}),`
`,e.jsx(s.li,{children:"Maps old color tokens to new semantic color tokens"}),`
`,e.jsxs(s.li,{children:["Adds required imports for ",e.jsx(s.code,{children:"cssVar"})," and new token packages"]}),`
`]}),`
`,e.jsx(s.h4,{id:"color-token-mappings-to-system",children:"Color Token Mappings to System"}),`
`,e.jsx(s.h5,{id:"background-colors",children:"Background Colors"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Old Token"}),e.jsx(s.th,{children:"New Token"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.frenchVanilla100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blueberry200"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.primary.soft"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blueberry400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.primary.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blueberry500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.primary.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blueberry600"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.primary.stronger"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cantaloupe100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.caution.softer"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cantaloupe400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.caution.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cantaloupe500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.caution.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cantaloupe600"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.caution.stronger"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cinnamon100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.critical.softer"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cinnamon500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.critical.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cinnamon600"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.critical.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.greenApple100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.positive.softer"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.greenApple400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.positive.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.greenApple500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.positive.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.greenApple600"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.positive.stronger"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.muted.softer"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice200"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.muted.soft"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice300"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.muted.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.muted.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.soap100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.alt.softer"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.soap200"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.alt.soft"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.soap300"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.alt.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.soap400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.alt.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.soap500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.alt.stronger"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blackPepper400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.contrast.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blackPepper500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.bg.contrast.strong"})})]})]})]}),`
`,e.jsx(s.h5,{id:"foreground-colors",children:"Foreground Colors"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Old Token"}),e.jsx(s.th,{children:"New Token"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blackPepper300"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blackPepper400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blackPepper500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.stronger"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blueberry400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.primary.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blueberry500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.primary.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cinnamon500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.critical.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.frenchVanilla100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.inverse"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.disabled"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice200"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.muted.soft"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice300"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.muted.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.muted.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.fg.muted.stronger"})})]})]})]}),`
`,e.jsx(s.h5,{id:"border-colors",children:"Border Colors"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Old Token"}),e.jsx(s.th,{children:"New Token"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blackPepper400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.contrast.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blackPepper500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.contrast.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blueberry400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.primary.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cantaloupe400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.caution.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cantaloupe600"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.caution.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.cinnamon500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.critical.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.frenchVanilla100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.inverse"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice100"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.input.disabled"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice200"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.input.default"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.licorice500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.input.strong"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.soap300"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.input.inverse"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.soap400"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.divider"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.soap500"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.border.container"})})]})]})]}),`
`,e.jsx(s.h5,{id:"other-colors",children:"Other Colors"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Old Token"}),e.jsx(s.th,{children:"New Token"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.blackPepper600"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.static.black"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"colors.toastedMarshmallow600"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"system.color.static.gold.stronger"})})]})]})]}),`
`,e.jsx(s.h3,{id:"depth",children:"Depth"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Converts depth tokens to objects with ",e.jsx(s.code,{children:"boxShadow"})," property"]}),`
`,e.jsxs(s.li,{children:["Handles special case for depth[0] (converts to ",e.jsx(s.code,{children:'boxShadow: "none"'}),")"]}),`
`,e.jsx(s.li,{children:"Transforms depth tokens in nested CSS selectors"}),`
`,e.jsx(s.li,{children:"Handles depth tokens in component props"}),`
`]}),`
`,e.jsx(s.h3,{id:"shape",children:"Shape"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`Converts border radius tokens to
`,e.jsx(s.a,{href:"/docs/guides-tokens-migration-mapping-tables-system--docs#shape-border-radius-token-migration",children:"new shape tokens"})]}),`
`,e.jsxs(s.li,{children:["Transforms ",e.jsx(s.code,{children:"borderRadius.m"})," to ",e.jsx(s.code,{children:"system.shape.x1"})]}),`
`]}),`
`,e.jsx(s.h3,{id:"space",children:"Space"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Converts all space tokens to the new system tokens"}),`
`,e.jsxs(s.li,{children:[`Maps old space values to
`,e.jsx(s.a,{href:"/docs/guides-tokens-migration-mapping-tables-system--docs#space",children:"a new scale"})]}),`
`]}),`
`,e.jsx(s.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`Converts font family tokens to
`,e.jsx(s.a,{href:"docs/guides-tokens-migration-mapping-tables-system--docs#font-family",children:"new system tokens"})]}),`
`,e.jsxs(s.li,{children:[`Transforms font size tokens to
`,e.jsx(s.a,{href:"docs/guides-tokens-migration-mapping-tables-system--docs#font-size",children:"new system tokens"})]}),`
`,e.jsxs(s.li,{children:[`Converts font weight tokens to
`,e.jsx(s.a,{href:"docs/guides-tokens-migration-mapping-tables-system--docs#font-weight",children:"new system tokens"})]}),`
`,e.jsx(s.li,{children:"Handles type levels and their properties"}),`
`,e.jsx(s.li,{children:"Transforms typography in component styles"}),`
`]}),`
`,e.jsx(s.h2,{id:"what-to-expect",children:"What to Expect"}),`
`,e.jsx(s.p,{children:"After running the codemod, your code will:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Use the new token system with ",e.jsx(s.code,{children:"cssVar"})," and system tokens"]}),`
`,e.jsx(s.li,{children:"Have updated imports for the new token packages"}),`
`,e.jsx(s.li,{children:"Use semantic color tokens instead of direct color values"}),`
`,e.jsx(s.li,{children:"Have consistent spacing and typography using the new scale"}),`
`]}),`
`,e.jsx(s.h2,{id:"example-transformations",children:"Example Transformations"}),`
`,e.jsx(s.h3,{id:"before",children:"Before"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import {colors} from '@workday/canvas-kit-react/tokens';

const styles = createStyles({
  background: colors.frenchVanilla100,
  color: colors.blueberry400,
});
`})}),`
`,e.jsx(s.h3,{id:"after",children:"After"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import {cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  background: system.color.bg.default,
  color: system.color.fg.primary.default,
});
`})}),`
`,e.jsx(s.h2,{id:"summary",children:"Summary"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The codemod handles various edge cases including aliased imports and nested CSS selectors"}),`
`,e.jsx(s.li,{children:"It preserves existing code structure while updating token usage"}),`
`,e.jsx(s.li,{children:"It adds necessary imports automatically"}),`
`,e.jsx(s.li,{children:"It handles template literals and spread operators in CSS objects"}),`
`,e.jsx(s.li,{children:"It maintains proper type safety through the transformation process"}),`
`]})]})}function Y(r={}){const{wrapper:s}={...o(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{Y as default};
