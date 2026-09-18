import {TextInputWithReactHookForm} from '@workday/canvas-kit-preview-react/_examples/stories/mdx/examples/TextInputWithReactHookForm';

describe('TextInputWithReactHookForm', () => {
  context('given inputs using React Hook Form', () => {
    beforeEach(() => {
      cy.mount(<TextInputWithReactHookForm />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when the form is submitted with an empty required select', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Submit'}).click();
      });

      it('should focus the first invalid field', () => {
        cy.findByRole('combobox', {name: 'What is your role?'}).should('be.focused');
      });
    });

    context('when a later required field is empty', () => {
      beforeEach(() => {
        cy.findByRole('combobox', {name: 'What is your role?'}).click();
        cy.findByRole('option', {name: 'Developer'}).click();
        cy.findByRole('textbox', {name: 'Email'}).clear();
        cy.findByRole('button', {name: 'Submit'}).click();
      });

      it('should focus the first invalid field', () => {
        cy.findByRole('textbox', {name: 'Email'}).should('be.focused');
      });
    });
  });
});
