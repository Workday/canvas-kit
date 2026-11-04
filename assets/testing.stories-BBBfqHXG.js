import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as I}from"./customThemes-8Fak35Nf.js";import"./CanvasProviderDecorator-qC_oKTX0.js";import{S as t,u as h}from"./Select-DmwEUUoZ.js";import{S}from"./StaticStates-C8DrAvRn.js";import{C as v}from"./ComponentStatesTable-BafBIi3i.js";import{p as j}from"./permutateProps-CtMwpv-x.js";import{F as o}from"./FormField-C5YWPfYH.js";import{p as x}from"./px2rem-C0KbprIx.js";import{c as C}from"./cs-CmRirKzJ.js";import{e as F,s as g,f as u,p as b}from"./CanvasProvider-Dnko5pWu.js";import"./index-CFEs8r9D.js";import"./index-C_4iH04t.js";import"./components-DCItJ-57.js";import"./models-CHTjB2ql.js";import"./Combobox-KgPMrYMo.js";import"./useListItemRovingFocus-CW46QKVb.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-w3E4ep_H.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-jky9btN4.js";import"./Menu-CBOS8109.js";import"./getTransformFromPlacement-DWu89T0w.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-CjiyxThm.js";import"./mergeStyles-E9t8hjrR.js";import"./Box-D518UAm3.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-cfI4MPjQ.js";import"./grid-TWixonIH.js";import"./useCloseOnEscape-DK1Cy6Iq.js";import"./Popper-DUF1Kp74.js";import"./Card-ByAQY3LD.js";import"./Text-DhpzTlUe.js";import"./cornerShape-Bga0WpCo.js";import"./OverflowTooltip-D-8cP6dM.js";import"./useListItemSelect-DQHGk0nr.js";import"./SystemIcon-RDlgSLBH.js";import"./Svg-le8e_fDo.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-D33KQN5J.js";import"./useFocusRedirect-kodxjr1P.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-tUb2aihZ.js";import"./BaseButton-BUBjJ90g.js";import"./Button-BrcaYg04.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-CjPZ93U2.js";import"./types-DXdjelYI.js";import"./useComboboxInputConstrained-D4fGq0-Q.js";import"./InputGroup-D4J7V-Nz.js";import"./x-small-Cfgu7dLY.js";import"./TertiaryButton-DcVZPi3F.js";import"./bundle.esm-C4XAbbi1.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";const Oe={title:"Testing/Inputs/Select",component:t,parameters:{chromatic:{disable:!1}}},d=[{id:"E-mail",data:{textValue:"foo"}},{id:"Phone"},{id:"Fax (disabled)",disabled:!0},{id:"Mail"},{id:"Mobile Phone"},{id:"The Ontologically Anthropocentric Sensory Immersive Simulation",disabled:!1}],f=d.filter(r=>r.disabled===!0).map(r=>r.id),i=r=>{const l=h({items:d,nonInteractiveIds:f});return e.jsx(S,{theme:r.theme,children:e.jsx(v,{rowProps:[{label:"Default",props:{}},{label:"Caution",props:{error:"caution"}},{label:"Error",props:{error:"error"}}],columnProps:j({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},s=>!s.disabled||!s.className||s.className==="hover"),children:s=>e.jsxs(o,{children:[e.jsx(o.Label,{children:"Contact"}),e.jsxs(t,{model:l,children:[e.jsx(o.Input,{as:t.Input,...s,id:"contact-select"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{cs:{maxHeight:x(200)},children:l.state.items.length>0&&e.jsx(t.List,{children:a=>e.jsx(t.Item,{"aria-disabled":a.disabled?a.disabled:void 0,children:a.id})})})})]})]})})})},c=()=>e.jsx(S,{children:e.jsx(t,{items:d,children:e.jsx(t.Input,{disabled:!0,"aria-label":"Contact"})})}),P=C({[b.base]:"purple",[b.accent]:"turquoise",[u.focusOutline]:"turquoise",[u.alertInner]:"coral",[u.errorInner]:"crimson",[g.base]:"aquamarine",[F.base]:"gray"}),m=r=>{const l=h({items:d,nonInteractiveIds:f,initialVisibility:"visible"});return e.jsx("div",{style:{height:400},children:e.jsx(S,{children:e.jsx(v,{rowProps:[{label:"",props:{}}],columnProps:[{label:"Default",props:{}},{label:"Caution",props:{error:"caution"}},{label:"Error",props:{error:"error"}}],children:s=>e.jsxs(o,{children:[e.jsx(o.Label,{children:"Contact"}),e.jsxs(t,{model:l,children:[e.jsx(o.Input,{as:t.Input,...s,id:"contact-select"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{cs:{maxHeight:x(200)},className:r.className,children:!!l.state.items.length&&e.jsx(t.List,{children:a=>e.jsx(t.Item,{"aria-disabled":a.disabled?a.disabled:void 0,children:a.id})})})})]})]})})})})},p={render:()=>e.jsx(i,{theme:{canvas:I}})},n={render:()=>e.jsx(m,{className:P})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(props: {
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
                <Select.Card cs={{
              maxHeight: px2rem(200)
            }}>
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <Select items={options}>
      <Select.Input disabled aria-label="Contact" />
    </Select>
  </StaticStates>`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(selectProps: {
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
                  <Select.Card cs={{
                maxHeight: px2rem(200)
              }} className={selectProps.className}>
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
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SelectOpenMenuStates className={customTheme} />
}`,...n.parameters?.docs?.source}}};const Ae=["SelectStates","StandaloneDisabledSelect","SelectOpenMenuStates","SelectThemedStates","SelectOpenMenuThemedStates"];export{m as SelectOpenMenuStates,n as SelectOpenMenuThemedStates,i as SelectStates,p as SelectThemedStates,c as StandaloneDisabledSelect,Ae as __namedExportsOrder,Oe as default};
