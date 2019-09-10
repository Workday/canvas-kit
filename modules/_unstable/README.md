# Canvas Kit Unstable

This module is meant to be a sandbox for work in progress components. Since we have a rather
rigorous process for getting components in at a production level, it can be valuable to make them
available earlier to teams who need them. Many of our components are contributions from internal
product teams. While the components can suit the contributing product's use case, it takes time to
iterate on the API/functionality as we evaluate them in a more global context. The Unstable module
allows us to do that as needed.

## Breaking Changes

Due to the nature of this bundle of components, we will be continuously iterating, likely making
breaking changes. The goal of this module is to work unconstrained by our design systems semantic
versioning. This means that **breaking changes can be deployed to
`@workday/canvas-kit-react-unstable` or `@workday/canvas-kit-css-unstable` at any time and it will
not trigger a major version bump across our other modules**. With that said, anyone who consumes
this module needs to be prepared for the consequences of updating and ultimately performing a
migration when components are promoted to a stable version.

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
