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
      cy.findByRole('img').should('not.exist');
      // wait for the image to load
      cy.wait(1000);
      cy.findByRole('img').should('exist');
    });
  });
});
