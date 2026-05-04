import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as t}from"./index-IfJi-UCQ.js";import{a as s}from"./Popper-CvC-z2TH.js";import{S as r}from"./SecondaryButton-CMLUii7y.js";import{P as d}from"./PrimaryButton-Cnd4N9Ks.js";import{P as p}from"./Popup-CfPbpWF4.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-1G01j-He.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./CanvasProvider-BJ-OMKNq.js";import"./index-CYsyLHR7.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./BaseButton-BY16VLV0.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Box-DFceh3YA.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-BK8Hz87n.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./Button-BQ1TZXwZ.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Card-CEyROzcv.js";import"./Text-DRUbleCp.js";import"./TertiaryButton-jo8ThkBe.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-C0UKjDnR.js";const Z={title:"Testing/Popups/Popper",component:s},n={render:()=>{const[i,o]=t.useState("bottom"),[a,c]=t.useState(!1),m=t.useRef(null),l=t.useRef(null);return t.useLayoutEffect(()=>{c(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Changing the placement should update the popper, but not recreate the PopperJS instance"}),e.jsx(r,{onClick:()=>o("top"),children:"Top"}),e.jsx(r,{onClick:()=>o("bottom"),children:"Bottom"}),e.jsx(r,{onClick:()=>o("left"),children:"Left"}),e.jsxs("div",{children:["Placement: ",i]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",height:400,width:400,alignItems:"center"},children:[e.jsx(d,{ref:m,children:"Target element"}),e.jsx(s,{placement:i,open:a,anchorElement:m.current,ref:l,children:({placement:u})=>e.jsxs(p.Card,{width:400,children:[e.jsx(p.Heading,{children:"Positioned Popper element"}),e.jsxs(p.Body,{children:["Placement:",u]})]})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
