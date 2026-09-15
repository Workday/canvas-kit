import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as D}from"./index-3YbjYt95.js";import{ae as W}from"./index-B6_fZJIH.js";import{E as a,c as U}from"./union-73eBhY97.js";import{S as N}from"./Specifications-Hdz41Xy0.js";import{e as c}from"./index-IfJi-UCQ.js";import{C as i}from"./Checkbox-CYdULEn2.js";import{F as s}from"./FormFieldGroup-gqjcvXd4.js";import{c as w}from"./cs-CmRirKzJ.js";import{g as v,p as $,c as K}from"./index-udXzHylk.js";import{F as A}from"./Flex-iKGzF7_i.js";import{P as Y}from"./PrimaryButton-BssyuXom.js";import{c as X}from"./useReturnFocus-DDQ4-kU9.js";import"./iframe-C5jHHwC4.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CFi1VLoO.js";import"./Svg-BS_Dvh6q.js";import"./px2rem-C0KbprIx.js";import"./components-DppiPmWT.js";import"./StatusIndicator-BadRR8Ou.js";import"./Text-C5D3Ht9T.js";import"./mergeStyles-0aQAs1eh.js";import"./Box-AGfoWgij.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-bOHHmX-t.js";import"./grid-DtbHyXmR.js";import"./cornerShape-C5U5sQXc.js";import"./Card-DzhLlfJA.js";import"./ExternalHyperlink-uYYbfEzo.js";import"./Hyperlink-T26S0cW3.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BD2FVi4i.js";import"./BaseButton-CKzS3UNH.js";import"./Button-BYCIT0TJ.js";import"./lerna-BfH53aY9.js";import"./CanvasProvider-Bsmzj5m5.js";import"./index-kj8ZfNNN.js";import"./Tooltip-9ICStd_k.js";import"./useTooltip-CsgEKIvN.js";import"./getTransformFromPlacement-xNvjyxNY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-DqbNoIGf.js";import"./Popper-xemT1TtK.js";import"./TertiaryButton-CyD_x8wF.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-jZfo-0ua.js";import"./ColorPicker-Bf6aRSJA.js";import"./ColorInput-DSCHnU6T.js";import"./check-small-BqSDQIle.js";import"./TextInput-DWIaRQL-.js";import"./types-DXdjelYI.js";import"./FormField-BFV0xoAp.js";import"./check-Ds6vsrAM.js";import"./Expandable-K-4Ybhc9.js";import"./Avatar-juNxhmne.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DzCYEDbr.js";import"./Popup-CLuCYqLn.js";import"./x-B1faap_l.js";import"./usePopupTarget-CifT6Oya.js";import"./useInitialFocus-C3yNoxbC.js";import"./useFocusRedirect-BoLF_I5b.js";import"./Breadcrumbs-Cc0Qvzn9.js";import"./useOverflowListTarget-DEnwFStT.js";import"./useListItemRegister-BtedmPXX.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DtS_Zcjq.js";import"./OverflowTooltip-CtkxcgW5.js";import"./useListItemSelect-Cwl5Guz1.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Table-qLELy8Y1.js";const S=()=>{const[n,r]=c.useState(!1),o=t=>{r(t.target.checked)};return e.jsx(i,{checked:n,label:"I agree to the terms",onChange:o})};S.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkbox checked={checked} label="I agree to the terms" onChange={handleChange} />;
};
`;const I=()=>{const[n,r]=c.useState(!1),o=t=>{r(t.target.checked)};return e.jsxs(s,{error:"caution",children:[e.jsx(s.Label,{children:"Confirm"}),e.jsxs(s.Field,{children:[e.jsx(s.Input,{as:i,checked:n,error:i.ErrorType.Caution,label:"I agree to the terms",onChange:o}),e.jsx(s.Hint,{children:"You must agree to the terms before proceeding"})]})]})};I.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Caution = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormFieldGroup error="caution">
      <FormFieldGroup.Label>Confirm</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.Input
          as={Checkbox}
          checked={checked}
          error={Checkbox.ErrorType.Caution}
          label="I agree to the terms"
          onChange={handleChange}
        />
        <FormFieldGroup.Hint>You must agree to the terms before proceeding</FormFieldGroup.Hint>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
`;const R=()=>{const[n,r]=c.useState(!1),o=t=>{r(t.target.checked)};return e.jsx(i,{checked:n,disabled:!0,label:"I agree to the terms",onChange:o})};R.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';

export const Disabled = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox checked={checked} disabled label="I agree to the terms" onChange={handleChange} />
  );
};
`;const G=()=>{const[n,r]=c.useState(!1),o=t=>{r(t.target.checked)};return e.jsxs(s,{error:"error",children:[e.jsx(s.Label,{children:"Confirm"}),e.jsxs(s.Field,{children:[e.jsx(s.Input,{as:i,checked:n,error:i.ErrorType.Error,label:"I agree to the terms",onChange:o}),e.jsx(s.Hint,{children:"You must agree to the terms before proceeding"})]})]})};G.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Error = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormFieldGroup error="error">
      <FormFieldGroup.Label>Confirm</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.Input
          as={Checkbox}
          checked={checked}
          error={Checkbox.ErrorType.Error}
          label="I agree to the terms"
          onChange={handleChange}
        />
        <FormFieldGroup.Hint>You must agree to the terms before proceeding</FormFieldGroup.Hint>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
`;const Q=w({listStyle:"none",margin:0,padding:0}),V=w({listStyle:"none",margin:0,marginInlineStart:v.xl,marginBlockStart:v.sm,padding:0,display:"flex",flexDirection:"column",gap:v.sm}),E=()=>{const[n,r]=c.useState(!1),[o,t]=c.useState(!1),[h,m]=c.useState([{name:"Pepperoni",checked:!1},{name:"Sausage",checked:!1},{name:"Bell Peppers",checked:!1},{name:"Olives",checked:!1},{name:"Onions",checked:!1}]),H=l=>{const p=l.target.checked;p||!p&&o?(r(!0),m(h.map(d=>({...d,checked:!0})))):(r(!1),m(h.map(d=>({...d,checked:!1})))),t(!1)},B=(l,p)=>{const d=h.map(x=>({...x}));d[p].checked=l.target.checked,m(d);const M=d.filter(x=>x.checked).length>0,_=d.filter(x=>!x.checked).length>0,O=!_;t(M&&_),r(O)};return e.jsx("ul",{className:Q,children:e.jsxs("li",{children:[e.jsx(i,{checked:n,indeterminate:o,label:"Supreme Pizza Toppings",onChange:H}),e.jsx("ul",{className:V,children:h.map((l,p)=>e.jsx("li",{children:e.jsx(i,{checked:l.checked,label:l.name,onChange:d=>B(d,p)})},l.name))})]})})};E.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const listStyles = createStyles({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const nestedListStyles = createStyles({
  listStyle: 'none',
  margin: 0,
  marginInlineStart: system.gap.xl,
  marginBlockStart: system.gap.sm,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.sm,
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
    <ul className={listStyles}>
      <li>
        <Checkbox
          checked={pizzaChecked}
          indeterminate={pizzaIndeterminate}
          label="Supreme Pizza Toppings"
          onChange={handlePizzaChange}
        />
        <ul className={nestedListStyles}>
          {toppings.map((topping, index) => (
            <li key={topping.name}>
              <Checkbox
                checked={topping.checked}
                label={topping.name}
                onChange={event => handleToppingChange(event, index)}
              />
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
`;const J=w({backgroundColor:K.surface.contrast.default,padding:$.md}),q=()=>{const[n,r]=c.useState(!1),o=t=>{r(t.target.checked)};return e.jsx(A,{cs:J,children:e.jsx(i,{variant:"inverse",checked:n,label:"I agree to the terms",onChange:o})})};q.__RAW__=`import React from 'react';

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
`;const z=()=>{const[n,r]=c.useState(!1),o=t=>{r(t.target.checked)};return e.jsxs(s,{orientation:"horizontalStart",children:[e.jsx(s.Label,{children:"Confirm"}),e.jsx(s.Field,{children:e.jsx(s.Input,{as:i,checked:n,label:"I agree to the terms",onChange:o})})]})};z.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const LabelPosition = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormFieldGroup orientation="horizontalStart">
      <FormFieldGroup.Label>Confirm</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
`;const Z=w({gap:v.md,alignItems:"flex-start",flexDirection:"column"}),T=()=>{const[n,r]=c.useState(!1),o=c.useRef(null),t=m=>{r(m.target.checked)},h=()=>{X(o.current)};return e.jsxs(A,{cs:Z,children:[e.jsx(i,{checked:n,label:"I agree to the terms",onChange:t,ref:o}),e.jsx(Y,{onClick:h,children:"Focus Checkbox"})]})};T.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  alignItems: 'flex-start',
  flexDirection: 'column',
});

export const RefForwarding = () => {
  const [checked, setChecked] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    changeFocus(ref.current);
  };

  return (
    <Flex cs={containerStyles}>
      <Checkbox checked={checked} label="I agree to the terms" onChange={handleChange} ref={ref} />
      <PrimaryButton onClick={handleClick}>Focus Checkbox</PrimaryButton>
    </Flex>
  );
};
`;const L=()=>{const[n,r]=c.useState(!1),o=t=>{r(t.target.checked)};return e.jsxs(s,{isRequired:!0,children:[e.jsx(s.Label,{children:"Confirm"}),e.jsx(s.Field,{children:e.jsx(s.Input,{as:i,checked:n,label:"I agree to the terms",onChange:o})})]})};L.__RAW__=`import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Required = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormFieldGroup isRequired={true}>
      <FormFieldGroup.Label>Confirm</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
`;function P(n){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...D(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(W,{of:re}),`
`,e.jsx(r.h1,{id:"canvas-kit-checkbox",children:"Canvas Kit Checkbox"}),`
`,e.jsx(r.p,{children:`Checkboxes allow a user to select zero, one, or multiple values from a predefined list of 7 or less
options.`}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://design.workday.com/components/inputs/checkboxes",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.p,{children:["Checkbox may be used on its own without ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` since it
includes a `,e.jsx(r.code,{children:"<label>"})," with a ",e.jsx(r.code,{children:"for"})," attribute referencing the underlying ",e.jsx(r.code,{children:'<input type="checkbox">'}),`
element. For checkboxes grouped with `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),`, see
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"}),` for hint, error, caution,
and required state wiring.`]}),`
`,e.jsx(a,{code:S}),`
`,e.jsx(r.h3,{id:"inverse",children:"Inverse"}),`
`,e.jsx(r.p,{children:"Checkbox with inverse variation"}),`
`,e.jsx(a,{code:q}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"})," prop of the Checkbox to prevent users from interacting with it."]}),`
`,e.jsx(a,{code:R}),`
`,e.jsx(r.h3,{id:"indeterminate",children:"Indeterminate"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"indeterminate"})," prop of the Checkbox to ",e.jsx(r.code,{children:"true"}),` to indicate the Checkbox is neither checked
nor unchecked.`]}),`
`,e.jsx(r.p,{children:`A common use case for an indeterminate Checkbox is when the value of a parent Checkbox is dependent
on a number of child Checkboxes. The parent Checkbox is set to the indeterminate state if some (but
not all) of its children are checked.`}),`
`,e.jsx(a,{code:E}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),`: Use semantic unordered list markup so that screen readers can communicate
the nested hierarchy of the components to users.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:["Checkbox supports ",e.jsx(r.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will forward
`,e.jsx(r.code,{children:"ref"})," to its underlying ",e.jsx(r.code,{children:'<input type="checkbox">'})," element."]}),`
`,e.jsx(a,{code:T}),`
`,e.jsx(r.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the wrapping FormFieldGroup to designate the position of the group
label relative to the checkboxes. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(a,{code:z}),`
`,e.jsx(r.h3,{id:"required",children:"Required"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"isRequired"})," prop of a wrapping FormFieldGroup to ",e.jsx(r.code,{children:"true"}),` to indicate that the field is
required. Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsxs(r.p,{children:["A standalone checkbox does not need ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),`. This example wraps a single checkbox so
`,e.jsx(r.code,{children:"isRequired"})," can show the required asterisk on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Label"})}),`. Use that wrapper only
when the spec includes a required state (or a group name, hint, error, or caution). See
`,e.jsx(r.a,{href:"#accessibility",children:"Accessibility"}),"."]}),`
`,e.jsx(a,{code:L}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"error"})," prop of the wrapping FormFieldGroup to ",e.jsx(r.code,{children:'"caution"'})," or ",e.jsx(r.code,{children:'"error"'}),` to set the Checkbox
to the Alert or Error state, respectively. Render `,e.jsx(r.code,{children:"FormFieldGroup.Hint"}),` with the message text so
assistive technology can associate the hint with the group. Keep the Checkbox `,e.jsx(r.code,{children:"label"}),` so each
control retains its own accessible name; `,e.jsx(r.code,{children:"FormFieldGroup.Label"})," only provides the group name."]}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"error"})," prop may be applied directly to the Checkbox with a value of ",e.jsx(r.code,{children:'"caution"'})," or ",e.jsx(r.code,{children:'"error"'}),` if
FormFieldGroup is not being used.`]}),`
`,e.jsx(r.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(a,{code:I}),`
`,e.jsx(r.h4,{id:"error",children:"Error"}),`
`,e.jsx(a,{code:G}),`
`,e.jsx(r.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(r.p,{children:["Checkbox supports custom styling via the ",e.jsx(r.code,{children:"cs"}),` prop. For more information, check our
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:[`The primary accessibility goal is a visible, programmatically determinable name and a checked,
unchecked, or mixed state that assistive technology can expose. Use `,e.jsx(r.strong,{children:"Checkbox"}),` when the user can
select zero, one, or many independent options. For mutually exclusive choices, use
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-radio--docs",rel:"nofollow",children:e.jsx(r.strong,{children:"Radio"})}),` instead.
When checkboxes answer the same question, or need hint, error, caution, or required association, see
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField's accessibility documentation"}),"."]}),`
`,e.jsx(r.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(r.p,{children:["The following matches the ",e.jsx(r.a,{href:"#basic-example",children:"Basic Example"}),": a ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})}),` with a non-empty
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})}),". ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),` is not required for a single standalone checkbox with no hint,
error, caution, or required state.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import {Checkbox} from '@workday/canvas-kit-react/checkbox';

<Checkbox label="I agree to the terms" />;
`})}),`
`,e.jsx(r.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(r.p,{children:["Canvas Kit applies these automatically on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})}),`. When checkboxes that answer the same
question are composed with `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),` subcomponents, that grouping wiring is also applied
automatically. `,e.jsx(r.strong,{children:"Do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"ARIA and DOM"})," (",e.jsx(r.em,{children:"applied by Checkbox"}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})}),": Renders a native ",e.jsx(r.code,{children:'<input type="checkbox">'}),". Canvas Kit assigns an ",e.jsx(r.code,{children:"id"}),` with
`,e.jsx(r.code,{children:"useUniqueId"})," unless you pass ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"id"})}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})}),": Renders a visible ",e.jsx(r.code,{children:"<label htmlFor={id}>"}),` so the control has an accessible name and
clicking the text activates the input.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"indeterminate"})}),": Sets ",e.jsx(r.code,{children:'aria-checked="mixed"'})," and the input's native ",e.jsx(r.code,{children:"indeterminate"}),` property.
Otherwise `,e.jsx(r.code,{children:"aria-checked"})," follows the ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"checked"})})," prop."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})}),": Maps to the native ",e.jsx(r.code,{children:"disabled"})," attribute."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"ref"})}),": Forwards to the underlying ",e.jsx(r.code,{children:'<input type="checkbox">'}),"."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Keyboard"})," (",e.jsx(r.em,{children:"native checkbox behavior"}),"):"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})})," uses native ",e.jsx(r.code,{children:'<input type="checkbox">'}),` keyboard behavior (tab order, Space to toggle,
and label activation). Do not intercept `,e.jsx("kbd",{children:"Space"})," or otherwise prevent the native toggle."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Screen reader expectations"})," (",e.jsx(r.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["On focus, assistive technology announces the Checkbox ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})}),` and checked, unchecked, or mixed
state`]}),`
`,e.jsx(r.li,{children:"Disabled checkboxes are announced as unavailable"}),`
`]}),`
`,e.jsxs(r.p,{children:[`For group, hint, error, and required association, see
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#built-in-behaviors",children:"FormField's Built-in Behaviors"}),"."]}),`
`,e.jsx(r.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(r.p,{children:["Required in application code for an accessible Checkbox. Rows marked ",e.jsx(r.em,{children:"(conditional)"}),` apply only when
the situation matches—otherwise omit.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"If no design spec is provided:"})," use a visible, non-empty Checkbox ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})}),`. Omit
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),` unless the spec includes a group name, more than one independent option for the
same question, or hint, error, caution, or required state. Omit `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Hint"})}),`,
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"isRequired"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"error"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"indeterminate"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})}),", a custom ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"id"})}),`, and a
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"ref"})})," unless the spec requires them."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Choose a composition:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Standalone ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})})," with ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})}),` — one control with no hint, error, caution, or required
state`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),` — one question with two or more independent options, or any checkbox that
needs a group name, hint, error, caution, or required state`]}),`
`,e.jsxs(r.li,{children:["Nested ",e.jsx(r.code,{children:"<ul>"})," / ",e.jsx(r.code,{children:"<li>"})," — parent checkbox with nested children and ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"indeterminate"})}),`. Do not use
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),` for that hierarchy. Checkboxes that answer different questions stay in
separate compositions.`]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Programmatic focus"})," ",e.jsx(r.em,{children:"(conditional — omit by default)"}),":"]}),`
`,e.jsxs(r.p,{children:["Attach a ",e.jsx(r.code,{children:"ref"}),` only when the product must move focus to the checkbox after an action (for example,
`,e.jsx(r.strong,{children:"Submit"})," in ",e.jsx(r.a,{href:"#ref-forwarding",children:"Ref Forwarding"}),"). Do not attach a ",e.jsx(r.code,{children:"ref"})," or call ",e.jsx(r.code,{children:"focus()"}),` unless the
design or developer asks for it.`]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Requirement"}),e.jsx(r.th,{children:"How to satisfy"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Accessible name"}),e.jsxs(r.td,{children:["Non-empty ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})})," on every ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})}),". ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Label"})})," names the group only (",e.jsx(r.code,{children:"div"})," with an ",e.jsx(r.code,{children:"id"}),"); it is not a ",e.jsx(r.code,{children:"<label>"})," and does not replace ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})}),"."]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Group wiring ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:["When the spec is one question with two or more independent options, or includes a group name, hint, error, caution, or required state: ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})})," + ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Label"})})," + ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Input as={Checkbox}"})}),". Put hint, error, caution, and required on the group — see ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"}),". See ",e.jsx(r.a,{href:"#required",children:"Required"})," and ",e.jsx(r.a,{href:"#error-states",children:"Error States"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Visual error or caution ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:["When ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})})," has ",e.jsx(r.code,{children:'error="error"'})," or ",e.jsx(r.code,{children:'error="caution"'}),", also set ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"error"})})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})})," to the same state so the visual ring appears. See ",e.jsx(r.a,{href:"#caution",children:"Caution"})," and ",e.jsx(r.a,{href:"#error",children:"Error"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Indeterminate parent ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:["When a parent checkbox's value depends on nested children and some (but not all) children are checked: set ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"indeterminate"})})," on the parent ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})}),"; keep a non-empty ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})})," on the parent and on each child; nest the children in a ",e.jsx(r.code,{children:"<ul>"})," inside the parent's ",e.jsx(r.code,{children:"<li>"}),". See ",e.jsx(r.a,{href:"#indeterminate",children:"Indeterminate"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Disabled ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"disabled"})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})})," when the spec marks the option unavailable. See ",e.jsx(r.a,{href:"#disabled",children:"Disabled"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Programmatic focus ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"ref"})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})})," (or ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Input"})}),") and move focus when the product requires it — omit by default (see ",e.jsx(r.strong,{children:"Programmatic focus"})," above and ",e.jsx(r.a,{href:"#ref-forwarding",children:"Ref Forwarding"}),")."]})]})]})]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"REQUIRED:"})," non-empty ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"CONDITIONAL:"})," ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),` for one question with two or more independent options, or
for hint, error, caution, or required; `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"error"})})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})}),` when the group is in caution
or error; nested list + `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"indeterminate"})}),` for a parent/child tree; disabled; programmatic focus
via `,e.jsx(r.code,{children:"ref"}),". See ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"}),` for group
hint, error, caution, and required.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(r.p,{children:["Do ",e.jsx(r.strong,{children:"not"})," generate code that does the following (see ",e.jsx(r.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Manually set ",e.jsx(r.code,{children:"aria-checked"})," or ",e.jsx(r.code,{children:"htmlFor"})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})}),", or pass an ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"id"})}),` when the spec does
not require a known id — Canvas Kit wires `,e.jsx(r.code,{children:"aria-checked"})," and ",e.jsx(r.code,{children:"htmlFor"}),", and assigns an ",e.jsx(r.code,{children:"id"}),` with
`,e.jsx(r.code,{children:"useUniqueId"})," unless you pass one (see ",e.jsx(r.strong,{children:"If no design spec is provided"}),")"]}),`
`,e.jsxs(r.li,{children:["Ignore ",e.jsx(r.strong,{children:"Choose a composition"}),` — do not wrap a standalone checkbox with no group name, hint,
error, caution, or required state in `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})}),`; do not put different questions in one
group; do not use `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup"})})," for a parent/child indeterminate tree"]}),`
`,e.jsxs(r.li,{children:["Wrap ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})})," with ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input"})})," — ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})})," already renders its own ",e.jsx(r.code,{children:"<label>"}),`.
When a group is required, use `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Input as={Checkbox}"})})," (see ",e.jsx(r.strong,{children:"Group wiring"}),")"]}),`
`,e.jsxs(r.li,{children:["Omit ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"label"})})," because ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Label"})}),` is present — the group label does not name the
individual control`]}),`
`,e.jsxs(r.li,{children:["Set ",e.jsx(r.code,{children:'aria-checked="mixed"'})," without ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"indeterminate"})})]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"aria-disabled"})})," instead of ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})})," — ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"Checkbox"})}),` maps unavailability to the
native `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})})," prop"]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})}),` when the spec says users must still focus the control to hear why it is
unavailable. Only in that case keep the checkbox enabled and put the explanation in
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormFieldGroup.Hint"})})," or on an adjacent focusable control"]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:"Checkbox"}),` for mutually exclusive choices — use
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-radio--docs",rel:"nofollow",children:e.jsx(r.strong,{children:"Radio"})})," instead"]}),`
`]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(U,{name:"Checkbox",fileName:"/react/"}),`
`,e.jsx(r.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(N,{file:"./cypress/component/Checkbox.spec.tsx",initialSpecs:{type:"file",name:"Checkbox",children:[{type:"describe",name:"Checkbox",children:[{type:"describe",name:"given the '' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the '' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the '' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Disabled' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]},{type:"describe",name:"given the 'Indeterminate' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should have the correct attributes"}]}]}]},name:"Checkbox"})]})}function ee(n={}){const{wrapper:r}={...D(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(P,{...n})}):P(n)}const re={title:"Components/Inputs/Checkbox",component:i,tags:["autodocs"],parameters:{docs:{page:ee}}},u={render:I},j={render:S},g={render:q},k={render:R},b={render:G},f={render:E},C={render:z},y={render:T},F={render:L};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...u.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: InverseExample
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: IndeterminateExample
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...F.parameters?.docs?.source}}};const qr=["Caution","Basic","Inverse","Disabled","Error","Indeterminate","LabelPosition","RefForwarding","Required"];export{j as Basic,u as Caution,k as Disabled,b as Error,f as Indeterminate,g as Inverse,C as LabelPosition,y as RefForwarding,F as Required,qr as __namedExportsOrder,re as default};
