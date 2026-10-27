import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a}from"./Popper-mGIbWNdd.js";import{S as r}from"./SecondaryButton-ClDLkqd4.js";import{c as f}from"./cs-CmRirKzJ.js";import{P}from"./PrimaryButton-DwExYjzD.js";import{P as p}from"./Popup-Buqd_rCX.js";import{p as s}from"./px2rem-C0KbprIx.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-CxXDZKlX.js";import"./CanvasProvider-DJRItNr0.js";import"./index-C_4iH04t.js";import"./index-CFEs8r9D.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./isElementRTL-lizwOp5U.js";import"./BaseButton-CXgunvHx.js";import"./Box-AXoeqAfR.js";import"./index-Cvke4sRE.js";import"./useConstant-B_SD0x5s.js";import"./SystemIcon-oQ2K1VCn.js";import"./Svg-BMATp2Oq.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Cwq7MPiu.js";import"./flex-B-mM-efm.js";import"./grid-BRoHx-9y.js";import"./Button-BKwQ9p25.js";import"./getTransformFromPlacement-kDQSMLcK.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./Card-C94ti1ug.js";import"./Text-BU7lo9qQ.js";import"./cornerShape-CSfH3EMK.js";import"./TertiaryButton-BjIo91oe.js";import"./x-B1faap_l.js";import"./usePopupTarget-BrzAvJUE.js";const ee={title:"Testing/Popups/Popper",component:a},h=f({display:"flex",justifyContent:"center",height:s(400),width:s(400),alignItems:"center"}),n={render:()=>{const[i,o]=t.useState("bottom"),[c,l]=t.useState(!1),m=t.useRef(null),u=t.useRef(null);return t.useLayoutEffect(()=>{l(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Changing the placement should update the popper, but not recreate the PopperJS instance"}),e.jsx(r,{onClick:()=>o("top"),children:"Top"}),e.jsx(r,{onClick:()=>o("bottom"),children:"Bottom"}),e.jsx(r,{onClick:()=>o("left"),children:"Left"}),e.jsxs("div",{children:["Placement: ",i]})]}),e.jsxs("div",{className:h,children:[e.jsx(P,{ref:m,children:"Target element"}),e.jsx(a,{placement:i,open:c,anchorElement:m.current,ref:u,children:({placement:d})=>e.jsxs(p.Card,{cs:{width:s(400)},children:[e.jsx(p.Heading,{children:"Positioned Popper element"}),e.jsxs(p.Body,{children:["Placement:",d]})]})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const te=["UpdateOptions"];export{n as UpdateOptions,te as __namedExportsOrder,ee as default};
