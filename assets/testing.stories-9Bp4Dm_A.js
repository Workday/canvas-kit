import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import{c as g}from"./customThemes-fPP2pKvJ.js";import"./CanvasProviderDecorator-CMG8Zp1R.js";import{P as e,g as T,a as p,b as d}from"./Pagination-D9c8eWx2.js";import{S as x}from"./StaticStates-BjfSL7BF.js";import{C as P}from"./ComponentStatesTable-B1RBkZZ8.js";import"./CanvasProvider-C7ugKcSG.js";import"./index-5dfzm_kn.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-B2vXpe_3.js";import"./components-LrHOR9oD.js";import"./mergeStyles-ohqdrEHk.js";import"./Box-C_Zoww7w.js";import"./index-DmIRx617.js";import"./useConstant-CUZppmaV.js";import"./flex-DnUIWBVd.js";import"./grid-DZpUo_qA.js";import"./chevron-left-small-Yz6QpAF-.js";import"./types-wqmYQQWa.js";import"./chevron-right-small-DxmMaev8.js";import"./TertiaryButton-D6oRjkOE.js";import"./BaseButton-CwOogSdK.js";import"./SystemIcon-FnxI7NlK.js";import"./Svg-CvDR7rs1.js";import"./px2rem-C0KbprIx.js";import"./Button-CaC9joHn.js";import"./TypeLevelComponents-CAieKCq4.js";import"./Text-MDqq-tDA.js";import"./TextInput-C01_4HFH.js";import"./types-DXdjelYI.js";const Z={title:"Testing/Navigation/Pagination",component:e,parameters:{chromatic:{disable:!1}}},l=({dir:u="ltr",theme:h})=>{const c=T(10,100),m=u==="rtl";return t.jsx(x,{theme:h,dir:u,style:{display:"inline-block"},children:t.jsx(P,{rowProps:[{label:"Step Controls",props:{}},{label:"Jump Controls",props:{shouldShowJumpControls:!0}},{label:"GoTo Form",props:{shouldShowJumpControls:!0,shouldShowGoToForm:!0}},{label:"Additional Details",props:{shouldShowJumpControls:!0,shouldShowGoToForm:!0,shouldShowAddtionalDetails:!0}}],columnProps:[{label:"First Page is Active",props:{}},{label:"Middle Page is Active",props:{initialCurrentPage:5}},{label:"Last Page is Active",props:{initialCurrentPage:10}}],children:o=>t.jsxs(e,{"aria-label":"Pagination",lastPage:c,rangeSize:3,initialCurrentPage:o.initialCurrentPage,children:[t.jsxs(e.Controls,{children:[o.shouldShowJumpControls&&t.jsx(e.JumpToFirstButton,{"aria-label":"First"}),t.jsx(e.StepToPreviousButton,{"aria-label":"Previous"}),t.jsx(e.PageList,{children:({state:r})=>r.range.map(n=>t.jsx(e.PageListItem,{children:t.jsx(e.PageButton,{"aria-label":`Page ${n}`,pageNumber:n})},n))}),t.jsx(e.StepToNextButton,{"aria-label":"Next"}),o.shouldShowJumpControls&&t.jsx(e.JumpToLastButton,{"aria-label":"Last"}),o.shouldShowGoToForm&&t.jsxs(e.GoToForm,{children:[t.jsx(e.GoToTextInput,{"aria-label":"Go to page number"}),t.jsx(e.GoToLabel,{children:()=>m?"من 100 صفحات":"of 100 pages"})]})]}),t.jsx(e.AdditionalDetails,{shouldHideDetails:!o.shouldShowAddtionalDetails,children:({state:r})=>m?`${p(r.currentPage,10,100)}-${d(r.currentPage,10)} من 100 صفحات`:`${d(r.currentPage,10)}-${p(r.currentPage,10,100)} of 100 pages`})]})})})},s={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Left-To-Right Pagination"}),t.jsx(l,{dir:"ltr"})]})},a={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Themed"}),t.jsx(l,{theme:{canvas:g}})]})},i={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Right-To-Left Pagination"}),t.jsx(l,{dir:"rtl"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
