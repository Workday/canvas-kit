import{j as a}from"./jsx-runtime-Bu6AqWCO.js";import{c as l}from"./cloud-arrow-up-BLHe5iIq.js";import{S as n}from"./StatusIndicator-DGnYvsnj.js";import{S as p}from"./StaticStates-DQfAotsh.js";import{C as m}from"./ComponentStatesTable-u_KZtbcZ.js";import{p as o}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CznyzdLa.js";import"./Svg-DpPQdFHV.js";import"./px2rem-C0KbprIx.js";import"./components-WZi6LWjd.js";import"./cs-CmRirKzJ.js";import"./Text-Bea_87QG.js";import"./mergeStyles-C7rR1M8O.js";import"./Box-8nFq7jwp.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-DzaubaG6.js";import"./grid-CQvZVltP.js";import"./cornerShape-DLCpy5rz.js";import"./CanvasProvider-BhcD6OFZ.js";import"./index-DE-upP0k.js";import"./index-D-t2nnqG.js";const R={title:"Testing/Preview/Status Indicator",component:n,parameters:{chromatic:{disable:!1}}},t=()=>a.jsx(p,{children:a.jsx(m,{rowProps:o({emphasis:[{value:"low",label:"Low Emphasis"},{value:"high",label:"High Emphasis"}],icon:[{value:void 0,label:""},{value:l,label:"With Icon"}]}),columnProps:o({variant:[{value:"info",label:"Info"},{value:"neutral",label:"Neutral"},{value:"caution",label:"Caution"},{value:"positive",label:"Positive"},{value:"critical",label:"Critical"},{value:"transparent",label:"Transparent"}]}),children:r=>{const{emphasis:i,icon:e,variant:s}=r;return a.jsxs(n,{emphasis:i,variant:s,children:[e&&a.jsx(n.Icon,{icon:e}),a.jsx(n.Label,{children:"Lorem impsum dolor"})]})}})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
  </StaticStates>`,...t.parameters?.docs?.source}}};const k=["StatusIndicatorStates"];export{t as StatusIndicatorStates,k as __namedExportsOrder,R as default};
