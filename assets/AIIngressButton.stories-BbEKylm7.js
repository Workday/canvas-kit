import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-D3TQGW5C.js";import{E as a,c as g}from"./union-1renWLLW.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-B8IlSGCv.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-BoPhJQVk.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DxdGt8lR.js";import"./Svg-P4I-l01h.js";import"./px2rem-C0KbprIx.js";import"./components-B2Q2g_kO.js";import"./StatusIndicator-Dm96L8Go.js";import"./Text-BLlhCS-c.js";import"./mergeStyles-Cj6q-U5f.js";import"./Box-Dk0W8wtP.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-3jl45ffO.js";import"./grid-Ch81PKOz.js";import"./cornerShape-CbzTqdgH.js";import"./Card-D23lSHWe.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-5r9TtsQy.js";import"./Hyperlink-D-wi_N3A.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-ENoIoFrq.js";import"./BaseButton-B2qpNNxq.js";import"./Button-oKB08GyB.js";import"./lerna-BK2--YZE.js";import"./CanvasProvider-CnwanEes.js";import"./index-CFEs8r9D.js";import"./Tooltip-MCJZgr7x.js";import"./useTooltip-jA6eKExB.js";import"./getTransformFromPlacement-mFHZLDM3.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BoOh5Dla.js";import"./Popper-CkxhCgtJ.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-DQiMlgW6.js";import"./TypeLevelComponents-B7PFv6S9.js";import"./ColorPicker-BgcUXhZi.js";import"./ColorInput-Bs4NdKtj.js";import"./check-small-BqSDQIle.js";import"./TextInput-DWXGfW5o.js";import"./types-DXdjelYI.js";import"./FormField-BKQ_YlZQ.js";import"./check-Ds6vsrAM.js";import"./Expandable-B_fHYgtb.js";import"./Avatar-BlKvUt6W.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Cx8FKbXT.js";import"./Popup-B1ZpsWi8.js";import"./x-B1faap_l.js";import"./usePopupTarget-BmFbxqTK.js";import"./useInitialFocus-BfTzQk0Y.js";import"./useReturnFocus-DJjyGDVU.js";import"./useFocusRedirect-DZsVo1k6.js";import"./Breadcrumbs-C-yJBYZy.js";import"./useOverflowListItemMeasure-BrthcQ5p.js";import"./useListItemRegister-CWvR7y0-.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D31M8F2f.js";import"./OverflowTooltip-BDjV_6T0.js";import"./useListItemRovingFocus-DV_jor0K.js";import"./useListItemSelect-DQ743t_N.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-BLLBMKkA.js";import"./Flex-DqxeIv6k.js";import"./Table-DzVM0tKr.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
