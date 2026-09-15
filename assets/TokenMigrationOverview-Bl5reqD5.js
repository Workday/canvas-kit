import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as r}from"./index-3YbjYt95.js";import{ae as o}from"./index-B6_fZJIH.js";import{S as a}from"./union-73eBhY97.js";import"./index-IfJi-UCQ.js";import{S as t}from"./index-rgyps6o_.js";import"./iframe-C5jHHwC4.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CFi1VLoO.js";import"./Svg-BS_Dvh6q.js";import"./px2rem-C0KbprIx.js";import"./components-DppiPmWT.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-BadRR8Ou.js";import"./Text-C5D3Ht9T.js";import"./mergeStyles-0aQAs1eh.js";import"./Box-AGfoWgij.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-bOHHmX-t.js";import"./grid-DtbHyXmR.js";import"./cornerShape-C5U5sQXc.js";import"./index-udXzHylk.js";import"./Card-DzhLlfJA.js";import"./ExternalHyperlink-uYYbfEzo.js";import"./Hyperlink-T26S0cW3.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BD2FVi4i.js";import"./BaseButton-CKzS3UNH.js";import"./Button-BYCIT0TJ.js";import"./lerna-BfH53aY9.js";import"./CanvasProvider-Bsmzj5m5.js";import"./index-kj8ZfNNN.js";import"./Tooltip-9ICStd_k.js";import"./useTooltip-CsgEKIvN.js";import"./getTransformFromPlacement-xNvjyxNY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DqbNoIGf.js";import"./Popper-xemT1TtK.js";import"./TertiaryButton-CyD_x8wF.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-jZfo-0ua.js";import"./ColorPicker-Bf6aRSJA.js";import"./ColorInput-DSCHnU6T.js";import"./check-small-BqSDQIle.js";import"./TextInput-DWIaRQL-.js";import"./types-DXdjelYI.js";import"./FormField-BFV0xoAp.js";import"./check-Ds6vsrAM.js";import"./Expandable-K-4Ybhc9.js";import"./Avatar-juNxhmne.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DzCYEDbr.js";import"./Popup-CLuCYqLn.js";import"./x-B1faap_l.js";import"./usePopupTarget-CifT6Oya.js";import"./useInitialFocus-C3yNoxbC.js";import"./useReturnFocus-DDQ4-kU9.js";import"./useFocusRedirect-BoLF_I5b.js";import"./Breadcrumbs-Cc0Qvzn9.js";import"./useOverflowListTarget-DEnwFStT.js";import"./useListItemRegister-BtedmPXX.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DtS_Zcjq.js";import"./OverflowTooltip-CtkxcgW5.js";import"./useListItemSelect-Cwl5Guz1.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-iKGzF7_i.js";import"./Table-qLELy8Y1.js";import"./InformationHighlight-D_Fx6SvK.js";import"./exclamation-circle-BNuxaliX.js";import"./exclamation-triangle-BLgzpFfC.js";import"./info-DJgWrsaO.js";import"./layers-BWn7B7pb.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Guides/Tokens Migration/Overview"}),`
`,e.jsxs(n.h1,{id:"canvas-kit-token-migration-guide-moving-to-workdaycanvas-tokens-web400",children:["Canvas Kit Token Migration Guide: Moving to ",e.jsx(n.code,{children:"@workday/canvas-tokens-web@4.0.0"})]}),`
`,e.jsxs(n.p,{children:[`Canvas Kit v10+ introduces a new token system that replaces the old JavaScript-based tokens from
`,e.jsx(n.code,{children:"@workday/canvas-kit-react/tokens"})," with CSS variables from ",e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),`. Canvas Kit
is using tokens from `,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` v4 that introduced significant updates to align
with our Design Refresh, providing enhanced scalability, better product support, and a more
comprehensive token system. This release focuses on improving the color system with extended alpha
scales, updating brand tokens to use numerical naming conventions, and introducing new surface,
focus, accent, and semantic tokens.`]}),`
`,e.jsx(n.h2,{id:"why-migrate",children:"Why Migrate?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Better Performance"}),": CSS variables eliminate the runtime cost of Emotion's dynamic styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enhanced Theming"}),": System and brand tokens provide semantic, themeable values"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cross-Platform Consistency"}),`: Single source of truth for design tokens across web, iOS, and
Android`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Future-Proofing"}),": Aligns with modern CSS capabilities and Canvas Kit's long-term direction"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"llm-assisted-migration-",children:["LLM Assisted Migration ",e.jsx(a,{type:"ai"})]}),`
`,e.jsx(t,{title:"Note: Looking for an easier path to migrate?",description:"We recommend using the Canvas Kit MCP",link:"/?path=/docs/ai-for-llms-mcp-docs--docs",linkText:"Learn more about the Canvas Kit MCP"}),`
`,e.jsx(n.h2,{id:"core-principles",children:"Core Principles"}),`
`,e.jsx(n.h3,{id:"token-hierarchy",children:"Token Hierarchy"}),`
`,e.jsx(n.p,{children:"The new token system is organized into three categories:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Base Tokens"}),": Fundamental values (colors, measurements) - use sparingly"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"System Tokens"}),": Semantic, themeable values - ",e.jsx(n.strong,{children:"use these in most cases"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Brand Tokens"}),": Tenant/brand-specific customization values"]}),`
`]}),`
`,e.jsx(n.h3,{id:"css-variables-requirement",children:"CSS Variables Requirement"}),`
`,e.jsxs(n.p,{children:["Unlike the old JavaScript tokens, the new tokens are CSS variables that must be wrapped in ",e.jsx(n.code,{children:"var()"}),`
for the browser to understand them.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The Fundamental Change"}),": Raw (hex, px, etc) values → CSS variables wrapped in ",e.jsx(n.code,{children:"var()"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Old approach - Raw values
import {space} from '@workday/canvas-kit-react/tokens';
// padding: '1rem'
const styles = {padding: space.s};

// New approach - Using cssVar utility (recommended) and fallback
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
// padding: 'var(--cnvs-sys-padding-md, 1rem)'
const styles = {padding: cssVar(system.padding.md, '1rem')};
`})}),`
`,e.jsx(n.h3,{id:"styling-utilities",children:"Styling Utilities"}),`
`,e.jsxs(n.p,{children:["Canvas Kit provides styling utilities such as ",e.jsx(n.code,{children:"createStyles"}),", ",e.jsx(n.code,{children:"createStencil"}),", ",e.jsx(n.code,{children:"cssVar"}),`, and calc
functions to handle CSS variable syntax automatically.`]}),`
`,e.jsx(t,{title:"Why use styling utilities?",description:"Styling utilities automatically wrap tokens in <code>var()</code> and provide fallbacks for better browser support. They also ensure consistent token usage across your components.",link:"/?path=/docs/styling-getting-started-overview--docs",linkText:"Learn more about styling utilities"}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"prefer-system-tokens",children:"Prefer System Tokens"}),`
`,e.jsx(n.p,{children:"Use system tokens over base tokens whenever possible for better theming support:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Good - Semantic and themeable
backgroundColor: system.color.surface.default;

// Avoid - Hard-coded base value
backgroundColor: base.neutral0;
`})}),`
`,e.jsx(n.h3,{id:"use-complete-type-levels",children:"Use Complete Type Levels"}),`
`,e.jsx(n.p,{children:"Instead of mixing individual type properties, use complete type level tokens:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Good - Consistent type styling
...system.type.body.md

// Avoid - Mixing individual properties
fontSize: system.fontSize.body.md,
fontWeight: system.fontWeight.regular,
lineHeight: '1.5'
`})}),`
`,e.jsx(n.h3,{id:"leverage-styling-utilities",children:"Leverage Styling Utilities"}),`
`,e.jsxs(n.p,{children:["Always use ",e.jsx(n.code,{children:"createStyles"})," and ",e.jsx(n.code,{children:"cssVar"})," for proper CSS variable handling:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Good - Proper CSS variable wrapping
const styles = createStyles({
  padding: system.padding.md,
});

// Avoid - Manual CSS variable handling
const styles = {
  padding: \`var(\${system.padding.md})\`,
};
`})}),`
`,e.jsx(n.h3,{id:"convert-pixel-values",children:"Convert Pixel Values"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"px2rem"})," for pixel-based values to maintain consistency:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  border: \`solid \${px2rem(1)}\`,
  borderColor: system.color.border.strong,
});
`})})]})}function Be(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{Be as default};
