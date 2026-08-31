import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-t36il7ty.js";import{E as a,c as g}from"./union-C5L62j3T.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-OewFNSfh.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-DE-upP0k.js";import"./iframe-Ofr_6iYT.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bo20moLE.js";import"./Svg-CJw9rXYh.js";import"./px2rem-C0KbprIx.js";import"./components-DdDgcAto.js";import"./StatusIndicator-BQ48wm1y.js";import"./Text-DCxfoIId.js";import"./mergeStyles-BpMifWbI.js";import"./Box-61RYJS8A.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-c4dSep24.js";import"./grid-BACyZ-ln.js";import"./cornerShape-D6g3edD7.js";import"./Card-BSzbbTvN.js";import"./ExternalHyperlink-OV2BgddV.js";import"./Hyperlink-bFi3Gm86.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DG7QNEgp.js";import"./BaseButton-5Tzdsups.js";import"./Button-CQ42Z5L0.js";import"./lerna-CvJqgxr1.js";import"./CanvasProvider-DfFmsxWb.js";import"./index-kj8ZfNNN.js";import"./Tooltip-DObvPxfM.js";import"./useTooltip-BgRaP0ww.js";import"./getTransformFromPlacement-BTYKlY9d.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BBCCNOIp.js";import"./Popper-BTfx4X3Y.js";import"./TertiaryButton-C_HeZ8Vk.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DmbliJpw.js";import"./ColorPicker-ogt4uhU8.js";import"./ColorInput-D9-3XYg5.js";import"./check-small-BqSDQIle.js";import"./TextInput-B58agKnt.js";import"./types-DXdjelYI.js";import"./FormField-8R4BRpYY.js";import"./check-Ds6vsrAM.js";import"./Expandable-DnHnmyV4.js";import"./Avatar-BQTCDUL3.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-dFU9QdWt.js";import"./Popup-BbxEw1JE.js";import"./x-B1faap_l.js";import"./usePopupTarget-B2V76KZ9.js";import"./useInitialFocus-DC0Y9lls.js";import"./useReturnFocus-D6liLhXU.js";import"./useFocusRedirect-BHqtMCeJ.js";import"./Breadcrumbs-CB4XTzIQ.js";import"./useOverflowListTarget-34ivCzNX.js";import"./useListItemRegister-CpJkOK8H.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DNCcAoir.js";import"./OverflowTooltip-DvDdKiVX.js";import"./useListItemSelect-BiKiaz0I.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CM_xc6uN.js";import"./Table-Y2cstmAm.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
}`,...s.parameters?.docs?.source}}};const zr=["Basic","Inverse"];export{e as Basic,s as Inverse,zr as __namedExportsOrder,f as default};
