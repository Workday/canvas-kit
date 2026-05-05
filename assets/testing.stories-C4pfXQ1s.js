import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{c as s}from"./cloud-arrow-up-Cy6LSuPb.js";import{S as a}from"./StatusIndicator-zQO8jpY-.js";import{S as l}from"./StaticStates-BCLTLQi1.js";import{C as p}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as r}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./types-wqmYQQWa.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-dYq3mHEV.js";import"./SystemIcon-CQzQ4gRr.js";import"./Svg-CFKxmZXN.js";import"./px2rem-C0KbprIx.js";import"./components-BLZqCckY.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-D16Zuzp0.js";import"./index-CYsyLHR7.js";import"./styled-BsZD6Etj.js";const O={title:"Testing/Indicators/Status Indicator",component:a,parameters:{chromatic:{disable:!1}}},e={render:()=>t.jsx(l,{children:t.jsx(p,{rowProps:r({emphasis:[{value:a.Emphasis.Low,label:"Low Emphasis"},{value:a.Emphasis.High,label:"High Emphasis"}],icon:[{value:void 0,label:""},{value:s,label:"With Icon"}]}),columnProps:r({type:[{value:a.Type.Gray,label:"Gray"},{value:a.Type.Blue,label:"Blue"},{value:a.Type.Green,label:"Green"},{value:a.Type.Orange,label:"Orange"},{value:a.Type.Red,label:"Red"},{value:a.Type.Transparent,label:"Transparent"}]}),children:o=>t.jsx(a,{...o,label:"Status"})})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={permutateProps({
      emphasis: [{
        value: StatusIndicator.Emphasis.Low,
        label: 'Low Emphasis'
      }, {
        value: StatusIndicator.Emphasis.High,
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
      type: [{
        value: StatusIndicator.Type.Gray,
        label: 'Gray'
      }, {
        value: StatusIndicator.Type.Blue,
        label: 'Blue'
      }, {
        value: StatusIndicator.Type.Green,
        label: 'Green'
      }, {
        value: StatusIndicator.Type.Orange,
        label: 'Orange'
      }, {
        value: StatusIndicator.Type.Red,
        label: 'Red'
      }, {
        value: StatusIndicator.Type.Transparent,
        label: 'Transparent'
      }]
    })}>
        {(props: StatusIndicatorProps) => <StatusIndicator {...props} label="Status" />}
      </ComponentStatesTable>
    </StaticStates>
}`,...e.parameters?.docs?.source}}};const R=["StatusIndicatorStates"];export{e as StatusIndicatorStates,R as __namedExportsOrder,O as default};
