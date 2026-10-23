import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-3CvKOOe7.js";import{E as a,c as g}from"./union-BqFu7U-7.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-DSS1zeSB.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index--KWQvxqz.js";import"./iframe-TB_Swh2I.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-HqVC_1La.js";import"./Svg-DpRbd5ao.js";import"./px2rem-C0KbprIx.js";import"./components-Dg6r_l6g.js";import"./StatusIndicator-C8pZMrF4.js";import"./Text-DhPJPWok.js";import"./mergeStyles-DQAIS8xD.js";import"./Box-MKWQ5iJf.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-l0maHnrZ.js";import"./grid-D9_inQjb.js";import"./cornerShape-BJAVQ3D-.js";import"./Card-DxWkS5DO.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-D4cbvtWK.js";import"./Hyperlink-BVc2lRj-.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-Czy1ozWJ.js";import"./BaseButton-B4zfOmRB.js";import"./Button-UegFhBzX.js";import"./lerna-CtOujTcn.js";import"./CanvasProvider-Dlka2NIO.js";import"./index-kj8ZfNNN.js";import"./Tooltip-C376o-je.js";import"./useTooltip-DcVSVBYt.js";import"./getTransformFromPlacement-BqfTyZs9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DNAp0b8d.js";import"./Popper-DPlZjLFd.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-i-tHOusL.js";import"./TypeLevelComponents-Bl0gasSR.js";import"./ColorPicker-ZxXXDXOc.js";import"./ColorInput-BsO5T6cJ.js";import"./check-small-BqSDQIle.js";import"./TextInput-DvgP4PT9.js";import"./types-DXdjelYI.js";import"./FormField-BWSFJLvh.js";import"./check-Ds6vsrAM.js";import"./Expandable-Dk9Ea4ra.js";import"./Avatar-DFRqPldJ.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-CzT9CmZh.js";import"./Popup-Dphd2uRb.js";import"./x-B1faap_l.js";import"./usePopupTarget-B4UGit2X.js";import"./useInitialFocus-C4NbykSC.js";import"./useReturnFocus-BF5s776m.js";import"./useFocusRedirect-BkTwukrZ.js";import"./Breadcrumbs-CslN1-Eo.js";import"./useOverflowListItemMeasure-WxAN-Sv9.js";import"./useListItemRegister-CNN0mL98.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Gyv5iPUB.js";import"./OverflowTooltip-3VMgvUdj.js";import"./useListItemRovingFocus-omXicuh4.js";import"./useListItemSelect-cQcAgf8O.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-BFrXu8JM.js";import"./Flex-DsFvUQdM.js";import"./Table-BcPSszzv.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
