import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{T as r}from"./Table-ZC-rbz82.js";import{S as t}from"./StaticStates-kDyV_ZDH.js";import{F as o}from"./Flex-BKzcw9XF.js";import{g as c,c as d}from"./index-CYsyLHR7.js";import{H as x}from"./TypeLevelComponents-Co8mkrwa.js";import{a as m}from"./cs-DvbI9OYs.js";import{p as h}from"./px2rem-C0KbprIx.js";import"./index-IfJi-UCQ.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./components-XIe_upcR.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-CbBD4ERB.js";import"./Text-8N36XMNq.js";const q={title:"Testing/Containers/Table",component:r,parameters:{chromatic:{disable:!1}}},p=()=>e.jsxs(r,{children:[e.jsx(r.Caption,{children:"Table Caption"}),e.jsx(r.Head,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Header,{children:"Table Header"})]})}),e.jsxs(r.Body,{children:[e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Header,{children:"Table Header"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Cell,{children:"Table Data Cell"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Cell,{children:"Table Data Cell"})]})]}),e.jsx(r.Footer,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Cell,{children:"Table Data Cell"})]})})]}),j=[{header:"Example Header",cell:"Example Cell"},{header:"Example Header",cell:"Example Cell"},{header:"Example Header",cell:"Example Cell"},{header:"Example Header",cell:"Example Cell"}],a=m({base:{backgroundColor:d.surface.raised,borderRight:`${h(1)} solid ${d.border.default}`},modifiers:{variant:{sticky:{position:"sticky",left:0,zIndex:2}}}}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"small",children:"Table Heading"}),e.jsxs(r,{children:[e.jsx(r.Head,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{...a({variant:"sticky"}),children:"Header"}),Array.from({length:7}).map((s,i)=>e.jsx(r.Header,{...a(),children:"Header"},i))]})}),e.jsx(r.Body,{children:j.map(s=>e.jsx(e.Fragment,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{...a({variant:"sticky"}),children:s.header}),Array.from({length:7}).map((i,n)=>e.jsx(r.Cell,{...a(),children:s.cell},n))]})}))})]})]}),l={render:()=>e.jsx(t,{children:e.jsxs(o,{cs:{gap:c.xs,flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Standard"}),e.jsx(p,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Fixed Column with Heading"}),e.jsx(H,{})]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StaticStates>
        <Flex cs={{
        gap: system.gap.xs,
        flexDirection: 'column'
      }}>
          <div>
            <h3>Standard</h3>
            <Standard />
          </div>
          <div>
            <h3>Fixed Column with Heading</h3>
            <FixedColumn />
          </div>
        </Flex>
      </StaticStates>;
  }
}`,...l.parameters?.docs?.source}}};const G=["TableStates"];export{l as TableStates,G as __namedExportsOrder,q as default};
