import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-aEeHz9Bw.js";import{E as a,c as g}from"./union-f4T5dsiJ.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-D1lVMUsj.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-WG7MwSjI.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cik2pv8M.js";import"./Svg-q-fWRgLZ.js";import"./px2rem-C0KbprIx.js";import"./components-OdKcSStU.js";import"./StatusIndicator-CMxRGCF-.js";import"./Text-C_lkQW3l.js";import"./mergeStyles-HRRReKI7.js";import"./Box-BQWSASz1.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Cq2SI08U.js";import"./grid-C8fI_h8P.js";import"./cornerShape-XgYWEUxE.js";import"./Card-D9Eclt62.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-D_7UWhFo.js";import"./Hyperlink-IDIZQje_.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CmtnR6ND.js";import"./BaseButton-nXUBoAD8.js";import"./Button-B9EDavVx.js";import"./lerna-CmscxKJq.js";import"./CanvasProvider-Bg8Y7PHJ.js";import"./index-kj8ZfNNN.js";import"./Tooltip-IYVFXsMi.js";import"./useTooltip-Ck_Cs2o9.js";import"./getTransformFromPlacement-BXTUPqrg.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-8wiZHMtw.js";import"./Popper-BausaQH8.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-CrPUVetV.js";import"./TypeLevelComponents-DG2bfmmo.js";import"./ColorPicker-z_PcGJof.js";import"./ColorInput-BAAUbclU.js";import"./check-small-BqSDQIle.js";import"./TextInput-CD4VtYJu.js";import"./types-DXdjelYI.js";import"./FormField-2yV80SkC.js";import"./check-Ds6vsrAM.js";import"./Expandable-CGDkUYTi.js";import"./Avatar-DKnvW9j1.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Co3A0ahW.js";import"./Popup-BsDV9DrA.js";import"./x-B1faap_l.js";import"./usePopupTarget-AlYo2KDF.js";import"./useInitialFocus-BwgZZeE4.js";import"./useReturnFocus-svAEukqR.js";import"./useFocusRedirect-DrSAXKeK.js";import"./Breadcrumbs-CJar9PFX.js";import"./useOverflowListItemMeasure-BqOuADzY.js";import"./useListItemRegister-CXT_DnuF.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DYLwIYhl.js";import"./OverflowTooltip-DGNnz-0s.js";import"./useListItemRovingFocus-WV5pVo7q.js";import"./useListItemSelect-CTP_l593.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-COeWx1fT.js";import"./Flex-YefXsFY4.js";import"./Table-CkLnbDNv.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
