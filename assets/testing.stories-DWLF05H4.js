import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{e as f}from"./index-IfJi-UCQ.js";import{c as j}from"./customThemes-Bs_31HdK.js";import"./CanvasProviderDecorator-COA1_QAd.js";import{T as t,B as T,R as v}from"./RightToLeft-BO2aCQI6.js";import{c as w}from"./configure-BFfrsK69.js";import{B as d}from"./Box-5BC0dNqB.js";import{p as o}from"./px2rem-C0KbprIx.js";import{S as h}from"./StaticStates-VZBJ0TJs.js";import{C as x}from"./ComponentStatesTable-lYSTiezT.js";import{g as p}from"./index-DE-upP0k.js";import"./index-pMzza0x6.js";import"./CanvasProvider-CFtqHR-b.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useListItemRegister-tmhAPbAN.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-eQ_txa-f.js";import"./useModalityType-vKGNJOLb.js";import"./useOverflowListTarget-BMAUIgft.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D_vEOnvj.js";import"./getTransformFromPlacement-C8S8FYK9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-CS5bngwT.js";import"./mergeStyles-C5CqGCLQ.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./useCloseOnEscape-Dxv9jUxq.js";import"./Popper-DYfGvA07.js";import"./Card-BsFqe5CX.js";import"./Text-BLaZcOr9.js";import"./cornerShape-B7b4ymMc.js";import"./OverflowTooltip-BAg5tNv1.js";import"./useListItemSelect-C0k6gewm.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-2jfUi4it.js";import"./useReturnFocus-CNQf_iaV.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-wbqfrIA1.js";import"./SecondaryButton-CMbqORtK.js";import"./BaseButton-CivL5PJl.js";import"./Button-wmECgaEK.js";import"./chevron-right-Bg_6xPk9.js";import"./useListResetCursorOnBlur-BigU6qBy.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./index-Dusw0zrf.js";const S=150,ge={title:"Testing/Preview/Tabs",component:t,parameters:{chromatic:{disable:!1,delay:S}}},c=(n={})=>e.jsx(h,{...n,children:e.jsx(x,{rowProps:[{label:"Filled No Icon",props:{variant:"filled",hasIcon:!1}},{label:"Outline No Icon",props:{variant:"outlined",hasIcon:!1}},{label:"Filled Icon",props:{variant:"filled",hasIcon:!0}},{label:"Outline Icon",props:{variant:"outlined",hasIcon:!0}}],columnProps:[{label:"Default",props:{"aria-selected":!1}},{label:"Selected",props:{"aria-selected":!0}},{label:"Focus",props:{className:"focus"}},{label:"Hover",props:{className:"hover"}},{label:"Disabled",props:{"aria-disabled":!0}}],children:({hasIcon:r,variant:b,...m})=>e.jsx(t,{variant:b,children:r?e.jsxs(t.Item,{...m,children:[e.jsx(t.Item.Icon,{icon:w}),e.jsx(t.Item.Text,{children:"Icon"})]}):e.jsx(t.Item,{...m,children:"Tab"})})})}),s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Default"}),e.jsx(c,{}),e.jsx("h3",{children:"Themed"}),e.jsx(c,{theme:{canvas:j}}),e.jsx("h3",{children:"RTL"}),e.jsx(c,{dir:"rtl"})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Left-to-right"}),e.jsx("div",{children:e.jsx(T,{})}),e.jsx("br",{}),e.jsx("h3",{children:"Right-to-left"}),e.jsx("div",{children:e.jsx(v,{})})]})},u=()=>{const[n]=f.useState([{id:"first",text:"First Tab",contents:"Contents of First Tab"},{id:"second",text:"Second Tab",contents:"Contents of Second Tab"},{id:"third",text:"Third Tab",contents:"Contents of Third Tab"},{id:"fourth",text:"Fourth Tab",contents:"Contents of Fourth Tab"},{id:"fifth",text:"Fifth Tab",contents:"Contents of Fifth Tab"},{id:"sixth",text:"Sixth Tab",contents:"Contents of Sixth Tab"},{id:"seventh",text:"Seventh Tab",contents:"Contents of Seventh Tab"}]);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{items:n,children:[e.jsx(t.List,{overflowButton:e.jsx(t.OverflowButton,{children:"More"}),children:r=>e.jsx(t.Item,{children:r.text})}),e.jsx(t.Menu.Popper,{children:e.jsx(t.Menu.Card,{cs:{maxWidth:o(300),maxHeight:o(200)},children:e.jsx(t.Menu.List,{children:r=>e.jsx(t.Menu.Item,{children:r.text})})})}),e.jsx(t.Panels,{children:r=>e.jsx(t.Panel,{cs:{marginBlockStart:p.lg},children:r.contents})})]}),e.jsxs(t,{variant:"outlined",items:n,children:[e.jsx(t.List,{overflowButton:e.jsx(t.OverflowButton,{children:"More"}),cs:{marginBlockStart:p.lg},children:r=>e.jsx(t.Item,{children:r.text})}),e.jsx(t.Menu.Popper,{children:e.jsx(t.Menu.Card,{cs:{maxWidth:o(300),maxHeight:o(200)},children:e.jsx(t.Menu.List,{children:r=>e.jsx(t.Menu.Item,{children:r.text})})})}),e.jsx(t.Panels,{children:r=>e.jsx(t.Panel,{cs:{marginBlockStart:p.lg},children:r.contents})})]})]})},a={parameters:{chromatic:{viewports:[480,1200]}},render:()=>e.jsx(d,{cs:{width:o(360)},children:e.jsx(u,{})})},l={render:()=>e.jsx(h,{children:e.jsx(x,{rowProps:[{label:"100%",props:{width:"100%"}},{label:"500px",props:{width:"500px"}},{label:"360px",props:{width:"360px"}},{label:"150px",props:{width:"150px"}}],columnProps:[{label:"Overflow Tabs",props:{}}],children:({width:n})=>e.jsx(d,{cs:{width:n},children:e.jsx(u,{})})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
