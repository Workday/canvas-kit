# Contributing to Canvas

On behalf of the Canvas team, thank you so much for your contribution to this project and being a
part of the community. Before you contribute, please take a moment and look through the following
sections:

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Style Guide](#style-guide)
- [Environment Setup](#environment-setup)
- [Signing the CLA](#signing-the-cla)
- [Roadmap](#feature-roadmap)
- [FAQ](#faq)

## Code of Conduct

At Workday, we are committed to a culture of integrity, innovation, and fun. That culture extends to
the community that we are building here through Canvas. By participating in it, you are expected to
uphold this [code of conduct](./CODE_OF_CONDUCT.md).

## Getting Started

### Open Development

All work on the Canvas Kit happens directly on [GitHub](https://github.com/Workday/canvas-kit). Both
core team members and external contributors can send pull requests which go through the same review
process. Any and all issues are public and available for discussion.

### Versioning

Canvas Kit follows [semantic versioning](http://semver.org/) and is enforced automatically by
[conventional commits](https://www.conventionalcommits.org/) (see
["Commit Message Format"](commit-message-format)).

Each module is independently versioned using [Lerna](https://github.com/lerna/lerna).

### [Reporting Bugs](https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md)

If you spot a bug, inconsistency, or typo, please open a bug issue. Better yet, submit a pull
request to addresses it.

### [Feature Requests](https://github.com/Workday/canvas-kit/issues/new?labels=feature&template=feature.md)

If you have an idea, we would love to hear about it. The best way to suggest a feature is to open up
a
[feature issue](https://github.com/Workday/canvas-kit/issues/new?labels=feature&template=feature.md).
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

#### Commit Descriptions

> **DO**

- Explain the additions/edits/fixes made in your staged changes. If you cannot describe it within
  ~50 characters, you should be breaking it into multiple commits
- Use the imperative mood (e.g. "fixed", not "fix")
- Start with a verb
- Use the body of the commit if more context is needed
- If you have similar/identical commits one after another (i.e. snapshot updates), consider using
  `--amend` or squashing.

> **DON'T**

- Don't use generic messages (e.g. "fix: Clean up code", "fix: Address review feedback", etc.)
- Don't describe the problem that was being solved (e.g. "fix: State was broken")
- Don't be too brief. Avoid one word descriptions. Anyone with context should have a good idea of
  what your commit does without having to look at it.
- Don't end with a period

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

### Branches

- Create branches for each feature you develop
- Branch names should be a description of the feature being implemented/bug being fixed (i.e.
  `my-feature`).
- Prefer dashes over camelCasing in branch names.

### The Four Principles

The following are the four magic git principles. Whenever you're making a change that will affect
the git tree, consider each of these items and your history will always look the way it should!

1. **Never merge a branch into anything other than the `master` branch** (unless there's an internal
   `devel` branch).
1. **Never merge the `master` branch into another branch.**
1. To pull in another branch's changes: either rebase on top of it (if it's still in development),
   or rebase on top of `master` once the other branch has been merged.
1. A branch should always be rebased on the _latest_ version of `master` before being merged.

### Pull Requests

Before opening a pull request, make sure your branch is rebased onto master. Before rebasing, run
`git fetch` to ensure you have the lastest version of the remote branch.

Examples:

- `git rebase --onto origin/master HEAD^^^` (3 carats for 3 commits)
- `git rebase --onto origin/master {SHA}^` (where `{SHA}` is the first commit of your branch)

You can use the first example if you've only got a few commits. If you have more than that, the
second is an easier option. As you rebase, you may have to resolve some conflicts if the same code
has been changed in the `master` branch.

If you have been pushing to `origin/your-branch`, you will have to force push after rebasing:
`git push origin/your-branch --force-with-lease`.

Depending on the protection settings of the repository you're working on, your branch may require
approval in Github before it can be merged.

## Style Guide

Refer to the [API & Pattern Guidelines](API_PATTERN_GUIDELINES.md).

Rules are enforced using [TSLint](https://palantir.github.io/tslint/) and code formatting is
provided through [Prettier](prettier.io).

To lint using TSLint, use `yarn lint`. To format and lint your code (careful - this can rewrite
files), use `yarn format`.

Code formatting will occur automatically before `git commit` for files staged using `git add`.

## Environment Setup

_TODO_

### Linting

### VS Code

#### Jest Plugin for VS Code

#### Linting Plugin for VS Code

## Signing the CLA

_TODO_

Each Contributor (“You”) represents that such You are legally entitled to submit any Contributions
in accordance with these terms and by posting a Contribution, you represent that each of Your
Contribution is Your original creation.

You are not expected to provide support for Your Contributions, except to the extent You desire to
provide support. You may provide support for free, for a fee, or not at all. Unless required by
applicable law or agreed to in writing, You provide Your Contributions on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any
warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR
PURPOSE.

## Feature Roadmap

_TODO_

## FAQ

### Stale local modules
