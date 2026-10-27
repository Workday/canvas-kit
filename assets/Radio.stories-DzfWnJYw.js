import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as q}from"./index-3YbjYt95.js";import{ae as A}from"./index-8zTmtzg_.js";import{E as l,c as Y}from"./union-Dw3119xp.js";import{e as d}from"./index-IfJi-UCQ.js";import{F as o}from"./FormFieldGroup-CCqQCO_W.js";import{R as t,S as V}from"./RadioGroup-Dao29661.js";import{F as u}from"./Flex-BL4S5dy0.js";import{c}from"./cs-CmRirKzJ.js";import{p as w}from"./px2rem-C0KbprIx.js";import{c as y,p as O,g as W}from"./index-C_4iH04t.js";import{B as $}from"./Box-AXoeqAfR.js";import{P as N}from"./PrimaryButton-DwExYjzD.js";import"./iframe-DzHAWDep.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-oQ2K1VCn.js";import"./Svg-BMATp2Oq.js";import"./components-CxXDZKlX.js";import"./StatusIndicator-C0c7vbAG.js";import"./Text-BU7lo9qQ.js";import"./mergeStyles-Cwq7MPiu.js";import"./flex-B-mM-efm.js";import"./grid-BRoHx-9y.js";import"./cornerShape-CSfH3EMK.js";import"./Card-C94ti1ug.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-DG35H1Wq.js";import"./Hyperlink-DuzNLKMl.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-ClDLkqd4.js";import"./BaseButton-CXgunvHx.js";import"./Button-BKwQ9p25.js";import"./lerna-DluDaNV7.js";import"./CanvasProvider-DJRItNr0.js";import"./index-CFEs8r9D.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./Tooltip-DUI0SA_T.js";import"./useTooltip-PjORsXZm.js";import"./getTransformFromPlacement-kDQSMLcK.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useCloseOnEscape-CJ8QJI5q.js";import"./Popper-mGIbWNdd.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BjIo91oe.js";import"./TypeLevelComponents-CWBiLbMZ.js";import"./ColorPicker-4zrYiXHt.js";import"./ColorInput-BSxd7JdF.js";import"./check-small-BqSDQIle.js";import"./index-Cvke4sRE.js";import"./TextInput-DX-uTB_8.js";import"./types-DXdjelYI.js";import"./FormField-D3X-JdP0.js";import"./check-Ds6vsrAM.js";import"./Expandable-CSlI0MMa.js";import"./Avatar-CKiAmiHa.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-BY9hL40t.js";import"./Popup-Buqd_rCX.js";import"./x-B1faap_l.js";import"./usePopupTarget-BrzAvJUE.js";import"./useInitialFocus-DA01W-5V.js";import"./useReturnFocus-CgwmYqfY.js";import"./useFocusRedirect-DlsmGhp1.js";import"./Breadcrumbs-CtAhx_Hv.js";import"./useOverflowListItemMeasure-DU3HTtaC.js";import"./useListItemRegister-cbpcI0J1.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-pYQJPHtt.js";import"./OverflowTooltip-CfbyETTq.js";import"./useListItemRovingFocus-9AyEy-B6.js";import"./useListItemSelect-BVXjgXJV.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-Dl_Li4_V.js";import"./Table-CI-MHtGM.js";const U=c({width:w(200)}),I=()=>{const[n,r]=d.useState("deep-dish"),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsxs(u,{cs:{flexDirection:"column"},children:[e.jsxs(o,{children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsx(o.Field,{children:e.jsxs(o.List,{cs:U,as:t,name:"pizza-crust",onChange:a,value:n,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"}),e.jsx(o.Input,{as:t.RadioButton,value:"custom",children:"Butter - the best thing to put on bread"})]})})]}),"Value selected: ",n]})};I.__RAW__=`import React from 'react';

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
`;const C=()=>{const[n,r]=d.useState("deep-dish"),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsxs(o,{error:"caution",id:"hint-alert",children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsxs(o.Field,{children:[e.jsxs(o.List,{as:t,name:"crust-alert",onChange:a,value:n,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]}),e.jsx(o.Hint,{children:"Deep dish is an extra $2.99."})]})]})};C.__RAW__=`import React from 'react';

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
`;const p={formfieldInputStyles:c({width:w(200)}),radioGroupLabelTextStyles:c({color:y.fg.default})},L=()=>{const[n,r]=d.useState("deep-dish"),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsxs(u,{cs:{flexDirection:"column"},children:[e.jsxs(o,{children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsx(o.Field,{children:e.jsxs(o.List,{as:t,name:"pizza-crust-custom",onChange:a,cs:p.formfieldInputStyles,value:n,children:[e.jsxs(t.Label,{children:[e.jsx(o.Input,{as:t.Label.Input,value:"deep-dish"}),e.jsx(t.Label.Text,{cs:p.radioGroupLabelTextStyles,children:"Deep dish"})]}),e.jsxs(t.Label,{children:[e.jsx(o.Input,{as:t.Label.Input,value:"gluten-free"}),e.jsx(t.Label.Text,{cs:p.radioGroupLabelTextStyles,children:"Gluten free"})]}),e.jsxs(t.Label,{children:[e.jsx(o.Input,{as:t.Label.Input,value:"cauliflower"}),e.jsx(t.Label.Text,{cs:p.radioGroupLabelTextStyles,children:"Cauliflower"})]})]})})]}),"Value selected: ",n]})};L.__RAW__=`import React from 'react';

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
`;const B=()=>{const[n,r]=d.useState("deep-dish"),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsxs(o,{children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsx(o.Field,{children:e.jsxs(o.List,{as:t,name:"crust-disabled",onChange:a,value:n,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,disabled:!0,value:"gluten-free",children:"Gluten free (sold out)"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]})})]})};B.__RAW__=`import React from 'react';

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
`;const k=()=>{const[n,r]=d.useState("deep-dish"),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsxs(o,{error:"error",children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsxs(o.Field,{children:[e.jsxs(o.List,{as:t,name:"crust-error",onChange:a,value:n,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]}),e.jsx(o.Hint,{children:"Deep dish is currently sold out."})]})]})};k.__RAW__=`import React from 'react';

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
`;const K={containerStyles:c({backgroundColor:y.surface.contrast.default,padding:O.md}),formFieldStyles:c({legend:{color:y.fg.inverse}})},S=()=>{const[n,r]=d.useState("deep-dish"),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsx($,{cs:K.containerStyles,children:e.jsxs(t,{name:"crust-inverse",onChange:a,value:n,children:[e.jsx(t.RadioButton,{variant:"inverse",value:"deep-dish",children:"Deep dish"}),e.jsx(t.RadioButton,{variant:"inverse",value:"thin",children:"Thin"}),e.jsx(t.RadioButton,{variant:"inverse",value:"gluten-free",children:"Gluten free"}),e.jsx(t.RadioButton,{variant:"inverse",value:"cauliflower",children:"Cauliflower"})]})})};S.__RAW__=`import React from 'react';

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
`;const T=()=>{const[n,r]=d.useState("deep-dish"),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsxs(o,{orientation:"horizontalStart",children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsx(o.Field,{children:e.jsxs(o.List,{as:t,name:"crust-label",onChange:a,value:n,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]})})]})};T.__RAW__=`import React from 'react';

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
`;const E=()=>{const[n,r]=d.useState(0),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsxs(o,{children:[e.jsx(o.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(o.List,{as:t,name:"crust-no-value",onChange:a,value:n,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]})]})};E.__RAW__=`import React from 'react';

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
`;const z=()=>{const[n,r]=d.useState("deep-dish"),a=d.useRef(null),s=M=>{const H=M.currentTarget;H instanceof HTMLInputElement&&r(H.value)},i=()=>{a.current.click()};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsxs(o.List,{as:t,name:"crust-ref",onChange:s,value:n,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",ref:a,children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]})]}),e.jsx(N,{onClick:i,children:"Select Gluten Free"})]})};z.__RAW__=`import React from 'react';

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
`;const D=()=>{const[n,r]=d.useState(""),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsxs(o,{isRequired:!0,children:[e.jsx(o.Label,{children:"Choose Your Pizza Crust"}),e.jsxs(o.List,{as:t,name:"crust-required",onChange:a,value:n,children:[e.jsx(o.Input,{as:t.RadioButton,value:"deep-dish",children:"Deep dish"}),e.jsx(o.Input,{as:t.RadioButton,value:"thin",children:"Thin"}),e.jsx(o.Input,{as:t.RadioButton,value:"gluten-free",children:"Gluten free"}),e.jsx(o.Input,{as:t.RadioButton,value:"cauliflower",children:"Cauliflower"})]}),e.jsx(o.Hint,{children:"You must choose a crust"})]})};D.__RAW__=`import React from 'react';

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
`;const _=()=>{const[n,r]=d.useState("deep-dish"),a=s=>{const i=s.currentTarget;i instanceof HTMLInputElement&&r(i.value)};return e.jsxs(u,{cs:{flexDirection:"column"},children:[e.jsxs(o,{as:"fieldset",children:[e.jsx(o.Label,{as:"legend",children:"Choose Your Pizza Crust"}),e.jsxs(u,{cs:{gap:W.xl},children:[e.jsxs(u,{as:"label",cs:{gap:w(12)},children:[e.jsx(o.Input,{as:V,onChange:a,value:"deep-dish",name:"pizza-crust-standalone",checked:n==="deep-dish"}),"Deep dish"]}),e.jsxs(u,{as:"label",cs:{gap:w(12)},children:[e.jsx(o.Input,{as:V,onChange:a,value:"gluten-free",checked:n==="gluten-free",name:"pizza-crust-standalone"}),"Gluten free"]})]})]}),"Value selected: ",n]})};_.__RAW__=`import React from 'react';

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
`;function P(n){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...q(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(A,{of:Q}),`
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
`,e.jsx(r.code,{children:"RadioGroup.RadioButton"})," must have a unique ",e.jsx(r.code,{children:"value"}),`. This value is used in conjunction with the
`,e.jsx(r.code,{children:"value"})," prop set on the ",e.jsx(r.code,{children:"RadioGroup"}),` to determine which radio button is selected. To tie it all
together, provide an `,e.jsx(r.code,{children:"onChange"})," handler to the ",e.jsx(r.code,{children:"RadioGroup"}),` to track the selected value as it
changes.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"RadioGroup"}),` should be used in tandem with
`,e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormFieldGroup"}),". ",e.jsx(r.code,{children:"FormFieldGroup.Label"}),` names the
group, and `,e.jsx(r.code,{children:"FormFieldGroup.Input"})," associates hint, error, and required state with each radio."]}),`
`,e.jsx(l,{code:I}),`
`,e.jsxs(r.p,{children:["Our example uses ",e.jsx(r.a,{href:"(https://react.dev/learn/state-a-components-memory)",children:"React state"}),` to track the
value of the `,e.jsx(r.code,{children:"RadioGroup"}),"."]}),`
`,e.jsx(r.h3,{id:"inverse",children:"Inverse"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"variant"})," prop of ",e.jsx(r.code,{children:"RadioGroup.RadioButton"})," to ",e.jsx(r.code,{children:"inverse"}),` to ensure proper contrast on dark
backgrounds.`]}),`
`,e.jsx(l,{code:S}),`
`,e.jsx(r.h3,{id:"radio-group-with-no-value",children:"Radio Group with No Value"}),`
`,e.jsxs(r.p,{children:["Omit the ",e.jsx(r.code,{children:"value"})," prop from ",e.jsx(r.code,{children:"RadioGroup"}),` to render the group with no selected
`,e.jsx(r.code,{children:"RadioGroup.RadioButton"}),"."]}),`
`,e.jsx(l,{code:E}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"RadioGroup.RadioButton"})," supports ",e.jsx(r.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`.
It will forward `,e.jsx(r.code,{children:"ref"})," to its underlying ",e.jsx(r.code,{children:'<input type="radio">'})," element."]}),`
`,e.jsx(l,{code:z}),`
`,e.jsx(r.h3,{id:"label-position",children:"Label Position"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(l,{code:T}),`
`,e.jsx(r.h3,{id:"required",children:"Required"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"isRequired"})," prop of the wrapping ",e.jsx(r.code,{children:"FormFieldGroup"})," to ",e.jsx(r.code,{children:"true"}),` to indicate that the field is
required. Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(l,{code:D}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"})," prop of ",e.jsx(r.code,{children:"RadioGroup.RadioButton"}),` to prevent users from interacting with it. Be
careful not to disable a pre-selected radio button as this will block keyboard access to the entire
`,e.jsx(r.code,{children:"RadioGroup"}),"."]}),`
`,e.jsx(l,{code:B}),`
`,e.jsx(r.h3,{id:"custom-radio-button",children:"Custom Radio Button"}),`
`,e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"RadioGroup.Label"})," instead of ",e.jsx(r.code,{children:"RadioGroup.RadioButton"}),` if you need direct access to the label
and the radio input. This will allow you to apply custom styling to the text and radio input.`]}),`
`,e.jsx(l,{code:L}),`
`,e.jsx(r.h3,{id:"standalone-radio-button",children:"Standalone Radio Button"}),`
`,e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"StyledRadioButton"})," when you want a styled radio button on its own without using ",e.jsx(r.code,{children:"RadioGroup"}),`.
You will need to handle behavior and accessibility.`]}),`
`,e.jsx(l,{code:_}),`
`,e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"RadioGroup.Label"}),` when you want more control styling the text and radio input but still want
some behavior handled for you.`]}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"error"})," prop of the wrapping ",e.jsx(r.code,{children:"FormFieldGroup"})," to ",e.jsx(r.code,{children:'"caution"'})," or ",e.jsx(r.code,{children:'"error"'}),` to set the group
to the alert or error state. Put the message in `,e.jsx(r.code,{children:"FormFieldGroup.Hint"}),". ",e.jsx(r.code,{children:"FormFieldGroup.Input"}),`
associates that text with each radio.`]}),`
`,e.jsx(r.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(r.p,{children:"Use the alert state when a selection is valid but there is additional information."}),`
`,e.jsx(l,{code:C}),`
`,e.jsx(r.h4,{id:"error",children:"Error"}),`
`,e.jsx(r.p,{children:"Use the error state when the selection is no longer valid."}),`
`,e.jsx(l,{code:k}),`
`,e.jsx(r.h3,{id:"react-hook-form",children:"React Hook Form"}),`
`,e.jsxs(r.p,{children:["Using a form library like ",e.jsx(r.a,{href:"https://www.react-hook-form.com/",rel:"nofollow",children:"React Hook Form"}),` is a common use case.
Reference this `,e.jsx(r.a,{href:"https://codesandbox.io/s/radio-preview-with-react-hook-form-stn5vr",rel:"nofollow",children:"CodeSandbox"}),` on
how to use `,e.jsx(r.code,{children:"RadioGroup"})," with React Hook Form."]}),`
`,e.jsx(r.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(r.p,{children:["Radio and its subcomponents support custom styling via the ",e.jsx(r.code,{children:"cs"}),` prop. For more information, check
our
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:[`The primary accessibility goal is to ensure users can identify the radio group and each option,
determine which option is selected, and hear associated hints, errors, and required state when a
radio receives focus. Use `,e.jsx(r.strong,{children:"Radio"}),` when the user must choose one option from a list. For
independent options, use
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-inputs-checkbox--docs",rel:"nofollow",children:e.jsx(r.strong,{children:"Checkbox"})}),`
instead.`]}),`
`,e.jsx(r.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(r.p,{children:["The following matches the ",e.jsx(r.a,{href:"#basic-example",children:"Basic Example"}),": a ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),` with
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.List as={RadioGroup}"})}),`, and two or more
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Input as={RadioGroup.RadioButton}"})})," options."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

<FormFieldGroup>
  <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
  <FormFieldGroup.Field>
    <FormFieldGroup.List as={RadioGroup}>
      <FormFieldGroup.Input as={RadioGroup.RadioButton}>Deep dish</FormFieldGroup.Input>
      <FormFieldGroup.Input as={RadioGroup.RadioButton}>Thin</FormFieldGroup.Input>
    </FormFieldGroup.List>
  </FormFieldGroup.Field>
</FormFieldGroup>;
`})}),`
`,e.jsxs(r.p,{children:["Each option needs visible text. See the ",e.jsx(r.a,{href:"#basic-example",children:"Basic Example"})," for selection behavior."]}),`
`,e.jsx(r.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(r.p,{children:["Canvas Kit applies these automatically when you compose ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})})," with ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup"})}),`.
`,e.jsx(r.strong,{children:"Do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"ARIA and DOM"})," (",e.jsxs(r.em,{children:["applied by ",e.jsx(r.code,{children:"RadioGroup"})," and ",e.jsx(r.code,{children:"FormFieldGroup"})]}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup"})}),": Renders a ",e.jsx(r.code,{children:"div"}),". It does not set ",e.jsx(r.code,{children:'role="radiogroup"'}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup.RadioButton"})}),": Renders a ",e.jsx(r.code,{children:"<label>"})," around ",e.jsx(r.code,{children:'<input type="radio">'}),` and the visible
text. The wrapping `,e.jsx(r.code,{children:"<label>"})," is the association, so an ",e.jsx(r.code,{children:"htmlFor"}),` pairing is not needed. That text
is the option's accessible name, and clicking it selects the radio.`]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Keyboard"})," (",e.jsx(r.em,{children:"native radio behavior"}),"):"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup"})})," uses native radio keyboard behavior. ",e.jsx("kbd",{children:"Tab"}),` moves to the selected radio, or
to the first radio when none is selected, and then leaves the group. Arrow keys move and select
within the group.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Screen reader expectations"})," (",e.jsx(r.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["On focus, assistive technology announces the group name from ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Label"})}),`, along
with the option name, radio role, and checked state.`]}),`
`,e.jsxs(r.li,{children:["When applicable, it also announces required state, invalid state (",e.jsx(r.code,{children:'error="error"'}),`), and hint or
error text. Caution does not set `,e.jsx(r.code,{children:"aria-invalid"}),"."]}),`
`,e.jsx(r.li,{children:"Disabled radios are announced as unavailable."}),`
`]}),`
`,e.jsxs(r.p,{children:[`For group, hint, error, and required association, see
`,e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs#built-in-behaviors",children:"FormField's Built-in Behaviors"}),"."]}),`
`,e.jsx(r.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(r.p,{children:["Required in application code for an accessible Radio group. Rows marked ",e.jsx(r.em,{children:"(conditional)"}),` apply only
when the situation matches—otherwise omit.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"If no design spec is provided:"})," use a visible ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Label"})}),`. On
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.List as={RadioGroup}"})}),", set a shared ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"name"})}),` and render two or more
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup.RadioButton"})})," options with visible text and their own ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"value"})}),". Omit ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"error"})}),`,
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"isRequired"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Hint"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"aria-describedby"})}),` on
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"error"})})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup"})}),", a ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"ref"})}),", and ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"StyledRadioButton"})}),` unless
the spec requires them.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Programmatic focus"})," ",e.jsx(r.em,{children:"(conditional — omit by default)"}),":"]}),`
`,e.jsxs(r.p,{children:["Attach a ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"ref"})}),` only when the product must move focus to a radio after an action. Do not attach a
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"ref"})})," or call ",e.jsx(r.code,{children:"focus()"}),` unless the design or developer asks for it. See
`,e.jsx(r.a,{href:"#ref-forwarding",children:"Ref Forwarding"}),"."]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Requirement"}),e.jsx(r.th,{children:"How to satisfy"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Group and option names"}),e.jsxs(r.td,{children:["Use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})})," with a visible ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Label"})}),". Render ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.List as={RadioGroup}"})})," with a shared ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"name"})}),", and give every ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Input as={RadioGroup.RadioButton}"})})," visible text and its own ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"value"})}),". The shared ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"name"})})," groups the inputs, and each option ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"value"})})," is what the selected state matches. See ",e.jsx(r.a,{href:"#basic-example",children:"Basic Example"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Error state ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:["When the selection is invalid, set ",e.jsx(r.code,{children:'error="error"'})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})})," and prefix ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Hint"})}),' with "Error:". See ',e.jsx(r.a,{href:"#error-states",children:"Error States"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Hint, caution, or required ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:["On ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),", use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Hint"})})," for hint text, ",e.jsx(r.code,{children:'error="caution"'})," for caution, and ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"isRequired"})})," for required state, only when the spec includes that state. See ",e.jsx(r.a,{href:"#required",children:"Required"})," and ",e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Disabled ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:["Set ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})})," on an unavailable ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup.RadioButton"})}),". Never disable the selected radio. See ",e.jsx(r.a,{href:"#disabled",children:"Disabled"}),"."]})]})]})]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"REQUIRED:"})," ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),", visible ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Label"})}),`,
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.List as={RadioGroup}"})})," with a shared ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"name"})}),`, and two or more
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup.RadioButton"})})," options, each with visible text and its own ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"value"})})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"CONDITIONAL:"})," when the selection is invalid, ",e.jsx(r.code,{children:'error="error"'})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),` and
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Hint"})}),' prefixed with "Error:". Hint text, ',e.jsx(r.code,{children:'error="caution"'}),`, and
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"isRequired"})})," only when the spec includes that state. Also ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})}),` (not on the selected
radio). See `,e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"}),` for group
hint, caution, and required.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(r.p,{children:["Do ",e.jsx(r.strong,{children:"not"})," generate code that does the following (see ",e.jsx(r.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Add ",e.jsx(r.code,{children:'role="radiogroup"'})," to ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup"})})," — ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})})," provides the group semantics"]}),`
`,e.jsxs(r.li,{children:["Manually set ",e.jsx(r.code,{children:"aria-checked"}),", ",e.jsx(r.code,{children:"aria-invalid"}),", ",e.jsx(r.code,{children:"aria-required"}),", or ",e.jsx(r.code,{children:"aria-describedby"}),` —
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup"})})," and ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Input"})})," wire these attributes"]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})," with ",e.jsx(r.code,{children:"useFieldset"}),", or set ",e.jsx(r.code,{children:"hintId"})," and ",e.jsx(r.code,{children:"hintText"}),` — group radios with
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})})," and put the message in ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Hint"})})]}),`
`,e.jsxs(r.li,{children:["Wrap radios in ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input"})})," — use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Input as={RadioGroup.RadioButton}"})})]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"StyledRadioButton"})})," unless the spec requires a radio outside ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup"})}),`. In that
case supply accessible option and group names and the necessary behavior. See
`,e.jsx(r.a,{href:"#standalone-radio-button",children:"Standalone Radio Button"})]}),`
`,e.jsxs(r.li,{children:["Intercept ",e.jsx("kbd",{children:"Tab"})," or arrow keys — native radio behavior moves and selects within the group"]}),`
`,e.jsxs(r.li,{children:["Set ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})}),` on the selected radio — that removes the group's tab stop, so keyboard users
cannot move within the group. See `,e.jsx(r.a,{href:"#disabled",children:"Disabled"})]}),`
`,e.jsxs(r.li,{children:["Set ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"error"})})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"RadioGroup"})})," — set it on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),` so Canvas Kit provides both
the visual and accessible error state. See `,e.jsx(r.a,{href:"#error-states",children:"Error States"})]}),`
`,e.jsxs(r.li,{children:["Rely on color alone for an error or caution — include ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Hint"})}),`. Use
`,e.jsx(r.code,{children:'error="error"'})," when the selection is invalid so ",e.jsx(r.code,{children:"aria-invalid"}),` is set. See
`,e.jsx(r.a,{href:"#error-states",children:"Error States"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(Y,{name:"RadioGroup",fileName:"/preview-react/"})]})}function X(n={}){const{wrapper:r}={...q(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(P,{...n})}):P(n)}const Q={title:"Preview/Inputs/Radio",component:t,tags:["autodocs"],parameters:{docs:{page:X}}},h={render:I},m={render:C},x={render:k},F={render:S},j={render:T},g={render:E},f={render:z},G={render:B},v={render:D},R={render:L},b={render:_};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...x.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: InverseExample
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: NoValueExample
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...f.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...G.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...v.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: CustomExample
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: StandaloneRadioExample
}`,...b.parameters?.docs?.source}}};const Br=["Basic","Caution","Error","Inverse","LabelPosition","NoValue","RefForwarding","Disabled","Required","Custom","StandaloneRadio"];export{h as Basic,m as Caution,R as Custom,G as Disabled,x as Error,F as Inverse,j as LabelPosition,g as NoValue,f as RefForwarding,v as Required,b as StandaloneRadio,Br as __namedExportsOrder,Q as default};
