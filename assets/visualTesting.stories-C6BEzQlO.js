import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-CegiH7_M.js";import"./CanvasProviderDecorator-jxxwDD84.js";import{M as a}from"./MultiSelect-Bp9HF-K0.js";import{S as u}from"./StaticStates-DH8ugYts.js";import{C as s}from"./ComponentStatesTable-DDNNZMf9.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-Cdk5n_7L.js";import"./index-jCBjnmNg.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-Ca5fsvvZ.js";import"./components-BceceJol.js";import"./Menu-CaAP8Y9P.js";import"./useListItemRegister-DRvisH15.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-C9zTUpzV.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-GTBnUEiW.js";import"./mergeStyles-ClqtAfq-.js";import"./Box-BtLgvfpX.js";import"./index-DWHOiqdi.js";import"./flex-sw8oCqO7.js";import"./grid-CJb0DYG8.js";import"./useCloseOnEscape-SUluXMGy.js";import"./Popper-F_u6Qeli.js";import"./Card-riOLYX3E.js";import"./Text-DS2Wj_DF.js";import"./cornerShape-B1vmiV_8.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-CWCz85mw.js";import"./useListItemSelect-9uKgdWUA.js";import"./SystemIcon-wLEz3Jyh.js";import"./Svg-i8rT_wzI.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-CRTETg8Q.js";import"./useFocusRedirect-B7tiUZUF.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-B9gz_IBO.js";import"./SecondaryButton-CZc3i-WD.js";import"./BaseButton-aCJIRgx8.js";import"./Button-Belj1Id1.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-BrZrpxTX.js";import"./types-DXdjelYI.js";import"./Pill-BOpM72nC.js";import"./Avatar-B8ipDMwj.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-C5NXUj0c.js";import"./TertiaryButton-B2vZi3ts.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-BmQxH_3c.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
