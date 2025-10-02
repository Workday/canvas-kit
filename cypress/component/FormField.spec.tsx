import {Basic} from '../../modules/react/form-field/stories/examples/Basic';
import {Caution} from '../../modules/react/form-field/stories/examples/Caution';
import {Error} from '../../modules/react/form-field/stories/examples/Error';
import {Required} from '../../modules/react/form-field/stories/examples/Required';

describe('Form Field', () => {
  context(`given the Basic example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Basic />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should add an "id" to the input and point it to the "for" attribute of the label', () => {
      cy.get('label').should('have.attr', 'for');
      cy.get('input').should('have.attr', 'id');

      cy.get('input').should($input => {
        // use jQuery to grab the for attribute of the label element
        const labelId = cy.$$('label').attr('for');

        expect($input).attr('id').to.equal(labelId);
      });
    });

    it('should add an "aria-labelledby" to the input and point it to the "id" attribute of the label', () => {
      cy.get('label').should('have.attr', 'id');
      cy.get('input').should('have.attr', 'aria-labelledby');

      cy.get('input').should($input => {
        // use jQuery to grab the for attribute of the label element
        const labelId = cy.$$('label').attr('id');

        expect($input).attr('aria-labelledby').to.equal(labelId);
      });
    });

    it('should link the input to the label name', () => {
      cy.get('input').should('have.ariaLabel', 'First Name');
    });

    context('when clicking on the label', () => {
      beforeEach(() => {
        cy.get('label').click();
      });

      it('should focus the input', () => {
        cy.get('input').should('be.focused');
      });
    });
  });

  context(`given the 'Alert' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Caution />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should connect the input with the hint text', () => {
      cy.get('input').should('have.attr', 'aria-describedby');
      cy.get('input').should('have.ariaDescription', 'Cannot contain numbers');
    });
  });

  context(`given the 'Error' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Error />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should connect the input with the hint text', () => {
      cy.get('input').should('have.attr', 'aria-describedby');
      cy.get('input').should('have.ariaDescription', 'Must Contain a number and a capital letter');
    });
  });

  context(`given the Required story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Required />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('the input should have a "required" attribute', () => {
      cy.findByRole('textbox', {name: 'Email'}).should('have.attr', 'required');
    });
  });
});
