import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{e as f}from"./index-IfJi-UCQ.js";import{c as j}from"./customThemes-Cxo4y1no.js";import"./CanvasProviderDecorator-BfN7-tD4.js";import{T as t,B as T,R as v}from"./RightToLeft-LjfWHjW4.js";import{c as w}from"./configure-BFfrsK69.js";import{B as d}from"./Box-61RYJS8A.js";import{p as o}from"./px2rem-C0KbprIx.js";import{S as h}from"./StaticStates-BwBBf8NR.js";import{C as x}from"./ComponentStatesTable-DC9eJUqa.js";import{g as p}from"./index-DE-upP0k.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-DfFmsxWb.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useListItemRegister-CpJkOK8H.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-DdDgcAto.js";import"./useModalityType-vKGNJOLb.js";import"./useOverflowListTarget-34ivCzNX.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DNCcAoir.js";import"./getTransformFromPlacement-BTYKlY9d.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-BgRaP0ww.js";import"./mergeStyles-BpMifWbI.js";import"./flex-c4dSep24.js";import"./grid-BACyZ-ln.js";import"./useCloseOnEscape-BBCCNOIp.js";import"./Popper-BTfx4X3Y.js";import"./Card-BSzbbTvN.js";import"./Text-DCxfoIId.js";import"./cornerShape-D6g3edD7.js";import"./OverflowTooltip-DvDdKiVX.js";import"./useListItemSelect-BiKiaz0I.js";import"./SystemIcon-Bo20moLE.js";import"./Svg-CJw9rXYh.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-D6liLhXU.js";import"./useFocusRedirect-BHqtMCeJ.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-B2V76KZ9.js";import"./SecondaryButton-DG7QNEgp.js";import"./BaseButton-5Tzdsups.js";import"./Button-CQ42Z5L0.js";import"./chevron-right-small-Ng-H0z5q.js";import"./useListResetCursorOnBlur-ceqvmE0s.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./index-DX07rvw8.js";const S=150,ge={title:"Testing/Preview/Tabs",component:t,parameters:{chromatic:{disable:!1,delay:S}}},c=(n={})=>e.jsx(h,{...n,children:e.jsx(x,{rowProps:[{label:"Filled No Icon",props:{variant:"filled",hasIcon:!1}},{label:"Outline No Icon",props:{variant:"outlined",hasIcon:!1}},{label:"Filled Icon",props:{variant:"filled",hasIcon:!0}},{label:"Outline Icon",props:{variant:"outlined",hasIcon:!0}}],columnProps:[{label:"Default",props:{"aria-selected":!1}},{label:"Selected",props:{"aria-selected":!0}},{label:"Focus",props:{className:"focus"}},{label:"Hover",props:{className:"hover"}},{label:"Disabled",props:{"aria-disabled":!0}}],children:({hasIcon:r,variant:b,...m})=>e.jsx(t,{variant:b,children:r?e.jsxs(t.Item,{...m,children:[e.jsx(t.Item.Icon,{icon:w}),e.jsx(t.Item.Text,{children:"Icon"})]}):e.jsx(t.Item,{...m,children:"Tab"})})})}),s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Default"}),e.jsx(c,{}),e.jsx("h3",{children:"Themed"}),e.jsx(c,{theme:{canvas:j}}),e.jsx("h3",{children:"RTL"}),e.jsx(c,{dir:"rtl"})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Left-to-right"}),e.jsx("div",{children:e.jsx(T,{})}),e.jsx("br",{}),e.jsx("h3",{children:"Right-to-left"}),e.jsx("div",{children:e.jsx(v,{})})]})},u=()=>{const[n]=f.useState([{id:"first",text:"First Tab",contents:"Contents of First Tab"},{id:"second",text:"Second Tab",contents:"Contents of Second Tab"},{id:"third",text:"Third Tab",contents:"Contents of Third Tab"},{id:"fourth",text:"Fourth Tab",contents:"Contents of Fourth Tab"},{id:"fifth",text:"Fifth Tab",contents:"Contents of Fifth Tab"},{id:"sixth",text:"Sixth Tab",contents:"Contents of Sixth Tab"},{id:"seventh",text:"Seventh Tab",contents:"Contents of Seventh Tab"}]);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{items:n,children:[e.jsx(t.List,{overflowButton:e.jsx(t.OverflowButton,{children:"More"}),children:r=>e.jsx(t.Item,{children:r.text})}),e.jsx(t.Menu.Popper,{children:e.jsx(t.Menu.Card,{cs:{maxWidth:o(300),maxHeight:o(200)},children:e.jsx(t.Menu.List,{children:r=>e.jsx(t.Menu.Item,{children:r.text})})})}),e.jsx(t.Panels,{children:r=>e.jsx(t.Panel,{cs:{marginBlockStart:p.lg},children:r.contents})})]}),e.jsxs(t,{variant:"outlined",items:n,children:[e.jsx(t.List,{overflowButton:e.jsx(t.OverflowButton,{children:"More"}),cs:{marginBlockStart:p.lg},children:r=>e.jsx(t.Item,{children:r.text})}),e.jsx(t.Menu.Popper,{children:e.jsx(t.Menu.Card,{cs:{maxWidth:o(300),maxHeight:o(200)},children:e.jsx(t.Menu.List,{children:r=>e.jsx(t.Menu.Item,{children:r.text})})})}),e.jsx(t.Panels,{children:r=>e.jsx(t.Panel,{cs:{marginBlockStart:p.lg},children:r.contents})})]})]})},a={parameters:{chromatic:{viewports:[480,1200]}},render:()=>e.jsx(d,{cs:{width:o(360)},children:e.jsx(u,{})})},l={render:()=>e.jsx(h,{children:e.jsx(x,{rowProps:[{label:"100%",props:{width:"100%"}},{label:"500px",props:{width:"500px"}},{label:"360px",props:{width:"360px"}},{label:"150px",props:{width:"150px"}}],columnProps:[{label:"Overflow Tabs",props:{}}],children:({width:n})=>e.jsx(d,{cs:{width:n},children:e.jsx(u,{})})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Ie=["TabStates","Bidirectionality","Overflow","ContainerWidth"];export{i as Bidirectionality,l as ContainerWidth,a as Overflow,s as TabStates,Ie as __namedExportsOrder,ge as default};
