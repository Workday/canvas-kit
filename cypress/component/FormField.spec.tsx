import * as React from 'react';
import {Basic} from '../../modules/react/form-field/stories/examples/Basic';
import {Alert} from '../../modules/react/form-field/stories/examples/Alert';
import {Error} from '../../modules/react/form-field/stories/examples/Error';
import {Required} from '../../modules/react/form-field/stories/examples/Required';

const getInput = () => {
  return cy.get(`input`);
};

describe('Form Field', () => {
  context(`given the Basic example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Basic />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when clicking on the label', () => {
      beforeEach(() => {
        getInput().click();
      });

      it('should focus the input', () => {
        getInput().should('be.focused');
      });
    });
  });

  [Alert, Error].forEach(Example => {
    context(`given the '${Example.name}' story is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('should connect the input with the hint text', () => {
        getInput().should('have.attr', 'aria-describedby');
      });
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
