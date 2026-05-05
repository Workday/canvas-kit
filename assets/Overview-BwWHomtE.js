import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as a}from"./index-3YbjYt95.js";import{ae as l}from"./index-BSRpa7hw.js";import{I as t}from"./InformationHighlight-BmltZxOs.js";import{g as i}from"./index-CYsyLHR7.js";import"./index-IfJi-UCQ.js";import"./iframe-8Z9hyj8f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./models-CHTjB2ql.js";import"./components-BLZqCckY.js";import"./Text-7hsxTSvc.js";import"./mergeStyles-CkJ8NvhI.js";import"./Box-CWkwzNZI.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-dYq3mHEV.js";import"./useConstant-CUZppmaV.js";import"./flex-BpVYzPsg.js";import"./grid-COFwODL4.js";import"./TypeLevelComponents-A6AqS-F4.js";import"./exclamation-circle-Be30iaM7.js";import"./types-wqmYQQWa.js";import"./exclamation-triangle-C8Vr-J7R.js";import"./info-B24MaYO9.js";import"./SystemIcon-CQzQ4gRr.js";import"./Svg-CFKxmZXN.js";import"./px2rem-C0KbprIx.js";import"./Hyperlink-p5yKhX3z.js";function r(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return t||o("InformationHighlight",!1),t.Body||o("InformationHighlight.Body",!0),t.Heading||o("InformationHighlight.Heading",!0),t.Icon||o("InformationHighlight.Icon",!0),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Styling/Getting Started/Overview"}),`
`,e.jsx(n.h1,{id:"canvas-kit-styling",children:"Canvas Kit Styling"}),`
`,e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsx(n.p,{children:`Canvas Kit styling is a custom CSS-in-JS solution that provides both a runtime for development and a
static parsing process for build time. This system offers several key benefits:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"TypeScript autocomplete for enhanced developer experience"}),`
`,e.jsx(n.li,{children:"Low runtime overhead for better performance"}),`
`,e.jsx(n.li,{children:"Static CSS compilation for optimized builds"}),`
`,e.jsx(n.li,{children:"Dynamic styling with CSS Variables for flexible design"}),`
`]}),`
`,e.jsxs(n.p,{children:[`The motivation behind this custom styling solution stems from the need to move beyond IE11 support
and implement performance improvements using static styling methods. For more details, refer to the
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-why-canvas-styling--docs",rel:"nofollow",children:"Why Canvas Kit Styling"}),`
section.`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The Canvas Kit styling system consists of two main packages:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@workday/canvas-kit-styling"})," - Core styling utilities for runtime use"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@workday/canvas-kit-styling-transform"})," - Build-time optimization tools"]}),`
`]}),`
`,e.jsx(n.p,{children:`These packages work together to provide a CSS-in-JS experience during development while enabling
optimized static CSS in production.`}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-styling
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import {createRoot} from 'react-dom/client';

import {createStyles} from '@workday/canvas-kit-styling';

const myStyles = createStyles({
  backgroundColor: 'red',
}); // returns the CSS class name created for this style

myStyles; // something like "css-{hash}"

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<div className={myStyles}>Hello!</div>);
`})}),`
`,e.jsx(n.h2,{id:"style-merging",children:"Style Merging"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@workday/canvas-kit-styling"})," package uses ",e.jsx(n.code,{children:"@emotion/css"}),` to inject styles during JavaScript
evaluation time rather than `,e.jsx(n.code,{children:"@emotion/react"})," or ",e.jsx(n.code,{children:"@emotion/styled"}),` injecting when a component is
rendered. This means the Emotion cache needs to be known before any style is created. In order to
properly merge styles with components using either dynamic styling package, the Emotion cache must
be changed on any React application. Without this, styles will not be merged correctly when static
and dynamic styles are used on the same element.`]}),`
`,e.jsxs(n.p,{children:["If you're using Canvas Kit React, you should use the ",e.jsx(n.code,{children:"<CanvasProvider>"}),` which includes Emotion's
`,e.jsx(n.code,{children:"<CacheProvider>"}),` with the proper cache already set. If you're not using Canvas Kit React, you
should use the `,e.jsx(n.code,{children:"<CacheProvider>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// ONLY use if not using the <CanvasProvider>
import {getCache} from '@workday/canvas-kit-styling';

// in your application bootstrap
const root = React.createRoot(document.getElementById('root'));

root.render(
  <CacheProvider value={getCache()}>
    <App />
  </CacheProvider>
);
`})}),`
`,e.jsx(n.h2,{id:"known-issues",children:"Known issues"}),`
`,e.jsx(n.h3,{id:"hot-reloading",children:"Hot Reloading"}),`
`,e.jsxs(n.p,{children:[`Style merging works by using CSS specificity rather than JavaScript runtime. This can cause problems
during hot reloading. If you specify all styles in the same file, hot reloading shouldn't result in
any style merging problems. But if you use `,e.jsx(n.code,{children:"extends"})," in ",e.jsx(n.code,{children:"createStencil"}),` that references another
file, you may run into style merge issues.`]}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// base.tsx file
export const baseStencil = createStencil({
  base: {
    color: 'red',
  },
});

// extended.tsx file
import {baseStencil} from './base';

export const extendedStencil = createStencil({
  extends: baseStencil,
  base: {
    color: 'blue',
  },
});
`})}),`
`,e.jsxs(n.p,{children:["This will render correctly until you change ",e.jsx(n.code,{children:"color"})," in ",e.jsx(n.code,{children:"base.tsx"})," and get a hot reload:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// base.tsx file
export const baseStencil = createStencil({
  base: {
    color: 'purple',
  },
});
`})}),`
`,e.jsx(n.p,{children:"The hot reload will evaluate this update and inject a new style."}),`
`,e.jsx(n.h2,{id:"development",children:"Development"}),`
`,e.jsxs(n.p,{children:[`Canvas Kit Styling comes with a runtime that doesn't need anything special for development. The
runtime uses `,e.jsx(n.code,{children:"@emotion/css"}),` to include your styles on the page. If you plan to use static
compilation, we recommend enabling in production as well so you can fix static compilation errors as
you develop rather than get errors only in production builds.`]}),`
`,e.jsx(n.h2,{id:"static-compilation",children:"Static compilation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@workday/canvas-kit-styling-transform"}),` package can to pre-build styles. This process takes
style objects and turns them into CSS strings. This process moves serialization and hashing to build
time rather than browser runtime when `,e.jsx(n.code,{children:"@emotion/css"}),` is processing styles. This will speed up
production builds at runtime.`]}),`
`,e.jsxs(n.p,{children:[`Static compilation has stricter requirements than when doing runtime styling. The static compiler
uses the TypeScript type system to statically analyze style values and thus requires value types to
be known by TypeScript. See `,e.jsx(n.a,{href:"#restrictions",children:"Restrictions"}),"."]}),`
`,e.jsx(n.p,{children:`Static compilation may be required for server side rendering (SSR), especially when using React
Server Components.`}),`
`,e.jsx(n.h3,{id:"hash-generation",children:"Hash generation"}),`
`,e.jsxs(n.p,{children:[`Emotion generates hashes based on the serialized style object. This means a style should always give
the same hash. Static styling hashes differently. Every `,e.jsx(n.code,{children:"createStyles"})," or ",e.jsx(n.code,{children:"createStencil"}),` call will
generate a unique hash even if the style object is the same. This is required for proper style
merging because static styling doesn't give single class names, but rather merges styles using CSS
specificity.`]}),`
`,e.jsxs(n.p,{children:[`For runtime development, the hash is always unique. For static compilation, the hash is based on the
start and end character count in the source file of the style block. This is required for SSR so
that the server and client agree on the same value during hydration. This means that while
debugging, the hash depends on any code before it. If you add a `,e.jsx(n.code,{children:"console.log"}),` for example, the
character index of a style block could shift which will generate a new hash.`]}),`
`,e.jsx(n.h3,{id:"restrictions",children:"Restrictions"}),`
`,e.jsx(n.p,{children:`The static compiler uses the TypeScript type checker. The easiest way to think of these restrictions
is if TypeScript knows the exact value, the static compiler will also know. A simple example:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"// won't work - `value` is a type of `string` because `let` allows a value to be mutated\nlet value = 'absolute'; // `string`\n\nconst myStyles = createStyles({\n  position: value, // error - `string` isn't specific enough.\n});\n\n// will work - `value` is a type of `'absolute'` because `const` restricts to a string literal\nconst value = 'absolute'; // `'absolute'`\n\nconst myStyles = createStyles({\n  position: value, // works. If you mouse over `value` in your editor, you'll see the type is `'absolute'`\n});\n"})}),`
`,e.jsx(n.p,{children:"More complex examples may be objects:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// won't work. TypeScript will not understand that the position will only be \`'absolute'\` and makes it a \`string\` instead
const reusableStyles = {
  position: 'absolute',
}; // \`{ position: string }\`

const myStyles = createStyles({
  ...reusableStyles, // error - \`position\` is a \`string\` and not specific enough
});

// will work. Adding \`as const\` tells TypeScript the object is readonly and therefore no values can change
const reusableStyles = {
  position: 'absolute',
} as const; // \`{ readonly position: 'absolute' }\`

const myStyles = createStyles({
  ...reusableStyles, // works. If you mouse over, the position is a string literal \`'absolute'\`
});
`})}),`
`,e.jsx(n.p,{children:"Functions are a little more tricky and may require generics."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// generic makes the type be statically knowable
function getPosition<V extends 'relative' | 'absolute'>(value: V): {position: V} {
  return {position: value};
}

// mouse over \`position\` in your editor an the type will be \`{ position: 'absolute' }\`
const position = getPosition('absolute'); // { position: 'absolute' }

const myStyles = createStyles({
  ...getPosition('absolute'), // works - \`{ position: 'absolute' }\`
});
`})}),`
`,e.jsx(n.h3,{id:"webpack",children:"Webpack"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@webpack/canvas-kit-styling-transform"}),` package comes with a webpack loader that can be added to
development and/or production.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// import the transform - CJS and ESM are supported
import {StylingWebpackPlugin} from '@workday/canvas-kit-styling-transform';

// somewhere only once. For static webpack config files, this can be near the top.
// If inside Storybook, Gatsby, Next.js, etc configs, put inside the function that is called that
// returns a webpack config
const tsPlugin = const tsPlugin = new StylingWebpackPlugin({
  tsconfigPath: path.resolve(__dirname, '../tsconfig.json'), // allows your TS config to be used
  // A different tsconfig could be used if you want to use TS to transpile to something like ES2019 and
  // also have Babel process the file.
});

// However you need to define rules.
// This is different for using webpack directly or in Storybook/Gatsby/Next.js/etc
{
  rules: [
    //...
    {
      test: /.\\.tsx?$/,
      use: [
        {
          loader: require.resolve('@workday/canvas-kit-styling-transform/webpack-loader'),
          options: tsPlugin.getLoaderOptions(),
        },
      ],
      enforce: 'pre'
    },
  ];
  // We need to pass the plugin to Webpack's plugin list. Failure to do this will result in a
  // production build hanging
  plugins: [tsPlugin]
}
`})}),`
`,e.jsx(n.h2,{id:"core-styling-approaches-for-static-styling",children:"Core Styling Approaches for Static Styling"}),`
`,e.jsx(n.p,{children:"For proper static styling there's two methods that you can use to apply styles."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Using ",e.jsx(n.code,{children:"createStyles"})," for simple object base styles."]}),`
`,e.jsxs(n.li,{children:["Using ",e.jsx(n.code,{children:"createStencil"})," for dynamic styles and reusable components."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Both approaches are intended to be used in tandem with the ",e.jsx(n.code,{children:"cs"}),` prop when applying styles to our
components.`]}),`
`,e.jsxs(n.h3,{id:"cs-prop",children:[e.jsx(n.code,{children:"cs"})," Prop"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"cs"})," prop takes in a single, or an array of values that are created by the ",e.jsx(n.code,{children:"cs"}),` function, a
string representing a CSS class name, or the return of the `,e.jsx(n.code,{children:"createVars"}),` function. It merges
everything together and applies `,e.jsx(n.code,{children:"className"})," and ",e.jsx(n.code,{children:"style"}),` attributes to a React element. Most of our
components extend the `,e.jsx(n.code,{children:"cs"})," prop so that you can statically apply styles to them."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),": While the ",e.jsx(n.code,{children:"cs"})," prop accepts a style object, ",e.jsx(n.strong,{children:"this will not"}),` be considered
statically styling an element and you will lose the performance benefits. We plan on providing a
babel plugin to extract these styles statically in a future version.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {base} from '@workday/canvas-tokens-webs';

const styles = createStyles({color: base.red600});

function MyComponent() {
  return <PrimaryButton cs={styles}>Text</PrimaryButton>;
}
`})}),`
`,e.jsx(n.h3,{id:"createstyles",children:e.jsx(n.code,{children:"createStyles"})}),`
`,e.jsxs(n.p,{children:["The primary utility function is the ",e.jsx(n.code,{children:"createStyles"})," function. It makes a call to the ",e.jsx(n.code,{children:"css"}),` function
from `,e.jsx(n.code,{children:"@emotion/css"}),`. Emotion still does most of the heavy lifting by handling the serialization,
hashing, caching, and style injection.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Bad example (inside render function)
import {base} from '@workday/canvas-tokens-webs';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

function MyComponent() {
  const styles = createStyles({color: base.red600}); // Don't do this
  return <PrimaryButton cs={styles}>Text</PrimaryButton>;
}

// Good example (outside render function)
import {base} from '@workday/canvas-tokens-webs';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

const styles = createStyles({color: base.red600});

function MyComponent() {
  return <PrimaryButton cs={styles}>Text</PrimaryButton>;
}
`})}),`
`,e.jsxs(n.p,{children:["Most of our components support using the ",e.jsx(n.code,{children:"cs"}),` prop to apply the static styles. It merges everything
together and applies `,e.jsx(n.code,{children:"className"})," and ",e.jsx(n.code,{children:"style"})," attributes to a React element."]}),`
`,e.jsxs(t,{className:"sb-unstyled",cs:{marginBlock:i.md},children:[e.jsx(t.Icon,{}),e.jsx(t.Heading,{children:"Information"}),e.jsx(t.Body,{children:e.jsxs(n.p,{children:["For a more in depth overview, please view our ",e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-create-styles--docs",rel:"nofollow",children:`Create
Styles`}),`
docs.`]})})]}),`
`,e.jsx(n.h3,{id:"createstencil",children:e.jsx(n.code,{children:"createStencil"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createStencil"}),` is a function for creating reusable, complex component styling systems. It manages
`,e.jsx(n.code,{children:"base"})," styles, ",e.jsx(n.code,{children:"parts"}),", ",e.jsx(n.code,{children:"modifiers"}),", ",e.jsx(n.code,{children:"variables"}),", and ",e.jsx(n.code,{children:"compound"}),` modifiers. Most of our components
also export their own Stencil that might expose CSS variables in order to modify the component.`]}),`
`,e.jsxs(n.p,{children:["In the example below, we leverage ",e.jsx(n.code,{children:"parts"}),", ",e.jsx(n.code,{children:"vars"}),", ",e.jsx(n.code,{children:"base"})," and ",e.jsx(n.code,{children:"modifiers"}),` to create a reusable
`,e.jsx(n.code,{children:"Card"})," component. The Stencil allows us to dynamic style the component based on the props."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {createStencil}from '@workday/canvas-kit-styling';
import {Card} from '@workday/canvas-kit-react/card';
import {system} from '@workday/canvas-tokens-web';

const themedCardStencil = createStencil({
  vars: {
   // Create CSS variables for the color of the header
    headerColor: ''
  },
  parts: {
   // Allows for styling a sub element of the component that may not be exposed through the API
    header: 'themed-card-header'
  },
  base: ({headerPart, headerColor}) => ({
    padding: system.padding.md,
    boxShadow: system.depth[2],
    backgroundColor: system.color.bg.default,
    color: system.color.fg.default,
    // Targets the header part via [data-part="themed-card-header"]"]
    [headerPart]: {
      color: headerColor
    }
  }),
  modifiers: {
    isDarkTheme: {
    // If the prop \`isDarkTheme\` is true, style the component and it's parts
      true: ({headerPart}) => ({
        backgroundColor: system.color.surface.contrast.default,
        color: system.color.fg.inverse
        [headerPart]: {
          color: system.color.fg.inverse
        }
      })
    }
  }
})

const ThemedCard = ({isDarkTheme, headerColor, elemProps}) => {
  return (
    /* Use the \`cs\` prop to apply the stencil and pass it the dynamic properties it needs to style accordingly */
    <Card cs={themedCardStencil({isDarkTheme, headerColor})} {...elemProps}>
	/* Apply the data part selector to the header */
      <Card.Heading {...themedCardStencil.parts.header}>Canvas Supreme</Card.Heading>
      <Card.Body>
        Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
        onions, and oregano.
      </Card.Body>
    </Card>
  );
};
`})}),`
`,e.jsxs(t,{className:"sb-unstyled",cs:{marginBlock:i.md},children:[e.jsx(t.Icon,{}),e.jsx(t.Heading,{children:"Information"}),e.jsx(t.Body,{children:e.jsxs(n.p,{children:["For a more in depth overview, please view our ",e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-create-stencil--docs",rel:"nofollow",children:`Create
Stencil`}),`
docs.`]})})]})]})}function J(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}function o(s,n){throw new Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{J as default};
