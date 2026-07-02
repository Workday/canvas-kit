import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{c as a}from"./check-Bvurkvei.js";import{T as s}from"./Toast-DB5hzOvB.js";import{c as n}from"./index-5dfzm_kn.js";import{C as I}from"./CanvasProvider-Cat-zekw.js";import{e as v}from"./exclamation-circle-BJmpTdUQ.js";import{e as g}from"./index-IfJi-UCQ.js";import{S as B}from"./SecondaryButton-D21U7TXs.js";import{a as M}from"./Popper-DvolcCfW.js";import{useMDXComponents as w}from"./index-3YbjYt95.js";import{ae as A}from"./index-BH6-T5Fm.js";import{E as r,c as _}from"./union-DR2Z0s37.js";import"./types-wqmYQQWa.js";import"./components-BqmIVDob.js";import"./Flex-D43wiz_3.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./Box-CJXmlKLo.js";import"./useConstant-CUZppmaV.js";import"./flex-CrUgoYEh.js";import"./mergeStyles-C1JfmJPH.js";import"./grid-JWGbC98F.js";import"./Popup-DnNjYX6x.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Card-BAZTDQ08.js";import"./Text-D8J8K_1c.js";import"./index-5mrAZJYD.js";import"./px2rem-C0KbprIx.js";import"./TertiaryButton-8Oz2X5p2.js";import"./BaseButton-CWdtGLox.js";import"./SystemIcon-B1B40VHJ.js";import"./Svg-B1oD29TK.js";import"./Button-CzlJSUFG.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BAdISRT5.js";import"./Hyperlink-DM9nt0cU.js";import"./TypeLevelComponents-8ikVfi4T.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./iframe-RxBVwp_9.js";import"../sb-preview/runtime.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./StatusIndicator-Cm6b5U4i.js";import"./ExternalHyperlink-COY7uH1o.js";import"./external-link-BZdacz1K.js";import"./lerna-DYfSuDO-.js";import"./Tooltip-KF7CDyyD.js";import"./useTooltip-BAcHo7bk.js";import"./useCloseOnEscape-CGAh7luF.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-ymS550hz.js";import"./ColorInput-B4443PlB.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-BPKs8XRx.js";import"./types-DXdjelYI.js";import"./FormField-DTwmrFCP.js";import"./Expandable-UqH_awct.js";import"./Avatar-CcIhLJWM.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DTKoYaho.js";import"./useInitialFocus-DOJx7Wga.js";import"./useReturnFocus-Bl9ijLih.js";import"./useFocusRedirect-Dt5zlBE3.js";import"./Breadcrumbs-Cqwjwy56.js";import"./useOverflowListTarget-DvPXkaQq.js";import"./useListItemSelect-DyeyZH9P.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-V8lePgxC.js";import"./OverflowTooltip-CXGK4oOq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-C3oC02Mn.js";const h=()=>o.jsxs(s,{children:[o.jsx(s.Icon,{icon:a,color:n.fg.success.default}),o.jsx(s.Body,{children:o.jsx(s.Message,{children:"Your workbook was successfully processed."})})]});h.__RAW__=`import {Toast} from '@workday/canvas-kit-react/toast';
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
`;const u=()=>{const t=()=>console.log("close button clicked");return o.jsx(I,{dir:"rtl",children:o.jsxs(s,{children:[o.jsx(s.Icon,{icon:a,color:n.fg.success.default}),o.jsx(s.Body,{children:o.jsx(s.Message,{children:"Your workbook was successfully processed."})}),o.jsx(s.CloseIcon,{"aria-label":"Close",onClick:t})]})})};u.__RAW__=`import {CanvasProvider} from '@workday/canvas-kit-react/common';
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
`;const f=()=>o.jsxs(s,{mode:"dialog","aria-label":"notification",children:[o.jsx(s.Icon,{icon:a,color:n.fg.success.default}),o.jsxs(s.Body,{children:[o.jsx(s.Message,{children:"Your workbook was successfully processed."}),o.jsx(s.Link,{href:"#hreflink",children:"Custom Link"})]})]});f.__RAW__=`import {Toast} from '@workday/canvas-kit-react/toast';
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
`;const j=()=>{const t=()=>console.log("close button clicked");return o.jsxs(s,{mode:"dialog","aria-label":"notification",children:[o.jsx(s.Icon,{icon:a,color:n.fg.success.default}),o.jsxs(s.Body,{children:[o.jsx(s.Message,{children:"Your workbook was successfully"}),o.jsx(s.Link,{href:"#hyperlink",children:"Custom Link"})]}),o.jsx(s.CloseIcon,{"aria-label":"Close notification",onClick:t})]})};j.__RAW__=`import {Toast} from '@workday/canvas-kit-react/toast';
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
`;const T=()=>{const[t,e]=g.useState(!1),k=g.useRef(null),b=()=>{e(!1)},C=()=>{e(!0)};return o.jsxs("div",{ref:k,children:[o.jsx(B,{onClick:C,children:"Show Toast"}),o.jsx(M,{placement:"bottom-end",open:t,anchorElement:k,children:o.jsxs(s,{mode:"dialog","aria-label":"notification",children:[o.jsx(s.Icon,{icon:a,color:n.fg.success.default}),o.jsx(s.Body,{children:o.jsx(s.Message,{children:"Your workbook was successfully processed."})}),o.jsx(s.CloseIcon,{"aria-label":"Close notification",onClick:b})]})})]})};T.__RAW__=`import React from 'react';

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
`;function y(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...w(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(A,{of:R}),`
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
`,o.jsx(_,{name:"Toast",fileName:"/react/"})]})}function L(t={}){const{wrapper:e}={...w(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(y,{...t})}):y(t)}const R={title:"Components/Popups/Toast",component:s,tags:["autodocs"],parameters:{docs:{page:L}}},c={render:h},i={render:x},d={render:f},l={render:j},m={render:T},p={render:u};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ToastAlertExample
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ToastDialogExample
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: WithActionLinkAndCloseIconExample
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: WithPopperExample
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...p.parameters?.docs?.source}}};const ne=["Basic","ToastAlert","ToastDialog","WithActionLinkAndCloseIcon","WithPopper","RTL"];export{c as Basic,p as RTL,i as ToastAlert,d as ToastDialog,l as WithActionLinkAndCloseIcon,m as WithPopper,ne as __namedExportsOrder,R as default};
