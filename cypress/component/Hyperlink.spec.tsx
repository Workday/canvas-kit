import {Link} from '../../modules/react/button/stories/button/examples/Hyperlink';
import {ExternalLink} from '../../modules/react/button/stories/button/examples/ExternalHyperlink';

describe('Hyperlink', () => {
  context('given internal hyperlinks are rendered', () => {
    beforeEach(() => {
      cy.mount(<Link />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render the correct text', () => {
      cy.get('a').first().should('contain', 'Hyperlink');
    });
  });

  context('given external hyperlinks are rendered', () => {
    beforeEach(() => {
      cy.mount(<ExternalLink />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render the correct text', () => {
      cy.get('a').first().should('contain', 'External Hyperlink');
    });
  });
});
