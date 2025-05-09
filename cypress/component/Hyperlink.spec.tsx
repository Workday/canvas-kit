import {Link} from '../../modules/react/button/stories/button/Hyperlink.stories';
import {ExternalLink} from '../../modules/react/button/stories/button/examples/ExternalHyperlink';

describe('Hyperlink', () => {
  context(`given the [Components/Hyperlink, ${Link.name}] story is rendered`, () => {
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

  context(`given the [Components/Hyperlink, ${ExternalLink.name}] story is rendered`, () => {
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
