import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as p}from"./customThemes-U3nrj7GQ.js";import"./CanvasProviderDecorator-C6Yk_d99.js";import{M as a}from"./MultiSelect-qpE_hsmM.js";import{S as u}from"./StaticStates-CWK23Yeo.js";import{C as s}from"./ComponentStatesTable-Bql9CI1w.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-kj8ZfNNN.js";import"./CanvasProvider-BrxZQKSv.js";import"./index-jCBjnmNg.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./models-CHTjB2ql.js";import"./Combobox-vIIwffSm.js";import"./components-B1mGnJpp.js";import"./Menu-BZaYLoxG.js";import"./useListItemRegister-BISehTrv.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-CnzpioCY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-DgIB_12S.js";import"./mergeStyles-DOP9Jdsg.js";import"./Box-Ds0y4SrM.js";import"./index-5enOfKoO.js";import"./flex-CToZMAna.js";import"./grid-CxoxzKOV.js";import"./useCloseOnEscape-CpP-Bvvu.js";import"./Popper-CbntXY40.js";import"./Card-LdN1cFuM.js";import"./Text-Bka4LqhJ.js";import"./cornerShape-nJoLwGwG.js";import"./px2rem-C0KbprIx.js";import"./OverflowTooltip-Rh19x-4O.js";import"./useListItemSelect-PsQk8-v0.js";import"./SystemIcon-Dn8ry8Fs.js";import"./Svg-EhlVkbPa.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-pD0NUvMs.js";import"./useFocusRedirect-2pSmmBYq.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-DVpri5Fh.js";import"./SecondaryButton-CW8bmGIW.js";import"./BaseButton-ozivwaWz.js";import"./Button-Ho16nQOa.js";import"./chevron-right-small-Ng-H0z5q.js";import"./TextInput-Z2WzeqSp.js";import"./types-DXdjelYI.js";import"./Pill-Dba6G_s8.js";import"./Avatar-BziiGdMZ.js";import"./plus-CZKxhJ9E.js";import"./x-small-Cfgu7dLY.js";import"./InputGroup-4kyGgGz4.js";import"./TertiaryButton-BUc32dy7.js";import"./search-DlWaqbP4.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useComboboxInputConstrained-3qRzbC9W.js";const Ie={title:"Testing/Inputs/MultiSelect",component:a,parameters:{chromatic:{disable:!1}}},r=()=>t.jsx(u,{children:t.jsx(s,{rowProps:n({value:[{value:"",label:"No Value"},{value:"With Value",label:"With Value"}],searchInput:[{value:!1,label:"No Search"},{value:!0,label:"Search"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:"caution",label:"Caution"},{value:"error",label:"Error"}]},e=>!(e.value===""&&!e.placeholder)),columnProps:n({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},e=>!(e.disabled&&!["","hover"].includes(e.className))),children:({searchInput:e,...o})=>{const i=e?a.SearchInput:a.Input;return t.jsx(a,{items:["With Value"],initialSelectedIds:o.value?[o.value]:[],children:t.jsx(i,{...o,style:{minWidth:60,width:140},onChange:()=>{}})})}})}),l=()=>t.jsx(r,{});l.parameters={canvasProviderDecorator:{theme:p}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
