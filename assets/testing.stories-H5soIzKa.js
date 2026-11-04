import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{K as a}from"./KBD-0zmouA46.js";import{S as o}from"./StaticStates-C8DrAvRn.js";import{C as m}from"./ComponentStatesTable-BafBIi3i.js";import{p as r}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./models-CHTjB2ql.js";import"./useListItemRegister-w3E4ep_H.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-DCItJ-57.js";import"./cs-CmRirKzJ.js";import"./cornerShape-Bga0WpCo.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./CanvasProvider-Dnko5pWu.js";import"./index-C_4iH04t.js";import"./index-CFEs8r9D.js";const I={title:"Testing/Labs/KBD",component:a,parameters:{chromatic:{disable:!1}}},t=()=>e.jsx(o,{children:e.jsx(m,{rowProps:r({variant:[{value:"default",label:"Default"},{value:"plain",label:"Plain"}]}),columnProps:r({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),children:l=>e.jsx("div",{children:e.jsxs(a,{...l,children:[e.jsx(a.Item,{children:"⌘"}),e.jsx(a.Item,{children:"C"})]})})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
