import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{S as e}from"./SidePanel-BMqUNXW_.js";import{S as o}from"./StaticStates-BCLTLQi1.js";import{C as n}from"./ComponentStatesTable-jhhL0fUQ.js";import{l}from"./index-CYsyLHR7.js";import"./index-IfJi-UCQ.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./TypeLevelComponents-A6AqS-F4.js";import"./Text-7hsxTSvc.js";import"./components-BLZqCckY.js";import"./mergeStyles-CkJ8NvhI.js";import"./Box-CWkwzNZI.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-dYq3mHEV.js";import"./flex-BpVYzPsg.js";import"./grid-COFwODL4.js";import"./extend-DXQzslqV.js";import"./types-wqmYQQWa.js";import"./Tooltip-BudaSkJa.js";import"./useTooltip-C8VhxzUk.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useCloseOnEscape-CMzgaKMd.js";import"./Popper-C7XE30xe.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-D16Zuzp0.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./TertiaryButton-OzUplWoq.js";import"./BaseButton-CGvKmIsu.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-CQzQ4gRr.js";import"./Svg-CFKxmZXN.js";import"./px2rem-C0KbprIx.js";import"./Button-C6qfAYgQ.js";const M={title:"Testing/Containers/Side Panel",component:e,parameters:{chromatic:{disable:!1}}},a={render:()=>t.jsx(o,{children:t.jsx(n,{rowProps:[{label:"Default",props:{initialTransitionState:"expanded"}},{label:"With Heading",props:{header:"Navigation",initialTransitionState:"expanded"}},{label:"With White Background",props:{header:"Navigation",initialTransitionState:"expanded",variant:"alternate"}},{label:"With On Toggle Click",props:{header:"Navigation",initialTransitionState:"expanded",variant:"standard",onToggleClick:()=>console.log("click toggle button")}},{label:"With open direction from right",props:{header:"Navigation",initialTransitionState:"expanded",variant:"standard",onToggleClick:()=>console.log("click toggle button"),origin:"end"}},{label:"With custom padding",props:{header:"Navigation",initialTransitionState:"expanded",variant:"standard",onToggleClick:()=>console.log("click toggle button"),padding:l.padding.xs}},{label:"With custom open width",props:{header:"Navigation",initialTransitionState:"expanded",variant:"alternate",onToggleClick:()=>console.log("click toggle button"),expandedWidth:350}},{label:"When closed",props:{header:"Navigation",initialTransitionState:"collapsed",onToggleClick:()=>console.log("click toggle button")}}],columnProps:[{label:"Default",props:{}}],children:i=>t.jsx("div",{style:{position:"relative",height:200},children:t.jsxs(e,{initialTransitionState:i.initialTransitionState,origin:i.origin,cs:{padding:i.padding?i.padding:"none"},expandedWidth:i.expandedWidth,...i,children:[i.header&&t.jsx(e.Heading,{children:i.header}),i.onToggleClick&&t.jsx(e.ToggleButton,{"aria-label":"Collapse View"}),i.initialTransitionState!=="collapsed"&&"Panel Content"]})})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Default',
      props: {
        initialTransitionState: 'expanded'
      }
    }, {
      label: 'With Heading',
      props: {
        header: 'Navigation',
        initialTransitionState: 'expanded'
      }
    }, {
      label: 'With White Background',
      props: {
        header: 'Navigation',
        initialTransitionState: 'expanded',
        variant: 'alternate'
      }
    }, {
      label: 'With On Toggle Click',
      props: {
        header: 'Navigation',
        initialTransitionState: 'expanded',
        variant: 'standard',
        onToggleClick: () => console.log('click toggle button')
      }
    }, {
      label: 'With open direction from right',
      props: {
        header: 'Navigation',
        initialTransitionState: 'expanded',
        variant: 'standard',
        onToggleClick: () => console.log('click toggle button'),
        origin: 'end'
      }
    }, {
      label: 'With custom padding',
      props: {
        header: 'Navigation',
        initialTransitionState: 'expanded',
        variant: 'standard',
        onToggleClick: () => console.log('click toggle button'),
        padding: system.legacy.padding.xs
      }
    }, {
      label: 'With custom open width',
      props: {
        header: 'Navigation',
        initialTransitionState: 'expanded',
        variant: 'alternate',
        onToggleClick: () => console.log('click toggle button'),
        expandedWidth: 350
      }
    }, {
      label: 'When closed',
      props: {
        header: 'Navigation',
        initialTransitionState: 'collapsed',
        onToggleClick: () => console.log('click toggle button')
      }
    }]} columnProps={[{
      label: 'Default',
      props: {}
    }]}>
        {props => <div style={{
        position: 'relative',
        height: 200
      }}>
            <SidePanel initialTransitionState={props.initialTransitionState} origin={props.origin} cs={{
          padding: props.padding ? props.padding : 'none'
        }} expandedWidth={props.expandedWidth} {...props}>
              {props.header && <SidePanel.Heading>{props.header}</SidePanel.Heading>}
              {props.onToggleClick && <SidePanel.ToggleButton aria-label="Collapse View" />}
              {props.initialTransitionState !== 'collapsed' && 'Panel Content'}
            </SidePanel>
          </div>}
      </ComponentStatesTable>
    </StaticStates>
}`,...a.parameters?.docs?.source}}};const Q=["SidePanelStates"];export{a as SidePanelStates,Q as __namedExportsOrder,M as default};
