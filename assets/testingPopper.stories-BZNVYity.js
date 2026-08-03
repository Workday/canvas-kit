import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a}from"./Popper-DYfGvA07.js";import{S as r}from"./SecondaryButton-CMbqORtK.js";import{c as f}from"./cs-rfTTo7Bg.js";import{P}from"./PrimaryButton-C5mhTCq5.js";import{P as p}from"./Popup-CdIMi-8Z.js";import{p as s}from"./px2rem-C0KbprIx.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-eQ_txa-f.js";import"./CanvasProvider-CFtqHR-b.js";import"./index-DE-upP0k.js";import"./index-pMzza0x6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./BaseButton-CivL5PJl.js";import"./Box-5BC0dNqB.js";import"./index-Dusw0zrf.js";import"./useConstant-B_SD0x5s.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./types-wqmYQQWa.js";import"./mergeStyles-C5CqGCLQ.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./Button-wmECgaEK.js";import"./getTransformFromPlacement-C8S8FYK9.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./Card-BsFqe5CX.js";import"./Text-BLaZcOr9.js";import"./cornerShape-B7b4ymMc.js";import"./TertiaryButton-C_EvQ6Qu.js";import"./x-B1faap_l.js";import"./usePopupTarget-wbqfrIA1.js";const $={title:"Testing/Popups/Popper",component:a},h=f({display:"flex",justifyContent:"center",height:s(400),width:s(400),alignItems:"center"}),n={render:()=>{const[i,o]=t.useState("bottom"),[c,l]=t.useState(!1),m=t.useRef(null),u=t.useRef(null);return t.useLayoutEffect(()=>{l(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Changing the placement should update the popper, but not recreate the PopperJS instance"}),e.jsx(r,{onClick:()=>o("top"),children:"Top"}),e.jsx(r,{onClick:()=>o("bottom"),children:"Bottom"}),e.jsx(r,{onClick:()=>o("left"),children:"Left"}),e.jsxs("div",{children:["Placement: ",i]})]}),e.jsxs("div",{className:h,children:[e.jsx(P,{ref:m,children:"Target element"}),e.jsx(a,{placement:i,open:c,anchorElement:m.current,ref:u,children:({placement:d})=>e.jsxs(p.Card,{cs:{width:s(400)},children:[e.jsx(p.Heading,{children:"Positioned Popper element"}),e.jsxs(p.Body,{children:["Placement:",d]})]})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [placement, setPlacement] = React.useState<Placement>('bottom');
    const [open, setOpen] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const popupRef = React.useRef<HTMLDivElement>(null);
    React.useLayoutEffect(() => {
      setOpen(true);
    }, []);
    return <>
        <div>
          <p>
            Changing the placement should update the popper, but not recreate the PopperJS instance
          </p>
          <SecondaryButton onClick={() => setPlacement('top')}>Top</SecondaryButton>
          <SecondaryButton onClick={() => setPlacement('bottom')}>Bottom</SecondaryButton>
          <SecondaryButton onClick={() => setPlacement('left')}>Left</SecondaryButton>
          <div>Placement: {placement}</div>
        </div>
        <div className={styles}>
          <PrimaryButton ref={buttonRef}>Target element</PrimaryButton>
          <Popper placement={placement} open={open} anchorElement={buttonRef.current!} ref={popupRef}>
            {({
            placement
          }) => {
            return <Popup.Card cs={{
              width: px2rem(400)
            }}>
                  <Popup.Heading>{'Positioned Popper element'}</Popup.Heading>
                  <Popup.Body>Placement:{placement}</Popup.Body>
                </Popup.Card>;
          }}
          </Popper>
        </div>
      </>;
  }
}`,...n.parameters?.docs?.source}}};const ee=["UpdateOptions"];export{n as UpdateOptions,ee as __namedExportsOrder,$ as default};
