import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import"./chunk-NUUEMKO5-BatsxHOM.js";import{ae as r}from"./index-B6_fZJIH.js";import"./union-73eBhY97.js";import"./index-IfJi-UCQ.js";import"./iframe-C5jHHwC4.js";import"../sb-preview/runtime.js";import"./client-DOJa5lII.js";import"./index-CDT9hUPM.js";import"./index-BDZ5T_cP.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CFi1VLoO.js";import"./Svg-BS_Dvh6q.js";import"./px2rem-C0KbprIx.js";import"./components-DppiPmWT.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-BadRR8Ou.js";import"./Text-C5D3Ht9T.js";import"./mergeStyles-0aQAs1eh.js";import"./Box-AGfoWgij.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-bOHHmX-t.js";import"./grid-DtbHyXmR.js";import"./cornerShape-C5U5sQXc.js";import"./index-udXzHylk.js";import"./Card-DzhLlfJA.js";import"./ExternalHyperlink-uYYbfEzo.js";import"./Hyperlink-T26S0cW3.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BD2FVi4i.js";import"./BaseButton-CKzS3UNH.js";import"./Button-BYCIT0TJ.js";import"./lerna-BfH53aY9.js";import"./CanvasProvider-Bsmzj5m5.js";import"./index-kj8ZfNNN.js";import"./Tooltip-9ICStd_k.js";import"./useTooltip-CsgEKIvN.js";import"./getTransformFromPlacement-xNvjyxNY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DqbNoIGf.js";import"./Popper-xemT1TtK.js";import"./TertiaryButton-CyD_x8wF.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-jZfo-0ua.js";import"./ColorPicker-Bf6aRSJA.js";import"./ColorInput-DSCHnU6T.js";import"./check-small-BqSDQIle.js";import"./TextInput-DWIaRQL-.js";import"./types-DXdjelYI.js";import"./FormField-BFV0xoAp.js";import"./check-Ds6vsrAM.js";import"./Expandable-K-4Ybhc9.js";import"./Avatar-juNxhmne.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DzCYEDbr.js";import"./Popup-CLuCYqLn.js";import"./x-B1faap_l.js";import"./usePopupTarget-CifT6Oya.js";import"./useInitialFocus-C3yNoxbC.js";import"./useReturnFocus-DDQ4-kU9.js";import"./useFocusRedirect-BoLF_I5b.js";import"./Breadcrumbs-Cc0Qvzn9.js";import"./useOverflowListTarget-DEnwFStT.js";import"./useListItemRegister-BtedmPXX.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DtS_Zcjq.js";import"./OverflowTooltip-CtkxcgW5.js";import"./useListItemSelect-Cwl5Guz1.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-iKGzF7_i.js";import"./Table-qLELy8Y1.js";function t(n){const o={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Style Props Migration/Codemod"}),`
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
immediately, we strongly encourage you to do this in the future and at a gradual pace.`})]})}function Ie(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{Ie as default};
