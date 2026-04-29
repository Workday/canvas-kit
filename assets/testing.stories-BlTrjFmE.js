import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as u}from"./index-IfJi-UCQ.js";import{A as i}from"./ActionBar-D3bqX64k.js";import{S as a}from"./StaticStates-kDyV_ZDH.js";import{C as m}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as o}from"./px2rem-C0KbprIx.js";import{b as x}from"./cs-DvbI9OYs.js";import{P as p}from"./PrimaryButton-_EBa_erW.js";import{S as b}from"./SecondaryButton-oNuQLwcg.js";import{s as h}from"./index-DKOKnxgv.js";import"./useListItemSelect-D10U8d3g.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./components-XIe_upcR.js";import"./useOverflowListTarget-Esi-iaKN.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Blawm5fT.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-p8F4NfJ4.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./index-CYsyLHR7.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./CanvasProvider-CbBD4ERB.js";import"./useTheme-DY7-Bclm.js";import"./Card-ywil38vv.js";import"./Text-8N36XMNq.js";import"./OverflowTooltip-B7jd-TXK.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-ETf1Gakg.js";import"./useReturnFocus-BgzhEoBI.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-B7GfDsu7.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./styled-BsZD6Etj.js";import"./BaseButton-DxRITFeD.js";import"./Button-Cp7fe3Zs.js";const xt={title:"Testing/Buttons/ActionBar",component:i,parameters:{chromatic:{disable:!1}}},r={render:()=>t.jsx(a,{children:t.jsx(m,{rowProps:[{label:"With Absolute Positioning",props:{position:"absolute"}},{label:"With Relative Positioning",props:{position:"relative"}},{label:"Default (with fixed position)",props:{}}],columnProps:[{label:" ",props:{}}],children:e=>t.jsxs("div",{style:{background:x(h),position:"relative",height:o(100),marginBottom:o(12)},children:[t.jsx("p",{style:{padding:o(12)},children:"Outer Block"}),t.jsx(i,{children:t.jsxs(i.List,{...e,children:[t.jsx(p,{children:"First Action"}),t.jsx(b,{children:"Second Action"})]})})]})})})},n={render:()=>{const[e]=u.useState([{id:"first",text:"First Action"},{id:"second",text:"Second Action"},{id:"third",text:"Third Action"},{id:"fourth",text:"Fourth Action"},{id:"fifth",text:"Fifth Action"}]);return t.jsx(a,{children:t.jsx(m,{rowProps:[{label:"Default Action Bar",props:{}},{label:"Default Action Bar (400px width container)",props:{containerWidth:400}},{label:"Default Action Bar (280px width container)",props:{containerWidth:280}},{label:"Minimum Visible Items (as 1 button)",props:{maximumVisible:1}},{label:"Custom Number Visible Items (as 4 button)",props:{maximumVisible:2}},{label:"Maximum Visible Items (as 5 buttons)",props:{maximumVisible:e.length,containerWidth:830}},{label:"Maximum Visible Items (400px width)",props:{maximumVisible:e.length,containerWidth:400}},{label:"Maximum Visible Items (280px width)",props:{maximumVisible:e.length,containerWidth:280}}],columnProps:[{label:"Example",props:{}}],children:({containerWidth:l,maximumVisible:c})=>t.jsxs(i,{items:e,maximumVisible:c,children:[t.jsx(i.List,{position:"relative",overflowButton:t.jsx(i.OverflowButton,{"aria-label":"More actions"}),cs:{width:o(l)},children:(s,d)=>t.jsx(i.Item,{as:d===0?p:void 0,children:s.text})}),t.jsx(i.Menu.Popper,{children:t.jsx(i.Menu.Card,{cs:{maxWidth:o(300),maxHeight:o(200)},children:t.jsx(i.Menu.List,{children:s=>t.jsx(i.Menu.Item,{children:s.text})})})})]})})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        marginBottom: px2rem(12)
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
}`,...n.parameters?.docs?.source}}};const bt=["ActionBarStates","ActionBarWithOverflowMenuStates"];export{r as ActionBarStates,n as ActionBarWithOverflowMenuStates,bt as __namedExportsOrder,xt as default};
