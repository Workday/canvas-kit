import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as v}from"./index-3YbjYt95.js";import{ae as k}from"./index-DF9Ggjdz.js";import{E as s,c as M}from"./union-2luBZJC5.js";import{e as x}from"./index-IfJi-UCQ.js";import{A as t,u as C}from"./ActionBar-BZ1WxCFu.js";import{P as m}from"./PrimaryButton-DWe722ah.js";import{D as S}from"./DeleteButton-D7lzdGIL.js";import{n as L}from"./notifications-DjQnQviY.js";import{a as D}from"./alarm-clock-BIDBo4OF.js";import{j as g}from"./CanvasProvider-Ce6SqFpo.js";import{B as O}from"./Box-DebRNAPR.js";import{g as P}from"./index-jCBjnmNg.js";import{p as f}from"./px2rem-C0KbprIx.js";import{S as r}from"./SegmentedControl-BSfenQGy.js";import"./iframe-D8j4w_od.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bprhvld6.js";import"./Svg-Cf-JAqGF.js";import"./components-CSN_KxHX.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-DNu_SPzg.js";import"./Text-BxYrzwL9.js";import"./mergeStyles-CrKfjMZ1.js";import"./flex-DSGq5Zo5.js";import"./grid-Db0Kv7HN.js";import"./cornerShape-BeK2DPVP.js";import"./Card-BlbEtVCh.js";import"./ExternalHyperlink-BIzPchcs.js";import"./Hyperlink-CyWEgMZu.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CC5NDP49.js";import"./BaseButton-BmnV2apc.js";import"./Button-BmDyQ_0V.js";import"./lerna-dE9_d90c.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./Tooltip-D1g1a8So.js";import"./useTooltip-Bk1NBL5b.js";import"./getTransformFromPlacement-C0H7XrZY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useCloseOnEscape-CHcRDM8i.js";import"./Popper-BMBM4fBh.js";import"./TertiaryButton-Ng42FoqW.js";import"./index-kj8ZfNNN.js";import"./TypeLevelComponents-C9UvwkIr.js";import"./ColorPicker-CYt52KkP.js";import"./ColorInput-C3jnUfrR.js";import"./check-small-BqSDQIle.js";import"./index-Cvke4sRE.js";import"./TextInput-Ley04CKf.js";import"./types-DXdjelYI.js";import"./FormField-BCMc2Lm9.js";import"./check-Ds6vsrAM.js";import"./Expandable-DBYZI0lK.js";import"./Avatar-D4w5MqCC.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-C_7pURTd.js";import"./Popup-C13Xc0gr.js";import"./x-B1faap_l.js";import"./usePopupTarget-8XLAjRU5.js";import"./useInitialFocus-bLTg3kQA.js";import"./useReturnFocus-nFq-J5O1.js";import"./useFocusRedirect-DKub_36o.js";import"./Breadcrumbs-DI-DGb6t.js";import"./useOverflowListTarget-BZoNQBpX.js";import"./useListItemRegister-CGyUiflc.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DZ-Dz4t0.js";import"./OverflowTooltip-Dy_iAyJn.js";import"./useListItemSelect-DyiPCdbs.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-Cyn9vvSA.js";import"./Table-DhtTSpoO.js";const j=()=>e.jsx(t,{children:e.jsxs(t.List,{position:"relative",as:"section","aria-label":"Action Bar",children:[e.jsx(t.Item,{as:m,onClick:()=>console.log("first action"),children:"First Action"}),e.jsx(t.Item,{children:"Second Action"})]})});j.__RAW__=`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
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
`;const p=()=>e.jsx(t,{children:e.jsxs(t.List,{position:"relative",as:"section","aria-label":"Action Bar",children:[e.jsx(t.Item,{as:S,children:"Delete Action"}),e.jsx(t.Item,{children:"Second Action"})]})});p.__RAW__=`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
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
`;const u=()=>e.jsx(t,{children:e.jsxs(t.List,{position:"relative",as:"section","aria-label":"Action Bar",children:[e.jsx(t.Item,{as:m,icon:L,children:"First Action"}),e.jsx(t.Item,{icon:D,children:"Second Action"})]})});u.__RAW__=`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
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
`;const A=()=>{const[o]=x.useState([{id:"first",text:"First Action"},{id:"second",text:"Second Action"},{id:"third",text:"Third Action"},{id:"fourth",text:"Fourth Action"},{id:"fifth",text:"Fifth Action"}]),n=C({items:o}),[b,y]=x.useState("100%");return e.jsxs("div",{children:[e.jsx(O,{cs:{maxWidth:b,marginBlockEnd:P.xxl},children:e.jsxs(t,{model:n,children:[e.jsx(t.List,{position:"relative",as:"section","aria-label":"Action Bar",overflowButton:e.jsx(t.OverflowButton,{"aria-label":"More actions"}),children:(i,I)=>e.jsx(t.Item,{as:I===0?m:void 0,onClick:()=>console.log(i.id),children:i.text})}),e.jsx(t.Menu.Popper,{children:e.jsx(t.Menu.Card,{cs:{maxWidth:f(300),maxHeight:f(200)},children:e.jsx(t.Menu.List,{children:i=>e.jsx(t.Menu.Item,{onClick:()=>console.log(i.id),children:i.text})})})})]})}),e.jsxs("footer",{children:[e.jsx("h4",{children:"Change Action Bar container size"}),e.jsx(r,{onSelect:i=>y(i.id),children:e.jsxs(r.List,{role:"group","aria-label":"container width control",children:[e.jsx(r.Item,{"data-id":"100%",children:"100%"}),e.jsx(r.Item,{"data-id":`${g.m}px`,children:"Small"}),e.jsx(r.Item,{"data-id":"420px",children:"420px"}),e.jsx(r.Item,{"data-id":`${g.s}px`,children:"Extra Small"})]})}),e.jsx("br",{}),e.jsxs("p",{children:["Selected: ",b]})]})]})};A.__RAW__=`import React from 'react';

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
`;const B=()=>{const[o]=x.useState([{id:"view",text:"View"},{id:"edit",text:"Edit"},{id:"delete",text:"Delete"}]);return e.jsxs(t,{items:o,maximumVisible:2,children:[e.jsx(t.List,{as:"section","aria-label":"Custom button count overflow example",position:"relative",overflowButton:e.jsx(t.OverflowButton,{"aria-label":"More actions"}),children:n=>e.jsx(t.Item,{onClick:()=>console.log(n.id),children:n.text})}),e.jsx(t.Menu.Popper,{children:e.jsx(t.Menu.Card,{children:e.jsx(t.Menu.List,{children:n=>e.jsx(t.Menu.Item,{onClick:()=>console.log(n.id),children:n.text})})})})]})};B.__RAW__=`import React from 'react';

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
`;function w(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...v(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(k,{of:E}),`
`,e.jsx(n.h1,{id:"canvas-kit-action-bar",children:"Canvas Kit Action Bar"}),`
`,e.jsxs(n.p,{children:["Action Bar is a ",e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`
that contains primary and secondary actions related to a page or task.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://design.workday.com/components/buttons/action-bar",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionBar"})," includes a container ",e.jsx(n.code,{children:"ActionBar"}),` component and the following subcomponent:
`,e.jsx(n.code,{children:"ActionBar.List"})," which should contains ",e.jsx(n.code,{children:"ActionBar.Item"}),"."]}),`
`,e.jsxs(n.p,{children:["In a basic example of an ",e.jsx(n.code,{children:"ActionBar"}),` there are two buttons. The primary action button should be used
only once and left aligned if content is left to right, followed by secondary buttons. Tertiary
buttons should not be used in the Action Bar.`]}),`
`,e.jsx(s,{code:j}),`
`,e.jsx(n.h3,{id:"icons-example",children:"Icons Example"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionBar.Item"})," renders a ",e.jsx(n.code,{children:"SecondaryButton"}),` as default, so it's possible to use other Button props
with `,e.jsx(n.code,{children:"ActionBar.Item"})," such as ",e.jsx(n.code,{children:"icon"})," or ",e.jsx(n.code,{children:"size"}),"."]}),`
`,e.jsx(s,{code:u}),`
`,e.jsx(n.h3,{id:"delete-action-example",children:"Delete Action Example"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionBar.Item"})," is a ",e.jsx(n.code,{children:"SecondaryButton"}),` by default but it's posible to change it to another element,
such as `,e.jsx(n.code,{children:"DeleteButton"}),", by using ",e.jsx(n.code,{children:"as"})," prop."]}),`
`,e.jsx(s,{code:p}),`
`,e.jsx(n.h3,{id:"overflow-example",children:"Overflow Example"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionBar"}),` container can contain up to 3 actions and an Overflow Menu if there are more than 3
actions, the other remaining actions should be placed into an Overflow Menu that is launched by
clicking the Overflow Button.`]}),`
`,e.jsxs(n.p,{children:[`Also, ActionBar is a responsive component based on the width of its container. If the rendered
actions exceed the width of the `,e.jsx(n.code,{children:"ActionBar.List"}),`, an overflow menu will be rendered. This only works
against the dynamic API where you give the `,e.jsx(n.code,{children:"ActionBarModel"}),` an array of items to be rendered. The
dynamic API handles the React `,e.jsx(n.code,{children:"key"}),` for you based on the item's identifier. The dynamic API requires
either an `,e.jsx(n.code,{children:"id"})," on each item object or a ",e.jsx(n.code,{children:"getId"}),` function that returns an identifier based on the
item. The below example uses an `,e.jsx(n.code,{children:"id"})," property on each item."]}),`
`,e.jsxs(n.p,{children:[`The dynamic API takes in any object, but since nothing is known about your object, a
`,e.jsx(n.a,{href:"https://reactjs.org/docs/render-props.html",rel:"nofollow",children:"render prop"}),` is necessary to instruct a list how it
should render.`]}),`
`,e.jsx(s,{code:A}),`
`,e.jsxs(n.p,{children:["The number of visible buttons can also be adjusted by using the model's ",e.jsx(n.code,{children:"maximumVisible"}),` attribute.
You can change it from the default of 3 to any number greater than 1 and less than items.length.`]}),`
`,e.jsx(s,{code:B}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`The primary accessibility goal is a clearly named group of page-level actions where every action is
a native, keyboard-operable button. Use Action Bar for the primary and secondary actions of a page
or task. For a single action, use a `,e.jsx(n.a,{href:"?path=/docs/components-buttons--docs#accessibility",children:"Button"}),` directly.
For a dense set of icon or dropdown controls that behaves as one tab stop, use
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-buttons-toolbar--docs",rel:"nofollow",children:"Toolbar"}),`. For
actions that open a task flow, compose `,e.jsx(n.a,{href:"?path=/docs/components-popups-modal--docs#accessibility",children:"Modal"}),` or
`,e.jsx(n.a,{href:"?path=/docs/components-popups-dialog--docs#accessibility",children:"Dialog"})," from an ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})}),"."]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",rel:"nofollow",children:"Menu Button pattern (APG)"}),`, the
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",rel:"nofollow",children:"Button pattern (APG)"}),`, and the Canvas Kit
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-overview--docs",rel:"nofollow",children:"Accessibility overview"}),"."]}),`
`,e.jsx(n.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(n.p,{children:["The following matches the ",e.jsx(n.a,{href:"#basic-example",children:"Basic Example"}),": an ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})}),` rendered as a
labelled `,e.jsx(n.code,{children:"section"}),", with a primary action first and secondary actions after it. ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})}),`
and `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})," should always be inside ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar"})}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

<ActionBar>
  <ActionBar.List as="section" aria-label="Page actions">
    <ActionBar.Item as={PrimaryButton} onClick={() => console.log('first action')}>
      First Action
    </ActionBar.Item>
    <ActionBar.Item>Second Action</ActionBar.Item>
  </ActionBar.List>
</ActionBar>;
`})}),`
`,e.jsxs(n.p,{children:["Provide a translated, descriptive ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})}),`. Every
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})," needs non-empty visible text, which becomes its accessible name."]}),`
`,e.jsx(n.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(n.p,{children:["Canvas Kit applies these automatically. ",e.jsx(n.strong,{children:"Do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"ARIA and DOM"})," (",e.jsx(n.em,{children:"applied by hooks/subcomponents"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar"})}),`: Does not render an element. It creates the model and wraps its children in
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu"})})," so the overflow menu shares state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})}),": Renders a ",e.jsx(n.code,{children:"div"})," by default. It has no role of its own—use ",e.jsx(n.code,{children:'as="section"'}),`
with `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})}),` to expose a landmark. It is positioned fixed to the bottom of the viewport
unless you override `,e.jsx(n.code,{children:"position"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})}),": Renders a native ",e.jsx(n.code,{children:"<button>"})," through ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"SecondaryButton"})}),` (or the component
passed to `,e.jsx(n.code,{children:"as"}),"). It inherits the ",e.jsx(n.a,{href:"?path=/docs/components-buttons--docs#accessibility",children:"Button accessibility"}),`
behavior, including visible label wiring and decorative `,e.jsx(n.code,{children:"icon"})," handling."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Overflow"}),": Items that do not fit, or that exceed ",e.jsx(n.code,{children:"maximumVisible"}),", receive ",e.jsx(n.code,{children:"aria-hidden"}),`,
`,e.jsx(n.code,{children:"inert"}),", and ",e.jsx(n.code,{children:"disabled"}),`, so they are removed from the tab order and the accessibility tree and
appear in the overflow menu instead.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.OverflowButton"})}),": Renders a ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"SecondaryButton"})}),` with the related-actions icon,
`,e.jsx(n.code,{children:"aria-haspopup"}),", and ",e.jsx(n.code,{children:"aria-expanded"})," through the ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),". It is ",e.jsx(n.code,{children:"aria-hidden"}),` with
`,e.jsx(n.code,{children:"tabIndex={-1}"})," while no items overflow, and gains ",e.jsx(n.code,{children:"tabIndex={0}"})," once items overflow."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Menu"})}),": Is the standard ",e.jsx(n.a,{href:"?path=/docs/components-popups-menu--docs#accessibility",children:"Menu"}),`.
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Menu.List"})})," has ",e.jsx(n.code,{children:'role="menu"'}),` labelled by the overflow button, and
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Menu.Item"})})," has ",e.jsx(n.code,{children:'role="menuitem"'})," with roving ",e.jsx(n.code,{children:"tabIndex"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Focus"})," (",e.jsx(n.em,{children:"applied by the model"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Opening the overflow menu moves focus to its first item."}),`
`,e.jsx(n.li,{children:"Selecting an item closes the menu."}),`
`,e.jsxs(n.li,{children:["Closing the menu (Escape, outside click, or selection) returns focus to ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.OverflowButton"})}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard"}),":"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Key"}),e.jsx(n.th,{children:"Behavior"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx("kbd",{children:"Tab"})," / ",e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"})]}),e.jsxs(n.td,{children:["Moves between each visible ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})," and the overflow button. Every visible item is its own tab stop; Action Bar does not use roving tabindex"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx("kbd",{children:"Enter"})," / ",e.jsx("kbd",{children:"Space"})]}),e.jsx(n.td,{children:"Activates the focused item, or opens the overflow menu"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx("kbd",{children:"ArrowDown"})," / ",e.jsx("kbd",{children:"ArrowUp"})]}),e.jsx(n.td,{children:"Opens the overflow menu from the overflow button"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx("kbd",{children:"ArrowDown"})," / ",e.jsx("kbd",{children:"ArrowUp"})," inside menu"]}),e.jsx(n.td,{children:"Moves between overflow menu items"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx("kbd",{children:"Escape"})}),e.jsx(n.td,{children:"Closes the overflow menu and returns focus to the overflow button"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx("kbd",{children:"Tab"})," inside menu"]}),e.jsx(n.td,{children:"Closes the menu and moves focus to the next focusable element on the page"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Screen reader expectations"})," (",e.jsx(n.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["On entering the group, the landmark is announced with the ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})}),` (for example, "Page
actions, region").`]}),`
`,e.jsx(n.li,{children:'Each visible item is announced by its text and role (for example, "First Action, button").'}),`
`,e.jsxs(n.li,{children:["The overflow button is announced with its ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})}),` and as a menu button with expanded or
collapsed state (for example, "More actions, menu button, collapsed").`]}),`
`,e.jsx(n.li,{children:`Items moved into the overflow menu are no longer announced as buttons in the bar. They are
announced as menu items when the menu is open.`}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(n.p,{children:["Required in application code for an accessible Action Bar. Rows marked ",e.jsx(n.em,{children:"(conditional)"}),` apply only
when the situation matches—otherwise omit.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"If no design spec is provided:"})," render ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar"})})," → ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})," with ",e.jsx(n.code,{children:'as="section"'}),`
and a translated `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})}),", one primary ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})}),` first, followed by secondary
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})," components with visible text. Omit ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"disabled"}),`, the overflow API, custom
`,e.jsx(n.code,{children:"maximumVisible"}),", and custom ",e.jsx(n.code,{children:"data-id"})," unless the spec requires them."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Requirement"}),e.jsx(n.th,{children:"How to satisfy"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Group label"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'as="section"'})," and a translated ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})," that is unique among landmarks on the page"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Item accessible name"}),e.jsxs(n.td,{children:["Non-empty visible text as the child of every ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Composition order"}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar"})})," → ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})," → ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})}),"; add ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Menu"})})," as a sibling of ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})," for overflow"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Primary action ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"as={PrimaryButton}"})})," on only the first ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})}),"; secondary actions use the default; do not use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"TertiaryButton"})})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Destructive action ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"as={DeleteButton}"})})," only for destructive actions, per design"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Decorative icon ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"icon"})})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})," with visible text—no extra ARIA on the icon"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Overflow button name ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:["Translated ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.OverflowButton"})})," (required by its type), passed through ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"overflowButton"})})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Overflow menu ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:["Dynamic API: ",e.jsx(n.code,{children:"items"})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"useActionBarModel"})}),", render props on both ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})," and ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Menu.List"})}),", and ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Menu.Popper"})})," → ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Card"})})," → ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"List"})})," → ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Item"})})," with the same item text"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Menu item activation ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:["The same ",e.jsx(n.code,{children:"onClick"})," handler on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})," and its ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Menu.Item"})})," counterpart so an action behaves the same wherever it renders"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Fixed placement ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})," is ",e.jsx(n.code,{children:"position: fixed"})," at the bottom of the viewport. Reserve space so page content and focused controls are not hidden behind it, or pass ",e.jsx(n.code,{children:'position="relative"'})," when the bar sits in the page flow"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Disabled action ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:["Native ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"disabled"})})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})," when the spec marks the action unavailable"]})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"REQUIRED:"})," ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})," with ",e.jsx(n.code,{children:'as="section"'})," and a translated ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})}),`; every
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})," with visible text; one primary action first"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CONDITIONAL:"})," ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"icon"})}),"; ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"DeleteButton"})}),"; ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"overflowButton"})})," with an ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})}),`;
matching `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Menu"})})," items and handlers; ",e.jsx(n.code,{children:'position="relative"'}),"; ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"disabled"})})]}),`
`]}),`
`,e.jsx(n.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(n.p,{children:["Do ",e.jsx(n.strong,{children:"not"})," generate code that does the following (see ",e.jsx(n.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Omit ",e.jsx(n.code,{children:'as="section"'})," or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})}),`, which leaves the group
unidentifiable to screen reader users`]}),`
`,e.jsxs(n.li,{children:["Reuse the same ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})})," for ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})," and another landmark on the page"]}),`
`,e.jsxs(n.li,{children:["Use more than one ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"PrimaryButton"})})," or any ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"TertiaryButton"})})," in an Action Bar"]}),`
`,e.jsxs(n.li,{children:["Render ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})})," without visible text or as a non-button element with ",e.jsx(n.code,{children:"onClick"})]}),`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:'role="toolbar"'}),", ",e.jsx(n.code,{children:'role="group"'}),`, roving tabindex, or arrow-key handlers to
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})}),"—each item must be a separate tab stop"]}),`
`,e.jsxs(n.li,{children:["Render ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.OverflowButton"})})," without ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})})]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:"aria-haspopup"}),", ",e.jsx(n.code,{children:"aria-expanded"}),", or ",e.jsx(n.code,{children:"aria-hidden"})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.OverflowButton"})}),` or
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.Item"})}),"—the model sets them"]}),`
`,e.jsxs(n.li,{children:["Hide overflowing items with CSS, ",e.jsx(n.code,{children:"hidden"}),`, or conditional rendering—use the dynamic API
and `,e.jsx(n.code,{children:"maximumVisible"})]}),`
`,e.jsxs(n.li,{children:["Use the overflow behavior with static children—it requires ",e.jsx(n.code,{children:"items"})," on the model and render props"]}),`
`,e.jsx(n.li,{children:"Provide an overflow menu whose items differ in text or behavior from the action bar items"}),`
`,e.jsxs(n.li,{children:["Move focus manually after the overflow menu closes—",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu"})})," returns focus to the overflow button"]}),`
`,e.jsxs(n.li,{children:["Leave the fixed ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ActionBar.List"})})," covering page content or focused controls"]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(M,{name:"ActionBar",fileName:"/react/"})]})}function R(o={}){const{wrapper:n}={...v(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(w,{...o})}):w(o)}const E={title:"Components/Buttons/Action Bar",component:t,tags:["autodocs"],parameters:{docs:{page:R}}},c={render:j},d={render:u},a={render:p},l={render:A},h={render:B};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: DeleteActionExample
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: OverflowActionBarExample
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: OverflowActionBarCustomButtonCountExample
}`,...h.parameters?.docs?.source}}};const mn=["Basic","Icons","DeleteAction","OverflowActionBar","OverflowActionBarCustomButtonCount"];export{c as Basic,a as DeleteAction,d as Icons,l as OverflowActionBar,h as OverflowActionBarCustomButtonCount,mn as __namedExportsOrder,E as default};
