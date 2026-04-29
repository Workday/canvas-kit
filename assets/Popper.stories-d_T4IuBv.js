import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as l}from"./Popper-BRmPGiuC.js";import{P as C}from"./PrimaryButton-_EBa_erW.js";import{C as r}from"./Card-ywil38vv.js";import{F as R}from"./Flex-BKzcw9XF.js";import{S as c}from"./SecondaryButton-oNuQLwcg.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-XIe_upcR.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./CanvasProvider-CbBD4ERB.js";import"./index-CYsyLHR7.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Box-DFWPfIf0.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Dttt6jO3.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./Button-Cp7fe3Zs.js";import"./Text-8N36XMNq.js";const V={title:"Components/Popups/Popper",component:l,parameters:{ReadmePath:"react/popup"}},o={name:"Popper",render:()=>{const[n,p]=t.useState(!1),s=t.useRef(null),m=t.useRef(null),i=t.useRef(null),u=()=>p(!n),d=()=>p(!1),[a,f]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(C,{ref:s,onClick:u,children:"Toggle Popup"}),e.jsx(l,{placement:"bottom",open:n,anchorElement:s.current,ref:m,popperInstanceRef:i,children:e.jsxs(r,{children:[e.jsx(r.Heading,{children:"Popper Example"}),e.jsxs(r.Body,{children:[e.jsx("p",{children:"A card positioned by Popper!"}),e.jsx("div",{style:a?{width:500}:{}}),e.jsxs(R,{gap:"s",children:[e.jsx(c,{onClick:()=>{f(!a),requestAnimationFrame(()=>{i.current.update()})},children:"Toggle size"}),e.jsx(c,{onClick:d,children:"Close"})]})]})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Popper',
  render: () => {
    const [open, setOpen] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const popupRef = React.useRef<HTMLDivElement>(null);
    const popperInstanceRef = React.useRef(null);
    const onClickButton = () => setOpen(!open);
    const onClose = () => setOpen(false);
    const [big, setBig] = React.useState(false);
    return <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <PrimaryButton ref={buttonRef} onClick={onClickButton}>
          Toggle Popup
        </PrimaryButton>
        <Popper placement="bottom" open={open} anchorElement={buttonRef.current!} ref={popupRef} popperInstanceRef={popperInstanceRef}>
          <Card>
            <Card.Heading>Popper Example</Card.Heading>
            <Card.Body>
              <p>A card positioned by Popper!</p>
              <div style={big ? {
              width: 500
            } : {}}></div>
              <Flex gap="s">
                <SecondaryButton onClick={() => {
                setBig(!big);
                requestAnimationFrame(() => {
                  popperInstanceRef.current.update();
                });
              }}>
                  Toggle size
                </SecondaryButton>
                <SecondaryButton onClick={onClose}>Close</SecondaryButton>
              </Flex>
            </Card.Body>
          </Card>
        </Popper>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const W=["PopperStory"];export{o as PopperStory,W as __namedExportsOrder,V as default};
