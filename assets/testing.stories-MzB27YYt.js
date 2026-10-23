import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as b}from"./index-IfJi-UCQ.js";import{c as f}from"./customThemes-Bbh86bqx.js";import"./CanvasProviderDecorator-BCgCd_3r.js";import{T as e,B as u,R as T}from"./RightToLeft-4M-vph4c.js";import{c as j}from"./configure-BFfrsK69.js";import{B as l}from"./Box-MKWQ5iJf.js";import{p as m}from"./px2rem-C0KbprIx.js";import{S as d}from"./StaticStates-BTf7_c5L.js";import{C as h}from"./ComponentStatesTable-DmhtXaV6.js";import{g as w}from"./index--KWQvxqz.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-Dlka2NIO.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useListItemRegister-CNN0mL98.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-Dg6r_l6g.js";import"./useOverflowListItemMeasure-WxAN-Sv9.js";import"./bundle.esm-C4XAbbi1.js";import"./useModalityType-vKGNJOLb.js";import"./Menu-Gyv5iPUB.js";import"./getTransformFromPlacement-BqfTyZs9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-DcVSVBYt.js";import"./mergeStyles-DQAIS8xD.js";import"./flex-l0maHnrZ.js";import"./grid-D9_inQjb.js";import"./useCloseOnEscape-DNAp0b8d.js";import"./Popper-DPlZjLFd.js";import"./isElementRTL-lizwOp5U.js";import"./Card-DxWkS5DO.js";import"./Text-DhPJPWok.js";import"./cornerShape-BJAVQ3D-.js";import"./OverflowTooltip-3VMgvUdj.js";import"./useListItemRovingFocus-omXicuh4.js";import"./useListItemSelect-cQcAgf8O.js";import"./SystemIcon-HqVC_1La.js";import"./Svg-DpRbd5ao.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-BF5s776m.js";import"./useFocusRedirect-BkTwukrZ.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-B4UGit2X.js";import"./SecondaryButton-Czy1ozWJ.js";import"./BaseButton-B4zfOmRB.js";import"./Button-UegFhBzX.js";import"./chevron-right-small-Ng-H0z5q.js";import"./EllipsisText-CM99YWSc.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./index-DWHOiqdi.js";const S=150,Ct={title:"Testing/Containers/Tabs",component:e,parameters:{chromatic:{disable:!1,delay:S}}},p=(o={})=>t.jsx(d,{...o,children:t.jsx(e,{children:t.jsx(h,{rowProps:[{label:"Default",props:{hasIcon:!1}},{label:"Icon",props:{hasIcon:!0}}],columnProps:[{label:"Default",props:{"aria-selected":!1}},{label:"Selected",props:{"aria-selected":!0}},{label:"Focus",props:{className:"focus"}},{label:"Hover",props:{className:"hover"}},{label:"Disabled",props:{"aria-disabled":!0}}],children:({hasIcon:r,...c})=>r?t.jsxs(e.Item,{...c,children:[t.jsx(e.Item.Icon,{icon:j}),t.jsx(e.Item.Text,{children:"Icon"})]}):t.jsx(e.Item,{...c,children:"Tab"})})})}),n={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Default"}),t.jsx(p,{}),t.jsx("h3",{children:"Themed"}),t.jsx(p,{theme:{canvas:f}}),t.jsx("h3",{children:"RTL"}),t.jsx(p,{dir:"rtl"})]})},s={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Left-to-right"}),t.jsx("div",{children:t.jsx(u,{})}),t.jsx("br",{}),t.jsx("h3",{children:"Right-to-left"}),t.jsx("div",{children:t.jsx(T,{})})]})},x=()=>{const[o]=b.useState([{id:"first",text:"First Tab",contents:"Contents of First Tab"},{id:"second",text:"Second Tab",contents:"Contents of Second Tab"},{id:"third",text:"Third Tab",contents:"Contents of Third Tab"},{id:"fourth",text:"Fourth Tab",contents:"Contents of Fourth Tab"},{id:"fifth",text:"Fifth Tab",contents:"Contents of Fifth Tab"},{id:"sixth",text:"Sixth Tab",contents:"Contents of Sixth Tab"},{id:"seventh",text:"Seventh Tab",contents:"Contents of Seventh Tab"}]);return t.jsxs(e,{items:o,children:[t.jsx(e.List,{overflowButton:t.jsx(e.OverflowButton,{children:"More"}),children:r=>t.jsx(e.Item,{children:r.text})}),t.jsx(e.Menu.Popper,{children:t.jsx(e.Menu.Card,{cs:{maxWidth:m(300),maxHeight:m(200)},children:t.jsx(e.Menu.List,{children:r=>t.jsx(e.Menu.Item,{children:r.text})})})}),t.jsx(e.Panels,{children:r=>t.jsx(e.Panel,{cs:{marginBlockStart:w.lg},children:r.contents})})]})},i={parameters:{chromatic:{viewports:[480,1200]}},render:()=>t.jsx(l,{cs:{width:m(360)},children:t.jsx(x,{})})},a={render:()=>t.jsx(d,{children:t.jsx(h,{rowProps:[{label:"100%",props:{width:"100%"}},{label:"500px",props:{width:"500px"}},{label:"360px",props:{width:"360px"}},{label:"150px",props:{width:"150px"}}],columnProps:[{label:"Overflow Tabs",props:{}}],children:({width:o})=>t.jsx(l,{cs:{width:o},children:t.jsx(x,{})})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
