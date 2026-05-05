import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-BSRpa7hw.js";import{E as a,c as g}from"./union-Bq_fV67W.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-BZquW354.js";import{c as u}from"./cs-DvbI9OYs.js";import{p as I,c as x}from"./index-CYsyLHR7.js";import"./iframe-8Z9hyj8f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CQzQ4gRr.js";import"./Svg-CFKxmZXN.js";import"./px2rem-C0KbprIx.js";import"./components-BLZqCckY.js";import"./StatusIndicator-U7ucHK-B.js";import"./Text-7hsxTSvc.js";import"./mergeStyles-CkJ8NvhI.js";import"./Box-CWkwzNZI.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-dYq3mHEV.js";import"./useConstant-CUZppmaV.js";import"./flex-BpVYzPsg.js";import"./grid-COFwODL4.js";import"./Card-CYT1E1UX.js";import"./ExternalHyperlink-BSF-vMXy.js";import"./Hyperlink-p5yKhX3z.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-Bx4f9n21.js";import"./BaseButton-CGvKmIsu.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-C6qfAYgQ.js";import"./lerna-BUmYmoMg.js";import"./CanvasProvider-D16Zuzp0.js";import"./Tooltip-BudaSkJa.js";import"./useTooltip-C8VhxzUk.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CMzgaKMd.js";import"./Popper-C7XE30xe.js";import"./TertiaryButton-OzUplWoq.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-A6AqS-F4.js";import"./ColorPicker-Cj3xwnjd.js";import"./ColorInput-BG1qZf2V.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-m8J5Siyi.js";import"./types-DXdjelYI.js";import"./FormField-BfuouWYS.js";import"./check-BG7HONvH.js";import"./Expandable-D9HGP5Kq.js";import"./Avatar-Czgyc0aL.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-E1OLV4AN.js";import"./Popup-og1nacMu.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-Dr3aQv5b.js";import"./useInitialFocus-Div5K5su.js";import"./useReturnFocus-aYhb8KiC.js";import"./useFocusRedirect-C0Fm-5_Z.js";import"./Breadcrumbs-DopxVY5N.js";import"./useOverflowListTarget-B6jukdWw.js";import"./useListItemSelect-Byv0QwGY.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CJ_9ofNm.js";import"./OverflowTooltip-fVEU-mtQ.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-BkMcjleh.js";import"./Table-BLIPrW4Z.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
}`,...s.parameters?.docs?.source}}};const Gr=["Basic","Inverse"];export{e as Basic,s as Inverse,Gr as __namedExportsOrder,f as default};
