const i=n=>getComputedStyle(n).direction==="rtl",e=[{name:"isElementRTL",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/utils/isElementRTL.ts",description:`Returns true if element has a right-to-left content direction. This is most useful to get
direction from a JavaScript event. If you desire to get a direction for styling, use [CSS Logical
Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)

The performance cost of getting the direction from an element is negligible, but it is intended
to be used in event handlers and not a part of render functions.

\`\`\`ts
onKeyDown(e) {
  const isRTL = isElementRTL(e.currentTarget);

  if (e.key === 'ArrowRight') {
    if (isRTL) {
      // Right arrow moves to the right even on RTL languages, but "right" doesn't mean
      //"advance" in RTL. Previous is to the right of the current in RTL.
      model.events.goToPreviousRow();
    } else {
      model.events.goToNextRow();
    }
  }
\`\`\``,declarations:[{name:"isElementRTL",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/utils/isElementRTL.ts"}],tags:{},type:{kind:"function",parameters:[{kind:"parameter",name:"element",type:{kind:"external",name:"Element",url:"https://developer.mozilla.org/en-US/docs/Web/API/element"},required:!0,rest:!1,description:"",declarations:[{name:"element",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/utils/isElementRTL.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"boolean"}}}];window.__updateDocs?window.__updateDocs?.(e):window.__docs=(window.__docs||[]).concat(e);export{i};
