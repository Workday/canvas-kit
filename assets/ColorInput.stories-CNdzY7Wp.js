import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as B}from"./index-3YbjYt95.js";import{ae as P}from"./index-B7XXfe5h.js";import{E as d,c as H}from"./union-CniGnSAc.js";import{S as M}from"./Specifications-C_8uzzh_.js";import{e as i}from"./index-IfJi-UCQ.js";import{F as t}from"./FormField-DBJ6kUEd.js";import{C as l}from"./ColorInput-D3n6ss_X.js";import{P as T}from"./PrimaryButton-D5v02UCx.js";import{S as q}from"./TypeLevelComponents-Bp1jFajF.js";import"./iframe-JaH-B26f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-gewk2tVd.js";import"./Svg-pWcUwgKK.js";import"./px2rem-C0KbprIx.js";import"./components-BC9eTosh.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-C4zEgVH_.js";import"./Text-DCWkG9qZ.js";import"./mergeStyles-BwvcP3zW.js";import"./Box-Berqkg0s.js";import"./index-CjGALPG9.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-kD_kQJ4m.js";import"./grid-L1dbhipu.js";import"./index-5dfzm_kn.js";import"./Card-CK3I0y_S.js";import"./ExternalHyperlink-DDmFkxfC.js";import"./Hyperlink-CiQjeIy9.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BSYdFPfk.js";import"./BaseButton-DI27SrsM.js";import"./Button-CSRY-Hl0.js";import"./lerna-DBkctN9J.js";import"./CanvasProvider-ZQW06Ivv.js";import"./index-5mrAZJYD.js";import"./Tooltip-DPxT0V2w.js";import"./useTooltip-ZpvAqNNz.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-uv5na6lZ.js";import"./Popper-DUTAU7yt.js";import"./TertiaryButton-UTJ3hnV1.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-CM2304tH.js";import"./check-Bvurkvei.js";import"./Expandable-BZ-zBmSc.js";import"./Avatar-6NXN_wUR.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DJ3Ch2nb.js";import"./Popup-CjJtetoF.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BMD-7lNA.js";import"./useInitialFocus-BCQsnoIT.js";import"./useReturnFocus-42FhoN3N.js";import"./useFocusRedirect-C7USV4J8.js";import"./Breadcrumbs-DA3HxUJk.js";import"./useOverflowListTarget-upDRG8Jc.js";import"./useListItemSelect-kam_5bXK.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-FGPO3Mka.js";import"./OverflowTooltip-D71sFiRJ.js";import"./check-small-C7Z-gSGs.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-D4H0wg8Z.js";import"./Table-Bjb3VJLc.js";import"./TextInput-CvOUSrVy.js";import"./types-DXdjelYI.js";const b=()=>{const[n,r]=i.useState(""),o=a=>{r(a.target.value)};return e.jsxs(t,{children:[e.jsx(t.Label,{children:"Background Color"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:o,value:n})})]})};b.__RAW__=`import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const k=()=>{const[n,r]=i.useState(""),o=a=>{r(a.target.value)};return e.jsxs(t,{error:"caution",children:[e.jsx(t.Label,{children:"Background Color"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:l,onChange:o,value:n}),e.jsx(t.Hint,{children:"Please select a background color."})]})]})};k.__RAW__=`import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Caution = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="caution">
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
        <FormField.Hint>Please select a background color.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
`;const j=()=>{const[n,r]=i.useState(""),o=a=>{r(a.target.value)};return e.jsxs(t,{children:[e.jsx(t.Label,{children:"Background Color"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:o,showCheck:!0,value:n})})]})};j.__RAW__=`import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Checked = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} showCheck={true} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const w=()=>{const[n,r]=i.useState(""),o=a=>{r(a.target.value)};return e.jsxs(t,{children:[e.jsx(t.Label,{children:"Background Color"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,disabled:!0,onChange:o,value:n})})]})};w.__RAW__=`import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} disabled onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const I=()=>{const[n,r]=i.useState(""),o=a=>{r(a.target.value)};return e.jsxs(t,{error:"error",children:[e.jsx(t.Label,{children:"Background Color"}),e.jsxs(t.Field,{children:[e.jsx(t.Input,{as:l,onChange:o,value:n}),e.jsx(t.Hint,{children:"Please select a background color."})]})]})};I.__RAW__=`import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="error">
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
        <FormField.Hint>Please select a background color.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
`;const R=()=>{const[n,r]=i.useState(""),o=a=>{r(a.target.value)};return e.jsxs(t,{cs:{width:"100%"},children:[e.jsx(t.Label,{children:"Background Color"}),e.jsx(t.Field,{children:e.jsx(t.Input,{cs:{width:"100%"},as:l,onChange:o,value:n})})]})};R.__RAW__=`import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField cs={{width: '100%'}}>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input
          cs={{width: '100%'}}
          as={ColorInput}
          onChange={handleChange}
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};
`;const S=()=>{const[n,r]=i.useState(""),o=a=>{r(a.target.value)};return e.jsxs(t,{orientation:"horizontalStart",children:[e.jsx(t.Label,{children:"Background Color"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:o,value:n})})]})};S.__RAW__=`import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const LabelPosition = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const L=()=>{const[n,r]=i.useState(""),o=i.useRef(null),a=f=>{r(f.target.value)},g=()=>{o.current.focus()};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(t.Label,{children:"Background Color"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:a,ref:o,value:n})})]}),e.jsx(T,{onClick:g,children:"Focus Color Input"})]})};L.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

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
        <FormField.Label>Background Color</FormField.Label>
        <FormField.Field>
          <FormField.Input as={ColorInput} onChange={handleChange} ref={ref} value={value} />
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Color Input</PrimaryButton>
    </>
  );
};
`;const V=()=>{const[n,r]=i.useState(""),o=a=>{r(a.target.value)};return e.jsxs(t,{isRequired:!0,children:[e.jsx(t.Label,{children:"Background Color"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:o,value:n})})]})};V.__RAW__=`import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField isRequired={true}>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
`;const E=()=>{const[n,r]=i.useState(""),[o,a]=i.useState(""),g=y=>{r(y.target.value)},f=y=>{a(y)};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(t.Label,{children:"Background Color"}),e.jsx(t.Field,{children:e.jsx(t.Input,{as:l,onChange:g,onValidColorChange:f,value:n})})]}),e.jsxs(q,{size:"large",children:["Last valid color: ",o]})]})};E.__RAW__=`import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Subtext} from '@workday/canvas-kit-react/text';

export const ValidColorChange = () => {
  const [value, setValue] = React.useState('');
  const [validColor, setValidColor] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleValidColorChange = (color: string) => {
    setValidColor(color);
  };

  return (
    <>
      <FormField>
        <FormField.Label>Background Color</FormField.Label>
        <FormField.Field>
          <FormField.Input
            as={ColorInput}
            onChange={handleChange}
            onValidColorChange={handleValidColorChange}
            value={value}
          />
        </FormField.Field>
      </FormField>
      <Subtext size="large">Last valid color: {validColor}</Subtext>
    </>
  );
};
`;function _(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...B(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(P,{of:A}),`
`,e.jsx(r.h1,{id:"canvas-kit-color-input",children:"Canvas Kit Color Input"}),`
`,e.jsx(r.p,{children:"Color Input lets a user specify a color by entering a hexadecimal value into a text field."}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://design.workday.com/components/inputs/color-input",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.p,{children:["Color Input should be used in tandem with ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` to meet
accessibility standards.`]}),`
`,e.jsx(d,{code:b}),`
`,e.jsx(r.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"disabled"})," prop of the Color Input to prevent users from interacting with it."]}),`
`,e.jsx(d,{code:w}),`
`,e.jsx(r.h3,{id:"checked",children:"Checked"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"showCheck"})," prop of the Color Input to display a check icon in the swatch."]}),`
`,e.jsx(d,{code:j}),`
`,e.jsx(r.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(r.p,{children:["Color Input supports ",e.jsx(r.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will
forward `,e.jsx(r.code,{children:"ref"})," to its underlying ",e.jsx(r.code,{children:'<input type="text">'})," element."]}),`
`,e.jsx(d,{code:L}),`
`,e.jsx(r.h3,{id:"valid-color-change-callback",children:"Valid Color Change Callback"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"onValidColorChange"}),` prop of the Color Input to set a callback for when a valid hex color is
provided.`]}),`
`,e.jsxs(r.p,{children:[`The color passed to the callback will be prefixed with a hash and expanded if necessary. For
example, `,e.jsx(r.code,{children:"03F"})," would be converted to ",e.jsx(r.code,{children:"#0033FF"}),"."]}),`
`,e.jsx(d,{code:E}),`
`,e.jsx(r.h3,{id:"grow",children:"Grow"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"grow"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:"true"}),` to configure the Color Input to expand to
the width of its container.`]}),`
`,e.jsx(d,{code:R}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"grow"})," prop may also be applied directly to the Color Input if Form Field is not being used."]}),`
`,e.jsx(r.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(d,{code:S}),`
`,e.jsx(r.h3,{id:"required",children:"Required"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"required"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:"true"}),` to indicate that the field is required.
Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(d,{code:V}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"error"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:'"caution"'})," or ",e.jsx(r.code,{children:'"error"'}),` to set the Color Input
to the Caution or Error state, respectively. You will also need to set the `,e.jsx(r.code,{children:"hintId"})," and ",e.jsx(r.code,{children:"hintText"}),`
props on the Form Field to meet accessibility standards.`]}),`
`,e.jsx(r.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(d,{code:k}),`
`,e.jsx(r.h4,{id:"error",children:"Error"}),`
`,e.jsx(d,{code:I}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(H,{name:"ColorInput",fileName:"/react/"}),`
`,e.jsx(r.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(M,{file:"./cypress/component/ColorPicker.spec.tsx",initialSpecs:{type:"file",name:"ColorPicker",children:[{type:"describe",name:"ColorInput",children:[{type:"describe",name:"given the 'Basic' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be focused"}]},{type:"describe",name:"when provided a 6 digit hex value",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a 3 digit hex",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a hex with a hash",children:[{type:"it",name:"should strip the hash from the hex value"}]},{type:"describe",name:"when provided a hex with more than 6 characters",children:[{type:"it",name:"should truncate the value to a length of 6"}]}]},{type:"describe",name:"given the 'Caution' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be focused"}]},{type:"describe",name:"when provided a 6 digit hex value",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a 3 digit hex",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a hex with a hash",children:[{type:"it",name:"should strip the hash from the hex value"}]},{type:"describe",name:"when provided a hex with more than 6 characters",children:[{type:"it",name:"should truncate the value to a length of 6"}]}]},{type:"describe",name:"given the 'Error' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be focused"}]},{type:"describe",name:"when provided a 6 digit hex value",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a 3 digit hex",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a hex with a hash",children:[{type:"it",name:"should strip the hash from the hex value"}]},{type:"describe",name:"when provided a hex with more than 6 characters",children:[{type:"it",name:"should truncate the value to a length of 6"}]}]},{type:"describe",name:"given the 'Checked' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be focused"}]},{type:"describe",name:"when provided a 6 digit hex value",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a 3 digit hex",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a hex with a hash",children:[{type:"it",name:"should strip the hash from the hex value"}]},{type:"describe",name:"when provided a hex with more than 6 characters",children:[{type:"it",name:"should truncate the value to a length of 6"}]}]},{type:"describe",name:"given the 'Grow' example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be focused"}]},{type:"describe",name:"when provided a 6 digit hex value",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a 3 digit hex",children:[{type:"it",name:"should reflect the hex value"}]},{type:"describe",name:"when provided a hex with a hash",children:[{type:"it",name:"should strip the hash from the hex value"}]},{type:"describe",name:"when provided a hex with more than 6 characters",children:[{type:"it",name:"should truncate the value to a length of 6"}]}]},{type:"describe",name:"given the `Disabled` example is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]}]},{type:"describe",name:"ColorPreview",children:[{type:"describe",name:"given the 'Basic' story is rendered",children:[{type:"it",name:"should not have any axe errors"}]}]},{type:"describe",name:"ColorPicker",children:[{type:"describe",name:"Icon button ColorPicker Popup",children:[{type:"describe",name:"when the SecondaryButton is clicked",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be open"},{type:"describe",name:"when a swatch is clicked",children:[{type:"it",name:"should have check icon"},{type:"describe",name:"when color reset is clicked",children:[{type:"it",name:"should set the color picker value to the reset color"}]}]},{type:"describe",name:"when a custom color is submitted",children:[{type:"it",name:"should set the selected color to input value"}]}]}]},{type:"describe",name:"Color Input ColorPicker Popup",children:[{type:"describe",name:"when the input is focused",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be open"},{type:"describe",name:"when a swatch is clicked",children:[{type:"it",name:"should update the color input to the swatch color"},{type:"it",name:"should have check icon"},{type:"describe",name:"when color reset is clicked",children:[{type:"it",name:"should set the color picker value to the reset color"}]}]}]}]},{type:"describe",name:"when the InputInteraction story is loaded",children:[{type:"describe",name:"when input is entered into the color input and user hits enter",children:[{type:"it",name:"should not enter a newline in the textarea"}]}]}]}]},name:"ColorInput"})]})}function D(n={}){const{wrapper:r}={...B(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(_,{...n})}):_(n)}const A={title:"Components/Inputs/Color Picker/Color Input",component:l,tags:["autodocs"],parameters:{docs:{page:D}}},s={render:k},c={render:b},h={render:j},p={render:w},m={render:I},u={render:R},F={render:S},x={render:L},v={render:V},C={render:E};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: CheckedExample
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: GrowExample
}`,...u.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...F.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: ValidColorChangeExample
}`,...C.parameters?.docs?.source}}};const pr=["Caution","Basic","Checked","Disabled","Error","Grow","LabelPosition","RefForwarding","Required","ValidColorChange"];export{c as Basic,s as Caution,h as Checked,p as Disabled,m as Error,u as Grow,F as LabelPosition,x as RefForwarding,v as Required,C as ValidColorChange,pr as __namedExportsOrder,A as default};
