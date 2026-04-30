import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{r as x}from"./index-IfJi-UCQ.js";import{S as r,u as l}from"./SidePanel-mOtJyT0d.js";import{P as m}from"./PrimaryButton-WPKcJ4ml.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./extend-DXQzslqV.js";import"./types-wqmYQQWa.js";import"./components-CXVvXGX8.js";import"./Tooltip-B3V4skOm.js";import"./useTooltip-DUG7iIce.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./cs-DvbI9OYs.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./index-CYsyLHR7.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./Popper-CGqk9_xm.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-BRuur9nH.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./TertiaryButton-Byu4oUFZ.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./px2rem-C0KbprIx.js";import"./Button-_9ty_XDZ.js";const $={title:"Testing/Preview/Side Panel/Cypress",component:r},d=e=>n.jsx("div",{style:{display:"flex",height:"calc(100vh - 80px)",width:"100%"},...e}),c="Accessible Label Name",t=()=>{const{labelProps:e,panelProps:o,controlProps:s}=l();return n.jsx(d,{children:n.jsxs(r,{...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]})})},i=()=>{const{labelProps:e,panelProps:o,controlProps:s}=l();return n.jsx(d,{children:n.jsxs(r,{as:"div",role:"region",...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]})})},a=()=>{const{labelProps:e,panelProps:o,controlProps:s}=l();return n.jsxs(d,{children:[n.jsxs(r,{as:"aside",...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]}),n.jsx("div",{children:"Main Content"})]})},p=()=>{const{labelProps:e,panelProps:o,controlProps:s}=l(),P=u=>n.jsx("div",{style:{width:"100%",height:60,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 16px",boxSizing:"border-box",border:"1px solid #777",position:"relative",zIndex:1},...u});return n.jsxs(x.Fragment,{children:[n.jsx(P,{children:n.jsx(m,{children:"Open"})}),n.jsx(d,{children:n.jsxs(r,{...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx("h1",{children:"Panel Name"}),n.jsx(r.ToggleButton,{...s}),n.jsx(m,{children:"Another Button"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    labelProps,
    panelProps,
    controlProps
  } = useSidePanel();
  return <Container>
      <SidePanel {...panelProps}>
        <span hidden {...labelProps}>
          {label}
        </span>
        <SidePanel.ToggleButton {...controlProps} />
      </SidePanel>
    </Container>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    labelProps,
    panelProps,
    controlProps
  } = useSidePanel();
  return <Container>
      <SidePanel as="div" role="region" {...panelProps}>
        <span hidden {...labelProps}>
          {label}
        </span>
        <SidePanel.ToggleButton {...controlProps} />
      </SidePanel>
    </Container>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    labelProps,
    panelProps,
    controlProps
  } = useSidePanel();
  return <Container>
      <SidePanel as="aside" {...panelProps}>
        <span hidden {...labelProps}>
          {label}
        </span>
        <SidePanel.ToggleButton {...controlProps} />
      </SidePanel>
      <div>Main Content</div>
    </Container>;
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    labelProps,
    panelProps,
    controlProps
  } = useSidePanel();
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
        <PrimaryButton>Open</PrimaryButton>
      </Header>
      <Container>
        <SidePanel {...panelProps}>
          <span hidden {...labelProps}>
            {label}
          </span>
          <h1>Panel Name</h1>
          <SidePanel.ToggleButton {...controlProps} />
          <PrimaryButton>Another Button</PrimaryButton>
        </SidePanel>
      </Container>
    </React.Fragment>;
}`,...p.parameters?.docs?.source}}};const nn=["Default","AsDiv","AsAside","FirstFocusable"];export{a as AsAside,i as AsDiv,t as Default,p as FirstFocusable,nn as __namedExportsOrder,$ as default};
