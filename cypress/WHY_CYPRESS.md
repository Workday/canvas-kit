# Why Cypress?

[Cypress](cypress.io) is a browser-based testing tool that currently only works in Chrome and
Electron.

## Motivation

We feel it is important to have specifications that describe how a component should behave - from
the perspective of usability and by extension, accessibility. These specifications should readable
by all stakeholders of the design system including UX groups and accessibility specialists.
Specifications should read like specifications and loosely follow the behavior-driven development
(BDD) style of Given/When/Then. For more information on what this looks like, visit
[Writing Cypress Tests: Example](./README.md#Example).

## Considerations

| Solution                                           | Pros                                                                                                                  | Cons                                                                                                                                                                                                    |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Jest + React Testing Library                       | <ul><li>Already using Jest</li><li>Fastest running solution</li></ul>                                                 | <ul><li>Events are not realistic at all</li><li>No visual UI for debugging or writing</li><li>Not a real browser</li></ul>                                                                              |
| [Cypress](https://www.cypress.io/)                 | <ul><li>Best developer experience</li><li>Easy to debug</li><li>Built-in retries of all commands</li></ul>            | <ul><li>Chrome Only</li></ul>                                                                                                                                                                           |
| [webdriver.io](https://webdriver.io/)              | <ul><li>Works in all browsers</li></ul>                                                                               | <ul><li>Disconnected debugging experience</li><li>Flaky failures due to async nature of commands</li><li>Difficult setup (requires Java, Selenium Server and client drivers for each browser)</li></ul> |
| [TestCafe](https://devexpress.github.io/testcafe/) | <ul><li>Works in all browsers</li><li>Less flaky than webdriver.io</li><li>Built-in retries of each command</li></ul> | <ul><li>Events not as realistic as webdriver.io or Cypress</li><li>Disconnected debugging experience</li></ul>                                                                                          |

## Cross-browser Mitigation

Why would we choose a solution that only works in Chrome?

Cypress is primarily chosen as a specification framework. It is true that these behaviors are only
tested in Chrome. Canvas-kit does _support_ Chrome, Safari, Firefox, Blackberry and IE11 as well as
mobile browsers, but that doesn't translate to every test _runs_ in all those browsers.

From our findings, we found cross-browser issues fell into one of the following categories:

- Rendering
- Events (non-polyfillable)
- Transpiling
- Polyfilling

Most issues fall into the Rendering category. Rendering and certain transpilation issues can be
caught by visual regression run automatically against Storybook stories cross-browser using
webdriver.io or a service like ChromaticQA.com. Rendering inconsistencies can be caught by visual
regression. Transpile errors will be caught as a story will render as a blank screen.

Polyfilling and transpilation fall within the domain of applications and cannot be guaranteed to
work from Canvas. Events fall under the responsibility of both Canvas-kit and applications consuming
Canvas. Code that runs in callbacks cannot be guaranteed to work from Canvas-kit and should be
tested in an application context.

That leaves non-polyfillable events and cross-browser issues with how browsers fire events. This is
the short-coming of testing in Chrome-only. Mitigation can include a small suite of tests written in
webdriver.io to catch these edge cases.

Canvas-kit makes the trade off of most specifications being easier to write, maintain and debug by
using Cypress despite being a Chrome-only solution. The few instances that require a true
cross-browser solution can be done using webdriver.io which is a degraded experience and higher
maintenance and operational cost.
