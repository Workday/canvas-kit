import {Image} from '../../modules/react/avatar/stories/examples/Image';

describe('Avatar', () => {
  context(`Image Example`, () => {
    beforeEach(() => {
      // Stub the remote image so this spec does not depend on picsum.photos (blocked/slow in CI).
      cy.intercept('GET', 'https://picsum.photos/**', {
        fixture: 'avatar.png',
        headers: {'content-type': 'image/png'},
        delay: 250,
      }).as('avatarImage');
      cy.mount(<Image />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
    it('should show the initials HD given the name is Happy Doggo until the image is loaded ', () => {
      cy.findByText('HD').should('be.visible');
      cy.findByRole('img').should('not.exist');
      cy.wait('@avatarImage');
      cy.findByRole('img').should('exist');
    });
  });
});
