import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as C}from"./index-3YbjYt95.js";import{ae as A}from"./index-DzkF99zR.js";import{E as u,c as L}from"./union-BTuEGROh.js";import{S as _}from"./Specifications-DbSpZPKs.js";import{e as o}from"./index-IfJi-UCQ.js";import{M as n}from"./Menu-BJR-E_KQ.js";import{B as a}from"./TypeLevelComponents-CI1UQDA-.js";import{g as d,s as O,p as R,c as N}from"./index-DE-upP0k.js";import{c as W}from"./cs-CmRirKzJ.js";import{S as z}from"./SecondaryButton-CdfwS4EL.js";import{p as D}from"./px2rem-C0KbprIx.js";import{c as k}from"./cloud-arrow-up-BLHe5iIq.js";import{c as G}from"./configure-BFfrsK69.js";import{b as v}from"./book-user-BARqsbvA.js";import{u as E}from"./user-Tu8DwaZY.js";import"./iframe-C9_LcRX6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CznyzdLa.js";import"./Svg-DpPQdFHV.js";import"./components-WZi6LWjd.js";import"./StatusIndicator-DGnYvsnj.js";import"./Text-Bea_87QG.js";import"./mergeStyles-C7rR1M8O.js";import"./Box-8nFq7jwp.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-DzaubaG6.js";import"./grid-CQvZVltP.js";import"./cornerShape-DLCpy5rz.js";import"./Card-CjRV3_45.js";import"./ExternalHyperlink-QuoTvtLz.js";import"./Hyperlink-DEJ7_UTD.js";import"./external-link-ChL2h1Cn.js";import"./lerna-gpPqhtvW.js";import"./CanvasProvider-BhcD6OFZ.js";import"./index-D-t2nnqG.js";import"./Tooltip-BA5V-_Lr.js";import"./useTooltip-BagWJqAy.js";import"./getTransformFromPlacement-C4BElB4Q.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-Ba4phxpK.js";import"./Popper-Dfod5tHK.js";import"./TertiaryButton-BJZB5OgW.js";import"./BaseButton-DvzFkALc.js";import"./Button-0EZFZE1C.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-IgPh6eU1.js";import"./ColorInput-D8PKKm1C.js";import"./check-small-BqSDQIle.js";import"./TextInput-FDN0LuCb.js";import"./types-DXdjelYI.js";import"./FormField-BbTV5drn.js";import"./check-Ds6vsrAM.js";import"./Expandable-DNSSdp3u.js";import"./Avatar-xvTe6Ek1.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DAj-dA4U.js";import"./Popup-DXtZzhoD.js";import"./x-B1faap_l.js";import"./usePopupTarget-B1OlaCJM.js";import"./useInitialFocus-BcGiMGIV.js";import"./useReturnFocus-BgGx7-9x.js";import"./useFocusRedirect-Cv0dKCjs.js";import"./Breadcrumbs-DKZwkX-O.js";import"./useOverflowListTarget-SRdAHth-.js";import"./useListItemRegister-DJGV2aRR.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-DZFsSb7W.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-nv1ynLdk.js";import"./Table-CB_tF4IX.js";import"./useListItemSelect-DSbsrAcj.js";const M=()=>{const[s,t]=o.useState("");return e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsx(n.Item,{children:"First Item"}),e.jsx(n.Item,{children:"Second Item"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{"aria-disabled":!0,children:"Fourth Item"})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};M.__RAW__=`import React from 'react';

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
`;const U=W({background:N.bg.alt.default,padding:R.xl,borderRadius:O.md,minHeight:D(300),display:"flex",alignItems:"center",justifyContent:"center"}),y=()=>e.jsx("div",{className:U,children:e.jsxs(n,{children:[e.jsx(n.Target,{as:z,children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{variant:"alt",children:e.jsxs(n.List,{children:[e.jsx(n.Item,{children:"First Item"}),e.jsx(n.Item,{children:"Second Item"}),e.jsx(n.Item,{children:"Third Item"})]})})})]})});y.__RAW__=`import React from 'react';

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
`;const j=()=>{const[s,t]=o.useState("");return e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.TargetContext,{children:"Right-click to Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsx(n.Item,{children:"First Item"}),e.jsx(n.Item,{children:"Second Item"}),e.jsx(n.Item,{children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{children:"Fourth Item"})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};j.__RAW__=`import React from 'react';

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
`;const g=()=>{const[s,t]=o.useState("");return e.jsx(e.Fragment,{children:e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsxs(n.Group,{title:"First Group",children:[e.jsx(n.Item,{children:"First Item"}),e.jsx(n.Item,{children:"Second Item"})]}),e.jsxs(n.Group,{title:"Second Group",children:[e.jsx(n.Item,{children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{"aria-disabled":!0,children:"Fourth Item"})]})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})})};g.__RAW__=`import React from 'react';

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
`;const f=()=>{const[s,t]=o.useState("");return e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsxs(n.Item,{"data-text":"First Item",children:[e.jsx(n.Item.Icon,{icon:k}),e.jsx(n.Item.Text,{children:"First Item"})]}),e.jsxs(n.Item,{"data-text":"Second Item (with a really really really long label)",children:[e.jsx(n.Item.Icon,{icon:G}),e.jsx(n.Item.Text,{children:"Second Item (with a really really really long label)"})]}),e.jsxs(n.Item,{"aria-disabled":!0,"data-text":"Third Item",children:[e.jsx(n.Item.Icon,{icon:k}),e.jsx(n.Item.Text,{children:"Third Item"}),e.jsx(n.Item.Icon,{icon:v})]}),e.jsxs(n.Item,{"data-text":"User",children:[e.jsx(n.Item.Icon,{icon:E}),e.jsx(n.Item.Text,{children:"User"})]}),e.jsx(n.Divider,{}),e.jsxs(n.Item,{"data-text":"Fifth Item (with divider)",children:[e.jsx(n.Item.Icon,{icon:v}),e.jsx(n.Item.Text,{children:"Fifth Item (with divider)"})]})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};f.__RAW__=`import React from 'react';

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
`;const w=()=>{const[s,t]=o.useState("");return e.jsxs(n,{id:"first-menu",onSelect:r=>{t(r.id)},children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsx(n.Item,{"data-id":"first-item",children:"First Item"}),e.jsxs(n.Submenu,{id:"second-menu",children:[e.jsx(n.Submenu.TargetItem,{"data-id":"second-item",children:"Second Item"}),e.jsx(n.Submenu.Popper,{children:e.jsx(n.Submenu.Card,{children:e.jsxs(n.Submenu.List,{children:[e.jsx(n.Submenu.Item,{"data-id":"first-sub-item",children:"First Sub Item"}),e.jsx(n.Submenu.Item,{"data-id":"second-sub-item",children:"First Sub Item"}),e.jsx(n.Submenu.Item,{"data-id":"third-sub-item",children:"Third Sub Item"}),e.jsx(n.Submenu.Item,{"data-id":"fourth-sub-item",children:"Fourth Sub Item"})]})})})]}),e.jsx(n.Divider,{}),e.jsx(n.Item,{"data-id":"third-item",children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{"aria-disabled":!0,"data-id":"fourth-item",children:"Fourth Item"})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};w.__RAW__=`import React from 'react';

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
`;const q=[{id:"first-item",label:"First Item"},{id:"second-item",label:"Second Item",type:"submenu",children:[{id:"first-sub-item",label:"First Sub Item"},{id:"second-sub-item",label:"Second Sub Item",type:"submenu",children:[{id:"first-sub-sub-item",label:"First Sub Sub Item"},{id:"second-sub-sub-item",type:"submenu",label:"Second Sub Sub Item",children:[{id:"first-sub-sub-sub-item",label:"First Sub Sub Sub Item"},{id:"second-sub-sub-sub-item",label:"Second Sub Sub Sub Item"},{id:"third-sub-sub-sub-item",label:"Third Sub Sub Sub Item"},{id:"fourth-sub-sub-sub-item",label:"Fourth Sub Sub Sub Item"}]},{id:"third-sub-sub-item",label:"Third Sub Sub Item"},{id:"fourth-sub-sub-item",label:"Fourth Sub Sub Item"}]},{id:"third-sub-item",label:"Third Sub Item"},{id:"fourth-sub-item",label:"Fourth Sub Item"}]},{id:"third-item",label:"Third Item"},{id:"fourth-item",label:"Fourth Item"}],T=()=>{const[s,t]=o.useState("");function r(i){return i.type==="submenu"?e.jsxs(n.Submenu,{id:i.id,items:i.children,children:[e.jsx(n.Submenu.TargetItem,{children:i.label}),e.jsx(n.Submenu.Popper,{children:e.jsx(n.Submenu.Card,{children:e.jsx(n.Submenu.List,{children:r})})})]}):e.jsx(n.Item,{children:i.label})}return e.jsxs(n,{items:q,id:"first-menu",getTextValue:i=>i.label,onSelect:i=>{t(i.id)},children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};T.__RAW__=`import React from 'react';

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
`;const B=()=>{const[s,t]=o.useState("");return e.jsxs(n,{onSelect:r=>t(r.id),children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{role:"listbox",children:[e.jsx(n.Option,{children:"First Item"}),e.jsx(n.Option,{children:"Second Item"}),e.jsx(n.Divider,{}),e.jsx(n.Option,{children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Option,{"aria-disabled":!0,children:"Fourth Item"})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};B.__RAW__=`import React from 'react';

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
`;function F(s){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...C(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(A,{of:V}),`
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
`,e.jsx(u,{code:M}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Menu"})," will automatically focus on the cursor item (first item by default). The ",e.jsx(t.code,{children:"Menu"}),` uses a menu
model which composes a list model and a popup model and sets up accessibility features for you.`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," When content exceeds ",e.jsx(t.code,{children:"60vh"}),", the menu content is clipped and the menu becomes scrollable."]}),`
`]}),`
`,e.jsx(t.h3,{id:"alt-example",children:"Alt Example"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"alt"})," variant is designed for use on alternative page backgrounds (",e.jsx(t.code,{children:"system.color.bg.alt.default"}),"). Use this variant to maintain proper visual hierarchy when placing components on colored backgrounds. While the default variant should be used on ",e.jsx(t.code,{children:"system.color.bg.default"})," backgrounds, the ",e.jsx(t.code,{children:"alt"})," variant ensures the component remains visually elevated on ",e.jsx(t.code,{children:"system.color.bg.alt.default"})," backgrounds."]}),`
`,e.jsx(u,{code:y}),`
`,e.jsx(t.h3,{id:"context-menu",children:"Context Menu"}),`
`,e.jsx(u,{code:j}),`
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
`,e.jsx(u,{code:f}),`
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
`,e.jsx(u,{code:g}),`
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
`,e.jsx(u,{code:w}),`
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
`,e.jsx(u,{code:T}),`
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
`,e.jsx(L,{name:"Menu",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(_,{file:"./cypress/component/Menu.spec.tsx",initialSpecs:{type:"file",name:"Menu",children:[{type:"describe",name:"Menu",children:[{type:"describe",name:"given the [Components/Popups/Menu, Basic] story is rendered",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:"should have aria-haspopup set to true"},{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"describe",name:'when the "Open Menu" button is clicked',children:[{type:"it",name:"should set aria-expanded to true"},{type:"it",name:"should show menu"},{type:"it",name:"should transfer focus to the first menu item"},{type:"it",name:"should have aria-disabled=true"},{type:"describe",name:"when escape key is pressed",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"it",name:'return focus to the "Open Menu" button'}]},{type:"describe",name:"when down arrow key is pressed",children:[{type:"it",name:"should transfer focus to the second item"},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"it",name:"should select the second item"}]}]},{type:"describe",name:"when the second item is clicked",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"},{type:"it",name:"should select the second item"}]},{type:"describe",name:"when the fourth item is clicked",children:[{type:"it",name:"should not close the menu"},{type:"it",name:"should not select the fourth item"}]},{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should have aria-expanded set to false"},{type:"it",name:"should not show a menu"}]},{type:"describe",name:'when the user realTypes a printable character "t"',children:[]},{type:"describe",name:"when up arrow key is pressed",children:[{type:"it",name:"should focus on the last option"}]},{type:"describe",name:"when a disabled item has focus and the menu is closed and reopened",children:[{type:"it",name:"should move focus to the first item instead of the disabled item"},{type:"it",name:"should not leave focus on the disabled item"}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:"should not close the menu"},{type:"it",name:"should have aria-expanded set to true"},{type:"it",name:"should not select the fourth item"}]}]}]},{type:"describe",name:"given the [Components/Popups/Menu, NestedSiblings] story is rendered",children:[{type:"describe",name:'when the "Second Item" submenu is opened by hovering',children:[{type:"it",name:'should set aria-expanded to true on "Second Item"'},{type:"describe",name:'when the sibling "Third Item" is then hovered',children:[{type:"it",name:'should close the "Second Item" submenu'},{type:"it",name:'should set aria-expanded to false on "Second Item"'},{type:"it",name:"should leave only the root menu and one submenu open"},{type:"describe",name:'when the original "Second Item" is hovered again',children:[{type:"it",name:'should close the "Third Item" submenu'},{type:"it",name:"should leave only the root menu and one submenu open"}]}]}]},{type:"describe",name:"when a submenu is opened with the right arrow key",children:[{type:"it",name:"should open the submenu"},{type:"it",name:"should keep the submenu open and move focus into it"},{type:"describe",name:"when the left arrow key is pressed",children:[{type:"it",name:"should close the submenu"},{type:"it",name:'should return focus to the "Second Item" target'}]}]}]},{type:"describe",name:"given the [Components/Popups/Menu, NestedDynamic] story is rendered",children:[{type:"describe",name:"when hovering deeper into a chain of nested submenus",children:[{type:"it",name:"should keep the ancestor submenu open"},{type:"it",name:"should keep every menu in the open chain visible"},{type:"describe",name:"when hovering back onto the ancestor item in the open trail",children:[{type:"it",name:"should keep the open trail intact"}]}]}]},{type:"describe",name:"given the [Testing/Popups/Menu, MenuWithFallbackPlacements] example is rendered",children:[{type:"describe",name:"check the fallback placements",children:[{type:"describe",name:"when the preferred placement is set to top",children:[{type:"it",name:"should show the fallback placement: bottom"}]},{type:"describe",name:"when the preferred placement is set to right",children:[{type:"it",name:"should show the fallback placement: left"}]},{type:"describe",name:"when the preferred placement is set to right",children:[{type:"it",name:"should show the fallback placement: bottom"}]}]}]}]}]},name:"Menu"})]})}function $(s={}){const{wrapper:t}={...C(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(F,{...s})}):F(s)}const P=()=>{const[s,t]=o.useState("");return e.jsxs(n,{id:"first-menu",onSelect:r=>{t(r.id)},children:[e.jsx(n.Target,{children:"Open Menu"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsx(n.Item,{"data-id":"first-item",children:"First Item"}),e.jsxs(n.Submenu,{id:"second-menu",children:[e.jsx(n.Submenu.TargetItem,{"data-id":"second-item",children:"Second Item"}),e.jsx(n.Submenu.Popper,{children:e.jsx(n.Submenu.Card,{children:e.jsxs(n.Submenu.List,{children:[e.jsx(n.Submenu.Item,{"data-id":"second-first-sub-item",children:"Second: First Sub Item"}),e.jsx(n.Submenu.Item,{"data-id":"second-second-sub-item",children:"Second: Second Sub Item"})]})})})]}),e.jsxs(n.Submenu,{id:"third-menu",children:[e.jsx(n.Submenu.TargetItem,{"data-id":"third-item",children:"Third Item"}),e.jsx(n.Submenu.Popper,{children:e.jsx(n.Submenu.Card,{children:e.jsxs(n.Submenu.List,{children:[e.jsx(n.Submenu.Item,{"data-id":"third-first-sub-item",children:"Third: First Sub Item"}),e.jsx(n.Submenu.Item,{"data-id":"third-second-sub-item",children:"Third: Second Sub Item"})]})})})]}),e.jsx(n.Item,{"data-id":"fourth-item",children:"Fourth Item"})]})})}),e.jsxs(a,{size:"small",cs:{marginBlockStart:d.md},children:["Selected: ",e.jsx("span",{"data-testid":"output",children:s})]})]})};P.__RAW__=`import React from 'react';

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
`;const V={title:"Components/Popups/Menu",component:n,tags:["autodocs"],parameters:{docs:{page:$}}},m={render:M},c={render:g},l={render:j},h={render:f},p={render:B},b={render:w},x={render:T},I={render:P},S={render:y};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: GroupingExample
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ContextMenuExample
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: SelectableMenuExample
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: NestedExample
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: NestedDynamicExample
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: NestedSiblingsExample
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: AltExample
}`,...S.parameters?.docs?.source}}};const ft=["Basic","Grouping","ContextMenu","Icons","SelectableMenu","Nested","NestedDynamic","NestedSiblings","Alt"];export{S as Alt,m as Basic,l as ContextMenu,c as Grouping,h as Icons,b as Nested,x as NestedDynamic,I as NestedSiblings,p as SelectableMenu,ft as __namedExportsOrder,V as default};
