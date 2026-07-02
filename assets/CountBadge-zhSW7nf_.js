import{j as d}from"./jsx-runtime-Bu6AqWCO.js";import{c}from"./components-UDFgQUGn.js";import{h as m,a as u,k as p}from"./cs-rfTTo7Bg.js";p({name:"2flwv8",styles:"from{transform:scale(0.85);}to{transform:scale(1.0);}"});const h=u({base:{name:"3v6xv",styles:"box-sizing:border-box;align-items:center;animation:animation-2flwv8 0.2s ease;border-radius:var(--cnvs-sys-shape-full, var(--cnvs-sys-shape-round, 65rem));display:inline-flex;font-family:var(--cnvs-sys-font-family-default);font-size:var(--cnvs-sys-font-size-subtext-md, var(--cnvs-sys-font-size-subtext-medium, 0.75rem));font-weight:var(--cnvs-sys-font-weight-bold);height:1.25rem;justify-content:center;line-height:var(--cnvs-sys-line-height-subtext-lg, var(--cnvs-sys-line-height-subtext-large, 1.25rem));letter-spacing:var(--cnvs-sys-letter-spacing-subtext-md, var(--cnvs-sys-type-letter-spacing-subtext-medium));min-width:var(--cnvs-sys-size-xxs, var(--cnvs-sys-space-x5, 1.25rem));padding:0 0.40625rem;background:var(--cnvs-sys-color-accent-danger, var(--cnvs-sys-color-bg-critical-default, oklch(0.5342 0.2172 29.53 / 1)));color:var(--cnvs-sys-color-fg-inverse);"},modifiers:{variant:{inverse:{name:"4am5wd",styles:"background:var(--cnvs-sys-color-surface-inverse, var(--cnvs-sys-color-bg-default, oklch(1 0 0 / 1)));color:var(--cnvs-sys-color-fg-info-strong, var(--cnvs-sys-color-fg-primary-strong, oklch(0.4658 0.1562 255.5 / 1)));"}},emphasis:{high:{name:"3eb4ai",styles:""},low:{name:"339zw9",styles:"background:var(--cnvs-sys-color-surface-info-strong, var(--cnvs-sys-color-bg-info-softer, oklch(0.6152 0.2108 256.1 / 0.11)));color:var(--cnvs-sys-color-fg-info-strong, var(--cnvs-sys-color-fg-primary-strong, oklch(0.4658 0.1562 255.5 / 1)));"}}},compound:[{modifiers:{variant:"inverse",emphasis:"low"},styles:{name:"2pq5fd",styles:"background:var(--cnvs-sys-color-surface-overlay-hover-inverse, oklch(1 0 0 / 0.16));color:var(--cnvs-sys-color-fg-inverse);"}}]},"count-badge-524876"),f=c("span")({displayName:"CountBadge",Component:({count:e=0,limit:n=1e3,variant:t,emphasis:s="high",...r},o,i)=>{const l=e<n?`${e}`:`${n-1}+`;return d.jsx(i,{ref:o,...m(r,[h({variant:t,emphasis:s})]),children:l})}}),a=[{name:"CountBadgeProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx",description:"",declarations:[{name:"CountBadgeProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"count",required:!1,type:{kind:"primitive",value:"number"},description:"Sets the count displayed in the badge",declarations:[{name:"count",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{default:"0"}},{kind:"property",name:"emphasis",required:!1,type:{kind:"union",value:[{kind:"string",value:"high"},{kind:"string",value:"low"}]},description:"Sets the emphasis of the badge",declarations:[{name:"emphasis",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{default:"'high'"}},{kind:"property",name:"limit",required:!1,type:{kind:"primitive",value:"number"},description:"Sets the maximum count to display before formatting the number.\nE.g. Given a count of `100` and a limit of `100`, the badge would display `99+`.",declarations:[{name:"limit",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{default:"1000"}},{kind:"property",name:"variant",required:!1,type:{kind:"string",value:"inverse"},description:"Sets the variant of the Count Badge",declarations:[{name:"variant",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{}},{kind:"property",name:"cs",required:!1,type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},description:`The \`cs\` prop takes in a single value or an array of values. You can pass the CSS class name
returned by {@link createStyles }, or the result of {@link createVars } and
{@link createModifiers }. If you're extending a component already using \`cs\`, you can merge that
prop in as well. Any style that is passed to the \`cs\` prop will override style props. If you
wish to have styles that are overridden by the \`css\` prop, or styles added via the \`styled\`
API, use {@link handleCsProp } wherever \`elemProps\` is used. If your component needs to also
handle style props, use {@link mergeStyles} instead.


\`\`\`tsx
import {handleCsProp} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

// ...

// \`handleCsProp\` handles compat mode with Emotion's runtime APIs. \`mergeStyles\` has the same
// function signature, but adds support for style props.

return (
 <Element
   {...handleCsProp(elemProps, [
     myStyles,
     myModifiers({ size: 'medium' }),
     myVars({ backgroundColor: 'red' })
   ])}
 >
   {children}
 </Element>
)
\`\`\``,declarations:[{name:"cs",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}]}},{name:"CountBadge",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx",description:"`CountBadge` provides a quantity-based summary with dynamic values.",declarations:[{name:"CountBadge",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{},type:{kind:"enhancedComponent",componentType:"regular",displayName:"CountBadge",props:[{kind:"property",name:"count",required:!1,type:{kind:"primitive",value:"number"},description:"Sets the count displayed in the badge",declarations:[{name:"count",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{default:"0"},defaultValue:{kind:"number",value:0}},{kind:"property",name:"emphasis",required:!1,type:{kind:"union",value:[{kind:"string",value:"high"},{kind:"string",value:"low"}]},description:"Sets the emphasis of the badge",declarations:[{name:"emphasis",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{default:"'high'"},defaultValue:{kind:"string",value:"high"}},{kind:"property",name:"limit",required:!1,type:{kind:"primitive",value:"number"},description:"Sets the maximum count to display before formatting the number.\nE.g. Given a count of `100` and a limit of `100`, the badge would display `99+`.",declarations:[{name:"limit",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{default:"1000"},defaultValue:{kind:"number",value:1e3}},{kind:"property",name:"variant",required:!1,type:{kind:"string",value:"inverse"},description:"Sets the variant of the Count Badge",declarations:[{name:"variant",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/badge/lib/CountBadge.tsx"}],tags:{}},{kind:"property",name:"cs",required:!1,type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},description:`The \`cs\` prop takes in a single value or an array of values. You can pass the CSS class name
returned by {@link createStyles }, or the result of {@link createVars } and
{@link createModifiers }. If you're extending a component already using \`cs\`, you can merge that
prop in as well. Any style that is passed to the \`cs\` prop will override style props. If you
wish to have styles that are overridden by the \`css\` prop, or styles added via the \`styled\`
API, use {@link handleCsProp } wherever \`elemProps\` is used. If your component needs to also
handle style props, use {@link mergeStyles} instead.


\`\`\`tsx
import {handleCsProp} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

// ...

// \`handleCsProp\` handles compat mode with Emotion's runtime APIs. \`mergeStyles\` has the same
// function signature, but adds support for style props.

return (
 <Element
   {...handleCsProp(elemProps, [
     myStyles,
     myModifiers({ size: 'medium' }),
     myVars({ backgroundColor: 'red' })
   ])}
 >
   {children}
 </Element>
)
\`\`\``,declarations:[{name:"cs",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"children",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.ReactNode",url:"https://reactjs.org/docs/rendering-elements.html"}},{kind:"property",name:"as",description:"Optional override of the default element used by the component. Any valid tag or Component. If you provided a Component, this component should forward the ref using `React.forwardRef`and spread extra props to a root element.\n\n**Note:** Not all elements make sense and some elements may cause accessibility issues. Change this value with care.",tags:{},declarations:[],type:{kind:"external",name:"React.ElementType",url:"https://developer.mozilla.org/en-US/docs/Web/API/element"},defaultValue:{kind:"external",name:"span",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}},{kind:"property",name:"ref",description:"Optional ref. If the component represents an element, this ref will be a reference to the real DOM element of the component. If `as` is set to an element, it will be that element. If `as` is a component, the reference will be to that component (or element if the component uses `React.forwardRef`).",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html",typeParameters:[{kind:"typeParameter",name:"R",required:!0,defaultValue:{kind:"external",name:"span",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}}]}}],baseElement:{kind:"external",name:"span",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}}}];window.__updateDocs?window.__updateDocs?.(a):window.__docs=(window.__docs||[]).concat(a);export{f as C};
