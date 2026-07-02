import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as b}from"./index-BRnk6Jss.js";import{S as u,E as d,c as j}from"./union-DfCGpEFz.js";import"./index-IfJi-UCQ.js";import{L as i}from"./LabelText-dU_P-tF4.js";import{c as f}from"./cs-rfTTo7Bg.js";import{g,p as v,c as L}from"./index-5dfzm_kn.js";import{I as o}from"./InformationHighlight-CuTvmUtJ.js";import"./iframe-gI3eSQDE.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cxi23k1b.js";import"./Svg-DS7moGFZ.js";import"./px2rem-C0KbprIx.js";import"./components-UDFgQUGn.js";import"./StatusIndicator-RZaiHZ60.js";import"./Text-D9iXBli-.js";import"./mergeStyles-BLLTUXpb.js";import"./Box-D2ASsm4c.js";import"./index-B6mB83wl.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-d9jeEQhv.js";import"./grid-CaHUkY18.js";import"./Card-B6jDfvcM.js";import"./ExternalHyperlink-BBljqwb4.js";import"./Hyperlink-DbeQmjqN.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-DOwBoZnC.js";import"./BaseButton-ClShVIas.js";import"./Button-DtJ1XWk0.js";import"./lerna-Qtw8JKy9.js";import"./CanvasProvider-BwkooHMX.js";import"./index-5mrAZJYD.js";import"./Tooltip-olZLRGZ7.js";import"./useTooltip-DCKGRPrh.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-DE0UiqOX.js";import"./Popper-BYIOr7u1.js";import"./TertiaryButton-BcURmXxb.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DcAkg225.js";import"./ColorPicker-DKuNOvTg.js";import"./ColorInput-CetBghZ-.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-BK6B-Wxq.js";import"./types-DXdjelYI.js";import"./FormField-DcqhBVZh.js";import"./check-Bvurkvei.js";import"./Expandable-Dc7Z2sHf.js";import"./Avatar-C7usGa_C.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-QvwuEgxo.js";import"./Popup-BLw4miPR.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DeThqX_B.js";import"./useInitialFocus-BFcJI2rN.js";import"./useReturnFocus-D9ZarZyH.js";import"./useFocusRedirect-JYT-Qve9.js";import"./Breadcrumbs-B_8iHPzE.js";import"./useOverflowListTarget-cN2_WrKs.js";import"./useListItemSelect-CaL1I8iy.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu--fWFXVsR.js";import"./OverflowTooltip-DLvQsqRq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-BlHl8shq.js";import"./Table-GdjgjwHm.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";const p=()=>e.jsx(i,{children:"Label"});p.__RAW__=`import React from 'react';

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
`,e.jsx(d,{code:p}),`
`,e.jsx(r.h3,{id:"cursor",children:"Cursor"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"cursor"}),` prop to render a particular cursor when the mouse pointer is hovering over the
label.`]}),`
`,e.jsx(d,{code:c}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"}),` prop to provide a visual cue that the label and its associated element are
disabled.`]}),`
`,e.jsx(d,{code:l}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(j,{name:"LabelText",fileName:"/react/text/"})]})}function k(t={}){const{wrapper:r}={...h(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(x,{...t})}):x(t)}function a(t,r){throw new Error("Expected "+(r?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const T={title:"Components/Text/Label Text (deprecated)",component:i,tags:["autodocs"],parameters:{docs:{page:k}}},s={render:p},n={render:c},m={render:l};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: CursorExample
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...m.parameters?.docs?.source}}};const Ze=["Basic","Cursor","Disabled"];export{s as Basic,n as Cursor,m as Disabled,Ze as __namedExportsOrder,T as default};
