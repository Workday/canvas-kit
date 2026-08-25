import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-Bp1vAbJe.js";import{E as a,c as g}from"./union-Csj3bYC6.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-6paMXfxs.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-DE-upP0k.js";import"./iframe-DUz6TVNi.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bc5FTqSz.js";import"./Svg-CDh6670a.js";import"./px2rem-C0KbprIx.js";import"./components-DIXe_rXl.js";import"./StatusIndicator-BmiiDMjj.js";import"./Text-Cdlm4YRv.js";import"./mergeStyles-C3mqUtmC.js";import"./Box-BwSubRt6.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-1BnMPfFj.js";import"./grid-DeBl5Muz.js";import"./cornerShape-DO7zpd3K.js";import"./Card-CLZCJsGP.js";import"./ExternalHyperlink-ezvqZYmg.js";import"./Hyperlink-DAuEViNw.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-rEEjUScI.js";import"./BaseButton-D8zYHbxs.js";import"./Button-BuO9pq7_.js";import"./lerna-DjshtMtA.js";import"./CanvasProvider-BTLvcapT.js";import"./index-D-t2nnqG.js";import"./Tooltip-DC2MIugw.js";import"./useTooltip-COXD4t91.js";import"./getTransformFromPlacement-CVuX70VQ.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-Pga8fWKh.js";import"./Popper-BRbe_tz9.js";import"./TertiaryButton-GhfgKIvV.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BFh8CuXH.js";import"./ColorPicker-B3hCckRJ.js";import"./ColorInput-T4JGhPAB.js";import"./check-small-BqSDQIle.js";import"./TextInput-rOV0Sdab.js";import"./types-DXdjelYI.js";import"./FormField-Dq_eL3Ph.js";import"./check-Ds6vsrAM.js";import"./Expandable-BSMWoT5r.js";import"./Avatar-Hn8J_kPA.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Bg-DdY8-.js";import"./Popup-B3eOes-q.js";import"./x-B1faap_l.js";import"./usePopupTarget-KBNzPGUp.js";import"./useInitialFocus-DzxHd3wF.js";import"./useReturnFocus-CL2JvsSp.js";import"./useFocusRedirect-Cqk2nVwG.js";import"./Breadcrumbs-CRhNXeMi.js";import"./useOverflowListTarget-Cqie2m_G.js";import"./useListItemRegister-NCGS7HKL.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DT2pOe49.js";import"./OverflowTooltip-CieFzTnq.js";import"./useListItemSelect-C_0Ny6tb.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CyhOkoOt.js";import"./Table-D9NIGuz3.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
