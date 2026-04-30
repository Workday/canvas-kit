import{j as a}from"./jsx-runtime-Bu6AqWCO.js";import{c as l}from"./cloud-arrow-up-Cy6LSuPb.js";import{S as n}from"./StatusIndicator-D9ob0TlI.js";import{S as p}from"./StaticStates-CBZqM5Fo.js";import{C as m}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as e}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./px2rem-C0KbprIx.js";import"./components-CXVvXGX8.js";import"./cs-DvbI9OYs.js";import"./Text-Dt7EG7Lz.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-BRuur9nH.js";import"./index-CYsyLHR7.js";import"./styled-BsZD6Etj.js";const q={title:"Testing/Preview/Status Indicator",component:n,parameters:{chromatic:{disable:!1}}},t=()=>a.jsx(p,{children:a.jsx(m,{rowProps:e({emphasis:[{value:"low",label:"Low Emphasis"},{value:"high",label:"High Emphasis"}],icon:[{value:void 0,label:""},{value:l,label:"With Icon"}]}),columnProps:e({variant:[{value:"info",label:"Info"},{value:"neutral",label:"Neutral"},{value:"caution",label:"Caution"},{value:"positive",label:"Positive"},{value:"critical",label:"Critical"},{value:"transparent",label:"Transparent"}]}),children:r=>{const{emphasis:i,icon:o,variant:s}=r;return a.jsxs(n,{emphasis:i,variant:s,children:[o&&a.jsx(n.Icon,{icon:o}),a.jsx(n.Label,{children:"Lorem impsum dolor"})]})}})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
