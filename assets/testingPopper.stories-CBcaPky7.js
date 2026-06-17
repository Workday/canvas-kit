import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as m}from"./Popper-CfI3sZZj.js";import{S as r}from"./SecondaryButton-BpQ17X7-.js";import{c as f}from"./cs-rfTTo7Bg.js";import{P}from"./PrimaryButton-BadDvs2U.js";import{P as p}from"./Popup-o70LrEa3.js";import{p as s}from"./px2rem-C0KbprIx.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-DitCssni.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./CanvasProvider-BlMVDzJE.js";import"./index-5dfzm_kn.js";import"./index-5mrAZJYD.js";import"./BaseButton-MNe7k-Ow.js";import"./Box-DEOrcYtQ.js";import"./index-DmIRx617.js";import"./useConstant-CUZppmaV.js";import"./SystemIcon-CP78lq3V.js";import"./Svg-CZqhN3kO.js";import"./types-wqmYQQWa.js";import"./mergeStyles-CxEFJuxU.js";import"./flex-ns_uTuwY.js";import"./grid-W0du1by9.js";import"./Button-Dptie1iu.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Card-CaPe9j_I.js";import"./Text-BDAVcU1f.js";import"./TertiaryButton-B_PXBCfh.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-X7rx-n4X.js";const Z={title:"Testing/Popups/Popper",component:m},h=f({display:"flex",justifyContent:"center",height:s(400),width:s(400),alignItems:"center"}),n={render:()=>{const[i,o]=t.useState("bottom"),[c,l]=t.useState(!1),a=t.useRef(null),u=t.useRef(null);return t.useLayoutEffect(()=>{l(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Changing the placement should update the popper, but not recreate the PopperJS instance"}),e.jsx(r,{onClick:()=>o("top"),children:"Top"}),e.jsx(r,{onClick:()=>o("bottom"),children:"Bottom"}),e.jsx(r,{onClick:()=>o("left"),children:"Left"}),e.jsxs("div",{children:["Placement: ",i]})]}),e.jsxs("div",{className:h,children:[e.jsx(P,{ref:a,children:"Target element"}),e.jsx(m,{placement:i,open:c,anchorElement:a.current,ref:u,children:({placement:d})=>e.jsxs(p.Card,{cs:{width:s(400)},children:[e.jsx(p.Heading,{children:"Positioned Popper element"}),e.jsxs(p.Body,{children:["Placement:",d]})]})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $=["UpdateOptions"];export{n as UpdateOptions,$ as __namedExportsOrder,Z as default};
