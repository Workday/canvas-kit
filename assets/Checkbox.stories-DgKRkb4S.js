import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as M}from"./index-3YbjYt95.js";import{ae as $}from"./index-Ca_ueJdC.js";import{E as d,c as Y}from"./union-BR0v2gRB.js";import{S as U}from"./Specifications-BmHlkcUZ.js";import{e as c}from"./index-IfJi-UCQ.js";import{F as r}from"./FormField-DNE698zQ.js";import{C as i}from"./Checkbox-M36cSDSX.js";import{B as A}from"./Box-C3Rh3_8o.js";import{c as v}from"./cs-rfTTo7Bg.js";import{g as B,p as X,c as N}from"./index-5dfzm_kn.js";import{F as K}from"./Flex-CJiYBkIy.js";import{P as G}from"./PrimaryButton-BA5mLJnp.js";import"./iframe-Df90AzKP.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BvGZwaoD.js";import"./Svg-j63L436u.js";import"./px2rem-C0KbprIx.js";import"./components-BzxOW7QS.js";import"./StatusIndicator-gZMUeaRL.js";import"./Text-BLiLRwwF.js";import"./mergeStyles-B5xtJ_PZ.js";import"./flex-EgKYzApj.js";import"./grid-BOSAf611.js";import"./Card-BRu6KPxh.js";import"./ExternalHyperlink-CRU638AJ.js";import"./Hyperlink-B-efvBlO.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-C6dc0I17.js";import"./BaseButton-DYGlcZck.js";import"./Button-gB-pg0yL.js";import"./lerna-BEf4wwJd.js";import"./CanvasProvider-C7QCbs6E.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-CAR6Ep96.js";import"./useTooltip-BL-xww8B.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-bxAGnail.js";import"./Popper-Bj4tFU_w.js";import"./TertiaryButton-SwgvdX0A.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BgBOz6pU.js";import"./ColorPicker-06B5oV7m.js";import"./ColorInput-fMEaTT1j.js";import"./check-small-C7Z-gSGs.js";import"./index-N3xz2Kqy.js";import"./TextInput-EU9rhnK_.js";import"./types-DXdjelYI.js";import"./check-Bvurkvei.js";import"./Expandable-E7IaUtAA.js";import"./Avatar-BQAjuJh4.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DVmqDXHq.js";import"./Popup-hBLQdfHd.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-B9mkdgty.js";import"./useInitialFocus-DsaG8QeM.js";import"./useReturnFocus-DxgM6tpN.js";import"./useFocusRedirect-DY41H3s1.js";import"./Breadcrumbs-DbSrMfri.js";import"./useOverflowListTarget-BdPxwRdQ.js";import"./useListItemSelect-BJNBLcmr.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-eJWTGk8_.js";import"./OverflowTooltip-ChALVole.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-DepMuJNO.js";import"./LabelText-CJ9a70PK.js";const w=()=>{const[n,t]=c.useState(!1),o=a=>{t(a.target.checked)};return e.jsxs(r,{children:[e.jsx(r.Label,{children:"Confirm"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:i,checked:n,label:"I agree to the terms",onChange:o})})]})};w.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField>
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormField.Field>
    </FormField>
  );
};
`;const I=()=>{const[n,t]=c.useState(!1),o=a=>{t(a.target.checked)};return e.jsxs(r,{error:"caution",children:[e.jsx(r.Label,{children:"Confirm"}),e.jsxs(r.Field,{children:[e.jsx(r.Input,{as:i,checked:n,label:"I agree to the terms",onChange:o}),e.jsx(r.Hint,{children:"You must agree to the terms before proceeding"})]})]})};I.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Caution = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField error="caution">
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
        <FormField.Hint>You must agree to the terms before proceeding</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
`;const S=()=>{const[n,t]=c.useState(!1),o=a=>{t(a.target.checked)};return e.jsxs(r,{children:[e.jsx(r.Label,{children:"Confirm"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:i,checked:n,disabled:!0,label:"I agree to the terms",onChange:o})})]})};S.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Disabled = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField>
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          disabled={true}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormField.Field>
    </FormField>
  );
};
`;const R=()=>{const[n,t]=c.useState(!1),o=a=>{t(a.target.checked)};return e.jsxs(r,{error:"error",children:[e.jsx(r.Label,{children:"Confirm"}),e.jsxs(r.Field,{children:[e.jsx(r.Input,{as:i,checked:n,label:"I agree to the terms",onChange:o}),e.jsx(r.Hint,{children:"You must agree to the terms before proceeding"})]})]})};R.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Error = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField error="error">
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
        <FormField.Hint>You must agree to the terms before proceeding</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
`;const J=v({marginInlineStart:B.xl,marginBlockStart:B.sm}),z=()=>{const[n,t]=c.useState(!1),[o,a]=c.useState(!1),[h,p]=c.useState([{name:"Pepperoni",checked:!1},{name:"Sausage",checked:!1},{name:"Bell Peppers",checked:!1},{name:"Olives",checked:!1},{name:"Onions",checked:!1}]),D=l=>{const m=l.target.checked;m||!m&&o?(t(!0),p(h.map(s=>({...s,checked:!0})))):(t(!1),p(h.map(s=>({...s,checked:!1})))),a(!1)},q=(l,m)=>{const s=h.map(k=>({...k}));s[m].checked=l.target.checked,p(s);const O=s.filter(k=>k.checked).length>0,P=s.filter(k=>!k.checked).length>0,W=!P;a(O&&P),t(W)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{checked:n,indeterminate:o,label:"Supreme Pizza Toppings",onChange:D}),e.jsx(A,{cs:J,children:h.map((l,m)=>e.jsx(i,{checked:l.checked,label:l.name,onChange:s=>q(s,m)},l.name))})]})};z.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = createStyles({
  marginInlineStart: system.gap.xl,
  marginBlockStart: system.gap.sm,
});

export const Indeterminate = () => {
  const [pizzaChecked, setPizzaChecked] = React.useState(false);
  const [pizzaIndeterminate, setPizzaIndeterminate] = React.useState(false);

  const [toppings, setToppings] = React.useState([
    {name: 'Pepperoni', checked: false},
    {name: 'Sausage', checked: false},
    {name: 'Bell Peppers', checked: false},
    {name: 'Olives', checked: false},
    {name: 'Onions', checked: false},
  ]);

  const handlePizzaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked || (!checked && pizzaIndeterminate)) {
      setPizzaChecked(true);
      setToppings(
        toppings.map(topping => ({
          ...topping,
          checked: true,
        }))
      );
    } else {
      setPizzaChecked(false);
      setToppings(
        toppings.map(topping => ({
          ...topping,
          checked: false,
        }))
      );
    }

    setPizzaIndeterminate(false);
  };

  const handleToppingChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newToppings = toppings.map(topping => ({...topping}));
    newToppings[index].checked = event.target.checked;
    setToppings(newToppings);

    const anyToppingChecked = newToppings.filter(topping => topping.checked).length > 0;
    const anyToppingUnchecked = newToppings.filter(topping => !topping.checked).length > 0;
    const allToppingChecked = !anyToppingUnchecked;
    setPizzaIndeterminate(anyToppingChecked && anyToppingUnchecked);
    setPizzaChecked(allToppingChecked);
  };

  return (
    <>
      <Checkbox
        checked={pizzaChecked}
        indeterminate={pizzaIndeterminate}
        label="Supreme Pizza Toppings"
        onChange={handlePizzaChange}
      />
      <Box cs={styleOverrides}>
        {toppings.map((topping, index) => (
          <Checkbox
            checked={topping.checked}
            key={topping.name}
            label={topping.name}
            onChange={event => handleToppingChange(event, index)}
          />
        ))}
      </Box>
    </>
  );
};
`;const Q=v({backgroundColor:N.surface.contrast.default,padding:X.md}),E=()=>{const[n,t]=c.useState(!1),o=a=>{t(a.target.checked)};return e.jsx(K,{cs:Q,children:e.jsx(i,{variant:"inverse",checked:n,label:"I agree to the terms",onChange:o})})};E.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = createStyles({
  backgroundColor: system.color.surface.contrast.default,
  padding: system.padding.md,
});

export const Inverse = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Flex cs={styleOverrides}>
      <Checkbox
        variant="inverse"
        checked={checked}
        label="I agree to the terms"
        onChange={handleChange}
      />
    </Flex>
  );
};
`;const T=()=>{const[n,t]=c.useState(!1),o=a=>{t(a.target.checked)};return e.jsxs(r,{orientation:"horizontalStart",children:[e.jsx(r.Label,{children:"Confirm"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:i,checked:n,label:"I agree to the terms",onChange:o})})]})};T.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const LabelPosition = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormField.Field>
    </FormField>
  );
};
`;const V=v({display:"flex",flexDirection:"column"}),_=()=>{const[n,t]=c.useState(!1),o=c.useRef(null),a=p=>{t(p.target.checked)},h=()=>{o.current.click()};return e.jsxs(e.Fragment,{children:[e.jsx(A,{cs:V,children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Confirm"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:i,checked:n,label:"I agree to the terms",onChange:a,ref:o})})]})}),e.jsx(G,{onClick:h,children:"Check Agreement to Terms"})]})};_.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const boxStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
});

export const RefForwarding = () => {
  const [checked, setChecked] = React.useState(false);
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    ref.current.click();
  };

  return (
    <>
      <Box cs={boxStyles}>
        <FormField>
          <FormField.Label>Confirm</FormField.Label>
          <FormField.Field>
            <FormField.Input
              as={Checkbox}
              checked={checked}
              label="I agree to the terms"
              onChange={handleChange}
              ref={ref}
            />
          </FormField.Field>
        </FormField>
      </Box>
      <PrimaryButton onClick={handleClick}>Check Agreement to Terms</PrimaryButton>
    </>
  );
};
`;const L=()=>{const[n,t]=c.useState(!1),o=a=>{t(a.target.checked)};return e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Confirm"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:i,checked:n,label:"I agree to the terms",onChange:o})})]})};L.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Required = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField isRequired={true}>
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormField.Field>
    </FormField>
  );
};
`;function H(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...M(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx($,{of:ee}),`
`,e.jsx(t.h1,{id:"canvas-kit-checkbox",children:"Canvas Kit Checkbox"}),`
`,e.jsx(t.p,{children:`Checkboxes allow a user to select zero, one, or multiple values from a predefined list of 7 or less
options.`}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://design.workday.com/components/inputs/checkboxes",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:["Checkbox may be used on its own without ",e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` since it
includes a `,e.jsx(t.code,{children:"<label>"})," with a ",e.jsx(t.code,{children:"for"})," attribute referencing the underlying ",e.jsx(t.code,{children:'<input type="checkbox">'}),`
element.`]}),`
`,e.jsx(d,{code:w}),`
`,e.jsx(t.h3,{id:"inverse",children:"Inverse"}),`
`,e.jsx(t.p,{children:"Checkbox with inverse variation"}),`
`,e.jsx(d,{code:E}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"disabled"})," prop of the Checkbox to prevent users from interacting with it."]}),`
`,e.jsx(d,{code:S}),`
`,e.jsx(t.h3,{id:"indeterminate",children:"Indeterminate"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"indeterminate"})," prop of the Checkbox to ",e.jsx(t.code,{children:"true"}),` to indicate the Checkbox is neither checked
nor unchecked.`]}),`
`,e.jsx(t.p,{children:`A common use case for an indeterminate Checkbox is when the value of a parent Checkbox is dependent
on a number of child Checkboxes. The parent Checkbox is set to the indeterminate state if some (but
not all) of its children are checked.`}),`
`,e.jsx(d,{code:z}),`
`,e.jsx(t.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(t.p,{children:["Checkbox supports ",e.jsx(t.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will forward
`,e.jsx(t.code,{children:"ref"})," to its underlying ",e.jsx(t.code,{children:'<input type="checkbox">'})," element."]}),`
`,e.jsx(d,{code:_}),`
`,e.jsx(t.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(t.code,{children:"vertical"}),"."]}),`
`,e.jsx(d,{code:T}),`
`,e.jsx(t.h3,{id:"required",children:"Required"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"required"})," prop of a wrapping Form Field to ",e.jsx(t.code,{children:"true"}),` to indicate that the field is required.
Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(d,{code:L}),`
`,e.jsx(t.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"error"})," prop of the wrapping Form Field to ",e.jsx(t.code,{children:'"caution"'})," or ",e.jsx(t.code,{children:'"error"'}),` to set the Checkbox to
the Alert or Error state, respectively. You will also need to set the `,e.jsx(t.code,{children:"hintId"})," and ",e.jsx(t.code,{children:"hintText"}),` props
on the Form Field to meet accessibility standards. You may wish to omit the `,e.jsx(t.code,{children:"label"}),` prop on the Form
Field given that Checkbox already includes a label.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"error"})," prop may be applied directly to the Checkbox with a value of ",e.jsx(t.code,{children:'"caution"'})," or ",e.jsx(t.code,{children:'"error"'}),` if
Form Field is not being used.`]}),`
`,e.jsx(t.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(d,{code:I}),`
`,e.jsx(t.h4,{id:"error",children:"Error"}),`
`,e.jsx(d,{code:R}),`
`,e.jsx(t.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(t.p,{children:["Checkbox supports custom styling via the ",e.jsx(t.code,{children:"cs"}),` prop. For more information, check our
`,e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(Y,{name:"Checkbox",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(U,{file:"./cypress/component/Checkbox.spec.tsx",initialSpecs:{type:"file",name:"Checkbox",children:[{type:"describe",name:"Checkbox",children:[{type:"describe",name:"given the 'Basic' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Caution' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Error' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Disabled' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]},{type:"describe",name:"given the 'Indeterminate' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should have the correct attributes"}]}]}]},name:"Checkbox"})]})}function Z(n={}){const{wrapper:t}={...M(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(H,{...n})}):H(n)}const ee={title:"Components/Inputs/Checkbox",component:i,tags:["autodocs"],parameters:{docs:{page:Z}}},x={render:I},g={render:w},u={render:E},f={render:S},C={render:R},F={render:z},b={render:T},y={render:_},j={render:L};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: InverseExample
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: IndeterminateExample
}`,...F.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...j.parameters?.docs?.source}}};const Rt=["Caution","Basic","Inverse","Disabled","Error","Indeterminate","LabelPosition","RefForwarding","Required"];export{g as Basic,x as Caution,f as Disabled,C as Error,F as Indeterminate,u as Inverse,b as LabelPosition,y as RefForwarding,j as Required,Rt as __namedExportsOrder,ee as default};
