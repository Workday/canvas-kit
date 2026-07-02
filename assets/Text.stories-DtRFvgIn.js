import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as y}from"./index-BH6-T5Fm.js";import{E as a,c as u}from"./union-DR2Z0s37.js";import"./index-IfJi-UCQ.js";import{B as d}from"./Box-CJXmlKLo.js";import{T as o}from"./Text-D8J8K_1c.js";import{b as f,f as j,e as T,t as l,c as g}from"./index-5dfzm_kn.js";import"./iframe-RxBVwp_9.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B1B40VHJ.js";import"./Svg-B1oD29TK.js";import"./px2rem-C0KbprIx.js";import"./components-BqmIVDob.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-Cm6b5U4i.js";import"./mergeStyles-C1JfmJPH.js";import"./flex-CrUgoYEh.js";import"./grid-JWGbC98F.js";import"./Card-BAZTDQ08.js";import"./ExternalHyperlink-COY7uH1o.js";import"./Hyperlink-DM9nt0cU.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-D21U7TXs.js";import"./BaseButton-CWdtGLox.js";import"./Button-CzlJSUFG.js";import"./lerna-DYfSuDO-.js";import"./CanvasProvider-Cat-zekw.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-KF7CDyyD.js";import"./useTooltip-BAcHo7bk.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-CGAh7luF.js";import"./Popper-DvolcCfW.js";import"./TertiaryButton-8Oz2X5p2.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-8ikVfi4T.js";import"./ColorPicker-ymS550hz.js";import"./ColorInput-B4443PlB.js";import"./check-small-C7Z-gSGs.js";import"./index-N3xz2Kqy.js";import"./TextInput-BPKs8XRx.js";import"./types-DXdjelYI.js";import"./FormField-DTwmrFCP.js";import"./check-Bvurkvei.js";import"./Expandable-UqH_awct.js";import"./Avatar-CcIhLJWM.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DTKoYaho.js";import"./Popup-DnNjYX6x.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BAdISRT5.js";import"./useInitialFocus-DOJx7Wga.js";import"./useReturnFocus-Bl9ijLih.js";import"./useFocusRedirect-Dt5zlBE3.js";import"./Breadcrumbs-Cqwjwy56.js";import"./useOverflowListTarget-DvPXkaQq.js";import"./useListItemSelect-DyeyZH9P.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-V8lePgxC.js";import"./OverflowTooltip-CXGK4oOq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-D43wiz_3.js";import"./Table-C3oC02Mn.js";const p=()=>e.jsxs(d,{children:[e.jsx(o,{as:"h4",children:"Text as h4"}),e.jsx(o,{as:"p",cs:{fontSize:T.body.sm,fontWeight:j.normal,fontFamily:f.default},children:"Text styled using cs props"}),e.jsx(o,{as:"p",cs:{...l.subtext.lg},children:"Text styled using type token level"}),e.jsx(d,{cs:{...l.subtext.lg,color:g.fg.muted.default},children:e.jsx(o,{children:"Text with inherited styles"})})]});p.__RAW__=`import {Box} from '@workday/canvas-kit-react/layout';
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
}`,...n.parameters?.docs?.source}}};const Oe=["Basic","TypeLevel","Variant"];export{s as Basic,i as TypeLevel,n as Variant,Oe as __namedExportsOrder,k as default};
