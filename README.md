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

## Reporting a Bug

If you spot a bug, inconsistency, or typo, please
[open a bug issue](https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md).
Better yet, submit a pull request to address it.

## Feature Requests

If you have an idea, we would love to hear about it. The best way to suggest a feature is to
[open a feature issue](https://github.com/Workday/canvas-kit/issues/new?labels=feature&template=feature.md).
The Canvas Kit core team will take a look and discuss it with you.

## Contributing

Want to contribute to Canvas Kit React? Please read our
[contributing guidelines](https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--page) to find out more and how to get
started.

## Maintaining

If you're a Canvas Kit maintainer, please read our
[maintaining docs](https://workday.github.io/canvas-kit/?path=/docs/guides-maintaining--page) to learn more about our processes.

## Open Development

All work on the Canvas Kit happens directly on [GitHub](https://github.com/Workday/canvas-kit). Both
core team members and external contributors can send pull requests which go through the same review
process. Any and all issues are public and available for discussion.

## Versioning

Canvas Kit follows [semantic versioning](https://semver.org/) and is enforced automatically by
[conventional commits](https://www.conventionalcommits.org/) (see
["Commit Message Format"](https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--page#commit-message-format)).

Each module is independently versioned using [Lerna](https://github.com/lerna/lerna).

## Version Support

At any given time, we support three major versions of Canvas Kit: previous, current, and next. Each
of these has different levels of support.

The previous major version is stable for production and will receive patch updates as needed, but
there will be no new features added. Patch releases are automatically deployed upon merge by GitHub
Actions.

The current major version is also stable and receives new features and patch updates. Patch releases
are automatically deployed upon merge by GitHub Actions, and minor releases are manually deployed at
the end of each sprint.

The next major version is typically an unstable environment and has major breaking changes. You are
welcome to pull this version down for local development and experimentation, but we generally
recommend against using it in production until the first stable version has been released.

## Developer Documentation

- [Contributing](https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--page)
- [Code of Conduct](https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--page#code-of-conduct)
- Upgrade Guides:
  - [v4.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v4-0--page)
  - [v5.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v5-0--page)
  - [v6.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v6-0--page)
  - [v7.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v7-0--page)
  - [v8.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v8-0--page)
  - [v9.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v9-0--page)
  - [v10.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v10-0--page)
- Code Style / Best Practices:
  - [API & Pattern Guidelines](https://workday.github.io/canvas-kit/?path=/docs/guides-api-pattern-guidelines--page)
  - [Compound Components](https://workday.github.io/canvas-kit/?path=/docs/guides-compound-components--page)
  - [Creating Compound Components](https://workday.github.io/canvas-kit/?path=/docs/guides-creating-compound-components--page)
  - [Testing](https://workday.github.io/canvas-kit/?path=/docs/guides-testing--page)

## License

The Workday Canvas Kits are licensed under the Apache 2.0 License.

## Supported Browsers

- Microsoft Edge: last 2 versions
- Mozilla Firefox: last 2 versions
- Google Chrome: last 2 versions
- Apple Safari: last 2 versions
- Opera: last 2 versions

## Thank you

Visual Testing by [ChromaticQA](https://www.chromaticqa.com/)

Builds by [Github Actions](https://docs.github.com/en/actions)
