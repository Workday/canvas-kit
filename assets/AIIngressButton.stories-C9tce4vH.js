import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-CKIVHgBl.js";import{E as a,c as g}from"./union-BGK8rgUq.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-CWexwRGM.js";import{c as u}from"./cs-rfTTo7Bg.js";import{p as I,c as x}from"./index-5dfzm_kn.js";import"./iframe-Diz4iYt9.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B-7phfvA.js";import"./Svg-D3ADUsbH.js";import"./px2rem-C0KbprIx.js";import"./components-TQGor17P.js";import"./StatusIndicator-CnMuDZZ1.js";import"./Text-CjfRv3b_.js";import"./mergeStyles-Oiw5aw0F.js";import"./Box-ndVNvIIr.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-Kr2CKVQw.js";import"./grid-Dow_xxo7.js";import"./Card-7nQmsgck.js";import"./ExternalHyperlink-Cg10-172.js";import"./Hyperlink-BYge7S98.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BOjVH68X.js";import"./BaseButton-BL7nFA1x.js";import"./Button-BA8q93Gy.js";import"./lerna-BQzkLDlj.js";import"./CanvasProvider-Bo6bulY0.js";import"./index-5mrAZJYD.js";import"./Tooltip-tTgFOjnO.js";import"./useTooltip-o9IX8o6j.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CKxDZdmA.js";import"./Popper-uJmtTCtl.js";import"./TertiaryButton-BMNSyiGZ.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-wp2T_OQ8.js";import"./ColorPicker-DBHTUBds.js";import"./ColorInput-BfqHF2t6.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-CbP15KMM.js";import"./types-DXdjelYI.js";import"./FormField-BFfTRNZ_.js";import"./check-Bvurkvei.js";import"./Expandable-MlUI5j6z.js";import"./Avatar-z3-Jg-YK.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-C_3S2hld.js";import"./Popup-B5XfOse7.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-d-sc7vzp.js";import"./useInitialFocus-CEIClNeF.js";import"./useReturnFocus-Bjuj9tfk.js";import"./useFocusRedirect-vdWyGSd2.js";import"./Breadcrumbs-DZe9oM1Q.js";import"./useOverflowListTarget-BsYp8oFk.js";import"./useListItemSelect-ChUTjGFj.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DIzcINvf.js";import"./OverflowTooltip-BiM1Eefj.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-nKWkBWu3.js";import"./Table-CdIXWeyG.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
}`,...s.parameters?.docs?.source}}};const Yr=["Basic","Inverse"];export{e as Basic,s as Inverse,Yr as __namedExportsOrder,f as default};
