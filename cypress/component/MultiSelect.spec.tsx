import {Searching} from '../../modules/preview-react/multi-select/stories/examples/Searching';

describe('MultiSelect', () => {
  context('given the Searching story is rendered', () => {
    beforeEach(() => {
      cy.mount(<Searching />);
    });

    // Cypress adds its own main landmark; scan the controls without the story's nested main.
    it('should not have any axe errors before interaction', () => {
      cy.checkA11y({include: ['form > main > *']});
    });

    context('when options have been selected', () => {
      beforeEach(() => {
        cy.findByRole('combobox', {name: 'Fruits'}).focus().realType('apple');
        cy.findByRole('option', {name: 'Red Apple 1'}).click();
        cy.findByRole('option', {name: 'Blue Apple 7'}).click();
        cy.findByRole('combobox', {name: 'Fruits'}).focus().realPress('Escape');
      });

      it('should expose a named group of removal buttons without axe errors', () => {
        cy.findByRole('group', {name: 'Fruits'}).within(() => {
          cy.findByRole('button', {name: 'Remove Red Apple 1'}).should($button => {
            expect($button).not.to.have.attr('aria-selected');
            expect($button).to.have.attr('type', 'button');
          });
          cy.findByRole('button', {name: 'Remove Blue Apple 7'}).should('be.visible');
        });
        cy.checkA11y({include: ['form > main > *']});
      });

      it('should navigate and remove pills with the keyboard, then return focus to the input', () => {
        cy.findByRole('button', {name: 'Remove Red Apple 1'}).focus().realPress('ArrowRight');
        cy.findByRole('button', {name: 'Remove Blue Apple 7'})
          .should('be.focused')
          .realPress('Backspace');
        cy.findByRole('button', {name: 'Remove Blue Apple 7'}).should('not.exist');
        cy.findByRole('button', {name: 'Remove Red Apple 1'})
          .should('be.focused')
          .realPress('Delete');
        cy.findByRole('group', {name: 'Fruits'}).should('not.exist');
        cy.findByRole('combobox', {name: 'Fruits'}).should('be.focused');
      });

      it('should remove a pill without submitting the form', () => {
        const onSubmit = cy.stub().as('submit');
        cy.get('form').then($form => $form[0].addEventListener('submit', onSubmit));
        cy.findByRole('button', {name: 'Remove Red Apple 1'}).click();
        cy.findByRole('button', {name: 'Remove Red Apple 1'}).should('not.exist');
        cy.get('@submit').should('not.have.been.called');
      });
    });

    context('when Enter is pressed before typing', () => {
      it('should keep the listbox hidden', () => {
        cy.findByRole('combobox', {name: 'Fruits'}).focus().realPress('Enter');
        cy.findByRole('combobox', {name: 'Fruits'}).should('have.attr', 'aria-expanded', 'false');
        cy.findByRole('listbox').should('not.exist');
        cy.checkA11y({include: ['[role="combobox"]']});
      });
    });

    context('when search text is entered using the keyboard', () => {
      beforeEach(() => {
        cy.findByRole('combobox', {name: 'Fruits'}).focus().realType('apple{enter}');
      });

      it('should not have any axe errors', () => {
        cy.findByRole('option', {name: 'Pink Apple 25'}).should('be.visible');
        cy.checkA11y({include: ['form > main > *', '[role="listbox"]']});
      });

      it('should open the listbox with the filtered result', () => {
        cy.findByRole('combobox', {name: 'Fruits'}).should('have.attr', 'aria-expanded', 'true');
        cy.findByRole('option', {name: 'Pink Apple 25'}).should('be.visible');
      });

      it('should clear the search without moving focus or exposing a redundant button', () => {
        cy.get('[data-part="input-group-clear-button"]')
          .should('have.attr', 'aria-hidden', 'true')
          .and('have.attr', 'tabindex', '-1')
          .click();
        cy.findByRole('combobox', {name: 'Fruits'}).should('have.value', '').and('be.focused');
      });
    });
  });
});
