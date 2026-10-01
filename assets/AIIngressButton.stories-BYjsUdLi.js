import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-CiaMWYbr.js";import{E as a,c as g}from"./union-CTmlbt7X.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-Dzlhcds-.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-jCBjnmNg.js";import"./iframe-CNhLLaFO.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-vXgIF5zT.js";import"./Svg-BzLA6oZ0.js";import"./px2rem-C0KbprIx.js";import"./components-DTthHGKT.js";import"./StatusIndicator-CJKCReNn.js";import"./Text-DTfwe_zT.js";import"./mergeStyles-DKqoPbSL.js";import"./Box-B-CSScYU.js";import"./index-DsKuT9Xg.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-Db6l7LhR.js";import"./grid-BuNt6bVu.js";import"./cornerShape-DWAANhH5.js";import"./Card-DW5XrHM7.js";import"./ExternalHyperlink-BLw2aCRE.js";import"./Hyperlink-CCm-F-d2.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-Bqr8EMWQ.js";import"./BaseButton-CV6FwbLE.js";import"./Button-DGnEnmhD.js";import"./lerna-qk1XUpFu.js";import"./CanvasProvider-DGWqlLHc.js";import"./index-kj8ZfNNN.js";import"./Tooltip-DcG7yoNZ.js";import"./useTooltip-CgLpdJvj.js";import"./getTransformFromPlacement-D0miBKMZ.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BEuuUG2L.js";import"./Popper-ChXqbTlz.js";import"./TertiaryButton-D4l0taVd.js";import"./TypeLevelComponents-DTn-DeHR.js";import"./ColorPicker-CM2G7Ub4.js";import"./ColorInput-DfZVZ3Rj.js";import"./check-small-BqSDQIle.js";import"./TextInput-CYlTcryX.js";import"./types-DXdjelYI.js";import"./FormField-CM8Jgz8d.js";import"./check-Ds6vsrAM.js";import"./Expandable-D3y34LVc.js";import"./Avatar-D-X49Bur.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-ByMeJm8M.js";import"./Popup-BtVu20Qn.js";import"./x-B1faap_l.js";import"./usePopupTarget-BPF2zy8a.js";import"./useInitialFocus-DX321HoV.js";import"./useReturnFocus-LUunQ5Ks.js";import"./useFocusRedirect-Cz4pbmhj.js";import"./Breadcrumbs-Ds8bIXCz.js";import"./useOverflowListTarget-GAudhvjB.js";import"./useListItemRegister-B15KThaE.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CPFz14_c.js";import"./OverflowTooltip-D-tSVQDC.js";import"./useListItemSelect---b-W7HL.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DMNHdeEQ.js";import"./Table-CHfHzS4h.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
}`,...s.parameters?.docs?.source}}};const qr=["Basic","Inverse"];export{e as Basic,s as Inverse,qr as __namedExportsOrder,f as default};
