import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as b}from"./index-D3TQGW5C.js";import{S as u,E as p,c as j}from"./union-1renWLLW.js";import"./index-IfJi-UCQ.js";import{L as i}from"./LabelText-S5p0zXCK.js";import{c as f}from"./cs-CmRirKzJ.js";import{g,p as v,c as L}from"./index-C_4iH04t.js";import{I as o}from"./InformationHighlight-m9TzLuAM.js";import"./iframe-BoPhJQVk.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DxdGt8lR.js";import"./Svg-P4I-l01h.js";import"./px2rem-C0KbprIx.js";import"./components-B2Q2g_kO.js";import"./StatusIndicator-Dm96L8Go.js";import"./Text-BLlhCS-c.js";import"./mergeStyles-Cj6q-U5f.js";import"./Box-Dk0W8wtP.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-3jl45ffO.js";import"./grid-Ch81PKOz.js";import"./cornerShape-CbzTqdgH.js";import"./Card-D23lSHWe.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-5r9TtsQy.js";import"./Hyperlink-D-wi_N3A.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-ENoIoFrq.js";import"./BaseButton-B2qpNNxq.js";import"./Button-oKB08GyB.js";import"./lerna-BK2--YZE.js";import"./CanvasProvider-CnwanEes.js";import"./index-CFEs8r9D.js";import"./Tooltip-MCJZgr7x.js";import"./useTooltip-jA6eKExB.js";import"./getTransformFromPlacement-mFHZLDM3.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-BoOh5Dla.js";import"./Popper-CkxhCgtJ.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-DQiMlgW6.js";import"./TypeLevelComponents-B7PFv6S9.js";import"./ColorPicker-BgcUXhZi.js";import"./ColorInput-Bs4NdKtj.js";import"./check-small-BqSDQIle.js";import"./TextInput-DWXGfW5o.js";import"./types-DXdjelYI.js";import"./FormField-BKQ_YlZQ.js";import"./check-Ds6vsrAM.js";import"./Expandable-B_fHYgtb.js";import"./Avatar-BlKvUt6W.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Cx8FKbXT.js";import"./Popup-B1ZpsWi8.js";import"./x-B1faap_l.js";import"./usePopupTarget-BmFbxqTK.js";import"./useInitialFocus-BfTzQk0Y.js";import"./useReturnFocus-DJjyGDVU.js";import"./useFocusRedirect-DZsVo1k6.js";import"./Breadcrumbs-C-yJBYZy.js";import"./useOverflowListItemMeasure-BrthcQ5p.js";import"./useListItemRegister-CWvR7y0-.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D31M8F2f.js";import"./OverflowTooltip-BDjV_6T0.js";import"./useListItemRovingFocus-DV_jor0K.js";import"./useListItemSelect-DQ743t_N.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-BLLBMKkA.js";import"./Flex-DqxeIv6k.js";import"./Table-DzVM0tKr.js";import"./exclamation-circle-BNuxaliX.js";import"./exclamation-triangle-BLgzpFfC.js";import"./info-DJgWrsaO.js";import"./layers-BWn7B7pb.js";const d=()=>e.jsx(i,{children:"Label"});d.__RAW__=`import React from 'react';

import {LabelText} from '@workday/canvas-kit-react/text';

export const Basic = () => <LabelText>Label</LabelText>;
`;const c=()=>e.jsx(i,{cursor:"pointer",children:"Label with Pointer"});c.__RAW__=`import React from 'react';

import {LabelText} from '@workday/canvas-kit-react/text';

export const Cursor = () => <LabelText cursor="pointer">Label with Pointer</LabelText>;
`;const y=f({backgroundColor:L.brand.accent.primary,padding:v.md,marginBlockStart:g.md}),l=()=>e.jsxs("div",{children:[e.jsx(i,{disabled:!0,children:"Disabled Label"}),e.jsx("div",{className:y,children:e.jsx(i,{disabled:!0,variant:"inverse",children:"Disabled Inverse Label"})})]});l.__RAW__=`import {LabelText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const inverseBackground = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  padding: system.padding.md,
  marginBlockStart: system.gap.md,
});

export const Disabled = () => {
  return (
    <div>
      <LabelText disabled>Disabled Label</LabelText>
      <div className={inverseBackground}>
        <LabelText disabled variant="inverse">
          Disabled Inverse Label
        </LabelText>
      </div>
    </div>
  );
};
`;function x(t){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o||a("InformationHighlight",!1),o.Body||a("InformationHighlight.Body",!0),o.Icon||a("InformationHighlight.Icon",!0),o.Link||a("InformationHighlight.Link",!0),e.jsxs(e.Fragment,{children:[e.jsx(b,{of:T}),`
`,e.jsxs(r.h1,{id:"canvas-kit-label-text-",children:["Canvas Kit Label Text ",e.jsx(u,{type:"deprecated"})]}),`
`,e.jsxs(o,{className:"sb-unstyled",variant:"caution",cs:{p:{marginBlock:0}},children:[e.jsx(o.Icon,{}),e.jsx(o.Body,{children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"LabelText"}),` has been deprecated and will be removed in a future major version. Please use
`,e.jsx(r.code,{children:"FormField.Label"})," instead."]})}),e.jsx(o.Link,{href:"https://workday.github.io/canvas-kit/?path=/story/components-inputs-form-field--docs",children:e.jsx(r.p,{children:"Form Field Docs"})})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"LabelText"})," provides a simple way to render a label with built-in support for Canvas type tokens."]}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"LabelText"})," renders a ",e.jsx(r.code,{children:"<label>"})," element. This component is deprecated in favor of ",e.jsx(r.code,{children:"FormField.Label"}),`
since it should be used in tandem with form elements.`]}),`
`,e.jsx(p,{code:d}),`
`,e.jsx(r.h3,{id:"cursor",children:"Cursor"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"cursor"}),` prop to render a particular cursor when the mouse pointer is hovering over the
label.`]}),`
`,e.jsx(p,{code:c}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"}),` prop to provide a visual cue that the label and its associated element are
disabled.`]}),`
`,e.jsx(p,{code:l}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(j,{name:"LabelText",fileName:"/react/text/"})]})}function k(t={}){const{wrapper:r}={...h(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(x,{...t})}):x(t)}function a(t,r){throw new Error("Expected "+(r?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const T={title:"Components/Text/Label Text (deprecated)",component:i,tags:["autodocs"],parameters:{docs:{page:k}}},s={render:d},n={render:c},m={render:l};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: CursorExample
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...m.parameters?.docs?.source}}};const ar=["Basic","Cursor","Disabled"];export{s as Basic,n as Cursor,m as Disabled,ar as __namedExportsOrder,T as default};
