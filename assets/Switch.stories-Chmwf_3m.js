import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as S}from"./index-3YbjYt95.js";import{ae as R}from"./index-BSRpa7hw.js";import{E as s,c as L}from"./union-Bq_fV67W.js";import{S as E}from"./Specifications-np9kmsOm.js";import{e as a}from"./index-IfJi-UCQ.js";import{S as c}from"./Switch-C0ZcAuqW.js";import{F as t}from"./FormField-BfuouWYS.js";import{C as _}from"./CanvasProvider-D16Zuzp0.js";import{P as M}from"./PrimaryButton-Df7swaDK.js";import"./iframe-8Z9hyj8f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CQzQ4gRr.js";import"./Svg-CFKxmZXN.js";import"./px2rem-C0KbprIx.js";import"./components-BLZqCckY.js";import"./cs-DvbI9OYs.js";import"./StatusIndicator-U7ucHK-B.js";import"./Text-7hsxTSvc.js";import"./mergeStyles-CkJ8NvhI.js";import"./Box-CWkwzNZI.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-dYq3mHEV.js";import"./useConstant-CUZppmaV.js";import"./flex-BpVYzPsg.js";import"./grid-COFwODL4.js";import"./index-CYsyLHR7.js";import"./Card-CYT1E1UX.js";import"./ExternalHyperlink-BSF-vMXy.js";import"./Hyperlink-p5yKhX3z.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-Bx4f9n21.js";import"./BaseButton-CGvKmIsu.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-C6qfAYgQ.js";import"./lerna-BUmYmoMg.js";import"./Tooltip-BudaSkJa.js";import"./useTooltip-C8VhxzUk.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CMzgaKMd.js";import"./Popper-C7XE30xe.js";import"./TertiaryButton-OzUplWoq.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-A6AqS-F4.js";import"./ColorPicker-Cj3xwnjd.js";import"./ColorInput-BG1qZf2V.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-m8J5Siyi.js";import"./types-DXdjelYI.js";import"./check-BG7HONvH.js";import"./Expandable-D9HGP5Kq.js";import"./Avatar-Czgyc0aL.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-E1OLV4AN.js";import"./Popup-og1nacMu.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-Dr3aQv5b.js";import"./useInitialFocus-Div5K5su.js";import"./useReturnFocus-aYhb8KiC.js";import"./useFocusRedirect-C0Fm-5_Z.js";import"./Breadcrumbs-DopxVY5N.js";import"./useOverflowListTarget-B6jukdWw.js";import"./useListItemSelect-Byv0QwGY.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CJ_9ofNm.js";import"./OverflowTooltip-fVEU-mtQ.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-BkMcjleh.js";import"./Table-BLIPrW4Z.js";import"./x-small-BxvQm8EX.js";const k=()=>{const[n,r]=a.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{isRequired:!0,children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:c,checked:n,onChange:o})})]})};k.__RAW__=`import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField isRequired>
      <FormField.Label>Dark Mode</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Switch} checked={checked} onChange={handleChange} />
      </FormField.Field>
    </FormField>
  );
};
`;const x=()=>{const[n,r]=a.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{error:"caution",children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:c,checked:n,onChange:o}),e.jsx(t.Hint,{children:"We were unable to activate Dark Mode."})]})]})};x.__RAW__=`import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {FormField} from '@workday/canvas-kit-react/form-field';

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
`;const f=()=>{const[n,r]=a.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsx(t.Field,{children:e.jsx(t.Input,{disabled:!0,as:c,checked:n,onChange:o})})]})};f.__RAW__=`import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {FormField} from '@workday/canvas-kit-react/form-field';

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
`;const w=()=>{const[n,r]=a.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{error:"error",children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:c,checked:n,onChange:o}),e.jsx(t.Hint,{children:"We were unable to activate Dark Mode."})]})]})};w.__RAW__=`import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {FormField} from '@workday/canvas-kit-react/form-field';

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
`;const g=()=>{const[n,r]=a.useState(!1),o=i=>{r(i.target.checked)};return e.jsxs(t,{orientation:"horizontalStart",children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:c,checked:n,onChange:o})})]})};g.__RAW__=`import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {FormField} from '@workday/canvas-kit-react/form-field';

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
`;const C=()=>{const[n,r]=a.useState(!1),o=i=>{r(i.target.checked)};return e.jsx(_,{dir:"rtl",children:e.jsxs(t,{isRequired:!0,children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:c,checked:n,onChange:o})})]})})};C.__RAW__=`import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const RTL = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <CanvasProvider dir="rtl">
      <FormField isRequired>
        <FormField.Label>Dark Mode</FormField.Label>
        <FormField.Field>
          <FormField.Input as={Switch} checked={checked} onChange={handleChange} />
        </FormField.Field>
      </FormField>
    </CanvasProvider>
  );
};
`;const j=()=>{const[n,r]=a.useState(!1),o=a.useRef(null),i=y=>{r(y.target.checked)},b=()=>{o.current.focus()};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(t.Label,{children:"Dark Mode"}),e.jsx(t,{children:e.jsx(t.Input,{as:c,checked:n,ref:o,onChange:i})})]}),e.jsx(M,{onClick:b,children:"Focus Switch"})]})};j.__RAW__=`import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';

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
`;function v(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...S(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(R,{of:I}),`
`,e.jsx(r.h1,{id:"canvas-kit-switch",children:"Canvas Kit Switch"}),`
`,e.jsx(r.p,{children:"Switch is a selection control that is used to switch between two potential states."}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-preview-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.p,{children:["Switch should be used in tandem with ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` to meet
accessibility standards.`]}),`
`,e.jsx(s,{code:k}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"})," prop of the Switch to prevent users from interacting with it."]}),`
`,e.jsx(s,{code:f}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:["Switch supports ",e.jsx(r.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will forward
`,e.jsx(r.code,{children:"ref"})," to its underlying ",e.jsx(r.code,{children:'<input type="checkbox">'})," element."]}),`
`,e.jsx(s,{code:j}),`
`,e.jsx(r.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(s,{code:g}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"error"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:'"caution"'})," or ",e.jsx(r.code,{children:'"error"'}),` to set the Switch to the
Caution or Error state, respectively. You will also need to use `,e.jsx(r.code,{children:"<FormField.Hint/>"}),` for hint or
error text to meet accessibility standards.`]}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"error"})," prop may be applied directly to the Switch with a value of ",e.jsx(r.code,{children:"Switch.ErrorType.Caution"}),` or
`,e.jsx(r.code,{children:"Switch.ErrorType.Error"})," if Form Field is not being used."]}),`
`,e.jsx(r.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(s,{code:x}),`
`,e.jsx(r.h4,{id:"error",children:"Error"}),`
`,e.jsx(s,{code:w}),`
`,e.jsx(r.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,e.jsx(r.p,{children:"Switch supports right-to-left languages when specified in the CanvasProvider theme."}),`
`,e.jsx(s,{code:C}),`
`,e.jsx(r.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(r.p,{children:["Switch supports custom styling via the ",e.jsx(r.code,{children:"cs"}),` prop. For more information, check our
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(L,{name:"Switch",fileName:"/react/"}),`
`,e.jsx(r.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(E,{file:"./cypress/component/Switch.spec.tsx",initialSpecs:{type:"file",name:"Switch",children:[{type:"describe",name:"Switch",children:[{type:"describe",name:"given the 'Basic' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Caution' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Error' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Disabled' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]}]}]},name:"Switch"})]})}function D(n={}){const{wrapper:r}={...S(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(v,{...n})}):v(n)}const I={title:"Preview/Inputs/Switch (new)",component:c,tags:["autodocs"],parameters:{docs:{page:D}}},d={render:x},l={render:k},h={render:f},m={render:w},p={render:g},F={render:j},u={render:C};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...p.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...F.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...u.parameters?.docs?.source}}};const lr=["Caution","Basic","Disabled","Error","LabelPosition","RefForwarding","RTL"];export{l as Basic,d as Caution,h as Disabled,m as Error,p as LabelPosition,u as RTL,F as RefForwarding,lr as __namedExportsOrder,I as default};
