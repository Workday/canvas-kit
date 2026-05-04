import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-DqVolwzL.js";import{M as a}from"./MultiSelect-kE1vSXvR.js";import{S as u}from"./StaticStates-DCoU3VgY.js";import{C as s}from"./ComponentStatesTable-jhhL0fUQ.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-BJ-OMKNq.js";import"./index-CYsyLHR7.js";import"./models-CHTjB2ql.js";import"./Combobox-CrzrEyr3.js";import"./components-1G01j-He.js";import"./Menu-CIvTapno.js";import"./useListItemSelect-DuQmMHZs.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-C6jxCkQj.js";import"./mergeStyles-BK8Hz87n.js";import"./Box-DFceh3YA.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./index-C5MVqyzH.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./useCloseOnEscape-BOBxCx8K.js";import"./Popper-CvC-z2TH.js";import"./Card-CEyROzcv.js";import"./Text-DRUbleCp.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-hamrGFdg.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-Beo767rE.js";import"./useReturnFocus-BsryDfnL.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-C0UKjDnR.js";import"./SecondaryButton-CMLUii7y.js";import"./BaseButton-BY16VLV0.js";import"./styled-BsZD6Etj.js";import"./Button-BQ1TZXwZ.js";import"./chevron-right-small-CQ6vqfU4.js";import"./TextInput-CdyX2CFM.js";import"./types-DXdjelYI.js";import"./Pill-wL0vVKug.js";import"./Avatar-tCwg6Ua1.js";import"./plus-BSkOQ6An.js";import"./x-small-BxvQm8EX.js";import"./InputGroup-DVHUq4zu.js";import"./TertiaryButton-jo8ThkBe.js";import"./search-DC_v2gTw.js";import"./caret-down-small-CQgB4GlK.js";import"./useComboboxInputConstrained-BqSd-EVQ.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
