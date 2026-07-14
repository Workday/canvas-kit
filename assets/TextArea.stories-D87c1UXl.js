import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as C}from"./index-3YbjYt95.js";import{ae as k}from"./index-B7XXfe5h.js";import{E as l,c as S}from"./union-CniGnSAc.js";import{S as _}from"./Specifications-C_8uzzh_.js";import{e as s}from"./index-IfJi-UCQ.js";import{F as n}from"./FormField-DBJ6kUEd.js";import{T as o}from"./TextArea-DGyxj9jT.js";import{P as E}from"./PrimaryButton-D5v02UCx.js";import"./iframe-JaH-B26f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-gewk2tVd.js";import"./Svg-pWcUwgKK.js";import"./px2rem-C0KbprIx.js";import"./components-BC9eTosh.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-C4zEgVH_.js";import"./Text-DCWkG9qZ.js";import"./mergeStyles-BwvcP3zW.js";import"./Box-Berqkg0s.js";import"./index-CjGALPG9.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-kD_kQJ4m.js";import"./grid-L1dbhipu.js";import"./index-5dfzm_kn.js";import"./Card-CK3I0y_S.js";import"./ExternalHyperlink-DDmFkxfC.js";import"./Hyperlink-CiQjeIy9.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BSYdFPfk.js";import"./BaseButton-DI27SrsM.js";import"./Button-CSRY-Hl0.js";import"./lerna-DBkctN9J.js";import"./CanvasProvider-ZQW06Ivv.js";import"./index-5mrAZJYD.js";import"./Tooltip-DPxT0V2w.js";import"./useTooltip-ZpvAqNNz.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-uv5na6lZ.js";import"./Popper-DUTAU7yt.js";import"./TertiaryButton-UTJ3hnV1.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bp1jFajF.js";import"./ColorPicker-CM2304tH.js";import"./ColorInput-D3n6ss_X.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-CvOUSrVy.js";import"./types-DXdjelYI.js";import"./check-Bvurkvei.js";import"./Expandable-BZ-zBmSc.js";import"./Avatar-6NXN_wUR.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DJ3Ch2nb.js";import"./Popup-CjJtetoF.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BMD-7lNA.js";import"./useInitialFocus-BCQsnoIT.js";import"./useReturnFocus-42FhoN3N.js";import"./useFocusRedirect-C7USV4J8.js";import"./Breadcrumbs-DA3HxUJk.js";import"./useOverflowListTarget-upDRG8Jc.js";import"./useListItemSelect-kam_5bXK.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-FGPO3Mka.js";import"./OverflowTooltip-D71sFiRJ.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-D4H0wg8Z.js";import"./Table-Bjb3VJLc.js";const v=()=>{const[t,r]=s.useState(""),a=i=>{r(i.target.value)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:o,onChange:a,value:t})})]})};v.__RAW__=`import React from 'react';

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
`;const f=()=>{const[t,r]=s.useState(""),a=i=>{r(i.target.value)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:o,disabled:!0,onChange:a,value:t})})]})};f.__RAW__=`import React from 'react';

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
`;const j=()=>{const[t,r]=s.useState(""),a=i=>{r(i.target.value)};return e.jsxs(n,{grow:!0,children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:o,onChange:a,value:t})})]})};j.__RAW__=`import React from 'react';

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
`;const g=()=>{const[t,r]=s.useState(""),a=i=>{r(i.target.value)};return e.jsxs(n,{orientation:"horizontalStart",children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsxs(n.Field,{children:[e.jsx(n.Input,{as:o,onChange:a,value:t}),e.jsx(n.Hint,{children:"Message must be under 200 characters"})]})]})};g.__RAW__=`import React from 'react';

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
`;const b=()=>{const[t,r]=s.useState(""),a=i=>{r(i.target.value)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:o,onChange:a,placeholder:"Let us know how we did!",value:t})})]})};b.__RAW__=`import React from 'react';

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
`;const w=()=>{const[t,r]=s.useState(""),a=s.useRef(null),i=L=>{r(L.target.value)},T=()=>{a.current.focus()};return e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:o,onChange:i,ref:a,value:t})})]}),e.jsx(E,{onClick:T,children:"Focus Text Area"})]})};w.__RAW__=`import React from 'react';

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
`;const y=()=>{const[t,r]=s.useState(""),a=i=>{r(i.target.value)};return e.jsxs(n,{isRequired:!0,children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:o,onChange:a,value:t})})]})};y.__RAW__=`import React from 'react';

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
`;const R=()=>{const[t,r]=s.useState(""),a=i=>{r(i.target.value)};return e.jsxs(n,{children:[e.jsx(n.Label,{children:"Leave a Review"}),e.jsx(n.Field,{children:e.jsx(n.Input,{as:o,onChange:a,resize:o.ResizeDirection.Vertical,value:t})})]})};R.__RAW__=`import React from 'react';

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
`;function A(t){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...C(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(k,{of:V}),`
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
`,e.jsx(l,{code:v}),`
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
`,e.jsx(l,{code:w}),`
`,e.jsx(r.h3,{id:"resize-constraints",children:"Resize Constraints"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"resize"})," prop of the Text Area to restrict resizing of it to certain dimensions. ",e.jsx(r.code,{children:"resize"}),`
accepts the following values:`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"TextArea.ResizeDirection.Both"})," (Default)"]}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"TextArea.ResizeDirection.Horizontal"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"TextArea.ResizeDirection.None"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"TextArea.ResizeDirection.Vertical"})}),`
`]}),`
`,e.jsx(l,{code:R}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Accessibility Note"}),": Allowing users to resize the text area (default ",e.jsx(r.code,{children:"resize: both"}),`) improves
accessibility by letting them adjust it for comfort. Avoid disabling resizing (`,e.jsx(r.code,{children:"resize: none"}),`)
unless necessary, and always ensure the initial size meets the needs of your content.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"grow",children:"Grow"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"grow"})," prop of the Text Area to ",e.jsx(r.code,{children:"true"}),` to configure the Text Area to expand to the width of
its container.`]}),`
`,e.jsx(l,{code:j}),`
`,e.jsx(r.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(r.code,{children:"vertical"}),"."]}),`
`,e.jsx(l,{code:g}),`
`,e.jsx(r.h3,{id:"required",children:"Required"}),`
`,e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"required"})," prop of the wrapping Form Field to ",e.jsx(r.code,{children:"true"}),` to indicate that the field is required.
Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(l,{code:y}),`
`,e.jsx(r.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(r.p,{children:["Form Field provides error and caution states for Text Area. Set the ",e.jsx(r.code,{children:"error"}),` prop on Form Field to
`,e.jsx(r.code,{children:'"error"'})," or ",e.jsx(r.code,{children:'"caution"'})," and use ",e.jsx(r.code,{children:"FormField.Hint"}),` to provide error messages. See
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#error-states",children:"Form Field's Error documentation"}),` for
examples and accessibility guidance.`]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"TextArea"})," should be used with ",e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` to
ensure proper labeling, error handling, and help text association. See
`,e.jsx(r.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField's accessibility documentation"}),`
for comprehensive guidance on form accessibility best practices.`]}),`
`,e.jsx(r.h3,{id:"character-limits",children:"Character Limits"}),`
`,e.jsx(r.p,{children:"When limiting text area length:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Use the ",e.jsx(r.code,{children:"maxLength"})," attribute to enforce the limit programmatically."]}),`
`,e.jsxs(r.li,{children:[`For longer limits (100+ characters), consider adding character count information to
`,e.jsx(r.code,{children:"FormField.Hint"}),"."]}),`
`,e.jsxs(r.li,{children:[`Avoid announcing character counts after every keystroke, as this disrupts screen reader users.
Check out
`,e.jsx(r.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-aria-live-regions--docs#debouncing-an-arialiveregion-textarea-with-character-limit",rel:"nofollow",children:"Debouncing an AriaLiveRegion: TextArea with character limit"}),`
for an example of how to wait for users to stop typing before announcing the character count to
screen readers.`]}),`
`]}),`
`,e.jsx(r.h3,{id:"screen-reader-experience",children:"Screen Reader Experience"}),`
`,e.jsxs(r.p,{children:["When properly implemented with ",e.jsx(r.code,{children:"FormField"}),", screen readers will announce:"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The label text when the text area receives focus."}),`
`,e.jsx(r.li,{children:"Required, disabled, or read-only status."}),`
`,e.jsxs(r.li,{children:["Help text and error messages (via ",e.jsx(r.code,{children:"aria-describedby"}),")."]}),`
`,e.jsx(r.li,{children:'The current value or "blank" if empty.'}),`
`,e.jsx(r.li,{children:"That it's a multi-line text input field."}),`
`]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(S,{name:"TextArea",fileName:"/react/"}),`
`,e.jsx(r.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(_,{file:"./cypress/component/TextArea.spec.tsx",initialSpecs:{type:"file",name:"TextArea",children:[{type:"describe",name:"Text Area",children:[{type:"describe",name:"given the 'Basic' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"when clicked",children:[{type:"it",name:"should be focused"}]},{type:"describe",name:"when text is entered",children:[{type:"it",name:"should reflect the text typed"}]}]},{type:"describe",name:"given the 'Disabled' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should be disabled"}]},{type:"describe",name:"given the 'Placeholder' story is rendered",children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should render a placeholder text"},{type:"it",name:"should reflect the text typed"}]}]}]},name:"Text Area"})]})}function z(t={}){const{wrapper:r}={...C(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(A,{...t})}):A(t)}const V={title:"Components/Inputs/TextArea",component:o,tags:["autodocs"],parameters:{docs:{page:z}}},d={render:v},c={render:f},m={render:j},h={render:g},p={render:b},u={render:w},x={render:y},F={render:R};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: GrowExample
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: PlaceholderExample
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...x.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: ResizeConstraintsExample
}`,...F.parameters?.docs?.source}}};const sr=["Basic","Disabled","Grow","LabelPosition","Placeholder","RefForwarding","Required","ResizeConstraints"];export{d as Basic,c as Disabled,m as Grow,h as LabelPosition,p as Placeholder,u as RefForwarding,x as Required,F as ResizeConstraints,sr as __namedExportsOrder,V as default};
