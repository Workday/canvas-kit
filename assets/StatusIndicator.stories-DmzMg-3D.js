import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as S}from"./index-3YbjYt95.js";import{ae as I}from"./index-DR-D6EjG.js";import{S as f,E as i,c as b}from"./union-CT45YaQX.js";import"./index-IfJi-UCQ.js";import{S as s}from"./StatusIndicator-UVjcLBP0.js";import{c as l}from"./cs-DvbI9OYs.js";import{g as m}from"./index-CYsyLHR7.js";import{c as g}from"./cloud-arrow-up-Cy6LSuPb.js";import{O as w}from"./OverflowTooltip-xP33ONM-.js";import{I as a}from"./InformationHighlight-BMlrGfdm.js";import"./iframe-WXRxFeZ6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./px2rem-C0KbprIx.js";import"./components-DlilqqSw.js";import"./StatusIndicator-BBevkT_x.js";import"./Text-Tayi47N3.js";import"./mergeStyles-DCTLot6K.js";import"./Box-CfIP0C5s.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./Card-Dd5fhXE2.js";import"./ExternalHyperlink-883FduMU.js";import"./Hyperlink-BOmKsWiK.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-BfP_SOlX.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-Cg4j9RPw.js";import"./lerna-CYqneavZ.js";import"./CanvasProvider-0Y3auRRO.js";import"./Tooltip-BChPPqz6.js";import"./useTooltip-DDaYfV4J.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BL74-I4Y.js";import"./Popper-DTfQE2mh.js";import"./TertiaryButton-a9_U68ho.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-C7vP30km.js";import"./ColorPicker-CBKqyMLA.js";import"./ColorInput-BagXndnK.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-3pzA4Qd-.js";import"./types-DXdjelYI.js";import"./FormField-BYE5lD9z.js";import"./check-BG7HONvH.js";import"./Expandable-CS2WldYr.js";import"./Avatar-DPtlMwRl.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-B3MQG3mt.js";import"./Popup-B-4w8IgE.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-BtGg5hr7.js";import"./useInitialFocus-BKfmV5gZ.js";import"./useReturnFocus-Xz-_vB17.js";import"./useFocusRedirect-DOtUfDeI.js";import"./Breadcrumbs-DO3VFsT6.js";import"./useOverflowListTarget-D7Z7W38z.js";import"./useListItemSelect-D_3E8f4q.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BIIZhJne.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-ahHEmhSv.js";import"./Table-C_Pr0zfe.js";import"./exclamation-circle-Be30iaM7.js";import"./exclamation-triangle-C8Vr-J7R.js";import"./info-B24MaYO9.js";const T=l({"& > *":{margin:m.sm}}),h=()=>t.jsxs("div",{className:T,children:[t.jsx(s,{label:"unpublished",type:s.Type.Gray}),t.jsx(s,{label:"submitted",type:s.Type.Orange}),t.jsx(s,{label:"in progress",type:s.Type.Blue}),t.jsx(s,{label:"published",type:s.Type.Green}),t.jsx(s,{label:"failed",type:s.Type.Red}),t.jsx(s,{label:"normal",type:s.Type.Transparent})]});h.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  '& > *': {
    margin: system.gap.sm,
  },
});

export const Basic = () => {
  return (
    <div className={parentContainerStyles}>
      <StatusIndicator label="unpublished" type={StatusIndicator.Type.Gray} />
      <StatusIndicator label="submitted" type={StatusIndicator.Type.Orange} />
      <StatusIndicator label="in progress" type={StatusIndicator.Type.Blue} />
      <StatusIndicator label="published" type={StatusIndicator.Type.Green} />
      <StatusIndicator label="failed" type={StatusIndicator.Type.Red} />
      <StatusIndicator label="normal" type={StatusIndicator.Type.Transparent} />
    </div>
  );
};
`;const u=()=>t.jsx(s,{icon:g,label:"published",type:s.Type.Green});u.__RAW__=`import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';

export const Icon = () => {
  return (
    <StatusIndicator icon={cloudArrowUpIcon} label="published" type={StatusIndicator.Type.Green} />
  );
};
`;const v=l({"& > *":{margin:m.sm}}),y=()=>t.jsxs("div",{className:v,children:[t.jsx(s,{emphasis:s.Emphasis.Low,label:"unpublished",type:s.Type.Gray}),t.jsx(s,{emphasis:s.Emphasis.Low,label:"submitted",type:s.Type.Orange}),t.jsx(s,{emphasis:s.Emphasis.Low,label:"in progress",type:s.Type.Blue}),t.jsx(s,{emphasis:s.Emphasis.Low,label:"published",type:s.Type.Green}),t.jsx(s,{emphasis:s.Emphasis.Low,label:"failed",type:s.Type.Red}),t.jsx(s,{emphasis:s.Emphasis.Low,label:"normal",type:s.Type.Transparent})]});y.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  '& > *': {
    margin: system.gap.sm,
  },
});

export const Emphasis = () => {
  return (
    <div className={parentContainerStyles}>
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="unpublished"
        type={StatusIndicator.Type.Gray}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="submitted"
        type={StatusIndicator.Type.Orange}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="in progress"
        type={StatusIndicator.Type.Blue}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="published"
        type={StatusIndicator.Type.Green}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="failed"
        type={StatusIndicator.Type.Red}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="normal"
        type={StatusIndicator.Type.Transparent}
      />
    </div>
  );
};
`;const k=l({"& > *":{margin:m.sm}}),x=()=>t.jsxs("div",{className:k,children:[t.jsx(s,{label:"Longer Than Normal Ellipsized Status",type:s.Type.Blue,maxWidth:250}),t.jsx(w,{children:t.jsx(s,{label:"Overflow Tooltip On Hover/Focus Status",type:s.Type.Green,tabIndex:0})})]});x.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const statusIndicatorsStyles = createStyles({
  '& > *': {
    margin: system.gap.sm,
  },
});

export const MaxWidth = () => {
  return (
    <div className={statusIndicatorsStyles}>
      <StatusIndicator
        label="Longer Than Normal Ellipsized Status"
        type={StatusIndicator.Type.Blue}
        maxWidth={250}
      />
      <OverflowTooltip>
        <StatusIndicator
          label="Overflow Tooltip On Hover/Focus Status"
          type={StatusIndicator.Type.Green}
          tabIndex={0}
        />
      </OverflowTooltip>
    </div>
  );
};
`;function j(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...S(),...r.components};return a||p("InformationHighlight",!1),a.Body||p("InformationHighlight.Body",!0),a.Icon||p("InformationHighlight.Icon",!0),t.jsxs(t.Fragment,{children:[t.jsx(I,{of:_}),`
`,t.jsxs(e.h1,{id:"canvas-kit-status-indicator-",children:["Canvas Kit Status Indicator ",t.jsx(f,{type:"deprecated"})]}),`
`,t.jsxs(a,{className:"sb-unstyled",variant:"caution",cs:{p:{marginBlock:0}},children:[t.jsx(a.Icon,{}),t.jsx(a.Body,{children:t.jsxs(e.p,{children:[t.jsx(e.code,{children:"StatusIndicator"}),` in Main has been deprecated and will be removed in a future major version.
Please use `,t.jsx(e.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--docs",rel:"nofollow",children:`Status
Indicator`}),` in
Preview instead.`]})})]}),`
`,t.jsx(e.p,{children:"Status Indicators help the user quickly identify the status of a task, action, or page element."}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://design.workday.com/components/indicators/status-indicators",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,t.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.h3,{id:"basic-example",children:"Basic Example"}),`
`,t.jsx(i,{code:h}),`
`,t.jsxs(e.p,{children:["Note that the ",t.jsx(e.code,{children:"type"})," prop is required (there is no default value). ",t.jsx(e.code,{children:"type"}),` accepts the following
values:`]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Suggested Purpose"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"StatusIndicator.Type.Gray"})}),t.jsx(e.td,{children:"Basic, general status. No action required."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"StatusIndicator.Type.Orange"})}),t.jsx(e.td,{children:"Signifies alerts, that a user must take action, or that something requires attention."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"StatusIndicator.Type.Blue"})}),t.jsx(e.td,{children:"Signifies an item in progress, an update, or a current status."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"StatusIndicator.Type.Green"})}),t.jsx(e.td,{children:"Signifies success, completion, or celebration."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"StatusIndicator.Type.Red"})}),t.jsx(e.td,{children:"Signifies an error or issue, or removal or destruction."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"StatusIndicator.Type.Transparent"})}),t.jsx(e.td,{children:"General status and related information intended for use on top of imagery, video, or graphics."})]})]})]}),`
`,t.jsx(e.h3,{id:"emphasis",children:"Emphasis"}),`
`,t.jsxs(e.p,{children:["Set the ",t.jsx(e.code,{children:"emphasis"})," prop of the Status Indicator to convey varying levels of emphasis. ",t.jsx(e.code,{children:"emphasis"}),`
accepts the following values:`]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"StatusIndicator.Emphasis.High"})," (Default)"]}),`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:"StatusIndicator.Emphasis.Low"})}),`
`]}),`
`,t.jsx(i,{code:y}),`
`,t.jsxs(e.p,{children:["Note that the ",t.jsx(e.code,{children:"High"})," and ",t.jsx(e.code,{children:"Low"})," emphasis levels are identical for ",t.jsx(e.code,{children:"Transparent"})," Status Indicators."]}),`
`,t.jsx(e.h3,{id:"icon",children:"Icon"}),`
`,t.jsxs(e.p,{children:["Set the ",t.jsx(e.code,{children:"icon"}),` prop of the Status Indicator to a Canvas System Icon to display that icon beside the
label.`]}),`
`,t.jsx(i,{code:u}),`
`,t.jsx(e.h3,{id:"max-width",children:"Max Width"}),`
`,t.jsxs(e.p,{children:["By default, the maximum width of a Status Indicator is ",t.jsx(e.code,{children:"200px"}),`. When the text in the StatusIndicator
exceeds the max width, it will be truncated with an ellipsis. This maxWidth can be customized.`]}),`
`,t.jsxs(e.p,{children:[`Avoid truncation wherever possible by using shorter text in Status Indicators. In the case where
truncation is necessary, you should use an `,t.jsx(e.code,{children:"OverflowTooltip"}),`. For the full text to be accessible
when you do this, you should make the tooltip focusable with `,t.jsx(e.code,{children:"tabIndex"}),"."]}),`
`,t.jsx(i,{code:x}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(b,{name:"StatusIndicator",fileName:"/react/"})]})}function E(r={}){const{wrapper:e}={...S(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(j,{...r})}):j(r)}function p(r,e){throw new Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const _={title:"Components/Indicators/Status Indicator (deprecated)",component:s,tags:["autodocs"],parameters:{docs:{page:E}}},o={render:h},n={render:u},c={render:y},d={render:x};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: IconExample
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: EmphasisExample
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: MaxWidthExample
}`,...d.parameters?.docs?.source}}};const ne=["Basic","Icon","Emphasis","MaxWidth"];export{o as Basic,c as Emphasis,n as Icon,d as MaxWidth,ne as __namedExportsOrder,_ as default};
