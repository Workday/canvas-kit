import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-Cv7-h7dt.js";import{S as n}from"./StaticStates-DkF3QLuR.js";import{C as l}from"./ComponentStatesTable-846vHFyq.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-CyZuQxpO.js";import"./Menu-CSlla02l.js";import"./useListItemRegister-BJAb2Ovp.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-0qQtHERt.js";import"./CanvasProvider-Bqk713r3.js";import"./index-jCBjnmNg.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-DN37OKCw.js";import"./mergeStyles-aso8A0iZ.js";import"./Box-CwXb8fLy.js";import"./index-DX07rvw8.js";import"./flex-BIdFUmPB.js";import"./grid-D3lEMqUx.js";import"./useCloseOnEscape-DyvvklAr.js";import"./Popper-C66rtqtU.js";import"./Card-CoXliinI.js";import"./Text-DKU2C7b1.js";import"./cornerShape-yNJyCN49.js";import"./OverflowTooltip-CVI4hM79.js";import"./useListItemSelect-qe93IIGJ.js";import"./SystemIcon-BIB-oP8f.js";import"./Svg-DLcqTVF1.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-D0HWm8uP.js";import"./useFocusRedirect-By4wnPeH.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-CQC5ukAW.js";import"./SecondaryButton-A4fXFx92.js";import"./BaseButton-CrTTH5H6.js";import"./Button-DO73SKPJ.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-DclCrAl0.js";import"./types-DXdjelYI.js";const mo={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const so=["ComboboxStates"];export{i as ComboboxStates,so as __namedExportsOrder,mo as default};
