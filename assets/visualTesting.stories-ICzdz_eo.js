import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-CaLW-K4s.js";import"./CanvasProviderDecorator-DdrjHcea.js";import{M as a}from"./MultiSelect-C777R-IE.js";import{S as u}from"./StaticStates-BluYrmIg.js";import{C as s}from"./ComponentStatesTable-BaXDsJEa.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-DGWqlLHc.js";import"./index-jCBjnmNg.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-C0W2CWuK.js";import"./components-DTthHGKT.js";import"./Menu-CPFz14_c.js";import"./useListItemRegister-B15KThaE.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-D0miBKMZ.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-CgLpdJvj.js";import"./mergeStyles-DKqoPbSL.js";import"./Box-B-CSScYU.js";import"./index-DsKuT9Xg.js";import"./flex-Db6l7LhR.js";import"./grid-BuNt6bVu.js";import"./useCloseOnEscape-BEuuUG2L.js";import"./Popper-ChXqbTlz.js";import"./Card-DW5XrHM7.js";import"./Text-DTfwe_zT.js";import"./cornerShape-DWAANhH5.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-D-tSVQDC.js";import"./useListItemSelect---b-W7HL.js";import"./SystemIcon-vXgIF5zT.js";import"./Svg-BzLA6oZ0.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-LUunQ5Ks.js";import"./useFocusRedirect-Cz4pbmhj.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-BPF2zy8a.js";import"./SecondaryButton-Bqr8EMWQ.js";import"./BaseButton-CV6FwbLE.js";import"./Button-DGnEnmhD.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-CYlTcryX.js";import"./types-DXdjelYI.js";import"./Pill-BjHC8TIA.js";import"./Avatar-D-X49Bur.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-ANJUOlPZ.js";import"./TertiaryButton-D4l0taVd.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-COr_pUjR.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
