import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as y}from"./index-3YbjYt95.js";import{ae as R}from"./index-8zTmtzg_.js";import{E as c,c as L}from"./union-Dw3119xp.js";import{S as D}from"./Specifications-Bbdk6tYE.js";import{e as o}from"./index-IfJi-UCQ.js";import{S as d}from"./Switch-0oRLFzfJ.js";import{F as n}from"./FormField-D3X-JdP0.js";import{C as E}from"./CanvasProvider-DJRItNr0.js";import{P as I}from"./PrimaryButton-DwExYjzD.js";import"./iframe-DzHAWDep.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-oQ2K1VCn.js";import"./Svg-BMATp2Oq.js";import"./px2rem-C0KbprIx.js";import"./components-CxXDZKlX.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-C0c7vbAG.js";import"./Text-BU7lo9qQ.js";import"./mergeStyles-Cwq7MPiu.js";import"./Box-AXoeqAfR.js";import"./index-Cvke4sRE.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-B-mM-efm.js";import"./grid-BRoHx-9y.js";import"./cornerShape-CSfH3EMK.js";import"./index-C_4iH04t.js";import"./Card-C94ti1ug.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-DG35H1Wq.js";import"./Hyperlink-DuzNLKMl.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-ClDLkqd4.js";import"./BaseButton-CXgunvHx.js";import"./Button-BKwQ9p25.js";import"./lerna-DluDaNV7.js";import"./Tooltip-DUI0SA_T.js";import"./useTooltip-PjORsXZm.js";import"./getTransformFromPlacement-kDQSMLcK.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-CJ8QJI5q.js";import"./Popper-mGIbWNdd.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BjIo91oe.js";import"./index-CFEs8r9D.js";import"./TypeLevelComponents-CWBiLbMZ.js";import"./ColorPicker-4zrYiXHt.js";import"./ColorInput-BSxd7JdF.js";import"./check-small-BqSDQIle.js";import"./TextInput-DX-uTB_8.js";import"./types-DXdjelYI.js";import"./check-Ds6vsrAM.js";import"./Expandable-CSlI0MMa.js";import"./Avatar-CKiAmiHa.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-BY9hL40t.js";import"./Popup-Buqd_rCX.js";import"./x-B1faap_l.js";import"./usePopupTarget-BrzAvJUE.js";import"./useInitialFocus-DA01W-5V.js";import"./useReturnFocus-CgwmYqfY.js";import"./useFocusRedirect-DlsmGhp1.js";import"./Breadcrumbs-CtAhx_Hv.js";import"./useOverflowListItemMeasure-DU3HTtaC.js";import"./useListItemRegister-cbpcI0J1.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-pYQJPHtt.js";import"./OverflowTooltip-CfbyETTq.js";import"./useListItemRovingFocus-9AyEy-B6.js";import"./useListItemSelect-BVXjgXJV.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-Dl_Li4_V.js";import"./Flex-BL4S5dy0.js";import"./Table-CI-MHtGM.js";import"./x-small-Cfgu7dLY.js";const u=()=>{const[i,r]=o.useState(!1),t=s=>{r(s.target.checked)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Dark Mode"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:d,checked:i,onChange:t})})]})};u.__RAW__=`import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField>
      <FormField.Label>Dark Mode</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Switch} checked={checked} onChange={handleChange} />
      </FormField.Field>
    </FormField>
  );
};
`;const F=()=>{const[i,r]=o.useState(!1),t=s=>{r(s.target.checked)};return e.jsxs(n,{error:"caution",children:[e.jsx(n.Label,{children:"Dark Mode"}),e.jsxs(n.Field,{children:[e.jsx(n.Input,{as:d,checked:i,onChange:t}),e.jsx(n.Hint,{children:"We were unable to activate Dark Mode."})]})]})};F.__RAW__=`import React from 'react';

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
`;const g=()=>{const[i,r]=o.useState(!1),t=s=>{r(s.target.checked)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Dark Mode"}),e.jsx(n.Field,{children:e.jsx(n.Input,{disabled:!0,as:d,checked:i,onChange:t})})]})};g.__RAW__=`import React from 'react';

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
`;const f=()=>{const[i,r]=o.useState(!1),t=s=>{r(s.target.checked)};return e.jsxs(n,{error:"error",children:[e.jsx(n.Label,{children:"Dark Mode"}),e.jsxs(n.Field,{children:[e.jsx(n.Input,{as:d,checked:i,onChange:t}),e.jsx(n.Hint,{children:"We were unable to activate Dark Mode."})]})]})};f.__RAW__=`import React from 'react';

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
`;const b=()=>{const[i,r]=o.useState(!1),t=s=>{r(s.target.checked)};return e.jsxs(n,{orientation:"horizontalStart",children:[e.jsx(n.Label,{children:"Dark Mode"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:d,checked:i,onChange:t})})]})};b.__RAW__=`import React from 'react';

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
`;const w=()=>{const[i,r]=o.useState(!1),t=s=>{r(s.target.checked)};return e.jsx(E,{dir:"rtl",children:e.jsxs(n,{isRequired:!0,children:[e.jsx(n.Label,{children:"Dark Mode"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:d,checked:i,onChange:t})})]})})};w.__RAW__=`import React from 'react';

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
`;const k=()=>{const[i,r]=o.useState(!1),t=o.useRef(null),s=C=>{r(C.target.checked)},S=()=>{t.current.focus()};return e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n.Label,{children:"Dark Mode"}),e.jsx(n,{children:e.jsx(n.Input,{as:d,checked:i,ref:t,onChange:s})})]}),e.jsx(I,{onClick:S,children:"Focus Switch"})]})};k.__RAW__=`import React from 'react';

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
`;function v(i){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...y(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(R,{of:_}),`
`,e.jsx(r.h1,{id:"canvas-kit-switch",children:"Canvas Kit Switch"}),`
`,e.jsx(r.p,{children:"Switch is a selection control that is used to switch between two potential states."}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-preview-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.p,{children:["Switch should be used in tandem with ",e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` to meet
accessibility standards.`]}),`
`,e.jsx(c,{code:u}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"})," prop of the Switch to prevent users from interacting with it."]}),`
`,e.jsx(c,{code:g}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:["Switch supports ",e.jsx(r.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will forward
`,e.jsx(r.code,{children:"ref"})," to its underlying ",e.jsx(r.code,{children:'<input type="checkbox">'})," element."]}),`
`,e.jsx(c,{code:k}),`
`,e.jsx(r.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(c,{code:b}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"error"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:'"caution"'})," or ",e.jsx(r.code,{children:'"error"'}),` to set the Switch to the
Caution or Error state, respectively. You will also need to use `,e.jsx(r.code,{children:"<FormField.Hint/>"}),` for hint or
error text to meet accessibility standards.`]}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"error"})," prop may be applied directly to the Switch with a value of ",e.jsx(r.code,{children:"Switch.ErrorType.Caution"}),` or
`,e.jsx(r.code,{children:"Switch.ErrorType.Error"})," if Form Field is not being used."]}),`
`,e.jsx(r.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(c,{code:F}),`
`,e.jsx(r.h4,{id:"error",children:"Error"}),`
`,e.jsx(c,{code:f}),`
`,e.jsx(r.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,e.jsx(r.p,{children:"Switch supports right-to-left languages when specified in the CanvasProvider theme."}),`
`,e.jsx(c,{code:w}),`
`,e.jsx(r.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(r.p,{children:["Switch supports custom styling via the ",e.jsx(r.code,{children:"cs"}),` prop. For more information, check our
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:[`The primary accessibility goal is a visible, programmatically determinable name and an on or off
state that assistive technology can expose. Use `,e.jsx(r.strong,{children:"Switch"}),` for a single setting that takes effect
immediately when toggled (for example, "Dark Mode"). When the user selects one or more options that
are applied on form submission, use `,e.jsx(r.a,{href:"../?path=/docs/components-inputs-checkbox--docs",children:e.jsx(r.strong,{children:"Checkbox"})})," instead. ",e.jsx(r.strong,{children:"Switch"}),`
does not render its own `,e.jsx(r.code,{children:"<label>"}),", so it relies on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})}),` for its name, hint, error, and
required wiring — see `,e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField's accessibility documentation"}),"."]}),`
`,e.jsx(r.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(r.p,{children:["The following matches the ",e.jsx(r.a,{href:"#basic-example",children:"Basic Example"}),". Every ",e.jsx(r.strong,{children:"Switch"})," needs ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})}),`, a
visible `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Label"})}),", and ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input as={Switch}"})})," inside ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Field"})}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {FormField} from '@workday/canvas-kit-react/form-field';

const Example = () => {
  
  return (
    <FormField>
      <FormField.Label>Dark Mode</FormField.Label>
      <FormField.Field>
        <FormField.Input as={Switch} />
      </FormField.Field>
    </FormField>
  );
};
`})}),`
`,e.jsx(r.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(r.p,{children:["Canvas Kit applies these automatically when you compose ",e.jsx(r.strong,{children:"Switch"})," with ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})}),`
subcomponents. `,e.jsx(r.strong,{children:"Do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"ARIA and DOM"})," (",e.jsx(r.em,{children:"applied by Switch and FormField"}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"Switch"})}),": Renders a native ",e.jsx(r.code,{children:'<input type="checkbox">'})," with ",e.jsx(r.code,{children:'role="switch"'}),". The native ",e.jsx(r.code,{children:"checked"}),`
state is exposed to assistive technology as on or off, so no `,e.jsx(r.code,{children:"aria-checked"}),` is needed. Canvas Kit
assigns an `,e.jsx(r.code,{children:"id"})," with ",e.jsx(r.code,{children:"useUniqueId"})," unless you pass ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"id"})}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Track, thumb, and check/x icon"}),": Purely visual. The icon is a Canvas Kit ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"SystemIcon"})}),`, whose
SVG markup sets `,e.jsx(r.code,{children:'role="presentation"'})," and ",e.jsx(r.code,{children:'focusable="false"'}),", so it is not announced."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})}),": Maps to the native ",e.jsx(r.code,{children:"disabled"})," attribute."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Keyboard"})," (",e.jsx(r.em,{children:"native checkbox behavior"}),"):"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"Switch"})})," uses native ",e.jsx(r.code,{children:'<input type="checkbox">'}),` keyboard behavior (tab order and Space to
toggle). Do not intercept `,e.jsx("kbd",{children:"Space"})," or otherwise prevent the native toggle."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Screen reader expectations"})," (",e.jsx(r.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["On focus, assistive technology announces the ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Label"})}),` text, the "switch" role, and
the on or off state; when applicable, required state, invalid state (`,e.jsx(r.code,{children:'error="error"'}),`), and
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Hint"})})," text via ",e.jsx(r.code,{children:"aria-describedby"})]}),`
`,e.jsx(r.li,{children:"Toggling announces the new on or off state"}),`
`,e.jsxs(r.li,{children:["The Caution state is visual only — ",e.jsx(r.code,{children:"aria-invalid"})," is ",e.jsx(r.strong,{children:"not"})," set for ",e.jsx(r.code,{children:'error="caution"'})]}),`
`,e.jsx(r.li,{children:"Disabled switches are skipped in the tab order and may be announced as unavailable"}),`
`]}),`
`,e.jsxs(r.p,{children:[`For label, hint, and error association details, see
`,e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs#built-in-behaviors",children:"FormField's Built-in Behaviors"}),"."]}),`
`,e.jsx(r.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(r.p,{children:["Required in application code for an accessible ",e.jsx(r.strong,{children:"Switch"}),". Rows marked ",e.jsx(r.em,{children:"(conditional)"}),` apply only
when the situation matches—otherwise omit.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"If no design spec is provided:"})," use a visible ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Label"})}),`, wrap the control with
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input as={Switch}"})})," inside ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Field"})}),", and control it with ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"checked"})}),` and
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"onChange"})}),". Omit ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"isRequired"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"error"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Hint"})}),", ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})}),`,
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"isHidden"})}),", a custom ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"id"})}),", and a ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"ref"})})," unless the spec requires them."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Programmatic focus"})," ",e.jsx(r.em,{children:"(conditional — omit by default)"}),":"]}),`
`,e.jsxs(r.p,{children:["Attach a ",e.jsx(r.code,{children:"ref"}),` only when the product must move focus to the Switch after an action. Do not attach a
`,e.jsx(r.code,{children:"ref"})," or call ",e.jsx(r.code,{children:"focus()"}),` unless the design or developer asks for it. See
`,e.jsx(r.a,{href:"#ref-forwarding",children:"Ref Forwarding"})," under Usage for a complete Storybook example."]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Requirement"}),e.jsx(r.th,{children:"How to satisfy"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Accessible name"}),e.jsxs(r.td,{children:["Visible, non-empty ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Label"})}),' describing the setting (for example, "Dark Mode"), not the state ("On"/"Off"). Use ',e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Label isHidden"})})," only when an equally clear visible alternative exists"]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"Input wiring"}),e.jsxs(r.td,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input as={Switch}"})})," inside ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Field"})}),". See ",e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"})," for label, hint, error, and required wiring"]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Required state ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"isRequired"})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})," only when the form cannot be submitted unless the Switch is on — native ",e.jsx(r.code,{children:"required"})," on a checkbox means it must be checked"]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Disabled ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"disabled"})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input"})})," when the spec marks the setting unavailable. See ",e.jsx(r.a,{href:"#disabled",children:"Disabled"})]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:["Programmatic focus ",e.jsx(r.em,{children:"(conditional)"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"ref"})," on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input"})})," and call ",e.jsx(r.code,{children:"focus()"})," when the product requires it — omit by default (see ",e.jsx(r.strong,{children:"Programmatic focus"})," above and ",e.jsx(r.a,{href:"#ref-forwarding",children:"Ref Forwarding"}),")"]})]})]})]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"REQUIRED:"})," ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})," + visible ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Label"})})," + ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Input as={Switch}"})}),`
inside `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Field"})})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"CONDITIONAL:"})," ",e.jsx(r.code,{children:"isRequired"})," only when the Switch must be on; ",e.jsx(r.code,{children:"disabled"}),`; programmatic focus via
`,e.jsx(r.code,{children:"ref"}),". See ",e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"}),` for shared
FormField conditionals (hint, error, and caution).`]}),`
`]}),`
`,e.jsx(r.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(r.p,{children:["Do ",e.jsx(r.strong,{children:"not"})," generate code that does the following (see ",e.jsx(r.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Render ",e.jsx(r.strong,{children:"Switch"})," without ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})," and ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Label"})})," — ",e.jsx(r.strong,{children:"Switch"}),` has no built-in
label. For shared FormField anti-patterns (manual ARIA wiring, color-only errors, broken ID
references), see `,e.jsx(r.a,{href:"../?path=/docs/components-inputs-form-field--docs#anti-patterns",children:"FormField Anti-Patterns"})]}),`
`,e.jsxs(r.li,{children:["Manually set ",e.jsx(r.code,{children:"role"}),", ",e.jsx(r.code,{children:"aria-checked"}),", ",e.jsx(r.code,{children:"aria-labelledby"}),", ",e.jsx(r.code,{children:"aria-describedby"}),", ",e.jsx(r.code,{children:"aria-invalid"}),`, or
`,e.jsx(r.code,{children:"id"})," on ",e.jsx(r.strong,{children:"Switch"})," — Canvas Kit wires these from the native checkbox and ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})]}),`
`,e.jsxs(r.li,{children:["Nest ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})," inside ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})," instead of using ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField.Field"})}),` — the inner
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})," breaks the label association"]}),`
`,e.jsxs(r.li,{children:[`Put the state in the label (for example, "Dark Mode: On") or add a visually hidden "on"/"off"
string — the state is already announced from `,e.jsx(r.code,{children:'role="switch"'})," and ",e.jsx(r.code,{children:"checked"})]}),`
`,e.jsxs(r.li,{children:["Set ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"error"})})," directly on ",e.jsx(r.strong,{children:"Switch"})," inside ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})," — set it on ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})}),` so
`,e.jsx(r.code,{children:"aria-invalid"})," and the visual ring stay in sync. Setting ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"error"})}),` on a Switch outside
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"FormField"})})," is visual only and does not set ",e.jsx(r.code,{children:"aria-invalid"})]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"isRequired"})})," for a setting that can validly be off"]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:"Switch"}),` for selections that only apply on form submission, or for multiple related
options — use `,e.jsx(r.a,{href:"../?path=/docs/components-inputs-checkbox--docs",children:e.jsx(r.strong,{children:"Checkbox"})})," instead"]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"aria-disabled"})})," instead of ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})})," — ",e.jsx(r.strong,{children:"Switch"}),` maps unavailability to the native
`,e.jsx(r.strong,{children:e.jsx(r.code,{children:"disabled"})})," attribute"]}),`
`]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(L,{name:"Switch",fileName:"/react/"}),`
`,e.jsx(r.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(D,{file:"./cypress/component/Switch.spec.tsx",initialSpecs:{type:"file",name:"Switch",children:[{type:"describe",name:"Switch",children:[{type:"describe",name:"given the '' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the '' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the '' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be checked"}]}]},{type:"describe",name:"given the 'Disabled' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]}]}]},name:"Switch"})]})}function M(i={}){const{wrapper:r}={...y(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(v,{...i})}):v(i)}const _={title:"Preview/Inputs/Switch",component:d,tags:["autodocs"],parameters:{docs:{page:M}}},a={render:F},l={render:u},h={render:g},m={render:f},x={render:b},p={render:k},j={render:w};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...p.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...j.parameters?.docs?.source}}};const mr=["Caution","Basic","Disabled","Error","LabelPosition","RefForwarding","RTL"];export{l as Basic,a as Caution,h as Disabled,m as Error,x as LabelPosition,j as RTL,p as RefForwarding,mr as __namedExportsOrder,_ as default};
