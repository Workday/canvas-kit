import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-BfcbhHWX.js";import"./CanvasProviderDecorator-CF4CIVOY.js";import{M as a}from"./MultiSelect-hl9-h3pr.js";import{S as u}from"./StaticStates-urpCdwca.js";import{C as s}from"./ComponentStatesTable-IA4sk9tb.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-CFEs8r9D.js";import"./CanvasProvider-CmQuC1n5.js";import"./index-C_4iH04t.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-D39unQyx.js";import"./components-B5QHr9xs.js";import"./useListItemRovingFocus-BdbIpBLB.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-BqQBHrTO.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-Cco7peXe.js";import"./Menu-BetwLbDT.js";import"./getTransformFromPlacement-CeI32Hr4.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-CDZrIDIK.js";import"./mergeStyles-Bfd74k5F.js";import"./Box-CyjvvVBh.js";import"./index-DWHOiqdi.js";import"./flex-BhWEOOmD.js";import"./grid-Bo2FCXCg.js";import"./useCloseOnEscape-BNAhz6K3.js";import"./Popper-BKWt9U5M.js";import"./Card-TTTo4zHB.js";import"./Text-56KUGy0I.js";import"./cornerShape-B1y71wLF.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-BPWo0foa.js";import"./useListItemSelect-CjGaW9lx.js";import"./SystemIcon-DgkB3O3q.js";import"./Svg-CXKlNM9V.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DWZj3b3a.js";import"./useFocusRedirect-Xc3xIpjr.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-F9hk8ScV.js";import"./BaseButton-B7Cdo6oA.js";import"./Button-uPfdKrkI.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-COM6UplY.js";import"./types-DXdjelYI.js";import"./Pill-S3qUK7kq.js";import"./Avatar-Bsyc2LpW.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-16BOlr94.js";import"./TertiaryButton-BL6wVU0w.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-DxyAlY4-.js";const Me={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
