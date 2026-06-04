import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{T as o}from"./Tooltip-DHZOvFA4.js";import{G as n}from"./Grid-ywLvVy_E.js";import{c as e}from"./cs-rfTTo7Bg.js";import{S as i}from"./SecondaryButton-BGDiW78O.js";import{c as s}from"./getTransformFromPlacement-BtpPb64q.js";import{a as c,e as l}from"./index-5mrAZJYD.js";import{a as m,g as a}from"./index-5dfzm_kn.js";import"./index-IfJi-UCQ.js";import"./useTooltip-DUbvqIp1.js";import"./components-AX32LNYc.js";import"./mergeStyles-BAqoDFu5.js";import"./Box-BPraYaO3.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-BT-UZmhF.js";import"./grid-CpPShNRZ.js";import"./useCloseOnEscape-D7zKS4W4.js";import"./Popper-JKy5AP_Q.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-DcYN8xn4.js";import"./useUniqueId-DC-hMIDg.js";import"./BaseButton-DzH1x21V.js";import"./SystemIcon-BoCe_uUf.js";import"./Svg-BEZEbUw_.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./Button-BNyLbu3E.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";const U={title:"Testing/Popups/Tooltip",component:o},p=e({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:s.subtract("100vh",m.xxl),width:s.subtract("100vw",c)}),d=e({gridArea:"topButton",justifySelf:"center"}),u=e({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),h=e({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end",bottom:s.subtract(a.md,l)}),g=e({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),r=()=>t.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:t.jsxs(n,{cs:p,children:[t.jsx(o,{type:"describe",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:d,children:"Placement Top"})}),t.jsx(o,{type:"describe",placement:"left",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:g,children:"Placement Left"})}),t.jsx(o,{type:"describe",placement:"right",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:u,children:"Placement Right"})}),t.jsx(o,{type:"describe",placement:"bottom",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:h,children:"Placement Bottom"})})]})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const V=["TooltipWithFallbackPlacements"];export{r as TooltipWithFallbackPlacements,V as __namedExportsOrder,U as default};
