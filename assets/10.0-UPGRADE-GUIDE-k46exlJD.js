import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as r}from"./index-3YbjYt95.js";import{ae as t}from"./index-BH6-T5Fm.js";import"./index-IfJi-UCQ.js";import"./iframe-RxBVwp_9.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/Upgrade Guides/v10.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-100-upgrade-guide",children:"Canvas Kit 10.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains an overview of the changes in Canvas Kit v10. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemod",children:"Codemod"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#styling",children:"Styling"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#removals",children:"Removals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#css-packages",children:"CSS Packages"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#useBanner",children:"useBanner"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#deprecations",children:"Deprecations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#input-icon-container",children:"Input Icon Container"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#select-preview",children:"Select (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#space-numbers",children:"Space Numbers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#table",children:"Table"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#token-updates",children:"Token Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#space-and-depth",children:"Space and Depth"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-updates",children:"Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#button",children:"Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popups",children:"Popups"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#select-main",children:"Select (Main)"})}),`
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
`,e.jsx(n.p,{children:`Unlike past major releases, v10 does not have a codemod. The changes in v10 were either deemed
infeasible to codemod or provided low ROI based on consumer usage. This is subject to change; if
necessary, we can release codemods as minor updates.`}),`
`,e.jsx(n.p,{children:`Codemods are here to stay and will continue to be a part of our release process. In the meantime,
this Upgrade Guide should provide everything you need to update your code to be compatible with v10.`}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsx(n.h3,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2273",rel:"nofollow",children:"#2273"})]}),`
`,e.jsxs(n.p,{children:["We've introduced a new styling package ",e.jsx(n.code,{children:"@workday/canvas-kit-styling"}),` which is a wrapper around
`,e.jsx(n.code,{children:"@emotion/css"}),"."]}),`
`,e.jsxs(n.p,{children:[`If you're using Canvas Kit and not directly using this package, there is nothing extra to do on your
end. The Canvas Kit packages are using the static compilation as part of the build process. If you
want to use this package for your own styles, you don't need to do anything special to use in
development; just reference our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started--docs",rel:"nofollow",children:"documentation"}),` on
how to get started.`]}),`
`,e.jsxs(n.p,{children:[`For more information on why this package was introduced, please reference our
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2265",rel:"nofollow",children:"discussion"}),` on the future of styling for
Canvas Kit.`]}),`
`,e.jsx(n.h2,{id:"removals",children:"Removals"}),`
`,e.jsx(n.p,{children:`Removals from our codebase may no longer be consumed. We've either promoted or replaced the removed
component or utility.`}),`
`,e.jsx(n.h3,{id:"css-packages",children:"CSS Packages"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2368",rel:"nofollow",children:"#2368"})]}),`
`,e.jsxs(n.p,{children:["We've removed the ",e.jsx(n.code,{children:"@workday/canvas-kit-css-*"}),` packages from our source code. The packages have been
in maintenance mode for a while with no updates, but still riding the wave of version updates.
Starting in v10, our plan is to release our CSS kit as a static build straight from our React
package and under the new `,e.jsx(n.code,{children:"@workday/canvas-kit-css"}),` package. This means we're not releasing an
update to the CSS package in `,e.jsx(n.code,{children:"10.0.0"}),`, but will add our button CSS as a minor version. We're
converting all our existing React packages to use this new styling strategy which will allow us to
publish all CSS packages straight from the styles of our React packages, reducing the maitenance
overhead required to maintain both our React kit and CSS kit.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usebanner",children:"useBanner"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2318",rel:"nofollow",children:"#2318"})]}),`
`,e.jsxs(n.p,{children:["We've removed the ",e.jsx(n.code,{children:"useBanner"})," hook, the only function of which was to add ",e.jsx(n.code,{children:"aria-labelledby"}),` and
`,e.jsx(n.code,{children:"aria-describedby"}),` references to the text inside of the Banner. This was not required for
accessibility, and browsers can compute the name of the Banner from the text given inside.`]}),`
`,e.jsx(n.h2,{id:"deprecations",children:"Deprecations"}),`
`,e.jsxs(n.p,{children:["We add the ",e.jsx(n.a,{href:"https://jsdoc.app/tags-deprecated.html",rel:"nofollow",children:"@deprecated"}),` JSDoc tag to code we plan to remove
in a future major release. This signals consumers to migrate to a more stable alternative before the
deprecated code is removed.`]}),`
`,e.jsx(n.h3,{id:"input-icon-container",children:"Input Icon Container"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2332",rel:"nofollow",children:"#2332"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"InputIconContainer"})," from ",e.jsx(n.a,{href:"#main",children:"Main"}),` because it doesn't handle bidirectionality
or icons at the start of an input. Please use
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/components-inputs-text-input--icons",rel:"nofollow",children:e.jsx(n.code,{children:"InputGroup"})}),`
instead.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"select-preview",children:"Select (Preview)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2309",rel:"nofollow",children:"#2309"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"Select"})," from ",e.jsx(n.a,{href:"#preview",children:"Preview"}),`. Please use
`,e.jsxs(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/components-inputs-select--basic",rel:"nofollow",children:[e.jsx(n.code,{children:"Select"})," in Main"]}),`
instead.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"space-numbers",children:"Space Numbers"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2345",rel:"nofollow",children:"#2345"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"spaceNumbers"}),". Please use our ",e.jsx(n.code,{children:"rem"}),` based
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/tokens--space",rel:"nofollow",children:e.jsx(n.code,{children:"space"})}),` tokens. If you need to
calculate a value, use `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/calc",rel:"nofollow",children:"CSS calc()"})," instead."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:"// With deprecated `spaceNumbers`\n{\n  paddingLeft: spaceNumbers.xl + 2; // 42px\n}\n\n// With `rem` based `space` tokens\n{\n  padding: `calc(${space.xl} + 2px)`; // 42px\n}\n"})}),`
`,e.jsxs(n.p,{children:[`For more information on how to handle this migration, please reference our
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2343",rel:"nofollow",children:"discussion"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"table",children:"Table"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2344",rel:"nofollow",children:"#2344"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"Table"})," and ",e.jsx(n.code,{children:"TableRow"}),` and all of their exported members. Please use
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/preview-table--basic",rel:"nofollow",children:e.jsx(n.code,{children:"Table"})}),` in
`,e.jsx(n.a,{href:"#preview",children:"Preview"})," instead."]}),`
`,e.jsx(n.h2,{id:"token-updates",children:"Token Updates"}),`
`,e.jsx(n.h3,{id:"space-and-depth",children:"Space and Depth"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2229",rel:"nofollow",children:"#2229"})]}),`
`,e.jsxs(n.p,{children:["We've updated our ",e.jsx(n.code,{children:"space"})," and ",e.jsx(n.code,{children:"depth"})," token values from ",e.jsx(n.code,{children:"px"})," to ",e.jsx(n.code,{children:"rem"}),`. This is based on the default
browser font size which is `,e.jsx(n.code,{children:"16px"}),"."]}),`
`,e.jsxs(n.p,{children:["These updates simply mean that we have moved the values from ",e.jsx(n.code,{children:"px"})," to ",e.jsx(n.code,{children:"rem"}),`. The values have been
updated on a 1:1 basis. None of the base values have changed, only the unit.`]}),`
`,e.jsxs(n.p,{children:["The table below shows what each token value is, what it corresponds to, and what the new ",e.jsx(n.code,{children:"rem"}),` value
is in `,e.jsx(n.code,{children:"px"}),":"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"px Value"}),e.jsx(n.th,{children:"rem Value"}),e.jsx(n.th,{children:"space Token"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"zero"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"4px"}),e.jsx(n.td,{children:"0.25rem"}),e.jsx(n.td,{children:"xxxs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"8px"}),e.jsx(n.td,{children:"0.5rem"}),e.jsx(n.td,{children:"xxs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"12px"}),e.jsx(n.td,{children:"0.75rem"}),e.jsx(n.td,{children:"xs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"16px"}),e.jsx(n.td,{children:"1rem"}),e.jsx(n.td,{children:"s"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"24px"}),e.jsx(n.td,{children:"1.5rem"}),e.jsx(n.td,{children:"m"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"32px"}),e.jsx(n.td,{children:"2rem"}),e.jsx(n.td,{children:"l"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"40px"}),e.jsx(n.td,{children:"2.5rem"}),e.jsx(n.td,{children:"xl"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"64px"}),e.jsx(n.td,{children:"4rem"}),e.jsx(n.td,{children:"xxl"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"80px"}),e.jsx(n.td,{children:"5rem"}),e.jsx(n.td,{children:"xxxl"})]})]})]}),`
`,e.jsxs(n.p,{children:["You can convert a ",e.jsx(n.code,{children:"px"})," value to a ",e.jsx(n.code,{children:"rem"})," value by dividing your ",e.jsx(n.code,{children:"px"})," value by ",e.jsx(n.code,{children:"16"}),`(if your default
browser font size hasn't been updated, the value will be `,e.jsx(n.code,{children:"16"}),")."]}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Equation"}),e.jsx(n.th,{children:"rem Value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"16px/16px"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"32px/16px"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"2rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"8px/16px"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.5rem"})})]})]})]}),`
`,e.jsx(n.h4,{id:"why-did-we-make-this-change",children:"Why Did We Make This Change?"}),`
`,e.jsxs(n.p,{children:[`We wanted to move away from absolute units in tokens to relative units for better accessibility and
adaptability to different viewport/screen sizes. If a user changes their default browser font size,
these sizes should change along with it. `,e.jsx(n.code,{children:"px"})," are a fixed unit and do not scale, whereas ",e.jsx(n.code,{children:"rem"}),` will
allow these tokens to scale with a new default font size.`]}),`
`,e.jsx(n.h2,{id:"component-updates",children:"Component Updates"}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2285",rel:"nofollow",children:"#2285"})]}),`
`,e.jsxs(n.p,{children:[`We've refactored how we style buttons to use our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/features-styling-api--create-styles",rel:"nofollow",children:e.jsx(n.code,{children:"createStyles"})}),`
utility function. We don't anticipate this being a breaking change in most cases, but there may be
slight changes to visual tests.`]}),`
`,e.jsx(n.h4,{id:"button-icon-fill",children:"Button Icon Fill"}),`
`,e.jsx(n.p,{children:"Icons will no longer be incorrectly filled on toggle."}),`
`,e.jsx(n.h4,{id:"button-focus-ring-update",children:"Button Focus Ring Update"}),`
`,e.jsxs(n.p,{children:[`We found that focus rings were not consistent across all buttons. We've updated the focus ring on
the `,e.jsx(n.code,{children:"inverse"})," variant of ",e.jsx(n.code,{children:"PrimaryButton"})," to display a consistent focus ring across ",e.jsx(n.code,{children:"PrimaryButton"}),`
and `,e.jsx(n.code,{children:"SecondaryButton"}),". The changes to ",e.jsx(n.code,{children:"PrimaryButton"}),` will need to be taken note of due to small
visual changes with the `,e.jsx(n.code,{children:"inverse"})," variant."]}),`
`,e.jsxs(n.p,{children:["Also, ",e.jsx(n.code,{children:"colors"})," will no longer support the ",e.jsx(n.code,{children:"focusRing"})," option."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {focusRing} from '@workday/canvas-kit-react/common';

// v9
<PrimaryButton
  colors={{
    // other colors
    focus: {
      // other colors
     focusRing: focusRing(/* options */)
    }
  }}
/>

// v10
<PrimaryButton
  colors={{
    // other colors
    focus: {
      // other colors
    }
  }}
  css={{
    ':focus-visible': focusRing(/* options */)
  }}
/>;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"popups",children:"Popups"}),`
`,e.jsxs(n.p,{children:["All Popup components including ",e.jsx(n.code,{children:"Menu"})," and ",e.jsx(n.code,{children:"Popup"}),` have increased the top and bottom spacing between
the target and popup to `,e.jsx(n.code,{children:"4px"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"select-main",children:"Select (Main)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2309",rel:"nofollow",children:"#2309"})]}),`
`,e.jsxs(n.p,{children:["We've converted ",e.jsx(n.code,{children:"Select"}),` into a
`,e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),` which provides
a flexible API and access to its internals via its subcomponents.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';

// v9
<FormField label="Pizza Size">
  <Select onChange={handleChange} value={value}>
    <SelectOption label="Small" value="small" />
    <SelectOption label="Medium" value="medium" />
    <SelectOption label="Large" value="large" />
  </Select>
</FormField>;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';

// v10
<Select items={['Small', 'Medium', 'Large']}>
  <FormField label="Pizza Size" inputId="pizza">
    <Select.Input id="pizza" onChange={e => handleChange(e)} id="pizza" />
    <Select.Popper>
      <Select.Card maxHeight="200px">
        <Select.List>
          {item => {
            return <Select.Item>{item}</Select.Item>;
          }}
        </Select.List>
      </Select.Card>
    </Select.Popper>
  </FormField>
</Select>;
`})}),`
`,e.jsxs(n.p,{children:["Notice that ",e.jsx(n.code,{children:"Select"})," is now outside the ",e.jsx(n.code,{children:"FormField"}),". This is due to the update in ",e.jsx(n.code,{children:"Select"}),` and how
the `,e.jsx(n.code,{children:"FormField"})," in main applies attributes. Previously, ",e.jsx(n.code,{children:"Select"})," was a styled native ",e.jsx(n.code,{children:"<select>"}),`
input and `,e.jsx(n.code,{children:"FormField"})," applied attributes automatically to that input. The new ",e.jsx(n.code,{children:"Select"}),` is solely a
React context provider for its subcomponents. `,e.jsx(n.code,{children:"FormField"})," needs ",e.jsx(n.code,{children:"Select.Input"}),` to be a direct child
to apply attributes correctly.`]}),`
`,e.jsxs(n.p,{children:[`Also, unlike the
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/preview-select-left-label--default",rel:"nofollow",children:"Select in Preview"}),`,
this component does not have a border around its menu.`]}),`
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
changes in `,e.jsx(n.a,{href:"#preview",children:"Preview"})," and ",e.jsx(n.a,{href:"#main",children:"Main"}),"."]})]})}function m(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
