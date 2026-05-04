import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as c}from"./index-IfJi-UCQ.js";import{r as u}from"./related-actions-vertical-BIB0AGxg.js";import{S as r,u as d}from"./SidePanel-6niGACLB.js";import{T as g}from"./TertiaryButton-jo8ThkBe.js";import{P as x}from"./PrimaryButton-Cnd4N9Ks.js";import"./types-wqmYQQWa.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./TypeLevelComponents-Bw_WRa4H.js";import"./Text-DRUbleCp.js";import"./components-1G01j-He.js";import"./mergeStyles-BK8Hz87n.js";import"./Box-DFceh3YA.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-C5MVqyzH.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./extend-DXQzslqV.js";import"./Tooltip-Btv9iUgu.js";import"./useTooltip-C6jxCkQj.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./index-CYsyLHR7.js";import"./useCloseOnEscape-BOBxCx8K.js";import"./Popper-CvC-z2TH.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-BJ-OMKNq.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./px2rem-C0KbprIx.js";import"./BaseButton-BY16VLV0.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./Button-BQ1TZXwZ.js";const ne={title:"Testing/Labs/Side Panel/Cypress",component:r},s=n=>e.jsx("div",{style:{display:"flex",height:"calc(100vh - 80px)",width:"100%"},...n}),i="Accessible Label Name",t=()=>{const n=d();return e.jsx(s,{children:e.jsxs(r,{model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]})})},o=()=>{const n=d();return e.jsx(s,{children:e.jsxs(r,{as:"div",role:"region",model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]})})},a=()=>{const n=d();return e.jsxs(s,{children:[e.jsxs(r,{as:"aside",model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]}),e.jsx("div",{children:"Main Content"})]})},l=()=>{const n=d(),m=p=>e.jsx("div",{style:{width:"100%",height:60,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 16px",boxSizing:"border-box",border:"1px solid #777",position:"relative",zIndex:1},...p});return e.jsxs(c.Fragment,{children:[e.jsx(m,{children:e.jsx(g,{icon:u,"aria-label":"Open"})}),e.jsx(s,{children:e.jsxs(r,{model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx("h1",{children:"Panel Name"}),e.jsx(r.ToggleButton,{"aria-label":i}),e.jsx(x,{children:"Another Button"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
