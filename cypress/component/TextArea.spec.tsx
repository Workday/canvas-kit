import {Basic} from '../../modules/react/text-area/stories/examples/Basic';
import {Caution} from '../../modules/react/text-area/stories/examples/Caution';
import {Error} from '../../modules/react/text-area/stories/examples/Error';
import {Disabled} from '../../modules/react/text-area/stories/examples/Disabled';
import {Placeholder} from '../../modules/react/text-area/stories/examples/Placeholder';

const getTextArea = () => {
  return cy.get(`textarea`);
};

describe('Text Area', () => {
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
          getTextArea().click();
        });

        it('should be focused', () => {
          getTextArea().should('be.focused');
        });
      });

      context('when text is entered', () => {
        beforeEach(() => {
          getTextArea().clear().type('Test');
        });

        it('should reflect the text typed', () => {
          getTextArea().should('have.value', 'Test');
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
      getTextArea().should('be.disabled');
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
      getTextArea().should('have.attr', 'placeholder', 'Let us know how we did!');
    });

    it('should reflect the text typed', () => {
      getTextArea().clear().type('Test');
      getTextArea().should('have.value', 'Test');
    });
  });
});
