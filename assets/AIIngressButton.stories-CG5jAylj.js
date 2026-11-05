import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-DldWlxWf.js";import{E as a,c as g}from"./union-BMcs_473.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-Bmni24VE.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-DaY0jk3Y.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-C-lsn8SY.js";import"./Svg-CnUv8CcO.js";import"./px2rem-C0KbprIx.js";import"./components-DfK761ue.js";import"./StatusIndicator-DjtQNc9a.js";import"./Text-ZlO6HW6V.js";import"./mergeStyles-Vp3VQTQy.js";import"./Box-BoQ5J_i4.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-CVN7yaqy.js";import"./grid-D-K1FKZf.js";import"./cornerShape-oKuWloiA.js";import"./Card-DZwvY3u3.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-JYXawSgA.js";import"./Hyperlink-BrNmZ56U.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DGx56yR5.js";import"./BaseButton-D9-kf81-.js";import"./Button-hC9Gk3S7.js";import"./lerna-D2ZmRvhe.js";import"./CanvasProvider-B2qftkyC.js";import"./index-CFEs8r9D.js";import"./Tooltip-D0b64BRI.js";import"./useTooltip-D6hxE6SN.js";import"./getTransformFromPlacement-CUURGzgU.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DwqtkWZR.js";import"./Popper-Dq8eR2UQ.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-8VZ3UMt4.js";import"./TypeLevelComponents-Cp4FTkac.js";import"./ColorPicker-B57qI-TE.js";import"./ColorInput-Wf2Z5Y7G.js";import"./check-small-BqSDQIle.js";import"./TextInput-B0BUOy_b.js";import"./types-DXdjelYI.js";import"./FormField-DeriirPe.js";import"./check-Ds6vsrAM.js";import"./Expandable-DpcGkrM0.js";import"./Avatar-B8N79UKe.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-IewtLJTP.js";import"./Popup-BkxvEqbK.js";import"./x-B1faap_l.js";import"./usePopupTarget-DxYHsA1b.js";import"./useInitialFocus-f8MjCilv.js";import"./useReturnFocus-CDQPJuTh.js";import"./useFocusRedirect-Da0_5aiI.js";import"./Breadcrumbs-D3iJqd8X.js";import"./useOverflowListItemMeasure-D4PRWsfA.js";import"./useListItemRegister-BnQYvF7K.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Kk2VrAm5.js";import"./OverflowTooltip-Chawvcyy.js";import"./useListItemRovingFocus-DmoAqEoc.js";import"./useListItemSelect-19hmN-2Q.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-OaGlgKUo.js";import"./Flex-DpEdAX-D.js";import"./Table-Dzmy-Nzr.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
