# Workday Canvas Kit

This project provides a set of components for the Workday Canvas Design System that can be used to
implement user experiences consistent with
[Workday's design principles](https://design.workday.com/).

<a href="./LICENSE">
  <img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="Workday Canvas Kit is released under the Apache-2.0 license" />
</a>
<a href="https://travis-ci.com/Workday/canvas-kit">
  <img src="https://travis-ci.com/Workday/canvas-kit.svg?token=oZpr7hcrwxtuCsrBb5dT&branch=master" alt="Travis CI">
</a>
<a href="https://lerna.js.org">
  <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
</a>
<a href="./CONTRIBUTING.md">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" />
</a>

---

**:white_check_mark: For a list of available react modules see
[Canvas Kit Component Status](COMPONENT_STATUS.md)**

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
import {Button} from '@workday/canvas-kit-react';

<Button>Button Label</Button>;
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

Want to contribute to Canvas Kit React? Please read our [contributing guidelines](CONTRIBUTING.md)
to find out more and how to get started.

## Open Development

All work on the Canvas Kit happens directly on [GitHub](https://github.com/Workday/canvas-kit). Both
core team members and external contributors can send pull requests which go through the same review
process. Any and all issues are public and available for discussion.

## Versioning

Canvas Kit follows [semantic versioning](http://semver.org/) and is enforced automatically by
[conventional commits](https://www.conventionalcommits.org/) (see
["Commit Message Format"](./CONTRIBUTING.md#commit-message-format)).

Each module is independently versioned using [Lerna](https://github.com/lerna/lerna).

## License

The Workday Canvas Kits are licensed under the Apache 2.0 License.
