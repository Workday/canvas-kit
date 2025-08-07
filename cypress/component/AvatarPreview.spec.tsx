import {Image} from '../../modules/preview-react/avatar/stories/examples/Image';

describe('Avatar', () => {
  context(`Image Example`, () => {
    beforeEach(() => {
      cy.mount(<Image />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
    it('should show the initials HD given the name is Happy Doggo until the image is loaded ', () => {
      cy.findByText('HD').should('be.visible');
      cy.findByRole('presentation').should('not.exist');
      cy.findByRole('presentation').should('exist');
    });
  });
});
