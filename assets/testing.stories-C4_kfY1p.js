import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as f}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-Bjx6ykfs.js";import{S as t,u as b}from"./Select-DRO13TKI.js";import{S}from"./StaticStates-c784X510.js";import{C as h}from"./ComponentStatesTable-B-CByvzT.js";import{p as I}from"./permutateProps-CtMwpv-x.js";import{F as a}from"./FormField-BFfTRNZ_.js";import{p as v}from"./px2rem-C0KbprIx.js";import{c as F}from"./cs-rfTTo7Bg.js";import{n as C,s as j,c as n,p as u}from"./CanvasProvider-Bo6bulY0.js";import"./index-5dfzm_kn.js";import"./components-TQGor17P.js";import"./models-CHTjB2ql.js";import"./Combobox-aZJ9P9-x.js";import"./Menu-DIzcINvf.js";import"./useListItemSelect-ChUTjGFj.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-o9IX8o6j.js";import"./mergeStyles-Oiw5aw0F.js";import"./Box-ndVNvIIr.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./flex-Kr2CKVQw.js";import"./grid-Dow_xxo7.js";import"./useCloseOnEscape-CKxDZdmA.js";import"./Popper-uJmtTCtl.js";import"./Card-7nQmsgck.js";import"./Text-CjfRv3b_.js";import"./OverflowTooltip-BiM1Eefj.js";import"./SystemIcon-B-7phfvA.js";import"./Svg-D3ADUsbH.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-vdWyGSd2.js";import"./useReturnFocus-Bjuj9tfk.js";import"./check-small-C7Z-gSGs.js";import"./usePopupTarget-d-sc7vzp.js";import"./SecondaryButton-BOjVH68X.js";import"./BaseButton-BL7nFA1x.js";import"./Button-BA8q93Gy.js";import"./chevron-right-small-DxmMaev8.js";import"./TextInput-CbP15KMM.js";import"./types-DXdjelYI.js";import"./useComboboxInputConstrained-CkicpYHX.js";import"./InputGroup-9HduBIbx.js";import"./x-small-DK7gM0f7.js";import"./TertiaryButton-BMNSyiGZ.js";import"./bundle.esm-C4XAbbi1.js";import"./caret-down-small-UmNc4PEr.js";import"./index-5mrAZJYD.js";const Ne={title:"Testing/Inputs/Select",component:t,parameters:{chromatic:{disable:!1}}},d=[{id:"E-mail",data:{textValue:"foo"}},{id:"Phone"},{id:"Fax (disabled)",disabled:!0},{id:"Mail"},{id:"Mobile Phone"},{id:"The Ontologically Anthropocentric Sensory Immersive Simulation",disabled:!1}],x=d.filter(r=>r.disabled===!0).map(r=>r.id),i=r=>{const l=b({items:d,nonInteractiveIds:x});return e.jsx(S,{theme:r.theme,children:e.jsx(h,{rowProps:[{label:"Default",props:{}},{label:"Caution",props:{error:"caution"}},{label:"Error",props:{error:"error"}}],columnProps:I({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},s=>!s.disabled||!s.className||s.className==="hover"),children:s=>e.jsxs(a,{children:[e.jsx(a.Label,{children:"Contact"}),e.jsxs(t,{model:l,children:[e.jsx(a.Input,{as:t.Input,...s,id:"contact-select"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{cs:{maxHeight:v(200)},children:l.state.items.length>0&&e.jsx(t.List,{children:o=>e.jsx(t.Item,{"aria-disabled":o.disabled?o.disabled:void 0,children:o.id})})})})]})]})})})},g=F({[u.base]:"purple",[u.accent]:"turquoise",[n.focusOutline]:"turquoise",[n.alertInner]:"coral",[n.errorInner]:"crimson",[j.base]:"aquamarine",[C.base]:"gray"}),m=r=>{const l=b({items:d,nonInteractiveIds:x,initialVisibility:"visible"});return e.jsx("div",{style:{height:400},children:e.jsx(S,{children:e.jsx(h,{rowProps:[{label:"",props:{}}],columnProps:[{label:"Default",props:{}},{label:"Caution",props:{error:"caution"}},{label:"Error",props:{error:"error"}}],children:s=>e.jsxs(a,{children:[e.jsx(a.Label,{children:"Contact"}),e.jsxs(t,{model:l,children:[e.jsx(a.Input,{as:t.Input,...s,id:"contact-select"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{cs:{maxHeight:v(200)},className:r.className,children:!!l.state.items.length&&e.jsx(t.List,{children:o=>e.jsx(t.Item,{"aria-disabled":o.disabled?o.disabled:void 0,children:o.id})})})})]})]})})})})},c={render:()=>e.jsx(i,{theme:{canvas:f}})},p={render:()=>e.jsx(m,{className:g})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(props: {
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SelectStates theme={{
    canvas: customColorTheme
  }} />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SelectOpenMenuStates className={customTheme} />
}`,...p.parameters?.docs?.source}}};const He=["SelectStates","SelectOpenMenuStates","SelectThemedStates","SelectOpenMenuThemedStates"];export{m as SelectOpenMenuStates,p as SelectOpenMenuThemedStates,i as SelectStates,c as SelectThemedStates,He as __namedExportsOrder,Ne as default};
