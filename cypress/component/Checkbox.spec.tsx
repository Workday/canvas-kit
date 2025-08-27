import {Basic} from '../../modules/react/checkbox/stories/examples/Basic';
import {Caution} from '../../modules/react/checkbox/stories/examples/Caution';
import {Error} from '../../modules/react/checkbox/stories/examples/Error';
import {Disabled} from '../../modules/react/checkbox/stories/examples/Disabled';
import {Indeterminate} from '../../modules/react/checkbox/stories/examples/Indeterminate';

const getCheckbox = () => {
  return cy.get(`[type="checkbox"]`);
};

describe('Checkbox', () => {
  [Basic, Caution, Error].forEach(Example => {
    context(`given the '${Example.name}' example is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when clicked', () => {
        beforeEach(() => {
          getCheckbox().click();
        });

        it('should be checked', () => {
          getCheckbox().should('be.checked');
        });
      });
    });
  });

  context(`given the 'Disabled' example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Disabled />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getCheckbox().should('be.disabled');
    });
  });

  context(`given the 'Indeterminate' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Indeterminate />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have the correct attributes', () => {
      getCheckbox().eq(1).click();
      getCheckbox()
        .eq(0)
        .should('have.prop', 'indeterminate', true)
        .should('have.attr', 'aria-checked', 'mixed');
    });
  });
});
