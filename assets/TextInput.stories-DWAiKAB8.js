import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as T}from"./index-3YbjYt95.js";import{ae as E}from"./index-DIQMCiGF.js";import{E as s,c as C}from"./union-Cec5qZNs.js";import{S as L}from"./Specifications-M_m8JhHp.js";import{e as d}from"./index-IfJi-UCQ.js";import{F as r,u as _,a as A}from"./FormField-BvDYKEIK.js";import{T as l}from"./TextInput-CU5hZATb.js";import{I as a}from"./InputGroup-C93VwyQM.js";import{m as D}from"./mail-BtFtNYGc.js";import{S as P}from"./SystemIcon-BLgBEqk_.js";import{P as q}from"./PrimaryButton-B_2JQ_gB.js";import"./iframe-CMFxQtog.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./StatusIndicator-BJDjHtBX.js";import"./components-BMCKvV6D.js";import"./Text-CEC2A_mA.js";import"./mergeStyles-C74BFx3R.js";import"./Box-BvZYftND.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./useConstant-B_SD0x5s.js";import"./flex-Dh-2nxfI.js";import"./grid-BTRczyN_.js";import"./cornerShape-eLjhIHRX.js";import"./index-DE-upP0k.js";import"./Card-B9eZGSHh.js";import"./ExternalHyperlink-DQ4sJqPN.js";import"./Hyperlink-Ds51UX2b.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DgdzuJR6.js";import"./BaseButton-BeCPCXur.js";import"./Button-COJQCftZ.js";import"./px2rem-C0KbprIx.js";import"./lerna-AHTeRD0S.js";import"./CanvasProvider-CPCp_Ehm.js";import"./index-kj8ZfNNN.js";import"./Tooltip-B420ykOm.js";import"./useTooltip-Chl-REmY.js";import"./getTransformFromPlacement-UfTaJmmz.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-CJ6fr6xg.js";import"./Popper-CmWYFnEn.js";import"./TertiaryButton-B4HeqPGM.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-CXDvcd40.js";import"./ColorPicker-9KmrppHl.js";import"./ColorInput-DcwH74F9.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-Bj0gYpmS.js";import"./Avatar-zjOTsow4.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-F8LdpWbU.js";import"./Popup-bHQMqJYH.js";import"./x-B1faap_l.js";import"./usePopupTarget-BdeWD7Tb.js";import"./useInitialFocus-C3mdE506.js";import"./useReturnFocus-Pt3SXujB.js";import"./useFocusRedirect-S8kpqCKm.js";import"./Breadcrumbs-BtItqZWr.js";import"./useOverflowListTarget-DmzamKwX.js";import"./useListItemRegister-Be67Xqtb.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DqXfse-G.js";import"./OverflowTooltip-D74rm3_f.js";import"./useListItemSelect-BqFexkDg.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CYgv2SGi.js";import"./Table-DUhjK8Ob.js";import"./types-DXdjelYI.js";import"./x-small-Cfgu7dLY.js";import"./Svg-CcyJcMxT.js";const f=()=>{const[t,n]=d.useState(""),o=i=>{n(i.target.value)};return e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:l,onChange:o,value:t})})]})};f.__RAW__=`import React from 'react';

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
`;const g=()=>{const[t,n]=d.useState(""),o=i=>{n(i.target.value)};return e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:l,disabled:!0,onChange:o,value:t})})]})};g.__RAW__=`import React from 'react';

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
`;const I=()=>{const[t,n]=d.useState(""),o=i=>{n(i.target.value)};return e.jsxs(r,{grow:!0,children:[e.jsx(r.Label,{children:"Street Address"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:l,onChange:o,value:t})})]})};I.__RAW__=`import React from 'react';

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
`;const b=()=>{const t=_(),{id:n}=A(t);return e.jsxs(r,{model:t,children:[e.jsx(r.Label,{children:"Email"}),e.jsxs(r.Field,{as:a,children:[e.jsx(a.InnerStart,{children:e.jsx(P,{icon:D})}),e.jsx(a.Input,{id:n,autoComplete:"email"}),e.jsx(a.InnerEnd,{children:e.jsx(a.ClearButton,{})})]})]})};b.__RAW__=`import React from 'react';

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
          <SystemIcon icon={mailIcon} />
        </InputGroup.InnerStart>
        <InputGroup.Input id={formFieldInputId} autoComplete="email" />
        <InputGroup.InnerEnd>
          <InputGroup.ClearButton />
        </InputGroup.InnerEnd>
      </FormField.Field>
    </FormField>
  );
};
`;const v=()=>{const[t,n]=d.useState(""),o=i=>{n(i.target.value)};return e.jsxs(r,{orientation:"horizontalStart",children:[e.jsx(r.Label,{children:"Email"}),e.jsxs(r.Field,{children:[e.jsx(r.Input,{as:l,onChange:o,value:t}),e.jsx(r.Hint,{children:"Add a valid email"})]})]})};v.__RAW__=`import React from 'react';

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
`;const y=()=>{const[t,n]=d.useState(""),o=i=>{n(i.target.value)};return e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:l,onChange:o,placeholder:"user@email.com",value:t})})]})};y.__RAW__=`import React from 'react';

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
`;const w=()=>{const[t,n]=d.useState(""),o=d.useRef(null),i=G=>{n(G.target.value)},R=()=>{o.current.focus()};return e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:l,onChange:i,ref:o,value:t})})]}),e.jsx(q,{onClick:R,children:"Focus Text Input"})]})};w.__RAW__=`import React from 'react';

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
`;const k=()=>{const[t,n]=d.useState(""),o=i=>{n(i.target.value)};return e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:l,onChange:o,value:t})})]})};k.__RAW__=`import React from 'react';

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
`;function S(t){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...T(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(E,{of:M}),`
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
`,e.jsx(s,{code:f}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"disabled"})," prop of the Text Input to prevent users from interacting with it."]}),`
`,e.jsx(s,{code:g}),`
`,e.jsx(n.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"placeholder"}),` prop of the Text Input to display a sample of its expected format or value
before a value has been provided.`]}),`
`,e.jsx(s,{code:y}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accessibility Note"}),": Always provide a persistent ",e.jsx(n.code,{children:"FormField.Label"}),` and never rely on
placeholder text as the only label for an input. Placeholders can disappear or lack sufficient
contrast. Use placeholders only for short format examples (e.g., "`,e.jsx(n.a,{href:"mailto:name@example.com",children:"name@example.com"}),`"), and place
detailed instructions or guidance in `,e.jsx(n.code,{children:"FormField.Hint"})," instead of the placeholder."]}),`
`]}),`
`,e.jsx(n.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(n.p,{children:["Text Input supports ",e.jsx(n.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will forward
`,e.jsx(n.code,{children:"ref"})," to its underlying ",e.jsx(n.code,{children:'<input type="text">'})," element."]}),`
`,e.jsx(s,{code:w}),`
`,e.jsx(n.h3,{id:"grow",children:"Grow"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"grow"})," prop of the wrapping Form Field to ",e.jsx(n.code,{children:"true"}),` to configure the Text Input to expand to
the width of its container.`]}),`
`,e.jsx(s,{code:I}),`
`,e.jsx(n.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(n.code,{children:"vertical"}),"."]}),`
`,e.jsx(s,{code:v}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"isRequired"})," prop of the wrapping Form Field to ",e.jsx(n.code,{children:"true"}),` to indicate that the field is
required. Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(s,{code:k}),`
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
`,e.jsxs(n.p,{children:["Do ",e.jsx(n.strong,{children:"not"})," use ",e.jsx(n.code,{children:"FormField.Input as={InputGroup}"}),` — that breaks label association. Render
`,e.jsx(n.code,{children:"FormField.Field as={InputGroup}"}),", hoist the input ",e.jsx(n.code,{children:"id"}),` from the Form Field model, and set it on
`,e.jsx(n.code,{children:"InputGroup.Input"})," (see the Icons example)."]}),`
`,e.jsx(s,{code:b}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accessibility Note"}),`: Canvas Kit icons are already hidden from assistive technology — their SVG
markup sets `,e.jsx(n.code,{children:'role="presentation"'})," and ",e.jsx(n.code,{children:'focusable="false"'}),` — so decorative icons like the mail icon
in this example need no extra attributes. If an icon conveys meaning beyond the label text,
provide that meaning as text for screen readers.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(n.p,{children:["Form Field provides error and caution states for Text Input. Set the ",e.jsx(n.code,{children:"error"}),` prop on Form Field to
`,e.jsx(n.code,{children:'"error"'})," or ",e.jsx(n.code,{children:'"caution"'})," and use ",e.jsx(n.code,{children:"FormField.Hint"}),` to provide error messages. See
`,e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs#error-states",children:"Form Field's Error documentation"}),` for examples and
accessibility guidance.`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The primary accessibility goal for ",e.jsx(n.code,{children:"TextInput"}),` is to give every user a visible, persistent label and
clear instructions, and to ensure assistive technology users can identify the single-line field and
hear hints, errors, required state, and input purpose when the control receives focus. Use
`,e.jsx(n.code,{children:"TextInput"}),` for single-line values (names, emails, short answers). For multiple lines or paragraphs
of text, use `,e.jsx(n.a,{href:"?path=/docs/components-inputs-textarea--docs",children:"TextArea"})," instead."]}),`
`,e.jsx(n.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(n.p,{children:["Build on the Basic example: label first, then the input inside ",e.jsx(n.code,{children:"FormField.Field"}),`. This order matches
the DOM reading sequence and ensures the label's `,e.jsx(n.code,{children:"htmlFor"})," targets the ",e.jsx(n.code,{children:"<input>"}),` before hint text
follows the control.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

<FormField>
  <FormField.Label>Email</FormField.Label>
  <FormField.Field>
    <FormField.Input as={TextInput} />
    <FormField.Hint>We'll never share your email.</FormField.Hint>
  </FormField.Field>
</FormField>;
`})}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.code,{children:"TextInput"})," requires ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField"})}),", a visible ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Label"})}),`, and
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Input as={TextInput}"})}),` so the control has a programmatically determinable name,
relationships, and instructions. See
`,e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField's accessibility documentation"}),` for shared
form-field guidance. Include `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Hint"})}),` for instructions or validation
messages—`,e.jsx(n.code,{children:"FormField"})," associates that text with the input through ",e.jsx(n.code,{children:"aria-describedby"}),"."]}),`
`,e.jsx(n.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(n.p,{children:["Canvas Kit applies these automatically when you compose ",e.jsx(n.code,{children:"TextInput"})," with ",e.jsx(n.code,{children:"FormField"}),` subcomponents
(and `,e.jsx(n.code,{children:"InputGroup"}),", when used). ",e.jsx(n.strong,{children:"Do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"ARIA and DOM"})," (",e.jsx(n.em,{children:"applied by subcomponents"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"TextInput"})}),": Renders a native ",e.jsx(n.code,{children:'<input type="text">'}),` by default. Screen readers identify it as
a single-line text input.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"TextInput"})," ",e.jsx(n.code,{children:"disabled"})]}),": Maps to the native ",e.jsx(n.code,{children:"disabled"}),` attribute; disabled fields are removed
from the tab order.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"InputGroup.ClearButton"})}),": Sets ",e.jsx(n.code,{children:'role="presentation"'})," and ",e.jsx(n.code,{children:"tabIndex={-1}"}),` so the control is not
in the tab order and is not exposed as an operable button to screen readers. Clearing is available
via native keyboard editing in the input.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"InputGroup.Input"})}),": Always ensures a ",e.jsx(n.code,{children:"placeholder"}),` attribute exists (empty string when unset)
so `,e.jsx(n.code,{children:":placeholder-shown"})," styling for the clear button works correctly."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canvas Kit icons"})," (for example ",e.jsx(n.code,{children:"SystemIcon"})," inside ",e.jsx(n.code,{children:"InputGroup"}),`): SVG markup includes
`,e.jsx(n.code,{children:'role="presentation"'})," and ",e.jsx(n.code,{children:'focusable="false"'}),", which removes the implied ",e.jsx(n.code,{children:"img"}),` role. Decorative
icons need no `,e.jsx(n.code,{children:"aria-hidden"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard"})," (",e.jsxs(n.em,{children:["standard ",e.jsx(n.code,{children:"TextInput"})," behavior"]}),"):"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TextInput"})," uses native ",e.jsx(n.code,{children:"<input>"}),` keyboard behavior (tab order, label activation, and text-editing
shortcuts). Do not add custom key handlers that prevent standard text editing.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"InputGroup.ClearButton"})}),` is intentionally not keyboard-focusable; users clear the value with
standard input editing keys.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Screen reader expectations"})," (",e.jsx(n.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`On focus, assistive technology announces the field label and, when applicable: required state,
invalid state (`,e.jsx(n.code,{children:'error="error"'}),"), and hint or error text via ",e.jsx(n.code,{children:"aria-describedby"}),"."]}),`
`,e.jsx(n.li,{children:'The current value or "blank" is announced when the input receives focus.'}),`
`,e.jsxs(n.li,{children:["The Caution state is visual only — ",e.jsx(n.code,{children:"aria-invalid"})," is ",e.jsx(n.strong,{children:"not"})," set for ",e.jsx(n.code,{children:'error="caution"'}),"."]}),`
`,e.jsx(n.li,{children:"Disabled inputs may be announced as unavailable and are skipped in the tab order."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"InputGroup.ClearButton"})})," is not announced as a separate operable control."]}),`
`,e.jsxs(n.li,{children:["Icons rendered inside ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"InputGroup.InnerStart"})})," or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"InputGroup.InnerEnd"})}),` are not announced,
because their SVG markup uses `,e.jsx(n.code,{children:'role="presentation"'}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`For rendered label, input, and hint association markup, see the DOM examples in
`,e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs#built-in-behaviors",children:"FormField's Built-in Behaviors"}),". ",e.jsx(n.code,{children:"TextInput"}),`
renders a native `,e.jsx(n.code,{children:"<input>"})," (see FormField examples)."]}),`
`,e.jsx(n.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(n.p,{children:["Required in application code for an accessible ",e.jsx(n.code,{children:"TextInput"}),". Rows marked ",e.jsx(n.em,{children:"(conditional)"}),` apply only
when the situation matches—otherwise omit.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"If no design spec is provided:"})," use a visible ",e.jsx(n.code,{children:"FormField.Label"}),`, wrap the control with
`,e.jsx(n.code,{children:"FormField.Input as={TextInput}"}),", omit ",e.jsx(n.code,{children:"isHidden"}),", omit a custom ",e.jsx(n.code,{children:"id"}),` unless testing or composition
requires it, omit a `,e.jsx(n.code,{children:"ref"})," unless programmatic focus is required, and omit ",e.jsx(n.code,{children:"InputGroup"}),` unless icons
or a clear control are part of the design.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Programmatic focus"})," ",e.jsx(n.em,{children:"(conditional — omit by default)"}),":"]}),`
`,e.jsxs(n.p,{children:[`Use a ref when the product needs to move focus to the input after an action (for example, focusing
the field after a validation error, or a control that focuses the input). Do not attach a `,e.jsx(n.code,{children:"ref"}),` or
call `,e.jsx(n.code,{children:"focus()"})," unless the design or developer asks for it. See ",e.jsx(n.a,{href:"#ref-forwarding",children:"Ref Forwarding"}),`
under Usage for a complete Storybook example.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const Example = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current?.focus();
  };

  return (
    <>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} ref={ref} />
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Text Input</PrimaryButton>
    </>
  );
};
`})}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"InputGroup"})," with icons"]})," ",e.jsx(n.em,{children:"(conditional)"}),":"]}),`
`,e.jsxs(n.p,{children:["When the design includes start/end icons or a clear control, compose ",e.jsx(n.code,{children:"InputGroup"}),` as
`,e.jsx(n.code,{children:"FormField.Field"})," (not as ",e.jsx(n.code,{children:"FormField.Input"}),") and wire the input ",e.jsx(n.code,{children:"id"})," from the Form Field model:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  FormField,
  useFormFieldInput,
  useFormFieldModel,
} from '@workday/canvas-kit-react/form-field';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {mailIcon} from '@workday/canvas-system-icons-web';

const model = useFormFieldModel();
const {id: formFieldInputId} = useFormFieldInput(model);

<FormField model={model}>
  <FormField.Label>Email</FormField.Label>
  <FormField.Field as={InputGroup}>
    <InputGroup.InnerStart>
      <SystemIcon icon={mailIcon} />
    </InputGroup.InnerStart>
    <InputGroup.Input id={formFieldInputId} autoComplete="email" />
    <InputGroup.InnerEnd>
      <InputGroup.ClearButton />
    </InputGroup.InnerEnd>
  </FormField.Field>
</FormField>;
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Requirement"}),e.jsx(n.th,{children:"How to satisfy"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Input wiring"}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Input as={TextInput}"})})," wrapping every ",e.jsx(n.code,{children:"TextInput"})," instance. See ",e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"})," for label, hint, error, and required wiring"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Autocomplete ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"autoComplete"})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Input"})})," (or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"InputGroup.Input"})}),") with an appropriate token (e.g. ",e.jsx(n.code,{children:'"email"'}),", ",e.jsx(n.code,{children:'"name"'}),", ",e.jsx(n.code,{children:'"street-address"'}),", ",e.jsx(n.code,{children:'"tel"'}),"). See ",e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html",rel:"nofollow",children:"Identify Input Purpose"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Input ",e.jsx(n.code,{children:"type"})," ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:["More specific ",e.jsx(n.code,{children:"type"})," than ",e.jsx(n.code,{children:'"text"'})," (e.g. ",e.jsx(n.code,{children:'"email"'}),", ",e.jsx(n.code,{children:'"tel"'}),", ",e.jsx(n.code,{children:'"url"'}),", ",e.jsx(n.code,{children:'"search"'}),") when a specialized mobile keyboard improves entry"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Icons / clear control ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Field as={InputGroup}"})})," + ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"InputGroup.Input"})})," with hoisted ",e.jsx(n.code,{children:"id"})," (see ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"InputGroup"})," with icons"]})," above). Decorative icons need no extra attributes; when an icon conveys meaning beyond the label, convey that meaning as text"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Programmatic focus ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"ref"})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Input"})})," and call ",e.jsx(n.code,{children:"focus()"})," when moving focus to the field after an action—omit by default (see ",e.jsx(n.strong,{children:"Programmatic focus"})," above)"]})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"REQUIRED:"})," visible label, ",e.jsx(n.code,{children:"FormField.Input as={TextInput}"})," wiring"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CONDITIONAL:"})," ",e.jsx(n.code,{children:"autoComplete"}),", specialized ",e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"InputGroup"}),` icon/clear composition with
hoisted `,e.jsx(n.code,{children:"id"}),", programmatic focus via ",e.jsx(n.code,{children:"ref"}),`. See
`,e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"}),` for shared FormField
conditionals (hint/error, required, disabled, placeholder, stable `,e.jsx(n.code,{children:"id"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(n.p,{children:["Do ",e.jsx(n.strong,{children:"not"})," generate code that does the following (see ",e.jsx(n.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unlabeled text inputs"}),": Do not use ",e.jsx(n.code,{children:"TextInput"})," without ",e.jsx(n.code,{children:"FormField"})," and ",e.jsx(n.code,{children:"FormField.Label"}),` (see
`,e.jsx(n.strong,{children:"Minimum accessible structure"}),`). For shared FormField anti-patterns (manual ARIA wiring,
placeholder-only labels, color-only errors, broken ID references), see
`,e.jsx(n.a,{href:"?path=/docs/components-inputs-form-field--docs#anti-patterns",children:"FormField Anti-Patterns"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Multi-line content in ",e.jsx(n.code,{children:"TextInput"})]}),": Do not use ",e.jsx(n.code,{children:"TextInput"}),` when the user needs to enter
paragraphs or multi-line text; use `,e.jsx(n.a,{href:"?path=/docs/components-inputs-textarea--docs",children:"TextArea"})," instead."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Input as={InputGroup}"})}),": Do not put ",e.jsx(n.code,{children:"InputGroup"})," on ",e.jsx(n.code,{children:"FormField.Input"}),` — that breaks
label association. Use `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Field as={InputGroup}"})}),", hoist ",e.jsx(n.code,{children:"id"}),` from
`,e.jsx(n.code,{children:"useFormFieldInput(model)"}),", and pass it to ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"InputGroup.Input"})})," (see ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"InputGroup"})," with icons"]}),`
in Accessibility Requirements and `,e.jsx(n.a,{href:"#icons",children:"Icons"})," under Usage)."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Re-wiring ",e.jsx(n.code,{children:"ClearButton"})," a11y"]}),": Do not override ",e.jsx(n.code,{children:"InputGroup.ClearButton"}),"'s ",e.jsx(n.code,{children:"role"})," or ",e.jsx(n.code,{children:"tabIndex"}),`
to make it a focusable, announced button — Canvas Kit intentionally keeps clearing on the input.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Redundant ",e.jsx(n.code,{children:"aria-hidden"})," on icons"]}),": Do not add ",e.jsx(n.code,{children:"aria-hidden"}),` to Canvas Kit icons — their SVG
markup already sets `,e.jsx(n.code,{children:'role="presentation"'})," and ",e.jsx(n.code,{children:'focusable="false"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Meaningful icons without a text alternative"}),": Do not rely on an icon inside ",e.jsx(n.code,{children:"InputGroup"}),` to
convey information beyond the label; because icons are presentational, that meaning must come from
text such as `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Label"})})," or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"FormField.Hint"})}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Programmatic focus by default"}),": Do not attach a ",e.jsx(n.code,{children:"ref"})," or call ",e.jsx(n.code,{children:"focus()"}),` on the input unless the
design or developer asks for it (see `,e.jsx(n.strong,{children:"Programmatic focus"})," in Accessibility Requirements)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(C,{name:"TextInput",fileName:"/react/"}),`
`,e.jsx(C,{name:"InputGroup",fileName:"/react/"}),`
`,e.jsx(n.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(L,{file:"./cypress/component/TextInput.spec.tsx",initialSpecs:{type:"file",name:"TextInput",children:[{type:"describe",name:"TextInput",children:[{type:"describe",name:"given the 'Basic' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be focused"}]},{type:"describe",name:"when text is entered",children:[{type:"it",name:"should reflect the text typed"}]}]},{type:"describe",name:"given the 'Disabled' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]},{type:"describe",name:"given the 'Placeholder' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should render a placeholder text"},{type:"it",name:"should reflect the text typed"}]}]}]},name:"TextInput"})]})}function B(t={}){const{wrapper:n}={...T(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(S,{...t})}):S(t)}const M={title:"Components/Inputs/Text Input",component:l,tags:["autodocs"],parameters:{docs:{page:B}}},c={render:f},h={render:g},p={render:I},u={render:v},m={render:y},x={render:w},j={render:k},F={render:b};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: GrowExample
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: PlaceholderExample
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...j.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...F.parameters?.docs?.source}}};const Fn=["Basic","Disabled","Grow","LabelPosition","Placeholder","RefForwarding","Required","Icons"];export{c as Basic,h as Disabled,p as Grow,F as Icons,u as LabelPosition,m as Placeholder,x as RefForwarding,j as Required,Fn as __namedExportsOrder,M as default};
