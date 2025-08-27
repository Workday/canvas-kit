import {Basic} from '../../modules/react/text-input/stories/examples/Basic';
import {Caution} from '../../modules/react/text-input/stories/examples/Caution';
import {Error} from '../../modules/react/text-input/stories/examples/Error';
import {Disabled} from '../../modules/react/text-input/stories/examples/Disabled';
import {Placeholder} from '../../modules/react/text-input/stories/examples/Placeholder';

const getTextInput = () => {
  return cy.get(`[type="text"]`);
};

describe('TextInput', () => {
  [Basic, Caution, Error].forEach(Example => {
    context(`given the '${Example.name}' story is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when clicked', () => {
        beforeEach(() => {
          getTextInput().click();
        });

        it('should be focused', () => {
          getTextInput().should('be.focused');
        });
      });

      context('when text is entered', () => {
        beforeEach(() => {
          getTextInput().clear().type('Test');
        });

        it('should reflect the text typed', () => {
          getTextInput().should('have.value', 'Test');
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
      getTextInput().should('be.disabled');
    });
  });

  context(`given the 'Placeholder' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Placeholder />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render a placeholder text', () => {
      getTextInput().should('have.attr', 'placeholder', 'user@email.com');
    });

    it('should reflect the text typed', () => {
      getTextInput().clear().type('Test');
      getTextInput().should('have.value', 'Test');
    });
  });
});
