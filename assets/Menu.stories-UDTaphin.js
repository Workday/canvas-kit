import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{ae as F}from"./index-D_439bJA.js";import{E as u,c as C}from"./union-BSIFUzl1.js";import{S as B}from"./Specifications-FCqPPpD1.js";import{e as o}from"./index-IfJi-UCQ.js";import{M as n}from"./Menu-CiGVN38M.js";import{B as a}from"./TypeLevelComponents-Bx9MbsnZ.js";import{g as d}from"./index-5dfzm_kn.js";import{c as g}from"./cloud-arrow-up-DRlXmxwS.js";import{c as A}from"./configure-D1HKcHKs.js";import{b as w}from"./book-user-CRg3yIqc.js";import{u as P}from"./user-KhAHIDko.js";import"./iframe-Bg3fn7F7.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CqoDT-XF.js";import"./Svg-DzPS_4Gv.js";import"./px2rem-C0KbprIx.js";import"./components-CiYq2Ux-.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-C8jbXgkY.js";import"./Text-CA4K3XqV.js";import"./mergeStyles-BwsTBQHe.js";import"./Box-B8SJpSaU.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DEpQdPd9.js";import"./grid-Bptupakt.js";import"./Card-DDnCZU17.js";import"./ExternalHyperlink-BEkECOId.js";import"./Hyperlink-hH57UZrX.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-C6alAkIu.js";import"./BaseButton-S0EZlBKg.js";import"./Button-BbxM350c.js";import"./lerna-3jXlGHbP.js";import"./CanvasProvider-BQueJlPh.js";import"./index-5mrAZJYD.js";import"./Tooltip-mrjIWVKX.js";import"./useTooltip-CyGI518_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-CAWOQb5n.js";import"./Popper-D7IcO7QV.js";import"./TertiaryButton-B6R6H9oz.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-C-xEOXaD.js";import"./ColorInput-CgDc74ap.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-B1Ypq4wN.js";import"./types-DXdjelYI.js";import"./FormField-DSLSWaJe.js";import"./check-Bvurkvei.js";import"./Expandable-BIVbTN1o.js";import"./Avatar-B01Yb7M-.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-CWlxB9Wd.js";import"./Popup-BfsH9ToG.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DlVqELN8.js";import"./useInitialFocus-BIZxfhHD.js";import"./useReturnFocus-Bl2nSnaE.js";import"./useFocusRedirect-DEmWqwJT.js";import"./Breadcrumbs-BYBFQdcu.js";import"./useOverflowListTarget-uhQngC8a.js";import"./useListItemSelect-BuLc9fuA.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-C8EirudH.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-CcubAYil.js";import"./Table-C8kjqThE.js";const I=()=>{const[s,t]=o.useState("");return e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsx(n.Item,{children:"First Item"}),e.jsx(n.Item,{children:"Second Item"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{"aria-disabled":!0,children:"Fourth Item"})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};I.__RAW__=`import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const Basic = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item>First Item</Menu.Item>
            <Menu.Item>Second Item</Menu.Item>
            <Menu.Divider />
            <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>
            <Menu.Item aria-disabled>Fourth Item</Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
`;const M=()=>{const[s,t]=o.useState("");return e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.TargetContext,{children:"Right-click to Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsx(n.Item,{children:"First Item"}),e.jsx(n.Item,{children:"Second Item"}),e.jsx(n.Item,{children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{children:"Fourth Item"})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};M.__RAW__=`import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const ContextMenu = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.TargetContext>Right-click to Open Menu</Menu.TargetContext>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item>First Item</Menu.Item>
            <Menu.Item>Second Item</Menu.Item>
            <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>
            <Menu.Item>Fourth Item</Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
`;const y=()=>{const[s,t]=o.useState("");return e.jsx(e.Fragment,{children:e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsxs(n.Group,{title:"First Group",children:[e.jsx(n.Item,{children:"First Item"}),e.jsx(n.Item,{children:"Second Item"})]}),e.jsxs(n.Group,{title:"Second Group",children:[e.jsx(n.Item,{children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{"aria-disabled":!0,children:"Fourth Item"})]})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})})};y.__RAW__=`import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const Grouping = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <>
      <Menu onSelect={data => setSelected(data.id)}>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              <Menu.Group title="First Group">
                <Menu.Item>First Item</Menu.Item>
                <Menu.Item>Second Item</Menu.Item>
              </Menu.Group>
              <Menu.Group title="Second Group">
                <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>
                <Menu.Item aria-disabled>Fourth Item</Menu.Item>
              </Menu.Group>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
        <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
          Selected: <span data-testid="output">{selected}</span>
        </BodyText>
      </Menu>
    </>
  );
};
`;const S=()=>{const[s,t]=o.useState("");return e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsxs(n.Item,{"data-text":"First Item",children:[e.jsx(n.Item.Icon,{icon:g}),e.jsx(n.Item.Text,{children:"First Item"})]}),e.jsxs(n.Item,{"data-text":"Second Item (with a really really really long label)",children:[e.jsx(n.Item.Icon,{icon:A}),e.jsx(n.Item.Text,{children:"Second Item (with a really really really long label)"})]}),e.jsxs(n.Item,{"aria-disabled":!0,"data-text":"Third Item",children:[e.jsx(n.Item.Icon,{icon:g}),e.jsx(n.Item.Text,{children:"Third Item"}),e.jsx(n.Item.Icon,{icon:w})]}),e.jsxs(n.Item,{"data-text":"User",children:[e.jsx(n.Item.Icon,{icon:P}),e.jsx(n.Item.Text,{children:"User"})]}),e.jsx(n.Divider,{}),e.jsxs(n.Item,{"data-text":"Fifth Item (with divider)",children:[e.jsx(n.Item.Icon,{icon:w}),e.jsx(n.Item.Text,{children:"Fifth Item (with divider)"})]})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};S.__RAW__=`import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {
  bookUserIcon,
  cloudArrowUpIcon,
  configureIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const Icons = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item data-text="First Item">
              <Menu.Item.Icon icon={cloudArrowUpIcon} />
              <Menu.Item.Text>First Item</Menu.Item.Text>
            </Menu.Item>
            <Menu.Item data-text="Second Item (with a really really really long label)">
              <Menu.Item.Icon icon={configureIcon} />
              <Menu.Item.Text>Second Item (with a really really really long label)</Menu.Item.Text>
            </Menu.Item>
            <Menu.Item aria-disabled data-text="Third Item">
              <Menu.Item.Icon icon={cloudArrowUpIcon} />
              <Menu.Item.Text>Third Item</Menu.Item.Text>
              <Menu.Item.Icon icon={bookUserIcon} />
            </Menu.Item>
            <Menu.Item data-text="User">
              <Menu.Item.Icon icon={userIcon} />
              <Menu.Item.Text>User</Menu.Item.Text>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item data-text="Fifth Item (with divider)">
              <Menu.Item.Icon icon={bookUserIcon} />
              <Menu.Item.Text>Fifth Item (with divider)</Menu.Item.Text>
            </Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
`;const j=()=>{const[s,t]=o.useState("");return e.jsxs(n,{id:"first-menu",onSelect:r=>{t(r.id)},children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsx(n.Item,{"data-id":"first-item",children:"First Item"}),e.jsxs(n.Submenu,{id:"second-menu",children:[e.jsx(n.Submenu.TargetItem,{"data-id":"second-item",children:"Second Item"}),e.jsx(n.Submenu.Popper,{children:e.jsx(n.Submenu.Card,{children:e.jsxs(n.Submenu.List,{children:[e.jsx(n.Submenu.Item,{"data-id":"first-sub-item",children:"First Sub Item"}),e.jsx(n.Submenu.Item,{"data-id":"second-sub-item",children:"First Sub Item"}),e.jsx(n.Submenu.Item,{"data-id":"third-sub-item",children:"Third Sub Item"}),e.jsx(n.Submenu.Item,{"data-id":"fourth-sub-item",children:"Fourth Sub Item"})]})})})]}),e.jsx(n.Divider,{}),e.jsx(n.Item,{"data-id":"third-item",children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{"aria-disabled":!0,"data-id":"fourth-item",children:"Fourth Item"})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};j.__RAW__=`import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const Nested = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu
      id="first-menu"
      onSelect={data => {
        setSelected(data.id);
      }}
    >
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item data-id="first-item">First Item</Menu.Item>
            <Menu.Submenu id="second-menu">
              <Menu.Submenu.TargetItem data-id="second-item">Second Item</Menu.Submenu.TargetItem>
              <Menu.Submenu.Popper>
                <Menu.Submenu.Card>
                  <Menu.Submenu.List>
                    <Menu.Submenu.Item data-id="first-sub-item">First Sub Item</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="second-sub-item">First Sub Item</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="third-sub-item">Third Sub Item</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="fourth-sub-item">Fourth Sub Item</Menu.Submenu.Item>
                  </Menu.Submenu.List>
                </Menu.Submenu.Card>
              </Menu.Submenu.Popper>
            </Menu.Submenu>
            <Menu.Divider />
            <Menu.Item data-id="third-item">
              Third Item (with a really, really, really long label)
            </Menu.Item>
            <Menu.Item aria-disabled data-id="fourth-item">
              Fourth Item
            </Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
`;const O=[{id:"first-item",label:"First Item"},{id:"second-item",label:"Second Item",type:"submenu",children:[{id:"first-sub-item",label:"First Sub Item"},{id:"second-sub-item",label:"Second Sub Item",type:"submenu",children:[{id:"first-sub-sub-item",label:"First Sub Sub Item"},{id:"second-sub-sub-item",type:"submenu",label:"Second Sub Sub Item",children:[{id:"first-sub-sub-sub-item",label:"First Sub Sub Sub Item"},{id:"second-sub-sub-sub-item",label:"Second Sub Sub Sub Item"},{id:"third-sub-sub-sub-item",label:"Third Sub Sub Sub Item"},{id:"fourth-sub-sub-sub-item",label:"Fourth Sub Sub Sub Item"}]},{id:"third-sub-sub-item",label:"Third Sub Sub Item"},{id:"fourth-sub-sub-item",label:"Fourth Sub Sub Item"}]},{id:"third-sub-item",label:"Third Sub Item"},{id:"fourth-sub-item",label:"Fourth Sub Item"}]},{id:"third-item",label:"Third Item"},{id:"fourth-item",label:"Fourth Item"}],f=()=>{const[s,t]=o.useState("");function r(i){return i.type==="submenu"?e.jsxs(n.Submenu,{id:i.id,items:i.children,children:[e.jsx(n.Submenu.TargetItem,{children:i.label}),e.jsx(n.Submenu.Popper,{children:e.jsx(n.Submenu.Card,{children:e.jsx(n.Submenu.List,{children:r})})})]}):e.jsx(n.Item,{children:i.label})}return e.jsxs(n,{items:O,id:"first-menu",getTextValue:i=>i.label,onSelect:i=>{t(i.id)},children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};f.__RAW__=`import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

type Item = {
  type?: 'item';
  id: string;
  label: string;
};
type SubmenuItem = {
  id: string;
  label: string;
  type: 'submenu';
  children: (Item | SubmenuItem)[];
};

// This is a user-defined object. The structure uses \`id\` for the item identifier which is the
// default key used by the collection system and therefore doesn't require a \`getId\` function to be
// passed to the model. The \`label\` isn't the standard text value used by the collection system, so
// a \`getTextValue\` function is required. The \`type\` and \`children\` aren't important at all to the
// menu and are used in the template by the user-defined \`renderItem\` function.
const items: (SubmenuItem | Item)[] = [
  {id: 'first-item', label: 'First Item'},
  {
    id: 'second-item',
    label: 'Second Item',
    type: 'submenu',
    children: [
      {id: 'first-sub-item', label: 'First Sub Item'},
      {
        id: 'second-sub-item',
        label: 'Second Sub Item',
        type: 'submenu',
        children: [
          {id: 'first-sub-sub-item', label: 'First Sub Sub Item'},
          {
            id: 'second-sub-sub-item',
            type: 'submenu',
            label: 'Second Sub Sub Item',
            children: [
              {id: 'first-sub-sub-sub-item', label: 'First Sub Sub Sub Item'},
              {
                id: 'second-sub-sub-sub-item',
                label: 'Second Sub Sub Sub Item',
              },
              {id: 'third-sub-sub-sub-item', label: 'Third Sub Sub Sub Item'},
              {id: 'fourth-sub-sub-sub-item', label: 'Fourth Sub Sub Sub Item'},
            ],
          },
          {id: 'third-sub-sub-item', label: 'Third Sub Sub Item'},
          {id: 'fourth-sub-sub-item', label: 'Fourth Sub Sub Item'},
        ],
      },
      {id: 'third-sub-item', label: 'Third Sub Item'},
      {id: 'fourth-sub-item', label: 'Fourth Sub Item'},
    ],
  },
  {id: 'third-item', label: 'Third Item'},
  {id: 'fourth-item', label: 'Fourth Item'},
];

export const NestedDynamic = () => {
  const [selected, setSelected] = React.useState('');

  // defining this inline function allows use to recurse any nesting level defined by the \`items\`
  // array.
  function renderItem(item: SubmenuItem | Item) {
    if (item.type === 'submenu') {
      return (
        <Menu.Submenu id={item.id} items={item.children}>
          <Menu.Submenu.TargetItem>{item.label}</Menu.Submenu.TargetItem>
          <Menu.Submenu.Popper>
            <Menu.Submenu.Card>
              <Menu.Submenu.List>{renderItem}</Menu.Submenu.List>
            </Menu.Submenu.Card>
          </Menu.Submenu.Popper>
        </Menu.Submenu>
      );
    }
    return <Menu.Item>{item.label}</Menu.Item>;
  }

  return (
    <Menu
      items={items}
      id="first-menu"
      getTextValue={item => item.label}
      onSelect={data => {
        setSelected(data.id);
      }}
    >
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>{renderItem}</Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
`;const v=()=>{const[s,t]=o.useState("");return e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{role:"listbox",children:[e.jsx(n.Option,{children:"First Item"}),e.jsx(n.Option,{children:"Second Item"}),e.jsx(n.Divider,{}),e.jsx(n.Option,{children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Option,{"aria-disabled":!0,children:"Fourth Item"})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};v.__RAW__=`import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

/**
 * The \`Menu.Item\` renders a \`role=menuitem\` element, and \`aria-selected\` is not a valid attribute for
 * the \`menuitem\` role, so it cannot have a selected state. If you wish your menu to have selectable
 * menu items, use \`Menu.Option\` instead of \`Menu.Item\`. This is meant to be used when overriding the
 * default role of the \`Menu.List\` to \`listbox\`. This example uses \`Menu.Option\` to show what the
 * checkmark looks like, but the example is not keyboard or screen reader accessible. There are many
 * other behaviors that need to be composed into the \`Menu.Target\` and \`Menu.List\` components and the
 * behaviors depend on many other things. To see a full example of all these behaviors, look at the
 * \`<Combobox>\` and \`<Select>\` component source code as examples.
 */

export const SelectableMenu = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List role="listbox">
            <Menu.Option>First Item</Menu.Option>
            <Menu.Option>Second Item</Menu.Option>
            <Menu.Divider />
            <Menu.Option>Third Item (with a really, really, really long label)</Menu.Option>
            <Menu.Option aria-disabled>Fourth Item</Menu.Option>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
`;function T(s){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(F,{of:_}),`
`,e.jsx(t.h1,{id:"canvas-kit-menu",children:"Canvas Kit Menu"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Menu"})," displays a list of options when triggered by an action or UI element like an icon or button."]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://design.workday.com/components/popups/menus",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Menu"})," is typically triggered by an action such as pressing a button. The ",e.jsx(t.code,{children:"Menu"}),` comes with a
`,e.jsx(t.code,{children:"Target"})," subcomponent and a Popup."]}),`
`,e.jsx(u,{code:I}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Menu"})," will automatically focus on the cursor item (first item by default). The ",e.jsx(t.code,{children:"Menu"}),` uses a menu
model which composes a list model and a popup model and sets up accessibility features for you.`]}),`
`,e.jsx(t.h3,{id:"context-menu",children:"Context Menu"}),`
`,e.jsx(u,{code:M}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Accessibility Note"}),": This variation relies on the ",e.jsx(t.code,{children:"contextmenu"}),` browser event, which has
varying levels of support across different operating systems. On Windows, this feature is better
supported and users can typically trigger context menus using the `,e.jsx(t.strong,{children:"Shift + F10"}),` keyboard
shortcut or the dedicated `,e.jsx(t.strong,{children:"Context Menu"}),` key (if available on their keyboard). However, on
macOS, context menu support is limited and may require users to enable specific accessibility
settings in their system preferences to function properly. Consider providing alternative access
methods for critical functionality.`]}),`
`]}),`
`,e.jsx(t.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs(t.p,{children:[`Menu supports more complex children, including icons, but the text of the item will no longer be
known. In this case, add a `,e.jsx(t.code,{children:"data-text"}),` attribute to inform the collection system what the text of
the item is. The text is used for components that filter based on text. For example, a Select
component will jump to an item based on the keys the user types. If the user types "C", the
component will jump to the first item that starts with a "C". This functionality requires knowledge
about the text of the item.`]}),`
`,e.jsx(u,{code:S}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Accessibility Note"}),`: Icons in menu items do not inherently provide text alternatives to
assistive technologies. However, in most cases, icons are used decoratively alongside text labels,
and additional text alternatives are not necessary since the menu item text itself provides the
accessible name.`]}),`
`]}),`
`,e.jsx(t.h3,{id:"grouping",children:"Grouping"}),`
`,e.jsx(t.p,{children:`Grouping adds hierarchy and categorization to menu items. Group headers do not represent menu items
and are not selectable with the keyboard or mouse.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": Grouping is not supported in virtual rendering. Menus by default have ",e.jsx(t.code,{children:"shouldVirtualize"}),`
set to `,e.jsx(t.code,{children:"false"}),". Setting to ",e.jsx(t.code,{children:"true"})," results in unspecified behavior. We use ",e.jsx(t.code,{children:"react-virtual"}),` which
doesn't support nested virtualization.`]}),`
`]}),`
`,e.jsx(u,{code:y}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Accessibility Note"}),": Menu groups use ",e.jsx(t.code,{children:'role="group"'}),` with appropriate labeling to provide
semantic structure for assistive technologies. When navigating through grouped menu items, screen
readers will announce the group label when users enter a new group, providing important context
about the organization of the menu. Group headers are not part of the keyboard navigation
sequence, allowing users to efficiently move between actionable menu items. This semantic grouping
helps all users, including those using assistive technologies, understand the hierarchy and
categorization of menu options.`]}),`
`]}),`
`,e.jsx(t.h3,{id:"nested",children:"Nested"}),`
`,e.jsxs(t.p,{children:[`Menus support nesting. If you only have a few items and not very many nesting levels, the menu can
be defined statically using JSX. A submenu is defined using the `,e.jsx(t.code,{children:"<Menu.Submenu>"}),` component. The
`,e.jsx(t.code,{children:"Submenu"})," is implemented as a special ",e.jsx(t.code,{children:"Menu"}),` subcomponent. The API of the submenu is the same as the
`,e.jsx(t.code,{children:"Menu"})," except the submenu's target is also a menu item. The component is named ",e.jsx(t.code,{children:"TargetItem"}),` to
indicate this dual role.`]}),`
`,e.jsx(u,{code:j}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Accessibility Note"}),": When a menu item has an attached submenu, the ",e.jsx(t.code,{children:"<Menu.Submenu.TargetItem>"}),`
includes `,e.jsx(t.code,{children:'aria-haspopup="true"'})," and ",e.jsx(t.code,{children:"aria-expanded={true | false}"}),` properties. These properties
will alert screen reader users to the available submenu systems.`]}),`
`]}),`
`,e.jsx(t.h3,{id:"nested-dynamic-items",children:"Nested Dynamic Items"}),`
`,e.jsxs(t.p,{children:["Menu nesting is simpler with the dynamic API. In this example, a ",e.jsx(t.code,{children:"renderItem"}),` function is defined to
allow recursive nesting of items using a data structure you define. A submenu will inherit the
`,e.jsx(t.code,{children:"getId"})," and ",e.jsx(t.code,{children:"getTextValue"})," functions of the parent menu. While you can pass a specialize ",e.jsx(t.code,{children:"getId"}),` or
`,e.jsx(t.code,{children:"getTextValue"}),` function to each submenu, it may be simpler to use the same one for the menu and
submenus.`]}),`
`,e.jsx(u,{code:f}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:`Our Menu component is based on the Menu Button pattern on the ARIA Authoring Practices Guide from
the W3C and relies on the roving tabindex technique for managing focus within the opened menu. This
means that the minimum requirements for screen reader support and keyboard navigation are included
in the component.`}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",rel:"nofollow",children:"Menu Button Pattern | APG | WAI | W3C"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"<Menu.Target>"})," sub-component uses ",e.jsx(t.code,{children:'aria-haspopup="true"'})," and ",e.jsx(t.code,{children:"aria-expanded={true | false}"}),`
properties. This benefits screen reader users by indicating when a button element has an attached
menu.`]}),`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"<Menu.List>"})," sub-component uses ",e.jsx(t.code,{children:'role="menu"'})," and ",e.jsx(t.code,{children:"<Menu.Item>"})," uses ",e.jsx(t.code,{children:'role="menuitem"'}),` ARIA
roles. These roles allow screen readers to pass through arrow key events to the web application.`]}),`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"<Menu.List>"})," sub-component includes an ",e.jsx(t.code,{children:"aria-labelledby"})," ID reference to the ",e.jsx(t.code,{children:"<Menu.Target>"}),`
sub-component. This assigns a label to the menu for context.`]}),`
`]}),`
`,e.jsx(t.h3,{id:"navigation",children:"Navigation"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Enter or Space"}),`: When focused on the menu button, opens the menu and moves focus to the first
menu item. When focused on a menu item, activates the item and closes the menu`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Escape"}),": Closes the menu and returns focus to the menu button"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Up & Down Arrow"}),": Moves focus up and down the menu items"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Home & End"}),": Moves focus to the first or last menu item"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Right & Left Arrow"}),`: When focused on a menu item with a submenu, opens the submenu and moves
focus to the first item in the submenu or closes the submenu and returns focus to the parent menu
item`]}),`
`]}),`
`,e.jsx(t.h3,{id:"screen-reader-experience",children:"Screen Reader Experience"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`The menu button will be announced with its label text followed by the button role, a notification
that it has a popup menu, and the current state of the menu (For example: "Actions, button, menu
popup, collapsed")`}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Opening the Menu:"}),` When the menu button is activated, screen readers will announce the menu
opening, the number of menu items available, and the currently focused item (For example:
"Actions, menu, First Action, menu item, 1 of 4.")`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Navigating Menu Items:"}),` As focus moves between menu items, screen readers will announce the
item name and its position in the list (For example: "Second Action, menu item, 2 of 4.")`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Menu Items with Submenus:"}),` When focused on a menu item that has a submenu, screen readers will
announce that it has a submenu and provide the expanded/collapsed state (For example: "More
Actions, menu item, has submenu, collapsed, 3 of 4.")`]}),`
`]}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(C,{name:"Menu",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(B,{file:"./cypress/component/Menu.spec.tsx",initialSpecs:{type:"file",name:"Menu",children:[{type:"describe",name:"Menu",children:[{type:"describe",name:"given the [Components/Popups/Menu, Basic] story is rendered",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:"should have aria-haspopup set to true"},{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"describe",name:'when the "Open Menu" button is clicked',children:[{type:"it",name:"should set aria-expanded to true"},{type:"it",name:"should show menu"},{type:"it",name:"should transfer focus to the first menu item"},{type:"it",name:"should have aria-disabled=true"},{type:"describe",name:"when escape key is pressed",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"it",name:'return focus to the "Open Menu" button'}]},{type:"describe",name:"when down arrow key is pressed",children:[{type:"it",name:"should transfer focus to the second item"},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"it",name:"should select the second item"}]}]},{type:"describe",name:"when the second item is clicked",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"it",name:"should select the second item"}]},{type:"describe",name:"when the fourth item is clicked",children:[{type:"it",name:"should not close the menu"},{type:"it",name:"should not select the fourth item"}]},{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"}]},{type:"describe",name:'when the user realTypes a printable character "t"',children:[]},{type:"describe",name:"when up arrow key is pressed",children:[{type:"it",name:"should focus on the last option"}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:"should not close the menu"},{type:"it",name:"should have aria-expanded set to true"},{type:"it",name:"should not select the fourth item"}]}]}]},{type:"describe",name:"given the [Testing/Popups/Menu, MenuWithFallbackPlacements] example is rendered",children:[{type:"describe",name:"check the fallback placements",children:[{type:"describe",name:"when the preferred placement is set to top",children:[{type:"it",name:"should show the fallback placement: bottom"}]},{type:"describe",name:"when the preferred placement is set to right",children:[{type:"it",name:"should show the fallback placement: left"}]},{type:"describe",name:"when the preferred placement is set to right",children:[{type:"it",name:"should show the fallback placement: bottom"}]}]}]}]}]},name:"Menu"})]})}function L(s={}){const{wrapper:t}={...k(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(T,{...s})}):T(s)}const _={title:"Components/Popups/Menu",component:n,tags:["autodocs"],parameters:{docs:{page:L}}},c={render:I},l={render:y},m={render:M},h={render:S},p={render:v},b={render:j},x={render:f};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: GroupingExample
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ContextMenuExample
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: SelectableMenuExample
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: NestedExample
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: NestedDynamicExample
}`,...x.parameters?.docs?.source}}};const ct=["Basic","Grouping","ContextMenu","Icons","SelectableMenu","Nested","NestedDynamic"];export{c as Basic,m as ContextMenu,l as Grouping,h as Icons,b as Nested,x as NestedDynamic,p as SelectableMenu,ct as __namedExportsOrder,_ as default};
