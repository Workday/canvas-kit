import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as s}from"./index-3YbjYt95.js";import{ae as r}from"./index-B2C7rmFn.js";import"./index-IfJi-UCQ.js";import"./iframe-D4Efgt29.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function o(i){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Contributing"}),`
`,e.jsx(n.h1,{id:"contributing-to-canvas",children:"Contributing to Canvas"}),`
`,e.jsx(n.p,{children:`On behalf of the Canvas team, thank you so much for your contribution to this project and being a
part of the community. Before you contribute, please take a moment and look through the following
sections:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#code-of-conduct",children:"Code of Conduct"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#how-to-contribute",children:"How to Contribute"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#communicate-on-issues",children:"Communicate on Issues"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#git-guidelines",children:"Git Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#branches",children:"Branches"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#commit-message-format",children:"Commit Message Format"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#commit-descriptions",children:"Commit Descriptions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#pull-requests",children:"Pull Requests"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#developer-experience",children:"Developer Experience"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#yarn-and-workspaces",children:"Yarn and Workspaces"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#storybook",children:"Storybook"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#testing",children:"Testing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#automation-on-commit",children:"Automation on Commit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#releases",children:"Releases"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#getting-started-developing",children:"Getting Started Developing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#creating-a-module",children:"Creating a Module"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#exporting-a-module",children:"Exporting a Module"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#building-modules",children:"Building Modules"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#testing-modules",children:"Testing Modules"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#code-style-guide",children:"Code Style Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#canvas-kit-labs--preview",children:"Canvas Kit Labs & Preview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#editors",children:"Editors"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#contributor-license-agreement",children:"Contributor License Agreement"})}),`
`]}),`
`,e.jsx(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),`
`,e.jsxs(n.p,{children:[`At Workday, we are committed to a culture of integrity, innovation, and fun. That culture extends to
the community that we are building here through Canvas. By participating in it, you are expected to
uphold our `,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/master/CODE_OF_CONDUCT.md",rel:"nofollow",children:"Code of Conduct"}),`
and agree to our `,e.jsx(n.a,{href:"#contributor-license-agreement",children:"Contributor License Agreement"}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-contribute",children:"How to Contribute"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Don't hesitate to contribute!"}),` Canvas Kit thrives on open discussion and contribution by anyone
in the Workday community. Contribution doesn't have to be code-based. Anyone can suggest changes to
things such as documentation, processes, and use cases.`]}),`
`,e.jsx(n.p,{children:`If you are contributing code, please take a look at the following sections to familiarize yourself
with how the Canvas Kit repo is organized and run. This will help streamline the pull request
process. If you have any questions, please reach out!`}),`
`,e.jsx(n.p,{children:`If your contribution is visual or UI-based, please ensure you consult with a designer or request a
maintainer's help so the contribution can be evaluated as an end-to-end process.`}),`
`,e.jsx(n.h3,{id:"communicate-on-issues",children:"Communicate on Issues"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Create or identify ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues",rel:"nofollow",children:"an issue"})," to work on"]}),`
`,e.jsxs(n.li,{children:[`New contributors are recommended to start with a
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22",rel:"nofollow",children:"good first issue"})]}),`
`,e.jsx(n.li,{children:"Ask our team if the issue is relevant or has attention from other developers"}),`
`,e.jsx(n.li,{children:"Communicate if you'd like to work on the issue"}),`
`,e.jsx(n.li,{children:`Ask questions! You have our support, and you will always need more information than what is in the
issue.`}),`
`]}),`
`,e.jsx(n.h3,{id:"git-guidelines",children:"Git Guidelines"}),`
`,e.jsxs(n.p,{children:[`All development should happen on a personal fork (including maintainers). Fork the
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit",rel:"nofollow",children:"repo"}),` to your personal account, and create a feature branch
for each contribution.`]}),`
`,e.jsx(n.h4,{id:"branches",children:"Branches"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Create branches for each feature you develop"}),`
`,e.jsxs(n.li,{children:[`Branch names should be a description of the feature being implemented/bug being fixed (i.e.
`,e.jsx(n.code,{children:"my-feature"}),")."]}),`
`,e.jsx(n.li,{children:"Prefer dashes over camelCasing in branch names."}),`
`]}),`
`,e.jsx(n.p,{children:`We maintain three major versions of Canvas Kit at any given time: the previous major, the current
major, and the next major version. These versions live in four branches:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"support"})," - the previous major version - patches only, no new features or breaking changes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"master"})," - the current major version - patches and small updates only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"prerelease/minor"})," - the current major version - new features are added here and released in a new minor version."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"prerelease/major"})," - the next major version - patches, new features, and major breaking changes"]}),`
`]}),`
`,e.jsx(n.h4,{id:"commit-message-format",children:"Commit Message Format"}),`
`,e.jsxs(n.p,{children:[`Canvas Kit relies on the
`,e.jsx(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification",rel:"nofollow",children:"conventional-commit format specification"}),`.
By formalizing our commit message format, this allows us to easily generate changelogs and scan
through the commit history. It also automates `,e.jsx(n.a,{href:"https://semver.org/",rel:"nofollow",children:"semantic versioning"}),"."]}),`
`,e.jsx(n.h4,{id:"commit-descriptions",children:"Commit Descriptions"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Examples"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`feat(Button): Add proper hover states for secondary buttons
fix: Add missing static class variable to PrimaryButton and Avatar
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use the commit scope if your change is specific to a component or module"}),`
`,e.jsx(n.li,{children:"When in doubt, leave scope out"}),`
`,e.jsx(n.li,{children:"Capitalize your description"}),`
`,e.jsx(n.li,{children:`Explain the additions/edits/fixes made in your staged changes. If you cannot describe it within
~50 characters, you should be breaking it into multiple commits`}),`
`,e.jsx(n.li,{children:'Use the imperative mood (e.g. "fix", not "fixed")'}),`
`,e.jsx(n.li,{children:"Start with a verb"}),`
`,e.jsx(n.li,{children:"Use the body of the commit if more context is needed"}),`
`,e.jsxs(n.li,{children:["If you have similar/identical commits one after another, consider using ",e.jsx(n.code,{children:"--amend"})," or squashing."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Don't use generic messages (e.g. "fix: Clean up code", "fix: Address review feedback", etc.)`}),`
`,e.jsx(n.li,{children:`Don't describe the problem that was being solved (e.g. "fix: State was broken")`}),`
`,e.jsx(n.li,{children:`Don't be too brief. Avoid one word descriptions. Anyone with context should have a good idea of
what your commit does without having to look at it.`}),`
`,e.jsx(n.li,{children:"Don't end with a period"}),`
`]}),`
`,e.jsx(n.h4,{id:"pull-requests",children:"Pull Requests"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`We support creating a Draft Pull Request as soon as you have figured out a working implementation,
for early feedback. It can later be marked Ready for Review.`}),`
`,e.jsx(n.li,{children:`Open a pull request from a feature branch on your fork against the master branch on the main
repository`}),`
`,e.jsx(n.li,{children:`When a pull request passes all checks and reviews, a core maintainer merges via Squash and Merge
with a link back to the PR`}),`
`,e.jsx(n.li,{children:`The branch will automatically be deleted on merge, but its commits and the branch reference are
still available via the PR`}),`
`,e.jsx(n.li,{children:`When multiple developers collaborate on a PR, project maintainers are able to push commits to fork
PRs, but other contributors will need to open their own PRs against the personal fork and the
appropriate feature branch.`}),`
`,e.jsx(n.li,{children:"If you have questions about the above policies, please ask :)"}),`
`]}),`
`,e.jsx(n.h2,{id:"developer-experience",children:"Developer Experience"}),`
`,e.jsx(n.h3,{id:"storybook",children:"Storybook"}),`
`,e.jsxs(n.p,{children:["Canvas Kit uses ",e.jsx(n.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook"})," for the component development environment."]}),`
`,e.jsx(n.h3,{id:"yarn-and-workspaces",children:"Yarn and Workspaces"}),`
`,e.jsxs(n.p,{children:[`Canvas Kit uses Yarn for package management and takes advantage of its support for
`,e.jsx(n.a,{href:"https://yarnpkg.com/lang/en/docs/workspaces/",rel:"nofollow",children:"Workspaces"}),` to connect all of its different modules
within a single repository. It is recommended but not required over `,e.jsx(n.code,{children:"npm"}),`, unless you are updating
dependencies, then it's required.`]}),`
`,e.jsx(n.h3,{id:"testing",children:"Testing"}),`
`,e.jsxs(n.p,{children:["Canvas Kit uses ",e.jsx(n.a,{href:"https://jestjs.io/",rel:"nofollow",children:"Jest"}),` and
`,e.jsx(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro",rel:"nofollow",children:"React Testing Library"}),` to unit test
our React components. For more information about our testing strategy and how we write unit tests,
visit our `,e.jsx(n.a,{href:"?path=/docs/guides-testing--docs",children:"Testing Readme"}),"."]}),`
`,e.jsxs(n.p,{children:["Canvas Kit uses ",e.jsx(n.a,{href:"https://cypress.io",rel:"nofollow",children:"Cypress"}),` for UI tests. For info on why we chose Cypress, visit
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/cypress/WHY_CYPRESS.md",rel:"nofollow",children:"Why Cypress?"}),` For more
information about how to write Cypress tests, visit
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/cypress/README.md",rel:"nofollow",children:"Writing Cypress Tests"}),"."]}),`
`,e.jsx(n.h3,{id:"automation-on-commit",children:"Automation on Commit"}),`
`,e.jsxs(n.p,{children:["Upon commit, ",e.jsx(n.a,{href:"https://github.com/okonet/lint-staged",rel:"nofollow",children:"lint-staged"}),` will run your staged code through
`,e.jsx(n.a,{href:"https://prettier.io",rel:"nofollow",children:"Prettier"})," and ",e.jsx(n.a,{href:"https://eslint.org",rel:"nofollow",children:"eslint"}),"."]}),`
`,e.jsx(n.h3,{id:"releases",children:"Releases"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Releases are prepared by updating package versions with ",e.jsx(n.code,{children:"lerna version"}),`, and updating the
`,e.jsx(n.a,{href:"/docs/changelog--docs",children:"changelog"})]}),`
`,e.jsx(n.li,{children:"A PR is created for the above updates"}),`
`,e.jsx(n.li,{children:`After the release PR is approved and merged, we create a release in GitHub with the contents of
the changelog updates.`}),`
`,e.jsx(n.li,{children:`The GitHub release automatically tags master with the new version, and deploys the new version to
NPM.`}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started-developing",children:"Getting Started Developing"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Clone the repository from your fork and run ",e.jsx(n.code,{children:"yarn"})]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"yarn start"})," to start ",e.jsx(n.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook"})]}),`
`,e.jsxs(n.li,{children:["Visit ",e.jsx(n.a,{href:"http://localhost:9001/",rel:"nofollow",children:"http://localhost:9001/"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"creating-a-module",children:"Creating a module"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"yarn create-component"})]}),`
`,e.jsx(n.li,{children:"Enter in a module name and description"}),`
`,e.jsx(n.li,{children:"(optional) Add any required dependencies on other modules"}),`
`,e.jsxs(n.li,{children:["(optional) If you added any extra dependencies, run ",e.jsx(n.code,{children:"yarn"})]}),`
`,e.jsxs(n.li,{children:["Start Storybook ",e.jsx(n.code,{children:"yarn start"})]}),`
`,e.jsxs(n.li,{children:["Navigate to ",e.jsx(n.a,{href:"http://localhost:9001/",rel:"nofollow",children:"http://localhost:9001/"})," and find your new module's story"]}),`
`,e.jsxs(n.li,{children:["Begin editing your new React component in ",e.jsx(n.code,{children:"modules/react/<MODULE_NAME>/index.ts"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`If creating a React module, a new compound component will be created. To find out more about
Compound Components, refer to
`,e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"Compound Components"}),`. To find out
more about creating Compound Components, refer to
`,e.jsx(n.a,{href:"?path=/docs/guides-creating-compound-components--docs",children:"Creating Compound Components"}),"."]}),`
`,e.jsx(n.h3,{id:"exporting-a-module",children:"Exporting a Module"}),`
`,e.jsxs(n.p,{children:["If your module's ",e.jsx(n.code,{children:"index.ts"}),` has a default export, make sure it is available as a named export as
well. This allows for greater flexibility in how developers consume your module. `,e.jsxs(n.em,{children:[`Note that
`,e.jsx(n.code,{children:"yarn create-component"})," should set this up for you by default."]})]}),`
`,e.jsx(n.h3,{id:"building-modules",children:"Building Modules"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"yarn build"})})}),`
`,e.jsx(n.p,{children:`This will build all modules' CSS and JS. This should only be done before publishing. It is not
needed for development.`}),`
`,e.jsx(n.h3,{id:"testing-modules",children:"Testing Modules"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"yarn test"})})}),`
`,e.jsx(n.p,{children:"This will start the unit tests."}),`
`,e.jsx(n.h3,{id:"code-style-guide",children:"Code Style Guide"}),`
`,e.jsxs(n.p,{children:[`Refer to the
`,e.jsx(n.a,{href:"?path=/docs/guides-api-pattern-guidelines--docs",children:"API & Pattern Guidelines"}),"."]}),`
`,e.jsxs(n.p,{children:["Rules are enforced using ",e.jsx(n.a,{href:"https://eslint.org",rel:"nofollow",children:"ESLint"}),` and code formatting is provided through
`,e.jsx(n.a,{href:"https://prettier.io",rel:"nofollow",children:"Prettier"}),"."]}),`
`,e.jsxs(n.p,{children:["To lint using ESLint, use ",e.jsx(n.code,{children:"yarn lint"}),`. To format and lint your code (careful - this can rewrite
files), use `,e.jsx(n.code,{children:"yarn format"}),"."]}),`
`,e.jsxs(n.p,{children:["Code formatting will occur automatically before ",e.jsx(n.code,{children:"git commit"})," for files staged using ",e.jsx(n.code,{children:"git add"}),"."]}),`
`,e.jsx(n.h3,{id:"canvas-kit-labs--preview",children:"Canvas Kit Labs & Preview"}),`
`,e.jsxs(n.p,{children:[`While we iterate on a new component's API, functionality and accessibility, sometimes we want to
make it available to consumers ASAP. If we introduced the component normally, this could result in
many breaking changes to our codebase. To avoid this, we have introduced
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/labs-react",rel:"nofollow",children:"Canvas Kit Labs"}),` as a place
to incubate components. If there is a lot of debate/discussion/flux happening in your PR and the
component is needed right away, it may be moved to this location so it can be made available while
we iterate on it. Visit the link above for more info.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/preview-react",rel:"nofollow",children:"Canvas Kit Preview"}),` is for
components that have had a full design and a11y review, and are approved for use in product. The
API's and/or underlying architecture could still be subject to change, but not without strong
communication and migration strategies. Essentially, Canvas Kit Labs is for alpha components and
Canvas Kit Preview is for beta components.`]}),`
`,e.jsx(n.h3,{id:"editors",children:"Editors"}),`
`,e.jsx(n.p,{children:`Visual Studio Code is our preferred IDE. Install the Prettier and ESLint plugins for quicker and
easier formatting.`}),`
`,e.jsx(n.h4,{id:"visual-studio-code",children:"Visual Studio Code"}),`
`,e.jsxs(n.p,{children:["Install ",e.jsx(n.a,{href:"https://github.com/prettier/prettier-vscode",rel:"nofollow",children:"prettier-vscode"}),` and
`,e.jsx(n.a,{href:"https://github.com/microsoft/vscode-eslint",rel:"nofollow",children:"vscode-eslint"})]}),`
`,e.jsx(n.p,{children:"Consider adding the following options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/prettier/prettier-vscode#format-on-save",rel:"nofollow",children:"Format on save"})}),`
`]}),`
`,e.jsx(n.h2,{id:"contributor-license-agreement",children:"Contributor License Agreement"}),`
`,e.jsx(n.p,{children:`Each Contributor (“You”) represents that such You are legally entitled to submit any Contributions
in accordance with these terms and by posting a Contribution, you represent that each of Your
Contribution is Your original creation.`}),`
`,e.jsx(n.p,{children:`You are not expected to provide support for Your Contributions, except to the extent You desire to
provide support. You may provide support for free, for a fee, or not at all. Unless required by
applicable law or agreed to in writing, You provide Your Contributions on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any
warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR
PURPOSE.`})]})}function j(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{j as default};
