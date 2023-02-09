import * as h from '../helpers';

describe('ExpandableContainer', () => {
  before(() => {
    h.stories.visit();
  });

  context(`given the [Labs/Expandable, Long Title] story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Labs/Expandable', 'Long Title');
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });

    it('should have aria-expanded set to false', () => {
      cy.findByRole('button', {name: 'expand container'}).should(
        'have.attr',
        'aria-expanded',
        'false'
      );
    });

    it('should not show expanded content', () => {
      cy.findByText('Content').should('not.be.visible');
    });

    context('when the container is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'expand container'}).click();
      });

      it('should set aria-expanded to true', () => {
        cy.findByRole('button', {name: 'expand container'}).should(
          'have.attr',
          'aria-expanded',
          'true'
        );
      });

      it('should show expanded content', () => {
        cy.findByText('Content').should('be.visible');
      });

      it(`should have an aria-controls attribute pointing to the id of content`, () => {
        cy.findByRole('button', {name: 'expand container'}).then(button => {
          const buttonAriaControlsValue = button.attr('aria-controls');
          cy.findByText('Content').should('have.attr', 'id', buttonAriaControlsValue);
        });
      });

      context('when the container is clicked again', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'expand container'}).click();
        });

        it('should hide expanded content', () => {
          cy.findByText('Content').should('not.be.visible');
        });

        it('should have aria-expanded set to false', () => {
          cy.findByRole('button', {name: 'expand container'}).should(
            'have.attr',
            'aria-expanded',
            'false'
          );
        });
      });
    });
  });
});
