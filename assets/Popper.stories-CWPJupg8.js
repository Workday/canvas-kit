import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as m}from"./Popper-BORLx1pc.js";import{P as C}from"./PrimaryButton-DagTFlSp.js";import{C as r}from"./Card-6Upq_3u-.js";import{F as R}from"./Flex-DiNR_lju.js";import{g}from"./index-C_4iH04t.js";import{S as c}from"./SecondaryButton-DL6NX6-s.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-HCdlB-Cn.js";import"./CanvasProvider-7wBX3WBC.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./isElementRTL-lizwOp5U.js";import"./BaseButton-DTTEiDSJ.js";import"./Box-NtgckSi6.js";import"./index-DX07rvw8.js";import"./useConstant-B_SD0x5s.js";import"./SystemIcon-CDokv1Eo.js";import"./Svg-C05gFzlU.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-BOTYd98H.js";import"./flex-Iimm9537.js";import"./grid-DE-Ok6Ac.js";import"./Button-t_PogMNe.js";import"./Text-CUdPBNk6.js";import"./cornerShape-CYdiETtT.js";const V={title:"Components/Popups/Popper",component:m,parameters:{ReadmePath:"react/popup"}},o={name:"Popper",render:()=>{const[p,n]=t.useState(!1),s=t.useRef(null),l=t.useRef(null),i=t.useRef(null),u=()=>n(!p),d=()=>n(!1),[a,f]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(C,{ref:s,onClick:u,children:"Toggle Popup"}),e.jsx(m,{placement:"bottom",open:p,anchorElement:s.current,ref:l,popperInstanceRef:i,children:e.jsxs(r,{children:[e.jsx(r.Heading,{children:"Popper Example"}),e.jsxs(r.Body,{children:[e.jsx("p",{children:"A card positioned by Popper!"}),e.jsx("div",{style:a?{width:500}:{}}),e.jsxs(R,{cs:{gap:g.md},children:[e.jsx(c,{onClick:()=>{f(!a),requestAnimationFrame(()=>{i.current.update()})},children:"Toggle size"}),e.jsx(c,{onClick:d,children:"Close"})]})]})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
              <Flex cs={{
              gap: system.gap.md
            }}>
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
