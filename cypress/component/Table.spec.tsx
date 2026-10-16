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
      cy.findAllByRole('button', {name: 'Move row'}).should('have.length', 4);
    });

    context('when a keyboard user moves the first row down', () => {
      beforeEach(() => {
        cy.findAllByRole('button', {name: 'Move row'}).first().focus().realPress('Space');
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
