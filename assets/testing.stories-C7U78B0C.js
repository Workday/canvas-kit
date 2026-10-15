import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-D6P1R4t8.js";import{S as n}from"./StaticStates-BjShJKff.js";import{C as l}from"./ComponentStatesTable-DXLLOxjV.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-CwPiNTv7.js";import"./useListItemRovingFocus-DPhFhJfQ.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-54CK_IPo.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-KuiEmhEU.js";import"./Menu-BhzHIyri.js";import"./getTransformFromPlacement-DEiEIaBA.js";import"./CanvasProvider-Djg5GzKY.js";import"./index--KWQvxqz.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-B_3p7ft8.js";import"./mergeStyles-DQZ8xltm.js";import"./Box-C6YWxsyC.js";import"./index-JH7P-Oob.js";import"./flex-uWNpiXvQ.js";import"./grid-Z1baOhTC.js";import"./useCloseOnEscape-DWBt8FsA.js";import"./Popper-4YHzsBrp.js";import"./Card-B2DoyM2M.js";import"./Text-CugBmzts.js";import"./cornerShape-BEKlmC6c.js";import"./OverflowTooltip-TaXlUV6y.js";import"./useListItemSelect-C8xhwn2K.js";import"./SystemIcon-BX_--XLu.js";import"./Svg-B-_8_IoS.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DY0PlNcI.js";import"./useFocusRedirect-CQqurwgn.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-CFAJ63K0.js";import"./BaseButton-C2ONQDdO.js";import"./Button-B-0xbtvO.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-sO79edZw.js";import"./types-DXdjelYI.js";const po={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
