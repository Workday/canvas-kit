import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as u}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-Cr11k6DC.js";import{M as a}from"./MultiSelect-DRuAozRb.js";import{S as p}from"./StaticStates-C-HyzpWw.js";import{C as s}from"./ComponentStatesTable-4iWB-WT1.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./CanvasProvider-BlMVDzJE.js";import"./index-5dfzm_kn.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./models-CHTjB2ql.js";import"./Combobox-ChMNQMFY.js";import"./components-DitCssni.js";import"./Menu-C5PsiTxH.js";import"./useListItemSelect-DoDsyqU1.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-CMv2Kew9.js";import"./mergeStyles-CxEFJuxU.js";import"./Box-DEOrcYtQ.js";import"./index-DmIRx617.js";import"./flex-ns_uTuwY.js";import"./grid-W0du1by9.js";import"./useCloseOnEscape-RijVekFd.js";import"./Popper-CfI3sZZj.js";import"./Card-CaPe9j_I.js";import"./Text-BDAVcU1f.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-BAwBmgsm.js";import"./SystemIcon-CP78lq3V.js";import"./Svg-CZqhN3kO.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-aoA_KUZq.js";import"./useReturnFocus-DSLnfxPR.js";import"./check-small-C7Z-gSGs.js";import"./usePopupTarget-X7rx-n4X.js";import"./SecondaryButton-BpQ17X7-.js";import"./BaseButton-MNe7k-Ow.js";import"./Button-Dptie1iu.js";import"./chevron-right-small-DxmMaev8.js";import"./TextInput-DVgi3nRK.js";import"./types-DXdjelYI.js";import"./Pill-CD5uiS_5.js";import"./Avatar-D7pjJDyI.js";import"./plus-E0HzoyQR.js";import"./x-small-DK7gM0f7.js";import"./InputGroup-Dfw5zw0N.js";import"./TertiaryButton-B_PXBCfh.js";import"./search-INhyn6-E.js";import"./caret-down-small-UmNc4PEr.js";import"./useComboboxInputConstrained-CWEPKlwj.js";const be={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(p,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:u}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
