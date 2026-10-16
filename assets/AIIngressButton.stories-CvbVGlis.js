import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-EBgFcv5i.js";import{E as a,c as g}from"./union-BB63apep.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-BrWliLjx.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index--KWQvxqz.js";import"./iframe-B7df14hJ.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CUbzRY0K.js";import"./Svg-DEIkz5dS.js";import"./px2rem-C0KbprIx.js";import"./components-BIe4YBQT.js";import"./StatusIndicator-COFktHaJ.js";import"./Text-CNQ2hnGj.js";import"./mergeStyles-DdaEVkWU.js";import"./Box-Iypa-ysL.js";import"./index-5enOfKoO.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BwCXUuSV.js";import"./grid-DXeFpVCA.js";import"./cornerShape-SMDvHRmU.js";import"./Card-CEBuJOSv.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-BvCIMCCX.js";import"./Hyperlink-DdjEfQT-.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-KazAI8Tn.js";import"./BaseButton-C49WX9Rc.js";import"./Button-IFDag6rZ.js";import"./lerna-C1CB0Xoi.js";import"./CanvasProvider-BHb5_c8k.js";import"./index-kj8ZfNNN.js";import"./Tooltip-CSGy_WI_.js";import"./useTooltip-DzymDaaP.js";import"./getTransformFromPlacement-CBrFg0vm.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-p6BLzHcP.js";import"./Popper-CqSBbT2S.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-CYMp_DqV.js";import"./TypeLevelComponents-BIf-Sb8C.js";import"./ColorPicker-fgt1yNAi.js";import"./ColorInput-Cec_SRld.js";import"./check-small-BqSDQIle.js";import"./TextInput-C3mJl_eO.js";import"./types-DXdjelYI.js";import"./FormField--j1qiwmN.js";import"./check-Ds6vsrAM.js";import"./Expandable-vowNc99p.js";import"./Avatar-aL9vVSpj.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Cs0Aoz0c.js";import"./Popup-C8V0gvhY.js";import"./x-B1faap_l.js";import"./usePopupTarget-D6mRuUoU.js";import"./useInitialFocus-Cyj9VBtN.js";import"./useReturnFocus-CdbVNFA8.js";import"./useFocusRedirect-B06ozcxf.js";import"./Breadcrumbs-CSWDmukJ.js";import"./useOverflowListItemMeasure--2JoF_M1.js";import"./useListItemRegister-CVfhnkS0.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-C93fbBQV.js";import"./OverflowTooltip-q2DzOlhE.js";import"./useListItemRovingFocus-BNNvfPJ2.js";import"./useListItemSelect-D6fgT6R_.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CNKhJ8da.js";import"./Flex-Pvt9KTg5.js";import"./Table-CTN-R6cb.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
