import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as V}from"./index-3YbjYt95.js";import{ae as q}from"./index-BzYrJz94.js";import{S as P,E as s,c as _}from"./union-BBWPBX8m.js";import{S as T}from"./Specifications-BvJkDDWn.js";import{e as l}from"./index-IfJi-UCQ.js";import{F as t}from"./FormField-BoRh7RQq.js";import{a as E,c as U,p as Y}from"./index-5dfzm_kn.js";import{u as d}from"./useUniqueId-DC-hMIDg.js";import{R as u,a}from"./RadioGroup-DQVZeZlX.js";import{B as $}from"./Box-jRVkubPC.js";import{S as A}from"./TypeLevelComponents-CFTjaEM9.js";import{P as N}from"./PrimaryButton-C_t6ECOI.js";import{I as c}from"./InformationHighlight-2ADDlMng.js";import"./iframe-Bh-hnNVo.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BwdIspvd.js";import"./Svg-BUqf886j.js";import"./px2rem-C0KbprIx.js";import"./components-zZF9u2s8.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-BuHzn7ly.js";import"./Text-Dp9AQPhJ.js";import"./mergeStyles-CBSbM0IM.js";import"./flex-4pGh-j7a.js";import"./grid-BJ8bTTH_.js";import"./Card-D79lI0U4.js";import"./ExternalHyperlink-DJ_s4Gdg.js";import"./Hyperlink-D4Jk0uVb.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-D3H6QxrX.js";import"./BaseButton-L3-0dDNr.js";import"./Button-DGz_G3Up.js";import"./lerna-Crnzf6ja.js";import"./CanvasProvider-DsukrmKC.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-iEI4Au2Q.js";import"./useTooltip-CT5D_DBK.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useCloseOnEscape-CjhzXgdu.js";import"./Popper-BjMUBNME.js";import"./TertiaryButton-CiAhqlOE.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-2yVUrFIK.js";import"./ColorInput-BXvF7hFS.js";import"./check-small-C7Z-gSGs.js";import"./index-N3xz2Kqy.js";import"./TextInput-Cp9IeKzz.js";import"./types-DXdjelYI.js";import"./check-Bvurkvei.js";import"./Expandable-B6R16ssC.js";import"./Avatar-CAYgsEbk.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-CVk5VE9w.js";import"./Popup-CKw24M0a.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DXnQFalx.js";import"./useInitialFocus-C7o715u8.js";import"./useReturnFocus-BL3Uz_yb.js";import"./useFocusRedirect-BuNn_KMr.js";import"./Breadcrumbs-BWwz3bUY.js";import"./useOverflowListTarget-DV4dN1D3.js";import"./useListItemSelect-CfIjHovN.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CoEQDl3T.js";import"./OverflowTooltip-BmQMITUN.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-BgHRYJDj.js";import"./Table-BtQL6Iv5.js";import"./useConstant-CUZppmaV.js";import"./LabelText-C38kbPj_.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";const C=()=>{const[o,r]=l.useState("deep-dish"),i=n=>{r(n)};return e.jsxs(t,{as:"fieldset",cs:{width:E.md},children:[e.jsx(t.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(t.Input,{as:u,name:d(),onChange:i,value:o,children:[e.jsx(a,{label:"Deep dish",value:"deep-dish"}),e.jsx(a,{label:"Thin",value:"thin"}),e.jsx(a,{label:"Gluten free",value:"gluten-free"}),e.jsx(a,{label:"Cauliflower",value:"cauliflower"}),e.jsx(a,{label:"Butter - the best thing to put on bread",value:"butter"})]})]})};C.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {system} from '@workday/canvas-tokens-web';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField as="fieldset" cs={{width: system.size.md}}>
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
        <Radio label="Butter - the best thing to put on bread" value="butter" />
      </FormField.Input>
    </FormField>
  );
};
`;const w=()=>{const[o,r]=l.useState("deep-dish"),i=n=>{r(n)};return e.jsxs(t,{error:"caution",as:"fieldset",children:[e.jsx(t.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(t.Input,{as:u,name:d(),onChange:i,value:o,children:[e.jsx(a,{label:"Deep dish",value:"deep-dish"}),e.jsx(a,{label:"Thin",value:"thin"}),e.jsx(a,{label:"Gluten free",value:"gluten-free"}),e.jsx(a,{label:"Cauliflower",value:"cauliflower"})]}),e.jsx(t.Hint,{children:"Deep dish is an extra $2.99"})]})};w.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const Caution = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField error="caution" as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
      <FormField.Hint>Deep dish is an extra $2.99</FormField.Hint>
    </FormField>
  );
};
`;const k=()=>{const[o,r]=l.useState("deep-dish"),i=n=>{r(n)};return e.jsxs(t,{as:"fieldset",children:[e.jsx(t.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(t.Input,{as:u,name:d(),onChange:i,value:o,children:[e.jsx(a,{label:"Deep dish",value:"deep-dish"}),e.jsx(a,{label:"Thin",value:"thin"}),e.jsx(a,{disabled:!0,label:"Gluten free (sold out)",value:"gluten-free"}),e.jsx(a,{label:"Cauliflower",value:"cauliflower"})]})]})};k.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const Disabled = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio disabled={true} label="Gluten free (sold out)" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
    </FormField>
  );
};
`;const R=()=>{const[o,r]=l.useState("deep-dish"),i=n=>{r(n)};return e.jsxs(t,{error:"error",as:"fieldset",children:[e.jsx(t.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(t.Input,{as:u,name:d(),onChange:i,value:o,children:[e.jsx(a,{label:"Deep dish",value:"deep-dish"}),e.jsx(a,{label:"Thin",value:"thin"}),e.jsx(a,{label:"Gluten free",value:"gluten-free"}),e.jsx(a,{label:"Cauliflower",value:"cauliflower"})]}),e.jsx(t.Hint,{children:"Deep dish is currently sold out"})]})};R.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const Error = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField error="error" as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
      <FormField.Hint>Deep dish is currently sold out</FormField.Hint>
    </FormField>
  );
};
`;const y=()=>{const[o,r]=l.useState("deep-dish"),i=n=>{r(n)};return e.jsx($,{cs:{padding:Y.md,backgroundColor:U.accent.info},children:e.jsxs(u,{name:d(),onChange:i,value:o,children:[e.jsx(a,{variant:"inverse",label:"Deep dish",value:"deep-dish"}),e.jsx(a,{variant:"inverse",label:"Thin",value:"thin"}),e.jsx(a,{variant:"inverse",label:"Gluten free",value:"gluten-free"}),e.jsx(a,{variant:"inverse",label:"Cauliflower",value:"cauliflower"})]})})};y.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {system} from '@workday/canvas-tokens-web';

export const Inverse = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <Box cs={{padding: system.padding.md, backgroundColor: system.color.accent.info}}>
      <RadioGroup name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio variant="inverse" label="Deep dish" value="deep-dish" />
        <Radio variant="inverse" label="Thin" value="thin" />
        <Radio variant="inverse" label="Gluten free" value="gluten-free" />
        <Radio variant="inverse" label="Cauliflower" value="cauliflower" />
      </RadioGroup>
    </Box>
  );
};
`;const G=()=>{const[o,r]=l.useState("deep-dish"),i=n=>{r(n)};return e.jsxs(t,{orientation:"horizontalStart",as:"fieldset",children:[e.jsx(t.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(t.Input,{as:u,name:d(),onChange:i,value:o,children:[e.jsx(a,{label:"Deep dish",value:"deep-dish"}),e.jsx(a,{label:"Thin",value:"thin"}),e.jsx(a,{label:"Gluten free",value:"gluten-free"}),e.jsx(a,{label:"Cauliflower",value:"cauliflower"})]})]})};G.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const LabelPosition = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField orientation="horizontalStart" as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
    </FormField>
  );
};
`;const I=()=>{const[o,r]=l.useState(""),i=n=>{r(n)};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{as:"fieldset",children:[e.jsx(t.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(t.Input,{as:u,name:d(),onChange:i,value:o,children:[e.jsx(a,{label:"Deep dish"}),e.jsx(a,{label:"Thin"}),e.jsx(a,{label:"Gluten free"}),e.jsx(a,{label:"Cauliflower"})]})]}),e.jsxs(A,{size:"large",children:["Value: ",o]})]})};I.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {Subtext} from '@workday/canvas-kit-react/text';

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>('');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <>
      <FormField as="fieldset">
        <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
        <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
          <Radio label="Deep dish" />
          <Radio label="Thin" />
          <Radio label="Gluten free" />
          <Radio label="Cauliflower" />
        </FormField.Input>
      </FormField>
      <Subtext size="large">Value: {value}</Subtext>
    </>
  );
};
`;const S=()=>{const[o,r]=l.useState("deep-dish"),i=l.useRef(null),n=B=>{r(B)},L=()=>{i.current.click()};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{as:"fieldset",children:[e.jsx(t.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(t.Input,{as:u,name:d(),onChange:n,value:o,children:[e.jsx(a,{label:"Deep dish",value:"deep-dish"}),e.jsx(a,{label:"Thin",value:"thin"}),e.jsx(a,{label:"Gluten free",ref:i,value:"gluten-free"}),e.jsx(a,{label:"Cauliflower",value:"cauliflower"})]})]}),e.jsx(N,{onClick:L,children:"Select Gluten Free"})]})};S.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const RefForwarding = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');
  const glutenFreeRef = React.useRef(null);

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  const handleClick = () => {
    glutenFreeRef.current.click();
  };

  return (
    <>
      <FormField as="fieldset">
        <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
        <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
          <Radio label="Deep dish" value="deep-dish" />
          <Radio label="Thin" value="thin" />
          <Radio label="Gluten free" ref={glutenFreeRef} value="gluten-free" />
          <Radio label="Cauliflower" value="cauliflower" />
        </FormField.Input>
      </FormField>
      <PrimaryButton onClick={handleClick}>Select Gluten Free</PrimaryButton>
    </>
  );
};
`;const z=()=>{const[o,r]=l.useState(),i=n=>{r(n)};return e.jsxs(t,{isRequired:!0,as:"fieldset",children:[e.jsx(t.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(t.Input,{as:u,name:d(),onChange:i,value:o,children:[e.jsx(a,{label:"Deep dish",value:"deep-dish"}),e.jsx(a,{label:"Thin",value:"thin"}),e.jsx(a,{label:"Gluten free",value:"gluten-free"}),e.jsx(a,{label:"Cauliflower",value:"cauliflower"})]})]})};z.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const Required = () => {
  const [value, setValue] = React.useState<string | number>();

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField isRequired={true} as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
    </FormField>
  );
};
`;function D(o){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...V(),...o.components};return c||m(),c.Body||m(),c.Icon||m(),c.Link||m(),e.jsxs(e.Fragment,{children:[e.jsx(q,{of:H}),`
`,e.jsxs(r.h1,{id:"canvas-kit-radio-",children:["Canvas Kit Radio ",e.jsx(P,{type:"deprecated"})]}),`
`,e.jsxs(c,{className:"sb-unstyled",variant:"caution",cs:{p:{marginBlock:0}},children:[e.jsx(c.Icon,{}),e.jsx(c.Body,{children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Radio"}),` in Main has been deprecated and will be removed in a future major version. Please use
`,e.jsx(r.code,{children:"Radio"})," in Preview instead."]})}),e.jsx(c.Link,{href:"https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-radio--docs",children:e.jsx(r.p,{children:"Radio Docs"})})]}),`
`,e.jsx(r.p,{children:"Radio Buttons allow a user to select one value from a predefined list of 7 or fewer options."}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://design.workday.com/components/inputs/radio-buttons",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(r.p,{children:"Radio Buttons are intended to be grouped together using a Radio Group."}),`
`,e.jsxs(r.p,{children:["Radio Group should be used in tandem with ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` where the
`,e.jsx(r.code,{children:"useFieldset"})," prop is set to ",e.jsx(r.code,{children:"true"})," to meet accessibility standards."]}),`
`,e.jsx(s,{code:C}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"}),` prop of the Radio Button to prevent users from interacting with it. Be careful
not to disable a pre-selected Radio Button, this will block keyboard access from the entire Radio
Group.`]}),`
`,e.jsx(s,{code:k}),`
`,e.jsx(r.h3,{id:"inverse",children:"Inverse"}),`
`,e.jsx(r.p,{children:"Radio with inverse variant"}),`
`,e.jsx(s,{code:y}),`
`,e.jsx(r.h3,{id:"radio-buttons-with-no-values",children:"Radio Buttons with No Values"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"value"})," prop may be omitted from Radio Buttons, in which case the ",e.jsx(r.code,{children:"value"}),` prop of the Radio
Group should be set using the zero-based index of the selected Radio Button.`]}),`
`,e.jsx(s,{code:I}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:["Radio Button supports ",e.jsx(r.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will
forward `,e.jsx(r.code,{children:"ref"})," to its underlying ",e.jsx(r.code,{children:'<input type="radio">'})," element."]}),`
`,e.jsx(s,{code:S}),`
`,e.jsx(r.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(s,{code:G}),`
`,e.jsx(r.h3,{id:"required",children:"Required"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"required"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:"true"}),` to indicate that the field is required.
Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(s,{code:z}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"error"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:'"caution"'})," or ",e.jsx(r.code,{children:'"error"'}),` to set the Radio Group
to the Caution or Error state, respectively. You will also need to set the `,e.jsx(r.code,{children:"hintId"})," and ",e.jsx(r.code,{children:"hintText"}),`
props on the Form Field to meet accessibility standards.`]}),`
`,e.jsx(r.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(s,{code:w}),`
`,e.jsx(r.h4,{id:"error",children:"Error"}),`
`,e.jsx(s,{code:R}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(_,{name:"Radio",fileName:"/react/"}),`
`,e.jsx(r.h3,{id:"radiogroup",children:"RadioGroup"}),`
`,e.jsx(_,{name:"RadioGroup",fileName:"/react/"}),`
`,e.jsx(r.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(T,{file:"./cypress/component/Radio.spec.tsx",initialSpecs:{type:"file",name:"Radio",children:[{type:"describe",name:"Radio",children:[{type:"describe",name:"given the 'Basic' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:'when the "Gluten free" radio button is clicked',children:[{type:"it",name:'the "Gluten free" radio button should be checked'}]},{type:"describe",name:'when clicking the "Gluten free" radio button and then clicking the "Thin" radio button',children:[{type:"it",name:'the "Gluten free" radio button should not be checked'},{type:"it",name:'the "Thin" radio button should be checked'}]}]},{type:"describe",name:"given the 'Caution' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:'when the "Gluten free" radio button is clicked',children:[{type:"it",name:'the "Gluten free" radio button should be checked'}]},{type:"describe",name:'when clicking the "Gluten free" radio button and then clicking the "Thin" radio button',children:[{type:"it",name:'the "Gluten free" radio button should not be checked'},{type:"it",name:'the "Thin" radio button should be checked'}]}]},{type:"describe",name:"given the 'Error' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:'when the "Gluten free" radio button is clicked',children:[{type:"it",name:'the "Gluten free" radio button should be checked'}]},{type:"describe",name:'when clicking the "Gluten free" radio button and then clicking the "Thin" radio button',children:[{type:"it",name:'the "Gluten free" radio button should not be checked'},{type:"it",name:'the "Thin" radio button should be checked'}]}]},{type:"describe",name:"given the 'Disabled' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:'the "Gluten free (sold out)" radio button should be disabled'}]}]}]},name:"Radio"})]})}function W(o={}){const{wrapper:r}={...V(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(D,{...o})}):D(o)}function m(o,r){throw new R}const H={title:"Components/Inputs/Radio (deprecated)",component:a,tags:["autodocs"],parameters:{docs:{page:W}}},h={render:w},p={render:C},f={render:k},b={render:y},v={render:R},x={render:G},g={render:I},F={render:S},j={render:z};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: InverseExample
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: NoValueExample
}`,...g.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...j.parameters?.docs?.source}}};const wr=["Caution","Basic","Disabled","Inverse","Error","LabelPosition","NoValue","RefForwarding","Required"];export{p as Basic,h as Caution,f as Disabled,v as Error,b as Inverse,x as LabelPosition,g as NoValue,F as RefForwarding,j as Required,wr as __namedExportsOrder,H as default};
