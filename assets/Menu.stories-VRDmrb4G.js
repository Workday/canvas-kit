import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as F}from"./index-3YbjYt95.js";import{ae as P}from"./index-B7JPaHCe.js";import{E as l,c as O}from"./union-C-XUx4Jk.js";import{S as L}from"./Specifications-BKtiTCxr.js";import{e as o}from"./index-IfJi-UCQ.js";import{M as t}from"./Menu-DHE2CAff.js";import{B as d}from"./TypeLevelComponents-eC853Afo.js";import{g as c,s as A,p as D,c as _}from"./index-DE-upP0k.js";import{c as N}from"./cs-CmRirKzJ.js";import{S as G}from"./SecondaryButton-edyy8Yyq.js";import{p as U}from"./px2rem-C0KbprIx.js";import{c as v}from"./cloud-arrow-up-BLHe5iIq.js";import{c as E}from"./configure-BFfrsK69.js";import{b as T}from"./book-user-BARqsbvA.js";import{u as W}from"./user-Tu8DwaZY.js";import"./iframe-Dac7Hedr.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BcDZsE52.js";import"./Svg-ZtmPf1WS.js";import"./components-d5Lq2N3r.js";import"./StatusIndicator-DnH4Ng-7.js";import"./Text-DMwz83mg.js";import"./mergeStyles-Bv4mj65-.js";import"./Box-8rtctY3X.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-C1nlk4Q5.js";import"./grid-kt9rUtwL.js";import"./cornerShape-DnGoKixo.js";import"./Card-Cgn41sLF.js";import"./ExternalHyperlink-DNQXdN1m.js";import"./Hyperlink-DTQzeeu5.js";import"./external-link-ChL2h1Cn.js";import"./lerna-evyZBZtl.js";import"./CanvasProvider-C8GkxeBT.js";import"./index-D-t2nnqG.js";import"./Tooltip-BrBbQMlI.js";import"./useTooltip-gRyGftt9.js";import"./getTransformFromPlacement-DFpy6Eid.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-D0RFoaOv.js";import"./Popper-Cm0FFZPA.js";import"./TertiaryButton-CrOm2fp9.js";import"./BaseButton-9fY3LWrU.js";import"./Button-CHFUbppk.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-NcRgt_sV.js";import"./ColorInput-DSXyr_LF.js";import"./check-small-BqSDQIle.js";import"./TextInput-CMmZv4Ba.js";import"./types-DXdjelYI.js";import"./FormField-BRQUY4iF.js";import"./check-Ds6vsrAM.js";import"./Expandable-BYaYjrzC.js";import"./Avatar-b92-NjIl.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-5MIkg8A2.js";import"./Popup-ecgWxFuV.js";import"./x-B1faap_l.js";import"./usePopupTarget-CeDO4AGg.js";import"./useInitialFocus-CoqXPXir.js";import"./useReturnFocus-B9CbcNi8.js";import"./useFocusRedirect-ClVmmyIj.js";import"./Breadcrumbs-D8g-gW_1.js";import"./useOverflowListTarget-B8N3Ckvk.js";import"./useListItemRegister-DRuomJPi.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-C7AH6CXC.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-Cax-TbUS.js";import"./Table-CrJ8Ctju.js";import"./useListItemSelect-BwZQ88Wp.js";const M=()=>{const[s,n]=o.useState("");return e.jsxs(t,{onSelect:r=>n(r.id),children:[e.jsx(t.Target,{children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:"First Item"}),e.jsx(t.Item,{children:"Second Item"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{children:"Third Item (with a really, really, really long label)"}),e.jsx(t.Item,{"aria-disabled":!0,children:"Fourth Item"})]})})}),e.jsxs(d,{size:"small",cs:{marginBlockStart:c.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};M.__RAW__=`import React from 'react';

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
`;const z=N({background:_.bg.alt.default,padding:D.xl,borderRadius:A.md,minHeight:U(300),display:"flex",alignItems:"center",justifyContent:"center"}),y=()=>e.jsx("div",{className:z,children:e.jsxs(t,{children:[e.jsx(t.Target,{as:G,children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{variant:"alt",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:"First Item"}),e.jsx(t.Item,{children:"Second Item"}),e.jsx(t.Item,{children:"Third Item"})]})})})]})});y.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Menu} from '@workday/canvas-kit-react/menu';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const altBackgroundStyles = createStyles({
  background: system.color.bg.alt.default,
  padding: system.padding.xl,
  borderRadius: system.shape.md,
  minHeight: px2rem(300),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Alt = () => {
  return (
    <div className={altBackgroundStyles}>
      <Menu>
        <Menu.Target as={SecondaryButton}>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card variant="alt">
            <Menu.List>
              <Menu.Item>First Item</Menu.Item>
              <Menu.Item>Second Item</Menu.Item>
              <Menu.Item>Third Item</Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    </div>
  );
};
`;const f=()=>{const[s,n]=o.useState("");return e.jsxs(t,{onSelect:r=>n(r.id),children:[e.jsx(t.TargetContext,{children:"Right-click to Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:"First Item"}),e.jsx(t.Item,{children:"Second Item"}),e.jsx(t.Item,{children:"Third Item (with a really, really, really long label)"}),e.jsx(t.Item,{children:"Fourth Item"})]})})}),e.jsxs(d,{size:"small",cs:{marginBlockStart:c.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};f.__RAW__=`import React from 'react';

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
`;const I=()=>{const[s,n]=o.useState("");return e.jsx(e.Fragment,{children:e.jsxs(t,{onSelect:r=>n(r.id),children:[e.jsx(t.Target,{children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{children:[e.jsxs(t.Group,{title:"First Group",children:[e.jsx(t.Item,{children:"First Item"}),e.jsx(t.Item,{children:"Second Item"})]}),e.jsxs(t.Group,{title:"Second Group",children:[e.jsx(t.Item,{children:"Third Item (with a really, really, really long label)"}),e.jsx(t.Item,{"aria-disabled":!0,children:"Fourth Item"})]})]})})}),e.jsxs(d,{size:"small",cs:{marginBlockStart:c.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})})};I.__RAW__=`import React from 'react';

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
`;const S=()=>{const[s,n]=o.useState("");return e.jsxs(t,{onSelect:r=>n(r.id),children:[e.jsx(t.Target,{children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{children:[e.jsxs(t.Item,{"data-text":"First Item",children:[e.jsx(t.Item.Icon,{icon:v}),e.jsx(t.Item.Text,{children:"First Item"})]}),e.jsxs(t.Item,{"data-text":"Second Item (with a really really really long label)",children:[e.jsx(t.Item.Icon,{icon:E}),e.jsx(t.Item.Text,{children:"Second Item (with a really really really long label)"})]}),e.jsxs(t.Item,{"aria-disabled":!0,"data-text":"Third Item",children:[e.jsx(t.Item.Icon,{icon:v}),e.jsx(t.Item.Text,{children:"Third Item"}),e.jsx(t.Item.Icon,{icon:T})]}),e.jsxs(t.Item,{"data-text":"User",children:[e.jsx(t.Item.Icon,{icon:W}),e.jsx(t.Item.Text,{children:"User"})]}),e.jsx(t.Divider,{}),e.jsxs(t.Item,{"data-text":"Fifth Item (with divider)",children:[e.jsx(t.Item.Icon,{icon:T}),e.jsx(t.Item.Text,{children:"Fifth Item (with divider)"})]})]})})}),e.jsxs(d,{size:"small",cs:{marginBlockStart:c.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};S.__RAW__=`import React from 'react';

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
`;const w=()=>{const[s,n]=o.useState("");return e.jsxs(t,{id:"first-menu",onSelect:r=>{n(r.id)},children:[e.jsx(t.Target,{children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{children:[e.jsx(t.Item,{"data-id":"first-item",children:"First Item"}),e.jsxs(t.Submenu,{id:"second-menu",children:[e.jsx(t.Submenu.TargetItem,{"data-id":"second-item",children:"Second Item"}),e.jsx(t.Submenu.Popper,{children:e.jsx(t.Submenu.Card,{children:e.jsxs(t.Submenu.List,{children:[e.jsx(t.Submenu.Item,{"data-id":"first-sub-item",children:"First Sub Item"}),e.jsx(t.Submenu.Item,{"data-id":"second-sub-item",children:"First Sub Item"}),e.jsx(t.Submenu.Item,{"data-id":"third-sub-item",children:"Third Sub Item"}),e.jsx(t.Submenu.Item,{"data-id":"fourth-sub-item",children:"Fourth Sub Item"})]})})})]}),e.jsx(t.Divider,{}),e.jsx(t.Item,{"data-id":"third-item",children:"Third Item (with a really, really, really long label)"}),e.jsx(t.Item,{"aria-disabled":!0,"data-id":"fourth-item",children:"Fourth Item"})]})})}),e.jsxs(d,{size:"small",cs:{marginBlockStart:c.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};w.__RAW__=`import React from 'react';

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
`;const q=[{id:"first-item",label:"First Item"},{id:"second-item",label:"Second Item",type:"submenu",children:[{id:"first-sub-item",label:"First Sub Item"},{id:"second-sub-item",label:"Second Sub Item",type:"submenu",children:[{id:"first-sub-sub-item",label:"First Sub Sub Item"},{id:"second-sub-sub-item",type:"submenu",label:"Second Sub Sub Item",children:[{id:"first-sub-sub-sub-item",label:"First Sub Sub Sub Item"},{id:"second-sub-sub-sub-item",label:"Second Sub Sub Sub Item"},{id:"third-sub-sub-sub-item",label:"Third Sub Sub Sub Item"},{id:"fourth-sub-sub-sub-item",label:"Fourth Sub Sub Sub Item"}]},{id:"third-sub-sub-item",label:"Third Sub Sub Item"},{id:"fourth-sub-sub-item",label:"Fourth Sub Sub Item"}]},{id:"third-sub-item",label:"Third Sub Item"},{id:"fourth-sub-item",label:"Fourth Sub Item"}]},{id:"third-item",label:"Third Item"},{id:"fourth-item",label:"Fourth Item"}],k=()=>{const[s,n]=o.useState("");function r(i){return i.type==="submenu"?e.jsxs(t.Submenu,{id:i.id,items:i.children,children:[e.jsx(t.Submenu.TargetItem,{children:i.label}),e.jsx(t.Submenu.Popper,{children:e.jsx(t.Submenu.Card,{children:e.jsx(t.Submenu.List,{children:r})})})]}):e.jsx(t.Item,{children:i.label})}return e.jsxs(t,{items:q,id:"first-menu",getTextValue:i=>i.label,onSelect:i=>{n(i.id)},children:[e.jsx(t.Target,{children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{children:e.jsx(t.List,{children:r})})}),e.jsxs(d,{size:"small",cs:{marginBlockStart:c.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};k.__RAW__=`import React from 'react';

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
`;const B=()=>{const[s,n]=o.useState("");return e.jsxs(t,{onSelect:r=>n(r.id),children:[e.jsx(t.Target,{children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{role:"listbox",children:[e.jsx(t.Option,{children:"First Item"}),e.jsx(t.Option,{children:"Second Item"}),e.jsx(t.Divider,{}),e.jsx(t.Option,{children:"Third Item (with a really, really, really long label)"}),e.jsx(t.Option,{"aria-disabled":!0,children:"Fourth Item"})]})})}),e.jsxs(d,{size:"small",cs:{marginBlockStart:c.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};B.__RAW__=`import React from 'react';

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
`;function C(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...F(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(P,{of:$}),`
`,e.jsx(n.h1,{id:"canvas-kit-menu",children:"Canvas Kit Menu"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu"})," displays a list of options when triggered by an action or UI element like an icon or button."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://design.workday.com/components/popups/menus",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu"})," is typically triggered by an action such as pressing a button. The ",e.jsx(n.code,{children:"Menu"}),` comes with a
`,e.jsx(n.code,{children:"Target"})," subcomponent and a Popup."]}),`
`,e.jsx(l,{code:M}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu"})," will automatically move focus to the first menu item when it opens. The ",e.jsx(n.code,{children:"Menu"}),` uses a menu
model which composes a list model and a popup model and sets up accessibility features for you.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," When content exceeds ",e.jsx(n.code,{children:"60vh"}),", the menu content is clipped and the menu becomes scrollable."]}),`
`]}),`
`,e.jsx(n.h3,{id:"alt-example",children:"Alt Example"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"alt"})," variant is designed for use on alternative page backgrounds (",e.jsx(n.code,{children:"system.color.bg.alt.default"}),"). Use this variant to maintain proper visual hierarchy when placing components on colored backgrounds. While the default variant should be used on ",e.jsx(n.code,{children:"system.color.bg.default"})," backgrounds, the ",e.jsx(n.code,{children:"alt"})," variant ensures the component remains visually elevated on ",e.jsx(n.code,{children:"system.color.bg.alt.default"})," backgrounds."]}),`
`,e.jsx(l,{code:y}),`
`,e.jsx(n.h3,{id:"context-menu",children:"Context Menu"}),`
`,e.jsx(l,{code:f}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accessibility Note"}),": This variation relies on the ",e.jsx(n.code,{children:"contextmenu"}),` browser event, which has
varying levels of support across different operating systems. On Windows, this feature is better
supported and users can typically trigger context menus using the `,e.jsx(n.strong,{children:"Shift + F10"}),` keyboard
shortcut or the dedicated `,e.jsx(n.strong,{children:"Context Menu"}),` key (if available on their keyboard). However, on
macOS, context menu support is limited and may require users to enable specific accessibility
settings in their system preferences to function properly. Consider providing alternative access
methods for critical functionality.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:[`Menu supports more complex children, including icons, but the text of the item will no longer be
known. In this case, add a `,e.jsx(n.code,{children:"data-text"}),` attribute to inform the collection system what the text of
the item is. The text is used for components that filter based on text. For example, a Select
component will jump to an item based on the keys the user types. If the user types "C", the
component will jump to the first item that starts with a "C". This functionality requires knowledge
about the text of the item.`]}),`
`,e.jsx(l,{code:S}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accessibility Note"}),`: Icons in menu items do not inherently provide text alternatives to
assistive technologies. However, in most cases, icons are used decoratively alongside text labels,
and additional text alternatives are not necessary since the menu item text itself provides the
accessible name.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"grouping",children:"Grouping"}),`
`,e.jsx(n.p,{children:`Grouping adds hierarchy and categorization to menu items. Group headers do not represent menu items
and are not selectable with the keyboard or mouse.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),": Grouping is not supported in virtual rendering. Menus by default have ",e.jsx(n.code,{children:"shouldVirtualize"}),`
set to `,e.jsx(n.code,{children:"false"}),". Setting to ",e.jsx(n.code,{children:"true"})," results in unspecified behavior. We use ",e.jsx(n.code,{children:"react-virtual"}),` which
doesn't support nested virtualization.`]}),`
`]}),`
`,e.jsx(l,{code:I}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accessibility Note"}),": Menu groups use ",e.jsx(n.code,{children:'role="group"'}),` with appropriate labeling to provide
semantic structure for assistive technologies. When navigating through grouped menu items, screen
readers will announce the group label when users enter a new group, providing important context
about the organization of the menu. Group headers are not part of the keyboard navigation
sequence, allowing users to efficiently move between actionable menu items. This semantic grouping
helps all users, including those using assistive technologies, understand the hierarchy and
categorization of menu options.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"nested",children:"Nested"}),`
`,e.jsxs(n.p,{children:[`Menus support nesting. If you only have a few items and not very many nesting levels, the menu can
be defined statically using JSX. A submenu is defined using the `,e.jsx(n.code,{children:"<Menu.Submenu>"}),` component. The
`,e.jsx(n.code,{children:"Submenu"})," is implemented as a special ",e.jsx(n.code,{children:"Menu"}),` subcomponent. The API of the submenu is the same as the
`,e.jsx(n.code,{children:"Menu"})," except the submenu's target is also a menu item. The component is named ",e.jsx(n.code,{children:"TargetItem"}),` to
indicate this dual role.`]}),`
`,e.jsx(l,{code:w}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accessibility Note"}),": Canvas Kit applies ",e.jsx(n.code,{children:"aria-haspopup"})," and ",e.jsx(n.code,{children:"aria-expanded"}),` on
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Submenu.TargetItem"})}),` automatically. Do not set these manually — see
`,e.jsx(n.a,{href:"#accessibility",children:"Accessibility"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"nested-dynamic-items",children:"Nested Dynamic Items"}),`
`,e.jsxs(n.p,{children:["Menu nesting is simpler with the dynamic API. In this example, a ",e.jsx(n.code,{children:"renderItem"}),` function is defined to
allow recursive nesting of items using a data structure you define. A submenu will inherit the
`,e.jsx(n.code,{children:"getId"})," and ",e.jsx(n.code,{children:"getTextValue"})," functions of the parent menu. While you can pass a specialize ",e.jsx(n.code,{children:"getId"}),` or
`,e.jsx(n.code,{children:"getTextValue"}),` function to each submenu, it may be simpler to use the same one for the menu and
submenus.`]}),`
`,e.jsx(l,{code:k}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu"}),` follows the
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",rel:"nofollow",children:"Menu Button Pattern | APG | WAI | W3C"}),`, which
has two parts with different accessibility jobs.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Menu button"})," (",e.jsx(n.code,{children:"Menu.Target"}),`): a focusable control that opens and closes the menu. It exposes
popup presence and expanded/collapsed state (`,e.jsx(n.code,{children:"aria-haspopup"}),", ",e.jsx(n.code,{children:"aria-expanded"}),`), and receives focus
again when the menu is dismissed.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Menu popup"})," (",e.jsx(n.code,{children:"Menu.List"})," and its items): the floating action list. It uses ",e.jsx(n.code,{children:'role="menu"'}),` /
`,e.jsx(n.code,{children:'role="menuitem"'}),", is labeled by the button, and manages focus inside the list with ",e.jsx(n.strong,{children:`roving
tabindex`})," so users can move between items and activate one."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.strong,{children:"Menu"}),` for action lists opened from a control. Prefer
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Select"})}),` or
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Combobox"})}),`
when choosing a value from options (`,e.jsx(n.code,{children:"Menu.Option"})," / ",e.jsx(n.code,{children:"listbox"}),` patterns are composed there—do not use
`,e.jsx(n.code,{children:"Menu.Option"}),` alone for a standard menu button). Prefer
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Modal"})}),` or
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-dialog--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Dialog"})}),` for
task dialogs, not menus.`]}),`
`,e.jsx(n.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(n.p,{children:["The following matches the ",e.jsx(n.a,{href:"#basic-example",children:"Basic Example"}),": a keyboard-operable ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),`,
portaled `,e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Menu.Popper"})," → ",e.jsx(n.code,{children:"Menu.Card"})," → ",e.jsx(n.code,{children:"Menu.List"})]}),", and ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})}),` children. On open, focus
moves to the first menu item by default.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Menu} from '@workday/canvas-kit-react/menu';

<Menu>
  <Menu.Target>Open Menu</Menu.Target>
  <Menu.Popper>
    <Menu.Card>
      <Menu.List>
        <Menu.Item>First Item</Menu.Item>
        <Menu.Item>Second Item</Menu.Item>
      </Menu.List>
    </Menu.Card>
  </Menu.Popper>
</Menu>;
`})}),`
`,e.jsxs(n.p,{children:["Provide a clearly named ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),` (visible text, or an icon-only control with
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"Tooltip"})}),", or a translated ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})})," if you are not using ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Tooltip"})}),`).
Use `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-disabled"})}),` on items that should stay in the keyboard sequence but
not activate — do not use the native `,e.jsx(n.code,{children:"disabled"})," attribute for disabled menu items."]}),`
`,e.jsx(n.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(n.p,{children:["Canvas Kit applies these automatically via ",e.jsx(n.code,{children:"useMenuModel"}),` (list + popup) and Menu subcomponents.
`,e.jsx(n.strong,{children:"Do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Popup behaviors"})," (",e.jsx(n.em,{children:"composed on the default model"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useAlwaysCloseOnOutsideClick"})," — pointer interaction outside closes the menu"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useCloseOnEscape"})," — ",e.jsx("kbd",{children:"Escape"})," closes the menu"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useReturnFocus"})," (",e.jsxs(n.em,{children:["on ",e.jsx(n.code,{children:"Menu.List"})]}),") — returns focus to ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),` (or configured return
target) when the menu closes`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useFocusRedirect"})," (",e.jsxs(n.em,{children:["on ",e.jsx(n.code,{children:"Menu.List"})]}),") — ",e.jsx("kbd",{children:"Tab"})," / ",e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"}),` from
inside the menu closes it and moves focus to the next or previous focusable element on the page
(not a focus trap)`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"ARIA and DOM"})," (",e.jsx(n.em,{children:"applied by hooks/subcomponents"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),": shared model ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:'aria-haspopup="true"'}),`,
`,e.jsx(n.code,{children:"aria-expanded={visibility === 'visible'}"}),"; ",e.jsx("kbd",{children:"ArrowDown"})," / ",e.jsx("kbd",{children:"ArrowUp"}),` also open
the menu`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.List"})}),": ",e.jsx(n.code,{children:'role="menu"'}),", ",e.jsx(n.code,{children:"aria-labelledby"})," referencing the target ",e.jsx(n.code,{children:"id"}),`,
`,e.jsx(n.code,{children:"aria-orientation"})," from the model"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})}),": ",e.jsx(n.code,{children:'role="menuitem"'}),", roving ",e.jsx(n.code,{children:"tabIndex"})," (",e.jsx(n.code,{children:"0"})," on the focused item, ",e.jsx(n.code,{children:"-1"}),` on others);
in default `,e.jsx(n.code,{children:'mode="single"'}),`, activating an item selects it and closes the menu (and any open parent
menus)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Group"})}),": ",e.jsx(n.code,{children:'role="group"'})," with ",e.jsx(n.code,{children:"aria-labelledby"})," referencing ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Group.Heading"})}),` (or
the heading created from the `,e.jsx(n.code,{children:"title"})," prop)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Submenu.TargetItem"})}),": ",e.jsx(n.code,{children:'role="menuitem"'}),", ",e.jsx(n.code,{children:'aria-haspopup="true"'}),", ",e.jsx(n.code,{children:"aria-expanded"}),` for the
submenu`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Implementation note on open focus:"})," Menu does ",e.jsx(n.strong,{children:"not"})," compose ",e.jsx(n.code,{children:"useInitialFocus"}),`. In default
`,e.jsx(n.code,{children:'mode="single"'}),", ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"useMenuItemFocus"})}),` moves focus to the first menu item when the menu opens. Do
not generate `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"initialFocusRef"})})," — it is not wired on Menu."]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Implementation note on ",e.jsx(n.code,{children:'mode="multiple"'}),":"]})," ",e.jsx(n.code,{children:"useMenuModel"})," supports ",e.jsx(n.code,{children:'mode="multiple"'}),`, which keeps
the menu open and toggles selection in model state. `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})})," uses ",e.jsx(n.code,{children:'role="menuitem"'}),`, which
does not support `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-selected"})}),`, so selected state is not exposed to assistive technology. Do
not generate `,e.jsx(n.strong,{children:e.jsx(n.code,{children:'mode="multiple"'})})," with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})}),` for an accessible multi-select UI—use
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Select"})}),`,
`,e.jsx(n.strong,{children:"MultiSelect"}),`, or
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Combobox"})})," instead."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard"})," (",e.jsxs(n.em,{children:["trigger is ",e.jsx(n.code,{children:"Menu.Target"}),", default ",e.jsx(n.code,{children:"SecondaryButton"}),`; list uses vertical orientation by
default`]}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Enter"})," / ",e.jsx("kbd",{children:"Space"})," on the trigger opens the menu (button activation)"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"ArrowDown"})," / ",e.jsx("kbd",{children:"ArrowUp"})," on the trigger also opens the menu"]}),`
`,e.jsx(n.li,{children:"On open, focus moves to the first menu item by default"}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"ArrowDown"})," / ",e.jsx("kbd",{children:"ArrowUp"})," moves the roving tabindex between items"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Home"})," / ",e.jsx("kbd",{children:"End"})," moves to the first or last item"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Enter"})," / ",e.jsx("kbd",{children:"Space"}),` on an item activates it and closes the menu (default
`,e.jsx(n.code,{children:'mode="single"'}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Escape"})," closes the menu and returns focus per ",e.jsx(n.code,{children:"useReturnFocus"})]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Tab"})," / ",e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"})," closes the menu via ",e.jsx(n.code,{children:"useFocusRedirect"})]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"ArrowRight"})," / ",e.jsx("kbd",{children:"Enter"})," / ",e.jsx("kbd",{children:"Space"})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Submenu.TargetItem"})}),` opens
the submenu`]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"ArrowLeft"})," on a submenu item closes it (for LTR languages)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Screen reader expectations"})," (",e.jsx(n.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`On the trigger: name, button role, menu popup is available, and expanded/collapsed state
(for example: "Open Menu, button, menu popup, collapsed")`}),`
`,e.jsx(n.li,{children:`On open: menu role (labeled by the trigger), focused item name, menuitem role, and often position
in set (for example: "Open Menu, menu, First Item, menu item, 1 of 4")`}),`
`,e.jsxs(n.li,{children:[`While navigating: each focused item’s name and role; group labels when entering a
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Group"})}),'; submenu items announce has-popup / expanded state (for example: "More Actions, menu item, has submenu, collapsed, 3 of 4.")']}),`
`,e.jsxs(n.li,{children:["Disabled items with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-disabled"})})," remain discoverable but not selectable"]}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(n.p,{children:["Required in application code for an accessible Menu. Hoist ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"useMenuModel"})}),` when you need return
focus overrides or dynamic `,e.jsx(n.code,{children:"items"}),". Rows marked ",e.jsx(n.em,{children:"(conditional)"}),` apply only when the situation
matches—otherwise omit.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"If no design spec is provided:"})," use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})})," + ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})})," (not ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Option"})}),`),
default `,e.jsx(n.code,{children:'mode="single"'}),", default open focus on the first menu item, and omit ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"returnFocusRef"})}),`,
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"initialFocusRef"})}),", and manual ARIA on Target/List/Item."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Focus management — defaults and developer prompts:"}),` Canvas Kit handles open and close focus for
the default menu button pattern. `,e.jsx(n.strong,{children:"State the default to the developer first."}),` Only set
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"returnFocusRef"})}),` after the developer (or an explicit design spec) chooses a non-default return
target. `,e.jsxs(n.strong,{children:["Do not generate ",e.jsx(n.code,{children:"returnFocusRef"})," or ",e.jsx(n.code,{children:"initialFocusRef"})," by default."]})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"When"}),e.jsx(n.th,{children:"Default behavior"}),e.jsx(n.th,{children:"Ask the developer before overriding"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Menu ",e.jsx(n.strong,{children:"opens"})]}),e.jsxs(n.td,{children:["Focus moves to the ",e.jsx(n.strong,{children:"first menu item"})," by default via item focus hooks—not ",e.jsx(n.code,{children:"useInitialFocus"}),". Omit ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"initialFocusRef"})}),"."]}),e.jsxs(n.td,{children:[e.jsx(n.em,{children:"Which item should receive focus when the menu opens?"})," Prefer item order / ",e.jsx(n.code,{children:"data-id"})," registration; do not assume ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"initialFocusRef"})})," works on Menu."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Menu ",e.jsx(n.strong,{children:"closes"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useReturnFocus"})})," moves focus to ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),". Omit ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"returnFocusRef"})}),"."]}),e.jsxs(n.td,{children:[e.jsx(n.em,{children:"Which element should receive focus when the menu closes?"})," (Only when return focus should land somewhere other than ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),".)"]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Custom targets"})," ",e.jsx(n.em,{children:"(conditional)"}),": Apply when using a custom ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"as"})}),` component on
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),". ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})})," adds ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"onClick"})}),", keyboard openers, and ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ref"})}),`. Custom
targets must forward `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"ref"})})," and props to a ",e.jsx(n.strong,{children:"keyboard-focusable"}),` element (prefer a native
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"<button>"})})," or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"as={SecondaryButton}"})}),"). Wrap the component in ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"React.forwardRef"})}),` when it
does not forward refs by default.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Requirement"}),e.jsx(n.th,{children:"How to satisfy"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Keyboard-operable, named trigger"}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})})," with visible text, or icon-only with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Tooltip"})})," (default ",e.jsx(n.code,{children:'type="label"'})," sets ",e.jsx(n.code,{children:"aria-label"}),") or a translated ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-label"})})," without ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Tooltip"})}),". See ",e.jsx(n.strong,{children:"Custom targets"})," above."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Menu list composition"}),e.jsxs(n.td,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Menu.Popper"})," → ",e.jsx(n.code,{children:"Menu.Card"})," → ",e.jsx(n.code,{children:"Menu.List"})]})," with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})})," children (or dynamic ",e.jsx(n.code,{children:"items"})," + render prop on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.List"})}),")."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Disabled items ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-disabled"})})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})})," so the item stays in the roving tabindex / screen reader sequence."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Stable item ids ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"data-id"})})," on items when using ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"onSelect"})}),", dynamic lists, or nested menus that need stable selection ids."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Complex item content / icons ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:["For static API when children are not plain text, set ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"data-text"})})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})})," so typeahead/filtering can resolve the item text. Decorative icons alongside ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item.Text"})})," usually need no extra accessible name."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Groups ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Group"})})," with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"title"})})," or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Group.Heading"})})," so ",e.jsx(n.code,{children:'role="group"'})," is labeled. Group headers are not keyboard-selectable."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Nested menus ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Submenu"})})," with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Submenu.TargetItem"})})," plus ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Popper"})," / ",e.jsx(n.code,{children:"Card"})," / ",e.jsx(n.code,{children:"List"})," / ",e.jsx(n.code,{children:"Item"})]}),". Do not manually set submenu ",e.jsx(n.code,{children:"aria-haspopup"})," / ",e.jsx(n.code,{children:"aria-expanded"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Context menu trigger ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.TargetContext"})})," instead of ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),". OS/browser support for ",e.jsx(n.code,{children:"contextmenu"})," / Shift+F10 varies—provide an alternate open path for critical actions when required."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Selectable or multi-select options ",e.jsx(n.em,{children:"(conditional)"})]}),e.jsxs(n.td,{children:["Do ",e.jsx(n.strong,{children:"not"})," use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Option"})}),", ",e.jsx(n.code,{children:'role="listbox"'}),", or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:'mode="multiple"'})})," with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})})," for a menu button. Compose via ",e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Select"})}),", ",e.jsx(n.strong,{children:"MultiSelect"}),", or ",e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs",rel:"nofollow",children:e.jsx(n.strong,{children:"Combobox"})}),"."]})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"REQUIRED:"})," keyboard-operable named ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),", ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Menu.Popper"})," → ",e.jsx(n.code,{children:"Menu.Card"}),` →
`,e.jsx(n.code,{children:"Menu.List"})]}),", ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})})," (or dynamic list items)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CONDITIONAL:"})," ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-disabled"})}),", ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"data-id"})}),", ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"data-text"})}),`, groups, submenus,
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.TargetContext"})}),", ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"returnFocusRef"})}),", ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"forwardRef"})})," on custom targets"]}),`
`]}),`
`,e.jsx(n.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(n.p,{children:["Do ",e.jsx(n.strong,{children:"not"})," generate code that does the following (see ",e.jsx(n.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Manually set ",e.jsx(n.code,{children:'role="menu"'}),", ",e.jsx(n.code,{children:'role="menuitem"'}),", ",e.jsx(n.code,{children:"aria-labelledby"}),", ",e.jsx(n.code,{children:"aria-orientation"}),`,
`,e.jsx(n.code,{children:"aria-haspopup"}),", ",e.jsx(n.code,{children:"aria-expanded"}),", shared ",e.jsx(n.code,{children:"id"}),", or roving ",e.jsx(n.code,{children:"tabIndex"})," on ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})}),`,
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.List"})}),", ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})}),", or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Submenu.TargetItem"})})," — Canvas Kit hooks wire these"]}),`
`,e.jsxs(n.li,{children:["Omit ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Popper"})}),", or render ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Menu.Card"})," / ",e.jsx(n.code,{children:"Menu.List"})]})," outside the Menu composition"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Option"})}),", ",e.jsx(n.code,{children:'role="listbox"'}),", or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:'mode="multiple"'})})," with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Item"})}),` for
selectable or multi-select UIs — use `,e.jsx(n.strong,{children:"Select"}),", ",e.jsx(n.strong,{children:"MultiSelect"}),", or ",e.jsx(n.strong,{children:"Combobox"}),` instead (see
`,e.jsxs(n.strong,{children:["Implementation note on ",e.jsx(n.code,{children:'mode="multiple"'})]})," in Built-in Behaviors)"]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"initialFocusRef"})})," — Menu does not compose ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"useInitialFocus"})}),`, so this prop has no
effect on open focus (see `,e.jsx(n.strong,{children:"Built-in Behaviors"}),")"]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"returnFocusRef"})}),` by default — state the default return-to-target behavior first and ask
before overriding`]}),`
`,e.jsxs(n.li,{children:["Use native ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"disabled"})})," (or deprecated ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"isDisabled"})}),") instead of ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"aria-disabled"})}),` when
the item should remain discoverable`]}),`
`,e.jsxs(n.li,{children:["Skip ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"data-text"})})," on static items whose accessible/filter text is not plain string children"]}),`
`,e.jsxs(n.li,{children:["Use a custom ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Menu.Target"})})," ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"as"})})," component that does not forward ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ref"})}),` to a focusable
element — use `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"React.forwardRef"})})," or a Canvas Kit button component instead"]}),`
`,e.jsxs(n.li,{children:["Treat Menu like a ",e.jsx(n.strong,{children:"Modal"})," / ",e.jsx(n.strong,{children:"Dialog"})," (focus trap, ",e.jsx(n.code,{children:'role="dialog"'}),`, inert page) — Menu is a
menu button popup with roving tabindex inside `,e.jsx(n.strong,{children:e.jsx(n.code,{children:'role="menu"'})})]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(O,{name:"Menu",fileName:"/react/"}),`
`,e.jsx(n.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(L,{file:"./cypress/component/Menu.spec.tsx",initialSpecs:{type:"file",name:"Menu",children:[{type:"describe",name:"Menu",children:[{type:"describe",name:"given the [Components/Popups/Menu, Basic] story is rendered",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:"should have aria-haspopup set to true"},{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"describe",name:'when the "Open Menu" button is clicked',children:[{type:"it",name:"should set aria-expanded to true"},{type:"it",name:"should show menu"},{type:"it",name:"should transfer focus to the first menu item"},{type:"it",name:"should have aria-disabled=true"},{type:"describe",name:"when escape key is pressed",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"it",name:'return focus to the "Open Menu" button'}]},{type:"describe",name:"when down arrow key is pressed",children:[{type:"it",name:"should transfer focus to the second item"},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"it",name:"should select the second item"}]}]},{type:"describe",name:"when the second item is clicked",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"it",name:"should select the second item"}]},{type:"describe",name:"when the fourth item is clicked",children:[{type:"it",name:"should not close the menu"},{type:"it",name:"should not select the fourth item"}]},{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"}]},{type:"describe",name:'when the user realTypes a printable character "t"',children:[]},{type:"describe",name:"when up arrow key is pressed",children:[{type:"it",name:"should focus on the last option"}]},{type:"describe",name:"when a disabled item has focus and the menu is closed and reopened",children:[{type:"it",name:"should move focus to the first item instead of the disabled item"},{type:"it",name:"should not leave focus on the disabled item"}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:"should not close the menu"},{type:"it",name:"should have aria-expanded set to true"},{type:"it",name:"should not select the fourth item"}]}]}]},{type:"describe",name:"given the [Components/Popups/Menu, NestedSiblings] story is rendered",children:[{type:"describe",name:'when the "Second Item" submenu is opened by hovering',children:[{type:"it",name:'should set aria-expanded to true on "Second Item"'},{type:"describe",name:'when the sibling "Third Item" is then hovered',children:[{type:"it",name:'should close the "Second Item" submenu'},{type:"it",name:'should set aria-expanded to false on "Second Item"'},{type:"it",name:"should leave only the root menu and one submenu open"},{type:"describe",name:'when the original "Second Item" is hovered again',children:[{type:"it",name:'should close the "Third Item" submenu'},{type:"it",name:"should leave only the root menu and one submenu open"}]}]}]},{type:"describe",name:"when a submenu is opened with the right arrow key",children:[{type:"it",name:"should open the submenu"},{type:"it",name:"should keep the submenu open and move focus into it"},{type:"describe",name:"when the left arrow key is pressed",children:[{type:"it",name:"should close the submenu"},{type:"it",name:'should return focus to the "Second Item" target'}]}]}]},{type:"describe",name:"given the [Components/Popups/Menu, NestedDynamic] story is rendered",children:[{type:"describe",name:"when hovering deeper into a chain of nested submenus",children:[{type:"it",name:"should keep the ancestor submenu open"},{type:"it",name:"should keep every menu in the open chain visible"},{type:"describe",name:"when hovering back onto the ancestor item in the open trail",children:[{type:"it",name:"should keep the open trail intact"}]}]}]},{type:"describe",name:"given the [Testing/Popups/Menu, MenuWithFallbackPlacements] example is rendered",children:[{type:"describe",name:"check the fallback placements",children:[{type:"describe",name:"when the preferred placement is set to top",children:[{type:"it",name:"should show the fallback placement: bottom"}]},{type:"describe",name:"when the preferred placement is set to right",children:[{type:"it",name:"should show the fallback placement: left"}]},{type:"describe",name:"when the preferred placement is set to right",children:[{type:"it",name:"should show the fallback placement: bottom"}]}]}]}]}]},name:"Menu"})]})}function H(s={}){const{wrapper:n}={...F(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(C,{...s})}):C(s)}const R=()=>{const[s,n]=o.useState("");return e.jsxs(t,{id:"first-menu",onSelect:r=>{n(r.id)},children:[e.jsx(t.Target,{children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{children:[e.jsx(t.Item,{"data-id":"first-item",children:"First Item"}),e.jsxs(t.Submenu,{id:"second-menu",children:[e.jsx(t.Submenu.TargetItem,{"data-id":"second-item",children:"Second Item"}),e.jsx(t.Submenu.Popper,{children:e.jsx(t.Submenu.Card,{children:e.jsxs(t.Submenu.List,{children:[e.jsx(t.Submenu.Item,{"data-id":"second-first-sub-item",children:"Second: First Sub Item"}),e.jsx(t.Submenu.Item,{"data-id":"second-second-sub-item",children:"Second: Second Sub Item"})]})})})]}),e.jsxs(t.Submenu,{id:"third-menu",children:[e.jsx(t.Submenu.TargetItem,{"data-id":"third-item",children:"Third Item"}),e.jsx(t.Submenu.Popper,{children:e.jsx(t.Submenu.Card,{children:e.jsxs(t.Submenu.List,{children:[e.jsx(t.Submenu.Item,{"data-id":"third-first-sub-item",children:"Third: First Sub Item"}),e.jsx(t.Submenu.Item,{"data-id":"third-second-sub-item",children:"Third: Second Sub Item"})]})})})]}),e.jsx(t.Item,{"data-id":"fourth-item",children:"Fourth Item"})]})})}),e.jsxs(d,{size:"small",cs:{marginBlockStart:c.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};R.__RAW__=`import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const NestedSiblings = () => {
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
                    <Menu.Submenu.Item data-id="second-first-sub-item">
                      Second: First Sub Item
                    </Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="second-second-sub-item">
                      Second: Second Sub Item
                    </Menu.Submenu.Item>
                  </Menu.Submenu.List>
                </Menu.Submenu.Card>
              </Menu.Submenu.Popper>
            </Menu.Submenu>
            <Menu.Submenu id="third-menu">
              <Menu.Submenu.TargetItem data-id="third-item">Third Item</Menu.Submenu.TargetItem>
              <Menu.Submenu.Popper>
                <Menu.Submenu.Card>
                  <Menu.Submenu.List>
                    <Menu.Submenu.Item data-id="third-first-sub-item">
                      Third: First Sub Item
                    </Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="third-second-sub-item">
                      Third: Second Sub Item
                    </Menu.Submenu.Item>
                  </Menu.Submenu.List>
                </Menu.Submenu.Card>
              </Menu.Submenu.Popper>
            </Menu.Submenu>
            <Menu.Item data-id="fourth-item">Fourth Item</Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
`;const $={title:"Components/Popups/Menu",component:t,tags:["autodocs"],parameters:{docs:{page:H}}},a={render:M},u={render:I},h={render:f},m={render:S},p={render:B},x={render:w},j={render:k},b={render:R},g={render:y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: GroupingExample
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ContextMenuExample
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: SelectableMenuExample
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: NestedExample
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: NestedDynamicExample
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: NestedSiblingsExample
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: AltExample
}`,...g.parameters?.docs?.source}}};const wn=["Basic","Grouping","ContextMenu","Icons","SelectableMenu","Nested","NestedDynamic","NestedSiblings","Alt"];export{g as Alt,a as Basic,h as ContextMenu,u as Grouping,m as Icons,x as Nested,j as NestedDynamic,b as NestedSiblings,p as SelectableMenu,wn as __namedExportsOrder,$ as default};
