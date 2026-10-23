import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-9fd9fbtc.js";import{S as n}from"./StaticStates-BTf7_c5L.js";import{C as l}from"./ComponentStatesTable-DmhtXaV6.js";import{p as a}from"./px2rem-C0KbprIx.js";import"./components-Dg6r_l6g.js";import"./useListItemRovingFocus-omXicuh4.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-CNN0mL98.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-B4UGit2X.js";import"./Menu-Gyv5iPUB.js";import"./getTransformFromPlacement-BqfTyZs9.js";import"./CanvasProvider-Dlka2NIO.js";import"./index--KWQvxqz.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-DcVSVBYt.js";import"./mergeStyles-DQAIS8xD.js";import"./Box-MKWQ5iJf.js";import"./index-DWHOiqdi.js";import"./flex-l0maHnrZ.js";import"./grid-D9_inQjb.js";import"./useCloseOnEscape-DNAp0b8d.js";import"./Popper-DPlZjLFd.js";import"./Card-DxWkS5DO.js";import"./Text-DhPJPWok.js";import"./cornerShape-BJAVQ3D-.js";import"./OverflowTooltip-3VMgvUdj.js";import"./useListItemSelect-cQcAgf8O.js";import"./SystemIcon-HqVC_1La.js";import"./Svg-DpRbd5ao.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-BF5s776m.js";import"./useFocusRedirect-BkTwukrZ.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-Czy1ozWJ.js";import"./BaseButton-B4zfOmRB.js";import"./Button-UegFhBzX.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-DvgP4PT9.js";import"./types-DXdjelYI.js";const po={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{cs:{maxHeight:a(200)},children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
