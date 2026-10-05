import {DraggableRows} from '../../modules/react/table/stories/examples/DraggableRows';

describe('Table', () => {
  context('given the draggable rows example is rendered', () => {
    beforeEach(() => {
      cy.mount(<DraggableRows />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should provide an accessible drag handle for every employee', () => {
      cy.findByRole('button', {name: 'Reorder row for Avery Johnson'}).should('be.visible');
      cy.findByRole('button', {name: 'Reorder row for Jordan Lee'}).should('be.visible');
      cy.findByRole('button', {name: 'Reorder row for Morgan Smith'}).should('be.visible');
      cy.findByRole('button', {name: 'Reorder row for Riley Chen'}).should('be.visible');
    });

    context('when a keyboard user moves the first row down', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Reorder row for Avery Johnson'}).focus().realPress('Space');
        cy.realPress('ArrowDown');
        cy.realPress('Space');
      });

      it('should update the employee row order', () => {
        cy.findAllByRole('row').then(rows => {
          const rowNames = [...rows].slice(1).map(row => row.textContent);

          expect(rowNames[0]).to.contain('Jordan Lee');
          expect(rowNames[1]).to.contain('Avery Johnson');
        });
      });
    });
  });
});
