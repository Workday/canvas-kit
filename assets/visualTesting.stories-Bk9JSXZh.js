import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-ZtDCuCv0.js";import"./CanvasProviderDecorator-Ba12pPvd.js";import{M as a}from"./MultiSelect-B-o1UkYY.js";import{S as u}from"./StaticStates-Bw0dTjjT.js";import{C as s}from"./ComponentStatesTable-CvtZcMqf.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-7wBX3WBC.js";import"./index-C_4iH04t.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-Fj-_QEKV.js";import"./components-HCdlB-Cn.js";import"./useListItemRovingFocus-Dv8Dsd6e.js";import"./isElementRTL-lizwOp5U.js";import"./useListItemRegister-hoJ7ZOOD.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./usePopupTarget-GjHQDItI.js";import"./Menu-DCyhNDN-.js";import"./getTransformFromPlacement-Ckea_qfD.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-BYUo1exC.js";import"./mergeStyles-BOTYd98H.js";import"./Box-NtgckSi6.js";import"./index-DX07rvw8.js";import"./flex-Iimm9537.js";import"./grid-DE-Ok6Ac.js";import"./useCloseOnEscape-Dt5uIv7J.js";import"./Popper-BORLx1pc.js";import"./Card-6Upq_3u-.js";import"./Text-CUdPBNk6.js";import"./cornerShape-CYdiETtT.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-DawyYxpX.js";import"./useListItemSelect-DCdfEE1M.js";import"./SystemIcon-CDokv1Eo.js";import"./Svg-C05gFzlU.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-CaCCacmv.js";import"./useFocusRedirect-6vTTAhV8.js";import"./check-Ds6vsrAM.js";import"./SecondaryButton-DL6NX6-s.js";import"./BaseButton-DTTEiDSJ.js";import"./Button-t_PogMNe.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-BhZZLsCb.js";import"./types-DXdjelYI.js";import"./Pill-BMb1G0vP.js";import"./Avatar-B_0clIm1.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-NfaEb3Gq.js";import"./TertiaryButton-BKQ-qpBE.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-Bj_SMoL4.js";const Me={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
