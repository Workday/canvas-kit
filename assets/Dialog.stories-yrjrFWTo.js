import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as y}from"./index-3YbjYt95.js";import{ae as v}from"./index-ESmbJpvJ.js";import{E as m,c as C}from"./union-C7oNDQNC.js";import{e as b}from"./index-IfJi-UCQ.js";import{D as t}from"./Dialog-DMvuxPp6.js";import{P as a}from"./PrimaryButton-C5mhTCq5.js";import{p as h,g as k,s as B,c as w}from"./index-DE-upP0k.js";import{F as n}from"./FormField-CC8jg04Q.js";import{T as D}from"./TextInput-ChkYUV9e.js";import{F}from"./Flex-DOA8e2vA.js";import{c as S}from"./cs-rfTTo7Bg.js";import{S as j}from"./SecondaryButton-CMbqORtK.js";import{p as E}from"./px2rem-C0KbprIx.js";import"./iframe-DtS5-yNa.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./components-eQ_txa-f.js";import"./StatusIndicator-CbQX6SBJ.js";import"./Text-BLaZcOr9.js";import"./mergeStyles-C5CqGCLQ.js";import"./Box-5BC0dNqB.js";import"./index-Dusw0zrf.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./cornerShape-B7b4ymMc.js";import"./Card-BsFqe5CX.js";import"./ExternalHyperlink-BB6WUMYJ.js";import"./Hyperlink-C1HZBOiW.js";import"./external-link-ChL2h1Cn.js";import"./lerna-DP3jw_1V.js";import"./CanvasProvider-CFtqHR-b.js";import"./index-pMzza0x6.js";import"./Tooltip-B8mUJnbM.js";import"./useTooltip-CS5bngwT.js";import"./getTransformFromPlacement-C8S8FYK9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-Dxv9jUxq.js";import"./Popper-DYfGvA07.js";import"./TertiaryButton-C_EvQ6Qu.js";import"./BaseButton-CivL5PJl.js";import"./Button-wmECgaEK.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-gK2o1_HT.js";import"./ColorPicker-BXGUHqxL.js";import"./ColorInput-CiSvL7NF.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-BSiDPhTP.js";import"./Avatar-DBO0rhtW.js";import"./chevron-up-CAo1sqci.js";import"./Breadcrumbs-BYAN7ccz.js";import"./useOverflowListTarget-BMAUIgft.js";import"./useListItemRegister-tmhAPbAN.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D_vEOnvj.js";import"./OverflowTooltip-BAg5tNv1.js";import"./useListItemSelect-C0k6gewm.js";import"./useFocusRedirect-2jfUi4it.js";import"./useReturnFocus-CNQf_iaV.js";import"./usePopupTarget-wbqfrIA1.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Table-Bvawp_fh.js";import"./Popup-CdIMi-8Z.js";import"./x-B1faap_l.js";import"./useInitialFocus-70_5kNba.js";import"./types-DXdjelYI.js";const g=()=>{const[r,o]=b.useState(""),d=p=>{o(p.target.value)},c=()=>{console.log("Email Submitted")};return e.jsxs(t,{children:[e.jsx(t.Target,{as:a,children:"Open for Offer"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingBlockStart:h.md},children:"Sign Up for 15% Off Your Next Order"}),e.jsx(t.Body,{children:e.jsxs(n,{children:[e.jsx(n.Label,{children:"Email"}),e.jsx(n.Input,{as:D,grow:!0,onChange:d,value:r})]})}),e.jsxs(t.ButtonGroup,{children:[e.jsx(t.CloseButton,{children:"Cancel"}),e.jsx(t.CloseButton,{as:a,onClick:c,children:"Submit"})]})]})})]})};g.__RAW__=`import React from 'react';

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
              <FormField.Input as={TextInput} grow onChange={handleChange} value={value} />
            </FormField>
          </Dialog.Body>
          <Dialog.ButtonGroup>
            <Dialog.CloseButton>Cancel</Dialog.CloseButton>
            <Dialog.CloseButton as={PrimaryButton} onClick={handleEmail}>
              Submit
            </Dialog.CloseButton>
          </Dialog.ButtonGroup>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};
`;const u=()=>{const[r,o]=b.useState(""),d=p=>{o(p.target.value)},c=()=>{console.log("Email Submitted")};return e.jsxs(F,{cs:{gap:k.lg},children:[e.jsxs(t,{children:[e.jsx(t.Target,{as:a,children:"Open for Offer"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingBlockStart:h.md},children:"Sign Up for 15% Off Your Next Order"}),e.jsx(t.Body,{children:e.jsxs(n,{children:[e.jsx(n.Label,{children:"Email"}),e.jsx(n.Input,{as:D,grow:!0,onChange:d,value:r})]})}),e.jsxs(t.ButtonGroup,{children:[e.jsx(t.CloseButton,{children:"Cancel"}),e.jsx(t.CloseButton,{as:a,onClick:c,children:"Submit"})]})]})})]}),e.jsx(a,{children:"Focus #1"}),e.jsx(a,{children:"Focus #2"})]})};u.__RAW__=`import React from 'react';

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
                <FormField.Input as={TextInput} grow onChange={handleChange} value={value} />
              </FormField>
            </Dialog.Body>
            <Dialog.ButtonGroup>
              <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              <Dialog.CloseButton as={PrimaryButton} onClick={handleEmail}>
                Submit
              </Dialog.CloseButton>
            </Dialog.ButtonGroup>
          </Dialog.Card>
        </Dialog.Popper>
      </Dialog>
      <PrimaryButton>Focus #1</PrimaryButton>
      <PrimaryButton>Focus #2</PrimaryButton>
    </Flex>
  );
};
`;const T=S({background:w.bg.alt.default,padding:h.xl,borderRadius:B.md,minHeight:E(400),display:"flex",alignItems:"center",justifyContent:"center"}),x=()=>e.jsx("div",{className:T,children:e.jsxs(t,{children:[e.jsx(t.Target,{as:j,children:"Open Dialog"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{variant:"alt",children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{children:"Dialog with Alt Variant"}),e.jsx(t.Body,{children:"This dialog uses the alt variant for proper contrast on colored backgrounds."}),e.jsxs(t.ButtonGroup,{children:[e.jsx(t.CloseButton,{as:j,children:"Cancel"}),e.jsx(t.CloseButton,{children:"OK"})]})]})})]})});x.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const altBackgroundStyles = createStyles({
  background: system.color.bg.alt.default,
  padding: system.padding.xl,
  borderRadius: system.shape.md,
  minHeight: px2rem(400),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Alt = () => {
  return (
    <div className={altBackgroundStyles}>
      <Dialog>
        <Dialog.Target as={SecondaryButton}>Open Dialog</Dialog.Target>
        <Dialog.Popper>
          <Dialog.Card variant="alt">
            <Dialog.CloseIcon aria-label="Close" />
            <Dialog.Heading>Dialog with Alt Variant</Dialog.Heading>
            <Dialog.Body>
              This dialog uses the alt variant for proper contrast on colored backgrounds.
            </Dialog.Body>
            <Dialog.ButtonGroup>
              <Dialog.CloseButton as={SecondaryButton}>Cancel</Dialog.CloseButton>
              <Dialog.CloseButton>OK</Dialog.CloseButton>
            </Dialog.ButtonGroup>
          </Dialog.Card>
        </Dialog.Popper>
      </Dialog>
    </div>
  );
};
`;function f(r){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...y(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{of:P}),`
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
`,e.jsx(m,{code:g}),`
`,e.jsx(o.h3,{id:"focus-redirect",children:"Focus Redirect"}),`
`,e.jsxs(o.p,{children:["Dialog ",e.jsx(o.strong,{children:"does not"}),` trap keyboard focus like the Modal component does. Instead, it allows focus to
move freely in and out of the dialog, supporting more flexible navigation. The following example
shows how Dialog manages focus in and out of the component.`]}),`
`,e.jsx(m,{code:u}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Accessibility Note"}),": Focus redirect ",e.jsx(o.strong,{children:"will not"}),` have any effect on the reading order of a
screen reader.`]}),`
`]}),`
`,e.jsx(o.h3,{id:"alt-example",children:"Alt Example"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"alt"})," variant is designed for use on alternative page backgrounds (",e.jsx(o.code,{children:"system.color.bg.alt.default"}),"). Use this variant to maintain proper visual hierarchy when placing components on colored backgrounds. While the default variant should be used on ",e.jsx(o.code,{children:"system.color.bg.default"})," backgrounds, the ",e.jsx(o.code,{children:"alt"})," variant ensures the component remains visually elevated on ",e.jsx(o.code,{children:"system.color.bg.alt.default"})," backgrounds."]}),`
`,e.jsx(m,{code:x}),`
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
`,e.jsx(C,{name:"Dialog",fileName:"/react/"})]})}function I(r={}){const{wrapper:o}={...y(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(f,{...r})}):f(r)}const P={title:"Components/Popups/Dialog",component:t,tags:["autodocs"],parameters:{docs:{page:I}}},i={render:g},s={render:u},l={render:x};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: FocusExample
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: AltExample
}`,...l.parameters?.docs?.source}}};const io=["Basic","Focus","Alt"];export{l as Alt,i as Basic,s as Focus,io as __namedExportsOrder,P as default};
