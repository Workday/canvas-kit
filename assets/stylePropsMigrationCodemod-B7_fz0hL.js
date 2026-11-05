import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import"./chunk-NUUEMKO5-Bj1LTi0K.js";import{ae as r}from"./index-CyGZXPEz.js";import"./union-BUCG8cdu.js";import"./index-IfJi-UCQ.js";import"./iframe-Dine_4aU.js";import"../sb-preview/runtime.js";import"./client-DOJa5lII.js";import"./index-CDT9hUPM.js";import"./index-BDZ5T_cP.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DgkB3O3q.js";import"./Svg-CXKlNM9V.js";import"./px2rem-C0KbprIx.js";import"./components-B5QHr9xs.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-BRiOfW_b.js";import"./Text-56KUGy0I.js";import"./mergeStyles-Bfd74k5F.js";import"./Box-CyjvvVBh.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BhWEOOmD.js";import"./grid-Bo2FCXCg.js";import"./cornerShape-B1y71wLF.js";import"./index-C_4iH04t.js";import"./Card-TTTo4zHB.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-CMouN1zW.js";import"./Hyperlink-CiXICWo2.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-F9hk8ScV.js";import"./BaseButton-B7Cdo6oA.js";import"./Button-uPfdKrkI.js";import"./lerna-DSxFu7Tr.js";import"./CanvasProvider-CmQuC1n5.js";import"./index-CFEs8r9D.js";import"./Tooltip-CHIJ5lTV.js";import"./useTooltip-CDZrIDIK.js";import"./getTransformFromPlacement-CeI32Hr4.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BNAhz6K3.js";import"./Popper-BKWt9U5M.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BL6wVU0w.js";import"./TypeLevelComponents-BkRTrtYq.js";import"./ColorPicker-YR0REnsY.js";import"./ColorInput-CgQJxHhX.js";import"./check-small-BqSDQIle.js";import"./TextInput-COM6UplY.js";import"./types-DXdjelYI.js";import"./FormField-BT_PZm_j.js";import"./check-Ds6vsrAM.js";import"./Expandable-DpOIWmb-.js";import"./Avatar-Bsyc2LpW.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DQuIuKWH.js";import"./Popup-COb6F4Ts.js";import"./x-B1faap_l.js";import"./usePopupTarget-Cco7peXe.js";import"./useInitialFocus-DcT3-Ce6.js";import"./useReturnFocus-DWZj3b3a.js";import"./useFocusRedirect-Xc3xIpjr.js";import"./Breadcrumbs-DxCbAS4P.js";import"./useOverflowListItemMeasure-ynDmS6wO.js";import"./useListItemRegister-BqQBHrTO.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BetwLbDT.js";import"./OverflowTooltip-BPWo0foa.js";import"./useListItemRovingFocus-BdbIpBLB.js";import"./useListItemSelect-CjGaW9lx.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CTkziXOc.js";import"./Flex-DzCPbc6Q.js";import"./Table-BYK6-5dH.js";function t(n){const o={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Style Props Migration/Codemod"}),`
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
immediately, we strongly encourage you to do this in the future and at a gradual pace.`})]})}function Re(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{Re as default};
