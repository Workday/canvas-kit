import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as s}from"./index-3YbjYt95.js";import{ae as t}from"./index-BRnk6Jss.js";import"./index-IfJi-UCQ.js";import"./iframe-gI3eSQDE.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/Tokens Migration/Q&A and more"}),`
`,e.jsx(n.h1,{id:"qa-and-more",children:"Q&A and more"}),`
`,e.jsx(n.h2,{id:"common-pitfalls--solutions",children:"Common Pitfalls & Solutions"}),`
`,e.jsx(n.h3,{id:"forgetting-css-variable-imports",children:"Forgetting CSS Variable Imports"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem"}),": Styles don't apply because CSS variables aren't defined. ",e.jsx(n.strong,{children:"Solution"}),`: Ensure you've
imported the CSS variable files at your app's top level.`]}),`
`,e.jsx(n.h3,{id:"not-using-var-wrapper",children:"Not Using var() Wrapper"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem"}),": CSS properties don't work with raw token values. ",e.jsx(n.strong,{children:"Solution"}),": Use ",e.jsx(n.code,{children:"createStyles"}),` or
`,e.jsx(n.code,{children:"cssVar"})," utility instead of direct token references."]}),`
`,e.jsx(n.h3,{id:"mixing-old-and-new-tokens",children:"Mixing Old and New Tokens"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem"}),": Inconsistent styling and potential conflicts. ",e.jsx(n.strong,{children:"Solution"}),`: Migrate completely to new
tokens rather than mixing systems.`]}),`
`,e.jsx(n.h3,{id:"using-base-tokens-for-everything",children:"Using Base Tokens for Everything"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem"}),": Missing out on theming capabilities. ",e.jsx(n.strong,{children:"Solution"}),`: Prefer system tokens for their
semantic meaning and theming support.`]}),`
`,e.jsx(n.h2,{id:"incremental-migration-strategy",children:"Incremental Migration Strategy"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start with New Projects"}),": Use new tokens for all new components and features"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component-by-Component"}),": Migrate existing components one at a time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test Thoroughly"}),": Ensure visual consistency after each component migration"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Update Style Patterns"}),": Migrate from style props to ",e.jsx(n.code,{children:"createStyles"})," where needed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consolidate Imports"}),": Remove old token imports once migration is complete"]}),`
`]}),`
`,e.jsx(n.h2,{id:"complete-migration-examples",children:"Complete Migration Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"example-1-card-component-migration",children:"Example 1: Card Component Migration"}),`
`,e.jsx(n.h4,{id:"before-old-tokens",children:"Before (Old Tokens)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {borderRadius, colors, depth, space, type} from '@workday/canvas-kit-react/tokens';
import {createStyles} from '@workday/canvas-kit-styling';

const cardStyles = createStyles({
  padding: space.l,
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.soap500,
  borderRadius: borderRadius.m,
  color: colors.blackPepper300,
  depth: 1,
  ...type.levels.body.medium,
});

const headerStyles = createStyles({
  color: colors.blackPepper500,
  marginBottom: space.s,
  ...type.levels.heading.small,
});

const errorTextStyles = createStyles({
  color: colors.cinnamon500,
  ...type.levels.subtext.large,
});
`})}),`
`,e.jsx(n.h4,{id:"after-new-tokens---semantic-system-approach",children:"After (New Tokens - Semantic System Approach)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  padding: system.padding.xxl,
  backgroundColor: system.color.surface.default,
  border: \`solid \${px2rem(1)}\`,
  borderColor: system.color.border.strong,
  borderRadius: system.shape.sm,
  color: system.color.fg.default,
  boxShadow: system.depth[1],
  ...system.type.body.md,
});

const headerStyles = createStyles({
  color: system.color.fg.default,
  marginBlockEnd: system.gap.md,
  ...system.type.heading.sm,
});

const errorTextStyles = createStyles({
  color: system.color.fg.danger.default,
  ...system.type.subtext.lg,
});
`})}),`
`,e.jsx(n.h3,{id:"example-2-form-input-migration",children:"Example 2: Form Input Migration"}),`
`,e.jsx(n.h4,{id:"before-old-tokens-1",children:"Before (Old Tokens)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {createStyles} from '@workday/canvas-kit-styling';

const inputStyles = createStyles({
  padding: \`\${space.xs} \${space.s}\`,
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.soap400,
  borderRadius: borderRadius.s,
  color: colors.blackPepper400,
  '&:focus': {
    borderColor: colors.blueberry400,
    backgroundColor: colors.frenchVanilla100,
  },
  '&.error': {
    borderColor: colors.cinnamon500,
    backgroundColor: colors.cinnamon100,
  },
  '&:disabled': {
    backgroundColor: colors.soap200,
    color: colors.soap600,
  },
});
`})}),`
`,e.jsx(n.h4,{id:"after-new-tokens---system-approach",children:"After (New Tokens - System Approach)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const inputStyles = createStyles({
  padding: \`\${system.padding.sm} \${system.padding.md}\`,
  backgroundColor: system.color.surface.default,
  borderColor: system.color.border.default,
  borderRadius: px2rem(2),
  color: system.color.fg.default,
  '&:focus': {
    borderColor: system.color.border.primary.default,
    backgroundColor: system.color.surface.default,
  },
  '&.error': {
    borderColor: system.color.border.critical.default,
    backgroundColor: system.color.surface.critical.default,
  },
  '&:disabled': {
    backgroundColor: system.color.surface.raised,
    color: system.color.fg.disabled,
  },
});
`})}),`
`,e.jsx(n.h3,{id:"example-3-button-migration-with-brand-colors",children:"Example 3: Button Migration with Brand Colors"}),`
`,e.jsx(n.h4,{id:"before-old-tokens-2",children:"Before (Old Tokens)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {theme} from '@emotion/react';

import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {createStyles} from '@workday/canvas-kit-styling';

const primaryButtonStyles = createStyles({
  padding: \`\${space.xs} \${space.m}\`,
  backgroundColor: theme.canvas.palette.primary.main,
  borderColor: theme.canvas.palette.primary.main,
  borderRadius: borderRadius.m,
  color: theme.canvas.palette.primary.contrast,
  '&:hover': {
    backgroundColor: theme.canvas.palette.primary.dark,
  },
});
`})}),`
`,e.jsx(n.h4,{id:"after-new-tokens---brand--system",children:"After (New Tokens - Brand + System)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {createStyles} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

const primaryButtonStyles = createStyles({
  padding: \`\${system.padding.sm} \${system.padding.xl}\`,
  backgroundColor: brand.primary600,
  borderColor: brand.common.focus,
  borderRadius: system.shape.sm,
  color: system.color.fg.inverse,
  '&:hover': {
    backgroundColor: brand.primary800,
  },
});
`})}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsx(n.p,{children:"After completing the token migration:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Review your components for consistent use of system tokens"}),`
`,e.jsx(n.li,{children:"Consider implementing theming if not already in place"}),`
`,e.jsx(n.li,{children:"Update your team's coding standards to reflect new token usage"}),`
`,e.jsx(n.li,{children:"Monitor for any visual regressions and address them promptly"}),`
`]}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://canvas.workday.com/styles/tokens/",rel:"nofollow",children:"Canvas Tokens Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/guides-upgrade-guides-v3-overview--docs",rel:"nofollow",children:"Canvas Tokens v3 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs",rel:"nofollow",children:"Canvas Kit Styling Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-tokens/discussions/77",rel:"nofollow",children:"Token Migration Discussion"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit",rel:"nofollow",children:"Canvas Kit GitHub Repository"})}),`
`]})]})}function u(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{u as default};
