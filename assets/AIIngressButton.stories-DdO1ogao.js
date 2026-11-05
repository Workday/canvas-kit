import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as l}from"./index-BTewJVIB.js";import{E as a,c as g}from"./union-CWNVRhjM.js";import{r as c}from"./index-IfJi-UCQ.js";import{A as d}from"./AIIngressButton-BYu_dSvK.js";import{c as u}from"./cs-CmRirKzJ.js";import{p as I,c as x}from"./index-C_4iH04t.js";import"./iframe-BpI0TQGq.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-D383ry7W.js";import"./Svg-YYj-hmuy.js";import"./px2rem-C0KbprIx.js";import"./components-BZZbendq.js";import"./StatusIndicator-B8jyF6Cm.js";import"./Text-B-az9lgp.js";import"./mergeStyles-BrOzO49v.js";import"./Box-DNrttudE.js";import"./index-BR_jJr7N.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-DLEP31EQ.js";import"./grid-DWoMPrqj.js";import"./cornerShape-CpTbNqpe.js";import"./Card-CE7R42ky.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-UWSN-oYk.js";import"./Hyperlink-DmBLDRD6.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DTfVcNph.js";import"./BaseButton-qatokQZh.js";import"./Button-Bb-9X2_s.js";import"./lerna-0SPvVc4r.js";import"./CanvasProvider-wRa9Af4a.js";import"./index-CFEs8r9D.js";import"./Tooltip-BcHkFI8E.js";import"./useTooltip-ggS7GWRg.js";import"./getTransformFromPlacement-C8z0KlTw.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BTQA5nou.js";import"./Popper-BGpHDNvg.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-CLwGezHZ.js";import"./TypeLevelComponents-CJ_xnz7G.js";import"./ColorPicker-4Ttc9WWI.js";import"./ColorInput-B49zKvT2.js";import"./check-small-BqSDQIle.js";import"./TextInput-tfKmqQGS.js";import"./types-DXdjelYI.js";import"./FormField-PbmSf9Fx.js";import"./check-Ds6vsrAM.js";import"./Expandable-DoJHc5m4.js";import"./Avatar-BA9kbUop.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Ct1V3OJb.js";import"./Popup-CcIfSHXM.js";import"./x-B1faap_l.js";import"./usePopupTarget-D7LypT8H.js";import"./useInitialFocus-C2C4yxbj.js";import"./useReturnFocus-DN6tr14e.js";import"./useFocusRedirect-Drl4v-g8.js";import"./Breadcrumbs-CwcN52Gf.js";import"./useOverflowListItemMeasure-D98g6Wvx.js";import"./useListItemRegister-C3SogmsT.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BmGbD5Rc.js";import"./OverflowTooltip-CDNsrqTs.js";import"./useListItemRovingFocus-B-Rv_2Gj.js";import"./useListItemSelect-BhYGOYL5.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CGfUTzFN.js";import"./Flex-CSKuB8Eg.js";import"./Table-Ba7Cr2JQ.js";import"./index-DQ1Wqo_y.js";const n=()=>{const[o,t]=c.useState(!1);return r.jsx("div",{children:r.jsx(d,{"aria-label":o?"Hide AI Ingress":"Show AI Ingress",onClick:()=>t(!o),toggled:o})})};n.__RAW__=`import {useState} from 'react';

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
