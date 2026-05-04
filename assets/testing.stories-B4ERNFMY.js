import{j as a}from"./jsx-runtime-Bu6AqWCO.js";import{c as l}from"./cloud-arrow-up-Cy6LSuPb.js";import{S as n}from"./StatusIndicator-BIh9noB6.js";import{S as p}from"./StaticStates-DCoU3VgY.js";import{C as m}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as e}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./px2rem-C0KbprIx.js";import"./components-1G01j-He.js";import"./cs-DvbI9OYs.js";import"./Text-DRUbleCp.js";import"./mergeStyles-BK8Hz87n.js";import"./Box-DFceh3YA.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-BJ-OMKNq.js";import"./index-CYsyLHR7.js";import"./styled-BsZD6Etj.js";const q={title:"Testing/Preview/Status Indicator",component:n,parameters:{chromatic:{disable:!1}}},t=()=>a.jsx(p,{children:a.jsx(m,{rowProps:e({emphasis:[{value:"low",label:"Low Emphasis"},{value:"high",label:"High Emphasis"}],icon:[{value:void 0,label:""},{value:l,label:"With Icon"}]}),columnProps:e({variant:[{value:"info",label:"Info"},{value:"neutral",label:"Neutral"},{value:"caution",label:"Caution"},{value:"positive",label:"Positive"},{value:"critical",label:"Critical"},{value:"transparent",label:"Transparent"}]}),children:r=>{const{emphasis:i,icon:o,variant:s}=r;return a.jsxs(n,{emphasis:i,variant:s,children:[o&&a.jsx(n.Icon,{icon:o}),a.jsx(n.Label,{children:"Lorem impsum dolor"})]})}})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    emphasis: [{
      value: 'low',
      label: 'Low Emphasis'
    }, {
      value: 'high',
      label: 'High Emphasis'
    }],
    icon: [{
      value: undefined,
      label: ''
    }, {
      value: cloudArrowUpIcon,
      label: 'With Icon'
    }]
  })} columnProps={permutateProps({
    variant: [{
      value: 'info',
      label: 'Info'
    }, {
      value: 'neutral',
      label: 'Neutral'
    }, {
      value: 'caution',
      label: 'Caution'
    }, {
      value: 'positive',
      label: 'Positive'
    }, {
      value: 'critical',
      label: 'Critical'
    }, {
      value: 'transparent',
      label: 'Transparent'
    }]
  })}>
      {props => {
      const {
        emphasis,
        icon,
        variant
      } = props;
      return <StatusIndicator emphasis={emphasis} variant={variant}>
            {icon && <StatusIndicator.Icon icon={icon} />}
            <StatusIndicator.Label>Lorem impsum dolor</StatusIndicator.Label>
          </StatusIndicator>;
    }}
    </ComponentStatesTable>
  </StaticStates>`,...t.parameters?.docs?.source}}};const y=["StatusIndicatorStates"];export{t as StatusIndicatorStates,y as __namedExportsOrder,q as default};
