import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as $}from"./index-3YbjYt95.js";import{ae as z}from"./index-B7XXfe5h.js";import{E as r,c as X}from"./union-CniGnSAc.js";import{S as U}from"./Specifications-C_8uzzh_.js";import{T as n,u as P,B as O,R as H}from"./RightToLeft-DfF7Xs2v.js";import{b as u}from"./cs-rfTTo7Bg.js";import{g as l}from"./index-5dfzm_kn.js";import{e as T}from"./index-IfJi-UCQ.js";import{f as W,s as Y}from"./useListItemSelect-kam_5bXK.js";import{p as C}from"./px2rem-C0KbprIx.js";import{S as G}from"./SecondaryButton-BSYdFPfk.js";import{s as J,a as Q,b as Z}from"./star-CXHW6a0n.js";import{s as ee}from"./search-INhyn6-E.js";import{B as te}from"./Box-Berqkg0s.js";import{S as h}from"./SegmentedControl-wxP-hQJ5.js";import"./iframe-JaH-B26f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-gewk2tVd.js";import"./Svg-pWcUwgKK.js";import"./components-BC9eTosh.js";import"./StatusIndicator-C4zEgVH_.js";import"./Text-DCWkG9qZ.js";import"./mergeStyles-BwvcP3zW.js";import"./flex-kD_kQJ4m.js";import"./grid-L1dbhipu.js";import"./Card-CK3I0y_S.js";import"./ExternalHyperlink-DDmFkxfC.js";import"./Hyperlink-CiQjeIy9.js";import"./external-link-BZdacz1K.js";import"./lerna-DBkctN9J.js";import"./CanvasProvider-ZQW06Ivv.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-DPxT0V2w.js";import"./useTooltip-ZpvAqNNz.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-uv5na6lZ.js";import"./Popper-DUTAU7yt.js";import"./TertiaryButton-UTJ3hnV1.js";import"./BaseButton-DI27SrsM.js";import"./Button-CSRY-Hl0.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bp1jFajF.js";import"./ColorPicker-CM2304tH.js";import"./ColorInput-D3n6ss_X.js";import"./check-small-C7Z-gSGs.js";import"./index-CjGALPG9.js";import"./TextInput-CvOUSrVy.js";import"./types-DXdjelYI.js";import"./FormField-DBJ6kUEd.js";import"./check-Bvurkvei.js";import"./Expandable-BZ-zBmSc.js";import"./Avatar-6NXN_wUR.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DJ3Ch2nb.js";import"./Popup-CjJtetoF.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BMD-7lNA.js";import"./useInitialFocus-BCQsnoIT.js";import"./useReturnFocus-42FhoN3N.js";import"./useFocusRedirect-C7USV4J8.js";import"./Breadcrumbs-DA3HxUJk.js";import"./useOverflowListTarget-upDRG8Jc.js";import"./bundle.esm-C4XAbbi1.js";import"./useMount-CAK2BN3_.js";import"./Menu-FGPO3Mka.js";import"./OverflowTooltip-D71sFiRJ.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-D4H0wg8Z.js";import"./Table-Bjb3VJLc.js";import"./useModalityType-vKGNJOLb.js";import"./chevron-down-small-BMZE52uy.js";const M=()=>e.jsxs(n,{children:[e.jsxs(n.List,{children:[e.jsx(n.Item,{children:"First Tab"}),e.jsx(n.Item,{children:"Second Tab"}),e.jsx(n.Item,{children:"Third Tab"})]}),e.jsxs("div",{style:{marginBlockStart:u(l.lg)},children:[e.jsxs(n.Panel,{tabIndex:void 0,children:[e.jsx("button",{children:"Focusable button"}),e.jsx("br",{}),"Contents of First Tab. The tab panel is no longer focusable, but the button is. It may be desirable to disable focus on the tab panel and allow focus to flow into the tab panel to the first focusable element."]}),e.jsx(n.Panel,{children:"Contents of Second Tab"}),e.jsx(n.Panel,{children:"Contents of Third Tab"})]})]});M.__RAW__=`import {Tabs} from '@workday/canvas-kit-react/tabs';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const AlternativeTabStop = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item>Second Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginBlockStart: cssVar(system.gap.lg)}}>
        <Tabs.Panel tabIndex={undefined}>
          <button>Focusable button</button>
          <br />
          Contents of First Tab. The tab panel is no longer focusable, but the button is. It may be
          desirable to disable focus on the tab panel and allow focus to flow into the tab panel to
          the first focusable element.
        </Tabs.Panel>
        <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
`;const F=()=>e.jsxs(n,{children:[e.jsxs(n.List,{children:[e.jsx(n.Item,{children:"First Tab"}),e.jsx(n.Item,{"aria-disabled":!0,children:"Disabled Tab"}),e.jsx(n.Item,{children:"Third Tab"})]}),e.jsxs("div",{style:{marginBlockStart:u(l.lg)},children:[e.jsx(n.Panel,{children:"Contents of First Tab"}),e.jsx(n.Panel,{children:"Contents of Disabled Tab"}),e.jsx(n.Panel,{children:"Contents of Third Tab"})]})]});F.__RAW__=`import {Tabs} from '@workday/canvas-kit-react/tabs';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const DisabledTab = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item aria-disabled>Disabled Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginBlockStart: cssVar(system.gap.lg)}}>
        <Tabs.Panel>Contents of First Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Disabled Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
`;const B=()=>{const[s,t]=T.useState([{tab:"Tab 1",id:"tab-1"},{tab:"Tab 2",id:"tab-2"},{tab:"Tab 3",id:"tab-3"},{tab:"Add Tab",id:"add"}]),d=T.useRef(s.length-1),m=P({items:s,getTextValue:a=>a.tab,shouldSelect:a=>a.id!=="add"}),i=T.useRef(m);i.current=m;const V=(a,o)=>{const c=o.state.items.findIndex(q=>W(o.state,q.id)),b=c===o.state.items.length-1?c-1:c+1,p=o.state.items[b].id;o.state.selectedIds[0]===a&&o.events.select({id:p}),W(o.state,a)&&(o.events.goTo({id:p}),requestAnimationFrame(()=>{document.querySelector(`[id="${Y(`${o.state.id}-${p}`)}"]`)?.focus()}))},N=a=>o=>{if((o.key==="Delete"||o.key==="Backspace")&&a!=="add"){t(s.filter(b=>b.id!==a));const c=i.current;V(a,c)}},K=a=>o=>{a==="add"&&(d.current+=1,t(c=>{const b=c.slice(0,c.length-1),p=c.slice(-1);return b.concat({tab:`Tab ${d.current}`,id:`tab-${d.current}`},p)}))};return e.jsxs(n,{model:m,children:[e.jsx(n.List,{overflowButton:e.jsx(n.OverflowButton,{children:"More"}),children:a=>e.jsx(n.Item,{onKeyDown:N(a.id),onClick:K(a.id),children:a.tab})}),e.jsx(n.Menu.Popper,{children:e.jsx(n.Menu.Card,{cs:{maxWidth:C(300),maxHeight:C(200)},children:e.jsx(n.Menu.List,{children:a=>e.jsx(n.Menu.Item,{children:a.tab})})})}),e.jsx(n.Panels,{children:a=>e.jsxs(n.Panel,{cs:{marginBlockStart:l.lg},children:["Contents of ",a.tab]})})]})};B.__RAW__=`import React from 'react';

import {isCursor} from '@workday/canvas-kit-react/collection';
import {slugify} from '@workday/canvas-kit-react/common';
import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

type Tab = {
  tab: string;
  id: string;
};

export const DynamicTabs = () => {
  const [tabs, setTabs] = React.useState<Tab[]>([
    {tab: 'Tab 1', id: 'tab-1'},
    {tab: 'Tab 2', id: 'tab-2'},
    {tab: 'Tab 3', id: 'tab-3'},
    {tab: 'Add Tab', id: 'add'},
  ]);
  const addedRef = React.useRef(tabs.length - 1);
  const model = useTabsModel({
    items: tabs,
    getTextValue: item => item.tab,
    shouldSelect: data => data.id !== 'add',
  });

  // A ref of the model for the render functions to work around the caching done to lists
  const modelRef = React.useRef(model);
  modelRef.current = model;

  /**
   * Helper function that should be called when an item is programmatically removed. The following
   * side effects depend on state of the model:
   * * **Item is focused**: Focus will be moved to next item in the list
   * * **Item is selected**: Selection will be moved to the next item in the list
   * @param id The id of the item that will be removed
   */
  const removeItem = <T extends unknown>(id: string, model: ReturnType<typeof useTabsModel>) => {
    const index = model.state.items.findIndex(item => isCursor(model.state, item.id));
    const nextIndex = index === model.state.items.length - 1 ? index - 1 : index + 1;
    const nextId = model.state.items[nextIndex].id;
    if (model.state.selectedIds[0] === id) {
      // We're removing the currently selected item. Select next item
      model.events.select({id: nextId});
    }
    if (isCursor(model.state, id)) {
      // We're removing the currently focused item. Focus next item
      model.events.goTo({id: nextId});

      // wait for stabilization of state
      requestAnimationFrame(() => {
        document
          .querySelector<HTMLElement>(\`[id="\${slugify(\`\${model.state.id}-\${nextId}\`)}"]\`)
          ?.focus();
      });
    }
  };

  const onKeyDown = (id: string) => (e: React.KeyboardEvent<HTMLElement>) => {
    if ((e.key === 'Delete' || e.key === 'Backspace') && id !== 'add') {
      setTabs(tabs.filter(item => item.id !== id));
      const model = modelRef.current;
      removeItem(id, model);
    }
  };

  const onClick = (id: string) => (e: React.MouseEvent) => {
    if (id === 'add') {
      addedRef.current += 1;
      setTabs(tabs => {
        const newTabs = tabs.slice(0, tabs.length - 1);
        const addTab = tabs.slice(-1);
        return newTabs.concat(
          {tab: \`Tab \${addedRef.current}\`, id: \`tab-\${addedRef.current}\`},
          addTab
        );
      });
    }
  };

  return (
    <Tabs model={model}>
      <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
        {(item: Tab) => (
          <Tabs.Item onKeyDown={onKeyDown(item.id)} onClick={onClick(item.id)}>
            {item.tab}
          </Tabs.Item>
        )}
      </Tabs.List>
      <Tabs.Menu.Popper>
        <Tabs.Menu.Card cs={{maxWidth: px2rem(300), maxHeight: px2rem(200)}}>
          <Tabs.Menu.List>
            {(item: Tab) => <Tabs.Menu.Item>{item.tab}</Tabs.Menu.Item>}
          </Tabs.Menu.List>
        </Tabs.Menu.Card>
      </Tabs.Menu.Popper>
      <Tabs.Panels>
        {(item: Tab) => (
          <Tabs.Panel cs={{marginBlockStart: system.gap.lg}}>Contents of {item.tab}</Tabs.Panel>
        )}
      </Tabs.Panels>
    </Tabs>
  );
};
`;const L=()=>{const s=P({onSelect(t,d){console.log("Selected Tab",t.id,d)}});return e.jsxs(e.Fragment,{children:[e.jsxs(n,{model:s,children:[e.jsxs(n.List,{children:[e.jsx(n.Item,{"data-id":"first",children:"First Tab"}),e.jsx(n.Item,{"data-id":"second",children:"Second Tab"}),e.jsx(n.Item,{"data-id":"third",children:"Third Tab"})]}),e.jsxs("div",{style:{marginBlockStart:u(l.lg)},children:[e.jsx(n.Panel,{"data-id":"first",children:"Contents of First Tab"}),e.jsx(n.Panel,{"data-id":"second",children:"Contents of Second Tab"}),e.jsx(n.Panel,{"data-id":"third",children:"Contents of Third Tab"})]})]}),e.jsx(G,{onClick:()=>{s.events.select({id:"third"})},children:"Select Third Tab"})]})};L.__RAW__=`import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const HoistedModel = () => {
  const model = useTabsModel({
    onSelect(data, prevState) {
      console.log('Selected Tab', data.id, prevState);
    },
  });

  return (
    <>
      <Tabs model={model}>
        <Tabs.List>
          <Tabs.Item data-id="first">First Tab</Tabs.Item>
          <Tabs.Item data-id="second">Second Tab</Tabs.Item>
          <Tabs.Item data-id="third">Third Tab</Tabs.Item>
        </Tabs.List>
        <div style={{marginBlockStart: cssVar(system.gap.lg)}}>
          <Tabs.Panel data-id="first">Contents of First Tab</Tabs.Panel>
          <Tabs.Panel data-id="second">Contents of Second Tab</Tabs.Panel>
          <Tabs.Panel data-id="third">Contents of Third Tab</Tabs.Panel>
        </div>
      </Tabs>
      <SecondaryButton
        onClick={() => {
          model.events.select({id: 'third'});
        }}
      >
        Select Third Tab
      </SecondaryButton>
    </>
  );
};
`;const R=()=>e.jsxs(n,{children:[e.jsxs(n.List,{children:[e.jsxs(n.Item,{children:[e.jsx(n.Item.Icon,{icon:J}),e.jsx(n.Item.Text,{children:"First Tab"})]}),e.jsxs(n.Item,{children:[e.jsx(n.Item.Icon,{icon:ee}),e.jsx(n.Item.Text,{children:"Second Tab"})]}),e.jsxs(n.Item,{children:[e.jsx(n.Item.Icon,{icon:Q}),e.jsx(n.Item.Text,{children:"Third Tab"})]}),e.jsxs(n.Item,{children:[e.jsx(n.Item.Icon,{icon:Z}),e.jsx(n.Item.Text,{children:"Fourth Tab"})]})]}),e.jsxs("div",{style:{marginBlockStart:u(l.lg)},children:[e.jsx(n.Panel,{children:"Contents of First Tab"}),e.jsx(n.Panel,{children:"Contents of Second Tab"}),e.jsx(n.Panel,{children:"Contents of Third Tab"}),e.jsx(n.Panel,{children:"Contents of Fourth Tab"})]})]});R.__RAW__=`import {Tabs} from '@workday/canvas-kit-react/tabs';
import {cssVar} from '@workday/canvas-kit-styling';
import {searchIcon, selectIcon, shareIcon, starIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const Icons = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>
          <Tabs.Item.Icon icon={starIcon} />
          <Tabs.Item.Text>First Tab</Tabs.Item.Text>
        </Tabs.Item>
        <Tabs.Item>
          <Tabs.Item.Icon icon={searchIcon} />
          <Tabs.Item.Text>Second Tab</Tabs.Item.Text>
        </Tabs.Item>
        <Tabs.Item>
          <Tabs.Item.Icon icon={selectIcon} />
          <Tabs.Item.Text>Third Tab</Tabs.Item.Text>
        </Tabs.Item>
        <Tabs.Item>
          <Tabs.Item.Icon icon={shareIcon} />
          <Tabs.Item.Text>Fourth Tab</Tabs.Item.Text>
        </Tabs.Item>
      </Tabs.List>
      <div style={{marginBlockStart: cssVar(system.gap.lg)}}>
        <Tabs.Panel>Contents of First Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Fourth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
`;const D=()=>e.jsxs(n,{children:[e.jsxs(n.List,{children:[e.jsx(n.Item,{"data-id":"first",children:"First Tab"}),e.jsx(n.Item,{"data-id":"second",children:"Second Tab"}),e.jsx(n.Item,{"data-id":"third",children:"Third Tab"}),e.jsx(n.Item,{"data-id":"fourth",children:"Fourth Tab"}),e.jsx(n.Item,{"data-id":"fifth",children:"Fifth Tab"})]}),e.jsxs("div",{style:{marginBlockStart:u(l.lg)},children:[e.jsx(n.Panel,{"data-id":"first",children:"Contents of First Tab"}),e.jsx(n.Panel,{"data-id":"second",children:"Contents of Second Tab"}),e.jsx(n.Panel,{"data-id":"third",children:"Contents of Third Tab"}),e.jsx(n.Panel,{"data-id":"fourth",children:"Contents of Fourth Tab"}),e.jsx(n.Panel,{"data-id":"fifth",children:"Contents of Fifth Tab"})]})]});D.__RAW__=`import {Tabs} from '@workday/canvas-kit-react/tabs';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const NamedTabs = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item data-id="first">First Tab</Tabs.Item>
        <Tabs.Item data-id="second">Second Tab</Tabs.Item>
        <Tabs.Item data-id="third">Third Tab</Tabs.Item>
        <Tabs.Item data-id="fourth">Fourth Tab</Tabs.Item>
        <Tabs.Item data-id="fifth">Fifth Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginBlockStart: cssVar(system.gap.lg)}}>
        <Tabs.Panel data-id="first">Contents of First Tab</Tabs.Panel>
        <Tabs.Panel data-id="second">Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel data-id="third">Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel data-id="fourth">Contents of Fourth Tab</Tabs.Panel>
        <Tabs.Panel data-id="fifth">Contents of Fifth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
`;const _=()=>{const[s]=T.useState([{id:"first",text:"First Tab",contents:"Contents of First Tab"},{id:"second",text:"Second Tab",contents:"Contents of Second Tab"},{id:"third",text:"Third Tab",contents:"Contents of Third Tab"},{id:"fourth",text:"Fourth Tab",contents:"Contents of Fourth Tab"},{id:"fifth",text:"Fifth Tab",contents:"Contents of Fifth Tab"},{id:"sixth",text:"Sixth Tab",contents:"Contents of Sixth Tab"},{id:"seventh",text:"Seventh Tab",contents:"Contents of Seventh Tab"}]),t=P({items:s}),[d,m]=T.useState("100%");return e.jsxs("div",{children:[e.jsx(te,{cs:{width:d,marginBlockEnd:l.xl},children:e.jsxs(n,{model:t,children:[e.jsx(n.List,{overflowButton:e.jsx(n.OverflowButton,{children:"More"}),children:i=>e.jsx(n.Item,{children:i.text})}),e.jsx(n.Menu.Popper,{children:e.jsx(n.Menu.Card,{cs:{maxWidth:C(300),maxHeight:C(200)},children:e.jsx(n.Menu.List,{children:i=>e.jsx(n.Menu.Item,{children:i.text})})})}),e.jsx(n.Panels,{children:i=>e.jsx(n.Panel,{cs:{marginBlockStart:l.lg},children:i.contents})})]})}),e.jsx("hr",{}),e.jsx("h4",{children:"Change Tabs container size"}),e.jsx(h,{onSelect:i=>m(i.id),children:e.jsxs(h.List,{"aria-label":"container width control",children:[e.jsx(h.Item,{"data-id":"100%",children:"100%"}),e.jsx(h.Item,{"data-id":"500px",children:"500px"}),e.jsx(h.Item,{"data-id":"360px",children:"360px"}),e.jsx(h.Item,{"data-id":"150px",children:"150px"})]})})]})};_.__RAW__=`import React from 'react';

import {Box} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

type MyTabItem = {
  id: string;
  text: React.ReactNode;
  contents: string;
};

export const OverflowTabs = () => {
  const [items] = React.useState<MyTabItem[]>([
    {id: 'first', text: 'First Tab', contents: 'Contents of First Tab'},
    {id: 'second', text: 'Second Tab', contents: 'Contents of Second Tab'},
    {id: 'third', text: 'Third Tab', contents: 'Contents of Third Tab'},
    {id: 'fourth', text: 'Fourth Tab', contents: 'Contents of Fourth Tab'},
    {id: 'fifth', text: 'Fifth Tab', contents: 'Contents of Fifth Tab'},
    {id: 'sixth', text: 'Sixth Tab', contents: 'Contents of Sixth Tab'},
    {id: 'seventh', text: 'Seventh Tab', contents: 'Contents of Seventh Tab'},
  ]);
  const model = useTabsModel({
    items,
  });
  const [containerWidth, setContainerWidth] = React.useState('100%');
  return (
    <div>
      <Box cs={{width: containerWidth, marginBlockEnd: system.gap.xl}}>
        <Tabs model={model}>
          <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
            {(item: MyTabItem) => <Tabs.Item>{item.text}</Tabs.Item>}
          </Tabs.List>
          <Tabs.Menu.Popper>
            <Tabs.Menu.Card cs={{maxWidth: px2rem(300), maxHeight: px2rem(200)}}>
              <Tabs.Menu.List>
                {(item: MyTabItem) => <Tabs.Menu.Item>{item.text}</Tabs.Menu.Item>}
              </Tabs.Menu.List>
            </Tabs.Menu.Card>
          </Tabs.Menu.Popper>
          <Tabs.Panels>
            {(item: MyTabItem) => (
              <Tabs.Panel cs={{marginBlockStart: system.gap.lg}}>{item.contents}</Tabs.Panel>
            )}
          </Tabs.Panels>
        </Tabs>
      </Box>
      <hr />
      <h4>Change Tabs container size</h4>
      <SegmentedControl onSelect={data => setContainerWidth(data.id)}>
        <SegmentedControl.List aria-label="container width control">
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="500px">500px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="360px">360px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="150px">150px</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </div>
  );
};
`;const A=()=>{const s=P(),t=e.jsxs("p",{children:["This example shows how to use a single tab panel. You must manually set the"," ",e.jsx("code",{children:"hidden"}),", ",e.jsx("code",{children:"aria-controls"}),", and ",e.jsx("code",{children:"id"})," attributes of Tab item and Tab panel components"]}),d={first:e.jsxs("div",{children:["Contents of First Tab ",t]}),second:e.jsxs("div",{children:["Contents of Second Tab ",t]}),third:e.jsxs("div",{children:["Contents of Third Tab ",t]})};return e.jsxs(n,{model:s,children:[e.jsxs(n.List,{children:[e.jsx(n.Item,{"data-id":"first","aria-controls":"mytab-panel",children:"First Tab"}),e.jsx(n.Item,{"data-id":"second","aria-controls":"mytab-panel",children:"Second Tab"}),e.jsx(n.Item,{"data-id":"third","aria-controls":"mytab-panel",children:"Third Tab"})]}),e.jsx(n.Panel,{cs:{marginBlockStart:l.lg},hidden:void 0,id:"mytab-panel",children:d[s.state.selectedIds[0]]})]})};A.__RAW__=`import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';
import {system} from '@workday/canvas-tokens-web';

export const SinglePanel = () => {
  const model = useTabsModel();

  const message = (
    <p>
      This example shows how to use a single tab panel. You must manually set the{' '}
      <code>hidden</code>, <code>aria-controls</code>, and <code>id</code> attributes of Tab item
      and Tab panel components
    </p>
  );

  const contents = {
    first: <div>Contents of First Tab {message}</div>,
    second: <div>Contents of Second Tab {message}</div>,
    third: <div>Contents of Third Tab {message}</div>,
  };

  return (
    <Tabs model={model}>
      <Tabs.List>
        <Tabs.Item data-id="first" aria-controls="mytab-panel">
          First Tab
        </Tabs.Item>
        <Tabs.Item data-id="second" aria-controls="mytab-panel">
          Second Tab
        </Tabs.Item>
        <Tabs.Item data-id="third" aria-controls="mytab-panel">
          Third Tab
        </Tabs.Item>
      </Tabs.List>
      <Tabs.Panel cs={{marginBlockStart: system.gap.lg}} hidden={undefined} id="mytab-panel">
        {contents[model.state.selectedIds[0]]}
      </Tabs.Panel>
    </Tabs>
  );
};
`;function E(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...$(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(z,{of:ae}),`
`,e.jsx(t.h1,{id:"canvas-kit-tabs",children:"Canvas Kit Tabs"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Tabs"})," is a ",e.jsx(t.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`
that allows users to navigate between related views of content while remaining in context of the
page.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://design.workday.com/components/navigation/tabs",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Tabs"})," includes a container ",e.jsx(t.code,{children:"Tabs"}),` component and the following subcomponents which can be composed
in a variety of ways: `,e.jsx(t.code,{children:"Tabs.List"}),", ",e.jsx(t.code,{children:"Tabs.Item"})," and ",e.jsx(t.code,{children:"Tabs.Panel"}),`. It follows the
`,e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",rel:"nofollow",children:"W3 Tabs specification"}),"."]}),`
`,e.jsxs(t.p,{children:["In this example, we set up a basic ",e.jsx(t.code,{children:"Tabs"}),` component with five tabs. This example uses a static API
that does not support overflow.`]}),`
`,e.jsx(r,{code:O}),`
`,e.jsx(t.h3,{id:"overflow-tabs",children:"Overflow Tabs"}),`
`,e.jsxs(t.p,{children:[`Tabs is a responsive component based on the width of its container. If the rendered tabs exceed the
width of the `,e.jsx(t.code,{children:"Tabs.List"}),`, an overflow menu will be rendered. This only works against the dynamic API
where you give the `,e.jsx(t.code,{children:"TabsModel"}),` an array of items to be rendered. The dynamic API handles the React
`,e.jsx(t.code,{children:"key"})," for you based on the item's identifier. The dynamic API requires either an ",e.jsx(t.code,{children:"id"}),` on each item
object or a `,e.jsx(t.code,{children:"getId"}),` function that returns an identifier based on the item. The below example uses an
`,e.jsx(t.code,{children:"id"})," property on each item."]}),`
`,e.jsxs(t.p,{children:[`The dynamic API takes in any object, but since nothing is known about your object, a
`,e.jsx(t.a,{href:"https://reactjs.org/docs/render-props.html",rel:"nofollow",children:"render prop"}),` is necessary to instruct a list how it
should render.`]}),`
`,e.jsx(r,{code:_}),`
`,e.jsx(t.h3,{id:"hoisted-model",children:"Hoisted Model"}),`
`,e.jsxs(t.p,{children:["By default, ",e.jsx(t.code,{children:"Tabs"})," will create and use its own ",e.jsx(t.a,{href:"#model",children:"model"}),` internally. Alternatively, you may
configure your own model with `,e.jsx(t.code,{children:"useTabsModel"})," and pass it to ",e.jsx(t.code,{children:"Tabs"})," via the ",e.jsx(t.code,{children:"model"}),` prop. This
pattern is referred to as
`,e.jsx(t.a,{href:"?path=/docs/guides-compound-components--docs#configuring-a-model",children:"hoisting the model"}),`
and provides direct access to its `,e.jsx(t.code,{children:"state"})," and ",e.jsx(t.code,{children:"events"})," outside of the ",e.jsx(t.code,{children:"Tabs"})," component."]}),`
`,e.jsx(t.p,{children:`In this example, we set up external observation of the model state and create an external button to
trigger an event to change the active tab.`}),`
`,e.jsx(r,{code:L}),`
`,e.jsx(t.h3,{id:"named-tabs",children:"Named Tabs"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Tabs.Item"})," and ",e.jsx(t.code,{children:"Tabs.Panel"})," both take an optional ",e.jsx(t.code,{children:"data-id"}),` attribute that is used for the
`,e.jsx(t.code,{children:"onActivate"}),` callback. This example is identical to the Basic Example, but with tabs named using
`,e.jsx(t.code,{children:"data-id"})," for the ",e.jsx(t.code,{children:"Tabs.Item"})," and ",e.jsx(t.code,{children:"Tabs.Panel"})," subcomponents."]}),`
`,e.jsx(r,{code:D}),`
`,e.jsx(t.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Tabs"})," supports right-to-left languages when specified in the ",e.jsx(t.code,{children:"CanvasProvider"})," ",e.jsx(t.code,{children:"theme"}),"."]}),`
`,e.jsx(r,{code:H}),`
`,e.jsx(t.h3,{id:"disabled-tab",children:"Disabled Tab"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"disabled"})," prop of a ",e.jsx(t.code,{children:"Tabs.Item"})," to ",e.jsx(t.code,{children:"true"})," to disable it."]}),`
`,e.jsx(r,{code:F}),`
`,e.jsx(t.h3,{id:"tab-icons",children:"Tab Icons"}),`
`,e.jsxs(t.p,{children:["Tabs can have icons. Use the ",e.jsx(t.code,{children:"Icon"})," and ",e.jsx(t.code,{children:"Text"})," subcomponents."]}),`
`,e.jsx(r,{code:R}),`
`,e.jsx(t.h3,{id:"alternative-tab-stop",children:"Alternative Tab Stop"}),`
`,e.jsxs(t.p,{children:[`By default, tab panels are focusable for accessibility. If the contents of a tab panel have a
focusable element, you may disable this default behavior by setting the `,e.jsx(t.code,{children:"tabIndex"}),` prop of
`,e.jsx(t.code,{children:"Tabs.Panel"})," to ",e.jsx(t.code,{children:"undefined"}),". This example has a tab panel with a focusable button."]}),`
`,e.jsx(r,{code:M}),`
`,e.jsx(t.h3,{id:"single-tab-panel",children:"Single Tab Panel"}),`
`,e.jsxs(t.p,{children:["The compound component pattern allows for advanced composition. For example, ",e.jsx(t.code,{children:"Tabs"}),` can be composed
to have only a single `,e.jsx(t.code,{children:"Tabs.Panel"}),` using attribute overrides and callbacks. More information about
attributes and callbacks can be found in the prop tables below for each subcomponent.`]}),`
`,e.jsxs(t.p,{children:["In this example, we use a hoisted model and the ",e.jsx(t.code,{children:"activeTab"}),` property of the state to show content
from the `,e.jsx(t.code,{children:"contents"})," object."]}),`
`,e.jsx(r,{code:A}),`
`,e.jsx(t.h3,{id:"dynamic-tabs",children:"Dynamic Tabs"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Tabs.Item"})," component takes in an optional ",e.jsx(t.code,{children:"index"}),` property if you want to specify the position
of a tab. If not defined, by default it will append tabs to the end. In this example, our tabs are
stored as an array in the state, and we have a fixed tab at the end that can add new tabs to that
array.`]}),`
`,e.jsx(r,{code:B}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(X,{name:"Tabs",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(U,{file:"./cypress/component/Tabs.spec.tsx",initialSpecs:{type:"file",name:"Tabs",children:[{type:"describe",name:"Tabs",children:[{type:"describe",name:"given the [Components/Containers/Tabs, Basic] story is rendered",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:'should have an element with a role of "tablist"'},{type:"it",name:'should have elements with a role of "tab" inside the "tablist"'},{type:"it",name:'should have "aria-selected=true" for the first tab'},{type:"it",name:'should not have "aria-selected" for the second tab'},{type:"it",name:"should not have tabindex=-1 on the first tab"},{type:"it",name:'should have "tabindex=-1" on the second tab'},{type:"it",name:"should have an id on the first tab"},{type:"it",name:'should label the tab panel "First Tab"'},{type:"it",name:'should have an "aria-controls" on the first tab'},{type:"it",name:'should have an "aria-controls" that matches the first tab panel'},{type:"it",name:"should have a default cursor for the (active) first tab"},{type:"it",name:"should have a pointer cursor for the second tab"},{type:"describe",name:"when the first tab is active and focused",children:[{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should move focus to the tabpanel"}]},{type:"describe",name:"when the right arrow key is pressed",children:[{type:"it",name:"should have tabindex=-1 on the first tab"},{type:"it",name:"should not have tabindex=-1 on the second tab"},{type:"it",name:"should focus on the second tab"},{type:"describe",name:"when the space key is pressed",children:[{type:"it",name:'should not have "aria-selected" on the first tab'},{type:"it",name:'should have "aria-selected=true" on the second tab'}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:'should not have "aria-selected" on the first tab'},{type:"it",name:'should have "aria-selected=true" on the second tab'}]},{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should focus on the tab panel of the first tab"},{type:"describe",name:"when shift + tab keys are pressed",children:[{type:"it",name:"should not have tabindex=-1 on the first tab"},{type:"it",name:'should set "tabindex=-1" on the second tab'},{type:"it",name:"should focus on the first tab"}]}]}]},{type:"describe",name:"when the left arrow is pressed",children:[{type:"it",name:"should have tabindex=-1 on the first tab"},{type:"it",name:"should not have tabindex=-1 on the last tab"},{type:"it",name:"should focus on the last tab"}]}]},{type:"describe",name:"when the fifth tab is clicked",children:[{type:"it",name:"should show the contents of the fifth tab"},{type:"describe",name:"when the right arrow key is pressed",children:[{type:"it",name:"should not have tabindex=-1 on the first tab"},{type:"it",name:'should set "tabindex=-1" on the last tab'}]}]}]},{type:"describe",name:"given the [Components/Containers/Tabs, NamedTabs] story is rendered",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:'should have an element with a role of "tablist"'},{type:"it",name:'should have elements with a role of "tab" inside the "tablist"'},{type:"it",name:'should have "aria-selected=true" for the first tab'},{type:"it",name:'should not have "aria-selected" for the second tab'},{type:"it",name:"should not have tabindex=-1 on the first tab"},{type:"it",name:'should have "tabindex=-1" on the second tab'},{type:"it",name:"should have an id on the first tab"},{type:"it",name:'should label the tab panel "First Tab"'},{type:"it",name:'should have an "aria-controls" on the first tab'},{type:"it",name:'should have an "aria-controls" that matches the first tab panel'},{type:"it",name:"should have a default cursor for the (active) first tab"},{type:"it",name:"should have a pointer cursor for the second tab"},{type:"describe",name:"when the first tab is active and focused",children:[{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should move focus to the tabpanel"}]},{type:"describe",name:"when the right arrow key is pressed",children:[{type:"it",name:"should have tabindex=-1 on the first tab"},{type:"it",name:"should not have tabindex=-1 on the second tab"},{type:"it",name:"should focus on the second tab"},{type:"describe",name:"when the space key is pressed",children:[{type:"it",name:'should not have "aria-selected" on the first tab'},{type:"it",name:'should have "aria-selected=true" on the second tab'}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:'should not have "aria-selected" on the first tab'},{type:"it",name:'should have "aria-selected=true" on the second tab'}]},{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should focus on the tab panel of the first tab"},{type:"describe",name:"when shift + tab keys are pressed",children:[{type:"it",name:"should not have tabindex=-1 on the first tab"},{type:"it",name:'should set "tabindex=-1" on the second tab'},{type:"it",name:"should focus on the first tab"}]}]}]},{type:"describe",name:"when the left arrow is pressed",children:[{type:"it",name:"should have tabindex=-1 on the first tab"},{type:"it",name:"should not have tabindex=-1 on the last tab"},{type:"it",name:"should focus on the last tab"}]}]},{type:"describe",name:"when the fifth tab is clicked",children:[{type:"it",name:"should show the contents of the fifth tab"},{type:"describe",name:"when the right arrow key is pressed",children:[{type:"it",name:"should not have tabindex=-1 on the first tab"},{type:"it",name:'should set "tabindex=-1" on the last tab'}]}]}]},{type:"describe",name:"given the [Components/Containers/Tabs, DisabledTab] story is rendered",children:[{type:"describe",name:"when the Disabled Tab is clicked",children:[{type:"it",name:'should not set "[aria-selected=true]" on the Disabled Tab'},{type:"it",name:"should leave the first tab selected"}]},{type:"describe",name:"when the first tab is active and focused",children:[{type:"describe",name:"when the right arrow key is pressed",children:[{type:"it",name:"should focus on the Disabled Tab"},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:'should not set "[aria-selected=true]" on the Disabled Tab'},{type:"it",name:"should leave the first tab selected"}]}]}]}]},{type:"describe",name:"given the [Components/Containers/Tabs, DynamicTabs] story is rendered",children:[{type:"describe",name:'when "Add Tab" is clicked',children:[{type:"it",name:'should focus on "Add Tab"'},{type:"describe",name:"when the left arrow key is pressed",children:[{type:"it",name:"should focus on Tab 4"}]}]},{type:"describe",name:'when "Tab 1" is activated',children:[{type:"describe",name:"then the Delete key is pressed",children:[{type:"it",name:'should have "aria-selected=true" for "Tab 2"'},{type:"it",name:'should show "Tab 2" contents'}]}]},{type:"describe",name:'when "Tab 3" is activated',children:[{type:"describe",name:"then the left arrow key is pressed",children:[{type:"describe",name:"then the Delete key is pressed",children:[{type:"it",name:'should remove "Tab 2"'},{type:"it",name:'should move focus to "Tab 3"'},{type:"it",name:'should have "aria-selected=true" for "Tab 3"'},{type:"it",name:'should show "Tab 3" contents'},{type:"describe",name:"then the Delete key is pressed again",children:[{type:"it",name:'should move focus to "Add Tab"'}]}]}]},{type:"describe",name:"then the left arrow key is pressed twice",children:[{type:"describe",name:"then the Delete key is pressed",children:[{type:"it",name:'should remove "Tab 1"'},{type:"it",name:'should move focus to "Tab 2"'},{type:"it",name:'should have "aria-selected=true" for "Tab 3"'},{type:"it",name:'should show "Tab 3" contents'}]}]}]}]},{type:"describe",name:"given the [Components/Containers/Tabs, LeftToRight] story is rendered",children:[{type:"describe",name:"when the first tab is active and focused",children:[{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should move focus to the tabpanel"}]},{type:"describe",name:"when the left arrow key is pressed",children:[{type:"it",name:"should have tabindex=-1 on the first tab"},{type:"it",name:"should not have tabindex=-1 on the second tab"},{type:"it",name:"should focus on the second tab"},{type:"describe",name:"when the space key is pressed",children:[{type:"it",name:'should not have "aria-selected" on the first tab'},{type:"it",name:'should have "aria-selected=true" on the second tab'}]}]},{type:"describe",name:"when the right arrow is pressed",children:[{type:"it",name:"should have tabindex=-1 on the first tab"},{type:"it",name:"should not have tabindex=-1 on the last tab"},{type:"it",name:"should focus on the last tab"}]}]}]},{type:"describe",name:"when [Components/Containers/Tabs, OverflowTabs] story is rendered",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:'should not show the "More" button'},{type:"it",name:"should have 7 tab items"},{type:"it",name:"should not have scroll"},{type:"describe",name:'when the "First Tab" is focused',children:[{type:"describe",name:"when the Tab key is pressed",children:[{type:"it",name:"should focus on the tab panel"}]}]},{type:"describe",name:"when tab list container is only 500px wide",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:'should show the "More" button'},{type:"it",name:"should show only 3 tab items"},{type:"it",name:"should not have scroll"},{type:"describe",name:'when the "First Tab" is focused',children:[{type:"describe",name:"when the Tab key is pressed",children:[{type:"it",name:'should focus on the "More" button'}]}]},{type:"describe",name:'when the "More" button is clicked',children:[{type:"it",name:"should show the Tab overflow menu"},{type:"it",name:"should have the fourth Tab as the first menu item"},{type:"describe",name:'when the "Sixth Tab" is clicked',children:[{type:"it",name:"should select the Sixth Tab"},{type:"it",name:'should move focus back to the "More" button'}]}]}]},{type:"describe",name:"when tab list container is only 360px wide",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:'should show the "More" button'},{type:"it",name:"should not have scroll"},{type:"it",name:"should show only 1 tab item"},{type:"describe",name:'when the "More" button is clicked',children:[{type:"it",name:"should show the Tab overflow menu"},{type:"it",name:"should have the second Tab as the first menu item"}]}]},{type:"describe",name:"when tab list container is only 150px wide",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:'should show the "More" button'},{type:"it",name:"should not have scroll"},{type:"it",name:"should show no tab items"},{type:"describe",name:'when the "More" button is clicked',children:[{type:"it",name:"should show the Tab overflow menu"},{type:"it",name:"should have the third Tab as the first menu item"}]}]},{type:"describe",name:"mobile viewport",children:[{type:"it",name:'should not show the "More" button'},{type:"it",name:"should have scroll behavior"}]}]}]}]},name:"Tabs"})]})}function ne(s={}){const{wrapper:t}={...$(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(E,{...s})}):E(s)}const ae={title:"Components/Containers/Tabs",component:n,tags:["autodocs"],parameters:{docs:{page:ne}}},f={render:O},x={render:D},y={render:H},v={render:_},w={render:F},j={render:R},I={render:A},g={render:M},k={render:L},S={render:B};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: NamedTabsExample
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: RightToLeftExample
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: OverflowTabsExample
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: DisabledTabExample
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: IconsExample
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: SinglePanelExample
}`,...I.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: AlternativeTabStopExample
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: HoistedModelExample
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: DynamicTabsExample
}`,...S.parameters?.docs?.source}}};const Dt=["Basic","NamedTabs","RightToLeft","OverflowTabs","DisabledTab","Icons","SinglePanel","AlternativeTabStop","HoistedModel","DynamicTabs"];export{g as AlternativeTabStop,f as Basic,w as DisabledTab,S as DynamicTabs,k as HoistedModel,j as Icons,x as NamedTabs,v as OverflowTabs,y as RightToLeft,I as SinglePanel,Dt as __namedExportsOrder,ae as default};
