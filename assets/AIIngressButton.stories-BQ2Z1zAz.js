import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-8zTmtzg_.js";import{E as a,c as g}from"./union-Dw3119xp.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-CGd5tVp1.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-DzHAWDep.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-oQ2K1VCn.js";import"./Svg-BMATp2Oq.js";import"./px2rem-C0KbprIx.js";import"./components-CxXDZKlX.js";import"./StatusIndicator-C0c7vbAG.js";import"./Text-BU7lo9qQ.js";import"./mergeStyles-Cwq7MPiu.js";import"./Box-AXoeqAfR.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-B-mM-efm.js";import"./grid-BRoHx-9y.js";import"./cornerShape-CSfH3EMK.js";import"./Card-C94ti1ug.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-DG35H1Wq.js";import"./Hyperlink-DuzNLKMl.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-ClDLkqd4.js";import"./BaseButton-CXgunvHx.js";import"./Button-BKwQ9p25.js";import"./lerna-DluDaNV7.js";import"./CanvasProvider-DJRItNr0.js";import"./index-CFEs8r9D.js";import"./Tooltip-DUI0SA_T.js";import"./useTooltip-PjORsXZm.js";import"./getTransformFromPlacement-kDQSMLcK.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-CJ8QJI5q.js";import"./Popper-mGIbWNdd.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BjIo91oe.js";import"./TypeLevelComponents-CWBiLbMZ.js";import"./ColorPicker-4zrYiXHt.js";import"./ColorInput-BSxd7JdF.js";import"./check-small-BqSDQIle.js";import"./TextInput-DX-uTB_8.js";import"./types-DXdjelYI.js";import"./FormField-D3X-JdP0.js";import"./check-Ds6vsrAM.js";import"./Expandable-CSlI0MMa.js";import"./Avatar-CKiAmiHa.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-BY9hL40t.js";import"./Popup-Buqd_rCX.js";import"./x-B1faap_l.js";import"./usePopupTarget-BrzAvJUE.js";import"./useInitialFocus-DA01W-5V.js";import"./useReturnFocus-CgwmYqfY.js";import"./useFocusRedirect-DlsmGhp1.js";import"./Breadcrumbs-CtAhx_Hv.js";import"./useOverflowListItemMeasure-DU3HTtaC.js";import"./useListItemRegister-cbpcI0J1.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-pYQJPHtt.js";import"./OverflowTooltip-CfbyETTq.js";import"./useListItemRovingFocus-9AyEy-B6.js";import"./useListItemSelect-BVXjgXJV.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-Dl_Li4_V.js";import"./Flex-BL4S5dy0.js";import"./Table-CI-MHtGM.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
}`,...s.parameters?.docs?.source}}};const Kr=["Basic","Inverse"];export{e as Basic,s as Inverse,Kr as __namedExportsOrder,f as default};
