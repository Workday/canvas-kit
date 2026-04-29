import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as x}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-fTgaRE_v.js";import{S as t,u as b}from"./Select-CqVW1uBL.js";import{S}from"./StaticStates-kDyV_ZDH.js";import{C as h}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as f}from"./permutateProps-CtMwpv-x.js";import{F as a}from"./FormField-U6jJIaHC.js";import{c as I}from"./cs-DvbI9OYs.js";import{n as F,s as C,c as n,p as u}from"./CanvasProvider-CbBD4ERB.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-DKOKnxgv.js";import"./index-CYsyLHR7.js";import"./components-XIe_upcR.js";import"./models-CHTjB2ql.js";import"./Combobox-DEtPx4Qe.js";import"./Menu-Blawm5fT.js";import"./useListItemSelect-D10U8d3g.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-p8F4NfJ4.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./index-CdbxS-xI.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./Card-ywil38vv.js";import"./Text-8N36XMNq.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-B7jd-TXK.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-ETf1Gakg.js";import"./useReturnFocus-BgzhEoBI.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-B7GfDsu7.js";import"./SecondaryButton-oNuQLwcg.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./Button-Cp7fe3Zs.js";import"./chevron-right-small-CQ6vqfU4.js";import"./TextInput-nG1V2_dd.js";import"./types-DXdjelYI.js";import"./useComboboxInputConstrained-iwGBfquV.js";import"./InputGroup-CU4KDhG1.js";import"./x-small-BxvQm8EX.js";import"./TertiaryButton-DaDaXMfE.js";import"./bundle.esm-C4XAbbi1.js";import"./caret-down-small-CQgB4GlK.js";const Me={title:"Testing/Inputs/Select",component:t,parameters:{chromatic:{disable:!1}}},d=[{id:"E-mail",data:{textValue:"foo"}},{id:"Phone"},{id:"Fax (disabled)",disabled:!0},{id:"Mail"},{id:"Mobile Phone"},{id:"The Ontologically Anthropocentric Sensory Immersive Simulation",disabled:!1}],v=d.filter(r=>r.disabled===!0).map(r=>r.id),i=r=>{const l=b({items:d,nonInteractiveIds:v});return e.jsx(S,{theme:r.theme,children:e.jsx(h,{rowProps:[{label:"Default",props:{}},{label:"Caution",props:{error:"caution"}},{label:"Error",props:{error:"error"}}],columnProps:f({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},o=>!o.disabled||!o.className||o.className==="hover"),children:o=>e.jsxs(a,{children:[e.jsx(a.Label,{children:"Contact"}),e.jsxs(t,{model:l,children:[e.jsx(a.Input,{as:t.Input,...o,id:"contact-select"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{maxHeight:"200px",children:l.state.items.length>0&&e.jsx(t.List,{children:s=>e.jsx(t.Item,{"aria-disabled":s.disabled?s.disabled:void 0,children:s.id})})})})]})]})})})},j=I({[u.base]:"purple",[u.accent]:"turquoise",[n.focusOutline]:"turquoise",[n.alertInner]:"coral",[n.errorInner]:"crimson",[C.base]:"aquamarine",[F.base]:"gray"}),m=r=>{const l=b({items:d,nonInteractiveIds:v,initialVisibility:"visible"});return e.jsx("div",{style:{height:400},children:e.jsx(S,{children:e.jsx(h,{rowProps:[{label:"",props:{}}],columnProps:[{label:"Default",props:{}},{label:"Caution",props:{error:"caution"}},{label:"Error",props:{error:"error"}}],children:o=>e.jsxs(a,{children:[e.jsx(a.Label,{children:"Contact"}),e.jsxs(t,{model:l,children:[e.jsx(a.Input,{as:t.Input,...o,id:"contact-select"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{maxHeight:"200px",className:r.className,children:!!l.state.items.length&&e.jsx(t.List,{children:s=>e.jsx(t.Item,{"aria-disabled":s.disabled?s.disabled:void 0,children:s.id})})})})]})]})})})})},p={render:()=>e.jsx(i,{theme:{canvas:x}})},c={render:()=>e.jsx(m,{className:j})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(props: {
  theme?: PartialEmotionCanvasTheme;
}) => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems
  });
  return <StaticStates theme={props.theme}>
      <ComponentStatesTable rowProps={[{
      label: 'Default',
      props: {}
    }, {
      label: 'Caution',
      props: {
        error: 'caution'
      }
    }, {
      label: 'Error',
      props: {
        error: 'error'
      }
    }]} columnProps={permutateProps({
      className: [{
        label: 'Default',
        value: ''
      }, {
        label: 'Hover',
        value: 'hover'
      }, {
        label: 'Focus',
        value: 'focus'
      }, {
        label: 'Focus Hover',
        value: 'focus hover'
      }, {
        label: 'Active',
        value: 'active'
      }, {
        label: 'Active Hover',
        value: 'active hover'
      }],
      disabled: [{
        label: '',
        value: false
      }, {
        label: 'Disabled',
        value: true
      }]
    }, props => {
      return !props.disabled || !props.className || props.className === 'hover';
    })}>
        {props => <FormField>
            <FormField.Label>Contact</FormField.Label>
            <Select model={model}>
              <FormField.Input as={Select.Input} {...props} id="contact-select" />
              <Select.Popper>
                <Select.Card maxHeight="200px">
                  {model.state.items.length > 0 && <Select.List>
                      {item => {
                  return <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                            {item.id}
                          </Select.Item>;
                }}
                    </Select.List>}
                </Select.Card>
              </Select.Popper>
            </Select>
          </FormField>}
      </ComponentStatesTable>
    </StaticStates>;
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(selectProps: {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
}) => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems,
    initialVisibility: 'visible'
  });
  return <div style={{
    height: 400
  }}>
      <StaticStates>
        <ComponentStatesTable rowProps={[{
        label: '',
        props: {}
      }]} columnProps={[{
        label: 'Default',
        props: {}
      }, {
        label: 'Caution',
        props: {
          error: 'caution'
        }
      }, {
        label: 'Error',
        props: {
          error: 'error'
        }
      }]}>
          {props => <FormField>
              <FormField.Label>Contact</FormField.Label>
              <Select model={model}>
                <FormField.Input as={Select.Input} {...props} id="contact-select" />
                <Select.Popper>
                  {/* We are only adding the custom theme via class name for testing purposes. Custom themes should be set on the :root element in CSS using CSS variables */}
                  <Select.Card maxHeight="200px" className={selectProps.className}>
                    {!!model.state.items.length && <Select.List>
                        {item => {
                    return <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                              {item.id}
                            </Select.Item>;
                  }}
                      </Select.List>}
                  </Select.Card>
                </Select.Popper>
              </Select>
            </FormField>}
        </ComponentStatesTable>
      </StaticStates>
    </div>;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SelectStates theme={{
    canvas: customColorTheme
  }} />
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SelectOpenMenuStates className={customTheme} />
}`,...c.parameters?.docs?.source}}};const ye=["SelectStates","SelectOpenMenuStates","SelectThemedStates","SelectOpenMenuThemedStates"];export{m as SelectOpenMenuStates,c as SelectOpenMenuThemedStates,i as SelectStates,p as SelectThemedStates,ye as __namedExportsOrder,Me as default};
