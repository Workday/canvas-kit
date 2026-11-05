import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-BpwuQlid.js";import{S as n}from"./StaticStates-BfBNgUa6.js";import{C as l}from"./ComponentStatesTable-pYvRIQc0.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-BZZbendq.js";import"./useListItemRovingFocus-B-Rv_2Gj.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-C3SogmsT.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-D7LypT8H.js";import"./Menu-BmGbD5Rc.js";import"./getTransformFromPlacement-C8z0KlTw.js";import"./CanvasProvider-wRa9Af4a.js";import"./index-C_4iH04t.js";import"./index-CFEs8r9D.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-ggS7GWRg.js";import"./mergeStyles-BrOzO49v.js";import"./Box-DNrttudE.js";import"./index-BR_jJr7N.js";import"./flex-DLEP31EQ.js";import"./grid-DWoMPrqj.js";import"./useCloseOnEscape-BTQA5nou.js";import"./Popper-BGpHDNvg.js";import"./Card-CE7R42ky.js";import"./Text-B-az9lgp.js";import"./cornerShape-CpTbNqpe.js";import"./OverflowTooltip-CDNsrqTs.js";import"./useListItemSelect-BhYGOYL5.js";import"./SystemIcon-D383ry7W.js";import"./Svg-YYj-hmuy.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DN6tr14e.js";import"./useFocusRedirect-Drl4v-g8.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-DTfVcNph.js";import"./BaseButton-qatokQZh.js";import"./Button-Bb-9X2_s.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-tfKmqQGS.js";import"./types-DXdjelYI.js";const po={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
