import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{T as o}from"./Tooltip-BcHkFI8E.js";import{G as n}from"./Grid-DHP7ZVNH.js";import{c as e}from"./cs-CmRirKzJ.js";import{S as i}from"./SecondaryButton-DTfVcNph.js";import{c as s}from"./CanvasProvider-wRa9Af4a.js";import{F as c,L as l}from"./index-CFEs8r9D.js";import{a as m,g as a}from"./index-C_4iH04t.js";import"./index-IfJi-UCQ.js";import"./useTooltip-ggS7GWRg.js";import"./components-BZZbendq.js";import"./getTransformFromPlacement-C8z0KlTw.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./mergeStyles-BrOzO49v.js";import"./Box-DNrttudE.js";import"./index-BR_jJr7N.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-DLEP31EQ.js";import"./grid-DWoMPrqj.js";import"./useCloseOnEscape-BTQA5nou.js";import"./Popper-BGpHDNvg.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./isElementRTL-lizwOp5U.js";import"./BaseButton-qatokQZh.js";import"./SystemIcon-D383ry7W.js";import"./Svg-YYj-hmuy.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./Button-Bb-9X2_s.js";const V={title:"Testing/Popups/Tooltip",component:o},p=e({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:s.subtract("100vh",m.xxl),width:s.subtract("100vw",c)}),d=e({gridArea:"topButton",justifySelf:"center"}),u=e({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),h=e({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end",bottom:s.subtract(a.md,l)}),g=e({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),r=()=>t.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:t.jsxs(n,{cs:p,children:[t.jsx(o,{type:"describe",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:d,children:"Placement Top"})}),t.jsx(o,{type:"describe",placement:"left",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:g,children:"Placement Left"})}),t.jsx(o,{type:"describe",placement:"right",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:u,children:"Placement Right"})}),t.jsx(o,{type:"describe",placement:"bottom",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:h,children:"Placement Bottom"})})]})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <div data-testid="scroll-area-fallback-placement">
      <Grid cs={grid}>
        <Tooltip type="describe" title={<div>
              This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
            </div>}>
          <SecondaryButton cs={topButton}>Placement Top</SecondaryButton>
        </Tooltip>
        <Tooltip type="describe" placement="left" title={<div>
              This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
            </div>}>
          <SecondaryButton cs={leftButton}>Placement Left</SecondaryButton>
        </Tooltip>
        <Tooltip type="describe" placement="right" title={<div>
              This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
            </div>}>
          <SecondaryButton cs={rightButton}>Placement Right</SecondaryButton>
        </Tooltip>
        <Tooltip type="describe" placement="bottom" title={<div>
              This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
            </div>}>
          <SecondaryButton cs={bottomButton}>Placement Bottom</SecondaryButton>
        </Tooltip>
      </Grid>
    </div>;
}`,...r.parameters?.docs?.source}}};const X=["TooltipWithFallbackPlacements"];export{r as TooltipWithFallbackPlacements,X as __namedExportsOrder,V as default};
