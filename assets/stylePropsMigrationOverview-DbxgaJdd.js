import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as o}from"./index-3YbjYt95.js";import"./chunk-NUUEMKO5-CsQ5eZve.js";import{ae as c}from"./index-BNkigr0j.js";import{S as l,D as a}from"./union-pSUQDCnc.js";import"./index-IfJi-UCQ.js";import{I as r}from"./InformationHighlight-C5ixENGv.js";import"./iframe-D6ZQ-_mO.js";import"../sb-preview/runtime.js";import"./client-DOJa5lII.js";import"./index-CDT9hUPM.js";import"./index-BDZ5T_cP.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BXmdscC7.js";import"./Svg-D3GkOkau.js";import"./px2rem-C0KbprIx.js";import"./components-CBw5fIQ6.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-3OvGvnGJ.js";import"./Text-DilvFXlg.js";import"./mergeStyles-0EvNYC9q.js";import"./Box-DK2fs61P.js";import"./index-COdRIEp6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-BEcIAxFj.js";import"./grid-D_wPoeTG.js";import"./index-5dfzm_kn.js";import"./Card-n-NhLiq7.js";import"./ExternalHyperlink-CzdUO8wb.js";import"./Hyperlink-B89CS5FU.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BbsYxmVE.js";import"./BaseButton-pVinvyd2.js";import"./Button-Ss3U7Oe3.js";import"./lerna-B2wpihf9.js";import"./CanvasProvider-DXZI2yoo.js";import"./index-5mrAZJYD.js";import"./Tooltip-Dvc3atHf.js";import"./useTooltip-XyMhgIHQ.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-DCArrvVm.js";import"./Popper-CSmj6glf.js";import"./TertiaryButton-CsQTErM1.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bzaks_lQ.js";import"./ColorPicker-QXEy2G6v.js";import"./ColorInput-iajXpyuH.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-Cgn7Xr1S.js";import"./types-DXdjelYI.js";import"./FormField-BkHoxgyS.js";import"./check-Bvurkvei.js";import"./Expandable-XrBDojn5.js";import"./Avatar-BEo-uaSe.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BZpRoxlT.js";import"./Popup-GAIxn5c4.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-C81DYh_a.js";import"./useInitialFocus-S0F8uKdb.js";import"./useReturnFocus-DTR0P4UH.js";import"./useFocusRedirect-C9oWwdU9.js";import"./Breadcrumbs-CJJCluYM.js";import"./useOverflowListTarget-BOOAIm4n.js";import"./useListItemSelect-2ZJHSRCR.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-C-KrN-Jp.js";import"./OverflowTooltip-DYa0mq7W.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-DR4mZhOA.js";import"./Table-NuXZGZXk.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...s.components};return r||t("InformationHighlight",!1),r.Heading||t("InformationHighlight.Heading",!0),r.Icon||t("InformationHighlight.Icon",!0),r.Link||t("InformationHighlight.Link",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Guides/Style Props Migration/Overview"}),`
`,e.jsx(n.h1,{id:"style-props-deprecation-overview",children:"Style Props Deprecation Overview"}),`
`,e.jsx(n.h3,{id:"purpose",children:"Purpose"}),`
`,e.jsxs(n.p,{children:[`As part of the Canvas Kit’s modernization process, we’re moving away from Emotion’s runtime styling
and promoting a custom CSS-in-JS solution: `,e.jsx(n.code,{children:"@workday/canvas-kit-styling"}),`. This change improves
`,e.jsx(n.strong,{children:"performance"}),", ",e.jsx(n.strong,{children:"consistency"}),", and ",e.jsx(n.strong,{children:"maintainability"}),` across our codebase. For more information,
view our `,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2265",rel:"nofollow",children:"Future of"})," discussion."]}),`
`,e.jsx(n.h3,{id:"goals",children:"Goals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduce runtime overhead"})," by removing Emotion’s runtime from ",e.jsx(n.code,{children:"@emotion/react"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Promote prescriptive, opinionated styling"})," across Workday"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enable static CSS compilation"})," for faster load times and smaller bundles"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Support new design tokens and CSS Variables"})," for scalable theming"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ensure proper style merging"})," and stable selector behavior"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Support advanced styling patterns"})," like compound styles, modifiers, and ",e.jsx(n.code,{children:"data-parts"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Emotion dynamically injects styles at runtime, causing costly re-renders and cache invalidations.
The new system statically compiles styles at build time for optimal performance.`}),`
`]}),`
`,e.jsx(n.h3,{id:"timeline",children:"Timeline"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Deprecation introduced:"})," Canvas Kit ",e.jsx(n.strong,{children:"v14.1"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Removal:"})," ",e.jsx(n.em,{children:"Not immediate"})," — style props and ",e.jsx(n.code,{children:"styled()"}),` will continue to function in upcoming
releases`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration timeline:"})," Gradual; no immediate codebase-wide update required"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"llm-assisted-migration-",children:["LLM Assisted Migration ",e.jsx(l,{type:"ai"})]}),`
`,e.jsxs(n.p,{children:["We've provided an ",e.jsx(n.strong,{children:"LLM migration mapping file"})," (",e.jsx(n.code,{children:"llm-style-props-migration.txt"}),`) specifically
designed for use with LLM-based code assistants such as `,e.jsx(n.a,{href:"https://www.cursor.so/",rel:"nofollow",children:"Cursor"}),`. It
contains a compiled LLM consumption version of this v14 Upgrade Guide. It is not intended for direct
human reference or team documentation, but rather as structured input for LLMs to automate and
assist with your migration process.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," LLMs can make mistakes. Please verify changes using this Migration Guide."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"How to use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"View raw file"}),": Open the file in a new tab to see the complete migration mapping"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Download LLM File"}),": Save the file locally to upload or paste into your LLM/code assistant"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use with LLM"}),`: Provide the raw content to your LLM/code assistant as context for automated
migration`]}),`
`]}),`
`,e.jsx(a,{rawFileLink:"https://raw.githubusercontent.com/Workday/canvas-kit/master/modules/docs/llm/llm-style-props-migration.txt",filename:"llm-style-props-migration.txt"}),`
`,e.jsx(n.h2,{id:"changes-overview",children:"Changes Overview"}),`
`,e.jsx(n.h3,{id:"replacements",children:"Replacements"}),`
`,e.jsxs(n.p,{children:["Use the new ",e.jsx(n.strong,{children:"Canvas Kit Styling"})," utilities:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Old API"}),e.jsx(n.th,{children:"New API"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"styled()"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"createStyles"})," / ",e.jsx(n.code,{children:"createStencil"})]}),e.jsx(n.td,{children:"Define static or component-level styles"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Inline style props, like ",e.jsx(n.code,{children:"background"})," or ",e.jsx(n.code,{children:"padding"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"cs"})," prop"]}),e.jsx(n.td,{children:"Safely merge class names and styles"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Dynamic values"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"createVars"})}),e.jsx(n.td,{children:"Manage CSS variables for runtime overrides"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Emotion modifiers"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"modifiers"}),", ",e.jsx(n.code,{children:"compound"})]}),e.jsx(n.td,{children:"Define consistent appearance variants"})]})]})]}),`
`,e.jsx(n.h2,{id:"canvas-kit-styling",children:"Canvas Kit Styling"}),`
`,e.jsxs(r,{className:"sb-unstyled",cs:{p:{marginBlock:0}},children:[e.jsx(r.Icon,{}),e.jsxs(n.p,{children:[e.jsx(r.Heading,{children:"Canvas Kit Styling Docs"}),`
For a detailed overview of our styling approach, view our styling docs.`]}),e.jsx(r.Link,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs",children:e.jsx(n.p,{children:"Read more"})})]}),`
`,e.jsxs(n.p,{children:["Canvas Kit’s styling utilities are built for ",e.jsx(n.strong,{children:"static CSS generation"}),", ",e.jsx(n.strong,{children:"token integration"}),`, and
`,e.jsx(n.strong,{children:"predictable composition"}),"."]}),`
`,e.jsx(n.h3,{id:"core-apis",children:"Core APIs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"createStyles"})})," — define reusable, static CSS objects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"createStencil"})})," — define reusable, dynamic component styles with parts, vars, and modifiers"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"cs"})," prop"]})," — apply multiple styles and handle merges consistently to Canvas Kit components"]}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:["These best practices ensure your components remain ",e.jsx(n.strong,{children:"performant"}),", ",e.jsx(n.strong,{children:"consistent"}),`, and
`,e.jsx(n.strong,{children:"maintainable"})," under the new Canvas Kit Styling system."]}),`
`,e.jsx(n.h4,{id:"define-styles-outside-the-render-function",children:"Define Styles Outside the Render Function"}),`
`,e.jsx(n.p,{children:`Always declare styles at the module level. Creating styles inside the render or component function
will trigger component re-render.`}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// \`createStyles\` returns a string of className
const buttonStyles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  color: system.color.fg.inverse,
});

export const MyButton = () => <button className={buttonStyles}>Click me</button>;
`})}),`
`,e.jsxs(n.p,{children:["❌ ",e.jsx(n.strong,{children:"Don’t"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const MyButton = () => {
  const buttonStyles = createStyles({backgroundColor: 'red'}); // bad
  return <button cs={buttonStyles}>Click me</button>;
};
`})}),`
`,e.jsxs(n.h4,{id:"use-createstyles-for-static-styling",children:["Use ",e.jsx(n.code,{children:"createStyles"})," for Static Styling"]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"createStyles"})," for simple, reusable style objects that do ",e.jsx(n.strong,{children:"not"}),` depend on dynamic data or
props.`]}),`
`,e.jsx(n.p,{children:"✅ Ideal for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Defining base styles"}),`
`,e.jsx(n.li,{children:"Applying static overrides"}),`
`,e.jsx(n.li,{children:"Styling tokens-based components"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createStyles"}),` returns a string of className that can be applied to a React element. If you're
applying the class to a Canvas Kit component, you can use the `,e.jsx(n.code,{children:"cs"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {BaseButton} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
// \`createStyles\` returns a string of className
const buttonStyles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  color: system.color.fg.inverse,
});

export const MyButton = () => <BaseButton cs={buttonStyles}>Click me</button>;
`})}),`
`,e.jsxs(n.h4,{id:"use-createstencil-for-dynamic-or-complex-styling",children:["Use ",e.jsx(n.code,{children:"createStencil"})," for Dynamic or Complex Styling"]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"createStencil"})," when styles depend on ",e.jsx(n.strong,{children:"props"}),", ",e.jsx(n.strong,{children:"variants"}),", or ",e.jsx(n.strong,{children:"component parts"}),"."]}),`
`,e.jsx(n.p,{children:"Examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Size or color variants (",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"}),")"]}),`
`,e.jsxs(n.li,{children:["Compound state combinations (",e.jsx(n.code,{children:"size=small"}),", ",e.jsx(n.code,{children:"iconPosition=end"}),")"]}),`
`,e.jsxs(n.li,{children:["Multi-part components (e.g. ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"Card"}),", ",e.jsx(n.code,{children:"MenuItem"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const buttonStencil = createStencil({
  vars: {color: '', background: ''},
  base: ({color, backgroundColor}) => ({
    color: cssVar(color, system.color.fg.default),
    backgroundColor: cssVar(backgroundColor, system.color.bg.default),
  }),
  modifiers: {
    variant: {
      primary: {background: system.color.brand.accent.primary},
      secondary: {background: system.color.accent.muted.default},
    },
  },
});
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"vars"}),`: If you initialize the variable with an empty string, it will allow the variable to
cascade and be defined.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const customButtonStencil = createStencil({
  base: {
    // Set the color variable to the primary color
    [buttonStencil.vars.color]: system.color.brand.fg.primary.default,
  },
});
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"cssVar"}),": The ",e.jsx(n.code,{children:"cssVar"}),` function is used when you want to add a default value if the CSS Variable
is not defined.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"modifiers"}),": The ",e.jsx(n.code,{children:"modifiers"}),` property is used to define the styles for the different variants of
the component.`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"use-cs-prop-to-merge-styles",children:["Use ",e.jsx(n.code,{children:"cs"})," Prop to Merge Styles"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"cs"})," prop merges ",e.jsx(n.code,{children:"className"})," and ",e.jsx(n.code,{children:"style"}),` attributes safely and consistently. Use this over using
style props or className concatenation.`]}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<PrimaryButton cs={[baseStyles, variantStyles]} />
`})}),`
`,e.jsxs(n.p,{children:["❌ ",e.jsx(n.strong,{children:"Don’t"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:"<PrimaryButton className={`${baseStyles} ${variantStyles}`} />\n"})}),`
`,e.jsx(n.h4,{id:"use-variables-for-dynamic-values",children:"Use Variables for Dynamic Values"}),`
`,e.jsx(n.p,{children:"Instead of inline styles or runtime calculations, use stencil variables."}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const primaryButtonStencil = createStencil({
  base: {
		// Use the buttonStencil variable to set the background color
    [buttonStencil.vars.background]: 'orange',
  }
})
<PrimaryButton cs={primaryButtonStencil} />
`})}),`
`,e.jsxs(n.p,{children:["❌ ",e.jsx(n.strong,{children:"Don’t"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<PrimaryButton cs={{backgroundColor: 'orange'}} /> // breaks static optimization
`})}),`
`,e.jsx(n.h4,{id:"extend-existing-stencils-instead-of-overriding-styles",children:"Extend Existing Stencils Instead of Overriding Styles"}),`
`,e.jsxs(n.p,{children:["When modifying Canvas Kit components, extend the provided ",e.jsx(n.code,{children:"Stencil"}),` instead of creating your own
from scratch.`]}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const customIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    margin: system.gap.sm,
  },
});
`})}),`
`,e.jsxs(n.p,{children:["This will inherit both the styles and variables from the ",e.jsx(n.code,{children:"systemIconStencil"}),"."]}),`
`,e.jsx(n.h4,{id:"use-modifiers-for-variants-and-states",children:"Use Modifiers for Variants and States"}),`
`,e.jsxs(n.p,{children:["Define component variations (size, color, emphasis) using ",e.jsx(n.strong,{children:"modifiers"}),` rather than conditional
logic.`]}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const badgeStencil = createStencil({
  modifiers: {
    status: {
      success: {background: system.color.accent.success},
      error: {background: system.color.brand.accent.critical},
    },
  },
});
`})}),`
`,e.jsx(n.h4,{id:"use-compound-modifiers-for-complex-conditions",children:"Use Compound Modifiers for Complex Conditions"}),`
`,e.jsxs(n.p,{children:["When two or more modifiers combine to produce a new style, define a ",e.jsx(n.strong,{children:"compound modifier"}),"."]}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const myCustomStencil = createStencil({
  base: {
    //base styles
  },
  modifiers: {
    variant: {
      primary: {
        // primary variant styles
      },
    },
    size: {
      large: {
        // large size styles
      },
    },
  },
  compound: [
    {
      // apply styles when the variant is primary AND the size is large
      modifiers: {variant: 'primary', size: 'large'},
      styles: {paddingInline: system.padding.xl},
    },
  ],
});
`})}),`
`,e.jsx(n.h4,{id:"avoid-nested-stencils-unless-necessary",children:"Avoid Nested Stencils Unless Necessary"}),`
`,e.jsxs(n.p,{children:[`Each Stencil should map to one semantic component. Nested stencils can increase CSS specificity and
complexity. Use `,e.jsx(n.strong,{children:"parts"})," instead of deep nesting."]}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const cardStencil = createStencil({
  parts: {header: 'card-header', body: 'card-body'},
  base: ({headerPart}) => ({
    [headerPart]: {
      fontWeight: 'bold',
    },
  }),
});

<Card cs={cardStencil}>
  <Card.Heading {...cardStencil.parts.header}>Card Title</Card.Heading>
  <Card.Body {...cardStencil.parts.body}>Card Body</Card.Body>
</Card>;
`})}),`
`,e.jsx(n.h4,{id:"prefer-tokens-and-system-variables",children:"Prefer Tokens and System Variables"}),`
`,e.jsxs(n.p,{children:["Always use design tokens (",e.jsx(n.code,{children:"system"}),`) for spacing, colors, typography, etc., instead of raw values.
View our System Tokens
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-overview--docs",rel:"nofollow",children:"docs"}),` for
more information.`]}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`color: system.color.fg.default;
margin: system.gap.md;
`})}),`
`,e.jsxs(n.p,{children:["❌ ",e.jsx(n.strong,{children:"Don’t"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`color: '#333';
margin: '8px';
`})}),`
`,e.jsx(n.h4,{id:"debugging-and-static-compilation",children:"Debugging and Static Compilation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enable static compilation during development to catch type or value errors early."}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"as const"})," for static objects to ensure values are type-locked for the compiler."]}),`
`]}),`
`,e.jsxs(n.p,{children:["✅ ",e.jsx(n.strong,{children:"Do"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const reusableStyles = {
  position: 'absolute',
} as const;
`})}),`
`,e.jsx(n.h4,{id:"dont-mix-emotion-and-static-styling",children:"Don’t Mix Emotion and Static Styling"}),`
`,e.jsxs(n.p,{children:["Avoid combining Emotion’s ",e.jsx(n.code,{children:"styled"})," or ",e.jsx(n.code,{children:"css"})," with ",e.jsx(n.code,{children:"createStyles"})," or ",e.jsx(n.code,{children:"createStencil"}),`. It reintroduces
runtime style recalculations and negates static benefits.`]}),`
`,e.jsxs(n.p,{children:["❌ ",e.jsx(n.strong,{children:"Don’t"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const StyledButton = styled(Button)(styles);
<StyledButton cs={createStyles({padding: 8})} />;
`})}),`
`,e.jsx(n.h2,{id:"migration-example",children:"Migration Example"}),`
`,e.jsx(n.h3,{id:"style-props",children:"Style Props"}),`
`,e.jsx(n.h4,{id:"before",children:"Before"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import {Flex} from '@workday/canvas-kit-react/layout';

<Flex depth={1} marginX={10} background="frenchVanilla100" />;
`})}),`
`,e.jsx(n.h4,{id:"after",children:"After"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {px2rem} from '@workday/canvas-kit-styling';

<Flex
  cs={{
    boxShadow: system.depth[1],
    marginInline: px2rem(10),
    background: system.color.bg.default,
  }}
/>;
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"px2rem"}),": The ",e.jsx(n.code,{children:"px2rem"})," function is used to convert a pixel value to a rem value."]}),`
`,e.jsxs(n.li,{children:[`Use [CSS logical
properties](`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",rel:"nofollow",children:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values"})]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"system"})," tokens over ",e.jsx(n.code,{children:"base"})," tokens for better theming support."]}),`
`]}),`
`,e.jsx(n.h3,{id:"emotion-styled",children:"Emotion styled"}),`
`,e.jsx(n.h4,{id:"before-emotion",children:"Before (Emotion)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const StyledButton = styled('button')({
  backgroundColor: 'blue',
  color: 'white',
});
`})}),`
`,e.jsx(n.h4,{id:"after-canvas-kit-styling",children:"After (Canvas Kit Styling)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const primaryButtonStyles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  color: system.color.fg.inverse,
});

<PrimaryButton cs={primaryButtonStyles}>Click me</PrimaryButton>;
`})})]})}function Te(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}function t(s,n){throw new Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Te as default};
