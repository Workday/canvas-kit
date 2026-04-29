import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{S as r}from"./SidePanel-DAHD4JOL.js";import{S as i}from"./StaticStates-kDyV_ZDH.js";import{C as l}from"./ComponentStatesTable-jhhL0fUQ.js";import{p}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./extend-DXQzslqV.js";import"./types-wqmYQQWa.js";import"./components-XIe_upcR.js";import"./Tooltip-De1KsO5U.js";import"./useTooltip-p8F4NfJ4.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./cs-DvbI9OYs.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./index-CYsyLHR7.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-CbBD4ERB.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./TertiaryButton-DaDaXMfE.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./Button-Cp7fe3Zs.js";const Q={title:"Testing/Preview/Side Panel",component:r,parameters:{chromatic:{disable:!1}}},a=()=>e.jsx(i,{children:e.jsx(l,{rowProps:[{label:"Standard Variant",props:{variant:"standard"}},{label:"Alternate Variant",props:{variant:"alternate"}}],columnProps:p({expanded:[{label:"Collapsed",value:!1},{label:"Expanded",value:!0},{label:"",value:void 0}],origin:[{label:"(left)",value:"left"},{label:"(right)",value:"right"}]},({expanded:t,defaultExpanded:o})=>!(t!==void 0&&o!==void 0||t===void 0&&o===void 0)),children:t=>e.jsx("div",{style:{height:480},children:e.jsx(r,{...t,touched:!1,children:e.jsx(r.ToggleButton,{"aria-label":"toggle button"})})})})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
  </StaticStates>`,...a.parameters?.docs?.source}}};const U=["SidePanelStates"];export{a as SidePanelStates,U as __namedExportsOrder,Q as default};
