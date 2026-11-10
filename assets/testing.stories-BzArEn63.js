import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-Cai7WmkW.js";import{S as n}from"./StaticStates-DtywhUnM.js";import{C as l}from"./ComponentStatesTable-rgzlBxk_.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-S5bC6fZi.js";import"./useListItemRovingFocus-Cpz-9FpV.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-B6CuK0fQ.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-SKx5oDcQ.js";import"./Menu-DpkUyS6S.js";import"./getTransformFromPlacement-QV_saiu5.js";import"./CanvasProvider-axEgo6e1.js";import"./index-C_4iH04t.js";import"./index-CFEs8r9D.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-Cgsa4tFw.js";import"./mergeStyles-Dk0M9lrR.js";import"./Box-B4eyyvuU.js";import"./index-DX07rvw8.js";import"./flex-KgQM1qcC.js";import"./grid-CK5kpvEI.js";import"./useCloseOnEscape-B4YT-A7Z.js";import"./Popper-DthqIkuE.js";import"./Card-DyIEc58y.js";import"./Text-DNDYTuHT.js";import"./cornerShape-BMV-HxmE.js";import"./OverflowTooltip-Cm441jpv.js";import"./useListItemSelect-CjOf9PN3.js";import"./SystemIcon-C-9MyzEr.js";import"./Svg-rOw8jW07.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DnG6180h.js";import"./useFocusRedirect-DjYJjijD.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-aeALGU57.js";import"./BaseButton-6gpeVhIx.js";import"./Button-2Oi_8-Fb.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-DakYh1Kw.js";import"./types-DXdjelYI.js";const po={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
