import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as b}from"./index-BzYrJz94.js";import{S as u,E as d,c as j}from"./union-BBWPBX8m.js";import"./index-IfJi-UCQ.js";import{L as i}from"./LabelText-C38kbPj_.js";import{c as f}from"./cs-rfTTo7Bg.js";import{g,p as v,c as L}from"./index-5dfzm_kn.js";import{I as o}from"./InformationHighlight-2ADDlMng.js";import"./iframe-Bh-hnNVo.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BwdIspvd.js";import"./Svg-BUqf886j.js";import"./px2rem-C0KbprIx.js";import"./components-zZF9u2s8.js";import"./StatusIndicator-BuHzn7ly.js";import"./Text-Dp9AQPhJ.js";import"./mergeStyles-CBSbM0IM.js";import"./Box-jRVkubPC.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-4pGh-j7a.js";import"./grid-BJ8bTTH_.js";import"./Card-D79lI0U4.js";import"./ExternalHyperlink-DJ_s4Gdg.js";import"./Hyperlink-D4Jk0uVb.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-D3H6QxrX.js";import"./BaseButton-L3-0dDNr.js";import"./Button-DGz_G3Up.js";import"./lerna-Crnzf6ja.js";import"./CanvasProvider-DsukrmKC.js";import"./index-5mrAZJYD.js";import"./Tooltip-iEI4Au2Q.js";import"./useTooltip-CT5D_DBK.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CjhzXgdu.js";import"./Popper-BjMUBNME.js";import"./TertiaryButton-CiAhqlOE.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-CFTjaEM9.js";import"./ColorPicker-2yVUrFIK.js";import"./ColorInput-BXvF7hFS.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-Cp9IeKzz.js";import"./types-DXdjelYI.js";import"./FormField-BoRh7RQq.js";import"./check-Bvurkvei.js";import"./Expandable-B6R16ssC.js";import"./Avatar-CAYgsEbk.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-CVk5VE9w.js";import"./Popup-CKw24M0a.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DXnQFalx.js";import"./useInitialFocus-C7o715u8.js";import"./useReturnFocus-BL3Uz_yb.js";import"./useFocusRedirect-BuNn_KMr.js";import"./Breadcrumbs-BWwz3bUY.js";import"./useOverflowListTarget-DV4dN1D3.js";import"./useListItemSelect-CfIjHovN.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CoEQDl3T.js";import"./OverflowTooltip-BmQMITUN.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-BgHRYJDj.js";import"./Table-BtQL6Iv5.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";const p=()=>e.jsx(i,{children:"Label"});p.__RAW__=`import React from 'react';

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
