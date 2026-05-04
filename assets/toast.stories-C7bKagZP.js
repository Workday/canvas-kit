import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{c as a}from"./check-BG7HONvH.js";import{T as s}from"./Toast-Cg3ipsJ0.js";import{c as n}from"./index-CYsyLHR7.js";import{C as I}from"./CanvasProvider-0Y3auRRO.js";import{e as v}from"./exclamation-circle-Be30iaM7.js";import{e as g}from"./index-IfJi-UCQ.js";import{S as B}from"./SecondaryButton-BfP_SOlX.js";import{a as M}from"./Popper-DTfQE2mh.js";import{useMDXComponents as w}from"./index-3YbjYt95.js";import{ae as A}from"./index-DR-D6EjG.js";import{E as r,c as _}from"./union-CT45YaQX.js";import"./types-wqmYQQWa.js";import"./components-DlilqqSw.js";import"./Flex-ahHEmhSv.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./Box-CfIP0C5s.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./flex-DkXQ5yGi.js";import"./mergeStyles-DCTLot6K.js";import"./grid-D6gKNnY6.js";import"./Popup-B-4w8IgE.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Card-Dd5fhXE2.js";import"./Text-Tayi47N3.js";import"./index-DKOKnxgv.js";import"./px2rem-C0KbprIx.js";import"./TertiaryButton-a9_U68ho.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./Button-Cg4j9RPw.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-BtGg5hr7.js";import"./Hyperlink-BOmKsWiK.js";import"./TypeLevelComponents-C7vP30km.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./iframe-WXRxFeZ6.js";import"../sb-preview/runtime.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./StatusIndicator-BBevkT_x.js";import"./ExternalHyperlink-883FduMU.js";import"./external-link-Bfm4m86M.js";import"./lerna-CYqneavZ.js";import"./Tooltip-BChPPqz6.js";import"./useTooltip-DDaYfV4J.js";import"./useCloseOnEscape-BL74-I4Y.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-CBKqyMLA.js";import"./ColorInput-BagXndnK.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-3pzA4Qd-.js";import"./types-DXdjelYI.js";import"./FormField-BYE5lD9z.js";import"./Expandable-CS2WldYr.js";import"./Avatar-DPtlMwRl.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-B3MQG3mt.js";import"./useInitialFocus-BKfmV5gZ.js";import"./useReturnFocus-Xz-_vB17.js";import"./useFocusRedirect-DOtUfDeI.js";import"./Breadcrumbs-DO3VFsT6.js";import"./useOverflowListTarget-D7Z7W38z.js";import"./useListItemSelect-D_3E8f4q.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BIIZhJne.js";import"./OverflowTooltip-xP33ONM-.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Table-C_Pr0zfe.js";const h=()=>o.jsxs(s,{children:[o.jsx(s.Icon,{icon:a,color:n.fg.success.default}),o.jsx(s.Body,{children:o.jsx(s.Message,{children:"Your workbook was successfully processed."})})]});h.__RAW__=`import {Toast} from '@workday/canvas-kit-react/toast';
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
}`,...p.parameters?.docs?.source}}};const ie=["Basic","ToastAlert","ToastDialog","WithActionLinkAndCloseIcon","WithPopper","RTL"];export{c as Basic,p as RTL,i as ToastAlert,d as ToastDialog,l as WithActionLinkAndCloseIcon,m as WithPopper,ie as __namedExportsOrder,R as default};
