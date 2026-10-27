import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-Fj-_QEKV.js";import{S as n}from"./StaticStates-Bw0dTjjT.js";import{C as l}from"./ComponentStatesTable-CvtZcMqf.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-HCdlB-Cn.js";import"./useListItemRovingFocus-Dv8Dsd6e.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-hoJ7ZOOD.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-GjHQDItI.js";import"./Menu-DCyhNDN-.js";import"./getTransformFromPlacement-Ckea_qfD.js";import"./CanvasProvider-7wBX3WBC.js";import"./index-C_4iH04t.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-BYUo1exC.js";import"./mergeStyles-BOTYd98H.js";import"./Box-NtgckSi6.js";import"./index-DX07rvw8.js";import"./flex-Iimm9537.js";import"./grid-DE-Ok6Ac.js";import"./useCloseOnEscape-Dt5uIv7J.js";import"./Popper-BORLx1pc.js";import"./Card-6Upq_3u-.js";import"./Text-CUdPBNk6.js";import"./cornerShape-CYdiETtT.js";import"./OverflowTooltip-DawyYxpX.js";import"./useListItemSelect-DCdfEE1M.js";import"./SystemIcon-CDokv1Eo.js";import"./Svg-C05gFzlU.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-CaCCacmv.js";import"./useFocusRedirect-6vTTAhV8.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-DL6NX6-s.js";import"./BaseButton-DTTEiDSJ.js";import"./Button-t_PogMNe.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-BhZZLsCb.js";import"./types-DXdjelYI.js";const po={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
