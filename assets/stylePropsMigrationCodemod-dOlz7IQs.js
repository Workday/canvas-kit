import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import"./chunk-NUUEMKO5-CCJDzmJz.js";import{ae as r}from"./index-BH6-T5Fm.js";import"./union-DR2Z0s37.js";import"./index-IfJi-UCQ.js";import"./iframe-RxBVwp_9.js";import"../sb-preview/runtime.js";import"./client-DOJa5lII.js";import"./index-CDT9hUPM.js";import"./index-BDZ5T_cP.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B1B40VHJ.js";import"./Svg-B1oD29TK.js";import"./px2rem-C0KbprIx.js";import"./components-BqmIVDob.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-Cm6b5U4i.js";import"./Text-D8J8K_1c.js";import"./mergeStyles-C1JfmJPH.js";import"./Box-CJXmlKLo.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-CrUgoYEh.js";import"./grid-JWGbC98F.js";import"./index-5dfzm_kn.js";import"./Card-BAZTDQ08.js";import"./ExternalHyperlink-COY7uH1o.js";import"./Hyperlink-DM9nt0cU.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-D21U7TXs.js";import"./BaseButton-CWdtGLox.js";import"./Button-CzlJSUFG.js";import"./lerna-DYfSuDO-.js";import"./CanvasProvider-Cat-zekw.js";import"./index-5mrAZJYD.js";import"./Tooltip-KF7CDyyD.js";import"./useTooltip-BAcHo7bk.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CGAh7luF.js";import"./Popper-DvolcCfW.js";import"./TertiaryButton-8Oz2X5p2.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-8ikVfi4T.js";import"./ColorPicker-ymS550hz.js";import"./ColorInput-B4443PlB.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-BPKs8XRx.js";import"./types-DXdjelYI.js";import"./FormField-DTwmrFCP.js";import"./check-Bvurkvei.js";import"./Expandable-UqH_awct.js";import"./Avatar-CcIhLJWM.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DTKoYaho.js";import"./Popup-DnNjYX6x.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BAdISRT5.js";import"./useInitialFocus-DOJx7Wga.js";import"./useReturnFocus-Bl9ijLih.js";import"./useFocusRedirect-Dt5zlBE3.js";import"./Breadcrumbs-Cqwjwy56.js";import"./useOverflowListTarget-DvPXkaQq.js";import"./useListItemSelect-DyeyZH9P.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-V8lePgxC.js";import"./OverflowTooltip-CXGK4oOq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-D43wiz_3.js";import"./Table-C3oC02Mn.js";function t(n){const o={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Style Props Migration/Codemod"}),`
`,e.jsx(o.h1,{id:"canvas-kit-style-props-migration-codemod",children:"Canvas Kit Style Props Migration Codemod"}),`
`,e.jsxs(o.p,{children:["This codemod helps migrate style props to ",e.jsx(o.code,{children:"cs"}),` prop. It also automatically transforms token usage in
your codebase to use the new token system.`]}),`
`,e.jsx(o.h2,{id:"important-notes",children:"Important Notes"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Run on Small Batches"}),`: We recommend running the codemod on a small number of files in batches
instead of your entire repository all at once. This makes the changes easier to review and allows
you to catch issues more quickly with less frustration.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Codemod Limitations"}),`: The codemod does not cover every possible token usage or migration
scenario. Please review the codemod's changes and be prepared to update style props as needed.
Some manual changes will be required, especially for:`,`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Custom or dynamic style usage"}),`
`,e.jsx(o.li,{children:"Updating documentation, comments, or non-code files"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(o.h2,{id:"required-dependencies",children:"Required Dependencies"}),`
`,e.jsx(o.p,{children:"The codemod requires the following packages to be installed:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"@workday/canvas-kit-styling"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"@workday/canvas-tokens-web"})}),`
`]}),`
`,e.jsx(o.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(o.p,{children:"You can run the codemod using npx:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod v14.1 [path]
`})}),`
`,e.jsx(o.p,{children:`Or install the package and run it directly. But remember to uninstall the package after you have
completed the upgrade.`}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-codemod
canvas-kit-codemod v14.1 [path]
`})}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:`Note: These codemods only work on .js, .jsx, .ts, and .tsx extensions. You may need to make some
manual changes in other file types (.json, .mdx, .md, etc.).`}),`
`]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:`Note: You may need to run your linter after executing the codemod, as its resulting formatting
(spacing, quotes, etc.) may not match your project's styling.`}),`
`]}),`
`,e.jsx(o.h2,{id:"what-this-codemod-does",children:"What This Codemod Does"}),`
`,e.jsxs(o.p,{children:["The Canvas Kit codemod automates the migration from ",e.jsx(o.strong,{children:"deprecated style props"})," and ",e.jsx(o.strong,{children:`Emotion-based
styling`})," to the new ",e.jsx(o.strong,{children:"Canvas Kit Styling"}),` system. It is designed to handle the majority of
migration cases safely and efficiently, minimizing manual refactoring.`]}),`
`,e.jsx(o.h3,{id:"goals",children:"Goals"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Accelerate migration to ",e.jsx(o.code,{children:"@workday/canvas-kit-styling"})]}),`
`,e.jsx(o.li,{children:"Maintain visual parity between old and new implementations"}),`
`,e.jsx(o.li,{children:"Reduce developer effort and manual code changes"}),`
`,e.jsxs(o.li,{children:["Ensure consistent use of ",e.jsx(o.code,{children:"cs"})," prop"]}),`
`]}),`
`,e.jsx(o.h2,{id:"what-to-expect",children:"What to Expect"}),`
`,e.jsx(o.p,{children:"After running the codemod, your code will:"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{children:["Use the new ",e.jsx(o.code,{children:"cs"})," props in CK components instead of style props"]}),`
`,e.jsx(o.li,{children:"Transform token names used as style prop value to a new v3 token"}),`
`,e.jsx(o.li,{children:"Have correct token import"}),`
`]}),`
`,e.jsx(o.h2,{id:"example-transformations",children:"Example Transformations"}),`
`,e.jsx(o.h3,{id:"before",children:"Before"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-typescript",children:`import {Flex} from '@workday/canvas-kit-react/layout';

<Flex depth={1} marginX={10} background="frenchVanilla100" />;
`})}),`
`,e.jsx(o.h3,{id:"after",children:"After"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-typescript",children:`import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

<Flex
  cs={{
    boxShadow: system.depth[1],
    marginInline: 10,
    background: system.color.bg.default,
  }}
/>;
`})}),`
`,e.jsx(o.h2,{id:"what-the-codemod-does-not-do",children:"What the Codemod Does Not Do"}),`
`,e.jsx(o.p,{children:`The codemod will not hoist your styles to the top of the file. While we don't expect you to do this
immediately, we strongly encourage you to do this in the future and at a gradual pace.`})]})}function Ee(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{Ee as default};
