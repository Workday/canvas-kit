import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import"./chunk-NUUEMKO5-CLDxZhom.js";import{ae as d}from"./index-B2C7rmFn.js";import"./index-IfJi-UCQ.js";import"./iframe-D4Efgt29.js";import"../sb-preview/runtime.js";import"./client-DOJa5lII.js";import"./index-CDT9hUPM.js";import"./index-BDZ5T_cP.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function r(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Guides/Upgrade Guides/v15.0/Overview"}),`
`,e.jsx(n.h1,{id:"canvas-kit-150-upgrade-guide",children:"Canvas Kit 15.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains an overview of the changes in Canvas Kit v15. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions.`]}),`
`,e.jsx(n.h2,{id:"why-you-should-upgrade",children:"Why You Should Upgrade"}),`
`,e.jsx(n.p,{children:`v15 and v4 Canvas Tokens Web introduce new shape, size, gap, and padding tokens to our components.
While we still support our old shape and space tokens, the new tokens aim to add more semantic
meaning to allow for better use and theming. Our old shape and space tokens are now deprecated and
will be removed in a future version.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` While v15 and v4 tokens should be backwards compatible with previous versions that use
CSS tokens, `,e.jsx(n.strong,{children:"we strongly advise migrating both Canvas Kit and Canvas Tokens Web together"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#codemod",children:"Codemod"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#instructions",children:"Instructions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemod-transformations-for-icons",children:"Codemod Transformations for Icons"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#theming",children:"Theming"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#system-brand-tokens-and-brand-tokens",children:"System Brand Tokens and Brand Tokens"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#icon-updates",children:"Icon Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#svg",children:"Svg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#system-icon",children:"System Icon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#system-icon-circle",children:"System Icon Circle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#icon-size-updates",children:"Icon Size Updates"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#new-components",children:"New Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#expressive-icon",children:"Expressive Icon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#switch-preview",children:"Switch (Preview)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-promotions",children:"Component Promotions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#avatar",children:"Avatar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#information-highlight",children:"Information Highlight"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#pill",children:"Pill"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#segmented-control",children:"Segmented Control"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#side-panel",children:"Side Panel"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-updates",children:"Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#buttons",children:"Buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#containers",children:"Containers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#indicators",children:"Indicators"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#inputs",children:"Inputs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#navigation",children:"Navigation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popups",children:"Popups"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#deprecations",children:"Deprecations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accent-icon",children:"Accent Icon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#applet-icon",children:"Applet Icon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#icon-utilities",children:"Icon Utilities"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#switch-main",children:"Switch (Main)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#removals",children:"Removals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#avatar-deprecated",children:"Avatar (Deprecated)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#combobox-labs",children:"Combobox (Labs)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-field-container-deprecated",children:"Form Field Container (Deprecated)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#search-form-labs",children:"Search Form (Labs)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#segmented-control-deprecated",children:"Segmented Control (Deprecated)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#select-deprecated",children:"Select (Deprecated)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#side-panel-deprecated",children:"Side Panel (Deprecated)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#status-indicator-ai-variant",children:"Status Indicator AI Variant"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#new-utilities",children:"New Utilities"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#colorspace",children:"colorSpace"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#glossary",children:"Glossary"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#main",children:"Main"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#preview",children:"Preview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#labs",children:"Labs"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:["We've provided a ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod",rel:"nofollow",children:"codemod"}),` to
automatically update your code to work with most of the breaking changes in v15. `,e.jsx(n.strong,{children:`Breaking changes
handled by the codemod are marked with 🤖 in the Upgrade Guide.`})]}),`
`,e.jsxs(n.p,{children:[`A codemod is a script that makes programmatic transformations on your codebase by traversing the
AST, identifying patterns, and making prescribed changes. This greatly decreases opportunities for
error and reduces the number of manual updates, which allows you to focus on changes that need your
attention. `,e.jsx(n.strong,{children:"We highly recommend you use the codemod for these reasons."})]}),`
`,e.jsx(n.p,{children:`If you're new to running codemods or if it's been a minute since you've used one, there are a few
things you'll want to keep in mind.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Our codemods are meant to be run sequentially. For example, if you're using v13 of Canvas Kit,
you'll need to run the v14 codemod before you run v15.`}),`
`,e.jsxs(n.li,{children:["The codemod will update your code to be compatible with the specified version, but it will ",e.jsx(n.strong,{children:"not"}),`
remove outdated dependencies or upgrade dependencies to the latest version. You'll need to upgrade
dependencies on your own.`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We recommend upgrading dependencies before running the codemod."}),`
`,e.jsxs(n.li,{children:["Always review your ",e.jsx(n.code,{children:"package.json"})," files to make sure your dependency versions look correct."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`The codemod will not handle every breaking change in v15. You will likely need to make some manual
changes to be compatible. Use our Upgrade Guide as a checklist.`}),`
`,e.jsxs(n.li,{children:["Codemods are not bulletproof.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Conduct a thorough PR and QA review of all changes to ensure no regressions were introduced."}),`
`,e.jsx(n.li,{children:`As a safety precaution, we recommend committing the changes from the codemod as a single
isolated commit (separate from other changes) so you can roll back more easily if necessary.`}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:`We're here to help! Automatic changes to your codebase can feel scary. You can always reach out to
our team. We'd be very happy to walk you through the process to set you up for success.`}),`
`,e.jsx(n.h3,{id:"instructions",children:"Instructions"}),`
`,e.jsxs(n.p,{children:["The easiest way to run our codemod is to use ",e.jsx(n.code,{children:"npx"})," in your terminal."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod v15 [path]
`})}),`
`,e.jsxs(n.p,{children:["Be sure to provide specific directories that need to be updated via the ",e.jsx(n.code,{children:"[path]"}),` argument. This
decreases the amount of AST the codemod needs to traverse and reduces the chances of the script
having an error. For example, if your source code lives in `,e.jsx(n.code,{children:"src/"}),", use ",e.jsx(n.code,{children:"src/"})," as your ",e.jsx(n.code,{children:"[path]"}),`. Or,
if you have a monorepo with three packages using Canvas Kit, provide those specific packages as your
`,e.jsx(n.code,{children:"[path]"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively, if you're unable to run the codemod successfully using ",e.jsx(n.code,{children:"npx"}),`, you can install the
codemod package as a dev dependency, run it with `,e.jsx(n.code,{children:"yarn"}),`, and then remove the package after you're
finished.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-codemod --dev
yarn canvas-kit-codemod v15 [path]
yarn remove @workday/canvas-kit-codemod
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` files. You'll need to
manually edit other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),`, etc.). You may need to run your linter
after executing the codemod, as its resulting formatting (spacing, quotes, etc.) may not match
your project conventions.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"codemod-transformations-for-icons",children:"Codemod Transformations for Icons"}),`
`,e.jsx(n.h4,{id:"icon-codemod",children:"Icon Codemod"}),`
`,e.jsxs(n.p,{children:["For v15, there is a ",e.jsx(n.strong,{children:"separate codemod"})," called ",e.jsx(n.code,{children:"v15-icons"}),` that updates Canvas Kit icons usage
across your codebase. This codemod will:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.strong,{children:"system icons"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Replace all ",e.jsx(n.strong,{children:"deprecated system icons"})," from ",e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),` with the correct
new icon name.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.strong,{children:"accent and applet icons"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Replace all uses of accent and applet icon imports from ",e.jsx(n.code,{children:"@workday/canvas-accent-icons-web"}),` and
`,e.jsx(n.code,{children:"@workday/canvas-applet-icons-web"}),` with imports from the new
`,e.jsx(n.code,{children:"@workday/canvas-expressive-icons-web"})," expressive icon package."]}),`
`,e.jsxs(n.li,{children:["Change all legacy ",e.jsx(n.code,{children:"<AccentIcon icon={foo} />"})," and ",e.jsx(n.code,{children:"<AppletIcon icon={foo} />"}),` component usages
to the new `,e.jsx(n.code,{children:"<ExpressiveIcon icon={foo} />"})," syntax."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"To run the codemod:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod v15-icons [path]
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," Provide the specific directory or directories you want to update as ",e.jsx(n.code,{children:"[path]"}),` to speed up
migration.`]}),`
`,e.jsxs(n.p,{children:[`The codemod will handle both expressive (Accent/Applet) and system icons, replacing old icons and
updating your code to the latest APIs automatically. For further information about the new icon
system and migration options, check the
`,e.jsx(n.a,{href:"https://canvas.workdaydesign.com/styles/assets/expressive-icons",rel:"nofollow",children:"Expressive Icon documentation"}),`
and the
`,e.jsx(n.a,{href:"https://canvas.workdaydesign.com/styles/assets/expressive-icons#tab=migration-guide",rel:"nofollow",children:"migration guide table"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["🤖 The ",e.jsx(n.code,{children:"v15-icons"})," codemod automates the majority of icon migration work, but ",e.jsx(n.em,{children:"always"}),` review the
PR for any remaining icons or component usages that the codemod could not address, especially in
tricky cases or heavily customized usages.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"theming",children:"Theming"}),`
`,e.jsx(n.h3,{id:"system-brand-tokens-and-brand-tokens",children:"System Brand Tokens and Brand Tokens"}),`
`,e.jsxs(n.p,{children:["The relationship between ",e.jsx(n.strong,{children:"system brand tokens"})," (e.g. ",e.jsx(n.code,{children:"system.color.brand.accent.primary"}),`) and
`,e.jsx(n.strong,{children:"brand tokens"})," (e.g. ",e.jsx(n.code,{children:"brand.primary600"}),`) has changed. Teams can still set palette values such as
`,e.jsx(n.code,{children:"base"}),", ",e.jsx(n.code,{children:"light"}),", ",e.jsx(n.code,{children:"lighter"}),", ",e.jsx(n.code,{children:"lightest"}),", ",e.jsx(n.code,{children:"dark"})," and ",e.jsx(n.code,{children:"darkest"})," via the ",e.jsx(n.code,{children:"CanvasProvider"})," ",e.jsx(n.code,{children:"theme"}),` prop.
The mapping inside `,e.jsx(n.code,{children:"CanvasProvider"})," exists for ",e.jsx(n.strong,{children:"backwards compatibility"}),`. When you pass a theme
object, we forward those values to both the legacy brand tokens and the system brand tokens so
current implementations will continue to work.`]}),`
`,e.jsxs(n.p,{children:["For more information on theming, view our ",e.jsx(n.a,{href:"?path=/docs/features-theming-overview--docs",children:"Theming"}),`
documentation.`]}),`
`,e.jsxs(n.p,{children:[`For more information on our tokens, view our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Tokens"}),`
documentation.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// This will set the [brand.primary.**] tokens to shades of purple.
<CanvasProvider theme={{canvas: {palette: {primary: {main: 'purple'}}}}}>
  <App />
</CanvasProvider>
`})}),`
`,e.jsx(n.h2,{id:"icon-updates",children:"Icon Updates"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3851",rel:"nofollow",children:"#3851"})]}),`
`,e.jsx(n.h3,{id:"svg",children:"Svg"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Svg"})," component has been improved to align with our latest token system and usage patterns:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SvgProps"})," no longer extends ",e.jsx(n.code,{children:"BoxProps"}),`, which means Icon components may not accept Box-related
style props. Switch to use the `,e.jsx(n.code,{children:"cs"})," prop instead. Use the ",e.jsx(n.code,{children:"v14.1 codemod"}),` to migrate style props
automatically.`]}),`
`,e.jsxs(n.li,{children:["The stencil variables for ",e.jsx(n.code,{children:"width"})," and ",e.jsx(n.code,{children:"height"})," are now deprecated; use the ",e.jsx(n.code,{children:"size"})," prop instead."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"transformColorNameToToken"}),` utility has been fully removed; replace it with direct usage of
the new token values.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"system-icon",children:"System Icon"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SystemIcon"}),` component has been improved to align with our latest token system and usage
patterns:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"size"})," prop now accepts updated size token values: ",e.jsx(n.code,{children:"xxs"})," (14px), ",e.jsx(n.code,{children:"xs"})," (16px), ",e.jsx(n.code,{children:"sm"}),` (18px),
`,e.jsx(n.code,{children:"md"})," (20px), ",e.jsx(n.code,{children:"lg"})," (24px), and ",e.jsx(n.code,{children:"xl"})," (32px), for consistent sizing across your application."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"color"})," prop now only supports direct color values (tokens such as ",e.jsx(n.code,{children:"blueberry400"}),` are no
longer accepted). Use the component icon or system color tokens directly instead.`]}),`
`,e.jsxs(n.li,{children:["Hover-related props (",e.jsx(n.code,{children:"colorHover"}),", ",e.jsx(n.code,{children:"accentHover"}),", ",e.jsx(n.code,{children:"backgroundHover"}),`) have been removed for a
cleaner and more predictable API. Instead, use new styling approaches if you need hover state
modifications.`]}),`
`,e.jsxs(n.li,{children:["Deprecated functionality, like ",e.jsx(n.code,{children:"systemIconStyles"}),", ",e.jsx(n.code,{children:"SystemIconStyles"}),", ",e.jsx(n.code,{children:"deprecatedSystemIconVars"}),`,
has been fully removed to reduce complexity and encourage best practices.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"system-icon-circle",children:"System Icon Circle"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SystemIconCircle"}),` component has received important updates for improved accessibility and
clarity:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Added a new ",e.jsx(n.code,{children:"inverse"}),` prop, enabling an inverse color variant for better adaptability across
backgrounds.`]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"background"})," prop and the ",e.jsx(n.code,{children:"color"}),` prop must be provided together to ensure optimal contrast
and compliance with accessibility standards between the icon and its circular background.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SystemIconCircleSize"})," has been deprecated; replace with direct tokens as size prop."]}),`
`]}),`
`,e.jsx(n.h3,{id:"icon-size-updates",children:"Icon Size Updates"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3866",rel:"nofollow",children:"#3866"})]}),`
`,e.jsxs(n.p,{children:[`Canvas v15 is optimized to look best when using the latest version of v4 tokens
(`,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),`) and the latest version of v4 system icons
(`,e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),`). It is designed to be backwards-compatible with v3 tokens and
v3 system icons — nothing should break. But you might see minor imperfections when using v3 system
icons when upgrading to v15. In those cases, we recommend upgrading to the latest version of v4
icons `,e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),` and the latest version of v4 tokens
`,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),"."]}),`
`,e.jsx(n.p,{children:`The size of icons in some components have been updated. This is reflected in the following
components:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"})," | ",e.jsx(n.code,{children:"1.5rem"})," → ",e.jsx(n.code,{children:"1.25rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Switch (Preview)"})," | ",e.jsx(n.code,{children:"1.25rem"})," → ",e.jsx(n.code,{children:"1.125rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Buttons with icons (Primary, Secondary, Tertiary, Delete, ToolbarButton and ToolbarDropdownButton)"}),`
| `,e.jsx(n.code,{children:"1.125rem"})," → ",e.jsx(n.code,{children:"1rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.Icon"})," | ",e.jsx(n.code,{children:"1.25rem"})," → ",e.jsx(n.code,{children:"1.125rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.IconButton"})," | ",e.jsx(n.code,{children:"1.5rem"})," → ",e.jsx(n.code,{children:"1.125rem"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If you upgrade to ",e.jsx(n.code,{children:"v15"})," and are not using ",e.jsx(n.code,{children:"v4"})," tokens and ",e.jsx(n.code,{children:"v4"}),` icons, the size of the
icon will still be updated as part of the upgrade.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"new-components",children:"New Components"}),`
`,e.jsx(n.h3,{id:"expressive-icon",children:"Expressive Icon"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3851",rel:"nofollow",children:"#3851"})]}),`
`,e.jsxs(n.p,{children:["The new ",e.jsx(n.code,{children:"ExpressiveIcon"}),` component brings expressive icons to Canvas Kit. This component replaces
the previous usage of `,e.jsx(n.code,{children:"Accent"})," and ",e.jsx(n.code,{children:"Applet"})," icons."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ExpressiveIcon"})," component requires an ",e.jsx(n.code,{children:"icon"}),` prop, which should be an icon object imported from
the
`,e.jsx(n.a,{href:"https://www.npmjs.com/package/@workday/canvas-expressive-icons-web",rel:"nofollow",children:e.jsx(n.code,{children:"@workday/canvas-expressive-icons-web"})}),`
package.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),": If you previously used ",e.jsx(n.code,{children:"Accent"})," or ",e.jsx(n.code,{children:"Applet"}),` icons, update your usage to import icons
from `,e.jsx(n.code,{children:"@workday/canvas-expressive-icons-web"})," and pass them to ",e.jsx(n.code,{children:"ExpressiveIcon"})," as the ",e.jsx(n.code,{children:"icon"}),` prop.
This can be done through a `,e.jsx(n.code,{children:"v15-icons codemod"}),` for auto-replacement or by following
`,e.jsx(n.a,{href:"https://canvas.workdaydesign.com/styles/assets/expressive-icons#tab=migration-guide",rel:"nofollow",children:"a migration table"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import * as React from 'react';

import {bookOpenIcon} from '@workday/canvas-expressive-icons-web';
import {ExpressiveIcon} from '@workday/canvas-kit-react/icon';

<ExpressiveIcon icon={bookOpenIcon} />;
`})}),`
`,e.jsx(n.h3,{id:"switch-preview",children:"Switch (Preview)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3842",rel:"nofollow",children:"#3842"})]}),`
`,e.jsxs(n.p,{children:["We've created a new version of the ",e.jsx(n.a,{href:"?path=/docs/preview-inputs-switch-new--docs",children:"Switch"})," component in ",e.jsx(n.code,{children:"Preview"}),"."]}),`
`,e.jsx(n.p,{children:"Accessibility improvements include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["An icon to show the ",e.jsx(n.code,{children:"unchecked"})," and ",e.jsx(n.code,{children:"checked"})," state."]}),`
`,e.jsx(n.li,{children:'Visible borders when "High Contrast Mode" is enabled.'}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NOTE:"})," The API has not changed between ",e.jsx(n.code,{children:"Switch"})," in ",e.jsx(n.code,{children:"main"})," and ",e.jsx(n.code,{children:"Switch"})," in ",e.jsx(n.code,{children:"preview"}),` however,
the styles have changed.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-promotions",children:"Component Promotions"}),`
`,e.jsx(n.h3,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3660",rel:"nofollow",children:"#3660"})]}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"Avatar"})," from ",e.jsx(n.a,{href:"#preview",children:"Preview"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),`. This replaces the deprecated
`,e.jsx(n.code,{children:"Avatar"})," that was previously in Main."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v15"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Avatar} from '@workday/canvas-kit-react/avatar';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"🤖 The codemod will handle the change of imports as shown above."}),`
`]}),`
`,e.jsx(n.h4,{id:"new-features",children:"New Features"}),`
`,e.jsxs(n.p,{children:["The promoted ",e.jsx(n.code,{children:"Avatar"})," includes several new features:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initials display"}),": Automatically shows initials from the ",e.jsx(n.code,{children:"name"}),` prop when no image URL is
provided`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color variants"}),": Four color variants (",e.jsx(n.code,{children:"blue"}),", ",e.jsx(n.code,{children:"amber"}),", ",e.jsx(n.code,{children:"teal"}),", ",e.jsx(n.code,{children:"purple"}),") instead of light/dark"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom initials"}),": Use ",e.jsx(n.code,{children:"preferredInitials"})," for full control over displayed initials"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Decorative mode"}),": Use ",e.jsx(n.code,{children:"isDecorative"})," when Avatar is purely decorative (rendered next to a name)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Compound components"}),": Build custom avatars using ",e.jsx(n.code,{children:"BaseAvatar"}),", ",e.jsx(n.code,{children:"BaseAvatar.Image"}),`, and
`,e.jsx(n.code,{children:"BaseAvatar.Name"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Utility function"}),": Use ",e.jsx(n.code,{children:"getInitialsFromName"})," to extract initials from a name string"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// With initials (no image)
<Avatar name="John Doe" variant="blue" />

// Custom initials
<Avatar name="John Smith Doe" preferredInitials="JD" />

// Decorative (next to text name)
<Avatar name="John Doe" url="..." isDecorative />

// Using compound components for custom layouts
<BaseAvatar variant="teal" size="large">
  <BaseAvatar.Image src="..." alt="John Doe" />
  <BaseAvatar.Name name="John Doe" />
</BaseAvatar>
`})}),`
`,e.jsx(n.h4,{id:"api-differences",children:"API Differences"}),`
`,e.jsxs(n.p,{children:["The new ",e.jsx(n.code,{children:"Avatar"}),` is a
`,e.jsx(n.a,{href:"/getting-started/for-developers/resources/compound-components/",children:"compound component"}),` with a
different API than the deprecated version.`]}),`
`,e.jsx(n.h5,{id:"structure-changes",children:"Structure Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Deprecated (Old Main)"}),e.jsx(n.th,{children:"New (Promoted from Preview)"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Avatar"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Avatar"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"BaseAvatar"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"BaseAvatar.Image"})," / ",e.jsx(n.code,{children:"AvatarImage"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"BaseAvatar.Name"})," / ",e.jsx(n.code,{children:"AvatarName"})]})]})]})]}),`
`,e.jsx(n.h5,{id:"prop-changes",children:"Prop Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Feature"}),e.jsx(n.th,{children:"Deprecated (Old Main)"}),e.jsx(n.th,{children:"New (Promoted from Preview)"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Variant"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"variant"})," (",e.jsx(n.code,{children:"light"}),", ",e.jsx(n.code,{children:"dark"}),")"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"variant"})," (",e.jsx(n.code,{children:"blue"}),", ",e.jsx(n.code,{children:"amber"}),", ",e.jsx(n.code,{children:"teal"}),", ",e.jsx(n.code,{children:"purple"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Size"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"size"})," (extraSmall=16px to extraExtraLarge=120px)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"size"})," (extraExtraSmall=24px to extraExtraLarge=120px)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"User identifier"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"altText"})," prop"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"name"})," prop"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Custom initials"}),e.jsx(n.td,{children:"Not supported"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"preferredInitials"})," prop"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Decorative mode"}),e.jsx(n.td,{children:"Not supported"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"isDecorative"})," prop"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Image URL"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"url"})," prop"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"url"})," prop"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Object fit"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"objectFit"})," prop"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"objectFit"})," prop"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Initials display"}),e.jsx(n.td,{children:"Not supported (shows user icon)"}),e.jsxs(n.td,{children:["Shows initials from ",e.jsx(n.code,{children:"name"})," when no image"]})]})]})]}),`
`,e.jsx(n.h5,{id:"size-mapping",children:"Size Mapping"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Size Name"}),e.jsx(n.th,{children:"Deprecated (Old Main)"}),e.jsx(n.th,{children:"New (Promoted from Preview)"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"extraExtraSmall"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"24px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"extraSmall"}),e.jsx(n.td,{children:"16px"}),e.jsx(n.td,{children:"32px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"small"}),e.jsx(n.td,{children:"24px"}),e.jsx(n.td,{children:"40px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"medium"}),e.jsx(n.td,{children:"32px"}),e.jsx(n.td,{children:"48px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"large"}),e.jsx(n.td,{children:"40px"}),e.jsx(n.td,{children:"72px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"extraLarge"}),e.jsx(n.td,{children:"64px"}),e.jsx(n.td,{children:"96px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"extraExtraLarge"}),e.jsx(n.td,{children:"120px"}),e.jsx(n.td,{children:"120px"})]})]})]}),`
`,e.jsx(n.h5,{id:"code-migration",children:"Code Migration"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Deprecated API (Old Main)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Avatar} from '@workday/canvas-kit-react/avatar';

<Avatar size="medium" variant="light" url="https://example.com/photo.jpg" altText="John Doe" />;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"New API (v15)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Avatar} from '@workday/canvas-kit-react/avatar';

<Avatar size="medium" variant="blue" url="https://example.com/photo.jpg" name="John Doe" />;
`})}),`
`,e.jsx(n.h3,{id:"information-highlight",children:"Information Highlight"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3633",rel:"nofollow",children:"#3633"})]}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"InformationHighlight"})," from ",e.jsx(n.a,{href:"#preview",children:"Preview"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),`. There are no
changes to the functionality or styling of the component. The only change required is updating the
import statement.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v15"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"🤖 The codemod will handle the change of imports as shown above."}),`
`]}),`
`,e.jsx(n.h3,{id:"pill",children:"Pill"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3634",rel:"nofollow",children:"#3634"})]}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"Pill"})," from ",e.jsx(n.a,{href:"#preview",children:"Preview"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),`. There are no changes to the
functionality of the component. The only change required is updating the import statement.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Pill} from '@workday/canvas-kit-preview-react/pill';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v15"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Pill} from '@workday/canvas-kit-react/pill';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"🤖 The codemod will handle the change of imports as shown above."}),`
`]}),`
`,e.jsx(n.h3,{id:"segmented-control",children:"Segmented Control"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3626",rel:"nofollow",children:"#3626"})]}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"SegmentedControl"})," from ",e.jsx(n.a,{href:"#preview",children:"Preview"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),`. This replaces the
deprecated `,e.jsx(n.code,{children:"SegmentedControl"})," that was previously in Main."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v15"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"🤖 The codemod will handle the change of imports as shown above."}),`
`]}),`
`,e.jsx(n.h4,{id:"new-features-1",children:"New Features"}),`
`,e.jsxs(n.p,{children:["The promoted ",e.jsx(n.code,{children:"SegmentedControl"})," includes several new features:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text and icon support"}),": Items can display text, icons, or both"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size variants"}),": ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", and ",e.jsx(n.code,{children:"large"})," sizes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vertical orientation"}),": Use ",e.jsx(n.code,{children:'orientation="vertical"'})," for vertical layouts"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Built-in tooltips"}),": Add tooltips via ",e.jsx(n.code,{children:"tooltipProps"})," on items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled state"}),": Disable all items via the model or individual items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic items"}),": Render items dynamically using the collection API"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Text only
<SegmentedControl.Item data-id="yearly">Yearly</SegmentedControl.Item>

// Icon with text
<SegmentedControl.Item data-id="list" icon={listViewIcon}>List View</SegmentedControl.Item>

// With size and orientation
<SegmentedControl size="large" orientation="vertical">
  ...
</SegmentedControl>
`})}),`
`,e.jsx(n.h4,{id:"api-differences-1",children:"API Differences"}),`
`,e.jsxs(n.p,{children:["The new ",e.jsx(n.code,{children:"SegmentedControl"}),` is a
`,e.jsx(n.a,{href:"/getting-started/for-developers/resources/compound-components/",children:"compound component"}),` with a
different API than the deprecated version.`]}),`
`,e.jsx(n.h5,{id:"structure-changes-1",children:"Structure Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Deprecated (Old Main)"}),e.jsx(n.th,{children:"New (Promoted from Preview)"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"SegmentedControl"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"SegmentedControl"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"SegmentedControl.Button"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"SegmentedControl.List"})," + ",e.jsx(n.code,{children:"SegmentedControl.Item"})]})]})]})]}),`
`,e.jsx(n.h5,{id:"prop-changes-1",children:"Prop Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Feature"}),e.jsx(n.th,{children:"Deprecated (Old Main)"}),e.jsx(n.th,{children:"New (Promoted from Preview)"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Selection"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"value"})," prop on container"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"initialValue"})," prop on container"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Change handler"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"onChange={(value) => {}}"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"onSelect={(data) => setSelected(data.id)}"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Item identifier"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"value"})," prop on Button"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"data-id"})," prop on Item"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Disabled (all)"}),e.jsx(n.td,{children:"Not supported"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"disabled"})," prop on container model"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Size"}),e.jsx(n.td,{children:"Not supported"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"size"})," prop (",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Orientation"}),e.jsx(n.td,{children:"Not supported"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"orientation"})," prop (",e.jsx(n.code,{children:"horizontal"}),", ",e.jsx(n.code,{children:"vertical"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Text labels"}),e.jsx(n.td,{children:"Not supported"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"children"})," on Item"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Tooltips"}),e.jsx(n.td,{children:"Not supported"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"tooltipProps"})," on Item"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Accessibility"}),e.jsx(n.td,{children:"Manual"}),e.jsxs(n.td,{children:["Built-in ",e.jsx(n.code,{children:"aria-label"})," on List"]})]})]})]}),`
`,e.jsx(n.h5,{id:"code-migration-1",children:"Code Migration"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Deprecated API (Old Main)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

const [value, setValue] = React.useState<string | number>('list-view');

<SegmentedControl value={value} onChange={setValue}>
  <SegmentedControl.Button icon={listViewIcon} value="list-view" />
  <SegmentedControl.Button icon={worksheetsIcon} value="table-view" />
  <SegmentedControl.Button icon={deviceTabletIcon} value="device-view" />
</SegmentedControl>;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"New API (v15)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

const [value, setValue] = React.useState('list-view');

<SegmentedControl initialValue={value} onSelect={data => setValue(data.id)}>
  <SegmentedControl.List aria-label="View type">
    <SegmentedControl.Item data-id="list-view" icon={listViewIcon} tooltipProps={{title: 'List'}} />
    <SegmentedControl.Item
      data-id="table-view"
      icon={worksheetsIcon}
      tooltipProps={{title: 'Table'}}
    />
    <SegmentedControl.Item
      data-id="device-view"
      icon={deviceTabletIcon}
      tooltipProps={{title: 'Device'}}
    />
  </SegmentedControl.List>
</SegmentedControl>;
`})}),`
`,e.jsx(n.h3,{id:"side-panel",children:"Side Panel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3670",rel:"nofollow",children:"#3670"})]}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"SidePanel"})," from ",e.jsx(n.a,{href:"#labs",children:"Labs"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),`. This replaces the deprecated
`,e.jsx(n.code,{children:"SidePanel"})," that was previously in Main and should replace the one in ",e.jsx(n.a,{href:"#preview",children:"Preview"})," as well."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SidePanel} from '@workday/canvas-kit-labs-react/side-panel';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v15"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SidePanel} from '@workday/canvas-kit-react/side-panel';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"🤖 The codemod will handle the change of imports as shown above."}),`
`]}),`
`,e.jsx(n.h4,{id:"migrating-from-preview",children:"Migrating from Preview"}),`
`,e.jsxs(n.p,{children:["If you're migrating from ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react/side-panel"}),`, here are the key API
changes:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Before (preview-react)
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';

// After (react)
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
`})}),`
`,e.jsx(n.h4,{id:"hook-api-changes",children:"Hook API Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsxs(n.th,{children:["Preview (",e.jsx(n.code,{children:"useSidePanel"}),")"]}),e.jsxs(n.th,{children:["Main (",e.jsx(n.code,{children:"useSidePanelModel"}),")"]})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"initialExpanded: boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"initialTransitionState: 'expanded' | 'collapsed'"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"origin: 'left' | 'right'"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"origin: 'start' | 'end'"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"expanded: boolean"})]}),e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"model.state.transitionState"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"setExpanded(bool)"})]}),e.jsxs(n.td,{children:["Use ",e.jsx(n.code,{children:"model.events.expand()"})," / ",e.jsx(n.code,{children:"model.events.collapse()"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"panelProps"})," to spread"]}),e.jsxs(n.td,{children:["Props applied automatically via ",e.jsx(n.code,{children:"elemPropsHook"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"labelProps"})," to spread"]}),e.jsxs(n.td,{children:["Use ",e.jsx(n.code,{children:"id={model.state.labelId}"})," on label element"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Returns ",e.jsx(n.code,{children:"controlProps"})," to spread"]}),e.jsxs(n.td,{children:["Props applied automatically to ",e.jsx(n.code,{children:"SidePanel.ToggleButton"})]})]})]})]}),`
`,e.jsx(n.h4,{id:"component-api-changes",children:"Component API Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Preview"}),e.jsx(n.th,{children:"Main"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<SidePanel {...panelProps}>"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"<SidePanel model={model}>"})," or just ",e.jsx(n.code,{children:"<SidePanel>"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<SidePanel.ToggleButton {...controlProps} />"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<SidePanel.ToggleButton />"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"<Heading {...labelProps}>"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<SidePanel.Heading>Panel Title</SidePanel.Heading>"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"expanded"})," prop on SidePanel"]}),e.jsxs(n.td,{children:["Managed by model's ",e.jsx(n.code,{children:"transitionState"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"touched"})," prop on SidePanel"]}),e.jsx(n.td,{children:"Managed internally"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onExpandedChange"})," callback"]}),e.jsxs(n.td,{children:["Use ",e.jsx(n.code,{children:"onStateTransition"})," and derive expanded state"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onStateTransition"})," on component"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onStateTransition"})," in model config"]})]})]})]}),`
`,e.jsx(n.h4,{id:"code-migration-example",children:"Code Migration Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Before (in Preview)
const {expanded, panelProps, labelProps, controlProps} = useSidePanel({
  initialExpanded: false,
});

<SidePanel {...panelProps} origin="right" onExpandedChange={exp => console.log(exp)}>
  <SidePanel.ToggleButton {...controlProps} />
  <Heading {...labelProps}>Panel Title</Heading>
  {expanded && <Content />}
</SidePanel>;

// After (in Main)
const model = useSidePanelModel({
  initialTransitionState: 'collapsed',
  origin: 'end',
  onStateTransition: state => {
    const isExpanded = state === 'expanded' || state === 'expanding';
    console.log(isExpanded);
  },
});

<SidePanel model={model}>
  <SidePanel.ToggleButton aria-label="Collapse View" />
  <SidePanel.Heading>Panel Title</SidePanel.Heading>
  {model.state.transitionState === 'expanded' && <Content />}
</SidePanel>;
`})}),`
`,e.jsx(n.h4,{id:"checking-expanded-state",children:"Checking Expanded State"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Before (@workday/canvas-kit-preview-react/side-panel)
if (expanded) {
  /* ... */
}

// After (@workday/canvas-kit-react/side-panel) - for exact state
if (model.state.transitionState === 'expanded') {
  /* ... */
}

// After (@workday/canvas-kit-react/side-panel) - including animation states
const isExpanded =
  model.state.transitionState === 'expanded' || model.state.transitionState === 'expanding';
`})}),`
`,e.jsx(n.h2,{id:"component-updates",children:"Component Updates"}),`
`,e.jsxs(n.p,{children:["The following components have been updated to use our new ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"padding"}),", ",e.jsx(n.code,{children:"gap"})," and ",e.jsx(n.code,{children:"shape"}),`
tokens. These changes are `,e.jsx(n.strong,{children:"only visual"}),"."]}),`
`,e.jsxs(n.p,{children:["If you'd like to see the visual differences between ",e.jsx(n.code,{children:"v14"})," with ",e.jsx(n.code,{children:"v3"})," tokens and ",e.jsx(n.code,{children:"v15 alpha"})," with ",e.jsx(n.code,{children:"v4"}),`
tokens, check out our `,e.jsx(n.a,{href:"/docs/guides-upgrade-guides-v15-0-visual-changes--docs",children:"Visual Changes"})," file."]}),`
`,e.jsx(n.h3,{id:"buttons",children:"Buttons"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3604",rel:"nofollow",children:"#3604"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PrimaryButton"}),", ",e.jsx(n.code,{children:"SecondaryButton"}),", ",e.jsx(n.code,{children:"DeleteButton"}),", ",e.jsx(n.code,{children:"TertiaryButton"}),", ",e.jsx(n.code,{children:"ToolbarButton"}),`,
`,e.jsx(n.code,{children:"ToolbarDropdownButton"}),", ",e.jsx(n.code,{children:"Hyperlink"}),", ",e.jsx(n.code,{children:"ExternalHyperlink"})," and ",e.jsx(n.code,{children:"ActionBar"}),"."]}),`
`,e.jsx(n.h3,{id:"containers",children:"Containers"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3732",rel:"nofollow",children:"#3732"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Card"}),", ",e.jsx(n.code,{children:"Expandable"})," and ",e.jsx(n.code,{children:"Tabs"})]}),`
`,e.jsx(n.h3,{id:"indicators",children:"Indicators"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3738",rel:"nofollow",children:"#3738"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"StatusIndicator (Preview)"}),", ",e.jsx(n.code,{children:"Avatar"}),", ",e.jsx(n.code,{children:"Badge"}),", ",e.jsx(n.code,{children:"Banner"}),", ",e.jsx(n.code,{children:"InformationHighlight"}),", ",e.jsx(n.code,{children:"Pill"}),` and
`,e.jsx(n.code,{children:"Skeleton"})]}),`
`,e.jsx(n.h3,{id:"inputs",children:"Inputs"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3719",rel:"nofollow",children:"#3719"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ColorPicker"}),", ",e.jsx(n.code,{children:"MultiSelect"}),", ",e.jsx(n.code,{children:"Radio"}),", ",e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"FormField"}),", ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"Switch"}),", ",e.jsx(n.code,{children:"TextArea"}),` and
`,e.jsx(n.code,{children:"TextInput"})]}),`
`,e.jsx(n.h3,{id:"navigation",children:"Navigation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3753",rel:"nofollow",children:"#3753"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Breadcrumbs"}),", ",e.jsx(n.code,{children:"Pagination"}),", ",e.jsx(n.code,{children:"Hyperlink"})," and ",e.jsx(n.code,{children:"ExternalHyperlink"})]}),`
`,e.jsx(n.h3,{id:"popups",children:"Popups"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3745",rel:"nofollow",children:"#3745"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu"}),", ",e.jsx(n.code,{children:"Modal"}),", ",e.jsx(n.code,{children:"Popup"}),", ",e.jsx(n.code,{children:"Toast"})," and ",e.jsx(n.code,{children:"Tooltip"})]}),`
`,e.jsx(n.h2,{id:"deprecations",children:"Deprecations"}),`
`,e.jsxs(n.p,{children:["We add the ",e.jsx(n.a,{href:"https://jsdoc.app/tags-deprecated.html",rel:"nofollow",children:"@deprecated"}),` JSDoc tag to code we plan to remove
in a future major release. This signals consumers to migrate to a more stable alternative before the
deprecated code is removed.`]}),`
`,e.jsx(n.h3,{id:"accent-icon",children:"Accent Icon"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3727",rel:"nofollow",children:"#3727"})]}),`
`,e.jsxs(n.p,{children:["The Accent Icon set has been ",e.jsx(n.strong,{children:"deprecated"}),` and will be removed in a future major version. We
recommend migrating to `,e.jsx(n.strong,{children:"Expressive Icons"}),`, which are more flexible and aligned with our current
design direction.`]}),`
`,e.jsx(n.h3,{id:"applet-icon",children:"Applet Icon"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3727",rel:"nofollow",children:"#3727"})]}),`
`,e.jsxs(n.p,{children:["The Applet Icon set has been ",e.jsx(n.strong,{children:"deprecated"}),` and will be removed in a future major version. Please
migrate to `,e.jsx(n.strong,{children:"Expressive Icons"}),", as Applet Icons will no longer receive updates or support."]}),`
`,e.jsx(n.h3,{id:"icon-utilities",children:"Icon Utilities"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3851",rel:"nofollow",children:"#3851"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"validateIconType"})," and ",e.jsx(n.code,{children:"SpanProps"})," are deprecated."]}),`
`,e.jsx(n.h3,{id:"switch-main",children:"Switch (Main)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3854",rel:"nofollow",children:"#3854"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated the ",e.jsx(n.code,{children:"Switch"})," component in ",e.jsx(n.code,{children:"@workday/canvas-kit-react"}),` Main package. Please use the
`,e.jsx(n.code,{children:"Switch"})," component in our Preview package ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NOTE:"})," The API has not changed between ",e.jsx(n.code,{children:"Switch"})," in ",e.jsx(n.code,{children:"main"})," and ",e.jsx(n.code,{children:"Switch"})," in ",e.jsx(n.code,{children:"preview"}),` however,
the styles have changed.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"removals",children:"Removals"}),`
`,e.jsx(n.h3,{id:"avatar-deprecated",children:"Avatar (Deprecated)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3660",rel:"nofollow",children:"#3660"})]}),`
`,e.jsxs(n.p,{children:["The deprecated ",e.jsx(n.code,{children:"Avatar"})," that was previously in ",e.jsx(n.code,{children:"@workday/canvas-kit-react/avatar"}),` has been removed.
This was the older implementation that showed a user icon placeholder and supported `,e.jsx(n.code,{children:"light"}),"/",e.jsx(n.code,{children:"dark"}),`
variants.`]}),`
`,e.jsxs(n.p,{children:["Please migrate to the new ",e.jsx(n.code,{children:"Avatar"}),` component (promoted from Preview) which uses initials display,
color variants (`,e.jsx(n.code,{children:"blue"}),", ",e.jsx(n.code,{children:"amber"}),", ",e.jsx(n.code,{children:"teal"}),", ",e.jsx(n.code,{children:"purple"}),`), and supports compound components. See the
`,e.jsx(n.a,{href:"#api-differences",children:"API Differences"})," section above for migration guidance."]}),`
`,e.jsx(n.h3,{id:"combobox-labs",children:"Combobox (Labs)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3661",rel:"nofollow",children:"#3661"})]}),`
`,e.jsxs(n.p,{children:["The deprecated ",e.jsx(n.code,{children:"Combobox"})," component has been removed from ",e.jsx(n.code,{children:"@workday/canvas-kit-labs-react"}),"."]}),`
`,e.jsx(n.p,{children:"The following exports are no longer available:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Combobox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ComboboxProps"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"AutocompleteList"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Status"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Please migrate to the ",e.jsx(n.a,{href:"?path=/docs/features-combobox--docs",children:"Combobox"}),` in
`,e.jsx(n.code,{children:"@workday/canvas-kit-react"}),"."]}),`
`,e.jsx(n.h3,{id:"form-field-container-deprecated",children:"Form Field Container (Deprecated)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3882",rel:"nofollow",children:"#3882"})]}),`
`,e.jsxs(n.p,{children:["The deprecated ",e.jsx(n.code,{children:"FormField.Container"})," has been removed from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/form-field"}),`.
This component was deprecated in v12 and has now been fully removed in v15.`]}),`
`,e.jsxs(n.p,{children:["Please use ",e.jsx(n.code,{children:"FormField.Field"}),` instead, which ensures proper label alignment, spacing of inputs and
hint text regardless of the orientation.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formFieldContainerStencil"})," has been removed from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/form-field"})," as well."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

<FormField>
  <FormField.Label>Email</FormField.Label>
  <FormField.Container>
    <FormField.Input as={TextInput} />
    <FormField.Hint>You must provide an email</FormField.Hint>
  </FormField.Container>
</FormField>;
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["🤖 The codemod will automatically handle replacing ",e.jsx(n.code,{children:"FormField.Container"})," with ",e.jsx(n.code,{children:"FormField.Field"}),`
throughout your codebase.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"search-form-labs",children:"Search Form (Labs)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3661",rel:"nofollow",children:"#3661"})]}),`
`,e.jsxs(n.p,{children:["The deprecated ",e.jsx(n.code,{children:"SearchForm"})," component has been removed from ",e.jsx(n.code,{children:"@workday/canvas-kit-labs-react"}),"."]}),`
`,e.jsx(n.p,{children:"The following exports are no longer available:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SearchForm"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SearchFormProps"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SearchFormState"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SearchTheme"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SearchThemeAttributes"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Please migrate to the ",e.jsx(n.a,{href:"?path=/docs/features-combobox--docs",children:"Combobox"}),` in
`,e.jsx(n.code,{children:"@workday/canvas-kit-react"}),"."]}),`
`,e.jsx(n.h3,{id:"segmented-control-deprecated",children:"Segmented Control (Deprecated)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3626",rel:"nofollow",children:"#3626"})]}),`
`,e.jsxs(n.p,{children:["The deprecated ",e.jsx(n.code,{children:"SegmentedControl"}),` that was previously in
`,e.jsx(n.code,{children:"@workday/canvas-kit-react/segmented-control"}),` has been removed. This was the older implementation
that used `,e.jsx(n.code,{children:"SegmentedControl.Button"})," subcomponents."]}),`
`,e.jsxs(n.p,{children:["Please migrate to the new ",e.jsx(n.code,{children:"SegmentedControl"}),` component (promoted from Preview) which uses a compound
component pattern with `,e.jsx(n.code,{children:"SegmentedControl.List"})," and ",e.jsx(n.code,{children:"SegmentedControl.Item"}),`. See the
`,e.jsx(n.a,{href:"#api-differences",children:"API Differences"})," section above for migration guidance."]}),`
`,e.jsx(n.h3,{id:"select-deprecated",children:"Select (Deprecated)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3658",rel:"nofollow",children:"#3658"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component in ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react/select"}),` has been removed. Please use
the `,e.jsx(n.code,{children:"Select"})," component from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/select"})," instead."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Select} from '@workday/canvas-kit-preview-react/select';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v15"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Select} from '@workday/canvas-kit-react/select';
`})}),`
`,e.jsx(n.h4,{id:"main-select-features",children:"Main Select Features"}),`
`,e.jsxs(n.p,{children:["The Main ",e.jsx(n.code,{children:"Select"})," includes features not available in the Preview version:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Composition-based API"}),": Full control over structure with subcomponents"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FormField integration"}),": Built-in accessibility when wrapped with FormField"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Model-based state"}),": Use ",e.jsx(n.code,{children:"useSelectModel"})," for advanced state management"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icons in input"}),": Use ",e.jsx(n.code,{children:"inputStartIcon"})," prop on ",e.jsx(n.code,{children:"Select.Input"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icons in items"}),": Use ",e.jsx(n.code,{children:"Select.Item.Icon"})," subcomponent"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// With icons
<Select.Input inputStartIcon={myIcon} />

// With item icons
<Select.Item>
  <Select.Item.Icon icon={starIcon} />
  Favorite
</Select.Item>

// With model for controlled state
const model = useSelectModel({
  items: myItems,
  onSelect: ({id}) => console.log('Selected:', id),
});

<Select model={model}>
  ...
</Select>
`})}),`
`,e.jsx(n.h4,{id:"api-differences-2",children:"API Differences"}),`
`,e.jsxs(n.p,{children:["The Main ",e.jsx(n.code,{children:"Select"}),` is a
`,e.jsx(n.a,{href:"/getting-started/for-developers/resources/compound-components/",children:"compound component"}),` built on top of
the Combobox component with a composition-based API, whereas the Preview Select was a monolithic
class-based component.`]}),`
`,e.jsx(n.h5,{id:"structure-changes-2",children:"Structure Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Preview (Removed)"}),e.jsx(n.th,{children:"Main"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Select"})," (single component)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Select"})," + ",e.jsx(n.code,{children:"Select.Input"})," + ",e.jsx(n.code,{children:"Select.Popper"})," + ",e.jsx(n.code,{children:"Select.Card"})," + ",e.jsx(n.code,{children:"Select.List"})," + ",e.jsx(n.code,{children:"Select.Item"})]})]})})]}),`
`,e.jsx(n.h5,{id:"prop-changes-2",children:"Prop Changes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Feature"}),e.jsx(n.th,{children:"Preview (Removed)"}),e.jsx(n.th,{children:"Main"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Options"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"options"})," prop (array of Option objects)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"items"})," prop (array of any type)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Selected value"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"value"})," prop"]}),e.jsxs(n.td,{children:["Managed via model (",e.jsx(n.code,{children:"useSelectModel"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Change handler"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"onChange={(e) => {}}"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onChange"})," on ",e.jsx(n.code,{children:"Select.Input"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Error state"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"error={Select.ErrorType.Error}"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'error="error"'})," or ",e.jsx(n.code,{children:'error="caution"'})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Custom rendering"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"renderOption"})," / ",e.jsx(n.code,{children:"renderSelected"})," props"]}),e.jsxs(n.td,{children:["Composition via ",e.jsx(n.code,{children:"Select.Item"})," children"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Form integration"}),e.jsx(n.td,{children:"Manual"}),e.jsxs(n.td,{children:["Built-in with ",e.jsx(n.code,{children:"FormField"})," wrapper"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Accessibility"}),e.jsx(n.td,{children:"Manual ARIA"}),e.jsx(n.td,{children:"Built-in via Combobox foundation"})]})]})]}),`
`,e.jsx(n.h5,{id:"code-migration-2",children:"Code Migration"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Preview API (Removed)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Select} from '@workday/canvas-kit-preview-react/select';

const options = [
  {label: 'Small', value: 'small'},
  {label: 'Medium', value: 'medium'},
  {label: 'Large', value: 'large'},
];

const [value, setValue] = React.useState('medium');

<Select options={options} value={value} onChange={e => setValue(e.target.value)} />;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Main API (v15)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';

const items = ['Small', 'Medium', 'Large'];

<Select items={items}>
  <FormField label="Size">
    <FormField.Input as={Select.Input} onChange={e => console.log('Selected:', e.target.value)} />
    <Select.Popper>
      <Select.Card>
        <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
      </Select.Card>
    </Select.Popper>
  </FormField>
</Select>;
`})}),`
`,e.jsx(n.h3,{id:"side-panel-deprecated",children:"Side Panel (Deprecated)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3670",rel:"nofollow",children:"#3670"})]}),`
`,e.jsxs(n.p,{children:["The deprecated ",e.jsx(n.code,{children:"SidePanel"})," that was previously in ",e.jsx(n.code,{children:"@workday/canvas-kit-react/side-panel"}),` has been
removed. This was the older implementation that used our old patterns.`]}),`
`,e.jsxs(n.p,{children:["Please migrate to the new ",e.jsx(n.code,{children:"SidePanel"}),` component (promoted from Labs) which uses a compound component
pattern and `,e.jsx(n.code,{children:"useSidePanelModel"}),". See the ",e.jsx(n.a,{href:"#api-differences",children:"API Differences"}),` section above for
migration guidance.`]}),`
`,e.jsx(n.h3,{id:"status-indicator-ai-variant",children:"Status Indicator AI Variant"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3899",rel:"nofollow",children:"#3899"})]}),`
`,e.jsxs(n.p,{children:["We've removed the ",e.jsx(n.code,{children:"ai"})," variant from the ",e.jsx(n.code,{children:"StatusIndicator"})," component in ",e.jsx(n.code,{children:"Preview"}),`. This pattern is no
longer supported. If you wish to create your own custom variant you can customize both the icon and
color of the `,e.jsx(n.code,{children:"StatusIndicator"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["🤖 The codemod will automatically handle replacing ",e.jsx(n.code,{children:"ai"})," variant with ",e.jsx(n.code,{children:'variant="blue'}),`. You can
manually change the color if you wish.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"new-utilities",children:"New Utilities"}),`
`,e.jsx(n.h3,{id:"colorspace",children:"colorSpace"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3738",rel:"nofollow",children:"#3738"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3818",rel:"nofollow",children:"#3818"})]}),`
`,e.jsxs(n.p,{children:[`We've added a new utility called
`,e.jsx(n.a,{href:"?path=/docs/styling-utilities--docs#colorspace",children:"colorSpace"}),` which has three functions:
`,e.jsx(n.a,{href:"?path=/docs/styling-utilities--docs#darken",children:"darken"}),`,
`,e.jsx(n.a,{href:"?path=/docs/styling-utilities--docs#hover",children:"hover"}),` and
`,e.jsx(n.a,{href:"?path=/docs/styling-utilities--docs#pressed",children:"pressed"}),"."]}),`
`,e.jsxs(n.p,{children:["These utilities are meant to be used for interactive states (i.e. ",e.jsx(n.code,{children:":hover"}),", ",e.jsx(n.code,{children:":active"}),` on buttons,
links, etc.).`]}),`
`,e.jsxs(n.p,{children:[`These will return
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix",rel:"nofollow",children:"color-mix()"}),`
and the result is a mix of the first color and the mixin color together in the srgb colorspace by a
given amount.`]}),`
`,e.jsxs(n.p,{children:["With the addition of our ",e.jsx(n.code,{children:"surface"}),` tokens, we wanted to create a utility that would allow us to use
the `,e.jsx(n.code,{children:"surface"})," tokens in interactive states. Alpha colors (",e.jsx(n.code,{children:"surface"}),` tokens) are translucent versions
of their solid counterparts. Solid colors are designed for white backgrounds and can lose contrast
on other surfaces. Alpha colors adapt via transparency, so they match the appearance of solid colors
on the default page background while remaining legible on any surface.`]}),`
`,e.jsx(n.h4,{id:"darken",children:"Darken"}),`
`,e.jsxs(n.p,{children:["This is the core function that is used under the hood for the ",e.jsx(n.code,{children:"hover"})," and ",e.jsx(n.code,{children:"pressed"})," functions."]}),`
`,e.jsx(n.p,{children:"It takes a single options object with four properties:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"color"}),`: The color that will be darkened (this is typically the "base" color on the given
element).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fallback"}),": A fallback color if the first color is not valid or not defined."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mixinColor"}),": The color that will be mixed in with the first color (or fallback color)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mixinValue"}),`: The percentage of the mixin color that will be added to the first color (or
fallback color).`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {colorSpace, createStyles} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  '&:hover': {
    backgroundColor: colorSpace.darken({
      color: system.color.brand.accent.primary,
      fallback: brand.primary.darkest,
      mixinColor: system.color.accent.overlay.mixin,
      mixinValue: system.opacity.accent.hover,
    }),
  },
});
`})}),`
`,e.jsx(n.h4,{id:"hover-and-pressed",children:"Hover and Pressed"}),`
`,e.jsxs(n.p,{children:["For the ",e.jsx(n.code,{children:"hover"})," and ",e.jsx(n.code,{children:"pressed"})," functions, they take a single options object with three properties:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"color"}),`: The color that will be darkened (this is typically the "base" color on the given
element).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fallback"}),": A fallback color if the first color is not valid or not defined."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"colorType"}),`: A string that will determine where the mixin color and the mixin percentage come
from in tokens (i.e. `,e.jsx(n.code,{children:"system.color.accent...."}),", ",e.jsx(n.code,{children:"system.color.surface...."}),`,
`,e.jsx(n.code,{children:"system.opacity.accent...."})," or ",e.jsx(n.code,{children:"system.opacity.surface...."}),")."]}),`
`]}),`
`,e.jsx(n.h5,{id:"hover",children:"Hover"}),`
`,e.jsx(n.p,{children:"This function is used specifically for hover states."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const styles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  '&:hover': {
    backgroundColor: colorSpace.hover({
      color: system.color.brand.accent.primary,
      fallback: brand.primary.darkest,
      colorType: 'accent',
    }),
  },
});
`})}),`
`,e.jsx(n.h5,{id:"pressed",children:"Pressed"}),`
`,e.jsx(n.p,{children:"This function is used specifically for pressed/active states."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const styles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  '&:active': {
    backgroundColor: colorSpace.pressed({
      color: system.color.brand.accent.primary,
      fallback: brand.primary.darkest,
      colorType: 'accent',
    }),
  },
});
`})}),`
`,e.jsx(n.h2,{id:"glossary",children:"Glossary"}),`
`,e.jsxs(n.p,{children:[`For an overview of the different packages we provide, please view our docs
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-packages--docs",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(n.h3,{id:"main",children:"Main"}),`
`,e.jsx(n.p,{children:"Components in the Main package are stable and ready for production use."}),`
`,e.jsx(n.h3,{id:"preview",children:"Preview"}),`
`,e.jsx(n.p,{children:`Components in the Preview package are mostly stable but may still receive breaking changes before
being promoted to Main.`}),`
`,e.jsx(n.h3,{id:"labs",children:"Labs"}),`
`,e.jsx(n.p,{children:`Components in the Labs package are experimental and may receive significant changes or be removed
entirely.`})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{v as default};
