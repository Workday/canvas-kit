import {DraggableRows} from '../../modules/docs/mdx/accessibility/examples/Table/WithDraggableRows';

describe('Table', () => {
  context('given the draggable rows example is rendered', () => {
    beforeEach(() => {
      cy.mount(<DraggableRows />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should provide a drag handle for every employee', () => {
      cy.findByRole('button', {name: 'Move row Avery Johnson'}).should('be.visible');
      cy.findByRole('button', {name: 'Move row Jordan Lee'}).should('be.visible');
      cy.findByRole('button', {name: 'Move row Morgan Smith'}).should('be.visible');
      cy.findByRole('button', {name: 'Move row Riley Chen'}).should('be.visible');
    });

    it('should place row actions in the last column', () => {
      cy.findAllByRole('columnheader').then($headers => {
        const names = [...$headers].map(header => header.textContent?.trim());

        expect(names).to.deep.equal(['Reorder', 'Employee Name', 'Job Title', 'Actions']);
      });

      cy.findAllByRole('row')
        .eq(1)
        .within(() => {
          cy.findAllByRole('cell')
            .first()
            .findByRole('button', {name: 'Move row Avery Johnson'})
            .should('be.visible');
          cy.findAllByRole('cell')
            .last()
            .findByRole('button', {name: 'Row actions'})
            .should('be.visible');
        });
    });

    it('should show the screen reader feedback', () => {
      cy.contains('Move a row to see screen reader feedback. (For demonstration purposes.)').should(
        'be.visible'
      );
    });

    context('when a keyboard user moves the first row down', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Move row Avery Johnson'}).focus().realPress('Space');
        cy.realPress('ArrowDown');
        cy.realPress('Space');
      });

      it('should update the employee row order', () => {
        cy.findAllByRole('row').then(rows => {
          const rowNames = [...rows].slice(1).map(row => row.textContent);

          expect(rowNames[0]).to.contain('Jordan Lee');
          expect(rowNames[1]).to.contain('Avery Johnson');
        });
        cy.contains('Avery Johnson row dropped at position 2 of 4.').should('be.visible');
      });
    });
  });
});
