import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as M}from"./index-3YbjYt95.js";import{ae as A}from"./index-BuzUoXuP.js";import{E as l,c as q}from"./union-B_YdO4Rn.js";import{e as d}from"./index-IfJi-UCQ.js";import{F as o}from"./FormFieldGroup-CUquB9xy.js";import{R as t,S as H}from"./RadioGroup-CT-CdqlQ.js";import{F as u}from"./Flex-C02s6o63.js";import{c}from"./cs-rfTTo7Bg.js";import{p as C}from"./px2rem-C0KbprIx.js";import{B as W}from"./Box-mcEjmPIp.js";import{c as b,p as $,g as O}from"./index-5dfzm_kn.js";import{P as N}from"./PrimaryButton-0h7yCCye.js";import"./iframe-CqQaqg02.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BHdFM4gJ.js";import"./Svg-BweBcPJP.js";import"./components-BmHbwbhb.js";import"./StatusIndicator-NDpFz6Y6.js";import"./Text-BmRVJVDA.js";import"./mergeStyles-QRcURb9q.js";import"./flex-YMVbti20.js";import"./grid-WMWBj9Hm.js";import"./Card-Do4F3jna.js";import"./ExternalHyperlink-CK2LQ_ab.js";import"./Hyperlink-Dk9GtM2m.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-DgWyxuYl.js";import"./BaseButton-CnjstBv9.js";import"./Button-Bi-j31bu.js";import"./lerna-MRK8lqbN.js";import"./CanvasProvider-DrUGAeqB.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-hfy8Ol31.js";import"./useTooltip-P-OrPrqM.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-aGu2neH7.js";import"./Popper-CkRntUYs.js";import"./TertiaryButton-fEWojvdf.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BCUDE-Iz.js";import"./ColorPicker-ZJsE9F3r.js";import"./ColorInput-Bnr3B3QM.js";import"./check-small-C7Z-gSGs.js";import"./index-N3xz2Kqy.js";import"./TextInput-VSHHKRMb.js";import"./types-DXdjelYI.js";import"./FormField-CJii8RnW.js";import"./check-Bvurkvei.js";import"./Expandable-DN7QfFSE.js";import"./Avatar-DdwObW3m.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-Cje_mGxc.js";import"./Popup-1ipA4aUs.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-CHZojcSk.js";import"./useInitialFocus-DYhXH2-D.js";import"./useReturnFocus-DND-TDO8.js";import"./useFocusRedirect-D10zBWnf.js";import"./Breadcrumbs-DFy0zo5O.js";import"./useOverflowListTarget-CN1RWLjZ.js";import"./useListItemSelect-E9NNzeRO.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-B017jkPL.js";import"./OverflowTooltip-CFPJJQRu.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-Dwt5GicB.js";const U=c({width:C(200)}),w=()=>{const[a,r]=d.useState("deep-dish"),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsxs(u,{cs:{flexDirection:"column"},children:[e.jsxs(o,{children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsx(o.Field,{children:e.jsxs(o.List,{cs:U,as:t,name:"pizza-crust",onChange:i,value:a,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"}),e.jsx(o.Input,{as:t.RadioButton,value:"custom",children:"Butter - the best thing to put on bread"})]})})]}),"Value selected: ",a]})};w.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const formfieldInputStyles = createStyles({
  width: px2rem(200),
});

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex cs={{flexDirection: 'column'}}>
      <FormFieldGroup>
        <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
        <FormFieldGroup.Field>
          <FormFieldGroup.List
            cs={formfieldInputStyles}
            as={RadioGroup}
            name="pizza-crust"
            onChange={handleChange}
            value={value}
          >
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
              Deep dish
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
              Thin
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
              Gluten free
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
              Cauliflower
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="custom">
              Butter - the best thing to put on bread
            </FormFieldGroup.Input>
          </FormFieldGroup.List>
        </FormFieldGroup.Field>
      </FormFieldGroup>
      Value selected: {value}
    </Flex>
  );
};
`;const y=()=>{const[a,r]=d.useState("deep-dish"),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsxs(o,{error:"caution",id:"hint-alert",children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsxs(o.Field,{children:[e.jsxs(o.List,{as:t,name:"crust-alert",onChange:i,value:a,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]}),e.jsx(o.Hint,{children:"Deep dish is an extra $2.99."})]})]})};y.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Caution = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <FormFieldGroup error="caution" id="hint-alert">
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.List
          as={RadioGroup}
          name="crust-alert"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
        <FormFieldGroup.Hint>Deep dish is an extra $2.99.</FormFieldGroup.Hint>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
`;const L=()=>{const[a,r]=d.useState("deep-dish"),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsxs(o,{error:"error",children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsxs(o.Field,{children:[e.jsxs(o.List,{as:t,name:"crust-error",onChange:i,value:a,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]}),e.jsx(o.Hint,{children:"Deep dish is currently sold out."})]})]})};L.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Error = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <FormFieldGroup error="error">
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.List
          as={RadioGroup}
          name="crust-error"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
        <FormFieldGroup.Hint>Deep dish is currently sold out.</FormFieldGroup.Hint>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
`;const X={containerStyles:c({backgroundColor:b.surface.contrast.default,padding:$.md}),formFieldStyles:c({legend:{color:b.fg.inverse}})},B=()=>{const[a,r]=d.useState("deep-dish"),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsx(W,{cs:X.containerStyles,children:e.jsxs(t,{name:"crust-inverse",onChange:i,value:a,children:[e.jsx(t.RadioButton,{variant:"inverse",value:"deep-dish",children:"Deep dish"}),e.jsx(t.RadioButton,{variant:"inverse",value:"thin",children:"Thin"}),e.jsx(t.RadioButton,{variant:"inverse",value:"gluten-free",children:"Gluten free"}),e.jsx(t.RadioButton,{variant:"inverse",value:"cauliflower",children:"Cauliflower"})]})})};B.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  containerStyles: createStyles({
    backgroundColor: system.color.surface.contrast.default,
    padding: system.padding.md,
  }),
  formFieldStyles: createStyles({
    legend: {
      color: system.color.fg.inverse,
    },
  }),
};

export const Inverse = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Box cs={styleOverrides.containerStyles}>
      <RadioGroup name="crust-inverse" onChange={handleChange} value={value}>
        <RadioGroup.RadioButton variant="inverse" value="deep-dish">
          Deep dish
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton variant="inverse" value="thin">
          Thin
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton variant="inverse" value="gluten-free">
          Gluten free
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton variant="inverse" value="cauliflower">
          Cauliflower
        </RadioGroup.RadioButton>
      </RadioGroup>
    </Box>
  );
};
`;const k=()=>{const[a,r]=d.useState("deep-dish"),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsxs(o,{orientation:"horizontalStart",children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsx(o.Field,{children:e.jsxs(o.List,{as:t,name:"crust-label",onChange:i,value:a,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]})})]})};k.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const LabelPosition = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormFieldGroup orientation="horizontalStart">
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.List
          as={RadioGroup}
          name="crust-label"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
`;const S=()=>{const[a,r]=d.useState(0),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsxs(o,{children:[e.jsx(o.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(o.List,{as:t,name:"crust-no-value",onChange:i,value:a,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]})]})};S.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>(0);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormFieldGroup>
      <FormFieldGroup.Label as="legend">Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.List
        as={RadioGroup}
        name="crust-no-value"
        onChange={handleChange}
        value={value}
      >
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
          Deep dish
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
          Thin
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
          Gluten free
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
          Cauliflower
        </FormFieldGroup.Input>
      </FormFieldGroup.List>
    </FormFieldGroup>
  );
};
`;const T=()=>{const[a,r]=d.useState("deep-dish"),i=d.useRef(null),s=Y=>{const D=Y.currentTarget;D instanceof HTMLInputElement&&r(D.value)},n=()=>{i.current.click()};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsxs(o.List,{as:t,name:"crust-ref",onChange:s,value:a,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",ref:i,children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]})]}),e.jsx(N,{onClick:n,children:"Select Gluten Free"})]})};T.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const RefForwarding = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');
  const glutenFreeRef = React.useRef(null);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  const handleClick = () => {
    glutenFreeRef.current.click();
  };

  return (
    <>
      <FormFieldGroup>
        <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
        <FormFieldGroup.List as={RadioGroup} name="crust-ref" onChange={handleChange} value={value}>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free" ref={glutenFreeRef}>
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
      </FormFieldGroup>
      <PrimaryButton onClick={handleClick}>Select Gluten Free</PrimaryButton>
    </>
  );
};
`;const z=()=>{const[a,r]=d.useState("deep-dish"),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsxs(o,{children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsx(o.Field,{children:e.jsxs(o.List,{as:t,name:"crust-disabled",onChange:i,value:a,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,disabled:!0,value:"gluten-free",children:"Gluten free (sold out)"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]})})]})};z.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Disabled = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormFieldGroup>
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.List
          as={RadioGroup}
          name="crust-disabled"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} disabled value="gluten-free">
            Gluten free (sold out)
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
`;const E=()=>{const[a,r]=d.useState(""),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsxs(o,{isRequired:!0,children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsxs(o.List,{as:t,name:"crust-required",onChange:i,value:a,"aria-describedby":"choose-crust",children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]}),e.jsx(o.Hint,{children:"You must choose a crust"})]})};E.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Required = () => {
  const [value, setValue] = React.useState<string | number>('');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormFieldGroup isRequired={true}>
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.List
        as={RadioGroup}
        name="crust-required"
        onChange={handleChange}
        value={value}
        aria-describedby="choose-crust"
      >
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
          Deep dish
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
          Thin
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
          Gluten free
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
          Cauliflower
        </FormFieldGroup.Input>
      </FormFieldGroup.List>
      <FormFieldGroup.Hint>You must choose a crust</FormFieldGroup.Hint>
    </FormFieldGroup>
  );
};
`;const p={formfieldInputStyles:c({width:C(200)}),radioGroupLabelTextStyles:c({color:b.fg.default})},_=()=>{const[a,r]=d.useState("deep-dish"),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsxs(u,{cs:{flexDirection:"column"},children:[e.jsxs(o,{children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsx(o.Field,{children:e.jsxs(o.List,{as:t,name:"pizza-crust-custom",onChange:i,cs:p.formfieldInputStyles,value:a,children:[e.jsxs(t.Label,{children:[e.jsx(o.Input,{as:t.Label.Input,value:"deep-dish"}),e.jsx(t.Label.Text,{cs:p.radioGroupLabelTextStyles,children:"Deep dish"})]}),e.jsxs(t.Label,{children:[e.jsx(o.Input,{as:t.Label.Input,value:"gluten-free"}),e.jsx(t.Label.Text,{cs:p.radioGroupLabelTextStyles,children:"Gluten free"})]}),e.jsxs(t.Label,{children:[e.jsx(o.Input,{as:t.Label.Input,value:"cauliflower"}),e.jsx(t.Label.Text,{cs:p.radioGroupLabelTextStyles,children:"Cauliflower"})]})]})})]}),"Value selected: ",a]})};_.__RAW__=`import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  formfieldInputStyles: createStyles({
    width: px2rem(200),
  }),
  radioGroupLabelTextStyles: createStyles({
    color: system.color.fg.default,
  }),
};

export const Custom = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex cs={{flexDirection: 'column'}}>
      <FormFieldGroup>
        <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
        <FormFieldGroup.Field>
          <FormFieldGroup.List
            as={RadioGroup}
            name="pizza-crust-custom"
            onChange={handleChange}
            cs={styleOverrides.formfieldInputStyles}
            value={value}
          >
            <RadioGroup.Label>
              <FormFieldGroup.Input as={RadioGroup.Label.Input} value="deep-dish" />
              <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
                Deep dish
              </RadioGroup.Label.Text>
            </RadioGroup.Label>
            <RadioGroup.Label>
              <FormFieldGroup.Input as={RadioGroup.Label.Input} value="gluten-free" />
              <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
                Gluten free
              </RadioGroup.Label.Text>
            </RadioGroup.Label>
            <RadioGroup.Label>
              <FormFieldGroup.Input as={RadioGroup.Label.Input} value="cauliflower" />
              <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
                Cauliflower
              </RadioGroup.Label.Text>
            </RadioGroup.Label>
          </FormFieldGroup.List>
        </FormFieldGroup.Field>
      </FormFieldGroup>
      Value selected: {value}
    </Flex>
  );
};
`;const V=()=>{const[a,r]=d.useState("deep-dish"),i=s=>{const n=s.currentTarget;n instanceof HTMLInputElement&&r(n.value)};return e.jsxs(u,{cs:{flexDirection:"column"},children:[e.jsxs(o,{as:"fieldset",children:[e.jsx(o.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(u,{cs:{gap:O.xl},children:[e.jsxs(u,{as:"label",cs:{gap:C(12)},children:[e.jsx(o.Input,{as:H,onChange:i,value:"deep-dish",name:"pizza-crust-standalone",checked:a==="deep-dish"}),"Deep dish"]}),e.jsxs(u,{as:"label",cs:{gap:C(12)},children:[e.jsx(o.Input,{as:H,onChange:i,value:"gluten-free",checked:a==="gluten-free",name:"pizza-crust-standalone"}),"Gluten free"]})]})]}),"Value selected: ",a]})};V.__RAW__=`import React from 'react';

import {StyledRadioButton} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const StandaloneRadio = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex cs={{flexDirection: 'column'}}>
      <FormFieldGroup as="fieldset">
        <FormFieldGroup.Label as="legend">Choose Your Pizza Crust</FormFieldGroup.Label>
        <Flex cs={{gap: system.gap.xl}}>
          <Flex as="label" cs={{gap: px2rem(12)}}>
            <FormFieldGroup.Input
              as={StyledRadioButton}
              onChange={handleChange}
              value="deep-dish"
              name="pizza-crust-standalone"
              checked={value === 'deep-dish'}
            />
            Deep dish
          </Flex>
          <Flex as="label" cs={{gap: px2rem(12)}}>
            <FormFieldGroup.Input
              as={StyledRadioButton}
              onChange={handleChange}
              value="gluten-free"
              checked={value === 'gluten-free'}
              name="pizza-crust-standalone"
            />
            Gluten free
          </Flex>
        </Flex>
      </FormFieldGroup>
      Value selected: {value}
    </Flex>
  );
};
`;function P(a){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...M(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(A,{of:J}),`
`,e.jsx(r.h1,{id:"canvas-kit-radio",children:"Canvas Kit Radio"}),`
`,e.jsx(r.p,{children:"Radio Buttons allow a user to select one value from a predefined list of 7 or fewer options."}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://design.workday.com/components/inputs/radio-buttons",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-preview-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.p,{children:["Our radio component includes a ",e.jsx(r.code,{children:"RadioGroup"})," container and ",e.jsx(r.code,{children:"RadioGroup.RadioButton"}),`, which renders an
individual radio button. Nest related `,e.jsx(r.code,{children:"RadioGroup.RadioButton"})," buttons within a ",e.jsx(r.code,{children:"RadioGroup"}),` and
provide a `,e.jsx(r.code,{children:"name"})," prop to the ",e.jsx(r.code,{children:"RadioGroup"}),` to group the radio buttons together. Each
`,e.jsx(r.code,{children:"RadioGroup.Radio"})," must have a unique ",e.jsx(r.code,{children:"value"}),". This value is used in conjunction with the ",e.jsx(r.code,{children:"value"}),`
prop set on the `,e.jsx(r.code,{children:"RadioGroup"}),` to determine which radio button is selected. To tie it all together,
provide an `,e.jsx(r.code,{children:"onChange"})," handler to the ",e.jsx(r.code,{children:"RadioGroup"})," to track the selected value as it changes."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"RadioGroup"})," should be used in tandem with ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` where the
`,e.jsx(r.code,{children:"useFieldset"})," prop is set to ",e.jsx(r.code,{children:"true"})," to meet accessibility standards. This ensures the ",e.jsx(r.code,{children:"label"}),` text
from `,e.jsx(r.code,{children:"FormField"})," is attached to the ",e.jsx(r.code,{children:"RadioGroup"})," and read out as a group for voiceover."]}),`
`,e.jsx(l,{code:w}),`
`,e.jsxs(r.p,{children:["Our example uses ",e.jsx(r.a,{href:"(https://react.dev/learn/state-a-components-memory)",children:"React state"}),` to track the
value of the `,e.jsx(r.code,{children:"RadioGroup"}),"."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"RadioGroup"})," and ",e.jsx(r.code,{children:"RadioGroup.Radio"}),` support keyboard navigation through the proper use of WAI-ARIA
`,e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role#associated_wai-aria_roles_states_and_properties",rel:"nofollow",children:"properties"}),"."]}),`
`,e.jsx(r.h3,{id:"inverse",children:"Inverse"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"variant"})," prop of ",e.jsx(r.code,{children:"RadioGroup.RadioButton"})," to ",e.jsx(r.code,{children:"inverse"}),` to ensure proper contrast on dark
backgrounds.`]}),`
`,e.jsx(l,{code:B}),`
`,e.jsx(r.h3,{id:"radio-group-with-no-value",children:"Radio Group with No Value"}),`
`,e.jsxs(r.p,{children:["Omit the ",e.jsx(r.code,{children:"value"})," prop from ",e.jsx(r.code,{children:"RadioGroup"}),` to render the group with no selected
`,e.jsx(r.code,{children:"RadioGroup.RadioButton"}),"."]}),`
`,e.jsx(l,{code:S}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"RadioGroup.RadioButton"})," supports ",e.jsx(r.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`.
It will forward `,e.jsx(r.code,{children:"ref"})," to its underlying ",e.jsx(r.code,{children:'<input type="radio">'})," element."]}),`
`,e.jsx(l,{code:T}),`
`,e.jsx(r.h3,{id:"label-position",children:"Label Position"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(l,{code:k}),`
`,e.jsx(r.h3,{id:"required",children:"Required"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"required"})," prop of the wrapping ",e.jsx(r.code,{children:"FormField"})," to ",e.jsx(r.code,{children:"true"}),` to indicate that the field is
required. Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(l,{code:E}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"})," prop of ",e.jsx(r.code,{children:"RadioGroup.RadioButton"}),` to prevent users from interacting with it. Be
careful not to disable a pre-selected radio button as this will block keyboard access to the entire
`,e.jsx(r.code,{children:"RadioGroup"}),"."]}),`
`,e.jsx(l,{code:z}),`
`,e.jsx(r.h3,{id:"custom-radio-button",children:"Custom Radio Button"}),`
`,e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"RadioGroup.Label"})," instead of ",e.jsx(r.code,{children:"RadioGroup.RadioButton"}),` if you need direct access to the label
and the radio input. This will allow you to apply custom styling to the text and radio input.`]}),`
`,e.jsx(l,{code:_}),`
`,e.jsx(r.h3,{id:"standalone-radio-button",children:"Standalone Radio Button"}),`
`,e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"StyledRadioButton"})," when you want a styled radio button on its own without using ",e.jsx(r.code,{children:"RadioGroup"}),`.
You will need to handle behavior and accessibility.`]}),`
`,e.jsx(l,{code:V}),`
`,e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"RadioGroup.Label"}),` when you want more control styling the text and radio input but still want
some behavior handled for you.`]}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"error"})," prop of the wrapping ",e.jsx(r.code,{children:"FormField"})," to ",e.jsx(r.code,{children:'"caution"'}),` or
`,e.jsx(r.code,{children:'"error"'})," to set the ",e.jsx(r.code,{children:"RadioGroup"}),` to the alert or error state, respectively. You
will also need to set the `,e.jsx(r.code,{children:"hintId"})," and ",e.jsx(r.code,{children:"hintText"})," props on the ",e.jsx(r.code,{children:"FormField"}),` to meet accessibility
standards. You must set an `,e.jsx(r.code,{children:"aria-describedby"})," attribute on the ",e.jsx(r.code,{children:"RadioGroup"}),` element that matches the
value of `,e.jsx(r.code,{children:"hintId"})," set on the ",e.jsx(r.code,{children:"FormField"}),` element. These attributes ensure that the alert message is
associated to the `,e.jsx(r.code,{children:"RadioGroup"})," and read out by voiceover."]}),`
`,e.jsx(r.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(r.p,{children:"Use the alert state when a selection is valid but there is additional information."}),`
`,e.jsx(l,{code:y}),`
`,e.jsx(r.h4,{id:"error",children:"Error"}),`
`,e.jsx(r.p,{children:"Use the error state when the selection is no longer valid."}),`
`,e.jsx(l,{code:L}),`
`,e.jsx(r.h3,{id:"react-hook-form",children:"React Hook Form"}),`
`,e.jsxs(r.p,{children:["Using a form library like ",e.jsx(r.a,{href:"https://www.react-hook-form.com/",rel:"nofollow",children:"React Hook Form"}),` is a common use case.
Reference this `,e.jsx(r.a,{href:"https://codesandbox.io/s/radio-preview-with-react-hook-form-stn5vr",rel:"nofollow",children:"CodeSandbox"}),` on
how to use `,e.jsx(r.code,{children:"RadioGroup"})," with React Hook Form."]}),`
`,e.jsx(r.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(r.p,{children:["Radio and its subcomponents support custom styling via the ",e.jsx(r.code,{children:"cs"}),` prop. For more information, check
our
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(q,{name:"RadioGroup",fileName:"/preview-react/"})]})}function K(a={}){const{wrapper:r}={...M(),...a.components};return r?e.jsx(r,{...a,children:e.jsx(P,{...a})}):P(a)}const J={title:"Preview/Inputs/Radio",component:t,tags:["autodocs"],parameters:{docs:{page:K}}},h={render:w},m={render:y},F={render:L},f={render:B},x={render:k},G={render:S},R={render:T},v={render:z},g={render:E},j={render:_},I={render:V};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...m.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...F.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: InverseExample
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...x.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: NoValueExample
}`,...G.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...R.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: CustomExample
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: StandaloneRadioExample
}`,...I.parameters?.docs?.source}}};const Cr=["Basic","Caution","Error","Inverse","LabelPosition","NoValue","RefForwarding","Disabled","Required","Custom","StandaloneRadio"];export{h as Basic,m as Caution,j as Custom,v as Disabled,F as Error,f as Inverse,x as LabelPosition,G as NoValue,R as RefForwarding,g as Required,I as StandaloneRadio,Cr as __namedExportsOrder,J as default};
