import {Basic} from '../../modules/react/text-input/stories/examples/Basic';
import {Disabled} from '../../modules/react/text-input/stories/examples/Disabled';
import {Grow} from '../../modules/react/text-input/stories/examples/Grow';
import {Placeholder} from '../../modules/react/text-input/stories/examples/Placeholder';
import {StandaloneGrow} from '../../modules/react/text-input/stories/examples/StandaloneGrow';

const getTextInput = () => {
  return cy.get(`[type="text"]`);
};

describe('TextInput', () => {
  context(`given the 'StandaloneGrow' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<StandaloneGrow />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should fill its container without becoming resizable', () => {
      getTextInput().should('have.css', 'resize', 'none');
      getTextInput().then($input => {
        expect($input[0].getBoundingClientRect().width).to.equal(
          $input[0].parentElement!.getBoundingClientRect().width
        );
      });
    });
  });

  context(`given the 'Grow' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Grow />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should fill the field without becoming resizable', () => {
      getTextInput().should('have.css', 'resize', 'none');
      getTextInput().then($input => {
        expect($input[0].getBoundingClientRect().width).to.equal(
          $input[0].parentElement!.getBoundingClientRect().width
        );
      });
    });
  });

  context(`given the 'Basic' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Basic />);
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
