import{j as l}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{t as s,a as u}from"./customThemes-BqiIfXDy.js";import"./CanvasProviderDecorator-FsENVTGo.js";import{T as t}from"./TextArea-C-gYO6In.js";import{S as i}from"./StaticStates-CfNpArLz.js";import{C as p}from"./ComponentStatesTable-rChJ1JsB.js";import{p as o}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-DNBEbcF4.js";import"./index-udXzHylk.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./TextInput-B08tbWWW.js";import"./types-DXdjelYI.js";import"./components-BduoFc0l.js";import"./mergeStyles-BqEZTk84.js";import"./Box-DVE1QV2w.js";import"./index-DZtdzgZp.js";import"./useConstant-B_SD0x5s.js";import"./flex-CkgKa82T.js";import"./grid-snaFRi1S.js";import"./px2rem-C0KbprIx.js";import"./cornerShape-BWVxTIwC.js";const I={title:"Testing/Inputs/Text Area",component:t,parameters:{chromatic:{disable:!1}}},a=({theme:n}={})=>l.jsx(i,{theme:s(n),children:l.jsx(p,{rowProps:o({value:[{value:"Input value",label:"With Value"},{value:"",label:"No Value"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:t.ErrorType.Caution,label:"Caution"},{value:t.ErrorType.Error,label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:o({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>l.jsx(t,{...e,style:{minWidth:60,width:100},onChange:()=>{}})})}),r=()=>l.jsx(a,{theme:u});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  theme
} = {}) => <StaticStates theme={toCanvasProviderTheme(theme)}>
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
  </StaticStates>`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => <TextAreaStates theme={customNumericalTheme} />",...r.parameters?.docs?.source}}};const _=["TextAreaStates","TextAreaThemedStates"];export{a as TextAreaStates,r as TextAreaThemedStates,_ as __namedExportsOrder,I as default};
