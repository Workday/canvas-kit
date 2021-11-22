# Workday Canvas Kit

This project provides a set of components for the Workday Canvas Design System that can be used to
implement user experiences consistent with
[Workday's design principles](https://design.workday.com/).

<a href="./LICENSE">
  <img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="Workday Canvas Kit is released under the Apache-2.0 license" />
</a>
<a href="https://lerna.js.org">
  <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
</a>
<a href="https://github.com/Workday/canvas-kit/actions/workflows/release.yml">
  <img alt="Release" src="https://github.com/Workday/canvas-kit/actions/workflows/release.yml/badge.svg">
</a>
<a href="./modules/docs/mdx/CONTRIBUTING.mdx">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" />
</a>

---

_For a list of available react modules see
[Canvas Kit Component Status](./modules/docs/mdx/COMPONENT_STATUS.mdx)_

## Getting started

### React

**Installation**

To get started using Canvas kit React first add or install the module to your existing React project

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
npm install @workday/canvas-kit-react
```

**Usage**

```tsx
import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react';

<SecondaryButton>Button Label</SecondaryButton>;
```

### CSS

**Installation**

To get started using Canvas kit CSS first add or install the module to your project

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
npm install @workday/canvas-kit-css
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

**Usage**

```scss
@import '~@workday/canvas-kit-css/index.scss';
```

**You must have PostCSS support.** Add the
[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) plugin to properly process and
inline icons. Process your SASS through PostCSS once it has been compiled to CSS.

```html
<button class="wdc-btn">Button Label</button>
```

## Reporting a Bug

If you spot a bug, inconsistency, or typo, please
[open a bug issue](https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md).
Better yet, submit a pull request to addresses it.

## Feature Requests

If you have an idea, we would love to hear about it. The best way to suggest a feature is to
[open a feature issue](https://github.com/Workday/canvas-kit/issues/new?labels=feature&template=feature.md).
The Canvas Kit core team will take a look and discuss it with you.

## Contributing

Want to contribute to Canvas Kit React? Please read our
[contributing guidelines](./modules/docs/mdx/CONTRIBUTING.mdx) to find out more and how to get
started.

## Open Development

All work on the Canvas Kit happens directly on [GitHub](https://github.com/Workday/canvas-kit). Both
core team members and external contributors can send pull requests which go through the same review
process. Any and all issues are public and available for discussion.

## Versioning

Canvas Kit follows [semantic versioning](https://semver.org/) and is enforced automatically by
[conventional commits](https://www.conventionalcommits.org/) (see
["Commit Message Format"](./modules/docs/mdx/CONTRIBUTING.mdx#commit-message-format)).

Each module is independently versioned using [Lerna](https://github.com/lerna/lerna).

## Version Support

At any given time, we support three major versions of Canvas Kit: previous, current, and next. Each
of these have different levels of support.

The previous major version is stable for production and will receive patch updates as needed, but there
will be no new features added. Patch releases are automatically deployed upon merge by GitHub
Actions.

The current major version is also stable and receives new feature and patch updates. Patch releases are
automatically deployed upon merge by GitHub Actions, and minor releases are manually deployed at the
end of each sprint.

The next major version is typically an unstable environment and has major breaking changes. You are
welcome to pull this version down for local development and experimentation, but we generally
recommend against using it in production until the first stable version has been released.

## Developer Documentation

- [Contributing](./modules/docs/mdx/CONTRIBUTING.mdx)
- [Code of Conduct](./modules/docs/mdx/CODE_OF_CONDUCT.md)
- [Component Status](./modules/docs/mdx/COMPONENT_STATUS.mdx)
- Migration Guides:
  - [v4.0 Migration Guide](./modules/docs/mdx/4.0-MIGRATION-GUIDE.mdx)
  - [v5.0 Migration Guide](./modules/docs/mdx/5.0-MIGRATION-GUIDE.mdx)
  - [v6.0 Migration Guide](./modules/docs/mdx/6.0-MIGRATION-GUIDE.mdx)
- Code Style / Best Practices:
  - [API & Pattern Guidelines](./modules/docs/mdx/API_PATTERN_GUIDELINES.mdx)
  - [Compound Components](./modules/docs/mdx/COMPOUND_COMPONENTS.mdx)
  - [Creating Compound Components](./modules/docs/mdx/CREATING_COMPOUND_COMPONENTS.mdx)
  - [Testing](./modules/docs/mdx/TESTING.mdx)

## License

The Workday Canvas Kits are licensed under the Apache 2.0 License.

## Supported Browsers

- IE11
- Microsoft Edge: last 2 versions
- Mozilla Firefox: last 2 versions
- Google Chrome: last 2 versions
- Apple Safari: last 2 versions
- Opera: last 2 versions

## Thank you

Visual Testing by [ChromaticQA](https://www.chromaticqa.com/)

Builds by [Github Actions](https://docs.github.com/en/actions)
