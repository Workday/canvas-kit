import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as o}from"./index-3YbjYt95.js";import{ae as i}from"./index-ZDSBk99o.js";import{S as a,D as t}from"./union-DLCtkVd1.js";import"./index-IfJi-UCQ.js";import"./iframe-DJNB-Vr3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-92MeLroz.js";import"./Svg-DoDc3G3m.js";import"./px2rem-C0KbprIx.js";import"./components-Cg1FZO0_.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-DW1RpUtJ.js";import"./Text-CNr-2DGz.js";import"./mergeStyles-BV4VEc_Y.js";import"./Box-CwNlJ1ig.js";import"./index-COdRIEp6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-CaNYx-IV.js";import"./grid-DWhi-gWI.js";import"./index-5dfzm_kn.js";import"./Card-BzyZlNCL.js";import"./ExternalHyperlink-F3Ezqcg9.js";import"./Hyperlink-BMBSNX69.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-D_K1Afrv.js";import"./BaseButton-DWX5ERqj.js";import"./Button-DgUbiQZw.js";import"./lerna-gnzzElkd.js";import"./CanvasProvider-BQB8fFIR.js";import"./index-5mrAZJYD.js";import"./Tooltip-BxoQKBOc.js";import"./useTooltip-It9frGRS.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BBMl_xav.js";import"./Popper-CbopsOaM.js";import"./TertiaryButton-CBkDxGlV.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-B17xCNlQ.js";import"./ColorPicker-Bkxnxvxt.js";import"./ColorInput-DPMCVQeB.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-D0_TvPek.js";import"./types-DXdjelYI.js";import"./FormField-BUFxQ-TR.js";import"./check-Bvurkvei.js";import"./Expandable-Dymk71e9.js";import"./Avatar-CH00W5X3.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-C-Z-l4zf.js";import"./Popup-BHgY7kD_.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-ddP-JAq8.js";import"./useInitialFocus-DVpTgpWA.js";import"./useReturnFocus-BcWGL8OV.js";import"./useFocusRedirect-BTh85vHi.js";import"./Breadcrumbs-CPGCzSS3.js";import"./useOverflowListTarget-BmFjGYrm.js";import"./useListItemSelect-3vvqn41X.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D9vTtPgP.js";import"./OverflowTooltip-XrtqALdT.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-Dl-NBLHf.js";import"./Table-CJIYknPE.js";function s(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Upgrade Guides/v14.0/Overview"}),`
`,e.jsx(n.h1,{id:"canvas-kit-140-upgrade-guide",children:"Canvas Kit 14.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains an overview of the changes in Canvas Kit v14. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions.`]}),`
`,e.jsx(n.h2,{id:"why-you-should-upgrade",children:"Why You Should Upgrade"}),`
`,e.jsx(n.p,{children:`v14.0 Introduces Workday's new brand direction which includes a new color palette and with it, some
styling updates to our components.`}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:[`Please consult our
`,e.jsx(n.a,{href:"?path=/docs/guides-upgrade-guides-v14-0-overview--docs#tab=visual-changes",children:"v14 Visual Changes"}),` page for a
visual reference of what's changed.`]})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` While v14 does not require an upgrade to our v3 tokens, we strongly advise to upgrade to
the latest to ensure proper branding.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#llm-assisted-migration",children:"LLM Assisted Migration"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#codemod",children:"Codemod"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#instructions",children:"Instructions"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tokens",children:"Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#caution-naming",children:"Caution Naming"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#theming",children:"Theming"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#new-documentation",children:"New Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#canvas-provider-",children:"Canvas Provider"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-updates",children:"Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#avatar-preview",children:"Avatar (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#branding-changes-",children:"Branding Changes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#buttons",children:"Buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#card-",children:"Card"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#count-badge",children:"Count Badge"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#expandable",children:"Expandable"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#hyperlink-and-external-hyperlink",children:"Hyperlink and External Hyperlink"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#loading-dots",children:"Loading Dots"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#modals-and-dialogs",children:"Modals and Dialogs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#pill-preview",children:"Pill (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#search-form-labs-",children:"Search Form (Labs)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#status-indicator-preview-",children:"Status Indicator (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#icons",children:"Icons"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#deprecations",children:"Deprecations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#avatar-in-main",children:"Avatar (Main)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#combobox-labs",children:"Combobox (Labs)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#radio-main",children:"Radio (Main)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#searchform-labs",children:"Search Form (Labs)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#segmented-control-main",children:"Segmented Control (Main)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#side-panel-main",children:"Side Panel (Main)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tokens",children:"Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#useisrtl",children:"useIsRTL"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#removals",children:"Removals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deprecated-buttons",children:"Deprecated Buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#input-provider",children:"Input Provider"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#menu-preview",children:"Menu (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#readonlypillstencil-and-removeablepillstencil",children:"readOnlyPillStencil and removeablePillStencil"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-area",children:"Text Area (Labs)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-input",children:"Text Input (Labs)"})}),`
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
`,e.jsxs(n.h2,{id:"llm-assisted-migration-",children:["LLM Assisted Migration ",e.jsx(a,{type:"ai"})]}),`
`,e.jsxs(n.p,{children:["We've provided an ",e.jsx(n.strong,{children:"LLM migration mapping file"})," (",e.jsx(n.code,{children:"llm-canvas-kit-upgrade-guide-v14.txt"}),`)
specifically designed for use with LLM-based code assistants such as
`,e.jsx(n.a,{href:"https://www.cursor.so/",rel:"nofollow",children:"Cursor"}),`. It contains a compiled LLM consumption version of this v14 Upgrade
Guide. It is not intended for direct human reference or team documentation, but rather as structured
input for LLMs to automate and assist with your migration process.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," LLMs can make mistakes. Please verify changes using this Upgrade Guide."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"How to use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"View raw file"}),": Open the file in a new tab to see the complete migration mapping"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Download LLM File"}),": Save the file locally to upload or paste into your LLM/code assistant"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use with LLM"}),`: Provide the raw content to your LLM/code assistant as context for automated
migration`]}),`
`]}),`
`,e.jsx(t,{rawFileLink:"https://raw.githubusercontent.com/Workday/canvas-kit/master/modules/docs/llm/llm-canvas-kit-upgrade-guide-v14.txt",filename:"llm-canvas-kit-upgrade-guide-v14.txt"}),`
`,e.jsx(n.h2,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:["We've provided a ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod",rel:"nofollow",children:"codemod"}),` to
automatically update your code to work with most of the breaking changes in v14. `,e.jsx(n.strong,{children:`Breaking changes
handled by the codemod are marked with 🤖 in the Upgrade Guide.`})]}),`
`,e.jsxs(n.p,{children:[`A codemod is a script that makes programmatic transformations on your codebase by traversing the
AST, identifying patterns, and making prescribed changes. This greatly decreases opportunities for
error and reduces the number of manual updates, which allows you to focus on changes that need your
attention. `,e.jsx(n.strong,{children:"We highly recommend you use the codemod for these reasons."})]}),`
`,e.jsx(n.p,{children:`If you're new to running codemods or if it's been a minute since you've used one, there are a few
things you'll want to keep in mind.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Our codemods are meant to be run sequentially. For example, if you're using v12 of Canvas Kit,
you'll need to run the v13 codemod before you run v14.`}),`
`,e.jsxs(n.li,{children:["The codemod will update your code to be compatible with the specified version, but it will ",e.jsx(n.strong,{children:"not"}),`
remove outdated dependencies or upgrade dependencies to the latest version. You'll need to upgrade
dependencies on your own.`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We recommend upgrading dependencies before running the codemod."}),`
`,e.jsxs(n.li,{children:["Always review your ",e.jsx(n.code,{children:"package.json"})," files to make sure your dependency versions look correct."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`The codemod will not handle every breaking change in v14. You will likely need to make some manual
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod v14 [path]
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
yarn canvas-kit-codemod v14 [path]
yarn remove @workday/canvas-kit-codemod
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` files. You'll need to
manually edit other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),`, etc.). You may need to run your linter
after executing the codemod, as its resulting formatting (spacing, quotes, etc.) may not match
your project conventions.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Canvas Kit v14 uses ",e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` v3, which introduces new color palettes and
deprecates the old "fruity" color names. For example, `,e.jsx(n.code,{children:"red"})," replaces ",e.jsx(n.code,{children:"cinnamon"}),", ",e.jsx(n.code,{children:"blue"}),` replaces
`,e.jsx(n.code,{children:"blueberry"}),", and ",e.jsx(n.code,{children:"green"})," replaces ",e.jsx(n.code,{children:"greenApple"}),`. We strongly recommend upgrading to
`,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` v3, as using older versions will not match the new brand guidelines or
color system. Although this dependency upgrade is not required, we've offered migration guides and
codemods separately from the v14 upgrade so teams can upgrade when they can.`]}),`
`,e.jsxs(n.p,{children:[`For more information and changes, please view our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/guides-upgrade-guides-v3-overview--docs",rel:"nofollow",children:"Tokens v3 Upgrade Guide"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," v3 Tokens are backwards compatible with older versions of Canvas Kit."]}),`
`]}),`
`,e.jsx(n.p,{children:"Follow these guides to migrate:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you're still using our old tokens from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/tokens"}),`, migrate to
`,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` v3 using our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-tokens-migration-overview--docs",rel:"nofollow",children:"Canvas Kit Token Migration Guide"}),"."]}),`
`,e.jsxs(n.li,{children:[`Otherwise, use our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/guides-upgrade-guides-v3-overview--docs",rel:"nofollow",children:"v2 to v3 Migration Guide"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["🤖 The ",e.jsx(n.code,{children:"v14-tokens"}),` codemod will automatically migrate your tokens, whether you're upgrading from
old tokens or from v2 to v3. Read
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-tokens-migration-migration-codemod--docs",rel:"nofollow",children:"the codemod instructions"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"caution-naming",children:"Caution Naming"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3462",rel:"nofollow",children:"#3462"})]}),`
`,e.jsx(n.p,{children:`To better align with the brand refresh, Alert and Warning states are being renamed to Caution for
better semantics.`}),`
`,e.jsxs(n.p,{children:[`This change mostly affects how you pass an error state to our input components. In most cases, our
input components should be used with our `,e.jsx(n.code,{children:"FormField"})," component to ensure correct accessibility."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FormField error="alert">
  <FormField.Label>First Name</FormField.Label>
  <FormField.Field>
    <FormField.Input as={TextInput} value={value} onChange={handleChange} />
    <FormField.Hint>Cannot contain numbers</FormField.Hint>
  </FormField.Field>
</FormField>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FormField error="caution">
  <FormField.Label>First Name</FormField.Label>
  <FormField.Field>
    <FormField.Input as={TextInput} value={value} onChange={handleChange} />
    <FormField.Hint>Cannot contain numbers</FormField.Hint>
  </FormField.Field>
</FormField>
`})}),`
`,e.jsxs(n.p,{children:["If you're using the error type from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/common"}),` or an error type exposed from
a component, the naming has also changed.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {ErrorType} from '@workday/canvas-kit-react/common';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Switch} from '@workday/canvas-kit-react/switch';
import {TextArea} from '@workday/canvas-kit-react/text-area';

someFunction(ErrorType.Alert);

<TextInput error={TextInput.ErrorType.Alert} />
<Switch error={Switch.ErrorType.Alert} />
<TextArea error={TextArea.ErrorType.Alert} />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {ErrorType} from '@workday/canvas-kit-react/common';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Switch} from '@workday/canvas-kit-react/switch';
import {TextArea} from '@workday/canvas-kit-react/text-area';

someFunction(ErrorType.Caution);

<TextInput error={TextInput.ErrorType.Caution} />
<Switch error={Switch.ErrorType.Caution} />
<TextArea error={TextArea.ErrorType.Caution} />
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["🤖 The codemod will handle the change of ",e.jsx(n.code,{children:"ErrorType.Alert"})," to ",e.jsx(n.code,{children:"ErrorType.Caution"}),` and
`,e.jsx(n.code,{children:'error="alert"'})," to ",e.jsx(n.code,{children:'error="caution"'}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"theming",children:"Theming"}),`
`,e.jsx(n.h3,{id:"new-documentation",children:"New Documentation"}),`
`,e.jsxs(n.p,{children:["We've ",e.jsx(n.strong,{children:"significantly"}),` improved our theming documentation. Please consult our new
`,e.jsx(n.a,{href:"?path=/docs/features-theming-overview--docs",children:"Canvas Kit Theming Guide"}),"."]}),`
`,e.jsx(n.h3,{id:"canvas-provider-",children:"Canvas Provider 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PRs:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3407",rel:"nofollow",children:"#3407"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3429",rel:"nofollow",children:"#3429"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CanvasThemePalette"})," and ",e.jsx(n.code,{children:"CanvasTheme"})," type have been updated to include a ",e.jsx(n.code,{children:"lighter"})," property."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CanvasProvider"})," ",e.jsx(n.code,{children:"theme"})," prop has been updated to include a ",e.jsx(n.code,{children:"lighter"})," color for each palette."]}),`
`]}),`
`,e.jsx(n.h4,{id:"breaking-changes",children:"Breaking Changes"}),`
`,e.jsxs(n.p,{children:["Canvas Provider has been updated to ",e.jsx(n.strong,{children:"remove"}),` default branding colors to ensure proper cascading of
our CSS variables. Instead of generating a palette and shifting the brightness and darkness with
`,e.jsx(n.code,{children:"chroma.js"}),", we use ",e.jsx(n.code,{children:"oklch"})," to generate the palette colors."]}),`
`,e.jsxs(n.p,{children:["Prior to v14, ",e.jsx(n.code,{children:"CanvasProvider"}),` created a
`,e.jsx(n.a,{href:"?path=/docs/features-theming-overview--docs#what-is-a-cascade-barrier",children:"cascade barrier"}),`, which
redefined brand CSS variables under a class and created a higher specificity. This made it difficult
to override brand tokens in certain scenarios. v14 removes that barrier.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsxs(n.p,{children:["In v13, the ",e.jsx(n.code,{children:"useTheme"})," hook would call ",e.jsx(n.code,{children:"createCanvasTheme"})," which generated a palette given a ",e.jsx(n.code,{children:"main"}),`
color via `,e.jsx(n.code,{children:"chroma.js"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CanvasProvider theme={{canvas: {palette: {primary: {main: 'purple'}}}}}>
  <App />
</CanvasProvider>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsxs(n.p,{children:["We use ",e.jsx(n.code,{children:"oklch"}),` to generate the palette colors. The color shifting will be different. If you want
more control over the colors, we suggest providing the full palette object.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CanvasProvider
  theme={{
    canvas: {
      palette: {
        primary: {
          lightest: base.blue25,
          light: base.blue200,
          main: base.blue600,
          dark: base.blue700,
          darkest: base.blue800,
          contrast: base.neutral0,
        },
      },
    },
  }}
>
  <App />
</CanvasProvider>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Or"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CanvasProvider theme={{canvas: {palette: {primary: {main: base.blue600}}}}}>
  <App />
</CanvasProvider>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The way ",e.jsx(n.code,{children:"chroma.js"})," and ",e.jsx(n.code,{children:"oklch"})," generate colors ",e.jsx(n.strong,{children:"is different"}),`. While we work on a
better algorithm to determine hue, chroma and lightness and color shifting that best represents an
accessible palette, `,e.jsx(n.strong,{children:"you may see color discrepancies"}),`. If you want to continue using the old way
of generating a color palette with `,e.jsx(n.code,{children:"chroma.js"}),", you can use ",e.jsx(n.code,{children:"createCanvasTheme"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CanvasProvider
  theme={{canvas: createCanvasTheme({palette: {primary: {main: cssVar(base.blue600)}}})}}
>
  <App />
</CanvasProvider>
`})}),`
`,e.jsxs(n.p,{children:[`The reason for this change is to ensure that the CSS variables properly cascade to all components.
Before in v13, the `,e.jsx(n.code,{children:"CanvasProvider"}),` would add the brand tokens under a class name, creating a higher
specificity.`]}),`
`,e.jsx(n.h3,{id:"useisrtl",children:"useIsRTL"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3477",rel:"nofollow",children:"#3477"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useIsRTL"}),` hook has been deprecated. Please use
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties",rel:"nofollow",children:"CSS logical properties"}),`
for styling, `,e.jsx(n.code,{children:"isElementRTL"})," for event handlers, and ",e.jsx(n.code,{children:"shouldMirrorInRTL"}),` for icons. If you need
`,e.jsx(n.code,{children:"useIsRTL"})," for any other reason, please file a issue. See the ",e.jsx(n.a,{href:"#icons",children:"Icons"}),` section for more
details on the new `,e.jsx(n.code,{children:"shouldMirrorInRTL"})," prop."]}),`
`,e.jsx(n.h2,{id:"component-updates",children:"Component Updates"}),`
`,e.jsx(n.h3,{id:"avatar-preview",children:"Avatar (Preview)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3430",rel:"nofollow",children:"#3430"})]}),`
`,e.jsxs(n.p,{children:["A new ",e.jsx(n.code,{children:"Avatar"})," component has been added to the ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),` package that
matches our brand refresh.`]}),`
`,e.jsx(n.h4,{id:"api-changes-from-avatar-main",children:"API Changes from Avatar (Main)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Avatar"})," has a ",e.jsx(n.code,{children:"name"})," prop. This is required to ensure a fallback if a ",e.jsx(n.code,{children:"url"}),` is not provided. The
`,e.jsx(n.code,{children:"name"})," prop also determines the initials and the ",e.jsx(n.code,{children:"alt"})," text for the image if a ",e.jsx(n.code,{children:"url"})," is provided."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"url"})," is unchanged. This prop is optional and will be used to display an image ",e.jsx(n.code,{children:"Avatar"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant"})," defines the color of the ",e.jsx(n.code,{children:"Avatar"}),". It accepts the following values:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"blue"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"amber"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"teal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"purple"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["By default, the ",e.jsx(n.code,{children:"Avatar"})," will render a ",e.jsx(n.code,{children:"div"})," element. If you need to render a ",e.jsx(n.code,{children:"button"}),` element use
the `,e.jsx(n.code,{children:"BaseAvatar"})," component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size"})," accepts the following values:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"extraExtraLarge"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"extraLarge"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"large"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"small"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"extraSmall"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"extraExtraSmall"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Avatar (Main)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Avatar } from '@workday/canvas-kit-react/avatar';

<Avatar altText="John Doe" size="extraExtraLarge" variant="light" as="div" url={yourImageUrl} />

// For Avatars that were buttons
<Avatar altText="John Doe" size="extraExtraLarge" variant="dark" url={yourImageUrl} />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Avatar (Preview)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Avatar } from '@workday/canvas-kit-preview-react/avatar';

<Avatar name="John Doe" size="extraExtraLarge" variant="blue" />

// Preferred Initials
<Avatar name="Julian Doe Smith" size="extraExtraLarge" variant="blue" preferredInitials="JS" />
`})}),`
`,e.jsx(n.h3,{id:"branding-changes-",children:"Branding Changes 💅"}),`
`,e.jsxs(n.p,{children:[`Several components have been refactored to reflect our new brand direction. Most of these changes
revolve around the use of our new brand colors. For a better guide on what has changed in our v3.0.0
tokens, please view the Tokens v3.0.0
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/guides-upgrade-guides-v3-overview--docs",rel:"nofollow",children:"Upgrade Guide"}),"."]}),`
`,e.jsxs(n.p,{children:["The following components have been updated (",e.jsxs(n.strong,{children:[`see
`,e.jsx(n.a,{href:"?path=/docs/guides-upgrade-guides-v14-0-overview--docs#tab=visual-changes",children:"v14 Visual Changes"}),` for a visual
reference of the updates`]}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Breadcrumbs"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3270",rel:"nofollow",children:"#3270"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3447",rel:"nofollow",children:"#3447"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Buttons"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3394",rel:"nofollow",children:"#3394"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ColorPicker"})," (Main) ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3307",rel:"nofollow",children:"#3307"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ColorPicker"})," (preview) ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3307",rel:"nofollow",children:"#3307"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"InformationHighlight"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3443",rel:"nofollow",children:"#3443"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"LoadingDots"})," (Main) ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3393",rel:"nofollow",children:"#3393"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pagination"})," (Preview) ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3300",rel:"nofollow",children:"#3300"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3446",rel:"nofollow",children:"#3446"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchForm"})," (Labs) ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3303",rel:"nofollow",children:"#3303"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SegmentedControl"})," (Main) ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3278",rel:"nofollow",children:"#3278"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SegmentedControl"})," (Preview) ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3278",rel:"nofollow",children:"#3278"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ToolbarDropdownButton"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3293",rel:"nofollow",children:"#3293"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ToolbarIconButton"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3293",rel:"nofollow",children:"#3293"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"buttons",children:"Buttons"}),`
`,e.jsx(n.h4,{id:"tertiary-button-",children:"Tertiary Button 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3394",rel:"nofollow",children:"3394"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Breaking Changes"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"TertiaryButton"})," component no longer supports the ",e.jsx(n.code,{children:"isThemable"}),` prop. To customize the
appearance of `,e.jsx(n.code,{children:"TertiaryButton"}),", use the ",e.jsx(n.code,{children:"cs"})," prop for custom styles or the ",e.jsx(n.code,{children:"colors"}),` prop for
palette-based color overrides.`]}),`
`,e.jsxs(n.li,{children:["The shape of ",e.jsx(n.code,{children:"TertiaryButton"}),` has changed to have rounded corners, aligning with other buttons and
our new brand direction.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TertiaryButton isThemable>Themable Button</TertiaryButton>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TertiaryButton cs={{/* custom styles */}}>Custom Button</TertiaryButton>
// OR
<TertiaryButton colors={{/* palette colors */}}>Custom Button</TertiaryButton>
`})}),`
`,e.jsxs(n.p,{children:[`If you need to override default styles, refer to this
`,e.jsx(n.a,{href:"?path=/docs/components-buttons--docs#custom-styles",children:"example"}),"."]}),`
`,e.jsx(n.h3,{id:"card-",children:"Card 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3350",rel:"nofollow",children:"#3350"})]}),`
`,e.jsxs(n.p,{children:["We've rebranded the ",e.jsx(n.code,{children:"Card"}),` component to align with our new brand direction and provide better visual
hierarchy and more flexible styling options.`]}),`
`,e.jsx(n.h4,{id:"removed-box-shadow",children:"Removed Box Shadow"}),`
`,e.jsxs(n.p,{children:["The default ",e.jsx(n.code,{children:"Card"}),` variant no longer includes a box shadow, creating a cleaner, flatter appearance
that aligns with our new brand's emphasis on simplicity and clarity. This is a `,e.jsx(n.strong,{children:`visual breaking
change`}),` that may affect your application's visual hierarchy. If your design requires shadow you can
add it through the `,e.jsx(n.code,{children:"cs"})," prop."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Card>
  <Card.Heading>Card Title</Card.Heading>
  <Card.Body>Card content with shadow</Card.Body>
</Card>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.p,{children:"Only do this if you need a shadow. Otherwise, adhere to the default styling."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {system} from '@workday/canvas-tokens-web';

<Card cs={{boxShadow: system.depth[1]}}>
  <Card.Heading>Card Title</Card.Heading>
  <Card.Body>Card content with shadow</Card.Body>
</Card>;
`})}),`
`,e.jsx(n.h4,{id:"new-card-variants",children:"New Card Variants"}),`
`,e.jsx(n.p,{children:"We've added two new variants to provide more styling flexibility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderless"})}),`: Use this variant when placing cards on colored backgrounds where it needs to
blend seamlessly without borders or shadows.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"filled"})}),`: Use this variant when you need a card with a grayish background to create visual
separation from the page background.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"variant"})," prop is optional. If no variant is specified, the card will use the default styling."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Default card (no variant prop needed) with a border and no box shadow
<Card>
  <Card.Heading>Default Card</Card.Heading>
  <Card.Body>Default styling with borders, no shadow</Card.Body>
</Card>

// Borderless variant for colored backgrounds
<Card variant="borderless">
  <Card.Heading>Card on Colored Background</Card.Heading>
  <Card.Body>Content blends with background</Card.Body>
</Card>

// Filled variant with grayish background
<Card variant="filled">
  <Card.Heading>Card with grayish Background</Card.Heading>
  <Card.Body>Content with visual separation</Card.Body>
</Card>
`})}),`
`,e.jsx(n.h4,{id:"replaced-margins-with-gap",children:"Replaced Margins with Gap"}),`
`,e.jsxs(n.p,{children:["We've replaced the individual margins on ",e.jsx(n.code,{children:"Card.Heading"})," and ",e.jsx(n.code,{children:"Card.Body"})," with ",e.jsx(n.code,{children:"gap"}),`. The card now
uses `,e.jsx(n.code,{children:"display: flex"})," with ",e.jsx(n.code,{children:"flex-direction: column"})," by default, and the ",e.jsx(n.code,{children:"gap"}),` prop provides
consistent spacing between all direct children. This provides more consistent spacing and better
control over the layout. This is a `,e.jsx(n.strong,{children:"visual breaking change"}),` that may affect the spacing between
card elements.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Card>
  <Card.Heading marginBlock="zero">Title</Card.Heading>
  <Card.Body marginBlock="zero">Card without any spacing</Card.Body>
</Card>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Card cs={{gap: system.space.zero}}>
  <Card.Heading>Title</Card.Heading>
  <Card.Body>Card without any spacing</Card.Body>
</Card>
`})}),`
`,e.jsx(n.h3,{id:"count-badge",children:"Count Badge"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3411",rel:"nofollow",children:"#3411"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"CountBadge"})," component has been updated to reflect our new brand direction."]}),`
`,e.jsxs(n.p,{children:["Additionally, a new ",e.jsx(n.code,{children:"emphasis"})," prop has been added, allowing you to choose between ",e.jsx(n.code,{children:"high"})," and ",e.jsx(n.code,{children:"low"}),`
emphasis for the badge.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Count Badge variants in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CountBadge /> // Default count badge with high emphasis
<CountBadge variant="inverse" /> // Inverse default count badge

// New emphasis prop
<CountBadge emphasis="low" /> // Default count badge with low emphasis
<CountBadge variant="inverse" emphasis="low" /> // Inverse count badge with low emphasis
`})}),`
`,e.jsx(n.h3,{id:"expandable",children:"Expandable"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PRs:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3389",rel:"nofollow",children:"#3389"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3430",rel:"nofollow",children:"#3430"})]}),`
`,e.jsxs(n.p,{children:["The hover state of ",e.jsx(n.code,{children:"Expandable.Target"})," has been updated to use ",e.jsx(n.code,{children:"system.color.bg.alt.soft"}),` instead of
`,e.jsx(n.code,{children:"system.color.bg.alt.default"})," to match our new brand direction."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"focus"})," state has been updated to use ",e.jsx(n.code,{children:"system.color.border.primary.default"}),` to ensure the same
focus state color across all components.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Expandable.Avatar"})," has been updated to use the ",e.jsx(n.code,{children:"Avatar"}),` component from Preview. This change
requires that you update the `,e.jsx(n.code,{children:"altText"})," prop to ",e.jsx(n.code,{children:"name"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["🤖 The codemod will handle the change of ",e.jsx(n.code,{children:"altText"})," to ",e.jsx(n.code,{children:"name"})," on ",e.jsx(n.code,{children:"Expandable.Avatar"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["These changes are only ",e.jsx(n.strong,{children:"visual"})," and should not affect the functionality of the component."]}),`
`,e.jsx(n.h3,{id:"hyperlink-and-external-hyperlink",children:"Hyperlink and External Hyperlink"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3390",rel:"nofollow",children:"#3390"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Hyperlink"})," and ",e.jsx(n.code,{children:"ExternalHyperlink"})," now have ",e.jsx(n.code,{children:"standalone"})," and ",e.jsx(n.code,{children:"standaloneInverse"}),` variants. This
removes the underline text decoration for use outside the context of body text.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Hyperlink and ExternalHyperlink in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Hyperlink variant="standalone" href="#hyperlink">Hyperlink</Hyperlink>
<ExternalHyperlink variant="standalone" href="#external-hyperlink">External Hyperlink</ExternalHyperlink>
<Hyperlink variant="standaloneInverse" href="#hyperlink">Hyperlink</Hyperlink>
<ExternalHyperlink variant="standaloneInverse" href="#external-hyperlink">External Hyperlink</ExternalHyperlink>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Only use the ",e.jsx(n.code,{children:"standalone"})," or ",e.jsx(n.code,{children:"standaloneInverse"})," variant in cases where ",e.jsx(n.code,{children:"HyperLink"}),` and
`,e.jsx(n.code,{children:"ExternalHyperlink"})," are used outside the context of body text."]}),`
`]}),`
`,e.jsx(n.h3,{id:"loading-dots",children:"Loading Dots"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3393",rel:"nofollow",children:"#3393"})]}),`
`,e.jsxs(n.p,{children:[`We've updated the colors to match our brand refresh. We've changed the default color from
`,e.jsx(n.code,{children:"system.color.bg.alt.strong"})," to ",e.jsx(n.code,{children:"system.color.bg.muted.strong"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"LoadingDots"})," now has an ",e.jsx(n.code,{children:"inverse"}),` variant. Use this variant when the Loading Dots are on a dark
background or image.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Use inverse variant when the Loading Dots are on a dark background or image
<LoadingDots variant="inverse" />
`})}),`
`,e.jsx(n.h3,{id:"pill-preview",children:"Pill (Preview)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PRs:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3430",rel:"nofollow",children:"#3430"}),`,
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3446",rel:"nofollow",children:"#3446"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Pill"})," has been updated to use the ",e.jsx(n.code,{children:"Avatar"}),` component from Preview. This change requires that you
provide a value for the `,e.jsx(n.code,{children:"name"})," prop."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["🤖 The codemod will handle the change of ",e.jsx(n.code,{children:"altText"})," to ",e.jsx(n.code,{children:"name"})," on ",e.jsx(n.code,{children:"Pill.Avatar"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Pill"})," component no longer supports ",e.jsx(n.code,{children:"default"})," as a value for the ",e.jsx(n.code,{children:"variant"}),` prop. If the
`,e.jsx(n.code,{children:"variant"})," prop is not provided, the component will use its default styling."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"readOnlyPillStencil"})," and ",e.jsx(n.code,{children:"removeablePillStencil"})," have been removed. Please use ",e.jsx(n.code,{children:"pillStencil"}),`
instead.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Pill variant="default">
  <Pill.Avatar altText="John Doe" />
  <Pill.Label>John Doe</Pill.Label>
</Pill>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Pill>
  <Pill.Avatar name="John Doe" />
  <Pill.Label>John Doe</Pill.Label>
</Pill>
`})}),`
`,e.jsx(n.h3,{id:"modals-and-dialogs",children:"Modals and Dialogs"}),`
`,e.jsxs(n.p,{children:["Previously, the ",e.jsx(n.code,{children:"usePopupStack"}),` hook created a CSS class name that was passed to our Popups. We
attached those theme styles to that class name. This allowed the theme to be available in our
Popups. But it also created a cascade barrier that blocked the global theme from being applied to
our Popup components. Because we now use global CSS variables, we no longer need this class name to
provide the global theme to Popups. But we have to remove this generated class name to allow the
global theme to be applied to Popups. Instead, only the defined theme properties from the `,e.jsx(n.code,{children:"theme"})," prop from the ",e.jsx(n.code,{children:"CanvasProvider"})," will be applied to Popups and Modals."]}),`
`,e.jsxs(n.p,{children:[`If you want to have scoped theming where a part of your application needs different theming, you can
still do this via the `,e.jsx(n.code,{children:"theme"})," prop."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` Only the properties of the theme object that are changed will be forward to popups and
modals. IE, if you change theme.palette.primary.main, only those tokens will change for popups and
modals.`]}),`
`]}),`
`,e.jsx(n.h4,{id:"scoped-theming-vs-global-theming",children:"Scoped Theming vs Global Theming"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Only"})," use the ",e.jsx(n.code,{children:"theme"})," prop on the ",e.jsx(n.code,{children:"CanvasProvider"}),` if you intentionally want to theme part of
your application that is different from global theming.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Scoped Theming"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
<CanvasProvider theme={{canvas: {palette: {primary: {main: 'teal'}}}}}>
 {//part of your app to have different theme from the rest of your application}
</CanvasProvider>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," Use the ",e.jsx(n.code,{children:"theme"})," prop on the ",e.jsx(n.code,{children:"CanvasProvider"}),` if you intentionally want to theme
part of your application that is different from global theming.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Global Theming"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';

<CanvasProvider>
  <App />
</CanvasProvider>;
`})}),`
`,e.jsx(n.h3,{id:"search-form-labs-",children:"Search Form (Labs) 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3303",rel:"nofollow",children:"#3303"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SearchThemeAttributes"})," type has been updated. Both ",e.jsx(n.code,{children:"boxShadow"})," and ",e.jsx(n.code,{children:"boxShadowFocus"}),` now only accept
a `,e.jsx(n.code,{children:"string"})," instead of ",e.jsx(n.code,{children:"string | string[]"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const customTheme = {
  background: colors.cinnamon600,
  backgroundFocus: colors.frenchVanilla100,
  placeholderColor: colors.frenchVanilla100,
  placeholderColorFocus: colors.blackPepper400,
  boxShadow: ['10px 5px 5px red', '60px -16px teal'],
  boxShadowFocus: ['10px 5px 5px red', '60px -16px teal'],
} as SearchThemeAttributes;

<SearchForm
  searchTheme={customTheme}
  autocompleteItems={menuItems}
  onInputChange={filterMenuItems}
  onSubmit={handleSubmit}
/>;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const customTheme = {
  background: colors.cinnamon600,
  backgroundFocus: colors.frenchVanilla100,
  placeholderColor: colors.frenchVanilla100,
  placeholderColorFocus: colors.blackPepper400,
  boxShadow: '10px 5px 5px red',
  boxShadowFocus: '10px 5px 5px red',
} as SearchThemeAttributes;

<SearchForm
  searchTheme={customTheme}
  autocompleteItems={menuItems}
  onInputChange={filterMenuItems}
  onSubmit={handleSubmit}
/>;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SearchTheme"})," enum type has been updated to have string values ",e.jsx(n.code,{children:"light"}),", ",e.jsx(n.code,{children:"dark"})," and ",e.jsx(n.code,{children:"transparent"}),`.
This `,e.jsx(n.strong,{children:"should not"})," affect the way you use the type unless you're passing a ",e.jsx(n.code,{children:"number"})," of ",e.jsx(n.code,{children:"0"}),", ",e.jsx(n.code,{children:"1"}),` or
`,e.jsx(n.code,{children:"2"})," to the ",e.jsx(n.code,{children:"searchTheme"})," prop."]}),`
`,e.jsx(n.h3,{id:"status-indicator-preview-",children:"Status Indicator (Preview) 🚨"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3354",rel:"nofollow",children:"#3354"})]}),`
`,e.jsxs(n.p,{children:["Preview ",e.jsx(n.code,{children:"StatusIndicator"})," is rounder and more vibrant with base emphasis (",e.jsx(n.code,{children:"low"}),")."]}),`
`,e.jsxs(n.p,{children:["Variant names of the preview ",e.jsx(n.code,{children:"StatusIndicator"})," have been updated:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"blue"})," → ",e.jsx(n.code,{children:"primary"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"green"})," → ",e.jsx(n.code,{children:"success"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"orange"})," → ",e.jsx(n.code,{children:"caution"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"red"})," → ",e.jsx(n.code,{children:"critical"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gray"})," → ",e.jsx(n.code,{children:"neutral"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"StatusIndicatorVariant"}),` type has been updated to contain the new variant names listed above. If
you use the old variant values, update to use the new ones mapped above. Use
`,e.jsx(n.code,{children:"StatusIndicatorProps['variant']"})," instead."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<StatusIndicator variant="blue" />
<StatusIndicator variant="green" />
<StatusIndicator variant="orange" />
<StatusIndicator variant="red" />
<StatusIndicator variant="gray" />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<StatusIndicator variant="primary" />
<StatusIndicator variant="success" />
<StatusIndicator variant="caution" />
<StatusIndicator variant="critical" />
<StatusIndicator variant="neutral" />
`})}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3477",rel:"nofollow",children:"#3477"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"shouldMirrorInRTL"})," has been added to ",e.jsx(n.code,{children:"Icon"})," components (",e.jsx(n.code,{children:"SVG"}),", ",e.jsx(n.code,{children:"SystemIcon"}),", ",e.jsx(n.code,{children:"AccentIcon"}),`,
`,e.jsx(n.code,{children:"AppletIcon"}),", ",e.jsx(n.code,{children:"SystemIconCircle"}),", ",e.jsx(n.code,{children:"AIIngressButton"}),", ",e.jsx(n.code,{children:"BaseButton.Icon"}),", ",e.jsx(n.code,{children:"Button"}),`,
`,e.jsx(n.code,{children:"ToolbarDropdownButton"}),", ",e.jsx(n.code,{children:"ToolbarIconButton"}),", ",e.jsx(n.code,{children:"ButtonLabelIcon"}),", ",e.jsx(n.code,{children:"PrimaryButton"}),", ",e.jsx(n.code,{children:"SecondaryButton"}),`,
and `,e.jsx(n.code,{children:"TertiaryButton"}),"). This is used to mirror the icon when the content direction is ",e.jsx(n.code,{children:"rtl"}),`. This is
meant to replace `,e.jsx(n.code,{children:"useIsRTL"})," combined with the ",e.jsx(n.code,{children:"shouldMirror"}),` prop. Instead of getting the content
direction from JavaScript and passing it to components, you can now pass `,e.jsx(n.code,{children:"shouldMirrorInRTL={true}"}),`
to the component which will mirror the icon only when the content direction is `,e.jsx(n.code,{children:"rtl"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<IconComponent shouldMirror={useIsRTL()} />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<IconComponent shouldMirrorInRTL />
`})}),`
`,e.jsxs(n.p,{children:["You can still use ",e.jsx(n.code,{children:"shouldMirror"}),` if you intend to always mirror an icon. This is less ideal because
you cannot use `,e.jsx(n.code,{children:"shouldMirror"})," and ",e.jsx(n.code,{children:"shouldMirrorInRTL"}),` together. The icon will be mirrored regardless
of content direction if both props are used.`]}),`
`,e.jsx(n.h2,{id:"deprecations",children:"Deprecations"}),`
`,e.jsxs(n.p,{children:["We add the ",e.jsx(n.a,{href:"https://jsdoc.app/tags-deprecated.html",rel:"nofollow",children:"@deprecated"}),` JSDoc tag to code we plan to remove
in a future major release. This signals consumers to migrate to a more stable alternative before the
deprecated code is removed.`]}),`
`,e.jsx(n.h3,{id:"avatar-in-main",children:"Avatar in Main"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3430",rel:"nofollow",children:"#3430"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated the ",e.jsx(n.code,{children:"Avatar"})," component in ",e.jsx(n.code,{children:"@workday/canvas-kit-react"}),` Main package. Please use the
`,e.jsx(n.code,{children:"Avatar"})," component in our Preview package."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Avatar } from '@workday/canvas-kit-react/avatar';

// For Avatars that were divs
<Avatar altText="John Doe" size="extraExtraLarge" as="div" url={yourImageUrl} />

// For Avatars that were buttons
<Avatar altText="John Doe" onClick={() => console.log('Avatar clicked')} />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Avatar} from '@workday/canvas-kit-preview-react/avatar';

// name is used as a fallback if the image url is broken or still loading
// variant defines the color of the Avatar
<Avatar name="John Doe" size="extraExtraLarge" variant="teal" url={yourImageUrl} />;
`})}),`
`,e.jsxs(n.p,{children:["If you need to render a ",e.jsx(n.code,{children:"button"})," element use the ",e.jsx(n.code,{children:"BaseAvatar"})," component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {BaseAvatar} from '@workday/canvas-kit-preview-react/avatar';

<BaseAvatar
  name="John Doe"
  size="extraExtraLarge"
  variant="teal"
  as="button"
  onClick={() => console.log('Avatar clicked')}
>
  <BaseAvatar.Name name="John Doe" />
</BaseAvatar>;
`})}),`
`,e.jsx(n.h3,{id:"combobox-labs",children:"Combobox (Labs)"}),`
`,e.jsxs(n.p,{children:["The Combobox component in ",e.jsx(n.code,{children:"@workday/canvas-kit-labs-react/combobox"}),` has been deprecated. Please
migrate to the `,e.jsx(n.a,{href:"?path=/docs/features-combobox--docs",children:"Combobox"}),` in
`,e.jsx(n.code,{children:"@workday/canvas-kit-react"}),"."]}),`
`,e.jsx(n.h3,{id:"radio-main",children:"Radio (Main)"}),`
`,e.jsxs(n.p,{children:["The Radio component in ",e.jsx(n.code,{children:"@workday/canvas-kit-react/radio"}),` has been deprecated. Please migrate to the
`,e.jsx(n.a,{href:"?path=/docs/preview-inputs-radio--docs",children:"Radio"})," in ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),` for improved accessibility
and API consistency.`]}),`
`,e.jsx(n.h3,{id:"searchform-labs",children:"SearchForm (Labs)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3469",rel:"nofollow",children:"#3469"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SearchForm"})," in ",e.jsx(n.code,{children:"@workday/canvas-kit-labs-react/search-form"}),` has been deprecated. Please migrate
to the `,e.jsx(n.a,{href:"?path=/docs/features-combobox--docs",children:"Combobox"})," in ",e.jsx(n.code,{children:"@workday/canvas-kit-react"}),"."]}),`
`,e.jsx(n.h3,{id:"segmented-control-main",children:"Segmented Control (Main)"}),`
`,e.jsxs(n.p,{children:["The Segmented Control component in ",e.jsx(n.code,{children:"@workday/canvas-kit-react/segmented-control"}),` has been
deprecated. Please migrate to the `,e.jsx(n.a,{href:"?path=/docs/preview-segmented-control--docs",children:"Segmented Control"}),` in
`,e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"})," for improved features and support."]}),`
`,e.jsx(n.h3,{id:"side-panel-main",children:"Side Panel (Main)"}),`
`,e.jsxs(n.p,{children:["The Side Panel component in ",e.jsx(n.code,{children:"@workday/canvas-kit-react/side-panel"}),` has been deprecated. Please
migrate to the `,e.jsx(n.a,{href:"?path=/docs/preview-side-panel--docs",children:"Side Panel"}),` in
`,e.jsx(n.code,{children:"@workday/canvas-kit-preview-react/side-panel"})," for enhanced functionality."]}),`
`,e.jsx(n.h3,{id:"tokens-1",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["The legacy tokens from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/tokens"}),` have been deprecated. Please use the new
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"Canvas Tokens Web"}),`
package (`,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),`) for all token usage. Follow the
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit?path=/docs/guides-tokens-migration-overview--docs",rel:"nofollow",children:"migration guide"}),`
for a smoother upgrade.`]}),`
`,e.jsx(n.h2,{id:"removals",children:"Removals"}),`
`,e.jsx(n.p,{children:`Removals have been deleted from our codebase and may no longer be consumed. We've either promoted or
replaced the removed component or utility.`}),`
`,e.jsx(n.h3,{id:"deprecated-buttons",children:"Deprecated Buttons"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3439",rel:"nofollow",children:"#3439"})]}),`
`,e.jsxs(n.p,{children:["Long overdue, but a sign of moving forward, we've removed our ",e.jsx(n.code,{children:"DeprecatedButton"}),`. Our design system
supported this for quite some time, but with the advancement in theming, our components API and our
flexibility, it is time for us to finally remove this component. This component has served as a
reminder of how far we've come and we're thankful for this change.`]}),`
`,e.jsxs(n.p,{children:["Although unlikely, if you were using ",e.jsx(n.code,{children:"DeprecatedButton"}),` please use our flexible and themable buttons
like `,e.jsx(n.code,{children:"PrimaryButton"}),", ",e.jsx(n.code,{children:"SecondaryButton"})," or ",e.jsx(n.code,{children:"TertiaryButton"}),"."]}),`
`,e.jsx(n.h3,{id:"input-provider",children:"Input Provider"}),`
`,e.jsxs(n.p,{children:["We've removed ",e.jsx(n.code,{children:"InputProvider"})," from our codebase and the ",e.jsx(n.code,{children:"CanvasProvider"}),`. The intent of the provider
was to check the users input and apply focus styles accordingly to our components. This was needed
when we still supported IE11 to ensure we could be consistent on styling based on user input events.
Since dropping support and moving to `,e.jsx(n.code,{children:":focus-visible"}),`, we no longer need this provider. We now allow
browser heuristics to determine when an element should receive visual focus styles. For more
information, please view the
`,e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",rel:"nofollow",children:["MDN docs on ",e.jsx(n.code,{children:":focus-visible"})]}),"."]}),`
`,e.jsxs(n.p,{children:[`If you are trying to apply focus styles to our components, we strongly advise using the
`,e.jsx(n.code,{children:":focus-visible"})," pseudo selector."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {createStyles} from '@workday/canvas-kit-styling'
import {PrimaryButton} from '@workday/canvas-kit-react/button'

const buttonStyles = createStyles({
  '&:focus-visible': {
    outline: '2px solid red'
  }
})

<PrimaryButton cs={buttonStyles}>
  Click Me
</PrimaryButton>
`})}),`
`,e.jsx(n.h3,{id:"menu-preview",children:"Menu (Preview)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3353",rel:"nofollow",children:"#3353"})]}),`
`,e.jsxs(n.p,{children:["We've removed ",e.jsx(n.code,{children:"Menu"})," from ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),`. Please use
`,e.jsx(n.a,{href:"?path=/docs/components-popups-menu--docs",children:"Menu"})," from ",e.jsx(n.code,{children:"@workday/canvas-kit-react"})," instead."]}),`
`,e.jsx(n.h3,{id:"readonlypillstencil-and-removeablepillstencil",children:"readOnlyPillStencil and removeablePillStencil"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"readOnlyPillStencil"})," and ",e.jsx(n.code,{children:"removeablePillStencil"}),` utilities have been removed from the Pill
package. Please use `,e.jsx(n.code,{children:"pillStencil"})," instead."]}),`
`,e.jsx(n.h3,{id:"text-area-preview",children:"Text Area (Preview)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3471",rel:"nofollow",children:"#3471"})]}),`
`,e.jsxs(n.p,{children:["We've removed ",e.jsx(n.code,{children:"TextArea"})," from ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),`. Please use
`,e.jsx(n.a,{href:"?path=/docs/components-inputs-textarea--docs",children:"TextArea"})," from ",e.jsx(n.code,{children:"@workday/canvas-kit-react"})," instead."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {TextArea} from '@workday/canvas-kit-preview-react/text-area';

<TextArea orientation="vertical">
  <TextArea.Label>Leave a review</TextArea.Label>
  <TextArea.Field onChange={handleChange} value={value} />
</TextArea>;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

<FormField>
  <FormField.Label>Leave a Review</FormField.Label>
  <FormField.Field>
    <FormField.Input as={TextArea} onChange={handleChange} value={value} />
  </FormField.Field>
</FormField>;
`})}),`
`,e.jsx(n.h3,{id:"text-input-preview",children:"Text Input (Preview)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/3471",rel:"nofollow",children:"#3471"})]}),`
`,e.jsxs(n.p,{children:["We've removed ",e.jsx(n.code,{children:"TextInput"})," from ",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),`. Please use
`,e.jsx(n.a,{href:"?path=/docs/components-inputs-text-input--docs",children:"TextInput"})," from ",e.jsx(n.code,{children:"@workday/canvas-kit-react"})," instead."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before in v13"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {TextInput} from '@workday/canvas-kit-preview-react/text-input';

<TextInput orientation="vertical">
  <TextInput.Label>Email</TextInput.Label>
  <TextInput.Field onChange={handleChange} value={value} />
</TextInput>;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After in v14"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {TextArea} from '@workday/canvas-kit-react/text-area';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-input';

<FormField>
  <FormField.Label>Leave a Review</FormField.Label>
  <FormField.Field>
    <FormField.Input as={TextInput} onChange={handleChange} value={value} />
  </FormField.Field>
</FormField>;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"common-issues",children:"Common Issues"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dependency Conflicts"}),`: When upgrading to the latest major version of Canvas Kit, all related
Canvas Kit packages should be updated at the same time:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"@workday/canvas-kit-react": "^13.5.6"'})," → ",e.jsx(n.code,{children:'"@workday/canvas-kit-react": "^14.0.0"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"@workday/canvas-kit-styling": "^13.5.6"'})," → ",e.jsx(n.code,{children:'"@workday/canvas-kit-styling": "^14.0.0"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"@workday/canvas-kit-preview-react": "^13.5.6"'}),` →
`,e.jsx(n.code,{children:'"@workday/canvas-kit-preview-react": "^14.0.0"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"@workday/canvas-kit-labs-react": "^13.5.6"'})," → ",e.jsx(n.code,{children:'"@workday/canvas-kit-labs-react": "^14.0.0"'})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Token Issues"}),": Our components rely on the ",e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` package which provides
our CSS variables and ensures the correct styling of our components. Make sure to upgrade to the
latest version of Canvas Tokens Web and install it correctly. For more information,
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"view our docs"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Color Discrepancies"}),`: If you notice visual differences after upgrading, this may be due to the
change from `,e.jsx(n.code,{children:"chroma.js"})," to ",e.jsx(n.code,{children:"oklch"}),` color generation. Consider providing explicit color values in
your theme configuration.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Build Errors"}),`: If you encounter build errors after running the codemod, ensure your linter is
run as the codemod's formatting may not match your project conventions.`]}),`
`]}),`
`]}),`
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
entirely.`})]})}function Be(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{Be as default};
