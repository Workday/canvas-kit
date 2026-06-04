import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as u}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-DCuHKqo_.js";import{M as a}from"./MultiSelect-AnJ7xC13.js";import{S as p}from"./StaticStates-BT1TFmrJ.js";import{C as s}from"./ComponentStatesTable-19kzZAkK.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./CanvasProvider-DcYN8xn4.js";import"./index-5dfzm_kn.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./models-CHTjB2ql.js";import"./Combobox-DA1BJ5lx.js";import"./components-AX32LNYc.js";import"./Menu-CsL8z9ai.js";import"./useListItemSelect-gTjksZb8.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-DUbvqIp1.js";import"./mergeStyles-BAqoDFu5.js";import"./Box-BPraYaO3.js";import"./index-N3xz2Kqy.js";import"./flex-BT-UZmhF.js";import"./grid-CpPShNRZ.js";import"./useCloseOnEscape-D7zKS4W4.js";import"./Popper-JKy5AP_Q.js";import"./Card-CPSdbjS9.js";import"./Text-ypSk16zO.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-B8mlvvwE.js";import"./SystemIcon-BoCe_uUf.js";import"./Svg-BEZEbUw_.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-Ctgd8e1U.js";import"./useReturnFocus-judg8Hd8.js";import"./check-small-C7Z-gSGs.js";import"./usePopupTarget-DxD_7TBA.js";import"./SecondaryButton-BGDiW78O.js";import"./BaseButton-DzH1x21V.js";import"./Button-BNyLbu3E.js";import"./chevron-right-small-DxmMaev8.js";import"./TextInput-B9QSeSVf.js";import"./types-DXdjelYI.js";import"./Pill-VQ1jro84.js";import"./Avatar-B-RlkJJo.js";import"./plus-E0HzoyQR.js";import"./x-small-DK7gM0f7.js";import"./InputGroup-ahQdAbzf.js";import"./TertiaryButton-CpHRrsEL.js";import"./search-INhyn6-E.js";import"./caret-down-small-UmNc4PEr.js";import"./useComboboxInputConstrained-DEZ0hgOT.js";const be={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(p,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:u}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
