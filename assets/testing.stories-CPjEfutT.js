import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as b}from"./index-IfJi-UCQ.js";import{c as f}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-DtF0hq1d.js";import{T as e,B as u,R as T}from"./RightToLeft-v6Q2wZds.js";import{c as j}from"./configure-D1HKcHKs.js";import{B as l}from"./Box-Dji2xsFp.js";import{p as m}from"./px2rem-C0KbprIx.js";import{S as d}from"./StaticStates-MSWr8SnM.js";import{C as h}from"./ComponentStatesTable-CFexaReD.js";import{g as w}from"./index-5dfzm_kn.js";import"./CanvasProvider-DKylCnBg.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-B2vXpe_3.js";import"./useListItemSelect-DneYhCSJ.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./components-Dyf4Q_nV.js";import"./useOverflowListTarget-CN33WFNX.js";import"./bundle.esm-C4XAbbi1.js";import"./useModalityType-vKGNJOLb.js";import"./Menu-DSo02gQf.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-BHLrFCpr.js";import"./mergeStyles-DA3z7m0v.js";import"./flex-CoK9Wr5Y.js";import"./grid-BEk7oOv6.js";import"./useCloseOnEscape-Ci8oPZu-.js";import"./Popper-BRNkOZhn.js";import"./Card-C0w1QPqP.js";import"./Text-CSA8kpWB.js";import"./OverflowTooltip-COhmJumV.js";import"./SystemIcon-CcQdM6y6.js";import"./Svg-CDIwIDn-.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-CbmVYS2o.js";import"./useReturnFocus-D1Qs81ZF.js";import"./check-small-C7Z-gSGs.js";import"./usePopupTarget-Cgr2fBV0.js";import"./SecondaryButton-CFAfozPp.js";import"./BaseButton-B0mfYlEf.js";import"./Button-6WgYUb9O.js";import"./chevron-right-small-DxmMaev8.js";import"./chevron-down-small-BMZE52uy.js";import"./index-N3xz2Kqy.js";const S=150,jt={title:"Testing/Containers/Tabs",component:e,parameters:{chromatic:{disable:!1,delay:S}}},p=(o={})=>t.jsx(d,{...o,children:t.jsx(e,{children:t.jsx(h,{rowProps:[{label:"Default",props:{hasIcon:!1}},{label:"Icon",props:{hasIcon:!0}}],columnProps:[{label:"Default",props:{"aria-selected":!1}},{label:"Selected",props:{"aria-selected":!0}},{label:"Focus",props:{className:"focus"}},{label:"Hover",props:{className:"hover"}},{label:"Disabled",props:{"aria-disabled":!0}}],children:({hasIcon:r,...c})=>r?t.jsxs(e.Item,{...c,children:[t.jsx(e.Item.Icon,{icon:j}),t.jsx(e.Item.Text,{children:"Icon"})]}):t.jsx(e.Item,{...c,children:"Tab"})})})}),n={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Default"}),t.jsx(p,{}),t.jsx("h3",{children:"Themed"}),t.jsx(p,{theme:{canvas:f}}),t.jsx("h3",{children:"RTL"}),t.jsx(p,{dir:"rtl"})]})},s={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Left-to-right"}),t.jsx("div",{children:t.jsx(u,{})}),t.jsx("br",{}),t.jsx("h3",{children:"Right-to-left"}),t.jsx("div",{children:t.jsx(T,{})})]})},x=()=>{const[o]=b.useState([{id:"first",text:"First Tab",contents:"Contents of First Tab"},{id:"second",text:"Second Tab",contents:"Contents of Second Tab"},{id:"third",text:"Third Tab",contents:"Contents of Third Tab"},{id:"fourth",text:"Fourth Tab",contents:"Contents of Fourth Tab"},{id:"fifth",text:"Fifth Tab",contents:"Contents of Fifth Tab"},{id:"sixth",text:"Sixth Tab",contents:"Contents of Sixth Tab"},{id:"seventh",text:"Seventh Tab",contents:"Contents of Seventh Tab"}]);return t.jsxs(e,{items:o,children:[t.jsx(e.List,{overflowButton:t.jsx(e.OverflowButton,{children:"More"}),children:r=>t.jsx(e.Item,{children:r.text})}),t.jsx(e.Menu.Popper,{children:t.jsx(e.Menu.Card,{cs:{maxWidth:m(300),maxHeight:m(200)},children:t.jsx(e.Menu.List,{children:r=>t.jsx(e.Menu.Item,{children:r.text})})})}),t.jsx(e.Panels,{children:r=>t.jsx(e.Panel,{cs:{marginBlockStart:w.lg},children:r.contents})})]})},i={parameters:{chromatic:{viewports:[480,1200]}},render:()=>t.jsx(l,{cs:{width:m(360)},children:t.jsx(x,{})})},a={render:()=>t.jsx(d,{children:t.jsx(h,{rowProps:[{label:"100%",props:{width:"100%"}},{label:"500px",props:{width:"500px"}},{label:"360px",props:{width:"360px"}},{label:"150px",props:{width:"150px"}}],columnProps:[{label:"Overflow Tabs",props:{}}],children:({width:o})=>t.jsx(l,{cs:{width:o},children:t.jsx(x,{})})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const wt=["TabStates","Bidirectionality","Overflow","ContainerWidth"];export{s as Bidirectionality,a as ContainerWidth,i as Overflow,n as TabStates,wt as __namedExportsOrder,jt as default};
