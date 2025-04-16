import {Basic} from '../../modules/react/switch/stories/examples/Basic';
import {Error} from '../../modules/react/switch/stories/examples/Error';
import {Alert} from '../../modules/react/switch/stories/examples/Alert';
import {Disabled} from '../../modules/react/switch/stories/examples/Disabled';

const getSwitch = () => {
  return cy.findByRole('switch');
};

describe('Switch', () => {
  [Basic, Alert, Error].forEach(Example => {
    context(`given the '${Example.name}' story is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when clicked', () => {
        beforeEach(() => {
          getSwitch().click();
        });

        it('should be checked', () => {
          getSwitch().should('be.checked');
        });
      });
    });
  });

  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Disabled />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getSwitch().should('be.disabled');
    });
  });
});
