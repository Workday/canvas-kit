---
source_file: docs/mdx/DOCUMENTATION_GUIDELINES.mdx
live_url: https://workday.github.io/canvas-kit/docs/mdx/DOCUMENTATION_GUIDELINES
---
<Meta title="Guides/Documentation Guidelines" />

# Documentation Guidelines

## Introduction

### Writing Style

Google provides [helpful resources](https://developers.google.com/tech-writing/overview) for how to
write technical documentation. We highly recommend you familiarize yourself with their materials
when authoring documentation for Canvas Kit.

### Conventions

Placeholder content throughout this document is enclosed in brackets as `[placeholder]`. For
example, if you were writing component documentation for `Tabs`, you would replace:

```tsx

```

with:

```tsx

```

## Component Documentation

Every component MDX (with a few [exceptions](#component-families)) should follow the structure
outlined below.

````md
<!--
Import components which will be used to render documentation in the MDX file.
The Specifications import is optional; only include it if the Specifications
section exists (see below).
-->

<!--
Import the component so we can pass it into the Storybook Meta tag (see
below).
-->

<!--
MDX file should refer to *.stories.ts/js file with CSF stories
-->

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

```sh
yarn add @workday/canvas-kit-[preview-|labs-]react
```

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
<!-- Could not find example code for Basic -->

<!--
Feel free to include supplemental or follow-up information about the example
underneath the ExampleCodeBlock (if necessary).
-->

More information about the Basic Example.

### Another Example

Description of Another Example.

<!-- Could not find example code for AnotherExample -->

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
<!-- API Reference for [Component] not found -->

<!--
The Specifications section is optional. Only include it if the component has
Cypress integration tests (i.e., a spec.ts file in the cypress/integration
folder).
-->

## Specifications

### Specifications for [Component]

<!-- Component specifications from [Component].spec.ts -->

````

> **Note:** Refer to [Tabs](/components/containers/tabs/) and [Modal](/components/popups/modal/) for
> examples of how to write well-structured component documentation.

### Component Families

Occasionally, you may want to document multiple top-level components (i.e., _not_ subcomponents) on
a single page. For example, we document `PrimaryButton`, `SecondaryButton`, `TertiaryButton`, and
`DeleteButton` on a single page for all [Button](/components/buttons/button/) components since
they're all similar.

Upon identifying a `ComponentFamily` name (e.g., `Button`) for the collection of related components,
you'll then follow the same document structure defined above with slight modifications.

````md
<!-- Only

<Meta of={ComponentFamilyStories} />

# Canvas Kit [ComponentFamily]

Short description of ComponentFamily.

## Installation

```sh
yarn add @workday/canvas-kit-[preview-|labs-]react
```

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
<!-- No description available for Component1 -->

Description of Component1Example.

<!-- Could not find example code for Component1Example -->

More information about Component1Example.

<!--
If necessary, you may add more examples for a single component within that
component's Usage section.
-->

#### Another Component1 Example

### Component2

Description of Component2Example.

<!-- Could not find example code for Component2Example -->

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

<!-- API Reference for [Component1] not found -->
<!-- API Reference for [Component2] not found -->
...

<!--
Typically, all components within a family will share the same specifications
file.
-->

## Specifications

### Specifications for [ComponentFamily]

<!-- Component specifications from [ComponentFamily].spec.ts -->

````

> **Note:** Refer to [Button](/components/buttons/button/) for an example of how to write
> well-structured component family documentation.
