import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as l}from"./index-Bt0ZT3SD.js";import"./index-IfJi-UCQ.js";import"./iframe-DXeK7ayo.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function a(s){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Guides/Accessibility/Table Patterns"}),`
`,e.jsx(t.h2,{id:"advanced-table-examples",children:"Advanced Table Examples"}),`
`,e.jsx(t.p,{children:`Tables should only be used to organize data that has a clear relationship between rows and columns,
like a calendar or a schedule. Never use a table just for page layout.`}),`
`,e.jsx(t.p,{children:`When you use the proper HTML table markup, a screen reader can help a user navigate the table. It
will automatically read the column and row headers as they move through the data, so they always
know what information they're looking at.`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"All tables should have a clear header and a descriptive title."}),`
`,e.jsx(t.li,{children:`Keep your tables simple. If a table is too complex, it might be better to break it up into several
smaller tables or use a different format.`}),`
`]}),`
`,e.jsxs(t.p,{children:["Out of the box, ",e.jsx(t.code,{children:"Table"}),` is a lightweight compound component with a high degree of flexibility, but
not much functionality outside of providing a basic table layout. This flexibility lets developers
implement common features, such as selecting rows and sorting columns, on top of `,e.jsx(t.code,{children:"Table"}),` to meet
their specific application needs.`]}),`
`,e.jsx(t.p,{children:`The Workday Accessibility Team has researched and developed the following examples to demonstrate
how to build these accessible table patterns. We've listed the specific considerations and decisions
we've made for each of the examples.`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/guides-accessibility-table-patterns-expandable-rows--docs",children:"Expandable Rows"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/guides-accessibility-table-patterns-nested-rows--docs",children:"Nested Rows"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/guides-accessibility-table-patterns-selectable-rows--docs",children:"Selectable Rows"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/guides-accessibility-table-patterns-filterable-column-headers--docs",children:"Filterable Column Headers"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/guides-accessibility-table-patterns-sortable-column-headers--docs",children:"Sortable Column Headers"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/docs/guides-accessibility-table-patterns-with-form-fields--docs",children:"With Form Fields"})}),`
`]})]})}function x(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{x as default};
