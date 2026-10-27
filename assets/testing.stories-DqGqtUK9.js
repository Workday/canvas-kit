import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as b}from"./index-IfJi-UCQ.js";import{c as f}from"./customThemes-Bvo2IHsN.js";import"./CanvasProviderDecorator-Wl7BPB1a.js";import{T as e,B as u,R as T}from"./RightToLeft-91UANYjQ.js";import{c as j}from"./configure-BFfrsK69.js";import{B as l}from"./Box-AXoeqAfR.js";import{p as m}from"./px2rem-C0KbprIx.js";import{S as d}from"./StaticStates-3kLi16XM.js";import{C as h}from"./ComponentStatesTable-BPQhZ1bp.js";import{g as w}from"./index-C_4iH04t.js";import"./index-CFEs8r9D.js";import"./CanvasProvider-DJRItNr0.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useListItemRegister-cbpcI0J1.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-CxXDZKlX.js";import"./useOverflowListItemMeasure-DU3HTtaC.js";import"./bundle.esm-C4XAbbi1.js";import"./useModalityType-vKGNJOLb.js";import"./Menu-pYQJPHtt.js";import"./getTransformFromPlacement-kDQSMLcK.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-PjORsXZm.js";import"./mergeStyles-Cwq7MPiu.js";import"./flex-B-mM-efm.js";import"./grid-BRoHx-9y.js";import"./useCloseOnEscape-CJ8QJI5q.js";import"./Popper-mGIbWNdd.js";import"./isElementRTL-lizwOp5U.js";import"./Card-C94ti1ug.js";import"./Text-BU7lo9qQ.js";import"./cornerShape-CSfH3EMK.js";import"./OverflowTooltip-CfbyETTq.js";import"./useListItemRovingFocus-9AyEy-B6.js";import"./useListItemSelect-BVXjgXJV.js";import"./SystemIcon-oQ2K1VCn.js";import"./Svg-BMATp2Oq.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-CgwmYqfY.js";import"./useFocusRedirect-DlsmGhp1.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-BrzAvJUE.js";import"./SecondaryButton-ClDLkqd4.js";import"./BaseButton-CXgunvHx.js";import"./Button-BKwQ9p25.js";import"./chevron-right-small-Ng-H0z5q.js";import"./EllipsisText-BUby9nZc.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./index-Cvke4sRE.js";const S=150,Ct={title:"Testing/Containers/Tabs",component:e,parameters:{chromatic:{disable:!1,delay:S}}},p=(o={})=>t.jsx(d,{...o,children:t.jsx(e,{children:t.jsx(h,{rowProps:[{label:"Default",props:{hasIcon:!1}},{label:"Icon",props:{hasIcon:!0}}],columnProps:[{label:"Default",props:{"aria-selected":!1}},{label:"Selected",props:{"aria-selected":!0}},{label:"Focus",props:{className:"focus"}},{label:"Hover",props:{className:"hover"}},{label:"Disabled",props:{"aria-disabled":!0}}],children:({hasIcon:r,...c})=>r?t.jsxs(e.Item,{...c,children:[t.jsx(e.Item.Icon,{icon:j}),t.jsx(e.Item.Text,{children:"Icon"})]}):t.jsx(e.Item,{...c,children:"Tab"})})})}),n={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Default"}),t.jsx(p,{}),t.jsx("h3",{children:"Themed"}),t.jsx(p,{theme:{canvas:f}}),t.jsx("h3",{children:"RTL"}),t.jsx(p,{dir:"rtl"})]})},s={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Left-to-right"}),t.jsx("div",{children:t.jsx(u,{})}),t.jsx("br",{}),t.jsx("h3",{children:"Right-to-left"}),t.jsx("div",{children:t.jsx(T,{})})]})},x=()=>{const[o]=b.useState([{id:"first",text:"First Tab",contents:"Contents of First Tab"},{id:"second",text:"Second Tab",contents:"Contents of Second Tab"},{id:"third",text:"Third Tab",contents:"Contents of Third Tab"},{id:"fourth",text:"Fourth Tab",contents:"Contents of Fourth Tab"},{id:"fifth",text:"Fifth Tab",contents:"Contents of Fifth Tab"},{id:"sixth",text:"Sixth Tab",contents:"Contents of Sixth Tab"},{id:"seventh",text:"Seventh Tab",contents:"Contents of Seventh Tab"}]);return t.jsxs(e,{items:o,children:[t.jsx(e.List,{overflowButton:t.jsx(e.OverflowButton,{children:"More"}),children:r=>t.jsx(e.Item,{children:r.text})}),t.jsx(e.Menu.Popper,{children:t.jsx(e.Menu.Card,{cs:{maxWidth:m(300),maxHeight:m(200)},children:t.jsx(e.Menu.List,{children:r=>t.jsx(e.Menu.Item,{children:r.text})})})}),t.jsx(e.Panels,{children:r=>t.jsx(e.Panel,{cs:{marginBlockStart:w.lg},children:r.contents})})]})},i={parameters:{chromatic:{viewports:[480,1200]}},render:()=>t.jsx(l,{cs:{width:m(360)},children:t.jsx(x,{})})},a={render:()=>t.jsx(d,{children:t.jsx(h,{rowProps:[{label:"100%",props:{width:"100%"}},{label:"500px",props:{width:"500px"}},{label:"360px",props:{width:"360px"}},{label:"150px",props:{width:"150px"}}],columnProps:[{label:"Overflow Tabs",props:{}}],children:({width:o})=>t.jsx(l,{cs:{width:o},children:t.jsx(x,{})})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3>Default</h3>
      <TabsExample />
      <h3>Themed</h3>
      <TabsExample theme={{
      canvas: customColorTheme
    }} />
      <h3>RTL</h3>
      <TabsExample dir="rtl" />
    </>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h3>Left-to-right</h3>
        <div>
          <Basic />
        </div>
        <br />
        <h3>Right-to-left</h3>
        <div>
          <RightToLeft />
        </div>
      </>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      viewports: [480, 1200]
    }
  },
  render: () => {
    return <Box cs={{
      width: px2rem(360)
    }}>
        <OverflowTabs />
      </Box>;
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StaticStates>
        <ComponentStatesTable rowProps={[{
        label: '100%',
        props: {
          width: '100%'
        }
      }, {
        label: '500px',
        props: {
          width: '500px'
        }
      }, {
        label: '360px',
        props: {
          width: '360px'
        }
      }, {
        label: '150px',
        props: {
          width: '150px'
        }
      }]} columnProps={[{
        label: 'Overflow Tabs',
        props: {}
      }]}>
          {({
          width
        }) => <Box cs={{
          width
        }}>
              <OverflowTabs />
            </Box>}
        </ComponentStatesTable>
      </StaticStates>;
  }
}`,...a.parameters?.docs?.source}}};const Bt=["TabStates","Bidirectionality","Overflow","ContainerWidth"];export{s as Bidirectionality,a as ContainerWidth,i as Overflow,n as TabStates,Bt as __namedExportsOrder,Ct as default};
