import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as r}from"./index-3YbjYt95.js";import{ae as i}from"./index-Ued3TV6s.js";import"./union-B1cmIDVh.js";import"./index-IfJi-UCQ.js";import"./iframe-C_doqmiv.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./px2rem-C0KbprIx.js";import"./components-CXVvXGX8.js";import"./cs-DvbI9OYs.js";import"./StatusIndicator-D9ob0TlI.js";import"./Text-Dt7EG7Lz.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./index-CYsyLHR7.js";import"./Card-jS6NBqm3.js";import"./ExternalHyperlink-aQwGH6Hm.js";import"./Hyperlink-nKvi0fIc.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-DBrzjuE9.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-_9ty_XDZ.js";import"./lerna-slKU9GXb.js";import"./CanvasProvider-BRuur9nH.js";import"./Tooltip-B3V4skOm.js";import"./useTooltip-DUG7iIce.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./Popper-CGqk9_xm.js";import"./TertiaryButton-Byu4oUFZ.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DgctLa3l.js";import"./ColorPicker-BZa6q9cC.js";import"./ColorInput-DdzZruxs.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-6zwAIbi7.js";import"./types-DXdjelYI.js";import"./FormField-DJsuX8Xy.js";import"./check-BG7HONvH.js";import"./Expandable-QifH75dX.js";import"./Avatar-Cf4g1-9p.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-DjQbCvjl.js";import"./Popup-CSV3rOyv.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-ukAEISND.js";import"./useInitialFocus-D6f9kMrD.js";import"./useReturnFocus-CF7XwcyY.js";import"./useFocusRedirect-CjUSvw7a.js";import"./Breadcrumbs-B3iwir0b.js";import"./useOverflowListTarget-BiBJ1XQw.js";import"./useListItemSelect-DTkyX0KL.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D8z2UdGJ.js";import"./OverflowTooltip-DIr6RY4Y.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-hE1PVdSE.js";import"./Table-DPxnEvid.js";function o(t){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Styling/Utilities"}),`
`,n.jsx(e.h1,{id:"canvas-kit-styling-utilities",children:"Canvas Kit Styling Utilities"}),`
`,n.jsxs(e.p,{children:["A collection of helpful functions for styling with ",n.jsx(e.code,{children:"@workday/canvas-kit-styling"}),`. While they're
fairly simple, they make styling much nicer.`]}),`
`,n.jsx(e.h2,{id:"pixels-to-rem",children:"Pixels to Rem"}),`
`,n.jsxs(e.p,{children:["This function converts a ",n.jsx(e.code,{children:"px"})," value (number) to ",n.jsx(e.code,{children:"rem"}),` (string). This keeps you from having to do any
tricky mental division or write irrational numbers.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {px2rem} from '@workday/canvas-kit-styling';

const styles = {
  // returns '0.0625rem'
  margin: px2rem(1),
};
`})}),`
`,n.jsx(e.h2,{id:"calc-functions",children:"Calc Functions"}),`
`,n.jsxs(e.p,{children:["Calc functions are useful for doing basic math operations with CSS ",n.jsx(e.code,{children:"calc()"}),` and variables. They will
also wrap variables automatically in `,n.jsx(e.code,{children:"var()"}),"."]}),`
`,n.jsx(e.h3,{id:"add",children:"Add"}),`
`,n.jsxs(e.p,{children:["This function returns a CSS ",n.jsx(e.code,{children:"calc()"})," addition string."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  // returns 'calc(var(--cnvs-sys-padding-xxs) + 0.125rem)'
  padding: calc.add(system.padding.xxs, '0.125rem'),
};
`})}),`
`,n.jsx(e.h3,{id:"subtract",children:"Subtract"}),`
`,n.jsxs(e.p,{children:["This function returns a CSS ",n.jsx(e.code,{children:"calc()"})," subtraction string."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  // returns 'calc(var(--cnvs-sys-padding-xxs) - 0.125rem)'
  padding: calc.subtract(system.padding.xxs, '0.125rem'),
};
`})}),`
`,n.jsx(e.h3,{id:"multiply",children:"Multiply"}),`
`,n.jsxs(e.p,{children:["This function returns a CSS ",n.jsx(e.code,{children:"calc()"})," multiplication string."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  // returns 'calc(var(--cnvs-sys-padding-xxs) * 3)'
  padding: calc.multiply(system.padding.xxs, 3),
};
`})}),`
`,n.jsx(e.h3,{id:"divide",children:"Divide"}),`
`,n.jsxs(e.p,{children:["This function returns a CSS ",n.jsx(e.code,{children:"calc()"})," division string"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  // returns 'calc(var(--cnvs-sys-padding-xxs) / 2)'
  padding: calc.divide(system.padding.xxs, 2),
};
`})}),`
`,n.jsx(e.h3,{id:"negate",children:"Negate"}),`
`,n.jsxs(e.p,{children:[`This function negates a CSS variable to give you the opposite value. This keeps you from having to
wrap the variable in `,n.jsx(e.code,{children:"calc()"})," and multiplying by ",n.jsx(e.code,{children:"-1"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {calc} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  // returns 'calc(var(--cnvs-sys-gap-md) * -1)'
  margin: calc.negate(system.gap.md),
};
`})}),`
`,n.jsx(e.h2,{id:"colorspace",children:"colorSpace"}),`
`,n.jsx(e.h3,{id:"darken",children:"Darken"}),`
`,n.jsx(e.p,{children:"A utility that should be used for interactive states on buttons and links."}),`
`,n.jsxs(e.p,{children:[`It will return
`,n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix",rel:"nofollow",children:"color-mix()"}),`
and the result is mixing the first color and the mixin color together in the srgb colorspace by a
given amount.`]}),`
`,n.jsx(e.p,{children:"It takes a single options object with four properties:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"color"}),`: The color that will be darkened (this is typically the "base" color on the given
element).`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fallback"}),": A fallback color if the first color is not valid or not defined."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mixinColor"}),": The color that will be mixed in with the first color (or fallback color)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mixinValue"}),`: The percentage of the mixin color that will be added to the first color (or
fallback color).`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {colorSpace, createStyles} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  '&:hover': {
    backgroundColor: colorSpace.darken({
      color: system.color.brand.accent.primary,
      fallback: brand.primary.darkest,
      mixinColor: system.color.accent.overlay.mixin,
      mixinValue: system.opacity.accent.hover,
    }),
  },
});
`})}),`
`,n.jsx(e.h3,{id:"hover",children:"Hover"}),`
`,n.jsxs(e.p,{children:["A utility that should be used for ",n.jsx(e.code,{children:"hover"})," interactive states on buttons and links."]}),`
`,n.jsxs(e.p,{children:[`It will return
`,n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix",rel:"nofollow",children:"color-mix()"}),`
and the result is mixing the first color and the mixin color together in the srgb colorspace by a
given amount.`]}),`
`,n.jsx(e.p,{children:"It takes a single options object with three properties:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"color"}),`: The color that will be darkened (this is typically the "base" color on the given
element).`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fallback"}),": A fallback color if the first color is not valid or not defined."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"colorType"}),`: A string that will determine where the mixin color and the mixin percentage comes
from in tokens (i.e. `,n.jsx(e.code,{children:"system.color.accent...."}),", ",n.jsx(e.code,{children:"system.color.surface...."}),`,
`,n.jsx(e.code,{children:"system.opacity.accent...."})," or ",n.jsx(e.code,{children:"system.opacity.surface...."}),")."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {colorSpace, createStyles} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  '&:hover': {
    backgroundColor: colorSpace.hover({
      color: system.color.brand.accent.primary,
      fallback: brand.primary800,
      colorType: 'accent',
    }),
  },
});
`})}),`
`,n.jsx(e.h3,{id:"pressed",children:"Pressed"}),`
`,n.jsxs(e.p,{children:["A utility that should be used for ",n.jsx(e.code,{children:"active"})," or ",n.jsx(e.code,{children:"pressed"})," interactive states on buttons and links."]}),`
`,n.jsxs(e.p,{children:[`It will return
`,n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix",rel:"nofollow",children:"color-mix()"}),`
and the result is mixing the first color and the mixin color together in the srgb colorspace by a
given amount.`]}),`
`,n.jsx(e.p,{children:"It takes a single options object with three properties:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"color"}),`: The color that will be darkened (this is typically the "base" color on the given
element).`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fallback"}),": A fallback color if the first color is not valid or not defined."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"colorType"}),`: A string that will determine where the mixin color and the mixin percentage comes
from in tokens (i.e. `,n.jsx(e.code,{children:"system.color.accent...."}),", ",n.jsx(e.code,{children:"system.color.surface...."}),`,
`,n.jsx(e.code,{children:"system.opacity.accent...."})," or ",n.jsx(e.code,{children:"system.opacity.surface...."}),")."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {colorSpace, createStyles} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  backgroundColor: system.color.brand.accent.primary,
  '&:active': {
    backgroundColor: colorSpace.pressed({
      color: system.color.brand.accent.primary,
      fallback: brand.primary800,
      colorType: 'accent',
    }),
  },
});
`})}),`
`,n.jsx(e.h2,{id:"keyframes",children:"keyframes"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"keyframes"})," function re-exports the ",n.jsx(e.a,{href:"https://emotion.sh/docs/keyframes",rel:"nofollow",children:"Emotion CSS keyframes"}),`
function, but is compatible with a custom Emotion instance and is understood by the Static style
transformer.`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {createComponent} from '@workday/canvas-kit-react/common';
import {
  CSProps,
  calc,
  createStencil,
  handleCsProp,
  keyframes,
  px2rem,
} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

/**
 * Keyframe for the dots loading animation.
 */
const keyframesLoading = keyframes({
  '0%, 80%, 100%': {
    transform: 'scale(0)',
  },
  '40%': {
    transform: 'scale(1)',
  },
});

export const loadingStencil = createStencil({
  base: {
    display: 'inline-flex',
    gap: system.gap.sm,
    width: system.size.xxxs,
    height: system.size.xxxs,
    fontSize: '0',
    borderRadius: system.shape.full,
    backgroundColor: system.color.accent.muted.soft,
    outline: \`\${px2rem(2)} solid transparent\`,
    transform: 'scale(0)',
    animationName: keyframesLoading,
    animationDuration: calc.multiply('150ms', 35),
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'both',
  },
});

/**
 * A simple component that displays three horizontal dots, to be used when some data is loading.
 */
export const LoadingDot = createComponent('div')({
  displayName: 'LoadingDots',
  Component: ({...elemProps}: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, loadingStencil())}></Element>;
  },
});
`})}),`
`,n.jsx(e.h2,{id:"injectglobal",children:"injectGlobal"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"injectGlobal"}),` function re-exports the
`,n.jsx(e.a,{href:"https://emotion.sh/docs/@emotion/css#global-styles",rel:"nofollow",children:"Emotion CSS injectGlobal"}),` function, but is
compatible with a custom Emotion instance and is understood by the Static style transformer. It will
also wrap our CSS tokens to ensure you can inject global styles using our CSS variables.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`injectGlobal({
  ...fonts,
  'html, body': {
    fontFamily: system.fontFamily.default,
    margin: 0,
    minHeight: '100vh',
    ...system.type.heading.lg,
  },
  '#root, #root < div': {
    minHeight: '100vh',
  },
});
`})}),`
`,n.jsx(e.h3,{id:"example-1",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {createRoot} from 'react-dom/client';

import {fonts} from '@workday/canvas-kit-react-fonts';
import {cssVar, injectGlobal} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/component/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';

import {App} from './App';

//@ts-ignore
injectGlobal({
  ...fonts,
  'html, body': {
    fontFamily: cssVar(system.fontFamily.default),
    margin: 0,
    minHeight: '100vh',
  },
  '#root, #root < div': {
    minHeight: '100vh',
    ...system.type.body.sm,
  },
});

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
`})}),`
`,n.jsx(e.h2,{id:"custom-emotion-instance",children:"Custom Emotion Instance"}),`
`,n.jsxs(e.p,{children:["Static style injection happens during the parsing stages of the files. This means when you ",n.jsx(e.code,{children:"import"}),`
a component that uses static styling, the styles are injected immediately. This happens way before
rendering, so using the Emotion `,n.jsx(e.a,{href:"https://emotion.sh/docs/cache-provider",rel:"nofollow",children:"CacheProvider"}),` does not
work. A custom instance must be created `,n.jsx(e.em,{children:"before"}),` any style utilities are called - during the
bootstrapping phase of an application. We don't have a working example because it requires an
isolated application, but here's an example adding a `,n.jsx(e.code,{children:"nonce"})," to an application:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// bootstrap-styles.ts
import {createInstance} from '@workday/canvas-kit-styling';

// assuming this file is being called via a \`script\` tag and that
// script tag has a \`nonce\` attribute set from the server
createInstance({nonce: document.currentScript.nonce});

// index.ts
import React from 'react';
import ReactDOM from 'react-dom';

// call the bootstrap in the import list. This has the side-effect
// of creating an instance
import './bootstrap-styles';

import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);

// App.tsx
import React from 'react';

// The following will create and inject styles. We cannot adjust
// the Emotion instance after this import
import {PrimaryButton} from '@workday/canvas-kit-react/button';

// if we call \`createInstance\` here, we'll get a warning in
// development mode

export default () => {
  return <PrimaryButton>Button</PrimaryButton>;
};
`})})]})}function Dn(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{Dn as default};
