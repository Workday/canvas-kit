import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-B6_fZJIH.js";import{E as a,c as g}from"./union-73eBhY97.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton---mbD8il.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-udXzHylk.js";import"./iframe-C5jHHwC4.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CFi1VLoO.js";import"./Svg-BS_Dvh6q.js";import"./px2rem-C0KbprIx.js";import"./components-DppiPmWT.js";import"./StatusIndicator-BadRR8Ou.js";import"./Text-C5D3Ht9T.js";import"./mergeStyles-0aQAs1eh.js";import"./Box-AGfoWgij.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-bOHHmX-t.js";import"./grid-DtbHyXmR.js";import"./cornerShape-C5U5sQXc.js";import"./Card-DzhLlfJA.js";import"./ExternalHyperlink-uYYbfEzo.js";import"./Hyperlink-T26S0cW3.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BD2FVi4i.js";import"./BaseButton-CKzS3UNH.js";import"./Button-BYCIT0TJ.js";import"./lerna-BfH53aY9.js";import"./CanvasProvider-Bsmzj5m5.js";import"./index-kj8ZfNNN.js";import"./Tooltip-9ICStd_k.js";import"./useTooltip-CsgEKIvN.js";import"./getTransformFromPlacement-xNvjyxNY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DqbNoIGf.js";import"./Popper-xemT1TtK.js";import"./TertiaryButton-CyD_x8wF.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-jZfo-0ua.js";import"./ColorPicker-Bf6aRSJA.js";import"./ColorInput-DSCHnU6T.js";import"./check-small-BqSDQIle.js";import"./TextInput-DWIaRQL-.js";import"./types-DXdjelYI.js";import"./FormField-BFV0xoAp.js";import"./check-Ds6vsrAM.js";import"./Expandable-K-4Ybhc9.js";import"./Avatar-juNxhmne.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DzCYEDbr.js";import"./Popup-CLuCYqLn.js";import"./x-B1faap_l.js";import"./usePopupTarget-CifT6Oya.js";import"./useInitialFocus-C3yNoxbC.js";import"./useReturnFocus-DDQ4-kU9.js";import"./useFocusRedirect-BoLF_I5b.js";import"./Breadcrumbs-Cc0Qvzn9.js";import"./useOverflowListTarget-DEnwFStT.js";import"./useListItemRegister-BtedmPXX.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DtS_Zcjq.js";import"./OverflowTooltip-CtkxcgW5.js";import"./useListItemSelect-Cwl5Guz1.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-iKGzF7_i.js";import"./Table-qLELy8Y1.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
}`,...s.parameters?.docs?.source}}};const zr=["Basic","Inverse"];export{e as Basic,s as Inverse,zr as __namedExportsOrder,f as default};
