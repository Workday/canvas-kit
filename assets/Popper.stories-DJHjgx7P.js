import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as l}from"./Popper-CfI3sZZj.js";import{P as C}from"./PrimaryButton-BadDvs2U.js";import{C as r}from"./Card-CaPe9j_I.js";import{F as R}from"./Flex-DGNU9JGJ.js";import{g}from"./index-5dfzm_kn.js";import{S as c}from"./SecondaryButton-BpQ17X7-.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-DitCssni.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./CanvasProvider-BlMVDzJE.js";import"./index-5mrAZJYD.js";import"./BaseButton-MNe7k-Ow.js";import"./Box-DEOrcYtQ.js";import"./index-DmIRx617.js";import"./useConstant-CUZppmaV.js";import"./SystemIcon-CP78lq3V.js";import"./Svg-CZqhN3kO.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-CxEFJuxU.js";import"./flex-ns_uTuwY.js";import"./grid-W0du1by9.js";import"./Button-Dptie1iu.js";import"./Text-BDAVcU1f.js";const Q={title:"Components/Popups/Popper",component:l,parameters:{ReadmePath:"react/popup"}},o={name:"Popper",render:()=>{const[n,p]=t.useState(!1),s=t.useRef(null),m=t.useRef(null),i=t.useRef(null),u=()=>p(!n),d=()=>p(!1),[a,f]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(C,{ref:s,onClick:u,children:"Toggle Popup"}),e.jsx(l,{placement:"bottom",open:n,anchorElement:s.current,ref:m,popperInstanceRef:i,children:e.jsxs(r,{children:[e.jsx(r.Heading,{children:"Popper Example"}),e.jsxs(r.Body,{children:[e.jsx("p",{children:"A card positioned by Popper!"}),e.jsx("div",{style:a?{width:500}:{}}),e.jsxs(R,{cs:{gap:g.md},children:[e.jsx(c,{onClick:()=>{f(!a),requestAnimationFrame(()=>{i.current.update()})},children:"Toggle size"}),e.jsx(c,{onClick:d,children:"Close"})]})]})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const U=["PopperStory"];export{o as PopperStory,U as __namedExportsOrder,Q as default};
