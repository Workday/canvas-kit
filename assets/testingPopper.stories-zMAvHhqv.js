import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as s}from"./Popper-DTfQE2mh.js";import{S as r}from"./SecondaryButton-BfP_SOlX.js";import{P as d}from"./PrimaryButton-C2w1b3vR.js";import{P as p}from"./Popup-B-4w8IgE.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-DlilqqSw.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./CanvasProvider-0Y3auRRO.js";import"./index-CYsyLHR7.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Box-CfIP0C5s.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-DCTLot6K.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./Button-Cg4j9RPw.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Card-Dd5fhXE2.js";import"./Text-Tayi47N3.js";import"./TertiaryButton-a9_U68ho.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-BtGg5hr7.js";const Z={title:"Testing/Popups/Popper",component:s},n={render:()=>{const[i,o]=t.useState("bottom"),[a,c]=t.useState(!1),m=t.useRef(null),l=t.useRef(null);return t.useLayoutEffect(()=>{c(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Changing the placement should update the popper, but not recreate the PopperJS instance"}),e.jsx(r,{onClick:()=>o("top"),children:"Top"}),e.jsx(r,{onClick:()=>o("bottom"),children:"Bottom"}),e.jsx(r,{onClick:()=>o("left"),children:"Left"}),e.jsxs("div",{children:["Placement: ",i]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",height:400,width:400,alignItems:"center"},children:[e.jsx(d,{ref:m,children:"Target element"}),e.jsx(s,{placement:i,open:a,anchorElement:m.current,ref:l,children:({placement:u})=>e.jsxs(p.Card,{width:400,children:[e.jsx(p.Heading,{children:"Positioned Popper element"}),e.jsxs(p.Body,{children:["Placement:",u]})]})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        height: 400,
        width: 400,
        alignItems: 'center'
      }}>
          <PrimaryButton ref={buttonRef}>Target element</PrimaryButton>
          <Popper placement={placement} open={open} anchorElement={buttonRef.current!} ref={popupRef}>
            {({
            placement
          }) => {
            return <Popup.Card width={400}>
                  <Popup.Heading>{'Positioned Popper element'}</Popup.Heading>
                  <Popup.Body>Placement:{placement}</Popup.Body>
                </Popup.Card>;
          }}
          </Popper>
        </div>
      </>;
  }
}`,...n.parameters?.docs?.source}}};const $=["UpdateOptions"];export{n as UpdateOptions,$ as __namedExportsOrder,Z as default};
