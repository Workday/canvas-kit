import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-2g7o55Lu.js";import{E as a,c as g}from"./union-iCIczOlU.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-B51KMGjv.js";import{c as u}from"./cs-rfTTo7Bg.js";import{p as I,c as x}from"./index-DE-upP0k.js";import"./iframe-CkV2tTZR.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CB7CmGUd.js";import"./Svg-CP9vwvqP.js";import"./px2rem-C0KbprIx.js";import"./components-txAqe3Xu.js";import"./StatusIndicator-SPKXyFiI.js";import"./Text-8v3W_t7V.js";import"./mergeStyles-Cv57vH8h.js";import"./Box-Ber3xeq6.js";import"./index-DM_3aIAw.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-CRSWLfxc.js";import"./grid-B_hxfS-k.js";import"./cornerShape-Dinnbk8k.js";import"./Card-DQX9cl5b.js";import"./ExternalHyperlink-bWuOmnq5.js";import"./Hyperlink-DNvgug16.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-B7xFUuvh.js";import"./BaseButton-rNx6-AYy.js";import"./Button-BYuL_yBu.js";import"./lerna-BvyFb88h.js";import"./CanvasProvider-Dyk6_koI.js";import"./index-pMzza0x6.js";import"./Tooltip-CdEf-_DY.js";import"./useTooltip-C_HOqEa8.js";import"./getTransformFromPlacement-CFlQb2fd.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-jYphKC7B.js";import"./Popper-C6ZR4iXf.js";import"./TertiaryButton-BZz6yk-h.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-CvpwAY8L.js";import"./ColorPicker-CQ3ZyT3x.js";import"./ColorInput-C0VEHooJ.js";import"./check-small-BqSDQIle.js";import"./TextInput-CWt214xj.js";import"./types-DXdjelYI.js";import"./FormField-B1XM9ifG.js";import"./check-Ds6vsrAM.js";import"./Expandable-Bpb-r6ZR.js";import"./Avatar-BgW0J2wG.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-D1kMuRoK.js";import"./Popup-bjprdV6s.js";import"./x-B1faap_l.js";import"./usePopupTarget-bzvdH9Sb.js";import"./useInitialFocus-vPZJUziU.js";import"./useReturnFocus-BXvf5LDo.js";import"./useFocusRedirect-BruntT9u.js";import"./Breadcrumbs-BiCRG6gL.js";import"./useOverflowListTarget-cBHTq9o8.js";import"./useListItemRegister-Y_tBv-cO.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-EokhkDTU.js";import"./OverflowTooltip-BUtHsD4O.js";import"./useListItemSelect-DcPcEq_C.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DL0_xNzt.js";import"./Table-CDnpMcZX.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
