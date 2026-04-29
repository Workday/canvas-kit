import{j as a}from"./jsx-runtime-Bu6AqWCO.js";import{S as n}from"./StaticStates-kDyV_ZDH.js";import{C as v}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as l}from"./permutateProps-CtMwpv-x.js";import{A as t}from"./AIIngressButton-CYaers9I.js";import{c}from"./cs-DvbI9OYs.js";import{p as i,c as p}from"./index-CYsyLHR7.js";import"./index-IfJi-UCQ.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-CbBD4ERB.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./index-DQ1Wqo_y.js";import"./BaseButton-DxRITFeD.js";import"./Box-DFWPfIf0.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./components-XIe_upcR.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Dttt6jO3.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./useUniqueId-DC-hMIDg.js";const z={title:"Testing/Labs/AI Ingress Button",component:t,parameters:{chromatic:{disable:!1}}},u=c({background:p.surface.contrast.strong,padding:i.xxl}),s=()=>a.jsx(n,{children:a.jsx(v,{rowProps:l({variant:[{value:void 0,label:"Default"},{value:"inverse",label:"Inverse"}]}),columnProps:l({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!e.disabled||!e.className||e.className==="hover"),children:e=>a.jsx("div",{className:e.variant==="inverse"?u:"",children:a.jsx(t,{...e})})})}),o=()=>a.jsx(n,{children:a.jsx(v,{rowProps:l({toggled:[{value:!0,label:"Toggled"}]}),columnProps:l({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!e.disabled||!e.className||e.className==="hover"),children:e=>a.jsx("div",{className:u,children:a.jsx(t,{variant:"inverse",...e})})})}),r=()=>a.jsx(n,{children:a.jsx(v,{rowProps:l({toggled:[{value:!0,label:"Toggled"}]}),columnProps:l({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!e.disabled||!e.className||e.className==="hover"),children:e=>a.jsx(t,{...e})})});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
  </StaticStates>`,...r.parameters?.docs?.source}}};const G=["AiIngressButtonStates","AIIngressButtonStatesToggledInverse","AIIngressButtonStatesToggledDefault"];export{r as AIIngressButtonStatesToggledDefault,o as AIIngressButtonStatesToggledInverse,s as AiIngressButtonStates,G as __namedExportsOrder,z as default};
