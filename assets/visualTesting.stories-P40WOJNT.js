import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-yhlu1sAk.js";import"./CanvasProviderDecorator-BfFoD3vS.js";import{M as a}from"./MultiSelect-ChVst7kU.js";import{S as u}from"./StaticStates-4xvHslkC.js";import{C as s}from"./ComponentStatesTable-C5axFSBq.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-P3Lb2Rl1.js";import"./index-jCBjnmNg.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-Cso3yZuR.js";import"./components-d5ekN04B.js";import"./Menu-Gxy5lB3g.js";import"./useListItemRegister-CkI4Pnda.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-C0brky5f.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-D9NUSYDV.js";import"./mergeStyles-BbM8eln0.js";import"./Box-BoBigmVy.js";import"./index-DX07rvw8.js";import"./flex-D5XhsXiq.js";import"./grid-BMAUH4x5.js";import"./useCloseOnEscape-U3rCa1ez.js";import"./Popper-60Ht2BWw.js";import"./Card-C3YPv8PR.js";import"./Text-B_9J6dtZ.js";import"./cornerShape-D4s9iH9i.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-D-ZVvEYp.js";import"./useListItemSelect-Buc4Eu3l.js";import"./SystemIcon-sIhpLqFT.js";import"./Svg-BEkl6RqF.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-BiEDvkpe.js";import"./useFocusRedirect-CGyB5QUA.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-CiglE-au.js";import"./SecondaryButton-Dq_wtC7v.js";import"./BaseButton-Cq0-Z1xK.js";import"./Button-Cji_lOEg.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-XGsJxoL2.js";import"./types-DXdjelYI.js";import"./Pill-LGbIDz3L.js";import"./Avatar-C5xvvNZK.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-C3iRkXZj.js";import"./TertiaryButton-DKUjcWbc.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-FvL0Npok.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    value: [{
      value: '',
      label: 'No Value'
    }, {
      value: 'With Value',
      label: 'With Value'
    }],
    searchInput: [{
      value: false,
      label: 'No Search'
    }, {
      value: true,
      label: 'Search'
    }],
    placeholder: [{
      value: 'Placeholder',
      label: 'Placeholder'
    }],
    error: [{
      value: undefined,
      label: ''
    }, {
      value: 'caution',
      label: 'Caution'
    }, {
      value: 'error',
      label: 'Error'
    }]
  }, props => {
    if (props.value === '' && !props.placeholder) {
      return false;
    }
    return true;
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
  }, props => {
    if (props.disabled && !['', 'hover'].includes(props.className)) {
      return false;
    }
    return true;
  })}>
      {({
      searchInput,
      ...props
    }) => {
      const InputComponent = searchInput ? MultiSelect.SearchInput : MultiSelect.Input;
      return <MultiSelect items={['With Value']} initialSelectedIds={props.value ? [props.value] : []}>
            <InputComponent {...props} style={{
          minWidth: 60,
          width: 140
        }} onChange={() => {}} // eslint-disable-line no-empty-function
        />
          </MultiSelect>;
    }}
    </ComponentStatesTable>
  </StaticStates>`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => <MultiSelectStates />",...l.parameters?.docs?.source}}};const Ce=["MultiSelectStates","MultiSelectThemedStates"];export{r as MultiSelectStates,l as MultiSelectThemedStates,Ce as __namedExportsOrder,Ie as default};
