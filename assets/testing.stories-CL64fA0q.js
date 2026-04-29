import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as x}from"./index-IfJi-UCQ.js";import{c as b}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-fTgaRE_v.js";import{T as e,B as f,R as u}from"./RightToLeft-CFraIi0g.js";import{c as T}from"./configure-BTjrxQBR.js";import{B as l}from"./Box-DFWPfIf0.js";import{S as c}from"./StaticStates-kDyV_ZDH.js";import{C as d}from"./ComponentStatesTable-jhhL0fUQ.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-CbBD4ERB.js";import"./index-CYsyLHR7.js";import"./useListItemSelect-D10U8d3g.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./components-XIe_upcR.js";import"./useOverflowListTarget-Esi-iaKN.js";import"./bundle.esm-C4XAbbi1.js";import"./useModalityType-vKGNJOLb.js";import"./Menu-Blawm5fT.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-p8F4NfJ4.js";import"./mergeStyles-Dttt6jO3.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./Card-ywil38vv.js";import"./Text-8N36XMNq.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-B7jd-TXK.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-ETf1Gakg.js";import"./useReturnFocus-BgzhEoBI.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-B7GfDsu7.js";import"./SecondaryButton-oNuQLwcg.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Button-Cp7fe3Zs.js";import"./chevron-right-small-CQ6vqfU4.js";import"./chevron-down-small-BrY2vkBl.js";import"./index-CdbxS-xI.js";const j=150,wt={title:"Testing/Containers/Tabs",component:e,parameters:{chromatic:{disable:!1,delay:j}}},p=(o={})=>t.jsx(c,{...o,children:t.jsx(e,{children:t.jsx(d,{rowProps:[{label:"Default",props:{hasIcon:!1}},{label:"Icon",props:{hasIcon:!0}}],columnProps:[{label:"Default",props:{"aria-selected":!1}},{label:"Selected",props:{"aria-selected":!0}},{label:"Focus",props:{className:"focus"}},{label:"Hover",props:{className:"hover"}},{label:"Disabled",props:{"aria-disabled":!0}}],children:({hasIcon:r,...m})=>r?t.jsxs(e.Item,{...m,children:[t.jsx(e.Item.Icon,{icon:T}),t.jsx(e.Item.Text,{children:"Icon"})]}):t.jsx(e.Item,{...m,children:"Tab"})})})}),n={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Default"}),t.jsx(p,{}),t.jsx("h3",{children:"Themed"}),t.jsx(p,{theme:{canvas:b}}),t.jsx("h3",{children:"RTL"}),t.jsx(p,{dir:"rtl"})]})},s={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Left-to-right"}),t.jsx("div",{children:t.jsx(f,{})}),t.jsx("br",{}),t.jsx("h3",{children:"Right-to-left"}),t.jsx("div",{children:t.jsx(u,{})})]})},h=()=>{const[o]=x.useState([{id:"first",text:"First Tab",contents:"Contents of First Tab"},{id:"second",text:"Second Tab",contents:"Contents of Second Tab"},{id:"third",text:"Third Tab",contents:"Contents of Third Tab"},{id:"fourth",text:"Fourth Tab",contents:"Contents of Fourth Tab"},{id:"fifth",text:"Fifth Tab",contents:"Contents of Fifth Tab"},{id:"sixth",text:"Sixth Tab",contents:"Contents of Sixth Tab"},{id:"seventh",text:"Seventh Tab",contents:"Contents of Seventh Tab"}]);return t.jsxs(e,{items:o,children:[t.jsx(e.List,{overflowButton:t.jsx(e.OverflowButton,{children:"More"}),children:r=>t.jsx(e.Item,{children:r.text})}),t.jsx(e.Menu.Popper,{children:t.jsx(e.Menu.Card,{maxWidth:300,maxHeight:200,children:t.jsx(e.Menu.List,{children:r=>t.jsx(e.Menu.Item,{children:r.text})})})}),t.jsx(e.Panels,{children:r=>t.jsx(e.Panel,{marginTop:"m",children:r.contents})})]})},i={parameters:{chromatic:{viewports:[480,1200]}},render:()=>t.jsx(l,{width:"360px",children:t.jsx(h,{})})},a={render:()=>t.jsx(c,{children:t.jsx(d,{rowProps:[{label:"100%",props:{width:"100%"}},{label:"500px",props:{width:"500px"}},{label:"360px",props:{width:"360px"}},{label:"150px",props:{width:"150px"}}],columnProps:[{label:"Overflow Tabs",props:{}}],children:({width:o})=>t.jsx(l,{width:o,children:t.jsx(h,{})})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    return <Box width="360px">
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
        }) => <Box width={width}>
              <OverflowTabs />
            </Box>}
        </ComponentStatesTable>
      </StaticStates>;
  }
}`,...a.parameters?.docs?.source}}};const vt=["TabStates","Bidirectionality","Overflow","ContainerWidth"];export{s as Bidirectionality,a as ContainerWidth,i as Overflow,n as TabStates,vt as __namedExportsOrder,wt as default};
