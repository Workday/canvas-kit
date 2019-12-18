## Testing

`canvas-kit` has 3 levels of testing: unit, functional and visual. Each area has special use-cases even though what they test might overlap. Here's a simplified explaination of what each level is meant to test:

- *unit*: This level is meant to test the expected outputs of developer APIs (ex: When a developer passes in X prop, then expect a specific output
- *functional*: This level is browser-based testing and is where we specify UI behavior and accessibility requirements
- *visual*: This level is where all our styling is tested. Some props have only visual changes and this may be the only level we can reason about the effect

## Unit tests
"Unit" test is not actually an accurate name since most of our unit tests include testing a DOM implementation. We use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) which has a nice API for testing React components.
