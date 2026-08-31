import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-6so-KoFu.js";import{E as a,c as g}from"./union-DePjNdvf.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-Bu5MJ82S.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-DE-upP0k.js";import"./iframe-DNLsrC-Y.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DQIl41_4.js";import"./Svg-BNbEZ3E8.js";import"./px2rem-C0KbprIx.js";import"./components-J2matnwI.js";import"./StatusIndicator-BBvMXJDU.js";import"./Text-CjirTJMi.js";import"./mergeStyles-Dzkg_44R.js";import"./Box-C28byrRl.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Cgcx0XP-.js";import"./grid-D3GOPfSf.js";import"./cornerShape-DaLncuks.js";import"./Card-Cixb7JwI.js";import"./ExternalHyperlink-CaaD5lbQ.js";import"./Hyperlink-DzsL2-aa.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-D5Cqn9Jg.js";import"./BaseButton-CLmEjkXA.js";import"./Button-MuaWtoCf.js";import"./lerna-BGQ5QfjI.js";import"./CanvasProvider-D99BixEQ.js";import"./index-D-t2nnqG.js";import"./Tooltip-DN54ALip.js";import"./useTooltip-BR1ydcPP.js";import"./getTransformFromPlacement-BMTXYfgW.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BX8xl9NG.js";import"./Popper--Mi8Hc-7.js";import"./TertiaryButton-aMR34MRB.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-C3guoDTA.js";import"./ColorPicker-D3uc791o.js";import"./ColorInput-BfZSPql0.js";import"./check-small-BqSDQIle.js";import"./TextInput-COgKXSBT.js";import"./types-DXdjelYI.js";import"./FormField-A4L1nD1D.js";import"./check-Ds6vsrAM.js";import"./Expandable-Bg296Eln.js";import"./Avatar-BLxuPixd.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-CCIu0N-w.js";import"./Popup-CFzYh4ki.js";import"./x-B1faap_l.js";import"./usePopupTarget-CRuM6ip6.js";import"./useInitialFocus-BtBWSoKu.js";import"./useReturnFocus-BNRSSHBJ.js";import"./useFocusRedirect-CCL3wKTy.js";import"./Breadcrumbs-CN2fVURZ.js";import"./useOverflowListTarget-I_Pk7uEi.js";import"./useListItemRegister-DiZ5PIQz.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DEcAZBQ-.js";import"./OverflowTooltip-BnIGiGVa.js";import"./useListItemSelect-DWWKuB8D.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-Bya8Tutq.js";import"./Table-B_FupndC.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
