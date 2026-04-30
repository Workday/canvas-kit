import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{S as r}from"./SidePanel-mOtJyT0d.js";import{S as i}from"./StaticStates-CBZqM5Fo.js";import{C as l}from"./ComponentStatesTable-jhhL0fUQ.js";import{p}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./extend-DXQzslqV.js";import"./types-wqmYQQWa.js";import"./components-CXVvXGX8.js";import"./Tooltip-B3V4skOm.js";import"./useTooltip-DUG7iIce.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./cs-DvbI9OYs.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./index-CYsyLHR7.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./Popper-CGqk9_xm.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-BRuur9nH.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./TertiaryButton-Byu4oUFZ.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./px2rem-C0KbprIx.js";import"./Button-_9ty_XDZ.js";const Q={title:"Testing/Preview/Side Panel",component:r,parameters:{chromatic:{disable:!1}}},a=()=>e.jsx(i,{children:e.jsx(l,{rowProps:[{label:"Standard Variant",props:{variant:"standard"}},{label:"Alternate Variant",props:{variant:"alternate"}}],columnProps:p({expanded:[{label:"Collapsed",value:!1},{label:"Expanded",value:!0},{label:"",value:void 0}],origin:[{label:"(left)",value:"left"},{label:"(right)",value:"right"}]},({expanded:t,defaultExpanded:o})=>!(t!==void 0&&o!==void 0||t===void 0&&o===void 0)),children:t=>e.jsx("div",{style:{height:480},children:e.jsx(r,{...t,touched:!1,children:e.jsx(r.ToggleButton,{"aria-label":"toggle button"})})})})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
