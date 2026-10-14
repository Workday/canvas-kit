import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as u}from"./index-IfJi-UCQ.js";import{a as l}from"./Popper-C66rtqtU.js";import{c,b as d}from"./cs-CmRirKzJ.js";import{M as t}from"./Menu-CSlla02l.js";import{C as h}from"./CanvasProvider-Bqk713r3.js";import{P as o}from"./Popup-DAfCb3bS.js";import{p as r}from"./px2rem-C0KbprIx.js";import{s as f,c as n,p as v}from"./index-jCBjnmNg.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-CyZuQxpO.js";import"./useListItemRegister-BJAb2Ovp.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-0qQtHERt.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-DN37OKCw.js";import"./mergeStyles-aso8A0iZ.js";import"./Box-CwXb8fLy.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-BIdFUmPB.js";import"./grid-D3lEMqUx.js";import"./useCloseOnEscape-DyvvklAr.js";import"./Card-CoXliinI.js";import"./Text-DKU2C7b1.js";import"./cornerShape-yNJyCN49.js";import"./OverflowTooltip-CVI4hM79.js";import"./useListItemSelect-qe93IIGJ.js";import"./SystemIcon-BIB-oP8f.js";import"./Svg-DLcqTVF1.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-D0HWm8uP.js";import"./useFocusRedirect-By4wnPeH.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-CQC5ukAW.js";import"./SecondaryButton-A4fXFx92.js";import"./BaseButton-CrTTH5H6.js";import"./Button-DO73SKPJ.js";import"./chevron-right-small-Ng-H0z5q.js";import"./index-kj8ZfNNN.js";import"./TertiaryButton-DuUtK6N9.js";import"./x-B1faap_l.js";const ce={title:"Testing/Popups/Popper",component:l,parameters:{chromatic:{disable:!1}}},x=c({display:"flex",alignItems:"center",justifyContent:"center",width:r(400),height:r(400)}),g=c({overflow:"hidden",width:r(200),height:r(200),padding:v.xl,border:`1px solid ${n.border.info.default}`,borderRadius:f.md}),w={position:"absolute",left:190,top:250},i={render:()=>{const m=u.useRef(null),a=220,p=280;return e.jsx("div",{className:x,children:e.jsxs("div",{className:g,children:["The element with the black square owns the Popper while it is virtually positioned to the red square:",e.jsx("div",{style:w,ref:m,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",fill:"none",viewBox:"0 0 100 100",children:[e.jsx("path",{stroke:d(n.fg.default),d:"M0.5 0.5H99.5V99.5H0.5z"}),e.jsx("path",{fill:d(n.fg.danger.default),d:"M30 30H70V70H30z"})]})}),e.jsx(l,{anchorElement:m,getAnchorClientRect:()=>({top:p,left:a,width:40,height:40,bottom:p+40,right:a+40,x:a,y:p,toJSON:()=>""}),children:e.jsx(t,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:"Custom"}),e.jsx(t.Item,{children:"Placement"})]})})})})]})})}},s=()=>e.jsx(h,{dir:"rtl",children:e.jsx(l,{open:!0,children:e.jsxs(o.Card,{dir:"rtl",cs:{animation:"none",width:r(300)},children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"למחוק פריט"}),e.jsx(o.Body,{children:"האם ברצונך למחוק פריט זה"})]})})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  </CanvasProvider>`,...s.parameters?.docs?.source}}};const ue=["CustomPlacement","PopperRTL"];export{i as CustomPlacement,s as PopperRTL,ue as __namedExportsOrder,ce as default};
