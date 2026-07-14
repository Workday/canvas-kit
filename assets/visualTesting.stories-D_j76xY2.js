import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as u}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-DtF0hq1d.js";import{M as a}from"./MultiSelect-CGQRC0WA.js";import{S as p}from"./StaticStates-MSWr8SnM.js";import{C as s}from"./ComponentStatesTable-CFexaReD.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./CanvasProvider-DKylCnBg.js";import"./index-5dfzm_kn.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-B2vXpe_3.js";import"./models-CHTjB2ql.js";import"./Combobox-B1ruOAZ6.js";import"./components-Dyf4Q_nV.js";import"./Menu-DSo02gQf.js";import"./useListItemSelect-DneYhCSJ.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-BHLrFCpr.js";import"./mergeStyles-DA3z7m0v.js";import"./Box-Dji2xsFp.js";import"./index-N3xz2Kqy.js";import"./flex-CoK9Wr5Y.js";import"./grid-BEk7oOv6.js";import"./useCloseOnEscape-Ci8oPZu-.js";import"./Popper-BRNkOZhn.js";import"./Card-C0w1QPqP.js";import"./Text-CSA8kpWB.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-COhmJumV.js";import"./SystemIcon-CcQdM6y6.js";import"./Svg-CDIwIDn-.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-CbmVYS2o.js";import"./useReturnFocus-D1Qs81ZF.js";import"./check-small-C7Z-gSGs.js";import"./usePopupTarget-Cgr2fBV0.js";import"./SecondaryButton-CFAfozPp.js";import"./BaseButton-B0mfYlEf.js";import"./Button-6WgYUb9O.js";import"./chevron-right-small-DxmMaev8.js";import"./TextInput-CGpXr3az.js";import"./types-DXdjelYI.js";import"./Pill-ahYvq0-O.js";import"./Avatar-CQ9_iIDw.js";import"./plus-E0HzoyQR.js";import"./x-small-DK7gM0f7.js";import"./InputGroup-DiEvsZAE.js";import"./TertiaryButton-BROdkGKz.js";import"./search-INhyn6-E.js";import"./caret-down-small-UmNc4PEr.js";import"./useComboboxInputConstrained-FzDtHOhq.js";const be={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(p,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:u}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
  </StaticStates>`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => <MultiSelectStates />",...l.parameters?.docs?.source}}};const Se=["MultiSelectStates","MultiSelectThemedStates"];export{r as MultiSelectStates,l as MultiSelectThemedStates,Se as __namedExportsOrder,be as default};
