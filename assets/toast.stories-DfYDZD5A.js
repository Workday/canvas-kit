import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{c as m}from"./check-BG7HONvH.js";import{T as s}from"./Toast-XnfI7dQX.js";import{c as n}from"./index-CYsyLHR7.js";import{C as I}from"./CanvasProvider-CbBD4ERB.js";import{e as v}from"./exclamation-circle-Be30iaM7.js";import{e as g}from"./index-IfJi-UCQ.js";import{S as _}from"./SecondaryButton-oNuQLwcg.js";import{a as A}from"./Popper-BRmPGiuC.js";import{useMDXComponents as w}from"./index-3YbjYt95.js";import{ae as B}from"./index-DHWTzE-b.js";import{E as r,c as M}from"./union-D2wJ6UB9.js";import"./types-wqmYQQWa.js";import"./components-XIe_upcR.js";import"./Flex-BKzcw9XF.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./Box-DFWPfIf0.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-ClztTMnx.js";import"./mergeStyles-Dttt6jO3.js";import"./grid-BF_eWSLd.js";import"./Popup-FGUZYXID.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Card-ywil38vv.js";import"./Text-8N36XMNq.js";import"./index-DKOKnxgv.js";import"./px2rem-C0KbprIx.js";import"./TertiaryButton-DaDaXMfE.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./Button-Cp7fe3Zs.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-B7GfDsu7.js";import"./Hyperlink-Cmi71RJg.js";import"./TypeLevelComponents-Co8mkrwa.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./iframe-DW6TaI9H.js";import"../sb-preview/runtime.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./StatusIndicator-vcmfDllK.js";import"./ExternalHyperlink-D7iOffGf.js";import"./external-link-Bfm4m86M.js";import"./lerna-j6nxiWIt.js";import"./Tooltip-De1KsO5U.js";import"./useTooltip-p8F4NfJ4.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-DLb8Wvti.js";import"./ColorInput-CnFM3Rd0.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-nG1V2_dd.js";import"./types-DXdjelYI.js";import"./FormField-U6jJIaHC.js";import"./Expandable-BA5P8o_t.js";import"./Avatar-GkuXop0D.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-XwlCiuK9.js";import"./useInitialFocus-CouubvfO.js";import"./useReturnFocus-BgzhEoBI.js";import"./useFocusRedirect-ETf1Gakg.js";import"./Breadcrumbs-CIeTVgOV.js";import"./useOverflowListTarget-Esi-iaKN.js";import"./useListItemSelect-D10U8d3g.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Blawm5fT.js";import"./OverflowTooltip-B7jd-TXK.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Table-ZC-rbz82.js";const L=Object.freeze(Object.defineProperty({__proto__:null,get Basic(){return a},get RTL(){return p},get ToastAlert(){return c},get ToastDialog(){return i},get WithActionLinkAndCloseIcon(){return d},get WithPopper(){return l},get __namedExportsOrder(){return P},get default(){return S}},Symbol.toStringTag,{value:"Module"})),h=()=>o.jsxs(s,{children:[o.jsx(s.Icon,{icon:m,color:n.fg.success.default}),o.jsx(s.Body,{children:o.jsx(s.Message,{children:"Your workbook was successfully processed."})})]});h.__RAW__=`import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const Basic = () => {
  return (
    <Toast>
      <Toast.Icon icon={checkIcon} color={system.color.fg.success.default} />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      </Toast.Body>
    </Toast>
  );
};
`;const u=()=>{const t=()=>console.log("close button clicked");return o.jsx(I,{dir:"rtl",children:o.jsxs(s,{children:[o.jsx(s.Icon,{icon:m,color:n.fg.success.default}),o.jsx(s.Body,{children:o.jsx(s.Message,{children:"Your workbook was successfully processed."})}),o.jsx(s.CloseIcon,{"aria-label":"Close",onClick:t})]})})};u.__RAW__=`import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const RTL = () => {
  const handleClose = () => console.log('close button clicked');

  return (
    <CanvasProvider dir="rtl">
      <Toast>
        <Toast.Icon icon={checkIcon} color={system.color.fg.success.default} />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        </Toast.Body>
        <Toast.CloseIcon aria-label="Close" onClick={handleClose} />
      </Toast>
    </CanvasProvider>
  );
};
`;const x=()=>o.jsxs(s,{mode:"alert",children:[o.jsx(s.Icon,{icon:v,color:n.fg.warning.default}),o.jsx(s.Body,{children:o.jsx(s.Message,{children:"There was an error with your workbook."})})]});x.__RAW__=`import {Toast} from '@workday/canvas-kit-react/toast';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const ToastAlert = () => (
  <Toast mode="alert">
    <Toast.Icon icon={exclamationCircleIcon} color={system.color.fg.warning.default} />
    <Toast.Body>
      <Toast.Message>There was an error with your workbook.</Toast.Message>
    </Toast.Body>
  </Toast>
);
`;const f=()=>o.jsxs(s,{mode:"dialog","aria-label":"notification",children:[o.jsx(s.Icon,{icon:m,color:n.fg.success.default}),o.jsxs(s.Body,{children:[o.jsx(s.Message,{children:"Your workbook was successfully processed."}),o.jsx(s.Link,{href:"#hreflink",children:"Custom Link"})]})]});f.__RAW__=`import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const ToastDialog = () => (
  <Toast mode="dialog" aria-label="notification">
    <Toast.Icon icon={checkIcon} color={system.color.fg.success.default} />
    <Toast.Body>
      <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      <Toast.Link href="#hreflink">Custom Link</Toast.Link>
    </Toast.Body>
  </Toast>
);
`;const j=()=>{const t=()=>console.log("close button clicked");return o.jsxs(s,{mode:"dialog","aria-label":"notification",children:[o.jsx(s.Icon,{icon:m,color:n.fg.success.default}),o.jsxs(s.Body,{children:[o.jsx(s.Message,{children:"Your workbook was successfully"}),o.jsx(s.Link,{href:"#hyperlink",children:"Custom Link"})]}),o.jsx(s.CloseIcon,{"aria-label":"Close notification",onClick:t})]})};j.__RAW__=`import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const WithActionLinkAndCloseIcon = () => {
  const handleClose = () => console.log('close button clicked');

  return (
    <Toast mode="dialog" aria-label="notification">
      <Toast.Icon icon={checkIcon} color={system.color.fg.success.default} />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully</Toast.Message>
        <Toast.Link href="#hyperlink">Custom Link</Toast.Link>
      </Toast.Body>
      <Toast.CloseIcon aria-label="Close notification" onClick={handleClose} />
    </Toast>
  );
};
`;const T=()=>{const[t,e]=g.useState(!1),k=g.useRef(null),b=()=>{e(!1)},C=()=>{e(!0)};return o.jsxs("div",{ref:k,children:[o.jsx(_,{onClick:C,children:"Show Toast"}),o.jsx(A,{placement:"bottom-end",open:t,anchorElement:k,children:o.jsxs(s,{mode:"dialog","aria-label":"notification",children:[o.jsx(s.Icon,{icon:m,color:n.fg.success.default}),o.jsx(s.Body,{children:o.jsx(s.Message,{children:"Your workbook was successfully processed."})}),o.jsx(s.CloseIcon,{"aria-label":"Close notification",onClick:b})]})})]})};T.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';
import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const WithPopper = () => {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div ref={containerRef}>
      <SecondaryButton onClick={handleOpen}>Show Toast</SecondaryButton>
      <Popper placement="bottom-end" open={open} anchorElement={containerRef}>
        <Toast mode="dialog" aria-label="notification">
          <Toast.Icon icon={checkIcon} color={system.color.fg.success.default} />
          <Toast.Body>
            <Toast.Message>Your workbook was successfully processed.</Toast.Message>
          </Toast.Body>
          <Toast.CloseIcon aria-label="Close notification" onClick={handleClose} />
        </Toast>
      </Popper>
    </div>
  );
};
`;function y(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...w(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(B,{of:L}),`
`,o.jsx(e.h1,{id:"canvas-kit-toast",children:"Canvas Kit Toast"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Toast"})," is a ",o.jsx(e.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`
that contains updates or messages about the status of an application's process.`]}),`
`,o.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,o.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(e.h3,{id:"basic-example",children:"Basic Example"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Toast"})," includes a container ",o.jsx(e.code,{children:"Toast"})," component and the following subcomponents: ",o.jsx(e.code,{children:"Toast.Body"}),`,
`,o.jsx(e.code,{children:"Toast.CloseIcon"}),", ",o.jsx(e.code,{children:"Toast.Icon"}),", ",o.jsx(e.code,{children:"Toast.Message"}),", and ",o.jsx(e.code,{children:"Toast.Link"}),"."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Toast"})," supports different modes through the ",o.jsx(e.code,{children:"mode"})," prop: ",o.jsx(e.code,{children:"status"}),", ",o.jsx(e.code,{children:"alert"}),", and ",o.jsx(e.code,{children:"dialog"}),`. Each mode
conveys a different purpose of the message and assigns the necessary ARIA attributes to support that
purpose and provide an accessible experience.`]}),`
`,o.jsxs(e.p,{children:["By default, ",o.jsx(e.code,{children:"mode"})," is set to ",o.jsx(e.code,{children:"status"}),`, which indicates the message contains advisory information
such as a successful action.`]}),`
`,o.jsx(r,{code:h}),`
`,o.jsxs(e.p,{children:["A ",o.jsx(e.code,{children:"status"})," ",o.jsx(e.code,{children:"Toast"})," will wrap the message within a ",o.jsx(e.code,{children:"polite"})," ARIA live region with a ",o.jsx(e.code,{children:"role"}),` of
`,o.jsx(e.code,{children:"status"}),"."]}),`
`,o.jsxs(e.p,{children:["Here's a more complete example with a button which triggers a dismissable ",o.jsx(e.code,{children:"Toast"}),". The ",o.jsx(e.code,{children:"Toast"}),` is
positioned using `,o.jsx(e.code,{children:"Popper"}),"."]}),`
`,o.jsx(r,{code:T}),`
`,o.jsx(e.h3,{id:"alert",children:"Alert"}),`
`,o.jsxs(e.p,{children:["Set the ",o.jsx(e.code,{children:"mode"})," prop to ",o.jsx(e.code,{children:"alert"})," to convey urgent and important information such as an error."]}),`
`,o.jsx(r,{code:x}),`
`,o.jsxs(e.p,{children:["An ",o.jsx(e.code,{children:"alert"})," ",o.jsx(e.code,{children:"Toast"})," will wrap the message within an ",o.jsx(e.code,{children:"assertive"})," ARIA live region with a ",o.jsx(e.code,{children:"role"}),` of
`,o.jsx(e.code,{children:"alert"}),"."]}),`
`,o.jsx(e.h3,{id:"dialog",children:"Dialog"}),`
`,o.jsxs(e.p,{children:["Set the ",o.jsx(e.code,{children:"mode"})," prop to ",o.jsx(e.code,{children:"dialog"}),` to convey the presence of a follow-up action. If you use this
`,o.jsx(e.code,{children:"mode"}),", you need to add an ",o.jsx(e.code,{children:"aria-label"}),". This ",o.jsx(e.code,{children:"aria-label"}),` should be additional information for the
`,o.jsx(e.code,{children:"Toast"})," such as ",o.jsx(e.code,{children:"notification"}),". The ",o.jsx(e.code,{children:"Toast"})," will also add an ",o.jsx(e.code,{children:"aria-describedby"}),` that links the
`,o.jsx(e.code,{children:"Toast"})," to ",o.jsx(e.code,{children:"Toast.Message"})," so that it is read out to screen readers. The ",o.jsx(e.code,{children:"aria-label"}),` should be
different that the contents of the `,o.jsx(e.code,{children:"Toast"}),` so there is no duplication being read out by screen
readers.`]}),`
`,o.jsx(r,{code:f}),`
`,o.jsxs(e.p,{children:["Screen readers will read the ",o.jsx(e.code,{children:"Toast"}),` out in the following order: "Notification: Your workbook was
successfully processed."`]}),`
`,o.jsxs(e.blockquote,{children:[`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note"}),": You must use the ",o.jsx(e.code,{children:"Toast.Message"})," subcomponent when the ",o.jsx(e.code,{children:"mode"})," is ",o.jsx(e.code,{children:"dialog"})," so that ",o.jsx(e.code,{children:"id"}),`
is tied to the message for accessibility. You can also pass in a `,o.jsx(e.code,{children:"model"})," with ",o.jsx(e.code,{children:"useToastModel"}),` to
provide a specific `,o.jsx(e.code,{children:"id"})," for the ",o.jsx(e.code,{children:"Toast.Message"})]}),`
`]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`export const CustomIDToast = () => {
  const model = useToastModel({
    id: '12df5',
    mode: 'dialog',
  });
  return (
    <Toast model={model}>
      <Toast.Icon icon={checkIcon} color={system.color.fg.success.default} />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        <Toast.Link href="#href">View More Details</Toast.Link>
      </Toast.Body>
    </Toast>
  );
};
`})}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Toast.CloseIcon"})," may be included within a ",o.jsx(e.code,{children:"dialog"})," ",o.jsx(e.code,{children:"Toast"})," to create a ",o.jsx(e.code,{children:"Toast"}),` with both an action
link and a close button.`]}),`
`,o.jsx(r,{code:j}),`
`,o.jsx(e.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Toast"})," supports right-to-left languages when specified in the ",o.jsx(e.code,{children:"CanvasProvider"})," ",o.jsx(e.code,{children:"theme"}),"."]}),`
`,o.jsx(r,{code:u}),`
`,o.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(M,{name:"Toast",fileName:"/react/"})]})}function R(t={}){const{wrapper:e}={...w(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(y,{...t})}):y(t)}const S={title:"Components/Popups/Toast",component:s,tags:["autodocs"],parameters:{docs:{page:R}}},a={render:h},c={render:x},i={render:f},d={render:j},l={render:T},p={render:u};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ToastAlertExample
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ToastDialogExample
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: WithActionLinkAndCloseIconExample
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: WithPopperExample
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...p.parameters?.docs?.source}}};const P=["Basic","ToastAlert","ToastDialog","WithActionLinkAndCloseIcon","WithPopper","RTL"];export{a as Basic,p as RTL,c as ToastAlert,i as ToastDialog,d as WithActionLinkAndCloseIcon,l as WithPopper,P as __namedExportsOrder,S as default};
