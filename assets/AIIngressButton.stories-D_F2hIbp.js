import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-bjcZDYWY.js";import{E as a,c as g}from"./union-CvuScaog.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-CSCnyykA.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-ClKcahie.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CDokv1Eo.js";import"./Svg-C05gFzlU.js";import"./px2rem-C0KbprIx.js";import"./components-HCdlB-Cn.js";import"./StatusIndicator-5-bffmGi.js";import"./Text-CUdPBNk6.js";import"./mergeStyles-BOTYd98H.js";import"./Box-NtgckSi6.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Iimm9537.js";import"./grid-DE-Ok6Ac.js";import"./cornerShape-CYdiETtT.js";import"./Card-6Upq_3u-.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-D6PgmVOh.js";import"./Hyperlink-Ce9ehO2c.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DL6NX6-s.js";import"./BaseButton-DTTEiDSJ.js";import"./Button-t_PogMNe.js";import"./lerna-CWU0bPB4.js";import"./CanvasProvider-7wBX3WBC.js";import"./index-kj8ZfNNN.js";import"./Tooltip-BXT_NbIZ.js";import"./useTooltip-BYUo1exC.js";import"./getTransformFromPlacement-Ckea_qfD.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-Dt5uIv7J.js";import"./Popper-BORLx1pc.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BKQ-qpBE.js";import"./TypeLevelComponents-DkHh6t7E.js";import"./ColorPicker-DxZNRPSr.js";import"./ColorInput-BAmM_UEF.js";import"./check-small-BqSDQIle.js";import"./TextInput-BhZZLsCb.js";import"./types-DXdjelYI.js";import"./FormField-sWpsfeSW.js";import"./check-Ds6vsrAM.js";import"./Expandable-CuwxxKCd.js";import"./Avatar-B_0clIm1.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-BtvfKEHm.js";import"./Popup-BwLK0_XW.js";import"./x-B1faap_l.js";import"./usePopupTarget-GjHQDItI.js";import"./useInitialFocus-DdZcSC4S.js";import"./useReturnFocus-CaCCacmv.js";import"./useFocusRedirect-6vTTAhV8.js";import"./Breadcrumbs-C9GWGsR0.js";import"./useOverflowListItemMeasure-pqIqckF3.js";import"./useListItemRegister-hoJ7ZOOD.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DCyhNDN-.js";import"./OverflowTooltip-DawyYxpX.js";import"./useListItemRovingFocus-Dv8Dsd6e.js";import"./useListItemSelect-DCdfEE1M.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CuwXg7V9.js";import"./Flex-DiNR_lju.js";import"./Table-Bl2ZXEiS.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
