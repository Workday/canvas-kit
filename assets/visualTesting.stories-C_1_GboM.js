import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-8Fak35Nf.js";import"./CanvasProviderDecorator-qC_oKTX0.js";import{M as a}from"./MultiSelect-UflKUfGU.js";import{S as u}from"./StaticStates-C8DrAvRn.js";import{C as s}from"./ComponentStatesTable-BafBIi3i.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-CFEs8r9D.js";import"./CanvasProvider-Dnko5pWu.js";import"./index-C_4iH04t.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-KgPMrYMo.js";import"./components-DCItJ-57.js";import"./useListItemRovingFocus-CW46QKVb.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-w3E4ep_H.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-jky9btN4.js";import"./Menu-CBOS8109.js";import"./getTransformFromPlacement-DWu89T0w.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-CjiyxThm.js";import"./mergeStyles-E9t8hjrR.js";import"./Box-D518UAm3.js";import"./index-DX07rvw8.js";import"./flex-cfI4MPjQ.js";import"./grid-TWixonIH.js";import"./useCloseOnEscape-DK1Cy6Iq.js";import"./Popper-DUF1Kp74.js";import"./Card-ByAQY3LD.js";import"./Text-DhpzTlUe.js";import"./cornerShape-Bga0WpCo.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-D-8cP6dM.js";import"./useListItemSelect-DQHGk0nr.js";import"./SystemIcon-RDlgSLBH.js";import"./Svg-le8e_fDo.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-D33KQN5J.js";import"./useFocusRedirect-kodxjr1P.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-tUb2aihZ.js";import"./BaseButton-BUBjJ90g.js";import"./Button-BrcaYg04.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-CjPZ93U2.js";import"./types-DXdjelYI.js";import"./Pill-E0Rhc_P0.js";import"./Avatar-BnXIpbKo.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-D4J7V-Nz.js";import"./TertiaryButton-DcVZPi3F.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-D4fGq0-Q.js";const Me={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
