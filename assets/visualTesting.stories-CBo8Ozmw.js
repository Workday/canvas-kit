import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-DXJqDxhS.js";import"./CanvasProviderDecorator-gSrkEUyP.js";import{M as a}from"./MultiSelect-BgqEs3ie.js";import{S as u}from"./StaticStates-DA20hqGR.js";import{C as s}from"./ComponentStatesTable-Cl7Bbm7N.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-D-t2nnqG.js";import"./CanvasProvider-C8GkxeBT.js";import"./index-DE-upP0k.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-QItIdHhC.js";import"./components-d5Lq2N3r.js";import"./Menu-DHE2CAff.js";import"./useListItemRegister-DRuomJPi.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-DFpy6Eid.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-gRyGftt9.js";import"./mergeStyles-Bv4mj65-.js";import"./Box-8rtctY3X.js";import"./index-DWHOiqdi.js";import"./flex-C1nlk4Q5.js";import"./grid-kt9rUtwL.js";import"./useCloseOnEscape-D0RFoaOv.js";import"./Popper-Cm0FFZPA.js";import"./Card-Cgn41sLF.js";import"./Text-DMwz83mg.js";import"./cornerShape-DnGoKixo.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-C7AH6CXC.js";import"./useListItemSelect-BwZQ88Wp.js";import"./SystemIcon-BcDZsE52.js";import"./Svg-ZtmPf1WS.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-B9CbcNi8.js";import"./useFocusRedirect-ClVmmyIj.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-CeDO4AGg.js";import"./SecondaryButton-edyy8Yyq.js";import"./BaseButton-9fY3LWrU.js";import"./Button-CHFUbppk.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-CMmZv4Ba.js";import"./types-DXdjelYI.js";import"./Pill-DD2S5d2m.js";import"./Avatar-b92-NjIl.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-CWsfaIK2.js";import"./TertiaryButton-CrOm2fp9.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-Dl1pXay7.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
