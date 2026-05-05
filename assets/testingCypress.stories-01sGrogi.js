import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as c}from"./index-IfJi-UCQ.js";import{r as u}from"./related-actions-vertical-BIB0AGxg.js";import{S as r,u as d}from"./SidePanel-BMqUNXW_.js";import{T as g}from"./TertiaryButton-OzUplWoq.js";import{P as x}from"./PrimaryButton-Df7swaDK.js";import"./types-wqmYQQWa.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./TypeLevelComponents-A6AqS-F4.js";import"./Text-7hsxTSvc.js";import"./components-BLZqCckY.js";import"./mergeStyles-CkJ8NvhI.js";import"./Box-CWkwzNZI.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-dYq3mHEV.js";import"./flex-BpVYzPsg.js";import"./grid-COFwODL4.js";import"./extend-DXQzslqV.js";import"./Tooltip-BudaSkJa.js";import"./useTooltip-C8VhxzUk.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./index-CYsyLHR7.js";import"./useCloseOnEscape-CMzgaKMd.js";import"./Popper-C7XE30xe.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-D16Zuzp0.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./px2rem-C0KbprIx.js";import"./BaseButton-CGvKmIsu.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-CQzQ4gRr.js";import"./Svg-CFKxmZXN.js";import"./Button-C6qfAYgQ.js";const ne={title:"Testing/Labs/Side Panel/Cypress",component:r},s=n=>e.jsx("div",{style:{display:"flex",height:"calc(100vh - 80px)",width:"100%"},...n}),i="Accessible Label Name",t=()=>{const n=d();return e.jsx(s,{children:e.jsxs(r,{model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]})})},o=()=>{const n=d();return e.jsx(s,{children:e.jsxs(r,{as:"div",role:"region",model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]})})},a=()=>{const n=d();return e.jsxs(s,{children:[e.jsxs(r,{as:"aside",model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]}),e.jsx("div",{children:"Main Content"})]})},l=()=>{const n=d(),m=p=>e.jsx("div",{style:{width:"100%",height:60,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 16px",boxSizing:"border-box",border:"1px solid #777",position:"relative",zIndex:1},...p});return e.jsxs(c.Fragment,{children:[e.jsx(m,{children:e.jsx(g,{icon:u,"aria-label":"Open"})}),e.jsx(s,{children:e.jsxs(r,{model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx("h1",{children:"Panel Name"}),e.jsx(r.ToggleButton,{"aria-label":i}),e.jsx(x,{children:"Another Button"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const ie=["Default","AsDiv","AsAside","FirstFocusable"];export{a as AsAside,o as AsDiv,t as Default,l as FirstFocusable,ie as __namedExportsOrder,ne as default};
