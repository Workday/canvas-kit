import{j as a}from"./jsx-runtime-Bu6AqWCO.js";import{A as t}from"./AIIngressButton-Bmni24VE.js";import{S as n}from"./StaticStates-BEE7CJ53.js";import{C as v}from"./ComponentStatesTable-Dk46YD6j.js";import{p as l}from"./permutateProps-CtMwpv-x.js";import{c}from"./cs-CmRirKzJ.js";import{p as i,c as p}from"./index-C_4iH04t.js";import"./index-IfJi-UCQ.js";import"./index-DQ1Wqo_y.js";import"./BaseButton-D9-kf81-.js";import"./Box-BoQ5J_i4.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./components-DfK761ue.js";import"./SystemIcon-C-lsn8SY.js";import"./Svg-CnUv8CcO.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Vp3VQTQy.js";import"./flex-CVN7yaqy.js";import"./grid-D-K1FKZf.js";import"./useUniqueId-BoA5684E.js";import"./index-CFEs8r9D.js";import"./CanvasProvider-B2qftkyC.js";const O={title:"Testing/Labs/AI Ingress Button",component:t,parameters:{chromatic:{disable:!1}}},u=c({background:p.surface.contrast.strong,padding:i.xxl}),s=()=>a.jsx(n,{children:a.jsx(v,{rowProps:l({variant:[{value:void 0,label:"Default"},{value:"inverse",label:"Inverse"}]}),columnProps:l({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!e.disabled||!e.className||e.className==="hover"),children:e=>a.jsx("div",{className:e.variant==="inverse"?u:"",children:a.jsx(t,{...e})})})}),o=()=>a.jsx(n,{children:a.jsx(v,{rowProps:l({toggled:[{value:!0,label:"Toggled"}]}),columnProps:l({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!e.disabled||!e.className||e.className==="hover"),children:e=>a.jsx("div",{className:u,children:a.jsx(t,{variant:"inverse",...e})})})}),r=()=>a.jsx(n,{children:a.jsx(v,{rowProps:l({toggled:[{value:!0,label:"Toggled"}]}),columnProps:l({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!e.disabled||!e.className||e.className==="hover"),children:e=>a.jsx(t,{...e})})});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    variant: [{
      value: undefined,
      label: 'Default'
    }, {
      value: 'inverse',
      label: 'Inverse'
    }]
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
  }, props => !props.disabled || !props.className || props.className === 'hover')}>
      {props => <div className={props.variant === 'inverse' ? darkBackground : ''}>
          <AIIngressButton {...props} />
        </div>}
    </ComponentStatesTable>
  </StaticStates>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    toggled: [{
      value: true,
      label: 'Toggled'
    }]
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
  }, props => !props.disabled || !props.className || props.className === 'hover')}>
      {props => <div className={darkBackground}>
          <AIIngressButton variant="inverse" {...props} />
        </div>}
    </ComponentStatesTable>
  </StaticStates>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    toggled: [{
      value: true,
      label: 'Toggled'
    }]
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
  }, props => !props.disabled || !props.className || props.className === 'hover')}>
      {props => <AIIngressButton {...props} />}
    </ComponentStatesTable>
  </StaticStates>`,...r.parameters?.docs?.source}}};const R=["AiIngressButtonStates","AIIngressButtonStatesToggledInverse","AIIngressButtonStatesToggledDefault"];export{r as AIIngressButtonStatesToggledDefault,o as AIIngressButtonStatesToggledInverse,s as AiIngressButtonStates,R as __namedExportsOrder,O as default};
