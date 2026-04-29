import{e as i}from"./index-IfJi-UCQ.js";function c(e){try{return localStorage.get(e)}catch{return null}}function u(e,t){try{localStorage.set(e,t)}catch{}}let n=c("modality")||(typeof document<"u"&&document.documentElement.clientWidth<768?"touch":"")||"mouse";const d=e=>{n!==e&&u("modality",e),n=e},m=()=>{const[e,t]=i.useState(n);return i.useEffect(()=>{const o=a=>{const s=a.pointerType;t(s),d(s)};return document.addEventListener("pointerdown",o),()=>{document.removeEventListener("pointerdown",o)}},[]),e},r=[{name:"useModalityType",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/utils/useModalityType.ts",description:`Uses heuristics to determine if the user is on a touch device, uses a pen, or a mouse. This hook
is useful if you have styles or behaviors that depend on the user's interaction type. For
example, touch users can scroll horizontally easier than mouse users, so horizontal overflow
might be more desired than overflow menus on touch devices. For devices that support multiple
input types, the last used input type is saved. For these devices, consider the possibility this
value could change after your component is rendered, so make sure you component rerenders
properly in this case.

Uses \`PointerEvent.pointerType\` to determine last used input.`,declarations:[{name:"useModalityType",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/utils/useModalityType.ts"}],tags:{see:`https
://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType`},type:{kind:"function",parameters:[],members:[],returnType:{kind:"symbol",name:"Modality",value:"Modality"}}}];window.__updateDocs?window.__updateDocs?.(r):window.__docs=(window.__docs||[]).concat(r);export{m as u};
