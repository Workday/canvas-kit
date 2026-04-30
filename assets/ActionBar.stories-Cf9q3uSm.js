import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as g}from"./index-3YbjYt95.js";import{ae as v}from"./index-Ued3TV6s.js";import{E as a,c as C}from"./union-B1cmIDVh.js";import{e as p}from"./index-IfJi-UCQ.js";import{A as o,u as k}from"./ActionBar-Dmbs7xIx.js";import{P as h}from"./PrimaryButton-WPKcJ4ml.js";import{n as M}from"./notifications-CoKr7ErK.js";import{a as S}from"./alarm-clock-CmIxBBgT.js";import{D as L}from"./DeleteButton-CrYKgSn7.js";import{a as b}from"./useTheme-DY7-Bclm.js";import{B as _}from"./Box-BI0lR_iD.js";import{S as r}from"./SegmentedControl-CUG1XmYq.js";import"./iframe-C_doqmiv.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./px2rem-C0KbprIx.js";import"./components-CXVvXGX8.js";import"./cs-DvbI9OYs.js";import"./StatusIndicator-D9ob0TlI.js";import"./Text-Dt7EG7Lz.js";import"./mergeStyles-UZCXOJf5.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./index-CYsyLHR7.js";import"./Card-jS6NBqm3.js";import"./ExternalHyperlink-aQwGH6Hm.js";import"./Hyperlink-nKvi0fIc.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-DBrzjuE9.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./Button-_9ty_XDZ.js";import"./lerna-slKU9GXb.js";import"./CanvasProvider-BRuur9nH.js";import"./Tooltip-B3V4skOm.js";import"./useTooltip-DUG7iIce.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./Popper-CGqk9_xm.js";import"./TertiaryButton-Byu4oUFZ.js";import"./index-DKOKnxgv.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DgctLa3l.js";import"./ColorPicker-BZa6q9cC.js";import"./ColorInput-DdzZruxs.js";import"./check-small-CEmhQ7AS.js";import"./index-CdbxS-xI.js";import"./TextInput-6zwAIbi7.js";import"./types-DXdjelYI.js";import"./FormField-DJsuX8Xy.js";import"./check-BG7HONvH.js";import"./Expandable-QifH75dX.js";import"./Avatar-Cf4g1-9p.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-DjQbCvjl.js";import"./Popup-CSV3rOyv.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-ukAEISND.js";import"./useInitialFocus-D6f9kMrD.js";import"./useReturnFocus-CF7XwcyY.js";import"./useFocusRedirect-CjUSvw7a.js";import"./Breadcrumbs-B3iwir0b.js";import"./useOverflowListTarget-BiBJ1XQw.js";import"./useListItemSelect-DTkyX0KL.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D8z2UdGJ.js";import"./OverflowTooltip-DIr6RY4Y.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-hE1PVdSE.js";import"./Table-DPxnEvid.js";const u=()=>t.jsx(o,{children:t.jsxs(o.List,{position:"relative",as:"section","aria-label":"Action Bar",children:[t.jsx(o.Item,{as:h,onClick:()=>console.log("first action"),children:"First Action"}),t.jsx(o.Item,{children:"Second Action"})]})});u.__RAW__=`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const Basic = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" as="section" aria-label="Action Bar">
        <ActionBar.Item as={PrimaryButton} onClick={() => console.log('first action')}>
          First Action
        </ActionBar.Item>
        <ActionBar.Item>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};
`;const x=()=>t.jsx(o,{children:t.jsxs(o.List,{position:"relative",as:"section","aria-label":"Action Bar",children:[t.jsx(o.Item,{as:h,icon:M,children:"First Action"}),t.jsx(o.Item,{icon:S,children:"Second Action"})]})});x.__RAW__=`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {alarmClockIcon, notificationsIcon} from '@workday/canvas-system-icons-web';

export const Icons = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" as="section" aria-label="Action Bar">
        <ActionBar.Item as={PrimaryButton} icon={notificationsIcon}>
          First Action
        </ActionBar.Item>
        <ActionBar.Item icon={alarmClockIcon}>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};
`;const A=()=>t.jsx(o,{children:t.jsxs(o.List,{position:"relative",as:"section","aria-label":"Action Bar",children:[t.jsx(o.Item,{as:L,children:"Delete Action"}),t.jsx(o.Item,{children:"Second Action"})]})});A.__RAW__=`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {DeleteButton} from '@workday/canvas-kit-react/button';

export const DeleteAction = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" as="section" aria-label="Action Bar">
        <ActionBar.Item as={DeleteButton}>Delete Action</ActionBar.Item>
        <ActionBar.Item>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};
`;const B=()=>{const[n]=p.useState([{id:"first",text:"First Action"},{id:"second",text:"Second Action"},{id:"third",text:"Third Action"},{id:"fourth",text:"Fourth Action"},{id:"fifth",text:"Fifth Action"}]),e=k({items:n}),[j,y]=p.useState("100%");return t.jsxs("div",{children:[t.jsx(_,{maxWidth:j,marginBottom:"xl",children:t.jsxs(o,{model:e,children:[t.jsx(o.List,{position:"relative",as:"section","aria-label":"Action Bar",overflowButton:t.jsx(o.OverflowButton,{"aria-label":"More actions"}),children:(i,w)=>t.jsx(o.Item,{as:w===0?h:void 0,onClick:()=>console.log(i.id),children:i.text})}),t.jsx(o.Menu.Popper,{children:t.jsx(o.Menu.Card,{maxWidth:300,maxHeight:200,children:t.jsx(o.Menu.List,{children:i=>t.jsx(o.Menu.Item,{onClick:()=>console.log(i.id),children:i.text})})})})]})}),t.jsxs("footer",{children:[t.jsx("h4",{children:"Change Action Bar container size"}),t.jsx(r,{onSelect:i=>y(i.id),children:t.jsxs(r.List,{role:"group","aria-label":"container width control",children:[t.jsx(r.Item,{"data-id":"100%",children:"100%"}),t.jsx(r.Item,{"data-id":`${b.m}px`,children:"Small"}),t.jsx(r.Item,{"data-id":"420px",children:"420px"}),t.jsx(r.Item,{"data-id":`${b.s}px`,children:"Extra Small"})]})}),t.jsx("br",{}),t.jsxs("p",{children:["Selected: ",j]})]})]})};B.__RAW__=`import React from 'react';

import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {breakpoints} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

export const OverflowActionBar = () => {
  const [items] = React.useState<MyActionItem[]>([
    {id: 'first', text: 'First Action'},
    {id: 'second', text: 'Second Action'},
    {id: 'third', text: 'Third Action'},
    {id: 'fourth', text: 'Fourth Action'},
    {id: 'fifth', text: 'Fifth Action'},
  ]);

  const model = useActionBarModel({items});
  const [containerWidth, setContainerWidth] = React.useState<string | number>('100%');

  return (
    <div>
      <Box maxWidth={containerWidth} marginBottom="xl">
        <ActionBar model={model}>
          <ActionBar.List
            position="relative"
            as="section"
            aria-label="Action Bar"
            overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}
          >
            {(item: MyActionItem, index) => (
              <ActionBar.Item
                as={index === 0 ? PrimaryButton : undefined}
                onClick={() => console.log(item.id)}
              >
                {item.text}
              </ActionBar.Item>
            )}
          </ActionBar.List>
          <ActionBar.Menu.Popper>
            <ActionBar.Menu.Card maxWidth={300} maxHeight={200}>
              <ActionBar.Menu.List>
                {(item: MyActionItem) => (
                  <ActionBar.Menu.Item onClick={() => console.log(item.id)}>
                    {item.text}
                  </ActionBar.Menu.Item>
                )}
              </ActionBar.Menu.List>
            </ActionBar.Menu.Card>
          </ActionBar.Menu.Popper>
        </ActionBar>
      </Box>
      <footer>
        <h4>Change Action Bar container size</h4>
        <SegmentedControl onSelect={data => setContainerWidth(data.id)}>
          <SegmentedControl.List role="group" aria-label="container width control">
            <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
            <SegmentedControl.Item data-id={\`\${breakpoints.m}px\`}>Small</SegmentedControl.Item>
            <SegmentedControl.Item data-id="420px">420px</SegmentedControl.Item>
            <SegmentedControl.Item data-id={\`\${breakpoints.s}px\`}>
              Extra Small
            </SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
        <br />
        <p>Selected: {containerWidth}</p>
      </footer>
    </div>
  );
};
`;const f=()=>{const[n]=p.useState([{id:"view",text:"View"},{id:"edit",text:"Edit"},{id:"delete",text:"Delete"}]);return t.jsxs(o,{items:n,maximumVisible:2,children:[t.jsx(o.List,{as:"section","aria-label":"Custom button count overflow example",position:"relative",overflowButton:t.jsx(o.OverflowButton,{"aria-label":"More actions"}),children:e=>t.jsx(o.Item,{onClick:()=>console.log(e.id),children:e.text})}),t.jsx(o.Menu.Popper,{children:t.jsx(o.Menu.Card,{children:t.jsx(o.Menu.List,{children:e=>t.jsx(o.Menu.Item,{onClick:()=>console.log(e.id),children:e.text})})})})]})};f.__RAW__=`import React from 'react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

export const OverflowActionBarCustomButtonCount = () => {
  const [items] = React.useState<MyActionItem[]>([
    {id: 'view', text: 'View'},
    {id: 'edit', text: 'Edit'},
    {id: 'delete', text: 'Delete'},
  ]);

  return (
    <ActionBar items={items} maximumVisible={2}>
      <ActionBar.List
        as="section"
        aria-label="Custom button count overflow example"
        position="relative"
        overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}
      >
        {(item: MyActionItem) => (
          <ActionBar.Item onClick={() => console.log(item.id)}>{item.text}</ActionBar.Item>
        )}
      </ActionBar.List>
      <ActionBar.Menu.Popper>
        <ActionBar.Menu.Card>
          <ActionBar.Menu.List>
            {(item: MyActionItem) => (
              <ActionBar.Menu.Item onClick={() => console.log(item.id)}>
                {item.text}
              </ActionBar.Menu.Item>
            )}
          </ActionBar.Menu.List>
        </ActionBar.Menu.Card>
      </ActionBar.Menu.Popper>
    </ActionBar>
  );
};
`;function I(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...g(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:O}),`
`,t.jsx(e.h1,{id:"canvas-kit-action-bar",children:"Canvas Kit Action Bar"}),`
`,t.jsxs(e.p,{children:["Action Bar is a ",t.jsx(e.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`
that contains primary and secondary actions related to a page or task.`]}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://design.workday.com/components/buttons/action-bar",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,t.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.h3,{id:"basic-example",children:"Basic Example"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"ActionBar"})," includes a container ",t.jsx(e.code,{children:"ActionBar"}),` component and the following subcomponent:
`,t.jsx(e.code,{children:"ActionBar.List"})," which should contains ",t.jsx(e.code,{children:"ActionBar.Item"}),"."]}),`
`,t.jsxs(e.p,{children:["In a basic example of an ",t.jsx(e.code,{children:"ActionBar"}),` there are two buttons. The primary action button should be used
only once and left aligned if content is left to right, followed by secondary buttons. Tertiary
buttons should not be used in the Action Bar.`]}),`
`,t.jsx(a,{code:u}),`
`,t.jsx(e.h3,{id:"icons-example",children:"Icons Example"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"ActionBar.Item"})," renders a ",t.jsx(e.code,{children:"SecondaryButton"}),` as default, so it's possible to use other Button props
with `,t.jsx(e.code,{children:"ActionBar.Item"})," such as ",t.jsx(e.code,{children:"icon"})," or ",t.jsx(e.code,{children:"size"}),"."]}),`
`,t.jsx(a,{code:x}),`
`,t.jsx(e.h3,{id:"delete-action-example",children:"Delete Action Example"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"ActionBar.Item"})," is a ",t.jsx(e.code,{children:"SecondaryButton"}),` by default but it's posible to change it to another element,
such as `,t.jsx(e.code,{children:"DeleteButton"}),", by using ",t.jsx(e.code,{children:"as"})," prop."]}),`
`,t.jsx(a,{code:A}),`
`,t.jsx(e.h3,{id:"overflow-example",children:"Overflow Example"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"ActionBar"}),` container can contain up to 3 actions and an Overflow Menu if there are more than 3
actions, the other remaining actions should be placed into an Overflow Menu that is launched by
clicking the Overflow Button.`]}),`
`,t.jsxs(e.p,{children:[`Also, ActionBar is a responsive component based on the width of its container. If the rendered
actions exceed the width of the `,t.jsx(e.code,{children:"ActionBar.List"}),`, an overflow menu will be rendered. This only works
against the dynamic API where you give the `,t.jsx(e.code,{children:"ActionBarModel"}),` an array of items to be rendered. The
dynamic API handles the React `,t.jsx(e.code,{children:"key"}),` for you based on the item's identifier. The dynamic API requires
either an `,t.jsx(e.code,{children:"id"})," on each item object or a ",t.jsx(e.code,{children:"getId"}),` function that returns an identifier based on the
item. The below example uses an `,t.jsx(e.code,{children:"id"})," property on each item."]}),`
`,t.jsxs(e.p,{children:[`The dynamic API takes in any object, but since nothing is known about your object, a
`,t.jsx(e.a,{href:"https://reactjs.org/docs/render-props.html",rel:"nofollow",children:"render prop"}),` is necessary to instruct a list how it
should render.`]}),`
`,t.jsx(a,{code:B}),`
`,t.jsxs(e.p,{children:["The number of visible buttons can also be adjusted by using the model's ",t.jsx(e.code,{children:"maximumVisible"}),` attribute.
You can change it from the default of 3 to any number greater than 1 and less than items.length.`]}),`
`,t.jsx(a,{code:f}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(e.p,{children:["Grouping the actions into an HTML ",t.jsx(e.code,{children:"<section>"})," element with an ",t.jsx(e.code,{children:"aria-label"}),` string is recommended.
This can be useful for helping screen reader users quickly jump down to the actions at the bottom of
a page.`]}),`
`,t.jsxs(e.p,{children:["Refer to ",t.jsx(e.a,{href:"?path=/docs/components-buttons--docs#accessibility",children:"Button"}),` and
`,t.jsx(e.a,{href:"?path=/docs/components-popups-menu--docs#accessibility",children:"Menus"}),` for more information about accessibiliy of these
components in the Action Bar.`]}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(C,{name:"ActionBar",fileName:"/react/"})]})}function D(n={}){const{wrapper:e}={...g(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(I,{...n})}):I(n)}const O={title:"Components/Buttons/Action Bar",component:o,tags:["autodocs"],parameters:{docs:{page:D}}},c={render:u},s={render:x},d={render:A},m={render:B},l={render:f};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: DeleteActionExample
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: OverflowActionBarExample
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: OverflowActionBarCustomButtonCountExample
}`,...l.parameters?.docs?.source}}};const pe=["Basic","Icons","DeleteAction","OverflowActionBar","OverflowActionBarCustomButtonCount"];export{c as Basic,d as DeleteAction,s as Icons,m as OverflowActionBar,l as OverflowActionBarCustomButtonCount,pe as __namedExportsOrder,O as default};
