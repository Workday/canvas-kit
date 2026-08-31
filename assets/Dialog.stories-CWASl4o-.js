import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as b}from"./index-3YbjYt95.js";import{ae as v}from"./index-B7JPaHCe.js";import{E as g,c as w}from"./union-C-XUx4Jk.js";import{e as D}from"./index-IfJi-UCQ.js";import{c as k}from"./cs-CmRirKzJ.js";import{D as n}from"./Dialog-5MIkg8A2.js";import{S as m}from"./SecondaryButton-edyy8Yyq.js";import{p as C}from"./px2rem-C0KbprIx.js";import{s as F,p as x,c as B,g as R}from"./index-DE-upP0k.js";import{P as r}from"./PrimaryButton-C0fil2DD.js";import{F as i}from"./FormField-BRQUY4iF.js";import{T as y}from"./TextInput-CMmZv4Ba.js";import{F as I}from"./Flex-Cax-TbUS.js";import"./iframe-Dac7Hedr.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BcDZsE52.js";import"./Svg-ZtmPf1WS.js";import"./components-d5Lq2N3r.js";import"./StatusIndicator-DnH4Ng-7.js";import"./Text-DMwz83mg.js";import"./mergeStyles-Bv4mj65-.js";import"./Box-8rtctY3X.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-C1nlk4Q5.js";import"./grid-kt9rUtwL.js";import"./cornerShape-DnGoKixo.js";import"./Card-Cgn41sLF.js";import"./ExternalHyperlink-DNQXdN1m.js";import"./Hyperlink-DTQzeeu5.js";import"./external-link-ChL2h1Cn.js";import"./lerna-evyZBZtl.js";import"./CanvasProvider-C8GkxeBT.js";import"./index-D-t2nnqG.js";import"./Tooltip-BrBbQMlI.js";import"./useTooltip-gRyGftt9.js";import"./getTransformFromPlacement-DFpy6Eid.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-D0RFoaOv.js";import"./Popper-Cm0FFZPA.js";import"./TertiaryButton-CrOm2fp9.js";import"./BaseButton-9fY3LWrU.js";import"./Button-CHFUbppk.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-eC853Afo.js";import"./ColorPicker-NcRgt_sV.js";import"./ColorInput-DSXyr_LF.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-BYaYjrzC.js";import"./Avatar-b92-NjIl.js";import"./chevron-up-CAo1sqci.js";import"./Breadcrumbs-D8g-gW_1.js";import"./useOverflowListTarget-B8N3Ckvk.js";import"./useListItemRegister-DRuomJPi.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DHE2CAff.js";import"./OverflowTooltip-C7AH6CXC.js";import"./useListItemSelect-BwZQ88Wp.js";import"./useReturnFocus-B9CbcNi8.js";import"./useFocusRedirect-ClVmmyIj.js";import"./usePopupTarget-CeDO4AGg.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Table-CrJ8Ctju.js";import"./Popup-ecgWxFuV.js";import"./x-B1faap_l.js";import"./useInitialFocus-CoqXPXir.js";import"./types-DXdjelYI.js";const T=k({background:B.bg.alt.default,padding:x.xl,borderRadius:F.md,minHeight:C(400),display:"flex",alignItems:"center",justifyContent:"center"}),p=()=>e.jsx("div",{className:T,children:e.jsxs(n,{children:[e.jsx(n.Target,{as:m,children:"Open Dialog"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{variant:"alt",children:[e.jsx(n.CloseIcon,{"aria-label":"Close"}),e.jsx(n.Heading,{children:"Dialog with Alt Variant"}),e.jsx(n.Body,{children:"This dialog uses the alt variant for proper contrast on colored backgrounds."}),e.jsxs(n.ButtonGroup,{children:[e.jsx(n.CloseButton,{as:m,children:"Cancel"}),e.jsx(n.CloseButton,{children:"OK"})]})]})})]})});p.__RAW__=`import React from 'react';

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
`;const u=()=>{const[s,o]=D.useState(""),d=h=>{o(h.target.value)},c=()=>{console.log("Email Submitted")};return e.jsxs(n,{children:[e.jsx(n.Target,{as:r,children:"Open for Offer"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{children:[e.jsx(n.CloseIcon,{"aria-label":"Close"}),e.jsx(n.Heading,{cs:{paddingBlockStart:x.md},children:"Sign Up for 15% Off Your Next Order"}),e.jsx(n.Body,{children:e.jsxs(i,{children:[e.jsx(i.Label,{children:"Email"}),e.jsx(i.Input,{as:y,grow:!0,onChange:d,value:s})]})}),e.jsxs(n.ButtonGroup,{children:[e.jsx(n.CloseButton,{children:"Cancel"}),e.jsx(n.CloseButton,{as:r,onClick:c,children:"Submit"})]})]})})]})};u.__RAW__=`import React from 'react';

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
`;const j=()=>{const[s,o]=D.useState(""),d=h=>{o(h.target.value)},c=()=>{console.log("Email Submitted")};return e.jsxs(I,{cs:{gap:R.lg},children:[e.jsxs(n,{children:[e.jsx(n.Target,{as:r,children:"Open for Offer"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{children:[e.jsx(n.CloseIcon,{"aria-label":"Close"}),e.jsx(n.Heading,{cs:{paddingBlockStart:x.md},children:"Sign Up for 15% Off Your Next Order"}),e.jsx(n.Body,{children:e.jsxs(i,{children:[e.jsx(i.Label,{children:"Email"}),e.jsx(i.Input,{as:y,grow:!0,onChange:d,value:s})]})}),e.jsxs(n.ButtonGroup,{children:[e.jsx(n.CloseButton,{children:"Cancel"}),e.jsx(n.CloseButton,{as:r,onClick:c,children:"Submit"})]})]})})]}),e.jsx(r,{children:"Focus #1"}),e.jsx(r,{children:"Focus #2"})]})};j.__RAW__=`import React from 'react';

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
`;function f(s){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...b(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{of:O}),`
`,e.jsx(o.h1,{id:"canvas-kit-dialog",children:"Canvas Kit Dialog"}),`
`,e.jsx(o.p,{children:`A Dialog component is a non-modal type of dialog that will not render the rest of the page inert
while it is active. A Dialog should be used in situations where the task is not critical.`}),`
`,e.jsx(o.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(o.p,{children:"The following example shows a typical Dialog with heading, close control, and form content."}),`
`,e.jsx(g,{code:u}),`
`,e.jsx(o.h3,{id:"focus-redirect",children:"Focus Redirect"}),`
`,e.jsxs(o.p,{children:["Dialog ",e.jsx(o.strong,{children:"does not"})," trap keyboard focus like the Modal component does. The default ",e.jsx(o.code,{children:"useDialogModel"}),`
composes `,e.jsx(o.code,{children:"useFocusRedirect"}),": ",e.jsx("kbd",{children:"Tab"})," / ",e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"}),` at the last or first
focusable element inside the dialog closes it and moves focus to the next or previous focusable
element on the page. Dialog is non-modal and is `,e.jsx(o.strong,{children:"not"})," a focus trap; it does ",e.jsx(o.strong,{children:"not"}),` change screen
reader reading order. The following example shows how Dialog manages focus at those edges.`]}),`
`,e.jsx(g,{code:j}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Accessibility Note"}),": Focus redirect ",e.jsx(o.strong,{children:"will not"}),` have any effect on the reading order of a
screen reader.`]}),`
`]}),`
`,e.jsx(o.h3,{id:"alt-example",children:"Alt Example"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"alt"}),` variant is designed for use on alternative page backgrounds
(`,e.jsx(o.code,{children:"system.color.bg.alt.default"}),`). Use this variant to maintain proper visual hierarchy when placing
components on colored backgrounds. While the default variant should be used on
`,e.jsx(o.code,{children:"system.color.bg.default"})," backgrounds, the ",e.jsx(o.code,{children:"alt"}),` variant ensures the component remains visually
elevated on `,e.jsx(o.code,{children:"system.color.bg.alt.default"})," backgrounds."]}),`
`,e.jsx(g,{code:p}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.p,{children:["Ensure users of assistive technology can discover, name, and operate a ",e.jsx(o.strong,{children:"non-modal"}),` dialog: the
rest of the page stays available (no inert background), the dialog has an accessible name that
matches its visible heading, keyboard users can open and dismiss it predictably, and screen reader
reading order is improved where `,e.jsx(o.code,{children:"aria-owns"}),` is supported (see
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-inline-popups--docs",rel:"nofollow",children:"Guides > Accessibility > Inline Popups"}),`).
For blocking tasks, use
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Modal"})}),` instead.
Prefer `,e.jsx(o.strong,{children:"Dialog"}),` for the standard non-modal dialog; use
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-popup--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Popup"})}),` with
composed hooks when you need a custom popup stack or behavior (for example omitting
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"useInitialFocus"})}),`). The W3C
`,e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",rel:"nofollow",children:"Dialog (Modal) Pattern"}),` applies to
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Modal"})}),`; Dialog
is intentionally non-modal.`]}),`
`,e.jsx(o.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(o.p,{children:["The following matches the ",e.jsx(o.a,{href:"#basic-example",children:"Basic Example"})," layout: ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseIcon"})}),` before
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Heading"})}),` so open focus lands on the dismiss control first; primary actions use
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseButton"})})," (which closes the dialog on activate)."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

<Dialog>
  <Dialog.Target as={PrimaryButton}>Open</Dialog.Target>
  <Dialog.Popper>
    <Dialog.Card>
      <Dialog.CloseIcon aria-label="Close" />
      <Dialog.Heading>Title</Dialog.Heading>
      <Dialog.Body>
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Input as={TextInput} />
        </FormField>
      </Dialog.Body>
      <Dialog.ButtonGroup>
        <Dialog.CloseButton>Cancel</Dialog.CloseButton>
        <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
      </Dialog.ButtonGroup>
    </Dialog.Card>
  </Dialog.Popper>
</Dialog>;
`})}),`
`,e.jsxs(o.p,{children:["Include a dismiss control: ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseButton"})}),` with visible text (for example "Cancel" or
"Close"), and/or `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseIcon"})}),` when the design uses an icon-only dismiss (requires
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-label"})})," or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Tooltip"})}),"). Use ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseButton"})}),` for actions that should also close
the dialog (for example "Submit").`]}),`
`,e.jsx(o.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(o.p,{children:["Canvas Kit applies these automatically via ",e.jsx(o.code,{children:"useDialogModel"})," and Dialog subcomponents. ",e.jsx(o.strong,{children:`Do not
duplicate them`})," in consuming code."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Popup behaviors"})," (",e.jsx(o.em,{children:"composed on the default model"}),"):"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useInitialFocus"}),` — moves focus into the dialog when it opens (default: first focusable element in
DOM order; optional override via `,e.jsx(o.code,{children:"initialFocusRef"})," on the model)"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useReturnFocus"})," — returns focus to ",e.jsx(o.code,{children:"Dialog.Target"})," (or configured return target) when it closes"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useCloseOnEscape"})," — ",e.jsx("kbd",{children:"Escape"})," closes the dialog"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useCloseOnOutsideClick"})," — pointer interaction outside closes the dialog"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useFocusRedirect"})," — ",e.jsx("kbd",{children:"Tab"})," / ",e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"}),` at the first or last
focusable element inside the dialog closes it and moves focus to the next or previous focusable
element on the page (non-modal; `,e.jsx(o.strong,{children:"not"})," a focus trap; does ",e.jsx(o.strong,{children:"not"}),` change screen reader reading
order)`]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"ARIA and DOM"})," (",e.jsx(o.em,{children:"applied by hooks/subcomponents"}),"):"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Dialog.Card"}),": ",e.jsx(o.code,{children:'role="dialog"'}),", ",e.jsx(o.code,{children:"aria-labelledby"})," referencing the heading ",e.jsx(o.code,{children:"id"}),` (non-modal; page
content is not hidden with `,e.jsx(o.code,{children:"aria-hidden"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Dialog.Popper"}),": sibling wrapper rendered when open with ",e.jsx(o.code,{children:"aria-owns"})," pointing at ",e.jsx(o.code,{children:"Dialog.Card"}),` to
remap the accessibility tree for sequential reading order in supported browsers`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Dialog.Heading"}),": ",e.jsx(o.code,{children:"id"})," wired to ",e.jsx(o.code,{children:"Dialog.Card"}),"'s ",e.jsx(o.code,{children:"aria-labelledby"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Dialog.CloseIcon"})," / ",e.jsx(o.code,{children:"Dialog.CloseButton"}),": ",e.jsx(o.code,{children:"onClick"})," that calls ",e.jsx(o.code,{children:"model.events.hide()"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Dialog.Target"}),": ",e.jsx(o.code,{children:"ref"})," and ",e.jsx(o.code,{children:"onClick"})," to open and to receive return focus"]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Keyboard"})," (",e.jsxs(o.em,{children:["trigger is ",e.jsx(o.code,{children:"Dialog.Target"}),", default ",e.jsx(o.code,{children:"SecondaryButton"})]}),"):"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx("kbd",{children:"Enter"})," / ",e.jsx("kbd",{children:"Space"})," on the trigger opens the dialog (standard button behavior)"]}),`
`,e.jsxs(o.li,{children:["On open and close, focus is managed by ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useInitialFocus"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useReturnFocus"})}),` (application
overrides: see `,e.jsx(o.strong,{children:"Focus management"})," in Accessibility Requirements)"]}),`
`,e.jsxs(o.li,{children:[e.jsx("kbd",{children:"Tab"})," / ",e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"}),` move focus forward and backward through
interactive elements inside the dialog (standard sequential focus behavior)`]}),`
`,e.jsxs(o.li,{children:[e.jsx("kbd",{children:"Escape"})," closes the dialog and returns focus per ",e.jsx(o.code,{children:"useReturnFocus"})]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Screen reader expectations"})," (",e.jsx(o.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[`On open, assistive technology should announce the first focused control (often a dismiss control),
the dialog name (`,e.jsx(o.code,{children:"Dialog.Heading"}),"), and ",e.jsx(o.code,{children:"dialog"})," role"]}),`
`,e.jsxs(o.li,{children:["Background page content remains available to assistive technology—Dialog does ",e.jsx(o.strong,{children:"not"}),` apply
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-hidden"})}),` to siblings or render the rest of the page inert (unlike
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Modal"})}),")"]}),`
`,e.jsxs(o.li,{children:["Reading order may follow on-screen order where ",e.jsx(o.code,{children:"aria-owns"}),` is honored; support varies by browser
and screen reader`]}),`
`]}),`
`,e.jsx(o.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(o.p,{children:["Required in application code for an accessible Dialog. Hoist ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useDialogModel"})}),` when you need to
configure focus targets. Rows marked `,e.jsx(o.em,{children:"(conditional)"}),` apply only when the situation matches—otherwise
omit.`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"If no design spec is provided:"})," use default focus behavior; omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})}),`,
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-describedby"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})}),", and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Focus management — defaults and developer prompts:"}),` Canvas Kit handles open and close focus
automatically. `,e.jsx(o.strong,{children:"State the default to the developer first."})," Only set ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})}),` or
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),` after the developer (or an explicit design spec) chooses a non-default target.
`,e.jsx(o.strong,{children:"Do not generate focus refs by default."})]}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"When"}),e.jsx(o.th,{children:"Default behavior"}),e.jsx(o.th,{children:"Ask the developer before overriding"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Dialog ",e.jsx(o.strong,{children:"opens"})]}),e.jsxs(o.td,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"useInitialFocus"})})," moves focus to the ",e.jsx(o.strong,{children:"first focusable element"})," in DOM order inside the dialog (often ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseIcon"})})," or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseButton"})}),"). Omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})}),"."]}),e.jsxs(o.td,{children:[e.jsx(o.em,{children:"Which element should receive focus when the dialog opens?"})," (Only when the default first focusable element is wrong for the design.) Attach ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," to that element on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useDialogModel"})}),"."]})]}),e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Dialog ",e.jsx(o.strong,{children:"closes"})]}),e.jsxs(o.td,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"useReturnFocus"})})," moves focus to ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Target"})}),". Omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),"."]}),e.jsxs(o.td,{children:[e.jsx(o.em,{children:"Which element should receive focus when the dialog closes?"})," (Only when return focus should land somewhere other than ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Target"})}),".)"]})]})]})]}),`
`,e.jsxs(o.p,{children:["If close ",e.jsx(o.strong,{children:"removes the trigger from the DOM"}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),` alone is not enough—move focus
after the UI updates (for example with `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"useLayoutEffect"})}),`). See
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs#return-focus",rel:"nofollow",children:"Modal > Return Focus"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Custom targets"})," ",e.jsx(o.em,{children:"(conditional)"}),": Apply when using a custom ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"as"})}),` component on
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Target"})}),". ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Target"})})," adds ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"onClick"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"ref"})}),`. Custom targets must
forward both to a `,e.jsx(o.strong,{children:"keyboard-focusable"})," element (prefer a native ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"<button>"})}),` or
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"as={SecondaryButton}"})}),` / another Canvas Kit button). Wrap the component in
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"React.forwardRef"})}),` when it does not forward refs by default (required if the dialog can open
programmatically before the user clicks the target).`]}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Requirement"}),e.jsx(o.th,{children:"How to satisfy"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"Accessible dialog name"}),e.jsxs(o.td,{children:["Use ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Heading"})})," so ",e.jsx(o.code,{children:"aria-labelledby"})," on ",e.jsx(o.code,{children:"Dialog.Card"})," references a visible title. Do not omit the heading: ",e.jsxs(o.strong,{children:[e.jsx(o.code,{children:"Dialog.Card"})," always sets ",e.jsx(o.code,{children:"aria-labelledby"})]}),", and an ",e.jsx(o.code,{children:"aria-label"})," fallback is unreliable when that ID does not exist."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"Dismiss control"}),e.jsxs(o.td,{children:["Provide a way to close the dialog: ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseButton"})})," with visible text (no extra ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-label"})})," needed), and/or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.CloseIcon"})})," for icon-only dismiss (requires ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Tooltip"})})," or translated ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-label"})}),")."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"Keyboard-operable trigger"}),e.jsxs(o.td,{children:["See ",e.jsx(o.strong,{children:"Custom targets"})," above."]})]}),e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Supplementary copy when overriding open focus ",e.jsx(o.em,{children:"(conditional)"})]}),e.jsxs(o.td,{children:["When ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," places open focus ",e.jsx(o.strong,{children:"below"})," ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Heading"})}),", assign a unique ",e.jsx(o.code,{children:"id"})," to supplementary text and pass ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-describedby"})})," on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Card"})}),". See ",e.jsx(o.strong,{children:"Open focus below the heading"})," below and ",e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-popup--docs#initial-focus",rel:"nofollow",children:"Popup > Initial Focus"})," (button-focus variant)."]})]}),e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Open/closed state on the trigger ",e.jsx(o.em,{children:"(conditional)"})]}),e.jsxs(o.td,{children:["See ",e.jsx(o.strong,{children:"Wiring aria-expanded"})," below. ",e.jsx(o.strong,{children:"Default:"})," omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),"."]})]})]})]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Open focus below the heading"})," ",e.jsx(o.em,{children:"(conditional; see supplementary copy row above)"}),":"]}),`
`,e.jsxs(o.p,{children:["When open focus moves past the heading (for example into a form field), wire ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-describedby"})}),`
so assistive technology still announces the supplementary copy. For focusing a primary action
instead of an input, see
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-popup--docs#initial-focus",rel:"nofollow",children:"Popup > Initial Focus"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Dialog, useDialogModel} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

const Example = () => {
  const descriptionId = useUniqueId();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const model = useDialogModel({initialFocusRef: inputRef});

  return (
    <Dialog model={model}>
      <Dialog.Target>Open</Dialog.Target>
      <Dialog.Popper>
        <Dialog.Card aria-describedby={descriptionId}>
          <Dialog.CloseIcon aria-label="Close" />
          <Dialog.Heading>Title</Dialog.Heading>
          <Dialog.Body>
            <p id={descriptionId}>Enter your email to continue.</p>
            <FormField>
              <FormField.Label>Email</FormField.Label>
              <FormField.Input as={TextInput} ref={inputRef} />
            </FormField>
          </Dialog.Body>
          <Dialog.CloseButton>Cancel</Dialog.CloseButton>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};
`})}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"REQUIRED:"})," accessible name, dismiss control, keyboard-operable trigger"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"CONDITIONAL:"})," ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-describedby"})}),`,
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," / ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"forwardRef"})})," on custom ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Target"})})]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Wiring aria-expanded"})," ",e.jsx(o.em,{children:"(conditional)"}),":"]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," pattern is ",e.jsx(o.strong,{children:"uncommon"})," for Dialog—omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})}),` and
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),` unless a review deliberately keeps open focus on the trigger (for example
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," on the trigger per design spec). When required, on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Target"})}),` set
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded={model.state.visibility !== 'hidden'}"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:'aria-haspopup="dialog"'})}),`. See
`,e.jsx(o.strong,{children:"Focus management"}),` and the open/closed-state row above. If the design should not move focus into
the dialog on open, use
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-popup--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Popup"})}),` with
composed hooks instead of overriding Dialog defaults.`]}),`
`,e.jsx(o.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(o.p,{children:["Do ",e.jsx(o.strong,{children:"not"})," generate code that does the following (see ",e.jsx(o.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Manually set ",e.jsx(o.code,{children:'role="dialog"'}),", ",e.jsx(o.code,{children:"aria-labelledby"}),", ",e.jsx(o.code,{children:"aria-owns"}),", or dialog ",e.jsx(o.code,{children:"id"})," on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Card"})}),`,
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Popper"})}),", or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Heading"})})," — Canvas Kit hooks wire these"]}),`
`,e.jsxs(o.li,{children:["Omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Popper"})}),", render ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Card"})}),` outside it, or add a custom portal/restructure
instead of `,e.jsxs(o.strong,{children:[e.jsx(o.code,{children:"Dialog"})," → ",e.jsx(o.code,{children:"Dialog.Popper"})," → ",e.jsx(o.code,{children:"Dialog.Card"})]})]}),`
`,e.jsxs(o.li,{children:["Use ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"open"})})," / ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"onClose"})})," props on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog"})}),` — Dialog has no controlled visibility props;
use `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"useDialogModel"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"model.events.show()"})})," / ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"model.events.hide()"})})]}),`
`,e.jsxs(o.li,{children:["Add ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusTrap"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:'aria-modal="true"'})}),", or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-hidden"})}),` on page siblings expecting
modal behavior — Dialog is intentionally non-modal`]}),`
`,e.jsxs(o.li,{children:["Use ",e.jsx(o.strong,{children:"Modal"})," when the task is non-critical or the rest of the page must stay operable"]}),`
`,e.jsxs(o.li,{children:["Set ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),` by default — state the default focus behavior
first and ask the developer before overriding (see `,e.jsx(o.strong,{children:"Focus management"}),` in Accessibility
Requirements)`]}),`
`,e.jsxs(o.li,{children:["Add ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," / ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),` on the default Dialog path, or bind
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," to a static value (see ",e.jsx(o.strong,{children:"Wiring aria-expanded"})," in Accessibility Requirements)"]}),`
`,e.jsxs(o.li,{children:["Use a custom ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog.Target"})})," ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"as"})})," component that does not forward ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"ref"})}),` to a focusable
element — use `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"React.forwardRef"})})," or a Canvas Kit button component instead"]}),`
`,e.jsxs(o.li,{children:["Rely on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})})," alone when close ",e.jsx(o.strong,{children:"removes the trigger from the DOM"}),` (see
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs#return-focus",rel:"nofollow",children:"Modal > Return Focus"}),")"]}),`
`,e.jsxs(o.li,{children:["Nest multiple ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Dialog"})})," instances without deliberate initial focus and return-focus planning"]}),`
`,e.jsxs(o.li,{children:["Assume ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusRedirect"})})," fixes screen reader reading order, or that ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-owns"})}),` remapping
works in all browser and screen reader combinations — test your supported combinations`]}),`
`]}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(w,{name:"Dialog",fileName:"/react/"})]})}function S(s={}){const{wrapper:o}={...b(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(f,{...s})}):f(s)}const O={title:"Components/Popups/Dialog",component:n,tags:["autodocs"],parameters:{docs:{page:S}}},t={render:u},l={render:j},a={render:p};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: FocusExample
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: AltExample
}`,...a.parameters?.docs?.source}}};const io=["Basic","Focus","Alt"];export{a as Alt,t as Basic,l as Focus,io as __namedExportsOrder,O as default};
