import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as x}from"./index-3YbjYt95.js";import{ae as b}from"./index-Ued3TV6s.js";import{E as g,c as D}from"./union-B1cmIDVh.js";import{e as j}from"./index-IfJi-UCQ.js";import{D as i}from"./Dialog-DjQbCvjl.js";import{P as r}from"./PrimaryButton-WPKcJ4ml.js";import{F as t}from"./FormField-DJsuX8Xy.js";import{T as f}from"./TextInput-6zwAIbi7.js";import{F as p}from"./Flex-hE1PVdSE.js";import"./iframe-C_doqmiv.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./px2rem-C0KbprIx.js";import"./components-CXVvXGX8.js";import"./cs-DvbI9OYs.js";import"./StatusIndicator-D9ob0TlI.js";import"./Text-Dt7EG7Lz.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./index-CYsyLHR7.js";import"./Card-jS6NBqm3.js";import"./ExternalHyperlink-aQwGH6Hm.js";import"./Hyperlink-nKvi0fIc.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-DBrzjuE9.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-_9ty_XDZ.js";import"./lerna-slKU9GXb.js";import"./CanvasProvider-BRuur9nH.js";import"./Tooltip-B3V4skOm.js";import"./useTooltip-DUG7iIce.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./Popper-CGqk9_xm.js";import"./TertiaryButton-Byu4oUFZ.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DgctLa3l.js";import"./ColorPicker-BZa6q9cC.js";import"./ColorInput-DdzZruxs.js";import"./check-small-CEmhQ7AS.js";import"./check-BG7HONvH.js";import"./Expandable-QifH75dX.js";import"./Avatar-Cf4g1-9p.js";import"./chevron-up-D6Ci4o5O.js";import"./Breadcrumbs-B3iwir0b.js";import"./useOverflowListTarget-BiBJ1XQw.js";import"./useListItemSelect-DTkyX0KL.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D8z2UdGJ.js";import"./OverflowTooltip-DIr6RY4Y.js";import"./useFocusRedirect-CjUSvw7a.js";import"./useReturnFocus-CF7XwcyY.js";import"./usePopupTarget-ukAEISND.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Table-DPxnEvid.js";import"./Popup-CSV3rOyv.js";import"./x-BnLC6lG-.js";import"./useInitialFocus-D6f9kMrD.js";import"./types-DXdjelYI.js";const m=()=>{const[n,o]=j.useState(""),l=c=>{o(c.target.value)},d=()=>{console.log("Email Submitted")};return e.jsxs(i,{children:[e.jsx(i.Target,{as:r,children:"Open for Offer"}),e.jsx(i.Popper,{children:e.jsxs(i.Card,{children:[e.jsx(i.CloseIcon,{"aria-label":"Close"}),e.jsx(i.Heading,{paddingTop:"m",children:"Sign Up for 15% Off Your Next Order"}),e.jsx(i.Body,{children:e.jsxs(t,{children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Input,{as:f,onChange:l,value:n})]})}),e.jsxs(p,{gap:"s",padding:"xxs",marginTop:"xxs",children:[e.jsx(i.CloseButton,{as:r,onClick:d,children:"Submit"}),e.jsx(i.CloseButton,{children:"Cancel"})]})]})})]})};m.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEmail = () => {
    console.log('Email Submitted');
  };
  return (
    <Dialog>
      <Dialog.Target as={PrimaryButton}>Open for Offer</Dialog.Target>
      <Dialog.Popper>
        <Dialog.Card>
          <Dialog.CloseIcon aria-label="Close" />
          <Dialog.Heading paddingTop="m">Sign Up for 15% Off Your Next Order</Dialog.Heading>
          <Dialog.Body>
            <FormField>
              <FormField.Label>Email</FormField.Label>
              <FormField.Input as={TextInput} onChange={handleChange} value={value} />
            </FormField>
          </Dialog.Body>
          <Flex gap="s" padding="xxs" marginTop="xxs">
            <Dialog.CloseButton as={PrimaryButton} onClick={handleEmail}>
              Submit
            </Dialog.CloseButton>
            <Dialog.CloseButton>Cancel</Dialog.CloseButton>
          </Flex>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};
`;const h=()=>{const[n,o]=j.useState(""),l=c=>{o(c.target.value)},d=()=>{console.log("Email Submitted")};return e.jsxs(p,{gap:"m",children:[e.jsxs(i,{children:[e.jsx(i.Target,{as:r,children:"Open for Offer"}),e.jsx(i.Popper,{children:e.jsxs(i.Card,{children:[e.jsx(i.CloseIcon,{"aria-label":"Close"}),e.jsx(i.Heading,{paddingTop:"m",children:"Sign Up for 15% Off Your Next Order"}),e.jsx(i.Body,{children:e.jsxs(t,{children:[e.jsx(t.Label,{children:"Email"}),e.jsx(t.Input,{as:f,onChange:l,value:n})]})}),e.jsxs(p,{gap:"s",padding:"xxs",marginTop:"xxs",children:[e.jsx(i.CloseButton,{as:r,onClick:d,children:"Submit"}),e.jsx(i.CloseButton,{children:"Cancel"})]})]})})]}),e.jsx(r,{children:"Focus #1"}),e.jsx(r,{children:"Focus #2"})]})};h.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Focus = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEmail = () => {
    console.log('Email Submitted');
  };
  return (
    <Flex gap="m">
      <Dialog>
        <Dialog.Target as={PrimaryButton}>Open for Offer</Dialog.Target>
        <Dialog.Popper>
          <Dialog.Card>
            <Dialog.CloseIcon aria-label="Close" />
            <Dialog.Heading paddingTop="m">Sign Up for 15% Off Your Next Order</Dialog.Heading>
            <Dialog.Body>
              <FormField>
                <FormField.Label>Email</FormField.Label>
                <FormField.Input as={TextInput} onChange={handleChange} value={value} />
              </FormField>
            </Dialog.Body>
            <Flex gap="s" padding="xxs" marginTop="xxs">
              <Dialog.CloseButton as={PrimaryButton} onClick={handleEmail}>
                Submit
              </Dialog.CloseButton>
              <Dialog.CloseButton>Cancel</Dialog.CloseButton>
            </Flex>
          </Dialog.Card>
        </Dialog.Popper>
      </Dialog>
      <PrimaryButton>Focus #1</PrimaryButton>
      <PrimaryButton>Focus #2</PrimaryButton>
    </Flex>
  );
};
`;function u(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...x(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{of:y}),`
`,e.jsx(o.h1,{id:"canvas-kit-dialog",children:"Canvas Kit Dialog"}),`
`,e.jsx(o.p,{children:`A Dialog component is a non-modal type of dialog that will not render the rest of the page inert
while it is active. A Dialog should be used in situations where the task is not critical.`}),`
`,e.jsx(o.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(o.p,{children:["Unlike Modal, Dialog ",e.jsx(o.strong,{children:"does not"}),` render the rest of the page inert while it is active. Dialog
should be used in situations where the task does not require immediate attention.`]}),`
`,e.jsx(g,{code:m}),`
`,e.jsx(o.h3,{id:"focus-redirect",children:"Focus Redirect"}),`
`,e.jsxs(o.p,{children:["Dialog ",e.jsx(o.strong,{children:"does not"}),` trap keyboard focus like the Modal component does. Instead, it allows focus to
move freely in and out of the dialog, supporting more flexible navigation. The following example
shows how Dialog manages focus in and out of the component.`]}),`
`,e.jsx(g,{code:h}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Accessibility Note"}),": Focus redirect ",e.jsx(o.strong,{children:"will not"}),` have any effect on the reading order of a
screen reader.`]}),`
`]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Dialog"})," composes the popup stack with ",e.jsx(o.code,{children:"useInitialFocus"}),", ",e.jsx(o.code,{children:"useReturnFocus"}),", ",e.jsx(o.code,{children:"useCloseOnEscape"}),`,
`,e.jsx(o.code,{children:"useCloseOnOutsideClick"}),", and ",e.jsx(o.code,{children:"useFocusRedirect"}),`. The card container includes an ARIA
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:'role="dialog"'})})," that is ",e.jsx(o.strong,{children:"non-modal"}),`: the rest of the page stays available. The card also
includes an `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-labelledby"})})," attribute referencing the ",e.jsx(o.code,{children:"id"})," on ",e.jsx(o.code,{children:"Dialog.Heading"}),`, so the dialog
has an accessible name that matches the visible heading.`]}),`
`,e.jsxs(o.p,{children:["The Dialog component includes a ",e.jsx(o.code,{children:"<div>"})," element (sibling to the ",e.jsx(o.code,{children:"Dialog.Target"}),") with ",e.jsx(o.code,{children:"aria-owns"}),`
pointing to the `,e.jsx(o.code,{children:"Dialog.Card"}),`. This remaps the hierarchy of the accessibility tree to improve
sequential reading order in supported browsers. For more information, see
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-inline-popups--docs",rel:"nofollow",children:"Guides > Accessibility > Inline Popups"}),"."]}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",rel:"nofollow",children:"Dialog Pattern | APG | WAI | W3C"})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Prefer ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Heading"})}),` so the dialog is properly labelled; avoid leaving a dialog without an
accessible name.`]}),`
`,e.jsxs(o.li,{children:["Ensure icon-only controls such as ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseIcon"})}),` include an accessible name. Prefer the
`,e.jsx(o.code,{children:"Tooltip"})," component to provide a visible label, or a translated ",e.jsx(o.code,{children:"aria-label"})," string is acceptable."]}),`
`]}),`
`,e.jsx(o.h3,{id:"navigation",children:"Navigation"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Enter"})," / ",e.jsx(o.strong,{children:"Space"}),`: Open the dialog (standard button behavior on the trigger). When it opens,
focus moves to the `,e.jsx(o.strong,{children:"first focusable element"}),` inside the dialog in DOM order—often the close
control—or to the element referenced by `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," on the dialog model when set."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Tab"})," / ",e.jsx(o.strong,{children:"Shift + Tab"}),`: Move through focusable elements inside the dialog; leaving the first or
last focusable element `,e.jsx(o.strong,{children:"closes"}),` the dialog and moves focus to the next or previous focusable
element on the page (non-modal focus redirect behavior).`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Escape"}),": Closes the dialog and returns focus to the ",e.jsx(o.code,{children:"Dialog.Target"}),` (or configured return
target).`]}),`
`]}),`
`,e.jsx(o.h3,{id:"screen-reader-experience",children:"Screen Reader Experience"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"When the dialog opens:"}),` Screen readers should announce the name and role of the first focused
control (often the close button), the dialog's name (`,e.jsx(o.code,{children:"Dialog.Heading"}),") and role."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Reading order:"}),` The dialog contents should be read in the same order as it appears on screen
for browsers and screen readers that support `,e.jsx(o.code,{children:"aria-owns"}),`. Results vary, so always test with your
supported browsers and screen reader combinations.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Expanded or collapsed state:"})," The ",e.jsx(o.code,{children:"Dialog.Target"}),` does not include an expanded or collapsed
state by default, but it can be added if the interaction design isn't using an initial focus for
the Dialog. See
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-inline-popups--docs",rel:"nofollow",children:"Guides > Accessibility > Inline Popups"}),`
for more information.`]}),`
`]}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(D,{name:"Dialog",fileName:"/react/"})]})}function C(n={}){const{wrapper:o}={...x(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(u,{...n})}):u(n)}const y={title:"Components/Popups/Dialog",component:i,tags:["autodocs"],parameters:{docs:{page:C}}},a={render:m},s={render:h};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: FocusExample
}`,...s.parameters?.docs?.source}}};const ze=["Basic","Focus"];export{a as Basic,s as Focus,ze as __namedExportsOrder,y as default};
