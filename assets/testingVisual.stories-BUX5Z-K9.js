import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{S as r}from"./SidePanel-CXAg5B6U.js";import{S as i}from"./StaticStates-BdbDVKZL.js";import{C as l}from"./ComponentStatesTable-XUSOQtHP.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./extend-BphcO0BU.js";import"./types-wqmYQQWa.js";import"./components-pm5o1xBY.js";import"./Tooltip-B2PpvoY-.js";import"./useTooltip-DZiOcCHG.js";import"./getTransformFromPlacement-BIgn6nFa.js";import"./CanvasProvider-DrTkG8rB.js";import"./index--KWQvxqz.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./mergeStyles-Dgag8kI5.js";import"./Box-Cxcl3Pz4.js";import"./index-DX07rvw8.js";import"./flex-C8-Q7Yge.js";import"./grid-1w_RIXoS.js";import"./useCloseOnEscape-BB6dVqt7.js";import"./Popper-CK4bDZ3N.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BYrZAbxn.js";import"./BaseButton-BhNh45z4.js";import"./SystemIcon--fqcxg9T.js";import"./Svg-tkxNvoYx.js";import"./px2rem-C0KbprIx.js";import"./Button-CHcm6yl-.js";const M={title:"Testing/Preview/Side Panel",component:r,parameters:{chromatic:{disable:!1}}},a=()=>e.jsx(i,{children:e.jsx(l,{rowProps:[{label:"Standard Variant",props:{variant:"standard"}},{label:"Alternate Variant",props:{variant:"alternate"}}],columnProps:n({expanded:[{label:"Collapsed",value:!1},{label:"Expanded",value:!0},{label:"",value:void 0}],origin:[{label:"(left)",value:"left"},{label:"(right)",value:"right"}]},({expanded:t,defaultExpanded:o})=>!(t!==void 0&&o!==void 0||t===void 0&&o===void 0)),children:t=>e.jsx("div",{style:{height:480},children:e.jsx(r,{...t,touched:!1,children:e.jsx(r.ToggleButton,{"aria-label":"toggle button"})})})})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
  </StaticStates>`,...a.parameters?.docs?.source}}};const N=["SidePanelStates"];export{a as SidePanelStates,N as __namedExportsOrder,M as default};
