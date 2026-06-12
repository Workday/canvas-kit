import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{T as r}from"./Table-1kiKUF8g.js";import{S as t}from"./StaticStates-DF6UD9Bz.js";import{F as o}from"./Flex-DpDv5-ef.js";import{g as c,c as i}from"./index-5dfzm_kn.js";import{H as x}from"./TypeLevelComponents-CIBGvpAI.js";import{a as m}from"./cs-rfTTo7Bg.js";import{p as h}from"./px2rem-C0KbprIx.js";import"./index-IfJi-UCQ.js";import"./mergeStyles-O1wR0AIL.js";import"./Box-BgCI5sd_.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./components-Brs-n4xu.js";import"./flex-DYfwNNEA.js";import"./grid-B_3TtziO.js";import"./CanvasProvider-D8vzr9bq.js";import"./index-5mrAZJYD.js";import"./Text-Wbz4nGCV.js";const $={title:"Testing/Containers/Table",component:r,parameters:{chromatic:{disable:!1}}},p=()=>e.jsxs(r,{children:[e.jsx(r.Caption,{children:"Table Caption"}),e.jsx(r.Head,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Header,{children:"Table Header"})]})}),e.jsxs(r.Body,{children:[e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Header,{children:"Table Header"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Cell,{children:"Table Data Cell"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Cell,{children:"Table Data Cell"})]})]}),e.jsx(r.Footer,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Cell,{children:"Table Data Cell"})]})})]}),j=[{header:"Example Header",cell:"Example Cell"},{header:"Example Header",cell:"Example Cell"},{header:"Example Header",cell:"Example Cell"},{header:"Example Header",cell:"Example Cell"}],a=m({base:{backgroundColor:i.surface.raised,borderInlineEnd:`${h(1)} solid ${i.border.default}`},modifiers:{variant:{sticky:{position:"sticky",left:0,zIndex:2}}}}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"small",children:"Table Heading"}),e.jsxs(r,{children:[e.jsx(r.Head,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{...a({variant:"sticky"}),children:"Header"}),Array.from({length:7}).map((s,d)=>e.jsx(r.Header,{...a(),children:"Header"},d))]})}),e.jsx(r.Body,{children:j.map(s=>e.jsx(e.Fragment,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{...a({variant:"sticky"}),children:s.header}),Array.from({length:7}).map((d,n)=>e.jsx(r.Cell,{...a(),children:s.cell},n))]})}))})]})]}),l={render:()=>e.jsx(t,{children:e.jsxs(o,{cs:{gap:c.xs,flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Standard"}),e.jsx(p,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Fixed Column with Heading"}),e.jsx(H,{})]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const O=["TableStates"];export{l as TableStates,O as __namedExportsOrder,$ as default};
