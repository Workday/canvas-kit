# Contributing to Canvas

On behalf of the Canvas team, thank you so much for your contribution to this project and being a
part of the community. Before you contribute, please take a moment and look through the following
sections:

- [Code of Conduct](code-of-conduct)
- [Getting Started](getting-started)
- [How to Contribute](how-to-contribute)
- [Pull Request Guidelines](pull-request-guidelines)
- [Style Guide](style-guide)
- [Environment Setup](feature-roadmap)
- [Signing the CLA](signing-the-cla)
- [Roadmap](feature-roadmap)
- [FAQ](faq)

## Code of Conduct

At Workday, we are committed to a culture of integrity, innovation, and fun. That culture extends to
the community that we are building here through Canvas. By participating in it, you are expected to
uphold this [code of conduct](./CODE_OF_CONDUCT.md).

## Getting Started

### Open Development

All work on the Canvas Kit happens directly on
[GitHub](https://ghe.megaleo.com/design/canvas-kit-react). Both core team members and external
contributors can send pull requests which go through the same review process. Any and all issues are
public and available for discussion.

### Versioning

Canvas Kit follows [semantic versioning](http://semver.org/) and is enforced automatically by
[conventional commits](https://www.conventionalcommits.org/) (see
["Commit Message Format"](commit-message-format)).

Each module is independently versioned using [Lerna](https://github.com/lerna/lerna).

### [Reporting Bugs](https://ghe.megaleo.com/design/canvas-kit-react/issues/new?labels=bug&template=bug.md)

If you spot a bug, inconsistency, or typo, please open a bug issue. Better yet, submit a pull
request to addresses it.

### [Feature Requests](https://ghe.megaleo.com/design/canvas-kit-react/issues/new?labels=feature&template=feature.md)

If you have an idea, we would love to hear about it. The best way to suggest a feature is to open up
a
[feature issue](https://ghe.megaleo.com/design/canvas-kit-react/issues/new?labels=feature&template=feature.md).
The Canvas Kit core team will take a look and discuss it with you.

## How to Contribute

**Don't hesitate to contribute!** Canvas Kit React thrives on open discussion and contribution by
anyone in the Workday community. Contribution doesn't have to be code-based. Anyone can suggest
changes things like documentation, processes, and use cases.

If you are contributing code, please take a look at the following sections to familiarize yourself
with how the Canvas Kit React repo is organized and run. This will help streamline the pull request
process.

### Commit Message Format

Canvas Kit relies on the
[conventional-commit format specification](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification).
By formalizing our commit message format, this allows us to easily generate changelogs and scan
through the commit history. It also automates [semantic versioning](http://semver.org/).

### Automation on commit

Upon commit, [lint-staged](https://github.com/okonet/lint-staged) will run your staged code through
[Prettier](https://prettier.io) and [tslint](https://palantir.github.io/tslint/).

### Storybook

Canvas Kit React utilizes [Storybook](https://storybook.js.org/) for the component development
environment.

### Yarn and Workspaces

Canvas Kit React utilizes Yarn for package management and takes advantage of its support for
[Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to connect all of its different modules
within a single repository.

### Testing

Canvas Kit React uses [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) to test our
React components. Each and every component requires at least 97% unit test coverage and a thorough
set of snapshot tests.

## Pull Request Guidelines

Please refer to our [Git guidelines](https://ghe.megaleo.com/design/styleguide/tree/master/git) when
opening and managing pull requests.

## Style Guide

Standardized code and documentation style helps Canvas Kit stay readable and scannable. When code is
written in a consistent manner we are able to stay more agile while catching and fixing bugs sooner.
Please take a moment to familiarize yourself with these style guides before opening a pull request.

- https://ghe.megaleo.com/UIC/wd-components/blob/master/docs/STYLEGUIDE.md
- https://sdk.workday.build/appendix/style-guide
- TODO: Link to documentation style guide
- TODO: Link to Canvas Kit component tutorial
  - Emotion, styled components

## Environment Setup

_TODO_

### Linting

### VS Code

#### Jest Plugin for VS Code

#### Linting Plugin for VS Code

## Signing the CLA

_TODO_

## Feature Roadmap

_TODO_

## FAQ

### Stale local modules
