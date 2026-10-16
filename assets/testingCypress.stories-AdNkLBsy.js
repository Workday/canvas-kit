import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{r as x}from"./index-IfJi-UCQ.js";import{S as r,u as l}from"./SidePanel-BhxrmUeH.js";import{P as m}from"./PrimaryButton-By7VUXg8.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./extend-BphcO0BU.js";import"./types-wqmYQQWa.js";import"./components-BIe4YBQT.js";import"./Tooltip-CSGy_WI_.js";import"./useTooltip-DzymDaaP.js";import"./getTransformFromPlacement-CBrFg0vm.js";import"./CanvasProvider-BHb5_c8k.js";import"./index--KWQvxqz.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./mergeStyles-DdaEVkWU.js";import"./Box-Iypa-ysL.js";import"./index-5enOfKoO.js";import"./flex-BwCXUuSV.js";import"./grid-DXeFpVCA.js";import"./useCloseOnEscape-p6BLzHcP.js";import"./Popper-CqSBbT2S.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-CYMp_DqV.js";import"./BaseButton-C49WX9Rc.js";import"./SystemIcon-CUbzRY0K.js";import"./Svg-DEIkz5dS.js";import"./px2rem-C0KbprIx.js";import"./Button-IFDag6rZ.js";const Y={title:"Testing/Preview/Side Panel/Cypress",component:r},d=e=>n.jsx("div",{style:{display:"flex",height:"calc(100vh - 80px)",width:"100%"},...e}),c="Accessible Label Name",t=()=>{const{labelProps:e,panelProps:o,controlProps:s}=l();return n.jsx(d,{children:n.jsxs(r,{...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]})})},a=()=>{const{labelProps:e,panelProps:o,controlProps:s}=l();return n.jsx(d,{children:n.jsxs(r,{as:"div",role:"region",...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]})})},i=()=>{const{labelProps:e,panelProps:o,controlProps:s}=l();return n.jsxs(d,{children:[n.jsxs(r,{as:"aside",...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx(r.ToggleButton,{...s})]}),n.jsx("div",{children:"Main Content"})]})},p=()=>{const{labelProps:e,panelProps:o,controlProps:s}=l(),P=u=>n.jsx("div",{style:{width:"100%",height:60,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 16px",boxSizing:"border-box",border:"1px solid #777",position:"relative",zIndex:1},...u});return n.jsxs(x.Fragment,{children:[n.jsx(P,{children:n.jsx(m,{children:"Open"})}),n.jsx(d,{children:n.jsxs(r,{...o,children:[n.jsx("span",{hidden:!0,...e,children:c}),n.jsx("h1",{children:"Panel Name"}),n.jsx(r.ToggleButton,{...s}),n.jsx(m,{children:"Another Button"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const Z=["Default","AsDiv","AsAside","FirstFocusable"];export{i as AsAside,a as AsDiv,t as Default,p as FirstFocusable,Z as __namedExportsOrder,Y as default};
