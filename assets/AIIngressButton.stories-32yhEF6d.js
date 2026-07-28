import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-DQas4z62.js";import{E as a,c as g}from"./union-CpxIHOCo.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-Dk_3Hexn.js";import{c as u}from"./cs-rfTTo7Bg.js";import{p as I,c as x}from"./index-5dfzm_kn.js";import"./iframe-CFVQiBA-.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-FnxI7NlK.js";import"./Svg-CvDR7rs1.js";import"./px2rem-C0KbprIx.js";import"./components-LrHOR9oD.js";import"./StatusIndicator-D-ornu3s.js";import"./Text-MDqq-tDA.js";import"./mergeStyles-ohqdrEHk.js";import"./Box-C_Zoww7w.js";import"./index-DmIRx617.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DnUIWBVd.js";import"./grid-DZpUo_qA.js";import"./Card-Duau7fJD.js";import"./ExternalHyperlink-DTRQTw8T.js";import"./Hyperlink-D-QtfVKe.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-DrmHtUke.js";import"./BaseButton-CwOogSdK.js";import"./Button-CaC9joHn.js";import"./lerna-CS_wJezx.js";import"./CanvasProvider-C7ugKcSG.js";import"./index-B2vXpe_3.js";import"./Tooltip-DjCNh0OF.js";import"./useTooltip-Dy9oB3h1.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BPGJTVOJ.js";import"./Popper-C-25vGoi.js";import"./TertiaryButton-D6oRjkOE.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-CAieKCq4.js";import"./ColorPicker-CmjRGgdP.js";import"./ColorInput-CNQRZ6WI.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-C01_4HFH.js";import"./types-DXdjelYI.js";import"./FormField-BBnhzMEn.js";import"./check-Bvurkvei.js";import"./Expandable-D1zDN_N8.js";import"./Avatar-CSNRXgwu.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BjczhkIP.js";import"./Popup-DqX78Ow2.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DK6ZxwCr.js";import"./useInitialFocus-CmnT-JED.js";import"./useReturnFocus-sj-wgStn.js";import"./useFocusRedirect-ek3C1H7-.js";import"./Breadcrumbs-DRoyF68R.js";import"./useOverflowListTarget-DNGMJeCo.js";import"./useListItemSelect-Bv9pmpNz.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-B8BL5Y9M.js";import"./OverflowTooltip-BqdyzyNu.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-BRV6SZ6-.js";import"./Table-BPaN5x_p.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
