import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as b}from"./index-DR-D6EjG.js";import{S as u,E as p,c as j}from"./union-CT45YaQX.js";import"./index-IfJi-UCQ.js";import{L as i}from"./LabelText-C-SaiX-F.js";import{c as f}from"./cs-DvbI9OYs.js";import{g,p as v,c as L}from"./index-CYsyLHR7.js";import{I as o}from"./InformationHighlight-BMlrGfdm.js";import"./iframe-WXRxFeZ6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./px2rem-C0KbprIx.js";import"./components-DlilqqSw.js";import"./StatusIndicator-BBevkT_x.js";import"./Text-Tayi47N3.js";import"./mergeStyles-DCTLot6K.js";import"./Box-CfIP0C5s.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./Card-Dd5fhXE2.js";import"./ExternalHyperlink-883FduMU.js";import"./Hyperlink-BOmKsWiK.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-BfP_SOlX.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-Cg4j9RPw.js";import"./lerna-CYqneavZ.js";import"./CanvasProvider-0Y3auRRO.js";import"./Tooltip-BChPPqz6.js";import"./useTooltip-DDaYfV4J.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BL74-I4Y.js";import"./Popper-DTfQE2mh.js";import"./TertiaryButton-a9_U68ho.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-C7vP30km.js";import"./ColorPicker-CBKqyMLA.js";import"./ColorInput-BagXndnK.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-3pzA4Qd-.js";import"./types-DXdjelYI.js";import"./FormField-BYE5lD9z.js";import"./check-BG7HONvH.js";import"./Expandable-CS2WldYr.js";import"./Avatar-DPtlMwRl.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-B3MQG3mt.js";import"./Popup-B-4w8IgE.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-BtGg5hr7.js";import"./useInitialFocus-BKfmV5gZ.js";import"./useReturnFocus-Xz-_vB17.js";import"./useFocusRedirect-DOtUfDeI.js";import"./Breadcrumbs-DO3VFsT6.js";import"./useOverflowListTarget-D7Z7W38z.js";import"./useListItemSelect-D_3E8f4q.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BIIZhJne.js";import"./OverflowTooltip-xP33ONM-.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-ahHEmhSv.js";import"./Table-C_Pr0zfe.js";import"./exclamation-circle-Be30iaM7.js";import"./exclamation-triangle-C8Vr-J7R.js";import"./info-B24MaYO9.js";const d=()=>e.jsx(i,{children:"Label"});d.__RAW__=`import React from 'react';

import {LabelText} from '@workday/canvas-kit-react/text';

export const Basic = () => <LabelText>Label</LabelText>;
`;const c=()=>e.jsx(i,{cursor:"pointer",children:"Label with Pointer"});c.__RAW__=`import React from 'react';

import {LabelText} from '@workday/canvas-kit-react/text';

export const Cursor = () => <LabelText cursor="pointer">Label with Pointer</LabelText>;
`;const y=f({backgroundColor:L.brand.accent.primary,padding:v.md,marginTop:g.md}),l=()=>e.jsxs("div",{children:[e.jsx(i,{disabled:!0,children:"Disabled Label"}),e.jsx("div",{className:y,children:e.jsx(i,{disabled:!0,variant:"inverse",children:"Disabled Inverse Label"})})]});l.__RAW__=`import {LabelText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const inverseBackground = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  padding: system.padding.md,
  marginTop: system.gap.md,
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
}`,...m.parameters?.docs?.source}}};const tr=["Basic","Cursor","Disabled"];export{s as Basic,n as Cursor,m as Disabled,tr as __namedExportsOrder,T as default};
