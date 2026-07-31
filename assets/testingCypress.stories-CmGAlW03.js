import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{r as x}from"./index-IfJi-UCQ.js";import{S as r,u as p}from"./SidePanel-DDvuVSxx.js";import{P as m}from"./PrimaryButton-Bcznomnt.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./extend-BphcO0BU.js";import"./types-wqmYQQWa.js";import"./components-txAqe3Xu.js";import"./Tooltip-CdEf-_DY.js";import"./useTooltip-C_HOqEa8.js";import"./getTransformFromPlacement-CFlQb2fd.js";import"./CanvasProvider-Dyk6_koI.js";import"./index-DE-upP0k.js";import"./index-pMzza0x6.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./mergeStyles-Cv57vH8h.js";import"./Box-Ber3xeq6.js";import"./index-DM_3aIAw.js";import"./flex-CRSWLfxc.js";import"./grid-B_hxfS-k.js";import"./useCloseOnEscape-jYphKC7B.js";import"./Popper-C6ZR4iXf.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./TertiaryButton-BZz6yk-h.js";import"./BaseButton-rNx6-AYy.js";import"./SystemIcon-CB7CmGUd.js";import"./Svg-CP9vwvqP.js";import"./px2rem-C0KbprIx.js";import"./Button-BYuL_yBu.js";const X={title:"Testing/Preview/Side Panel/Cypress",component:r},d=e=>n.jsx("div",{style:{display:"flex",height:"calc(100vh - 80px)",width:"100%"},...e}),c="Accessible Label Name",t=()=>{const{labelProps:e,panelProps:o,controlProps:s}=p();return n.jsx(d,{children:n.jsxs(r,{...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]})})},a=()=>{const{labelProps:e,panelProps:o,controlProps:s}=p();return n.jsx(d,{children:n.jsxs(r,{as:"div",role:"region",...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]})})},i=()=>{const{labelProps:e,panelProps:o,controlProps:s}=p();return n.jsxs(d,{children:[n.jsxs(r,{as:"aside",...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]}),n.jsx("div",{children:"Main Content"})]})},l=()=>{const{labelProps:e,panelProps:o,controlProps:s}=p(),P=u=>n.jsx("div",{style:{width:"100%",height:60,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 16px",boxSizing:"border-box",border:"1px solid #777",position:"relative",zIndex:1},...u});return n.jsxs(x.Fragment,{children:[n.jsx(P,{children:n.jsx(m,{children:"Open"})}),n.jsx(d,{children:n.jsxs(r,{...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx("h1",{children:"Panel Name"}),n.jsx(r.ToggleButton,{...s}),n.jsx(m,{children:"Another Button"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
