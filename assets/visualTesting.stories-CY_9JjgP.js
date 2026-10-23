import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-Bbh86bqx.js";import"./CanvasProviderDecorator-BCgCd_3r.js";import{M as a}from"./MultiSelect-Bg_CT_1h.js";import{S as u}from"./StaticStates-BTf7_c5L.js";import{C as s}from"./ComponentStatesTable-DmhtXaV6.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-Dlka2NIO.js";import"./index--KWQvxqz.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-9fd9fbtc.js";import"./components-Dg6r_l6g.js";import"./useListItemRovingFocus-omXicuh4.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-CNN0mL98.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-B4UGit2X.js";import"./Menu-Gyv5iPUB.js";import"./getTransformFromPlacement-BqfTyZs9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-DcVSVBYt.js";import"./mergeStyles-DQAIS8xD.js";import"./Box-MKWQ5iJf.js";import"./index-DWHOiqdi.js";import"./flex-l0maHnrZ.js";import"./grid-D9_inQjb.js";import"./useCloseOnEscape-DNAp0b8d.js";import"./Popper-DPlZjLFd.js";import"./Card-DxWkS5DO.js";import"./Text-DhPJPWok.js";import"./cornerShape-BJAVQ3D-.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-3VMgvUdj.js";import"./useListItemSelect-cQcAgf8O.js";import"./SystemIcon-HqVC_1La.js";import"./Svg-DpRbd5ao.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-BF5s776m.js";import"./useFocusRedirect-BkTwukrZ.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-Czy1ozWJ.js";import"./BaseButton-B4zfOmRB.js";import"./Button-UegFhBzX.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-DvgP4PT9.js";import"./types-DXdjelYI.js";import"./Pill-Gr8ZpyLs.js";import"./Avatar-DFRqPldJ.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-CXxXz6WK.js";import"./TertiaryButton-i-tHOusL.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-C7B4U05L.js";const Me={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
