import {Caution} from '../../modules/react/information-highlight/stories/examples/Caution';
import {Critical} from '../../modules/react/information-highlight/stories/examples/Critical';
import {Informational} from '../../modules/react/information-highlight/stories/examples/Informational';

describe('Information Highlight', () => {
  [Informational, Caution, Critical].forEach(Example => {
    context(`${Example.name} Example`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have an element with a role of "heading"', () => {
        cy.findAllByRole('heading').should('be.visible');
      });
    });
  });
});
