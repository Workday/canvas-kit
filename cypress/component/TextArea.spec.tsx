import {Basic} from '../../modules/react/text-area/stories/examples/Basic';
import {Disabled} from '../../modules/react/text-area/stories/examples/Disabled';
import {Grow} from '../../modules/react/text-area/stories/examples/Grow';
import {Placeholder} from '../../modules/react/text-area/stories/examples/Placeholder';
import {ResizeConstraints} from '../../modules/react/text-area/stories/examples/ResizeConstraints';

const getTextArea = () => {
  return cy.get(`textarea`);
};

describe('Text Area', () => {
  context(`given the 'Grow' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Grow />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should remain resizable in both directions', () => {
      getTextArea().should('have.css', 'resize', 'both');
    });
  });

  context(`given the 'ResizeConstraints' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<ResizeConstraints />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should respect the vertical resize constraint', () => {
      getTextArea().should('have.css', 'resize', 'vertical');
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
