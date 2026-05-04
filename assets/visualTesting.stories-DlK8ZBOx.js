import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as n}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-jq6x80yC.js";import{S as o}from"./Switch-BvCkitSr.js";import{S as s}from"./StaticStates-CZoSR_67.js";import{C as i}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as l}from"./permutateProps-CtMwpv-x.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-0Y3auRRO.js";import"./index-CYsyLHR7.js";import"./components-DlilqqSw.js";import"./types-DXdjelYI.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./mergeStyles-DCTLot6K.js";import"./Box-CfIP0C5s.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./index-C5MVqyzH.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./styled-BsZD6Etj.js";const _={title:"Testing/Inputs/Switch",component:o,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(s,{children:t.jsx(i,{rowProps:l({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}],error:[{value:void 0,label:""},{value:o.ErrorType.Caution,label:"Caution"},{value:o.ErrorType.Error,label:"Error"}]},e=>!(e.indeterminate&&!e.checked)),columnProps:l({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>t.jsx(o,{...e,onChange:()=>{}})})}),a=()=>t.jsx(r,{});a.parameters={canvasProviderDecorator:{theme:n}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
  </StaticStates>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => <SwitchStates />",...a.parameters?.docs?.source}}};const U=["SwitchStates","SwitchThemedStates"];export{r as SwitchStates,a as SwitchThemedStates,U as __namedExportsOrder,_ as default};
