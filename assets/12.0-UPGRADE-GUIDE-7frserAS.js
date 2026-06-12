import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as t}from"./index-3YbjYt95.js";import{ae as d}from"./index-DBq-bKNH.js";import{S as i}from"./StatusIndicator-Cc53Z2IO.js";import"./index-IfJi-UCQ.js";import"./iframe-DXg0DlW2.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./SystemIcon-DhrNLeMh.js";import"./Svg-CETa_jpJ.js";import"./px2rem-C0KbprIx.js";import"./components-Brs-n4xu.js";import"./cs-rfTTo7Bg.js";import"./types-wqmYQQWa.js";import"./Text-Wbz4nGCV.js";import"./mergeStyles-O1wR0AIL.js";import"./Box-BgCI5sd_.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DYfwNNEA.js";import"./grid-B_3TtziO.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return i||s("StatusIndicator",!1),i.Label||s("StatusIndicator.Label",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Guides/Upgrade Guides/v12.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-120-upgrade-guide",children:"Canvas Kit 12.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains an overview of the changes in Canvas Kit v12. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions.`]}),`
`,e.jsx(n.h2,{id:"why-you-should-upgrade",children:"Why You Should Upgrade"}),`
`,e.jsxs(n.p,{children:[`Canvas Kit is transitioning into a
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2265",rel:"nofollow",children:"new way of styling"}),`. Theming and building
an in sync Canvas Kit CSS has been at the top of our minds. We've started using our new
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Canvas Tokens Web"}),`
package to take advantage of
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS variables"}),` and
provide semantic tokens that can translate to theming components.`]}),`
`,e.jsx(n.p,{children:"A note to the reader:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["While we still support our old tokens from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/tokens"}),", ",e.jsx(n.strong,{children:"you must"}),`
install our new tokens from `,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),`. You can find more info in our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"docs"}),"."]}),`
`,e.jsxs(n.li,{children:["If your application lives within another application that already imports the CSS variables, ",e.jsx(n.strong,{children:"you do not need to import these again"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#canvas-tokens",children:"Canvas Tokens"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#codemod",children:"Codemod"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#instructions",children:"Instructions"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#styling-updates",children:"Styling Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#compatibility-mode",children:"Compatibility Mode"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#deprecations",children:"Deprecations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-field-container",children:"Form Field Container"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#removals",children:"Removals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#input-icon-container",children:"Input Icon Container"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#infrastructure",children:"Infrastructure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#typescript",children:"TypeScript"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-updates",children:"Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#styling-api-and-css-tokens",children:"Styling API and CSS Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#avatar",children:"Avatar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#collections",children:"Collections"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#combmbox",children:"Combobox"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#form-field",children:"Form Field"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-field-group",children:"Form Field Group"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-field-field",children:"Form Field Field"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#menu-item",children:"Menu Item"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#multiselect",children:"MultiSelect"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#search-form",children:"Search Form"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#select",children:"Select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-area",children:"Text Area"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-input",children:"Text Input"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#utility-updates",children:"Utility Updates"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#troubleshooting",children:"Troubleshooting"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#glossary",children:"Glossary"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#main",children:"Main"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#preview",children:"Preview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#labs",children:"Labs"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"canvas-tokens",children:"Canvas Tokens"}),`
`,e.jsxs(n.p,{children:[`In v12, all the components listed in this guide have started using our new
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Canvas Tokens Web"}),`.
`,e.jsx(n.strong,{children:"You must"})," add ",e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` to ensure our components are properly styled and the
variables are defined at the root of your application. For more information on installing and using, please reference our tokens
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"docs"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If your application lives within another application that already imports the CSS variables, ",e.jsx(n.strong,{children:"you do not need to import these again"}),". If you need them for local development either add them via a plugin or at the root of the environment, ",e.jsx(n.strong,{children:"do not ship code to production duplicating the imports"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:["We've provided a ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod",rel:"nofollow",children:"codemod"}),` to
automatically update your code to work with most of the breaking changes in v12. `,e.jsx(n.strong,{children:`Breaking changes
handled by the codemod are marked with 🤖 in the Upgrade Guide.`})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:`Note: In v12, we have done some infrastructure updates with moving to Storybook 7, Webpack 5,
TypeScript 5.0 and Cypress 13 . With these updates has come some formatting issues after running
our codemods. We recommend running a formatter to address the format issues that have been
introduced in v12.`})}),`
`]}),`
`,e.jsxs(n.p,{children:[`A codemod is a script that makes programmatic transformations on your codebase by traversing the
`,e.jsx(n.a,{href:"https://www.codeshiftcommunity.com/docs/understanding-asts",rel:"nofollow",children:"AST"}),`, identifying patterns, and making
prescribed changes. This greatly decreases opportunities for error and reduces the number of manual
updates, which allows you to focus on changes that need your attention. `,e.jsx(n.strong,{children:`We highly recommend you
use the codemod for these reasons.`})]}),`
`,e.jsx(n.p,{children:`If you're new to running codemods or if it's been a minute since you've used one, there are a few
things you'll want to keep in mind.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Our codemods are meant to be run sequentially. For example, if you're using v8 of Canvas Kit,
you'll need to run the v9 codemod before you run v10 and so on.`}),`
`,e.jsxs(n.li,{children:["The codemod will update your code to be compatible with the specified version, but it will ",e.jsx(n.strong,{children:"not"}),`
remove outdated dependencies or upgrade dependencies to the latest version. You'll need to upgrade
dependencies on your own.`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We recommend upgrading dependencies before running the codemod."}),`
`,e.jsxs(n.li,{children:["Always review your ",e.jsx(n.code,{children:"package.json"})," files to make sure your dependency versions look correct."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`The codemod will not handle every breaking change in v12. You will likely need to make some manual
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod v12 [path]
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
yarn canvas-kit-codemod v12 [path]
yarn remove @workday/canvas-kit-codemod
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),": The codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` files. You'll need to
manually edit other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),`, etc.). You may need to run your linter
after executing the codemod, as its resulting formatting (spacing, quotes, etc.) may not match
your project conventions.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"styling-updates",children:"Styling Updates"}),`
`,e.jsx(n.h3,{id:"compatibility-mode",children:"Compatibility Mode"}),`
`,e.jsxs(n.p,{children:[`In v12, we have addressed a style merge issue with removing forced compatibility mode. For more
information on this change, please read our
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2893",rel:"nofollow",children:"discussion"}),"."]}),`
`,e.jsx(n.h2,{id:"deprecations",children:"Deprecations"}),`
`,e.jsxs(n.p,{children:["We add the ",e.jsx(n.a,{href:"https://jsdoc.app/tags-deprecated.html",rel:"nofollow",children:"@deprecated"}),` JSDoc tag to code we plan to remove
in a future major release. This signals consumers to migrate to a more stable alternative before the
deprecated code is removed.`]}),`
`,e.jsx(n.h3,{id:"form-field-container",children:"Form Field Container"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2865",rel:"nofollow",children:"#2865"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"FormField.Container"})," in v12. Please use ",e.jsx(n.code,{children:"FormField.Field"}),` or
`,e.jsx(n.code,{children:"FormFieldGroup.Field"}),` for grouped inputs as this ensures proper label alignment and spacing of
inputs and hint text, regardless of the orientation.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v11
<FormField>
  <FormField.Label>Email</FormField.Label>
  <FormField.Container>
    <FormField.Input as={TextInput} />
    <FormField.Hint>You must provide an email</FormField.Hint>
  </FormField.Container>
</FormField>

// v12
<FormField>
  <FormField.Label>Email</FormField.Label>
  <FormField.Field>
    <FormField.Input as={TextInput} />
    <FormField.Hint>You must provide an email</FormField.Hint>
  </FormField.Field>
</FormField>
`})}),`
`,e.jsx(n.h2,{id:"removals",children:"Removals"}),`
`,e.jsx(n.p,{children:`Removals are deletions from our codebase and you can no longer consume this component. We've either
promoted or replaced a component or utility.`}),`
`,e.jsx(n.h3,{id:"input-icon-container",children:"Input Icon Container"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2838",rel:"nofollow",children:"#2838"})]}),`
`,e.jsxs(n.p,{children:["We've removed ",e.jsx(n.code,{children:"InputIconContainer"}),` from Main. Please use
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-inputs-text-input--icons",rel:"nofollow",children:"InputGroup"}),`
from Main instead.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"infrastructure",children:"Infrastructure"}),`
`,e.jsx(n.h3,{id:"typescript",children:"TypeScript"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2908",rel:"nofollow",children:"#2908"})]}),`
`,e.jsxs(n.p,{children:[`We've upgraded to TypeScript 5.0 to make use of
`,e.jsx(n.a,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#const-type-parameters",rel:"nofollow",children:"const Type Parameters"}),`.
You will need to upgrade to TypeScript 5.0+ to avoid any TypeScript syntax errors. TypeScript does
not follow semver, so 5.0 doesn't mean a large breaking change from 4.9. TypeScript doesn't have a
`,e.jsx(n.code,{children:"x.10"})," release, they bump the ",e.jsx(n.code,{children:"x.9"})," to ",e.jsx(n.code,{children:"{x+1}.0"}),"."]}),`
`,e.jsx(n.h2,{id:"component-updates",children:"Component Updates"}),`
`,e.jsx(n.h3,{id:"styling-api-and-css-tokens",children:"Styling API and CSS Tokens"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PRs:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2793",rel:"nofollow",children:"#2793"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2865",rel:"nofollow",children:"#2865"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2881",rel:"nofollow",children:"#2881"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2825",rel:"nofollow",children:"#2825"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2795",rel:"nofollow",children:"#2795"}),","]}),`
`,e.jsxs(n.p,{children:[`Several components have been refactored to use our new
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Canvas Tokens"}),` and
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-basics--create-modifiers#createstyles-api",rel:"nofollow",children:"styling API"}),`.
The React interface `,e.jsx(n.strong,{children:"has not changed"}),", but CSS variables are now used for dynamic properties."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," These components also support our new ",e.jsx(n.code,{children:"cs"}),` prop for styling. Learn more about styling
with `,e.jsx(n.code,{children:"cs"}),` in our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-basics--cs-prop",rel:"nofollow",children:"documentation"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"The following components are affected:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Avatar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Dialog"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Popup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TextArea"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TextInput"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Toast"})}),`
`]}),`
`,e.jsx(n.h3,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2793",rel:"nofollow",children:"#2793"})]}),`
`,e.jsxs(n.p,{children:[`Avatar has been updated to use our new
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-basics--create-stencil",rel:"nofollow",children:"styling utilities"}),`.
The following changes have been made to the API:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Avatar.Size"})," has been deprecated. The ",e.jsx(n.code,{children:"size"})," prop still accepts ",e.jsx(n.code,{children:"Avatar.Size"}),` in addition to the
following values:
`,e.jsx(n.code,{children:'"extraExtraLarge" | "extraLarge" | "large" | "medium" | "small" | "extraSmall" | (string{})'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Avatar.Variant"})," has been deprecated. The ",e.jsx(n.code,{children:"variant"})," prop still accepts ",e.jsx(n.code,{children:"Avatar.Variant"}),` in
addition to the following values: `,e.jsx(n.code,{children:'"dark" | "light"'})]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"as"})," prop now accepts any element, not just a ",e.jsx(n.code,{children:"div"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Both ",e.jsx(n.code,{children:"Avatar.Size"})," and ",e.jsx(n.code,{children:"Avatar.Variant"}),` have been deprecated in favor of the new string
union types. You will see a console warn message while in development if you're still using this.
Please update your types and usage before v13.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"combobox",children:"Combobox"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2983",rel:"nofollow",children:"#2983"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useComboboxInput"})," hook, and the ",e.jsx(n.code,{children:"Combobox.Input"}),` component used to automatically update the
input when an option was selected. This functionality has been split between
`,e.jsx(n.code,{children:"useComboboxInputArbitrary"})," and ",e.jsx(n.code,{children:"useComboboxInputConstrained"}),` depending on the combobox's value
type. The `,e.jsx(n.code,{children:"useComboboxInput"}),` had the arbitrary functionality built in. This has been separated out.
The `,e.jsx(n.code,{children:"<Select>"})," component has been updated to use ",e.jsx(n.code,{children:"useComboboxInputConstrained"}),` hook and the
`,e.jsx(n.code,{children:"Autocomplete"})," example uses the ",e.jsx(n.code,{children:"useComboboxInputArbitrary"}),` hook. This is a breaking change if you
use the `,e.jsx(n.code,{children:"Combobox.Input"}),` component directly. You'll have to either pass the
`,e.jsx(n.code,{children:"useComboboxInputArbitrary"})," elemProps hook directly to the ",e.jsx(n.code,{children:"<Combbox.Input>"}),` or create a new
component composing them.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v11
<Combobox>
  <Combobox.Input />
  // ...
</Combobox>

// v12
<Combobox>
  <Combobox.Input elemPropsHook={useComboboxInputArbitrary} />
  // ...
</Combobox>

// Better - create a specialized component
const useMyComboboxInput = composeHooks(
  // or your own model that extends \`useComboboxModel\`
  createElemPropsHook(useComboboxModel)(model => {
    return {
      // anything you need your input to do
    }
  }),
  useComboboxInputArbitrary,
  useComboboxInput
)

const MyComboboxInput = createSubcomponent(TextInput)({
  // or your own model that extends \`useComboboxModel\`
  modelHook: useComboboxModel,
  elemPropsHook: useMyComboboxInput,
})((elemProps, Element) => {
  // return a TextInput
  return <Element {...elemProps} />

  // return an InputGroupgs
  return (
    <InputGroup>
      <InputGroup.InnerStart>{/* Icon or something */}</InputGroup.InnerStart>
      <InputGroup.Input as={Element} {...elemProps} />
      <InputGroup.InnerEnd><InputGroup.ClearButton /></InputGroup.InnerEnd>
    </InputGroup>
  )
})
`})}),`
`,e.jsx(n.h3,{id:"form-field",children:"Form Field"}),`
`,e.jsxs("div",{style:{display:"inline-flex",gap:".5rem"},children:[e.jsx(i,{variant:"red",emphasis:"low",children:e.jsx(i.Label,{children:"Breaking Change"})}),e.jsx(i,{variant:"green",emphasis:"low",children:e.jsx(i.Label,{children:"🤖 Codemod Available"})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PRs:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2865",rel:"nofollow",children:"#2865"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2881",rel:"nofollow",children:"#2881"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2934",rel:"nofollow",children:"#2934"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2973",rel:"nofollow",children:"#2973"})]}),`
`,e.jsxs(n.p,{children:["We've promoted FormField from ",e.jsx(n.a,{href:"#preview",children:"Preview"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),`. The following changes has been
made to provide more flexibility and better explicit components when using inputs.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The orientation prop on the ",e.jsx(n.code,{children:"FormField"}),` component will be updated to accept the following values:
`,e.jsx(n.code,{children:'"vertical"'}),", ",e.jsx(n.code,{children:'"horizontalStart"'}),", and ",e.jsx(n.code,{children:'"horizontalEnd"'}),". ",e.jsx(n.code,{children:'"horizontal"'}),` will still be accepted as
a value in v12, but it will be deprecated and slated for removal in a future major release. These
changes are intended to provide more flexibility with label alignments on `,e.jsx(n.code,{children:"FormField"})," elements."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),`: The horizontal alignment of start and end are relative to its container, meaning start
and end match the flex property of `,e.jsx(n.code,{children:"flex-start"})," and ",e.jsx(n.code,{children:"flex-end"}),`. This is especially applicable for
moving between RTL (right-to-left) and LTR (left-to-right) languages.`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Orientation ",e.jsx(n.code,{children:'"horizontal"'}),` has been deprecated. You will see a console warn message
suggesting to update your types and usage to `,e.jsx(n.code,{children:'"horizontalStart"'}),", ",e.jsx(n.code,{children:'"horizontalEnd"'}),` or
`,e.jsx(n.code,{children:'"vertical"'}),"."]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useFormFieldModel"}),": ",e.jsx(n.code,{children:"orientation"})," has been added back into ",e.jsx(n.code,{children:"useFormFieldModel"}),`. While we still
support compat mode due to
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2893",rel:"nofollow",children:"style merging issues"}),`, having orientation
on the model allows for proper styling of sub components.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Styles clean up: ",e.jsx(n.code,{children:"FormField.Hint"})," and ",e.jsx(n.code,{children:"FormField.Label"})," where using ",e.jsx(n.code,{children:"margin"}),` for spacing. We've
updated styles so that the containing element uses `,e.jsx(n.code,{children:"gap"})," for proper spacing."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`We've added a new
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/examples-forms-density-and-alignment--docs",rel:"nofollow",children:"example"}),`
to our docs to showcase how our inputs can be styled in different environments like density and
container alignment.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` If spacing seems off between the input and hint text, ensure you're using
`,e.jsx(n.code,{children:"FormField.Field"})," wrapping your input and hint text."]}),`
`]}),`
`,e.jsx(n.h5,{id:"breaking-api-change",children:"Breaking API Change"}),`
`,e.jsxs(n.p,{children:["The newly promoted ",e.jsx(n.code,{children:"FormField"}),` is a
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-compound-components--docs",rel:"nofollow",children:"compound component"}),`.
Due to the different APIs of the component, this change is `,e.jsx(n.strong,{children:"not codemodable"}),`. The following shows
an example of how to `,e.jsx(n.strong,{children:"update"})," your code to match the new compound component API."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v11 FormField in Main
<FormField
  error={FormField.ErrorType.Alert}
  labelPosition={FormField.LabelPosition.Left}
  useFieldSet={true}
  required={true}
	inputId='input-id'
  hintId="hint-alert"
  hintText="Please enter a valid email."
  label="Email"
>
  <TextInput onChange={handleChange} value={value} />
</FormField>


// v12 Newly promoted FormField from Preview to Main
<FormField
  error="alert"
  orientation="horizontalStart"
  isRequired={true}
	id='input-id'
>
	<FormField.Label>Email</FormField.Label>
	<FormField.Field>
		<FormField.Input as={TextInput} onChange={handleChange} value={value} />
		<FormField.Hint>Please enter a valid email.</FormField.Hint>
	</FormField.Field>
</FormField>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormField.LabelPosition.Hidden"}),` is no longer valid. If you still want to hide the label, use the
prop `,e.jsx(n.code,{children:"isHidden"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v11 FormField in Main
<FormField
  error={FormField.ErrorType.Alert}
  labelPosition={FormField.LabelPosition.Hidden}
  useFieldSet={true}
  required={true}
  inputId="input-id"
  label="Search"
>
  <TextInput onChange={handleChange} value={value} />
</FormField>;

// v12 Newly promoted FormField from Preview to Main

//...

<FormField error="alert" orientation="horizontalStart" isRequired={true} id="input-id">
  <FormField.Label isHidden>Search</FormField.Label>
  <FormField.Field>
    <FormField.Input as={TextInput} onChange={handleChange} value={value} />
  </FormField.Field>
</FormField>;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Noticeable changes:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error"})," prop takes in the following values: ",e.jsx(n.code,{children:'"error" | "alert"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"labelPosition"})," becomes ",e.jsx(n.code,{children:"orientation"}),` with the following values:
`,e.jsx(n.code,{children:'"horizontal" | "horizontalStart" | "horizontalEnd" | "vertical"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useFieldSet"}),` is no longer valid. If you want to group inputs, use
`,e.jsx(n.a,{href:"#form-field-group",children:e.jsx(n.code,{children:"FormFieldGroup"})})," component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"required"})," becomes ",e.jsx(n.code,{children:"isRequired"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hintId"}),` is no longer needed. The component handles associating the hint text, label and input
automatically. If you wish to have a unique `,e.jsx(n.code,{children:"id"}),", you can add one onto the ",e.jsx(n.code,{children:"FormField"})," element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hintText"})," is no longer a valid prop. Use ",e.jsx(n.code,{children:"FormField.Hint"})," sub-component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"errorLabel"})," and ",e.jsx(n.code,{children:"alertLabel"}),` are no longer valid props. Customize your hint text inside of
`,e.jsx(n.code,{children:"FormField.Hint"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," is no longer a valid prop. Use ",e.jsx(n.code,{children:"FormField.Label"})," sub component to render your label text."]}),`
`,e.jsxs(n.li,{children:["Instead of rendering an input, ensure you use ",e.jsx(n.code,{children:"FormField.Input"})," with the ",e.jsx(n.code,{children:"as"}),` prop. This ensures
proper error handling and aria attributes for accessibility.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"inputId"})," is no longer a valid prop. Use ",e.jsx(n.code,{children:"id"})," if you want a custom ",e.jsx(n.code,{children:"id"}),`, otherwise, the component
will handle generating a unique id to associate each element for accessibility.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isHidden"})," has been added as a prop to ",e.jsx(n.code,{children:"FormField.Label"}),` in cases where you want to hide the label
while still meeting accessibility standards.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will handle the change of ",e.jsx(n.code,{children:'orientation="horizontal"'}),` to
`,e.jsx(n.code,{children:'orientation="horizontalStart"'}),` if you're using the string literal values. It will also handle
updating your imports from `,e.jsx(n.code,{children:"@workday/canvas-kit-preview-react/form-field"}),` to
`,e.jsx(n.code,{children:"@workday/canvas-kit-react/form-field"}),"."]}),`
`,e.jsx(n.h4,{id:"form-field-group",children:"Form Field Group"}),`
`,e.jsxs(n.p,{children:["We've added a new component to the ",e.jsx(n.code,{children:"FormField"}),` package to allow users to group inputs without
worrying about setting the `,e.jsx(n.code,{children:"as"})," prop on the ",e.jsx(n.code,{children:"FormField"})," component."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"FormFieldGroup"}),` when you have a group of inputs that need to be associated to one another, like
`,e.jsx(n.code,{children:"RadioGroup"})," or a group of ",e.jsx(n.code,{children:"Checkbox"}),"'s."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FormFieldGroup"})," supports the same props of ",e.jsx(n.code,{children:"FormField"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error"}),": ",e.jsx(n.code,{children:'"alert" | "error"'})," Defines the error around the whole group of inputs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"orientation"}),": ",e.jsx(n.code,{children:'"horizontalStart" | "horizontalEnd" | "vertical" | "horizontal" '}),`. Defines the
label placement.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isRequired"}),": ",e.jsx(n.code,{children:"true"})," Defines if a group like ",e.jsx(n.code,{children:"RadioGroup"})," is required."]}),`
`]}),`
`,e.jsx(n.h4,{id:"form-field-field",children:"Form Field Field"}),`
`,e.jsxs(n.p,{children:["We've added a new sub-component to ",e.jsx(n.code,{children:"FormField"})," and ",e.jsx(n.code,{children:"FormFieldGroup"}),", ",e.jsx(n.code,{children:"FormField.Field"}),` and
`,e.jsx(n.code,{children:"FormFieldGroup.Field"}),`. This sub-component is meant to ensure that the label is always aligned with
the input regardless of the `,e.jsx(n.code,{children:"orientation"}),"prop's value on",e.jsx(n.code,{children:"FormField"})," or ",e.jsx(n.code,{children:"FormFieldGroup"}),`. This
component should replace `,e.jsx(n.code,{children:"FormField.Container"}),` and always be used to ensure proper alignment of the
label and hint text. Our examples have been updated to reflect this.`]}),`
`,e.jsxs(n.p,{children:[`Although there is no codemod for this change and it's non-breaking, we suggest moving towards adding
this sub-component when using `,e.jsx(n.code,{children:"FormField"}),". This component also exists on ",e.jsx(n.code,{children:"FormFieldGroup"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FormField orientation="horizontal">
  <FormField.Label>Email</FormField.Label>
  <FormField.Field>
    <FormField.Input as={TextInput} />
    <FormField.Hint>You must provide an email</FormField.Hint>
  </FormField.Field>
</FormField>
`})}),`
`,e.jsx(n.h3,{id:"menu-item",children:"Menu Item"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2969",rel:"nofollow",children:"2969"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu.Item"})," was converted to use Stencils for styling and uses ",e.jsx(n.code,{children:"SystemIcon"}),` stencil variables to
change icon color instead of deeply nested selectors. We also added `,e.jsx(n.code,{children:"Menu.Option"}),` component for
menus that have a selected visual state. `,e.jsx(n.code,{children:"Menu.Option"}),` will need more accessibility affordances that
depend on the nature of your use of the `,e.jsx(n.code,{children:"Menu"})," component. For example, ",e.jsx(n.code,{children:"<Combobox>"})," and ",e.jsx(n.code,{children:"<Select>"}),`
use `,e.jsx(n.code,{children:"Menu.Option"})," and add keyboard events and ",e.jsx(n.code,{children:"aria-*"}),` attributes to function according to w3c
specifications.`]}),`
`,e.jsxs(n.p,{children:["We've deprecated the ",e.jsx(n.code,{children:"isDisabled"}),` prop. It didn't do anything in v10 or v11. It was part of the
preview Menu deprecation, but was never hooked up. We mapped it to `,e.jsx(n.code,{children:"aria-disabled"}),` and added a
deprecation comment to use `,e.jsx(n.code,{children:"aria-disabled"})," instead."]}),`
`,e.jsxs(n.p,{children:["We've removed the ",e.jsx(n.code,{children:"MenuItemProps"})," export from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/menu"}),`. Use
`,e.jsx(n.code,{children:"ExtractProps<typeof Menu.Item, never>"}),` instead. We don't mean to export prop interfaces of
polymorphic components. The `,e.jsx(n.code,{children:"never"}),` means "don't add element props". The second parameter is used to
pass the interface that the `,e.jsx(n.code,{children:"as"})," prop is pointing to."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu.Item"})," no longer sets ",e.jsx(n.code,{children:"aria-selected"})," since that attribute is not valid on a ",e.jsx(n.code,{children:"role=menuitem"}),`.
The `,e.jsx(n.code,{children:"Menu.Option"})," was added to support the role of a ",e.jsx(n.code,{children:"role=option"}),` for going inside a
`,e.jsx(n.code,{children:"role=listbox"}),". The ",e.jsx(n.code,{children:"Combobox"})," family of components uses a ",e.jsx(n.code,{children:"role=listbox"}),` for menu options. The
`,e.jsx(n.code,{children:"Menu.Option"})," renders a checkmark for a visual indication of selected options."]}),`
`,e.jsx(n.h3,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2911",rel:"nofollow",children:"2911"})]}),`
`,e.jsxs(n.p,{children:["Added the ",e.jsx(n.code,{children:"MultiSelect"}),` component to select more than one option from a list of options. The
`,e.jsx(n.code,{children:"MultiSelect"})," is similar in API to the ",e.jsx(n.code,{children:"Select"}),` component, except the values are comma delimited
with a space. If the ids represented are `,e.jsx(n.code,{children:"['1', '2']"}),`, then the string value of the form field is
`,e.jsx(n.code,{children:"'1, 2'"}),"."]}),`
`,e.jsx(n.h3,{id:"search-form-labs",children:"Search Form (Labs)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PRs:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2934",rel:"nofollow",children:"#2934"}),","]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SearchForm"})," is now using the newly promoted ",e.jsx(n.code,{children:"FormField"})," component. ",e.jsx(n.code,{children:"SearchForm"})," now uses ",e.jsx(n.code,{children:"labelId"}),`
to set the appropiate aria attributes and `,e.jsx(n.code,{children:"id"})," on the underlying input element."]}),`
`,e.jsx(n.h3,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PRs:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2865",rel:"nofollow",children:"#2865"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2983",rel:"nofollow",children:"#2983"})]}),`
`,e.jsxs(n.p,{children:[`As we transition to use our CSS tokens to provide better theming capabilities and our new styling
methods, we're moving away from components extending `,e.jsx(n.code,{children:"Themeable"}),". ",e.jsx(n.code,{children:"Themeable"}),` has been removed from
`,e.jsx(n.code,{children:"SelectProps."})]}),`
`,e.jsxs(n.p,{children:["If you wish to theme ",e.jsx(n.code,{children:"Select"})," we suggest using the ",e.jsx(n.code,{children:"CanvasProvider"})," to do so."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const theme: PartialEmotionCanvasTheme = {
  canvas: {
    palette: {
      common: {
        focusOutline: 'pink',
      },
      primary: {
        main: 'green',
        light: 'lightgreen',
      },
    },
  },
};

//...

<CanvasProvider theme={theme}>
  <Flex cs={parentContainerStyles}>
    <Select items={options}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Input as={Select.Input} onChange={handleChange} />
        <Select.Popper>
          <Select.Card>
            <Select.List>
              {item => {
                return <Select.Item>{item}</Select.Item>;
              }}
            </Select.List>
          </Select.Card>
        </Select.Popper>
      </FormField>
    </Select>
    Selected Value: {value}
  </Flex>
</CanvasProvider>;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Select"})," has been refactored to use ",e.jsx(n.code,{children:"useComboboxInputConstrained"})," to sync the model and the ",e.jsx(n.code,{children:"input"}),`
element regardless of the source. This makes the `,e.jsx(n.code,{children:"Select"})," a controllable component."]}),`
`,e.jsx(n.h3,{id:"text-area",children:"Text Area"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2825",rel:"nofollow",children:"#2825"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TextAreaResizeDirection"}),` is no longer a TypeScript enum, but a JavaScript object. This change does
not effect runtime at all, but may cause TypeScript errors if you use `,e.jsx(n.code,{children:"TextAreaResizeDirection"}),` as a
type.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v11
interface MyProps {
  resize?: TextAreaResizeDirection;
}

// v12
type ValueOf<T> = T[keyof T];
interface MyProps {
  resize?: ValueOf<typeof TextAreaResizeDirection>;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Themeable"})," has been removed from ",e.jsx(n.code,{children:"TextAreaProps"}),". If you wish to theme ",e.jsx(n.code,{children:"TextArea"}),`, use our
`,e.jsx(n.code,{children:"CanvasProvider"})," with the ",e.jsx(n.code,{children:"theme"})," object."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const theme: PartialEmotionCanvasTheme = {
  canvas: {
    palette: {
      common: {
        focusOutline: 'pink',
      },
      primary: {
        main: 'green',
        light: 'lightgreen',
      },
    },
  },
};

//...

<CanvasProvider theme={theme}>
  <FormField>
    <FormField.Label>Contact</FormField.Label>
    <FormField.Input as={TextArea} onChange={handleChange} />
  </FormField>
</CanvasProvider>;
`})}),`
`,e.jsx(n.h3,{id:"text-input",children:"Text Input"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2825",rel:"nofollow",children:"#2825"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Themeable"})," has been removed from ",e.jsx(n.code,{children:"TextInputProps"}),". If you wish to theme ",e.jsx(n.code,{children:"TextInput"}),`, use our
`,e.jsx(n.code,{children:"CanvasProvider"})," with the ",e.jsx(n.code,{children:"theme"})," object."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const theme: PartialEmotionCanvasTheme = {
  canvas: {
    palette: {
      common: {
        focusOutline: 'pink',
      },
      primary: {
        main: 'green',
        light: 'lightgreen',
      },
    },
  },
};

//...

<CanvasProvider theme={theme}>
  <FormField>
    <FormField.Label>Contact</FormField.Label>
    <FormField.Input as={TextInput} onChange={handleChange} />
  </FormField>
</CanvasProvider>;
`})}),`
`,e.jsx(n.h3,{id:"collections",children:"Collections"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2982",rel:"nofollow",children:"#2982"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"navigation.getItem()"})," function can now return ",e.jsx(n.code,{children:"undefined"}),` instead of throwing an error when an
item is not found. Throwing an error caused lots of problems when it came to dynamic data. This is a
breaking change if your application uses `,e.jsx(n.code,{children:"getItem"}),`. It will now have to deal with the possibility of
an `,e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.h2,{id:"utility-updates",children:"Utility Updates"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2908",rel:"nofollow",children:"#2908"})]}),`
`,e.jsx(n.h3,{id:"mergeprops",children:e.jsx(n.code,{children:"mergeProps"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"mergeProps"})," had a bug where sometimes the returned props would be ",e.jsx(n.code,{children:"never"}),". Also ",e.jsx(n.code,{children:"mergeProps"}),` would
not narrow types which would require you to add `,e.jsx(n.code,{children:"as const"}),`. We fixed the type signature to more
accurately reflect how `,e.jsx(n.code,{children:"mergeProps"}),` works. This may catch new type errors not caught before. There
is no way to codemod this. Let us know if you need help fixing new type errors introduced by this
change.`]}),`
`,e.jsxs(n.p,{children:["More information: ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2979",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/discussions/2979"})]}),`
`,e.jsx(n.h3,{id:"createelempropshook",children:e.jsx(n.code,{children:"createElemPropsHook"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createElemPropsHook"}),` now uses
`,e.jsx(n.a,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#const-type-parameters",rel:"nofollow",children:"const Type Parameters"}),`
to narrow types in the object. This prevents requiring `,e.jsx(n.code,{children:"as const"}),` in some situations. This alone
should fix bugs instead of introduce them.`]}),`
`,e.jsxs(n.p,{children:["More information: ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2979",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/discussions/2979"})]}),`
`,e.jsx(n.h3,{id:"composehooks",children:e.jsx(n.code,{children:"composeHooks"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"composeHooks"})," uses ",e.jsx(n.code,{children:"mergeProps"})," and suffered the same bugs. If any hook in the ",e.jsx(n.code,{children:"composeHooks"}),` chain
used a `,e.jsx(n.code,{children:"null"})," prop, the entire prop object returned was typed as ",e.jsx(n.code,{children:"never"}),`. This caused a bug where if
the Component required a prop, it wasn't being provided by the composed hook. Some of our components
manually added to the component's prop interface so the component's render function wouldn't
complain. This has been fixed. This may be a breaking change where before the spread `,e.jsx(n.code,{children:"elemProps"}),` was
`,e.jsx(n.code,{children:"never"}),`, so no type conflicts could exist with component props. Now all props are properly
represented which may mean TypeScript is now catching bugs it didn't before.`]}),`
`,e.jsxs(n.p,{children:["More information: ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2979",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/discussions/2979"})]}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"my-styles-seem-broken",children:"My Styles Seem Broken?"}),`
`,e.jsxs(n.p,{children:[`Our components are reliant on our new Canvas Tokens Web package. Be sure to install
`,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),`. For more information, reference our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Getting Started docs"}),`
for this package.`]}),`
`,e.jsx(n.h3,{id:"did-you-upgrade-all-canvas-kit-related-packages",children:"Did You Upgrade All Canvas Kit Related Packages?"}),`
`,e.jsx(n.p,{children:`In order for all the packages to work in harmony, you must upgrade all Canvas Kit packages to the
same version that you're using, including:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"@workday/canvas-kit-react"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"@workday/canvas-kit-labs-react"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"@workday/canvas-kit-styling"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"@workday/canvas-kit-react-fonts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"@workday/canvas-kit-docs"})}),`
`]}),`
`,e.jsx(n.h2,{id:"glossary",children:"Glossary"}),`
`,e.jsx(n.h3,{id:"main",children:"Main"}),`
`,e.jsxs(n.p,{children:["Our Main package of Canvas Kit tokens, components, and utilities at ",e.jsx(n.code,{children:"@workday/canvas-kit-react"}),` has
undergone a full design and a11y review and is approved for use in product.`]}),`
`,e.jsx(n.p,{children:`Breaking changes to code in Main will only occur during major version updates and will always be
communicated in advance and accompanied by migration strategies.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"preview",children:"Preview"}),`
`,e.jsxs(n.p,{children:[`Our Preview package of Canvas Kit tokens, components, and utilities at
`,e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),` has undergone a full design and a11y review and is approved for
use in product, but may not be up to the high code standards upheld in the `,e.jsx(n.a,{href:"#main",children:"Main"}),` package.
Preview is analagous to code in beta.`]}),`
`,e.jsx(n.p,{children:`Breaking changes are unlikely, but possible, and can be deployed to Preview at any time without
triggering a major version update, though such changes will be communicated in advance and
accompanied by migration strategies.`}),`
`,e.jsxs(n.p,{children:["Generally speaking, our goal is to eventually promote code from Preview to ",e.jsx(n.a,{href:"#main",children:"Main"}),`.
Occasionally, a component with the same name will exist in both `,e.jsx(n.a,{href:"#main",children:"Main"}),` and Preview (for
example, see Segmented Control in `,e.jsx(n.a,{href:"?path=/docs/preview-segmented-control--docs",children:"Preview"}),` and
`,e.jsx(n.a,{href:"https://d2krrudi3mmzzw.cloudfront.net/v8/?path=/docs/components-buttons-segmented-control--basic",rel:"nofollow",children:"Main"}),`).
In these cases, Preview serves as a staging ground for an improved version of the component with a
different API. The component in `,e.jsx(n.a,{href:"#main",children:"Main"})," will eventually be replaced with the one in Preview."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"labs",children:"Labs"}),`
`,e.jsxs(n.p,{children:["Our Labs package of Canvas Kit tokens, components, and utilities at ",e.jsx(n.code,{children:"@workday/canvas-kit-labs-react"}),`
has `,e.jsx(n.strong,{children:"not"}),` undergone a full design and a11y review. Labs serves as an incubator space for new and
experimental code and is analagous to code in alpha.`]}),`
`,e.jsxs(n.p,{children:[`Breaking changes can be deployed to Labs at any time without triggering a major version update and
may not be subject to the same rigor in communcation and migration strategies reserved for breaking
changes in `,e.jsx(n.a,{href:"#preview",children:"Preview"})," and ",e.jsx(n.a,{href:"#main",children:"Main"}),`.
`,e.jsx(n.code,{children:'import { opacity } from "@workday/canvas-tokens-web/dist/es6/system"'})]})]})}function L(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}function s(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{L as default};
