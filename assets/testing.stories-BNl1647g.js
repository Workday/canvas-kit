import{j as o}from"./jsx-runtime-Bu6AqWCO.js";import{e as s}from"./index-IfJi-UCQ.js";import{C as t,u as p}from"./Combobox-CrzrEyr3.js";import{S as n}from"./StaticStates-DCoU3VgY.js";import{C as l}from"./ComponentStatesTable-jhhL0fUQ.js";import"./components-1G01j-He.js";import"./Menu-CIvTapno.js";import"./useListItemSelect-DuQmMHZs.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./cs-DvbI9OYs.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-C6jxCkQj.js";import"./mergeStyles-BK8Hz87n.js";import"./Box-DFceh3YA.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-C5MVqyzH.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./index-CYsyLHR7.js";import"./useCloseOnEscape-BOBxCx8K.js";import"./Popper-CvC-z2TH.js";import"./CanvasProvider-BJ-OMKNq.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Card-CEyROzcv.js";import"./Text-DRUbleCp.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-hamrGFdg.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-Beo767rE.js";import"./useReturnFocus-BsryDfnL.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-C0UKjDnR.js";import"./SecondaryButton-CMLUii7y.js";import"./BaseButton-BY16VLV0.js";import"./styled-BsZD6Etj.js";import"./Button-BQ1TZXwZ.js";import"./chevron-right-small-CQ6vqfU4.js";import"./TextInput-CdyX2CFM.js";import"./types-DXdjelYI.js";const mo={title:"Testing/Combobox",component:t,parameters:{chromatic:{disable:!1}}},i={render:()=>o.jsxs(n,{children:[o.jsx(l,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Closed",props:{visibility:"hidden"}},{label:"Opened",props:{visibility:"visible"}}],children:({visibility:r,...m})=>{const e=p({initialVisibility:r});return s.useLayoutEffect(()=>{r==="visible"&&e.events.setWidth(e.state.inputRef.current.getBoundingClientRect().width)},[r,e.events,e.state.inputRef]),o.jsxs(t,{model:e,...m,children:[o.jsx(t.Input,{}),o.jsx(t.Menu.Popper,{children:o.jsx(t.Menu.Card,{children:o.jsxs(t.Menu.List,{maxHeight:200,children:[o.jsx(t.Menu.Item,{className:"focus",children:"Option 1"}),o.jsx(t.Menu.Item,{children:"Option 2"}),o.jsx(t.Menu.Item,{children:"Option 3"})]})})})]})}}),o.jsx("div",{style:{height:110}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
                    <Combobox.Menu.List maxHeight={200}>
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
