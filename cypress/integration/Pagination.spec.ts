import * as h from '../helpers';

describe('Pagination', () => {
  before(() => {
    h.stories.visit();
  });

  context('given the Jump Controls story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Labs/Pagination/React', 'Jump Controls');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('given the nav', () => {
      it('should have an aria-label', () => {
        cy.findByLabelText('Pagination').should('have.ariaLabel', 'Pagination');
      });
    });

    context('given the page list', () => {
      it('should be an ol element with a role of list', () => {
        cy.get('ol').should('have.attr', 'role', 'list');
      });

      it('should have five list items', () => {
        cy.get('ol')
          .find('li')
          .should('have.length', 5);
      });

      it('should have page buttons with correct text and aria-labels', () => {
        cy.get('ol')
          .find('button')
          .eq(0)
          .should('have.ariaLabel', 'Page 1')
          .and('contain.text', '1');

        cy.get('ol')
          .find('button')
          .eq(1)
          .should('have.ariaLabel', 'Page 2')
          .and('contain.text', '2');

        cy.get('ol')
          .find('button')
          .eq(2)
          .should('have.ariaLabel', 'Page 3')
          .and('contain.text', '3');

        cy.get('ol')
          .find('button')
          .eq(3)
          .should('have.ariaLabel', 'Page 4')
          .and('contain.text', '4');

        cy.get('ol')
          .find('button')
          .eq(4)
          .should('have.ariaLabel', 'Page 5')
          .and('contain.text', '5');
      });

      it('should add correctly apply aria-current to the current page', () => {
        cy.get('ol')
          .find('button')
          .first()
          .should('have.attr', 'aria-current', 'page');
      });

      context('when a page button is clicked', () => {
        beforeEach(() => {
          // click the 'page 4' button
          cy.get('ol')
            .find('button')
            .eq(3)
            .click();
        });

        it('should properly re-render the page range', () => {
          // get the first page button in the range
          cy.get('ol')
            .find('button')
            .first()
            .should('contain.text', '2');
          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '4');
          // get the last page button in the range
          cy.get('ol')
            .find('button')
            .last()
            .should('contain.text', '6');
        });
      });
    });

    context('given the step control buttons', () => {
      it('should have a jump-to-first button with an aria-label', () => {
        cy.findByLabelText('First').should('have.attr', 'aria-label');
      });

      it('should have a step-to-previous button with an aria-label', () => {
        cy.findByLabelText('Previous').should('have.attr', 'aria-label');
      });

      it('should have a step-to-next button with an aria-label', () => {
        cy.findByLabelText('Next').should('have.attr', 'aria-label');
      });

      it('should have a jump-to-last button with an aria-label', () => {
        cy.findByLabelText('Last').should('have.attr', 'aria-label');
      });

      context('when the first page is the current page', () => {
        it('should disable the jump-to-first button', () => {
          cy.findByLabelText('First').should('have.attr', 'aria-disabled', 'true');
        });

        it('should disable the step-to-previous button', () => {
          cy.findByLabelText('Previous').should('have.attr', 'aria-disabled', 'true');
        });

        it('should not update the current page when the step-to-previous button is clicked', () => {
          cy.findByLabelText('Previous').click();
          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', 1);
        });
      });

      context('when the last page is the current page', () => {
        beforeEach(() => {
          cy.findByLabelText('Last').click();
        });

        it('should disable the jump-to-last button', () => {
          cy.findByLabelText('Next').should('have.attr', 'aria-disabled', 'true');
        });

        it('should disable the step-to-next button', () => {
          cy.findByLabelText('Last').should('have.attr', 'aria-disabled', 'true');
        });

        it('should not update the current page when the step-to-previous button is clicked', () => {
          cy.findByLabelText('Next').click();
          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', 100);
        });
      });

      context('when the jump-to-first button is clicked', () => {
        beforeEach(() => {
          // click the 'page 4' button to enable the jump-to-first button
          cy.get('ol')
            .find('button')
            .eq(3)
            .click();
        });

        it('should properly re-render the page range (1,2,3,4,5)', () => {
          cy.findByLabelText('First').click();
          // get the first page button in the range
          cy.get('ol')
            .find('button')
            .first()
            .should('contain.text', '1');
          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '1');
          // get the last page button in the range
          cy.get('ol')
            .find('button')
            .last()
            .should('contain.text', '5');
        });
      });

      context('when the step-to-previous button is clicked', () => {
        beforeEach(() => {
          // click the 'page 5' button to enable the step-to-previous button
          // get the last page button in the range
          cy.get('ol')
            .find('button')
            .last()
            .click();
        });

        it('should properly re-render the page range', () => {
          cy.findByLabelText('Previous').click();
          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '4');

          cy.findByLabelText('Previous').click();
          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '3');
        });
      });

      context('when the step-to-next button is clicked', () => {
        beforeEach(() => {
          // click the 'page 5' button
          // get the last page button in the range
          cy.get('ol')
            .find('button')
            .last()
            .click();
        });

        it('should properly re-render the page range', () => {
          cy.findByLabelText('Next').click();
          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '6');

          cy.findByLabelText('Next').click();
          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '7');
        });
      });

      context('when the jump-to-last button is clicked', () => {
        it('should properly re-render the page range (96,97,98,99,100)', () => {
          cy.findByLabelText('Last').click();
          // get the first page button in the range
          cy.get('ol')
            .find('button')
            .first()
            .should('contain.text', '96');
          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '100');
          // get the last page button in the range
          cy.get('ol')
            .find('button')
            .last()
            .should('contain.text', '100');
        });
      });
    });

    context('given the additional details region', () => {
      it('should have a role of status', () => {
        cy.findByRole('status').should('exist');
      });

      it('should set aria-live to polite', () => {
        cy.findByRole('status').should('have.attr', 'aria-live', 'polite');
      });

      it('should set aria-atomic to true', () => {
        cy.findByRole('status').should('have.attr', 'aria-atomic', 'true');
      });

      it('should set aria-relevant to true', () => {
        cy.findByRole('status').should('have.attr', 'aria-relevant', 'true');
      });

      it('should describe the current page range and the total page count', () => {
        cy.findByRole('status').should('contain.text', '1-5 of 100 results');
      });
    });
  });

  context('given the Custom Range story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Labs/Pagination/React', 'Custom Range');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('given the page list', () => {
      it('should have three list items', () => {
        cy.get('ol')
          .find('li')
          .should('have.length', 3);
      });
    });
  });

  context('given the GoTo Form story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Labs/Pagination/React', 'Go To Form');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('given the Go To Form', () => {
      it('should be a form element', () => {
        cy.get('form').should('exist');
      });

      // QUESTION: Does the input need an aria-label if the <label> is present?
      context('given the input field', () => {
        it('should be a text field', () => {
          cy.get('form')
            .find('input')
            .should('have.attr', 'type', 'text');
        });

        it('should have an id', () => {
          cy.get('form')
            .find('input')
            .should('have.attr', 'id');
        });

        it('should set size to 1', () => {
          cy.get('form')
            .find('input')
            .should('have.attr', 'size', '1');
        });

        it('should go to the specified page if the value is within the range', () => {
          cy.get('form')
            .find('input')
            .type('42');
          cy.get('form')
            .find('input')
            .type('{enter}');

          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '42');
        });

        it('should go to the last page if a value is above the range size is submitted', () => {
          cy.get('form')
            .find('input')
            .type('101');
          cy.get('form')
            .find('input')
            .type('{enter}');

          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '100');
          // get the first page button in the range
          cy.get('ol')
            .find('button')
            .first()
            .should('contain.text', '96');
          // get the last page button in the range
          cy.get('ol')
            .find('button')
            .last()
            .should('contain.text', '100');
        });

        it('should go to the first page if a number below the range size is submitted', () => {
          cy.get('form')
            .find('input')
            .type('0');
          cy.get('form')
            .find('input')
            .type('{enter}');

          // get the current page button
          cy.get('ol')
            .find('button')
            .get('[aria-current="page"]')
            .should('contain.text', '1');
          // get the first page button in the range
          cy.get('ol')
            .find('button')
            .first()
            .should('contain.text', '1');
          // get the last page button in the range
          cy.get('ol')
            .find('button')
            .last()
            .should('contain.text', '5');
        });
      });

      context('given the label element', () => {
        it("should set the 'for' attribute to the input id", () => {
          cy.get('form')
            .find('input')
            .then($input => {
              const inputId = $input.attr('id');

              cy.get('form')
                .find('label')
                .should('have.attr', 'for', inputId);
            });
        });
      });
    });
  });
});
