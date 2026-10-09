import{j as r}from"./jsx-runtime-Bu6AqWCO.js";import{c as o}from"./components-B1mGnJpp.js";import{h as l,c as i}from"./cs-CmRirKzJ.js";const p=i({name:"1slsdu",styles:"white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"}),u=o("span")({displayName:"EllipsisText",Component({children:n,...t},s,a){return r.jsx(a,{ref:s,...l(t,p),children:n})}}),e=[{name:"EllipsisTextProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/EllipsisText.tsx",description:"",declarations:[{name:"EllipsisTextProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/EllipsisText.tsx"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"children",required:!0,type:{kind:"external",name:"ReactNode",url:"https://reactjs.org/docs/rendering-elements.html"},description:"",declarations:[{name:"children",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/EllipsisText.tsx"}],tags:{}},{kind:"property",name:"cs",required:!1,type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},description:`The \`cs\` prop takes in a single value or an array of values. You can pass the CSS class name
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
\`\`\``,declarations:[{name:"cs",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}]}},{name:"EllipsisText",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/EllipsisText.tsx",description:"",declarations:[{name:"EllipsisText",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/EllipsisText.tsx"}],tags:{},type:{kind:"enhancedComponent",componentType:"regular",displayName:"EllipsisText",props:[{kind:"property",name:"children",required:!0,type:{kind:"external",name:"ReactNode",url:"https://reactjs.org/docs/rendering-elements.html"},description:"",declarations:[{name:"children",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/EllipsisText.tsx"}],tags:{}},{kind:"property",name:"cs",required:!1,type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},description:`The \`cs\` prop takes in a single value or an array of values. You can pass the CSS class name
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
\`\`\``,declarations:[{name:"cs",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"as",description:"Optional override of the default element used by the component. Any valid tag or Component. If you provided a Component, this component should forward the ref using `React.forwardRef`and spread extra props to a root element.\n\n**Note:** Not all elements make sense and some elements may cause accessibility issues. Change this value with care.",tags:{},declarations:[],type:{kind:"external",name:"React.ElementType",url:"https://developer.mozilla.org/en-US/docs/Web/API/element"},defaultValue:{kind:"external",name:"span",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}},{kind:"property",name:"ref",description:"Optional ref. If the component represents an element, this ref will be a reference to the real DOM element of the component. If `as` is set to an element, it will be that element. If `as` is a component, the reference will be to that component (or element if the component uses `React.forwardRef`).",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html",typeParameters:[{kind:"typeParameter",name:"R",required:!0,defaultValue:{kind:"external",name:"span",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}}]}}],baseElement:{kind:"external",name:"span",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}}}];window.__updateDocs?window.__updateDocs?.(e):window.__docs=(window.__docs||[]).concat(e);export{u as E};
