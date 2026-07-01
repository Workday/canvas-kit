import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-B5vG4wH5.js";import{S as n}from"./StaticStates-BzuYGXxn.js";import{C as l}from"./ComponentStatesTable-BYD1NK26.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-zZF9u2s8.js";import"./Menu-CoEQDl3T.js";import"./useListItemSelect-CfIjHovN.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./cs-rfTTo7Bg.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-CT5D_DBK.js";import"./mergeStyles-CBSbM0IM.js";import"./Box-jRVkubPC.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./flex-4pGh-j7a.js";import"./grid-BJ8bTTH_.js";import"./index-5dfzm_kn.js";import"./useCloseOnEscape-CjhzXgdu.js";import"./Popper-BjMUBNME.js";import"./CanvasProvider-DsukrmKC.js";import"./index-5mrAZJYD.js";import"./Card-D79lI0U4.js";import"./Text-Dp9AQPhJ.js";import"./OverflowTooltip-BmQMITUN.js";import"./SystemIcon-BwdIspvd.js";import"./Svg-BUqf886j.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-BuNn_KMr.js";import"./useReturnFocus-BL3Uz_yb.js";import"./check-small-C7Z-gSGs.js";import"./usePopupTarget-DXnQFalx.js";import"./SecondaryButton-D3H6QxrX.js";import"./BaseButton-L3-0dDNr.js";import"./Button-DGz_G3Up.js";import"./chevron-right-small-DxmMaev8.js";import"./TextInput-Cp9IeKzz.js";import"./types-DXdjelYI.js";const io={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StaticStates>
        <ComponentStatesTable columnProps={[{
        label: 'Default',
        props: {}
      }]} rowProps={[{
        label: 'Closed',
        props: {
          visibility: 'hidden'
        }
      }, {
        label: 'Opened',
        props: {
          visibility: 'visible'
        }
      }]}>
          {({
          visibility,
          ...props
        }) => {
          // Do this work to make the test look correct

          const model = useComboboxModel({
            initialVisibility: visibility
          });
          React.useLayoutEffect(() => {
            if (visibility === 'visible') {
              model.events.setWidth(model.state.inputRef.current.getBoundingClientRect().width);
            }
          }, [visibility, model.events, model.state.inputRef]);
          return <Combobox model={model} {...props}>
                <Combobox.Input />
                <Combobox.Menu.Popper>
                  <Combobox.Menu.Card>
                    <Combobox.Menu.List cs={{
                  maxHeight: px2rem(200)
                }}>
                      <Combobox.Menu.Item className="focus">Option 1</Combobox.Menu.Item>
                      <Combobox.Menu.Item>Option 2</Combobox.Menu.Item>
                      <Combobox.Menu.Item>Option 3</Combobox.Menu.Item>
                    </Combobox.Menu.List>
                  </Combobox.Menu.Card>
                </Combobox.Menu.Popper>
              </Combobox>;
        }}
        </ComponentStatesTable>
        <div style={{
        height: 110
      }} /* Leave room for the menu */ />
      </StaticStates>;
  }
}`,...i.parameters?.docs?.source}}};const ro=["ComboboxStates"];export{i as ComboboxStates,ro as __namedExportsOrder,io as default};
