import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{S as r}from"./SidePanel-8F-cUt9m.js";import{S as i}from"./StaticStates-bqEt7Tkg.js";import{C as l}from"./ComponentStatesTable-BOn4P6Im.js";import{p as n}from"./permutateProps-CtMwpv-x.js";import"./index-IfJi-UCQ.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./extend-BPwMWEGU.js";import"./types-wqmYQQWa.js";import"./components-UDFgQUGn.js";import"./Tooltip-olZLRGZ7.js";import"./useTooltip-DCKGRPrh.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./cs-rfTTo7Bg.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./mergeStyles-BLLTUXpb.js";import"./Box-D2ASsm4c.js";import"./index-B6mB83wl.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./flex-d9jeEQhv.js";import"./grid-CaHUkY18.js";import"./index-5dfzm_kn.js";import"./useCloseOnEscape-DE0UiqOX.js";import"./Popper-BYIOr7u1.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-BwkooHMX.js";import"./index-5mrAZJYD.js";import"./TertiaryButton-BcURmXxb.js";import"./BaseButton-ClShVIas.js";import"./SystemIcon-Cxi23k1b.js";import"./Svg-DS7moGFZ.js";import"./px2rem-C0KbprIx.js";import"./Button-DtJ1XWk0.js";const L={title:"Testing/Preview/Side Panel",component:r,parameters:{chromatic:{disable:!1}}},a=()=>e.jsx(i,{children:e.jsx(l,{rowProps:[{label:"Standard Variant",props:{variant:"standard"}},{label:"Alternate Variant",props:{variant:"alternate"}}],columnProps:n({expanded:[{label:"Collapsed",value:!1},{label:"Expanded",value:!0},{label:"",value:void 0}],origin:[{label:"(left)",value:"left"},{label:"(right)",value:"right"}]},({expanded:t,defaultExpanded:o})=>!(t!==void 0&&o!==void 0||t===void 0&&o===void 0)),children:t=>e.jsx("div",{style:{height:480},children:e.jsx(r,{...t,touched:!1,children:e.jsx(r.ToggleButton,{"aria-label":"toggle button"})})})})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <StaticStates>
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
