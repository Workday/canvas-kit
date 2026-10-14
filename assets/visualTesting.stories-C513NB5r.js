import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-6Aps_IFa.js";import"./CanvasProviderDecorator-Cr3ADC28.js";import{M as a}from"./MultiSelect-9oXVwJN8.js";import{S as u}from"./StaticStates-BdbDVKZL.js";import{C as s}from"./ComponentStatesTable-XUSOQtHP.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-DrTkG8rB.js";import"./index--KWQvxqz.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-B8Ihcbt8.js";import"./components-pm5o1xBY.js";import"./useListItemRovingFocus-DSPINadF.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-B7XQ7Vvo.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-_QLXEGyy.js";import"./Menu-DBoRx_v0.js";import"./getTransformFromPlacement-BIgn6nFa.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-DZiOcCHG.js";import"./mergeStyles-Dgag8kI5.js";import"./Box-Cxcl3Pz4.js";import"./index-DX07rvw8.js";import"./flex-C8-Q7Yge.js";import"./grid-1w_RIXoS.js";import"./useCloseOnEscape-BB6dVqt7.js";import"./Popper-CK4bDZ3N.js";import"./Card-D3_tFDM6.js";import"./Text-DV3mI71K.js";import"./cornerShape-BtPTv_W4.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-XDloe67Z.js";import"./useListItemSelect-8A_yvuaV.js";import"./SystemIcon--fqcxg9T.js";import"./Svg-tkxNvoYx.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-Dx4p_ThR.js";import"./useFocusRedirect-tUZFXCBg.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-DloJl4Gi.js";import"./BaseButton-BhNh45z4.js";import"./Button-CHcm6yl-.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-CdQQ1BWs.js";import"./types-DXdjelYI.js";import"./Pill-unUXcnQI.js";import"./Avatar-BYd6P6hI.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-J71_ysbj.js";import"./TertiaryButton-BYrZAbxn.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-D5cXx8er.js";const Me={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
