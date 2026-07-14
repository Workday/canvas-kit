import{j as l}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as n}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-DtF0hq1d.js";import{T as t}from"./TextArea-95WJRCPL.js";import{S as s}from"./StaticStates-MSWr8SnM.js";import{C as u}from"./ComponentStatesTable-CFexaReD.js";import{p as o}from"./permutateProps-CtMwpv-x.js";import"./CanvasProvider-DKylCnBg.js";import"./index-5dfzm_kn.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-B2vXpe_3.js";import"./TextInput-CGpXr3az.js";import"./types-DXdjelYI.js";import"./components-Dyf4Q_nV.js";import"./mergeStyles-DA3z7m0v.js";import"./Box-Dji2xsFp.js";import"./index-N3xz2Kqy.js";import"./useConstant-CUZppmaV.js";import"./flex-CoK9Wr5Y.js";import"./grid-BEk7oOv6.js";import"./px2rem-C0KbprIx.js";const F={title:"Testing/Inputs/Text Area",component:t,parameters:{chromatic:{disable:!1}}},a=()=>l.jsx(s,{children:l.jsx(u,{rowProps:o({value:[{value:"Input value",label:"With Value"},{value:"",label:"No Value"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:t.ErrorType.Caution,label:"Caution"},{value:t.ErrorType.Error,label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:o({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>l.jsx(t,{...e,style:{minWidth:60,width:100},onChange:()=>{}})})}),r=()=>l.jsx(a,{});r.parameters={canvasProviderDecorator:{theme:n}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    value: [{
      value: 'Input value',
      label: 'With Value'
    }, {
      value: '',
      label: 'No Value'
    }],
    placeholder: [{
      value: 'Placeholder',
      label: 'Placeholder'
    }],
    error: [{
      value: undefined,
      label: ''
    }, {
      value: TextArea.ErrorType.Caution,
      label: 'Caution'
    }, {
      value: TextArea.ErrorType.Error,
      label: 'Error'
    }]
  }, props => {
    if (props.value === '' && !props.placeholder) {
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
      {props => <TextArea {...props} style={{
      minWidth: 60,
      width: 100
    }} onChange={() => {}} // eslint-disable-line no-empty-function
    />}
    </ComponentStatesTable>
  </StaticStates>`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => <TextAreaStates />",...r.parameters?.docs?.source}}};const V=["TextAreaStates","TextAreaThemedStates"];export{a as TextAreaStates,r as TextAreaThemedStates,V as __namedExportsOrder,F as default};
