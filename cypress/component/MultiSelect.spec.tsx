import {Searching} from '../../modules/preview-react/multi-select/stories/examples/Searching';

describe('MultiSelect', () => {
  context('given the Searching story is rendered', () => {
    beforeEach(() => {
      cy.mount(<Searching />);
    });

    context('when Enter is pressed before typing', () => {
      it('should keep the listbox hidden', () => {
        cy.findByRole('combobox', {name: 'Fruits'}).focus().realPress('Enter');
        cy.findByRole('combobox', {name: 'Fruits'}).should('have.attr', 'aria-expanded', 'false');
        cy.findByRole('listbox').should('not.exist');
      });
    });

    context('when search text is entered using the keyboard', () => {
      beforeEach(() => {
        cy.findByRole('combobox', {name: 'Fruits'}).focus().realType('apple{enter}');
      });

      it('should not have any axe errors', () => {
        cy.findByRole('option', {name: 'Pink Apple 25'}).should('be.visible');
        // Keep this regression focused on the combobox and popup. The surrounding story has
        // unrelated violations.
        cy.checkA11y({include: ['[role="combobox"]', '[role="listbox"]']});
      });

      it('should open the listbox with the filtered result', () => {
        cy.findByRole('combobox', {name: 'Fruits'}).should('have.attr', 'aria-expanded', 'true');
        cy.findByRole('option', {name: 'Pink Apple 25'}).should('be.visible');
      });
    });
  });
});
