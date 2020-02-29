import * as h from '../helpers';

describe('Button', () => {
  before(() => {
    h.stories.visit();
  });

  context('given Default pagination story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Labs/Pagination/React', 'Default');
    });

    context('when screen width is larger than 500', () => {
      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when the first page is selected', () => {
        it('should have first page button with an aria label of "Selected, Page 1"', () => {
          cy.contains('button', '1').should('have.attr', 'aria-label', 'Selected, Page 1');
        });

        it('should disable previous page button', () => {
          cy.findByLabelText('Previous Page').should('be.disabled');
        });

        it('should not disable next page button', () => {
          cy.findByLabelText('Next Page').should('not.be.disabled');
        });

        it('should show 5 page buttons', () => {
          cy.findAllByLabelText(/Page \d$/).should('have.length', 5);
        });

        it('should label all page buttons', () => {
          cy.contains('button', '2').should('have.attr', 'aria-label', 'Page 2');
          cy.contains('button', '3').should('have.attr', 'aria-label', 'Page 3');
          cy.contains('button', '4').should('have.attr', 'aria-label', 'Page 4');
          cy.contains('button', '5').should('have.attr', 'aria-label', 'Page 5');
        });

        it('should reflect the current page number', () => {
          cy.findByTestId('pageNumber').should('have.text', '1');
        });
      });

      context('when the second page is clicked', () => {
        beforeEach(() => {
          cy.findByLabelText('Page 2').click();
        });

        it('should active page 2', () => {
          cy.contains('button', '2').should('have.attr', 'aria-label', 'Selected, Page 2');
        });

        it('should keep focus on page 2', () => {
          cy.contains('button', '2').should('have.focus');
        });

        it('should not disable previous page button', () => {
          cy.findByLabelText('Previous Page').should('not.be.disabled');
        });

        it('should not disable next page button', () => {
          cy.findByLabelText('Next Page').should('not.be.disabled');
        });

        it('should reflect the current page number', () => {
          cy.findByTestId('pageNumber').should('have.text', '2');
        });
      });

      context('when there are 10 pages (for page number distribution)', () => {
        beforeEach(() => {
          cy.changeKnob('total', 100);
        });

        it('should show 6 numbers', () => {
          cy.findAllByLabelText(/Page \d+$/).should('have.length', 6);
        });

        context('when page 1 is selected', () => {
          it('should show pages 1 through 5 and page 10', () => {
            cy.findByLabelText(/Page 1$/).should('exist');
            cy.findByLabelText(/Page 2$/).should('exist');
            cy.findByLabelText(/Page 3$/).should('exist');
            cy.findByLabelText(/Page 4$/).should('exist');
            cy.findByLabelText(/Page 5$/).should('exist');
            cy.findByLabelText(/Page 10$/).should('exist');
          });
        });

        context('when page 2 is selected', () => {
          beforeEach(() => {
            cy.findByLabelText('Page 2').click();
          });

          it('should show pages 1 through 5 and page 10', () => {
            cy.findByLabelText(/Page 1$/).should('exist');
            cy.findByLabelText(/Page 2$/).should('exist');
            cy.findByLabelText(/Page 3$/).should('exist');
            cy.findByLabelText(/Page 4$/).should('exist');
            cy.findByLabelText(/Page 5$/).should('exist');
            cy.findByLabelText(/Page 10$/).should('exist');
          });
        });

        context('when page 3 is selected', () => {
          beforeEach(() => {
            cy.findByLabelText('Page 3').click();
          });

          it('should show pages 1 through 5 and page 10', () => {
            cy.findByLabelText(/Page 1$/).should('exist');
            cy.findByLabelText(/Page 2$/).should('exist');
            cy.findByLabelText(/Page 3$/).should('exist');
            cy.findByLabelText(/Page 4$/).should('exist');
            cy.findByLabelText(/Page 5$/).should('exist');
            cy.findByLabelText(/Page 10$/).should('exist');
          });
        });

        context('when page 4 is selected', () => {
          beforeEach(() => {
            cy.findByLabelText('Page 4').click();
          });

          it('should show pages 2 through 6 and page 10', () => {
            cy.findByLabelText(/Page 2$/).should('exist');
            cy.findByLabelText(/Page 3$/).should('exist');
            cy.findByLabelText(/Page 4$/).should('exist');
            cy.findByLabelText(/Page 5$/).should('exist');
            cy.findByLabelText(/Page 6$/).should('exist');
            cy.findByLabelText(/Page 10$/).should('exist');
          });
        });

        context('when page 6 is selected', () => {
          beforeEach(() => {
            cy.findByLabelText('Page 10').click();
            cy.findByLabelText('Page 6').click();
          });

          it('should show pages 4 through 8 and page 10', () => {
            cy.findByLabelText(/Page 4$/).should('exist');
            cy.findByLabelText(/Page 5$/).should('exist');
            cy.findByLabelText(/Page 6$/).should('exist');
            cy.findByLabelText(/Page 7$/).should('exist');
            cy.findByLabelText(/Page 8$/).should('exist');
            cy.findByLabelText(/Page 10$/).should('exist');
          });
        });

        context('when page 7 is selected', () => {
          beforeEach(() => {
            cy.findByLabelText('Page 10').click();
            cy.findByLabelText('Page 7').click();
          });

          it('should show page 1 and pages 6 through 10', () => {
            cy.findByLabelText(/Page 1$/).should('exist');
            cy.findByLabelText(/Page 6$/).should('exist');
            cy.findByLabelText(/Page 7$/).should('exist');
            cy.findByLabelText(/Page 8$/).should('exist');
            cy.findByLabelText(/Page 9$/).should('exist');
            cy.findByLabelText(/Page 10$/).should('exist');
          });
        });

        context('when page 8 is selected', () => {
          beforeEach(() => {
            cy.findByLabelText('Page 10').click();
            cy.findByLabelText('Page 8').click();
          });

          it('should show page 1 and pages 6 through 10', () => {
            cy.findByLabelText(/Page 1$/).should('exist');
            cy.findByLabelText(/Page 6$/).should('exist');
            cy.findByLabelText(/Page 7$/).should('exist');
            cy.findByLabelText(/Page 8$/).should('exist');
            cy.findByLabelText(/Page 9$/).should('exist');
            cy.findByLabelText(/Page 10$/).should('exist');
          });
        });

        context('when page 9 is selected', () => {
          beforeEach(() => {
            cy.findByLabelText('Page 10').click();
            cy.findByLabelText('Page 9').click();
          });

          it('should show page 1 and pages 6 through 10', () => {
            cy.findByLabelText(/Page 1$/).should('exist');
            cy.findByLabelText(/Page 6$/).should('exist');
            cy.findByLabelText(/Page 7$/).should('exist');
            cy.findByLabelText(/Page 8$/).should('exist');
            cy.findByLabelText(/Page 9$/).should('exist');
            cy.findByLabelText(/Page 10$/).should('exist');
          });
        });

        context('when page 10 is selected', () => {
          beforeEach(() => {
            cy.findByLabelText('Page 10').click();
          });

          it('should show page 1 and pages 6 through 10', () => {
            cy.findByLabelText(/Page 1$/).should('exist');
            cy.findByLabelText(/Page 6$/).should('exist');
            cy.findByLabelText(/Page 7$/).should('exist');
            cy.findByLabelText(/Page 8$/).should('exist');
            cy.findByLabelText(/Page 9$/).should('exist');
            cy.findByLabelText(/Page 10$/).should('exist');
          });

          it('should disable the next page button', () => {
            cy.findByLabelText('Next Page').should('be.disabled');
          });
        });
      });
    });
  });

  context('given Default pagination story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Labs/Pagination/React', 'With Go To');
    });

    context('when screen width is larger than 500', () => {
      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when 50 is entered into the Go To input', () => {
        beforeEach(() => {
          cy.findByLabelText('Go To')
            .type('50')
            .type('{enter}');
        });

        it('should set page 50 as the selected page', () => {
          cy.findByText('50').should('have.attr', 'aria-label', 'Selected, Page 50');
        });
      });

      context('when -1 is entered into the Go To input', () => {
        beforeEach(() => {
          cy.findByLabelText('Go To')
            .type('-1')
            .type('{enter}');
        });

        it('should not change the selected page', () => {
          cy.findByText('1').should('have.attr', 'aria-label', 'Selected, Page 1');
        });
      });
    });
  });

  context('when screen width is smaller than 500', () => {
    beforeEach(() => {
      cy.viewport(414, 736); // iPhone 6/7/8 Plus
      h.stories.load('Labs/Pagination/React', 'Default');
    });

    it('should show 2 page buttons', () => {
      cy.findAllByLabelText(/Page \d+$/).should('have.length', 2);
    });

    context('when the last page is clicked', () => {
      beforeEach(() => {
        cy.findByLabelText('Page 5').click();
      });

      it('should show 3 numbers', () => {
        cy.findAllByLabelText(/Page \d+$/).should('have.length', 3);
      });

      it('should disable the next page button', () => {
        cy.findByLabelText('Next Page').should('be.disabled');
      });
    });

    context('when there are 3 pages', () => {
      beforeEach(() => {
        cy.changeKnob('total', 30);
      });

      it('should show 3 page buttons', () => {
        cy.findAllByLabelText(/Page \d+$/).should('have.length', 3);
      });
    });
  });
});
