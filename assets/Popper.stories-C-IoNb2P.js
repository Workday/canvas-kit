import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as u}from"./index-IfJi-UCQ.js";import{a as l}from"./Popper-C7USlLo9.js";import{c,b as d}from"./cs-CmRirKzJ.js";import{M as t}from"./Menu-om1xBK3M.js";import{C as h}from"./CanvasProvider-b0qTazfV.js";import{P as o}from"./Popup-Bvs5veQ7.js";import{p as r}from"./px2rem-C0KbprIx.js";import{s as f,c as n,p as v}from"./index-DE-upP0k.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./components-Djct-_L0.js";import"./useListItemRegister-BTqF6aIQ.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-ByVTeDCZ.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-gvhC1rNn.js";import"./mergeStyles-CYryQlIv.js";import"./Box-BFqsP1oU.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-tV08jswE.js";import"./grid-D3f4YGKk.js";import"./useCloseOnEscape-BnLq_SYX.js";import"./Card-Ch8K_ETr.js";import"./Text-0Ti-p1aM.js";import"./cornerShape-k64UXzQq.js";import"./OverflowTooltip--XR7qPax.js";import"./useListItemSelect-B9X1lkRn.js";import"./SystemIcon-h3a1nBMX.js";import"./Svg-BkjYbkv_.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-B9pAa3zV.js";import"./useFocusRedirect-C7Lgy2AW.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-Bjx-fxUx.js";import"./SecondaryButton-BXcVfytW.js";import"./BaseButton-D4Z_PKLz.js";import"./Button-Ckg1U3M9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./index-kj8ZfNNN.js";import"./TertiaryButton-DRYMtrYD.js";import"./x-B1faap_l.js";const ce={title:"Testing/Popups/Popper",component:l,parameters:{chromatic:{disable:!1}}},x=c({display:"flex",alignItems:"center",justifyContent:"center",width:r(400),height:r(400)}),g=c({overflow:"hidden",width:r(200),height:r(200),padding:v.xl,border:`1px solid ${n.border.info.default}`,borderRadius:f.md}),w={position:"absolute",left:190,top:250},i={render:()=>{const m=u.useRef(null),a=220,p=280;return e.jsx("div",{className:x,children:e.jsxs("div",{className:g,children:["The element with the black square owns the Popper while it is virtually positioned to the red square:",e.jsx("div",{style:w,ref:m,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",fill:"none",viewBox:"0 0 100 100",children:[e.jsx("path",{stroke:d(n.fg.default),d:"M0.5 0.5H99.5V99.5H0.5z"}),e.jsx("path",{fill:d(n.fg.danger.default),d:"M30 30H70V70H30z"})]})}),e.jsx(l,{anchorElement:m,getAnchorClientRect:()=>({top:p,left:a,width:40,height:40,bottom:p+40,right:a+40,x:a,y:p,toJSON:()=>""}),children:e.jsx(t,{children:e.jsx(t.Card,{children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:"Custom"}),e.jsx(t.Item,{children:"Placement"})]})})})})]})})}},s=()=>e.jsx(h,{dir:"rtl",children:e.jsx(l,{open:!0,children:e.jsxs(o.Card,{dir:"rtl",cs:{animation:"none",width:r(300)},children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"למחוק פריט"}),e.jsx(o.Body,{children:"האם ברצונך למחוק פריט זה"})]})})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
