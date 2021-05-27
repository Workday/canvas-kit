# Canvas Kit Labs

<img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />

This is a group of work-in-progress components. Canvas Kit Labs is an incubator for new and
experimental components. Since we have a rather rigorous process for getting components in at a
production level, it can be valuable to make them available earlier while we continuously iterate on
the API, functionality and accessibility. The Labs components allow us to do that as needed.

Note: components in Labs do not require a full design or accessibility review. Use them at your own
risk.

Generally, Canvas Kit Labs components are promoted to [Canvas Kit Preview](../preview-react) before
being promoted into the universal module `@workday/canvas-kit-react`. Essentially, Canvas Kit Labs
is for alpha components and Canvas Kit Preview is for beta components.

## Breaking Changes

Due to the nature of this bundle of components, we will be continuously iterating, likely making
breaking changes. The goal of this bundle is to work unconstrained by our design system's semantic
versioning. This means that **breaking changes can be deployed to Labs modules at any time and it
will not trigger a major version bump across our other modules**. Regardless of the fact that we use
a fixed version number for all components, all changes/additions in this bundle will never result in
a major version bump across our component library.

**By consuming any of these modules, you acknowledge the potential complexity of updating and
ultimately performing a migration when components are promoted to a stable version.**

**These components are purely opt in**, so they are not included in the main module
`@workday/canvas-kit-react`.

## Support

- Docs & examples
- Change announcements & migration strategies
- Breaking changes can happen at any time
- Updates or promotion to Canvas Kit Preview may require signficant refactoring
- Direct support when we have capacity, but we prioritize Preview and Main components first

## Module Structure

```
/modules
  ...
  /labs-react
    /new-component
      /* Standard React component structure */
```

## Creating a Canvas Kit Labs Component

1. Run `yarn create-component`
2. When asked `What category should this component live in?`, select `Labs (alpha)`.
3. Your new module will be generated in accordance with the file structure above. It will get a
   package name of `@workday/canvas-kit-labs-react/<COMPONENT>`.
4. If you had the storybook server running, you may need to restart it.

## Migrating a Component into Canvas Kit Labs

1. Copy it into the above module structure
2. Add a warning to the README:
   > <a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
   >   <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
   > </a>  This component is work in progress and currently in pre-release.
3. Update any necessary paths (links to storybook utils, tsconfig, etc.)
4. Change the storybook paths to add a `Labs` prefix (e.g. `Labs/Menu/Default`)

## Promoting a Component out of Canvas Kit Labs

1. Run `yarn promote-component`
