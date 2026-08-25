import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{S as r}from"./SidePanel-Bhqb9aiB.js";import{S as i}from"./StaticStates-gAEM3PjO.js";import{C as l}from"./ComponentStatesTable-CI7pF_Dk.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./extend-BphcO0BU.js";import"./types-wqmYQQWa.js";import"./components-DIXe_rXl.js";import"./Tooltip-DC2MIugw.js";import"./useTooltip-COXD4t91.js";import"./getTransformFromPlacement-CVuX70VQ.js";import"./CanvasProvider-BTLvcapT.js";import"./index-DE-upP0k.js";import"./index-D-t2nnqG.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./mergeStyles-C3mqUtmC.js";import"./Box-BwSubRt6.js";import"./index-DX07rvw8.js";import"./flex-1BnMPfFj.js";import"./grid-DeBl5Muz.js";import"./useCloseOnEscape-Pga8fWKh.js";import"./Popper-BRbe_tz9.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./TertiaryButton-GhfgKIvV.js";import"./BaseButton-D8zYHbxs.js";import"./SystemIcon-Bc5FTqSz.js";import"./Svg-CDh6670a.js";import"./px2rem-C0KbprIx.js";import"./Button-BuO9pq7_.js";const L={title:"Testing/Preview/Side Panel",component:r,parameters:{chromatic:{disable:!1}}},a=()=>e.jsx(i,{children:e.jsx(l,{rowProps:[{label:"Standard Variant",props:{variant:"standard"}},{label:"Alternate Variant",props:{variant:"alternate"}}],columnProps:n({expanded:[{label:"Collapsed",value:!1},{label:"Expanded",value:!0},{label:"",value:void 0}],origin:[{label:"(left)",value:"left"},{label:"(right)",value:"right"}]},({expanded:t,defaultExpanded:o})=>!(t!==void 0&&o!==void 0||t===void 0&&o===void 0)),children:t=>e.jsx("div",{style:{height:480},children:e.jsx(r,{...t,touched:!1,children:e.jsx(r.ToggleButton,{"aria-label":"toggle button"})})})})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
