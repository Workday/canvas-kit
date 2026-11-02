import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-BiWveBmS.js";import{S as n}from"./StaticStates-D17zGD2m.js";import{C as l}from"./ComponentStatesTable-C41opddR.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-CYP9NeI-.js";import"./useListItemRovingFocus-Clx6HCe_.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-84Mvg-1C.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-C4hhXT-q.js";import"./Menu-CIadn-lh.js";import"./getTransformFromPlacement-CQhU5Ns9.js";import"./CanvasProvider-CF14T0i9.js";import"./index-C_4iH04t.js";import"./index-CFEs8r9D.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-BvHflE-K.js";import"./mergeStyles-CKlw0c7j.js";import"./Box-CnfAPO8a.js";import"./index-DWHOiqdi.js";import"./flex-BQ2dge_k.js";import"./grid-92Zbaa_D.js";import"./useCloseOnEscape-RHSc1xTq.js";import"./Popper-CH8vOlWw.js";import"./Card-CbxxBIYl.js";import"./Text-C3NU_mns.js";import"./cornerShape-VSFpHIfk.js";import"./OverflowTooltip-CHKOyo-U.js";import"./useListItemSelect-BujBeYhE.js";import"./SystemIcon-DH6nxozh.js";import"./Svg-D1dbi2br.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-0FcjaGTk.js";import"./useFocusRedirect-CGBrr3mg.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-d13vBCKw.js";import"./BaseButton-xzvUa-Ri.js";import"./Button-BZ4Q3VL_.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-DYeEz8ba.js";import"./types-DXdjelYI.js";const po={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
