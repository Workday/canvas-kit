import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-BN1plZOU.js";import"./CanvasProviderDecorator-DuafnRTH.js";import{M as a}from"./MultiSelect-Cl9McZVs.js";import{S as u}from"./StaticStates-DtywhUnM.js";import{C as s}from"./ComponentStatesTable-rgzlBxk_.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-CFEs8r9D.js";import"./CanvasProvider-axEgo6e1.js";import"./index-C_4iH04t.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-Cai7WmkW.js";import"./components-S5bC6fZi.js";import"./useListItemRovingFocus-Cpz-9FpV.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-B6CuK0fQ.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-SKx5oDcQ.js";import"./Menu-DpkUyS6S.js";import"./getTransformFromPlacement-QV_saiu5.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-Cgsa4tFw.js";import"./mergeStyles-Dk0M9lrR.js";import"./Box-B4eyyvuU.js";import"./index-DX07rvw8.js";import"./flex-KgQM1qcC.js";import"./grid-CK5kpvEI.js";import"./useCloseOnEscape-B4YT-A7Z.js";import"./Popper-DthqIkuE.js";import"./Card-DyIEc58y.js";import"./Text-DNDYTuHT.js";import"./cornerShape-BMV-HxmE.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-Cm441jpv.js";import"./useListItemSelect-CjOf9PN3.js";import"./SystemIcon-C-9MyzEr.js";import"./Svg-rOw8jW07.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DnG6180h.js";import"./useFocusRedirect-DjYJjijD.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-aeALGU57.js";import"./BaseButton-6gpeVhIx.js";import"./Button-2Oi_8-Fb.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-DakYh1Kw.js";import"./types-DXdjelYI.js";import"./Pill-FdGjiFsz.js";import"./Avatar-BCTqwRCB.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-BRdQEm4M.js";import"./TertiaryButton-CJlYwh7s.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-B7O3J48Y.js";const Me={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
