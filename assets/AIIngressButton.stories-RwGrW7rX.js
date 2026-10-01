import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-Ce1Wcj17.js";import{E as a,c as g}from"./union-DYG_1Dhz.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-B9UEpGG9.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-jCBjnmNg.js";import"./iframe-DgE1WNGV.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CTUsj8TD.js";import"./Svg-DvDsbIKv.js";import"./px2rem-C0KbprIx.js";import"./components-dzPj21Gy.js";import"./StatusIndicator-HuVj55QL.js";import"./Text-BZ18Rj60.js";import"./mergeStyles-GqD3_A5P.js";import"./Box-DsxcKhHC.js";import"./index-DZtdzgZp.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BKEnktnP.js";import"./grid-B0yCnV-C.js";import"./cornerShape-JvYjpjdp.js";import"./Card-CIlF8weM.js";import"./ExternalHyperlink-B_3urMIC.js";import"./Hyperlink-BnhZ1iqR.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BshSgfsU.js";import"./BaseButton-B8gT3S4k.js";import"./Button--R7xcJ39.js";import"./lerna-BuNPLYrH.js";import"./CanvasProvider-BziuWf85.js";import"./index-kj8ZfNNN.js";import"./Tooltip-08h0EB5u.js";import"./useTooltip-D7ZZfUuA.js";import"./getTransformFromPlacement-D0JsQZex.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-TVPAhJIC.js";import"./Popper-BG2qD-j2.js";import"./TertiaryButton-DO37jVwm.js";import"./TypeLevelComponents-BsU4u7Uu.js";import"./ColorPicker-Df_cFdIM.js";import"./ColorInput-CJnfkSTl.js";import"./check-small-BqSDQIle.js";import"./TextInput-CeruIY1A.js";import"./types-DXdjelYI.js";import"./FormField-Dek4O1p1.js";import"./check-Ds6vsrAM.js";import"./Expandable-BT4mmXjj.js";import"./Avatar-CuzFtv7p.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DqeJmrP8.js";import"./Popup-4CjerSEi.js";import"./x-B1faap_l.js";import"./usePopupTarget-BDnM4W41.js";import"./useInitialFocus-uIdhUuvF.js";import"./useReturnFocus-DnOTNNs9.js";import"./useFocusRedirect-CeQbwPD5.js";import"./Breadcrumbs-B6Ll38U3.js";import"./useOverflowListTarget-D8NNk0Fq.js";import"./useListItemRegister-C0ytVt37.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DQBNaCd9.js";import"./OverflowTooltip-7JBYHmIQ.js";import"./useListItemSelect-jQIl0zkF.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-49n7B--O.js";import"./Table-BAvZydaq.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
