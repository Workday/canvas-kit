import{j as a}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as i}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-fTgaRE_v.js";import{C as r}from"./Checkbox-CgsR3_8b.js";import{S as n}from"./StaticStates-kDyV_ZDH.js";import{C as v}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as u}from"./permutateProps-CtMwpv-x.js";import{b as c}from"./cs-DvbI9OYs.js";import{s as p,p as m,c as b}from"./index-CYsyLHR7.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-CbBD4ERB.js";import"./components-XIe_upcR.js";import"./check-small-CEmhQ7AS.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./LabelText-C6m3rArm.js";import"./Text-8N36XMNq.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./types-DXdjelYI.js";import"./useUniqueId-DC-hMIDg.js";import"./styled-BsZD6Etj.js";const M={title:"Testing/Inputs/Checkbox",component:r,parameters:{chromatic:{disable:!1}}},l=()=>a.jsx(n,{children:a.jsx(v,{rowProps:u({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}],indeterminate:[{value:!0,label:"Indeterminate"},{value:!1,label:""}],error:[{value:void 0,label:""},{value:r.ErrorType.Caution,label:"Caution"},{value:r.ErrorType.Error,label:"Error"}]},e=>!(e.indeterminate&&!e.checked)),columnProps:u({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>a.jsx(r,{...e,onChange:()=>{},label:"Checkbox"})})}),o=()=>a.jsx(n,{children:a.jsx(v,{rowProps:u({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}],indeterminate:[{value:!0,label:"Indeterminate"},{value:!1,label:""}],error:[{value:void 0,label:""},{value:r.ErrorType.Caution,label:"Caution"},{value:r.ErrorType.Error,label:"Error"}]},e=>!(e.indeterminate&&!e.checked)),columnProps:u({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>a.jsx("div",{style:{backgroundColor:c(b.surface.contrast.default),padding:c(m.sm),borderRadius:c(p.sm)},children:a.jsx(r,{...e,onChange:()=>{},variant:"inverse",label:"Checkbox"})})})}),t=()=>a.jsx(l,{});t.parameters={canvasProviderDecorator:{theme:i}};const s=()=>a.jsx(o,{});s.parameters={canvasProviderDecorator:{theme:i}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    checked: [{
      value: true,
      label: 'Checked'
    }, {
      value: false,
      label: 'Unchecked'
    }],
    indeterminate: [{
      value: true,
      label: 'Indeterminate'
    }, {
      value: false,
      label: ''
    }],
    error: [{
      value: undefined,
      label: ''
    }, {
      value: Checkbox.ErrorType.Caution,
      label: 'Caution'
    }, {
      value: Checkbox.ErrorType.Error,
      label: 'Error'
    }]
  }, props => {
    if (props.indeterminate && !props.checked) {
      return false;
    }
    return true;
  })} columnProps={permutateProps({
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
    if (props.disabled && !['', 'hover'].includes(props.className)) {
      return false;
    }
    return true;
  })}>
      {props => <Checkbox {...props} onChange={() => {}} // eslint-disable-line no-empty-function
    label="Checkbox" />}
    </ComponentStatesTable>
  </StaticStates>`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    checked: [{
      value: true,
      label: 'Checked'
    }, {
      value: false,
      label: 'Unchecked'
    }],
    indeterminate: [{
      value: true,
      label: 'Indeterminate'
    }, {
      value: false,
      label: ''
    }],
    error: [{
      value: undefined,
      label: ''
    }, {
      value: Checkbox.ErrorType.Caution,
      label: 'Caution'
    }, {
      value: Checkbox.ErrorType.Error,
      label: 'Error'
    }]
  }, props => {
    if (props.indeterminate && !props.checked) {
      return false;
    }
    return true;
  })} columnProps={permutateProps({
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
    if (props.disabled && !['', 'hover'].includes(props.className)) {
      return false;
    }
    return true;
  })}>
      {props => <div style={{
      backgroundColor: cssVar(system.color.surface.contrast.default),
      padding: cssVar(system.padding.sm),
      borderRadius: cssVar(system.shape.sm)
    }}>
          <Checkbox {...props} onChange={() => {}} // eslint-disable-line no-empty-function
      variant="inverse" label="Checkbox" />
        </div>}
    </ComponentStatesTable>
  </StaticStates>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => <CheckboxStates />",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => <InverseCheckboxStates />",...s.parameters?.docs?.source}}};const Q=["CheckboxStates","InverseCheckboxStates","CheckboxThemedStates","InverseCheckboxThemedStates"];export{l as CheckboxStates,t as CheckboxThemedStates,o as InverseCheckboxStates,s as InverseCheckboxThemedStates,Q as __namedExportsOrder,M as default};
