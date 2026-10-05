import {AccessibleName} from '../../modules/labs-react/accessory/stories/examples/AccessibleName';
import {Basic} from '../../modules/labs-react/accessory/stories/examples/Basic';
import {Custom} from '../../modules/labs-react/accessory/stories/examples/Custom';
import {CustomColor} from '../../modules/labs-react/accessory/stories/examples/CustomColor';
import {Image} from '../../modules/labs-react/accessory/stories/examples/Image';
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

  [Basic, Image, Custom, CustomColor, Sizes, Variants, AccessibleName, RTL].forEach(Example => {
    context(`given the ${Example.name} story is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });
    });
  });

  context('given the Accessible Name story is rendered', () => {
    beforeEach(() => {
      cy.mount(<AccessibleName />);
    });

    it('should expose the icon name', () => {
      cy.findByRole('img', {name: 'Complete'}).should('be.visible');
    });
  });

  context('given the Image story is rendered', () => {
    beforeEach(() => {
      cy.mount(<Image />);
    });

    it('should expose the image name', () => {
      cy.findByRole('img', {name: 'Random photo'}).should('be.visible');
    });
  });

  context('given the Custom story is rendered', () => {
    beforeEach(() => {
      cy.mount(<Custom />);
    });

    it('should expose both background images', () => {
      cy.findByRole('img', {name: 'Three dark spheres'}).should('be.visible');
      cy.findByRole('img', {name: 'Three dark spheres, contained'}).should('be.visible');
    });
  });
});
