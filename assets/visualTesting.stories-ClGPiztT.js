import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-B-MLr1-y.js";import"./CanvasProviderDecorator-DmZSpJ20.js";import{M as a}from"./MultiSelect-CbdAEUL2.js";import{S as u}from"./StaticStates-yYC-il65.js";import{C as s}from"./ComponentStatesTable-C27aY8YY.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-CFEs8r9D.js";import"./CanvasProvider-CnwanEes.js";import"./index-C_4iH04t.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-SP0xMd9U.js";import"./components-B2Q2g_kO.js";import"./useListItemRovingFocus-DV_jor0K.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-CWvR7y0-.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-BmFbxqTK.js";import"./Menu-D31M8F2f.js";import"./getTransformFromPlacement-mFHZLDM3.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-jA6eKExB.js";import"./mergeStyles-Cj6q-U5f.js";import"./Box-Dk0W8wtP.js";import"./index-DX07rvw8.js";import"./flex-3jl45ffO.js";import"./grid-Ch81PKOz.js";import"./useCloseOnEscape-BoOh5Dla.js";import"./Popper-CkxhCgtJ.js";import"./Card-D23lSHWe.js";import"./Text-BLlhCS-c.js";import"./cornerShape-CbzTqdgH.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-BDjV_6T0.js";import"./useListItemSelect-DQ743t_N.js";import"./SystemIcon-DxdGt8lR.js";import"./Svg-P4I-l01h.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DJjyGDVU.js";import"./useFocusRedirect-DZsVo1k6.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-ENoIoFrq.js";import"./BaseButton-B2qpNNxq.js";import"./Button-oKB08GyB.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-DWXGfW5o.js";import"./types-DXdjelYI.js";import"./Pill-C1mPxJEW.js";import"./Avatar-BlKvUt6W.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-BRjwq5Rx.js";import"./TertiaryButton-DQiMlgW6.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-CnMELw3M.js";const Me={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
