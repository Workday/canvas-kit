import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{T as r}from"./Table-CB_tF4IX.js";import{S as t}from"./StaticStates-DQfAotsh.js";import{F as o}from"./Flex-nv1ynLdk.js";import{g as c,c as i}from"./index-DE-upP0k.js";import{H as x}from"./TypeLevelComponents-CI1UQDA-.js";import{a as m}from"./cs-CmRirKzJ.js";import{p as h}from"./px2rem-C0KbprIx.js";import"./index-IfJi-UCQ.js";import"./mergeStyles-C7rR1M8O.js";import"./Box-8nFq7jwp.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./components-WZi6LWjd.js";import"./flex-DzaubaG6.js";import"./grid-CQvZVltP.js";import"./cornerShape-DLCpy5rz.js";import"./CanvasProvider-BhcD6OFZ.js";import"./index-D-t2nnqG.js";import"./Text-Bea_87QG.js";const O={title:"Testing/Containers/Table",component:r,parameters:{chromatic:{disable:!1}}},p=()=>e.jsxs(r,{children:[e.jsx(r.Caption,{children:"Table Caption"}),e.jsx(r.Head,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Header,{children:"Table Header"})]})}),e.jsxs(r.Body,{children:[e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Header,{children:"Table Header"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Cell,{children:"Table Data Cell"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Cell,{children:"Table Data Cell"})]})]}),e.jsx(r.Footer,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{children:"Table Header"}),e.jsx(r.Cell,{children:"Table Data Cell"})]})})]}),j=[{header:"Example Header",cell:"Example Cell"},{header:"Example Header",cell:"Example Cell"},{header:"Example Header",cell:"Example Cell"},{header:"Example Header",cell:"Example Cell"}],a=m({base:{backgroundColor:i.surface.raised,borderInlineEnd:`${h(1)} solid ${i.border.default}`},modifiers:{variant:{sticky:{position:"sticky",left:0,zIndex:2}}}}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"small",children:"Table Heading"}),e.jsxs(r,{children:[e.jsx(r.Head,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{...a({variant:"sticky"}),children:"Header"}),Array.from({length:7}).map((s,d)=>e.jsx(r.Header,{...a(),children:"Header"},d))]})}),e.jsx(r.Body,{children:j.map(s=>e.jsx(e.Fragment,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{...a({variant:"sticky"}),children:s.header}),Array.from({length:7}).map((d,n)=>e.jsx(r.Cell,{...a(),children:s.cell},n))]})}))})]})]}),l={render:()=>e.jsx(t,{children:e.jsxs(o,{cs:{gap:c.xs,flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Standard"}),e.jsx(p,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Fixed Column with Heading"}),e.jsx(H,{})]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const q=["TableStates"];export{l as TableStates,q as __namedExportsOrder,O as default};
