import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-D4O1V1M_.js";import{S as n}from"./StaticStates-BX1Ekc1X.js";import{C as l}from"./ComponentStatesTable-bL-AVKdw.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-OdKcSStU.js";import"./useListItemRovingFocus-WV5pVo7q.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-CXT_DnuF.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-AlYo2KDF.js";import"./Menu-DYLwIYhl.js";import"./getTransformFromPlacement-BXTUPqrg.js";import"./CanvasProvider-Bg8Y7PHJ.js";import"./index-C_4iH04t.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-Ck_Cs2o9.js";import"./mergeStyles-HRRReKI7.js";import"./Box-BQWSASz1.js";import"./index-DX07rvw8.js";import"./flex-Cq2SI08U.js";import"./grid-C8fI_h8P.js";import"./useCloseOnEscape-8wiZHMtw.js";import"./Popper-BausaQH8.js";import"./Card-D9Eclt62.js";import"./Text-C_lkQW3l.js";import"./cornerShape-XgYWEUxE.js";import"./OverflowTooltip-DGNnz-0s.js";import"./useListItemSelect-CTP_l593.js";import"./SystemIcon-Cik2pv8M.js";import"./Svg-q-fWRgLZ.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-svAEukqR.js";import"./useFocusRedirect-DrSAXKeK.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-CmtnR6ND.js";import"./BaseButton-nXUBoAD8.js";import"./Button-B9EDavVx.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-CD4VtYJu.js";import"./types-DXdjelYI.js";const po={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const no=["ComboboxStates"];export{i as ComboboxStates,no as __namedExportsOrder,po as default};
