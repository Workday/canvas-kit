import {Error} from '../../modules/react/banner/stories/examples/Error';
import {Sticky} from '../../modules/react/banner/stories/examples/Sticky';

describe('Banner', () => {
  [Error, Sticky].forEach(Example => {
    context(`${Example.name} Example`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have an element with a role of "button"', () => {
        cy.findByRole('button').should('be.visible');
      });
    });
  });
});
