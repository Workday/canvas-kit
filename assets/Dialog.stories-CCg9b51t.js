import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as f}from"./index-3YbjYt95.js";import{ae as D}from"./index-CKIVHgBl.js";import{E as x,c as C}from"./union-BGK8rgUq.js";import{e as b}from"./index-IfJi-UCQ.js";import{D as t}from"./Dialog-C_3S2hld.js";import{P as n}from"./PrimaryButton-CvGklA7p.js";import{p as d,g as a}from"./index-5dfzm_kn.js";import{F as r}from"./FormField-BFfTRNZ_.js";import{T as y}from"./TextInput-CbP15KMM.js";import{F as h}from"./Flex-nKWkBWu3.js";import"./iframe-Diz4iYt9.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B-7phfvA.js";import"./Svg-D3ADUsbH.js";import"./px2rem-C0KbprIx.js";import"./components-TQGor17P.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-CnMuDZZ1.js";import"./Text-CjfRv3b_.js";import"./mergeStyles-Oiw5aw0F.js";import"./Box-ndVNvIIr.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-Kr2CKVQw.js";import"./grid-Dow_xxo7.js";import"./Card-7nQmsgck.js";import"./ExternalHyperlink-Cg10-172.js";import"./Hyperlink-BYge7S98.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BOjVH68X.js";import"./BaseButton-BL7nFA1x.js";import"./Button-BA8q93Gy.js";import"./lerna-BQzkLDlj.js";import"./CanvasProvider-Bo6bulY0.js";import"./index-5mrAZJYD.js";import"./Tooltip-tTgFOjnO.js";import"./useTooltip-o9IX8o6j.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CKxDZdmA.js";import"./Popper-uJmtTCtl.js";import"./TertiaryButton-BMNSyiGZ.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-wp2T_OQ8.js";import"./ColorPicker-DBHTUBds.js";import"./ColorInput-BfqHF2t6.js";import"./check-small-C7Z-gSGs.js";import"./check-Bvurkvei.js";import"./Expandable-MlUI5j6z.js";import"./Avatar-z3-Jg-YK.js";import"./chevron-up-BKywTRZX.js";import"./Breadcrumbs-DZe9oM1Q.js";import"./useOverflowListTarget-BsYp8oFk.js";import"./useListItemSelect-ChUTjGFj.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DIzcINvf.js";import"./OverflowTooltip-BiM1Eefj.js";import"./useFocusRedirect-vdWyGSd2.js";import"./useReturnFocus-Bjuj9tfk.js";import"./usePopupTarget-d-sc7vzp.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-CdIXWeyG.js";import"./Popup-B5XfOse7.js";import"./x-D9WWWeCM.js";import"./useInitialFocus-CEIClNeF.js";import"./types-DXdjelYI.js";const g=()=>{const[i,o]=b.useState(""),c=p=>{o(p.target.value)},m=()=>{console.log("Email Submitted")};return e.jsxs(t,{children:[e.jsx(t.Target,{as:n,children:"Open for Offer"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingBlockStart:d.md},children:"Sign Up for 15% Off Your Next Order"}),e.jsx(t.Body,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Input,{as:y,onChange:c,value:i})]})}),e.jsxs(h,{cs:{padding:d.xxs,marginBlockStart:a.xs,gap:a.md},children:[e.jsx(t.CloseButton,{as:n,onClick:m,children:"Submit"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]})};g.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {system} from '@workday/canvas-tokens-web';

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
          <Dialog.Heading cs={{paddingBlockStart: system.padding.md}}>
            Sign Up for 15% Off Your Next Order
          </Dialog.Heading>
          <Dialog.Body>
            <FormField>
              <FormField.Label>Email</FormField.Label>
              <FormField.Input as={TextInput} onChange={handleChange} value={value} />
            </FormField>
          </Dialog.Body>
          <Flex
            cs={{padding: system.padding.xxs, marginBlockStart: system.gap.xs, gap: system.gap.md}}
          >
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
`;const u=()=>{const[i,o]=b.useState(""),c=p=>{o(p.target.value)},m=()=>{console.log("Email Submitted")};return e.jsxs(h,{cs:{gap:a.lg},children:[e.jsxs(t,{children:[e.jsx(t.Target,{as:n,children:"Open for Offer"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingBlockStart:d.md},children:"Sign Up for 15% Off Your Next Order"}),e.jsx(t.Body,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Input,{as:y,onChange:c,value:i})]})}),e.jsxs(h,{cs:{padding:d.xxs,marginBlockStart:a.xs,gap:a.md},children:[e.jsx(t.CloseButton,{as:n,onClick:m,children:"Submit"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]}),e.jsx(n,{children:"Focus #1"}),e.jsx(n,{children:"Focus #2"})]})};u.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {system} from '@workday/canvas-tokens-web';

export const Focus = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEmail = () => {
    console.log('Email Submitted');
  };

  return (
    <Flex cs={{gap: system.gap.lg}}>
      <Dialog>
        <Dialog.Target as={PrimaryButton}>Open for Offer</Dialog.Target>
        <Dialog.Popper>
          <Dialog.Card>
            <Dialog.CloseIcon aria-label="Close" />
            <Dialog.Heading cs={{paddingBlockStart: system.padding.md}}>
              Sign Up for 15% Off Your Next Order
            </Dialog.Heading>
            <Dialog.Body>
              <FormField>
                <FormField.Label>Email</FormField.Label>
                <FormField.Input as={TextInput} onChange={handleChange} value={value} />
              </FormField>
            </Dialog.Body>
            <Flex
              cs={{
                padding: system.padding.xxs,
                marginBlockStart: system.gap.xs,
                gap: system.gap.md,
              }}
            >
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
`;function j(i){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...f(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{of:k}),`
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
`,e.jsx(x,{code:g}),`
`,e.jsx(o.h3,{id:"focus-redirect",children:"Focus Redirect"}),`
`,e.jsxs(o.p,{children:["Dialog ",e.jsx(o.strong,{children:"does not"}),` trap keyboard focus like the Modal component does. Instead, it allows focus to
move freely in and out of the dialog, supporting more flexible navigation. The following example
shows how Dialog manages focus in and out of the component.`]}),`
`,e.jsx(x,{code:u}),`
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
`,e.jsx(C,{name:"Dialog",fileName:"/react/"})]})}function v(i={}){const{wrapper:o}={...f(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(j,{...i})}):j(i)}const k={title:"Components/Popups/Dialog",component:t,tags:["autodocs"],parameters:{docs:{page:v}}},s={render:g},l={render:u};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: FocusExample
}`,...l.parameters?.docs?.source}}};const Ke=["Basic","Focus"];export{s as Basic,l as Focus,Ke as __namedExportsOrder,k as default};
