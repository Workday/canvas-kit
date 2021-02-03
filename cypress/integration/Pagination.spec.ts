import * as h from '../helpers';

function getPaginationNav() {
  return cy.findByLabelText('Pagination');
}

function getJumpToFirstButton() {
  return cy.findByLabelText('First');
}

function getStepToPreviousButton() {
  return cy.findByLabelText('Previous');
}

function getStepToNextButton() {
  return cy.findByLabelText('Next');
}

function getJumpToLastButton() {
  return cy.findByLabelText('Last');
}

function getPageList() {
  return cy.get('ol');
}

function getPageListItems() {
  return getPageList().find('li');
}

function getPageButtons() {
  return getPageList().find('button');
}

function getCurrentPageButton() {
  return getPageButtons().get('[aria-current="page"]');
}

function getAdditionalDetails() {
  return cy.findByRole('status');
}

function getGoToForm() {
  return cy.get('form');
}

function getGoToFormInput() {
  return getGoToForm().find('input');
}

function getGoToFormLabel() {
  return getGoToForm().find('label');
}

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
        getPaginationNav().should('have.ariaLabel', 'Pagination');
      });
    });

    context('given the page list', () => {
      it('should be an ol element with a role of list', () => {
        getPageList().should('have.attr', 'role', 'list');
      });

      it('should have five list items', () => {
        getPageListItems().should('have.length', 5);
      });

      it('should have page buttons with correct text and aria-labels', () => {
        getPageButtons()
          .eq(0)
          .should('have.ariaLabel', 'Page 1')
          .and('contain.text', '1');
        getPageButtons()
          .eq(1)
          .should('have.ariaLabel', 'Page 2')
          .and('contain.text', '2');
        getPageButtons()
          .eq(2)
          .should('have.ariaLabel', 'Page 3')
          .and('contain.text', '3');
        getPageButtons()
          .eq(3)
          .should('have.ariaLabel', 'Page 4')
          .and('contain.text', '4');
        getPageButtons()
          .eq(4)
          .should('have.ariaLabel', 'Page 5')
          .and('contain.text', '5');
      });

      it('should add correctly apply aria-current to the current page', () => {
        getPageButtons()
          .first()
          .should('have.attr', 'aria-current', 'page');
      });

      context('when a page button is clicked', () => {
        beforeEach(() => {
          // click the 'page 4' button
          getPageButtons()
            .eq(3)
            .click();
        });

        it('should properly re-render the page range', () => {
          getPageButtons()
            .first()
            .should('contain.text', '2');
          getCurrentPageButton().should('contain.text', '4');
          getPageButtons()
            .last()
            .should('contain.text', '6');
        });
      });
    });

    context('given the step control buttons', () => {
      it('should have a jump-to-first button with an aria-label', () => {
        getJumpToFirstButton().should('have.attr', 'aria-label');
      });

      it('should have a step-to-previous button with an aria-label', () => {
        getStepToPreviousButton().should('have.attr', 'aria-label');
      });

      it('should have a step-to-next button with an aria-label', () => {
        getStepToNextButton().should('have.attr', 'aria-label');
      });

      it('should have a jump-to-last button with an aria-label', () => {
        getJumpToLastButton().should('have.attr', 'aria-label');
      });

      context('when the first page is the current page', () => {
        it('should disable the jump-to-first button', () => {
          getJumpToFirstButton().should('have.attr', 'aria-disabled', 'true');
        });

        it('should disable the step-to-previous button', () => {
          getStepToPreviousButton().should('have.attr', 'aria-disabled', 'true');
        });

        it('should not update the current page when the step-to-previous button is clicked', () => {
          getStepToPreviousButton().click();
          getCurrentPageButton().should('contain.text', 1);
        });
      });

      context('when the last page is the current page', () => {
        beforeEach(() => {
          getJumpToLastButton().click();
        });

        it('should disable the jump-to-last button', () => {
          getStepToNextButton().should('have.attr', 'aria-disabled', 'true');
        });

        it('should disable the step-to-next button', () => {
          getJumpToLastButton().should('have.attr', 'aria-disabled', 'true');
        });

        it('should not update the current page when the step-to-previous button is clicked', () => {
          getStepToNextButton().click();
          getCurrentPageButton().should('contain.text', 100);
        });
      });

      context('when the jump-to-first button is clicked', () => {
        beforeEach(() => {
          // click the 'page 4' button to enable the jump-to-first button
          getPageButtons()
            .eq(3)
            .click();
        });

        it('should properly re-render the page range (1,2,3,4,5)', () => {
          getJumpToFirstButton().click();
          getPageButtons()
            .first()
            .should('contain.text', '1');
          getCurrentPageButton().should('contain.text', '1');
          getPageButtons()
            .last()
            .should('contain.text', '5');
        });
      });

      context('when the step-to-previous button is clicked', () => {
        beforeEach(() => {
          // click the 'page 5' button to enable the step-to-previous button
          getPageButtons()
            .last()
            .click();
        });

        it('should properly re-render the page range', () => {
          getStepToPreviousButton().click();
          getCurrentPageButton().should('contain.text', '4');

          getStepToPreviousButton().click();
          getCurrentPageButton().should('contain.text', '3');
        });
      });

      context('when the step-to-next button is clicked', () => {
        beforeEach(() => {
          // click the 'page 5' button
          getPageButtons()
            .last()
            .click();
        });

        it('should properly re-render the page range', () => {
          getStepToNextButton().click();
          getCurrentPageButton().should('contain.text', '6');

          getStepToNextButton().click();
          getCurrentPageButton().should('contain.text', '7');
        });
      });

      context('when the jump-to-last button is clicked', () => {
        it('should properly re-render the page range (96,97,98,99,100)', () => {
          getJumpToLastButton().click();
          getPageButtons()
            .first()
            .should('contain.text', '96');
          getCurrentPageButton().should('contain.text', '100');
          getPageButtons()
            .last()
            .should('contain.text', '100');
        });
      });
    });

    context('given the additional details region', () => {
      it('should have a role of status', () => {
        getAdditionalDetails().should('have.attr', 'role', 'status');
      });

      it('should set aria-live to polite', () => {
        getAdditionalDetails().should('have.attr', 'aria-live', 'polite');
      });

      it('should set aria-atomic to true', () => {
        getAdditionalDetails().should('have.attr', 'aria-atomic', 'true');
      });

      it('should set aria-relevant to true', () => {
        getAdditionalDetails().should('have.attr', 'aria-relevant', 'true');
      });

      it('should describe the current page range and the total page count', () => {
        getAdditionalDetails().should('contain.text', '1-5 of 100 results');
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
        getPageListItems().should('have.length', 3);
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
        getGoToForm().should('exist');
      });

      // QUESTION: Does the input need an aria-label if the <label> is present?
      context('given the input field', () => {
        it('should be a text field', () => {
          getGoToFormInput().should('have.attr', 'type', 'text');
        });

        it('should have an id', () => {
          getGoToFormInput().should('have.attr', 'id');
        });

        it('should set size to 1', () => {
          getGoToFormInput().should('have.attr', 'size', '1');
        });

        it('should go to the specified page if the value is within the range', () => {
          getGoToFormInput().type('42');
          getGoToFormInput().type('{enter}');

          getCurrentPageButton().should('contain.text', '42');
        });

        it('should go to the last page if a value is above the range size is submitted', () => {
          getGoToFormInput().type('101');
          getGoToFormInput().type('{enter}');

          getCurrentPageButton().should('contain.text', '100');
          getPageButtons()
            .first()
            .should('contain.text', '96');
          getPageButtons()
            .last()
            .should('contain.text', '100');
        });

        it('should go to the first page if a number below the range size is submitted', () => {
          getGoToFormInput().type('0');
          getGoToFormInput().type('{enter}');

          getCurrentPageButton().should('contain.text', '1');
          getPageButtons()
            .first()
            .should('contain.text', '1');
          getPageButtons()
            .last()
            .should('contain.text', '5');
        });
      });

      context('given the label element', () => {
        it("should set the 'for' attribute to the input id", () => {
          getGoToFormInput().then($input => {
            const inputId = $input.attr('id');

            getGoToFormLabel().should('have.attr', 'for', inputId);
          });
        });
      });
    });
  });
});
