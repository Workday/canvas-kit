import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-S9heEjDB.js";import{E as a,c as g}from"./union-CGwT1W6h.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-Dfwx0t3y.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-S3lnlYF6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-cR52np-F.js";import"./Svg-DFTRPJbR.js";import"./px2rem-C0KbprIx.js";import"./components-DZ7gcnmf.js";import"./StatusIndicator-C6NFPG1W.js";import"./Text-Dq1Khk-W.js";import"./mergeStyles-BP16ssCo.js";import"./Box-B7TbbpGF.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-8HjEV6uK.js";import"./grid-DRnqgMjx.js";import"./cornerShape-BGmLOcIR.js";import"./Card-pug6xZRz.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-BronfvHJ.js";import"./Hyperlink-DU4GTsRr.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BL-2qZhc.js";import"./BaseButton-2zF5edCR.js";import"./Button-B_EzzA5D.js";import"./lerna-aI6qZ1Pt.js";import"./CanvasProvider-CpK17MWY.js";import"./index-kj8ZfNNN.js";import"./Tooltip-BNsvzMEy.js";import"./useTooltip-8i7Cvrt6.js";import"./getTransformFromPlacement-poA3VaOa.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-A5y8RNhV.js";import"./Popper-BDxfDxqg.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BebqiWQV.js";import"./TypeLevelComponents-C6i28M72.js";import"./ColorPicker-DLxyxiLV.js";import"./ColorInput-esCkCWDf.js";import"./check-small-BqSDQIle.js";import"./TextInput-BGtphxVN.js";import"./types-DXdjelYI.js";import"./FormField-BXVS88YR.js";import"./check-Ds6vsrAM.js";import"./Expandable-CLnd3WvE.js";import"./Avatar-BtCXASBk.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DUa_iSsH.js";import"./Popup-CV8ldnuW.js";import"./x-B1faap_l.js";import"./usePopupTarget-CS4HpMJ7.js";import"./useInitialFocus-_tj4wGMI.js";import"./useReturnFocus-DPvPMlN0.js";import"./useFocusRedirect-C1VGxkGF.js";import"./Breadcrumbs-BTFqkqg8.js";import"./useOverflowListItemMeasure-CKlONU9D.js";import"./useListItemRegister-nqCV-JIK.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DmvIlmjb.js";import"./OverflowTooltip-Dub9MCHf.js";import"./useListItemRovingFocus-1AH9fBkM.js";import"./useListItemSelect-Deg3rTQQ.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-BnWTTXkN.js";import"./Flex-CMmK1k0_.js";import"./Table-DzmDGUvd.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
