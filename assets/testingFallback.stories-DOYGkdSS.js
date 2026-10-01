import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{T as o}from"./Tooltip-DcG7yoNZ.js";import{G as n}from"./Grid-Dg1W9phm.js";import{c as e}from"./cs-CmRirKzJ.js";import{S as i}from"./SecondaryButton-Bqr8EMWQ.js";import{c as s}from"./CanvasProvider-DGWqlLHc.js";import{F as c,L as l}from"./index-kj8ZfNNN.js";import{a as m,g as a}from"./index-jCBjnmNg.js";import"./index-IfJi-UCQ.js";import"./useTooltip-CgLpdJvj.js";import"./components-DTthHGKT.js";import"./getTransformFromPlacement-D0miBKMZ.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./mergeStyles-DKqoPbSL.js";import"./Box-B-CSScYU.js";import"./index-DsKuT9Xg.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-Db6l7LhR.js";import"./grid-BuNt6bVu.js";import"./useCloseOnEscape-BEuuUG2L.js";import"./Popper-ChXqbTlz.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./BaseButton-CV6FwbLE.js";import"./SystemIcon-vXgIF5zT.js";import"./Svg-BzLA6oZ0.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./Button-DGnEnmhD.js";const U={title:"Testing/Popups/Tooltip",component:o},p=e({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:s.subtract("100vh",m.xxl),width:s.subtract("100vw",c)}),d=e({gridArea:"topButton",justifySelf:"center"}),u=e({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),h=e({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end",bottom:s.subtract(a.md,l)}),g=e({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),r=()=>t.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:t.jsxs(n,{cs:p,children:[t.jsx(o,{type:"describe",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:d,children:"Placement Top"})}),t.jsx(o,{type:"describe",placement:"left",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:g,children:"Placement Left"})}),t.jsx(o,{type:"describe",placement:"right",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:u,children:"Placement Right"})}),t.jsx(o,{type:"describe",placement:"bottom",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:h,children:"Placement Bottom"})})]})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
