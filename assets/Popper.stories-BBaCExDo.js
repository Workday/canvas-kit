import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as m}from"./Popper-mGIbWNdd.js";import{P as C}from"./PrimaryButton-DwExYjzD.js";import{C as r}from"./Card-C94ti1ug.js";import{F as R}from"./Flex-BL4S5dy0.js";import{g}from"./index-C_4iH04t.js";import{S as c}from"./SecondaryButton-ClDLkqd4.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-CxXDZKlX.js";import"./CanvasProvider-DJRItNr0.js";import"./index-CFEs8r9D.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./isElementRTL-lizwOp5U.js";import"./BaseButton-CXgunvHx.js";import"./Box-AXoeqAfR.js";import"./index-Cvke4sRE.js";import"./useConstant-B_SD0x5s.js";import"./SystemIcon-oQ2K1VCn.js";import"./Svg-BMATp2Oq.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Cwq7MPiu.js";import"./flex-B-mM-efm.js";import"./grid-BRoHx-9y.js";import"./Button-BKwQ9p25.js";import"./Text-BU7lo9qQ.js";import"./cornerShape-CSfH3EMK.js";const V={title:"Components/Popups/Popper",component:m,parameters:{ReadmePath:"react/popup"}},o={name:"Popper",render:()=>{const[p,n]=t.useState(!1),s=t.useRef(null),l=t.useRef(null),i=t.useRef(null),u=()=>n(!p),d=()=>n(!1),[a,f]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(C,{ref:s,onClick:u,children:"Toggle Popup"}),e.jsx(m,{placement:"bottom",open:p,anchorElement:s.current,ref:l,popperInstanceRef:i,children:e.jsxs(r,{children:[e.jsx(r.Heading,{children:"Popper Example"}),e.jsxs(r.Body,{children:[e.jsx("p",{children:"A card positioned by Popper!"}),e.jsx("div",{style:a?{width:500}:{}}),e.jsxs(R,{cs:{gap:g.md},children:[e.jsx(c,{onClick:()=>{f(!a),requestAnimationFrame(()=>{i.current.update()})},children:"Toggle size"}),e.jsx(c,{onClick:d,children:"Close"})]})]})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
