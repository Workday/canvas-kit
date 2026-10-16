import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as S}from"./index-3YbjYt95.js";import{ae as I}from"./index-EBgFcv5i.js";import{S as f,E as i,c as b}from"./union-BB63apep.js";import"./index-IfJi-UCQ.js";import{S as r}from"./StatusIndicator-BTvrANIs.js";import{c as l}from"./cs-CmRirKzJ.js";import{g as m}from"./index--KWQvxqz.js";import{c as g}from"./cloud-arrow-up-BLHe5iIq.js";import{O as w}from"./OverflowTooltip-q2DzOlhE.js";import{I as a}from"./InformationHighlight-CgkbdyqW.js";import"./iframe-B7df14hJ.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CUbzRY0K.js";import"./Svg-DEIkz5dS.js";import"./px2rem-C0KbprIx.js";import"./components-BIe4YBQT.js";import"./StatusIndicator-COFktHaJ.js";import"./Text-CNQ2hnGj.js";import"./mergeStyles-DdaEVkWU.js";import"./Box-Iypa-ysL.js";import"./index-5enOfKoO.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BwCXUuSV.js";import"./grid-DXeFpVCA.js";import"./cornerShape-SMDvHRmU.js";import"./Card-CEBuJOSv.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-BvCIMCCX.js";import"./Hyperlink-DdjEfQT-.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-KazAI8Tn.js";import"./BaseButton-C49WX9Rc.js";import"./Button-IFDag6rZ.js";import"./lerna-C1CB0Xoi.js";import"./CanvasProvider-BHb5_c8k.js";import"./index-kj8ZfNNN.js";import"./Tooltip-CSGy_WI_.js";import"./useTooltip-DzymDaaP.js";import"./getTransformFromPlacement-CBrFg0vm.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-p6BLzHcP.js";import"./Popper-CqSBbT2S.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-CYMp_DqV.js";import"./TypeLevelComponents-BIf-Sb8C.js";import"./ColorPicker-fgt1yNAi.js";import"./ColorInput-Cec_SRld.js";import"./check-small-BqSDQIle.js";import"./TextInput-C3mJl_eO.js";import"./types-DXdjelYI.js";import"./FormField--j1qiwmN.js";import"./check-Ds6vsrAM.js";import"./Expandable-vowNc99p.js";import"./Avatar-aL9vVSpj.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-Cs0Aoz0c.js";import"./Popup-C8V0gvhY.js";import"./x-B1faap_l.js";import"./usePopupTarget-D6mRuUoU.js";import"./useInitialFocus-Cyj9VBtN.js";import"./useReturnFocus-CdbVNFA8.js";import"./useFocusRedirect-B06ozcxf.js";import"./Breadcrumbs-CSWDmukJ.js";import"./useOverflowListItemMeasure--2JoF_M1.js";import"./useListItemRegister-CVfhnkS0.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-C93fbBQV.js";import"./useListItemRovingFocus-BNNvfPJ2.js";import"./useListItemSelect-D6fgT6R_.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CNKhJ8da.js";import"./Flex-Pvt9KTg5.js";import"./Table-CTN-R6cb.js";import"./exclamation-circle-BNuxaliX.js";import"./exclamation-triangle-BLgzpFfC.js";import"./info-DJgWrsaO.js";import"./layers-BWn7B7pb.js";const T=l({"& > *":{margin:m.sm}}),h=()=>t.jsxs("div",{className:T,children:[t.jsx(r,{label:"unpublished",type:r.Type.Gray}),t.jsx(r,{label:"submitted",type:r.Type.Orange}),t.jsx(r,{label:"in progress",type:r.Type.Blue}),t.jsx(r,{label:"published",type:r.Type.Green}),t.jsx(r,{label:"failed",type:r.Type.Red}),t.jsx(r,{label:"normal",type:r.Type.Transparent})]});h.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
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
`;const u=()=>t.jsx(r,{icon:g,label:"published",type:r.Type.Green});u.__RAW__=`import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';

export const Icon = () => {
  return (
    <StatusIndicator icon={cloudArrowUpIcon} label="published" type={StatusIndicator.Type.Green} />
  );
};
`;const v=l({"& > *":{margin:m.sm}}),y=()=>t.jsxs("div",{className:v,children:[t.jsx(r,{emphasis:r.Emphasis.Low,label:"unpublished",type:r.Type.Gray}),t.jsx(r,{emphasis:r.Emphasis.Low,label:"submitted",type:r.Type.Orange}),t.jsx(r,{emphasis:r.Emphasis.Low,label:"in progress",type:r.Type.Blue}),t.jsx(r,{emphasis:r.Emphasis.Low,label:"published",type:r.Type.Green}),t.jsx(r,{emphasis:r.Emphasis.Low,label:"failed",type:r.Type.Red}),t.jsx(r,{emphasis:r.Emphasis.Low,label:"normal",type:r.Type.Transparent})]});y.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
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
`;const k=l({"& > *":{margin:m.sm}}),x=()=>t.jsxs("div",{className:k,children:[t.jsx(r,{label:"Longer Than Normal Ellipsized Status",type:r.Type.Blue,maxWidth:250}),t.jsx(w,{children:t.jsx(r,{label:"Overflow Tooltip On Hover/Focus Status",type:r.Type.Green,tabIndex:0})})]});x.__RAW__=`import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
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
`;function j(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...S(),...s.components};return a||p("InformationHighlight",!1),a.Body||p("InformationHighlight.Body",!0),a.Icon||p("InformationHighlight.Icon",!0),t.jsxs(t.Fragment,{children:[t.jsx(I,{of:_}),`
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
`,t.jsx(b,{name:"StatusIndicator",fileName:"/react/"})]})}function E(s={}){const{wrapper:e}={...S(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(j,{...s})}):j(s)}function p(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}const _={title:"Components/Indicators/Status Indicator (deprecated)",component:r,tags:["autodocs"],parameters:{docs:{page:E}}},o={render:h},n={render:u},c={render:y},d={render:x};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: IconExample
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: EmphasisExample
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: MaxWidthExample
}`,...d.parameters?.docs?.source}}};const pe=["Basic","Icon","Emphasis","MaxWidth"];export{o as Basic,c as Emphasis,n as Icon,d as MaxWidth,pe as __namedExportsOrder,_ as default};
