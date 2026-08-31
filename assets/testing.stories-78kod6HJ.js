import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as f}from"./customThemes-DXJqDxhS.js";import"./CanvasProviderDecorator-gSrkEUyP.js";import{S as t,u as b}from"./Select-03c9sAgT.js";import{S}from"./StaticStates-DA20hqGR.js";import{C as h}from"./ComponentStatesTable-Cl7Bbm7N.js";import{p as I}from"./permutateProps-CtMwpv-x.js";import{F as a}from"./FormField-BRQUY4iF.js";import{p as v}from"./px2rem-C0KbprIx.js";import{c as F}from"./cs-CmRirKzJ.js";import{Q as C,R as j,S as n,T as u}from"./CanvasProvider-C8GkxeBT.js";import"./index-D-t2nnqG.js";import"./index-DE-upP0k.js";import"./components-d5Lq2N3r.js";import"./models-CHTjB2ql.js";import"./Combobox-QItIdHhC.js";import"./Menu-DHE2CAff.js";import"./useListItemRegister-DRuomJPi.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-DFpy6Eid.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-gRyGftt9.js";import"./mergeStyles-Bv4mj65-.js";import"./Box-8rtctY3X.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-C1nlk4Q5.js";import"./grid-kt9rUtwL.js";import"./useCloseOnEscape-D0RFoaOv.js";import"./Popper-Cm0FFZPA.js";import"./Card-Cgn41sLF.js";import"./Text-DMwz83mg.js";import"./cornerShape-DnGoKixo.js";import"./OverflowTooltip-C7AH6CXC.js";import"./useListItemSelect-BwZQ88Wp.js";import"./SystemIcon-BcDZsE52.js";import"./Svg-ZtmPf1WS.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-B9CbcNi8.js";import"./useFocusRedirect-ClVmmyIj.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-CeDO4AGg.js";import"./SecondaryButton-edyy8Yyq.js";import"./BaseButton-9fY3LWrU.js";import"./Button-CHFUbppk.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-CMmZv4Ba.js";import"./types-DXdjelYI.js";import"./useComboboxInputConstrained-Dl1pXay7.js";import"./InputGroup-CWsfaIK2.js";import"./x-small-Cfgu7dLY.js";import"./TertiaryButton-CrOm2fp9.js";import"./bundle.esm-C4XAbbi1.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";const ye={title:"Testing/Inputs/Select",component:t,parameters:{chromatic:{disable:!1}}},d=[{id:"E-mail",data:{textValue:"foo"}},{id:"Phone"},{id:"Fax (disabled)",disabled:!0},{id:"Mail"},{id:"Mobile Phone"},{id:"The Ontologically Anthropocentric Sensory Immersive Simulation",disabled:!1}],x=d.filter(r=>r.disabled===!0).map(r=>r.id),i=r=>{const l=b({items:d,nonInteractiveIds:x});return e.jsx(S,{theme:r.theme,children:e.jsx(h,{rowProps:[{label:"Default",props:{}},{label:"Caution",props:{error:"caution"}},{label:"Error",props:{error:"error"}}],columnProps:I({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},o=>!o.disabled||!o.className||o.className==="hover"),children:o=>e.jsxs(a,{children:[e.jsx(a.Label,{children:"Contact"}),e.jsxs(t,{model:l,children:[e.jsx(a.Input,{as:t.Input,...o,id:"contact-select"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{cs:{maxHeight:v(200)},children:l.state.items.length>0&&e.jsx(t.List,{children:s=>e.jsx(t.Item,{"aria-disabled":s.disabled?s.disabled:void 0,children:s.id})})})})]})]})})})},g=F({[u.base]:"purple",[u.accent]:"turquoise",[n.focusOutline]:"turquoise",[n.alertInner]:"coral",[n.errorInner]:"crimson",[j.base]:"aquamarine",[C.base]:"gray"}),m=r=>{const l=b({items:d,nonInteractiveIds:x,initialVisibility:"visible"});return e.jsx("div",{style:{height:400},children:e.jsx(S,{children:e.jsx(h,{rowProps:[{label:"",props:{}}],columnProps:[{label:"Default",props:{}},{label:"Caution",props:{error:"caution"}},{label:"Error",props:{error:"error"}}],children:o=>e.jsxs(a,{children:[e.jsx(a.Label,{children:"Contact"}),e.jsxs(t,{model:l,children:[e.jsx(a.Input,{as:t.Input,...o,id:"contact-select"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{cs:{maxHeight:v(200)},className:r.className,children:!!l.state.items.length&&e.jsx(t.List,{children:s=>e.jsx(t.Item,{"aria-disabled":s.disabled?s.disabled:void 0,children:s.id})})})})]})]})})})})},c={render:()=>e.jsx(i,{theme:{canvas:f}})},p={render:()=>e.jsx(m,{className:g})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(props: {
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
}`,...p.parameters?.docs?.source}}};const De=["SelectStates","SelectOpenMenuStates","SelectThemedStates","SelectOpenMenuThemedStates"];export{m as SelectOpenMenuStates,p as SelectOpenMenuThemedStates,i as SelectStates,c as SelectThemedStates,De as __namedExportsOrder,ye as default};
