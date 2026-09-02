import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as a}from"./index-3YbjYt95.js";import{ae as m}from"./index-Bt0ZT3SD.js";import{E as d}from"./union-Bu_N9WXY.js";import"./index-IfJi-UCQ.js";import{c as p}from"./cs-CmRirKzJ.js";import{c as i,g as s}from"./index-DE-upP0k.js";import{I as n}from"./InformationHighlight-B1GlGic1.js";import"./iframe-DXeK7ayo.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cq4gQLtq.js";import"./Svg-B7LpI5Ot.js";import"./px2rem-C0KbprIx.js";import"./components-BhvJ7593.js";import"./StatusIndicator-DZ56N-RC.js";import"./Text-BIkiFigH.js";import"./mergeStyles-DdZlnWAB.js";import"./Box-D7WyyqaD.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-DYbdw5oo.js";import"./grid-_KjJYSbp.js";import"./cornerShape-Bs4J36FI.js";import"./Card-DEc3Wxgt.js";import"./ExternalHyperlink-B5so04zA.js";import"./Hyperlink-B8rhjoRx.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DITlekqi.js";import"./BaseButton-Dl76ZFMd.js";import"./Button-nYhq3GW1.js";import"./lerna-DHBIFgqa.js";import"./CanvasProvider-Dhhaerje.js";import"./index-kj8ZfNNN.js";import"./Tooltip-urVsYTZI.js";import"./useTooltip-C-iRaiUv.js";import"./getTransformFromPlacement-kqEJ7--H.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DhBoTrcv.js";import"./Popper-N9Opn6Uu.js";import"./TertiaryButton-B5A-OQqG.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BNRlM0Dx.js";import"./ColorPicker-BKzNbucK.js";import"./ColorInput-d6VNAKZK.js";import"./check-small-BqSDQIle.js";import"./TextInput-6REj-qFy.js";import"./types-DXdjelYI.js";import"./FormField-Y066M9m4.js";import"./check-Ds6vsrAM.js";import"./Expandable-C9yPpdV7.js";import"./Avatar-CIyKq2y9.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-QAU_t2kV.js";import"./Popup-BRRFZVVA.js";import"./x-B1faap_l.js";import"./usePopupTarget-B79Gw_dR.js";import"./useInitialFocus-CWikZd6W.js";import"./useReturnFocus-B6I8OHUQ.js";import"./useFocusRedirect-CQuHxJ26.js";import"./Breadcrumbs-7YLlPqeC.js";import"./useOverflowListTarget-BgzVplWe.js";import"./useListItemRegister-CAj1jmo7.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Be0OJ5CA.js";import"./OverflowTooltip-CZdROVrr.js";import"./useListItemSelect-C1yP7QL7.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DhgDVhul.js";import"./Table-CnDNRyoO.js";import"./exclamation-circle-BNuxaliX.js";import"./exclamation-triangle-BLgzpFfC.js";import"./info-DJgWrsaO.js";import"./layers-BWn7B7pb.js";const h=p({background:i.brand.accent.primary,color:i.fg.inverse}),l=()=>e.jsx("button",{className:h,children:"Click Me"});l.__RAW__=`import {createStyles} from '@workday/canvas-kit-styling';
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
`]})]})}function Fe(r={}){const{wrapper:t}={...a(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(c,{...r})}):c(r)}function o(r,t){throw new Error("Expected "+(t?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Fe as default};
