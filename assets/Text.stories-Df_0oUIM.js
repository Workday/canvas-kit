import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as y}from"./index-Dfv39TOP.js";import{E as a,c as u}from"./union-BM3EF4ON.js";import"./index-IfJi-UCQ.js";import{B as d}from"./Box-CttFlVpW.js";import{T as o}from"./Text-CQZTT_aO.js";import{b as f,f as j,e as T,t as l,c as g}from"./index-DE-upP0k.js";import"./iframe-CQG7MMSK.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-D-Ha8OP1.js";import"./Svg-Conx0DeX.js";import"./px2rem-C0KbprIx.js";import"./components-BuJJGK_9.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-DyrvwCDO.js";import"./mergeStyles-BAtxHMd6.js";import"./flex-B4Cny6XG.js";import"./grid-wN7WcD5L.js";import"./cornerShape-CmNq7DsF.js";import"./Card-CXE-VWcG.js";import"./ExternalHyperlink-ChGySSY6.js";import"./Hyperlink-culkgYHl.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CV_i1MJo.js";import"./BaseButton-DUrUUYrK.js";import"./Button-CMi2dy2S.js";import"./lerna-zvNHRvlj.js";import"./CanvasProvider-Ca36mGY5.js";import"./index-D-t2nnqG.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./Tooltip-CKgtpiGx.js";import"./useTooltip-DBAzhTGG.js";import"./getTransformFromPlacement-CkO-Pdvo.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useCloseOnEscape-DS7mxX1s.js";import"./Popper-DrjcTyBJ.js";import"./TertiaryButton-DsSDYQWY.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DC3dbjbC.js";import"./ColorPicker-BcxAk_5_.js";import"./ColorInput-CaGrkOfg.js";import"./check-small-BqSDQIle.js";import"./index-QTPr_xlC.js";import"./TextInput-Dc0ijM4G.js";import"./types-DXdjelYI.js";import"./FormField-DAjYbeTB.js";import"./check-Ds6vsrAM.js";import"./Expandable-DAYHEmLc.js";import"./Avatar-DxR-ee6n.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-CHQoEr3s.js";import"./Popup-DPu1gYwT.js";import"./x-B1faap_l.js";import"./usePopupTarget-BDdCJGGW.js";import"./useInitialFocus-CeAQhHHD.js";import"./useReturnFocus-D0WCMfJT.js";import"./useFocusRedirect-dzOQhCKP.js";import"./Breadcrumbs-OYR5mrGA.js";import"./useOverflowListTarget-Dtw5BElf.js";import"./useListItemRegister-UWpWqW6l.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BpFDFcym.js";import"./OverflowTooltip-7CgaMkO6.js";import"./useListItemSelect-Bayn7HsX.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CRtlkv93.js";import"./Table-DdHpgAkG.js";const p=()=>e.jsxs(d,{children:[e.jsx(o,{as:"h4",children:"Text as h4"}),e.jsx(o,{as:"p",cs:{fontSize:T.body.sm,fontWeight:j.normal,fontFamily:f.default},children:"Text styled using cs props"}),e.jsx(o,{as:"p",cs:{...l.subtext.lg},children:"Text styled using type token level"}),e.jsx(d,{cs:{...l.subtext.lg,color:g.fg.muted.default},children:e.jsx(o,{children:"Text with inherited styles"})})]});p.__RAW__=`import {Box} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const Basic = () => (
  <Box>
    <Text as="h4">Text as h4</Text>
    <Text
      as="p"
      cs={{
        fontSize: system.fontSize.body.sm,
        fontWeight: system.fontWeight.normal,
        fontFamily: system.fontFamily.default,
      }}
    >
      Text styled using cs props
    </Text>
    <Text as="p" cs={{...system.type.subtext.lg}}>
      Text styled using type token level
    </Text>
    <Box cs={{...system.type.subtext.lg, color: system.color.fg.muted.default}}>
      <Text>Text with inherited styles</Text>
    </Box>
  </Box>
);
`;const c=()=>e.jsx(o,{as:"p",typeLevel:"body.small",children:"Small Body level text"});c.__RAW__=`import React from 'react';

import {Text} from '@workday/canvas-kit-react/text';

export const TypeLevel = () => (
  <Text as="p" typeLevel="body.small">
    Small Body level text
  </Text>
);
`;const m=()=>e.jsx(o,{as:"p",variant:"error",children:"Error text"});m.__RAW__=`import React from 'react';

import {Text} from '@workday/canvas-kit-react/text';

export const Variant = () => (
  <Text as="p" variant="error">
    Error text
  </Text>
);
`;function x(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{of:k}),`
`,e.jsx(t.h1,{id:"canvas-kit-text",children:"Canvas Kit Text"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Text"}),` provides an ergonomic API for rendering text. It includes built-in support for Canvas type
tokens.`]}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Text"})," is built on top of ",e.jsx(t.a,{href:"?path=/docs/components-layout-box--docs",children:e.jsx(t.code,{children:"Box"})}),` and supports a multitude of
`,e.jsx(t.a,{href:"?path=/docs/features-style-props--docs",children:"style props"}),` including spacing props such
as `,e.jsx(t.code,{children:"margin"})," and ",e.jsx(t.code,{children:"padding"}),", as well as text styling props such as ",e.jsx(t.code,{children:"fontSize"})," and ",e.jsx(t.code,{children:"fontWeight"}),"."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Text"})," renders a ",e.jsx(t.code,{children:"<span>"})," element by default. You may override the rendered element using the ",e.jsx(t.code,{children:"as"}),`
prop.`]}),`
`,e.jsx(a,{code:p}),`
`,e.jsx(t.h3,{id:"type-level-and-variant",children:"Type Level and Variant"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Text"})," includes built-in support for ",e.jsx(t.a,{href:"?path=/docs/tokens-tokens--docs#type",children:"Canvas type tokens"})," via the ",e.jsx(t.code,{children:"typeLevel"}),` and
`,e.jsx(t.code,{children:"variant"})," props."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"typeLevel"})," hooks into the ",e.jsx(t.a,{href:"?path=/docs/tokens-tokens--docs#type#type-styles",children:"Canvas type hierarchy"}),"."]}),`
`,e.jsx(a,{code:c}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"variant"})," allows you to layer ",e.jsx(t.a,{href:"?path=/docs/tokens-tokens--docs#type#variants",children:"additional styling"}),` to aid users'
understanding of the text being rendered.`]}),`
`,e.jsx(a,{code:m}),`
`,e.jsx(t.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(t.p,{children:["Text supports custom styling via the ",e.jsx(t.code,{children:"cs"}),` prop. For more information, check our
`,e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{name:"Text",fileName:"/react/"})]})}function v(r={}){const{wrapper:t}={...h(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(x,{...r})}):x(r)}const k={title:"Components/Text/Text",component:o,tags:["autodocs"],parameters:{docs:{page:v}}},s={render:p},i={render:c},n={render:m};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: TypeLevelExample
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: VariantExample
}`,...n.parameters?.docs?.source}}};const qe=["Basic","TypeLevel","Variant"];export{s as Basic,i as TypeLevel,n as Variant,qe as __namedExportsOrder,k as default};
