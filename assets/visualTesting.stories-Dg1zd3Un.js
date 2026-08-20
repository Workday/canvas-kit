import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-D7Bk8CEq.js";import"./CanvasProviderDecorator-d-7cr-WC.js";import{M as a}from"./MultiSelect-D6r7e-QF.js";import{S as u}from"./StaticStates-DQfAotsh.js";import{C as s}from"./ComponentStatesTable-u_KZtbcZ.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-D-t2nnqG.js";import"./CanvasProvider-BhcD6OFZ.js";import"./index-DE-upP0k.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-Q1rts8ME.js";import"./components-WZi6LWjd.js";import"./Menu-BJR-E_KQ.js";import"./useListItemRegister-DJGV2aRR.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-C4BElB4Q.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-BagWJqAy.js";import"./mergeStyles-C7rR1M8O.js";import"./Box-8nFq7jwp.js";import"./index-DX07rvw8.js";import"./flex-DzaubaG6.js";import"./grid-CQvZVltP.js";import"./useCloseOnEscape-Ba4phxpK.js";import"./Popper-Dfod5tHK.js";import"./Card-CjRV3_45.js";import"./Text-Bea_87QG.js";import"./cornerShape-DLCpy5rz.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-DZFsSb7W.js";import"./useListItemSelect-DSbsrAcj.js";import"./SystemIcon-CznyzdLa.js";import"./Svg-DpPQdFHV.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-BgGx7-9x.js";import"./useFocusRedirect-Cv0dKCjs.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-B1OlaCJM.js";import"./SecondaryButton-CdfwS4EL.js";import"./BaseButton-DvzFkALc.js";import"./Button-0EZFZE1C.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-FDN0LuCb.js";import"./types-DXdjelYI.js";import"./Pill-Evv9NZ08.js";import"./Avatar-xvTe6Ek1.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-C672qnyN.js";import"./TertiaryButton-BJZB5OgW.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-Dt8O_qB_.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
