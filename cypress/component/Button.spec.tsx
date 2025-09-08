import {Primary} from '../../modules/react/button/stories/button/examples/Primary';
import {Delete} from '../../modules/react/button/stories/button/examples/Delete';

describe('Button', () => {
  context('given primary buttons are rendered', () => {
    beforeEach(() => {
      cy.mount(<Primary aria-label="button" />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render the correct text', () => {
      cy.findAllByRole('button', {name: 'Primary'}).first().should('contain', 'Primary');
    });
  });

  context('given delete buttons are rendered', () => {
    beforeEach(() => {
      cy.mount(<Delete aria-label="delete" />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render the correct text', () => {
      cy.findAllByRole('button', {name: 'Delete'}).first().should('contain', 'Delete');
    });
  });
});
