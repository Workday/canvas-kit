# Canvas Kit Preview

<img src="https://img.shields.io/badge/PREVIEW-beta-blueviolet" alt="PREVIEW: Beta" />

This is a group of coming-soon components that have had a full design and a11y review, and are
approved for use in product. Their functionality and design are set, but the APIs and/or underlying
architecture could still be subject to change. This bundle serves as a staging ground for components
that are ready to use, but may not be up to the high code standards upheld in the main
`@workday/canvas-kit-react` bundle.

Generally, Canvas Kit Preview components were originally in [Canvas Kit Labs](../labs-react) and
have been promoted. Essentially, Canvas Kit Labs is for alpha components and Canvas Kit Preview is
for beta components.

## Breaking Changes

Due to the nature of this bundle of components, we will be continuously iterating. This could
potentially mean a breaking change (though much less likely than Labs components). The goal of this
bundle is to work unconstrained by our design system's semantic versioning. This means that
**breaking changes can be deployed to Preview modules at any time and it will not trigger a major
version bump across our other modules**. Regardless of the fact that we use a fixed version number
for all components, all changes/additions in this bundle will never result in a major version bump
across our component library. Should breaking changes arise, we will provide strong communication
and migration strategies.

**By consuming any of these modules, you acknowledge the potential complexity of updating and
ultimately performing a migration when components are promoted to a stable version.**

**These components are purely opt in**, so they are not included in the main module
`@workday/canvas-kit-react`.

## Support

- Docs & examples
- Change announcements & migration strategies
- Longer stretches between any potential breaking changes
- Migration to main module might still require some effort
- Direct support is available, but we prioritize Main components first

## Module Structure

```
/modules
  ...
  /preview-react
    /new-component
      /* Standard React component structure */
```

## Creating a Canvas Kit Preview Component

1. Run `yarn create-component`
2. When asked `What category should this component live in?`, select `Preview (beta)`.
3. Your new module will be generated in accordance with the file structure above. It will get a
   package name of `@workday/canvas-kit-preview-react/<COMPONENT>`.
4. If you had the storybook server running, you may need to restart it.

## Promoting a Component out of Canvas Kit Preview

1. Run `yarn promote-component`
