import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as c}from"./index-IfJi-UCQ.js";import{r as u}from"./related-actions-vertical-D0z7OuPs.js";import{S as r,u as d}from"./SidePanel-C20qLf3_.js";import{T as g}from"./TertiaryButton-DO37jVwm.js";import{P as x}from"./PrimaryButton-4TCSUBdk.js";import"./types-wqmYQQWa.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./TypeLevelComponents-BsU4u7Uu.js";import"./Text-BZ18Rj60.js";import"./components-dzPj21Gy.js";import"./mergeStyles-GqD3_A5P.js";import"./Box-DsxcKhHC.js";import"./index-DZtdzgZp.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./flex-BKEnktnP.js";import"./grid-B0yCnV-C.js";import"./sidebar-right-DcfakxVR.js";import"./Tooltip-08h0EB5u.js";import"./useTooltip-D7ZZfUuA.js";import"./getTransformFromPlacement-D0JsQZex.js";import"./CanvasProvider-BziuWf85.js";import"./index-jCBjnmNg.js";import"./index-kj8ZfNNN.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useCloseOnEscape-TVPAhJIC.js";import"./Popper-BG2qD-j2.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./px2rem-C0KbprIx.js";import"./BaseButton-B8gT3S4k.js";import"./SystemIcon-CTUsj8TD.js";import"./Svg-DvDsbIKv.js";import"./Button--R7xcJ39.js";const $={title:"Testing/Labs/Side Panel/Cypress",component:r},s=n=>e.jsx("div",{style:{display:"flex",height:"calc(100vh - 80px)",width:"100%"},...n}),i="Accessible Label Name",t=()=>{const n=d();return e.jsx(s,{children:e.jsxs(r,{model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]})})},o=()=>{const n=d();return e.jsx(s,{children:e.jsxs(r,{as:"div",role:"region",model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]})})},a=()=>{const n=d();return e.jsxs(s,{children:[e.jsxs(r,{as:"aside",model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]}),e.jsx("div",{children:"Main Content"})]})},l=()=>{const n=d(),m=p=>e.jsx("div",{style:{width:"100%",height:60,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 16px",boxSizing:"border-box",border:"1px solid #777",position:"relative",zIndex:1},...p});return e.jsxs(c.Fragment,{children:[e.jsx(m,{children:e.jsx(g,{icon:u,"aria-label":"Open"})}),e.jsx(s,{children:e.jsxs(r,{model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx("h1",{children:"Panel Name"}),e.jsx(r.ToggleButton,{"aria-label":i}),e.jsx(x,{children:"Another Button"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const model = useSidePanelModel();
  return <Container>
      <SidePanel model={model}>
        <SidePanel.Heading hidden>{label}</SidePanel.Heading>
        <SidePanel.ToggleButton aria-label={label} />
      </SidePanel>
    </Container>;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const model = useSidePanelModel();
  return <Container>
      <SidePanel as="div" role="region" model={model}>
        <SidePanel.Heading hidden>{label}</SidePanel.Heading>
        <SidePanel.ToggleButton aria-label={label} />
      </SidePanel>
    </Container>;
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const model = useSidePanelModel();
  return <Container>
      <SidePanel as="aside" model={model}>
        <SidePanel.Heading hidden>{label}</SidePanel.Heading>
        <SidePanel.ToggleButton aria-label={label} />
      </SidePanel>
      <div>Main Content</div>
    </Container>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const model = useSidePanelModel();
  const Header = props => {
    return <div style={{
      width: '100%',
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '8px 16px',
      boxSizing: 'border-box',
      border: '1px solid #777',
      position: 'relative',
      zIndex: 1
    }} {...props} />;
  };
  return <React.Fragment>
      <Header>
        <TertiaryButton icon={relatedActionsVerticalIcon} aria-label="Open" />
      </Header>
      <Container>
        <SidePanel model={model}>
          <SidePanel.Heading hidden>{label}</SidePanel.Heading>
          <h1>Panel Name</h1>
          <SidePanel.ToggleButton aria-label={label} />
          <PrimaryButton>Another Button</PrimaryButton>
        </SidePanel>
      </Container>
    </React.Fragment>;
}`,...l.parameters?.docs?.source}}};const ee=["Default","AsDiv","AsAside","FirstFocusable"];export{a as AsAside,o as AsDiv,t as Default,l as FirstFocusable,ee as __namedExportsOrder,$ as default};
