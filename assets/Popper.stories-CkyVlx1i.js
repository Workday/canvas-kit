import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as u}from"./index-IfJi-UCQ.js";import{a as l}from"./Popper-DvolcCfW.js";import{c,b as d}from"./cs-rfTTo7Bg.js";import{M as t}from"./Menu-V8lePgxC.js";import{C as h}from"./CanvasProvider-Cat-zekw.js";import{P as o}from"./Popup-DnNjYX6x.js";import{p as r}from"./px2rem-C0KbprIx.js";import{s as f,c as n,p as v}from"./index-5dfzm_kn.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-BqmIVDob.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useListItemSelect-DyeyZH9P.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-BAcHo7bk.js";import"./mergeStyles-C1JfmJPH.js";import"./Box-CJXmlKLo.js";import"./index-N3xz2Kqy.js";import"./flex-CrUgoYEh.js";import"./grid-JWGbC98F.js";import"./useCloseOnEscape-CGAh7luF.js";import"./Card-BAZTDQ08.js";import"./Text-D8J8K_1c.js";import"./OverflowTooltip-CXGK4oOq.js";import"./SystemIcon-B1B40VHJ.js";import"./Svg-B1oD29TK.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-Dt5zlBE3.js";import"./useReturnFocus-Bl9ijLih.js";import"./check-small-C7Z-gSGs.js";import"./usePopupTarget-BAdISRT5.js";import"./SecondaryButton-D21U7TXs.js";import"./BaseButton-CWdtGLox.js";import"./Button-CzlJSUFG.js";import"./chevron-right-small-DxmMaev8.js";import"./index-5mrAZJYD.js";import"./TertiaryButton-8Oz2X5p2.js";import"./x-D9WWWeCM.js";const me={title:"Testing/Popups/Popper",component:l,parameters:{chromatic:{disable:!1}}},x=c({display:"flex",alignItems:"center",justifyContent:"center",width:r(400),height:r(400)}),g=c({overflow:"hidden",width:r(200),height:r(200),padding:v.xl,border:`1px solid ${n.border.info.default}`,borderRadius:f.md}),w={position:"absolute",left:190,top:250},i={render:()=>{const m=u.useRef(null),a=220,p=280;return e.jsx("div",{className:x,children:e.jsxs("div",{className:g,children:["The element with the black square owns the Popper while it is virtually positioned to the red square:",e.jsx("div",{style:w,ref:m,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",fill:"none",viewBox:"0 0 100 100",children:[e.jsx("path",{stroke:d(n.fg.default),d:"M0.5 0.5H99.5V99.5H0.5z"}),e.jsx("path",{fill:d(n.fg.danger.default),d:"M30 30H70V70H30z"})]})}),e.jsx(l,{anchorElement:m,getAnchorClientRect:()=>({top:p,left:a,width:40,height:40,bottom:p+40,right:a+40,x:a,y:p,toJSON:()=>""}),children:e.jsx(t,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:"Custom"}),e.jsx(t.Item,{children:"Placement"})]})})})})]})})}},s=()=>e.jsx(h,{dir:"rtl",children:e.jsx(l,{open:!0,children:e.jsxs(o.Card,{dir:"rtl",cs:{animation:"none",width:r(300)},children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"למחוק פריט"}),e.jsx(o.Body,{children:"האם ברצונך למחוק פריט זה"})]})})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ownerRef = React.useRef<HTMLDivElement>(null);
    const virtualLeft = 190 + 30; // square offset + red box offset
    const virtualTop = 250 + 30; // square offset + red box offset
    return <div className={containerStyles}>
        <div className={innerContainerStyles}>
          {'The element with the black square owns the Popper while it is virtually positioned to the red square:'}
          <div style={squareStyles} ref={ownerRef}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 100 100">
              <path stroke={cssVar(system.color.fg.default)} d="M0.5 0.5H99.5V99.5H0.5z"></path>
              <path fill={cssVar(system.color.fg.danger.default)} d="M30 30H70V70H30z"></path>
            </svg>
          </div>
          <Popper anchorElement={ownerRef} getAnchorClientRect={() => ({
          top: virtualTop,
          left: virtualLeft,
          width: 40,
          height: 40,
          bottom: virtualTop + 40,
          right: virtualLeft + 40,
          x: virtualLeft,
          y: virtualTop,
          toJSON: () => ''
        })}>
            <Menu>
              <Menu.Card>
                <Menu.List>
                  <Menu.Item>Custom</Menu.Item>
                  <Menu.Item>Placement</Menu.Item>
                </Menu.List>
              </Menu.Card>
            </Menu>
          </Popper>
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <CanvasProvider dir="rtl">
    <Popper open={true}>
      <Popup.Card dir="rtl" cs={{
      animation: 'none',
      width: px2rem(300)
    }}>
        <Popup.CloseIcon aria-label="" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>האם ברצונך למחוק פריט זה</Popup.Body>
      </Popup.Card>
    </Popper>
  </CanvasProvider>`,...s.parameters?.docs?.source}}};const de=["CustomPlacement","PopperRTL"];export{i as CustomPlacement,s as PopperRTL,de as __namedExportsOrder,me as default};
