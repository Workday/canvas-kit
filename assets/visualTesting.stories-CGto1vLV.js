import{j as a}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-fTgaRE_v.js";import{S as r}from"./Switch-D0BKfxKx.js";import{S as i}from"./StaticStates-kDyV_ZDH.js";import{C as u}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import{C as v}from"./CanvasProvider-CbBD4ERB.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-DKOKnxgv.js";import"./index-CYsyLHR7.js";import"./components-XIe_upcR.js";import"./check-small-CEmhQ7AS.js";import"./types-wqmYQQWa.js";import"./x-small-BxvQm8EX.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./types-DXdjelYI.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";const O={title:"Testing/Preview/Switch",component:r,parameters:{chromatic:{disable:!1}}},l=()=>a.jsx(i,{children:a.jsx(u,{rowProps:n({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}],error:[{value:void 0,label:""},{value:r.ErrorType.Caution,label:"Caution"},{value:r.ErrorType.Error,label:"Error"}]},e=>!(e.indeterminate&&!e.checked)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>a.jsx(r,{...e,onChange:()=>{}})})}),o=()=>a.jsx(l,{});o.parameters={canvasProviderDecorator:{theme:c}};const t=()=>a.jsx(i,{children:a.jsx(u,{rowProps:n({checked:[{value:!0,label:"Checked"},{value:!1,label:"Unchecked"}],error:[{value:void 0,label:""},{value:r.ErrorType.Caution,label:"Caution"},{value:r.ErrorType.Error,label:"Error"}]},e=>!(e.indeterminate&&!e.checked)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:e=>a.jsx(v,{dir:"rtl",children:a.jsx(r,{...e,onChange:()=>{}})})})}),s=()=>a.jsx(t,{});s.parameters={canvasProviderDecorator:{theme:c}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
    return !(props.indeterminate && !props.checked);
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
    return !(props.disabled && !['', 'hover'].includes(props.className));
  })}>
      {props => <Switch {...props} onChange={() => {}} // eslint-disable-line no-empty-function
    />}
    </ComponentStatesTable>
  </StaticStates>`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => <SwitchStates />",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
    return !(props.indeterminate && !props.checked);
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
    return !(props.disabled && !['', 'hover'].includes(props.className));
  })}>
      {props => <CanvasProvider dir="rtl">
          <Switch {...props} onChange={() => {}} // eslint-disable-line no-empty-function
      />
        </CanvasProvider>}
    </ComponentStatesTable>
  </StaticStates>`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => <SwitchStatesRTL />",...s.parameters?.docs?.source}}};const q=["SwitchStates","SwitchThemedStates","SwitchStatesRTL","SwitchThemedStatesRTL"];export{l as SwitchStates,t as SwitchStatesRTL,o as SwitchThemedStates,s as SwitchThemedStatesRTL,q as __namedExportsOrder,O as default};
