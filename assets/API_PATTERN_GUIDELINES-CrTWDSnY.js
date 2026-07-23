import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as r}from"./index-3YbjYt95.js";import{ae as o}from"./index-CSvw2ERc.js";import"./index-IfJi-UCQ.js";import"./iframe-DdBxMp3v.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function i(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Guides/API & Pattern Guidelines"}),`
`,e.jsx(n.h1,{id:"api--pattern-guidelines",children:"API & Pattern Guidelines"}),`
`,e.jsx(n.p,{children:`Note: This repo hasn't seen a full audit, so you may find examples that contradict these guidelines.
Some of the below rules are inspired by painpoints we've encountered in this project.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#canvas",children:"Canvas"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#naming",children:"Naming"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#t-shirt-sizes",children:"T-shirt Sizes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#theme-types",children:"Theme Types"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#event-handlers",children:"Event Handlers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#enums",children:"Enums"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#patterns",children:"Patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#event-handlers-1",children:"Event Handlers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#grow-interface",children:"Grow Interface"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#input-provider",children:"Input Provider"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#prop-spread-behavior",children:"Prop Spread Behavior"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#controlled-components",children:"Controlled Components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#child-mapping",children:"Child Mapping"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#logic-flow",children:"Logic Flow"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#server-side-rendering",children:"Server Side Rendering"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#code-style",children:"Code Style"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default-props",children:"Default Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#element-choice",children:"Element Choice"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#styled-components",children:"Styled Components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#exports",children:"Exports"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#documentation",children:"Documentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#readmes",children:"Readmes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#storybook-structure",children:"Storybook Structure"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#prop-descriptions",children:"Prop Descriptions"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"canvas",children:"Canvas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure you're always using the Canvas primitives and enums wherever possible for things like:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Space (e.g. ",e.jsx(n.code,{children:"canvas.space.s"}),")"]}),`
`,e.jsxs(n.li,{children:["Depth (e.g. ",e.jsx(n.code,{children:"canvas.depth[2]"}),")"]}),`
`,e.jsxs(n.li,{children:["Type (e.g. ",e.jsx(n.code,{children:"...canvas.type.h1"}),`). Always start from a type hierarchy level and override if
needed.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Use the provided types (e.g. ",e.jsx(n.code,{children:"CanvasSpaceValues"}),", ",e.jsx(n.code,{children:"CanvasSpaceNumbers"}),`, etc.) to restrict prop
values`]}),`
`,e.jsxs(n.li,{children:[`Check out the
`,e.jsxs(n.a,{href:"https://github.com/Workday/canvas-kit/blob/master/modules/react/tokens/README.md",rel:"nofollow",children:[e.jsx(n.code,{children:"@workday/canvas-kit-react/tokens"})," README"]}),`
for the latest and greatest Canvas helpers.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"naming",children:"Naming"}),`
`,e.jsx(n.h4,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop names should never include the component name (e.g. ",e.jsx(n.code,{children:"type"}),", not ",e.jsx(n.code,{children:"buttonType"}),")"]}),`
`,e.jsx(n.li,{children:"Use the same props for the same concepts across components"}),`
`,e.jsxs(n.li,{children:["Avoid names that reference color, position, and size. For example:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"blueIcon"}),` can be bad because it may not be blue to everyone and changing colors or making
colors variable is a breaking change.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"leftIcon"}),` can be bad because we can change the position with RTL or add something to the left
of that, then it wouldn't make sense anymore.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mediumIcon"}),` can be bad if we add another size in between... then which one is medium? Is it
mediumLarge now?`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"t-shirt-sizes",children:"T-shirt Sizes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always use the shortest enumeration (",e.jsx(n.code,{children:"xs, s, m, l, xl"}),", etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do not"})," use longer versions (e.g. ",e.jsx(n.code,{children:"sm"}),")"]}),`
`]}),`
`,e.jsx(n.h4,{id:"theme-types",children:"Theme Types"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Default - normal state/color for use on light background"}),`
`,e.jsx(n.li,{children:"Inverse - inverted colors for use on a dark background"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Note:"}),` If you encounter somewhere you need another theme type, please let us know so we can
document it`]}),`
`]}),`
`,e.jsx(n.h4,{id:"event-handlers",children:"Event Handlers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always use standard ",e.jsx(n.code,{children:"on{Descriptor}{Event}"})," naming (",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"onChange"}),", ",e.jsx(n.code,{children:"onBreakpointChange"}),`,
etc.)`]}),`
`,e.jsxs(n.li,{children:["Only use a descriptor if:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You need more context"}),`
`,e.jsxs(n.li,{children:["There is already a handler for that type of event (e.g. ",e.jsx(n.code,{children:"onChange"}),", ",e.jsx(n.code,{children:"onValidColorChange"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"enums",children:"Enums"}),`
`,e.jsx(n.p,{children:`Use disjoint string unions instead of enums. Enums have issues with overloading or extending. They
are also more difficult to use and create a different experience from JavaScript. These union types
also have a better autocomplete experience.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`interface ButtonProps {
  size: 'small' | 'medium' | 'large';
}

// use
<PrimaryButton size="medium" />;
`})}),`
`,e.jsx(n.p,{children:"JavaScript objects can be used as enums without the downsides:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ButtonType = {
  Primary: 'primary',
  Secondary: 'secondary'
} as const // as const locks object values as literal

interface ButtonProps {
  type: typeof ButtonType[keyof typeof ButtonType] // returns 'primary' | 'secondary'
}

Button.Type = ButtonType

// use
<Button type={Button.Type.Primary} />
<Button type="primary" />
`})}),`
`,e.jsx(n.p,{children:"If objects are desired, the keys follow these rules:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Singular"}),`
`,e.jsx(n.li,{children:"PascalCase"}),`
`,e.jsx(n.li,{children:`Include component name unless it's a generic enum shared across components. Since we export our
enums, this prevents naming clashes`}),`
`,e.jsxs(n.li,{children:["Exclude component name in static variables (",e.jsx(n.code,{children:"Button.Type"})," vs. ",e.jsx(n.code,{children:"Button.ButtonType"}),"):"]}),`
`]}),`
`,e.jsx(n.h2,{id:"patterns",children:"Patterns"}),`
`,e.jsx(n.h4,{id:"event-handlers-1",children:"Event Handlers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use standard browser events wherever possible"}),`
`,e.jsxs(n.li,{children:[`All event handlers should receive an event unless there's a good reason otherwise. This is for
consumer predictability. In other words, always opt for `,e.jsx(n.code,{children:"onChange: e => void"}),` over
`,e.jsx(n.code,{children:"onChange: () => void"})," or ",e.jsx(n.code,{children:"onChange: value => void"}),", etc."]}),`
`]}),`
`,e.jsx(n.h4,{id:"grow-interface",children:"Grow Interface"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If your component needs to grow to fill to it's container, extend ",e.jsx(n.code,{children:"GrowthInterface"}),` (e.g.
`,e.jsx(n.code,{children:"export interface MyComponentProps extends GrowthBehavior"}),")"]}),`
`,e.jsxs(n.li,{children:["Then use the ",e.jsx(n.code,{children:"grow"}),` boolean prop in your styles to achieve the desired effect (e.g.
`,e.jsx(n.code,{children:"width: grow ? '100%' : undefined"}),")"]}),`
`]}),`
`,e.jsx(n.h4,{id:"input-provider",children:"Input Provider"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["All Canvas Kit components should support an ",e.jsx(n.code,{children:"InputProvider"}),` component to provide the cleanest
experience for mouse users. Read the docs
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/core/react#input-provider",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsxs(n.li,{children:["Do not use ",e.jsx(n.code,{children:"InputProvider"}),` within your components. It is meant to be used only once in your
application. It does not require wrapping any children`]}),`
`,e.jsx(n.li,{children:"Make sure you provide fully accessible styling by default, and only override for mouse usage."}),`
`,e.jsx(n.li,{}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`[\`[data-whatinput='mouse'] &:focus,
  [data-whatinput='touch'] &:focus,
  [data-whatinput='pointer'] &:focus\`]: {
  outline: 'none',
  border: 'none',
},
`})}),`
`,e.jsx(n.h4,{id:"prop-spread-behavior",children:"Prop Spread Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`Extend the interface of the primary element/component in your component (e.g.
`,e.jsx(n.code,{children:"export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>"}),")"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Intentionally destructure your props so that every prop is assigned. This allows you to use spread
the way it was intended.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonType,
  size: ButtonSize,
  icon: CanvasIcon
}

// ...somewhere in your button render()
const { type, size, icon, ...elemProps } = this.props
<ButtonContainer type={type} size={size} icon={icon} {...elemProps} />
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Only spread props on one element/component"}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"controlled-components",children:"Controlled Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"We opt for controlled components wherever possible."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"We aim to manage the least amount of state within our components as possible."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"For input type components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always stick with the default ",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"onChange"})," if you can"]}),`
`,e.jsxs(n.li,{children:["Deviate where it makes sense and/or is required (e.g. ",e.jsx(n.code,{children:"checked"})," and ",e.jsx(n.code,{children:"onChange"})," for checkboxes)."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use aria labels where required"}),`
`,e.jsx(n.li,{children:"Ensure full keyboard navigation"}),`
`,e.jsx(n.li,{children:`Check whether tabbing is enough or whether additional keyboard navigation is required (e.g. arrow
keys)`}),`
`,e.jsx(n.li,{children:"When in doubt, ask an expert!"}),`
`]}),`
`,e.jsx(n.h4,{id:"children",children:"Children"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We often add or augment props to React children within our components. Use ",e.jsx(n.code,{children:"React.Children.map"}),`
along with `,e.jsx(n.code,{children:"React.cloneElement()"})]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"React.isValidElement()"}),` if you want to make sure it's a React component and not a regular DOM
node.`]}),`
`,e.jsx(n.li,{children:"If you're adding any event handlers to the children, make sure you also support existing ones"}),`
`]}),`
`,e.jsx(n.h4,{id:"logic-flow",children:"Logic Flow"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`If vs. Switch: use switch statements when code branching is determined by the value of a single
variable or expression.`}),`
`,e.jsx(n.li,{children:`Nested Ternaries: maximum two levels and only if it's very obvious. If you have two or more
levels, try rewriting it as if/else statements and compare the complexity & scanability.`}),`
`,e.jsxs(n.li,{children:[`Opt for
`,e.jsx(n.a,{href:"https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c",rel:"nofollow",children:"pure functions"}),`
wherever possible. They make unit testing easier and always behave as expected. Because React can
be a bit of a magic black box, sometimes `,e.jsx(n.code,{children:"this.x"})," values are not what you expect."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`foo(number, bar) => {
  return number * bar
}

foo(this.number, this.bar);

// is a much better option than

foo() => {
  return this.number * this.bar
}

foo();
`})}),`
`,e.jsx(n.h4,{id:"server-side-rendering",children:"Server Side Rendering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["In order to support SSR, we cannot reference global objects (",e.jsx(n.code,{children:"window"}),", ",e.jsx(n.code,{children:"document"}),`, etc.) before a
component is hydrated/mounted.`]}),`
`,e.jsxs(n.li,{children:["Generally, it is only safe to use these freely within ",e.jsx(n.code,{children:"componentDidMount"}),", ",e.jsx(n.code,{children:"useEffect"}),` and
`,e.jsx(n.code,{children:"useLayoutEffect"}),"."]}),`
`,e.jsxs(n.li,{children:["This means that any reference to ",e.jsx(n.code,{children:"window"})," or ",e.jsx(n.code,{children:"document"}),` should be avoided wherever possible within
the global scope, constructors, and render methods.`]}),`
`,e.jsxs(n.li,{children:[`If you need to reference these variables in these avoided places, you must check whether it's
undefined first (e.g. `,e.jsx(n.code,{children:"typeof window !== 'undefined'"}),")"]}),`
`,e.jsxs(n.li,{children:[`Be particularly careful when initializing default props or state with something stored on the
`,e.jsx(n.code,{children:"window"}),"/",e.jsx(n.code,{children:"document"}),` objects. These initializations will have to be skipped for SSR contexts
(assign `,e.jsx(n.code,{children:"undefined"})," or ",e.jsx(n.code,{children:"null"}),") and updated upon mounting."]}),`
`]}),`
`,e.jsx(n.h2,{id:"code-style",children:"Code Style"}),`
`,e.jsx(n.h4,{id:"default-props",children:"Default Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"defaultProps"}),` whenever you find yourself checking for the existence of something before
executing branching logic. It significantly reduces conditionals, facilitating easier testing and
less bugs.`]}),`
`,e.jsx(n.li,{children:`We prefer to colocate our default props and destructure them which allows consumers to rename our
components on import.`}),`
`,e.jsx(n.li,{children:`Note: If you assign a default value to a prop, make sure to make the prop as optional in the
interface.`}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const someInterface {
  /**
   * If true, sets the Checkbox checked to true
   * @default false
   */
  checked?: boolean;
   /**
   * If true, set the Checkbox to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The value of the Checkbox.
   */
  value?: string;
}
//...
const {checked = false, disabled = false, value} = this.props;
`})}),`
`,e.jsx(n.h4,{id:"element-choice",children:"Element Choice"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Use the correct native element wherever possible. This enables us to get as much behavior for free
from the browser.`}),`
`,e.jsxs(n.li,{children:["For example, if something peforms an action on a click, it should generally use a ",e.jsx(n.code,{children:"button"}),` to get
keypress handling for free.`]}),`
`]}),`
`,e.jsx(n.h4,{id:"styled-components",children:"Styled Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Always initialize styled components outside of your render function. Failing to do this will
result in a big performance hit.`}),`
`,e.jsxs(n.li,{children:[`When specifying the props a styled component can accept, it is up to you do define how restrictive
you should be. You can accept any prop that the component accepts (e.g.
`,e.jsx(n.code,{children:"styled('div')<ComponentProps>"}),`) or only accept a subset (e.g.
`,e.jsx(n.code,{children:"styled('div')<Pick<ComponentProps, 'someProp' | 'anotherProp'>>"}),")"]}),`
`,e.jsxs(n.li,{children:["We generally prefer the use of ",e.jsx(n.code,{children:"styled"})," components over using the ",e.jsx(n.code,{children:"css"})," function. However, ",e.jsx(n.code,{children:"css"}),`
can be handy for some basic styling.`]}),`
`]}),`
`,e.jsx(n.h4,{id:"exports",children:"Exports"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://basarat.gitbook.io/typescript/main-1/defaultisbad",rel:"nofollow",children:"Avoid default exports"})}),`
`,e.jsxs(n.li,{children:["Export everything else as a named export (",e.jsx(n.code,{children:"export * from ..."}),`). Consider the naming of the things
you're exporting (interfaces, enums, etc.) so you don't encounter any clashes.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// inside MyComponent/index.ts
export * from './lib/MyComponent';
export * from './lib/AnotherComponent';
`})}),`
`,e.jsx(n.h2,{id:"documentation",children:"Documentation"}),`
`,e.jsx(n.h4,{id:"readmes",children:"Readmes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Follow our README template"}),`
`,e.jsxs(n.li,{children:["Outline static properties (e.g. ",e.jsx(n.code,{children:"Button.Type"}),"), required props, and optional props"]}),`
`,e.jsx(n.li,{children:`Usage example should be as standalone as possible. As long as it's not too complex, this snippet
should be a working implementation so consumers can copy/paste`}),`
`]}),`
`,e.jsx(n.h4,{id:"storybook-structure",children:"Storybook Structure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Always opt for the most referenceable code in your stories. Storybook helps us test, but many
consumers use it as an example of how to implement components.`}),`
`,e.jsx(n.li,{children:"Avoid helper functions to reduce duplication that make it harder to parse."}),`
`,e.jsx(n.li,{children:"Avoid sharing wrappers, components, etc. from other story files."}),`
`,e.jsx(n.li,{children:"Essentially, try to keep each example as standalone and referencable as possible."}),`
`]}),`
`,e.jsx(n.h4,{id:"prop-descriptions",children:"Prop Descriptions"}),`
`,e.jsxs(n.p,{children:["We use ",e.jsx(n.a,{href:"https://devdocs.io/jsdoc/",rel:"nofollow",children:"JSDoc"})," standards for our prop type definitions."]}),`
`,e.jsxs(n.p,{children:["The base pattern for prop descriptions is: ",e.jsx(n.code,{children:"The <property> of the <component>."})," For example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
  * The value of the Checkbox.
  */
value?: string;
`})}),`
`,e.jsxs(n.p,{children:["Be as specific as possible. For example, suppose there is a ",e.jsx(n.code,{children:"label"})," prop for ",e.jsx(n.code,{children:"Checkbox"}),` which
specifies the text of the label. Rather than describe `,e.jsx(n.code,{children:"label"})," as ",e.jsx(n.code,{children:"The label of the Checkbox"}),`, the
following is preferable:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
  * The text of the Checkbox label.
  */
label?: string;
`})}),`
`,e.jsx(n.p,{children:"Feel free to provide additional detail in the description:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
 * The value of the Slider. Goes to 11.
 */
value: number;
`})}),`
`,e.jsxs(n.p,{children:["Be sure to specify a proper ",e.jsx(n.code,{children:"@default"}),` for enum props. Listing the named values which are accepted
by the enum prop is encouraged:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
  * The side from which the SidePanel opens. Accepts \`Left\` or \`Right\`.
  * @default SidePanelOpenDirection.Left
  */
openDirection?: SidePanelOpenDirection;
`})}),`
`,e.jsxs(n.p,{children:["Use a modified pattern for function props: ",e.jsx(n.code,{children:"The function called when <something happens>."}),` For
example:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
  * The function called when the Checkbox state changes.
  */
onChange?: (e: React.ChangeEvent) => void;
`})}),`
`,e.jsxs(n.p,{children:["The pattern for booleans is also different: ",e.jsx(n.code,{children:"If true, <do something>."}),` For standard 2-state
booleans, set `,e.jsx(n.code,{children:"@default false"})," in the description. For example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
  * If true, set the Checkbox to the disabled state.
  * @default false
  */
disabled?: boolean;
`})}),`
`,e.jsxs(n.p,{children:["Provide additional detail for 2-state booleans where the ",e.jsx(n.code,{children:"false"})," outcome cannot be inferred:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
  * If true, center the Header navigation. If false, right-align the Header navigation.
  * @default false
  */
centeredNav?: boolean;
`})}),`
`,e.jsxs(n.p,{children:[`For 3-state booleans, you will need to describe all 3 cases:
`,e.jsx(n.code,{children:"If true <do something>. If false <do something else>. If undefined <do yet another thing>."})]}),`
`,e.jsx(n.p,{children:"We also recommend the following pattern for errors:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
  * The type of error associated with the Checkbox (if applicable).
  */
error?: ErrorType;
`})}),`
`,e.jsxs(n.p,{children:[`Occasionally, you may encounter props which don't play nicely with the suggested guidelines. Rather
than following the patterns to the letter, adjust them to provide a better description if necessary.
For example, rather than ambiguously describing `,e.jsx(n.code,{children:"id"})," as ",e.jsx(n.code,{children:"The id of the Checkbox"}),`, provide a more
explicit description:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
  * The HTML \`id\` of the underlying checkbox input element.
  */
id?: string;
`})})]})}function m(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
