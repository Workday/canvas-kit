import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-Dl4nXGFr.js";import{S as n}from"./StaticStates-C8PNmvhX.js";import{C as l}from"./ComponentStatesTable-BGs2PIsA.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-CSN_KxHX.js";import"./Menu-DZ-Dz4t0.js";import"./useListItemRegister-CGyUiflc.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-C0H7XrZY.js";import"./CanvasProvider-Ce6SqFpo.js";import"./index-jCBjnmNg.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-Bk1NBL5b.js";import"./mergeStyles-CrKfjMZ1.js";import"./Box-DebRNAPR.js";import"./index-Cvke4sRE.js";import"./flex-DSGq5Zo5.js";import"./grid-Db0Kv7HN.js";import"./useCloseOnEscape-CHcRDM8i.js";import"./Popper-BMBM4fBh.js";import"./Card-BlbEtVCh.js";import"./Text-BxYrzwL9.js";import"./cornerShape-BeK2DPVP.js";import"./OverflowTooltip-Dy_iAyJn.js";import"./useListItemSelect-DyiPCdbs.js";import"./SystemIcon-Bprhvld6.js";import"./Svg-Cf-JAqGF.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-nFq-J5O1.js";import"./useFocusRedirect-DKub_36o.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-8XLAjRU5.js";import"./SecondaryButton-CC5NDP49.js";import"./BaseButton-BmnV2apc.js";import"./Button-BmDyQ_0V.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-Ley04CKf.js";import"./types-DXdjelYI.js";const mo={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
