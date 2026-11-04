import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-BppkC0GY.js";import{E as a,c as g}from"./union-BXCcDst0.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-ByRnOMz8.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-CLsxVgDf.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-RDlgSLBH.js";import"./Svg-le8e_fDo.js";import"./px2rem-C0KbprIx.js";import"./components-DCItJ-57.js";import"./StatusIndicator-B6fsZaoD.js";import"./Text-DhpzTlUe.js";import"./mergeStyles-E9t8hjrR.js";import"./Box-D518UAm3.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-cfI4MPjQ.js";import"./grid-TWixonIH.js";import"./cornerShape-Bga0WpCo.js";import"./Card-ByAQY3LD.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-Dkz6PlFa.js";import"./Hyperlink-7wl9z6te.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-tUb2aihZ.js";import"./BaseButton-BUBjJ90g.js";import"./Button-BrcaYg04.js";import"./lerna-DbkmNGv7.js";import"./CanvasProvider-Dnko5pWu.js";import"./index-CFEs8r9D.js";import"./Tooltip-vmFaDCO0.js";import"./useTooltip-CjiyxThm.js";import"./getTransformFromPlacement-DWu89T0w.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DK1Cy6Iq.js";import"./Popper-DUF1Kp74.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-DcVZPi3F.js";import"./TypeLevelComponents-DChd0Jv5.js";import"./ColorPicker-D7IbD8xT.js";import"./ColorInput-DpxSO2pa.js";import"./check-small-BqSDQIle.js";import"./TextInput-CjPZ93U2.js";import"./types-DXdjelYI.js";import"./FormField-C5YWPfYH.js";import"./check-Ds6vsrAM.js";import"./Expandable-D5ZyeIPm.js";import"./Avatar-BnXIpbKo.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DfDA92p1.js";import"./Popup-DHn3sOTh.js";import"./x-B1faap_l.js";import"./usePopupTarget-jky9btN4.js";import"./useInitialFocus-BWplMxQK.js";import"./useReturnFocus-D33KQN5J.js";import"./useFocusRedirect-kodxjr1P.js";import"./Breadcrumbs-BsO0LKnl.js";import"./useOverflowListItemMeasure-CYcKp6Jx.js";import"./useListItemRegister-w3E4ep_H.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CBOS8109.js";import"./OverflowTooltip-D-8cP6dM.js";import"./useListItemRovingFocus-CW46QKVb.js";import"./useListItemSelect-DQHGk0nr.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-BvMsKKDb.js";import"./Flex-CzKKKfow.js";import"./Table-6JqBSpr5.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
