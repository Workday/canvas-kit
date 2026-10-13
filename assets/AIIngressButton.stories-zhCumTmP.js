import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-CPEY9mVB.js";import{E as a,c as g}from"./union-BKau7noS.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-CLu-z_Gv.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-jCBjnmNg.js";import"./iframe-Bkm0BmW4.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BPZ9NGRh.js";import"./Svg-INiWf6_o.js";import"./px2rem-C0KbprIx.js";import"./components-DIuGf2GL.js";import"./StatusIndicator-DJa-hVHZ.js";import"./Text-zNhrpSVc.js";import"./mergeStyles-_F_w-QRg.js";import"./Box-B3-ZNcq1.js";import"./index-DZtdzgZp.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-DlZgadYW.js";import"./grid-CkSBD0c1.js";import"./cornerShape-DSRY-HpH.js";import"./Card-BwS_GZAR.js";import"./ExternalHyperlink-DAzOzF0s.js";import"./Hyperlink-BetVoPK-.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-Jl4r8QZ8.js";import"./BaseButton-7pqzkmgC.js";import"./Button-mbDeYi9U.js";import"./lerna-CNra2jwc.js";import"./CanvasProvider-C0KLVb_Y.js";import"./index-kj8ZfNNN.js";import"./Tooltip-DYWHZEUv.js";import"./useTooltip-Dlbqrfcq.js";import"./getTransformFromPlacement-BT8LDuig.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-C2pyVwEA.js";import"./Popper-O6-YLbYK.js";import"./TertiaryButton-0jrTGF7D.js";import"./TypeLevelComponents-GQ_Z8_15.js";import"./ColorPicker-BKeuDX1H.js";import"./ColorInput--QAesCRv.js";import"./check-small-BqSDQIle.js";import"./TextInput-yOpJUkFC.js";import"./types-DXdjelYI.js";import"./FormField-BNRMMAK1.js";import"./check-Ds6vsrAM.js";import"./Expandable-D_Ycy_E7.js";import"./Avatar-CWcXw-0_.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-B_gsK8EH.js";import"./Popup-5GCVIpJV.js";import"./x-B1faap_l.js";import"./usePopupTarget-oIbyi0iD.js";import"./useInitialFocus-DXVek-fL.js";import"./useReturnFocus-CbHaFdkh.js";import"./useFocusRedirect-CtM7cR5v.js";import"./Breadcrumbs-Cz8k8t71.js";import"./useOverflowListItemMeasure-C1LV18Sh.js";import"./useListItemRegister-DC5jeeKl.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DniAwAlt.js";import"./OverflowTooltip-cMrn5DhC.js";import"./useListItemSelect-Dvd17_uN.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-B5cDPBao.js";import"./Flex-B3WONGc8.js";import"./Table-CfKUI8L-.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
