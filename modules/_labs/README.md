# Canvas Kit Labs

This is a group of unstable/work in progress components.

Since we have a rather rigorous process for getting components in at a production level, it can be
valuable to make them available earlier for teams who need them during development. Many of our
components are contributions from internal product teams. While these components can suit the
contributing product's use case, it takes time to iterate on the API/functionality as we evaluate
them in a more global context. The Labs modules allow us to do that as needed.

## Breaking Changes

Due to the nature of this bundle of components, we will be continuously iterating, likely making
breaking changes. The goal of these module is to work unconstrained by our design system's semantic
versioning. This means that **breaking changes can be deployed to labs modules at any time and it
will not trigger a major version bump across our other modules**. Since we use a fixed version
number for all components, all changes/additions in this bundle will never result in a major version
bump across our component library.

**By consuming any of these modules, you are indicating that you are prepared for the consequences
of updating and ultimately performing a migration when components are promoted to a stable
version.**

**These components are purely opt in**, so they are not included in the universal modules
`@workday/canvas-kit-css` and `@workday/canvas-kit-react`.

## Module Structure

```
/modules
  ...
  /_labs
    /new-component
      /css
        /* Standard CSS component structure */
      /react
        /* Standard React component structure */
```

## Creating a Canvas Kit Labs Module

1. Run `yarn create-module`
2. When asked `Is this an unstable component? [Y/n]`, enter `y` or `Y`.
3. Your new module will be generated in accordance with the file structure above. It will get a
   package name of `@workday/canvas-kit-labs-<TARGET>-<COMPONENT>`.

## Migrating a Component into Canvas Kit Labs

1. Copy it into the above module structure
2. Change the package name in `package.json` to `@workday/canvas-kit-labs-<TARGET>-<COMPONENT>`
3. Add a warning to the README:
   > <a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
   >   <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
   > </a>  This component is work in progress and currently in pre-release.
