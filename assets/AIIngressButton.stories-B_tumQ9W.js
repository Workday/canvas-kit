import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-B2C7rmFn.js";import{E as a,c as g}from"./union-eOGSKZEK.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-BYphP9V6.js";import{c as u}from"./cs-rfTTo7Bg.js";import{p as I,c as x}from"./index-5dfzm_kn.js";import"./iframe-D4Efgt29.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DZBrYDtT.js";import"./Svg-BFncuboW.js";import"./px2rem-C0KbprIx.js";import"./components-BVJ_SRGC.js";import"./StatusIndicator-Bg1veQjl.js";import"./Text-BovdUPDw.js";import"./mergeStyles-C9x5j2GJ.js";import"./Box-CLV6-Kkt.js";import"./index-cOyo4dAr.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DGHVjhOk.js";import"./grid-B6HHSpgk.js";import"./Card-L5C4mvPc.js";import"./ExternalHyperlink-BxqNEZXy.js";import"./Hyperlink-CGRoTyb9.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-CTF8Fi1r.js";import"./BaseButton-Dvq7agdb.js";import"./Button-B9VNs4ec.js";import"./lerna-DK4aXPLo.js";import"./CanvasProvider-BVhQjIv1.js";import"./index-5mrAZJYD.js";import"./Tooltip-CzZcX2Y2.js";import"./useTooltip-Bzvcg0O-.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-DDGeg4uB.js";import"./Popper-C6MnqFuv.js";import"./TertiaryButton-DHjKYrKv.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DTiXkIGW.js";import"./ColorPicker-CDirxSmu.js";import"./ColorInput-8Ea4Hmx8.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-Ceg3N6Pn.js";import"./types-DXdjelYI.js";import"./FormField-BL4AJQ6D.js";import"./check-Bvurkvei.js";import"./Expandable-DfLORrAy.js";import"./Avatar-D90D_7jU.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BKqT5D54.js";import"./Popup-Dk1z8kMN.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BHRI4C2s.js";import"./useInitialFocus-CrksNl1r.js";import"./useReturnFocus-C7Sy0adc.js";import"./useFocusRedirect-Cw1DKcYL.js";import"./Breadcrumbs-CdmUHHNT.js";import"./useOverflowListTarget-C_ltmWUW.js";import"./useListItemSelect-B-HnPEYj.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CK_KWNaR.js";import"./OverflowTooltip-6ZCm7qHA.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-DpKPWY6h.js";import"./Table-BAHHR8bZ.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

import {AIIngressButton} from '@workday/canvas-kit-labs-react/ai-ingress-button';

export const Basic = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <AIIngressButton
        aria-label={toggled ? 'Hide AI Ingress' : 'Show AI Ingress'}
        onClick={() => setToggled(!toggled)}
        toggled={toggled}
      />
    </div>
  );
};
`;const h=u({background:x.surface.contrast.strong,padding:I.xxl}),i=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{className:h,children:r.jsx(d,{variant:"inverse",onClick:()=>t(!o),"aria-label":o?"Hide Ingress":"Show Ingress",toggled:o})})};i.__RAW__=`import {useState} from 'react';

import {AIIngressButton} from '@workday/canvas-kit-labs-react/ai-ingress-button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const darkBackground = createStyles({
  background: system.color.surface.contrast.strong,
  padding: system.padding.xxl,
});

export const Inverse = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className={darkBackground}>
      <AIIngressButton
        variant="inverse"
        onClick={() => setToggled(!toggled)}
        aria-label={toggled ? 'Hide Ingress' : 'Show Ingress'}
        toggled={toggled}
      />
    </div>
  );
};
`;function m(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(l,{of:f}),`
`,r.jsx(t.h1,{id:"ai-ingress-button",children:"AI Ingress Button"}),`
`,r.jsx(t.p,{children:"CTA to open and close AI Ingress Button"}),`
`,r.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-labs-react
`})}),`
`,r.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,r.jsx(t.p,{children:"You can click to toggle the AI Ingress Button."}),`
`,r.jsx(a,{code:n}),`
`,r.jsx(t.h3,{id:"inverse-example",children:"Inverse Example"}),`
`,r.jsx(t.p,{children:"The Button can also be used on dark backgrounds."}),`
`,r.jsx(a,{code:i}),`
`,r.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,r.jsx(g,{name:"AIIngressButton",hideDescription:!0})]})}function k(o={}){const{wrapper:t}={...p(),...o.components};return t?r.jsx(t,{...o,children:r.jsx(m,{...o})}):m(o)}const f={title:"Labs/AI Ingress Button (AI)",tags:["autodocs"],parameters:{docs:{page:k}}},e={render:n},s={render:i};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: InverseExample
}`,...s.parameters?.docs?.source}}};const Yr=["Basic","Inverse"];export{e as Basic,s as Inverse,Yr as __namedExportsOrder,f as default};
