import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as a}from"./index-D_439bJA.js";import"./index-IfJi-UCQ.js";import"./iframe-Bg3fn7F7.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function t(o){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Guides/Documentation Guidelines"}),`
`,n.jsx(e.h1,{id:"documentation-guidelines",children:"Documentation Guidelines"}),`
`,n.jsx(e.h2,{id:"introduction",children:"Introduction"}),`
`,n.jsx(e.h3,{id:"writing-style",children:"Writing Style"}),`
`,n.jsxs(e.p,{children:["Google provides ",n.jsx(e.a,{href:"https://developers.google.com/tech-writing/overview",rel:"nofollow",children:"helpful resources"}),` for how to
write technical documentation. We highly recommend you familiarize yourself with their materials
when authoring documentation for Canvas Kit.`]}),`
`,n.jsx(e.h3,{id:"conventions",children:"Conventions"}),`
`,n.jsxs(e.p,{children:["Placeholder content throughout this document is enclosed in brackets as ",n.jsx(e.code,{children:"[placeholder]"}),`. For
example, if you were writing component documentation for `,n.jsx(e.code,{children:"Tabs"}),", you would replace:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {[Component]} from '@workday/canvas-kit-[preview-|labs-]react/[component]';
`})}),`
`,n.jsx(e.p,{children:"with:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {Tabs} from '@workday/canvas-kit-react/tabs';
`})}),`
`,n.jsx(e.h2,{id:"component-documentation",children:"Component Documentation"}),`
`,n.jsxs(e.p,{children:["Every component MDX (with a few ",n.jsx(e.a,{href:"#component-families",children:"exceptions"}),`) should follow the structure
outlined below.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-md",children:`<!--
Import components which will be used to render documentation in the MDX file.
The Specifications import is optional; only include it if the Specifications
section exists (see below).
-->

import {Specifications, SymbolDoc} from '@workday/canvas-kit-docs';

<!--
Import the component so we can pass it into the Storybook Meta tag (see
below).
-->

import {[Component]} from '@workday/canvas-kit-[preview-|labs-]react/[component]';

<!--
MDX file should refer to *.stories.ts/js file with CSF stories
-->

import \\* as ComponentStories from './Component.stories'

<!--
Use the Storybook Meta tag to designate where to display the component in the
Storybook navigation hierarchy. The title prop specifies where to show the
component in the hierarchy. The component prop is required to get the component
to show up at the end of that path.
-->
<Meta of={ComponentStories} />

# Canvas Kit [Component]

Short description of Component.

## Installation

\`\`\`sh
yarn add @workday/canvas-kit-[preview-|labs-]react
\`\`\`

<!--
The Usage section should be a list of examples of how to use the component.
Aside from having a Basic Example, there are no set rules on how many examples
to include for a given component. Try to include enough examples to illustrate
all common use cases and anything which may not be obvious based on the
component API.
-->

## Usage

<!--
Every component should have a basic example as its first example in the Usage
section. Title the section "Basic Example" for consistency.
-->

### Basic Example

Description of the Basic Example.

<!--
Every example should include an ExampleCodeBlock which renders the example
along with its associated code.
-->
<ExampleCodeBlock code={Basic} />

<!--
Feel free to include supplemental or follow-up information about the example
underneath the ExampleCodeBlock (if necessary).
-->

More information about the Basic Example.

### Another Example

Description of Another Example.

<ExampleCodeBlock code={AnotherExample} />

### More Examples...

<!--
The SymbolDoc component will generate the entire Component API section using
the component's JSDocs. This includes descriptions and props tables for the
component, as well as its subcomponents if it's a compound component.
Documentation for the model will also be included if the component has a model.
-->

## Component API

<!--
The fileName prop is used to disambiguate between components which exist in
multiple Canvas Kit packages.
-->
<SymbolDoc name="[Component]" fileName="/[preview-|labs-]react/" />

<!--
The Specifications section is optional. Only include it if the component has
Cypress integration tests (i.e., a spec.ts file in the cypress/integration
folder).
-->

## Specifications

<Specifications file="./cypress/component/[Component].spec.tsx" name="[Component]" />
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," Refer to ",n.jsx(e.a,{href:"?path=/docs/components-containers-tabs--docs",children:"Tabs"})," and ",n.jsx(e.a,{href:"?path=/docs/components-popups-modal--docs",children:"Modal"}),` for
examples of how to write well-structured component documentation.`]}),`
`]}),`
`,n.jsx(e.h3,{id:"component-families",children:"Component Families"}),`
`,n.jsxs(e.p,{children:["Occasionally, you may want to document multiple top-level components (i.e., ",n.jsx(e.em,{children:"not"}),` subcomponents) on
a single page. For example, we document `,n.jsx(e.code,{children:"PrimaryButton"}),", ",n.jsx(e.code,{children:"SecondaryButton"}),", ",n.jsx(e.code,{children:"TertiaryButton"}),`, and
`,n.jsx(e.code,{children:"DeleteButton"})," on a single page for all ",n.jsx(e.a,{href:"?path=/docs/components-buttons--docs",children:"Button"}),` components since
they're all similar.`]}),`
`,n.jsxs(e.p,{children:["Upon identifying a ",n.jsx(e.code,{children:"ComponentFamily"})," name (e.g., ",n.jsx(e.code,{children:"Button"}),`) for the collection of related components,
you'll then follow the same document structure defined above with slight modifications.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-md",children:`<!-- Only import SymbolDescription if necessary (see below) -->

import {Specifications, SymbolDoc, SymbolDescription} from '@workday/canvas-kit-docs';

import \\* as ComponentFamilyStories from './Component.stories'

<Meta of={ComponentFamilyStories} />

# Canvas Kit [ComponentFamily]

Short description of ComponentFamily.

## Installation

\`\`\`sh
yarn add @workday/canvas-kit-[preview-|labs-]react
\`\`\`

<!--
Unlike the Usage section for a single component, the Usage section for a
component family will not have a Basic Example. Instead, it will have one
section for each component in the family; each section will contain one or
more examples for that particular component.
-->

## Usage

<!--
Each section is named after the component.
-->

### Component1

<!--
Unlike SymbolDoc which renders the entire component API for a given component,
SymbolDescription will only render the JSDoc description for that component.
When writing an example for a component within a family, you _may_ (optional)
want to render its SymbolDescription alongside the example description to
reduce duplicate content between the Usage and Component API sections.
-->
<SymbolDescription name="Component1" fileName="/[preview-|labs-]react/" />

Description of Component1Example.

<ExampleCodeBlock code={Component1Example} />

More information about Component1Example.

<!--
If necessary, you may add more examples for a single component within that
component's Usage section.
-->

#### Another Component1 Example

### Component2

Description of Component2Example.

<ExampleCodeBlock code={Component2Example} />

### More Components...

<!--
You may include more examples at the end of the Usage section for examples
which are not comopnent-specific and apply to every component in the family.
-->

### More Examples...

<!--
Unlike the Component API section for a single component, the Component API
section for a component family will include multiple SymbolDocs, one for each
component in the family.
-->

## Component API

<SymbolDoc name="[Component1]" fileName="/[preview-|labs-]react/" />
<SymbolDoc name="[Component2]" fileName="/[preview-|labs-]react/" />
...

<!--
Typically, all components within a family will share the same specifications
file.
-->

## Specifications

<Specifications file="./cypress/component/[ComponentFamily].spec.tsx" name="[ComponentFamily]" />
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," Refer to ",n.jsx(e.a,{href:"?path=/docs/components-buttons--docs",children:"Button"}),` for an example of how to write
well-structured component family documentation.`]}),`
`]})]})}function x(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{x as default};
