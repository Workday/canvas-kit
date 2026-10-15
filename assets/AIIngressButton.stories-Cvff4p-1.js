import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-Dtg6sxOr.js";import{E as a,c as g}from"./union-Bu5y51Jw.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-BN6ujqH6.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index--KWQvxqz.js";import"./iframe-BzH13H1g.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BX_--XLu.js";import"./Svg-B-_8_IoS.js";import"./px2rem-C0KbprIx.js";import"./components-CwPiNTv7.js";import"./StatusIndicator-BySetVzd.js";import"./Text-CugBmzts.js";import"./mergeStyles-DQZ8xltm.js";import"./Box-C6YWxsyC.js";import"./index-JH7P-Oob.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-uWNpiXvQ.js";import"./grid-Z1baOhTC.js";import"./cornerShape-BEKlmC6c.js";import"./Card-B2DoyM2M.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-Bdp9qCly.js";import"./Hyperlink-DgJFJPY5.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CFAJ63K0.js";import"./BaseButton-C2ONQDdO.js";import"./Button-B-0xbtvO.js";import"./lerna-GZstQbIg.js";import"./CanvasProvider-Djg5GzKY.js";import"./index-kj8ZfNNN.js";import"./Tooltip-CQPKhAAY.js";import"./useTooltip-B_3p7ft8.js";import"./getTransformFromPlacement-DEiEIaBA.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DWBt8FsA.js";import"./Popper-4YHzsBrp.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BikcaN9F.js";import"./TypeLevelComponents-CSa7FUvh.js";import"./ColorPicker-BdEUtvxE.js";import"./ColorInput-DKTanmyb.js";import"./check-small-BqSDQIle.js";import"./TextInput-sO79edZw.js";import"./types-DXdjelYI.js";import"./FormField-BSejoj2I.js";import"./check-Ds6vsrAM.js";import"./Expandable-D_r7YpVh.js";import"./Avatar-BRtwnXeF.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-B6sm9GAG.js";import"./Popup-0QW6T8tx.js";import"./x-B1faap_l.js";import"./usePopupTarget-KuiEmhEU.js";import"./useInitialFocus-DsdvJ4qs.js";import"./useReturnFocus-DY0PlNcI.js";import"./useFocusRedirect-CQqurwgn.js";import"./Breadcrumbs-B1-oFzbX.js";import"./useOverflowListItemMeasure-GsXFYpda.js";import"./useListItemRegister-54CK_IPo.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BhzHIyri.js";import"./OverflowTooltip-TaXlUV6y.js";import"./useListItemRovingFocus-DPhFhJfQ.js";import"./useListItemSelect-C8xhwn2K.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-ouYGJ4Om.js";import"./Flex-Do_QVoLp.js";import"./Table-DEKO1qFY.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
