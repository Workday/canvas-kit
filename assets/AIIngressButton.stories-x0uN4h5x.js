import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-Dfv39TOP.js";import{E as a,c as g}from"./union-BM3EF4ON.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-BnuptFcY.js";import{c as u}from"./cs-rfTTo7Bg.js";import{p as I,c as x}from"./index-DE-upP0k.js";import"./iframe-CQG7MMSK.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-D-Ha8OP1.js";import"./Svg-Conx0DeX.js";import"./px2rem-C0KbprIx.js";import"./components-BuJJGK_9.js";import"./StatusIndicator-DyrvwCDO.js";import"./Text-CQZTT_aO.js";import"./mergeStyles-BAtxHMd6.js";import"./Box-CttFlVpW.js";import"./index-QTPr_xlC.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-B4Cny6XG.js";import"./grid-wN7WcD5L.js";import"./cornerShape-CmNq7DsF.js";import"./Card-CXE-VWcG.js";import"./ExternalHyperlink-ChGySSY6.js";import"./Hyperlink-culkgYHl.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CV_i1MJo.js";import"./BaseButton-DUrUUYrK.js";import"./Button-CMi2dy2S.js";import"./lerna-zvNHRvlj.js";import"./CanvasProvider-Ca36mGY5.js";import"./index-D-t2nnqG.js";import"./Tooltip-CKgtpiGx.js";import"./useTooltip-DBAzhTGG.js";import"./getTransformFromPlacement-CkO-Pdvo.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DS7mxX1s.js";import"./Popper-DrjcTyBJ.js";import"./TertiaryButton-DsSDYQWY.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DC3dbjbC.js";import"./ColorPicker-BcxAk_5_.js";import"./ColorInput-CaGrkOfg.js";import"./check-small-BqSDQIle.js";import"./TextInput-Dc0ijM4G.js";import"./types-DXdjelYI.js";import"./FormField-DAjYbeTB.js";import"./check-Ds6vsrAM.js";import"./Expandable-DAYHEmLc.js";import"./Avatar-DxR-ee6n.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-CHQoEr3s.js";import"./Popup-DPu1gYwT.js";import"./x-B1faap_l.js";import"./usePopupTarget-BDdCJGGW.js";import"./useInitialFocus-CeAQhHHD.js";import"./useReturnFocus-D0WCMfJT.js";import"./useFocusRedirect-dzOQhCKP.js";import"./Breadcrumbs-OYR5mrGA.js";import"./useOverflowListTarget-Dtw5BElf.js";import"./useListItemRegister-UWpWqW6l.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BpFDFcym.js";import"./OverflowTooltip-7CgaMkO6.js";import"./useListItemSelect-Bayn7HsX.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CRtlkv93.js";import"./Table-DdHpgAkG.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
