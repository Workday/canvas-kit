# Writing Cypress Tests

## Intro

[Cypress](cypress.io) is a browser-based testing tool created for developer experience. It makes
tests easier to write and to maintain by handling much of the asynchronous complexity of
browser-based testing for you and offers implicit retries and a time-travel debug command log.

Tests should be written in a BDD-style format as a list of specifications and should be readable by
disciplines outside of Software Development Engineers (including Accessibility Specialists, Product
Owners and UX Engineers). Cypress uses Mocha, Chai and jQuery under the hood allowing for an
outline-style of test writing. It is very possible UX and Accessibility will give outlines for
engineers to implement.

**Note**: Cypress puts all tests under the `cypress/integration` folder. Unit tests live closer to
the code. This deviation is currently how Cypress works and does encourage a separation of
implementation code and specification code. Cypress can be used to test any website (ex:
workday.com). This separation helps to change the mentality of not testing implementation, but
defining specifications or acceptance criteria of our components from a user's perspective.

For more information on why we chose Cypress, visit [Why Cypress?](./WHY_CYPRESS.md)

## Running tests

The following will run Cypress in headless mode and run all tests

```
yarn cypress run
```

## Debugging tests

The following will start up a Cypress test GUI. You will be able to pick which tests run and have
full access to the Command Log for easy debugging.

```
yarn cypress open
```

## Example

The following example illustrates specifications for the Modal component for usability and
accessibility. It is easy to read by all disciplines because the outline is in English. Software
development engineers can then take care of the implementation.

### Outline

- Modal

  - when target button is clicked

    - should open the modal
    - should move focus to the first focusable element inside the modal
    - should trap focus inside the modal

    - and then close icon is clicked
      - should close the modal

### Mocha code

```ts
describe('Modal', () => {
  context('when target button is clicked', () => {
    it('should open the modal', () => {});

    it('should move focus to the first focusable element inside the modal', () => {});

    it('should trap focus inside the modal', () => {});

    context('and then close icon is clicked', () => {
      it('should close the modal', () => {});
    });
  });
});
```

### Implementation

The above pattern requires a `beforeEach` for each "when" prefix. This is following the
Given/When/Then style loosely by convention. Helper functions should be created for components
(called component helper functions or component helpers) to help abstract implementation details to
more human-readable list of tasks. The format focuses on readability first so that other disciplines
can more easily understand the implementation to verify it is correct according to the
specifications.

```ts
import * as h from '../helpers'; // helper import

describe('Modal', () => {
  // Run once for this whole block
  before(() => {
    h.stories.visit(); // visits the Storybook story entry point
  });

  // run before each test in this block
  beforeEach(() => {
    h.stories.load('modal', 'default'); // load the default modal story
  });

  context('when target button is clicked', () => {
    beforeEach(() => {
      cy.contains('Delete Item').click();
    });

    it('should open the modal', () => {
      h.modal.get().should('be.visible');
    });

    it('should move focus to the first focusable element inside the modal', () => {
      h.modal
        .get()
        .pipe(h.modal.getCloseButton)
        .should('have.focus');
    });

    it('should trap focus inside the modal', () => {
      cy.tab()
        .should('contain', 'Cancel')
        .tab()
        .should('contain', 'Delete Item')
        .tab();

      h.modal
        .get()
        .pipe(h.modal.getCloseButton)
        .should('have.focus');
    });

    context('and then close icon is clicked', () => {
      beforeEach(() => {
        h.modal
          .get()
          .pipe(h.modal.getCloseButton)
          .click();
      });

      it('should close the modal', () => {
        h.modal.get().should('not.be.visible');
      });
    });
  });
});
```

`.pipe` is a convenience plugin created to pipe regular functions together as Cypress commands.
`.pipe` is similar to `.pipe` in streams or Observables. The Cypress runtime will determine when and
how often a piped function will be run.
