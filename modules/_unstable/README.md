# Canvas Kit Unstable

This module is a sandbox for work in progress components.

Since we have a rather rigorous process for getting components in at a production level, it can be
valuable to make them available earlier for teams who need them during development. Many of our
components are contributions from internal product teams. While these components can suit the
contributing product's use case, it takes time to iterate on the API/functionality as we evaluate
them in a more global context. The Unstable module allows us to do that as needed.

## Breaking Changes

Due to the nature of this bundle of components, we will be continuously iterating, likely making
breaking changes. The goal of this module is to work unconstrained by our design system's semantic
versioning. This means that **breaking changes can be deployed to
`@workday/canvas-kit-react-unstable` or `@workday/canvas-kit-css-unstable` at any time and it will
not trigger a major version bump across our other modules**. Since we use a fixed version number for
all components, all changes/additions to this module will never result in a major version bump across
our component library.

**By consuming this module, you are indicating that you are prepared for the consequences of
updating and ultimately performing a migration when components are promoted to a stable version.**

**This bundle of components is purely opt in**, so it is not included in the universal modules
`@workday/canvas-kit-css` and `@workday/canvas-kit-react`

## Module Structure

```
/modules
  ...
  /_unstable
    /new-component
      /css
        /* Standard CSS component structure */
      /react
        /* Standard React component structure */
```

## Creating an Unstable Module

1. Run `yarn create-module`
2. When asked `Is this an unstable component? [Y/n]`, enter `y` or `Y`.
3. Your new module will be generated in accordance with the file structure above.
