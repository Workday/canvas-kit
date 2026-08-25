import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{K as a}from"./KBD-CWsKddbL.js";import{S as o}from"./StaticStates-gAEM3PjO.js";import{C as m}from"./ComponentStatesTable-CI7pF_Dk.js";import{p as r}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./models-CHTjB2ql.js";import"./useListItemRegister-NCGS7HKL.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-DIXe_rXl.js";import"./cs-CmRirKzJ.js";import"./cornerShape-DO7zpd3K.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./CanvasProvider-BTLvcapT.js";import"./index-DE-upP0k.js";import"./index-D-t2nnqG.js";const I={title:"Testing/Labs/KBD",component:a,parameters:{chromatic:{disable:!1}}},t=()=>e.jsx(o,{children:e.jsx(m,{rowProps:r({variant:[{value:"default",label:"Default"},{value:"plain",label:"Plain"}]}),columnProps:r({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),children:l=>e.jsx("div",{children:e.jsxs(a,{...l,children:[e.jsx(a.Item,{children:"⌘"}),e.jsx(a.Item,{children:"C"})]})})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    variant: [{
      value: 'default',
      label: 'Default'
    }, {
      value: 'plain',
      label: 'Plain'
    }]
  })} columnProps={permutateProps({
    size: [{
      value: 'small',
      label: 'Small'
    }, {
      value: 'medium',
      label: 'Medium'
    }, {
      value: 'large',
      label: 'Large'
    }]
  })}>
      {props => <div>
          <KBD {...props}>
            <KBD.Item>⌘</KBD.Item>
            <KBD.Item>C</KBD.Item>
          </KBD>
        </div>}
    </ComponentStatesTable>
  </StaticStates>`,...t.parameters?.docs?.source}}};const T=["KBDStates"];export{t as KBDStates,T as __namedExportsOrder,I as default};
