import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{c as s}from"./cloud-arrow-up-BLHe5iIq.js";import{S as a}from"./StatusIndicator-CIcUoKMD.js";import{S as l}from"./StaticStates-PSus6iXa.js";import{C as p}from"./ComponentStatesTable-ToMmswkK.js";import{p as r}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./types-wqmYQQWa.js";import"./index-DWHOiqdi.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./SystemIcon-BLgBEqk_.js";import"./Svg-CcyJcMxT.js";import"./px2rem-C0KbprIx.js";import"./components-BMCKvV6D.js";import"./CanvasProvider-CPCp_Ehm.js";import"./index-DE-upP0k.js";import"./index-kj8ZfNNN.js";const P={title:"Testing/Indicators/Status Indicator",component:a,parameters:{chromatic:{disable:!1}}},e={render:()=>t.jsx(l,{children:t.jsx(p,{rowProps:r({emphasis:[{value:a.Emphasis.Low,label:"Low Emphasis"},{value:a.Emphasis.High,label:"High Emphasis"}],icon:[{value:void 0,label:""},{value:s,label:"With Icon"}]}),columnProps:r({type:[{value:a.Type.Gray,label:"Gray"},{value:a.Type.Blue,label:"Blue"},{value:a.Type.Green,label:"Green"},{value:a.Type.Orange,label:"Orange"},{value:a.Type.Red,label:"Red"},{value:a.Type.Transparent,label:"Transparent"}]}),children:o=>t.jsx(a,{...o,label:"Status"})})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const x=["StatusIndicatorStates"];export{e as StatusIndicatorStates,x as __namedExportsOrder,P as default};
