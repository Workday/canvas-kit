import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as c}from"./index-3YbjYt95.js";import{ae as d}from"./index-DHWTzE-b.js";import{S as s}from"./StatusIndicator-vcmfDllK.js";import{T as r}from"./Table-ZC-rbz82.js";import"./index-IfJi-UCQ.js";import"./iframe-DW6TaI9H.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./components-XIe_upcR.js";import"./cs-DvbI9OYs.js";import"./types-wqmYQQWa.js";import"./Text-8N36XMNq.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";function o(l){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...l.components};return s||i("StatusIndicator",!1),s.Label||i("StatusIndicator.Label",!0),r||i("Table",!1),r.Body||i("Table.Body",!0),r.Cell||i("Table.Cell",!0),r.Head||i("Table.Head",!0),r.Header||i("Table.Header",!0),r.Row||i("Table.Row",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Guides/Upgrade Guides/v11.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-110-upgrade-guide",children:"Canvas Kit 11.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains an overview of the changes in Canvas Kit v11. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions.`]}),`
`,e.jsx(n.h2,{id:"why-you-should-upgrade",children:"Why You Should Upgrade"}),`
`,e.jsxs(n.p,{children:[`Canvas Kit v11 is transitioning into a
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2265",rel:"nofollow",children:"new way of styling"}),`. Theming and building
an in sync Canvas Kit CSS has been at the top of our minds. We've started using our new
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Canvas Tokens Web"}),`
package to take advantage of
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS variables"}),` and
provide semantic tokens that can translate to theming components.`]}),`
`,e.jsx(n.p,{children:"A note to the reader:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["While we still support our old tokens from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/tokens"}),` in v11, you must
install our new tokens from `,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),`. You can find more info in our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"docs"}),"."]}),`
`,e.jsxs(n.li,{children:[`In this release, we've introduced a
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-basics--create-stencil",rel:"nofollow",children:"new styling API"}),`.
This shouldn't effect the way you currently style your components. Because we're moving away from
Emotion, support for style props will eventually be removed, however, this API provide backwards
compatability. If you want to slowly move off of Emotion as well, you can start styling components
via the `,e.jsx(n.code,{children:"cs"})," prop or our new styling utilities."]}),`
`]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#canvas-tokens",children:"Canvas Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemod",children:"Codemod"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#deprecations",children:"Deprecations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-field-main",children:"Form Field (Main)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#label-text",children:"Label Text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-area-preview",children:"Text Area (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-input-preview",children:"Text Input (Preview)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#removals",children:"Removals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#status-indicator-preview-utilities",children:"Status Indicator (Preview) Utilities"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-style-updates",children:"Component Style Updates"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-updates",children:"Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#styling-api-and-css-tokens",children:"Styling API and CSS Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#count-badge",children:"CountBadge"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#form-field-preview",children:"Form Field Preview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#icons",children:"Icons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#status-indicator-preview",children:"Status Indicator (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#table",children:"Table"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text",children:"Text"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#style-utility-updates",children:"Style Utility Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#createstencil",children:"createStencil"})}),`
`]}),`
`]}),`
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
`,e.jsxs(n.p,{children:[`In v11, all the components listed in this guide have started using our new
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Canvas Tokens Web"}),`.
In v10, we provided token fallbacks so that a component would not be missing a token/value if the
tokens were not defined. In v11 you must add `,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` to ensure our components
are properly styled and the variables are defined. For more information on installing and using,
please reference our tokens
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"docs"}),"."]}),`
`,e.jsx(n.h2,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:["We've provided a ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod",rel:"nofollow",children:"codemod"}),` to
automatically update your code to work with most of the breaking changes in v11. `,e.jsx(n.strong,{children:`Breaking changes
handled by the codemod are marked with 🤖 in the Upgrade Guide.`})]}),`
`,e.jsxs(n.p,{children:[`A codemod is a script that makes programmatic transformations on your codebase by traversing the
`,e.jsx(n.a,{href:"https://www.hypermod.io/docs/guides/understanding-asts",rel:"nofollow",children:"AST"}),`, identifying patterns, and making
prescribed changes. This greatly decreases opportunities for error and reduces the number of manual
updates, which allows you to focus on changes that need your attention. `,e.jsx(n.strong,{children:`We highly recommend you
use the codemod for these reasons.`})]}),`
`,e.jsx(n.p,{children:`If you're new to running codemods or if it's been a minute since you've used one, there are a few
things you'll want to keep in mind.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Our codemods are meant to be run sequentially. For example, if you're using v8 of Canvas Kit,
you'll need to run the v9 codemod before you run v11.`}),`
`,e.jsxs(n.li,{children:["The codemod will update your code to be compatible with the specified version, but it will ",e.jsx(n.strong,{children:"not"}),`
remove outdated dependencies or upgrade dependencies to the latest version. You'll need to upgrade
dependencies on your own.`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We recommend upgrading dependencies before running the codemod."}),`
`,e.jsxs(n.li,{children:["Always review your ",e.jsx(n.code,{children:"package.json"})," files to make sure your dependency versions look correct."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`The codemod will not handle every breaking change in v11. You will likely need to make some manual
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod v11 [path]
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
yarn canvas-kit-codemod v11 [path]
yarn remove @workday/canvas-kit-codemod
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),": The codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` files. You'll need to
manually edit other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),`, etc.). You may need to run your linter
after executing the codemod, as its resulting formatting (spacing, quotes, etc.) may not match
your project conventions.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"deprecations",children:"Deprecations"}),`
`,e.jsxs(n.p,{children:["We add the ",e.jsx(n.a,{href:"https://jsdoc.app/tags-deprecated.html",rel:"nofollow",children:"@deprecated"}),` JSDoc tag to code we plan to remove
in a future major release. This signals consumers to migrate to a more stable alternative before the
deprecated code is removed.`]}),`
`,e.jsx(n.h3,{id:"form-field-main",children:"Form Field Main"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2472",rel:"nofollow",children:"#2472"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"FormField"})," in ",e.jsx(n.a,{href:"#main",children:"Main"}),`. Please use
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=//docs/preview-inputs-form-field--basic",rel:"nofollow",children:e.jsx(n.code,{children:"FormField"})}),` in
`,e.jsx(n.a,{href:"#preview",children:"Preivew"})," instead."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"label-text",children:"Label Text"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2455",rel:"nofollow",children:"#2455"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"LabelText"})," in ",e.jsx(n.a,{href:"#main",children:"Main"}),`. Please use
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=//docs/preview-inputs-form-field--basic",rel:"nofollow",children:e.jsx(n.code,{children:"FormField.Label"})}),`
in `,e.jsx(n.a,{href:"#preview",children:"Preview"})," in context of a ",e.jsx(n.code,{children:"FormField"})," instead."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`//v10
import {LabelText} from '@workday/canvas-kit-react/text';

<form>
  <LabelText>Pizza</LabelText>
  <input type="text" />
</form>;

//v11
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

<FormField>
  <FormField.Label>First Name</FormField.Label>
  <FormField.Input as={TextInput} value={value} onChange={e => console.log(e)} />
</FormField>;
`})}),`
`,e.jsxs(n.p,{children:["If you still want to use a ",e.jsx(n.code,{children:"label"})," element outside of the context of a form, you can use our ",e.jsx(n.code,{children:"Text"}),`
component instead.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"text-area-preview",children:"Text Area Preview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2472",rel:"nofollow",children:"#2472"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"TextArea"})," from ",e.jsx(n.a,{href:"#preview",children:"Preview"}),`. Please use
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=//docs/preview-inputs-form-field--basic",rel:"nofollow",children:e.jsx(n.code,{children:"FormField"})}),` in
`,e.jsx(n.a,{href:"#preview",children:"Preview"})," with ",e.jsx(n.code,{children:"TextArea"})," in ",e.jsx(n.a,{href:"#main",children:"Main"})," instead."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"text-input-preview",children:"Text Input Preview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2472",rel:"nofollow",children:"#2472"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"TextInput"})," from ",e.jsx(n.a,{href:"#preview",children:"Preview"}),`. Please use
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=//docs/preview-inputs-form-field--basic",rel:"nofollow",children:e.jsx(n.code,{children:"FormField"})}),` in
`,e.jsx(n.a,{href:"#preview",children:"Preview"})," with ",e.jsx(n.code,{children:"TextInput"})," in ",e.jsx(n.a,{href:"#main",children:"Main"})," instead."]}),`
`,e.jsx(n.p,{children:"The following model hooks have also been deprecated:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"useTextInputModel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"useTextInputField"})}),`
`]}),`
`,e.jsx(n.h2,{id:"removals",children:"Removals"}),`
`,e.jsx(n.h3,{id:"status-indicator-preview-utilities",children:"Status Indicator (Preview) Utilities"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2700",rel:"nofollow",children:"#2472"})]}),`
`,e.jsx(n.p,{children:`As part of the styling refactor, we've removed the following exports that were primarily used to
style the component:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"useStatusIndicatorModel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"useStatusIndicator"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"statusIndicatorColors"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useStatusIndicatorIcon"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"There should be no developer impact."})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"component-style-updates",children:"Component Style Updates"}),`
`,e.jsx(s,{variant:"red",emphasis:"low",children:e.jsx(s.Label,{children:"Visual Breaking Change"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2485",rel:"nofollow",children:"#2485"})]}),`
`,e.jsxs(n.p,{children:[`The following changes address visual discrepancies between our design spec files and code. These
changes `,e.jsx(n.strong,{children:"should not"})," impact the layout or behavior of a component."]}),`
`,e.jsx(n.p,{children:"Components affected:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"DeleteButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Radio"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SecondaryButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"StatusIndicator"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Switch"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Table"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TertiaryButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TextArea"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TextInput"})}),`
`]}),`
`,e.jsxs(r,{children:[e.jsx(r.Head,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{scope:"col",children:"Component"}),e.jsx(r.Header,{scope:"col",children:"Variant"}),e.jsx(r.Header,{scope:"col",children:"psuedo Class"}),e.jsx(r.Header,{scope:"col",children:"Property"}),e.jsx(r.Header,{scope:"col",children:"v10 Value"}),e.jsx(r.Header,{scope:"col",children:"v11 Value"})]})}),e.jsxs(r.Body,{children:[e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"Checkbox"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"disabled"}),e.jsx(r.Cell,{children:"borderColor"}),e.jsx(r.Cell,{children:"soap600"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"licorice100"})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"Checkbox"}),e.jsx(r.Cell,{children:"Inverse"}),e.jsx(r.Cell,{children:"disabled"}),e.jsx(r.Cell,{children:"borderColor"}),e.jsx(r.Cell,{children:"soap600"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"licorice100"})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"DeleteButton"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"disabled"}),e.jsx(r.Cell,{children:"backgroundColor"}),e.jsx(r.Cell,{children:"error.light"}),e.jsx(r.Cell,{children:"error.base"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"DeleteButton"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"disabled"}),e.jsx(r.Cell,{children:"opacity"}),e.jsx(r.Cell,{children:"1"}),e.jsx(r.Cell,{children:"0.4"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"Radio"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"disabled"}),e.jsx(r.Cell,{children:"borderColor"}),e.jsx(r.Cell,{children:"soap600"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"licorice100"})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"SecondaryButton"}),e.jsx(r.Cell,{children:"Inverse"}),e.jsx(r.Cell,{children:"focus"}),e.jsx(r.Cell,{children:"border"}),e.jsx(r.Cell,{children:"soap400"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"transparent"})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"SecondaryButton"}),e.jsx(r.Cell,{children:"Inverse"}),e.jsx(r.Cell,{children:"focus"}),e.jsx(r.Cell,{children:"boxShdaow (Inner Color)"}),e.jsx(r.Cell,{children:"blackPepper500"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"blackPepper400"})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"SecondaryButton"}),e.jsx(r.Cell,{children:"Inverse"}),e.jsx(r.Cell,{children:"focus"}),e.jsx(r.Cell,{children:"color"}),e.jsx(r.Cell,{children:"blackPepper500"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"blackPepper400"})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"SecondaryButton (Icon)"}),e.jsx(r.Cell,{children:"Inverse"}),e.jsx(r.Cell,{children:"focus"}),e.jsx(r.Cell,{children:"fill"}),e.jsx(r.Cell,{children:"blackPepper500"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"blackPepper400"})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"StatusIndicator (Preview)"}),e.jsx(r.Cell,{children:"transparent"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"backgroundColor"}),e.jsx(r.Cell,{children:"blackPepper600"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"rgba(0,0,0,.84)"})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"StatusIndicator (Preview)"}),e.jsx(r.Cell,{children:"transparent"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"opacity"}),e.jsx(r.Cell,{children:"0.85"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"Removed"})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"Switch"}),e.jsx(r.Cell,{children:"Checked and Disabled"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"backgroundColor, opacity"}),e.jsx(r.Cell,{children:"blueberry200"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:`backgroundColor: brand.primary.base
opacity: system.opacity.disabled`})})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"Table (Header)"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"borderColor"}),e.jsx(r.Cell,{children:"soap400"}),e.jsx(r.Cell,{children:"soap500"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"TertiaryButton"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"hover"}),e.jsx(r.Cell,{children:"backgroundColor"}),e.jsx(r.Cell,{children:"soap200"}),e.jsx(r.Cell,{children:"soap300"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"TertiaryButton"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"active"}),e.jsx(r.Cell,{children:"backgroundColor"}),e.jsx(r.Cell,{children:"soap300"}),e.jsx(r.Cell,{children:"soap400"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"TertiaryButton"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"active"}),e.jsx(r.Cell,{children:"color"}),e.jsx(r.Cell,{children:"primary.dark"}),e.jsx(r.Cell,{children:"primary.darkest"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"TertiaryButton"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"disabled"}),e.jsx(r.Cell,{children:"borderColor"}),e.jsx(r.Cell,{backgroundColor:"frenchVanilla100",children:"frenchVanilla100"}),e.jsx(r.Cell,{cs:{backgroundColor:"transparent"},children:"transparent"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"TertiaryButton (Icon Only)"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"focus"}),e.jsx(r.Cell,{children:"fill"}),e.jsx(r.Cell,{children:"blackPepper500"}),e.jsx(r.Cell,{children:"blackPepper400"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"TertiaryButton (Icon Only)"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"hover"}),e.jsx(r.Cell,{children:"fill"}),e.jsx(r.Cell,{children:"blackPepper500"}),e.jsx(r.Cell,{children:"blackPepper400"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"TextArea"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"disabled"}),e.jsx(r.Cell,{children:"borderColor"}),e.jsx(r.Cell,{children:"soap600"}),e.jsx(r.Cell,{children:"licorice100"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"TextInput"}),e.jsx(r.Cell,{}),e.jsx(r.Cell,{children:"disabled"}),e.jsx(r.Cell,{children:"borderColor"}),e.jsx(r.Cell,{children:"soap600"}),e.jsx(r.Cell,{children:e.jsx(n.p,{children:"licorice100"})})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` If you use a visual regression tool, you'll need to update your tests to match the new
visual changes.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-updates",children:"Component Updates"}),`
`,e.jsx(n.h3,{id:"styling-api-and-css-tokens",children:"Styling API and CSS Tokens"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PRs:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2666",rel:"nofollow",children:"#2666"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2471",rel:"nofollow",children:"#2471"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2542",rel:"nofollow",children:"#2542"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2570",rel:"nofollow",children:"#2570"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2442",rel:"nofollow",children:"#2442"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2472",rel:"nofollow",children:"#2472"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2685",rel:"nofollow",children:"#2685"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2615",rel:"nofollow",children:"#2615"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2699",rel:"nofollow",children:"#2699"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2546",rel:"nofollow",children:"#2546"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2570",rel:"nofollow",children:"#2570"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2620",rel:"nofollow",children:"#2620"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2583",rel:"nofollow",children:"#2583"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2567",rel:"nofollow",children:"#2567"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2455",rel:"nofollow",children:"#2455"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2709",rel:"nofollow",children:"#2709"})]}),`
`,e.jsxs(n.p,{children:[`Several components have been refactored to use our new
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Canvas Tokens"}),` and
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-basics--create-modifiers#createstyles-api",rel:"nofollow",children:"styling API"}),`.
The React interface `,e.jsx(n.strong,{children:"has not changed"}),", but CSS variables are now used for dynamic properties."]}),`
`,e.jsx(n.p,{children:"The following components are affected:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"AccentIcon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"AppletIcon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Card"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CheckBox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Combobox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"CountBadge"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"FormField (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"DeleteButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Graphic"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"LoadingDots"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"PrimaryButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SecondaryButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Radio (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"StatusIndicator"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Svg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Switch"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SystemIconCircle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SystemIcon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Table"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TertiaryButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Text"})}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," These components also support our new ",e.jsx(n.code,{children:"cs"}),` prop for styling. Learn more about styling
with `,e.jsx(n.code,{children:"cs"}),` in our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-basics--cs-prop",rel:"nofollow",children:"documentation"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"count-badge",children:"Count Badge"}),`
`,e.jsx(s,{variant:"red",emphasis:"low",children:e.jsx(s.Label,{children:"Breaking Change"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2709",rel:"nofollow",children:"#2709"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"default"})," has been removed from the ",e.jsx(n.code,{children:"variant"})," type and is now the default for styles."]}),`
`]}),`
`,e.jsxs(n.p,{children:["We also removed the ",e.jsx(n.code,{children:"default"}),` variant and consolidated those styles into the badge's base styles.
This will not be a breaking change for most users. However, if you have a `,e.jsx(n.code,{children:"CountBadge"}),` with an
explicit `,e.jsx(n.code,{children:"default"}),` variant, you'll see a TypeScript error. To resolve this, simply remove the
variant prop.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Before (v10)
<CountBadge variant="default" count={10} />

// After (v11)
<CountBadge count={10} />
`})}),`
`,e.jsx(n.h3,{id:"form-field-preview",children:"Form Field (Preview)"}),`
`,e.jsxs("div",{style:{display:"inline-flex",gap:".5rem"},children:[e.jsx(s,{variant:"red",emphasis:"low",children:e.jsx(s.Label,{children:"Breaking Change"})}),e.jsx(s,{variant:"green",emphasis:"low",children:e.jsx(s.Label,{children:"🤖 Codemod Available"})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2472",rel:"nofollow",children:"#2472"}),`
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/274",rel:"nofollow",children:"#2746"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FormField"})," in ",e.jsx(n.a,{href:"#preview",children:"Preview"}),` is a compound component and we intend to promote it in a future
version to replace the `,e.jsx(n.code,{children:"FormField"})," in ",e.jsx(n.a,{href:"#main",children:"Main"}),`. Because of this, we've refactored how errors
are applied to `,e.jsx(n.code,{children:"FormField"})," in ",e.jsx(n.a,{href:"#preview",children:"Preview"})," in order to match the API from the ",e.jsx(n.code,{children:"FormField"}),` in
`,e.jsx(n.a,{href:"#main",children:"Main"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"hasError"})," prop has been renamed to ",e.jsx(n.code,{children:"error"}),". ",e.jsx(n.strong,{children:"This is a breaking change"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"error"})," accepts ",e.jsx(n.code,{children:'"error" | "alert" | ""'})," instead of a boolean value."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"orientation"})," prop defaults to ",e.jsx(n.code,{children:"vertical"})," and is no longer required."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FormField.Input"})," can be used by any of our inputs including ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"TextInput"}),", ",e.jsx(n.code,{children:"TextArea"}),`,
`,e.jsx(n.code,{children:"RadioGroup"}),", ",e.jsx(n.code,{children:"Switch"})," and ",e.jsx(n.code,{children:"Checkbox"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FormField"})," does ",e.jsx(n.strong,{children:"not"})," support the ",e.jsx(n.code,{children:"useFieldSet"})," prop that the ",e.jsx(n.code,{children:"FormField"})," in ",e.jsx(n.a,{href:"#main",children:"Main"}),`
does. In order to achieve the same behavior, set the `,e.jsx(n.code,{children:"as"})," prop on the ",e.jsx(n.code,{children:"FormField"}),` element to
`,e.jsx(n.code,{children:"fieldset"})," and the ",e.jsx(n.code,{children:"as"})," prop of ",e.jsx(n.code,{children:"FormField.Label"})," to ",e.jsx(n.code,{children:"legend"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`The required asterisk is now a pseudo element. While the asterisk was never read out loud by
screen readers, Testing Library required it in the `,e.jsx(n.code,{children:"*ByLabelText"})," query. ",e.jsx(n.code,{children:"*ByRole"}),` uses the w3c
`,e.jsx(n.a,{href:"https://www.w3.org/TR/accname-1.2/",rel:"nofollow",children:"accessible name calculation specification"}),`, but
`,e.jsx(n.code,{children:"*ByLabelText"}),` uses
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent",rel:"nofollow",children:"textContent"}),`. Additional
information: `,e.jsx(n.a,{href:"https://github.com/testing-library/dom-testing-library/issues/929",rel:"nofollow",children:"https://github.com/testing-library/dom-testing-library/issues/929"})]}),`
`,e.jsx(n.p,{children:"v10:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"screen.getByLabelText('Email*'); // Email is a required field and asterisk is included in name\nscreen.getByRole('textbox', {name: 'Email'}); // correctly ignores the `*`\n"})}),`
`,e.jsx(n.p,{children:"v11:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`screen.getByLabelText('Email');
screen.getByRole('textbox', {name: 'Email'});
`})}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v10 FormField in Preview
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

<FormField orientation="vertical" hasError={true}>
  <FormField.Label>Password</FormField.Label>
  <FormField.Input as={TextInput} type="password" value={value} onChange={handleChange} />
  <FormField.Hint>Must Contain a number and a capital letter</FormField.Hint>
</FormField>;

// v11
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

<FormField error="error">
  <FormField.Label>Password</FormField.Label>
  <FormField.Container>
    <FormField.Input as={TextInput} type="password" value={value} onChange={handleChange} />
    <FormField.Hint>Must Contain a number and a capital letter</FormField.Hint>
  </FormField.Container>
</FormField>;
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will handle the change of ",e.jsx(n.code,{children:"hasError"})," to ",e.jsx(n.code,{children:"error"}),` for you automatically. You may need
to check your logic to make sure it sets the appropaite value to the prop.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If you use your own custom ",e.jsx(n.code,{children:"input"}),` you will need to handle the styling for error and
alert states.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs("div",{style:{display:"inline-flex",gap:".5rem"},children:[e.jsx(s,{variant:"red",emphasis:"low",children:e.jsx(s.Label,{children:"Breaking Change"})}),e.jsx(s,{variant:"green",emphasis:"low",children:e.jsx(s.Label,{children:"🤖 Codemod Available"})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"styles"})," prop has been removed. If you still need to style an Icon component, please use the ",e.jsx(n.code,{children:"cs"}),`
prop.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` Passing a token name to a style prop will not be supported in a future major version.
Please use our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Canvas Tokens"}),`
instead.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// This will no longer be supported in a future major version
<SystemIcon color="blueberry400" />;

// Use new tokens instead.
import {base} from '@workday/canvas-tokens-web';
<SystemIcon color={base.blueberry400} />;
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will handle the change of renaming ",e.jsx(n.code,{children:"styles"})," to ",e.jsx(n.code,{children:"cs"})," for you automatically."]}),`
`,e.jsx(n.h4,{id:"accenticon",children:"AccentIcon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AccentIconStyles"})," prop has been deprecated and will be merged with ",e.jsx(n.code,{children:"AccentIconProps"}),` in a future
version.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"accentIconStyles"}),` has been deprecated and will be removed in a future version as a part of
implementation of stencils and new tokens. Consider using `,e.jsx(n.code,{children:"accentIconStencil"}),` to get styles or
class name.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AccentIcon"})," supports ",e.jsx(n.code,{children:"size"})," and ",e.jsx(n.code,{children:"color"})," css variables, along with ",e.jsx(n.code,{children:"size"})," and ",e.jsx(n.code,{children:"color"}),` props. Both
ways are supported:`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// set size or color by props
<AccentIcon color={base.blueberry100} size={24} />;

// set size or color by css vars
import {accentIconStencil} from '@workday/canvas-kit-react/icon';

const MyComponent = StyledRadioButton('div')({
  [accentIconStencil.vars.color]: base.berrySmoothie100,
  [accentIconStencil.vars.size]: '2rem',
});

<MyComponent>
  <AccentIcon icon={myIcon} />
</MyComponent>;
`})}),`
`,e.jsx(n.h4,{id:"appleticon",children:"AppletIcon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AppletIconStyles"})," prop has been deprecated and will be merged with ",e.jsx(n.code,{children:"AppletIconProps"}),` in a future
version.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"appletIconStyles"}),` has been deprecated and will be removed in a future version as a part of
implementation of stencils and new tokens. Consider using `,e.jsx(n.code,{children:"appletIconStencil"}),` to get styles or
class name.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AppletIcon"})," supports ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"color200"}),", ",e.jsx(n.code,{children:"color300"}),", ",e.jsx(n.code,{children:"color400"})," and ",e.jsx(n.code,{children:"color500"}),` css variables,
along with `,e.jsx(n.code,{children:"size"})," and ",e.jsx(n.code,{children:"color"})," props. Both ways are supported:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// set size or color by props
<AppletIcon color="blueberry" size={240} />;

// set size or color by css vars
import {appletIconStencil} from '@workday/canvas-kit-react/icon';

const MyComponent = StyledRadioButton('div')({
  [appletIconStencil.vars.size]: '2rem',
  [appletIconStencil.vars.color200]: base.berrySmoothie200,
  [appletIconStencil.vars.color300]: base.berrySmoothie300,
  [appletIconStencil.vars.color400]: base.berrySmoothie400,
  [appletIconStencil.vars.color500]: base.berrySmoothie500,
});

<MyComponent>
  <AppletIcon icon={myIcon} />
</MyComponent>;
`})}),`
`,e.jsx(n.h4,{id:"graphic",children:"Graphic"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"GraphicStyles"})," prop has been deprecated and will be merged with ",e.jsx(n.code,{children:"GraphicProps"}),` in a future
version.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"graphicStyles"}),` has been deprecated and will be removed in a future version as a part of
implementation of stencils and new tokens. Consider using `,e.jsx(n.code,{children:"graphicStencil"}),` to get styles or class
name.`]}),`
`]}),`
`,e.jsx(n.h4,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["This change only impacts internal Canvas Kit code. ",e.jsx(n.code,{children:"Icon"}),` component has been removed and is no
longer used to build our icons. It has been replaced by our `,e.jsx(n.code,{children:"Svg"}),` component. Most of our icons now
extend styles from `,e.jsx(n.code,{children:"svgStencil"}),"."]}),`
`,e.jsx(n.h4,{id:"systemicon",children:"SystemIcon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SystemIconStyles"}),` has been deprecated and will be removed in a future version as a part of
implementation of stencils and new tokens. Consider using `,e.jsx(n.code,{children:"systemIconStencil"}),` to get styles or
class name.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"accentHover"}),` is deprecated and will be removed in a future version. Please use the following when
overriding styles:`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`'&:hover': {
  [systemIconStencil.vars.accent]: desiredAccentHoverColor
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"backgroundHover"}),` is deprecated and will be removed in a future version. Please use the following
when overriding styles:`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`'&:hover': {
  [systemIconStencil.vars.background]: desiredBackgroundHoverColor
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fillHover"}),` is deprecated and will be removed in a future version. Please use the following when
overriding styles:`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`'&:hover': {
  [systemIconStencil.vars.fill]: desiredFillHoverColor
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fill"})," is deprecated and will be removed in a future version. Please use ",e.jsx(n.code,{children:"color"}),` and specify
`,e.jsx(n.code,{children:"accent"})," color if you want ",e.jsx(n.code,{children:"accent"})," to be different from ",e.jsx(n.code,{children:"color"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`'&:hover': {
  [systemIconStencil.vars.fill]: desiredFillHoverColor
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"systemIconStyles"}),` has been deprecated and will be removed in a future version as a part of
implementation of stencils and new tokens. Consider using `,e.jsx(n.code,{children:"systemIconStencil"}),` to get styles or
class name.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SystemIcon"})," supports ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"color"}),", ",e.jsx(n.code,{children:"accentColor"})," and ",e.jsx(n.code,{children:"background"}),` css variables, along with
props. Both ways are supported:`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// set size or color by props
<SystemIcon color={base.blueberry100} size={24} />;

// set size or color by css vars
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const MyComponent = StyledRadioButton('div')({
  [accentIconStencil.vars.size]: '2rem',
  [systemIconStencil.vars.color]: base.berrySmoothie400,
  [systemIconStencil.vars.background]: base.frenchVanilla100,
  // on hover:
  '&:hover': {
    [systemIconStencil.vars.color]: base.berrySmoothie500,
    [systemIconStencil.vars.background]: 'transparent',
  },
});

<MyComponent>
  <SystemIcon icon={myIcon} />
</MyComponent>;
`})}),`
`,e.jsx(n.h3,{id:"status-indicator-preview",children:"Status Indicator (Preview)"}),`
`,e.jsx(s,{variant:"red",emphasis:"low",children:e.jsx(s.Label,{children:"Visual Breaking Change"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2620",rel:"nofollow",children:"#2620"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"transparent"})," variant now uses ",e.jsx(n.code,{children:"system.color.bg.translucent"}),` which is a background color of
black with an opacity of `,e.jsx(n.code,{children:"0.84"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"There should be no developer impact and the visual changes are safe to accept"}),"."]}),`
`,e.jsx(n.h3,{id:"switch",children:"Switch"}),`
`,e.jsx(s,{variant:"red",emphasis:"low",children:e.jsx(s.Label,{children:"Visual Breaking Change"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2583",rel:"nofollow",children:"#2583"})]}),`
`,e.jsxs(n.p,{children:["Switch no longer uses ",e.jsx(n.code,{children:"blueberry200"}),` which was part of our theme object
`,e.jsx(n.code,{children:"theme.palette.primary.light"}),` for the background color to indicate a Switch that is checked and
disabled. Now, it uses `,e.jsx(n.code,{children:"blueberry400"})," or ",e.jsx(n.code,{children:"brand.base.primary"})," with an opacity of ",e.jsx(n.code,{children:"0.4"}),` for checked
and disabled.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"There should be no developer impact and the visual changes are safe to accept"}),"."]}),`
`,e.jsx(n.h3,{id:"table",children:"Table"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2600",rel:"nofollow",children:"#2600"})]}),`
`,e.jsx(s,{variant:"red",emphasis:"low",children:e.jsx(s.Label,{children:"Breaking Change"})}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"Table"})," from ",e.jsx(n.a,{href:"#preview",children:"Preview"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),". It replaces the ",e.jsx(n.code,{children:"Table"}),` that was
previously in `,e.jsx(n.a,{href:"#main",children:"Main"}),` (for reference, see
`,e.jsx(n.a,{href:"https://d2krrudi3mmzzw.cloudfront.net/v9/?path=/story/components-containers-table--basic",rel:"nofollow",children:e.jsx(n.code,{children:"Table"})}),`
in `,e.jsx(n.a,{href:"#main",children:"Main"})," from v9)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Table"}),` is a
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-compound-components--docs",rel:"nofollow",children:"compound component"}),`
which provides a flexible API and access to its internals via its subcomponents.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),": ",e.jsx(n.code,{children:"rowState"})," prop is no longer a part of the ",e.jsx(n.code,{children:"Table"})," component."]}),`
`]}),`
`,e.jsxs(n.p,{children:["In v10, the ",e.jsx(n.code,{children:"Table"})," component in ",e.jsx(n.a,{href:"#main",children:"Main"})," only exposed a ",e.jsx(n.code,{children:"Table"})," and ",e.jsx(n.code,{children:"TableRow"}),` component to
build tables.`]}),`
`,e.jsxs(n.p,{children:["In v11, ",e.jsx(n.code,{children:"Table"}),` now exposes every subcomponent of a semantic HTML
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",rel:"nofollow",children:"Table"}),`. While more verbose, it
provides more flexibility for customization.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v10
import {Table, TableRow} from '@workday/canvas-kit-react/table';

<Table>
  <thead>
    <TableRow header={true}>
      <th>Header Text</th>
    </TableRow>
  </thead>
  <tbody>
    <TableRow>
      <td>Cell Text</td>
    </TableRow>
  </tbody>
</Table>;

// v11
import {Table} from '@workday/canvas-kit-react/table';

<Table>
  <Table.Head>
    <Table.Row>
      <Table.Header>Header Text</Table.Header>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Cell Text</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
`})}),`
`,e.jsxs(n.p,{children:[`Please refer to the
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/components-containers-table--basic",rel:"nofollow",children:"Table examples"}),`
for how to implement new tables.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If you were using the ",e.jsx(n.a,{href:"#preview",children:"Preview"})," ",e.jsx(n.code,{children:"Table"}),` compound component, then you will need
to update your import from `,e.jsx(n.code,{children:"@workday/canvas-kit-preview-react/table"}),` to
`,e.jsx(n.code,{children:"@workday/canvas-kit-react/table"}),". This change is ",e.jsx(n.strong,{children:"not"})," handled by the codemod."]}),`
`]}),`
`,e.jsx(n.h3,{id:"text",children:"Text"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2455",rel:"nofollow",children:"#2455"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Text"})," no longer extends the ",e.jsx(n.code,{children:"Box"})," component, however, it still supports Emotion ",e.jsx(n.code,{children:"styled"}),` and
style props.`]}),`
`,e.jsxs(n.li,{children:["Type level components: ",e.jsx(n.code,{children:"Title"}),", ",e.jsx(n.code,{children:"Heading"}),", ",e.jsx(n.code,{children:"BodyText"})," and ",e.jsx(n.code,{children:"Subtext"})," remain unchanged."]}),`
`]}),`
`,e.jsx(n.h2,{id:"style-utility-updates",children:"Style Utility Updates"}),`
`,e.jsx(n.h3,{id:"createstencil",children:e.jsx(n.code,{children:"createStencil"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2697",rel:"nofollow",children:"#2697"})]}),`
`,e.jsx(s,{variant:"red",emphasis:"low",children:e.jsx(s.Label,{children:"Breaking Change"})}),`
`,e.jsxs(n.p,{children:["Stencils were updated to automatically add ",e.jsx(n.code,{children:"box-sizing: border-box"}),` to all stencils. If your stencil
did not add this style already, it may change the way `,e.jsx(n.code,{children:"width"}),` works for the component. Our intent is
to make all elements use border box layouts to make width calculations more predictable. This change
may change the way your component works if you use the `,e.jsx(n.code,{children:"width"})," style property."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," This is only a breaking change if you were using ",e.jsx(n.code,{children:"createStencil"}),` to apply margin and
padding without box-sizing. For reference, view box-sizing
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing",rel:"nofollow",children:"documentation"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"my-styles-seem-broken",children:"My Styles Seem Broken?"}),`
`,e.jsxs(n.p,{children:[`Our components are reliant on our new Canvas Tokens Web package. Be sure you install
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
changes in `,e.jsx(n.a,{href:"#preview",children:"Preview"})," and ",e.jsx(n.a,{href:"#main",children:"Main"}),"."]})]})}function H(l={}){const{wrapper:n}={...c(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(o,{...l})}):o(l)}function i(l,n){throw new Error("Expected "+(n?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};
