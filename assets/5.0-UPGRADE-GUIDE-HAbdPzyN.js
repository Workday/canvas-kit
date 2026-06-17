import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as t}from"./index-3YbjYt95.js";import{ae as r}from"./index-BNkigr0j.js";import"./index-IfJi-UCQ.js";import"./iframe-D6ZQ-_mO.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Upgrade Guides/v5.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-50-upgrade-guide",children:"Canvas Kit 5.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`Below are the breaking changes made in Canvas Kit v5. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions about the update.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemod",children:"Codemod"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#general-changes",children:"General Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#slash-imports",children:"Slash Imports"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#canvas-kit-preview",children:"Canvas Kit Preview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#type-deprecations-and-hierarchy-updates",children:"Type Deprecations and Hierarchy Updates"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#canvas-kit-css-maintenance-mode",children:"Canvas Kit CSS Maintenance Mode"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#prop-interfaces",children:"Prop Interfaces"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-changes",children:"Component Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-promotions",children:"Component Promotions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#core",children:"Core"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tokens",children:"Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#button",children:"Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#card",children:"Card"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#inputs",children:"Inputs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tabs",children:"Tabs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popper",children:"Popper"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popups",children:"Popups"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#modal",children:"Modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#skeleton",children:"Skeleton"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:[`We've introduced a
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod",rel:"nofollow",children:"new codemod package"}),` you can use
to automatically update your code to work with a majority of the breaking changes in the upgrade
from Canvas Kit v4 to v5. Simply run:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`> npx @workday/canvas-kit-codemod v5 [path]
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: This codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` extensions. You may need to make
some manual changes in other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),", etc.)."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Note: You may need to run your linter after executing the codemod, as it's resulting formatting
(spacing, quotes, etc.) may not match your project's styling.`}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Breaking changes accounted for by this codemod will be marked with a 🤖."})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:`Please verify all changes made by the codemod. As a safety precaution, we recommend committing the
changes from the codemod as a single isolated commit (separate from other changes) so you can
rollback more easily if necessary.`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"Let us know"}),` if you
encounter any issues or use cases that we've missed. The `,e.jsx(n.code,{children:"@workday/canvas-kit-codemod"}),` package will
help us maintain additional codemod transforms to make future upgrades easier.`]}),`
`,e.jsx(n.h2,{id:"general-changes",children:"General Changes"}),`
`,e.jsx(n.h3,{id:"slash-imports",children:"Slash Imports"}),`
`,e.jsx(n.p,{children:`Rather than having a separate module for each component, we've moved to a slash imports system. All
of our React components are now bundled in one of three modules:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"@workday/canvas-kit-react"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"@workday/canvas-kit-labs-react"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"})}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: See ",e.jsx(n.a,{href:"#canvas-kit-preview",children:"Canvas Kit Preview"}),` for more information about the new
`,e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"})," module."]}),`
`]}),`
`,e.jsx(n.p,{children:"Consequently, you'll need to update your import statements:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {TextInput} from '@workday/canvas-kit-react-text-input';

// v5
import {TextInput} from '@workday/canvas-kit-react/text-input';
`})}),`
`,e.jsx(n.p,{children:"🤖 The codemod will update import statements to use the new slash imports syntax."}),`
`,e.jsxs(n.p,{children:["Recall that the codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` extensions. Other file types
will need to be updated manually.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"canvas-kit-preview",children:"Canvas Kit Preview"}),`
`,e.jsxs(n.p,{children:[`Due to the broad range of stability in
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/labs-react",rel:"nofollow",children:"Canvas Kit Labs"}),`
(`,e.jsx(n.code,{children:"@workday/canvas-kit-labs-react"}),`), we've introduced a new module called
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/preview-react",rel:"nofollow",children:"Canvas Kit Preview"}),`
(`,e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),`) to provide consumers with more clarity and confidence when
uptaking experimental and upcoming components. The components in Preview have had a full design and
accessibility review and are approved for use in product. Their functionality and design are set,
but their APIs and/or underlying architecture are still subject to change.`]}),`
`,e.jsxs(n.p,{children:[`Preview serves as a staging ground for components that are ready to use, but may not be up to the
high code standards upheld in the Main `,e.jsx(n.code,{children:"@workday/canvas-kit-react"}),` module. Think of Labs as a space
for alpha components and Preview as a space for beta components.`]}),`
`,e.jsxs(n.p,{children:[`We've promoted several components from Labs to Preview in v5. See
`,e.jsx(n.a,{href:"#component-promotions",children:"Component Promotions"})," for more details."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"type-deprecations-and-hierarchy-updates",children:"Type Deprecations and Hierarchy Updates"}),`
`,e.jsxs(n.p,{children:[`Canvas Kit v4 supported two type hierarchies, Beta and Legacy in
`,e.jsx(n.code,{children:"@workday/canvas-kit-labs-react-core"})," and ",e.jsx(n.code,{children:"@workday/canvas-kit-react-core"}),` respectively. However, v5
replaces those with a new, responsive type hierarchy in `,e.jsx(n.code,{children:"@workday/canvas-kit-react/tokens"}),`. We are
also deprecating and updating our type variants. The v5 codemod handles almost all of these changes
for you. That said, you'll want to review the transformation and your UI to ensure everything was
updated as you expect.`]}),`
`,e.jsx(n.h4,{id:"automatic-updates",children:"Automatic Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"🤖 Type Hierarchy Updates"}),`
`,e.jsxs(n.p,{children:[`All type hierarchy updates are handled by the codemod. The tables below will help you understand
the changes and provide a reference as you review your UI. Most teams are using the Beta type
tokens in `,e.jsx(n.code,{children:"@workday/canvas-kit-labs-react-core"}),`, but some are using the Legacy type in
`,e.jsx(n.code,{children:"@workday/canvas-kit-react-core"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Legacy Type (px)"}),e.jsx(n.th,{children:"Responsive Type (rem)"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"dataViz1"})," (56px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.title.large"})," (3.5rem \\ 56px)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"dataViz2"})," (34px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.heading.large"})," (2rem \\ 32px)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"h1"})," (28px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.heading.medium"})," (1.75rem \\ 28px)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"h2"})," (24px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.heading.small"})," (1.5rem \\ 24px)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"h3"})," (20px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.body.large"})," (1.25rem,) \\ 20px"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"h4"})," (16px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.body.small"})," (1rem \\ 16px)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"h5"})," (16px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.body.small"})," (1rem \\ 16px)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"body"})," (14px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.subtext.large"})," (0.875rem \\ 14px)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"body2"})," (13px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.subtext.medium"})," (0.75rem \\ 12px)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"small"})," (12px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"levels.subtext.medium"})," (0.75rem \\ 12px)"]})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"🤖 Property Updates"}),`
`,e.jsxs(n.p,{children:["All ",e.jsx(n.code,{children:"fontFamily"}),", ",e.jsx(n.code,{children:"fontSize"}),", and ",e.jsx(n.code,{children:"fontWeight"})," property updates are handled by the codemod."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"CSS Property"}),e.jsx(n.th,{children:"Corresponding Token"}),e.jsx(n.th,{children:"Notes"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"fontFamily"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"type.properties.fontFamilies"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"default"})," (Roboto) and ",e.jsx(n.code,{children:"monospace"})," (Roboto Mono) are available"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"fontSize"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"type.properties.fontSizes"})}),e.jsx(n.td,{children:"please consult the type hierarchies above to map values"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"fontWeight"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"type.properties.fontWeights"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"regular"})," (400), ",e.jsx(n.code,{children:"medium"})," (500), and ",e.jsx(n.code,{children:"bold"})," (700) are available"]})]})]})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"🤖 Variant Updates"}),`
`,e.jsxs(n.p,{children:["All ",e.jsx(n.code,{children:"variant"})," updates ",e.jsxs(n.em,{children:["except ",e.jsx(n.code,{children:"link"})]}),` are handled by the codemod. Please see the
`,e.jsx(n.a,{href:"#variants",children:"variants"})," section below for more information."]}),`
`]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Variant"}),e.jsx(n.th,{children:"Transformation"}),e.jsx(n.th,{children:"Notes"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variant.error"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variants.error"})}),e.jsx(n.td,{children:"name change only"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variant.hint"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variants.hint"})}),e.jsx(n.td,{children:"name change only"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variant.inverse"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variants.inverse"})}),e.jsx(n.td,{children:"name change only"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variant.button"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{fontWeight: type.properties.fontWeights.bold}"})}),e.jsx(n.td,{children:"variant deprecated, use type properties"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variant.caps"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{textTransform: 'uppercase', fontWeight: type.properties.fontWeights.medium}"})}),e.jsx(n.td,{children:"variant deprecated, use type properties"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variant.label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{fontWeight: type.properties.fontWeights.medium}"})}),e.jsx(n.td,{children:"variant deprecated, use type properties"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type.variant.mono"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{fontFamily: type.properties.fontFamilies.monospace}"})}),e.jsx(n.td,{children:"variant deprecated, use type properties"})]})]})]}),`
`,e.jsx(n.h4,{id:"manual-updates",children:"Manual Updates"}),`
`,e.jsx(n.h5,{id:"typescript-type-updates",children:"TypeScript Type Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CanvasType"}),` still exists, but the types are quite different and will likely throw errors if
you're relying on them.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CanvasTypeVariant"})," is now ",e.jsx(n.code,{children:"CanvasTypeVariants"})," and has changed signicantly"]}),`
`,e.jsxs(n.li,{children:["We added ",e.jsx(n.code,{children:"CanvasTypeHierarchy"})," (for type levels) and ",e.jsx(n.code,{children:"CanvasTypeProperties"})," (for type properties)"]}),`
`]}),`
`,e.jsx(n.h5,{id:"code-deprecations",children:"Code Deprecations"}),`
`,e.jsx(n.p,{children:"There are only two type deprecations not covered by the codemod:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type Wrapper components (",e.jsx(n.code,{children:"H1"}),"-",e.jsx(n.code,{children:"H5"}),") have been removed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"link"})," variant has been removed"]}),`
`]}),`
`,e.jsx(n.h5,{id:"type-wrapper-components-migration",children:"Type Wrapper Components Migration"}),`
`,e.jsxs(n.p,{children:[`To migrate, please refer to the hierachy tables about and use the type hierarchy tokens directly.
Detailed usage information is available in the `,e.jsx(n.a,{href:"#levels",children:"levels section"}),"."]}),`
`,e.jsx(n.h5,{id:"link-variant-migration",children:"Link Variant Migration"}),`
`,e.jsxs(n.p,{children:["To migrate, please use the ",e.jsx(n.code,{children:"Hyperlink"}),` component instead. Detailed usage information is available in
the `,e.jsx(n.a,{href:"#variants",children:"variants section"}),"."]}),`
`,e.jsx(n.h4,{id:"type-updates-in-depth-overview",children:"Type Updates In-Depth Overview"}),`
`,e.jsx(n.p,{children:"The new type tokens introduce a few major changes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Introducing rem units"}),`
`,e.jsxs(n.li,{children:["Creating a new ",e.jsx(n.code,{children:"type"})," object structure"]}),`
`,e.jsxs(n.li,{children:["Adding new type properties (",e.jsx(n.code,{children:"fontFamilies"}),", ",e.jsx(n.code,{children:"fontSizes"}),", and ",e.jsx(n.code,{children:"fontWeights"}),")"]}),`
`,e.jsx(n.li,{children:"Updating and replacing variants"}),`
`]}),`
`,e.jsx(n.h4,{id:"introducing-rem-units",children:"Introducing Rem Units"}),`
`,e.jsxs(n.p,{children:["The new type hierarchy uses ",e.jsx(n.code,{children:"rem"})," units instead of ",e.jsx(n.code,{children:"px"}),`. This update follows the guidance
`,e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG21/#resize-text",rel:"nofollow",children:"from the WCAG spec"}),` and provides better support for
users who rely on zooming. If you'd like to learn more about `,e.jsx(n.code,{children:"rem"}),` and relative units, you can
review this
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems",rel:"nofollow",children:"documentation"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," We are using ",e.jsx(n.code,{children:"16px"}),` as our base font-size for these values. This is a browser standard
and also fairly common across Workday. However, `,e.jsxs(n.em,{children:[`if your body text is set to a value other than
`,e.jsx(n.code,{children:"16px"})]}),", you will need to adjust that value for text to render properly."]}),`
`]}),`
`,e.jsx(n.h4,{id:"new-type-object-structure",children:"New Type Object Structure"}),`
`,e.jsx(n.p,{children:`The Beta and Legacy type object structures were fairly flat, provided many levels in the type
hierarchy, and included quite a few variants. While none of these were bad attributes, our research
suggested they created a large amount of confusion. Both designers and engineers were unclear on
when to use many of the tokens provided. We restructured the object to help users make more sense of
it. The tokens are divided into three main parts:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"levels"})," (the type hierarchy)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"properties"})," (",e.jsx(n.code,{children:"fontFamilies"}),", ",e.jsx(n.code,{children:"fontSizes"}),", and ",e.jsx(n.code,{children:"fontWeights"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variants"})," (modifiers for type styles)"]}),`
`]}),`
`,e.jsx(n.h5,{id:"levels",children:"Levels"}),`
`,e.jsxs(n.p,{children:["Type ",e.jsx(n.code,{children:"levels"}),` contain our new type hierarchy. When applying type styles, we recommend using these
tokens first. Each size applies `,e.jsx(n.code,{children:"fontFamily"}),", ",e.jsx(n.code,{children:"fontSize"}),", ",e.jsx(n.code,{children:"fontWeight"}),", ",e.jsx(n.code,{children:"lineHeight"}),`,
`,e.jsx(n.code,{children:"letterSpacing"}),", and ",e.jsx(n.code,{children:"color"}),` styles for you, so you can create consistent type quickly and easily.
Instead of the previous flat structure, the type hierarchy is now organized in four levels:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title"})," (used for large page titles)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"heading"})," (used for headings and large text)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"body"})," (used for standard body text)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subtext"})," (used for small subtext content or in tight spaces)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["And each level has three sizes: ",e.jsx(n.code,{children:"large"}),", ",e.jsx(n.code,{children:"medium"}),", and ",e.jsx(n.code,{children:"small"}),`. The previous hierarchy often mapped
its levels 1:1 with semantic elements. This would often lead to awkward styling, such as this:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {type} from '@workday/canvas-kit-labs-react-core';

// Why is an h2 styled with h3 styles? Is this intentional? Is this a mistake? I don't know.
const PageSection = () => {
  return (
    <section>
      <h2 css={type.h3}>Section Heading</h2>
      <p css={type.levels.body.small}>Section body text</p>
    </section>
  );
};
`})}),`
`,e.jsx(n.p,{children:`But this new organization allows the hierarchy to be more flexible and create less confusion around
usage. Below is an example:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v5
import {type} from '@workday/canvas-kit-react/tokens';

const PageSection = () => {
  return (
    <section>
      <h2 css={type.levels.heading.medium}>Section Heading</h2>
      <p css={type.levels.body.small}>Section body text</p>
    </section>
  );
};
`})}),`
`,e.jsx(n.h5,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.p,{children:["Most often you will want to reach for ",e.jsx(n.code,{children:"levels"}),`, but sometimes you only need one or two type values
for styling. Previously, you had to use the hierarchy to apply these values, which is clunky and
implicit. For example, using: `,e.jsx(n.code,{children:"fontSize: type.h2.fontSize,"}),` when all you really want is the token
for `,e.jsx(n.code,{children:"24px"}),". Type ",e.jsx(n.code,{children:"properties"}),` give you an atomic-level of control when you want to explicitly set a
particular value. Here's an example using `,e.jsx(n.code,{children:"fontFamilies"}),", ",e.jsx(n.code,{children:"fontSizes"}),", and ",e.jsx(n.code,{children:"fontWeights"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Note:"})," ",e.jsx(n.code,{children:"fontSizes"}),` keys are in pixel values as a convenient reference, but the values are the
base-16 rem equivalent. E.g. `,e.jsx(n.code,{children:"fontSizes[12]"})," returns ",e.jsx(n.code,{children:"0.75rem"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {type} from '@workday/canvas-kit-react/tokens';

const boldTextStyles = {
  fontFamily: type.properties.fontFamilies.default, // 'Roboto'
  fontSize: type.properties.fontSizes[16], // 1rem (16px)
  fontWeight: type.properties.bold, // 700
};

const mediumMonoStyles = {
  fontFamily: type.properties.fontFamilies.monospace, // 'Roboto Mono'
  fontSize: type.properties.fontSizes[12], // 0.75rem (12px)
  fontWeight: type.properties.medium, // 500
};
`})}),`
`,e.jsx(n.h5,{id:"variants",children:"Variants"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Supported Variants"})}),`
`,e.jsxs(n.p,{children:["We're also reducing and simplifying our ",e.jsx(n.code,{children:"variants"}),". In v5 we will only support:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error"})," (used for making errors more visible)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hint"})," (used for help text and secondary content)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"inverse"})," (used for any text on a dark or colored background)"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The ",e.jsx(n.code,{children:"variant"})," key has been renamed to ",e.jsx(n.code,{children:"variants"}),` to be consistent with our other key
names.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`//v4
import {type} from '@workday/canvas-kit-labs-react-core';

const errorStyles = type.variant.error;
const hintStyles = type.variant.hint;
const inverseStyles = type.variant.inverse;

// v5
import {type} from '@workday/canvas-kit-react/tokens';

const errorStyles = type.variants.error;
const hintStyles = type.variants.hint;
const inverseStyles = type.variants.inverse;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Deprecated Variants"})}),`
`,e.jsx(n.p,{children:"We've deprecated a handful of variants:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"caps"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"label"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"link"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mono"})}),`
`]}),`
`,e.jsxs(n.p,{children:["With the exception of ",e.jsx(n.code,{children:"link"}),`, which is discussed further below, all of these variants can be
supported with `,e.jsx(n.code,{children:"properties"}),` and other styles. Here are examples of how to translate each deprecated
variant:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`//v4
import {type} from '@workday/canvas-kit-labs-react-core';

// button variant styles
const buttonStyles = type.variant.button;
// caps variant styles
const capsStyles = type.variant.caps;
// label variant styles
const labelStyles = type.variant.label;
// mono variant styles
const monoStyles = type.variant.mono;

// v5
import {type} from '@workday/canvas-kit-labs-react/tokens';

// button variant styles
const buttonStyles = {fontWeight: type.properties.fontWeights.bold};
// caps variant styles
const capsStyles = {
  fontWeight: type.properties.fontWeights.medium,
  textTransform: 'uppercase',
};
// label variant styles
const labelStyles = {fontWeight: type.properties.fontWeights.medium};
// mono variant styles
const monoStyles = {fontFamily: type.properties.fontFamilies.monospace};
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Link Variant"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"link"})," variant is also being deprecated in v5. You'll need to use the ",e.jsx(n.code,{children:"Hyperlink"}),` component
instead. This is the only manual update needed for the type updates. Below are some examples:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {type} from '@workday/canvas-kit-labs-react-core';

const Link = styled('a')(type.variant.link);

return <Link href="https://workday.github.io/canvas-kit">View docs</Link>;

// v5
import {Hyperlink} from '@workday/canvas-kit-labs-react/button';

return <Hyperlink href="https://workday.github.io/canvas-kit">View docs</Hyperlink>;
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If you're mixing styles from type ",e.jsx(n.code,{children:"levels"}),", you'll need to pull out the ",e.jsx(n.code,{children:"color"}),` style
when applying them to `,e.jsx(n.code,{children:"Hyperlink"}),". Below is an example."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v5
import {type} from '@workday/canvas-kit-labs-react/tokens';
import {Hyperlink} from '@workday/canvas-kit-labs-react/button';

// Remove \`color\` from type styles to prevent the color from overriding the link color
const {color, ...headingLargeStyles} = type.levels.heading.large;

const HeadingLink = () => (
  <Hyperlink css={headingLargeStyles} href="https://workday.github.io/canvas-kit">
    View docs
  </Hyperlink>
);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"canvas-kit-css-maintenance-mode",children:"Canvas Kit CSS Maintenance Mode"}),`
`,e.jsxs(n.p,{children:[`Due to the infrequent use of our CSS modules, we've placed them in maintenance mode in v5. Although
we'll continue to support `,e.jsx(n.code,{children:"@workday/canvas-kit-css"}),` with bug fixes and significant visual updates,
it most likely won't be receiving new components or additional features. This will allow us to
provide more focused support and to dedicate our efforts to making bigger and better improvements to
our most used components: Canvas Kit React. If you have questions or concerns, please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/new",rel:"nofollow",children:"let us know"}),"."]}),`
`,e.jsx(n.h3,{id:"prop-interfaces",children:"Prop Interfaces"}),`
`,e.jsxs(n.p,{children:["Many components were updated to be polymorphic using the ",e.jsx(n.code,{children:"createComponent"}),` utility function. Most
components in Canvas Kit extend from an HTML interface and spread extra props onto the HTML element.
Since these components are now polymorphic, the exported props no longer extend from an HTML
interface since the HTML interface is now determined by an optional `,e.jsx(n.code,{children:"as"}),` prop. It is common to wrap
Canvas Kit components with your own component and extend from the Canvas Kit component's prop
interface. To support this use-case in addition to polymorphic prop interfaces, `,e.jsx(n.code,{children:"ExtractProp"}),` was
introduced. `,e.jsx(n.code,{children:"ExtractProp"}),` understands these polymorphic components and will return the base props in
addition to the HTML interface. There is an optional second argument that can override the default
HTML interface if your wrapper component uses the `,e.jsx(n.code,{children:"as"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {TextInput, TextInputProps} from '@workday/canvas-kit-react-text-input';

const FancyTextInput: React.FC<TextInputProps> = props => <TextInput {...props} />;

// v5
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {ExtractProps} from '@workday/canvas-kit-react/common';

const FancyTextInput: React.FC<ExtractProps<typeof TextInput>> = props => {};

// v5 via createComponent
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createComponent} from '@workday/canvas-kit-react/common';

const FancyTextInput = createComponent(TextInput)({
  displayName: 'FancyTextInput',
  Component((props) => <TextInput {...props} />)
})
`})}),`
`,e.jsx(n.p,{children:"Components that made this change:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Button"}),`
`,e.jsx(n.li,{children:"IconButton"}),`
`,e.jsx(n.li,{children:"Card"}),`
`,e.jsx(n.li,{children:"Hyperlink"}),`
`,e.jsx(n.li,{children:"Select"}),`
`,e.jsx(n.li,{children:"TextArea"}),`
`,e.jsx(n.li,{children:"TextInput"}),`
`,e.jsx(n.li,{children:"Checkbox"}),`
`,e.jsx(n.li,{children:"Radio"}),`
`,e.jsx(n.li,{children:"ColorInput"}),`
`,e.jsx(n.li,{children:"ColorPreview"}),`
`,e.jsx(n.li,{children:"Modal"}),`
`,e.jsx(n.li,{children:"Popup"}),`
`,e.jsx(n.li,{children:"Skeleton"}),`
`,e.jsx(n.li,{children:"Tabs"}),`
`,e.jsx(n.li,{children:"Toast"}),`
`]}),`
`,e.jsx(n.h2,{id:"component-changes",children:"Component Changes"}),`
`,e.jsx(n.h3,{id:"component-promotions",children:"Component Promotions"}),`
`,e.jsx(n.h4,{id:"promotions-from-labs-to-preview",children:"Promotions from Labs to Preview"}),`
`,e.jsx(n.p,{children:"The following components were promoted from Labs to the new Preview module:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Breadcrumbs"}),`
`,e.jsx(n.li,{children:"Color Picker"}),`
`,e.jsx(n.li,{children:"Menu"}),`
`,e.jsx(n.li,{children:"Select"}),`
`,e.jsx(n.li,{children:"Side Panel"}),`
`]}),`
`,e.jsxs(n.p,{children:["You'll need to update your imports for promoted components (this is ",e.jsx(n.em,{children:"not"})," handled by the codemod):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {Breadcrumbs} from '@workday/canvas-kit-labs-react-breadcrumbs';

// v5
import {Breadcrumbs} from '@workday/canvas-kit-preview-react/breadcrumbs';
`})}),`
`,e.jsx(n.h4,{id:"promotions-from-labs-to-main",children:"Promotions from Labs to Main"}),`
`,e.jsx(n.p,{children:`Generally, a component will begin in Labs before it's promoted to Preview and eventually to Main
(although there is no guarantee a component will advance out of Labs). Given that Preview was just
introduced in v5, however, we believe that a few components have incubated long enough in Labs and
are ready for Main. The following components have been promoted straight from Labs to Main:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pagination"}),`
`,e.jsx(n.li,{children:"Tabs"}),`
`]}),`
`,e.jsxs(n.p,{children:["These imports will need to be updated manually as well (this is ",e.jsx(n.em,{children:"not"})," handled by the codemod):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {Pagination} from '@workday/canvas-kit-labs-react-pagination';

// v5
import {Pagination} from '@workday/canvas-kit-react/pagination';
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"core",children:"Core"}),`
`,e.jsx(n.h4,{id:"remove-labs-core",children:"Remove Labs Core"}),`
`,e.jsxs(n.p,{children:["The Labs ",e.jsx(n.code,{children:"core"}),` package has been removed. The few utilities in that package were either promoted,
deprecated, or found a better home in another package. These changes are listed below, most of which
are handled by the v5 codemod.`]}),`
`,e.jsx(n.h5,{id:"automatic-updates-1",children:"Automatic Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["🤖 Move ",e.jsx(n.code,{children:"StaticStates"})," component to Main ",e.jsx(n.code,{children:"common"})]}),`
`,e.jsxs(n.p,{children:["We use ",e.jsx(n.code,{children:"StaticStates"}),` internally for our visual regression tests. It didn't really make sense to
live in `,e.jsx(n.code,{children:"core"}),", and it's stable enough to move to Main, so it now lives in ",e.jsx(n.code,{children:"common"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {StaticStates} from '@workday/canvas-kit-labs-react-core';

// v5
import {StaticStates} from '@workday/canvas-kit-react/common';
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["🤖 Move ",e.jsx(n.code,{children:"type"})," tokens to Main ",e.jsx(n.code,{children:"tokens"})," (formerly ",e.jsx(n.code,{children:"core"}),")"]}),`
`,e.jsxs(n.p,{children:["This change is described in more detail in the ",e.jsx(n.a,{href:"#type",children:"Type Section"}),`, but suffice to say all
`,e.jsx(n.code,{children:"type"})," imports will be automatically migrated to the Main ",e.jsx(n.code,{children:"token"})," package by the codemod."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {type} from '@workday/canvas-kit-labs-react-core';

// v5
import {type} from '@workday/canvas-kit-react/tokens';
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h5,{id:"manual-updates-1",children:"Manual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Deprecate ",e.jsx(n.code,{children:"space"})," in favor of ",e.jsx(n.code,{children:"Box"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"space"})," function was a handy little utility that you could apply to ",e.jsx(n.code,{children:"styled()"}),` components to
add space style props. However, with the addition of `,e.jsx(n.code,{children:"Box"})," it is no longer needed. ",e.jsx(n.code,{children:"Box"}),` provides
`,e.jsx(n.code,{children:"space"}),` style props and much more. While this is a manual migration, the process is fairly
straight-forward.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The ",e.jsx(n.code,{children:"space"})," props use shorthand prop names for what ",e.jsx(n.code,{children:"Box"})," provides. For example, ",e.jsx(n.code,{children:"pt"}),`
maps to `,e.jsx(n.code,{children:"paddingTop"}),", ",e.jsx(n.code,{children:"mr"})," maps to ",e.jsx(n.code,{children:"marginRight"}),`, and so on. You can see this in the example
below.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {spaceNumbers} from '@workday/canvas-kit-react-core';
import {space} from '@workday/canvas-kit-labs-react-core';

// A styled div with space props
const Box = styled('div')(space);

const Card = () => <Box p={spaceNumbers.s}>Hello!</Box>;

// v5
import {Box} from '@workday/canvas-kit-labs-react/common';

const Card = () => <Box padding="s">Hello!</Box>;
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"rename-core-to-tokens",children:"Rename Core to Tokens"}),`
`,e.jsxs(n.p,{children:[`The distinction between our core and common packages is often unclear and creates confusion around
what should be imported from where. To help alleviate this and better align with our design
taxonomy, we've renamed our Main `,e.jsx(n.code,{children:"core"})," module to ",e.jsx(n.code,{children:"tokens"}),`. These changes are listed below, all of
which are handled by the v5 codemod.`]}),`
`,e.jsx(n.h5,{id:"automatic-updates-2",children:"Automatic Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["🤖 Rename Main ",e.jsx(n.code,{children:"core"})," import statements to ",e.jsx(n.code,{children:"tokens"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {colors} from '@workday/canvas-kit-react-core';

// v5
import {colors} from '@workday/canvas-kit-react/tokens';
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"input-provider",children:"Input Provider"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"InputProvider"}),` wrapper component (used to provide CSS-referencable data attributes for the
user's current input method) has been moved from `,e.jsx(n.code,{children:"@workday/canvas-kit-react-core"}),` to
`,e.jsx(n.code,{children:"@workday/canvas-kit-react/common"}),". After renaming our ",e.jsx(n.code,{children:"core"})," package to ",e.jsx(n.code,{children:"tokens"}),`, it no longer made
sense in this location.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {InputProvider} from '@workday/canvas-kit-react-core';

// v5
import {InputProvider} from '@workday/canvas-kit-react/common';
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will update your ",e.jsx(n.code,{children:"InputProvider"})," imports."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"tokens",children:"Tokens"}),`
`,e.jsx(n.h4,{id:"space",children:"Space"}),`
`,e.jsxs(n.p,{children:["To better align with our design taxonomy, we've renamed our space tokens in our ",e.jsx(n.code,{children:"tokens"}),` package
(formerly in `,e.jsx(n.code,{children:"core"}),"). Instead of relying on ",e.jsx(n.code,{children:"@workday/canvas-space-web"}),` to supply our space values,
we're now keeping those values in canvas-kit. We've also taken the opportunity to improve the space
types (which were too generic) and their JSDoc hints.`]}),`
`,e.jsx(n.p,{children:"The following table describes each update:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Before"}),e.jsx(n.th,{children:"After"}),e.jsx(n.th,{children:"Change Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"spacing"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"space"})}),e.jsx(n.td,{children:"name change only"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"spacingNumbers"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"spaceNumbers"})}),e.jsx(n.td,{children:"name change only"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"CanvasSpacing"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CanvasSpace"})}),e.jsx(n.td,{children:"name change and improved types*"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"CanvasSpacingValue"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CanvasSpaceValues"})}),e.jsx(n.td,{children:"name change only"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"CanvasSpacingNumber"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CanvasSpaceNumbers"})}),e.jsx(n.td,{children:"name change and improved types*"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"n/a"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CanvasSpaceNumberValues"})}),e.jsx(n.td,{children:"new type!"})]})]})]}),`
`,e.jsx(n.p,{children:`* Before, the types were too generic and not very useful. They now better reflect the values they
represent.`}),`
`,e.jsxs(n.p,{children:["The codemod will handle ",e.jsx(n.em,{children:"almost all"}),` of these changes for you.That said, you'll want to review your
UI to ensure everything was updated as you expect. `,e.jsx(n.a,{href:"#manual-updates",children:"Manual Updates"})," below."]}),`
`,e.jsx(n.h5,{id:"automatic-updates-3",children:"Automatic Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["🤖 Rename ",e.jsx(n.code,{children:"spacing"})," and ",e.jsx(n.code,{children:"spacingNumbers"})," imports."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {spacing, spacingNumbers} from '@workday/canvas-kit-react-core';

// v5
import {space, spaceNumbers} from '@workday/canvas-kit-react/tokens';
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["🤖 Rename ",e.jsx(n.code,{children:"CanvasSpacing"}),", ",e.jsx(n.code,{children:"CanvasSpacingValue"}),", and ",e.jsx(n.code,{children:"CanvasSpacingNumber"})," imports."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {
  CanvasSpacing,
  CanvasSpacingValue,
  CanvasSpacingNumber,
} from '@workday/canvas-kit-react-core';

// v5
import {
  CanvasSpace,
  CanvasSpaceValues,
  CanvasSpaceNumbers,
} from '@workday/canvas-kit-react/tokens';
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"🤖 Update token expressions."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
const iconPadding = spacing.s;

// v5
const iconPadding = space.s;
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"🤖 Update type expressions."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
const getSpace = (value: CanvasSpacingValue) => spacing[value];

// v5
const getSpace = (value: CanvasSpaceValue) => space[value];
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"🤖 Update token properties."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
const iconPadding = canvas.spacing.s;

// v5
const iconPadding = canvas.space.s;
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h5,{id:"manual-updates-2",children:"Manual Updates"}),`
`,e.jsx(n.p,{children:`As previously mentioned, the codemod should handle the vast majority of these updates. However,
there are potentially a few changes that will need to be made manually. There may be more beyond
what's listed below, but these were the most common issues found in our investigation.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Usage outside of ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"})," files",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["e.g. referencing ",e.jsx(n.code,{children:"spacing"})," in documentation (",e.jsx(n.code,{children:".md"})," files)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Usage in code comments or JSDoc comments",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["e.g. ",e.jsx(n.code,{children:"// spacing.s = 16px"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Re-declararation ",e.jsx(n.code,{children:"space"})," or ",e.jsx(n.code,{children:"spaceNumbers"})," in the same files",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["e.g. importing or declaring a new ",e.jsx(n.code,{children:"space"})," or ",e.jsx(n.code,{children:"spaceNumbers"}),` variable will prevent the codemod
from updating the file`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Aliasing existing variables as ",e.jsx(n.code,{children:"spacing"})," or ",e.jsx(n.code,{children:"spaceNumbers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["e.g. ",e.jsx(n.code,{children:"import {spacingNumbers as spacing}"})," will prevent the codemod from updating the file"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"border-radius",children:"Border Radius"}),`
`,e.jsxs(n.p,{children:["We've updated the border radius ",e.jsx(n.code,{children:"zero"})," token value from ",e.jsx(n.code,{children:"0"})," to ",e.jsx(n.code,{children:'"0px"'}),` for consistency given that
all other border radius tokens use string pixel values. We highly doubt this change will cause any
issues, but because the value's type is different, this is technically a breaking change.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {borderRadius} from '@workday/canvas-kit-react-core';

console.log(borderRadius.zero); // returns \`0\`

// v5
import {borderRadius} from '@workday/canvas-kit-react/tokens';

console.log(borderRadius.zero); // returns "0px"
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsx(n.h4,{id:"recategorization",children:"Recategorization"}),`
`,e.jsx(n.p,{children:`There has been common confusion around the large number of buttons Canvas supports and when each
should be used. To improve the usability of our design system, we've been working to recategorize
and simplify our button offering. To align with the recent changes in our Figma libraries, we've
reorganized our buttons, renaming a few and removing others.`}),`
`,e.jsxs(n.p,{children:[`The majority of button use cases have been simplified into three different components:
`,e.jsx(n.code,{children:"PrimaryButton"}),", ",e.jsx(n.code,{children:"SecondaryButton"}),", and ",e.jsx(n.code,{children:"TertiaryButton"}),`, each level representing its emphasis and
hierarchy in a UI. We hope this makes your usage of our buttons more intentional and clear. We've
provided a codemod to make these changes automatically.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Renamed:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["🤖 ",e.jsx(n.code,{children:"Button"})," has been split into ",e.jsx(n.code,{children:"PrimaryButton"})," and ",e.jsx(n.code,{children:"SecondaryButton"})," (depending on the ",e.jsx(n.code,{children:"variant"}),`
prop).`]}),`
`,e.jsxs(n.li,{children:["🤖 ",e.jsx(n.code,{children:"OutlineButton"})," (",e.jsx(n.code,{children:"secondary"}),") is now ",e.jsx(n.code,{children:"SecondaryButton"}),`. For accessibility reasons, the
"outline" styling is the new styling for our secondary buttons.`]}),`
`,e.jsxs(n.li,{children:["🤖 ",e.jsx(n.code,{children:"OutlineButton"})," (",e.jsx(n.code,{children:"inverse"}),") is now ",e.jsx(n.code,{children:"SecondaryButton"})," with an ",e.jsx(n.code,{children:"inverse"})," variant."]}),`
`,e.jsxs(n.li,{children:["🤖 ",e.jsx(n.code,{children:"TextButton"})," is now ",e.jsx(n.code,{children:"TertiaryButton"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Removed:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["🤖 ",e.jsx(n.code,{children:"HighlightButton"}),". Use ",e.jsx(n.code,{children:"SecondaryButton"})," instead."]}),`
`,e.jsxs(n.li,{children:["🤖 ",e.jsx(n.code,{children:"OutlineButton"})," with ",e.jsx(n.code,{children:"primary"})," variant. Use ",e.jsx(n.code,{children:"PrimaryButton"})," or ",e.jsx(n.code,{children:"SecondaryButton"}),` instead. The
codemod will replace with `,e.jsx(n.code,{children:"SecondaryButton"}),"."]}),`
`,e.jsxs(n.li,{children:["🤖 ",e.jsx(n.code,{children:"DropdownButton"}),". This can be achieved simply using ",e.jsx(n.code,{children:"PrimaryButton"})," or ",e.jsx(n.code,{children:"SecondaryButton"}),` with
an `,e.jsx(n.code,{children:"icon"})," prop and ",e.jsx(n.code,{children:'iconPosition="right"'}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`To see examples of code in v4 versus v5, see our
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod/lib/v5/spec/recategorizeButtons.spec.ts",rel:"nofollow",children:"codemod tests"}),"."]}),`
`,e.jsx(n.h4,{id:"exports",children:"Exports"}),`
`,e.jsx(n.p,{children:"We've changed some of the Button module's export behavior:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["🤖 The ",e.jsx(n.code,{children:"beta_Button"})," export was removed. The codemod will rename the import to ",e.jsx(n.code,{children:"Button"}),` instead,
preserving local renaming if it exists.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {beta_Button as Button} from '@workday/canvas-kit-react-button';

// v5
import {SecondaryButton} from '@workday/canvas-kit-react/button';
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"🤖 The default export was removed. The codemod will change default imports to named imports."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import Button from '@workday/canvas-kit-react-button';

// v5
import {SecondaryButton} from '@workday/canvas-kit-react/button';
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"enums",children:"Enums"}),`
`,e.jsx(n.p,{children:"Enums have been removed from all buttons in favor of string literals."}),`
`,e.jsxs(n.p,{children:[`🤖 The codemod will rewrite any usages of an enum to the string literal. If you used an enum as a
type, the codemod will expand to a union of string literals. You could change the union manually
instead to be something like `,e.jsx(n.code,{children:"SecondaryButtonProps['variant']"}),` if you prefer not to duplicate the
union of string literals.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
<Button size={Button.Size.Large} />;
interface Props {
  size: ButtonSize;
}

// v5
<SecondaryButton size="large" />;
interface Props {
  size: 'small' | 'medium' | 'large';
}
`})}),`
`,e.jsx(n.h4,{id:"createcomponent",children:"createComponent"}),`
`,e.jsxs(n.p,{children:["Buttons now use the ",e.jsx(n.code,{children:"createComponent"})," utility from the ",e.jsx(n.code,{children:"common"})," module which forwards ",e.jsx(n.code,{children:"ref"}),` and
allows `,e.jsx(n.code,{children:"as"})," to change the underlying element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
<Button buttonRef={ref} />;

// v5
<SecondaryButton ref={ref} />;
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will update all buttons to use ",e.jsx(n.code,{children:"ref"})," instead of ",e.jsx(n.code,{children:"buttonRef"}),"."]}),`
`,e.jsxs(n.p,{children:[`Button prop interfaces no longer extend directly from
`,e.jsx(n.code,{children:"React.ButtonHTMLAttributes<HTMLButtonElement>"}),". ",e.jsx(n.code,{children:"createComponent"}),` returns a component that
determines the element interface via the `,e.jsx(n.code,{children:"as"}),` prop. This is why Button props no longer contain an
element interface directly. If you extend from a Button prop interface, or have code that uses a
Button prop interface and accesses properties like `,e.jsx(n.code,{children:"onClick"}),`, you'll need to provide the button
attribute yourself in order to avoid TypeScript issues (this doesn't affect runtime). This is not
code-moddable since intent cannot be pre-determined.`]}),`
`,e.jsx(n.h4,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The exported props no longer extend from the ",e.jsx(n.code,{children:"HTMLButtonElement"}),` interface. Use
`,e.jsx(n.a,{href:"#prop-interfaces",children:"ExtractProps"})," instead."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`interface MyButtonProps extends ButtonProps {}

// onClick no longer exists in \`ButtonProps\`, so TypeScript will complain about onClick not
// existing in \`MyButtonProps\` (\`onClick\` does exist as a prop on \`<Button>\`, however)
const MyButton = ({children, onClick}: MyButtonProps) => (
  <SecondaryButton onClick={onClick}>{children}</SecondaryButton>
);

// After
interface MyButtonProps extends ExtractProps<typeof SecondaryButton> {}

// After (alternate fix)
interface MyButtonProps extends ExtractProps<> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"card",children:"Card"}),`
`,e.jsxs(n.p,{children:["Card is now a ",e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`
composed of a `,e.jsx(n.code,{children:"Card.Body"})," and an optional ",e.jsx(n.code,{children:"Card.Heading"}),`. This allows direct access to the heading
and body elements.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
<Card header="Card Title" headerId="header-id">
  Card Body
</Card>

// v5
<Card>
  <Card.Heading id="header-id">Card Title</Card.Heading>
  <Card.Body>Card Body</Card.Body>
</Card>
`})}),`
`,e.jsxs(n.p,{children:[`🤖 The codemod will attempt to rewrite your JSX to match the new API. Based on what we've seen of
how Card has been used, the codemod should handle most of your use cases. It will work if you rename
`,e.jsx(n.code,{children:"Card"})," in the import or style the Card using ",e.jsx(n.code,{children:"styled(Card)"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Handled by the codemod

// Default import
import Card from '@workday/canvas-kit-react-card'

<Card header="Card Title">Card Body</Card>

// Renamed import
import {Card as CanvasCard} from '@workday/canvas-kit-react-card'

<CanvasCard header="Card Title">Card Body</CanvasCard>

// Styled card
import {Card} from '@workday/canvas-kit-react-card'

const StyledCard = styled(Card)(styles)

<StyledCard header="Card Title">Card Body</StyledCard>
`})}),`
`,e.jsxs(n.p,{children:["However, the codemod will ",e.jsx(n.em,{children:"not"})," work in cases where ",e.jsx(n.code,{children:"header"})," or ",e.jsx(n.code,{children:"headerId"}),` are spreaded as props or
if you're importing a re-exported Canvas Kit Card:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// NOT handled by the codemod

// Spread props
import {Card} from '@workday-canvas-kit-card'

const props = {
  header: 'Card Title'
}
<Card {...props}>Card Body</Card>

// Re-exporting
import {Card} from './Card' // where \`Card\` is a re-exported Canvas Kit \`Card\`
`})}),`
`,e.jsx(n.h4,{id:"props-1",children:"Props"}),`
`,e.jsxs(n.p,{children:["The exported props no longer extend from the ",e.jsx(n.code,{children:"HTMLDivElement"}),` interface. Use
`,e.jsx(n.a,{href:"#prop-interfaces",children:"ExtractProps"})," instead."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// NOT handled by the codemod

// v4
interface MyCard extends CardProps {}

// v5
interface MyCard extends ExtractProps<typeof Card>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"inputs",children:"Inputs"}),`
`,e.jsxs(n.p,{children:[`All input components in the Main package now support
`,e.jsx(n.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"})," through use of the ",e.jsx(n.code,{children:"createComponent"}),`
utility from the `,e.jsx(n.code,{children:"common"})," module. This includes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Checkbox"}),`
`,e.jsx(n.li,{children:"Color Input"}),`
`,e.jsx(n.li,{children:"Color Preview"}),`
`,e.jsx(n.li,{children:"Radio"}),`
`,e.jsx(n.li,{children:"Select"}),`
`,e.jsx(n.li,{children:"Switch"}),`
`,e.jsx(n.li,{children:"Text Input"}),`
`,e.jsx(n.li,{children:"Text Area"}),`
`]}),`
`,e.jsx(n.p,{children:`Additionally, the Select in Preview (formerly in Labs) has also been updated to support ref
forwarding.`}),`
`,e.jsxs(n.p,{children:["Most of these input components previously supported an ",e.jsx(n.code,{children:"inputRef"}),` prop that could be used to obtain
a ref to the component's underlying input element. For example, in v4, if you wanted to obtain a ref
to a Text Input's underlying `,e.jsx(n.code,{children:'<input type="text" />'}),` element, you could pass a ref to the component
using `,e.jsx(n.code,{children:"inputRef"}),". In v5, you'll need to use ",e.jsx(n.code,{children:"ref"})," instead of ",e.jsx(n.code,{children:"inputRef"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ref = React.useRef(null);

// v4
<TextInput inputRef={ref} />;

// v5
<TextInput ref={ref} />;
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will update all input components that previously supported ",e.jsx(n.code,{children:"inputRef"})," to use ",e.jsx(n.code,{children:"ref"}),`
instead.`]}),`
`,e.jsxs(n.p,{children:["For components that previously supported ",e.jsx(n.code,{children:"inputRef"}),", ",e.jsx(n.code,{children:"ref"}),` is now forwarded to the same underlying
element that `,e.jsx(n.code,{children:"inputRef"}),` was applied to previously. Select and Select (Preview) did not support
`,e.jsx(n.code,{children:"inputRef"})," in v4, but now support ",e.jsx(n.code,{children:"ref"}),` in v5. See each component's documentation for information on
which element `,e.jsx(n.code,{children:"ref"})," is forwarded to for that particular component."]}),`
`,e.jsx(n.h4,{id:"props-2",children:"Props"}),`
`,e.jsxs(n.p,{children:[`Input component prop interfaces no longer extend directly from their underlying element interface
(e.g. `,e.jsx(n.code,{children:"TextInputProps"})," no longer extends from ",e.jsx(n.code,{children:"React.InputHTMLAttributes<HTMLInputElement>"}),`).
`,e.jsx(n.code,{children:"createComponent"})," returns a component that determines the element interface via the ",e.jsx(n.code,{children:"as"}),` prop. This
is why input component props no longer contain an element interface directly. If you extend from an
input component prop interface, or have code that uses an input component prop interface and
accesses properties like `,e.jsx(n.code,{children:"onClick"}),", you'll need to use ",e.jsx(n.a,{href:"#prop-interfaces",children:"ExtractProps"})," instead."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`interface MyTextInputProps extends TextInputProps {}

// onClick no longer exists in \`TextInputProps\` so TypeScript will complain about onClick not
// existing in \`MyTextInputProps\` (onClick does exist as a prop on \`<TextInput>\`, however)
const MyTextInput = ({onClick}: MyTextInputProps) => <TextInput onClick={onClick} />;

// Fix
interface MyTextInputProps extends ExtractProps<typeof TextInput> {}

// Alternate fix
interface MyTextInputProps extends TextInputProps {
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}
`})}),`
`,e.jsxs(n.p,{children:[`As a final note, the following input components were previously class components and, thus,
technically supported the `,e.jsx(n.code,{children:"ref"})," attribute in v4:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Color Input"}),`
`,e.jsx(n.li,{children:"Color Preview"}),`
`,e.jsx(n.li,{children:"Select"}),`
`,e.jsx(n.li,{children:"Select (Preview)"}),`
`,e.jsx(n.li,{children:"Text Input"}),`
`,e.jsx(n.li,{children:"Text Area"}),`
`]}),`
`,e.jsxs(n.p,{children:["Passing ",e.jsx(n.code,{children:"ref={ref}"})," to any of these components in v4 would have set ",e.jsx(n.code,{children:"ref.current"}),` to the mounted
instance of the entire component
(`,e.jsx(n.a,{href:"https://reactjs.org/docs/refs-and-the-dom.html#accessing-refs",rel:"nofollow",children:"source"}),`) rather than the underlying
HTML element represented by the component. This is no longer the case in v5.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:["In addition to ",e.jsx(n.a,{href:"#promotions-from-labs-to-main",children:"promoting Tabs"}),` out of Labs and into the Main module,
we've made a few updates to the component in v5:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onTabsChange"})," is now ",e.jsx(n.code,{children:"onActivateTab"})," and the signature is now:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function onActivateTab({data: {tab: string}, state: TabsState}): void;
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Tabs"})," component no longer accepts the ",e.jsx(n.code,{children:"currentTab"}),` property. Tabs uses a model now. See the
component documentation for more details.`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"popper",children:"Popper"}),`
`,e.jsxs(n.p,{children:["In v4, Popper rendered an empty ",e.jsx(n.code,{children:"div"})," element as a child of the element created by the ",e.jsx(n.code,{children:"PopupStack"}),`
and applied `,e.jsx(n.code,{children:"ref"})," and ",e.jsx(n.code,{children:"elemProps"})," (extra props) to that ",e.jsx(n.code,{children:"div"})," element."]}),`
`,e.jsxs(n.p,{children:["We've updated Popper in v5 to instead apply ",e.jsx(n.code,{children:"ref"}),` directly to the element created by the
`,e.jsx(n.code,{children:"PopupStack"}),". The ",e.jsx(n.code,{children:"PopupStack"}),` is not React-specific; there is no easy way to spread extra props to
this element as we do for other components, so we've discarded `,e.jsx(n.code,{children:"elemProps"}),`. If necessary, you can
still target the element using `,e.jsx(n.code,{children:"ref"})," and modify it using DOM APIs."]}),`
`,e.jsx(n.p,{children:"There is no codemod for this change."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"popups",children:"Popups"}),`
`,e.jsxs(n.p,{children:[`Popup has transitioned to a
`,e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`, along with all
Popup-based behavior hooks. What was a `,e.jsx(n.code,{children:"Popup"})," in v4 is now a ",e.jsx(n.code,{children:"Popup.Card"}),` in v5. The target button
and `,e.jsx(n.code,{children:"Popper"})," components have also been converted to subcomponents of ",e.jsx(n.code,{children:"Popup"}),"."]}),`
`,e.jsx(n.h4,{id:"v4",children:"v4"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';

import {Button, DeleteButton} from '@workday/canvas-kit-react-button';
import {
  Popper,
  Popup,
  usePopup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
} from '@workday/canvas-kit-react-popup';

export const MyPopup = () => {
  const {targetProps, closePopup, popperProps, stackRef} = usePopup();

  useCloseOnOutsideClick(stackRef, closePopup);
  useCloseOnEscape(stackRef, closePopup);

  const onDeleteClick = () => {
    closePopup();
    console.log('Delete');
  };

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Popper placement={'bottom'} {...popperProps}>
        <Popup
          width={400}
          heading={'Delete Item'}
          padding={Popup.Padding.s}
          handleClose={closePopup}
        >
          <p>Are you sure you'd like to delete the item titled 'My Item'?</p>

          <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton>
          <Button onClick={closePopup}>Cancel</Button>
        </Popup>
      </Popper>
    </>
  );
};
`})}),`
`,e.jsx(n.h4,{id:"v5",children:"v5"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';

import {DeleteButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

export const MyPopup = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model); // new
  useReturnFocus(model); // new

  const onDeleteClick = () => {
    console.log('Delete');
  };

  return (
    <Popup model={model}>
      <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card width={400} padding="s">
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Delete Item</Popup.Heading>
          <Popup.Body>
            <p>Are you sure you'd like to delete the item titled 'My Item'?</p>

            <Popup.CloseButton as={DeleteButton} onClick={onDeleteClick}>
              Delete
            </Popup.CloseButton>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
          </Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
`})}),`
`,e.jsxs(n.p,{children:["Most notably, ",e.jsx(n.code,{children:"Popup"})," is now a container component that takes a ",e.jsx(n.code,{children:"PopupModel"}),` and has several
subcomponents like `,e.jsx(n.code,{children:"Popup.Target"})," and ",e.jsx(n.code,{children:"Popup.CloseButton"}),`. These components are hooked up to the
`,e.jsx(n.code,{children:"PopupModel"})," via React context and have access to state and events. ",e.jsx(n.code,{children:"Popup.Card"}),` is what the v4
`,e.jsx(n.code,{children:"Popup"})," once was."]}),`
`,e.jsxs(n.p,{children:["All behavior hooks, like ",e.jsx(n.code,{children:"useCloseOnEscape"})," now take a ",e.jsx(n.code,{children:"model"}),` instead of variable parameters. This
allowed us to fix some subtle bugs. Using the `,e.jsx(n.code,{children:"PopupModel"}),` means all hooks have access to all Popup
state and events without passing in many parameters.`]}),`
`,e.jsx(n.h4,{id:"usepopup-and-usepopupmodel",children:"usePopup and usePopupModel"}),`
`,e.jsxs(n.p,{children:["As shown in the example above, ",e.jsx(n.code,{children:"usePopupModel"})," should now be used instead of ",e.jsx(n.code,{children:"usePopup"}),`. All
subcomponents have an associated behavior hook. For example, `,e.jsx(n.code,{children:"Popup.Target"}),` uses a hook called
`,e.jsx(n.code,{children:"usePopupTarget"}),`. If you need to use your own components for any reason, these hooks are available.
`,e.jsx(n.code,{children:"Popup.Target"})," and ",e.jsx(n.code,{children:"Popup.CloseButton"}),` do not include any styling. They both render
`,e.jsx(n.code,{children:"SecondaryButton"})," by default. You can change this via the ",e.jsx(n.code,{children:"as"}),` prop. For example, the following will
render an unstyled button:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Popup.Target as="button">Show</Popup.Target>
`})}),`
`,e.jsxs(n.p,{children:["Pass a ",e.jsx(n.code,{children:"css"}),` prop or a styled button instead to have a custom styled button. You could even pass
`,e.jsx(n.code,{children:"IconButton"})," if you need an icon button to show a Popup instead!"]}),`
`,e.jsxs(n.p,{children:["If you were using ",e.jsx(n.code,{children:"usePopup"})," before, here's a list of equivalent APIs:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Before"}),e.jsx(n.th,{children:"After"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"const { popperProps, targetProps, closePopup, stackRef } = usePopup()"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"const model = usePopupModel()"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"popperProps.open"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"model.state.visibility !== 'hidden'"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"closePopup()"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"model.events.hide()"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"stackRef"})," or ",e.jsx(n.code,{children:"popperProps.ref"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"model.state.stackRef"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"popperProps.anchorElement"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"model.state.targetRef.current"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"targetProps.onClick"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"usePopupTarget(model).onClick"})})]})]})]}),`
`,e.jsx(n.h4,{id:"new-focus-management",children:"New Focus Management"}),`
`,e.jsxs(n.p,{children:[`A common theme we noticed in uses of Popup in the wild was focus management. Developers were
manually passing a `,e.jsx(n.code,{children:"ref"}),` to the target button element and manually returning focus to it when
closing the Popup. This use case should now be handled by the new `,e.jsx(n.code,{children:"useReturnFocus"}),` hook. By default,
`,e.jsx(n.code,{children:"useReturnFocus"})," will return focus to the ",e.jsx(n.code,{children:"targetRef"})," in the model, which is set by ",e.jsx(n.code,{children:"Popup.Target"}),`.
This can be overridden by passing `,e.jsx(n.code,{children:"returnFocusRef"})," to the model on creation. ",e.jsx(n.code,{children:"returnFocusRef"}),` should
make your migration easier if `,e.jsx(n.code,{children:"Popup.Target"})," cannot be used for whatever reason."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// before
const {closePopup} = usePopup();

// passed to some event handler
const closeAndReturnFocus = () => {
  closePopup();
  buttonRef.current.focus();
};

// after
const model = usePopupModel({
  returnFocusRef: buttonRef, // only use if you cannot use \`Popup.Target\`
});

useReturnFocus(model);
`})}),`
`,e.jsxs(n.p,{children:[`Another common use case involved focusing something within the Popup when the Popup was shown. The
`,e.jsx(n.code,{children:"useInitialFocus"})," hook was created for this purpose. ",e.jsx(n.code,{children:"useInitialFocus"}),` will set focus to the first
focusable element when the Popup becomes visible. This behavior can be overridden by passing
`,e.jsx(n.code,{children:"initialFocusRef"})," to the model."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// before
const {stackRef, popperProps} = usePopup();

useLayoutEffect(() => {
  if (!open) {
    return;
  }

  stackRef.current.querySelector('input,...').focus();
}, [popperProps.open]);

// after
const model = usePopupModel({
  initialFocusRef: someRef, // only use if you want to explicitly focus on something. Could be useful for an input.
});

useInitialFocus(model);
`})}),`
`,e.jsx(n.h4,{id:"managing-positioning",children:"Managing Positioning"}),`
`,e.jsxs(n.p,{children:["If you'd prefer to manage positioning yourself, you can use ",e.jsx(n.code,{children:"Popup.Card"}),` on its own. Without the
model and behaviors, the following is equivalent:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
<Popup width={width} handleClose={onClose} heading="Popup Heading">
  Popup Content
</Popup>

// v5
<Popup.Card with={width}>
  <Popup.CloseIcon aria-label="Close" onClick={onClose} />
  <Popup.Heading>Popup Heading</Popup.Heading>
  <Popup.Body>Popup Content</Popup.Body>
</Popup.Card>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Popup.Card"})," uses ",e.jsx(n.code,{children:"Card"}),", which is now using ",e.jsx(n.code,{children:"Box"}),". Consequently, the following props have changed:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Before"}),e.jsx(n.th,{children:"After"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"padding={Popup.Padding.zero}"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'padding="zero"'})," or ",e.jsx(n.code,{children:"padding={space.zero}"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"depth={depth[0]}"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"depth={0}"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"popupRef={ref}"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ref={ref}"})})]})]})]}),`
`,e.jsx(n.h4,{id:"transitioning",children:"Transitioning"}),`
`,e.jsx(n.p,{children:"We noticed Popups were used in two different ways: always rendering and conditional rendering."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Always rendering
const MyPopup = () => {
  const targetRef = React.useRef(null)
  const {stackRef, popperProps, targetProps, closePopup} = usePopup()

  const handleClose = () => {
    closePopup()
    targetRef.current.focus() // focus back on target
  }

  useCloseOnEscape(stackRef, handleClose)

  return (
    <>
      <button ref={targetRef} {...targetProps}>Open</button>
      <Popper {...popperProps}>
        <Popup>
          {/* content */}
          <button onClick={handleClose}>Close</button>
        </Popup>
      </Popper>
    </>
  )
}

// Conditional rendering
const MyOpenPopup = ({onClose, targetRef}) => {
  const {popperProps, closePopup} = usePopup()

  const handleClose = () => {
    onClose()
    closePopup()
    targetRef.current.focus() // focus back on target
  }

  useCloseOnEscape(stackRef, handleClose)

  return (
    <Popper {...popperProps}>
      <Popup>
        {/* content */}
        <button onClick={handleClose}>
      </Popup>
    </Popper>
  )
}

const MyPopup = () => {
  const targetRef = React.useRef(null)
  const [open, setOpen] = React.useState(false)

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button ref={targetRef} onClick={() => { setOpen(true) }}>
      {open && <MyOpenPopup onClose={onClose} />}
    </>
  )
}
`})}),`
`,e.jsxs(n.p,{children:["The difference between the two is subtle, but in the always rendering example, the ",e.jsx(n.code,{children:"usePopup"}),` hook
runs on every render. In the conditional rendering example, the `,e.jsx(n.code,{children:"usePopup"}),` hook only runs when
`,e.jsx(n.code,{children:"MyPopup"})," renders it. This means hooks like ",e.jsx(n.code,{children:"useCloseOnEscape"}),` need to function properly in both
cases, but `,e.jsx(n.code,{children:"open"})," is not passed to the hook. This caused subtle bugs. Now, ",e.jsx(n.code,{children:"useCloseOnEscape"}),` is
passed a `,e.jsx(n.code,{children:"PopupModel"})," which has access to the popup's visible state. ",e.jsx(n.code,{children:"useCloseOnEscape"}),` will now
only run when the popup is visible, but this means the conditional rendering example will have to do
extra work because the `,e.jsx(n.code,{children:"target"})," is out of scope of the ",e.jsx(n.code,{children:"MyOpenPopup"}),` component. The following is
equivalent to the example in v5:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MyOpenPopup = ({onClose, targetRef}) => {
  const model = usePopupModel({
    initialVisibility: 'visible', // needed for \`useCloseOnEscape\` and other hooks
    returnFocusRef: targetRef, // determines where return focus goes
  })

  useCloseOnEscape(model)
  useReturnFocus(model) // handles return focus

  return (
    <Popup>
      <Popup.Popper>
        <Popup.Card>
          {/* content */}
          <Popup.CloseButton as="button">Close</Popup.CloseButton>
        </Popup>
      </Popper>
    </Popup>
  )
}

const MyPopup = () => {
  const targetRef = React.useRef(null)
  const [open, setOpen] = React.useState(false)

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button ref={targetRef} onClick={() => { setOpen(true) }}>
      {open && <MyOpenPopup onClose={onClose} />}
    </>
  )
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.p,{children:[`Modal has transitioned to a
`,e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`. What was
`,e.jsx(n.code,{children:"Modal"})," in v4 is now ",e.jsx(n.code,{children:"Modal.Card"})," in v5."]}),`
`,e.jsx(n.h4,{id:"v4-1",children:"v4"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';

import {Modal} from '@workday/canvas-kit-react-modal';
import {DeleteButton, Button} from '@workday/canvas-kit-react-button';

const MyModal = () => {
  const handleDelete = () => {
    console.log('Deleted item');
  };

  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Modal heading={'Delete Item'} {...modalProps}>
        <p>Are you sure you want to delete the item?</p>
        <DeleteButton
          style={{marginRight: '16px'}}
          onClick={() => {
            closeModal();
            handleDelete();
          }}
        >
          Delete
        </DeleteButton>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};
`})}),`
`,e.jsx(n.h4,{id:"v5-1",children:"v5"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-labs-react';

const MyModal = () => {
  const handleDelete = () => {
    console.log('Deleted item');
  };

  return (
    <Modal>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <p>Are you sure you want to delete the item?</p>
            <HStack spacing="s">
              <Modal.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Modal.CloseButton>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </HStack>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
`})}),`
`,e.jsxs(n.p,{children:["Most notably, ",e.jsx(n.code,{children:"Modal"})," is now a container component that takes a ",e.jsx(n.code,{children:"ModalModel"}),` and has several
subcomponents. `,e.jsx(n.code,{children:"Modal"})," looks much like the structure of ",e.jsx(n.a,{href:"#popups",children:"Popups"}),", except ",e.jsx(n.code,{children:"Modal"}),` has a
`,e.jsx(n.code,{children:"Modal.Overlay"})," subcomponent instead of a ",e.jsx(n.code,{children:"Popup.Popper"})," component. The ",e.jsx(n.code,{children:"Modal.Overlay"}),` is the
component in charge of adding an element to the `,e.jsx(n.code,{children:"PopupStack"}),"."]}),`
`,e.jsxs(n.p,{children:[`We noticed some application code that do custom focus management. There were some subtle issues like
#694 (VoiceOver on iOS not returning focus). v5 introduced focus management behaviors like
`,e.jsx(n.code,{children:"useInitialFocus"})," and ",e.jsx(n.code,{children:"useReturnFocus"}),` that should work more consistently. Most of the special focus
management code could be removed when using v5 the `,e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsx(n.h4,{id:"usemodal-and-usemodalmodel",children:"useModal and useModalModel"}),`
`,e.jsxs(n.p,{children:["As shown in the example above, ",e.jsx(n.code,{children:"useModal"})," has been removed. The ",e.jsx(n.code,{children:"Modal"}),` container component will
provide a pre-configured `,e.jsx(n.code,{children:"PopupModel"})," via the ",e.jsx(n.code,{children:"useModalModel"})," function. In v4, ",e.jsx(n.code,{children:"useModal"}),` returned a
`,e.jsx(n.code,{children:"closeModal"})," callback function that you'd call to close the ",e.jsx(n.code,{children:"Modal"}),". In v5, ",e.jsx(n.code,{children:"Modal.CloseButton"}),`
takes care of this for you. If you need to close the `,e.jsx(n.code,{children:"Modal"}),` outside a button, you can hoist the
model and use the model's `,e.jsx(n.code,{children:"hide"})," event:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
const {closeModal} = useModal();

// somewhere in your code
closeModal();

// v5
const model = useModalModel();

// somewhere in your code
model.events.hide();
`})}),`
`,e.jsx(n.h4,{id:"handleclose",children:"handleClose"}),`
`,e.jsxs(n.p,{children:["In v4, ",e.jsx(n.code,{children:"Modal"})," took a ",e.jsx(n.code,{children:"handleClose"}),` that doubled as a switch to show a close icon and a switch for
modal closing for the Escape key and clicking outside the `,e.jsx(n.code,{children:"Modal"}),". In v5, the ",e.jsx(n.code,{children:"Modal.CloseIcon"}),`
subcomponent controls the rendering of the icon. If you need to disable the Escape key or clicking
outside the `,e.jsx(n.code,{children:"Modal"}),", you'll have to create your own ",e.jsx(n.code,{children:"PopupModel"}),` instead and pass that to the
`,e.jsx(n.code,{children:"Modal"})," container component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const model = usePopupModel(); // not \`useModalModel\`

// disable useCloseOnEscape and useCloseOnOverlayClick
useInitialFocus(model);
useReturnFocus(model);
useFocusTrap(model);
useAssistiveHideSiblings(model);
useDisableBodyScroll(model);

return <Modal model={model}>{/* ... */}</Modal>;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(n.p,{children:`Skeleton was already implemented as a compound component in v4, but we've made changes to its
imports and to its animation in v5.`}),`
`,e.jsxs(n.p,{children:["The imports for its subcomponents in v4 (",e.jsx(n.code,{children:"SkeletonHeader"}),", ",e.jsx(n.code,{children:"SkeletonText"}),", and ",e.jsx(n.code,{children:"SkeletonShape"}),`) have
been converted to keys on `,e.jsx(n.code,{children:"Skeleton"})," in v5 (",e.jsx(n.code,{children:"Skeleton.Header"}),", ",e.jsx(n.code,{children:"Skeleton.Text"}),`, and
`,e.jsx(n.code,{children:"Skeleton.Shape"}),"). You only need to import the ",e.jsx(n.code,{children:"Skeleton"}),` component in v5, and you may still compose
your own Skeleton using whatever parts you need.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v4
import {
  Skeleton,
  SkeletonHeader,
  SkeletonShape,
  SkeletonText,
} from '@workday/canvas-kit-react/skeleton';
const MySkeleton = () => (
  <Skeleton>
    <SkeletonHeader />
    <SkeletonText />
    <SkeletonShape width={40} height={40} />
  </Skeleton>
);

// v5
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
const MySkeleton = () => (
  <Skeleton>
    <Skeleton.Header />
    <Skeleton.Text />
    <Skeleton.Shape width={40} height={40} />
  </Skeleton>
);
`})}),`
`,e.jsx(n.p,{children:`Additionally, the Skeleton animation has been updated from a diagonal sheen, or shimmer, to fading
the opacity of the entire shape(s) in and out.`})]})}function m(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{m as default};
