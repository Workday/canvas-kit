import * as h from '../helpers';

describe('Pill', () => {
  before(() => {
    h.stories.visit();
  });

  ['Basic', 'With Avatar', 'With Count'].forEach(story => {
    context(`given the [Preview/Pill, ${story}] story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Preview/Pill', story);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have two elements with a role of "button"', () => {
        cy.findAllByRole('button').should('have.length', 2);
      });

      it('should be able to click on the first pill', () => {
        cy.findByText('The first pill is clicked!').should('not.exist');
        cy.findAllByRole('button')
          .eq(0)
          .click();
        cy.findByText('The first pill is clicked!').should('be.visible');
      });

      it('should have the second pill disabled', () => {
        cy.findAllByRole('button')
          .eq(1)
          .should('have.attr', 'disabled');
      });
    });
  });

  context(`given the [Preview/Pill, With List] story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Preview/Pill', 'With List');
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });

    it('should have 11 elements with a role of "button"', () => {
      cy.findAllByRole('button').should('have.length', 11);
    });

    it('should remove a pill from list if clicked', () => {
      cy.findByLabelText('Color').should('be.visible');
      cy.findByLabelText('Color').click();
      cy.findByLabelText('Color').should('not.exist');
    });
  });

  context(`given the [Preview/Pill, With Removable] story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Preview/Pill', 'With Removable');
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });

    it('should have 3 elements with a role of "button"', () => {
      cy.findAllByRole('button').should('have.length', 3);
    });

    it('should be able to click on the first pill', () => {
      cy.findByText('The first pill is clicked!').should('not.exist');
      cy.findByLabelText('Pink Shirts').click();
      cy.findByText('The first pill is clicked!').should('be.visible');
    });

    it('should be able to click on the second pill', () => {
      cy.findByText('The second pill is clicked!').should('not.exist');
      cy.findByLabelText('Carolyn Grimaldi').click();
      cy.findByText('The second pill is clicked!').should('be.visible');
    });

    it('should have the third pill disabled', () => {
      cy.findAllByRole('button')
        .eq(2)
        .should('have.attr', 'disabled');
    });
  });

  context(`given the [Preview/Pill, With Read Only] story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Preview/Pill', 'With Read Only');
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });

    it('should have 2 pills', () => {
      cy.get('#read-only-list')
        .children()
        .should('have.length', 2);
    });

    it('should have tooltip on the second button', () => {
      cy.get('#read-only-list')
        .children()
        .eq(1)
        .trigger('mouseover');
      cy.findByRole('tooltip').should(
        'contain',
        "Read-only but with super long text in case you want to read a paragraph in a Pill which we don't recommend"
      );
    });
  });
});
