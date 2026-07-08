import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as R}from"./index-3YbjYt95.js";import{ae as N}from"./index-Ca_ueJdC.js";import{E as n,c as $}from"./union-BR0v2gRB.js";import{S as q}from"./Specifications-BmHlkcUZ.js";import{e as T}from"./index-IfJi-UCQ.js";import{T as i}from"./Tooltip-CAR6Ep96.js";import{S as d}from"./SecondaryButton-C6dc0I17.js";import{x as U}from"./x-D9WWWeCM.js";import{T as S}from"./TertiaryButton-SwgvdX0A.js";import{D as H}from"./DeleteButton-D4ZVwkHk.js";import{c as z}from"./configure-D1HKcHKs.js";import{F as Y}from"./Flex-CJiYBkIy.js";import{g as J,p as K,d as X}from"./index-5dfzm_kn.js";import{r as V}from"./reset-CNB1hIzV.js";import{O as l}from"./OverflowTooltip-ChALVole.js";import{p as c}from"./px2rem-C0KbprIx.js";import{c as E}from"./cs-rfTTo7Bg.js";import{a7 as b}from"./index-5mrAZJYD.js";import{C as A}from"./Card-BRu6KPxh.js";import{u as G,T as Q}from"./useTooltip-BL-xww8B.js";import{a as Z}from"./Popper-Bj4tFU_w.js";import{I as r}from"./InformationHighlight-CVKHQyci.js";import{S as s}from"./StatusIndicator-gZMUeaRL.js";import"./iframe-Df90AzKP.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BvGZwaoD.js";import"./Svg-j63L436u.js";import"./components-BzxOW7QS.js";import"./ExternalHyperlink-CRU638AJ.js";import"./Hyperlink-B-efvBlO.js";import"./external-link-BZdacz1K.js";import"./lerna-BEf4wwJd.js";import"./CanvasProvider-C7QCbs6E.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-BgBOz6pU.js";import"./Text-BLiLRwwF.js";import"./mergeStyles-B5xtJ_PZ.js";import"./Box-C3Rh3_8o.js";import"./index-N3xz2Kqy.js";import"./flex-EgKYzApj.js";import"./grid-BOSAf611.js";import"./ColorPicker-06B5oV7m.js";import"./ColorInput-fMEaTT1j.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-EU9rhnK_.js";import"./types-DXdjelYI.js";import"./FormField-DNE698zQ.js";import"./check-Bvurkvei.js";import"./Expandable-E7IaUtAA.js";import"./Avatar-BQAjuJh4.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DVmqDXHq.js";import"./Popup-hBLQdfHd.js";import"./usePopupTarget-B9mkdgty.js";import"./useInitialFocus-DsaG8QeM.js";import"./useReturnFocus-DxgM6tpN.js";import"./useCloseOnEscape-bxAGnail.js";import"./useFocusRedirect-DY41H3s1.js";import"./Breadcrumbs-DbSrMfri.js";import"./useOverflowListTarget-BdPxwRdQ.js";import"./useListItemSelect-BJNBLcmr.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-eJWTGk8_.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-DepMuJNO.js";import"./BaseButton-DYGlcZck.js";import"./Button-gB-pg0yL.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";const k=()=>e.jsx(T.Fragment,{children:e.jsx(i,{type:"describe",title:e.jsxs("div",{children:["This is a ",e.jsx("em",{children:"custom"})," tooltip with ",e.jsx("strong",{children:"custom HTML"})]}),children:e.jsx(d,{children:"Hover Me"})})});k.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const CustomContent = () => {
  return (
    <React.Fragment>
      <Tooltip
        type="describe"
        title={
          <div>
            This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
          </div>
        }
      >
        <SecondaryButton>Hover Me</SecondaryButton>
      </Tooltip>
    </React.Fragment>
  );
};
`;const C=()=>e.jsx(i,{title:"Close",children:e.jsx(S,{icon:U,"aria-label":"Close"})});C.__RAW__=`import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {xIcon} from '@workday/canvas-system-icons-web';

export const Default = () => {
  return (
    <Tooltip title="Close">
      <TertiaryButton icon={xIcon} aria-label="Close" />
    </Tooltip>
  );
};
`;const D=()=>e.jsx(T.Fragment,{children:e.jsx(i,{type:"describe",title:"Tooltip Text",showDelay:2e3,hideDelay:1e3,children:e.jsx(d,{children:"Tooltip appears after 2 seconds and disappears after 1 second"})})});D.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const DelayedTooltip = () => {
  return (
    <React.Fragment>
      <Tooltip type="describe" title="Tooltip Text" showDelay={2000} hideDelay={1000}>
        <SecondaryButton>
          Tooltip appears after 2 seconds and disappears after 1 second
        </SecondaryButton>
      </Tooltip>
    </React.Fragment>
  );
};
`;const W=()=>e.jsx(i,{type:"describe",title:"The service will restart after this action",children:e.jsx(H,{children:"Delete"})});W.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const DescribeType = () => {
  return (
    <Tooltip type="describe" title="The service will restart after this action">
      <DeleteButton>Delete</DeleteButton>
    </Tooltip>
  );
};
`;const B=()=>e.jsxs(Y,{cs:{gap:J.sm},children:[e.jsx(i,{type:"description",title:"Search using additional criteria",children:e.jsx(S,{icon:z,children:"Advanced Search"})}),e.jsx(i,{type:"description",title:"Create saved search",children:e.jsx(d,{children:"Save"})}),e.jsx(i,{type:"description",title:"The service will restart after this action",children:e.jsx(H,{children:"Delete"})})]});B.__RAW__=`import {DeleteButton, SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {configureIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const DescriptionType = () => {
  return (
    <Flex cs={{gap: system.gap.sm}}>
      <Tooltip type="description" title="Search using additional criteria">
        <TertiaryButton icon={configureIcon}>Advanced Search</TertiaryButton>
      </Tooltip>
      <Tooltip type="description" title="Create saved search">
        <SecondaryButton>Save</SecondaryButton>
      </Tooltip>
      <Tooltip type="description" title="The service will restart after this action">
        <DeleteButton>Delete</DeleteButton>
      </Tooltip>
    </Flex>
  );
};
`;const ee=({...o})=>e.jsx("button",{style:{marginBlockStart:c(12),maxWidth:c(200),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},...o,children:"Super Mega Ultra Long Content With Max Width Custom"}),I=()=>e.jsxs(T.Fragment,{children:[e.jsx(l,{children:e.jsx(d,{children:"Short Content"})}),e.jsx(l,{children:e.jsx(d,{cs:{maxWidth:c(200)},children:"Super Mega Ultra Long Content With Max Width On The Button"})}),e.jsx(l,{children:e.jsx(d,{icon:V,cs:{maxWidth:c(200)},children:"Super Mega Ultra Long Content With Max Width On The Button with Icon"})}),e.jsx(l,{children:e.jsx("button",{style:{marginBlockStart:c(12),maxWidth:c(200),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"Super Mega Ultra Long Content With Max Width"})}),e.jsx(l,{children:e.jsx(ee,{})})]});I.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {px2rem} from '@workday/canvas-kit-styling';
import {resetIcon} from '@workday/canvas-system-icons-web';

const CustomContent = ({...elemProps}) => (
  <button
    style={{
      marginBlockStart: px2rem(12),
      maxWidth: px2rem(200),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}
    {...elemProps}
  >
    Super Mega Ultra Long Content With Max Width Custom
  </button>
);

export const Ellipsis = () => {
  return (
    <React.Fragment>
      <OverflowTooltip>
        <SecondaryButton>Short Content</SecondaryButton>
      </OverflowTooltip>
      <OverflowTooltip>
        <SecondaryButton cs={{maxWidth: px2rem(200)}}>
          Super Mega Ultra Long Content With Max Width On The Button
        </SecondaryButton>
      </OverflowTooltip>
      <OverflowTooltip>
        <SecondaryButton icon={resetIcon} cs={{maxWidth: px2rem(200)}}>
          Super Mega Ultra Long Content With Max Width On The Button with Icon
        </SecondaryButton>
      </OverflowTooltip>
      <OverflowTooltip>
        <button
          style={{
            marginBlockStart: px2rem(12),
            maxWidth: px2rem(200),
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Super Mega Ultra Long Content With Max Width
        </button>
      </OverflowTooltip>
      <OverflowTooltip>
        <CustomContent />
      </OverflowTooltip>
    </React.Fragment>
  );
};
`;const _=()=>e.jsx(l,{children:e.jsx("button",{children:e.jsx("span",{style:{display:"-webkit-box",overflow:"hidden",maxWidth:200,WebkitBoxOrient:"vertical",WebkitLineClamp:3},children:"Super Mega Ultra Long Content With Max Width. Super Mega Ultra Long Content With Max Width."})})});_.__RAW__=`import React from 'react';

import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

export const LineClamp = () => {
  return (
    <OverflowTooltip>
      <button>
        <span
          style={{
            display: '-webkit-box',
            overflow: 'hidden',
            maxWidth: 200,
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          Super Mega Ultra Long Content With Max Width. Super Mega Ultra Long Content With Max
          Width.
        </span>
      </button>
    </OverflowTooltip>
  );
};
`;const M=()=>e.jsx(i,{title:"Visual-only Tooltip",type:"muted",children:e.jsx("span",{children:"Some text. The contents of the tooltip are invisible to screen reader users."})});M.__RAW__=`import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const Muted = () => {
  return (
    <Tooltip title="Visual-only Tooltip" type="muted">
      <span>Some text. The contents of the tooltip are invisible to screen reader users.</span>
    </Tooltip>
  );
};
`;const te=E({boxShadow:X[2],display:"flex",width:b,height:b,justifyContent:"space-around",alignItems:"center",padding:K.xxs}),oe=E({padding:b,display:"grid",gridTemplateColumns:"100px 320px 100px",gridTemplateRows:"100px 320px 100px"}),P=()=>{const o={display:"flex",justifyContent:"space-around"},t=(p,F)=>e.jsx(i,{title:"Add",placement:p,children:e.jsx(A,{cs:te,children:e.jsx(A.Body,{children:p})})},F);return e.jsxs("div",{className:oe,children:[e.jsx("div",{}),e.jsx("div",{style:{...o,flexDirection:"row"},children:["top-start","top","top-end"].map(t)}),e.jsx("div",{}),e.jsx("div",{style:{...o,flexDirection:"column"},children:["left-start","left","left-end"].map(t)}),e.jsx("div",{}),e.jsx("div",{style:{...o,flexDirection:"column"},children:["right-start","right","right-end"].map(t)}),e.jsx("div",{}),e.jsx("div",{style:{...o,flexDirection:"row"},children:["bottom-start","bottom","bottom-end"].map(t)}),e.jsx("div",{})]})};P.__RAW__=`import {Card} from '@workday/canvas-kit-react/card';
import {Placement} from '@workday/canvas-kit-react/popup';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const placementCardStyles = createStyles({
  boxShadow: system.depth[2],
  display: 'flex',
  width: base.size1300,
  height: base.size1300,
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: system.padding.xxs,
});

const blockStyles = createStyles({
  padding: base.size1300, // give enough room for the tooltips to fit around their targets
  display: 'grid',
  gridTemplateColumns: '100px 320px 100px',
  gridTemplateRows: '100px 320px 100px',
});

export const Placements = () => {
  const placementStyles = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const createPlacement = (placement: string, index) => {
    return (
      <Tooltip title="Add" placement={placement as Placement} key={index}>
        <Card cs={placementCardStyles}>
          <Card.Body>{placement}</Card.Body>
        </Card>
      </Tooltip>
    );
  };

  return (
    <div className={blockStyles}>
      <div />
      <div style={{...placementStyles, flexDirection: 'row'}}>
        {['top-start', 'top', 'top-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'column'}}>
        {['left-start', 'left', 'left-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'column'}}>
        {['right-start', 'right', 'right-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'row'}}>
        {['bottom-start', 'bottom', 'bottom-end'].map(createPlacement)}
      </div>
      <div />
    </div>
  );
};
`;const O=()=>{const{targetProps:o,popperProps:t,tooltipProps:p}=G();return e.jsxs(e.Fragment,{children:[e.jsx(S,{icon:U,...o,"aria-label":"Close"}),e.jsx(Z,{placement:"top",...t,children:e.jsx(Q,{...p,children:"Close"})})]})};O.__RAW__=`import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';
import {TooltipContainer, useTooltip} from '@workday/canvas-kit-react/tooltip';
import {xIcon} from '@workday/canvas-system-icons-web';

export const UseTooltip = () => {
  const {targetProps, popperProps, tooltipProps} = useTooltip();

  return (
    <>
      <TertiaryButton icon={xIcon} {...targetProps} aria-label="Close" />
      <Popper placement="top" {...popperProps}>
        <TooltipContainer {...tooltipProps}>Close</TooltipContainer>
      </Popper>
    </>
  );
};
`;function L(o){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...R(),...o.components};return r||a("InformationHighlight",!1),r.Body||a("InformationHighlight.Body",!0),r.Heading||a("InformationHighlight.Heading",!0),r.Icon||a("InformationHighlight.Icon",!0),s||a("StatusIndicator",!1),s.Label||a("StatusIndicator.Label",!0),e.jsxs(e.Fragment,{children:[e.jsx(N,{of:ie}),`
`,e.jsx(t.h1,{id:"canvas-kit-react-tooltips",children:"Canvas Kit React Tooltips"}),`
`,e.jsx(t.p,{children:`A Tooltip component that renders information/text when the user hovers over an element. A tooltip is
used to label or describe an element. By default, a tooltip will label an element. This is useful
for buttons with icons. A tooltip can also be used to describe additional information about an
element`}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://design.workday.com/components/popups/tooltips",rel:"nofollow",children:"Workday Design Reference"})}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:[`This component follows the
`,e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",rel:"nofollow",children:"W3 Tooltip specification"}),`. Tooltips are used to
label buttons with icons and provide additional context to elements.`]}),`
`,e.jsx(t.h3,{id:"when-to-use-tooltips",children:"When to use tooltips"}),`
`,e.jsx(t.p,{children:`Use a tooltip when you want to display additional information for users to better understand the
purpose, context, or interaction.`}),`
`,e.jsx(t.h3,{id:"when-not-to-use-tooltips",children:"When not to use tooltips"}),`
`,e.jsx(t.p,{children:`When the visual text will be the exact same as what is visually displayed to the user without the
tooltip being visible`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Does this element need additional context or information?",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"No: Don't use a tooltip"}),`
`,e.jsxs(t.li,{children:["Yes:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Is the tooltip text useful to screen reader users?",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["No: Use ",e.jsx(t.code,{children:'type="muted"'})," which will not make the tooltip visible to screen reader users"]}),`
`,e.jsxs(t.li,{children:["Yes:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Is the tooltip text different from the visual text displayed to users?",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["No text: Use ",e.jsx(t.code,{children:'type="label"'})," which will add ",e.jsx(t.code,{children:"aria-label"})," like the icon example"]}),`
`,e.jsxs(t.li,{children:["Yes: Use ",e.jsx(t.code,{children:'type="describe"'})," which will add ",e.jsx(t.code,{children:"aria-describedby"})]}),`
`,e.jsx(t.li,{children:"No: Don't use a tooltip"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:["Here is a basic example of a ",e.jsx(t.code,{children:"TertiaryButton"}),` that renders an icon using a tooltip to label the
icon. This labels the button for both sighted users and screen readers. A tooltip provides an
`,e.jsx(t.code,{children:"aria-label"}),` to child elements for the accessibility tree and a visual tooltip during mouse hover
and focus events.`]}),`
`,e.jsx(n,{code:C}),`
`,e.jsx(t.h3,{id:"describing-an-element",children:"Describing an Element"}),`
`,e.jsxs(r,{variant:"caution",className:"sb-unstyled",children:[e.jsx(r.Icon,{}),e.jsxs(r.Heading,{children:[" ",e.jsxs(t.p,{children:["Caution: Describe type has been deprecated"," "]})]}),e.jsxs(r.Body,{children:[e.jsxs(t.p,{children:["Assistive technology may ignore"," "]}),e.jsx(s,{variant:"gray",children:e.jsx(s.Label,{cs:{textTransform:"lowercase"},children:e.jsx(t.p,{children:'type="describe"'})})})," ",e.jsxs(t.p,{children:["techniques based on verbosity settings. Please use"," "]}),e.jsx(s,{cs:{textTransform:"lowercase"},variant:"gray",children:e.jsx(s.Label,{cs:{textTransform:"lowercase"},children:e.jsx(t.p,{children:'type="description"'})})})," ",e.jsx(t.p,{children:"on Tooltips."})]})]}),`
`,e.jsxs(t.p,{children:["The default mode for a tooltip is to label content via ",e.jsx(t.code,{children:"aria-label"}),`. If a tooltip is meant to
provide ancillary information, the `,e.jsx(t.code,{children:"type"})," can be set to ",e.jsx(t.code,{children:"describe"}),". This will add ",e.jsx(t.code,{children:"aria-describedby"}),`
to the target element. This will allow screen reader users to hear the name of the control that is
being focused and the ancillary tooltip information.`]}),`
`,e.jsx(n,{code:W}),`
`,e.jsx(t.h3,{id:"description-of-an-element",children:"Description of an Element"}),`
`,e.jsxs(t.p,{children:["The default mode for a tooltip is to assign a name to the target element with an ",e.jsx(t.code,{children:"aria-label"}),`
string. If a tooltip is meant to provide ancillary information, the `,e.jsx(t.code,{children:"type"})," can be set to ",e.jsx(t.code,{children:"description"}),`.
This will add `,e.jsx(t.code,{children:"aria-description"}),` strings to the target element instead. This variant is useful on
text buttons and other components that already have a label or name. Use this type instead of `,e.jsx(t.code,{children:"describe"})," to ensure proper aria attributes are added to the dom regardless if the tooltip is visible."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," If you use ",e.jsx(t.code,{children:"description"})," type and want to pass ",e.jsx(t.code,{children:"jsx"}),`, it **must* be inline and
**not** a component to ensure the inner text is properly read by voiceover.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`// The text will be understood as: You must accept terms and conditions
<Tooltip type="description" title={<span>You<i>must</i> accept terms and conditions</span>}/>

// This will render a string including the html and will not be properly understood by voice over.
const MyComponent = () => <span>You<i>must</i> accept terms and conditions</span>
<Tool
`})}),`
`]}),`
`,e.jsx(n,{code:B}),`
`,e.jsx(t.h3,{id:"muted-tooltips",children:"Muted Tooltips"}),`
`,e.jsxs(t.p,{children:[`If a tooltip does not need to be visible to screen reader users, or you handle accessibility of the
tooltip yourself, you can set the `,e.jsx(t.code,{children:"type"})," to ",e.jsx(t.code,{children:"muted"}),`. This will not add any special ARIA attributes
to the target element.`]}),`
`,e.jsx(n,{code:M}),`
`,e.jsx(t.h3,{id:"custom-content",children:"Custom Content"}),`
`,e.jsx(t.p,{children:`A tooltip can contain HTML, but should not contain any focusable elements or semantically meaningful
formatting. The content will lose all semantic meaning when read by a screen reader. If complex
content or a focusable element is needed by your UI, a tooltip is not a good choice. Consider using
a dialog instead.`}),`
`,e.jsx(n,{code:k}),`
`,e.jsx(t.h3,{id:"delayed-tooltip",children:"Delayed Tooltip"}),`
`,e.jsxs(t.p,{children:[`The default delay for showing and hiding a tooltip are 300ms and 100ms, respectively. You can
control the length of the delay by providing custom `,e.jsx(t.code,{children:"showDelay"})," and ",e.jsx(t.code,{children:"hideDelay"})," in ms."]}),`
`,e.jsx(n,{code:D}),`
`,e.jsx(t.h3,{id:"placements",children:"Placements"}),`
`,e.jsxs(t.p,{children:["The tooltip allows for a ",e.jsx(t.code,{children:"placement"}),` configuration. The tooltip uses
`,e.jsx(t.a,{href:"https://popper.js.org/",rel:"nofollow",children:"PopperJS"}),` to position tooltips, so any valid PopperJS placement is valid
for tooltips.`]}),`
`,e.jsx(n,{code:P}),`
`,e.jsx(t.h3,{id:"tooltips-on-overflowing-content",children:"Tooltips on overflowing content"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"OverflowTooltip"}),` component can be applied to any element that has some type of overflow
applied, or has a child element that has overflow applied. The most common and widely supported type
of truncation is the ellipsis.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),`: Text truncation should be avoided if possible. A user should not have to activate a
tooltip to access important content. If user-generated content is being truncated, the following
situation might occur which is a bad user experience. Consider the following list:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Home Site A"}),`
`,e.jsx(t.li,{children:"Home Site B"}),`
`,e.jsx(t.li,{children:"Home Site C"}),`
`]}),`
`,e.jsx(t.p,{children:"If the list items get truncated via an ellipsis, this is what the user could see:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Home Sit..."}),`
`,e.jsx(t.li,{children:"Home Sit..."}),`
`,e.jsx(t.li,{children:"Home Sit..."}),`
`]}),`
`,e.jsx(t.p,{children:"Here are suggestions to try to avoid truncation:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Allow content to wrap instead"}),`
`,e.jsx(t.li,{children:"Limit character count in admin interfaces if possible to avoid need for truncation"}),`
`,e.jsx(t.li,{children:"Avoid fixed container sizes if possible to allow content to flow naturally"}),`
`]}),`
`,e.jsx(t.p,{children:"If truncation is required, here are a few guidelines to insure minimal impact on users:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Only truncate text of elements that naturally receive focus.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Keyboard users can only activate tooltips with focus. Adding ",e.jsx(t.code,{children:"tabindex=0"}),` can give focus to
non-focusable elements, but increase the amount of tab stops for keyboard users.`]}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"Provide the full content elsewhere in the UI"}),`
`]}),`
`,e.jsxs(t.p,{children:["Canvas Kit Buttons have this style applied to the text inside them. ",e.jsx(t.code,{children:"OverflowTooltip"}),` in combination
with a max-width can show a tooltip only when overflow is detected:`]}),`
`,e.jsx(n,{code:I}),`
`,e.jsx(t.h3,{id:"line-clamp",children:"Line Clamp"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"OverflowTooltip"}),` can support various types of overflow. The component will first look for
`,e.jsx(t.code,{children:"text-overflow: ellipsis"})," and ",e.jsx(t.code,{children:"-webkit-line-clamp"}),`, but will fall back to
`,e.jsx(t.code,{children:"overflow: auto | scroll | clip | hidden"}),`. These properties will be used to determine which
`,e.jsx(t.code,{children:"element"})," is experiencing an overflow. Overflow detection is as follows where ",e.jsx(t.code,{children:"element"}),` is
determined by the above style properties:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
`})}),`
`,e.jsxs(t.p,{children:["Here's an example using the ",e.jsx(t.code,{children:"-webkit-line-clamp"}),` property (multi-line ellipsis which works in all
browsers):`]}),`
`,e.jsx(n,{code:_}),`
`,e.jsx(t.p,{children:`Other truncation techniques should be supported as well, even JavaScript ones as long as overflow is
triggered somehow and detectable differences in scroll size and client size.`}),`
`,e.jsx(t.h3,{id:"the-usetooltip-hook",children:"The UseTooltip Hook"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Tooltip"})," component is a combination of the ",e.jsx(t.code,{children:"TooltipContainer"})," (a styled element), ",e.jsx(t.code,{children:"Popper"}),`
(which uses PopperJS and the popup stack), the `,e.jsx(t.code,{children:"useTooltip"}),` hook and some behavior. If custom
behavior is required, these sub-components can be composed in a custom container element. This
example uses those parts directly while being functionally equivalent to the original basic example.`]}),`
`,e.jsx(n,{code:O}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx($,{name:"Tooltip",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(q,{file:"./cypress/component/Tooltip.spec.tsx",name:"Tooltip"})]})}function ne(o={}){const{wrapper:t}={...R(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(L,{...o})}):L(o)}function a(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const ie={title:"Components/Popups/Tooltip",component:i,tags:["autodocs"],parameters:{docs:{page:ne}}},m={render:C},h={render:k},u={render:D},x={render:B},f={render:W},y={render:M},j={render:P},w={render:I},g={render:_},v={render:O};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: DefaultExample
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: CustomContentExample
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: DelayedTooltipExample
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: DescriptionTypeExample
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: DescribeTypeExample
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: MutedExample
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: PlacementsExample
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: EllipsisExample
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: LineClampExample
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: UseTooltipExample
}`,...v.parameters?.docs?.source}}};const Lt=["Default","CustomContent","DelayedTooltip","DescriptionType","DescribeType","Muted","Placements","Ellipsis","LineClamp","UseTooltip"];export{h as CustomContent,m as Default,u as DelayedTooltip,f as DescribeType,x as DescriptionType,w as Ellipsis,g as LineClamp,y as Muted,j as Placements,v as UseTooltip,Lt as __namedExportsOrder,ie as default};
