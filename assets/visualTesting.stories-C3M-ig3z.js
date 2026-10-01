import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as n}from"./customThemes-CaLW-K4s.js";import"./CanvasProviderDecorator-DdrjHcea.js";import{S as o}from"./Switch-C0cHllLj.js";import{S as s}from"./StaticStates-BluYrmIg.js";import{C as i}from"./ComponentStatesTable-BaXDsJEa.js";import{p as l}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-DGWqlLHc.js";import"./index-jCBjnmNg.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./components-DTthHGKT.js";import"./types-DXdjelYI.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./mergeStyles-DKqoPbSL.js";import"./Box-B-CSScYU.js";import"./index-DsKuT9Xg.js";import"./flex-Db6l7LhR.js";import"./grid-BuNt6bVu.js";const A={title:"Testing/Inputs/Switch",component:o,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(s,{children:t.jsx(i,{rowProps:l({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}],error:[{value:void 0,label:""},{value:o.ErrorType.Caution,label:"Caution"},{value:o.ErrorType.Error,label:"Error"}]},e=>!(e.indeterminate&&!e.checked)),columnProps:l({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>t.jsx(o,{...e,onChange:()=>{}})})}),a=()=>t.jsx(r,{});a.parameters={canvasProviderDecorator:{theme:n}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    checked: [{
      value: true,
      label: 'Checked'
    }, {
      value: false,
      label: 'Unchecked'
    }],
    error: [{
      value: undefined,
      label: ''
    }, {
      value: Switch.ErrorType.Caution,
      label: 'Caution'
    }, {
      value: Switch.ErrorType.Error,
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
      {props => <Switch {...props} onChange={() => {}} // eslint-disable-line no-empty-function
    />}
    </ComponentStatesTable>
  </StaticStates>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => <SwitchStates />",...a.parameters?.docs?.source}}};const F=["SwitchStates","SwitchThemedStates"];export{r as SwitchStates,a as SwitchThemedStates,F as __namedExportsOrder,A as default};
