import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-7c7aP5Tf.js";import{E as a,c as g}from"./union-c9Pl4GuD.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-DfCeDY6U.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-B3_snEwa.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-C-9MyzEr.js";import"./Svg-rOw8jW07.js";import"./px2rem-C0KbprIx.js";import"./components-S5bC6fZi.js";import"./StatusIndicator-Djim6Lil.js";import"./Text-DNDYTuHT.js";import"./mergeStyles-Dk0M9lrR.js";import"./Box-B4eyyvuU.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-KgQM1qcC.js";import"./grid-CK5kpvEI.js";import"./cornerShape-BMV-HxmE.js";import"./Card-DyIEc58y.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-OUPfD5y-.js";import"./Hyperlink-CoWZ0EMi.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-aeALGU57.js";import"./BaseButton-6gpeVhIx.js";import"./Button-2Oi_8-Fb.js";import"./lerna-86MGNygZ.js";import"./CanvasProvider-axEgo6e1.js";import"./index-CFEs8r9D.js";import"./Tooltip-D2mxiWLP.js";import"./useTooltip-Cgsa4tFw.js";import"./getTransformFromPlacement-QV_saiu5.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-B4YT-A7Z.js";import"./Popper-DthqIkuE.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-CJlYwh7s.js";import"./TypeLevelComponents-DmdCDKVS.js";import"./ColorPicker-H_dioD_A.js";import"./ColorInput-DCqvSUHi.js";import"./check-small-BqSDQIle.js";import"./TextInput-DakYh1Kw.js";import"./types-DXdjelYI.js";import"./FormField-BpfHNciE.js";import"./check-Ds6vsrAM.js";import"./Expandable-CKpifHcF.js";import"./Avatar-BCTqwRCB.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Cj35v0pp.js";import"./Popup-BEpU_wKx.js";import"./x-B1faap_l.js";import"./usePopupTarget-SKx5oDcQ.js";import"./useInitialFocus-BWETe4MH.js";import"./useReturnFocus-DnG6180h.js";import"./useFocusRedirect-DjYJjijD.js";import"./Breadcrumbs-DNdn0Zq4.js";import"./useOverflowListItemMeasure-W50cfnSd.js";import"./useListItemRegister-B6CuK0fQ.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DpkUyS6S.js";import"./OverflowTooltip-Cm441jpv.js";import"./useListItemRovingFocus-Cpz-9FpV.js";import"./useListItemSelect-CjOf9PN3.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CffHZBEi.js";import"./Flex-CRc_8oDC.js";import"./Table-BATvsA9V.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
