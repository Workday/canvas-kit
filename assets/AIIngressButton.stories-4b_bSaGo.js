import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-qPwveHR6.js";import{E as a,c as g}from"./union-Bnamea8Z.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-C1G6al6p.js";import{c as u}from"./cs-rfTTo7Bg.js";import{p as I,c as x}from"./index-5dfzm_kn.js";import"./iframe-BY-DvtE3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CYWKtt5g.js";import"./Svg-BOmEZWs3.js";import"./px2rem-C0KbprIx.js";import"./components-cPv92EHK.js";import"./StatusIndicator-s9ptt1Pz.js";import"./Text-zAHvGL5L.js";import"./mergeStyles-DVElzyr1.js";import"./Box-Bb5t4hxz.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-BhZmNYDG.js";import"./grid-Bmsznp5n.js";import"./Card-CTuFKHAr.js";import"./ExternalHyperlink-cu9qP6r4.js";import"./Hyperlink-ZSJz4P_M.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-iAWsqLt2.js";import"./BaseButton-CRjk8TEB.js";import"./Button-CFrxsNin.js";import"./lerna-BNQZfm36.js";import"./CanvasProvider-Ci5riZhq.js";import"./index-B2vXpe_3.js";import"./Tooltip-CErWRtkn.js";import"./useTooltip-C4SyLK8A.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CoecPvtE.js";import"./Popper-hn4sGAKm.js";import"./TertiaryButton-COS4TZ7R.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DEQbTSqj.js";import"./ColorPicker-BQihjF3C.js";import"./ColorInput-Cv6UNp1e.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-BsHYcEiN.js";import"./types-DXdjelYI.js";import"./FormField-0Nk9m9UE.js";import"./check-Bvurkvei.js";import"./Expandable-Cy6N2xzw.js";import"./Avatar-DAJhoyPY.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BhenD216.js";import"./Popup-D9be8Sr5.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BKN39EIm.js";import"./useInitialFocus-Cco8M7Xz.js";import"./useReturnFocus-Bw0byDkw.js";import"./useFocusRedirect-C1CWQjrd.js";import"./Breadcrumbs-rsTi76HN.js";import"./useOverflowListTarget-BanEKIKR.js";import"./useListItemSelect-B5Qd5LzX.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DL7TM4pR.js";import"./OverflowTooltip-8foSh-Ir.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-sM1mmQLC.js";import"./Table-pGLjoovN.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
