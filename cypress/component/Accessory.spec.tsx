import {Basic} from '../../modules/labs-react/accessory/stories/examples/Basic';
import {Custom} from '../../modules/labs-react/accessory/stories/examples/Custom';
import {CustomColor} from '../../modules/labs-react/accessory/stories/examples/CustomColor';
import {File} from '../../modules/labs-react/accessory/stories/examples/File';
import {Media} from '../../modules/labs-react/accessory/stories/examples/Media';
import {RTL} from '../../modules/labs-react/accessory/stories/examples/RTL';
import {Sizes} from '../../modules/labs-react/accessory/stories/examples/Sizes';
import {Variants} from '../../modules/labs-react/accessory/stories/examples/Variants';

describe('Accessory', () => {
  beforeEach(() => {
    // Stub the remote image so this spec does not depend on picsum.photos (blocked/slow in CI).
    cy.intercept('GET', 'https://picsum.photos/**', {
      fixture: 'avatar.png',
      headers: {'content-type': 'image/png'},
    });
  });

  [Basic, Media, File, Custom, CustomColor, Sizes, Variants, RTL].forEach(Example => {
    context(`given the ${Example.name} story is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });
    });
  });

  context('given the Media story is rendered', () => {
    beforeEach(() => {
      cy.mount(<Media />);
    });

    it('should render the image', () => {
      cy.get('img[alt="Random photo"]').should('be.visible');
    });
  });

  context('given the Custom story is rendered', () => {
    beforeEach(() => {
      cy.mount(<Custom />);
    });

    it('should render both images', () => {
      cy.get('img[alt="Three dark spheres"]').should('be.visible');
      cy.get('img[alt="Three dark spheres, contained"]').should('be.visible');
    });
  });
});
