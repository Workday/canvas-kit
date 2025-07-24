import {TextInputWithReactHookForm} from '@workday/canvas-kit-preview-react/_examples/stories/mdx/examples/TextInputWithReactHookForm';

describe('TextInputWithReactHookForm', () => {
  context('given inputs using React Hook Form', () => {
    beforeEach(() => {
      cy.mount(<TextInputWithReactHookForm />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
  });
});
