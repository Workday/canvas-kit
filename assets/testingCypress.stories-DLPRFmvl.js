import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as c}from"./index-IfJi-UCQ.js";import{r as u}from"./related-actions-vertical-D0z7OuPs.js";import{S as r,u as d}from"./SidePanel-CM0iA7IF.js";import{T as g}from"./TertiaryButton-CWVeGnd9.js";import{P as x}from"./PrimaryButton-aum5gdB5.js";import"./types-wqmYQQWa.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./TypeLevelComponents-DVM1BeSA.js";import"./Text-BafGAOu0.js";import"./components-BduoFc0l.js";import"./mergeStyles-BqEZTk84.js";import"./Box-DVE1QV2w.js";import"./index-DZtdzgZp.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./flex-CkgKa82T.js";import"./grid-snaFRi1S.js";import"./sidebar-right-DcfakxVR.js";import"./Tooltip-DuMKY5lE.js";import"./useTooltip-Be2IlHUD.js";import"./getTransformFromPlacement-BLUVWzCJ.js";import"./CanvasProvider-DNBEbcF4.js";import"./index-udXzHylk.js";import"./index-kj8ZfNNN.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useCloseOnEscape-D68v2Xn6.js";import"./Popper-xGJeroz5.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./px2rem-C0KbprIx.js";import"./BaseButton-44-j6NiF.js";import"./SystemIcon-CkftECn1.js";import"./Svg-C00Tmbol.js";import"./Button-CqKi3FI5.js";const $={title:"Testing/Labs/Side Panel/Cypress",component:r},s=n=>e.jsx("div",{style:{display:"flex",height:"calc(100vh - 80px)",width:"100%"},...n}),i="Accessible Label Name",t=()=>{const n=d();return e.jsx(s,{children:e.jsxs(r,{model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]})})},o=()=>{const n=d();return e.jsx(s,{children:e.jsxs(r,{as:"div",role:"region",model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]})})},a=()=>{const n=d();return e.jsxs(s,{children:[e.jsxs(r,{as:"aside",model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx(r.ToggleButton,{"aria-label":i})]}),e.jsx("div",{children:"Main Content"})]})},l=()=>{const n=d(),m=p=>e.jsx("div",{style:{width:"100%",height:60,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 16px",boxSizing:"border-box",border:"1px solid #777",position:"relative",zIndex:1},...p});return e.jsxs(c.Fragment,{children:[e.jsx(m,{children:e.jsx(g,{icon:u,"aria-label":"Open"})}),e.jsx(s,{children:e.jsxs(r,{model:n,children:[e.jsx(r.Heading,{hidden:!0,children:i}),e.jsx("h1",{children:"Panel Name"}),e.jsx(r.ToggleButton,{"aria-label":i}),e.jsx(x,{children:"Another Button"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
