import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-Cxo4y1no.js";import"./CanvasProviderDecorator-BfN7-tD4.js";import{M as a}from"./MultiSelect-CS3Y-9Nh.js";import{S as u}from"./StaticStates-BwBBf8NR.js";import{C as s}from"./ComponentStatesTable-DC9eJUqa.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-DfFmsxWb.js";import"./index-DE-upP0k.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-DImCjLtg.js";import"./components-DdDgcAto.js";import"./Menu-DNCcAoir.js";import"./useListItemRegister-CpJkOK8H.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-BTYKlY9d.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-BgRaP0ww.js";import"./mergeStyles-BpMifWbI.js";import"./Box-61RYJS8A.js";import"./index-DX07rvw8.js";import"./flex-c4dSep24.js";import"./grid-BACyZ-ln.js";import"./useCloseOnEscape-BBCCNOIp.js";import"./Popper-BTfx4X3Y.js";import"./Card-BSzbbTvN.js";import"./Text-DCxfoIId.js";import"./cornerShape-D6g3edD7.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-DvDdKiVX.js";import"./useListItemSelect-BiKiaz0I.js";import"./SystemIcon-Bo20moLE.js";import"./Svg-CJw9rXYh.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-D6liLhXU.js";import"./useFocusRedirect-BHqtMCeJ.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-B2V76KZ9.js";import"./SecondaryButton-DG7QNEgp.js";import"./BaseButton-5Tzdsups.js";import"./Button-CQ42Z5L0.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-B58agKnt.js";import"./types-DXdjelYI.js";import"./Pill-CQ9AU3xZ.js";import"./Avatar-BQTCDUL3.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-WQYLgcQ_.js";import"./TertiaryButton-C_HeZ8Vk.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-CP2kOORx.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
