import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as T}from"./index-3YbjYt95.js";import{ae as C}from"./index-B7JPaHCe.js";import{E as l,c as S}from"./union-C-XUx4Jk.js";import{S as I}from"./Specifications-BKtiTCxr.js";import{e as o}from"./index-IfJi-UCQ.js";import{F as n}from"./FormField-BRQUY4iF.js";import{T as a}from"./TextArea-Dfs7f0pR.js";import{P as D}from"./PrimaryButton-C0fil2DD.js";import"./iframe-Dac7Hedr.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BcDZsE52.js";import"./Svg-ZtmPf1WS.js";import"./px2rem-C0KbprIx.js";import"./components-d5Lq2N3r.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-DnH4Ng-7.js";import"./Text-DMwz83mg.js";import"./mergeStyles-Bv4mj65-.js";import"./Box-8rtctY3X.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-C1nlk4Q5.js";import"./grid-kt9rUtwL.js";import"./cornerShape-DnGoKixo.js";import"./index-DE-upP0k.js";import"./Card-Cgn41sLF.js";import"./ExternalHyperlink-DNQXdN1m.js";import"./Hyperlink-DTQzeeu5.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-edyy8Yyq.js";import"./BaseButton-9fY3LWrU.js";import"./Button-CHFUbppk.js";import"./lerna-evyZBZtl.js";import"./CanvasProvider-C8GkxeBT.js";import"./index-D-t2nnqG.js";import"./Tooltip-BrBbQMlI.js";import"./useTooltip-gRyGftt9.js";import"./getTransformFromPlacement-DFpy6Eid.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-D0RFoaOv.js";import"./Popper-Cm0FFZPA.js";import"./TertiaryButton-CrOm2fp9.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-eC853Afo.js";import"./ColorPicker-NcRgt_sV.js";import"./ColorInput-DSXyr_LF.js";import"./check-small-BqSDQIle.js";import"./TextInput-CMmZv4Ba.js";import"./types-DXdjelYI.js";import"./check-Ds6vsrAM.js";import"./Expandable-BYaYjrzC.js";import"./Avatar-b92-NjIl.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-5MIkg8A2.js";import"./Popup-ecgWxFuV.js";import"./x-B1faap_l.js";import"./usePopupTarget-CeDO4AGg.js";import"./useInitialFocus-CoqXPXir.js";import"./useReturnFocus-B9CbcNi8.js";import"./useFocusRedirect-ClVmmyIj.js";import"./Breadcrumbs-D8g-gW_1.js";import"./useOverflowListTarget-B8N3Ckvk.js";import"./useListItemRegister-DRuomJPi.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DHE2CAff.js";import"./OverflowTooltip-C7AH6CXC.js";import"./useListItemSelect-BwZQ88Wp.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-Cax-TbUS.js";import"./Table-CrJ8Ctju.js";const F=()=>{const[t,r]=o.useState(""),i=s=>{r(s.target.value)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:a,onChange:i,value:t})})]})};F.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const f=()=>{const[t,r]=o.useState(""),i=s=>{r(s.target.value)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:a,disabled:!0,onChange:i,value:t})})]})};f.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} disabled onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const g=()=>{const[t,r]=o.useState(""),i=s=>{r(s.target.value)};return e.jsxs(n,{grow:!0,children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:a,onChange:i,value:t})})]})};g.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField grow>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const v=()=>{const[t,r]=o.useState(""),i=s=>{r(s.target.value)};return e.jsxs(n,{orientation:"horizontalStart",children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsxs(n.Field,{children:[e.jsx(n.Input,{as:a,onChange:i,value:t}),e.jsx(n.Hint,{children:"Message must be under 200 characters"})]})]})};v.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const LabelPosition = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
        <FormField.Hint>Message must be under 200 characters</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
`;const b=()=>{const[t,r]=o.useState(""),i=s=>{r(s.target.value)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:a,onChange:i,placeholder:"Let us know how we did!",value:t})})]})};b.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Placeholder = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={TextArea}
          onChange={handleChange}
          placeholder="Let us know how we did!"
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};
`;const y=()=>{const[t,r]=o.useState(""),i=o.useRef(null),s=L=>{r(L.target.value)},k=()=>{i.current.focus()};return e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:a,onChange:s,ref:i,value:t})})]}),e.jsx(D,{onClick:k,children:"Focus Text Area"})]})};y.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <FormField>
        <FormField.Label>Leave a Review</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextArea} onChange={handleChange} ref={ref} value={value} />
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Text Area</PrimaryButton>
    </>
  );
};
`;const w=()=>{const[t,r]=o.useState(""),i=s=>{r(s.target.value)};return e.jsxs(n,{isRequired:!0,children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:a,onChange:i,value:t})})]})};w.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField isRequired={true}>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const A=()=>{const[t,r]=o.useState(""),i=s=>{r(s.target.value)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:a,onChange:i,resize:a.ResizeDirection.Vertical,value:t})})]})};A.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const ResizeConstraints = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={TextArea}
          onChange={handleChange}
          resize={TextArea.ResizeDirection.Vertical}
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};
`;function R(t){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...T(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(C,{of:_}),`
`,e.jsx(r.h1,{id:"canvas-kit-text-area",children:"Canvas Kit Text Area"}),`
`,e.jsx(r.p,{children:"Text Areas allow users to enter and edit multiple lines of text."}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://design.workday.com/components/inputs/text-area",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.p,{children:["Text Area should be used in tandem with ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` to ensure
proper label association and screen reader support.`]}),`
`,e.jsx(l,{code:F}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"})," prop of the Text Area to prevent users from interacting with it."]}),`
`,e.jsx(l,{code:f}),`
`,e.jsx(r.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"placeholder"}),` prop of the Text Area to display a sample of its expected format or value
before a value has been provided.`]}),`
`,e.jsx(l,{code:b}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),": Always provide a persistent ",e.jsx(r.code,{children:"FormField.Label"}),` and never rely on
placeholder text as the only label for a text area. Placeholders can disappear or lack sufficient
contrast. Use placeholders only for short format examples, and place detailed instructions or
guidance in `,e.jsx(r.code,{children:"FormField.Hint"})," instead of the placeholder."]}),`
`]}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:["Text Area supports ",e.jsx(r.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will forward
`,e.jsx(r.code,{children:"ref"})," to its underlying ",e.jsx(r.code,{children:"<textarea>"})," element."]}),`
`,e.jsx(l,{code:y}),`
`,e.jsx(r.h3,{id:"resize-constraints",children:"Resize Constraints"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"resize"})," prop of the Text Area to restrict resizing of it to certain dimensions. ",e.jsx(r.code,{children:"resize"}),`
accepts the following values:`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"TextArea.ResizeDirection.Both"})," (Default)"]}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"TextArea.ResizeDirection.Horizontal"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"TextArea.ResizeDirection.None"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"TextArea.ResizeDirection.Vertical"})}),`
`]}),`
`,e.jsx(l,{code:A}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),": Allowing users to resize the text area (default ",e.jsx(r.code,{children:"resize: both"}),`) improves
accessibility by letting them adjust it for comfort. Avoid disabling resizing (`,e.jsx(r.code,{children:"resize: none"}),`)
unless necessary, and always ensure the initial size meets the needs of your content.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"grow",children:"Grow"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"grow"})," prop of the Text Area to ",e.jsx(r.code,{children:"true"}),` to configure the Text Area to expand to the width of
its container.`]}),`
`,e.jsx(l,{code:g}),`
`,e.jsx(r.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(l,{code:v}),`
`,e.jsx(r.h3,{id:"required",children:"Required"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"isRequired"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:"true"}),` to indicate that the field is
required. Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(l,{code:w}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Form Field provides error and caution states for Text Area. Set the ",e.jsx(r.code,{children:"error"}),` prop on Form Field to
`,e.jsx(r.code,{children:'"error"'})," or ",e.jsx(r.code,{children:'"caution"'})," and use ",e.jsx(r.code,{children:"FormField.Hint"}),` to provide error messages. See
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#error-states",children:"Form Field's Error documentation"}),` for examples and
accessibility guidance.`]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["The primary accessibility goal for ",e.jsx(r.code,{children:"TextArea"}),` is to give every user a visible, persistent label and
clear instructions, and to ensure assistive technology users can identify the multi-line field and
hear hints, errors, required state, and character-limit information when the control receives focus.
Use `,e.jsx(r.code,{children:"TextArea"}),` when users need to enter multiple lines or paragraphs of text. For single-line values
(names, emails, short answers), use `,e.jsx(r.a,{href:"?path=/docs/components-inputs-text-input--docs",children:"TextInput"})," instead."]}),`
`,e.jsx(r.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(r.p,{children:["Build on the Basic example: label first, then the input inside ",e.jsx(r.code,{children:"FormField.Field"}),`. This order matches
the DOM reading sequence and ensures the label's `,e.jsx(r.code,{children:"htmlFor"})," targets the ",e.jsx(r.code,{children:"<textarea>"}),` before hint text
follows the control.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

<FormField>
  <FormField.Label>Leave a Review</FormField.Label>
  <FormField.Field>
    <FormField.Input as={TextArea} />
    <FormField.Hint>Share any additional feedback.</FormField.Hint>
  </FormField.Field>
</FormField>;
`})}),`
`,e.jsxs(r.p,{children:["Every ",e.jsx(r.code,{children:"TextArea"})," requires ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})}),", a visible ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Label"})}),`, and
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input as={TextArea}"})}),` so the control has a programmatically determinable name,
relationships, and instructions. See
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField's accessibility documentation"}),` for shared
form-field guidance. Include `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Hint"})}),` for instructions, validation messages, or
character counts—`,e.jsx(r.code,{children:"FormField"})," associates that text with the text area through ",e.jsx(r.code,{children:"aria-describedby"}),"."]}),`
`,e.jsx(r.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(r.p,{children:["Canvas Kit applies these automatically when you compose ",e.jsx(r.code,{children:"TextArea"})," with ",e.jsx(r.code,{children:"FormField"}),` subcomponents.
`,e.jsx(r.strong,{children:"Do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"ARIA and DOM"})," (",e.jsx(r.em,{children:"applied by subcomponents"}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"TextArea"})}),": Renders a native ",e.jsx(r.code,{children:"<textarea>"}),` element. Screen readers identify it as a multi-line
text input.`]}),`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:[e.jsx(r.code,{children:"TextArea"})," ",e.jsx(r.code,{children:"disabled"})]}),": Maps to the native ",e.jsx(r.code,{children:"disabled"}),` attribute; disabled fields are removed
from the tab order.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"User-resizable dimensions"}),": Defaults to ",e.jsx(r.code,{children:"resize: both"}),` so users can adjust the control for
visual comfort.`]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Keyboard"})," (",e.jsxs(r.em,{children:["standard ",e.jsx(r.code,{children:"TextArea"})," behavior"]}),"):"]}),`
`,e.jsxs(r.p,{children:[e.jsx("kbd",{children:"Enter"}),": Inserts a new line (native ",e.jsx(r.code,{children:"<textarea>"})," behavior). Do not add custom key handlers that prevent standard text editing."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"TextArea"})," uses native ",e.jsx(r.code,{children:"<textarea>"}),` keyboard behavior (tab order, label activation, and text-editing
shortcuts).`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Screen reader expectations"})," (",e.jsx(r.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`On focus, assistive technology announces the field label and, when applicable: required state,
invalid state (`,e.jsx(r.code,{children:'error="error"'}),"), and hint or error text via ",e.jsx(r.code,{children:"aria-describedby"}),"."]}),`
`,e.jsx(r.li,{children:'The current value or "blank" is announced when the text area receives focus.'}),`
`,e.jsxs(r.li,{children:["The Caution state is visual only — ",e.jsx(r.code,{children:"aria-invalid"})," is ",e.jsx(r.strong,{children:"not"})," set for ",e.jsx(r.code,{children:'error="caution"'}),"."]}),`
`,e.jsx(r.li,{children:"Disabled text areas may be announced as unavailable and are skipped in the tab order."}),`
`]}),`
`,e.jsxs(r.p,{children:[`For rendered label, input, and hint association markup, see the DOM examples in
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#built-in-behaviors",children:"FormField's Built-in Behaviors"}),". ",e.jsx(r.code,{children:"TextArea"}),`
renders a native `,e.jsx(r.code,{children:"<textarea>"})," in place of ",e.jsx(r.code,{children:"<input>"}),"."]}),`
`,e.jsx(r.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(r.p,{children:["Required in application code for an accessible ",e.jsx(r.code,{children:"TextArea"}),". Rows marked ",e.jsx(r.em,{children:"(conditional)"}),` apply only
when the situation matches—otherwise omit.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"If no design spec is provided:"})," use a visible ",e.jsx(r.code,{children:"FormField.Label"}),`, wrap the control with
`,e.jsx(r.code,{children:"FormField.Input as={TextArea}"}),", omit ",e.jsx(r.code,{children:"isHidden"}),", keep default ",e.jsx(r.code,{children:"resize: both"}),", omit a custom ",e.jsx(r.code,{children:"id"}),`
unless testing or composition requires it, and omit a `,e.jsx(r.code,{children:"ref"})," unless programmatic focus is required."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Programmatic focus"})," ",e.jsx(r.em,{children:"(conditional — omit by default)"}),":"]}),`
`,e.jsxs(r.p,{children:[`Use a ref when the product needs to move focus to the text area after an action (for example,
focusing the field after a validation error, or a control that focuses the text area). Do not attach
a `,e.jsx(r.code,{children:"ref"})," or call ",e.jsx(r.code,{children:"focus()"}),` unless the design or developer asks for it. See
`,e.jsx(r.a,{href:"#ref-forwarding",children:"Ref Forwarding"})," under Usage for a complete Storybook example."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const Example = () => {
  const ref = React.useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    ref.current?.focus();
  };

  return (
    <>
      <FormField>
        <FormField.Label>Leave a Review</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextArea} ref={ref} />
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Text Area</PrimaryButton>
    </>
  );
};
`})}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Requirement"}),e.jsx(r.th,{children:"How to satisfy"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Input wiring"}),e.jsxs(r.td,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input as={TextArea}"})})," wrapping every ",e.jsx(r.code,{children:"TextArea"})," instance. See ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"})," for label, hint, error, and required wiring"]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Character limit ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"maxLength"})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input"})}),", visible count in ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Hint"})}),", and debounced ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"AriaLiveRegion"})}),". See ",e.jsx(r.a,{href:"?path=/docs/guides-accessibility-aria-live-regions--docs#debouncing-an-arialiveregion-textarea-with-character-limit",children:"Aria Live Regions guide"})]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Programmatic focus ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"ref"})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input"})})," and call ",e.jsx(r.code,{children:"focus()"})," when moving focus to the field after an action—omit by default (see ",e.jsx(r.strong,{children:"Programmatic focus"})," above)"]})]})]})]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"REQUIRED:"})," visible label, ",e.jsx(r.code,{children:"FormField.Input as={TextArea}"})," wiring"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"CONDITIONAL:"})," character limit with live region, programmatic focus via ",e.jsx(r.code,{children:"ref"}),`. See
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"}),` for shared FormField
conditionals (hint/error, required, disabled, placeholder, stable `,e.jsx(r.code,{children:"id"}),")."]}),`
`]}),`
`,e.jsx(r.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(r.p,{children:["Do ",e.jsx(r.strong,{children:"not"})," generate code that does the following (see ",e.jsx(r.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Unlabeled text areas"}),": Do not use ",e.jsx(r.code,{children:"TextArea"})," without ",e.jsx(r.code,{children:"FormField"})," and ",e.jsx(r.code,{children:"FormField.Label"}),` (see
`,e.jsx(r.strong,{children:"Minimum accessible structure"}),`). For shared FormField anti-patterns (manual ARIA wiring,
placeholder-only labels, color-only errors, broken ID references), see
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#anti-patterns",children:"FormField Anti-Patterns"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Single-line input for multi-line content"}),`: Do not use
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-text-input--docs",children:"TextInput"}),` when the user needs to enter paragraphs or multi-line
text; use `,e.jsx(r.code,{children:"TextArea"})," instead."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Per-keystroke character announcements"}),`: Do not announce character counts after every keystroke;
debounce `,e.jsx(r.code,{children:"AriaLiveRegion"})," updates so screen reader users are not interrupted while typing."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Disabling resize unnecessarily"}),": Do not set ",e.jsx(r.code,{children:"resize"})," to ",e.jsx(r.code,{children:"none"}),` unless there is a strong design
or layout requirement; users lose a visual comfort affordance that supports low-vision and motor
needs.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Programmatic focus by default"}),": Do not attach a ",e.jsx(r.code,{children:"ref"})," or call ",e.jsx(r.code,{children:"focus()"}),` on the text area unless
the design or developer asks for it (see `,e.jsx(r.strong,{children:"Programmatic focus"})," in Accessibility Requirements)."]}),`
`]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(S,{name:"TextArea",fileName:"/react/"}),`
`,e.jsx(r.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(I,{file:"./cypress/component/TextArea.spec.tsx",initialSpecs:{type:"file",name:"TextArea",children:[{type:"describe",name:"Text Area",children:[{type:"describe",name:"given the 'Basic' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be focused"}]},{type:"describe",name:"when text is entered",children:[{type:"it",name:"should reflect the text typed"}]}]},{type:"describe",name:"given the 'Disabled' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]},{type:"describe",name:"given the 'Placeholder' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should render a placeholder text"},{type:"it",name:"should reflect the text typed"}]}]}]},name:"Text Area"})]})}function E(t={}){const{wrapper:r}={...T(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(R,{...t})}):R(t)}const _={title:"Components/Inputs/TextArea",component:a,tags:["autodocs"],parameters:{docs:{page:E}}},d={render:F},c={render:f},h={render:g},m={render:v},x={render:b},u={render:y},p={render:w},j={render:A};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: GrowExample
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: PlaceholderExample
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...p.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: ResizeConstraintsExample
}`,...j.parameters?.docs?.source}}};const dr=["Basic","Disabled","Grow","LabelPosition","Placeholder","RefForwarding","Required","ResizeConstraints"];export{d as Basic,c as Disabled,h as Grow,m as LabelPosition,x as Placeholder,u as RefForwarding,p as Required,j as ResizeConstraints,dr as __namedExportsOrder,_ as default};
