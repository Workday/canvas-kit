import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-SP0xMd9U.js";import{S as n}from"./StaticStates-yYC-il65.js";import{C as l}from"./ComponentStatesTable-C27aY8YY.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-B2Q2g_kO.js";import"./useListItemRovingFocus-DV_jor0K.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-CWvR7y0-.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-BmFbxqTK.js";import"./Menu-D31M8F2f.js";import"./getTransformFromPlacement-mFHZLDM3.js";import"./CanvasProvider-CnwanEes.js";import"./index-C_4iH04t.js";import"./index-CFEs8r9D.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-jA6eKExB.js";import"./mergeStyles-Cj6q-U5f.js";import"./Box-Dk0W8wtP.js";import"./index-DX07rvw8.js";import"./flex-3jl45ffO.js";import"./grid-Ch81PKOz.js";import"./useCloseOnEscape-BoOh5Dla.js";import"./Popper-CkxhCgtJ.js";import"./Card-D23lSHWe.js";import"./Text-BLlhCS-c.js";import"./cornerShape-CbzTqdgH.js";import"./OverflowTooltip-BDjV_6T0.js";import"./useListItemSelect-DQ743t_N.js";import"./SystemIcon-DxdGt8lR.js";import"./Svg-P4I-l01h.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DJjyGDVU.js";import"./useFocusRedirect-DZsVo1k6.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-ENoIoFrq.js";import"./BaseButton-B2qpNNxq.js";import"./Button-oKB08GyB.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-DWXGfW5o.js";import"./types-DXdjelYI.js";const po={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
