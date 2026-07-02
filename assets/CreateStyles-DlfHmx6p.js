import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as a}from"./index-3YbjYt95.js";import{ae as m}from"./index-BH6-T5Fm.js";import{E as d}from"./union-DR2Z0s37.js";import"./index-IfJi-UCQ.js";import{c as p}from"./cs-rfTTo7Bg.js";import{c as i,g as s}from"./index-5dfzm_kn.js";import{I as n}from"./InformationHighlight-AXn-p1N6.js";import"./iframe-RxBVwp_9.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B1B40VHJ.js";import"./Svg-B1oD29TK.js";import"./px2rem-C0KbprIx.js";import"./components-BqmIVDob.js";import"./StatusIndicator-Cm6b5U4i.js";import"./Text-D8J8K_1c.js";import"./mergeStyles-C1JfmJPH.js";import"./Box-CJXmlKLo.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-CrUgoYEh.js";import"./grid-JWGbC98F.js";import"./Card-BAZTDQ08.js";import"./ExternalHyperlink-COY7uH1o.js";import"./Hyperlink-DM9nt0cU.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-D21U7TXs.js";import"./BaseButton-CWdtGLox.js";import"./Button-CzlJSUFG.js";import"./lerna-DYfSuDO-.js";import"./CanvasProvider-Cat-zekw.js";import"./index-5mrAZJYD.js";import"./Tooltip-KF7CDyyD.js";import"./useTooltip-BAcHo7bk.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CGAh7luF.js";import"./Popper-DvolcCfW.js";import"./TertiaryButton-8Oz2X5p2.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-8ikVfi4T.js";import"./ColorPicker-ymS550hz.js";import"./ColorInput-B4443PlB.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-BPKs8XRx.js";import"./types-DXdjelYI.js";import"./FormField-DTwmrFCP.js";import"./check-Bvurkvei.js";import"./Expandable-UqH_awct.js";import"./Avatar-CcIhLJWM.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DTKoYaho.js";import"./Popup-DnNjYX6x.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BAdISRT5.js";import"./useInitialFocus-DOJx7Wga.js";import"./useReturnFocus-Bl9ijLih.js";import"./useFocusRedirect-Dt5zlBE3.js";import"./Breadcrumbs-Cqwjwy56.js";import"./useOverflowListTarget-DvPXkaQq.js";import"./useListItemSelect-DyeyZH9P.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-V8lePgxC.js";import"./OverflowTooltip-CXGK4oOq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-D43wiz_3.js";import"./Table-C3oC02Mn.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";const h=p({background:i.brand.accent.primary,color:i.fg.inverse}),l=()=>e.jsx("button",{className:h,children:"Click Me"});l.__RAW__=`import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  background: system.color.brand.accent.primary,
  color: system.color.fg.inverse,
});

export const CreateStyles = () => {
  return <button className={styles}>Click Me</button>;
};
`;function c(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return n||o("InformationHighlight",!1),n.Body||o("InformationHighlight.Body",!0),n.Heading||o("InformationHighlight.Heading",!0),n.Icon||o("InformationHighlight.Icon",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Styling/Getting Started/Create Styles"}),`
`,e.jsx(t.h1,{id:"create-styles",children:"Create Styles"}),`
`,e.jsxs(t.p,{children:["The primary utility function is the ",e.jsx(t.code,{children:"createStyles"})," function. It makes a call to the ",e.jsx(t.code,{children:"css"}),` function
from `,e.jsx(t.code,{children:"@emotion/css"}),`. Emotion still does most of the heavy lifting by handling the serialization,
hashing, caching, and style injection.`]}),`
`,e.jsx(t.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(t.p,{children:"In this example, the HTML will look like:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div class="css-m39zwu"></div>
`})}),`
`,e.jsx(t.p,{children:"The CSS will look like this:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.css-m39zwu {
  background: var(--cnvs-sys-color-bg-default);
  color: var(--cnvs-sys-color-fg-inverse);
}
`})}),`
`,e.jsxs(n,{className:"sb-unstyled",cs:{marginBlock:s.md},children:[e.jsx(n.Icon,{}),e.jsx(n.Heading,{children:" Note"}),e.jsx(n.Body,{children:e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"createStyles"})," function handles wrapping our Tokens in ",e.jsx(t.code,{children:"var(--tokenName)"}),"."]})})]}),`
`,e.jsxs(t.p,{children:["We're using ",e.jsx(t.code,{children:"className"})," for simplicity here."]}),`
`,e.jsx(d,{code:l}),`
`,e.jsxs(n,{className:"sb-unstyled",variant:"caution",cs:{marginBlock:s.md},children:[e.jsx(n.Icon,{}),e.jsx(n.Heading,{children:" Caution: Performance Hit"}),e.jsx(n.Body,{children:e.jsxs(t.p,{children:["Do not inline the call to ",e.jsx(t.code,{children:"createStyles"}),` in the render function of a component. This will cause
performance issues as a new style is inserted into the browser on every render.`]})})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// Bad example (inside render function)
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {base} from '@workday/canvas-tokens-webs';

function MyComponent() {
  const styles = createStyles({color: base.red600}); // Don't do this
  return <PrimaryButton className={createStyles({color: base.red600})}>Text</PrimaryButton>;
}
`})}),`
`,e.jsxs(t.h2,{id:"when-to-use-createstyles",children:["When to Use ",e.jsx(t.code,{children:"createStyles"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"createStyles"}),` is a great way to generate static styles when styling our components that don't rely
on dynamic styles. Use `,e.jsx(t.code,{children:"createStyles"}),` if you want to create re useable styles or need to apply
simple style overrides to our components.`]}),`
`,e.jsx(t.h2,{id:"when-to-use-something-else",children:"When to Use Something Else"}),`
`,e.jsxs(t.p,{children:["You should use ",e.jsx(t.a,{href:"/docs/styling-getting-started-stencils--docs",children:"stencils"}),` when styling our components
that have complex styles and dynamic properties.`]}),`
`,e.jsx(t.h2,{id:"proper-usage",children:"Proper Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// Bad example (inside render function)
import {base} from '@workday/canvas-tokens-webs';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

function MyComponent() {
  const styles = createStyles({color: base.red600}); // Don't do this
  return <PrimaryButton cs={styles}>Text</PrimaryButton>;
}

// Good example (outside render function)
import {base} from '@workday/canvas-tokens-webs';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

const styles = createStyles({color: base.red600});

function MyComponent() {
  return <PrimaryButton cs={styles}>Text</PrimaryButton>;
}
`})}),`
`,e.jsxs(n,{className:"sb-unstyled",cs:{marginBlock:s.md},children:[e.jsx(n.Icon,{}),e.jsx(n.Heading,{children:"Note"}),e.jsx(n.Body,{children:e.jsxs(t.p,{children:["Most of our components support using the ",e.jsx(t.code,{children:"cs"}),` prop to apply the static styles. It merges
everything together and applies `,e.jsx(t.code,{children:"className"})," and ",e.jsx(t.code,{children:"style"})," attributes to a React element"]})})]}),`
`,e.jsx(t.h2,{id:"performance-benefits",children:"Performance Benefits"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"createStyles"})," is performant because:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Styles are statically evaluated when styles are defined outside the render function"}),`
`,e.jsx(t.li,{children:"No new StyleSheets are injected during render"}),`
`,e.jsx(t.li,{children:"It works well with the browser's selector cache"}),`
`]})]})}function Ge(r={}){const{wrapper:t}={...a(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(c,{...r})}):c(r)}function o(r,t){throw new Error("Expected "+(t?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Ge as default};
