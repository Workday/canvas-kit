import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as o}from"./index-3YbjYt95.js";import{ae as g}from"./index-C88wW2Ex.js";import{E as t}from"./union-BPMFUjOj.js";import{e as b}from"./index-IfJi-UCQ.js";import{a as u}from"./arrow-right-small-DUWH78qP.js";import{C as c}from"./CanvasProvider-mU4xaRYK.js";import{C as s}from"./Card-Diisw6Wk.js";import{c as d}from"./cs-rfTTo7Bg.js";import{F as r}from"./FormField-DN--zoVG.js";import{T as l}from"./TextInput-D51etMr3.js";import{P as h}from"./PrimaryButton-BLeyIayx.js";import{p as j}from"./px2rem-C0KbprIx.js";import{r as y,g as f,j as w,p as C,c as S,k}from"./index-5mrAZJYD.js";const T=d({paddingInlineStart:j(64)}),P=d({":dir(rtl)":{svg:{transform:"rotate(180deg)"}}}),F=()=>{const[a,n]=b.useState(""),v=x=>{n(x.target.value)};return e.jsxs(s,{children:[e.jsx(s.Heading,{children:"RTL Support"}),e.jsxs(s.Body,{cs:T,children:[e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:l,onChange:v,value:a})})]}),e.jsx(h,{cs:P,iconPosition:"end",icon:u,children:"RTL"})]})]})},p=()=>e.jsx(c,{dir:"rtl",children:e.jsx(F,{})});p.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {arrowRightSmallIcon} from '@workday/canvas-system-icons-web';

const rtlStyles = createStyles({
  paddingInlineStart: px2rem(64),
});

const rtlButtonStyles = createStyles({
  ':dir(rtl)': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

const App = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Card>
      <Card.Heading>RTL Support</Card.Heading>
      <Card.Body cs={rtlStyles}>
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Field>
            <FormField.Input as={TextInput} onChange={handleChange} value={value} />
          </FormField.Field>
        </FormField>
        <PrimaryButton cs={rtlButtonStyles} iconPosition="end" icon={arrowRightSmallIcon}>
          RTL
        </PrimaryButton>
      </Card.Body>
    </Card>
  );
};

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <App />
    </CanvasProvider>
  );
};
`;const N=()=>e.jsx(c,{theme:{canvas:{palette:{primary:{main:k},alert:{main:S},common:{focusOutline:C,alertInner:w,alertOuter:f,errorInner:y}}}},children:e.jsxs(s,{children:[e.jsx(s.Heading,{children:"Theming"}),e.jsxs(s.Body,{children:[e.jsx(h,{children:"Theming"}),e.jsxs(r,{error:"caution",children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Field,{children:e.jsx(r.Input,{as:l})})]})]})]})}),m=()=>e.jsx("div",{children:e.jsx(N,{})});m.__RAW__=`import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {base} from '@workday/canvas-tokens-web';

const App = () => {
  return (
    <CanvasProvider
      theme={{
        canvas: {
          palette: {
            primary: {
              main: base.green600,
            },
            alert: {
              main: base.magenta600,
            },
            common: {
              focusOutline: base.purple500,
              alertInner: base.magenta400,
              alertOuter: base.magenta500,
              errorInner: base.red500,
            },
          },
        },
      }}
    >
      <Card>
        <Card.Heading>Theming</Card.Heading>
        <Card.Body>
          <PrimaryButton>Theming</PrimaryButton>
          <FormField error="caution">
            <FormField.Label>Email</FormField.Label>
            <FormField.Field>
              <FormField.Input as={TextInput} />
            </FormField.Field>
          </FormField>
        </Card.Body>
      </Card>
    </CanvasProvider>
  );
};

export const Theming = () => {
  return (
    <div>
      <App />
    </div>
  );
};
`;function i(a){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Features/Theming/Overview"}),`
`,e.jsx(n.h1,{id:"canvas-kit-theming-guide",children:"Canvas Kit Theming Guide"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`Canvas Kit v14 and v15 introduce a significant shift in our approach to theming: we've moved away
from JavaScript-based theme objects to CSS variables. This change provides better performance,
improved developer experience, and greater flexibility for theming applications.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"📌 Quick Start:"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Import CSS variables once"})," at the root level of your application (e.g., in ",e.jsx(n.code,{children:"index.css"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Override tokens at ",e.jsx(n.code,{children:":root"})]})," for global theming — this is the recommended approach"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use ",e.jsx(n.code,{children:"CanvasProvider"})," scoped theming only"]}),` for specific scenarios like multi-brand sections
or embedded components`]}),`
`]}),`
`,e.jsxs(n.p,{children:["If your application renders within an environment that already imports these CSS variables, ",e.jsx(n.strong,{children:`do
not re-import them`}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`View our latest tokens documentation
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(n.h2,{id:"migration-from-v10-theme-prop-to-v14-css-variables",children:"Migration from v10 Theme Prop to v14 CSS Variables"}),`
`,e.jsx(n.h3,{id:"the-evolution",children:"The Evolution"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Canvas Kit v10"})," introduced CSS tokens through the ",e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),` package, providing
a foundation for consistent design system values.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Canvas Kit v14"})," Removes the cascade barrier created by the ",e.jsx(n.code,{children:"CanvasProvider"}),`, allowing CSS
variables to work as intended.`]}),`
`,e.jsx(n.h2,{id:"old-approach-v10-v13",children:"Old Approach (v10-v13)"}),`
`,e.jsxs(n.p,{children:["The old theming approach used JavaScript objects passed to the ",e.jsx(n.code,{children:"CanvasProvider"})," theme prop:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {base} from '@workday/canvas-tokens-web';

<CanvasProvider theme={{canvas: {palette: {primary: {main: 'purple'}}}}}>
  <App />
</CanvasProvider>;
`})}),`
`,e.jsxs(n.p,{children:["This would use ",e.jsx(n.code,{children:"chroma.js"})," to generate a palette based on the ",e.jsx(n.code,{children:"main"})," color provided."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Why we're moving away from this approach:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Performance overhead from JavaScript theme object processing"}),`
`,e.jsx(n.li,{children:"Limited flexibility for complex theming scenarios"}),`
`,e.jsx(n.li,{children:"Inconsistent cascade behavior"}),`
`]}),`
`,e.jsxs(n.p,{children:["Any time ",e.jsx(n.code,{children:"theme"})," is passed, the ",e.jsx(n.code,{children:"CanvasProvider"}),` would generate a palette and attach brand variables
via a `,e.jsx(n.code,{children:"className"}),` scoping those brand variables to a wrapping div. In order for us to provide a
better solution to theming that is scalable and is more aligned with our CSS variables, we changed
this approach.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," While we support theme overrides, we advise to use global theming via CSS Variables."]}),`
`,e.jsx(n.h2,{id:"what-is-a-cascade-barrier",children:"What is a Cascade Barrier?"}),`
`,e.jsxs(n.p,{children:[`When we say "cascade barrier", we're talking about how
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Cascade",rel:"nofollow",children:"CSS cascades"}),` and takes
precedence. Take the following example:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --cnbvs-brand-primary-base: blue;
}

// the element with the class .my-app will have a higher specificity than root, creating a barrier where the CSS variables gets redefined and takes precedence over what is defined at root.
.my-app {
  --cnvs-brand-primary-base: red;
}
`})}),`
`,e.jsxs(n.p,{children:["In the case of the ",e.jsx(n.code,{children:"CanvasProvider"}),` prior to v14, all our brand tokens where defined within a class
and scoped to the `,e.jsx(n.code,{children:"div"})," that the ",e.jsx(n.code,{children:"CanvasProvider"})," created. This meant that anything set on ",e.jsx(n.code,{children:":root"}),`
or outside of the `,e.jsx(n.code,{children:"CanvasProvider"}),` would not be able to cascade down to the components within the
`,e.jsx(n.code,{children:"CanvasProvider"}),"."]}),`
`,e.jsxs(n.p,{children:["If you provide a ",e.jsx(n.code,{children:"theme"})," to the ",e.jsx(n.code,{children:"CanvasProvider"}),`, it will create a scoped theme. Note that in v14
and v15, global CSS variables are the recommended way to theme Popups and Modals consistently.`]}),`
`,e.jsx(n.h2,{id:"global-vs-scoped-theming",children:"Global vs Scoped Theming"}),`
`,e.jsxs(n.p,{children:["Canvas Kit v14 and v15 support two theming strategies: ",e.jsx(n.strong,{children:"global theming"})," and ",e.jsx(n.strong,{children:"scoped theming"}),`.
Understanding the difference is important to avoid unexpected behavior.`]}),`
`,e.jsx(n.h3,{id:"global-theming",children:"Global Theming"}),`
`,e.jsxs(n.p,{children:["Global theming applies CSS variables at the ",e.jsx(n.code,{children:":root"}),` level, making them available throughout your
entire application. This is the `,e.jsx(n.strong,{children:"recommended approach"})," for most use cases."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@workday/canvas-tokens-web/css/base/_variables.css';
:root {
	// This is showing how you can change the value of a token at the root level of your application.
  --cnvs-brand-primary-600: var(--cnvs-base-palette-magenta-600);
}
`})}),`
`,e.jsx(n.h3,{id:"scoped-theming",children:"Scoped Theming"}),`
`,e.jsxs(n.p,{children:[`Scoped theming applies CSS variables to a specific section of your application using the
`,e.jsx(n.code,{children:"CanvasProvider"})," via the ",e.jsx(n.code,{children:"theme"})," prop. The theme only affects components within that provider."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Using the theme prop for scoped theming. This will set the [brand.primary.**] tokens to shades of purple. This will also ensure that the Popup and Modal components are themed consistently.
<CanvasProvider theme={{canvas: {palette: {primary: {main: 'purple'}}}}}>
  <ScopedSection />
</CanvasProvider>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"⚠️ Warning:"})," Scoped theming creates a cascade barrier that ",e.jsx(n.strong,{children:"will break global theming"}),`. Any
CSS variables defined at `,e.jsx(n.code,{children:":root"}),` will be overridden by the scoped theme. Only the tokens
explicitly defined in the `,e.jsx(n.code,{children:"theme"}),` prop will be changed - other tokens will use their default
values, not your global overrides.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"when-to-use-scoped-theming",children:"When to Use Scoped Theming"}),`
`,e.jsx(n.p,{children:`Only use scoped theming when you intentionally need a different theme for a specific section of your
application, such as:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Embedding a Canvas Kit component in a third-party application with a different brand"}),`
`,e.jsx(n.li,{children:"Creating a preview panel that shows components with different themes"}),`
`,e.jsx(n.li,{children:"Supporting multi-tenant applications where sections have different branding"}),`
`]}),`
`,e.jsxs(n.p,{children:["For all other cases, use global theming at ",e.jsx(n.code,{children:":root"}),` to ensure consistent theming throughout your
application.`]}),`
`,e.jsx(n.h2,{id:"-preferred-approach-v14",children:"✅ Preferred Approach (v14+)"}),`
`,e.jsx(n.p,{children:"Canvas Kit v14 and v15 promote using CSS variables for theming, which can be applied in two ways:"}),`
`,e.jsx(n.h3,{id:"method-1-global-css-variables-recommended",children:"Method 1: Global CSS Variables (Recommended)"}),`
`,e.jsx(n.p,{children:`Apply theming at the global level by importing CSS variable files and overriding values in your root
CSS:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* index.css */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';
@import '@workday/canvas-tokens-web/css/component/_variables.css';

:root {
  /* Override brand primary colors */
  --cnvs-brand-primary-600: var(--cnvs-base-palette-magenta-600);
  --cnvs-brand-primary-200: var(--cnvs-base-palette-magenta-200);
  --cnvs-brand-primary-50: var(--cnvs-base-palette-magenta-50);
  --cnvs-brand-primary-25: var(--cnvs-base-palette-magenta-25);
  --cnvs-brand-primary-700: var(--cnvs-base-palette-magenta-700);
  --cnvs-brand-primary-800: var(--cnvs-base-palette-magenta-800);
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," You should only import the CSS variables ",e.jsx(n.em,{children:"once"}),` at the root level of your application.
If your application renders within another environment that imports these and sets them, `,e.jsx(n.strong,{children:`do
not`})," re import them."]}),`
`]}),`
`,e.jsx(n.h3,{id:"method-2-provider-level-css-variables",children:"Method 2: Provider-Level CSS Variables"}),`
`,e.jsxs(n.p,{children:["Use Canvas Kit's ",e.jsx(n.code,{children:"CanvasProvider"})," and ",e.jsx(n.code,{children:"theme"}),` prop to generate themed class names that can be
applied to specific components or sections:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider} from '@workday/canvas-kit-react/common';

// This will set the [brand.primary.**] tokens to shades of purple. This will also ensure that the Popup and Modal components are themed consistently.
<CanvasProvider theme={{canvas: {palette: {primary: {main: 'purple'}}}}}>
  <App />
</CanvasProvider>;
`})}),`
`,e.jsx(n.h2,{id:"css-token-structure",children:"CSS Token Structure"}),`
`,e.jsx(n.p,{children:"Canvas Kit provides three layers of CSS variables."}),`
`,e.jsxs(n.h3,{id:"base-tokens-base_variablescss",children:["Base Tokens (",e.jsx(n.code,{children:"base/_variables.css"}),")"]}),`
`,e.jsx(n.p,{children:"Base tokens define foundation palette and design values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--cnvs-base-palette-blue-600: oklch(0.5198 0.1782 256.11 / 1);
--cnvs-base-palette-magenta-600: oklch(0.534 0.183 344.19 / 1);
--cnvs-base-font-size-100: 1rem;
--cnvs-base-space-x4: calc(var(--cnvs-base-unit) * 4);
`})}),`
`,e.jsxs(n.h3,{id:"brand-tokens-brand_variablescss",children:["Brand Tokens (",e.jsx(n.code,{children:"brand/_variables.css"}),")"]}),`
`,e.jsx(n.p,{children:"Brand tokens define semantic color assignments."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--cnvs-brand-primary-600: var(--cnvs-base-palette-blue-600);
--cnvs-brand-primary-200: var(--cnvs-base-palette-blue-200);
--cnvs-brand-primary-50: var(--cnvs-base-palette-blue-50);
--cnvs-brand-primary-25: var(--cnvs-base-palette-blue-25);
--cnvs-brand-primary-700: var(--cnvs-base-palette-blue-700);
--cnvs-brand-primary-800: var(--cnvs-base-palette-blue-800);
`})}),`
`,e.jsxs(n.h3,{id:"system-tokens-system_variablescss",children:["System Tokens (",e.jsx(n.code,{children:"system/_variables.css"}),")"]}),`
`,e.jsx(n.p,{children:"System tokens define component-specific values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--cnvs-sys-color-bg-default: var(--cnvs-base-palette-blue-600);
--cnvs-sys-shape-sm: var(--cnvs-base-size-50);
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"complete-brand-theming",children:"Complete Brand Theming"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* themes/magenta-theme.css */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';

:root {
  /* Primary brand colors */
  --cnvs-brand-primary-600: var(--cnvs-base-palette-magenta-600);
  --cnvs-brand-primary-200: var(--cnvs-base-palette-magenta-200);
  --cnvs-brand-primary-50: var(--cnvs-base-palette-magenta-50);
  --cnvs-brand-primary-25: var(--cnvs-base-palette-magenta-25);
  --cnvs-brand-primary-700: var(--cnvs-base-palette-magenta-700);
  --cnvs-brand-primary-800: var(--cnvs-base-palette-magenta-800);
}
`})}),`
`,e.jsx(n.h3,{id:"scoped-theming-1",children:"Scoped Theming"}),`
`,e.jsx(t,{code:m}),`
`,e.jsx(n.h3,{id:"rtl-support",children:"RTL Support"}),`
`,e.jsxs(n.p,{children:[`Canvas Kit supports RTL out of the box. Our components are styled to use
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",rel:"nofollow",children:"CSS logical properties"}),`.
If you want to add additional styles based on RTL, you can also use the `,e.jsx(n.code,{children:":dir"}),`
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:dir",rel:"nofollow",children:"pseudo selector"}),"."]}),`
`,e.jsx(n.h4,{id:"setting-rtl-direction",children:"Setting RTL Direction"}),`
`,e.jsxs(n.p,{children:["Use the native HTML ",e.jsx(n.code,{children:"dir"})," attribute to set the text direction. The ",e.jsx(n.code,{children:"CanvasProvider"})," accepts a ",e.jsx(n.code,{children:"dir"}),`
prop which sets this attribute on its wrapper element:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider} from '@workday/canvas-kit-react/common';

// Set RTL direction
<CanvasProvider dir="rtl">
  <App />
</CanvasProvider>;
`})}),`
`,e.jsx(n.p,{children:"You can also set it on any HTML element:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div dir="rtl">
  <MyComponent />
</div>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The ",e.jsx(n.code,{children:"dir"}),` attribute is the standard HTML way to set text direction. It's preferred over
the deprecated `,e.jsx(n.code,{children:"theme.canvas.direction"}),` approach because it works natively with CSS logical
properties and the `,e.jsx(n.code,{children:":dir()"})," pseudo-class."]}),`
`]}),`
`,e.jsx(n.h4,{id:"using-css-logical-properties",children:"Using CSS Logical Properties"}),`
`,e.jsx(n.p,{children:`CSS logical properties automatically adapt to the text direction. Use these instead of physical
properties:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Physical properties (don't adapt to RTL) */
.my-component {
  margin-left: 1rem;
  padding-right: 1rem;
  border-left: 1px solid;
}

/* Logical properties (adapt to RTL automatically) */
.my-component {
  margin-inline-start: 1rem;
  padding-inline-end: 1rem;
  border-inline-start: 1px solid;
}
`})}),`
`,e.jsxs(n.h4,{id:"conditional-rtl-styles-with-dir",children:["Conditional RTL Styles with ",e.jsx(n.code,{children:":dir()"})]}),`
`,e.jsxs(n.p,{children:["For styles that need to change based on direction (like rotating icons), use the ",e.jsx(n.code,{children:":dir()"}),`
pseudo-class:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {createStyles} from '@workday/canvas-kit-styling';

const rtlButtonStyles = createStyles({
  ':dir(rtl)': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});
`})}),`
`,e.jsx(t,{code:p}),`
`,e.jsx(n.h3,{id:"resetting-to-default-brand-theme",children:"Resetting to Default Brand Theme"}),`
`,e.jsxs(n.p,{children:[`If you need to reset the theme in parts of your application, there's a few ways to do this. We
export a `,e.jsx(n.code,{children:"defaultBranding"})," class that can be applied to the ",e.jsx(n.code,{children:"CanvasProvider"}),` which can wrap parts of
your application.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider, defaultBranding} from '@workday/canvas-kit-react/common';

<CanvasProvider className={defaultBranding}>
  <SomeSubComponent />
</CanvasProvider>;
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Doing the following ",e.jsx(n.strong,{children:"will create a cascade barrier"}),`. Only use this method if you
intentionally want to override the default theme.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"migration-guide",children:"Migration Guide"}),`
`,e.jsx(n.h3,{id:"step-1-identify-current-theme-usage",children:"Step 1: Identify Current Theme Usage"}),`
`,e.jsxs(n.p,{children:["Find all instances of ",e.jsx(n.code,{children:"CanvasProvider"})," with theme props in your application."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Find these patterns:
<CanvasProvider theme={{canvas: {palette: {...}}}}>
`})}),`
`,e.jsx(n.h3,{id:"step-2-extract-theme-values",children:"Step 2: Extract Theme Values"}),`
`,e.jsx(n.p,{children:"Convert JavaScript theme objects to CSS variable overrides."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Old approach:
const theme = {
  canvas: {
    palette: {
      primary: {
        main: colors.greenApple400,
        dark: colors.greenApple500,
      }
    }
  }
};

// New approach - CSS variables:
:root {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-green-400);
  --cnvs-brand-primary-dark: var(--cnvs-base-palette-green-500);
}
`})}),`
`,e.jsx(n.h3,{id:"step-3-app-level-theming-usage",children:"Step 3: App Level Theming Usage"}),`
`,e.jsxs(n.p,{children:["Replace theme-based ",e.jsx(n.code,{children:"CanvasProvider"})," usage with CSS class-based theming."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CanvasProvider theme={{canvas: {palette: {primary: {main: 'green'}}}}}>
  <App />
</CanvasProvider>
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"1-use-semantic-token-names",children:"1. Use Semantic Token Names"}),`
`,e.jsx(n.p,{children:"Use brand tokens instead of base tokens for better maintainability."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* ✅ Good - semantic meaning */
--cnvs-brand-primary-600: var(--cnvs-base-palette-blue-600);

/* ❌ Avoid - direct base token usage */
--cnvs-base-palette-blue-600: blue;
`})}),`
`,e.jsx(n.h3,{id:"2-test-accessibility",children:"2. Test Accessibility"}),`
`,e.jsx(n.p,{children:"Ensure color combinations meet accessibility standards."}),`
`,e.jsxs(n.p,{children:[`For a full list of color contrast pairs, view our
`,e.jsx(n.a,{href:"https://canvas.workday.com/guidelines/color/color-contrast",rel:"nofollow",children:"Color Contrast"})," documentation."]}),`
`,e.jsx(n.h3,{id:"3-avoid-component-level-theming",children:"3. Avoid Component Level Theming"}),`
`,e.jsx(n.p,{children:`Theming is meant to be done at the app level or root level of the application. Avoid theming at the
component level.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`/* ✅ Good - App level theming */
import {CanvasProvider} from '@workday/canvas-kit-react/common';

import {base, brand} from '@workday/canvas-tokens-web';


<CanvasProvider theme={{canvas: {palette: {primary: {main: base.magenta600}}}}}>
  <App/>
</CanvasProvider>

/* ❌ Avoid - wrapping components to theme */
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

const myCustomTheme = createStyles({
  [brand.primary.base]: base.magenta600
})

<CanvasProvider className={myCustomTheme}>
  <PrimaryButton>Click Me</PrimaryButton>
</CanvasProvider>

`})}),`
`,e.jsx(n.h2,{id:"performance-benefits",children:"Performance Benefits"}),`
`,e.jsx(n.p,{children:"The CSS variable approach provides several performance improvements:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced Bundle Size"}),": No JavaScript theme object processing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Better Caching"}),": CSS variables can be cached by the browser"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Faster Rendering"}),": Native CSS cascade instead of JavaScript calculations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Runtime Efficiency"}),": No theme context propagation overhead"]}),`
`]}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"theme-not-applied",children:"Theme Not Applied"}),`
`,e.jsx(n.p,{children:"Ensure CSS variable files are imported in the correct order."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," You should only import the CSS variables ",e.jsx(n.em,{children:"once"}),` at the root level of your application.
If your application renders within another environment that imports these and sets them, `,e.jsx(n.strong,{children:`do
not`})," re import them."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Correct order */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';
@import '@workday/canvas-tokens-web/css/component/_variables.css';

/* Your overrides after imports */
:root {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-magenta-600);
}
`})}),`
`,e.jsx(n.h3,{id:"inconsistent-theming",children:"Inconsistent Theming"}),`
`,e.jsx(n.p,{children:"Check for CSS specificity issues."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Ensure your overrides have sufficient specificity */
:root {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-blue-600) !important;
}

/* Or use more specific selectors */
.my-app {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-blue-600);
}
`})}),`
`,e.jsx(n.h3,{id:"missing-token-values",children:"Missing Token Values"}),`
`,e.jsx(n.p,{children:"Verify all required CSS token files are imported and token names are correct."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {base, brand, system} from '@workday/canvas-tokens-web';

// Check token availability in development
console.log(brand.primary.base); // Should output CSS variable name
`})}),`
`,e.jsx(n.h2,{id:"conclusion",children:"Conclusion"}),`
`,e.jsx(n.p,{children:`The migration to CSS variables in Canvas Kit v14 provides a more performant, flexible, and
maintainable theming solution. By following this guide and best practices, you can successfully
migrate your applications and take advantage of the improved theming capabilities.`}),`
`,e.jsxs(n.p,{children:[`For additional support and examples, refer to the Canvas Kit Storybook documentation and the
`,e.jsx(n.code,{children:"@workday/canvas-tokens"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-tokens",rel:"nofollow",children:"repository"}),"."]})]})}function _(a={}){const{wrapper:n}={...o(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}const G=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{_ as M,p as R,m as T,G as a};
