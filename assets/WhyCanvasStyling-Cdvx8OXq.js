import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as s}from"./index-3YbjYt95.js";import{ae as i}from"./index-B2C7rmFn.js";import"./index-IfJi-UCQ.js";import"./iframe-D4Efgt29.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Styling/Guides/Why Canvas Styling"}),`
`,e.jsx(n.h1,{id:"why-canvas-styling",children:"Why Canvas Styling"}),`
`,e.jsx(n.p,{children:`This package contains everything needed to create CSS styling. This styling package contains a
runtime for development and a static parsing process for build time.`}),`
`,e.jsx(n.p,{children:"Here are the goals for this project:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"TypeScript autocomplete of CSS object properties"}),`
`,e.jsx(n.li,{children:"Low runtime for development"}),`
`,e.jsx(n.li,{children:"Static CSS compilation for faster user experience"}),`
`,e.jsx(n.li,{children:"Static CSS extraction for CSS only packages"}),`
`,e.jsx(n.li,{children:"Dynamic styles using CSS Variables"}),`
`]}),`
`,e.jsxs(n.p,{children:[`If you're using Canvas Kit and not directly using this package, there is nothing extra to do on your
end. The Canvas Kit packages are using the static compilation as part of the build process. If you
want to use this package for your own styles, you don't need to do anything special to use in
development. Included is a small runtime to get styling working. If you wish to statically compile
your CSS from your TypeScript files for faster page loading, visit the
`,e.jsx(n.a,{href:"/docs/styling-getting-started--docs",children:"Getting Started"})," page."]}),`
`,e.jsx(n.h2,{id:"why",children:"Why?"}),`
`,e.jsxs(n.p,{children:[`Canvas Kit no longer needs to support IE11 which allows us to use
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS Custom Properties a.k.a. CSS Variables"}),`.
Dynamic style properties (properties that change during the lifecylce of the component) are the most
costly in terms of performance in Emotion and should be avoided. Also, any conditionals in your
Emotion style functions create unique hashes in the Emotion cache and makes that render frame pay an
expensive
`,e.jsx(n.a,{href:"https://microsoftedge.github.io/DevTools/explainers/StyleTracing/explainer.html",rel:"nofollow",children:"style recalculation"}),"."]}),`
`,e.jsxs(n.p,{children:[`We can avoid most of the cost of Emotion's runtime by using
`,e.jsx(n.a,{href:"https://www.npmjs.com/package/@emotion/css",rel:"nofollow",children:"@emotion/css"}),` instead and hoist all style definitions
outside of a component's render function. All dynamic styling can be moved into "modifiers" (from
`,e.jsx(n.a,{href:"https://getbem.com/introduction/#modifer:~:text=%2C%20header%20title-,Modifier,-A%20flag%20on",rel:"nofollow",children:"BEM"}),")."]}),`
`,e.jsxs(n.p,{children:[`There's still a runtime to select which styles should apply to an element and what the CSS Variable
should be, but it is essentially only having to choose what CSS classes should apply to an element
and changing the `,e.jsx(n.code,{children:"style"}),` property to set the CSS Variables. This does not require new
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet",rel:"nofollow",children:"StyleSheet"}),` inserts which cause
expensive style recalculation. Think of the runtime as being the following:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div
  className={getClassNames(/* input from props */)}
  style={getCSSVarValues(/* input from props */)}
/>
`})}),`
`,e.jsxs(n.p,{children:[`For further information, please read our GitHub discussion on
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/2265",rel:"nofollow",children:"the future of styling"})]}),`
`,e.jsx(n.h2,{id:"what-is-canvas-kit-styling",children:"What is Canvas Kit Styling?"}),`
`,e.jsx(n.p,{children:"Canvas Kit Styling includes two things:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A utility function wrapper around ",e.jsx(n.code,{children:"@emotion/css"})]}),`
`,e.jsx(n.li,{children:"An optional static compiler to remove most of the runtime"}),`
`]}),`
`,e.jsx(n.h3,{id:"utility-functions",children:"Utility Functions"}),`
`,e.jsxs(n.p,{children:[`This packages provides three utility functions to make it easier to style element-based components.
The following is a brief description of each function. If you'd like to read a more in-depth
discussion of each, our `,e.jsx(n.a,{href:"/docs/features-styling-api--create-styles",children:"API docs"}),"."]}),`
`,e.jsxs(n.p,{children:["The primary utility function is the ",e.jsx(n.code,{children:"createStyles"})," function. It makes a call to the ",e.jsx(n.code,{children:"css"}),` function
from `,e.jsx(n.code,{children:"@emotion/css"}),`. Emotion still does most of the heavy lifting by handling the serialization,
hashing, caching, and style injection.`]}),`
`,e.jsxs(n.p,{children:["The other two utility functions, ",e.jsx(n.code,{children:"createVars"})," and ",e.jsx(n.code,{children:"createModifiers"}),`, provide supplemental styling
functionality. `,e.jsx(n.code,{children:"createVars"}),` allows you to create temporary CSS variables within components to create
dynamic properties. And `,e.jsx(n.code,{children:"createModifiers"}),` creates a modifier function to create dynamic groups of
properties. If you're familiar with modifiers in `,e.jsx(n.a,{href:"https://getbem.com/introduction/",rel:"nofollow",children:"BEM"}),` (Block,
Element, Modifier) CSS, you're well on your way to understanding this function's intent.`]}),`
`,e.jsx(n.h3,{id:"static-compiler",children:"Static Compiler"}),`
`,e.jsxs(n.p,{children:[`The static compiler run as a TypeScript transform during TypeScript's transpilation phase. It
requires the TypeScript type checker to determine the static value of any variables used. The
transformer calls `,e.jsx(n.code,{children:"@emotion/serialize"}),` to pre-compute the serialized styles and hash so that
`,e.jsx(n.code,{children:"@emotion/css"})," can skip these steps. For example, there's the before/after of the code."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// before
const myVars = createVars('textColor', 'backgroundColor');

const myStyles = createStyles({
  fontSize: 12,
  color: cssVar(myVars.textColor),
  backgroundColor: cssVar(myVars.backgroundColor),
});

// after
const myVars = createVars('textColor', 'backgroundColor');

const myStyles = createStyles({
  name: 'a8g234',
  styles:
    'font-size: 12px; color: var(--css-my-vars-textColor); backgroundColor: var(--css-my-vars-backgroundColor);',
});
`})}),`
`,e.jsxs(n.p,{children:["Emotion has an internal shortcut that recognizes the ",e.jsx(n.code,{children:"styles"}),` property and
`,e.jsx(n.a,{href:"https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/serialize/src/index.js#L319",rel:"nofollow",children:"short-circuits interpolation"}),"."]}),`
`,e.jsx(n.h2,{id:"performance",children:"Performance"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createStyles"})," is more performant than ",e.jsx(n.code,{children:"styled"})," components or the ",e.jsx(n.code,{children:"css"}),` prop because the styles must
be statically evaluated. The actual characters of a CSS property value cannot change at runtime.
This means we do not need to recalculate a hash every render or inject new `,e.jsx(n.code,{children:"StyleSheet"}),` entries into
the `,e.jsx(n.code,{children:"StyleSheetList"})," in a render cycle. Injecting new ",e.jsx(n.code,{children:"StyleSheets"}),` causes slow
`,e.jsx(n.a,{href:"https://web.dev/articles/reduce-the-scope-and-complexity-of-style-calculations",rel:"nofollow",children:"Style Recalculation"}),`.
What is not well known is browser engines maintain an internal selector cache to make style
recalculations as fast as possible. Adding a CSS class to a DOM element will invoke a style
recalculation, but if the the CSS selector is already in the `,e.jsx(n.code,{children:"StyleSheetList"}),`, the browser can
optimize how those styles are applied to the current element.`]}),`
`,e.jsxs(n.p,{children:[`In the runtime Emotion's case, a novel style will result in a new style hash which results in a new
`,e.jsx(n.code,{children:"StyleSheet"})," being injected into the ",e.jsx(n.code,{children:"StyleSheetList"}),`. To be safe, the browser's runtime engine will
throw away any style recalculation cache and start from scratch. This happens if you render a new
component on the page that hasn't been rendered yet, or if you make one of your style properties
dynamic between render cycles. Eventually the Emotion cache gets warm and style recalcuation costs
start to normalize and no longer invalidate the browser's selector cache.`]}),`
`,e.jsxs(n.p,{children:[`On a page with over 1,000 elements and over 1,000
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/CSSRule",rel:"nofollow",children:"CSSRules"}),`, (typical of a large web
application), the difference between a < 1ms for warmed selector cache and > 100ms for a fresh
selector cache. `,e.jsx(n.code,{children:"createStyles"})," encourages a pattern similar to ",e.jsx(n.a,{href:"https://getbem.com/",rel:"nofollow",children:"BEM"}),` which
works well with the browser's selector cache by not injecting new `,e.jsx(n.code,{children:"StyleSheet"}),`s during a page's
normal operations. All styles are injected before any rendering takes place.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` Since style props force Emotion's dynamic rendering, style props will fall back to
Emotion's runtime performance characteristics and lose any benefits gained. Also if you use
`,e.jsx(n.code,{children:"styled"})," components or the ",e.jsx(n.code,{children:"css"})," prop in a tree that uses ",e.jsx(n.code,{children:"createStyles"}),`, the styles created by
the runtime APIs will still result in a selector cache invalidation. Even if you want to use
`,e.jsx(n.code,{children:"styled"})," or the ",e.jsx(n.code,{children:"css"}),` prop, consider using CSS Variables for dynamic CSS property values to reduce
the performance overhead of Emotion.`]}),`
`]})]})}function f(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{f as default};
