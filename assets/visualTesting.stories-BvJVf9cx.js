import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as s}from"./customThemes-D1oTl3QS.js";import"./CanvasProviderDecorator-lEy2rQft.js";import{C as n}from"./ColorInput-C3jnUfrR.js";import{S as u}from"./StaticStates-C8PNmvhX.js";import{C as i}from"./ComponentStatesTable-BGs2PIsA.js";import{p as o}from"./permutateProps-CtMwpv-x.js";import{F as t}from"./FormField-BCMc2Lm9.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-Ce6SqFpo.js";import"./index-jCBjnmNg.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./check-small-BqSDQIle.js";import"./types-wqmYQQWa.js";import"./index-Cvke4sRE.js";import"./SystemIcon-Bprhvld6.js";import"./Svg-Cf-JAqGF.js";import"./px2rem-C0KbprIx.js";import"./components-CSN_KxHX.js";import"./cornerShape-BeK2DPVP.js";import"./TextInput-Ley04CKf.js";import"./types-DXdjelYI.js";import"./mergeStyles-CrKfjMZ1.js";import"./Box-DebRNAPR.js";import"./useConstant-B_SD0x5s.js";import"./flex-DSGq5Zo5.js";import"./grid-Db0Kv7HN.js";import"./TypeLevelComponents-C9UvwkIr.js";import"./Text-BxYrzwL9.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";const J={title:"Testing/Inputs/Color Picker/Color Input",component:n,parameters:{chromatic:{disable:!1}}},l=()=>r.jsx(u,{children:r.jsx(i,{rowProps:o({value:[{value:"#005cb9",label:"Hex Value"},{value:"",label:"No Value"}],placeholder:[{value:void 0,label:""},{value:"000",label:"Placeholder"}],showCheck:[{value:void 0,label:""},{value:!0,label:"Checked"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>e.value!==""&&e.placeholder?!1:!(e.value===""&&e.showCheck)),columnProps:o({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>r.jsx(t,{error:e.error,children:r.jsx(t.Input,{as:n,...e})})})}),a=()=>r.jsx(l,{});a.parameters={canvasProviderDecorator:{theme:s}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    value: [{
      value: '#005cb9',
      label: 'Hex Value'
    }, {
      value: '',
      label: 'No Value'
    }],
    placeholder: [{
      value: undefined,
      label: ''
    }, {
      value: '000',
      label: 'Placeholder'
    }],
    showCheck: [{
      value: undefined,
      label: ''
    }, {
      value: true,
      label: 'Checked'
    }],
    error: [{
      value: undefined,
      label: ''
    }, {
      value: 'caution',
      label: 'Caution'
    }, {
      value: 'error',
      label: 'Error'
    }]
  }, props => {
    if (props.value !== '' && props.placeholder) {
      return false;
    } else if (props.value === '' && props.showCheck) {
      return false;
    } else {
      return true;
    }
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
      {props => <FormField error={props.error}>
          <FormField.Input as={ColorInput} {...props} />
        </FormField>}
    </ComponentStatesTable>
  </StaticStates>`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => <ColorInputStates />",...a.parameters?.docs?.source}}};const K=["ColorInputStates","ColorInputThemedStates"];export{l as ColorInputStates,a as ColorInputThemedStates,K as __namedExportsOrder,J as default};
