import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-CzArhgIa.js";import"./CanvasProviderDecorator-D4H3Wj-n.js";import{M as a}from"./MultiSelect-BJZQzIQK.js";import{S as u}from"./StaticStates-BjShJKff.js";import{C as s}from"./ComponentStatesTable-DXLLOxjV.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-Djg5GzKY.js";import"./index--KWQvxqz.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-D6P1R4t8.js";import"./components-CwPiNTv7.js";import"./useListItemRovingFocus-DPhFhJfQ.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-54CK_IPo.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-KuiEmhEU.js";import"./Menu-BhzHIyri.js";import"./getTransformFromPlacement-DEiEIaBA.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-B_3p7ft8.js";import"./mergeStyles-DQZ8xltm.js";import"./Box-C6YWxsyC.js";import"./index-JH7P-Oob.js";import"./flex-uWNpiXvQ.js";import"./grid-Z1baOhTC.js";import"./useCloseOnEscape-DWBt8FsA.js";import"./Popper-4YHzsBrp.js";import"./Card-B2DoyM2M.js";import"./Text-CugBmzts.js";import"./cornerShape-BEKlmC6c.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-TaXlUV6y.js";import"./useListItemSelect-C8xhwn2K.js";import"./SystemIcon-BX_--XLu.js";import"./Svg-B-_8_IoS.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DY0PlNcI.js";import"./useFocusRedirect-CQqurwgn.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-CFAJ63K0.js";import"./BaseButton-C2ONQDdO.js";import"./Button-B-0xbtvO.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-sO79edZw.js";import"./types-DXdjelYI.js";import"./Pill-DpUIDV-n.js";import"./Avatar-BRtwnXeF.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-812hTzF4.js";import"./TertiaryButton-BikcaN9F.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-D9gUgGEc.js";const Me={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
