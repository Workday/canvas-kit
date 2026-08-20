import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as m}from"./Popper-Dfod5tHK.js";import{P as C}from"./PrimaryButton-iMzeVJHW.js";import{C as r}from"./Card-CjRV3_45.js";import{F as R}from"./Flex-nv1ynLdk.js";import{g}from"./index-DE-upP0k.js";import{S as c}from"./SecondaryButton-CdfwS4EL.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-WZi6LWjd.js";import"./CanvasProvider-BhcD6OFZ.js";import"./index-D-t2nnqG.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./BaseButton-DvzFkALc.js";import"./Box-8nFq7jwp.js";import"./index-DX07rvw8.js";import"./useConstant-B_SD0x5s.js";import"./SystemIcon-CznyzdLa.js";import"./Svg-DpPQdFHV.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-C7rR1M8O.js";import"./flex-DzaubaG6.js";import"./grid-CQvZVltP.js";import"./Button-0EZFZE1C.js";import"./Text-Bea_87QG.js";import"./cornerShape-DLCpy5rz.js";const U={title:"Components/Popups/Popper",component:m,parameters:{ReadmePath:"react/popup"}},o={name:"Popper",render:()=>{const[n,p]=t.useState(!1),s=t.useRef(null),l=t.useRef(null),i=t.useRef(null),u=()=>p(!n),d=()=>p(!1),[a,f]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(C,{ref:s,onClick:u,children:"Toggle Popup"}),e.jsx(m,{placement:"bottom",open:n,anchorElement:s.current,ref:l,popperInstanceRef:i,children:e.jsxs(r,{children:[e.jsx(r.Heading,{children:"Popper Example"}),e.jsxs(r.Body,{children:[e.jsx("p",{children:"A card positioned by Popper!"}),e.jsx("div",{style:a?{width:500}:{}}),e.jsxs(R,{cs:{gap:g.md},children:[e.jsx(c,{onClick:()=>{f(!a),requestAnimationFrame(()=>{i.current.update()})},children:"Toggle size"}),e.jsx(c,{onClick:d,children:"Close"})]})]})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
