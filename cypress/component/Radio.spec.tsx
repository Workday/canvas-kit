import {Basic} from '../../modules/react/radio/stories/examples/Basic';
import {Caution} from '../../modules/react/radio/stories/examples/Caution';
import {Error} from '../../modules/react/radio/stories/examples/Error';
import {Disabled} from '../../modules/react/radio/stories/examples/Disabled';

describe('Radio', () => {
  [Basic, Caution, Error].forEach(Example => {
    context(`given the '${Example.name}' story is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context(`when the "Gluten free" radio button is clicked`, () => {
        beforeEach(() => {
          cy.findByLabelText('Gluten free').click();
        });

        it(`the "Gluten free" radio button should be checked`, () => {
          cy.findByLabelText('Gluten free').should('be.checked');
        });
      });

      context(
        `when clicking the "Gluten free" radio button and then clicking the "Thin" radio button`,
        () => {
          beforeEach(() => {
            cy.findByLabelText('Gluten free').click();
            cy.findByLabelText('Thin').click();
          });

          it(`the "Gluten free" radio button should not be checked`, () => {
            cy.findByLabelText('Gluten free').should('not.be.checked');
          });

          it(`the "Thin" radio button should be checked`, () => {
            cy.findByLabelText('Thin').should('be.checked');
          });
        }
      );
    });
  });

  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Disabled />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it(`the "Gluten free (sold out)" radio button should be disabled`, () => {
      cy.findByLabelText('Gluten free (sold out)').should('be.disabled');
    });
  });
});
