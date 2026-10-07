import {Basic} from '../../modules/labs-react/accessory/stories/examples/Basic';
import {Calendar} from '../../modules/labs-react/accessory/stories/examples/Calendar';
import {Custom} from '../../modules/labs-react/accessory/stories/examples/Custom';
import {File} from '../../modules/labs-react/accessory/stories/examples/File';
import {Icon} from '../../modules/labs-react/accessory/stories/examples/Icon';
import {Media} from '../../modules/labs-react/accessory/stories/examples/Media';
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

  [Basic, Icon, Media, File, Calendar, Custom, Sizes, Variants].forEach(Example => {
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
});
