import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{e as f}from"./index-IfJi-UCQ.js";import{c as j}from"./customThemes-Bvo2IHsN.js";import"./CanvasProviderDecorator-Wl7BPB1a.js";import{T as t,B as T,R as v}from"./RightToLeft-CM4bbGLJ.js";import{c as w}from"./configure-BFfrsK69.js";import{B as d}from"./Box-AXoeqAfR.js";import{p as o}from"./px2rem-C0KbprIx.js";import{S as h}from"./StaticStates-3kLi16XM.js";import{C as x}from"./ComponentStatesTable-BPQhZ1bp.js";import{g as p}from"./index-C_4iH04t.js";import"./index-CFEs8r9D.js";import"./CanvasProvider-DJRItNr0.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useListItemRegister-cbpcI0J1.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-CxXDZKlX.js";import"./useModalityType-vKGNJOLb.js";import"./useOverflowListItemMeasure-DU3HTtaC.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-pYQJPHtt.js";import"./getTransformFromPlacement-kDQSMLcK.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-PjORsXZm.js";import"./mergeStyles-Cwq7MPiu.js";import"./flex-B-mM-efm.js";import"./grid-BRoHx-9y.js";import"./useCloseOnEscape-CJ8QJI5q.js";import"./Popper-mGIbWNdd.js";import"./isElementRTL-lizwOp5U.js";import"./Card-C94ti1ug.js";import"./Text-BU7lo9qQ.js";import"./cornerShape-CSfH3EMK.js";import"./OverflowTooltip-CfbyETTq.js";import"./useListItemRovingFocus-9AyEy-B6.js";import"./useListItemSelect-BVXjgXJV.js";import"./SystemIcon-oQ2K1VCn.js";import"./Svg-BMATp2Oq.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-CgwmYqfY.js";import"./useFocusRedirect-DlsmGhp1.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-BrzAvJUE.js";import"./SecondaryButton-ClDLkqd4.js";import"./BaseButton-CXgunvHx.js";import"./Button-BKwQ9p25.js";import"./chevron-right-small-Ng-H0z5q.js";import"./EllipsisText-BUby9nZc.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./index-Cvke4sRE.js";const S=150,Be={title:"Testing/Preview/Tabs",component:t,parameters:{chromatic:{disable:!1,delay:S}}},c=(n={})=>e.jsx(h,{...n,children:e.jsx(x,{rowProps:[{label:"Filled No Icon",props:{variant:"filled",hasIcon:!1}},{label:"Outline No Icon",props:{variant:"outlined",hasIcon:!1}},{label:"Filled Icon",props:{variant:"filled",hasIcon:!0}},{label:"Outline Icon",props:{variant:"outlined",hasIcon:!0}}],columnProps:[{label:"Default",props:{"aria-selected":!1}},{label:"Selected",props:{"aria-selected":!0}},{label:"Focus",props:{className:"focus"}},{label:"Hover",props:{className:"hover"}},{label:"Disabled",props:{"aria-disabled":!0}}],children:({hasIcon:r,variant:b,...m})=>e.jsx(t,{variant:b,children:r?e.jsxs(t.Item,{...m,children:[e.jsx(t.Item.Icon,{icon:w}),e.jsx(t.Item.Text,{children:"Icon"})]}):e.jsx(t.Item,{...m,children:"Tab"})})})}),s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Default"}),e.jsx(c,{}),e.jsx("h3",{children:"Themed"}),e.jsx(c,{theme:{canvas:j}}),e.jsx("h3",{children:"RTL"}),e.jsx(c,{dir:"rtl"})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Left-to-right"}),e.jsx("div",{children:e.jsx(T,{})}),e.jsx("br",{}),e.jsx("h3",{children:"Right-to-left"}),e.jsx("div",{children:e.jsx(v,{})})]})},u=()=>{const[n]=f.useState([{id:"first",text:"First Tab",contents:"Contents of First Tab"},{id:"second",text:"Second Tab",contents:"Contents of Second Tab"},{id:"third",text:"Third Tab",contents:"Contents of Third Tab"},{id:"fourth",text:"Fourth Tab",contents:"Contents of Fourth Tab"},{id:"fifth",text:"Fifth Tab",contents:"Contents of Fifth Tab"},{id:"sixth",text:"Sixth Tab",contents:"Contents of Sixth Tab"},{id:"seventh",text:"Seventh Tab",contents:"Contents of Seventh Tab"}]);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{items:n,children:[e.jsx(t.List,{overflowButton:e.jsx(t.OverflowButton,{children:"More"}),children:r=>e.jsx(t.Item,{children:r.text})}),e.jsx(t.Menu.Popper,{children:e.jsx(t.Menu.Card,{cs:{maxWidth:o(300),maxHeight:o(200)},children:e.jsx(t.Menu.List,{children:r=>e.jsx(t.Menu.Item,{children:r.text})})})}),e.jsx(t.Panels,{children:r=>e.jsx(t.Panel,{cs:{marginBlockStart:p.lg},children:r.contents})})]}),e.jsxs(t,{variant:"filled",items:n,children:[e.jsx(t.List,{overflowButton:e.jsx(t.OverflowButton,{children:"More"}),cs:{marginBlockStart:p.lg},children:r=>e.jsx(t.Item,{children:r.text})}),e.jsx(t.Menu.Popper,{children:e.jsx(t.Menu.Card,{cs:{maxWidth:o(300),maxHeight:o(200)},children:e.jsx(t.Menu.List,{children:r=>e.jsx(t.Menu.Item,{children:r.text})})})}),e.jsx(t.Panels,{children:r=>e.jsx(t.Panel,{cs:{marginBlockStart:p.lg},children:r.contents})})]})]})},a={parameters:{chromatic:{viewports:[480,1200]}},render:()=>e.jsx(d,{cs:{width:o(360)},children:e.jsx(u,{})})},l={render:()=>e.jsx(h,{children:e.jsx(x,{rowProps:[{label:"100%",props:{width:"100%"}},{label:"500px",props:{width:"500px"}},{label:"360px",props:{width:"360px"}},{label:"150px",props:{width:"150px"}}],columnProps:[{label:"Overflow Tabs",props:{}}],children:({width:n})=>e.jsx(d,{cs:{width:n},children:e.jsx(u,{})})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Ce=["TabStates","Bidirectionality","Overflow","ContainerWidth"];export{i as Bidirectionality,l as ContainerWidth,a as Overflow,s as TabStates,Ce as __namedExportsOrder,Be as default};
