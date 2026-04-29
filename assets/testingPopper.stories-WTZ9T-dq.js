import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as s}from"./Popper-BRmPGiuC.js";import{S as r}from"./SecondaryButton-oNuQLwcg.js";import{P as d}from"./PrimaryButton-_EBa_erW.js";import{P as p}from"./Popup-FGUZYXID.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-XIe_upcR.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./CanvasProvider-CbBD4ERB.js";import"./index-CYsyLHR7.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Box-DFWPfIf0.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Dttt6jO3.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./Button-Cp7fe3Zs.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Card-ywil38vv.js";import"./Text-8N36XMNq.js";import"./TertiaryButton-DaDaXMfE.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-B7GfDsu7.js";const Z={title:"Testing/Popups/Popper",component:s},n={render:()=>{const[i,o]=t.useState("bottom"),[a,c]=t.useState(!1),m=t.useRef(null),l=t.useRef(null);return t.useLayoutEffect(()=>{c(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Changing the placement should update the popper, but not recreate the PopperJS instance"}),e.jsx(r,{onClick:()=>o("top"),children:"Top"}),e.jsx(r,{onClick:()=>o("bottom"),children:"Bottom"}),e.jsx(r,{onClick:()=>o("left"),children:"Left"}),e.jsxs("div",{children:["Placement: ",i]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",height:400,width:400,alignItems:"center"},children:[e.jsx(d,{ref:m,children:"Target element"}),e.jsx(s,{placement:i,open:a,anchorElement:m.current,ref:l,children:({placement:u})=>e.jsxs(p.Card,{width:400,children:[e.jsx(p.Heading,{children:"Positioned Popper element"}),e.jsxs(p.Body,{children:["Placement:",u]})]})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
