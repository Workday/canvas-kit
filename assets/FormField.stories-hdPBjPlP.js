import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as he}from"./index-3YbjYt95.js";import{ae as ye}from"./index-C88wW2Ex.js";import{E as c,c as ke}from"./union-BPMFUjOj.js";import{S as we}from"./Specifications-5IKkCTzR.js";import{F as p}from"./Flex-C9RVCMPo.js";import{c as F,b as ce}from"./cs-rfTTo7Bg.js";import{F as t,u as v,a as Fe,f as Ce,b as Se,c as Ie}from"./FormField-DN--zoVG.js";import{T as d}from"./TextInput-D51etMr3.js";import{T as Re}from"./TextArea-Ceg9AmCp.js";import{S as b}from"./Select-Zko6OOUE.js";import{R as u}from"./RadioGroup-DBiyxinF.js";import{C as f}from"./Checkbox-B0Gb5SKm.js";import{F as a}from"./FormFieldGroup-BvFEm3Wf.js";import{S as Le}from"./Switch-C_dXTXr2.js";import{g,s as Ee,p as xe}from"./index-5dfzm_kn.js";import{c as ue}from"./getTransformFromPlacement-BtpPb64q.js";import{e as Te,a1 as Ge,k as He}from"./index-5mrAZJYD.js";import{e as s}from"./index-IfJi-UCQ.js";import{j as N}from"./components-hLI4Y7BG.js";import{A as Be}from"./AriaLiveRegion-DR1UoUFo.js";import{B as k}from"./Banner-B6EFFXx5.js";import{P as _e}from"./PrimaryButton-BLeyIayx.js";import{S as fe}from"./SecondaryButton-CLjQTZHV.js";import{p as Me}from"./px2rem-C0KbprIx.js";import{I as D}from"./InputGroup-BV-5Wj3X.js";import{s as ze}from"./search-INhyn6-E.js";import{S as Ae}from"./SystemIcon-B8HVQN6j.js";import{c as qe}from"./useReturnFocus-C7p7cNR7.js";import{C as Pe}from"./CanvasProvider-mU4xaRYK.js";import"./iframe-CQKXz9-x.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./StatusIndicator-CiQOcTf5.js";import"./Text-D8fnnBwI.js";import"./mergeStyles-dbpHOiQg.js";import"./Box-CZFE0ixi.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DNq8_MY_.js";import"./grid-2x3NJxAi.js";import"./Card-Diisw6Wk.js";import"./ExternalHyperlink-CWp7Pbv_.js";import"./Hyperlink-RaMBe4Xz.js";import"./external-link-BZdacz1K.js";import"./lerna-DL0LCqJw.js";import"./Tooltip-C_9jsdWz.js";import"./useTooltip-BYoICOX9.js";import"./useCloseOnEscape-Laal62t5.js";import"./Popper-GB9vaNct.js";import"./useUniqueId-DC-hMIDg.js";import"./TertiaryButton-BPITVf5W.js";import"./BaseButton-CYxOiuNN.js";import"./Button-4v0JWwSY.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-D0CjS5x_.js";import"./ColorPicker-DgREOIhz.js";import"./ColorInput-D7oUbfnw.js";import"./check-small-C7Z-gSGs.js";import"./check-Bvurkvei.js";import"./Expandable-BWvaEvQ6.js";import"./Avatar-CzGiOulD.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-a5nE6ygN.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DdDlie6x.js";import"./Popup-N9bHb6Ji.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DboaFZ0b.js";import"./useInitialFocus-FRuZ2Meg.js";import"./useFocusRedirect-CKcH6oXb.js";import"./Breadcrumbs-C2gx7qIi.js";import"./useOverflowListTarget-DvTTlNIT.js";import"./useListItemSelect-1rs22A26.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DIRa1Olo.js";import"./OverflowTooltip-C8xnDywt.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-gkxgxQ_f.js";import"./types-DXdjelYI.js";import"./Combobox-DtAjhpSw.js";import"./useComboboxInputConstrained-COXCNMgT.js";import"./caret-down-small-UmNc4PEr.js";import"./LabelText-CmJeFfig.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./x-small-DK7gM0f7.js";import"./Svg-Q2G_Ux-O.js";const $=()=>{const[o,r]=s.useState(""),n=i=>{r(i.target.value)};return e.jsx(p,{children:e.jsxs(t,{children:[e.jsx(t.Label,{children:"First Name"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:d,value:o,onChange:n})})]})})};$.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const Y=()=>{const[o,r]=s.useState("hi"),n=i=>{r(i.target.value)};return e.jsx(p,{children:e.jsxs(t,{error:"caution",children:[e.jsx(t.Label,{children:"Create Password"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:d,type:"password",value:o,onChange:n}),e.jsx(t.Hint,{children:"Alert: Password strength is weak, using more characters is recommended."})]})]})})};Y.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Caution = () => {
  const [value, setValue] = React.useState('hi');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField error="caution">
        <FormField.Label>Create Password</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} type="password" value={value} onChange={handleChange} />
          <FormField.Hint>
            Alert: Password strength is weak, using more characters is recommended.
          </FormField.Hint>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const W=()=>{const[o,r]=s.useState(""),n=i=>{r(i.target.value)};return e.jsx(p,{children:e.jsxs(t,{error:"error",children:[e.jsx(t.Label,{children:"Password"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:d,type:"password",value:o,onChange:n}),e.jsx(t.Hint,{children:"Error: Must Contain a number and a capital letter"})]})]})})};W.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField error="error">
        <FormField.Label>Password</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} type="password" value={value} onChange={handleChange} />
          <FormField.Hint>Error: Must Contain a number and a capital letter</FormField.Hint>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const U=()=>{const[o,r]=s.useState(""),n=i=>{r(i.target.value)};return e.jsx(p,{children:e.jsxs(t,{children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:d,value:o,disabled:!0,onChange:n})})]})})};U.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} disabled onChange={handleChange} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const O=()=>{const[o,r]=s.useState(""),n=v(),{id:i}=Fe(n),m=x=>{r(x.target.value)};return e.jsx(p,{children:e.jsxs(t,{model:n,children:[e.jsx(t.Label,{isHidden:!0,children:"Search"}),e.jsxs(t.Field,{as:D,children:[e.jsx(D.InnerStart,{children:e.jsx(Ae,{icon:ze,size:"small"})}),e.jsx(D.Input,{as:d,id:i,onChange:m,value:o})]})]})})};O.__RAW__=`import React from 'react';

import {
  FormField,
  useFormFieldInput,
  useFormFieldModel,
} from '@workday/canvas-kit-react/form-field';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {searchIcon} from '@workday/canvas-system-icons-web';

/**
 * Using \`as={InputGroup}\` on \`FormField.Input\` will break the label associations necessary for accessibility.
 * In this example, we've rendered \`FormField.Field\` as \`InputGroup\` and then hoisted the \`id\` of the input from the FormField model.
 * This allows us to set the \`id\` of the \`InputGroup.Input\` correctly for proper label association.
 */

export const HiddenLabel = () => {
  const [value, setValue] = React.useState('');
  const model = useFormFieldModel();
  const {id: formFieldInputId} = useFormFieldInput(model);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField model={model}>
        <FormField.Label isHidden>Search</FormField.Label>
        <FormField.Field as={InputGroup}>
          <InputGroup.InnerStart>
            <SystemIcon icon={searchIcon} size="small" />
          </InputGroup.InnerStart>
          <InputGroup.Input
            as={TextInput}
            id={formFieldInputId}
            onChange={handleChange}
            value={value}
          />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const Ve=F({display:"flex",gap:g.sm,flexDirection:"column"}),K=()=>{const[o,r]=s.useState(""),n=i=>{r(i.target.value)};return e.jsxs("form",{className:Ve,children:[e.jsxs(t,{orientation:"horizontalStart",children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Input,{as:d,value:o,onChange:n})]}),e.jsxs(t,{orientation:"horizontalStart",children:[e.jsx(t.Label,{children:"Password"}),e.jsx(t.Input,{as:d,type:"password"})]})]})};K.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  display: 'flex',
  gap: system.gap.sm,
  flexDirection: 'column',
});

export const LabelPositionHorizontalStart = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={formStyles}>
      <FormField orientation="horizontalStart">
        <FormField.Label>Email</FormField.Label>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField>
      <FormField orientation="horizontalStart">
        <FormField.Label>Password</FormField.Label>
        <FormField.Input as={TextInput} type="password" />
      </FormField>
    </form>
  );
};
`;const De=F({display:"flex",gap:g.sm,flexDirection:"column"}),X=()=>{const[o,r]=s.useState(""),n=i=>{r(i.target.value)};return e.jsxs("form",{className:De,children:[e.jsxs(t,{orientation:"horizontalEnd",children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Input,{as:d,value:o,onChange:n})]}),e.jsxs(t,{orientation:"horizontalEnd",children:[e.jsx(t.Label,{children:"Password"}),e.jsx(t.Input,{as:d,type:"password"})]})]})};X.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  display: 'flex',
  gap: system.gap.sm,
  flexDirection: 'column',
});

export const LabelPositionHorizontalEnd = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={formStyles}>
      <FormField orientation="horizontalEnd">
        <FormField.Label>Email</FormField.Label>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField>
      <FormField orientation="horizontalEnd">
        <FormField.Label>Password</FormField.Label>
        <FormField.Input as={TextInput} type="password" />
      </FormField>
    </form>
  );
};
`;const Ne=F({gap:g.xs,alignItems:"flex-start",flexDirection:"column"}),J=()=>{const[o,r]=s.useState(""),n=s.useRef(null),i=x=>{r(x.target.value)},m=()=>{qe(n.current)};return e.jsxs(p,{cs:Ne,children:[e.jsxs(t,{children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:d,onChange:i,value:o,ref:n})})]}),e.jsx(fe,{onClick:m,children:"Focus Text Input"})]})};J.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.gap.xs,
  alignItems: 'flex-start',
  flexDirection: 'column',
});

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    changeFocus(ref.current);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} onChange={handleChange} value={value} ref={ref} />
        </FormField.Field>
      </FormField>
      <SecondaryButton onClick={handleClick}>Focus Text Input</SecondaryButton>
    </Flex>
  );
};
`;const Q=()=>{const[o,r]=s.useState(""),n=i=>{r(i.target.value)};return e.jsxs(t,{isRequired:!0,children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:d,placeholder:"your@gmail.com",onChange:n,value:o})})]})};Q.__RAW__=`import React from 'react';

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
        <FormField.Input
          as={TextInput}
          placeholder="your@gmail.com"
          onChange={handleChange}
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};
`;const $e=({model:o,children:r})=>{const n=N(v.Context,o),i=Se(n);return e.jsxs("label",{...i,children:[r,o.state.isRequired?"*":""]})},Ye=({model:o,children:r})=>{const n=N(v.Context,o),i=Ie(n);return e.jsx("span",{...i,children:r})},We=({model:o,...r})=>{const n=N(v.Context,o),i=Fe(n,r);return e.jsx("input",{type:"text",required:!!o.state.isRequired,...i})},Z=()=>{const[o,r]=s.useState(""),n=m=>{r(m.target.value)},i=v({isRequired:!0});return e.jsxs(p,{cs:Ce({orientation:"horizontalStart"}),children:[e.jsx($e,{model:i,children:"My Custom Field"}),e.jsx(We,{model:i,value:o,onChange:n}),e.jsx(Ye,{model:i,children:"You can be anything"})]})};Z.__RAW__=`import React from 'react';

import {useModelContext} from '@workday/canvas-kit-react/common';
import {
  formFieldStencil,
  useFormFieldHint,
  useFormFieldInput,
  useFormFieldLabel,
  useFormFieldModel,
} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';

const Label = ({model, children}) => {
  const localModel = useModelContext(useFormFieldModel.Context, model);
  const props = useFormFieldLabel(localModel);

  return (
    <label {...props}>
      {children}
      {model.state.isRequired ? '*' : ''}
    </label>
  );
};

const Hint = ({model, children}) => {
  const localModel = useModelContext(useFormFieldModel.Context, model);
  const props = useFormFieldHint(localModel);

  return <span {...props}>{children}</span>;
};

const Input = ({model, ...elementProps}) => {
  const localModel = useModelContext(useFormFieldModel.Context, model);
  const props = useFormFieldInput(localModel, elementProps);

  return <input type="text" required={model.state.isRequired ? true : false} {...props} />;
};

export const Custom = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const model = useFormFieldModel({isRequired: true});

  return (
    <Flex cs={formFieldStencil({orientation: 'horizontalStart'})}>
      <Label model={model}>My Custom Field</Label>
      <Input model={model} value={value} onChange={handleChange} />
      <Hint model={model}>You can be anything</Hint>
    </Flex>
  );
};
`;const ee=()=>{const[o,r]=s.useState(""),n=i=>{r(i.target.value)};return e.jsx(p,{children:e.jsxs(t,{id:"first-name",children:[e.jsx(t.Label,{children:"First Name"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:d,value:o,onChange:n})})]})})};ee.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const CustomId = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField id="first-name">
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const Ue=F({flexDirection:"column",gap:ue.subtract(g.lg,g.xs),padding:ue.subtract(Te,xe.xxs),borderRadius:Ee.sm}),re=()=>e.jsxs(p,{cs:Ue,children:[e.jsxs(t,{grow:!0,children:[e.jsx(t.Label,{children:"First Name"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:d})})]}),e.jsxs(t,{isRequired:!0,error:"caution",grow:!0,children:[e.jsx(t.Label,{children:"Email"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:d}),e.jsx(t.Hint,{children:"Hint text for your input"})]})]}),e.jsxs(t,{grow:!0,children:[e.jsx(t.Label,{children:"Text Area Label"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:Re})})]}),e.jsxs(t,{error:"error",grow:!0,children:[e.jsx(t.Label,{children:"Choose a Crust"}),e.jsxs(b,{items:["Pizza","Cheeseburger","Fries"],children:[e.jsx(t.Input,{as:b.Input}),e.jsx(b.Popper,{children:e.jsx(b.Card,{children:e.jsx(b.List,{children:o=>e.jsx(b.Item,{children:o})})})})]})]}),e.jsxs(t,{as:"fieldset",isRequired:!0,error:"error",orientation:"horizontalStart",grow:!0,children:[e.jsx(t.Label,{as:"legend",children:"Radio Group Legend"}),e.jsxs(t.Field,{children:[e.jsxs(t.Input,{as:u,children:[e.jsx(u.RadioButton,{value:"deep-dish",children:"Deep dish"}),e.jsx(u.RadioButton,{value:"thin",children:"Thin"}),e.jsx(u.RadioButton,{value:"gluten-free",children:"Gluten free"}),e.jsx(u.RadioButton,{value:"cauliflower",children:"Cauliflower"}),e.jsx(u.RadioButton,{value:"butter",children:"Butter - the best thing to put on bread"})]}),e.jsx(t.Hint,{children:"Error Message"})]})]}),e.jsxs(t,{as:"fieldset",grow:!0,children:[e.jsx(t.Label,{as:"legend",children:"Checkbox Legend"}),e.jsx(t.Input,{checked:!0,as:f,label:"Checkbox Label"}),e.jsx(t.Input,{checked:!1,as:f,label:"Thin Crust"}),e.jsx(t.Input,{checked:!1,as:f,label:"Extra Cheese"})]}),e.jsxs(a,{error:"error",orientation:"horizontalStart",grow:!0,children:[e.jsx(a.Label,{children:"Choose Your Crust"}),e.jsx(a.Field,{children:e.jsxs(a.List,{as:u,children:[e.jsx(a.Input,{as:u.RadioButton,value:"thin-crust",children:"Thin Crust"}),e.jsx(a.Input,{as:u.RadioButton,value:"hand-tossed",children:"Hand Tossed"}),e.jsx(a.Input,{as:u.RadioButton,value:"deep-dish",children:"Deep Dish"}),e.jsx(a.Input,{as:u.RadioButton,value:"cauliflower",children:"Cauliflower"})]})})]}),e.jsxs(a,{grow:!0,children:[e.jsx(a.Label,{children:"Checkbox Legend"}),e.jsx(t.Field,{children:e.jsxs(a.List,{children:[e.jsx(a.Input,{checked:!0,as:f,label:"Checkbox Label"}),e.jsx(a.Input,{checked:!1,as:f,label:"Thin Crust"}),e.jsx(a.Input,{checked:!1,as:f,label:"Extra Cheese"})]})})]}),e.jsxs(t,{orientation:"horizontalStart",grow:!0,children:[e.jsx(t.Label,{children:"Switch Label"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:Le})})]})]});re.__RAW__=`import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField, FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {Switch} from '@workday/canvas-kit-react/switch';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
  gap: calc.subtract(system.gap.lg, system.gap.xs),
  padding: calc.subtract(base.size500, system.padding.xxs),
  borderRadius: system.shape.sm,
});

export const AllFields = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <FormField grow>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} />
        </FormField.Field>
      </FormField>

      <FormField isRequired={true} error="caution" grow>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} />
          <FormField.Hint>Hint text for your input</FormField.Hint>
        </FormField.Field>
      </FormField>
      <FormField grow>
        <FormField.Label>Text Area Label</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextArea} />
        </FormField.Field>
      </FormField>
      <FormField error="error" grow>
        <FormField.Label>Choose a Crust</FormField.Label>
        <Select items={['Pizza', 'Cheeseburger', 'Fries']}>
          <FormField.Input as={Select.Input} />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField>
      <FormField as="fieldset" isRequired={true} error={'error'} orientation="horizontalStart" grow>
        <FormField.Label as="legend">Radio Group Legend</FormField.Label>
        <FormField.Field>
          <FormField.Input as={RadioGroup}>
            <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="gluten-free">Gluten free</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
            <RadioGroup.RadioButton value="butter">
              Butter - the best thing to put on bread
            </RadioGroup.RadioButton>
          </FormField.Input>
          <FormField.Hint>Error Message</FormField.Hint>
        </FormField.Field>
      </FormField>
      <FormField as="fieldset" grow>
        <FormField.Label as="legend">Checkbox Legend</FormField.Label>
        <FormField.Input checked={true} as={Checkbox} label="Checkbox Label" />
        <FormField.Input checked={false} as={Checkbox} label="Thin Crust" />
        <FormField.Input checked={false} as={Checkbox} label="Extra Cheese" />
      </FormField>
      <FormFieldGroup error="error" orientation="horizontalStart" grow>
        <FormFieldGroup.Label>Choose Your Crust</FormFieldGroup.Label>
        <FormFieldGroup.Field>
          <FormFieldGroup.List as={RadioGroup}>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin-crust">
              Thin Crust
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="hand-tossed">
              Hand Tossed
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
              Deep Dish
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
              Cauliflower
            </FormFieldGroup.Input>
          </FormFieldGroup.List>
        </FormFieldGroup.Field>
      </FormFieldGroup>
      <FormFieldGroup grow>
        <FormFieldGroup.Label>Checkbox Legend</FormFieldGroup.Label>
        <FormField.Field>
          <FormFieldGroup.List>
            <FormFieldGroup.Input checked={true} as={Checkbox} label="Checkbox Label" />
            <FormFieldGroup.Input checked={false} as={Checkbox} label="Thin Crust" />
            <FormFieldGroup.Input checked={false} as={Checkbox} label="Extra Cheese" />
          </FormFieldGroup.List>
        </FormField.Field>
      </FormFieldGroup>

      <FormField orientation="horizontalStart" grow>
        <FormField.Label>Switch Label</FormField.Label>
        <FormField.Field>
          <FormField.Input as={Switch} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const te=()=>{const[o,r]=s.useState(""),n=i=>{r(i.target.value)};return e.jsx(p,{children:e.jsxs(t,{orientation:"horizontalStart",children:[e.jsx(t.Label,{children:"First Name"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:d,value:o,onChange:n}),e.jsx(t.Hint,{children:"Cannot contain numbers"})]})]})})};te.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Hint = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField orientation="horizontalStart">
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
          <FormField.Hint>Cannot contain numbers</FormField.Hint>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const oe=()=>{const[o,r]=s.useState(""),n=i=>{r(i.target.value)};return e.jsx(p,{children:e.jsxs(t,{grow:!0,children:[e.jsx(t.Label,{children:"First Name"}),e.jsx(t.Input,{as:d,value:o,onChange:n})]})})};oe.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField grow>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField>
    </Flex>
  );
};
`;const Oe=F({paddingBlockStart:xe.xs}),ne=()=>{const[o,r]=s.useState(""),n=m=>{r(m.target.value)},i={canvas:{palette:{common:{focusOutline:ce(He)},error:{main:ce(Ge)}}}};return e.jsx(Pe,{theme:i,children:e.jsxs(t,{error:o?void 0:"error",isRequired:!0,orientation:"vertical",children:[e.jsx(t.Label,{children:"Email"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:d,onChange:n,value:o}),e.jsx(t.Hint,{cs:Oe,children:!o&&"Please enter an email."})]})]})})};ne.__RAW__=`import React from 'react';

import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const formFieldHintStyles = createStyles({
  paddingBlockStart: system.padding.xs,
});

export const ThemedError = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        common: {
          focusOutline: cssVar(base.green600),
        },
        error: {
          main: cssVar(base.magenta700),
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <FormField error={!value ? 'error' : undefined} isRequired={true} orientation="vertical">
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} onChange={handleChange} value={value} />
          <FormField.Hint cs={formFieldHintStyles}>
            {!value && 'Please enter an email.'}
          </FormField.Hint>
        </FormField.Field>
      </FormField>
    </CanvasProvider>
  );
};
`;const Ke=F({margin:`0 ${Me(12)}`}),Xe=F({display:"inline-flex",gap:g.sm}),Je=[{id:1,label:"Pepperoni",checked:!1},{id:2,label:"Cheese",checked:!1},{id:3,label:"Pineapple",checked:!1},{id:4,label:"Mushrooms",checked:!1}],me=F({position:"absolute",right:0}),ie=()=>{const[o,r]=s.useState(Je),[n,i]=s.useState(void 0),[m,x]=s.useState(void 0),[P,V]=s.useState(!1),[y,ae]=s.useState(""),[se,le]=s.useState({toppings:[],crust:""}),be=l=>{n&&i(void 0),r(o.map(h=>h.id===l?{...h,checked:!h.checked}:h))},ge=l=>{m&&x(void 0);const h=l.currentTarget;h instanceof HTMLInputElement&&ae(h.value)},je=l=>{l.preventDefault();const h=!y&&o.some(j=>!j.checked)?"error":void 0,de=o.every(j=>!j.checked)?"error":void 0;x(h),i(de),!de&&!h&&o.some(j=>j.checked)&&y&&V(!0),le({toppings:o,crust:y})};s.useEffect(()=>{const l=setTimeout(()=>{P&&V(!1)},3e3);return()=>clearTimeout(l)},[P]);const ve=()=>{le({toppings:[],crust:""}),i(void 0),ae(""),x(""),V(!1),r(o.map(l=>({...l,checked:!1})))};return e.jsxs("div",{children:[e.jsx("h3",{children:"Choose your pizza options"}),e.jsx(Be,{role:"alert",children:e.jsxs("div",{style:{display:"flex",gap:"40px"},children:[n||m?e.jsx(k,{isSticky:!0,hasError:!0,className:me,children:e.jsx(k.Label,{children:n&&m?"At least one topping and crust selection is required":n?"You must choose at least one topping":m?"You must choose a crust":""})}):null,P&&e.jsx(k,{isSticky:!0,className:me,children:e.jsx(k.Label,{children:"You've successfully submitted your pizza options."})})]})}),e.jsxs("form",{className:Ke,onSubmit:je,children:[e.jsxs(a,{error:n,isRequired:!0,children:[e.jsx(a.Label,{children:"Choose Your Toppings"}),e.jsx(a.List,{children:o.map(l=>e.jsx(a.Input,{onChange:()=>be(l.id),checked:l.checked,value:l.label,as:f,disabled:l.label==="Pineapple"?!0:void 0,label:l.label},l.id))}),e.jsx(a.Hint,{children:n==="error"&&"Error: You must choose one topping"})]}),e.jsxs(a,{error:m,isRequired:!0,children:[e.jsx(a.Label,{children:"Choose Your Crust"}),e.jsxs(a.Field,{children:[e.jsxs(a.List,{as:u,onChange:ge,value:y,name:"crust",children:[e.jsx(a.Input,{as:u.RadioButton,value:"thin-crust",children:"Thin Crust"}),e.jsx(a.Input,{as:u.RadioButton,value:"hand-tossed",children:"Hand Tossed"}),e.jsx(a.Input,{as:u.RadioButton,value:"deep-dish",children:"Deep Dish"}),e.jsx(a.Input,{as:u.RadioButton,value:"cauliflower",children:"Cauliflower"})]}),e.jsx(a.Hint,{children:m==="error"?"Error: You must choose a crust":null})]})]}),e.jsxs("div",{className:Xe,children:[e.jsx(_e,{type:"submit",children:"Submit Your Choices"}),e.jsx(fe,{onClick:()=>ve(),children:"Reset Form"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:["Selected Toppings:"," ",!n&&se.toppings.map(l=>l.checked?`${l.label} `:null)]}),e.jsxs("div",{children:["Selected Crust: ",se.crust]})]})]})};ie.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Banner} from '@workday/canvas-kit-react/banner';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  margin: \`0 \${px2rem(12)}\`,
});

const formButtonStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.sm,
});

const toppings = [
  {
    id: 1,
    label: 'Pepperoni',
    checked: false,
  },
  {
    id: 2,
    label: 'Cheese',
    checked: false,
  },
  {
    id: 3,
    label: 'Pineapple',
    checked: false,
  },
  {
    id: 4,
    label: 'Mushrooms',
    checked: false,
  },
];

const bannerStyles = createStyles({
  position: 'absolute',
  right: 0,
});

export const GroupedInputs = () => {
  const [toppingsState, setToppingsState] = React.useState(toppings);
  const [error, setError] = React.useState(undefined);
  const [radioError, setRadioError] = React.useState(undefined);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const [value, setValue] = React.useState<string>('');
  const [formData, setFormData] = React.useState({
    toppings: [],
    crust: '',
  });
  const handleCheckboxCheck = id => {
    if (error) {
      setError(undefined);
    }
    setToppingsState(
      toppingsState.map(item => (item.id === id ? {...item, checked: !item.checked} : item))
    );
  };

  const handleRadioChange = (e: React.ChangeEvent) => {
    if (radioError) {
      setRadioError(undefined);
    }
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const radioError = !value && toppingsState.some(item => !item.checked) ? 'error' : undefined;
    const error = toppingsState.every(item => !item.checked) ? 'error' : undefined;

    setRadioError(radioError);
    setError(error);
    if (!error && !radioError && toppingsState.some(item => item.checked) && value) {
      setShowSuccess(true);
    }
    setFormData({
      toppings: toppingsState,
      crust: value,
    });
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (showSuccess) {
        setShowSuccess(false);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showSuccess]);

  const handleReset = () => {
    setFormData({toppings: [], crust: ''});
    setError(undefined);
    setValue('');
    setRadioError('');
    setShowSuccess(false);
    setToppingsState(
      toppingsState.map(item => {
        return {...item, checked: false};
      })
    );
  };

  return (
    <div>
      <h3>Choose your pizza options</h3>
      <AriaLiveRegion role="alert">
        <div style={{display: 'flex', gap: '40px'}}>
          {error || radioError ? (
            <Banner isSticky hasError className={bannerStyles}>
              <Banner.Label>
                {error && radioError
                  ? 'At least one topping and crust selection is required'
                  : error
                    ? 'You must choose at least one topping'
                    : radioError
                      ? 'You must choose a crust'
                      : ''}
              </Banner.Label>
            </Banner>
          ) : null}
          {showSuccess && (
            <Banner isSticky className={bannerStyles}>
              <Banner.Label>You've successfully submitted your pizza options.</Banner.Label>
            </Banner>
          )}
        </div>
      </AriaLiveRegion>

      <form className={formStyles} onSubmit={handleSubmit}>
        <FormFieldGroup error={error} isRequired>
          <FormFieldGroup.Label>Choose Your Toppings</FormFieldGroup.Label>
          <FormFieldGroup.List>
            {toppingsState.map(item => {
              return (
                <FormFieldGroup.Input
                  key={item.id}
                  onChange={() => handleCheckboxCheck(item.id)}
                  checked={item.checked}
                  value={item.label}
                  as={Checkbox}
                  disabled={item.label === 'Pineapple' ? true : undefined}
                  label={item.label}
                />
              );
            })}
          </FormFieldGroup.List>
          <FormFieldGroup.Hint>
            {error === 'error' && 'Error: You must choose one topping'}
          </FormFieldGroup.Hint>
        </FormFieldGroup>
        <FormFieldGroup error={radioError} isRequired>
          <FormFieldGroup.Label>Choose Your Crust</FormFieldGroup.Label>
          <FormFieldGroup.Field>
            <FormFieldGroup.List
              as={RadioGroup}
              onChange={handleRadioChange}
              value={value}
              name="crust"
            >
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin-crust">
                Thin Crust
              </FormFieldGroup.Input>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="hand-tossed">
                Hand Tossed
              </FormFieldGroup.Input>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
                Deep Dish
              </FormFieldGroup.Input>
              <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
                Cauliflower
              </FormFieldGroup.Input>
            </FormFieldGroup.List>
            <FormFieldGroup.Hint>
              {radioError === 'error' ? 'Error: You must choose a crust' : null}
            </FormFieldGroup.Hint>
          </FormFieldGroup.Field>
        </FormFieldGroup>
        <div className={formButtonStyles}>
          <PrimaryButton type="submit">Submit Your Choices</PrimaryButton>
          <SecondaryButton onClick={() => handleReset()}>Reset Form</SecondaryButton>
        </div>
      </form>
      <div>
        <div>
          Selected Toppings:{' '}
          {!error && formData.toppings.map(item => (item.checked ? \`\${item.label} \` : null))}
        </div>
        <div>Selected Crust: {formData.crust}</div>
      </div>
    </div>
  );
};
`;function pe(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...he(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(ye,{of:Ze}),`
`,e.jsx(r.h1,{id:"canvas-kit-form-field",children:"Canvas Kit Form Field"}),`
`,e.jsxs(r.p,{children:[`FormField allows users to wrap input components to make them accessible. You can customize the field
by passing in `,e.jsx(r.code,{children:"TextInput"}),", ",e.jsx(r.code,{children:"Select"}),", ",e.jsx(r.code,{children:"RadioGroup"})," and other form elements to ",e.jsx(r.code,{children:"FormField.Input"}),"."]}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic",children:"Basic"}),`
`,e.jsxs(r.p,{children:[`Form Field should be used in tandem with most Canvas Kit input components to ensure they meet
accessibility standards. The orientation of the label by default is `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(c,{code:$}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"error"}),` prop of the Form Field or define it in the model to indicate it has an error.
`,e.jsx(r.code,{children:"error"})," accepts the following values:"]}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:'"error" | "caution" | undefined'})}),`
`,e.jsx(r.h3,{id:"caution",children:"Caution"}),`
`,e.jsx(r.p,{children:"Use the caution state when a value is valid but there is additional information."}),`
`,e.jsx(c,{code:Y}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),": Caution state ",e.jsx(r.strong,{children:"will not"})," include the ",e.jsx(r.code,{children:"aria-invalid"}),` attribute on the
input for screen readers. Use error states when values are not valid.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"error",children:"Error"}),`
`,e.jsx(r.p,{children:"Use the error state when the value is no longer valid."}),`
`,e.jsx(c,{code:W}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),`: Error states include visual color changes to the input border and
`,e.jsx(r.strong,{children:"require"}),` supplemental "error" text for colorblind users to distinguish between fields in an
error state from fields with standard hint text. Read more about
`,e.jsx(r.a,{href:"https://www.w3.org/WAI/WCAG22/Techniques/failures/F81",rel:"nofollow",children:"Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only"})]}),`
`]}),`
`,e.jsx(r.h3,{id:"hint",children:"Hint"}),`
`,e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"FormField.Hint"})," to display a short message below the input component and ",e.jsx(r.code,{children:"FormField.Field"}),` to
ensure proper alignment.`]}),`
`,e.jsx(c,{code:te}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),`: Hints are automatically associated to the input field with the
`,e.jsx(r.code,{children:"aria-describedby"}),` attribute. This ensures that screen readers can automatically announce the hint
text to users when the input field is focused.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"})," prop of ",e.jsx(r.code,{children:"FormField.Input"})," to prevent users from interacting with it."]}),`
`,e.jsx(c,{code:U}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),`: Disabled form elements are exempt from
`,e.jsx(r.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",rel:"nofollow",children:"WCAG minimum contrast guidelines"}),`.
Despite this exemption, disabled fields are more difficult for low vision and colorblind users to
perceive and may harm the usability of the form. Consider using text elements instead, or
read-only fields if users cannot modify data.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"label-position",children:"Label Position"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),`. If you want your label to be
horizontal, you have two options: `,e.jsx(r.code,{children:"horizontalStart"})," and ",e.jsx(r.code,{children:"horizontalEnd"}),"."]}),`
`,e.jsxs(r.p,{children:[`If you want the position of the label at the start of the container, set orientation prop to
`,e.jsx(r.code,{children:"horizontalStart"}),"."]}),`
`,e.jsx(c,{code:K}),`
`,e.jsxs(r.p,{children:[`If you want the position of the label at the end of the container, set orientation prop to
`,e.jsx(r.code,{children:"horizontalEnd"}),"."]}),`
`,e.jsx(c,{code:X}),`
`,e.jsx(r.h3,{id:"grow",children:"Grow"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"grow"})," prop of the Form Field to ",e.jsx(r.code,{children:"true"}),` to configure it (including the wrapped input
component) to expand to the width of its container.`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Note: This Prop is deprecated and will be removed in a future major version."})}),`
`,e.jsx(c,{code:oe}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:["If you need full customization you can use the ",e.jsx(r.code,{children:"FormField"}),` behavior hooks to build your own
solution. It is also easy it work with custom components or third party libraries and get the CKR
accessibility guarantees by using the `,e.jsx(r.code,{children:"as"})," prop."]}),`
`,e.jsx(c,{code:J}),`
`,e.jsx(r.h3,{id:"required",children:"Required"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"isRequired"})," prop of the Form Field to ",e.jsx(r.code,{children:"true"}),` to indicate that the field is required. Labels
for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(c,{code:Q}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),": The HTML ",e.jsx(r.code,{children:"required"}),` attribute will be added to the input field and
announced by screen readers. Consider adding a note at the top of your form indicating that fields
marked with an asterisk (*) are required. This provides context for all users.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"grouped-inputs",children:"Grouped Inputs"}),`
`,e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"FormFieldGroup"}),` when you have a group of inputs that need to be associated to one another, like
`,e.jsx(r.code,{children:"RadioGroup"})," or a group of ",e.jsx(r.code,{children:"Checkbox"}),"'s. ",e.jsx(r.code,{children:"FormFieldGroup"})," renders a ",e.jsx(r.code,{children:"fieldset"}),` element and
`,e.jsx(r.code,{children:"FormFieldGroup.Label"})," renders a ",e.jsx(r.code,{children:"legend"}),` element. These elements will allow screen readers to
automatically announce the legend's context when focusing on the inputs in the group.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"FormFieldGroup"})," supports the same props of ",e.jsx(r.code,{children:"FormField"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"error"}),": ",e.jsx(r.code,{children:'"caution" | "error"'})," Defines the error around the whole group of inputs."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"orientation"}),": ",e.jsx(r.code,{children:'"horizontal" | "vertical"'})," Defines the legend placement."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"isRequired"}),": ",e.jsx(r.code,{children:"true"})," Defines if a group like RadioGroup is required."]}),`
`]}),`
`,e.jsx(c,{code:ie}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),": In addition to radio button and checkbox groups, ",e.jsx(r.code,{children:"FormFieldGroup"}),` can be
useful in any situation where the form needs to have multiple sets of identical input fields. For
example, a form with identical fields for a Shipping address and a Billing address. The legend
provides critical context for screen reader users in these situations.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"custom",children:"Custom"}),`
`,e.jsxs(r.p,{children:["If you need full customization you can use the ",e.jsx(r.code,{children:"FormField"}),` behavior hooks to build your own
solution. It is also easy it work with custom components or third party libraries and get the CKR
accessibility guarantees by using the `,e.jsx(r.code,{children:"as"})," prop."]}),`
`,e.jsx(c,{code:Z}),`
`,e.jsx(r.h3,{id:"custom-id",children:"Custom id"}),`
`,e.jsxs(r.p,{children:["Form Field will automatically generate an HTML ",e.jsx(r.code,{children:"id"}),` for its input element to link it to the
correponding label. Alternatively, you may set the `,e.jsx(r.code,{children:"id"}),` prop of the Form Field to specify a custom
`,e.jsx(r.code,{children:"id"})," for the input element. The ",e.jsx(r.code,{children:"id"})," will be appended by ",e.jsx(r.code,{children:"input-${your-unique-id}"}),"."]}),`
`,e.jsx(c,{code:ee}),`
`,e.jsx(r.h3,{id:"all-fields",children:"All Fields"}),`
`,e.jsxs(r.p,{children:["Form Field should allow you to use it with all ",e.jsx(r.code,{children:"inputs"})," including ",e.jsx(r.code,{children:"Select"}),", ",e.jsx(r.code,{children:"TextInput"}),", ",e.jsx(r.code,{children:"Checkbox"}),`,
`,e.jsx(r.code,{children:"TextArea"}),", ",e.jsx(r.code,{children:"Switch"}),", and ",e.jsx(r.code,{children:"RadioGroup"}),"."]}),`
`,e.jsx(c,{code:re}),`
`,e.jsx(r.h3,{id:"hidden-label",children:"Hidden Label"}),`
`,e.jsxs(r.p,{children:[`In cases where you want to hide the label while still meeting accessibility standards, you can add
`,e.jsx(r.code,{children:"isHidden"})," on the ",e.jsx(r.code,{children:"<FormField.Label/>"}),". This prop will visually hide the label."]}),`
`,e.jsx(c,{code:O}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),`: Hidden labels are typically not recommended. In this example, a
universally recognizable icon like a magnifying glass signaling "search" may be a suitable
alternative to visible text labels.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"themed-errors",children:"Themed Errors"}),`
`,e.jsxs(r.p,{children:["You can theme your error rings by wrapping an input in a ",e.jsx(r.code,{children:"CanvasProvider"}),` and defining
`,e.jsx(r.code,{children:"focusOutline"})," and ",e.jsx(r.code,{children:"error"})," properties on the ",e.jsx(r.code,{children:"theme"}),"."]}),`
`,e.jsx(c,{code:ne}),`
`,e.jsx(r.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(r.p,{children:["Form Field and its subcomponents support custom styling via the ",e.jsx(r.code,{children:"cs"}),` prop. For more information,
check our
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"FormField"}),` provides essential accessibility features to ensure form inputs are properly labeled and
described for all users, including those using assistive technologies. This section covers both the
technical implementation and best practices for creating accessible forms.`]}),`
`,e.jsx(r.h3,{id:"label-association",children:"Label Association"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"FormField"})," adds a ",e.jsx(r.code,{children:"for"})," attribute to the ",e.jsx(r.code,{children:"FormField.Label"})," (",e.jsx(r.code,{children:"<label>"}),` element) element that
matches the `,e.jsx(r.code,{children:"id"})," attribute of the ",e.jsx(r.code,{children:"FormField.Input"})," which is usually a ",e.jsx(r.code,{children:"input"}),` element. This both
labels the input for screen readers and other assistive technology as well as will focus on the
input when the user clicks on the label. If your form field input component is more complicated, the
`,e.jsx(r.code,{children:"FormField"})," will also add an ",e.jsx(r.code,{children:"id"})," to the ",e.jsx(r.code,{children:"FormField.Label"})," and an ",e.jsx(r.code,{children:"aria-labelledby"}),` to the
`,e.jsx(r.code,{children:"FormField.Input"})," component. You can then forward the ",e.jsx(r.code,{children:"aria-labelledby"}),` to whatever elements you
need for the proper accessibility.`]}),`
`,e.jsx(r.p,{children:"For example, the DOM will look something like this:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<div>
  <label id="label-abc" for="input-abc">First Name</label>
  <input id="input-abc" aria-labelledby="label-abc" />
</div>
`})}),`
`,e.jsxs(r.p,{children:["Some components, like ",e.jsx(r.code,{children:"MultiSelect"}),", have an additional ",e.jsx(r.code,{children:"role=listbox"}),` element that also needs to
link to the `,e.jsx(r.code,{children:"label"})," element. The resulting DOM will look something like:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<div>
  <label id="label-abc" for="input-abc">States you've lived in</label>
  <input id="input-abc" aria-labelledby="label-abc" role="combobox" ... />
  <ul role="listbox" aria-labelledby="label-abc">
    <li>Texas</li>
    <li>California</li>
  </ul>
</div>
`})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"MultiSelect"})," component gets the ",e.jsx(r.code,{children:"aria-labelledby"})," from the ",e.jsx(r.code,{children:"FormField.Input"}),` and forwards it to
both the `,e.jsx(r.code,{children:"input[role=combobox]"})," element and the ",e.jsx(r.code,{children:"ul[role=listbox]"}),` element so the screen reader
knows the label for both is "States you've lived in".`]}),`
`,e.jsx(r.h3,{id:"label-text-best-practices",children:"Label Text Best Practices"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Be Clear and Concise"}),": Labels should clearly describe the purpose of the input field."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Use Visible Labels Instead of Only Placeholders"}),`: Always provide a persistent and accessible
label with `,e.jsx(r.code,{children:"FormField.Label"}),`. Do not rely solely on placeholder text, as it can disappear while
typing and may not be accessible to assistive technologies. Use the `,e.jsx(r.code,{children:"isHidden"}),` prop on
`,e.jsx(r.code,{children:"FormField.Label"})," if a hidden label is required for visual design."]}),`
`]}),`
`,e.jsx(r.h3,{id:"screen-reader-experience",children:"Screen Reader Experience"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The label is announced when the input receives focus."}),`
`,e.jsx(r.li,{children:"Required, disabled, and invalid statuses are announced automatically."}),`
`,e.jsx(r.li,{children:"Help text and error messages are announced automatically when focused."}),`
`,e.jsxs(r.li,{children:["For grouped inputs, the group label (",e.jsx(r.code,{children:"legend"}),") is announced automatically when focused."]}),`
`]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(ke,{name:"FormField"}),`
`,e.jsx(r.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(we,{file:"./cypress/component/FormField.spec.tsx",initialSpecs:{type:"file",name:"FormField",children:[{type:"describe",name:"Form Field",children:[{type:"describe",name:"given the Basic example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:'should add an "id" to the input and point it to the "for" attribute of the label'},{type:"it",name:'should add an "aria-labelledby" to the input and point it to the "id" attribute of the label'},{type:"it",name:"should link the input to the label name"},{type:"describe",name:"when clicking on the label",children:[{type:"it",name:"should focus the input"}]}]},{type:"describe",name:"given the 'Caution' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should connect the input with the hint text"}]},{type:"describe",name:"given the 'Error' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should connect the input with the hint text"}]},{type:"describe",name:"given the Required story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:'the input should have a "required" attribute'}]}]}]},name:"FormField"})]})}function Qe(o={}){const{wrapper:r}={...he(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(pe,{...o})}):pe(o)}const Ze={title:"Components/Inputs/Form Field",component:t,tags:["autodocs"],parameters:{docs:{page:Qe}}},w={render:$},C={render:Y},S={render:W},I={render:U},R={render:K},L={render:X},E={render:J},T={render:Q},G={render:Z},H={render:ee},B={render:re},_={render:te},M={render:oe},z={render:ne},A={render:ie},q={render:O};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: LabelPositionHorizontalStartExample
}`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: LabelPositionHorizontalEndExample
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...T.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: CustomExample
}`,...G.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: CustomIdExample
}`,...H.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: AllFieldsExample
}`,...B.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: HintExample
}`,..._.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: GrowExample
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: ThemedErrorExample
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: GroupedInputsExample
}`,...A.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: HiddenLabelExample
}`,...q.parameters?.docs?.source}}};const Dt=["Basic","Caution","Error","Disabled","LabelPositionHorizontalStart","LabelPositionHorizontalEnd","RefForwarding","Required","Custom","CustomId","AllFields","Hint","Grow","ThemedError","GroupedInputs","HiddenLabel"];export{B as AllFields,w as Basic,C as Caution,G as Custom,H as CustomId,I as Disabled,S as Error,A as GroupedInputs,M as Grow,q as HiddenLabel,_ as Hint,L as LabelPositionHorizontalEnd,R as LabelPositionHorizontalStart,E as RefForwarding,T as Required,z as ThemedError,Dt as __namedExportsOrder,Ze as default};
