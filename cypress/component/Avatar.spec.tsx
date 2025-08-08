import {Basic} from '../../modules/react/avatar/stories/avatar/examples/Basic';
import {Size} from '../../modules/react/avatar/stories/avatar/examples/Size';
import {Variant} from '../../modules/react/avatar/stories/avatar/examples/Variant';
import {CustomStyles} from '../../modules/react/avatar/stories/avatar/examples/CustomStyles';
import {Image} from '../../modules/react/avatar/stories/avatar/examples/Image';
import {Button} from '../../modules/react/avatar/stories/avatar/examples/Button';
import {LazyLoad} from '../../modules/react/avatar/stories/avatar/examples/LazyLoad';
import {ObjectFit} from '../../modules/react/avatar/stories/avatar/examples/ObjectFit';

describe('Avatar', () => {
  [Basic, Size, Variant, CustomStyles].forEach(Example => {
    context(`${Example.name} Example`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });
    });
  });

  [Image, Button, LazyLoad, ObjectFit].forEach(Example => {
    context(`${Example.name} Example`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('should have images', () => {
        cy.get('img').should('be.visible'); // wait for image to load
      });
    });
  });
});
