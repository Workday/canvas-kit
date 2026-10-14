import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-BxU2-Dvg.js";import{E as a,c as g}from"./union-PgVXslOZ.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-BLRBr-rs.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index--KWQvxqz.js";import"./iframe-jTs6KYRB.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon--fqcxg9T.js";import"./Svg-tkxNvoYx.js";import"./px2rem-C0KbprIx.js";import"./components-pm5o1xBY.js";import"./StatusIndicator-PPGyVxjC.js";import"./Text-DV3mI71K.js";import"./mergeStyles-Dgag8kI5.js";import"./Box-Cxcl3Pz4.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-C8-Q7Yge.js";import"./grid-1w_RIXoS.js";import"./cornerShape-BtPTv_W4.js";import"./Card-D3_tFDM6.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-Cu84VVkz.js";import"./Hyperlink-DIa8we02.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DloJl4Gi.js";import"./BaseButton-BhNh45z4.js";import"./Button-CHcm6yl-.js";import"./lerna-DkOF4dX-.js";import"./CanvasProvider-DrTkG8rB.js";import"./index-kj8ZfNNN.js";import"./Tooltip-B2PpvoY-.js";import"./useTooltip-DZiOcCHG.js";import"./getTransformFromPlacement-BIgn6nFa.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BB6dVqt7.js";import"./Popper-CK4bDZ3N.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BYrZAbxn.js";import"./TypeLevelComponents-BMjEXdmE.js";import"./ColorPicker-Dwn9NVq9.js";import"./ColorInput-BE4OOCSb.js";import"./check-small-BqSDQIle.js";import"./TextInput-CdQQ1BWs.js";import"./types-DXdjelYI.js";import"./FormField-Dvc4qg0I.js";import"./check-Ds6vsrAM.js";import"./Expandable-BY1kiZBg.js";import"./Avatar-BYd6P6hI.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-BQSs8rUv.js";import"./Popup-zWbA7gkF.js";import"./x-B1faap_l.js";import"./usePopupTarget-_QLXEGyy.js";import"./useInitialFocus-D6CrJAhh.js";import"./useReturnFocus-Dx4p_ThR.js";import"./useFocusRedirect-tUZFXCBg.js";import"./Breadcrumbs-BCzHghcJ.js";import"./useOverflowListItemMeasure-D8gbi5fx.js";import"./useListItemRegister-B7XQ7Vvo.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DBoRx_v0.js";import"./OverflowTooltip-XDloe67Z.js";import"./useListItemRovingFocus-DSPINadF.js";import"./useListItemSelect-8A_yvuaV.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CXp4R1os.js";import"./Flex-DkRt7m_M.js";import"./Table-BzxwX270.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
