import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-DHGJIcfy.js";import"./CanvasProviderDecorator-w0HXNaSi.js";import{M as a}from"./MultiSelect-B03xcEUw.js";import{S as u}from"./StaticStates-BEE7CJ53.js";import{C as s}from"./ComponentStatesTable-Dk46YD6j.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-CFEs8r9D.js";import"./CanvasProvider-B2qftkyC.js";import"./index-C_4iH04t.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-B3-8B8PD.js";import"./components-DfK761ue.js";import"./useListItemRovingFocus-DmoAqEoc.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-BnQYvF7K.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-DxYHsA1b.js";import"./Menu-Kk2VrAm5.js";import"./getTransformFromPlacement-CUURGzgU.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-D6hxE6SN.js";import"./mergeStyles-Vp3VQTQy.js";import"./Box-BoQ5J_i4.js";import"./index-DX07rvw8.js";import"./flex-CVN7yaqy.js";import"./grid-D-K1FKZf.js";import"./useCloseOnEscape-DwqtkWZR.js";import"./Popper-Dq8eR2UQ.js";import"./Card-DZwvY3u3.js";import"./Text-ZlO6HW6V.js";import"./cornerShape-oKuWloiA.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-Chawvcyy.js";import"./useListItemSelect-19hmN-2Q.js";import"./SystemIcon-C-lsn8SY.js";import"./Svg-CnUv8CcO.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-CDQPJuTh.js";import"./useFocusRedirect-Da0_5aiI.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-DGx56yR5.js";import"./BaseButton-D9-kf81-.js";import"./Button-hC9Gk3S7.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-B0BUOy_b.js";import"./types-DXdjelYI.js";import"./Pill-DrKvkwzc.js";import"./Avatar-B8N79UKe.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-BROEhGxx.js";import"./TertiaryButton-8VZ3UMt4.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-CFcj3Y1u.js";const Me={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
  </StaticStates>`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => <MultiSelectStates />",...l.parameters?.docs?.source}}};const Pe=["MultiSelectStates","MultiSelectThemedStates"];export{r as MultiSelectStates,l as MultiSelectThemedStates,Pe as __namedExportsOrder,Me as default};
