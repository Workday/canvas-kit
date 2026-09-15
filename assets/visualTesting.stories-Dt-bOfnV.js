import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-0mROEo9w.js";import"./CanvasProviderDecorator-DEQcnnrc.js";import{M as a}from"./MultiSelect-B__bI30y.js";import{S as u}from"./StaticStates-B5HvIXru.js";import{C as s}from"./ComponentStatesTable-ovaJrFLf.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-Bsmzj5m5.js";import"./index-udXzHylk.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-Zpx-eux_.js";import"./components-DppiPmWT.js";import"./Menu-DtS_Zcjq.js";import"./useListItemRegister-BtedmPXX.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-xNvjyxNY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-CsgEKIvN.js";import"./mergeStyles-0aQAs1eh.js";import"./Box-AGfoWgij.js";import"./index-DX07rvw8.js";import"./flex-bOHHmX-t.js";import"./grid-DtbHyXmR.js";import"./useCloseOnEscape-DqbNoIGf.js";import"./Popper-xemT1TtK.js";import"./Card-DzhLlfJA.js";import"./Text-C5D3Ht9T.js";import"./cornerShape-C5U5sQXc.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-CtkxcgW5.js";import"./useListItemSelect-Cwl5Guz1.js";import"./SystemIcon-CFi1VLoO.js";import"./Svg-BS_Dvh6q.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DDQ4-kU9.js";import"./useFocusRedirect-BoLF_I5b.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-CifT6Oya.js";import"./SecondaryButton-BD2FVi4i.js";import"./BaseButton-CKzS3UNH.js";import"./Button-BYCIT0TJ.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-DWIaRQL-.js";import"./types-DXdjelYI.js";import"./Pill-BX694KIJ.js";import"./Avatar-juNxhmne.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-BmkjxZAS.js";import"./TertiaryButton-CyD_x8wF.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-D2F0SNcj.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
