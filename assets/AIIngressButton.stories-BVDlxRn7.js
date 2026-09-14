import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-Bn623JGk.js";import{E as a,c as g}from"./union-CzVvhL-e.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-B5aQ2WNU.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-DE-upP0k.js";import"./iframe-Z-u-7k7Y.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-h3a1nBMX.js";import"./Svg-BkjYbkv_.js";import"./px2rem-C0KbprIx.js";import"./components-Djct-_L0.js";import"./StatusIndicator-B_9x2o4n.js";import"./Text-0Ti-p1aM.js";import"./mergeStyles-CYryQlIv.js";import"./Box-BFqsP1oU.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-tV08jswE.js";import"./grid-D3f4YGKk.js";import"./cornerShape-k64UXzQq.js";import"./Card-Ch8K_ETr.js";import"./ExternalHyperlink-48eXHs0h.js";import"./Hyperlink-toH5e7fM.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BXcVfytW.js";import"./BaseButton-D4Z_PKLz.js";import"./Button-Ckg1U3M9.js";import"./lerna-_zqhWQJx.js";import"./CanvasProvider-b0qTazfV.js";import"./index-kj8ZfNNN.js";import"./Tooltip-DJRDMu32.js";import"./useTooltip-gvhC1rNn.js";import"./getTransformFromPlacement-ByVTeDCZ.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BnLq_SYX.js";import"./Popper-C7USlLo9.js";import"./TertiaryButton-DRYMtrYD.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-7ipmRCNc.js";import"./ColorPicker-DMGCJkKB.js";import"./ColorInput-DWfueUTG.js";import"./check-small-BqSDQIle.js";import"./TextInput-BNWfc8p7.js";import"./types-DXdjelYI.js";import"./FormField-CnOYdrk9.js";import"./check-Ds6vsrAM.js";import"./Expandable-BwVAEV6l.js";import"./Avatar-DL4GfwWD.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-3fEbO6zD.js";import"./Popup-Bvs5veQ7.js";import"./x-B1faap_l.js";import"./usePopupTarget-Bjx-fxUx.js";import"./useInitialFocus-DPmdt3uY.js";import"./useReturnFocus-B9pAa3zV.js";import"./useFocusRedirect-C7Lgy2AW.js";import"./Breadcrumbs-CG1uBkwI.js";import"./useOverflowListTarget-BZIuzDl0.js";import"./useListItemRegister-BTqF6aIQ.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-om1xBK3M.js";import"./OverflowTooltip--XR7qPax.js";import"./useListItemSelect-B9X1lkRn.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-B0BQq5_s.js";import"./Table-Dv69g5wH.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
