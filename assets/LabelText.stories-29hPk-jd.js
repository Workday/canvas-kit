import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as b}from"./index-CCLYCUcL.js";import{S as u,E as p,c as j}from"./union-Bg3XhQW7.js";import"./index-IfJi-UCQ.js";import{L as i}from"./LabelText-Cj9wVZG9.js";import{c as f}from"./cs-rfTTo7Bg.js";import{g,p as v,c as L}from"./index-DE-upP0k.js";import{I as o}from"./InformationHighlight-HUOHQvS2.js";import"./iframe-fcNsQbLG.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DDXGuKaN.js";import"./Svg-DOtJrqB4.js";import"./px2rem-C0KbprIx.js";import"./components-v7JqqvMM.js";import"./StatusIndicator-Bn_llku6.js";import"./Text-CGhXLC3-.js";import"./mergeStyles-DWcFsH6q.js";import"./Box-DBboduCF.js";import"./index-Dusw0zrf.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-BeyF4dmz.js";import"./grid-LhDFLHVE.js";import"./cornerShape-BqAy_znZ.js";import"./Card-BJfcBlnp.js";import"./ExternalHyperlink-CSl8fQT7.js";import"./Hyperlink-7twjq9QK.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DetvBox6.js";import"./BaseButton-CwcWTppN.js";import"./Button-DIqyR1HD.js";import"./lerna-L2hz15L8.js";import"./CanvasProvider-BdAnrRrV.js";import"./index-D-t2nnqG.js";import"./Tooltip-CIXsZY9p.js";import"./useTooltip-CG-QuIwi.js";import"./getTransformFromPlacement-CgsYHD9j.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-NA8gEnpq.js";import"./Popper-BCGrei36.js";import"./TertiaryButton-DpmPS0az.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DvEPox1F.js";import"./ColorPicker-Cgb9Hdi5.js";import"./ColorInput-Cg14RZWE.js";import"./check-small-BqSDQIle.js";import"./TextInput-DNMBfMVj.js";import"./types-DXdjelYI.js";import"./FormField-DuShvnld.js";import"./check-Ds6vsrAM.js";import"./Expandable-DhTfPAUC.js";import"./Avatar-BGfd4l2y.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-C18U_xj5.js";import"./Popup-DWq72ULl.js";import"./x-B1faap_l.js";import"./usePopupTarget-BbuiYqPz.js";import"./useInitialFocus-CDRlabme.js";import"./useReturnFocus-BxLABu8v.js";import"./useFocusRedirect-CQwafUeW.js";import"./Breadcrumbs-CWYu4039.js";import"./useOverflowListTarget-BzIX5IBr.js";import"./useListItemRegister-BxAZRU-B.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DNxUV_OH.js";import"./OverflowTooltip-BlFalyvz.js";import"./useListItemSelect-CuPw5UTK.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-vbsWUH5O.js";import"./Table-BK509mjt.js";import"./exclamation-circle-BNuxaliX.js";import"./exclamation-triangle-BLgzpFfC.js";import"./info-DJgWrsaO.js";import"./layers-BWn7B7pb.js";const d=()=>e.jsx(i,{children:"Label"});d.__RAW__=`import React from 'react';

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
}`,...m.parameters?.docs?.source}}};const or=["Basic","Cursor","Disabled"];export{s as Basic,n as Cursor,m as Disabled,or as __namedExportsOrder,T as default};
