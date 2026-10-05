import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-BG52S5PJ.js";import{E as a,c as g}from"./union-uI39hOhv.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-CyR4YuKz.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-jCBjnmNg.js";import"./iframe-C6ZvFJfY.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-wLEz3Jyh.js";import"./Svg-i8rT_wzI.js";import"./px2rem-C0KbprIx.js";import"./components-BceceJol.js";import"./StatusIndicator-sQ7GY8u1.js";import"./Text-DS2Wj_DF.js";import"./mergeStyles-ClqtAfq-.js";import"./Box-BtLgvfpX.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-sw8oCqO7.js";import"./grid-CJb0DYG8.js";import"./cornerShape-B1vmiV_8.js";import"./Card-riOLYX3E.js";import"./ExternalHyperlink-BITqDsVX.js";import"./Hyperlink-Dh6vJs4q.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CZc3i-WD.js";import"./BaseButton-aCJIRgx8.js";import"./Button-Belj1Id1.js";import"./lerna-CTdXROMk.js";import"./CanvasProvider-Cdk5n_7L.js";import"./index-kj8ZfNNN.js";import"./Tooltip-DuLNr5jF.js";import"./useTooltip-GTBnUEiW.js";import"./getTransformFromPlacement-C9zTUpzV.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-SUluXMGy.js";import"./Popper-F_u6Qeli.js";import"./TertiaryButton-B2vZi3ts.js";import"./TypeLevelComponents-e_Hg0vs_.js";import"./ColorPicker-Bx4JRY5o.js";import"./ColorInput-n9HV2dpF.js";import"./check-small-BqSDQIle.js";import"./TextInput-BrZrpxTX.js";import"./types-DXdjelYI.js";import"./FormField-C6aHzOBP.js";import"./check-Ds6vsrAM.js";import"./Expandable-BrvVEvo4.js";import"./Avatar-B8ipDMwj.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-hdxxCnGp.js";import"./Popup-DaaVoPLA.js";import"./x-B1faap_l.js";import"./usePopupTarget-B9gz_IBO.js";import"./useInitialFocus-rAw2Nckl.js";import"./useReturnFocus-CRTETg8Q.js";import"./useFocusRedirect-B7tiUZUF.js";import"./Breadcrumbs-ec6PKaga.js";import"./useOverflowListTarget-Bt-HkcUv.js";import"./useListItemRegister-DRvisH15.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CaAP8Y9P.js";import"./OverflowTooltip-CWCz85mw.js";import"./useListItemSelect-9uKgdWUA.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DYwq6B5C.js";import"./Table-DBFi-gF6.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
