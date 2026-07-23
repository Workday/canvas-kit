import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as g}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-_Y2fOjve.js";import{P as e,g as T,a as p,b as d}from"./Pagination-CobyIzo4.js";import{S as x}from"./StaticStates-E1fiKQgj.js";import{C as P}from"./ComponentStatesTable-CWstLoqz.js";import"./CanvasProvider-DpLmysIw.js";import"./index-5dfzm_kn.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-B2vXpe_3.js";import"./components-DpSuslmU.js";import"./mergeStyles-C_QAuicJ.js";import"./Box-CsR_RSm3.js";import"./index-COdRIEp6.js";import"./useConstant-CUZppmaV.js";import"./flex-jx6OknuD.js";import"./grid-CcdDoURF.js";import"./chevron-left-small-Yz6QpAF-.js";import"./types-wqmYQQWa.js";import"./chevron-right-small-DxmMaev8.js";import"./TertiaryButton-ByhN6lyv.js";import"./BaseButton-Cxong-p3.js";import"./SystemIcon-Cl7xWrYQ.js";import"./Svg-C5I5ANGp.js";import"./px2rem-C0KbprIx.js";import"./Button-nWZozxrK.js";import"./TypeLevelComponents-9vqCSdj5.js";import"./Text-ChJY5-bw.js";import"./TextInput-BqzMEWjb.js";import"./types-DXdjelYI.js";const Z={title:"Testing/Navigation/Pagination",component:e,parameters:{chromatic:{disable:!1}}},l=({dir:u="ltr",theme:h})=>{const c=T(10,100),m=u==="rtl";return t.jsx(x,{theme:h,dir:u,style:{display:"inline-block"},children:t.jsx(P,{rowProps:[{label:"Step Controls",props:{}},{label:"Jump Controls",props:{shouldShowJumpControls:!0}},{label:"GoTo Form",props:{shouldShowJumpControls:!0,shouldShowGoToForm:!0}},{label:"Additional Details",props:{shouldShowJumpControls:!0,shouldShowGoToForm:!0,shouldShowAddtionalDetails:!0}}],columnProps:[{label:"First Page is Active",props:{}},{label:"Middle Page is Active",props:{initialCurrentPage:5}},{label:"Last Page is Active",props:{initialCurrentPage:10}}],children:o=>t.jsxs(e,{"aria-label":"Pagination",lastPage:c,rangeSize:3,initialCurrentPage:o.initialCurrentPage,children:[t.jsxs(e.Controls,{children:[o.shouldShowJumpControls&&t.jsx(e.JumpToFirstButton,{"aria-label":"First"}),t.jsx(e.StepToPreviousButton,{"aria-label":"Previous"}),t.jsx(e.PageList,{children:({state:r})=>r.range.map(n=>t.jsx(e.PageListItem,{children:t.jsx(e.PageButton,{"aria-label":`Page ${n}`,pageNumber:n})},n))}),t.jsx(e.StepToNextButton,{"aria-label":"Next"}),o.shouldShowJumpControls&&t.jsx(e.JumpToLastButton,{"aria-label":"Last"}),o.shouldShowGoToForm&&t.jsxs(e.GoToForm,{children:[t.jsx(e.GoToTextInput,{"aria-label":"Go to page number"}),t.jsx(e.GoToLabel,{children:()=>m?"من 100 صفحات":"of 100 pages"})]})]}),t.jsx(e.AdditionalDetails,{shouldHideDetails:!o.shouldShowAddtionalDetails,children:({state:r})=>m?`${p(r.currentPage,10,100)}-${d(r.currentPage,10)} من 100 صفحات`:`${d(r.currentPage,10)}-${p(r.currentPage,10,100)} of 100 pages`})]})})})},s={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Left-To-Right Pagination"}),t.jsx(l,{dir:"ltr"})]})},a={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Themed"}),t.jsx(l,{theme:{canvas:g}})]})},i={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Right-To-Left Pagination"}),t.jsx(l,{dir:"rtl"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Left-To-Right Pagination</h2>
        <TableRenderer dir="ltr" />
      </>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Themed</h2>
        <TableRenderer theme={{
        canvas: customColorTheme
      }} />
      </>;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Right-To-Left Pagination</h2>
        <TableRenderer dir="rtl" />
      </>;
  }
}`,...i.parameters?.docs?.source}}};const tt=["VisualStatesLeftToRight","VisualStatesThemed","VisualStatesRightToLeft"];export{s as VisualStatesLeftToRight,i as VisualStatesRightToLeft,a as VisualStatesThemed,tt as __namedExportsOrder,Z as default};
