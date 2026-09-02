import{j as l}from"./jsx-runtime-Bu6AqWCO.js";import{c as d,a as m}from"./components-BhvJ7593.js";import{h as p,c}from"./cs-CmRirKzJ.js";import{e as r}from"./index-IfJi-UCQ.js";import{o as u}from"./Menu-Be0OJ5CA.js";import{i as h}from"./useListItemRegister-CAj1jmo7.js";import{u as y}from"./useMount-CAK2BN3_.js";const k=c({name:"3idhzs",styles:"white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"}),T=d("span")({displayName:"EllipsisText",Component({children:e,...s},t,n){return l.jsx(n,{ref:t,...p(s,k),children:e})}}),o=[{name:"EllipsisTextProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/EllipsisText.tsx",description:"",declarations:[{name:"EllipsisTextProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/EllipsisText.tsx"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"children",required:!0,type:{kind:"external",name:"ReactNode",url:"https://reactjs.org/docs/rendering-elements.html"},description:"",declarations:[{name:"children",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/EllipsisText.tsx"}],tags:{}},{kind:"property",name:"cs",required:!1,type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},description:`The \`cs\` prop takes in a single value or an array of values. You can pass the CSS class name
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
\`\`\``,declarations:[{name:"cs",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"as",description:"Optional override of the default element used by the component. Any valid tag or Component. If you provided a Component, this component should forward the ref using `React.forwardRef`and spread extra props to a root element.\n\n**Note:** Not all elements make sense and some elements may cause accessibility issues. Change this value with care.",tags:{},declarations:[],type:{kind:"external",name:"React.ElementType",url:"https://developer.mozilla.org/en-US/docs/Web/API/element"},defaultValue:{kind:"external",name:"span",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}},{kind:"property",name:"ref",description:"Optional ref. If the component represents an element, this ref will be a reference to the real DOM element of the component. If `as` is set to an element, it will be that element. If `as` is a component, the reference will be to that component (or element if the component uses `React.forwardRef`).",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html",typeParameters:[{kind:"typeParameter",name:"R",required:!0,defaultValue:{kind:"external",name:"span",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}}]}}],baseElement:{kind:"external",name:"span",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}}}];window.__updateDocs?window.__updateDocs?.(o):window.__docs=(window.__docs||[]).concat(o);const C=m()(({state:e,events:s})=>{const t=r.useRef(!1),n=r.useRef(0);return y(()=>()=>{cancelAnimationFrame(n.current)}),{onKeyDown(i){Object.keys(u[e.orientation]).indexOf(i.key)!==-1&&(t.current=!0)},onFocus(){t.current=!1},onBlur(){t.current||(n.current=requestAnimationFrame(()=>{h(e,e.selectedIds[0])||s.goTo({id:e.selectedIds[0]})}))}}}),a=[{name:"useListResetCursorOnBlur",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/collection/lib/useListResetCursorOnBlur.tsx",description:`This elemProps hook resets the cursor when the list looses focus. By default,
[useListItemRovingFocus](#use-list-item-roving-focus) will leave the last focused item as the
focusable item in the list. Sometimes it is desireable to reset the cursor to the last selected
item. For example, \`Tabs.Item\` uses this hook to reset the tab stop to the currently selected tab.

\`\`\`ts
const useMyItem = composeHooks(
  useListResetCursorOnBlur, // adds the cursor reset to selected for roving tabindex
  useListItemRovingFocus,
  useListItemRegister
);
\`\`\``,declarations:[{name:"useListResetCursorOnBlur",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/collection/lib/useListResetCursorOnBlur.tsx"}],tags:{},type:{kind:"function",name:{kind:"symbol",name:"createElemPropsHook"},parameters:[{kind:"parameter",name:"model",description:"",tags:{},declarations:[],type:{kind:"symbol",name:"ListModel"},required:!0},{kind:"parameter",name:"elemProps",description:"",tags:{},declarations:[],type:{kind:"object",properties:[]},required:!1},{kind:"parameter",name:"ref",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html"},required:!1}],returnType:{kind:"object",properties:[{kind:"property",name:"onKeyDown",required:!0,type:{kind:"function",parameters:[{kind:"parameter",name:"event",type:{kind:"symbol",name:"React.KeyboardEvent",value:"KeyboardEvent<T>"},required:!0,rest:!1,description:"",declarations:[{name:"event",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/collection/lib/useListResetCursorOnBlur.tsx"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"void"}},description:"",tags:{},declarations:[]},{kind:"property",name:"onFocus",required:!0,type:{kind:"function",parameters:[],members:[],returnType:{kind:"primitive",value:"void"}},description:"",tags:{},declarations:[]},{kind:"property",name:"onBlur",required:!0,type:{kind:"function",parameters:[],members:[],returnType:{kind:"primitive",value:"void"}},description:"",tags:{},declarations:[]}]}}}];window.__updateDocs?window.__updateDocs?.(a):window.__docs=(window.__docs||[]).concat(a);export{T as E,C as u};
