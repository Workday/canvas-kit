import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as b}from"./index-IfJi-UCQ.js";import{c as f}from"./customThemes-Bs_31HdK.js";import"./CanvasProviderDecorator-COA1_QAd.js";import{T as e,B as u,R as T}from"./RightToLeft-Bf6aKM7j.js";import{c as j}from"./configure-BFfrsK69.js";import{B as l}from"./Box-5BC0dNqB.js";import{p as m}from"./px2rem-C0KbprIx.js";import{S as d}from"./StaticStates-VZBJ0TJs.js";import{C as h}from"./ComponentStatesTable-lYSTiezT.js";import{g as w}from"./index-DE-upP0k.js";import"./index-pMzza0x6.js";import"./CanvasProvider-CFtqHR-b.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useListItemRegister-tmhAPbAN.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-eQ_txa-f.js";import"./useOverflowListTarget-BMAUIgft.js";import"./bundle.esm-C4XAbbi1.js";import"./useModalityType-vKGNJOLb.js";import"./Menu-D_vEOnvj.js";import"./getTransformFromPlacement-C8S8FYK9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-CS5bngwT.js";import"./mergeStyles-C5CqGCLQ.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./useCloseOnEscape-Dxv9jUxq.js";import"./Popper-DYfGvA07.js";import"./Card-BsFqe5CX.js";import"./Text-BLaZcOr9.js";import"./cornerShape-B7b4ymMc.js";import"./OverflowTooltip-BAg5tNv1.js";import"./useListItemSelect-C0k6gewm.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-2jfUi4it.js";import"./useReturnFocus-CNQf_iaV.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-wbqfrIA1.js";import"./SecondaryButton-CMbqORtK.js";import"./BaseButton-CivL5PJl.js";import"./Button-wmECgaEK.js";import"./chevron-right-Bg_6xPk9.js";import"./useListResetCursorOnBlur-BigU6qBy.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./index-Dusw0zrf.js";const S=150,vt={title:"Testing/Containers/Tabs",component:e,parameters:{chromatic:{disable:!1,delay:S}}},p=(o={})=>t.jsx(d,{...o,children:t.jsx(e,{children:t.jsx(h,{rowProps:[{label:"Default",props:{hasIcon:!1}},{label:"Icon",props:{hasIcon:!0}}],columnProps:[{label:"Default",props:{"aria-selected":!1}},{label:"Selected",props:{"aria-selected":!0}},{label:"Focus",props:{className:"focus"}},{label:"Hover",props:{className:"hover"}},{label:"Disabled",props:{"aria-disabled":!0}}],children:({hasIcon:r,...c})=>r?t.jsxs(e.Item,{...c,children:[t.jsx(e.Item.Icon,{icon:j}),t.jsx(e.Item.Text,{children:"Icon"})]}):t.jsx(e.Item,{...c,children:"Tab"})})})}),n={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Default"}),t.jsx(p,{}),t.jsx("h3",{children:"Themed"}),t.jsx(p,{theme:{canvas:f}}),t.jsx("h3",{children:"RTL"}),t.jsx(p,{dir:"rtl"})]})},s={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Left-to-right"}),t.jsx("div",{children:t.jsx(u,{})}),t.jsx("br",{}),t.jsx("h3",{children:"Right-to-left"}),t.jsx("div",{children:t.jsx(T,{})})]})},x=()=>{const[o]=b.useState([{id:"first",text:"First Tab",contents:"Contents of First Tab"},{id:"second",text:"Second Tab",contents:"Contents of Second Tab"},{id:"third",text:"Third Tab",contents:"Contents of Third Tab"},{id:"fourth",text:"Fourth Tab",contents:"Contents of Fourth Tab"},{id:"fifth",text:"Fifth Tab",contents:"Contents of Fifth Tab"},{id:"sixth",text:"Sixth Tab",contents:"Contents of Sixth Tab"},{id:"seventh",text:"Seventh Tab",contents:"Contents of Seventh Tab"}]);return t.jsxs(e,{items:o,children:[t.jsx(e.List,{overflowButton:t.jsx(e.OverflowButton,{children:"More"}),children:r=>t.jsx(e.Item,{children:r.text})}),t.jsx(e.Menu.Popper,{children:t.jsx(e.Menu.Card,{cs:{maxWidth:m(300),maxHeight:m(200)},children:t.jsx(e.Menu.List,{children:r=>t.jsx(e.Menu.Item,{children:r.text})})})}),t.jsx(e.Panels,{children:r=>t.jsx(e.Panel,{cs:{marginBlockStart:w.lg},children:r.contents})})]})},i={parameters:{chromatic:{viewports:[480,1200]}},render:()=>t.jsx(l,{cs:{width:m(360)},children:t.jsx(x,{})})},a={render:()=>t.jsx(d,{children:t.jsx(h,{rowProps:[{label:"100%",props:{width:"100%"}},{label:"500px",props:{width:"500px"}},{label:"360px",props:{width:"360px"}},{label:"150px",props:{width:"150px"}}],columnProps:[{label:"Overflow Tabs",props:{}}],children:({width:o})=>t.jsx(l,{cs:{width:o},children:t.jsx(x,{})})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const gt=["TabStates","Bidirectionality","Overflow","ContainerWidth"];export{s as Bidirectionality,a as ContainerWidth,i as Overflow,n as TabStates,gt as __namedExportsOrder,vt as default};
