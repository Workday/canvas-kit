## Testing

`canvas-kit` has 3 levels of testing: unit, functional and visual. Each area has special use-cases even though what they test might overlap. Here's a simplified explaination of what each level is meant to test:

- *unit*: This level is meant to test the expected outputs of developer APIs (ex: When a developer passes in X prop, then expect a specific output
- *functional*: This level is browser-based testing and is where we specify UI behavior and accessibility requirements
- *visual*: This level is where all our styling is tested. Some props have only visual changes and this may be the only level we can reason about the effect

Tests are supposed to be a source of feedback and confidence. To acheive that, a test should be clear about intent and failures. We ignore passing tests and focus only on failing tests. If a we cannot determine the intent of the test, it is difficult to fix the test. If the failure isn't immediately obvious, we spend too much time fixing the test. We adopted a BDD (behavior-driven development) approach of testing. The most common way to think is about behavior is "given/when/then". These behaviors are a seriees of specifications and not necessarily "tests". We are not just testing the correctness of our applications, but running a series of specifications. Specifications tend to be more fine-grained to gives a story of what we expect to happen. A test simply has to pass. A specification requires meaning.

**Bad**:
```ts
test('SomeComponent should render correctly', async () => {
  const { getByTestId } = render(<SomeComponent data-testid="test" text="foo" />);
  
  const component = await getByTestId('test');

  expect(component.textContent).toEqual('foo');
  expect(component.getAttribute('aria-label')).toEqual('foo');
});
```

This is a "test" and not a specification, but a test that asserts multiple things. If any of the expectations fail, the CI will output something like "Failed: SomeComponent should render correctly". The message doesn't give us any indication of why any of the expectations would fail. Further more, the failures don't give much indication as to what is failing. Without looking at the code, the failure message of the expectation will say something like "Expected 2 to equal 1" or "Expected 'bar' to equal 'foo'". We can look at the source code of the test and maybe put debug statements to figure out what failed, but the context of the test doesn't tell us why the failure even matters.

**Good**:
```ts
describe('SomeComponent', () => {
  it('should render the "text" prop as the text', async () => {
    const { getByTestId } = render(<SomeComponent data-testid="test" text="foo" />);
    
    const component = await getByTestId('test');
    expect(component).toHaveTextContent('foo');
  });
  
  it('should render the "text" prop as an aria-label for accessibility', async () => {
    const { getByTestId } = render(<SomeComponent data-testid="test" text="foo" />);
    
    const component = await getByTestId('test');
    expect(component).toHaveAttribute('aria-label', 'foo');
  });
});
```

This series of specifications give us more context to the test. It is more code, but it is more clear what the intent of each specification is. If one fails, it will be easier to diagnose what and why. The assertions also make use of `jest-dom` which gives us more context into _how_ it fails. Instead of a generic assertion, we'll get something like `Expected <div data-testid="test" aria-label="bar">bar</div> to have an "aria-label" of "foo" but received "bar"`. The specification should tell us which spec failed and the assertion should give us insight into how.

## Unit tests
"Unit" test is not actually an accurate name since most of our unit tests include testing a DOM implementation. We use [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [jest-dom](https://github.com/testing-library/jest-dom) which have a nice API for testing React components. Our "Unit" tests should test a React component's props. For example, if our documentation says that we'll pass extra props to a container component, we should have a test for that. If we say you can pass in children, we should make sure those children exist in the output.

Be careful to leave out too much implementation details. For example, if we guarantee that we'll render children passed in, we should not be too specific on where. Out unit tests should define the API surface area we are willing to guarantee. The more implementation details, the more difficult the tests are to maintain.

**Bad**:
```ts
const { container } = render(<SomeComponent><div data-testid="test">Test</div></SomeComponent>)

expect(container.children[0].children[0].textContent).toEqual('Test')
```
This test encodes the DOM structure into it. Any changes to the source code will require a change to the test making the test tightly coupled and fragile.

**Good**:
```ts
const { getByTestId } = render(<SomeComponent data-testid="container"><div data-testid="test">Test</div></SomeComponent>)

const component = await getByTestId('container')
const child = await getByTestId('test')

expect(component).toContainElement(child)
```

The first test has the DOM structure encoded in it. The second
