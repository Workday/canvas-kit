import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as r}from"./index-3YbjYt95.js";import"./chunk-NUUEMKO5-DOnI1k6f.js";import{ae as i}from"./index-Bt0ZT3SD.js";import"./index-IfJi-UCQ.js";import"./iframe-DXeK7ayo.js";import"../sb-preview/runtime.js";import"./client-DOJa5lII.js";import"./index-CDT9hUPM.js";import"./index-BDZ5T_cP.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function d(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Upgrade Guides/v16.0/Overview"}),`
`,e.jsx(n.h1,{id:"canvas-kit-160-upgrade-guide",children:"Canvas Kit 16.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains an overview of the changes in Canvas Kit v16. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions.`]}),`
`,e.jsx(n.h2,{id:"why-you-should-upgrade",children:"Why You Should Upgrade"}),`
`,e.jsx(n.p,{children:`Canvas Kit v16 is a 1:1 component update that aligns every Canvas component to Sana's visual
styling. Components ship that styling regardless of theme — you do not need to opt into the Sana
Canvas theme for components to look correct.`}),`
`,e.jsxs(n.p,{children:["The Sana Canvas ",e.jsx(n.strong,{children:"theme"})," (CSS variables + ",e.jsx(n.code,{children:'data-theme="sana-canvas"'}),`) is a separate, opt-in step
that updates brand colors, neutrals, surfaces, and shapes at the application level. See
`,e.jsx(n.a,{href:"#sana-canvas-theme",children:"Sana Canvas Theme"})," below."]}),`
`,e.jsx(n.h3,{id:"what-you-need",children:"What You Need"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Canvas Tokens v4.4.0: Introduces the new Sana Canvas variables."}),`
`,e.jsx(n.li,{children:"Canvas System Icons v5.0.0: Introduces the new Sana Canvas icons."}),`
`,e.jsx(n.li,{children:"Canvas Kit v16: The new version of Canvas Kit that includes the new Sana Canvas components and utilities."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` Canvas Tokens and Canvas System Icons are not included in the Canvas Kit package. Install
them separately, then upgrade Canvas Kit itself:`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`# Separate packages required by Canvas Kit v16
yarn add @workday/canvas-tokens-web@4.4.0 @workday/canvas-system-icons-web@5.0.0

# Upgrade Canvas Kit packages (adjust package names to what your app uses)
yarn add @workday/canvas-kit-react@^16
`})}),`
`,e.jsx(n.h2,{id:"sana-canvas-theme",children:"Sana Canvas Theme"}),`
`,e.jsxs(n.p,{children:[`Your application is Sana-aligned out of the box when the Sana Canvas theme is applied. To opt in —
brand neutrals, surfaces, and shapes — import the Sana CSS variables and set
`,e.jsx(n.code,{children:'data-theme="sana-canvas"'})," on ",e.jsx(n.code,{children:"<html>"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` All visual updates in this guide apply to both the Default Canvas theme and the Sana
Canvas theme unless specified otherwise.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"opting-in",children:"Opting In"}),`
`,e.jsxs(n.p,{children:["Import the Sana variables ",e.jsx(n.strong,{children:"last"})," in your root CSS entry point. Sana's ",e.jsx(n.code,{children:'[data-theme="sana-canvas"]'}),`
selector and `,e.jsx(n.code,{children:":root"})," have equal specificity — source order determines the winner."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* index.css — order matters */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';
@import '@workday/canvas-tokens-web/css/component/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
/* Sana last: [data-theme="sana-canvas"] and :root have equal specificity (0,1,0),
   so when both match <html> the cascade falls back to source order. */
@import '@workday/canvas-tokens-web/css/sana/_variables.css';
`})}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:'data-theme="sana-canvas"'})," on ",e.jsx(n.code,{children:"<html>"}),` when you control the document root (preferred). Nested
elements are not enough for portaled popups (including all Canvas Kit popups such as menus,
selects, modals, and toasts) — those render under `,e.jsx(n.code,{children:"document.body"}),` via React portals, outside the
parent component's DOM hierarchy, and only inherit theme from `,e.jsx(n.code,{children:"<html>"}),`, or from
`,e.jsx(n.code,{children:"sanaCanvasProviderTheme"})," on ",e.jsx(n.code,{children:"CanvasProvider"})," when ",e.jsx(n.code,{children:"<html>"})," is unavailable."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="en" data-theme="sana-canvas"></html>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Gotcha:"})," There is no ",e.jsx(n.code,{children:'[data-theme="canvas"]'}),` rule. The sana file only defines
`,e.jsx(n.code,{children:'[data-theme="sana-canvas"]'}),` overrides, so removing the attribute is how you get classic Canvas —
there's nothing to undo it with.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Scoped / no document-root control:"})," if you cannot set ",e.jsx(n.code,{children:"data-theme"})," on ",e.jsx(n.code,{children:"<html>"}),` (embedded apps,
microfrontends, third-party shells), pass both `,e.jsx(n.code,{children:'data-theme="sana-canvas"'}),` and
`,e.jsx(n.code,{children:"sanaCanvasProviderTheme"})," to ",e.jsx(n.code,{children:"CanvasProvider"}),`. The preset supplies Sana's brand variables, and
Canvas Kit forwards the `,e.jsx(n.code,{children:"data-theme"}),` attribute onto the popup stack container — so portaled
menus, modals, and dialogs match the same `,e.jsx(n.code,{children:'[data-theme="sana-canvas"]'}),` selector and pick up the
rest of the theme (shape, depth, type, non-brand system colors) through normal cascade:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';

<CanvasProvider theme={sanaCanvasProviderTheme} data-theme="sana-canvas">
  <App />
</CanvasProvider>
`})}),`
`,e.jsx(n.h3,{id:"what-changes-when-you-opt-in",children:"What Changes When You Opt In"}),`
`,e.jsxs(n.p,{children:[`Things that change are primary brand consumers and Sana's neutral color scale
(`,e.jsx(n.code,{children:"--cnvs-brand-neutral-*"}),`, which replaces classic slate neutrals). Verified against
`,e.jsx(n.code,{children:"@workday/canvas-tokens-web/css/sana/_variables.css"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Brand primary consumers flip."})," ",e.jsx(n.code,{children:"--cnvs-sys-color-brand-accent-primary"})," and ",e.jsx(n.code,{children:"-accent-action"}),`
re-point from blue to `,e.jsx(n.code,{children:"--cnvs-brand-neutral-975"}),", and ",e.jsx(n.code,{children:"-brand-fg-primary-default/-strong"}),` to
`,e.jsx(n.code,{children:"--cnvs-brand-neutral-a900/-a950"}),". ",e.jsx(n.code,{children:"PrimaryButton"}),`, brand links, and selected states are what
visibly change.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus does not."})," ",e.jsx(n.code,{children:"--cnvs-sys-color-brand-focus-primary"})," and ",e.jsx(n.code,{children:"-border-primary"})," stay ",e.jsx(n.code,{children:"blue-500"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"--cnvs-brand-primary-600"})," is intentionally ",e.jsx(n.em,{children:"not"})," redefined"]}),` — it stays the consumer's brand
hook.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The full neutral color scale is replaced"})," (",e.jsx(n.code,{children:"--cnvs-brand-neutral-*"}),`, all steps plus alphas),
plus selected `,e.jsx(n.code,{children:"critical"}),", ",e.jsx(n.code,{children:"caution"}),", ",e.jsx(n.code,{children:"positive"}),", shapes (",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"xxl"}),", ",e.jsx(n.code,{children:"xxxl"}),`),
surfaces/overlays, and chart ramps.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"scoped-theming",children:"Scoped Theming"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"CanvasProvider"}),` theming updates in
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4060",rel:"nofollow",children:"#4060"})," are for ",e.jsx(n.strong,{children:"scoped"}),` use cases — embedding
Canvas in another brand, multi-tenant sections, and popup parity when you cannot set
`,e.jsx(n.code,{children:'data-theme="sana-canvas"'})," on ",e.jsx(n.code,{children:"<html>"}),". Application teams that control ",e.jsx(n.code,{children:"<html>"}),` and import the
Sana variables globally do not need a `,e.jsx(n.code,{children:"theme"})," prop for app-wide Sana."]}),`
`,e.jsxs(n.p,{children:[`For the scoped theming API, see our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs",rel:"nofollow",children:"Theming documentation"}),"."]}),`
`,e.jsx(n.h4,{id:"default-scope-change-for-legacy-themes",children:"Default Scope Change for Legacy Themes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," If you previously used ",e.jsx(n.code,{children:"canvas.palette.<color>.main"}),` only (without other palette properties)
to scope-theme your application, the default behavior has changed. In v16:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Before v16:"})," Setting only ",e.jsx(n.code,{children:"palette.primary.main"}),` would automatically generate a full color ramp
(lightest, lighter, light, dark, darkest, contrast) and apply broad `,e.jsx(n.code,{children:"system.color.brand.*"})," forwarding."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"In v16:"})," Setting only ",e.jsx(n.code,{children:"palette.primary.main"})," defaults to ",e.jsx(n.code,{children:"'brand'"}),` scope, which applies a narrower
set of variables (PrimaryButton and selected states only).`]}),`
`]}),`
`,e.jsxs(n.p,{children:["To restore the previous behavior, explicitly set ",e.jsx(n.code,{children:"themeScope: 'full'"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// v15 behavior (implicit full scope)
<CanvasProvider theme={{canvas: {palette: {primary: {main: '#FF00FF'}}}}} />

// v16 - to get the same behavior as v15
<CanvasProvider
  theme={{canvas: {palette: {primary: {main: '#FF00FF'}}}}}
  themeScope="full"
/>
`})}),`
`,e.jsxs(n.p,{children:[`This change provides more control over theming scope and prevents unintended overrides, but teams
relying on the auto-generated color ramp need to explicitly opt into `,e.jsx(n.code,{children:"'full'"})," scope."]}),`
`,e.jsx(n.h3,{id:"simplified-sana-canvas-setup",children:"Simplified Sana Canvas Setup"}),`
`,e.jsxs(n.p,{children:["If you can set ",e.jsx(n.code,{children:'data-theme="sana-canvas"'})," on ",e.jsx(n.code,{children:"<html>"}),`, you no longer need to pass
`,e.jsx(n.code,{children:"sanaCanvasProviderTheme"}),` to CanvasProvider. Popups are called out specifically because Canvas Kit
renders them through React portals under `,e.jsx(n.code,{children:"document.body"}),` — outside the parent component's DOM
hierarchy — so they inherit CSS variables from `,e.jsx(n.code,{children:"<html>"}),", not from a nested wrapper."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';

<CanvasProvider theme={sanaCanvasProviderTheme}>
  <App />
</CanvasProvider>
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["After (when you control ",e.jsx(n.code,{children:"<html>"}),"):"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider} from '@workday/canvas-kit-react/common';

// <html data-theme="sana-canvas">
<CanvasProvider>
  <App />
</CanvasProvider>
`})}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Still required — cannot set ",e.jsx(n.code,{children:"data-theme"})," on ",e.jsx(n.code,{children:"<html>"}),":"]}),` embedded apps, microfrontends, and
third-party shells often cannot set attributes on the document root. Nested `,e.jsx(n.code,{children:"data-theme"}),` does not
reach portaled popups (including all Canvas Kit popups such as menus, selects, modals, and toasts).
Pass both `,e.jsx(n.code,{children:'data-theme="sana-canvas"'})," (in-tree UI) and ",e.jsx(n.code,{children:"sanaCanvasProviderTheme"})," (popup forwarding):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';

<CanvasProvider theme={sanaCanvasProviderTheme} data-theme="sana-canvas">
  <App />
</CanvasProvider>
`})}),`
`,e.jsxs(n.p,{children:["If you control ",e.jsx(n.code,{children:"<html>"}),` and see a console warning about unnecessary theme usage, you can safely
remove the theme prop.`]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#sana-canvas-theme",children:"Sana Canvas Theme"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#opting-in",children:"Opting In"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#what-changes-when-you-opt-in",children:"What Changes When You Opt In"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#scoped-theming",children:"Scoped Theming"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#simplified-sana-canvas-setup",children:"Simplified Sana Canvas Setup"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#codemod",children:"Codemod"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#instructions",children:"Instructions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemod-transformations-for-icons",children:"Codemod Transformations for Icons"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#mcp",children:"MCP"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#icon-migration--get-canvas-kit-icon-migration",children:["Icon migration — ",e.jsx(n.code,{children:"get-canvas-kit-icon-migration"})]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#token-references--get-canvas-kit-tokens",children:["Token references — ",e.jsx(n.code,{children:"get-canvas-kit-tokens"})]})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#new-components",children:"New Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#kbd",children:"KBD"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tabs",children:"Tabs"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-updates",children:"Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#action-bar",children:"Action Bar"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#buttons",children:"Buttons"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#delete-button-outline-variant",children:"Delete Button Outline Variant"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#secondary-button",children:"Secondary Button"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#container-components",children:"Container Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#card",children:"Card"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#expandable",children:"Expandable"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#side-panel",children:"Side Panel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#table",children:"Table"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#indicators",children:"Indicators"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#avatar",children:"Avatar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#banner",children:"Banner"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#count-badge",children:"Count Badge"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#information-highlight",children:"Information Highlight"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#pill",children:"Pill"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#skeleton",children:"Skeleton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#status-indicator",children:"Status Indicator"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#inputs",children:"Inputs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility-checked-state-contrast",children:"Accessibility: Checked-State Contrast"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#checkbox",children:"Checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#color-input",children:"Color Input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#color-picker",children:"Color Picker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-field",children:"Form Field"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#radio",children:"Radio"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#switch",children:"Switch"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-area",children:"Text Area"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-input",children:"Text Input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#select",children:"Select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#multiselect",children:"MultiSelect"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#popups",children:"Popups"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#menu",children:"Menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#modal",children:"Modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popup",children:"Popup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#toast",children:"Toast"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tooltip",children:"Tooltip"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#navigation-components",children:"Navigation Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#hyperlink",children:"Hyperlink"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#breadcrumbs",children:"Breadcrumbs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#pagination",children:"Pagination"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#segmented-control",children:"Segmented Control"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#new-utilities",children:"New Utilities"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#cornershapestencil",children:"cornerShapeStencil"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#fonts",children:"Fonts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sana-canvas-theme--switch-to-sana-sans",children:"Sana Canvas Theme — Switch to Sana Sans"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#classic-canvas--keep-roboto",children:"Classic Canvas — Keep Roboto"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deprecations",children:"Deprecations"})}),`
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
automatically update your code to work with most of the breaking changes in v16. `,e.jsx(n.strong,{children:`Breaking changes
handled by the codemod are marked with 🤖 in the Upgrade Guide.`})]}),`
`,e.jsxs(n.p,{children:[`A codemod is a script that makes programmatic transformations on your codebase by traversing the
AST, identifying patterns, and making prescribed changes. This greatly decreases opportunities for
error and reduces the number of manual updates, which allows you to focus on changes that need your
attention. `,e.jsx(n.strong,{children:"We highly recommend you use the codemod for these reasons."})]}),`
`,e.jsx(n.p,{children:`If you're new to running codemods or if it's been a minute since you've used one, there are a few
things you'll want to keep in mind.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Our codemods are meant to be run sequentially. For example, if you're using v14 of Canvas Kit,
you'll need to run the v15 codemod before you run v16.`}),`
`,e.jsxs(n.li,{children:["The codemod will update your code to be compatible with the specified version, but it will ",e.jsx(n.strong,{children:"not"}),`
remove outdated dependencies or upgrade dependencies to the latest version. You'll need to upgrade
dependencies on your own.`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We recommend upgrading dependencies before running the codemod."}),`
`,e.jsxs(n.li,{children:["Always review your ",e.jsx(n.code,{children:"package.json"})," files to make sure your dependency versions look correct."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`The codemod will not handle every breaking change in v16. You will likely need to make some manual
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod v16 [path]
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
yarn canvas-kit-codemod v16 [path]
yarn remove @workday/canvas-kit-codemod
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` files. You'll need to
manually edit other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),`, etc.). You may need to run your linter
after executing the codemod, as its resulting formatting (spacing, quotes, etc.) may not match
your project conventions.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"codemod-transformations-for-v16",children:"Codemod Transformations for v16"}),`
`,e.jsx(n.p,{children:"The following automated transformations are available for upgrading to v16:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Update Hyperlink Props"}),": updateHyperlinkProps"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Run the codemod with: ",e.jsx(n.code,{children:"npx @workday/canvas-kit-codemod v16 [path]"})]}),`
`,e.jsx(n.h3,{id:"codemod-transformations-for-icons",children:"Codemod Transformations for Icons"}),`
`,e.jsx(n.h4,{id:"icon-migration-codemod",children:"Icon Migration Codemod"}),`
`,e.jsxs(n.p,{children:["For v16, there is a ",e.jsx(n.strong,{children:"separate codemod"})," called ",e.jsx(n.code,{children:"icon-migration"}),` that updates
`,e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),` usage across your codebase. Upgrade the icon package to v5 before
you run it so deprecation and fallback mappings match what the transform expects.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-system-icons-web@^5
`})}),`
`,e.jsxs(n.p,{children:["The codemod reads ",e.jsx(n.code,{children:"system.deprecated.metadata.json"}),` from the installed icon package and rewrites
each deprecated export to its fallback icon. This codemod will:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Update ",e.jsx(n.strong,{children:"named imports"})," and their references (for example, ",e.jsx(n.code,{children:"uploadIcon"})," to ",e.jsx(n.code,{children:"arrowUpToLineIcon"}),")."]}),`
`,e.jsxs(n.li,{children:["Preserve ",e.jsx(n.strong,{children:"import aliases"})," and point them at the fallback export."]}),`
`,e.jsxs(n.li,{children:["Update ",e.jsx(n.strong,{children:"namespace imports"})," member access (for example, ",e.jsx(n.code,{children:"systemIcons.uploadIcon"}),` to
`,e.jsx(n.code,{children:"systemIcons.arrowUpToLineIcon"}),")."]}),`
`,e.jsxs(n.li,{children:["Resolve ",e.jsx(n.strong,{children:"chained fallbacks"})," when a fallback icon is itself deprecated."]}),`
`,e.jsxs(n.li,{children:["Remove ",e.jsx(n.strong,{children:"duplicate imports"})," when the fallback is already imported in the same declaration."]}),`
`]}),`
`,e.jsx(n.p,{children:`Because it applies every mapping in the metadata file, a single run covers both the v4 naming
convention migrations and the v5 Sana Canvas Assets renames and deprecations. Icons that are not
deprecated are left unchanged.`}),`
`,e.jsx(n.p,{children:"To run the codemod:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod icon-migration [path]
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," Provide the specific directory or directories you want to update as ",e.jsx(n.code,{children:"[path]"}),` to speed up
migration.`]}),`
`,e.jsxs(n.p,{children:["This codemod only touches ",e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),`. For accent, applet, and expressive
icons, use the `,e.jsx(n.code,{children:"v15-icons"}),` transform covered in the
`,e.jsx(n.a,{href:"/docs/guides-upgrade-guides-v15-0-overview--docs#codemod-transformations-for-icons",children:"v15 upgrade guide"}),`.
For details on what changed in v5 and the full list of deprecated icons, see the
`,e.jsx(n.a,{href:"/docs/guides-icon-migration-sana-canvas-assets-overview--docs",children:"Sana Canvas Assets overview"}),` and
the `,e.jsx(n.a,{href:"/docs/guides-icon-migration-codemod--docs",children:"Icon Migration codemod guide"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," 🤖 The ",e.jsx(n.code,{children:"icon-migration"}),` codemod automates the majority of system icon migration work,
but `,e.jsx(n.em,{children:"always"}),` review the PR for any remaining icons the codemod could not address, especially
dynamic icon selection, non-code assets, and heavily customized usages.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"new-components",children:"New Components"}),`
`,e.jsx(n.h3,{id:"kbd",children:"KBD"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4001",rel:"nofollow",children:"#4001"})]}),`
`,e.jsxs(n.p,{children:["The new ",e.jsx(n.code,{children:"KBD"}),` component allows you to display keyboard inputs in your UI using accessible, visually
consistent keyboard key representations. This is useful for documenting keyboard shortcuts,
instructional prompts, or any UI patterns that reference specific keys.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Highlights:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Provides a semantic (",e.jsx(n.code,{children:"kbd"})," element) way to visually present keyboard keys and shortcuts to users."]}),`
`,e.jsxs(n.li,{children:["Supports various variants (",e.jsx(n.code,{children:"default"})," for prominence, ",e.jsx(n.code,{children:"plain"}),` for use on colored surfaces), as well
as size options (`,e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"}),")."]}),`
`,e.jsxs(n.li,{children:["Easy to use nested ",e.jsx(n.code,{children:"KBD.Item"})," components for sequences or combinations."]}),`
`,e.jsx(n.li,{children:"RTL support."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {KBD} from '@workday/canvas-kit-labs-react';

<KBD>
  <KBD.Item aria-label="Command">⌘</KBD.Item>
  <KBD.Item>C</KBD.Item>
</KBD>;
`})}),`
`,e.jsx(n.p,{children:`For more details and advanced usage, including accessibility guidance for symbolic keys and
functional shortcuts, refer to the storybook documentation and our example stories.`}),`
`,e.jsx(n.h3,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4062",rel:"nofollow",children:"#4062"})]}),`
`,e.jsxs(n.p,{children:["A new ",e.jsx(n.code,{children:"Tabs"})," component has been added to ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),`, aligned with the Sana
Canvas visual language. It supports `,e.jsx(n.code,{children:"filled"})," and ",e.jsx(n.code,{children:"outlined"})," variants."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Tabs} from '@workday/canvas-kit-preview-react/tabs';

<Tabs>
  <Tabs.List>
    <Tabs.Item>First Tab</Tabs.Item>
    <Tabs.Item>Second Tab</Tabs.Item>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Contents of First Tab</Tabs.Panel>
    <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
  </Tabs.Panels>
</Tabs>;
`})}),`
`,e.jsx(n.h2,{id:"mcp",children:"MCP"}),`
`,e.jsxs(n.p,{children:["Canvas Kit's MCP server (",e.jsx(n.code,{children:"@workday/canvas-kit-mcp"}),`) helps agents migrate icons and look up tokens for
v16 / tokens `,e.jsx(n.code,{children:"4.4.0"}),"."]}),`
`,e.jsxs(n.h3,{id:"icon-migration--get-canvas-kit-icon-migration",children:["Icon migration — ",e.jsx(n.code,{children:"get-canvas-kit-icon-migration"})]}),`
`,e.jsxs(n.p,{children:["Use this tool when upgrading ",e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),` to v5 (Sana Canvas Assets), finding
replacements for deprecated icons, or running the `,e.jsx(n.code,{children:"icon-migration"})," codemod."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`Install / enable the Canvas Kit MCP server (see the
`,e.jsx(n.a,{href:"/docs/ai-for-llms-mcp-docs--docs",children:"MCP docs"}),")."]}),`
`,e.jsxs(n.li,{children:["Ask your agent to call ",e.jsx(n.code,{children:"get-canvas-kit-icon-migration"}),"."]}),`
`,e.jsxs(n.li,{children:["Follow the returned guides:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/docs/guides-icon-migration-sana-canvas-assets-overview--docs",children:"Sana Canvas Assets overview"}),`
(full deprecated → replacement table)`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/guides-icon-migration-codemod--docs",children:"Icon Migration codemod"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod icon-migration [path]
`})}),`
`,e.jsxs(n.h3,{id:"token-references--get-canvas-kit-tokens",children:["Token references — ",e.jsx(n.code,{children:"get-canvas-kit-tokens"})]}),`
`,e.jsxs(n.p,{children:["Token docs were updated for ",e.jsx(n.code,{children:"@workday/canvas-tokens-web"})," ",e.jsx(n.code,{children:"4.4.0"}),". Call ",e.jsx(n.code,{children:"get-canvas-kit-tokens"}),` and
start with the v4.4 token reference served by the MCP (`,e.jsx(n.code,{children:"docs://tokens/v4/v4.4-token-reference"}),`) for
the current token surface (Sana Canvas, t-shirt scales, deprecations).`]}),`
`,e.jsx(n.h2,{id:"component-updates",children:"Component Updates"}),`
`,e.jsx(n.h3,{id:"action-bar",children:"Action Bar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4048",rel:"nofollow",children:"#4048"})]}),`
`,e.jsx(n.h4,{id:"visual-updates",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ActionBar"})," padding has been updated to ",e.jsx(n.code,{children:"padding.md"})," (16px)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"buttons",children:"Buttons"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4000",rel:"nofollow",children:"#4000"})]}),`
`,e.jsx(n.p,{children:"All buttons have had the following updates:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fontWeight"})," has been updated from ",e.jsx(n.code,{children:"system.fontWeight.bold"})," to ",e.jsx(n.code,{children:"system.fontWeight.medium"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"minWidth"})," has been updated to the following:"]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Default Size"}),e.jsx(n.th,{children:"minWidth v15"}),e.jsx(n.th,{children:"minWidth v16"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"extraSmall"}),e.jsx(n.td,{children:"unchanged"}),e.jsx(n.td,{children:"unchanged"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"small"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"5rem"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"4.5rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"medium"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"6rem"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"5.5rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"large"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"7rem"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"6.5rem"})})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"paddingInline"})," has been updated to the following:"]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Size"}),e.jsx(n.th,{children:"paddingInline v15"}),e.jsx(n.th,{children:"paddingInline v16"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"extraSmall"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.75rem"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.5rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"small"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1rem"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.75rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"medium"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.5rem"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"large"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"2rem"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.25rem"})})]})]})]}),`
`,e.jsx(n.h4,{id:"delete-button-outline-variant",children:"Delete Button Outline Variant"}),`
`,e.jsxs(n.p,{children:["We've added an ",e.jsx(n.code,{children:"outline"})," variant to the ",e.jsx(n.code,{children:"DeleteButton"}),` component. This variant will reverse the
button's styling with a `,e.jsx(n.code,{children:"border"})," and ",e.jsx(n.code,{children:"transparent"})," background."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {DeleteButton} from '@workday/canvas-kit-react/button';

<DeleteButton variant="outline">Delete</DeleteButton>;
`})}),`
`,e.jsx(n.h4,{id:"secondary-button",children:"Secondary Button"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SecondaryButton"})," now has a ",e.jsx(n.code,{children:"transparent"})," ",e.jsx(n.code,{children:"backgroundColor"}),` and will not show on interactive states.
The interactive states will now show on the `,e.jsx(n.code,{children:"border"}),"."]}),`
`,e.jsx(n.h3,{id:"container-components",children:"Container Components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4088",rel:"nofollow",children:"#4088"})]}),`
`,e.jsx(n.h4,{id:"alt-variant-support",children:"Alt Variant Support"}),`
`,e.jsxs(n.p,{children:["Several container components now support an ",e.jsx(n.code,{children:"alt"}),` variant that provides an elevated surface
appearance:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Menu.Card"})," - Can use ",e.jsx(n.code,{children:'variant="alt"'})," for elevated menu styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Dialog.Card"})," - Can use ",e.jsx(n.code,{children:'variant="alt"'})," for elevated dialog styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Popup.Card"})," - Can use ",e.jsx(n.code,{children:'variant="alt"'})," for elevated popup styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Toast"})," - Can use ",e.jsx(n.code,{children:'variant="alt"'})," for elevated toast styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tooltip"})," - Can use ",e.jsx(n.code,{children:'variant="alt"'})," for elevated tooltip styling"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"alt"})," variant uses ",e.jsx(n.code,{children:"system.sana.color.surface.elevated"}),` background with inverse borders,
providing visual hierarchy and depth to these components when placed on an alt background.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Examples of using the alt variant
<Menu.Card variant="alt">
  <Menu.List>...</Menu.List>
</Menu.Card>

<Dialog.Card variant="alt">
  <Dialog.Heading>Dialog Title</Dialog.Heading>
  <Dialog.Body>Content</Dialog.Body>
</Dialog.Card>

<Toast variant="alt">
  <Toast.Body>
    <Toast.Message>Notification message</Toast.Message>
  </Toast.Body>
</Toast>
`})}),`
`,e.jsx(n.h4,{id:"card",children:"Card"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4014",rel:"nofollow",children:"#4014"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4088",rel:"nofollow",children:"#4088"})]}),`
`,e.jsx(n.h5,{id:"variant-changes",children:"Variant Changes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Card"})," component's variants have been updated:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Removed:"})," The ",e.jsx(n.code,{children:"borderless"})," variant has been removed and replaced with ",e.jsx(n.code,{children:"alt"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"New:"})," The ",e.jsx(n.code,{children:"alt"})," variant provides an elevated surface with inverse borders"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Updated:"})," The default variant now has a visible border"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"tonal"})," variant now uses a ",e.jsx(n.code,{children:"system.legacy.color.surface.alt.strong"})," background."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If you were previously using ",e.jsx(n.code,{children:'variant="borderless"'}),", you should use ",e.jsx(n.code,{children:'variant="alt"'}),`
instead. While the styles are different, both where intended to be used on an `,e.jsx(n.code,{children:"alt"})," background."]}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will automatically update ",e.jsx(n.code,{children:'variant="borderless"'})," to ",e.jsx(n.code,{children:'variant="alt"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v15
<Card variant="borderless">
  <Card.Body>Content</Card.Body>
</Card>

// v16
<Card variant="alt">
  <Card.Body>Content</Card.Body>
</Card>
`})}),`
`,e.jsx(n.h5,{id:"visual-updates-1",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Card.Heading"})," now defaults to ",e.jsx(n.code,{children:"body.small"})," type level (previously ",e.jsx(n.code,{children:"body.large"}),`). If your design
requires a larger heading, you can override the `,e.jsx(n.code,{children:"typeLevel"})," prop on ",e.jsx(n.code,{children:"Card.Heading"}),"."]}),`
`,e.jsxs(n.li,{children:["The gap between ",e.jsx(n.code,{children:"Card.Heading"})," and ",e.jsx(n.code,{children:"Card.Body"})," has been reduced (previously ",e.jsx(n.code,{children:"gap.lg"}),`, now
`,e.jsx(n.code,{children:"padding.sm"}),")."]}),`
`,e.jsxs(n.li,{children:["Card's border radius is now managed via the new ",e.jsx(n.code,{children:"cornerShapeStencil"}),` (see
`,e.jsx(n.a,{href:"#new-utilities",children:"New Utilities"}),")."]}),`
`,e.jsxs(n.li,{children:["The default variant now includes a visible border (",e.jsx(n.code,{children:"system.color.border.default"}),")."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"alt"})," variant uses an elevated surface color (",e.jsx(n.code,{children:"system.sana.color.surface.elevated"}),`) with
inverse borders.`]}),`
`]}),`
`,e.jsx(n.h4,{id:"expandable",children:"Expandable"}),`
`,e.jsx(n.h5,{id:"visual-updates-2",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Expandable.Target"})," border radius changed from ",e.jsx(n.code,{children:"shape.xxl"})," (24px, pill) to ",e.jsx(n.code,{children:"shape.lg"}),` (12px), now
managed via `,e.jsx(n.code,{children:"cornerShapeStencil"})," (see ",e.jsx(n.a,{href:"#new-utilities",children:"New Utilities"}),")."]}),`
`,e.jsxs(n.li,{children:["Gap between ",e.jsx(n.code,{children:"Expandable.Target"})," and ",e.jsx(n.code,{children:"Expandable.Content"})," is now ",e.jsx(n.code,{children:"gap.sm"}),` (8px), set on the
`,e.jsx(n.code,{children:"Expandable"})," container (previously handled entirely via ",e.jsx(n.code,{children:"Expandable.Content"}),"'s top padding)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Expandable.Content"})," padding is now uniform ",e.jsx(n.code,{children:"padding.xs"}),` (8px) on all sides (previously
`,e.jsx(n.code,{children:"padding.md"})," top / ",e.jsx(n.code,{children:"padding.xs"})," sides and bottom)."]}),`
`]}),`
`,e.jsx(n.h4,{id:"side-panel",children:"Side Panel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4107",rel:"nofollow",children:"#4107"})]}),`
`,e.jsx(n.h5,{id:"breaking-changes",children:"Breaking Changes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"variant"})," prop on ",e.jsx(n.code,{children:"SidePanel"})," no longer accepts ",e.jsx(n.code,{children:"alternate"}),". It has been renamed to ",e.jsx(n.code,{children:"overlay"}),` to
describe what the variant is for — a panel that floats above page content — because a second
non-overlay variant now occupies the "alternative surface" role.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SidePanel} from '@workday/canvas-kit-react/side-panel';

// Before
<SidePanel variant="alternate">{/* ... */}</SidePanel>

// After
<SidePanel variant="overlay">{/* ... */}</SidePanel>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["🤖 The ",e.jsx(n.code,{children:"v16"})," codemod will rename ",e.jsx(n.code,{children:'variant="alternate"'})," to ",e.jsx(n.code,{children:'variant="overlay"'}),` as shown above. It
only transforms `,e.jsx(n.code,{children:"SidePanel"})," imported from ",e.jsx(n.code,{children:"@workday/canvas-kit-react"}),"; the deprecated ",e.jsx(n.code,{children:"SidePanel"}),`
in `,e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"})," is left alone."]}),`
`]}),`
`,e.jsxs(n.p,{children:["If you were using ",e.jsx(n.code,{children:"alternate"}),` for a panel that sits inline with page content rather than over it,
switch to the new `,e.jsx(n.code,{children:"alternative"})," variant instead of ",e.jsx(n.code,{children:"overlay"}),` to avoid picking up the elevation
shadow.`]}),`
`,e.jsx(n.h5,{id:"new-api",children:"New API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'variant="alternative"'})," — uses a raised surface (",e.jsx(n.code,{children:"system.legacy.color.surface.raised"}),`) with no
depth. Use it for panels that need to stand out from the page background while remaining part of
the page layout.`]}),`
`]}),`
`,e.jsx(n.p,{children:"The full set of variants is now:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Variant"}),e.jsx(n.th,{children:"Surface"}),e.jsx(n.th,{children:"Depth"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"standard"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"system.legacy.color.surface.navigation"})}),e.jsx(n.td,{children:"None"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"alternative"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"system.legacy.color.surface.raised"})}),e.jsx(n.td,{children:"None"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"overlay"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"system.legacy.color.surface.default"})}),e.jsx(n.td,{children:"6"})]})]})]}),`
`,e.jsx(n.h5,{id:"visual-updates-3",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"overlay"})," variant's box-shadow updated from ",e.jsx(n.code,{children:"system.depth[3]"})," to ",e.jsx(n.code,{children:"system.depth[6]"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SidePanel.ToggleButton"}),"'s default icon changed from ",e.jsx(n.code,{children:"extendIcon"})," to ",e.jsx(n.code,{children:"sidebarLeftIcon"}),`. The icon
no longer rotates as the panel expands and collapses: it keeps a single orientation in LTR and is
mirrored horizontally in RTL.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SidePanel.ToggleButton"}),"'s width changed from ",e.jsx(n.code,{children:"gap.lg"})," (24px) to ",e.jsx(n.code,{children:"size.md"}),` (40px), and its top
offset changed from `,e.jsx(n.code,{children:"gap.lg"})," (24px) to ",e.jsx(n.code,{children:"12px"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SidePanel.Heading"})," padding changed from a symmetric ",e.jsx(n.code,{children:"padding.xs"})," (8px) to ",e.jsx(n.code,{children:"padding.sm"}),` (12px)
with a `,e.jsx(n.code,{children:"paddingInlineStart"})," of ",e.jsx(n.code,{children:"padding.md"})," (16px), and it now has a ",e.jsx(n.code,{children:"minHeight"})," of ",e.jsx(n.code,{children:"size.xxl"}),`
(64px) so the heading lines up with the toggle button and the collapsed panel width.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SidePanel.Heading"}),` now lays out its children with flexbox and centers them vertically, so an icon
passed alongside the heading text aligns without extra styling.`]}),`
`]}),`
`,e.jsx(n.h4,{id:"table",children:"Table"}),`
`,e.jsx(n.h5,{id:"visual-updates-4",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BaseTable"})," / ",e.jsx(n.code,{children:"Table"})," outer border color updated from ",e.jsx(n.code,{children:"system.legacy.color.border.strong"}),` to
`,e.jsx(n.code,{children:"system.legacy.color.border.default"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Caption"})," divider (",e.jsx(n.code,{children:"borderBlockEnd"}),") updated from ",e.jsx(n.code,{children:"system.legacy.color.border.strong"}),` to
`,e.jsx(n.code,{children:"system.legacy.color.border.default"}),"."]}),`
`,e.jsxs(n.li,{children:["Container corner radius is now ",e.jsx(n.strong,{children:"12px"})," (",e.jsx(n.code,{children:"shape.lg"}),", previously ",e.jsx(n.code,{children:"shape.md"}),` / 8px), managed via
`,e.jsx(n.code,{children:"cornerShapeStencil"})," (see ",e.jsx(n.a,{href:"#new-utilities",children:"New Utilities"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Header"})," (and ",e.jsx(n.code,{children:"BaseTable.Header"}),") cell padding is now uniform ",e.jsx(n.code,{children:"padding.md"}),` (16px) on all
sides (previously asymmetric `,e.jsx(n.code,{children:"padding.xs"})," vertically and ",e.jsx(n.code,{children:"padding.md"})," horizontally)."]}),`
`,e.jsxs(n.li,{children:["Column header label text color is now ",e.jsx(n.code,{children:"system.color.fg.strong"})," (previously inherited ",e.jsx(n.code,{children:"fg.default"}),`
from the table container).`]}),`
`]}),`
`,e.jsx(n.h3,{id:"indicators",children:"Indicators"}),`
`,e.jsx(n.h4,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3981",rel:"nofollow",children:"#3981"})]}),`
`,e.jsxs(n.p,{children:["We've updated ",e.jsx(n.code,{children:"Avatar"})," color variants to align with Sana Canvas. These changes are ",e.jsx(n.strong,{children:"only visual"}),` —
the component API is unchanged except for two new `,e.jsx(n.code,{children:"variant"})," options."]}),`
`,e.jsx(n.h5,{id:"updated-variants",children:"Updated Variants"}),`
`,e.jsx(n.p,{children:"Existing variants use darker background colors and updated foreground colors for improved contrast:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Variant"}),e.jsx(n.th,{children:"Change"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"blue"})}),e.jsxs(n.td,{children:["Background updated from ",e.jsx(n.code,{children:"blue300"})," to ",e.jsx(n.code,{children:"blue600"}),"; text now uses ",e.jsx(n.code,{children:"system.color.fg.inverse"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"amber"})}),e.jsxs(n.td,{children:["Background updated from ",e.jsx(n.code,{children:"amber200"})," to ",e.jsx(n.code,{children:"amber300"}),"; text updated from ",e.jsx(n.code,{children:"amber700"})," to ",e.jsx(n.code,{children:"amber800"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"purple"})}),e.jsxs(n.td,{children:["Background updated from ",e.jsx(n.code,{children:"purple300"})," to ",e.jsx(n.code,{children:"purple600"}),"; text now uses ",e.jsx(n.code,{children:"system.color.fg.inverse"})]})]})]})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"teal"})," variant is unchanged."]}),`
`,e.jsx(n.h5,{id:"new-variants",children:"New Variants"}),`
`,e.jsx(n.p,{children:"Two new color variants are available:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"magenta"})," — ",e.jsx(n.code,{children:"magenta600"})," background with ",e.jsx(n.code,{children:"system.color.fg.inverse"})," text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"green"})," — ",e.jsx(n.code,{children:"green600"})," background with ",e.jsx(n.code,{children:"system.color.fg.inverse"})," text"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Avatar} from '@workday/canvas-kit-react/avatar';

<Avatar name="Mary Jane" variant="magenta" />
<Avatar name="Green Arrow" variant="green" />
`})}),`
`,e.jsx(n.h4,{id:"banner",children:"Banner"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4087",rel:"nofollow",children:"#4087"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-5",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Font weight changed from ",e.jsx(n.code,{children:"system.fontWeight.medium"})," to ",e.jsx(n.code,{children:"system.fontWeight.bold"}),"."]}),`
`,e.jsxs(n.li,{children:["Padding updated to ",e.jsx(n.code,{children:"paddingInline"})," of ",e.jsx(n.code,{children:"padding.sm"}),"/",e.jsx(n.code,{children:"padding.md"})," (12px/16px) and ",e.jsx(n.code,{children:"paddingBlock"}),` of
`,e.jsx(n.code,{children:"10px"})," (previously a symmetric ",e.jsx(n.code,{children:"padding.xs"}),"/",e.jsx(n.code,{children:"padding.md"}),", 8px/16px)."]}),`
`,e.jsxs(n.li,{children:["Border radius is now managed via the new ",e.jsx(n.code,{children:"cornerShapeStencil"}),` (see
`,e.jsx(n.a,{href:"#new-utilities",children:"New Utilities"}),"), using ",e.jsx(n.code,{children:"shape.lg"}),` (12px) instead of individual corner-radius
properties set to `,e.jsx(n.code,{children:"shape.sm"})," (4px)."]}),`
`,e.jsxs(n.li,{children:["A box shadow (",e.jsx(n.code,{children:"system.depth[5]"}),") has been added to the container."]}),`
`,e.jsxs(n.li,{children:["The focus ring now uses ",e.jsx(n.code,{children:"system.legacy.color.brand.border.primary"})," for its outer color."]}),`
`,e.jsxs(n.li,{children:["Hover background now uses ",e.jsx(n.code,{children:"colorSpace.hover()"})," instead of ",e.jsx(n.code,{children:"colorSpace.darken()"}),`, making the hover
direction theme-aware (lightens in the Sana Canvas theme, darkens in the default/legacy theme).`]}),`
`,e.jsxs(n.li,{children:["The default ",e.jsx(n.code,{children:"Banner.Icon"})," size has been reduced from ",e.jsx(n.code,{children:"24px"})," to ",e.jsx(n.code,{children:"20px"}),"."]}),`
`]}),`
`,e.jsx(n.h4,{id:"count-badge",children:"Count Badge"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4087",rel:"nofollow",children:"#4087"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-6",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Typography now uses the ",e.jsx(n.code,{children:"system.legacy.type.subtext.md"}),` type preset (previously individually set
`,e.jsx(n.code,{children:"fontFamily"}),"/",e.jsx(n.code,{children:"fontSize"}),"/",e.jsx(n.code,{children:"lineHeight"}),"/",e.jsx(n.code,{children:"letterSpacing"}),"); ",e.jsx(n.code,{children:"fontWeight"}),` is now
`,e.jsx(n.code,{children:"system.fontWeight.medium"})," (previously ",e.jsx(n.code,{children:"system.fontWeight.bold"}),")."]}),`
`,e.jsxs(n.li,{children:["Horizontal padding changed from a hardcoded ",e.jsx(n.code,{children:"6.5px"})," to ",e.jsx(n.code,{children:"system.legacy.padding.xxs"})," (4px)."]}),`
`,e.jsxs(n.li,{children:["Default background color changed from ",e.jsx(n.code,{children:"system.legacy.color.accent.danger"}),` to
`,e.jsx(n.code,{children:"system.legacy.color.brand.accent.primary"}),`. This is a visual color change — the default badge is
no longer red/danger-colored and now uses the brand primary accent color.`]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"inverse"})," variant's text color changed from ",e.jsx(n.code,{children:"system.legacy.color.fg.info.strong"}),` to
`,e.jsx(n.code,{children:"system.color.fg.strong"}),"."]}),`
`]}),`
`,e.jsx(n.h4,{id:"information-highlight",children:"Information Highlight"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4087",rel:"nofollow",children:"#4087"})]}),`
`,e.jsx(n.h5,{id:"breaking-changes-1",children:"Breaking Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The default ",e.jsx(n.code,{children:"variant"})," changed from ",e.jsx(n.code,{children:"informational"})," to ",e.jsx(n.code,{children:"default"}),`. If you rely on the implicit
default, add `,e.jsx(n.code,{children:'variant="informational"'})," explicitly to preserve the previous appearance."]}),`
`]}),`
`,e.jsx(n.h5,{id:"new-api-1",children:"New API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'variant="default"'})," — general-purpose variant with gray background (",e.jsx(n.code,{children:"surface.alt.default"}),`), flat
`,e.jsx(n.code,{children:"layersIcon"})," (no colored circle), and icon color ",e.jsx(n.code,{children:"system.color.fg.default"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'actionPlacement="bottom" | "end"'})," — ",e.jsx(n.code,{children:"bottom"})," (default) stacks the link below heading/body; ",e.jsx(n.code,{children:"end"}),`
visually places the link at the inline end beside content when the container is wide enough, and
stacks it below the body when narrower. This only affects visual/grid placement. DOM order,
keyboard tab order, and screen reader order remain unchanged (heading, body, then link).`]}),`
`]}),`
`,e.jsx(n.h5,{id:"visual-updates-7",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The left accent border (",e.jsx(n.code,{children:"borderInlineStart"}),") has been removed."]}),`
`,e.jsxs(n.li,{children:["Border radius changed from ",e.jsx(n.code,{children:"shape.sm"})," (4px) to ",e.jsx(n.code,{children:"shape.xxl"})," (20px) via ",e.jsx(n.code,{children:"cornerShapeStencil"}),` (see
`,e.jsx(n.a,{href:"#new-utilities",children:"New Utilities"}),")."]}),`
`,e.jsxs(n.li,{children:["Icon-to-content horizontal gap changed from ",e.jsx(n.code,{children:"gap.md"})," (16px) to ",e.jsx(n.strong,{children:"12px"}),"."]}),`
`,e.jsxs(n.li,{children:["Vertical spacing between text blocks: ",e.jsx(n.strong,{children:"4px"})," between heading and body (",e.jsx(n.code,{children:"gap.xs"}),"), ",e.jsx(n.strong,{children:"16px"}),`
between body and link (`,e.jsx(n.code,{children:"gap.md"}),")."]}),`
`,e.jsxs(n.li,{children:["The default ",e.jsx(n.code,{children:"InformationHighlight.Icon"})," size has been reduced from ",e.jsx(n.code,{children:"24px"})," to ",e.jsx(n.code,{children:"20px"})," (",e.jsx(n.code,{children:"systemIcon"}),`
size `,e.jsx(n.code,{children:"md"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Heading"})," typography now uses ",e.jsx(n.code,{children:"system.legacy.type.subtext.lg"})," with ",e.jsx(n.code,{children:"fontWeight.medium"}),` (previously
`,e.jsx(n.code,{children:"body.sm"})," scale with ",e.jsx(n.code,{children:"fontWeight.bold"}),"). Color changed from ",e.jsx(n.code,{children:"fg.default"})," to ",e.jsx(n.code,{children:"fg.strong"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Body"})," typography consolidated to ",e.jsx(n.code,{children:"system.legacy.type.subtext.lg"}),` spread. Color changed from
`,e.jsx(n.code,{children:"fg.default"})," to ",e.jsx(n.code,{children:"fg.muted.default"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Link"})," typography consolidated to ",e.jsx(n.code,{children:"system.legacy.type.subtext.lg"})," spread; ",e.jsx(n.code,{children:"fontWeight.bold"}),`
override removed (weight is now regular).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Link"})," now uses the newly introduced ",e.jsx(n.code,{children:"secondary"})," Hyperlink variant (see ",e.jsx(n.a,{href:"#hyperlink",children:"Hyperlink"}),")."]}),`
`,e.jsx(n.li,{children:"Background surface tokens per variant/emphasis are unchanged."}),`
`]}),`
`,e.jsx(n.h4,{id:"pill",children:"Pill"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4087",rel:"nofollow",children:"#4087"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-8",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Typography now uses the ",e.jsx(n.code,{children:"system.legacy.type.subtext.md"}),` type preset (previously individually set
`,e.jsx(n.code,{children:"fontFamily"}),"/",e.jsx(n.code,{children:"fontSize"}),"/",e.jsx(n.code,{children:"lineHeight"}),"/",e.jsx(n.code,{children:"letterSpacing"}),"/",e.jsx(n.code,{children:"fontWeight"}),")."]}),`
`,e.jsxs(n.li,{children:["Background color tier changed from ",e.jsx(n.code,{children:"surface.alt.strong"})," to ",e.jsx(n.code,{children:"surface.alt.default"}),` (a lighter
background) for the base, disabled state, and the disabled `,e.jsx(n.code,{children:"Pill.Count"}),` background. Hover/active
states now mix `,e.jsx(n.code,{children:"surface.overlay.mixin"})," into ",e.jsx(n.code,{children:"surface.alt.default"}),` at 3.92% (hover) and 7.45%
(active) via `,e.jsx(n.code,{children:"colorSpace.darken()"}),". In Sana, ",e.jsx(n.code,{children:"surface.overlay.mixin"}),` resolves to neutral black;
mix percentages were recalibrated from the v15 defaults (8%/18%) for the lighter
`,e.jsx(n.code,{children:"surface.alt.default"})," base."]}),`
`,e.jsxs(n.li,{children:["Active state label color changed from ",e.jsx(n.code,{children:"fg.strong"})," to ",e.jsx(n.code,{children:"fg.stronger"}),", now matching the hover state."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"readOnly"})," variant now explicitly sets its label color to ",e.jsx(n.code,{children:"fg.default"}),` (previously inherited
`,e.jsx(n.code,{children:"fg.strong"}),")."]}),`
`,e.jsxs(n.li,{children:["The disabled state now dims the whole container via ",e.jsx(n.code,{children:"system.opacity.disabled"}),` instead of using a
distinct label color, matching the convention used by `,e.jsx(n.code,{children:"PrimaryButton"}),"/",e.jsx(n.code,{children:"DeleteButton"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.IconButton"}),"'s default icon color changed from ",e.jsx(n.code,{children:"fg.strong"})," to ",e.jsx(n.code,{children:"fg.default"}),`, and its disabled
icon color changed from `,e.jsx(n.code,{children:"fg.disabled"})," to ",e.jsx(n.code,{children:"fg.strong"}),`, matching the "dim via container opacity"
convention above.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.IconButton"}),"'s close icon hit box shrunk from ",e.jsx(n.code,{children:"size.xxs"})," (20px) to ",e.jsx(n.code,{children:"size.xxxs"}),` (16px), and
the icon glyph itself shrunk from `,e.jsx(n.code,{children:"systemIcon.size.sm"})," (18px) to ",e.jsx(n.code,{children:"systemIcon.size.xs"}),` (16px) to
fill the smaller hit box exactly.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.IconButton"}),"'s border radius is now driven by ",e.jsx(n.code,{children:"buttonStencil.vars.borderRadius"}),` set to
`,e.jsx(n.code,{children:"shape.sm"}),", matching the Pill container's own corner radius (previously a hardcoded ",e.jsx(n.code,{children:"2px"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.IconButton"}),"'s focus indicator is no longer a separate ",e.jsx(n.code,{children:"focusRing()"}),` box-shadow. It's now a
border drawn on the button's existing larger (invisible) hit-target overlay, so the ring appears
flush with the ~24px click target instead of hugging the smaller 16px icon box. It uses
`,e.jsx(n.code,{children:"system.legacy.color.brand.border.primary"}),", matching the Pill container's own focus color."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.Icon"}),"'s glyph size shrunk from ",e.jsx(n.code,{children:"systemIcon.size.sm"})," (18px) to ",e.jsx(n.code,{children:"systemIcon.size.xs"})," (16px)."]}),`
`]}),`
`,e.jsx(n.h4,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(n.h5,{id:"visual-updates-9",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Default fill on ",e.jsx(n.code,{children:"Skeleton.Header"}),", ",e.jsx(n.code,{children:"Skeleton.Text"}),", and ",e.jsx(n.code,{children:"Skeleton.Shape"}),` changed from flat
`,e.jsx(n.code,{children:"surface.loading"})," to a two-stop shimmer gradient (",e.jsx(n.code,{children:"surface.alt.strong"})," → ",e.jsx(n.code,{children:"surface.loading"}),`,
`,e.jsx(n.code,{children:"to left"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Skeleton.Header"})," border radius changed from ",e.jsx(n.code,{children:"shape.md"})," (8px) to ",e.jsx(n.code,{children:"shape.sm"})," (6px)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Skeleton.Text"})," line placeholder border radius changed from ",e.jsx(n.code,{children:"shape.md"})," (8px) to ",e.jsx(n.code,{children:"shape.xxxl"}),`
(28px), producing fully pill-shaped lines at the default 16px line height.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Skeleton.Shape"})," border radius remains consumer-configurable via the ",e.jsx(n.code,{children:"borderRadius"})," prop or ",e.jsx(n.code,{children:"cs"}),`
(default `,e.jsx(n.code,{children:"0"}),"); only the default fill changed."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"backgroundColor"})," prop still accepts solid color overrides (for example via ",e.jsx(n.code,{children:"cs"}),`). The default
stencil uses the `,e.jsx(n.code,{children:"background"})," CSS property for the gradient instead of ",e.jsx(n.code,{children:"backgroundColor"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Placeholder shapes use a ",e.jsx(n.code,{children:"1px"}),` transparent border so boundaries remain visible in Windows High
Contrast when gradient fills are suppressed (`,e.jsx(n.code,{children:"border-color: CanvasText"})," under ",e.jsx(n.code,{children:"forced-colors"}),")."]}),`
`]}),`
`,e.jsx(n.h4,{id:"status-indicator",children:"Status Indicator"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4087",rel:"nofollow",children:"#4087"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-10",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Container height increased from ",e.jsx(n.code,{children:"size.xxs"})," (20px) to ",e.jsx(n.code,{children:"size.xs"})," (24px)."]}),`
`,e.jsxs(n.li,{children:["Border radius changed from ",e.jsx(n.code,{children:"shape.sm"})," (4px) to ",e.jsx(n.code,{children:"shape.md"}),` (8px), now managed via
`,e.jsx(n.code,{children:"cornerShapeStencil"})," (see ",e.jsx(n.a,{href:"#new-utilities",children:"New Utilities"}),")."]}),`
`,e.jsxs(n.li,{children:["Padding changed from asymmetric ",e.jsx(n.code,{children:"0"}),"/",e.jsx(n.code,{children:"padding.xs"})," (0px/8px) to ",e.jsx(n.code,{children:"padding.xxs"}),"/",e.jsx(n.code,{children:"padding.xs"}),`
(4px/8px).`]}),`
`,e.jsxs(n.li,{children:["The default icon size has been reduced from ",e.jsx(n.code,{children:"20px"})," to ",e.jsx(n.code,{children:"16px"}),"."]}),`
`,e.jsxs(n.li,{children:["Label typography now uses the ",e.jsx(n.code,{children:"subtext.medium"})," type level (12px, previously ",e.jsx(n.code,{children:"subtext.large"}),`, 14px)
with `,e.jsx(n.code,{children:"fontWeight.medium"})," (previously ",e.jsx(n.code,{children:"fontWeight.bold"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"inputs",children:"Inputs"}),`
`,e.jsx(n.h4,{id:"accessibility-checked-state-contrast",children:"Accessibility: Checked-State Contrast"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," The checked states of ",e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"}),", and ",e.jsx(n.code,{children:"Switch"}),` now derive their
background/fill color from `,e.jsx(n.code,{children:"system.color.brand.accent.positive"}),` (which maps to your theme's
`,e.jsx(n.code,{children:"brand.success.base"}),`), while the foreground (the check icon, radio dot, and switch thumb) remains
an inverse/white color. This pairing relies on `,e.jsx(n.code,{children:"brand.success.base"}),` being a sufficiently dark
color.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["This change is safe for the default Canvas themes, where ",e.jsx(n.code,{children:"brand.success.base"}),` is dark enough to
maintain adequate contrast against the white foreground. However, `,e.jsxs(n.strong,{children:[`consumer themes that override
`,e.jsx(n.code,{children:"brand.success.base"})," with a light color may produce insufficient contrast"]}),` between the checked
background and the white check icon, radio dot, or switch thumb. This can cause the checked state to
fail
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html",rel:"nofollow",children:"WCAG 1.4.11 Non-text Contrast (3:1)"}),"."]}),`
`,e.jsxs(n.p,{children:["If you customize ",e.jsx(n.code,{children:"brand.success.base"})," in your theme, please verify the following:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maintain a minimum 3:1 contrast ratio"})," between your ",e.jsx(n.code,{children:"brand.success.main"}),` value and the white
(`,e.jsx(n.code,{children:"#ffffff"}),") foreground used for the check icon, radio dot, and switch thumb."]}),`
`,e.jsxs(n.li,{children:["Prefer a ",e.jsx(n.code,{children:"brand.success.base"}),` value that is dark enough to pair with a light foreground. If your
brand requires a light success color, you may need to override the component styles so the
foreground uses a darker, paired contrast color instead of white.`]}),`
`]}),`
`,e.jsx(n.h4,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3984",rel:"nofollow",children:"#3984"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-11",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The default Checkbox size is now ",e.jsx(n.strong,{children:"20px"})," (previously 24px)."]}),`
`,e.jsxs(n.li,{children:["Checked state uses ",e.jsx(n.code,{children:"system.color.brand.accent.positive"}),` instead of
`,e.jsx(n.code,{children:"system.color.brand.accent.primary"})," for the background."]}),`
`,e.jsx(n.li,{children:`Error and alert states no longer display a status background color; only the standard background
is shown.`}),`
`,e.jsxs(n.li,{children:[`The hover ring is smaller to better align with the smaller size. The hover ring background color
uses neutral instead of slate in `,e.jsx(n.code,{children:"sana-canvas"})," theme."]}),`
`]}),`
`,e.jsx(n.h4,{id:"color-input",children:"Color Input"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3992",rel:"nofollow",children:"#3992"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-12",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Shape is now ",e.jsx(n.strong,{children:"12px"})," (previously 8px)."]}),`
`]}),`
`,e.jsx(n.h4,{id:"color-picker",children:"Color Picker"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3992",rel:"nofollow",children:"#3992"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-13",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sana Canvas:"})," swatch shape is now ",e.jsx(n.strong,{children:"6px"})," (previously ",e.jsx(n.strong,{children:"4px"}),")."]}),`
`]}),`
`,e.jsx(n.h4,{id:"form-field",children:"Form Field"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3992",rel:"nofollow",children:"#3992"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-14",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Shape for grouped inputs (Radio groups and Checkbox groups) is now ",e.jsx(n.strong,{children:"12px"}),` (previously 8px). As
in v15, this shape is primarily visible for error and caution states.`]}),`
`,e.jsx(n.li,{children:`Error and caution states no longer display a status background color; only the standard background
is shown.`}),`
`]}),`
`,e.jsx(n.h4,{id:"radio",children:"Radio"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3984",rel:"nofollow",children:"#3984"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-15",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The default Radio size is now ",e.jsx(n.strong,{children:"20px"})," (previously 24px)."]}),`
`,e.jsxs(n.li,{children:["Checked state uses ",e.jsx(n.code,{children:"system.color.brand.accent.positive"}),` instead of
`,e.jsx(n.code,{children:"system.color.brand.accent.primary"})," for the background."]}),`
`,e.jsx(n.li,{children:`Error and alert states no longer display a status background color; only the standard background
is shown.`}),`
`,e.jsxs(n.li,{children:[`The hover ring is smaller to better align with the smaller size. The hover ring background color
uses a neutral color instead of slate in `,e.jsx(n.code,{children:"sana-canvas"})," theme."]}),`
`]}),`
`,e.jsx(n.h4,{id:"switch",children:"Switch"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3984",rel:"nofollow",children:"#3984"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-16",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The Switch thumb is now ",e.jsx(n.strong,{children:"16px"})," (was 14px). The icon-thumb container width remains unchanged."]}),`
`,e.jsxs(n.li,{children:["The checked state background now uses ",e.jsx(n.code,{children:"system.color.brand.accent.positive"}),` instead of
`,e.jsx(n.code,{children:"system.color.brand.accent.primary"}),"."]}),`
`,e.jsxs(n.li,{children:["The default (unchecked) background color now uses ",e.jsx(n.code,{children:"system.color.surface.muted.default"}),` instead of
`,e.jsx(n.code,{children:"system.color.surface.muted.soft"}),`. Background color uses a neutral color instead of slate in
`,e.jsx(n.code,{children:"sana-canvas"})," theme."]}),`
`]}),`
`,e.jsx(n.h4,{id:"text-area",children:"Text Area"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3992",rel:"nofollow",children:"#3992"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-17",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Shape is now ",e.jsx(n.strong,{children:"12px"})," (previously 8px)."]}),`
`,e.jsx(n.li,{children:`Error and caution states no longer display a status background color; only the standard background
is shown.`}),`
`]}),`
`,e.jsx(n.h4,{id:"text-input",children:"Text Input"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3992",rel:"nofollow",children:"#3992"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-18",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Shape is now ",e.jsx(n.strong,{children:"12px"})," (previously 8px)."]}),`
`,e.jsx(n.li,{children:`Error and caution states no longer display a status background color; only the standard background
is shown.`}),`
`]}),`
`,e.jsx(n.h4,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4085",rel:"nofollow",children:"#4085"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-19",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The dropdown indicator icon now uses ",e.jsx(n.code,{children:"chevronDownSmallIcon"})," and ",e.jsx(n.code,{children:"chevronUpSmallIcon"}),` instead of
`,e.jsx(n.code,{children:"caretDownSmallIcon"}),". The icon toggles direction when the menu is open."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Select.Input"})," inherits the ",e.jsx(n.code,{children:"TextInput"})," shape update (",e.jsx(n.strong,{children:"12px"}),`, previously 8px) and menu styling
updates from `,e.jsx(n.a,{href:"#menu",children:"Menu"}),"."]}),`
`,e.jsxs(n.li,{children:["Gap between the input and dropdown menu updated from ",e.jsx(n.code,{children:"4px"})," to ",e.jsx(n.code,{children:"8px"})," via ",e.jsx(n.code,{children:"Menu.Popper"})," offset."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`No API changes. No migration is required unless you render a custom dropdown indicator or override
`,e.jsx(n.code,{children:"selectInputStencil"})," caret styles."]}),`
`,e.jsx(n.h4,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4085",rel:"nofollow",children:"#4085"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-20",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Shape is now ",e.jsx(n.strong,{children:"12px"})," (",e.jsx(n.code,{children:"shape.lg"}),", previously ",e.jsx(n.code,{children:"shape.md"})," / 8px) via ",e.jsx(n.code,{children:"cornerShapeStencil"}),"."]}),`
`,e.jsxs(n.li,{children:["The dropdown indicator icon now uses ",e.jsx(n.code,{children:"chevronDownSmallIcon"})," and ",e.jsx(n.code,{children:"chevronUpSmallIcon"}),` instead of
`,e.jsx(n.code,{children:"caretDownSmallIcon"}),". The icon toggles direction when the menu is open."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"})," menus inherit the ",e.jsx(n.a,{href:"#menu",children:"Menu"})," styling updates."]}),`
`,e.jsxs(n.li,{children:["Gap between the input and dropdown menu updated from ",e.jsx(n.code,{children:"4px"})," to ",e.jsx(n.code,{children:"8px"})," via ",e.jsx(n.code,{children:"Menu.Popper"})," offset."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`No API changes. No migration is required unless you render a custom dropdown indicator or override
`,e.jsx(n.code,{children:"multiSelectInputStencil"})," styles."]}),`
`,e.jsx(n.h3,{id:"popups",children:"Popups"}),`
`,e.jsx(n.h4,{id:"menu",children:"Menu"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3987",rel:"nofollow",children:"#3987"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-21",children:"Visual Updates"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Menu.Card"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Text color updated from ",e.jsx(n.code,{children:"system.color.fg.default"})," to ",e.jsx(n.code,{children:"system.color.fg.strong"}),"."]}),`
`,e.jsxs(n.li,{children:["Padding updated from ",e.jsx(n.code,{children:"padding.xxs"})," (4px) to ",e.jsx(n.code,{children:"padding.xs"})," (8px)."]}),`
`,e.jsxs(n.li,{children:["Border radius is now managed via ",e.jsx(n.code,{children:"cornerShapeStencil"})," (still uses ",e.jsx(n.code,{children:"shape.xxl"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Menu.Popper"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Offset between the trigger and dropdown menu updated from ",e.jsx(n.code,{children:"4px"})," to ",e.jsx(n.code,{children:"8px"}),". This affects ",e.jsx(n.code,{children:"Select"}),`,
`,e.jsx(n.code,{children:"MultiSelect"}),", ",e.jsx(n.code,{children:"Combobox"}),", and other components that use ",e.jsx(n.code,{children:"Menu.Popper"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Menu.List"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gap between items updated from ",e.jsx(n.code,{children:"gap.xs"})," (4px) to ",e.jsx(n.code,{children:"base.legacy.size25"})," (2px)."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Menu.Item"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Icon-to-label gap updated from ",e.jsx(n.code,{children:"gap.md"})," (16px) to ",e.jsx(n.code,{children:"gap.sm"})," (8px)."]}),`
`,e.jsxs(n.li,{children:["Padding updated from symmetric ",e.jsx(n.code,{children:"padding.sm"}),"/",e.jsx(n.code,{children:"padding.md"}),` (12px/16px) to asymmetric
`,e.jsx(n.code,{children:"padding.xs"}),"/",e.jsx(n.code,{children:"padding.xs"}),"/",e.jsx(n.code,{children:"padding.xs"}),"/",e.jsx(n.code,{children:"padding.sm"})," (8px top/right/bottom, 12px left)."]}),`
`,e.jsxs(n.li,{children:["Item border radius updated from ",e.jsx(n.code,{children:"shape.xxl"})," (24px) to ",e.jsx(n.code,{children:"shape.lg"})," (12px)."]}),`
`,e.jsxs(n.li,{children:["Text color updated from ",e.jsx(n.code,{children:"system.color.fg.default"})," to ",e.jsx(n.code,{children:"system.color.fg.strong"}),"."]}),`
`,e.jsxs(n.li,{children:["Icon size updated to ",e.jsx(n.code,{children:"md"})," (20px / 1.25rem)."]}),`
`]}),`
`,e.jsx(n.h5,{id:"menu-icon-sizing",children:"Menu icon sizing"}),`
`,e.jsxs(n.p,{children:["Menu icons are now smaller to align with Sana Canvas specs. In v15, ",e.jsx(n.code,{children:"Menu.Item.Icon"}),` did not set a
`,e.jsx(n.code,{children:"size"})," prop and fell back to the ",e.jsx(n.code,{children:"SystemIcon"})," default of ",e.jsx(n.code,{children:"lg"}),` (24px / 1.5rem). In v16, all icons
rendered through `,e.jsx(n.code,{children:"Menu.Item.Icon"})," and ",e.jsx(n.code,{children:"Menu.Option.Icon"})," use ",e.jsx(n.code,{children:'size="md"'})," (20px / 1.25rem)."]}),`
`,e.jsxs(n.p,{children:["The selected checkmark in ",e.jsx(n.code,{children:"Menu.Option"})," now uses ",e.jsx(n.code,{children:"checkIcon"})," at ",e.jsx(n.code,{children:'size="md"'}),` instead of
`,e.jsx(n.code,{children:"checkSmallIcon"})," at the previous 24px default. The nested submenu chevron in ",e.jsx(n.code,{children:"Submenu.TargetItem"}),`
also changed from `,e.jsx(n.code,{children:"chevronRightSmallIcon"})," to ",e.jsx(n.code,{children:"chevronRightIcon"})," at ",e.jsx(n.code,{children:'size="md"'}),"."]}),`
`,e.jsxs(n.p,{children:["Passing a custom ",e.jsx(n.code,{children:"size"})," to ",e.jsx(n.code,{children:"Menu.Item.Icon"})," or ",e.jsx(n.code,{children:"Menu.Option.Icon"}),` will still override the default.
`,e.jsx(n.code,{children:"Select"})," and ",e.jsx(n.code,{children:"Combobox"})," menus inherit the ",e.jsx(n.code,{children:"Menu.Option"}),` checkmark change. If you are rendering
custom chevron or checkmark icons inside of menu items, update them to `,e.jsx(n.code,{children:'size="md"'}),` and swap
`,e.jsx(n.code,{children:"*SmallIcon"})," assets for their standard equivalents where appropriate."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Menu.Group.Heading"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Padding updated to use ",e.jsx(n.code,{children:"paddingBlock: padding.xs"})," with ",e.jsx(n.code,{children:"paddingInline: padding.sm"})," / ",e.jsx(n.code,{children:"padding.md"}),"."]}),`
`]}),`
`,e.jsx(n.h5,{id:"state-style-updates",children:"State Style Updates"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu.Item"})," and ",e.jsx(n.code,{children:"Menu.Option"})," share the same underlying item styles via ",e.jsx(n.code,{children:"menuItemStencil"}),`. For
guidance on when to use `,e.jsx(n.code,{children:"Menu.Item"})," vs ",e.jsx(n.code,{children:"Menu.Option"}),`, including accessibility requirements for
selectable menus, see the
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-menu--docs#accessibility",rel:"nofollow",children:"Menu accessibility documentation"}),"."]}),`
`,e.jsx(n.h6,{id:"menuitem",children:"Menu.Item"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"State"}),e.jsx(n.th,{children:"v15"}),e.jsx(n.th,{children:"v16"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Active/pressed"}),e.jsx(n.td,{children:"Not styled"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"surface.overlay.pressed"})," background"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Focus"}),e.jsxs(n.td,{children:["Solid blue fill (",e.jsx(n.code,{children:"brand.accent.primary"}),") and white text"]}),e.jsxs(n.td,{children:["Inset outline using ",e.jsx(n.code,{children:"brand.border.primary"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Disabled + Focus (",e.jsx(n.code,{children:'aria-disabled="true"'}),")"]}),e.jsx(n.td,{children:"Solid blue fill and white text with disabled opacity (dims focus style)"}),e.jsxs(n.td,{children:["Light blue background and blue text (",e.jsx(n.code,{children:"brand.surface.selected"})," / ",e.jsx(n.code,{children:"brand.fg.selected"}),") with disabled opacity (dims focus indicator)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Expanded submenu parent + Focus"}),e.jsx(n.td,{children:"Same blue fill and white text focus style as other focused items"}),e.jsxs(n.td,{children:["Focus ring removed; ancestor-trail styling shown instead (",e.jsx(n.code,{children:"Submenu.TargetItem"}),")"]})]})]})]}),`
`,e.jsx(n.h6,{id:"menuoption",children:"Menu.Option"}),`
`,e.jsxs(n.p,{children:["Used in ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"Combobox"}),`, and other listbox menus. Selected states apply when
`,e.jsx(n.code,{children:'aria-selected="true"'}),"."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"State"}),e.jsx(n.th,{children:"v15"}),e.jsx(n.th,{children:"v16"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Active/pressed"}),e.jsx(n.td,{children:"Not styled"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"surface.overlay.pressed"})," background"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Focus"}),e.jsxs(n.td,{children:["Solid blue fill (",e.jsx(n.code,{children:"brand.accent.primary"}),") and white text"]}),e.jsxs(n.td,{children:["Inset outline using ",e.jsx(n.code,{children:"brand.border.primary"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Selected (",e.jsx(n.code,{children:'aria-selected="true"'}),")"]}),e.jsxs(n.td,{children:["Solid blue fill and white text (",e.jsx(n.code,{children:"brand.surface.primary.strong"})," / ",e.jsx(n.code,{children:"brand.fg.primary.strong"}),")"]}),e.jsxs(n.td,{children:["Light blue background and blue text (",e.jsx(n.code,{children:"brand.surface.selected"})," / ",e.jsx(n.code,{children:"brand.fg.selected"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Selected + Focus"}),e.jsx(n.td,{children:"Solid blue fill and white text"}),e.jsx(n.td,{children:"Inset outline with selected background preserved"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Disabled + Focus (",e.jsx(n.code,{children:'aria-disabled="true"'}),")"]}),e.jsx(n.td,{children:"Solid blue fill and white text with disabled opacity (dims focus style)"}),e.jsxs(n.td,{children:["Light blue background and blue text (",e.jsx(n.code,{children:"brand.surface.selected"})," / ",e.jsx(n.code,{children:"brand.fg.selected"}),") with disabled opacity (dims focus indicator)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Disabled + Selected"}),e.jsx(n.td,{children:"Solid blue fill and white text with disabled opacity"}),e.jsxs(n.td,{children:["Light blue background and blue text (",e.jsx(n.code,{children:"brand.surface.selected"})," / ",e.jsx(n.code,{children:"brand.fg.selected"}),") with disabled opacity"]})]})]})]}),`
`,e.jsx(n.h4,{id:"modal",children:"Modal"}),`
`,e.jsx(n.h5,{id:"visual-updates-22",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Modal.Card"})," box-shadow updated from ",e.jsx(n.code,{children:"system.depth[5]"})," to ",e.jsx(n.code,{children:"system.depth[6]"}),"."]}),`
`]}),`
`,e.jsx(n.h4,{id:"popup",children:"Popup"}),`
`,e.jsx(n.h5,{id:"visual-updates-23",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Popup.Card"})," box-shadow updated from ",e.jsx(n.code,{children:"system.depth[3]"})," to ",e.jsx(n.code,{children:"system.depth[4]"}),"."]}),`
`]}),`
`,e.jsx(n.h4,{id:"toast",children:"Toast"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4053",rel:"nofollow",children:"#4053"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-24",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Padding is now applied to the ",e.jsx(n.code,{children:"Toast"}),` container itself instead of being distributed across
`,e.jsx(n.code,{children:"Toast.Body"})," and ",e.jsx(n.code,{children:"Toast.Icon"}),"."]}),`
`,e.jsxs(n.li,{children:["Gap between the icon, body, and close icon is now ",e.jsx(n.code,{children:"base.size150"})," (12px)."]}),`
`,e.jsxs(n.li,{children:["Shape uses ",e.jsx(n.code,{children:"system.shape.xl"}),"."]}),`
`,e.jsxs(n.li,{children:["Box-shadow updated from ",e.jsx(n.code,{children:"system.depth[3]"})," to ",e.jsx(n.code,{children:"system.depth[5]"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Toast.Body"})," no longer has a gap between text and link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Toast.CloseIcon"}),` is set to have absolute positioning and aligned with the top-right corner (in
LTR).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Toast.CloseIcon"})," was changed to be ",e.jsx(n.code,{children:"extraSmall"})," tertiary button."]}),`
`]}),`
`,e.jsx(n.h4,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4053",rel:"nofollow",children:"#4053"})]}),`
`,e.jsx(n.h5,{id:"visual-updates-25",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The default tooltip has been restyled from a dark surface to a light surface."}),`
`,e.jsxs(n.li,{children:["A visible border (",e.jsx(n.code,{children:"system.color.border.default"}),`) is now applied to the container, replacing the
previous transparent outline.`]}),`
`,e.jsxs(n.li,{children:[`Tooltip boundaries remain visible in Windows High Contrast mode: when High Contrast is detected,
Tooltip uses a solid outline (`,e.jsx(n.code,{children:"outline: solid 1px CanvasText"}),") to ensure clear visibility."]}),`
`,e.jsxs(n.li,{children:["Shape is now fully rounded using ",e.jsx(n.code,{children:"system.shape.full"}),"."]}),`
`,e.jsxs(n.li,{children:["Box-shadow updated from ",e.jsx(n.code,{children:"system.depth[2]"})," to ",e.jsx(n.code,{children:"system.depth[3]"}),"."]}),`
`,e.jsxs(n.li,{children:["Type level is now ",e.jsx(n.code,{children:"subtext.lg"})," (previously ",e.jsx(n.code,{children:"subtext.md"}),")."]}),`
`,e.jsx(n.li,{children:"Padding and spacing have been adjusted to accommodate the new styling."}),`
`]}),`
`,e.jsx(n.h3,{id:"navigation-components",children:"Navigation Components"}),`
`,e.jsx(n.h4,{id:"hyperlink",children:"Hyperlink"}),`
`,e.jsx(n.h5,{id:"visual-updates-26",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Default link color uses new link tokens (",e.jsx(n.code,{children:"system.color.fg.link.default"})," / ",e.jsx(n.code,{children:".hover"}),`). Hover and
active text is now the darker link-hover blue.`]}),`
`,e.jsxs(n.li,{children:["Hover and active backgrounds use surface overlay tokens instead of ",e.jsx(n.code,{children:"surface.alt"}),"."]}),`
`]}),`
`,e.jsxs(n.h5,{id:"new-secondary-variant-and-linktype-prop",children:["New Secondary Variant and ",e.jsx(n.code,{children:"linkType"})," Prop"]}),`
`,e.jsxs(n.p,{children:['A new "secondary" variant and ',e.jsx(n.code,{children:"linkType"})," prop have been added to ",e.jsx(n.code,{children:"Hyperlink"}),` and
`,e.jsx(n.code,{children:"ExternalHyperlink"}),". Color and underline are now controlled by separate props:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Need"}),e.jsx(n.th,{children:"API"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Blue, underlined (default)"}),e.jsx(n.td,{children:e.jsx(n.em,{children:"(no props)"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Blue, no underline"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'linkType="standalone"'})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Inverse, underlined"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'variant="inverse"'})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Inverse, no underline"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'variant="inverse"'})," ",e.jsx(n.code,{children:'linkType="standalone"'})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Dark gray, underlined"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'variant="secondary"'})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Dark gray, no underline"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'variant="secondary"'})," ",e.jsx(n.code,{children:'linkType="standalone"'})]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"variant"})," is now either 'inverse' or 'secondary'. Underline is controlled by ",e.jsx(n.code,{children:"linkType"}),` which is
either 'inline' or 'standalone', defaulting to 'inline'. The compound variants `,e.jsx(n.code,{children:"standalone"}),` and
`,e.jsx(n.code,{children:"standaloneInverse"})," are ",e.jsx(n.strong,{children:"removed"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';

<Hyperlink variant="secondary" href="#secondary-hyperlink">
  Secondary Hyperlink
</Hyperlink>
<Hyperlink linkType="standalone" href="#standalone-hyperlink">
  Standalone Hyperlink
</Hyperlink>
<ExternalHyperlink
  variant="secondary"
  linkType="standalone"
  href="#secondary-standalone-external-hyperlink"
  iconLabel="Opens new window"
>
  Secondary Standalone External Hyperlink
</ExternalHyperlink>
`})}),`
`,e.jsx(n.h6,{id:"breaking-change-migration",children:"Breaking Change Migration"}),`
`,e.jsxs(n.p,{children:["Run the Canvas Kit v16 codemod (",e.jsx(n.code,{children:"updateHyperlinkProps"}),") to migrate automatically:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Before"}),e.jsx(n.th,{children:"After"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'variant="standalone"'})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'linkType="standalone"'})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'variant="standaloneInverse"'})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'variant="inverse"'})," ",e.jsx(n.code,{children:'linkType="standalone"'})]})]})]})]}),`
`,e.jsx(n.h4,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx(n.h5,{id:"visual-updates-27",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Trail links (",e.jsx(n.code,{children:"Breadcrumbs.Link"}),") use Hyperlink ",e.jsx(n.code,{children:'variant="secondary"'})," and ",e.jsx(n.code,{children:'linkType="standalone"'}),`.
Trail text uses `,e.jsx(n.code,{children:"system.color.fg.default"}),`; hover and active states use surface overlay tokens with
underline on hover.`]}),`
`,e.jsxs(n.li,{children:["The current item (",e.jsx(n.code,{children:"Breadcrumbs.CurrentItem"}),") uses ",e.jsx(n.code,{children:"system.color.fg.muted.default"}),"."]}),`
`,e.jsxs(n.li,{children:[`Overflow and separator chevrons use muted/strong foreground colors with
`,e.jsx(n.code,{children:"component.legacy.systemIcon.size.md"}),"."]}),`
`]}),`
`,e.jsx(n.h4,{id:"pagination",children:"Pagination"}),`
`,e.jsx(n.h5,{id:"visual-updates-28",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Page buttons use overlay hover/pressed backgrounds and a focus ring (aligned with the
TertiaryButton pattern). The current page uses `,e.jsx(n.code,{children:"system.color.brand.accent.primary"}),` with inverse
label text.`]}),`
`,e.jsxs(n.li,{children:[`Control chevrons (previous/next and jump controls) are sized to 16px via
`,e.jsx(n.code,{children:"component.legacy.systemIcon.size.xs"}),"."]}),`
`,e.jsxs(n.li,{children:["GoTo label uses ",e.jsx(n.code,{children:'size="large"'}),` (14px). GoTo input text is centered; border radius inherits from
TextInput `,e.jsx(n.code,{children:"shape.lg"})," (12px)."]}),`
`,e.jsxs(n.li,{children:["GoToForm spacing uses ",e.jsx(n.code,{children:"marginInlineStart: gap.xs"})," alongside Controls ",e.jsx(n.code,{children:"gap.xs"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"segmented-control",children:"Segmented Control"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/4048",rel:"nofollow",children:"#4048"})]}),`
`,e.jsx(n.h4,{id:"visual-updates-29",children:"Visual Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Container background changed from ",e.jsx(n.code,{children:"surface.alt.strong"})," to ",e.jsx(n.code,{children:"surface.alt.default"}),` (a lighter
background color).`]}),`
`,e.jsxs(n.li,{children:["Border radius changed to ",e.jsx(n.code,{children:"shape.full"})," (full rounded corners) on the container."]}),`
`,e.jsxs(n.li,{children:["Grid gap reduced from ",e.jsx(n.code,{children:"gap.sm"})," (8px) to ",e.jsx(n.code,{children:"gap.xs"})," (4px)."]}),`
`,e.jsx(n.li,{children:"Selected/pressed item now uses boxShadow: system.depth[2] instead of a visible border."}),`
`,e.jsx(n.li,{children:"Font weight changed from bold to medium (base and small sizes);"}),`
`,e.jsx(n.li,{children:"Medium size now uses semi-bold font weight."}),`
`,e.jsx(n.li,{children:"Size adjustments: large height shrunk to size.sm (32px) (was size.md (40px));"}),`
`,e.jsx(n.li,{children:"Medium size is now 28px in height (was 32px)."}),`
`,e.jsxs(n.li,{children:["Hover and pressed states now use ",e.jsx(n.code,{children:"surface.overlay.hover.default"}),` and
`,e.jsx(n.code,{children:"surface.overlay.pressed.default"})," respectively for the item."]}),`
`,e.jsxs(n.li,{children:["Container padding changed to ",e.jsx(n.code,{children:"padding.md"})," (16px) including for mobile devices."]}),`
`,e.jsxs(n.li,{children:["On mobile devices, the container padding remains ",e.jsx(n.code,{children:"padding.md"})," (16px)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"new-utilities",children:"New Utilities"}),`
`,e.jsx(n.h3,{id:"cornershapestencil",children:"cornerShapeStencil"}),`
`,e.jsxs(n.p,{children:["We've added a new stencil called ",e.jsx(n.code,{children:"cornerShapeStencil"})," to ",e.jsx(n.code,{children:"@workday/canvas-kit-react/common"}),`. It
applies the CSS `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/corner-shape",rel:"nofollow",children:e.jsx(n.code,{children:"corner-shape"})}),`
property as a progressive enhancement for components using border radius that aren't circular.
Browsers that don't support `,e.jsx(n.code,{children:"corner-shape"})," fall back to ",e.jsx(n.code,{children:"border-radius"}),` alone, as border-radius is
declared first in the cascade.`]}),`
`,e.jsxs(n.p,{children:["The stencil exposes a ",e.jsx(n.code,{children:"shape"}),` variable for setting the border radius. Extend it in your own stencils
to get consistent rounded corners:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {cornerShapeStencil} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const myStencil = createStencil({
  extends: cornerShapeStencil,
  base: {
    [cornerShapeStencil.vars.shape]: system.legacy.shape.xxl,
  },
});
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Card"}),", ",e.jsx(n.code,{children:"Expandable"})," (",e.jsx(n.code,{children:"Expandable.Target"}),"), ",e.jsx(n.code,{children:"Menu"})," (",e.jsx(n.code,{children:"Menu.Card"}),", ",e.jsx(n.code,{children:"Menu.List"}),", ",e.jsx(n.code,{children:"Menu.Item"}),`),
`,e.jsx(n.code,{children:"MultiSelect"}),", and ",e.jsx(n.code,{children:"Table"})," (",e.jsx(n.code,{children:"BaseTable"}),", ",e.jsx(n.code,{children:"Table"}),") extend this stencil for their rounded corners."]}),`
`,e.jsx(n.h2,{id:"fonts",children:"Fonts"}),`
`,e.jsxs(n.p,{children:[`Canvas Kit does not bundle fonts. In v16, which font you load depends on whether you opt into the
`,e.jsx(n.a,{href:"#sana-canvas-theme",children:"Sana Canvas theme"}),"."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Theme"}),e.jsx(n.th,{children:"Typeface"}),e.jsx(n.th,{children:"Package"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Sana Canvas (",e.jsx(n.code,{children:'data-theme="sana-canvas"'}),")"]}),e.jsx(n.td,{children:"Sana Sans (+ IBM Plex Mono)"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"@workday/canvas-kit-react/fonts"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Classic Canvas (default)"}),e.jsx(n.td,{children:"Roboto (+ Roboto Mono)"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"@workday/canvas-kit-react-fonts"})})]})]})]}),`
`,e.jsx(n.h3,{id:"sana-canvas-theme--switch-to-sana-sans",children:"Sana Canvas Theme — Switch to Sana Sans"}),`
`,e.jsxs(n.p,{children:["When you opt into Sana, ",e.jsx(n.code,{children:"--cnvs-sys-font-family-default"})," (",e.jsx(n.code,{children:"system.fontFamily.default"}),`) points at
`,e.jsx(n.code,{children:"'Sana Sans VF'"}),". Load the matching ",e.jsx(n.code,{children:"@font-face"}),` rules from the new fonts module (requires
`,e.jsx(n.code,{children:"@workday/canvas-tokens-web"})," ",e.jsx(n.code,{children:"4.4.0"})," or later):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {fonts} from '@workday/canvas-kit-react/fonts';
import {injectGlobal} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

injectGlobal({
  ...fonts,
  'html, body': {
    fontFamily: system.fontFamily.default,
    margin: 0,
    minHeight: '100vh',
  },
});
`})}),`
`,e.jsxs(n.p,{children:["If your environment already provides Sana Sans, you can skip injecting ",e.jsx(n.code,{children:"@font-face"}),` and keep using
`,e.jsx(n.code,{children:"system.fontFamily.default"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Prefer ",e.jsx(n.code,{children:"@workday/canvas-kit-react/fonts"})," over ",e.jsx(n.code,{children:"@workday/canvas-kit-react-fonts"}),` when the
Sana Canvas theme is enabled. The older package still loads Roboto and will not match the Sana
font-family token.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"classic-canvas--keep-roboto",children:"Classic Canvas — Keep Roboto"}),`
`,e.jsxs(n.p,{children:["If you are ",e.jsx(n.strong,{children:"not"})," setting ",e.jsx(n.code,{children:'data-theme="sana-canvas"'}),`, continue using
`,e.jsx(n.code,{children:"@workday/canvas-kit-react-fonts"})," as before:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {fonts} from '@workday/canvas-kit-react-fonts';
import {injectGlobal} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

injectGlobal({
  ...fonts,
  'html, body': {
    fontFamily: system.fontFamily.default,
  },
});
`})}),`
`,e.jsxs(n.p,{children:[`For full installation details, variable-font notes, and monospace coverage, see the
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-fonts--docs",rel:"nofollow",children:"Fonts guide"}),"."]}),`
`,e.jsx(n.h2,{id:"deprecations",children:"Deprecations"}),`
`,e.jsxs(n.p,{children:["We add the ",e.jsx(n.a,{href:"https://jsdoc.app/tags-deprecated.html",rel:"nofollow",children:"@deprecated"}),` JSDoc tag to code we plan to remove
in a future major release. This signals consumers to migrate to a more stable alternative before the
deprecated code is removed.`]}),`
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
entirely.`})]})}function f(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{f as default};
