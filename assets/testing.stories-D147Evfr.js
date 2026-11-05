import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as x}from"./index-IfJi-UCQ.js";import{e as h}from"./edit-DYBnGLSC.js";import{t as b}from"./trash-E_Z-JrHx.js";import{A as i}from"./ActionBar-BBXodM2M.js";import{S as p}from"./StaticStates-urpCdwca.js";import{C as l}from"./ComponentStatesTable-IA4sk9tb.js";import{p as o}from"./px2rem-C0KbprIx.js";import{b as A}from"./cs-CmRirKzJ.js";import{P as c}from"./PrimaryButton-CyIy4kuw.js";import{S as B}from"./SecondaryButton-F9hk8ScV.js";import{s as f}from"./index-CFEs8r9D.js";import"./types-wqmYQQWa.js";import"./useListItemRegister-BqQBHrTO.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-B5QHr9xs.js";import"./useOverflowListItemMeasure-ynDmS6wO.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BetwLbDT.js";import"./getTransformFromPlacement-CeI32Hr4.js";import"./CanvasProvider-CmQuC1n5.js";import"./index-C_4iH04t.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-CDZrIDIK.js";import"./mergeStyles-Bfd74k5F.js";import"./Box-CyjvvVBh.js";import"./index-DWHOiqdi.js";import"./flex-BhWEOOmD.js";import"./grid-Bo2FCXCg.js";import"./useCloseOnEscape-BNAhz6K3.js";import"./Popper-BKWt9U5M.js";import"./isElementRTL-lizwOp5U.js";import"./Card-TTTo4zHB.js";import"./Text-56KUGy0I.js";import"./cornerShape-B1y71wLF.js";import"./OverflowTooltip-BPWo0foa.js";import"./useListItemRovingFocus-BdbIpBLB.js";import"./useListItemSelect-CjGaW9lx.js";import"./SystemIcon-DgkB3O3q.js";import"./Svg-CXKlNM9V.js";import"./useReturnFocus-DWZj3b3a.js";import"./useFocusRedirect-Xc3xIpjr.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-Cco7peXe.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CTkziXOc.js";import"./BaseButton-B7Cdo6oA.js";import"./Button-uPfdKrkI.js";const jt={title:"Testing/Buttons/ActionBar",component:i,parameters:{chromatic:{disable:!1}}},r={render:()=>t.jsx(p,{children:t.jsx(l,{rowProps:[{label:"With Absolute Positioning",props:{position:"absolute"}},{label:"With Relative Positioning",props:{position:"relative"}},{label:"Default (with fixed position)",props:{}}],columnProps:[{label:" ",props:{}}],children:e=>t.jsxs("div",{style:{background:A(f),position:"relative",height:o(100),marginBlockEnd:o(12)},children:[t.jsx("p",{style:{padding:o(12)},children:"Outer Block"}),t.jsx(i,{children:t.jsxs(i.List,{...e,children:[t.jsx(c,{children:"First Action"}),t.jsx(B,{children:"Second Action"})]})})]})})})},S=()=>t.jsx(p,{children:t.jsx(l,{rowProps:[{label:"Icon-only items",props:{}},{label:"Icon-only items (small)",props:{size:"small"}}],columnProps:[{label:"Icons only",props:{withText:!1}},{label:"With a text action",props:{withText:!0}}],children:({size:e,withText:a})=>t.jsx(i,{children:t.jsxs(i.List,{position:"relative",children:[a&&t.jsx(i.Item,{as:c,size:e,children:"Save"}),t.jsx(i.Item,{icon:h,"aria-label":"Edit",size:e}),t.jsx(i.Item,{icon:b,"aria-label":"Delete",size:e})]})})})}),n={render:()=>t.jsx(S,{})},s={render:()=>{const[e]=x.useState([{id:"first",text:"First Action"},{id:"second",text:"Second Action"},{id:"third",text:"Third Action"},{id:"fourth",text:"Fourth Action"},{id:"fifth",text:"Fifth Action"}]);return t.jsx(p,{children:t.jsx(l,{rowProps:[{label:"Default Action Bar",props:{}},{label:"Default Action Bar (400px width container)",props:{containerWidth:400}},{label:"Default Action Bar (280px width container)",props:{containerWidth:280}},{label:"Minimum Visible Items (as 1 button)",props:{maximumVisible:1}},{label:"Custom Number Visible Items (as 4 button)",props:{maximumVisible:2}},{label:"Maximum Visible Items (as 5 buttons)",props:{maximumVisible:e.length,containerWidth:830}},{label:"Maximum Visible Items (400px width)",props:{maximumVisible:e.length,containerWidth:400}},{label:"Maximum Visible Items (280px width)",props:{maximumVisible:e.length,containerWidth:280}}],columnProps:[{label:"Example",props:{}}],children:({containerWidth:a,maximumVisible:d})=>t.jsxs(i,{items:e,maximumVisible:d,children:[t.jsx(i.List,{position:"relative",overflowButton:t.jsx(i.OverflowButton,{"aria-label":"More actions"}),cs:{width:o(a)},children:(m,u)=>t.jsx(i.Item,{as:u===0?c:void 0,children:m.text})}),t.jsx(i.Menu.Popper,{children:t.jsx(i.Menu.Card,{cs:{maxWidth:o(300),maxHeight:o(200)},children:t.jsx(i.Menu.List,{children:m=>t.jsx(i.Menu.Item,{children:m.text})})})})]})})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'With Absolute Positioning',
      props: {
        position: 'absolute'
      }
    }, {
      label: 'With Relative Positioning',
      props: {
        position: 'relative'
      }
    }, {
      label: 'Default (with fixed position)',
      props: {}
    }]} columnProps={[{
      label: ' ',
      props: {}
    }]}>
        {props => <div style={{
        background: cssVar(base.slate25),
        position: 'relative',
        height: px2rem(100),
        marginBlockEnd: px2rem(12)
      }}>
            <p style={{
          padding: px2rem(12)
        }}>Outer Block</p>
            <ActionBar>
              <ActionBar.List {...props}>
                <PrimaryButton>First Action</PrimaryButton>
                <SecondaryButton>Second Action</SecondaryButton>
              </ActionBar.List>
            </ActionBar>
          </div>}
      </ComponentStatesTable>
    </StaticStates>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ActionBarIconOnlyTest />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items] = React.useState<MyActionItem[]>([{
      id: 'first',
      text: 'First Action'
    }, {
      id: 'second',
      text: 'Second Action'
    }, {
      id: 'third',
      text: 'Third Action'
    }, {
      id: 'fourth',
      text: 'Fourth Action'
    }, {
      id: 'fifth',
      text: 'Fifth Action'
    }]);
    return <StaticStates>
        <ComponentStatesTable rowProps={[{
        label: 'Default Action Bar',
        props: {}
      }, {
        label: 'Default Action Bar (400px width container)',
        props: {
          containerWidth: 400
        }
      }, {
        label: 'Default Action Bar (280px width container)',
        props: {
          containerWidth: 280
        }
      }, {
        label: 'Minimum Visible Items (as 1 button)',
        props: {
          maximumVisible: 1
        }
      }, {
        label: 'Custom Number Visible Items (as 4 button)',
        props: {
          maximumVisible: 2
        }
      }, {
        label: 'Maximum Visible Items (as 5 buttons)',
        props: {
          maximumVisible: items.length,
          containerWidth: 830
        }
      }, {
        label: 'Maximum Visible Items (400px width)',
        props: {
          maximumVisible: items.length,
          containerWidth: 400
        }
      }, {
        label: 'Maximum Visible Items (280px width)',
        props: {
          maximumVisible: items.length,
          containerWidth: 280
        }
      }]} columnProps={[{
        label: 'Example',
        props: {}
      }]}>
          {({
          containerWidth,
          maximumVisible
        }) => <ActionBar items={items} maximumVisible={maximumVisible}>
              <ActionBar.List position="relative" overflowButton={<ActionBar.OverflowButton aria-label="More actions" />} cs={{
            width: px2rem(containerWidth)
          }}>
                {(item: MyActionItem, index: number) => <ActionBar.Item as={index === 0 ? PrimaryButton : undefined}>
                    {item.text}
                  </ActionBar.Item>}
              </ActionBar.List>
              <ActionBar.Menu.Popper>
                <ActionBar.Menu.Card cs={{
              maxWidth: px2rem(300),
              maxHeight: px2rem(200)
            }}>
                  <ActionBar.Menu.List>
                    {(item: MyActionItem) => <ActionBar.Menu.Item>{item.text}</ActionBar.Menu.Item>}
                  </ActionBar.Menu.List>
                </ActionBar.Menu.Card>
              </ActionBar.Menu.Popper>
            </ActionBar>}
        </ComponentStatesTable>
      </StaticStates>;
  }
}`,...s.parameters?.docs?.source}}};const Mt=["ActionBarStates","ActionBarIconOnlyStates","ActionBarWithOverflowMenuStates"];export{n as ActionBarIconOnlyStates,r as ActionBarStates,s as ActionBarWithOverflowMenuStates,Mt as __namedExportsOrder,jt as default};
