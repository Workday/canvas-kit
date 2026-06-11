import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-D_439bJA.js";import{E as a,c as g}from"./union-BSIFUzl1.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-qw9qmViY.js";import{c as u}from"./cs-rfTTo7Bg.js";import{p as I,c as x}from"./index-5dfzm_kn.js";import"./iframe-Bg3fn7F7.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CqoDT-XF.js";import"./Svg-DzPS_4Gv.js";import"./px2rem-C0KbprIx.js";import"./components-CiYq2Ux-.js";import"./StatusIndicator-C8jbXgkY.js";import"./Text-CA4K3XqV.js";import"./mergeStyles-BwsTBQHe.js";import"./Box-B8SJpSaU.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DEpQdPd9.js";import"./grid-Bptupakt.js";import"./Card-DDnCZU17.js";import"./ExternalHyperlink-BEkECOId.js";import"./Hyperlink-hH57UZrX.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-C6alAkIu.js";import"./BaseButton-S0EZlBKg.js";import"./Button-BbxM350c.js";import"./lerna-3jXlGHbP.js";import"./CanvasProvider-BQueJlPh.js";import"./index-5mrAZJYD.js";import"./Tooltip-mrjIWVKX.js";import"./useTooltip-CyGI518_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CAWOQb5n.js";import"./Popper-D7IcO7QV.js";import"./TertiaryButton-B6R6H9oz.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bx9MbsnZ.js";import"./ColorPicker-C-xEOXaD.js";import"./ColorInput-CgDc74ap.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-B1Ypq4wN.js";import"./types-DXdjelYI.js";import"./FormField-DSLSWaJe.js";import"./check-Bvurkvei.js";import"./Expandable-BIVbTN1o.js";import"./Avatar-B01Yb7M-.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-CWlxB9Wd.js";import"./Popup-BfsH9ToG.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DlVqELN8.js";import"./useInitialFocus-BIZxfhHD.js";import"./useReturnFocus-Bl2nSnaE.js";import"./useFocusRedirect-DEmWqwJT.js";import"./Breadcrumbs-BYBFQdcu.js";import"./useOverflowListTarget-uhQngC8a.js";import"./useListItemSelect-BuLc9fuA.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CiGVN38M.js";import"./OverflowTooltip-C8EirudH.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-CcubAYil.js";import"./Table-C8kjqThE.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
