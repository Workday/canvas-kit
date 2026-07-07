import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{r as x}from"./index-IfJi-UCQ.js";import{S as r,u as p}from"./SidePanel-DyfbCjN5.js";import{P as m}from"./PrimaryButton-S3mm73gf.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./extend-BPwMWEGU.js";import"./types-wqmYQQWa.js";import"./components-2rzepXK0.js";import"./Tooltip-BLcq66fH.js";import"./useTooltip-rw8vVYww.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./cs-rfTTo7Bg.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./mergeStyles-DWr2i4G5.js";import"./Box-B8BSbi-y.js";import"./index-CjGALPG9.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./flex-BCuak95v.js";import"./grid-B_4ZTp6S.js";import"./index-5dfzm_kn.js";import"./useCloseOnEscape-Bawd8X61.js";import"./Popper-CcaOkhuP.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-lrV9gpWE.js";import"./index-5mrAZJYD.js";import"./TertiaryButton-BD4IjVZC.js";import"./BaseButton-DoYe2peR.js";import"./SystemIcon-Ddz2IrJz.js";import"./Svg-DIievYez.js";import"./px2rem-C0KbprIx.js";import"./Button-DOQ5-uBV.js";const X={title:"Testing/Preview/Side Panel/Cypress",component:r},d=e=>n.jsx("div",{style:{display:"flex",height:"calc(100vh - 80px)",width:"100%"},...e}),c="Accessible Label Name",t=()=>{const{labelProps:e,panelProps:o,controlProps:s}=p();return n.jsx(d,{children:n.jsxs(r,{...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]})})},a=()=>{const{labelProps:e,panelProps:o,controlProps:s}=p();return n.jsx(d,{children:n.jsxs(r,{as:"div",role:"region",...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]})})},i=()=>{const{labelProps:e,panelProps:o,controlProps:s}=p();return n.jsxs(d,{children:[n.jsxs(r,{as:"aside",...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]}),n.jsx("div",{children:"Main Content"})]})},l=()=>{const{labelProps:e,panelProps:o,controlProps:s}=p(),P=u=>n.jsx("div",{style:{width:"100%",height:60,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 16px",boxSizing:"border-box",border:"1px solid #777",position:"relative",zIndex:1},...u});return n.jsxs(x.Fragment,{children:[n.jsx(P,{children:n.jsx(m,{children:"Open"})}),n.jsx(d,{children:n.jsxs(r,{...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx("h1",{children:"Panel Name"}),n.jsx(r.ToggleButton,{...s}),n.jsx(m,{children:"Another Button"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const Y=["Default","AsDiv","AsAside","FirstFocusable"];export{i as AsAside,a as AsDiv,t as Default,l as FirstFocusable,Y as __namedExportsOrder,X as default};
