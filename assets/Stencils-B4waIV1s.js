import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as m}from"./index-3YbjYt95.js";import{ae as b}from"./index-C88wW2Ex.js";import{E as x}from"./union-BPMFUjOj.js";import{r as g}from"./index-IfJi-UCQ.js";import{F as r}from"./FormField-DN--zoVG.js";import{S as j}from"./Switch-C_dXTXr2.js";import{C as i}from"./Card-Diisw6Wk.js";import{a as v}from"./cs-rfTTo7Bg.js";import{c as s,d as S,p as w,g as l}from"./index-5dfzm_kn.js";import{I as t}from"./InformationHighlight-DzhLDC-I.js";import"./iframe-CQKXz9-x.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B8HVQN6j.js";import"./Svg-Q2G_Ux-O.js";import"./px2rem-C0KbprIx.js";import"./components-hLI4Y7BG.js";import"./StatusIndicator-CiQOcTf5.js";import"./Text-D8fnnBwI.js";import"./mergeStyles-dbpHOiQg.js";import"./Box-CZFE0ixi.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DNq8_MY_.js";import"./grid-2x3NJxAi.js";import"./ExternalHyperlink-CWp7Pbv_.js";import"./Hyperlink-RaMBe4Xz.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-CLjQTZHV.js";import"./BaseButton-CYxOiuNN.js";import"./Button-4v0JWwSY.js";import"./lerna-DL0LCqJw.js";import"./CanvasProvider-mU4xaRYK.js";import"./index-5mrAZJYD.js";import"./Tooltip-C_9jsdWz.js";import"./useTooltip-BYoICOX9.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-Laal62t5.js";import"./Popper-GB9vaNct.js";import"./TertiaryButton-BPITVf5W.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-D0CjS5x_.js";import"./ColorPicker-DgREOIhz.js";import"./ColorInput-D7oUbfnw.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-D51etMr3.js";import"./types-DXdjelYI.js";import"./check-Bvurkvei.js";import"./Expandable-BWvaEvQ6.js";import"./Avatar-CzGiOulD.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DdDlie6x.js";import"./Popup-N9bHb6Ji.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DboaFZ0b.js";import"./useInitialFocus-FRuZ2Meg.js";import"./useReturnFocus-C7p7cNR7.js";import"./useFocusRedirect-CKcH6oXb.js";import"./Breadcrumbs-C2gx7qIi.js";import"./useOverflowListTarget-DvTTlNIT.js";import"./useListItemSelect-1rs22A26.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DIRa1Olo.js";import"./OverflowTooltip-C8xnDywt.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-C9RVCMPo.js";import"./Table-gkxgxQ_f.js";import"./exclamation-circle-BJmpTdUQ.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";const c=v({vars:{headerColor:""},parts:{header:"themed-card-header",body:"themed-card-body"},base:({headerPart:o,headerColor:n})=>({padding:w.md,boxShadow:S[2],backgroundColor:s.bg.default,color:s.fg.default,[o]:{color:n}}),modifiers:{isDarkTheme:{true:({headerPart:o,bodyPart:n})=>({backgroundColor:s.surface.contrast.default,color:s.fg.inverse,[`${o}, ${n}`]:{color:s.fg.inverse}})}}}),p=({headerColor:o,elemProps:n})=>{const[d,u]=g.useState(!1),f=y=>{u(y.target.checked)};return e.jsxs("div",{children:[e.jsxs(r,{children:[e.jsx(r.Label,{children:"Toggle Dark Theme"}),e.jsx(r.Input,{as:j,onChange:f,checked:d})]}),e.jsxs(i,{cs:c({isDarkTheme:d,headerColor:o}),...n,children:[e.jsx(i.Heading,{...c.parts.header,children:"Canvas Supreme"}),e.jsx(i.Body,{...c.parts.body,children:"Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms, onions, and oregano."})]})]})};p.__RAW__=`import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const themedCardStencil = createStencil({
  vars: {
    // Create CSS variables for the color of the header
    headerColor: '',
  },
  parts: {
    // Allows for styling a sub element of the component that may not be exposed through the API
    header: 'themed-card-header',
    body: 'themed-card-body',
  },
  base: ({headerPart, headerColor}) => ({
    padding: system.padding.md,
    boxShadow: system.depth[2],
    backgroundColor: system.color.bg.default,
    color: system.color.fg.default,
    // Targets the header part via [data-part="themed-card-header"]"]
    [headerPart]: {
      color: headerColor,
    },
  }),
  modifiers: {
    isDarkTheme: {
      // If the prop \`isDarkTheme\` is true, style the component and it's parts
      true: ({headerPart, bodyPart}) => ({
        backgroundColor: system.color.surface.contrast.default,
        color: system.color.fg.inverse,
        [\`\${headerPart}, \${bodyPart}\`]: {
          color: system.color.fg.inverse,
        },
      }),
    },
  },
});

export const CreateStencil = ({headerColor, elemProps}) => {
  const [darkTheme, setIsDarkTheme] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkTheme(event.target.checked);
  };
  return (
    <div>
      <FormField>
        <FormField.Label>Toggle Dark Theme</FormField.Label>
        <FormField.Input as={Switch} onChange={handleChange} checked={darkTheme} />
      </FormField>

      <Card cs={themedCardStencil({isDarkTheme: darkTheme, headerColor})} {...elemProps}>
        <Card.Heading {...themedCardStencil.parts.header}>Canvas Supreme</Card.Heading>
        <Card.Body {...themedCardStencil.parts.body}>
          Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
          onions, and oregano.
        </Card.Body>
      </Card>
    </div>
  );
};
`;function h(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...o.components};return t||a("InformationHighlight",!1),t.Body||a("InformationHighlight.Body",!0),t.Heading||a("InformationHighlight.Heading",!0),t.Icon||a("InformationHighlight.Icon",!0),e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Styling/Getting Started/Create Stencil"}),`
`,e.jsx(n.h1,{id:"create-stencil",children:"Create Stencil"}),`
`,e.jsxs(n.p,{children:["Stencils are a reusable function that returns ",e.jsx(n.code,{children:"style"})," and ",e.jsx(n.code,{children:"className"}),` props in an object. A Stencil
should apply to a single element. If your component has nested elements, you can youse `,e.jsx(n.code,{children:"parts"}),` to
targer those elements in the Stencil. If your component is a compound component, a stencil should be
created for each subcomponent. If your component is a config component, a stencil can have nested
styles.`]}),`
`,e.jsx(n.p,{children:"We created Stencils as the reusable primitive of components. Stencils provide:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"vars"}),": CSS variables for dynamic properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"base"}),": base styles to any component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"modifier"}),": modifiers like “size = small,medium,large” or “color=red,blue,etc”"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parts"}),": matching sub-elements that are part of a component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"compound"}),": compound modifiers - styles that match multiple modifiers"]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.p,{children:`In the example below, Stencils allow you to dynamically style elements or components based on
properties.`}),`
`,e.jsx(x,{code:p}),`
`,e.jsxs(n.h2,{id:"when-to-use-createstencil",children:["When to Use ",e.jsx(n.code,{children:"createStencil"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When you're styling parts of a component that rely on dynamic properties."}),`
`,e.jsx(n.li,{children:"When you want to create a reusable component with dynamic styles."}),`
`]}),`
`,e.jsx(n.p,{children:"Use a Stencil when building reusable components that have dynamic styles and properties."}),`
`,e.jsx(n.h2,{id:"concepts",children:"Concepts"}),`
`,e.jsx(n.h3,{id:"base-styles",children:"Base styles"}),`
`,e.jsxs(n.p,{children:[`Base styles are always applied to a Stencil. All your default styles should go here. Base styles
support psuedo selectors like `,e.jsx(n.code,{children:":focus-visible"})," or ",e.jsx(n.code,{children:":hover"}),` as well as child selectors. Any selector
supported by `,e.jsx(n.code,{children:"@emotion/css"}),` is valid here. All styles must be static and statically analyzable by
the tranformer. If you need dynamic styling, look at Variables and Modifiers.`]}),`
`,e.jsx(n.h3,{id:"variables",children:"Variables"}),`
`,e.jsxs(n.p,{children:[`Variables allow some properties to be dynamic. They work by creating
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS Variables"}),` with
unique names and are applied using the
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style",rel:"nofollow",children:"style"}),` property of an element
to locally scope an override. Since we don't have access to those names, we need a function wrapper
around our style objects. This includes `,e.jsx(n.code,{children:"base"}),", ",e.jsx(n.code,{children:"modifiers"}),", and ",e.jsx(n.code,{children:"compound"})," modifiers."]}),`
`,e.jsx(n.p,{children:"Here's a simplified example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const myStencil = createStencil({
  vars: {
    defaultColor: 'red' // default value
    nonDefaultedColor: '', // will allow for uninitialization
  },
  base: ({defaultColor}) => {
    color: defaultColor // \`defaultColor\` is '--defaultColor-abc123', not 'red'
  }
})

const elemProps = myStencil({color: 'blue'}) // {style: {'--defaultColor-abc123': 'blue'}}

<div {...elemProps} />
`})}),`
`,e.jsx(n.p,{children:"This will produce the following HTML:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<style>
  .css-abc123 {
    --defaultColor-abc123: red;
    color: var(--defaultColor-abc123);
  }
</style>
<div class="css-123abc" style="--defaultColor-abc123: blue;"></div>
`})}),`
`,e.jsxs(n.p,{children:["The element will have a ",e.jsx(n.code,{children:"color"})," property of ",e.jsx(n.code,{children:"'blue'"}),` because the element style is the highest
specificity and wins over a local class name. In the "Styles" tab of developer tools, it will look
like the following:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`element.style {
  --defaultColor-abc123: blue;
}

.css-abc123 {
  --defaultColor-abc123: red;
  color: var(--defaultColor-abc123); // blue
}
`})}),`
`,e.jsxs(n.p,{children:[`Variables are automatically added to the config of a Stencil. They share the same namespace as
modifiers, so `,e.jsx(n.strong,{children:"do not have a modifier with the same name as a variable"}),"."]}),`
`,e.jsxs(t,{className:"sb-unstyled",cs:{marginBlock:l.md},children:[e.jsx(t.Icon,{}),e.jsx(t.Heading,{children:"Note"}),e.jsx(t.Body,{children:e.jsx(n.p,{children:`Variables should be used sparingly. Style properties can be easily overridden without variables.
Variables are useful if you want to expose changing properties regardless of selectors. For
example, Buttons use variables for colors of all states (hover, active, focus, disabled, and
nested icons). Without variables, overriding the focus color would require deeply nested
selector overrides.`})})]}),`
`,e.jsx(n.h4,{id:"cascading-variables",children:"Cascading Variables"}),`
`,e.jsxs(n.p,{children:["Notice the ",e.jsx(n.code,{children:"nonDefaultedColor"})," is not included in the base styles like ",e.jsx(n.code,{children:"defaultColor"}),` was. If a
variable has an empty string, it will can be uninitialized. Stencil variables with a default value
will create a "cascade barrier". A cascade barrier prevents the variable from "leaking" into the
component. For example, if a `,e.jsx(n.code,{children:"Card"})," component was rendered within another ",e.jsx(n.code,{children:"Card"}),` component, the
variables from the parent `,e.jsx(n.code,{children:"Card"})," would not leak into the child ",e.jsx(n.code,{children:"Card"}),` component. But there are times
where a component expects a parent component to set a CSS variable and that it should cascade to the
component. An example of this is the relationship between `,e.jsx(n.code,{children:"SystemIcon"})," and ",e.jsx(n.code,{children:"Button"}),". The ",e.jsx(n.code,{children:"Button"}),`
components set the `,e.jsx(n.code,{children:"SystemIcon"})," variables and they should cascade into the ",e.jsx(n.code,{children:"SystemIcon"})," component."]}),`
`,e.jsxs(t,{className:"sb-unstyled",cs:{marginBlock:l.md},children:[e.jsx(t.Icon,{}),e.jsx(t.Heading,{children:"Note"}),e.jsx(t.Body,{children:e.jsxs(n.p,{children:["Non-cascade variables ",e.jsx(n.em,{children:"could"}),` be initialized. If you use uninitialized variables, be sure to use
a fallback in your styles.`]})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const myStencil = createStencil({
  vars: {
    color: '', // uninitialized
  },
  base({color}) {
    return {
      // provide a fallback. A uninitialized CSS variable will fall back to \`initial\`.
      // for the \`color\` CSS property, that's most likely black (default text color)
      color: cssVar(color, 'red'),
    };
  },
});
`})}),`
`,e.jsx(n.h4,{id:"nested-variables",children:"Nested Variables"}),`
`,e.jsxs(n.p,{children:[`Variables can be nested one level. This can be useful for colors with different psuedo selectors
like `,e.jsx(n.code,{children:":hover"})," or ",e.jsx(n.code,{children:":focus"}),". Here's an example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const myStencil = createStencil({
  vars: {
    default: {
      color: 'red'
    },
    hover: {
      color: 'blue'
    },
    focus: {
      color: 'orange'
    }
  },
  base: ({default, hover, focus}) => {
    color: default.color,
    '&:hover': {
      color: hover.color
    },
    '&:focus': {
      color: focus.color
    }
  }
})
`})}),`
`,e.jsx(n.h3,{id:"modifiers",children:"Modifiers"}),`
`,e.jsx(n.p,{children:`Modifiers are modifications to base styles. It should be used to change the appearance of a base
style. For example, a button may have a modifier for "primary" or "secondary" which may change the
visual emphasis of the button. Each modifier has its own CSS class name and the stencil will return
the correct CSS classes to apply to an element based on what modifiers are active.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const buttonStencil = createStencil({
  base: {
    padding: 5
    // base styles
  },
  modifiers: {
    variant: { // modifier name
      primary: {
        background: 'blue'
      },
      secondary: {
        background: 'gray'
      }
    }
  },
  defaultModifiers: {
    variant: 'secondary'
  }
})

const elemProps = myStencil({variant: 'primary'}) // {className: "css-a0 css-a1"}

<div {...elemProps} />
`})}),`
`,e.jsx(n.p,{children:"The HTML may look something like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<style>
  .css-a0 {
    padding: 5px;
  }
  .css-a1 {
    background: 'blue';
  }
  .css-a2 {
    background: 'gray';
  }
</style>
<div class="css-a0 css-a1"></div>
`})}),`
`,e.jsxs(n.p,{children:["The optional ",e.jsx(n.code,{children:"defaultModifiers"}),` config property will default modifiers to a value. If a modifier is
not passed to the stencil, the default will be used.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:"myStencil(); // className will be `'css-a0 css-a2'`\n"})}),`
`,e.jsx(n.h3,{id:"compound-modifiers",children:"Compound Modifiers"}),`
`,e.jsx(n.p,{children:`A compound modifier creates a new CSS class for the intersection of two or more modifiers. Each
modifier can have its own separate CSS class while the intersection is a different CSS class.`}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const buttonStencil = createStencil({
  base: {
    padding: 10,
    // base styles
  },
  modifiers: {
    size: {
      // modifier name
      large: {
        padding: 20,
      },
      small: {
        padding: 5,
      },
    },
    iconPosition: {
      start: {
        paddingInlineStart: 5,
      },
      end: {
        paddingInlineEnd: 5,
      },
    },
  },
  compound: [
    {
      modifiers: {size: 'large', position: 'start'},
      styles: {
        paddingInlineStart: 15,
      },
    },
    {
      modifiers: {size: 'small', position: 'end'},
      styles: {
        paddingInlineEnd: 0,
      },
    },
  ],
});

<div {...buttonStencil()} />
<div {...buttonStencil({size: 'small'})} />
<div {...buttonStencil({size: 'small', iconPosition: 'end'})} />
`})}),`
`,e.jsx(n.p,{children:"The HTML will look something like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<style>
  .a0 {
    padding: 10px;
  }
  .a1 {
    padding: 20px;
  }
  .a2 {
    padding: 5px;
  }
  .a3 {
    padding-inline-start: 5px;
  }
  .a4 {
    padding-inline-end: 5px;
  }
  .a5 {
    padding-inline-start: 15px;
  }
  .a6 {
    padding-inline-start: 0px;
  }
</style>
<div class="a0"></div>
<div class="a0 a2"></div>
<div class="a0 a2 a4 a6"></div>
`})}),`
`,e.jsx(n.p,{children:"Notice the stencil adds all the class names that match the base, modifiers, and compound modifiers."}),`
`,e.jsx(n.h3,{id:"variables-and-modifiers-with-same-keys",children:"Variables and Modifiers with same keys"}),`
`,e.jsx(n.p,{children:`It is possible to have a variable and modifier sharing the same key. The Stencil will accept either
the modifier option or a string. The value will be sent as a variable regardless while the modifer
will only match if it is a valid modifer key.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const buttonStencil = createStencil({
  vars: {
    width: '10px',
  },
  base({width}) {
    return {
      width: width,
    };
  },
  modifiers: {
    width: {
      zero: {
        width: '0', // overrides base styles
      },
    },
  },
});

// \`'zero'\` is part of autocomplete
myStencil({width: 'zero'});
// returns {className: 'css-button css-button--width-zero', styles: { '--button-width': 'zero'}}

// width also accepts a string
myStencil({width: '10px'});
// returns {className: 'css-button', styles: { '--button-width': '10px'}}
`})}),`
`,e.jsx(n.h2,{id:"styling-elements-via-component-parts",children:"Styling Elements via Component Parts"}),`
`,e.jsxs(n.p,{children:[`The goal of compound components is to expose one component per semantic element. Most of the time
this means a 1:1 relationship of a component and DOM element. Sometimes a semantic element contains
non-semantic elements for styling. An example might be a `,e.jsx(n.code,{children:"<button>"}),` with a icon for visual
reinforcement, and a label for a semantic label. The semantic element is the `,e.jsx(n.code,{children:"<button>"}),` while the
icon has no semantic value and the label automatically provides the semantic button with an
accessible name. In order to style the icon and label elements, you have to know the DOM structure
to target those specific elements in order to style it.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {createStencil} from '@workday/canvas-kit-styling';

const myButtonStencil = createStencil({
  base: {
    background: 'transparent',
    i: {
      // ...icon styles
    },
    span: {
      // ...label styles
    },
    ':hover': {
      // ...hover button styles
      i: {
        // ...hover icon styles
      },
      span: {
        // ...hover label styles
      },
    },
  },
});

const MyButton = ({children, ...elemProps}) => {
  return (
    <button {...handleCsProp(elemProps, myButtonStencil())}>
      <i />
      <span>{children}</span>
    </button>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"using-component-parts-to-style-elements",children:"Using Component Parts to Style Elements"}),`
`,e.jsxs(n.p,{children:[`To style elements in the render function, we'll need to choose what elements to add the parts to. In
the example below, we're able to spread the parts directly to elements. The Stencil will generate
the type and value most appropriate for the context the part is used. In the Stencil, the part is
represented by a string that looks like `,e.jsx(n.code,{children:'[data-part="{partValue}"]'}),` and in the render function, it
is an object that looks like `,e.jsx(n.code,{children:"{'data-part': partValue}"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';

const myButtonStencil = createStencil({
  parts: {
    icon: 'my-button-icon',
    label: 'my-button-label',
  },
  base: ({iconPart, labelPart}) => ({
    background: 'transparent',
    [iconPart]: {
      // \`[data-part="my-button-icon"]\`
      // ...icon styles
    },
    [labelPart]: {
      // \`[data-part="my-button-label"]\`
      // ...label styles
    },
    '&:hover': {
      // ...hover styles for button element
      [iconPart]: {
        // ...hover styles for icon part
      },
    },
  }),
});

const MyButton = ({children, ...elemProps}) => {
  return (
    <button {...handleCsProp(elemProps, myButtonStencil())}>
      <i {...myButtonStencil.parts.icon} /> {/* data-part={my-button-icon} */}
      <span {...myButtonStencil.parts.label}>{children}</span> {/* data-part={my-button-label} */}
    </button>
  );
};
`})}),`
`,e.jsx(n.p,{children:`As a reusable component, you can use component parts to style elements that are not exposed in the
API. Consumers can also use the type safe Stencil to target that element to style it as well. As a
general rule, a Stencil maps to a component. Multiple Stencils per component usually means nested
elements that are not targets for style overrides.`}),`
`,e.jsxs(t,{className:"sb-unstyled",cs:{marginBlock:l.md},children:[e.jsx(t.Icon,{}),e.jsx(t.Heading,{children:"Note"}),e.jsx(t.Body,{children:e.jsx(n.p,{children:`While component parts are a way to give access to elements in order to style, they should be
used sparingly. Using component parts increases CSS specificity. A component part should not be
used on a nested component that has its own Stencil. The result will be any style properties
defined with a component part will have a higher specificity than other styles.`})})]})]})}function Ye(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(h,{...o})}):h(o)}function a(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Ye as default};
