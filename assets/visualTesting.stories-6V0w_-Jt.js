import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-jq6x80yC.js";import{M as a}from"./MultiSelect-D2fZZBLX.js";import{S as u}from"./StaticStates-CZoSR_67.js";import{C as s}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-0Y3auRRO.js";import"./index-CYsyLHR7.js";import"./models-CHTjB2ql.js";import"./Combobox-CIWwyDB1.js";import"./components-DlilqqSw.js";import"./Menu-BIIZhJne.js";import"./useListItemSelect-D_3E8f4q.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-DDaYfV4J.js";import"./mergeStyles-DCTLot6K.js";import"./Box-CfIP0C5s.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./index-C5MVqyzH.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./useCloseOnEscape-BL74-I4Y.js";import"./Popper-DTfQE2mh.js";import"./Card-Dd5fhXE2.js";import"./Text-Tayi47N3.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-xP33ONM-.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-DOtUfDeI.js";import"./useReturnFocus-Xz-_vB17.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-BtGg5hr7.js";import"./SecondaryButton-BfP_SOlX.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./Button-Cg4j9RPw.js";import"./chevron-right-small-CQ6vqfU4.js";import"./TextInput-3pzA4Qd-.js";import"./types-DXdjelYI.js";import"./Pill-DhvamNvL.js";import"./Avatar-DPtlMwRl.js";import"./plus-BSkOQ6An.js";import"./x-small-BxvQm8EX.js";import"./InputGroup-DfkKeHlq.js";import"./TertiaryButton-a9_U68ho.js";import"./search-DC_v2gTw.js";import"./caret-down-small-CQgB4GlK.js";import"./useComboboxInputConstrained-72beOUsJ.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
