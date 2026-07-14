import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as I}from"./index-3YbjYt95.js";import{ae as k}from"./index-B7XXfe5h.js";import{E as a,c as C}from"./union-CniGnSAc.js";import{e as p}from"./index-IfJi-UCQ.js";import{A as o,u as M}from"./ActionBar-DVs6ZFj9.js";import{P as h}from"./PrimaryButton-D5v02UCx.js";import{n as S}from"./notifications-BSXm4WVy.js";import{a as L}from"./alarm-clock-jr3gNh4D.js";import{D as _}from"./DeleteButton-BvKf8pxH.js";import{e as b}from"./CanvasProvider-ZQW06Ivv.js";import{B as D}from"./Box-Berqkg0s.js";import{g as E}from"./index-5dfzm_kn.js";import{p as g}from"./px2rem-C0KbprIx.js";import{S as r}from"./SegmentedControl-wxP-hQJ5.js";import"./iframe-JaH-B26f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-gewk2tVd.js";import"./Svg-pWcUwgKK.js";import"./components-BC9eTosh.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-C4zEgVH_.js";import"./Text-DCWkG9qZ.js";import"./mergeStyles-BwvcP3zW.js";import"./flex-kD_kQJ4m.js";import"./grid-L1dbhipu.js";import"./Card-CK3I0y_S.js";import"./ExternalHyperlink-DDmFkxfC.js";import"./Hyperlink-CiQjeIy9.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BSYdFPfk.js";import"./BaseButton-DI27SrsM.js";import"./Button-CSRY-Hl0.js";import"./lerna-DBkctN9J.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./Tooltip-DPxT0V2w.js";import"./useTooltip-ZpvAqNNz.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-uv5na6lZ.js";import"./Popper-DUTAU7yt.js";import"./TertiaryButton-UTJ3hnV1.js";import"./index-5mrAZJYD.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bp1jFajF.js";import"./ColorPicker-CM2304tH.js";import"./ColorInput-D3n6ss_X.js";import"./check-small-C7Z-gSGs.js";import"./index-CjGALPG9.js";import"./TextInput-CvOUSrVy.js";import"./types-DXdjelYI.js";import"./FormField-DBJ6kUEd.js";import"./check-Bvurkvei.js";import"./Expandable-BZ-zBmSc.js";import"./Avatar-6NXN_wUR.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DJ3Ch2nb.js";import"./Popup-CjJtetoF.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BMD-7lNA.js";import"./useInitialFocus-BCQsnoIT.js";import"./useReturnFocus-42FhoN3N.js";import"./useFocusRedirect-C7USV4J8.js";import"./Breadcrumbs-DA3HxUJk.js";import"./useOverflowListTarget-upDRG8Jc.js";import"./useListItemSelect-kam_5bXK.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-FGPO3Mka.js";import"./OverflowTooltip-D71sFiRJ.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-D4H0wg8Z.js";import"./Table-Bjb3VJLc.js";const u=()=>t.jsx(o,{children:t.jsxs(o.List,{position:"relative",as:"section","aria-label":"Action Bar",children:[t.jsx(o.Item,{as:h,onClick:()=>console.log("first action"),children:"First Action"}),t.jsx(o.Item,{children:"Second Action"})]})});u.__RAW__=`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
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
`;const x=()=>t.jsx(o,{children:t.jsxs(o.List,{position:"relative",as:"section","aria-label":"Action Bar",children:[t.jsx(o.Item,{as:h,icon:S,children:"First Action"}),t.jsx(o.Item,{icon:L,children:"Second Action"})]})});x.__RAW__=`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
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
`;const A=()=>t.jsx(o,{children:t.jsxs(o.List,{position:"relative",as:"section","aria-label":"Action Bar",children:[t.jsx(o.Item,{as:_,children:"Delete Action"}),t.jsx(o.Item,{children:"Second Action"})]})});A.__RAW__=`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
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
`;const B=()=>{const[n]=p.useState([{id:"first",text:"First Action"},{id:"second",text:"Second Action"},{id:"third",text:"Third Action"},{id:"fourth",text:"Fourth Action"},{id:"fifth",text:"Fifth Action"}]),e=M({items:n}),[j,w]=p.useState("100%");return t.jsxs("div",{children:[t.jsx(D,{cs:{maxWidth:j,marginBlockEnd:E.xxl},children:t.jsxs(o,{model:e,children:[t.jsx(o.List,{position:"relative",as:"section","aria-label":"Action Bar",overflowButton:t.jsx(o.OverflowButton,{"aria-label":"More actions"}),children:(i,v)=>t.jsx(o.Item,{as:v===0?h:void 0,onClick:()=>console.log(i.id),children:i.text})}),t.jsx(o.Menu.Popper,{children:t.jsx(o.Menu.Card,{cs:{maxWidth:g(300),maxHeight:g(200)},children:t.jsx(o.Menu.List,{children:i=>t.jsx(o.Menu.Item,{onClick:()=>console.log(i.id),children:i.text})})})})]})}),t.jsxs("footer",{children:[t.jsx("h4",{children:"Change Action Bar container size"}),t.jsx(r,{onSelect:i=>w(i.id),children:t.jsxs(r.List,{role:"group","aria-label":"container width control",children:[t.jsx(r.Item,{"data-id":"100%",children:"100%"}),t.jsx(r.Item,{"data-id":`${b.m}px`,children:"Small"}),t.jsx(r.Item,{"data-id":"420px",children:"420px"}),t.jsx(r.Item,{"data-id":`${b.s}px`,children:"Extra Small"})]})}),t.jsx("br",{}),t.jsxs("p",{children:["Selected: ",j]})]})]})};B.__RAW__=`import React from 'react';

import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {breakpoints} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
      <Box cs={{maxWidth: containerWidth, marginBlockEnd: system.gap.xxl}}>
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
            <ActionBar.Menu.Card cs={{maxWidth: px2rem(300), maxHeight: px2rem(200)}}>
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
`;function y(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...I(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(k,{of:P}),`
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
`,t.jsx(C,{name:"ActionBar",fileName:"/react/"})]})}function O(n={}){const{wrapper:e}={...I(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(y,{...n})}):y(n)}const P={title:"Components/Buttons/Action Bar",component:o,tags:["autodocs"],parameters:{docs:{page:O}}},c={render:u},s={render:x},d={render:A},m={render:B},l={render:f};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: DeleteActionExample
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: OverflowActionBarExample
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: OverflowActionBarCustomButtonCountExample
}`,...l.parameters?.docs?.source}}};const le=["Basic","Icons","DeleteAction","OverflowActionBar","OverflowActionBarCustomButtonCount"];export{c as Basic,d as DeleteAction,s as Icons,m as OverflowActionBar,l as OverflowActionBarCustomButtonCount,le as __namedExportsOrder,P as default};
