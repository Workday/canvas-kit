import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a}from"./Popper-BTfx4X3Y.js";import{S as r}from"./SecondaryButton-DG7QNEgp.js";import{c as f}from"./cs-CmRirKzJ.js";import{P}from"./PrimaryButton-5gg2Fz1d.js";import{P as p}from"./Popup-BbxEw1JE.js";import{p as s}from"./px2rem-C0KbprIx.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-DdDgcAto.js";import"./CanvasProvider-DfFmsxWb.js";import"./index-DE-upP0k.js";import"./index-kj8ZfNNN.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./BaseButton-5Tzdsups.js";import"./Box-61RYJS8A.js";import"./index-DX07rvw8.js";import"./useConstant-B_SD0x5s.js";import"./SystemIcon-Bo20moLE.js";import"./Svg-CJw9rXYh.js";import"./types-wqmYQQWa.js";import"./mergeStyles-BpMifWbI.js";import"./flex-c4dSep24.js";import"./grid-BACyZ-ln.js";import"./Button-CQ42Z5L0.js";import"./getTransformFromPlacement-BTYKlY9d.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./Card-BSzbbTvN.js";import"./Text-DCxfoIId.js";import"./cornerShape-D6g3edD7.js";import"./TertiaryButton-C_HeZ8Vk.js";import"./x-B1faap_l.js";import"./usePopupTarget-B2V76KZ9.js";const $={title:"Testing/Popups/Popper",component:a},h=f({display:"flex",justifyContent:"center",height:s(400),width:s(400),alignItems:"center"}),n={render:()=>{const[i,o]=t.useState("bottom"),[c,l]=t.useState(!1),m=t.useRef(null),u=t.useRef(null);return t.useLayoutEffect(()=>{l(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Changing the placement should update the popper, but not recreate the PopperJS instance"}),e.jsx(r,{onClick:()=>o("top"),children:"Top"}),e.jsx(r,{onClick:()=>o("bottom"),children:"Bottom"}),e.jsx(r,{onClick:()=>o("left"),children:"Left"}),e.jsxs("div",{children:["Placement: ",i]})]}),e.jsxs("div",{className:h,children:[e.jsx(P,{ref:m,children:"Target element"}),e.jsx(a,{placement:i,open:c,anchorElement:m.current,ref:u,children:({placement:d})=>e.jsxs(p.Card,{cs:{width:s(400)},children:[e.jsx(p.Heading,{children:"Positioned Popper element"}),e.jsxs(p.Body,{children:["Placement:",d]})]})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
