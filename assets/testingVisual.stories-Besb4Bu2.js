import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{S as r}from"./SidePanel-LSg1x5qZ.js";import{S as i}from"./StaticStates-VZBJ0TJs.js";import{C as l}from"./ComponentStatesTable-lYSTiezT.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./extend-BphcO0BU.js";import"./types-wqmYQQWa.js";import"./components-eQ_txa-f.js";import"./Tooltip-B8mUJnbM.js";import"./useTooltip-CS5bngwT.js";import"./getTransformFromPlacement-C8S8FYK9.js";import"./CanvasProvider-CFtqHR-b.js";import"./index-DE-upP0k.js";import"./index-pMzza0x6.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./mergeStyles-C5CqGCLQ.js";import"./Box-5BC0dNqB.js";import"./index-Dusw0zrf.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./useCloseOnEscape-Dxv9jUxq.js";import"./Popper-DYfGvA07.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./TertiaryButton-C_EvQ6Qu.js";import"./BaseButton-CivL5PJl.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./px2rem-C0KbprIx.js";import"./Button-wmECgaEK.js";const L={title:"Testing/Preview/Side Panel",component:r,parameters:{chromatic:{disable:!1}}},a=()=>e.jsx(i,{children:e.jsx(l,{rowProps:[{label:"Standard Variant",props:{variant:"standard"}},{label:"Alternate Variant",props:{variant:"alternate"}}],columnProps:n({expanded:[{label:"Collapsed",value:!1},{label:"Expanded",value:!0},{label:"",value:void 0}],origin:[{label:"(left)",value:"left"},{label:"(right)",value:"right"}]},({expanded:t,defaultExpanded:o})=>!(t!==void 0&&o!==void 0||t===void 0&&o===void 0)),children:t=>e.jsx("div",{style:{height:480},children:e.jsx(r,{...t,touched:!1,children:e.jsx(r.ToggleButton,{"aria-label":"toggle button"})})})})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={[{
    label: 'Standard Variant',
    props: {
      variant: 'standard'
    }
  }, {
    label: 'Alternate Variant',
    props: {
      variant: 'alternate'
    }
  }]} columnProps={permutateProps({
    expanded: [{
      label: 'Collapsed',
      value: false
    }, {
      label: 'Expanded',
      value: true
    }, {
      label: '',
      value: undefined
    }],
    origin: [{
      label: '(left)',
      value: 'left'
    }, {
      label: '(right)',
      value: 'right'
    }]
  }, ({
    expanded,
    defaultExpanded
  }) => {
    // Don't show permutations of both values being defined (expanded prop always wins over defaultExpanded)
    if (expanded !== undefined && defaultExpanded !== undefined) {
      return false;
    }
    // Don't show if both are undefined
    if (expanded === undefined && defaultExpanded === undefined) {
      return false;
    }
    return true;
  })}>
      {props => <div style={{
      height: 480
    }}>
          <SidePanel {...props} touched={false}>
            <SidePanel.ToggleButton aria-label="toggle button" />
          </SidePanel>
        </div>}
    </ComponentStatesTable>
  </StaticStates>`,...a.parameters?.docs?.source}}};const M=["SidePanelStates"];export{a as SidePanelStates,M as __namedExportsOrder,L as default};
