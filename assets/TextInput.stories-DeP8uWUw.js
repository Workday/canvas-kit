import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as R}from"./index-3YbjYt95.js";import{ae as L}from"./index-ZDSBk99o.js";import{E as a,c as k}from"./union-DLCtkVd1.js";import{S as _}from"./Specifications-id1YWunX.js";import{e as s}from"./index-IfJi-UCQ.js";import{F as t,u as G,a as A}from"./FormField-BUFxQ-TR.js";import{T as l}from"./TextInput-D0_TvPek.js";import{I as d}from"./InputGroup-CEadCZqV.js";import{m as P}from"./mail-D1VSn3Ge.js";import{S as V}from"./SystemIcon-92MeLroz.js";import{P as q}from"./PrimaryButton-DUzcOF7D.js";import"./iframe-DJNB-Vr3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./StatusIndicator-DW1RpUtJ.js";import"./components-Cg1FZO0_.js";import"./Text-CNr-2DGz.js";import"./mergeStyles-BV4VEc_Y.js";import"./Box-CwNlJ1ig.js";import"./index-COdRIEp6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./useConstant-CUZppmaV.js";import"./flex-CaNYx-IV.js";import"./grid-DWhi-gWI.js";import"./index-5dfzm_kn.js";import"./Card-BzyZlNCL.js";import"./ExternalHyperlink-F3Ezqcg9.js";import"./Hyperlink-BMBSNX69.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-D_K1Afrv.js";import"./BaseButton-DWX5ERqj.js";import"./Button-DgUbiQZw.js";import"./px2rem-C0KbprIx.js";import"./lerna-gnzzElkd.js";import"./CanvasProvider-BQB8fFIR.js";import"./index-5mrAZJYD.js";import"./Tooltip-BxoQKBOc.js";import"./useTooltip-It9frGRS.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BBMl_xav.js";import"./Popper-CbopsOaM.js";import"./TertiaryButton-CBkDxGlV.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-B17xCNlQ.js";import"./ColorPicker-Bkxnxvxt.js";import"./ColorInput-DPMCVQeB.js";import"./check-small-C7Z-gSGs.js";import"./check-Bvurkvei.js";import"./Expandable-Dymk71e9.js";import"./Avatar-CH00W5X3.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-C-Z-l4zf.js";import"./Popup-BHgY7kD_.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-ddP-JAq8.js";import"./useInitialFocus-DVpTgpWA.js";import"./useReturnFocus-BcWGL8OV.js";import"./useFocusRedirect-BTh85vHi.js";import"./Breadcrumbs-CPGCzSS3.js";import"./useOverflowListTarget-BmFjGYrm.js";import"./useListItemSelect-3vvqn41X.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D9vTtPgP.js";import"./OverflowTooltip-XrtqALdT.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-Dl-NBLHf.js";import"./Table-CJIYknPE.js";import"./types-DXdjelYI.js";import"./x-small-DK7gM0f7.js";import"./Svg-DoDc3G3m.js";const j=()=>{const[r,n]=s.useState(""),o=i=>{n(i.target.value)};return e.jsxs(t,{children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:o,value:r})})]})};j.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const g=()=>{const[r,n]=s.useState(""),o=i=>{n(i.target.value)};return e.jsxs(t,{children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,disabled:!0,onChange:o,value:r})})]})};g.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} disabled onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const I=()=>{const[r,n]=s.useState(""),o=i=>{n(i.target.value)};return e.jsxs(t,{grow:!0,children:[e.jsx(t.Label,{children:"Street Address"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:o,value:r})})]})};I.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField grow>
      <FormField.Label>Street Address</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const v=()=>{const r=G(),{id:n}=A(r);return e.jsxs(t,{model:r,children:[e.jsx(t.Label,{children:"Email"}),e.jsxs(t.Field,{as:d,children:[e.jsx(d.InnerStart,{children:e.jsx(V,{icon:P,size:"small"})}),e.jsx(d.Input,{id:n,autoComplete:"email"}),e.jsx(d.InnerEnd,{children:e.jsx(d.ClearButton,{})})]})]})};v.__RAW__=`import React from 'react';

import {
  FormField,
  useFormFieldInput,
  useFormFieldModel,
} from '@workday/canvas-kit-react/form-field';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {mailIcon} from '@workday/canvas-system-icons-web';

/**
 * Using \`as={InputGroup}\` on \`FormField.Input\` will break the label associations necessary for accessibility.
 * In this example, we've rendered \`FormField.Field\` as \`InputGroup\` and then hoisted the \`id\` of the input from the FormField model.
 * This allows us to set the \`id\` of the \`InputGroup.Input\` correctly for proper label association.
 */

export const Icons = () => {
  const model = useFormFieldModel();
  const {id: formFieldInputId} = useFormFieldInput(model);

  return (
    <FormField model={model}>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field as={InputGroup}>
        <InputGroup.InnerStart>
          <SystemIcon icon={mailIcon} size="small" />
        </InputGroup.InnerStart>
        <InputGroup.Input id={formFieldInputId} autoComplete="email" />
        <InputGroup.InnerEnd>
          <InputGroup.ClearButton />
        </InputGroup.InnerEnd>
      </FormField.Field>
    </FormField>
  );
};
`;const b=()=>{const[r,n]=s.useState(""),o=i=>{n(i.target.value)};return e.jsxs(t,{orientation:"horizontalStart",children:[e.jsx(t.Label,{children:"Email"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:l,onChange:o,value:r}),e.jsx(t.Hint,{children:"Add a valid email"})]})]})};b.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const LabelPosition = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
        <FormField.Hint>Add a valid email</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
`;const y=()=>{const[r,n]=s.useState(""),o=i=>{n(i.target.value)};return e.jsxs(t,{children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:o,placeholder:"user@email.com",value:r})})]})};y.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Placeholder = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={TextInput}
          onChange={handleChange}
          placeholder="user@email.com"
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};
`;const w=()=>{const[r,n]=s.useState(""),o=s.useRef(null),i=E=>{n(E.target.value)},T=()=>{o.current.focus()};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:i,ref:o,value:r})})]}),e.jsx(q,{onClick:T,children:"Focus Text Input"})]})};w.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} onChange={handleChange} ref={ref} value={value} />
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Text Input</PrimaryButton>
    </>
  );
};
`;const C=()=>{const[r,n]=s.useState(""),o=i=>{n(i.target.value)};return e.jsxs(t,{isRequired:!0,children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:o,value:r})})]})};C.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField isRequired={true}>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;function S(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...R(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(L,{of:B}),`
`,e.jsx(n.h1,{id:"canvas-kit-text-input",children:"Canvas Kit Text Input"}),`
`,e.jsx(n.p,{children:"Text Inputs allow users to enter words or characters without styling."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://design.workday.com/components/inputs/text-input",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(n.p,{children:["Text Input should be used in tandem with ",e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` to ensure
proper label association and screen reader support.`]}),`
`,e.jsx(a,{code:j}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"disabled"})," prop of the Text Input to prevent users from interacting with it."]}),`
`,e.jsx(a,{code:g}),`
`,e.jsx(n.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"placeholder"}),` prop of the Text Input to display a sample of its expected format or value
before a value has been provided.`]}),`
`,e.jsx(a,{code:y}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accessibility Note"}),": Always provide a persistent ",e.jsx(n.code,{children:"FormField.Label"}),` and never rely on
placeholder text as the only label for an input. Placeholders can disappear or lack sufficient
contrast. Use placeholders only for short format examples (e.g., "`,e.jsx(n.a,{href:"mailto:name@example.com",children:"name@example.com"}),`"), and place
detailed instructions or guidance in `,e.jsx(n.code,{children:"FormField.Hint"})," instead of the placeholder."]}),`
`]}),`
`,e.jsx(n.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(n.p,{children:["Text Input supports ",e.jsx(n.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will forward
`,e.jsx(n.code,{children:"ref"})," to its underlying ",e.jsx(n.code,{children:'<input type="text">'})," element."]}),`
`,e.jsx(a,{code:w}),`
`,e.jsx(n.h3,{id:"grow",children:"Grow"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"grow"})," prop of the wrapping Form Field to ",e.jsx(n.code,{children:"true"}),` to configure the Text Input to expand to
the width of its container.`]}),`
`,e.jsx(a,{code:I}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"grow"})," prop may also be applied directly to the Text Input if Form Field is not being used."]}),`
`,e.jsx(n.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(n.code,{children:"vertical"}),"."]}),`
`,e.jsx(a,{code:b}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"required"})," prop of the wrapping Form Field to ",e.jsx(n.code,{children:"true"}),` to indicate that the field is required.
Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(a,{code:C}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"InputGroup"})," is available to add icons to the ",e.jsx(n.code,{children:"TextInput"}),". Internally, a container ",e.jsx(n.code,{children:"div"}),` element is
used with relative position styling on the `,e.jsx(n.code,{children:"div"}),` and absolute position styling on the start and end
icons. `,e.jsx(n.code,{children:"InputGroup.InnerStart"})," and ",e.jsx(n.code,{children:"InputGroup.InnerEnd"}),` are used to position elements at the start
and end of the input. "start" and "end" are used instead of "left" and "right" to match
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties",rel:"nofollow",children:"CSS Logical Properties"}),`
and will be semantically correct in left-to-right and right-to-left languages.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"InputGroup.InnerStart"})," and ",e.jsx(n.code,{children:"InputGroup.InnerEnd"}),` subcomponents can handle any child elements, but
are built for icons. The default width is `,e.jsx(n.code,{children:"40px"}),`, which is perfect for icons. If you need to use
something else, be sure to set the `,e.jsx(n.code,{children:"width"})," property of ",e.jsx(n.code,{children:"InputGroup.InnerStart"}),` or
`,e.jsx(n.code,{children:"InputGroup.InnerEnd"})," to match the intended width of the element. Do not use the ",e.jsx(n.code,{children:"cs"}),` prop or any
method to change width. The `,e.jsx(n.code,{children:"width"})," prop is used to correctly position other inner elements."]}),`
`,e.jsx(a,{code:v}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accessibility Note"}),`: In this example, the mail icon is decorative and hidden from screen
readers. If icons are used for conveying meaning in addition to the label text, a text alternative
must be provided for screen readers.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(n.p,{children:["Form Field provides error and caution states for Text Input. Set the ",e.jsx(n.code,{children:"error"}),` prop on Form Field to
`,e.jsx(n.code,{children:'"error"'})," or ",e.jsx(n.code,{children:'"caution"'})," and use ",e.jsx(n.code,{children:"FormField.Hint"}),` to provide error messages. See
`,e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs#error-states",children:"Form Field's Error documentation"}),` for examples and
accessibility guidance.`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TextInput"})," should be used with ",e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` to ensure proper
labeling, error handling, and help text association. See
`,e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField's accessibility documentation"}),` for
comprehensive guidance on form accessibility best practices.`]}),`
`,e.jsx(n.h3,{id:"autocomplete-attribute",children:"Autocomplete Attribute"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add appropriate ",e.jsx(n.code,{children:"autoComplete"})," values to indicate the input's purpose (e.g., ",e.jsx(n.code,{children:'"email"'}),", ",e.jsx(n.code,{children:'"name"'}),`,
`,e.jsx(n.code,{children:'"street-address"'}),", ",e.jsx(n.code,{children:'"tel"'}),`). Read more about
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html",rel:"nofollow",children:"Identify Input Purpose"}),"."]}),`
`,e.jsx(n.li,{children:`Autocomplete enables browser autofill and helps assistive technologies understand the field's
purpose, benefiting users with cognitive disabilities and motor impairments.`}),`
`,e.jsx(n.li,{children:"Autocomplete also helps password managers identify the correct fields."}),`
`]}),`
`,e.jsx(n.h3,{id:"input-type-for-mobile-keyboards",children:"Input Type for Mobile Keyboards"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TextInput"})," defaults to ",e.jsx(n.code,{children:'<input type="text">'}),`, but for better mobile keyboard support, use more
specific `,e.jsx(n.code,{children:"type"})," attributes (like ",e.jsx(n.code,{children:'"email"'}),", ",e.jsx(n.code,{children:'"tel"'}),", ",e.jsx(n.code,{children:'"url"'}),", or ",e.jsx(n.code,{children:'"search"'}),") as needed."]}),`
`,e.jsx(n.h3,{id:"screen-reader-experience",children:"Screen Reader Experience"}),`
`,e.jsxs(n.p,{children:["When properly implemented with ",e.jsx(n.code,{children:"FormField"}),", screen readers will announce:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The label text when the input receives focus."}),`
`,e.jsx(n.li,{children:"Required, disabled, or read-only status."}),`
`,e.jsxs(n.li,{children:["Help text and error messages (via ",e.jsx(n.code,{children:"aria-describedby"}),")."]}),`
`,e.jsx(n.li,{children:'The current value or "blank" if empty.'}),`
`]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(k,{name:"TextInput",fileName:"/react/"}),`
`,e.jsx(k,{name:"InputGroup",fileName:"/react/"}),`
`,e.jsx(n.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(_,{file:"./cypress/component/TextInput.spec.tsx",initialSpecs:{type:"file",name:"TextInput",children:[{type:"describe",name:"TextInput",children:[{type:"describe",name:"given the 'Basic' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be focused"}]},{type:"describe",name:"when text is entered",children:[{type:"it",name:"should reflect the text typed"}]}]},{type:"describe",name:"given the 'Disabled' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]},{type:"describe",name:"given the 'Placeholder' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should render a placeholder text"},{type:"it",name:"should reflect the text typed"}]}]}]},name:"TextInput"})]})}function M(r={}){const{wrapper:n}={...R(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(S,{...r})}):S(r)}const B={title:"Components/Inputs/Text Input",component:l,tags:["autodocs"],parameters:{docs:{page:M}}},c={render:j},p={render:g},m={render:I},u={render:b},h={render:y},x={render:w},F={render:C},f={render:v};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: GrowExample
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: PlaceholderExample
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...x.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...F.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...f.parameters?.docs?.source}}};const xn=["Basic","Disabled","Grow","LabelPosition","Placeholder","RefForwarding","Required","Icons"];export{c as Basic,p as Disabled,m as Grow,f as Icons,u as LabelPosition,h as Placeholder,x as RefForwarding,F as Required,xn as __namedExportsOrder,B as default};
