import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-CnwIuS9c.js";import{E as a,c as g}from"./union-DCNxN4Fu.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-DLGE3Pih.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-C5bjS5W5.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DH6nxozh.js";import"./Svg-D1dbi2br.js";import"./px2rem-C0KbprIx.js";import"./components-CYP9NeI-.js";import"./StatusIndicator-06Vt-SYv.js";import"./Text-C3NU_mns.js";import"./mergeStyles-CKlw0c7j.js";import"./Box-CnfAPO8a.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BQ2dge_k.js";import"./grid-92Zbaa_D.js";import"./cornerShape-VSFpHIfk.js";import"./Card-CbxxBIYl.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-DsypSJpj.js";import"./Hyperlink-D-Dy_Jxf.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-d13vBCKw.js";import"./BaseButton-xzvUa-Ri.js";import"./Button-BZ4Q3VL_.js";import"./lerna-aX4C0r-A.js";import"./CanvasProvider-CF14T0i9.js";import"./index-CFEs8r9D.js";import"./Tooltip-DKOkk9bg.js";import"./useTooltip-BvHflE-K.js";import"./getTransformFromPlacement-CQhU5Ns9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-RHSc1xTq.js";import"./Popper-CH8vOlWw.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-DizXonei.js";import"./TypeLevelComponents-CndumxZN.js";import"./ColorPicker-M7kuPLRH.js";import"./ColorInput-BLuMghFg.js";import"./check-small-BqSDQIle.js";import"./TextInput-DYeEz8ba.js";import"./types-DXdjelYI.js";import"./FormField-DbiERIWN.js";import"./check-Ds6vsrAM.js";import"./Expandable-BB8sBc1C.js";import"./Avatar-B_Z34ek8.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-B0yZ8yYN.js";import"./Popup-DP2Q4Rip.js";import"./x-B1faap_l.js";import"./usePopupTarget-C4hhXT-q.js";import"./useInitialFocus-CSTv9I-c.js";import"./useReturnFocus-0FcjaGTk.js";import"./useFocusRedirect-CGBrr3mg.js";import"./Breadcrumbs-DD6oIFjn.js";import"./useOverflowListItemMeasure-DL1aXX0A.js";import"./useListItemRegister-84Mvg-1C.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CIadn-lh.js";import"./OverflowTooltip-CHKOyo-U.js";import"./useListItemRovingFocus-Clx6HCe_.js";import"./useListItemSelect-BujBeYhE.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-DML8M3ag.js";import"./Flex-D_NCz1SB.js";import"./Table-DHswv8ON.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
