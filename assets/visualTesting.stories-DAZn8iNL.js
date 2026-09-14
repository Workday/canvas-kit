import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-CCxpLVmD.js";import"./CanvasProviderDecorator-Cly3GlMn.js";import{M as a}from"./MultiSelect-BxgdTMXH.js";import{S as u}from"./StaticStates-DZVd41Ka.js";import{C as s}from"./ComponentStatesTable-KZUjJnAl.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-COPbPVH-.js";import"./index-DE-upP0k.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-BF_20RMR.js";import"./components-DYsyV1GU.js";import"./Menu-ysMRmlXP.js";import"./useListItemRegister-BmbSpdFv.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-DwxZ_0Dc.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-DH-VqcRx.js";import"./mergeStyles-BvUVBTqR.js";import"./Box-BTogCL2M.js";import"./index-DX07rvw8.js";import"./flex-BQOSV42r.js";import"./grid-B7Ycm_WM.js";import"./useCloseOnEscape-tFE-9m7i.js";import"./Popper-DUm4UslN.js";import"./Card-CcGayy-Q.js";import"./Text-DiRXiAON.js";import"./cornerShape-BMI6yems.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-BVSeqFGz.js";import"./useListItemSelect-leprgA_P.js";import"./SystemIcon-B9G-90F0.js";import"./Svg-DNoJzoAH.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-C_BttsAq.js";import"./useFocusRedirect-C4iMN_AU.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-BP28LsTa.js";import"./SecondaryButton-H0uYbs_P.js";import"./BaseButton-C42PrzLn.js";import"./Button-BnD-Jg0r.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-ZTnGvziz.js";import"./types-DXdjelYI.js";import"./Pill-BQWuasjC.js";import"./Avatar-CH-JWXEo.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-cG7yBK1V.js";import"./TertiaryButton-NGRKdfwQ.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-DnJkdvOy.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
