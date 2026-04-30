import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as b}from"./index-3YbjYt95.js";import{ae as R}from"./index-Ued3TV6s.js";import{S as E,E as d,c as L}from"./union-B1cmIDVh.js";import{S as M}from"./Specifications-DYynvWVs.js";import{e as c}from"./index-IfJi-UCQ.js";import{F as t}from"./FormField-DJsuX8Xy.js";import{S as s}from"./Switch-B9-4HB3l.js";import{P as D}from"./PrimaryButton-WPKcJ4ml.js";import{I as a}from"./InformationHighlight-Dqbo40BT.js";import"./iframe-C_doqmiv.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./px2rem-C0KbprIx.js";import"./components-CXVvXGX8.js";import"./cs-DvbI9OYs.js";import"./StatusIndicator-D9ob0TlI.js";import"./Text-Dt7EG7Lz.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./index-CYsyLHR7.js";import"./Card-jS6NBqm3.js";import"./ExternalHyperlink-aQwGH6Hm.js";import"./Hyperlink-nKvi0fIc.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-DBrzjuE9.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-_9ty_XDZ.js";import"./lerna-slKU9GXb.js";import"./CanvasProvider-BRuur9nH.js";import"./Tooltip-B3V4skOm.js";import"./useTooltip-DUG7iIce.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./Popper-CGqk9_xm.js";import"./TertiaryButton-Byu4oUFZ.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DgctLa3l.js";import"./ColorPicker-BZa6q9cC.js";import"./ColorInput-DdzZruxs.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-6zwAIbi7.js";import"./types-DXdjelYI.js";import"./check-BG7HONvH.js";import"./Expandable-QifH75dX.js";import"./Avatar-Cf4g1-9p.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-DjQbCvjl.js";import"./Popup-CSV3rOyv.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-ukAEISND.js";import"./useInitialFocus-D6f9kMrD.js";import"./useReturnFocus-CF7XwcyY.js";import"./useFocusRedirect-CjUSvw7a.js";import"./Breadcrumbs-B3iwir0b.js";import"./useOverflowListTarget-BiBJ1XQw.js";import"./useListItemSelect-DTkyX0KL.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D8z2UdGJ.js";import"./OverflowTooltip-DIr6RY4Y.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-hE1PVdSE.js";import"./Table-DPxnEvid.js";import"./exclamation-circle-Be30iaM7.js";import"./exclamation-triangle-C8Vr-J7R.js";import"./info-B24MaYO9.js";const f=()=>{const[n,r]=c.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:s,checked:n,onChange:o})})]})};f.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField>
      <FormField.Label>Dark Mode</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Switch} checked={checked} onChange={handleChange} />
      </FormField.Field>
    </FormField>
  );
};
`;const w=()=>{const[n,r]=c.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{error:"caution",children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:s,checked:n,onChange:o}),e.jsx(t.Hint,{children:"We were unable to activate Dark Mode."})]})]})};w.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const Caution = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField error="caution">
      <FormField.Label>Dark Mode</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Switch} checked={checked} onChange={handleChange} />
        <FormField.Hint>We were unable to activate Dark Mode.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
`;const j=()=>{const[n,r]=c.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsx(t.Field,{children:e.jsx(t.Input,{disabled:!0,as:s,checked:n,onChange:o})})]})};j.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const Disabled = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField>
      <FormField.Label>Dark Mode</FormField.Label>
      <FormField.Field>
        <FormField.Input disabled as={Switch} checked={checked} onChange={handleChange} />
      </FormField.Field>
    </FormField>
  );
};
`;const x=()=>{const[n,r]=c.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{error:"error",children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:s,checked:n,onChange:o}),e.jsx(t.Hint,{children:"We were unable to activate Dark Mode."})]})]})};x.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const Error = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField error="error">
      <FormField.Label>Dark Mode</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Switch} checked={checked} onChange={handleChange} />
        <FormField.Hint>We were unable to activate Dark Mode.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
`;const g=()=>{const[n,r]=c.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{orientation:"horizontalStart",children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:s,checked:n,onChange:o})})]})};g.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const LabelPosition = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Dark Mode</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Switch} checked={checked} onChange={handleChange} />
      </FormField.Field>
    </FormField>
  );
};
`;const C=()=>{const[n,r]=c.useState(!1),o=c.useRef(null),i=v=>{r(v.target.checked)},S=()=>{o.current.focus()};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsx(t,{children:e.jsx(t.Input,{as:s,checked:n,ref:o,onChange:i})})]}),e.jsx(D,{onClick:S,children:"Focus Switch"})]})};C.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const RefForwarding = () => {
  const [checked, setChecked] = React.useState(false);
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <FormField>
        <FormField.Label>Dark Mode</FormField.Label>
        <FormField>
          <FormField.Input as={Switch} checked={checked} ref={ref} onChange={handleChange} />
        </FormField>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Switch</PrimaryButton>
    </>
  );
};
`;function y(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...b(),...n.components};return a||l(),a.Body||l(),a.Icon||l(),a.Link||l(),e.jsxs(e.Fragment,{children:[e.jsx(R,{of:I}),`
`,e.jsxs(r.h1,{id:"canvas-kit-switch-",children:["Canvas Kit Switch ",e.jsx(E,{type:"deprecated"})]}),`
`,e.jsxs(a,{className:"sb-unstyled",variant:"caution",cs:{p:{marginBlock:0}},children:[e.jsx(a.Icon,{}),e.jsx(a.Body,{children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Switch"}),` in Main has been deprecated and will be removed in a future major version. Please use
`,e.jsx(r.code,{children:"Switch"})," in Preview instead."]})}),e.jsx(a.Link,{href:"https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-switch--docs",children:e.jsx(r.p,{children:"Switch Docs"})})]}),`
`,e.jsx(r.p,{children:"Switch is a selection control that is used to switch between two potential states."}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://design.workday.com/components/inputs/switch",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.p,{children:["Switch should be used in tandem with ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` to meet
accessibility standards.`]}),`
`,e.jsx(d,{code:f}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"})," prop of the Switch to prevent users from interacting with it."]}),`
`,e.jsx(d,{code:j}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:["Switch supports ",e.jsx(r.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will forward
`,e.jsx(r.code,{children:"ref"})," to its underlying ",e.jsx(r.code,{children:'<input type="checkbox">'})," element."]}),`
`,e.jsx(d,{code:C}),`
`,e.jsx(r.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(d,{code:g}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"error"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:'"caution"'})," or ",e.jsx(r.code,{children:'"error"'}),` to set the Switch to the
Caution or Error state, respectively. You will also need to set the `,e.jsx(r.code,{children:"hintId"})," and ",e.jsx(r.code,{children:"hintText"}),` props on
the Form Field to meet accessibility standards.`]}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"error"})," prop may be applied directly to the Switch with a value of ",e.jsx(r.code,{children:"Switch.ErrorType.Caution"}),` or
`,e.jsx(r.code,{children:"Switch.ErrorType.Error"})," if Form Field is not being used."]}),`
`,e.jsx(r.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(d,{code:w}),`
`,e.jsx(r.h4,{id:"error",children:"Error"}),`
`,e.jsx(d,{code:x}),`
`,e.jsx(r.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(r.p,{children:["Switch supports custom styling via the ",e.jsx(r.code,{children:"cs"}),` prop. For more information, check our
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(L,{name:"Switch",fileName:"/react/"}),`
`,e.jsx(r.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(M,{file:"./cypress/component/Switch.spec.tsx",initialSpecs:{type:"file",name:"Switch",children:[{type:"describe",name:"Switch",children:[{type:"describe",name:"given the 'Basic' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Caution' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Error' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Disabled' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]}]}]},name:"Switch"})]})}function _(n={}){const{wrapper:r}={...b(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(y,{...n})}):y(n)}function l(n,r){throw new x}const I={title:"Components/Inputs/Switch (deprecated)",component:s,tags:["autodocs"],parameters:{docs:{page:_}}},h={render:w},m={render:f},p={render:j},u={render:x},F={render:g},k={render:C};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...u.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...F.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...k.parameters?.docs?.source}}};const pr=["Caution","Basic","Disabled","Error","LabelPosition","RefForwarding"];export{m as Basic,h as Caution,p as Disabled,u as Error,F as LabelPosition,k as RefForwarding,pr as __namedExportsOrder,I as default};
