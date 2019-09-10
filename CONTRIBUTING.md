# Contributing to Canvas

On behalf of the Canvas team, thank you so much for your contribution to this project and being a
part of the community. Before you contribute, please take a moment and look through the following
sections:

- [Code of Conduct](#code-of-conduct)
- [Contributor License Agreement](#contributor-license-agreement)
- [Contributing Guidelines](#contributing-guidelines)
  - [How to Contribute](#how-to-contribute)
  - [Git Guidelines](#git-guidelines)
- [Getting Started](#getting-started)
  - [Creating a Module](#creating-a-module)
  - [Exporting a Module](#exporting-a-module)
  - [Building Modules](#building-modules)
  - [Testing Modules](#testing-modules)
  - [Code Style Guide](#code-style-guide)
  - [Editors](#editors)

## Code of Conduct

At Workday, we are committed to a culture of integrity, innovation, and fun. That culture extends to
the community that we are building here through Canvas. By participating in it, you are expected to
uphold this [code of conduct](./CODE_OF_CONDUCT.md) and agree to our CLA.

## Contributor License Agreement

Each Contributor (“You”) represents that such You are legally entitled to submit any Contributions
in accordance with these terms and by posting a Contribution, you represent that each of Your
Contribution is Your original creation.

You are not expected to provide support for Your Contributions, except to the extent You desire to
provide support. You may provide support for free, for a fee, or not at all. Unless required by
applicable law or agreed to in writing, You provide Your Contributions on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any
warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR
PURPOSE.

## Contributing Guidelines

### How to Contribute

**Don't hesitate to contribute!** Canvas Kit thrives on open discussion and contribution by anyone
in the Workday community. Contribution doesn't have to be code-based. Anyone can suggest changes
things like documentation, processes, and use cases.

If you are contributing code, please take a look at the following sections to familiarize yourself
with how the Canvas Kit repo is organized and run. This will help streamline the pull request
process. If you have any questions, please reach out!

#### Automation on Commit

Upon commit, [lint-staged](https://github.com/okonet/lint-staged) will run your staged code through
[Prettier](https://prettier.io) and [tslint](https://palantir.github.io/tslint/).

#### Storybook

Canvas Kit utilizes [Storybook](https://storybook.js.org/) for the component development
environment.

#### Yarn and Workspaces

Canvas Kit utilizes Yarn for package management and takes advantage of its support for
[Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to connect all of its different modules
within a single repository.

#### Testing

Canvas Kit uses [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) to unit test our
React components. Each and every component requires at least 80% unit test coverage and a thorough
set of snapshot tests.

Canvas Kit uses [Cypress](cypress.io) for UI tests. For info on why we chose Cypress, visit
[Why Cypress?](./cypress/WHY_CYPRESS.md) For more information about how to write Cypress tests,
visit [Writing Cypress Tests](./cypress/README.md)

### Git Guidelines

#### Branches

- Create branches for each feature you develop
- Branch names should be a description of the feature being implemented/bug being fixed (i.e.
  `my-feature`).
- Prefer dashes over camelCasing in branch names.

#### Commit Message Format

Canvas Kit relies on the
[conventional-commit format specification](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification).
By formalizing our commit message format, this allows us to easily generate changelogs and scan
through the commit history. It also automates [semantic versioning](http://semver.org/).

#### Commit Descriptions

> **Examples**

```
feat(IconButton): Add ariaLabel prop for accessibility
fix: Add missing static class variable to IconButton and Avatar
```

> **DO**

- Use the commit scope if your change is specific to a component or module
- When in doubt, leave scope out
- Capitalize your description
- Explain the additions/edits/fixes made in your staged changes. If you cannot describe it within
  ~50 characters, you should be breaking it into multiple commits
- Use the imperative mood (e.g. "fix", not "fixed")
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

#### Pull Requests

- All development should happen on a personal fork (including maintainers). This allows us to keep
  the project tree clean and easy to follow, while ensuring everyone has the same developer
  experience.
- Project maintainers are able to push commits to fork PRs, but other contributors will need to open
  PRs to the personal fork to collaborate with others on a feature.
- It is up to the contributor to make sure their PR is rebased onto upstream/master before
  submitting.
- When a pull request passes all checks and reviews, a core maintainer merges via Squash and Merge
  with a link back to the PR.
- The branch will automatically be deleted on merge, but its commits and the branch reference are
  still available via the PR.
- If you have questions about the above policies, please ask :)

#### Releases

- Releases are prepared by updating package versions with `lerna version`, and updating the
  [changelog](./CHANGELOG.md)
- A PR is created for the above updates
- After the release PR is approved and merged, we create a release in GitHub with the contents of
  the changelog updates.
- The GitHub release automatically tags master with the new version, and deploys the new version to
  NPM.

## Getting Started

1.  Clone the respository and run `yarn`
2.  Run `yarn build`
3.  Run `yarn start` to start [Storybook](https://storybook.js.org/)
4.  Visit [http://localhost:9001/](http://localhost:9001/)
5.  To quickly rebuild on file changes, run `yarn watch` in another terminal. This will rebuild
    modules for each file change. **Note** this command will take a lot of memory (1-2GB). If you
    are working on a specific module, you can navigate to the module your are working on and run
    `yarn watch` from there. This will only watch a specific module at a fraction of the memory
    requirements

### Creating a module

1.  Run `yarn create-module`
2.  Enter in a module name and description. You'll be prompted to choose if you also want to create
    a CSS module.
3.  (optional) Add any required dependencies on other modules
4.  (optional) If you added any extra dependencies, run `yarn`
5.  Start Storybook `yarn start`
6.  Navigate to [http://localhost:9001/](http://localhost:9001/) and find your new module's story
7.  Begin editing your new React component in `modules/<MODULE_NAME>/react/index.ts` and CSS module
    in `modules/<MODULE_NAME>/css/index.scss`!

### Exporting a Module

#### React

If your module's `index.ts` has a default export, make sure it is available as a named export as
well. This allows for greater flexibility in how developers consume your module. _Note that
`yarn create-module` should set this up for you by default._

#### CSS

If in the `yarn create-module` flow you reply that you'd like to create a CSS module as well, it
will (in addition to creating required scaffolding):

- Add your module as a package dependency in `modules/_canvas-kit-css/package.json`
- Add an import statement for your module in `modules/_canvas-kit-css/index.scss`

### Building Modules

**`yarn build`**

This will build all modules' CSS and JS.

### Testing Modules

**`yarn test`**

This will start the unit tests and run code coverage.

**`yarn updateSnaps`**

If you know you've made a breaking visual change, use this command to update your snapshot tests.
This will add files to your workspace that you'll need to commit.

### Code Style Guide

Refer to the [API & Pattern Guidelines](API_PATTERN_GUIDELINES.md).

Rules are enforced using [TSLint](https://palantir.github.io/tslint/) and code formatting is
provided through [Prettier](https://prettier.io).

To lint using TSLint, use `yarn lint`. To format and lint your code (careful - this can rewrite
files), use `yarn format`.

Code formatting will occur automatically before `git commit` for files staged using `git add`.

### Editors

Install the Prettier and TSLint plugins for your respective editors for quicker and easier
formatting.

#### Visual Studio Code

Install [prettier-vscode](https://github.com/prettier/prettier-vscode) and
[vscode-tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

Consider adding the following options:

- [Format on save](https://github.com/prettier/prettier-vscode#format-on-save)

#### Atom

Install [prettier-atom](https://github.com/prettier/prettier-atom) and
[linter-tslint](https://github.com/AtomLinter/linter-tslint)

#### Emacs

Install [prettier-emacs](https://github.com/prettier/prettier-emacs) and
[Flycheck](http://www.flycheck.org/)

#### Other Editors

Check [Prettier](https://prettier.io/docs/en/editors.html) and
[TSLint](https://palantir.github.io/tslint/usage/third-party-tools/) documentation for additional
editor plugins.
