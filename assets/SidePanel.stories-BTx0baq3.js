import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{S as e}from"./SidePanel-tFd1B9IK.js";import{S as o}from"./StaticStates-CBZqM5Fo.js";import{C as n}from"./ComponentStatesTable-jhhL0fUQ.js";import{l}from"./index-CYsyLHR7.js";import"./index-IfJi-UCQ.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./TypeLevelComponents-DgctLa3l.js";import"./Text-Dt7EG7Lz.js";import"./components-CXVvXGX8.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-CdbxS-xI.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./extend-DXQzslqV.js";import"./types-wqmYQQWa.js";import"./Tooltip-B3V4skOm.js";import"./useTooltip-DUG7iIce.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./Popper-CGqk9_xm.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-BRuur9nH.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./TertiaryButton-Byu4oUFZ.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./px2rem-C0KbprIx.js";import"./Button-_9ty_XDZ.js";const M={title:"Testing/Containers/Side Panel",component:e,parameters:{chromatic:{disable:!1}}},a={render:()=>t.jsx(o,{children:t.jsx(n,{rowProps:[{label:"Default",props:{initialTransitionState:"expanded"}},{label:"With Heading",props:{header:"Navigation",initialTransitionState:"expanded"}},{label:"With White Background",props:{header:"Navigation",initialTransitionState:"expanded",variant:"alternate"}},{label:"With On Toggle Click",props:{header:"Navigation",initialTransitionState:"expanded",variant:"standard",onToggleClick:()=>console.log("click toggle button")}},{label:"With open direction from right",props:{header:"Navigation",initialTransitionState:"expanded",variant:"standard",onToggleClick:()=>console.log("click toggle button"),origin:"end"}},{label:"With custom padding",props:{header:"Navigation",initialTransitionState:"expanded",variant:"standard",onToggleClick:()=>console.log("click toggle button"),padding:l.padding.xs}},{label:"With custom open width",props:{header:"Navigation",initialTransitionState:"expanded",variant:"alternate",onToggleClick:()=>console.log("click toggle button"),expandedWidth:350}},{label:"When closed",props:{header:"Navigation",initialTransitionState:"collapsed",onToggleClick:()=>console.log("click toggle button")}}],columnProps:[{label:"Default",props:{}}],children:i=>t.jsx("div",{style:{position:"relative",height:200},children:t.jsxs(e,{initialTransitionState:i.initialTransitionState,origin:i.origin,cs:{padding:i.padding?i.padding:"none"},expandedWidth:i.expandedWidth,...i,children:[i.header&&t.jsx(e.Heading,{children:i.header}),i.onToggleClick&&t.jsx(e.ToggleButton,{"aria-label":"Collapse View"}),i.initialTransitionState!=="collapsed"&&"Panel Content"]})})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
