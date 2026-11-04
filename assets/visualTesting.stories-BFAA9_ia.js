import{j as a}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as i}from"./customThemes-8Fak35Nf.js";import"./CanvasProviderDecorator-qC_oKTX0.js";import{C as r}from"./Checkbox-BKu7O7Oi.js";import{S as n}from"./StaticStates-C8DrAvRn.js";import{C as v}from"./ComponentStatesTable-BafBIi3i.js";import{p as u}from"./permutateProps-CtMwpv-x.js";import{b as c}from"./cs-CmRirKzJ.js";import{s as p,p as m,c as b}from"./index-C_4iH04t.js";import"./index-CFEs8r9D.js";import"./CanvasProvider-Dnko5pWu.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./components-DCItJ-57.js";import"./cornerShape-Bga0WpCo.js";import"./check-small-BqSDQIle.js";import"./types-wqmYQQWa.js";import"./SystemIcon-RDlgSLBH.js";import"./Svg-le8e_fDo.js";import"./px2rem-C0KbprIx.js";import"./TypeLevelComponents-DChd0Jv5.js";import"./Text-DhpzTlUe.js";import"./mergeStyles-E9t8hjrR.js";import"./Box-D518UAm3.js";import"./index-DX07rvw8.js";import"./useConstant-B_SD0x5s.js";import"./flex-cfI4MPjQ.js";import"./grid-TWixonIH.js";import"./types-DXdjelYI.js";import"./useUniqueId-BoA5684E.js";const K={title:"Testing/Inputs/Checkbox",component:r,parameters:{chromatic:{disable:!1}}},l=()=>a.jsx(n,{children:a.jsx(v,{rowProps:u({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}],indeterminate:[{value:!0,label:"Indeterminate"},{value:!1,label:""}],error:[{value:void 0,label:""},{value:r.ErrorType.Caution,label:"Caution"},{value:r.ErrorType.Error,label:"Error"}]},e=>!(e.indeterminate&&!e.checked)),columnProps:u({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>a.jsx(r,{...e,onChange:()=>{},label:"Checkbox"})})}),o=()=>a.jsx(n,{children:a.jsx(v,{rowProps:u({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}],indeterminate:[{value:!0,label:"Indeterminate"},{value:!1,label:""}],error:[{value:void 0,label:""},{value:r.ErrorType.Caution,label:"Caution"},{value:r.ErrorType.Error,label:"Error"}]},e=>!(e.indeterminate&&!e.checked)),columnProps:u({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>a.jsx("div",{style:{backgroundColor:c(b.surface.contrast.default),padding:c(m.sm),borderRadius:c(p.sm)},children:a.jsx(r,{...e,onChange:()=>{},variant:"inverse",label:"Checkbox"})})})}),t=()=>a.jsx(l,{});t.parameters={canvasProviderDecorator:{theme:i}};const s=()=>a.jsx(o,{});s.parameters={canvasProviderDecorator:{theme:i}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
  </StaticStates>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => <CheckboxStates />",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => <InverseCheckboxStates />",...s.parameters?.docs?.source}}};const L=["CheckboxStates","InverseCheckboxStates","CheckboxThemedStates","InverseCheckboxThemedStates"];export{l as CheckboxStates,t as CheckboxThemedStates,o as InverseCheckboxStates,s as InverseCheckboxThemedStates,L as __namedExportsOrder,K as default};
