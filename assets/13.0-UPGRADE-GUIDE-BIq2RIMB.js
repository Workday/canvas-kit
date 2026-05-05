import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as o}from"./index-BSRpa7hw.js";import"./index-IfJi-UCQ.js";import"./iframe-8Z9hyj8f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function s(r){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Guides/Upgrade Guides/v13.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-130-upgrade-guide",children:"Canvas Kit 13.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains an overview of the changes in Canvas Kit v13. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions. For common upgrade issues, please see the `,e.jsx(n.a,{href:"#troubleshooting",children:"Troubleshooting"}),` section
at the end of this guide.`]}),`
`,e.jsx(n.h2,{id:"why-you-should-upgrade",children:"Why You Should Upgrade"}),`
`,e.jsx(n.p,{children:"We're really excited about the updates in Canvas Kit v13! In this release, we:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"refactored components to use our Canvas tokens and styling API"}),`
`,e.jsx(n.li,{children:"made several accessibilty improvements"}),`
`,e.jsx(n.li,{children:"updated our brand logos"}),`
`,e.jsx(n.li,{children:"improved our infrastructure"}),`
`]}),`
`,e.jsx(n.h3,{id:"refactored-components-to-use-our-styling-api",children:"Refactored Components to Use Our Styling API"}),`
`,e.jsx(n.p,{children:`We've continued refactoring our components to use our new styling API and new Canvas tokens. This
allows us to provide a more consistent styling experience across our components.`}),`
`,e.jsx(n.h3,{id:"updated-brand-logos",children:"Updated Brand Logos"}),`
`,e.jsx(n.p,{children:`As part of Workday's brand refresh, we've updated our Workday logos to align with our new brand
design.`}),`
`,e.jsx(n.h3,{id:"improved-support-for-es-modules",children:"Improved Support for ES Modules"}),`
`,e.jsxs(n.p,{children:["We've updated the ",e.jsx(n.code,{children:"jsx"})," flag in our ",e.jsx(n.code,{children:"tsconfig"})," to ",e.jsx(n.code,{children:"react-jsx"}),` to provide better support for newer
technologies including `,e.jsx(n.code,{children:"Vite"}),". As part of this change, we've also updated our ",e.jsx(n.code,{children:"react"}),` peer
dependencies to a minimum version of `,e.jsx(n.code,{children:"17.0.0"}),"."]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#codemod",children:"Codemod"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#instructions",children:"Instructions"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-updates",children:"Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#styling-api-and-canvas-tokens-",children:"Styling API and CSS Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#avatar-",children:"Avatar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#expandable-",children:"Expandable"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#external-hyperlink-",children:"External Hyperlink"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-field-and-form-field-group-",children:"Form Field and Form Field Group"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#pill-preview-",children:"Pill (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#side-panel-preview-",children:"SidePanel (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tabs-",children:"Tabs"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#brand-refresh",children:"Brand Refresh"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#logo-updates-",children:"Logo Updates"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#infrastructure",children:"Infrastructure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#supporting-react-jsx-",children:"Supporting react-jsx"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#troubleshooting",children:"Troubleshooting"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#contributors",children:"Contributors"})}),`
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
automatically update your code to work with most of the breaking changes in v13. `,e.jsx(n.strong,{children:`Breaking changes
handled by the codemod are marked with 🤖 in the Upgrade Guide.`})]}),`
`,e.jsx(n.h3,{id:"instructions",children:"Instructions"}),`
`,e.jsxs(n.p,{children:["The easiest way to run our codemod is to use ",e.jsx(n.code,{children:"npx"})," in your terminal."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod v13 [path]
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
yarn canvas-kit-codemod v13 [path]
yarn remove @workday/canvas-kit-codemod
`})}),`
`,e.jsxs(n.p,{children:[`Having trouble running our codemods? View our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-codemods--docs",rel:"nofollow",children:"docs"})," for more information!"]}),`
`,e.jsx(n.h2,{id:"component-updates",children:"Component Updates"}),`
`,e.jsx(n.h3,{id:"styling-api-and-canvas-tokens-",children:"Styling API and Canvas Tokens 💅"}),`
`,e.jsxs(n.p,{children:[`Several components have been refactored to use our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Canvas tokens"}),` and
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-basics--docs#createstyles-api",rel:"nofollow",children:"styling API"}),`.
The React interface `,e.jsx(n.strong,{children:"has not changed"}),", but Canvas Tokens are now used for dynamic properties."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," These components also support our ",e.jsx(n.code,{children:"cs"}),` prop for styling. Learn more about styling with
`,e.jsx(n.code,{children:"cs"}),` in our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-basics--docs#cs-prop",rel:"nofollow",children:"documentation"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"The following components have been updated:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ActionBar"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3205",rel:"nofollow",children:"#3205"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Banner"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3210",rel:"nofollow",children:"#3210"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Expandable"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3128",rel:"nofollow",children:"#3128"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ExternalHyperlink"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3101",rel:"nofollow",children:"#3101"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"LoadingSparkles"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3120",rel:"nofollow",children:"#3120"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Menu"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3114",rel:"nofollow",children:"#3114"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3104",rel:"nofollow",children:"#3140"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Select"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3240",rel:"nofollow",children:"#3240"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SidePanel (Preview)"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3123",rel:"nofollow",children:"#3123"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Skeleton"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3088",rel:"nofollow",children:"#3088"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabs"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3119",rel:"nofollow",children:"#3119"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tooltip"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3164",rel:"nofollow",children:"#3164"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"avatar-",children:"Avatar 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3231",rel:"nofollow",children:"#3231"})]}),`
`,e.jsxs(n.p,{children:["The following change has been made to ",e.jsx(n.code,{children:"Avatar"})," to ensure proper accessibility."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"altText"})," prop no longer has a default value of ",e.jsx(n.code,{children:'"Avatar"'}),` for better internalization. This
default phrase caused some to accidentally omit translations which caused translation issues.`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," This change also impacts ",e.jsx(n.code,{children:"Pill.Avatar"})," and ",e.jsx(n.code,{children:"Expandable.Avatar"}),`. You must provide a value
to `,e.jsx(n.code,{children:"altText"}),` to ensure proper accessibility. Our examples have been updated to reflect this
change.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v12"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Avatar component always had a default altText of "Avatar"
<Avatar as="div" />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:'// You must provide alt text to the `altText` prop. Please choose a apt description based on your `Avatar`\'s usage.\n<Avatar altText="User profile avatar" as="div" />\n'})}),`
`,e.jsx(n.h3,{id:"expandable-️",children:"Expandable ⚡️"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3217",rel:"nofollow",children:"#3217"})]}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"Expandable"})," from ",e.jsx(n.a,{href:"#labs",children:"Labs"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v12"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Expandable} from '@workday/canvas-kit-react/expandable';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"🤖 The codemod will handle the change of imports as shown above."}),`
`]}),`
`,e.jsx(n.h3,{id:"external-hyperlink-",children:"External Hyperlink 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3101",rel:"nofollow",children:"#3101"})]}),`
`,e.jsxs(n.p,{children:["The following change has been made to ",e.jsx(n.code,{children:"ExternalHyperlink"})," to ensure proper accessibility."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"iconLabel"})," prop no longer has a default value of ",e.jsx(n.code,{children:'"Opens link in new window"'}),`. This default
phrase caused some to accidentally omit translations which caused translation issues.`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," While the prop is not required, you ",e.jsx(n.em,{children:"must"})," provide an ",e.jsx(n.code,{children:"iconLabel"}),` for
`,e.jsx(n.code,{children:"<ExternalHyperlink />"}),` to ensure proper accessibility. Our examples have been updated to reflect
this change.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v12"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ExternalHyperlink href="https://workday.com">External Hyperlink</ExternalHyperlink>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ExternalHyperlink href="https://workday.com" iconLabel="Navigate to Workday">
  External Hyperlink
</ExternalHyperlink>
`})}),`
`,e.jsx(n.h3,{id:"form-field-and-form-field-group-",children:"Form Field and Form Field Group 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3254",rel:"nofollow",children:"#3254"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"orientation"})," prop on the ",e.jsx(n.code,{children:"FormField"})," component no longer accepts the deprecrated ",e.jsx(n.code,{children:"horizontal"}),`
value. You must update your code to use `,e.jsx(n.code,{children:"horizontalStart"}),`. Our v12 release included a codemod to
update `,e.jsx(n.code,{children:"horizontal"})," to ",e.jsx(n.code,{children:"horizontalStart"}),`, but we kept the prop backwards-compatible. In v13, we
dropped `,e.jsx(n.code,{children:"horizontal"})," as a value, and it now requires an update."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v12"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FormField orientation="horizontal">
	<FormField.Label>Label</FormField.Label>
	<FormField.Field>
		<FormField.Input as={TextInput} />
	<FormField.Field>
</FormField>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FormField orientation="horizontalStart">
	<FormField.Label>Label</FormField.Label>
	<FormField.Field>
		<FormField.Input as={TextInput} />
	<FormField.Field>
</FormField>
`})}),`
`,e.jsx(n.h3,{id:"pill-preview-",children:"Pill (Preview) 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3104",rel:"nofollow",children:"#3104"})]}),`
`,e.jsxs(n.p,{children:["A few changes have been made to ",e.jsx(n.code,{children:"Pill"})," to ensure proper accessibility and styling."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The border color on hover has been updated from ",e.jsx(n.code,{children:"licorice400"}),` to
`,e.jsx(n.code,{children:"system.color.border.input.strong"})," (",e.jsx(n.code,{children:"licorice500"}),") to match our design specs."]}),`
`,e.jsxs(n.li,{children:[`We've removed extra elements and now use
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox",rel:"nofollow",children:"flex box"}),`
to ensure only the label receives text overflow styles when needed.`]}),`
`,e.jsxs(n.li,{children:["Setting ",e.jsx(n.code,{children:"maxWidth"})," on the parent ",e.jsx(n.code,{children:"Pill"}),` component now styles the child elements correctly. Before
v13, `,e.jsx(n.code,{children:"maxWidth"})," wasn't calculating the width of all its elements and wasn't a true pixel value."]}),`
`]}),`
`,e.jsx(n.h4,{id:"breaking-changes",children:"Breaking Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxWidth"})," has been removed from the ",e.jsx(n.code,{children:"usePillModel"}),`. This config was used to style subcomponents.
With the refactor to use `,e.jsx(n.code,{children:"data-part"}),` and
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-basics--docs#create-stencil",rel:"nofollow",children:"stencils"}),`,
it is no longer needed on the model. You can still apply `,e.jsx(n.code,{children:"maxWidth"})," on the parent ",e.jsx(n.code,{children:"Pill"}),` component
and the child elements will be styled accordingly.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.Icon"}),"'s no longer has a default value of ",e.jsx(n.code,{children:'"add"'})," for the ",e.jsx(n.code,{children:"aria-label"}),". You ",e.jsx(n.em,{children:"must"}),` provide an
`,e.jsx(n.code,{children:"aria-label"})," for ",e.jsx(n.code,{children:"Pill.Icon"}),` to ensure proper accessibility. Our examples have been updated to
reflect this change.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.IconButton"})," no longer has a default ",e.jsx(n.code,{children:'aria-label="remove"'}),". You ",e.jsx(n.em,{children:"must"}),` provide an
`,e.jsx(n.code,{children:"aria-label"})," for ",e.jsx(n.code,{children:"Pill.IconButton"}),` to ensure proper accessibility. Our examples have been updated
to reflect this change.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill.Label"})," is a ",e.jsx(n.em,{children:"required"})," element when using other subcomponents such as ",e.jsx(n.code,{children:"Pill.Icon"}),` to ensure
that the label truncates correctly.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v12"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Pill, usePillModel} from '@workday/canvas-kit-preview-react/pill';

const model = usePillModel({
  maxWidth: 200,
});

<Pill model={model}>
  <Pill.Icon />
  Shoes
</Pill>;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Pill} from '@workday/canvas-kit-preview-react/pill';

<Pill maxWidth={200}>
  <Pill.Icon aria-label='Add Shoes' />
  <Pill.Label>Shoes</Pill.Label>
</Pill>

<Pill maxWidth={200}>
  <Pill.Label>Shirts</Pill.Label>
  <Pill.IconButton aria-label='Remove Shirts' />
</Pill>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["🤖 The codemod will handle the change adding ",e.jsx(n.code,{children:"Pill.Label"})," if ",e.jsx(n.code,{children:"Pill.Icon"})," or ",e.jsx(n.code,{children:"Pill.IconButton"}),` is
being used.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"side-panel-preview-",children:"Side Panel (Preview) 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3258",rel:"nofollow",children:"#3258"})]}),`
`,e.jsxs(n.p,{children:[`When we supported IE 11 we needed to use
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations",rel:"nofollow",children:"CSS Animation"}),`
to support animation events. Since we dropped support for IE11, we can now use
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",rel:"nofollow",children:"CSS Transitions"}),`
to animate the `,e.jsx(n.code,{children:"width"})," of the ",e.jsx(n.code,{children:"SidePanel"}),` when it's expanding or collapsing. As part of this change,
we also removed the `,e.jsx(n.code,{children:"onAnimationStart"}),` prop. Since moving to transitions, React doesn't support
`,e.jsx(n.code,{children:"onTransitionStart"}),", therefore the prop is no longer needed."]}),`
`,e.jsx(n.h3,{id:"tabs-",children:"Tabs 💅"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3119",rel:"nofollow",children:"#3119"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"disabled"})," icon color has been updated to use ",e.jsx(n.code,{children:"system.color.fg.disabled"}),`. This darker icon
color provides better contrast.`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," There should be no developer impact, and the visual changes are safe to accept."]}),`
`]}),`
`,e.jsx(n.h2,{id:"brand-refresh-️",children:"Brand Refresh ⚡️"}),`
`,e.jsx(n.p,{children:"We've also updated our logos to align with Workday's brand refresh."}),`
`,e.jsx(n.h3,{id:"logo-updates",children:"Logo Updates"}),`
`,e.jsx(n.p,{children:`We've removed the outdated Dub logos in Main and promoted the new logos that were previously in our
Preview package to Main as part of the brand refresh.`}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Old Logo Name"}),e.jsx(n.th,{children:"New Logo Name"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dubLogoBlue"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"dubLogoPrimary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dubLogoWhite"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"dubLogoReversed"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"wdayLogoBlue"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"wdayLogoPrimary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"wdayLogoWhite"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"wdayLogoReversed"})})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v12"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Importing from Main common
import {dubLogoBlue} from "@workday/canvas-kit-react/common"

<div dangerouslySetInnerHTML={__html: dubLogoBlue} />

// Importing from Preview common
import {dubLogoPrimary} from "@workday/canvas-kit-preview-react/common"

<div dangerouslySetInnerHTML={__html: dubLogoPrimary} />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// New logos have been promoted to Main common AND renamed
import {dubLogoPrimary} from "@workday/canvas-kit-preview-react/common"

<div dangerouslySetInnerHTML={__html: dubLogoPrimary} />
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"🤖 The codemod will handle the renaming all the imports and updating the import path."}),`
`]}),`
`,e.jsx(n.h2,{id:"infrastructure",children:"Infrastructure"}),`
`,e.jsx(n.p,{children:"We've also made some updates to our dependencies and infrastructure."}),`
`,e.jsxs(n.h3,{id:"supporting-react-jsx-",children:["Supporting ",e.jsx(n.code,{children:"react-jsx"})," 🚨"]}),`
`,e.jsxs(n.p,{children:["We've updated the ",e.jsx(n.code,{children:"jsx"})," flag in our ",e.jsx(n.code,{children:"tsconfig"})," to ",e.jsx(n.code,{children:"react-jsx"}),`. As part of this change, we've also
updated our peer dependencies for our packages to a minimum version of `,e.jsx(n.code,{children:"react@17.0.0"}),`. This change
is to provide support for modern technologies like `,e.jsx(n.code,{children:"vite"})," and ES modules."]}),`
`,e.jsx(n.h4,{id:"breaking-changes-1",children:"Breaking Changes"}),`
`,e.jsxs(n.p,{children:["If you're using ",e.jsx(n.code,{children:"react@16.x.x"}),", you'll need to upgrade to ",e.jsx(n.code,{children:"react@17.x.x"})," to use Canvas Kit v13."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` Because of this update, you may have issues with how your code is transpiles. In that
case, you will likely also need to update the way `,e.jsx(n.code,{children:"jsx"}),` transpiles. To do this you'll need to set
the `,e.jsx(n.code,{children:"runtime"})," config to ",e.jsx(n.code,{children:"automatic"}),` in your Babel config presets. This feature is enabled through
the `,e.jsx(n.code,{children:"@babel/preset-react"}),` preset and handles importing functions which JSX transpiles. Make sure you
have this dev dependency installed before proceeding: `,e.jsx(n.code,{children:"yarn add -D @babel/preset-react"}),`. For more
information on setting an automatic runtime for React, please
`,e.jsx(n.a,{href:"https://babeljs.io/docs/babel-preset-react#react-automatic-runtime",rel:"nofollow",children:"review Babel's documentation"}),"."]}),`
`,e.jsx(n.p,{children:"Here's an example Babel config. Your configuration may vary based on your application setup."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`// babel.config.json
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
`})}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`When upgrading to the latest major version of Canvas Kit, all related Canvas Kit packages should
be updated at the same time:`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"@workday/canvas-kit-react": "^12.5.6"'})," -> ",e.jsx(n.code,{children:'"@workday/canvas-kit-react": "^13.0.0"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"@workday/canvas-kit-styling": "^12.5.6"'})," -> ",e.jsx(n.code,{children:'"@workday/canvas-kit-styling": "^13.0.0"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"@workday/canvas-kit-preview-react": "^12.5.6"'}),` ->
`,e.jsx(n.code,{children:'"@workday/canvas-kit-preview-react": "^13.0.0"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"@workday/canvas-kit-labs-react": "^12.5.6"'})," -> ",e.jsx(n.code,{children:'"@workday/canvas-kit-labs-react": "^13.0.0"'})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Our components rely on the ",e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` package which provides our CSS variables
and ensures the correct styling of our components. Make sure to upgrade to the latest version of
Canvas Tokens Web and install it correctly. For more information,
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"view our docs"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"contributors",children:"Contributors"}),`
`,e.jsx(n.p,{children:"This release was made possible by the following contributors:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/williamjstanton",rel:"nofollow",children:"@williamjstanton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/NehaAhujaa",rel:"nofollow",children:"@NehaAhujaa"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/JaredMaione",rel:"nofollow",children:"@JaredMaione"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/thunguyen19",rel:"nofollow",children:"@thunguyen19"})}),`
`]}),`
`,e.jsx(n.h2,{id:"glossary",children:"Glossary"}),`
`,e.jsx(n.p,{children:"Below is a glossary of common terms we use in this upgrade guide."}),`
`,e.jsx(n.h3,{id:"main",children:"Main"}),`
`,e.jsxs(n.p,{children:["Our Main package of Canvas Kit (",e.jsx(n.code,{children:"@workday/canvas-kit-react"}),`) provides components and utilities that
have undergone a full design and a11y review and is approved for use in product.`]}),`
`,e.jsx(n.p,{children:`Breaking changes to code in Main will only occur during major version updates and will always be
communicated in advance and accompanied by migration strategies.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"preview",children:"Preview"}),`
`,e.jsxs(n.p,{children:["Our Preview package of Canvas Kit (",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),`) provides components and
utilities that have undergone a full design and a11y review and are approved for use in product. But
it may not be up to the high code standards upheld in the `,e.jsx(n.a,{href:"#main",children:"Main"}),` package. Preview is
analagous to code in beta.`]}),`
`,e.jsx(n.p,{children:`Breaking changes are unlikely, but possible, and can be deployed to Preview at any time without
triggering a major version update. Though we will communicate those changes in advance and provide
migration strategies.`}),`
`,e.jsxs(n.p,{children:["Generally speaking, our goal is to eventually promote code from Preview to ",e.jsx(n.a,{href:"#main",children:"Main"}),`.
Occasionally, a component with the same name will exist in both `,e.jsx(n.a,{href:"#main",children:"Main"}),` and Preview (for
example, see Segmented Control which is currently in
`,e.jsx(n.a,{href:"?path=/docs/preview-segmented-control--docs",children:"Preview"}),` and
`,e.jsx(n.a,{href:"https://d2krrudi3mmzzw.cloudfront.net/v8/?path=/docs/components-buttons-segmented-control--basic",rel:"nofollow",children:"Main"}),`).
In these cases, Preview serves as a staging ground for an improved version of the component with a
different API. The component in `,e.jsx(n.a,{href:"#main",children:"Main"})," will eventually be replaced with the one in Preview."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"labs",children:"Labs"}),`
`,e.jsxs(n.p,{children:["Our Labs package of Canvas Kit (",e.jsx(n.code,{children:"@workday/canvas-kit-labs-react"}),`) provides components and utilities
that have `,e.jsx(n.strong,{children:"not"}),` undergone a full design and a11y review. Labs serves as an incubator space for new
and experimental code and is analagous to code in alpha.`]}),`
`,e.jsxs(n.p,{children:[`Breaking changes can be deployed to Labs at any time without triggering a major version update and
may not be subject to the same rigor in communcation and migration strategies reserved for breaking
changes in `,e.jsx(n.a,{href:"#preview",children:"Preview"})," and ",e.jsx(n.a,{href:"#main",children:"Main"}),"."]})]})}function m(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{m as default};
