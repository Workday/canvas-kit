import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{T as o}from"./Tooltip-BChPPqz6.js";import{G as n}from"./Grid-D8zK8ctU.js";import{c as e}from"./cs-DvbI9OYs.js";import{S as i}from"./SecondaryButton-BfP_SOlX.js";import{c as s}from"./getTransformFromPlacement-Dk4LTPXM.js";import{a as c,f as m}from"./index-DKOKnxgv.js";import{a as l,g as a}from"./index-CYsyLHR7.js";import"./index-IfJi-UCQ.js";import"./useTooltip-DDaYfV4J.js";import"./components-DlilqqSw.js";import"./mergeStyles-DCTLot6K.js";import"./Box-CfIP0C5s.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./useCloseOnEscape-BL74-I4Y.js";import"./Popper-DTfQE2mh.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-0Y3auRRO.js";import"./useTheme-DY7-Bclm.js";import"./useUniqueId-DC-hMIDg.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./Button-Cg4j9RPw.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";const Y={title:"Testing/Popups/Tooltip",component:o},p=e({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:s.subtract("100vh",l.xxl),width:s.subtract("100vw",c)}),d=e({gridArea:"topButton",justifySelf:"center"}),u=e({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),h=e({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end",bottom:s.subtract(a.md,m)}),g=e({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"}),r=()=>t.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:t.jsxs(n,{cs:p,children:[t.jsx(o,{type:"describe",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:d,children:"Placement Top"})}),t.jsx(o,{type:"describe",placement:"left",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:g,children:"Placement Left"})}),t.jsx(o,{type:"describe",placement:"right",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:u,children:"Placement Right"})}),t.jsx(o,{type:"describe",placement:"bottom",title:t.jsxs("div",{children:["This is a ",t.jsx("em",{children:"custom"})," tooltip with ",t.jsx("strong",{children:"custom HTML"})]}),children:t.jsx(i,{cs:h,children:"Placement Bottom"})})]})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const Z=["TooltipWithFallbackPlacements"];export{r as TooltipWithFallbackPlacements,Z as __namedExportsOrder,Y as default};
