import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-CyGZXPEz.js";import{E as a,c as g}from"./union-BUCG8cdu.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-IurM1wp-.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-Dine_4aU.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DgkB3O3q.js";import"./Svg-CXKlNM9V.js";import"./px2rem-C0KbprIx.js";import"./components-B5QHr9xs.js";import"./StatusIndicator-BRiOfW_b.js";import"./Text-56KUGy0I.js";import"./mergeStyles-Bfd74k5F.js";import"./Box-CyjvvVBh.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BhWEOOmD.js";import"./grid-Bo2FCXCg.js";import"./cornerShape-B1y71wLF.js";import"./Card-TTTo4zHB.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-CMouN1zW.js";import"./Hyperlink-CiXICWo2.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-F9hk8ScV.js";import"./BaseButton-B7Cdo6oA.js";import"./Button-uPfdKrkI.js";import"./lerna-DSxFu7Tr.js";import"./CanvasProvider-CmQuC1n5.js";import"./index-CFEs8r9D.js";import"./Tooltip-CHIJ5lTV.js";import"./useTooltip-CDZrIDIK.js";import"./getTransformFromPlacement-CeI32Hr4.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BNAhz6K3.js";import"./Popper-BKWt9U5M.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BL6wVU0w.js";import"./TypeLevelComponents-BkRTrtYq.js";import"./ColorPicker-YR0REnsY.js";import"./ColorInput-CgQJxHhX.js";import"./check-small-BqSDQIle.js";import"./TextInput-COM6UplY.js";import"./types-DXdjelYI.js";import"./FormField-BT_PZm_j.js";import"./check-Ds6vsrAM.js";import"./Expandable-DpOIWmb-.js";import"./Avatar-Bsyc2LpW.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DQuIuKWH.js";import"./Popup-COb6F4Ts.js";import"./x-B1faap_l.js";import"./usePopupTarget-Cco7peXe.js";import"./useInitialFocus-DcT3-Ce6.js";import"./useReturnFocus-DWZj3b3a.js";import"./useFocusRedirect-Xc3xIpjr.js";import"./Breadcrumbs-DxCbAS4P.js";import"./useOverflowListItemMeasure-ynDmS6wO.js";import"./useListItemRegister-BqQBHrTO.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BetwLbDT.js";import"./OverflowTooltip-BPWo0foa.js";import"./useListItemRovingFocus-BdbIpBLB.js";import"./useListItemSelect-CjGaW9lx.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CTkziXOc.js";import"./Flex-DzCPbc6Q.js";import"./Table-BYK6-5dH.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
