import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as y}from"./index-B9ymSqEQ.js";import{E as a,c as u}from"./union-Bl5K5Dnq.js";import"./index-IfJi-UCQ.js";import{B as d}from"./Box-DVE1QV2w.js";import{T as o}from"./Text-BafGAOu0.js";import{b as f,f as j,e as T,t as l,c as g}from"./index-udXzHylk.js";import"./iframe-Ck61GRTQ.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CkftECn1.js";import"./Svg-C00Tmbol.js";import"./px2rem-C0KbprIx.js";import"./components-BduoFc0l.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-BwxRjdFx.js";import"./mergeStyles-BqEZTk84.js";import"./flex-CkgKa82T.js";import"./grid-snaFRi1S.js";import"./cornerShape-BWVxTIwC.js";import"./Card-CYKNWwWd.js";import"./ExternalHyperlink-DJmm2Dtm.js";import"./Hyperlink-DmvJhv_F.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BEEfNfsC.js";import"./BaseButton-44-j6NiF.js";import"./Button-CqKi3FI5.js";import"./lerna-BNXKUBRi.js";import"./CanvasProvider-DNBEbcF4.js";import"./index-kj8ZfNNN.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./Tooltip-DuMKY5lE.js";import"./useTooltip-Be2IlHUD.js";import"./getTransformFromPlacement-BLUVWzCJ.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useCloseOnEscape-D68v2Xn6.js";import"./Popper-xGJeroz5.js";import"./TertiaryButton-CWVeGnd9.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DVM1BeSA.js";import"./ColorPicker-BU_IyJqu.js";import"./ColorInput-r8MyRxxI.js";import"./check-small-BqSDQIle.js";import"./index-DZtdzgZp.js";import"./TextInput-B08tbWWW.js";import"./types-DXdjelYI.js";import"./FormField-BYGgJeBh.js";import"./check-Ds6vsrAM.js";import"./Expandable-BY2EcRhU.js";import"./Avatar-CrbYWV51.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DrkxiIBB.js";import"./Popup-BkAaHxKC.js";import"./x-B1faap_l.js";import"./usePopupTarget-Cpbf1SBk.js";import"./useInitialFocus-BrnRXErF.js";import"./useReturnFocus-CctAy0WF.js";import"./useFocusRedirect-BLL9rjzj.js";import"./Breadcrumbs-Dlz2I1L8.js";import"./useOverflowListTarget-1Iqk5Xbo.js";import"./useListItemRegister-D7GXdvJ4.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-kcfqlzjO.js";import"./OverflowTooltip-fccb4IcO.js";import"./useListItemSelect-CmjbAwcN.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CFOa3i8g.js";import"./Table-DAJEro48.js";const p=()=>e.jsxs(d,{children:[e.jsx(o,{as:"h4",children:"Text as h4"}),e.jsx(o,{as:"p",cs:{fontSize:T.body.sm,fontWeight:j.normal,fontFamily:f.default},children:"Text styled using cs props"}),e.jsx(o,{as:"p",cs:{...l.subtext.lg},children:"Text styled using type token level"}),e.jsx(d,{cs:{...l.subtext.lg,color:g.fg.muted.default},children:e.jsx(o,{children:"Text with inherited styles"})})]});p.__RAW__=`import {Box} from '@workday/canvas-kit-react/layout';
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
}`,...n.parameters?.docs?.source}}};const Ye=["Basic","TypeLevel","Variant"];export{s as Basic,i as TypeLevel,n as Variant,Ye as __namedExportsOrder,k as default};
