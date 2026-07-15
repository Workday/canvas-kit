import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as o}from"./index-3YbjYt95.js";import{ae as i}from"./index-qPwveHR6.js";import"./index-IfJi-UCQ.js";import"./iframe-BY-DvtE3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function s(n){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Testing"}),`
`,e.jsx(t.h1,{id:"testing",children:"Testing"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"canvas-kit"}),` has 3 levels of testing: unit, functional and visual. Each area has special use-cases
even though tests at various levels may overlap. Here's a simplified explanation of what each level
is meant to test:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Unit"}),`: This level is meant to test the input/output of units of functionality (e.g. utility
functions or input props of components that output DOM).`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Functional"}),`: This level is browser-based testing and is where UI behavior and accessibility
requirements are specified (e.g. Given a modal example, When clicking on the button, Then the
modal should be open). Functional tests are against Storybook Stories.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Visual"}),`: This level is where all styling is tested. Some props only have visual effects and it
is difficult to reason about at any other level. All Storybook stories can be candidates for
visual regression based on an opt-in parameter.`]}),`
`]}),`
`,e.jsx(t.p,{children:`Tests are supposed to be a source of feedback and confidence. To achieve that, a test should be
clear about intent and failures. Developers tend to ignore passing tests and focus only on failing
tests. If the intent of the test cannot be determined, it is difficult to fix the test. If the
failure isn't immediately obvious, too much time is spent fixing the test. Canvas Kit adopts a BDD
(behavior-driven development) approach of testing. The most common way to think is about behavior is
"given/when/then". These behaviors are a series of specifications and not necessarily "tests".
Testing in this repo is not just testing the correctness of our components, but running a series of
specifications. Specifications tend to be more granular to give context of what code is expected to
do. A "test" simply has to pass. A specification requires meaning.`}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Bad"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`test('SomeComponent should render correctly', async () => {
  const {getByTestId} = render(<SomeComponent data-testid="test" text="foo" />);

  const component = getByTestId('test');

  expect(component.textContent).toEqual('foo');
  expect(component.getAttribute('aria-label')).toEqual('foo');
});
`})}),`
`,e.jsxs(t.p,{children:[`This is a "test" and not a specification, but a test that asserts multiple outputs. If any of the
expectations fail, the CI will output something like
`,e.jsx(t.code,{children:"Failed: SomeComponent should render correctly"}),`. The message doesn't give any indication of why any
of the expectations would fail. Furthermore, the failures don't give much indication as to what is
failing. Without looking at the code, the failure message of the expectation will say something like
"Expected 2 to equal 1" or "Expected 'bar' to equal 'foo'". Often to find out why the test fails,
the source code of the test has to be consulted and the test has to be debugged. After that, there
is no context to why the failure even matters. This test doesn't give much feedback or confidence on
failure and thus isn't a very useful test.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Good"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`describe('SomeComponent', () => {
  it('should render the "text" prop as the text', async () => {
    const {getByTestId} = render(<SomeComponent data-testid="test" text="foo" />);

    const component = getByTestId('test');
    expect(component).toHaveTextContent('foo');
  });

  it('should render the "text" prop as an aria-label for accessibility', async () => {
    const {getByTestId} = render(<SomeComponent data-testid="test" text="foo" />);

    const component = getByTestId('test');
    expect(component).toHaveAttribute('aria-label', 'foo');
  });
});
`})}),`
`,e.jsxs(t.p,{children:[`This series of specifications give more context to the test. It is more code, but it is clearer what
the intent of each specification is. If one fails, it will be easier to diagnose what and why. The
assertions also make use of `,e.jsx(t.code,{children:"jest-dom"})," which gives more context into ",e.jsx(t.em,{children:"how"}),` it fails. Instead of a
generic assertion, the CLI will output something like
`,e.jsx(t.code,{children:'Expected <div data-testid="test" aria-label="bar">bar</div> to have an "aria-label" of "foo" but received "bar"'}),`.
`,e.jsx(t.strong,{children:"The specification should tell us which spec failed and the assertion gives insight into how."})]}),`
`,e.jsx(t.h3,{id:"selectors",children:"Selectors"}),`
`,e.jsxs(t.p,{children:["Accessible components tend to have ",e.jsx(t.code,{children:"role"}),`s and ARIA attributes to help with selection of specific
elements within a component. React Testing Library comes with some selection helpers based on these
attributes. CSS class names should not be used for selecting components. `,e.jsx(t.code,{children:"data-testid"}),` should be
used as a last resort and usually is reserved for examples or an application to help disambiguate
components. Hard-coded `,e.jsx(t.code,{children:"data-testid"}),` should be avoided in component source code, but are fine in
unit and functional tests provided the test supplies the `,e.jsx(t.code,{children:"data-testid"}),` to make the test more
understandable. Additional info can be found
`,e.jsx(t.a,{href:"https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(t.h2,{id:"unit-tests",children:"Unit tests"}),`
`,e.jsxs(t.p,{children:["Canvas Kit uses ",e.jsx(t.a,{href:"https://jestjs.io/",rel:"nofollow",children:"Jest"}),`,
`,e.jsx(t.a,{href:"https://testing-library.com/docs/react-testing-library/intro",rel:"nofollow",children:"React Testing Library"}),`, and
`,e.jsx(t.a,{href:"https://github.com/testing-library/jest-dom",rel:"nofollow",children:"jest-dom"}),` which have a nice API for testing React
components. Unit tests should test inputs and outputs of utility functions or props and output of
components. For example, if documentation says that a component will pass extra props to a container
component, there should be a specification that verifies this claim. If a component's documentation
states that children will be rendered, a test should verify the children exist within the containing
component.`]}),`
`,e.jsx(t.p,{children:`Good unit tests avoid too much implementation detail. For example, if a component states it will
render the children prop, the documentation and specifications shouldn't state where unless it is
specific to the functionality of the component. Tests here should define the API surface area that
will be guaranteed. The more implementation details, the more difficult the tests are to maintain.`}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Bad"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const {container} = render(
  <SomeComponent>
    <div data-testid="test">Test</div>
  </SomeComponent>
);

expect(container.children[0].children[0].textContent).toEqual('Test');
`})}),`
`,e.jsx(t.p,{children:`This test encodes the DOM structure into it. Any changes to the source code will require a change to
the test making the test tightly coupled and fragile.`}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Good"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const {getByTestId} = render(
  <SomeComponent data-testid="container">
    <div data-testid="test">Test</div>
  </SomeComponent>
);

const component = getByTestId('container');
const child = getByTestId('test');

expect(component).toContainElement(child);
`})}),`
`,e.jsxs(t.p,{children:[`This example is more flexible. The component can be refactored with DOM elements added or removed
and the test will still pass as long as the `,e.jsx(t.code,{children:"div"}),` is a child of the component somewhere (the
specification is met). Also this example will have a more useful failure message since
`,e.jsx(t.code,{children:".toContainElement"}),` has the context that it is expecting an element in another element vs a match of
a string.`]}),`
`,e.jsx(t.h3,{id:"snapshot-tests",children:"Snapshot tests"}),`
`,e.jsxs(t.p,{children:["Canvas Kit does not contain DOM-based snapshot tests and uses ",e.jsx(t.a,{href:"#visual-tests",children:"Visual Tests"}),` instead.
DOM snapshots failures are often difficult to parse. Humans tend to be better at noticing and
discerning visual changes than changes to a DOM structure.`]}),`
`,e.jsx(t.p,{children:`If your project uses snapshot tests and Canvas Kit, chances are you'll run into issues with changing
ids and other ARIA attributes. Canvas Kit generates unique ids that are different every time the
page loads. This can be a problem with snapshot tests. To fix this, you'll need to add special code
to your test bootstrap file. For example:`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`import {setUniqueSeed, resetUniqueIdCount} from '@workday/canvas-kit-react/common';

beforeEach(() => {
  setUniqueSeed('a'); // set a static seed
  resetUniqueIdCount(); // reset the id counter before every test
});
`})}),`
`,e.jsx(t.p,{children:`This will ensure snapshot tests have stable ids for each snapshot. It is still possible to get ids
changing if you add an additional component that uses id generation - subsequent ids will be
different, but this will prevent snapshot tests that don't have any changes from showing diffs.`}),`
`,e.jsx(t.p,{children:`The Canvas Kit Styling package uses CSS Variables and multiple class names with unique hashes.
The following snapshot serializers handle styling. Setting unique seeds will not effect static style
hashes because the styles are created before any test code is run. These serializers ignore the
hashes instead.`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`// Handle \`css-{hash}\` class names
const emotionClassnameRegex = /(css-[a-zA-Z0-9]{1,7})/g;
expect.addSnapshotSerializer({
  test: (val) => typeof val === "string" && emotionClassnameRegex.test(val),
  print: (val) => {
    return \`"\${val.replaceAll(emotionClassnameRegex, "css-xxxxx")}"\`;
  },
});

// Handle \`m{hash}\` class names
const emotionModifierClassnameRegex = /^m[a-zA-Z0-9]{5,7}/g;
expect.addSnapshotSerializer({
  test: (val) => typeof val === "string" && emotionModifierClassnameRegex.test(val),
  print: (val) => {
    return \`"\${val.replaceAll(emotionModifierClassnameRegex, "m-xxxxx")}"\`;
  },
});

// Handle \`--myVariableName-{hash}\` CSS variables used by Stencils
const cssVariableRegex = /(^--([a-zA-Z-]+)-[a-zA-Z0-9]{1,7})/g;
expect.addSnapshotSerializer({
  test: (val) => typeof val === "string" && cssVariableRegex.test(val),
  print: (val) => {
    return \`"\${val.replaceAll(cssVariableRegex, "--$2-xxxxx")}"\`;
  },
});
`})}),`
`,e.jsx(t.h2,{id:"functional-tests",children:"Functional tests"}),`
`,e.jsxs(t.p,{children:["Canvas Kit uses ",e.jsx(t.a,{href:"https://cypress.io",rel:"nofollow",children:"Cypress"}),` for browser-based behavior testing (additional info:
`,e.jsx(t.a,{href:"https://github.com/Workday/canvas-kit/tree/master/cypress/WHY_CYPRESS.md",rel:"nofollow",children:"Why Cypress?"}),`).
Functional tests ensure the code meets functional specifications from a user's perspective. All
functional tests are written against a Storybook Story. Specifications can come from many different
stakeholders including product management, user research, and accessibility. A functional test
should read in the Given/When/Then format and fit in well as acceptance criteria.`]}),`
`,e.jsx(t.p,{children:`Example of a usability specification: "Given the modal example, when a user clicks the 'Delete Item'
button, then the modal opens".`}),`
`,e.jsx(t.p,{children:`Example of an accessibility specification: "Given the modal example, when a user clicks the 'Delete
Item' button, then the focus should be transferred to the first focusable element in the dialog"`}),`
`,e.jsx(t.p,{children:`The BDD-style (behavior-driven development) syntax lends well to the nesting of actions performed on
a example (also called "story" borrowed from Storybook nomenclature). The wording used inside the
BDD blocks should read in plain English and be understandable by non-developers. The implementation
should be as readable as possible by non-developers for trust and verification. The intent of the
wording of the BDD-style syntax is to parse into an outline form and go into documentation as a
verification of what specifications are covered.`}),`
`,e.jsx(t.p,{children:"Example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`describe('Given the Default Modal is rendered', () => {
  beforeEach(() => {
    // render the default modal example
  });

  context('when the target button is clicked', () => {
    beforeEach(() => {
      // click the target button
    });

    it('should open the modal', () => {
      // expect modal to be open
    });
  });
});
`})}),`
`,e.jsx(t.p,{children:"The outline would look like:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Given the Default Modal is rendered",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["when the target button is clicked",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"then it should open the modal"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:`Tests should rely on ARIA attributes as much as possible for selecting and asserting. Test IDs
should be used only to disambiguate DOM elements.`}),`
`,e.jsxs(t.p,{children:["Read ",e.jsx(t.a,{href:"https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html",rel:"nofollow",children:"Intro to Cypress"}),`
for an intro to how Cypress works. The core concept to Cypress is enqueued command chains that
typically wrap jQuery collections. Cypress uses jQuery, Mocha, Chai, Sinon, Lodash and Moment. All
are exposed to the developer of the test.`]}),`
`,e.jsxs(t.p,{children:[`Let's break that down. Cypress has a jQuery-like chainable API to select and interact with DOM
nodes. Cypress controls when and how often a command is run to ensure assertions either pass or time
out. This is most confusing to those who approach Cypress commands as Promises.
`,e.jsx(t.a,{href:"https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Not-Promises",rel:"nofollow",children:"Commands are not Promises"}),"."]}),`
`,e.jsx(t.p,{children:"For example, imagine the following Cypress code:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`cy.get('body').contains('button', 'Delete Item').click();

cy.get('[data-testid="MyResult"]').should('contain', 'Success!');
`})}),`
`,e.jsxs(t.p,{children:["The Cypress Command queue will show ",e.jsx(t.code,{children:"['get', 'contains', 'click', 'get', 'should']"}),`, but it will not
run these commands immediately. There is also no need to use `,e.jsx(t.code,{children:".then"}),` to wait for any previous
condition to be met first. The Cypress run-time will do the following:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Run ",e.jsx(t.code,{children:"$('body')"})," every 50ms until ",e.jsx(t.code,{children:"$('body')"})," returns a non-empty jQuery collection."]}),`
`,e.jsxs(t.li,{children:["Run a function that gets all ",e.jsx(t.code,{children:"button"})," elements inside of the ",e.jsx(t.code,{children:"body"}),` element that have text content
that contains 'Delete Item' and that jQuery collection is not empty.`]}),`
`,e.jsx(t.li,{children:`Ensure the previous element is clickable (visible, not covered, has actual width/height), waiting
50ms to detect animations (waiting for animations to complete), etc. Basically, make sure a user
could actually click on it.`}),`
`,e.jsxs(t.li,{children:["Run ",e.jsx(t.code,{children:`$('[data-testid="MyResult"]')`}),` every 50ms until it returns a non-empty jQuery collection.
Usually clicking has side-effects like network requests to the server before the side-effect is
reflected in the DOM. Since Cypress implicitly retries, this command will `,e.jsx(t.em,{children:"eventually"}),` return a
non-empty jQuery collection and the author doesn't need to explicitly do anything. Note: this
selector `,e.jsx(t.em,{children:"could"}),` return a non-empty jQuery collection instantly, but it might not contain
"Success!" yet...`]}),`
`,e.jsxs(t.li,{children:["Run internal ",e.jsx(t.code,{children:"chai"})," + ",e.jsx(t.code,{children:"chai-jquery"})," matchers (",e.jsx(t.code,{children:"expect($el).to.contain('Success!')"}),`) until an error
is no longer thrown. `,e.jsx(t.code,{children:".should"})," will re-run the previous command ",e.jsx(t.em,{children:"and"}),` the assertion until the
condition is met or a timeout occurs. This is the secret sauce to the stability of Cypress tests
compared to WebDriver. `,e.jsx(t.code,{children:".should"}),` can also receive a function that will be run until no error is
thrown. If an error is never thrown, it will only be run once.`]}),`
`]}),`
`,e.jsx(t.p,{children:`Cypress is very easy to get started with, but there isn't enough documentation about how to scale a
complicated suite of Cypress tests.`}),`
`,e.jsx(t.h3,{id:"component-helpers",children:"Component helpers"}),`
`,e.jsx(t.p,{children:`Component helpers should be written to help with automation. These component helpers are useful for
a more readable implementation as well as more maintainable test code. Component helpers can also be
exported by this repository for use in downstream testing (e.g. Cypress tests in applications that
use Canvas Kit). Helpers contain implementation details about how components are composed
internally. The goal is that if the component's implementation changes, the component helpers should
be the only code that needs to change to keep tests passing.`}),`
`,e.jsx(t.p,{children:"Component helpers come in 3 flavors:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Starter"}),`: This helper type starts a Cypress chain. The return type is always
`,e.jsx(t.code,{children:"Cypress.Chainable<JQuery>"})," and usually contains a ",e.jsx(t.code,{children:"cy.get"}),` and the selector usually contains
something that is unique to that component type. For example, the Modal helper uses
`,e.jsx(t.code,{children:"[role=dialog]"})," with an option to disambiguate with a ",e.jsx(t.code,{children:"data-testid"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Scoping"}),`: Imagine a web application is a collection of boxes that determine how components of
an application are laid out. A scoping helper takes in a larger box and returns a smaller box,
further reducing the scope. Ideally these helpers contain no Cypress commands (which are
asynchronous), only jQuery calls (which are synchronous). Synchronous helper functions can be run
more than once at the discretion of the Cypress runtime. A good use-case for this type is to
replace CSS selectors.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Action"}),": Cypress comes with many baked in action commands such as ",e.jsx(t.code,{children:"click"})," and ",e.jsx(t.code,{children:"type"}),`. A custom
action is useful to give a higher level semantic meaning to a series of low-level commands. For
example, a Select component might compose a Popup and a virtualized menu. This action may include
opening the select, finding the popup element, seeing if the desired item is currently visible,
scrolling the virtualized menu until the desired item is visible and clicking on the item. This
code would be repeated for every instance and has implementation knowledge of the component. A
high-level semantic action might be called "select" that wraps up this implementation detail to
free up automation and development engineers to think about the test case and not about
implementation details.`]}),`
`]}),`
`,e.jsx(t.h2,{id:"visual-tests",children:"Visual Tests"}),`
`,e.jsxs(t.p,{children:["Canvas Kit uses ",e.jsx(t.a,{href:"https://www.chromaticqa.com/",rel:"nofollow",children:"ChromaticQA"}),` for visual tests which are run on
stories that are opted-in through a special parameter. All the visual states should be represented
at least one story. This way all of the visual states of a component can be visually regression
tested without requiring the test to interact with the UI. These states should include loading
states, error states, etc. Stories created for visual regression tests should avoid dynamic
solutions like `,e.jsx(t.a,{href:"https://github.com/storybookjs/storybook/tree/next/addons/knobs",rel:"nofollow",children:"knobs"}),"."]}),`
`,e.jsx(t.p,{children:`To make a story runnable in Chromatic for visual testing, add the following to the story's parameter
list:`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// CSF - All stories in file
export default withSnapshotsEnabled({
  // CSF details (title, component, etc.)
});

// or CSF - Specific story
export const MyVisualStory = () => {
  // story contents
};

withSnapshotsEnabled(MyVisualStory);
`})}),`
`,e.jsxs(t.p,{children:["Not all visual states are application states (E.g. ",e.jsx(t.code,{children:"focus"}),", ",e.jsx(t.code,{children:"hover"}),", and ",e.jsx(t.code,{children:"active"}),` on a button
element). For these pseudo-selectors, the `,e.jsx(t.code,{children:"StaticStates"}),` wrapper can be used where pseudo-selectors
are turned into CSS class names instead (E.g. `,e.jsx(t.code,{children:":focus"})," turns into ",e.jsx(t.code,{children:".focus"}),`) and a class name can be
added to the component. Note: this turns off the psuedo-selectors entirely.`]}),`
`,e.jsx(t.p,{children:"The following will render a button where the focus styling is always applied:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`export const States = () => {
  <StaticStates>
    <SecondaryButton className="focus">My Button</SecondaryButton>
  </StaticStates>;
};
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"}),` This will only work correctly if the component passes on extra attributes to a container
that contains pseudo-selector code (most components do this). If a pseudo-selector is defined on an
element inside the container, this won't work.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"StaticStates"})," allows for visual styling, like focus rings, to be tested automatically."]}),`
`,e.jsx(t.p,{children:`Some components may be harder to test statically due to animations or require user interaction
normally. For example, Toasts animate in and Tooltips require a user to mouse-over the target
element. Components should be written in a way that allows these animations to be disabled.`}),`
`,e.jsx(t.h2,{id:"summary",children:"Summary"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Unit tests should cover APIs exposed to developers"}),`
`,e.jsx(t.li,{children:"Functional tests should be written as a series of specifications of behavior and accessibility"}),`
`,e.jsx(t.li,{children:"Visual tests should cover all visually representable states of components"}),`
`]})]})}function x(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{x as default};
