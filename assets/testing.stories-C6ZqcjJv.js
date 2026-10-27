import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as u}from"./index-IfJi-UCQ.js";import{A as i}from"./ActionBar-Se1iU5aO.js";import{S as a}from"./StaticStates-Bw0dTjjT.js";import{C as m}from"./ComponentStatesTable-CvtZcMqf.js";import{p as o}from"./px2rem-C0KbprIx.js";import{b as x}from"./cs-CmRirKzJ.js";import{P as p}from"./PrimaryButton-DagTFlSp.js";import{S as b}from"./SecondaryButton-DL6NX6-s.js";import{s as h}from"./index-kj8ZfNNN.js";import"./useListItemRegister-hoJ7ZOOD.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-HCdlB-Cn.js";import"./useOverflowListItemMeasure-pqIqckF3.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DCyhNDN-.js";import"./getTransformFromPlacement-Ckea_qfD.js";import"./CanvasProvider-7wBX3WBC.js";import"./index-C_4iH04t.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-BYUo1exC.js";import"./mergeStyles-BOTYd98H.js";import"./Box-NtgckSi6.js";import"./index-DX07rvw8.js";import"./flex-Iimm9537.js";import"./grid-DE-Ok6Ac.js";import"./useCloseOnEscape-Dt5uIv7J.js";import"./Popper-BORLx1pc.js";import"./isElementRTL-lizwOp5U.js";import"./Card-6Upq_3u-.js";import"./Text-CUdPBNk6.js";import"./cornerShape-CYdiETtT.js";import"./OverflowTooltip-DawyYxpX.js";import"./useListItemRovingFocus-Dv8Dsd6e.js";import"./useListItemSelect-DCdfEE1M.js";import"./SystemIcon-CDokv1Eo.js";import"./Svg-C05gFzlU.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-CaCCacmv.js";import"./useFocusRedirect-6vTTAhV8.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-GjHQDItI.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CuwXg7V9.js";import"./BaseButton-DTTEiDSJ.js";import"./Button-t_PogMNe.js";const ht={title:"Testing/Buttons/ActionBar",component:i,parameters:{chromatic:{disable:!1}}},r={render:()=>t.jsx(a,{children:t.jsx(m,{rowProps:[{label:"With Absolute Positioning",props:{position:"absolute"}},{label:"With Relative Positioning",props:{position:"relative"}},{label:"Default (with fixed position)",props:{}}],columnProps:[{label:" ",props:{}}],children:e=>t.jsxs("div",{style:{background:x(h),position:"relative",height:o(100),marginBlockEnd:o(12)},children:[t.jsx("p",{style:{padding:o(12)},children:"Outer Block"}),t.jsx(i,{children:t.jsxs(i.List,{...e,children:[t.jsx(p,{children:"First Action"}),t.jsx(b,{children:"Second Action"})]})})]})})})},n={render:()=>{const[e]=u.useState([{id:"first",text:"First Action"},{id:"second",text:"Second Action"},{id:"third",text:"Third Action"},{id:"fourth",text:"Fourth Action"},{id:"fifth",text:"Fifth Action"}]);return t.jsx(a,{children:t.jsx(m,{rowProps:[{label:"Default Action Bar",props:{}},{label:"Default Action Bar (400px width container)",props:{containerWidth:400}},{label:"Default Action Bar (280px width container)",props:{containerWidth:280}},{label:"Minimum Visible Items (as 1 button)",props:{maximumVisible:1}},{label:"Custom Number Visible Items (as 4 button)",props:{maximumVisible:2}},{label:"Maximum Visible Items (as 5 buttons)",props:{maximumVisible:e.length,containerWidth:830}},{label:"Maximum Visible Items (400px width)",props:{maximumVisible:e.length,containerWidth:400}},{label:"Maximum Visible Items (280px width)",props:{maximumVisible:e.length,containerWidth:280}}],columnProps:[{label:"Example",props:{}}],children:({containerWidth:l,maximumVisible:c})=>t.jsxs(i,{items:e,maximumVisible:c,children:[t.jsx(i.List,{position:"relative",overflowButton:t.jsx(i.OverflowButton,{"aria-label":"More actions"}),cs:{width:o(l)},children:(s,d)=>t.jsx(i.Item,{as:d===0?p:void 0,children:s.text})}),t.jsx(i.Menu.Popper,{children:t.jsx(i.Menu.Card,{cs:{maxWidth:o(300),maxHeight:o(200)},children:t.jsx(i.Menu.List,{children:s=>t.jsx(i.Menu.Item,{children:s.text})})})})]})})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const At=["ActionBarStates","ActionBarWithOverflowMenuStates"];export{r as ActionBarStates,n as ActionBarWithOverflowMenuStates,At as __namedExportsOrder,ht as default};
