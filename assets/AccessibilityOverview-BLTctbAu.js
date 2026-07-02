import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as t}from"./index-3YbjYt95.js";import{ae as r}from"./index-BH6-T5Fm.js";import"./index-IfJi-UCQ.js";import"./iframe-RxBVwp_9.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function s(i){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Accessibility/Overview"}),`
`,e.jsx(n.h2,{id:"canvas-kit-accessibility",children:"Canvas Kit Accessibility"}),`
`,e.jsx(n.p,{children:`Canvas Kit is built with accessibility in mind and we continuously strive to provide a robust set of
accessible components that are easy to customize for your needs. Core concepts and key investments
made by the Canvas Kit development team are introduced in the sections below and throughout this
guide.`}),`
`,e.jsx(n.h2,{id:"read-me-first",children:"Read Me First"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"No ARIA is better than Bad ARIA."}),`
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/",rel:"nofollow",children:"Read Me First | APG | WAI | W3C"})]}),`
`,e.jsxs(n.p,{children:[`Accessible Rich Internet Applications (ARIA) is like CSS styling for assistive technologies. Unlike
CSS however, ARIA mistakes and gaps in support are not clearly visible to designers and developers.
Canvas Kit components are built with semantic HTML and include as much of the required ARIA as
possible according to the `,e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-1.2/",rel:"nofollow",children:"WAI-ARIA 1.2 specification"}),`
recommended by the W3C and the patterns found in the ARIA Authoring Practices Guide. (APG)`]}),`
`,e.jsx(n.h2,{id:"the-accessibility-tree",children:"The Accessibility Tree"}),`
`,e.jsx(n.p,{children:`The Accessibility Tree is created by the web browser from the semantic information provided in the
document object model (DOM). It's like a simplified outline containing only the most important
information: the elements on the page, what they are (e.g., a button, a link, a heading), and what
they do. This tree is what a screen reader uses to tell a person what's on the page and how to
interact with it.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name:"}),` a.k.a. “Label” describes the purpose of an element. (E.g. text fields provided for first
name, last name, and street address.)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"role:"}),` describes what an element is and how it can be used. (E.g. a text field, radio button
group, or single checkbox.)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"state:"}),` describes the current state of an element. (E.g. whether a text field is empty or
displaying text.)`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Further reading:
`,e.jsx(n.a,{href:"https://developer.chrome.com/blog/full-accessibility-tree#main-content",rel:"nofollow",children:"Full accessibility tree in Chrome DevTools"})]}),`
`,e.jsx(n.h2,{id:"accessible-names-and-descriptions",children:"Accessible Names and Descriptions"}),`
`,e.jsxs(n.p,{children:["Giving an element an ",e.jsx(n.strong,{children:"accessible name"}),` is like giving it a label. It's a short phrase, like
"Search" or "Submit," that a screen reader uses to tell a person what an item is. This helps a user
understand the element's purpose and tell it apart from other items on the page. Some items, like
buttons and links, are required to have an accessible name. You can also add an `,e.jsx(n.strong,{children:`accessible
description`}),` if you need to provide more information. This could be instructions for a form field
or a longer explanation of what a button does. A screen reader will read the name first, and then
the description, giving the user all the information they need to understand and use the element.`]}),`
`,e.jsxs(n.p,{children:[`To make a website accessible to everyone, follow these five cardinal rules for naming web elements:
always `,e.jsx(n.strong,{children:"prefer visible text and native techniques"}),` like HTML labels, which are simpler and more
reliable. You should also `,e.jsx(n.strong,{children:"avoid browser fallback"}),` like the title attribute or placeholder values.
The names themselves should be `,e.jsx(n.strong,{children:"brief and useful"}),". Lastly, you should always ",e.jsx(n.strong,{children:`heed warnings and
test thoroughly`})," to ensure everything works correctly."]}),`
`,e.jsx(n.h3,{id:"naming-priority-simplified",children:"Naming Priority (Simplified):"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-labelledby"})," (unique id)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-label"})," (string)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<label>"})," and ",e.jsx(n.code,{children:"for"})," attribute with unique ",e.jsx(n.code,{children:"id"})," (for input)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"placeholder"})," (for input)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alt"})," (for images)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text content"})," (between opening and closing tags)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title"})," (string)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Further reading:
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/",rel:"nofollow",children:"Providing Accessible Names and Descriptions | APG | WAI | W3C"})]}),`
`,e.jsxs(n.h2,{id:"accessiblehide-component",children:[e.jsx(n.code,{children:"<AccessibleHide>"})," Component"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<AccessibleHide>
  This text is hidden using CSS and still available to screen readers.
</AccessibleHide>
`})}),`
`,e.jsxs(n.h2,{id:"arialiveregion-component",children:[e.jsx(n.code,{children:"<AriaLiveRegion>"})," Component"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/**
* This component includes:
* aria-atomic="true"
* aria-live="polite"
* role="status"
*/
<AriaLiveRegion>
  When this text is updated, screen readers will announce it automatically in live time.
</AriaLiveRegion>
`})}),`
`,e.jsxs(n.p,{children:["Check out our ",e.jsx(n.a,{href:"?path=/docs/guides-accessibility-aria-live-regions--docs",children:"Aria Live Region Examples"}),`
for more detailed information about this topic.`]}),`
`,e.jsxs(n.p,{children:[`Sometimes, things change on a webpage without the whole page reloading. Think of a live sports score
that updates every few seconds or a search result that appears as you type. For users of screen
readers, these changes can be missed because the screen reader doesn't know to look for them. This
is where `,e.jsx(n.strong,{children:"ARIA live regions"}),` come in. An ARIA live region is a special area on a webpage that
tells a screen reader to pay close attention to it. When the content in this area changes, the
screen reader automatically announces the update to the user. This ensures that everyone, including
those using assistive technology, is kept aware of important, real-time changes on the page.`]}),`
`,e.jsxs(n.h2,{id:"useuniqueid-hook",children:[e.jsx(n.code,{children:"useUniqueId()"})," Hook"]}),`
`,e.jsx(n.p,{children:`This handy utility function is useful anytime a unique ID is needed for assigning labels,
descriptions, or for anything else in the web application.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/**
* This example demonstrates using 'aria-labelledby' on the table container
* instead of using HTML <caption> to assign a name for the table.
*/
const tableHeadingId = useUniqueId();
...
<Heading id={tableHeadingId}> Pizza Toppings </Heading>
...
<Table aria-labelledby={tableHeadingId}>
  /* table rows */
</Table>

`})}),`
`,e.jsxs(n.p,{children:[`Example:
`,e.jsx(n.a,{href:"?path=/story/components-containers-table--basic-with-heading",children:"Components > Containers > Table > Basic With Heading"})]}),`
`,e.jsxs(n.h2,{id:"px2rem-function",children:[e.jsx(n.code,{children:"px2rem()"})," Function"]}),`
`,e.jsxs(n.p,{children:[`This is another handy utility function that will convert pixel units into relative units. While
using the `,e.jsx(n.a,{href:"?path=/docs/guides-tokens-migration-overview--docs",children:"Canvas Token System"})," is ",e.jsx(n.strong,{children:`strongly
recommended`})," first, this is a nice tool for using relative units if a space token isn't feasible."]}),`
`,e.jsxs(n.p,{children:["Further reading: ",e.jsx(n.a,{href:"?path=/docs/styling-utilities--docs",children:"Canvas Kit Styling Utilities"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/**
* This example demonstrates the main content region
* of the grid to have a height of 800px.
*/
const gridLayoutStyles = createStyles({
  ...
  gridTemplateRows: \`auto \${px2rem(800)} auto\`,
});
`})}),`
`,e.jsxs(n.p,{children:[`Example:
`,e.jsx(n.a,{href:"?path=/docs/guides-accessibility-page-structure--docs",children:"Guides > Accessibility > Page Structure"})]}),`
`,e.jsx(n.h2,{id:"responsiveness-and-reflow",children:"Responsiveness and Reflow"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"WCAG v2.2 success criterion 1.4.10 Reflow states:"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:`“Content can be presented without loss of information or functionality, and without requiring
scrolling in two dimensions for vertical scrolling content at a width equivalent to 320 CSS pixels
and horizontal scrolling content at a height equivalent to 256 CSS pixels. ”`})}),`
`]}),`
`,e.jsxs(n.p,{children:[`Of course, there are exceptions to this guideline, including tables that do not apply. (Source:
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",rel:"nofollow",children:"Understanding Success Criterion 1.4.10 Reflow"}),`)
In general, we have 2 key recommendations for satisfying this guideline:`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Do not specify a minimum width greater than ",e.jsx(n.code,{children:"320px"})," to avoid unnecessary horizontal scroll."]}),`
`,e.jsx(n.li,{children:"Do not use any sticky headers or footers at the smallest responsive breakpoints."}),`
`]}),`
`,e.jsx(n.h3,{id:"how-we-test-against-this-guideline",children:"How we test against this guideline:"}),`
`,e.jsxs(n.p,{children:["Set the browser viewport to ",e.jsx(n.code,{children:"1280px x 1024px"}),` and increase browser zoom to 400%. This is
mathetmatically equivalent to a width of 320 pixels and a height of 256 pixels required by the
guideline.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Evaluate whether any horizontal scroll isn't necessary in the application."}),`
`,e.jsx(n.li,{children:"Evaluate whether there is any loss of function due to sticky content."}),`
`,e.jsx(n.li,{children:"Look for clipping, overlapping, or otherwise unreadable text."}),`
`]})]})}function x(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as default};
