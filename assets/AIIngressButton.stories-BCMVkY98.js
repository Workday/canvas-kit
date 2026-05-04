import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-DR-D6EjG.js";import{E as a,c as g}from"./union-CT45YaQX.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-I9MaPL4-.js";import{c as u}from"./cs-DvbI9OYs.js";import{p as I,c as x}from"./index-CYsyLHR7.js";import"./iframe-WXRxFeZ6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./px2rem-C0KbprIx.js";import"./components-DlilqqSw.js";import"./StatusIndicator-BBevkT_x.js";import"./Text-Tayi47N3.js";import"./mergeStyles-DCTLot6K.js";import"./Box-CfIP0C5s.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./Card-Dd5fhXE2.js";import"./ExternalHyperlink-883FduMU.js";import"./Hyperlink-BOmKsWiK.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-BfP_SOlX.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-Cg4j9RPw.js";import"./lerna-CYqneavZ.js";import"./CanvasProvider-0Y3auRRO.js";import"./Tooltip-BChPPqz6.js";import"./useTooltip-DDaYfV4J.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BL74-I4Y.js";import"./Popper-DTfQE2mh.js";import"./TertiaryButton-a9_U68ho.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-C7vP30km.js";import"./ColorPicker-CBKqyMLA.js";import"./ColorInput-BagXndnK.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-3pzA4Qd-.js";import"./types-DXdjelYI.js";import"./FormField-BYE5lD9z.js";import"./check-BG7HONvH.js";import"./Expandable-CS2WldYr.js";import"./Avatar-DPtlMwRl.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-B3MQG3mt.js";import"./Popup-B-4w8IgE.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-BtGg5hr7.js";import"./useInitialFocus-BKfmV5gZ.js";import"./useReturnFocus-Xz-_vB17.js";import"./useFocusRedirect-DOtUfDeI.js";import"./Breadcrumbs-DO3VFsT6.js";import"./useOverflowListTarget-D7Z7W38z.js";import"./useListItemSelect-D_3E8f4q.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BIIZhJne.js";import"./OverflowTooltip-xP33ONM-.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-ahHEmhSv.js";import"./Table-C_Pr0zfe.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
