import{u as f}from"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import{n as p,r as x,q as h,t as T,u as c,v as P,w as C,x as q,y as _,z as B,s as j,A as z,B as F,k as N,C as R,D as S,E as I,F as Q,G as E,H as K,I as D,J as U,K as $,L as O,M as V,N as G,O as L,P as A,Q as M,R as H,S as W,T as J,U as Y,V as Z}from"./index-DKOKnxgv.js";import{b as X}from"./cs-DvbI9OYs.js";const s=["zero","s","m","l","xl"],r={zero:0,s:320,m:768,l:1024,xl:1440},b=.5;function l(e){return`@media (min-width: ${typeof r[e]=="number"?r[e]:e}px)`}function ee(e){const t=s.indexOf(e)+1,n=r[s[t]];return t===s.length?l("zero"):`@media (max-width: ${(typeof n=="number"&&t>0?n:0)-b}px)`}function w(e,t){const n=s.indexOf(t)+1;return n===s.length?l(e):`@media (min-width: ${r[e]}px) and (max-width: ${r[s[n]]-b}px)`}function ne(e){return w(e,e)}const u=[{name:"BreakpointKey",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts",description:"",declarations:[{name:"BreakpointKey",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{},type:{kind:"object",typeParameters:[],properties:[{kind:"property",name:"zero",type:{kind:"string",value:"zero"}},{kind:"property",name:"s",type:{kind:"string",value:"s"}},{kind:"property",name:"m",type:{kind:"string",value:"m"}},{kind:"property",name:"l",type:{kind:"string",value:"l"}},{kind:"property",name:"xl",type:{kind:"string",value:"xl"}}],callSignatures:[]}},{name:"BreakpointFnParam",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts",description:"",declarations:[{name:"BreakpointFnParam",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{},type:{kind:"type",typeParameters:[],value:{kind:"union",value:[{kind:"symbol",name:"BreakpointKey",value:"BreakpointKey"},{kind:"union",value:[{kind:"string",value:"s"},{kind:"string",value:"zero"},{kind:"string",value:"m"},{kind:"string",value:"l"},{kind:"string",value:"xl"}]}]}}},{name:"CanvasBreakpoints",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts",description:"",declarations:[{name:"CanvasBreakpoints",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"zero",required:!0,type:{kind:"number",value:0},description:"### Zero Breakpoint\n\nThis breakpoint is useful when you need to set a media query `min-width` below small.",declarations:[{name:"zero",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { values } = theme.canvas.breakpoints;
const styles = {
  [\`@media (min-width: \${values.zero}px)\`]: {
    padding: space.xxs,
  },
}
\`\`\``}},{kind:"property",name:"s",required:!0,type:{kind:"number",value:320},description:`### Small Breakpoint

The small breakpoint provides the \`min-width\` for mobile devices, such as phones and tablets.
This size ranges from a min-width of 320px to a max-width of 767px.`,declarations:[{name:"s",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { values } = theme.canvas.breakpoints;
const styles = {
  [\`@media (min-width: \${values.s}px)\`]: {
    padding: space.xs,
  },
}
\`\`\``}},{kind:"property",name:"m",required:!0,type:{kind:"number",value:768},description:`### Medium Breakpoint

The medium breakpoint is the min-width for intended for medium screens, such as laptops.
This size ranges from a min-width of 768px to a max-width of 1023px.`,declarations:[{name:"m",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { values } = theme.canvas.breakpoints;
const styles = {
  [\`@media (min-width: \${values.m}px)\`]: {
    padding: space.s,
  },
}
\`\`\``}},{kind:"property",name:"l",required:!0,type:{kind:"number",value:1024},description:`### Large Breakpoint

The large breakpoint is the min-width for intended for large screens, such as desktops.
This size ranges from a min-width of 1024px to a max-width of 1439px.`,declarations:[{name:"l",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { values } = theme.canvas.breakpoints;
const styles = {
  [\`@media (min-width: \${values.m}px)\`]: {
    padding: space.s,
  },
}
\`\`\``}},{kind:"property",name:"xl",required:!0,type:{kind:"number",value:1440},description:`### Extra-Large Breakpoint

The large breakpoint is the min-width for intended for extra-large screens, such as wide monitors and TVs.
This size has a min-width of 1440px and no max-width.`,declarations:[{name:"xl",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { values } = theme.canvas.breakpoints;
const styles = {
  [\`@media (min-width: \${values.m}px)\`]: {
    padding: space.s
  },
}
\`\`\``}}]}},{name:"breakpointKeys",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts",description:"",declarations:[{name:"breakpointKeys",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{},type:{kind:"union",value:[{kind:"string",value:"zero"},{kind:"string",value:"s"},{kind:"string",value:"m"},{kind:"string",value:"l"},{kind:"string",value:"xl"}]}},{name:"breakpoints",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts",description:`### Theme Breakpoint Values

Breakpoints are used by media queries to conditionally apply or modify styles based on the viewport width.
This allows the UI to be responsive to various screen sizes. This object provides five breakpoint values
that correspond to the min-widths of our standard screen sizes.

- \`zero\`: 0
- \`s\`: 320
- \`m\`: 768
- \`l\`: 1024
- \`xl\`: 1440

And these are our standard screen size ranges:

- \`small\` (320px - 767px) Used for mobile-sized screens
- \`medium\` (768px - 1023px) Used for tablet-sized screens
- \`large\` - (1024px - 1439px) Used for laptop and small desktop screens
- \`extra-large\` (≥1440px) Used for very large screens

Note: Some applications may only require a subset of screen sizes and not use all breakpoints.`,declarations:[{name:"breakpoints",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{},type:{kind:"symbol",name:"CanvasBreakpoints",value:"CanvasBreakpoints"}},{name:"up",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts",description:'### Up\n\n_Returns a media query above the `min-width` for the range of a given breakpoint_\n\nGiven a `start` breakpoint key ("zero", "s", "m", "l", "xl"),\nthis function returns a media query (string) using a `min-width`.',declarations:[{name:"up",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { up } = theme.canvas.breakpoints;
const mediaQuery = up('l'); // Returns '@media (min-width: 1024px)'
const styles = {
  [mediaQuery]: {
    padding: space.m,
  }
};
\`\`\``},type:{kind:"function",parameters:[{kind:"parameter",name:"key",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"key",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}}},{name:"down",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts",description:'### Down\n\n_Returns a media query below the `max-width` for the range of a given breakpoint_\n\nGiven an `end` breakpoint key ("zero", "s", "m", "l", "xl"),\nthis function returns a media query (string) using a `max-width`.\n\nNote: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.\nFor example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).\n\nIf the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of `0`,\nas seen in the second example below.',declarations:[{name:"down",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { down } = theme.canvas.breakpoints;
const mediaQuery = down('m'); // Returns '@media (max-width: 1023.5px)'
const styles = {
  [mediaQuery]: {
    padding: space.m,
  }
};
\`\`\`

This example uses the \`xl\` breakpoint and only adds a \`min-width\` of \`0\` to the media query.
\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { down } = theme.canvas.breakpoints;
const mediaQuery = down('xl'); // Returns '@media (min-width: 0)'
const styles = {
  [mediaQuery]: {
    padding: space.m,
  }
};
\`\`\``},type:{kind:"function",parameters:[{kind:"parameter",name:"endKey",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"endKey",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}}},{name:"between",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts",description:'### Between\n\n_Returns a media query between two given breakpoints_\n\nGiven `start` and `end` breakpoint keys ("zero", "s", "m", "l", "xl"),\nthis function returns a media query (string) using a min-width and max-width.\n\nNote: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.\nFor example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).\n\nIf the `xl` breakpoint is provided, this function returns a media query with only a `min-width`,\nas seen in the second example below.',declarations:[{name:"between",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { between } = theme.canvas.breakpoints;
// Returns '@media (min-width: 320px) and (max-width: 1023.5px)'
const mediaQuery = between('s', 'm');
const styles = {
  [mediaQuery]: {
    padding: space.s,
  }
};
\`\`\`

This example uses \`xl\` as the \`end\` breakpoint and only adds a min-width to the media query.
\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { between } = theme.canvas.breakpoints;
const mediaQuery = between('m', 'xl'); // Returns '@media (min-width: 768px)'
const styles = {
  [mediaQuery]: {
    padding: space.s,
  }
};
\`\`\``},type:{kind:"function",parameters:[{kind:"parameter",name:"start",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"start",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{}},{kind:"parameter",name:"end",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"end",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}}},{name:"only",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts",description:'### Only\n\n_Returns a media query with a `min-width` and `max-width` for a given breakpoint_\n\nGiven a breakpoint key ("zero", "s", "m", "l", "xl"),\nthis function returns a media query (string) using a `min-width` and `max-width`.\n\nNote: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.\nFor example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).\n\nIf the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of `1440px`,\nas seen in the second example below.',declarations:[{name:"only",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { only } = theme.canvas.breakpoints;
const mediaQuery = only('s'); // Returns '@media (min-width: 320px) and (max-width: 767.5px)'
const styles = {
  [mediaQuery]: {
    padding: space.s,
  }
};
\`\`\`

This example uses the \`xl\` breakpoint and only adds a \`min-width\` of \`1440px\` to the media query.
\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { only } = theme.canvas.breakpoints;
const mediaQuery = only('xl'); // Returns '@media (min-width: 1440px)'
const styles = {
  [mediaQuery]: {
    padding: space.s,
  }
};
\`\`\``},type:{kind:"function",parameters:[{kind:"parameter",name:"key",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"key",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/breakpoints.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}}}];window.__updateDocs?window.__updateDocs?.(u):window.__docs=(window.__docs||[]).concat(u);var g=(e=>(e.LTR="ltr",e.RTL="rtl",e))(g||{});const k=[{name:"CanvasThemePalette",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts",description:"A single palette within a Canvas theme",declarations:[{name:"CanvasThemePalette",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"lightest",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"lightest",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"lighter",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"lighter",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"light",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"light",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"main",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"main",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"dark",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"dark",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"darkest",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"darkest",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"contrast",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"contrast",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}]}},{name:"ContentDirection",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts",description:"Direction of page content for internationalization",declarations:[{name:"ContentDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{deprecated:"⚠️ `ContentDirection` is deprecated. Use the `:dir()` CSS pseudo-class selector and CSS logical properties instead. For more information, see [MDN :dir()](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir) and [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)."},type:{kind:"object",typeParameters:[],properties:[{kind:"property",name:"LTR",type:{kind:"string",value:"ltr"}},{kind:"property",name:"RTL",type:{kind:"string",value:"rtl"}}],callSignatures:[]}},{name:"CanvasTheme",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts",description:"The format of a Canvas theme for components that support it.",declarations:[{name:"CanvasTheme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{deprecated:"⚠️ `CanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14)."},type:{kind:"object",properties:[{kind:"property",name:"palette",required:!0,type:{kind:"object",properties:[{kind:"property",name:"common",required:!0,type:{kind:"object",properties:[{kind:"property",name:"focusOutline",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"focusOutline",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"alertInner",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"alertInner",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"alertOuter",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"alertOuter",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"errorInner",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"errorInner",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}]},description:"",declarations:[{name:"common",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"primary",required:!0,type:{kind:"symbol",name:"CanvasThemePalette",value:"CanvasThemePalette"},description:"",declarations:[{name:"primary",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"error",required:!0,type:{kind:"symbol",name:"CanvasThemePalette",value:"CanvasThemePalette"},description:"",declarations:[{name:"error",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"alert",required:!0,type:{kind:"symbol",name:"CanvasThemePalette",value:"CanvasThemePalette"},description:"",declarations:[{name:"alert",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"success",required:!0,type:{kind:"symbol",name:"CanvasThemePalette",value:"CanvasThemePalette"},description:"",declarations:[{name:"success",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"neutral",required:!0,type:{kind:"symbol",name:"CanvasThemePalette",value:"CanvasThemePalette"},description:"",declarations:[{name:"neutral",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}]},description:"",declarations:[{name:"palette",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"breakpoints",required:!0,type:{kind:"object",properties:[{kind:"property",name:"values",required:!0,type:{kind:"symbol",name:"CanvasBreakpoints",value:"CanvasBreakpoints"},description:"### Breakpoint Values\n\nThis object provides five breakpoint values\nthat correspond to the min-widths of our standard screen sizes.\n\n- `zero`: 0\n- `s`: 320\n- `m`: 768\n- `l`: 1024\n- `xl`: 1440\n\nAnd these are our standard screen size ranges:\n\n- `small` (320px - 767px) Used for mobile-sized screens\n- `medium` (768px - 1023px) Used for tablet-sized screens\n- `large` - (1024px - 1439px) Used for laptop and small desktop screens\n- `extra-large` (≥1440px) Used for very large screens\n\nNote: Some applications may only require a subset of screen sizes and not use all breakpoints.",declarations:[{name:"values",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"up",required:!0,type:{kind:"function",parameters:[{kind:"parameter",name:"key",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"key",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}},description:'### Up\n\n_Returns a media query above the `min-width` for the range of a given breakpoint_\n\nGiven a `start` breakpoint key ("zero", "s", "m", "l", "xl"),\nthis function returns a media query (string) using a `min-width`.',declarations:[{name:"up",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { up } = theme.canvas.breakpoints;
const mediaQuery = up('l'); // Returns '@media (min-width: 1024px)'
const styles = {
  [mediaQuery]: {
    padding: space.m,
  }
};
\`\`\``}},{kind:"property",name:"down",required:!0,type:{kind:"function",parameters:[{kind:"parameter",name:"key",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"key",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}},description:'### Down\n\n_Returns a media query below the `max-width` for the range of a given breakpoint_\n\nGiven an `end` breakpoint key ("zero", "s", "m", "l", "xl"),\nthis function returns a media query (string) using a `max-width`.\n\nNote: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.\nFor example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).\n\nIf the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of `0`,\nas seen in the second example below.',declarations:[{name:"down",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { down } = theme.canvas.breakpoints;
const mediaQuery = down('m'); // Returns '@media (max-width: 1023.5px)'
const styles = {
  [mediaQuery]: {
    padding: space.m,
  }
};
\`\`\`

This example uses the \`xl\` breakpoint and only adds a \`min-width\` of \`0\` to the media query.
\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { down } = theme.canvas.breakpoints;
const mediaQuery = down('xl'); // Returns '@media (min-width: 0)'
const styles = {
  [mediaQuery]: {
    padding: space.m,
  }
};
\`\`\``}},{kind:"property",name:"between",required:!0,type:{kind:"function",parameters:[{kind:"parameter",name:"start",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"start",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"parameter",name:"end",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"end",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}},description:'### Between\n\n_Returns a media query between two given breakpoints_\n\nGiven `start` and `end` breakpoint keys ("zero", "s", "m", "l", "xl"),\nthis function returns a media query (string) using a min-width and max-width.\n\nNote: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.\nFor example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).\n\nIf the `xl` breakpoint is provided, this function returns a media query with only a `min-width`,\nas seen in the second example below.',declarations:[{name:"between",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { between } = theme.canvas.breakpoints;
// Returns '@media (min-width: 320px) and (max-width: 1023.5px)'
const mediaQuery = between('s', 'm');
const styles = {
  [mediaQuery]: {
    padding: space.s,
  }
};
\`\`\`

This example uses \`xl\` as the \`end\` breakpoint and only adds a min-width to the media query.
\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { between } = theme.canvas.breakpoints;
const mediaQuery = between('m', 'xl'); // Returns '@media (min-width: 768px)'
const styles = {
  [mediaQuery]: {
    padding: space.s,
  }
};
\`\`\``}},{kind:"property",name:"only",required:!0,type:{kind:"function",parameters:[{kind:"parameter",name:"key",type:{kind:"symbol",name:"BreakpointFnParam",value:"BreakpointFnParam"},required:!0,rest:!1,description:"",declarations:[{name:"key",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}},description:'### Only\n\n_Returns a media query with a `min-width` and `max-width` for a given breakpoint_\n\nGiven a breakpoint key ("zero", "s", "m", "l", "xl"),\nthis function returns a media query (string) using a `min-width` and `max-width`.\n\nNote: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.\nFor example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).\n\nIf the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of `1440px`,\nas seen in the second example below.',declarations:[{name:"only",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{example:`\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { only } = theme.canvas.breakpoints;
const mediaQuery = only('s'); // Returns '@media (min-width: 320px) and (max-width: 767.5px)'
const styles = {
  [mediaQuery]: {
    padding: space.s,
  }
};
\`\`\`

This example uses the \`xl\` breakpoint and only adds a \`min-width\` of \`1440px\` to the media query.
\`\`\`ts
import { useTheme } from '@workday/canvas-kit-react/common';
import { space } from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const { only } = theme.canvas.breakpoints;
const mediaQuery = only('xl'); // Returns '@media (min-width: 1440px)'
const styles = {
  [mediaQuery]: {
    padding: space.s,
  }
};
\`\`\``}}]},description:"### Theme Breakpoints\n\nBreakpoints are used by media queries to conditionally apply or modify styles based on the viewport width.\nThis allows the UI to be responsive to various screen sizes.\n\nThis breakpoints object contains `values` and several helper functions: `up`, `down`, `between`, and `only`.\nYou can find more detailed information by inspecting individual values and functions.",declarations:[{name:"breakpoints",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}},{kind:"property",name:"direction",required:!0,type:{kind:"symbol",name:"ContentDirection",value:"ContentDirection"},description:"",declarations:[{name:"direction",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}]}},{name:"Themeable",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts",description:"Indicates a component is themeable with a CanvasTheme",declarations:[{name:"Themeable",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{deprecated:"`Themeable` is deprecated. If you want to theme your application, please use `<CanvasProvider theme={{canvas: {palette: {primary: {main: 'orange'}}}}} />` at the root of your application or use our CSS tokens to change individual component styles as seen in our [Button docs](https://workday.github.io/canvas-kit/?path=/docs/components-buttons--docs#custom-styles)."},type:{kind:"object",properties:[{kind:"property",name:"theme",required:!1,type:{kind:"symbol",name:"EmotionCanvasTheme",value:"EmotionCanvasTheme"},description:"",declarations:[{name:"theme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}]}},{name:"PartialCanvasTheme",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts",description:"",declarations:[{name:"PartialCanvasTheme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{deprecated:"⚠️ `PartialCanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14)."},type:{kind:"type",typeParameters:[],value:{kind:"symbol",name:"RecursivePartial",value:"RecursivePartial<CanvasTheme>"}}},{name:"PartialCanvasThemePalette",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts",description:"",declarations:[{name:"PartialCanvasThemePalette",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{deprecated:"⚠️ `PartialCanvasThemePalette` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14)."},type:{kind:"type",typeParameters:[],value:{kind:"symbol",name:"RecursivePartial",value:"RecursivePartial<CanvasThemePalette>"}}},{name:"PartialEmotionCanvasTheme",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts",description:"",declarations:[{name:"PartialEmotionCanvasTheme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"canvas",required:!1,type:{kind:"symbol",name:"PartialCanvasTheme",value:"RecursivePartial<CanvasTheme>"},description:"",declarations:[{name:"canvas",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}]}},{name:"Theme",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts",description:"",declarations:[{name:"Theme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"canvas",required:!0,type:{kind:"symbol",name:"CanvasTheme",value:"CanvasTheme"},description:"",declarations:[{name:"canvas",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}]}},{name:"EmotionCanvasTheme",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts",description:"",declarations:[{name:"EmotionCanvasTheme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{deprecated:"⚠️ `EmotionCanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14)."},type:{kind:"object",properties:[{kind:"property",name:"canvas",required:!0,type:{kind:"symbol",name:"CanvasTheme",value:"CanvasTheme"},description:"",declarations:[{name:"canvas",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/types.ts"}],tags:{}}]}}];window.__updateDocs?window.__updateDocs?.(k):window.__docs=(window.__docs||[]).concat(k);const i={palette:{primary:{lightest:Z,lighter:Y,light:J,main:W,dark:H,darkest:M,contrast:c},alert:{lightest:A,lighter:L,light:G,main:h,dark:p,darkest:V,contrast:O},error:{lightest:$,lighter:U,light:D,main:K,dark:E,darkest:Q,contrast:c},success:{lightest:I,lighter:S,light:R,main:N,dark:F,darkest:z,contrast:c},neutral:{lightest:j,lighter:B,light:_,main:q,dark:C,darkest:P,contrast:c},common:{focusOutline:T,alertInner:h,errorInner:x,alertOuter:p}},breakpoints:{values:r,up:l,down:ee,between:w,only:ne},direction:g.LTR},v=[{name:"defaultCanvasTheme",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/theme.ts",description:"",declarations:[{name:"defaultCanvasTheme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/theme.ts"}],tags:{deprecated:"⚠️ `defaultCanvasTheme` is deprecated and will be removed in a future major version. If you want to reset the theme, use `defaultBranding` and apply it to the `CanvasProvider`. For more information, view our [theming docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs)."},type:{kind:"symbol",name:"CanvasTheme",value:"CanvasTheme"}}];window.__updateDocs?window.__updateDocs?.(v):window.__docs=(window.__docs||[]).concat(v);const o=(e,t)=>{const n=Math.abs(t)*.0018;return`oklch(from ${e} calc(l ${t>0?"+":"-"} ${n}) c h)`},m=(e,t)=>{const n=t?.[e];if(n){const a=i.palette[e];return{lightest:n.lightest||n.main&&o(n.main,400)||a.lightest,lighter:n.lighter||n.main&&o(n.main,150)||a.lighter,light:n.light||n.main&&o(n.main,100)||a.light,main:n.main||a.main,dark:n.dark||n.main&&o(n.main,-100)||a.dark,darkest:n.darkest||n.main&&o(n.main,-200)||a.darkest,contrast:n.contrast||X(c)}}return i.palette[e]},te=e=>({palette:{primary:m("primary",e?.canvas?.palette),alert:m("alert",e?.canvas?.palette),error:m("error",e?.canvas?.palette),success:m("success",e?.canvas?.palette),neutral:m("neutral",e?.canvas?.palette),common:{...i.palette.common,...e?.canvas?.palette?.common}},breakpoints:i.breakpoints,direction:e?.canvas?.direction||i.direction}),d=e=>({...i,...e,canvas:te(e)});function ae(e){if(e?.canvas)return d(e);const t=typeof window<"u"&&window?.workday?.canvas?.theme;return t?d({canvas:t}):{canvas:i}}function oe(e){if(!e)try{const t=f();if(t?.canvas)return d(t)}catch{}return ae(e)}const y=[{name:"getTheme",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/useTheme.ts",description:"Function to get the correct theme object for `styled` and class components\nor to be used outside component.",declarations:[{name:"getTheme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/useTheme.ts"}],tags:{param:"theme\n \n- The theme object with the Canvas Kit theme.\nIt should be namespaced within this variable under the `canvas` key.\nValue of `canvas` property is any partial or full theme object to overwtite default theme.",returns:`An object containing updated or default Canvas Kit theme under \`canvas\` key.

The passed partial theme object will be merged with the default Canvas theme
(using memoized createCanvasTheme()) to establish any missing fields that have
not been defined by the consumer's theme object.

If theme is not passed, the function will try to retrieve it from the window object.
If window theme is not found, it will return the default Canvas theme.`,example:`import {getTheme} from '@workday/canvas-kit-react/common';

const theme = getTheme();
const {up, down} = theme.canvas.breakpoints;
const small = down('m'); // Returns '@media (max-width: 768px)'
const medium = up('m'); // Returns '@media (min-width: 768px)'

const styles = {
 [small]: {
   margin: space.m
 },
 [medium]: {
   margin: space.l
 }
}`,deprecated:"⚠️ `getTheme` is deprecated and will be removed in a future major version. Please use our [CSS tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-brand-tokens--docs) to theme components."},type:{kind:"function",parameters:[{kind:"parameter",name:"theme",type:{kind:"symbol",name:"PartialEmotionCanvasTheme",value:"PartialEmotionCanvasTheme"},required:!1,rest:!1,description:"- The theme object with the Canvas Kit theme.\nIt should be namespaced within this variable under the `canvas` key.\nValue of `canvas` property is any partial or full theme object to overwtite default theme.",declarations:[{name:"theme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/useTheme.ts"}],tags:{param:"theme\n \n- The theme object with the Canvas Kit theme.\nIt should be namespaced within this variable under the `canvas` key.\nValue of `canvas` property is any partial or full theme object to overwtite default theme."}}],members:[],returnType:{kind:"symbol",name:"EmotionCanvasTheme",value:"EmotionCanvasTheme"}}},{name:"useTheme",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/useTheme.ts",description:"Hook function to get the correct theme object for functional components.",declarations:[{name:"useTheme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/useTheme.ts"}],tags:{param:"theme\n \n- The theme object with the Canvas Kit theme.\nIt should be namespaced within this variable under the `canvas` key.\nValue of `canvas` property is any partial or full theme object to overwtite default theme.",returns:`An object containing updated or default Canvas Kit theme under \`canvas\` key.

NOTE: If theme is not passed, the function will try to pull the theme from ThemeContext.
If that does not work, it will try to retrieve it from the window object.
As a last resort, it will return the default Canvas theme.

The resulting theme will be merged with the default Canvas theme
(using memoized createCanvasTheme()) to establish any missing fields that have
not been defined by the consumer's theme object.

Providing the default theme here is currently a work around for when no
ThemeProvider or context exists.
Tracked on https://github.com/emotion-js/emotion/issues/1193.`,example:`export const ErrorMessage = () => {
 const theme = useTheme();
 return (
   <Subtext size="large" color={theme.canvas.palette.error.main}>
 );
}`,deprecated:"⚠️ `useTheme` is deprecated and will be removed in a future major version. Please use our [CSS tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-brand-tokens--docs) to theme components."},type:{kind:"function",parameters:[{kind:"parameter",name:"theme",type:{kind:"symbol",name:"PartialEmotionCanvasTheme",value:"PartialEmotionCanvasTheme"},required:!1,rest:!1,description:"- The theme object with the Canvas Kit theme.\nIt should be namespaced within this variable under the `canvas` key.\nValue of `canvas` property is any partial or full theme object to overwtite default theme.",declarations:[{name:"theme",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/theming/useTheme.ts"}],tags:{param:"theme\n \n- The theme object with the Canvas Kit theme.\nIt should be namespaced within this variable under the `canvas` key.\nValue of `canvas` property is any partial or full theme object to overwtite default theme."}}],members:[],returnType:{kind:"symbol",name:"EmotionCanvasTheme",value:"EmotionCanvasTheme"}}}];window.__updateDocs?window.__updateDocs?.(y):window.__docs=(window.__docs||[]).concat(y);export{g as C,r as a,s as b,i as d,ae as g,oe as u};
