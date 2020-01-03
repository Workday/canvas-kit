## Testing

`canvas-kit` has 3 levels of testing: unit, functional and visual. Each area has special use-cases
even though tests at various levels may overlap. Here's a simplified explanation of what each level
is meant to test:

- **Unit**: This level is meant to test the input/output of units of functionality (e.g., utility
  functions or input props of components to output DOM).
- **Functional**: This level is browser-based testing and is where UI behavior and accessibility
  requirements are specified (e.g., Given a modal example, When clicking on the button, Then the
  modal should be open).
- **Visual**: This level is where all styling is tested. Some props have only visual effects and it
  is difficult to reason about at any other level.

Tests are supposed to be a source of feedback and confidence. To achieve that, a test should be
clear about intent and failures. Developers tend to ignore passing tests and focus only on failing
tests. If the intent of the test cannot be determined, it is difficult to fix the test. If the
failure isn't immediately obvious, too much time is spent fixing the test. Canvas Kit adopts a BDD
(behavior-driven development) approach of testing. The most common way to think is about behavior is
"given/when/then". These behaviors are a series of specifications and not necessarily "tests".
Testing in this repo is not just testing the correctness of our components, but running a series of
specifications. Specifications tend to be more granular to give context of what code is expected to
do. A "test" simply has to pass. A specification requires meaning.

**Bad**:

```ts
test('SomeComponent should render correctly', async () => {
  const {getByTestId} = render(<SomeComponent data-testid="test" text="foo" />);

  const component = await getByTestId('test');

  expect(component.textContent).toEqual('foo');
  expect(component.getAttribute('aria-label')).toEqual('foo');
});
```

This is a "test" and not a specification, but a test that asserts multiple outputs. If any of the
expectations fail, the CI will output something like "Failed: SomeComponent should render
correctly". The message doesn't give any indication of why any of the expectations would fail.
Further more, the failures don't give much indication as to what is failing. Without looking at the
code, the failure message of the expectation will say something like "Expected 2 to equal 1" or
"Expected 'bar' to equal 'foo'". Often to find out why the test fails, the source code of the test
has to be consulted and the test has to be debugged. After that, there is no context to why the
failure even matters. This test doesn't give much feedback or confidence on failure and thus isn't a
very useful test.

**Good**:

```ts
describe('SomeComponent', () => {
  it('should render the "text" prop as the text', async () => {
    const {getByTestId} = render(<SomeComponent data-testid="test" text="foo" />);

    const component = await getByTestId('test');
    expect(component).toHaveTextContent('foo');
  });

  it('should render the "text" prop as an aria-label for accessibility', async () => {
    const {getByTestId} = render(<SomeComponent data-testid="test" text="foo" />);

    const component = await getByTestId('test');
    expect(component).toHaveAttribute('aria-label', 'foo');
  });
});
```

This series of specifications give more context to the test. It is more code, but it is more clear
what the intent of each specification is. If one fails, it will be easier to diagnose what and why.
The assertions also make use of `jest-dom` which gives more context into _how_ it fails. Instead of
a generic assertion, the CLI will output something like
`Expected <div data-testid="test" aria-label="bar">bar</div> to have an "aria-label" of "foo" but received "bar"`.
The specification should tell us which spec failed and the assertion gives insight into how.

## Unit tests

Canvas Kit uses [Jest](https://jestjs.io/),
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro), and
[jest-dom](https://github.com/testing-library/jest-dom) which have a nice API for testing React
components. Unit tests should test inputs and outputs of utility functions or props and output of
components. For example, if documentation says that a component will pass extra props to a container
component, there should be a specification that verifies this claim. If a component's documentation
states that children will be rendered, a test should verify the children exist within the containing
component.

Good unit tests avoid too much implementation detail. For example, if a component states it will
render the children prop, the documentation and specifications shouldn't state where unless it is
specific to the functionality of the component. Tests here should define the API surface area that
will be guaranteed. The more implementation details, the more difficult the tests are to maintain.

**Bad**:

```ts
const {container} = render(
  <SomeComponent>
    <div data-testid="test">Test</div>
  </SomeComponent>
);

expect(container.children[0].children[0].textContent).toEqual('Test');
```

This test encodes the DOM structure into it. Any changes to the source code will require a change to
the test making the test tightly coupled and fragile.

**Good**:

```ts
const {getByTestId} = render(
  <SomeComponent data-testid="container">
    <div data-testid="test">Test</div>
  </SomeComponent>
);

const component = await getByTestId('container');
const child = await getByTestId('test');

expect(component).toContainElement(child);
```

The first test has the DOM structure encoded in it. The second

This example is more flexible. The component can be refactored with DOM elements added or removed
and the test will still pass as long as the `div` is a child of the component somewhere (the
specification is met). Also this example will have a more useful failure message since
`.toContainElement` has the context that it is expecting an element in another element vs a match of
a string.

## Functional tests

Canvas Kit uses [Cypress][https://cypress.io] for browser-based behavior testing (additional info:
[Why Cypress?](./cypress/WHY_CYPRESS.md)). Functional tests ensure the code meets functional
specifications from a user's perspective. Specifications can come from many different stakeholders
including product management, user research and accessibility. A functional test should read in the
Given/When/Then format and fits in well as acceptance criteria.

Example of a usability specification: "Given the modal example, when a user clicks the 'Delete Item'
button, then the modal opens".

Example of an accessibility specification: "Given the modal example, when a user clicks the 'Delete
Item' button, then the focus should be transferred to the first focusable element in the dialog"

The BDD-style (behavior-driven development) syntax lends well to the nesting of actions performed on
a example (also called "story" borrowed from Storybook nomenclature). The wording used inside the
BDD blocks should read in English and be understandable by non-developers. The implementation should
be as readable as possible by non-developers for trust and verification. The intent of the wording
of the BDD-style syntax is to parse into an outline form to go into documentation as a verification
of what specifications are covered.

Example:

```ts
describe('Given the Default Modal is rendered', () => {
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
```

The outline would look like:

- Given the Default Modal is rendered
  - when the target button is clicked
    - then it should open the modal

Tests should rely on aria attributes as much as possible for selecting and asserting. Test IDs
should be used only to disambiguate DOM elements.

Read [Intro to Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html)
for a good idea of how Cypress works. The core concept to Cypress is enqueued command chains that
typically wrap jQuery collections. Cypress uses jQuery, Mocha, Chai, Sinon, Lodash and Moment. All
are exposed to the developer of the test.

Let's break that down. Cypress has a jQuery-like chainable API to select and interact with DOM
nodes. Cypress control when and how often a command is run to ensure assertions either pass or time
out. This is most confusing to those who approach Cypress commands as Promises.
[Commands are not Promises](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Not-Promises).

For example, imagine the following Cypress code:

```ts
cy.get('body')
  .contains('button', 'Delete Item')
  .click();

cy.get('[data-testid="MyResult"]').should('contain', 'Success!');
```

The Cypress Command queue will show `['get', 'contains', 'click', 'get', 'should']`, but it will not
run these commands immediately. There is also no need to use `.then` to wait for any previous
condition to be met first. The Cypress run time will do the following:

- Run `$('body')` every 50ms until `$('body')` returns a non-empty jQuery collection
- Run a function that gets all `button` elements inside of the `body` element that have text content
  that contains 'Delete Item' and that jQuery collection is not empty
- Ensure the previous element is clickable (visible, not covered, has actual width/height), waiting
  50ms to detect animations (waiting for animations to complete), etc. Basically make sure a user
  could actually click on it.
- Run `$('[data-testid="MyResult"]')` every 50ms until it returns a non-empty jQuery collection.
  Usually clicking has side-effects like network requests to the server before the side-effect is
  reflected in the DOM. Since Cypress implicitly retries, this command will _eventually_ return a
  non-empty jQuery collection and the author doesn't need to explicitly do anything. Note this
  selector _could_ return a non-empty jQuery collection instantly, but it might not contain
  "Success!" yet...
- Run internal `chai` + `chai-jquery` matchers (`expect($el).to.contain('Success!')`) until an error
  is no longer thrown. `.should` will rerun the previous command _and_ the assertion until the
  condition is met or a timeout occurs. This is the secret sauce to the stability of Cypress tests
  compared to WebDriver. `.should` can also receive a function that will be run until no error is
  thrown. If an error is never thrown, it will only be run once.

Cypress is very easy to get started with, but there isn't enough documentation about how to scale a
complicated suite of Cypress tests.

### Component helpers

Component helpers should be written to help with automation. These component helpers are useful for
a more readable implementation as well as more maintainable test code. Component helpers can also be
exported by this repository for use in downstream testing (Cypress tests in applications that use
Canvas Kit). Helpers contain implementation details about how components are composed internally.
The goal is that if the Component implementation changes, the component helpers should be the only
code that needs to change to keep tests passing.

Component helpers come in 3 flavors:

- **Starter**: This helper types starts a Cypress chain. The return type is always
  `Cypress.Chainable<JQuery>` and usually contains a `cy.get` and the selector usually contains
  something that is unique to that component type. For example, the Modal helper uses
  `[role=dialog]` with an option to disambiguate with a `data-testid`.
- **Transform**: Imagine a web application is a collection of boxes that determine how components of
  an application are laid out. A transform helper takes in a larger box and returns a smaller box,
  further reducing the scope. Ideally these helpers contain no Cypress commands (which are
  asynchronous), only jQuery calls (which are synchronous). Synchronous helper functions can be run
  more than once at the discretion of the Cypress runtime. A good use-case for this type is to
  replace CSS selectors
- **Action**: Cypress comes with many baked in action commands such as `click` and `type`. A custom
  action is useful to give a higher level semantic meaning to a series of low-level commands. For
  example, a Select component might compose a Popup and a virtualized menu. This action may include
  opening the select, finding the popup element, seeing if the desired item is currently visible,
  scrolling the virtualized menu until the desired item is visible and clicking on the item. This
  code would be repeated for every instance and has implementation knowledge of the component. A
  high-level semantic action might be called "select" that wraps up this implementation detail to
  free up automation and development engineers to think about the test case and not about
  implementation details.

### How to write a functional test

A functional test describes the behavior and specifications of components. Functional tests should
follow recommendations of behavior driven development where "specs" read like a specification and
specs are broken down to a single assertion. Functional specifications should be readable by
non-developers for verification. Most bugs occur when behavior is unspecified. UX issues are when
specified behavior is not intuitive.

All functional specifications start with a Storybook story. Stories serve both as a starting point
for functional tests and visual tests. A specification is a starting point (a "given"), a series of
actions on a component (a set of "when"s) and some type of expected outcome (a "then").

For example:

- Given the Default Modal story is rendered
- When I click on the "Delete Item" button
- Then the Modal should be open

Put together, a sentence is formed: "Given the Default Modal story is rendered when I click on the
"Delete Item" button then the Modal should be open"
