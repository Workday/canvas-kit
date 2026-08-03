import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{S as e}from"./SidePanel-0zKWsXby.js";import{S as o}from"./StaticStates-VZBJ0TJs.js";import{C as n}from"./ComponentStatesTable-lYSTiezT.js";import{l}from"./index-DE-upP0k.js";import"./index-IfJi-UCQ.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./TypeLevelComponents-gK2o1_HT.js";import"./Text-BLaZcOr9.js";import"./components-eQ_txa-f.js";import"./mergeStyles-C5CqGCLQ.js";import"./Box-5BC0dNqB.js";import"./index-Dusw0zrf.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./sidebar-right-DcfakxVR.js";import"./types-wqmYQQWa.js";import"./Tooltip-B8mUJnbM.js";import"./useTooltip-CS5bngwT.js";import"./getTransformFromPlacement-C8S8FYK9.js";import"./CanvasProvider-CFtqHR-b.js";import"./index-pMzza0x6.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useCloseOnEscape-Dxv9jUxq.js";import"./Popper-DYfGvA07.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./TertiaryButton-C_EvQ6Qu.js";import"./BaseButton-CivL5PJl.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./px2rem-C0KbprIx.js";import"./Button-wmECgaEK.js";const J={title:"Testing/Containers/Side Panel",component:e,parameters:{chromatic:{disable:!1}}},a={render:()=>t.jsx(o,{children:t.jsx(n,{rowProps:[{label:"Default",props:{initialTransitionState:"expanded"}},{label:"With Heading",props:{header:"Navigation",initialTransitionState:"expanded"}},{label:"With White Background",props:{header:"Navigation",initialTransitionState:"expanded",variant:"alternate"}},{label:"With On Toggle Click",props:{header:"Navigation",initialTransitionState:"expanded",variant:"standard",onToggleClick:()=>console.log("click toggle button")}},{label:"With open direction from right",props:{header:"Navigation",initialTransitionState:"expanded",variant:"standard",onToggleClick:()=>console.log("click toggle button"),origin:"end"}},{label:"With custom padding",props:{header:"Navigation",initialTransitionState:"expanded",variant:"standard",onToggleClick:()=>console.log("click toggle button"),padding:l.padding.xs}},{label:"With custom open width",props:{header:"Navigation",initialTransitionState:"expanded",variant:"alternate",onToggleClick:()=>console.log("click toggle button"),expandedWidth:350}},{label:"When closed",props:{header:"Navigation",initialTransitionState:"collapsed",onToggleClick:()=>console.log("click toggle button")}}],columnProps:[{label:"Default",props:{}}],children:i=>t.jsx("div",{style:{position:"relative",height:200},children:t.jsxs(e,{initialTransitionState:i.initialTransitionState,origin:i.origin,cs:{padding:i.padding?i.padding:"none"},expandedWidth:i.expandedWidth,...i,children:[i.header&&t.jsx(e.Heading,{children:i.header}),i.onToggleClick&&t.jsx(e.ToggleButton,{"aria-label":"Collapse View"}),i.initialTransitionState!=="collapsed"&&"Panel Content"]})})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const K=["SidePanelStates"];export{a as SidePanelStates,K as __namedExportsOrder,J as default};
