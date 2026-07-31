import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{K as a}from"./KBD-EkJwoklU.js";import{S as o}from"./StaticStates-zOyvF3kU.js";import{C as m}from"./ComponentStatesTable-BmPWoFYu.js";import{p as r}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./models-CHTjB2ql.js";import"./useListItemRegister-Y_tBv-cO.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-txAqe3Xu.js";import"./cs-rfTTo7Bg.js";import"./cornerShape-Dinnbk8k.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./CanvasProvider-Dyk6_koI.js";import"./index-DE-upP0k.js";import"./index-pMzza0x6.js";const I={title:"Testing/Labs/KBD",component:a,parameters:{chromatic:{disable:!1}}},t=()=>e.jsx(o,{children:e.jsx(m,{rowProps:r({variant:[{value:"default",label:"Default"},{value:"plain",label:"Plain"}]}),columnProps:r({size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),children:l=>e.jsx("div",{children:e.jsxs(a,{...l,children:[e.jsx(a.Item,{children:"⌘"}),e.jsx(a.Item,{children:"C"})]})})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
