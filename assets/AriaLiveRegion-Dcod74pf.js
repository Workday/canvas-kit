import{j as s}from"./jsx-runtime-Bu6AqWCO.js";import{c as l}from"./components-DlilqqSw.js";import{h as d}from"./cs-DvbI9OYs.js";const u=l("div")({displayName:"AriaLiveRegion",Component:({"aria-atomic":a=!0,"aria-live":t="polite",role:n="status",...i},r,o)=>s.jsx(o,{ref:r,"aria-atomic":a,"aria-live":t,role:n,...d(i)})}),e=[{name:"AriaLiveRegionProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx",description:"",declarations:[{name:"AriaLiveRegionProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"aria-atomic",required:!1,type:{kind:"union",value:[{kind:"boolean",value:!0},{kind:"boolean",value:!1},{kind:"string",value:"true"},{kind:"string",value:"false"}]},description:"set the [aria-atomic](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) attribute",declarations:[{name:"aria-atomic",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx"}],tags:{default:"true"}},{kind:"property",name:"aria-live",required:!1,type:{kind:"union",value:[{kind:"string",value:"polite"},{kind:"string",value:"assertive"},{kind:"string",value:"off"}]},description:"set the [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) attribute",declarations:[{name:"aria-live",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx"}],tags:{default:"'polite'"}},{kind:"property",name:"role",required:!1,type:{kind:"union",value:[{kind:"string",value:"status"},{kind:"string",value:"alert"},{kind:"string",value:"log"}]},description:"set the live region's [aria role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)",declarations:[{name:"role",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx"}],tags:{default:"'status'"}},{kind:"property",name:"cs",required:!1,type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},description:`The \`cs\` prop takes in a single value or an array of values. You can pass the CSS class name
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
\`\`\``,declarations:[{name:"cs",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}]}},{name:"AriaLiveRegion",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx",description:"A convenient wrapper for creating an [aria-live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)",declarations:[{name:"AriaLiveRegion",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx"}],tags:{},type:{kind:"enhancedComponent",componentType:"regular",displayName:"AriaLiveRegion",props:[{kind:"property",name:"aria-atomic",required:!1,type:{kind:"union",value:[{kind:"boolean",value:!0},{kind:"boolean",value:!1},{kind:"string",value:"true"},{kind:"string",value:"false"}]},description:"set the [aria-atomic](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) attribute",declarations:[{name:"aria-atomic",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx"}],tags:{default:"true"},defaultValue:{kind:"boolean",value:!0}},{kind:"property",name:"aria-live",required:!1,type:{kind:"union",value:[{kind:"string",value:"polite"},{kind:"string",value:"assertive"},{kind:"string",value:"off"}]},description:"set the [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) attribute",declarations:[{name:"aria-live",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx"}],tags:{default:"'polite'"},defaultValue:{kind:"string",value:"polite"}},{kind:"property",name:"role",required:!1,type:{kind:"union",value:[{kind:"string",value:"status"},{kind:"string",value:"alert"},{kind:"string",value:"log"}]},description:"set the live region's [aria role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)",declarations:[{name:"role",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/AriaLiveRegion.tsx"}],tags:{default:"'status'"},defaultValue:{kind:"string",value:"status"}},{kind:"property",name:"cs",required:!1,type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},description:`The \`cs\` prop takes in a single value or an array of values. You can pass the CSS class name
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
\`\`\``,declarations:[{name:"cs",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"children",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.ReactNode",url:"https://reactjs.org/docs/rendering-elements.html"}},{kind:"property",name:"as",description:"Optional override of the default element used by the component. Any valid tag or Component. If you provided a Component, this component should forward the ref using `React.forwardRef`and spread extra props to a root element.\n\n**Note:** Not all elements make sense and some elements may cause accessibility issues. Change this value with care.",tags:{},declarations:[],type:{kind:"external",name:"React.ElementType",url:"https://developer.mozilla.org/en-US/docs/Web/API/element"},defaultValue:{kind:"external",name:"div",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},{kind:"property",name:"ref",description:"Optional ref. If the component represents an element, this ref will be a reference to the real DOM element of the component. If `as` is set to an element, it will be that element. If `as` is a component, the reference will be to that component (or element if the component uses `React.forwardRef`).",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html",typeParameters:[{kind:"typeParameter",name:"R",required:!0,defaultValue:{kind:"external",name:"div",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}}]}}],baseElement:{kind:"external",name:"div",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}}}];window.__updateDocs?window.__updateDocs?.(e):window.__docs=(window.__docs||[]).concat(e);export{u as A};
