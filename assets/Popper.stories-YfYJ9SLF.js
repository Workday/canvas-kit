import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as m}from"./Popper-DYfGvA07.js";import{P as C}from"./PrimaryButton-C5mhTCq5.js";import{C as r}from"./Card-BsFqe5CX.js";import{F as R}from"./Flex-DOA8e2vA.js";import{g}from"./index-DE-upP0k.js";import{S as c}from"./SecondaryButton-CMbqORtK.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-eQ_txa-f.js";import"./CanvasProvider-CFtqHR-b.js";import"./index-pMzza0x6.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./BaseButton-CivL5PJl.js";import"./Box-5BC0dNqB.js";import"./index-Dusw0zrf.js";import"./useConstant-B_SD0x5s.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-C5CqGCLQ.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./Button-wmECgaEK.js";import"./Text-BLaZcOr9.js";import"./cornerShape-B7b4ymMc.js";const U={title:"Components/Popups/Popper",component:m,parameters:{ReadmePath:"react/popup"}},o={name:"Popper",render:()=>{const[n,p]=t.useState(!1),s=t.useRef(null),l=t.useRef(null),i=t.useRef(null),u=()=>p(!n),d=()=>p(!1),[a,f]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(C,{ref:s,onClick:u,children:"Toggle Popup"}),e.jsx(m,{placement:"bottom",open:n,anchorElement:s.current,ref:l,popperInstanceRef:i,children:e.jsxs(r,{children:[e.jsx(r.Heading,{children:"Popper Example"}),e.jsxs(r.Body,{children:[e.jsx("p",{children:"A card positioned by Popper!"}),e.jsx("div",{style:a?{width:500}:{}}),e.jsxs(R,{cs:{gap:g.md},children:[e.jsx(c,{onClick:()=>{f(!a),requestAnimationFrame(()=>{i.current.update()})},children:"Toggle size"}),e.jsx(c,{onClick:d,children:"Close"})]})]})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["PopperStory"];export{o as PopperStory,V as __namedExportsOrder,U as default};
