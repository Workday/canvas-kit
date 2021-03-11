# Canvas Kit Labs

This is a group of work-in-progress components. Canvas Kit Labs is an incubator for new and
experimental components. Since we have a rather rigorous process for getting components in at a
production level, it can be valuable to make them available earlier while we continuously iterate on
the API/functionality. The Labs modules allow us to do that as needed.

## Breaking Changes

Due to the nature of this bundle of components, we will be continuously iterating, likely making
breaking changes. The goal of this bundle is to work unconstrained by our design system's semantic
versioning. This means that **breaking changes can be deployed to Labs modules at any time and it
will not trigger a major version bump across our other modules**. Regardless of the fact that we use
a fixed version number for all components, all changes/additions in this bundle will never result in
a major version bump across our component library.

**By consuming any of these modules, you acknowledge the potential complexity of updating and
ultimately performing a migration when components are promoted to a stable version.**

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
2. When asked `What category should this component live in?`, select `Labs (beta)`.
3. Your new module will be generated in accordance with the file structure above. It will get a
   package name of `@workday/canvas-kit-labs-<TARGET>/<COMPONENT>`.
4. If you had the storybook server running, you may need to restart it.

## Migrating a Component into Canvas Kit Labs

1. Copy it into the above module structure
2. Add a warning to the README:
   > <a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
   >   <img src="https://img.shields.io/badge/LABS-beta-orange" alt="LABS: Beta" />
   > </a>  This component is work in progress and currently in pre-release.
3. Update any necessary paths (links to storybook utils, tsconfig, etc.)
4. Change the storybook path to add a `Labs` prefix (e.g. `Labs/Menu/Default`)

## Promoting a Component out of Canvas Kit Labs

1. Move the module folder from `modules/labs-react` to `modules/react`
2. Remove the warning from the README
3. Update any necessary paths (links to storybook utils, tsconfig, etc.)

**Note**: When components are promoted from Canvas Kit Labs, their old namespace is left orphaned in
npm, so these version will still be available and will never be overwritten.
