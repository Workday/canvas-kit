import {TextFormattingToolbar} from '../../modules/react/button/stories/examples/TextFormattingToolbar';

describe('Toolbar', () => {
  context('given the Text Formatting toolbar is rendered', () => {
    beforeEach(() => {
      cy.mount(<TextFormattingToolbar />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when focus is on the Text Style select', () => {
      beforeEach(() => {
        cy.findByRole('combobox', {name: 'Text Style'}).focus();
      });

      it('should move focus through the toolbar with the arrow keys', () => {
        cy.focused().realType('{rightarrow}');
        cy.findByRole('button', {name: 'Bold'}).should('have.focus');

        cy.focused().realType('{rightarrow}');
        cy.findByRole('button', {name: 'Italic'}).should('have.focus');

        cy.focused().realType('{rightarrow}');
        cy.findByRole('button', {name: 'Underline'}).should('have.focus');

        cy.focused().realType('{rightarrow}');
        cy.findByRole('button', {name: 'Insert Link'}).should('have.focus');

        cy.focused().realType('{leftarrow}');
        cy.findByRole('button', {name: 'Underline'}).should('have.focus');
      });

      context('when the down arrow key is pressed', () => {
        beforeEach(() => {
          cy.focused().realType('{downarrow}');
        });

        it('should show the text style options', () => {
          ['Normal Text', 'Heading 1', 'Heading 2', 'Heading 3'].forEach(option => {
            cy.findByRole('option', {name: option}).should('be.visible');
          });
        });
      });
    });

    context('when the Bold button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Bold'}).click();
      });

      it('should toggle the button on', () => {
        cy.findByRole('button', {name: 'Bold'})
          .should('have.attr', 'aria-pressed', 'true')
          .and('have.css', 'border-top-color')
          .and('not.equal', 'rgba(0, 0, 0, 0)');
      });
    });

    context('when the Link button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Insert Link'}).click();
      });

      it('should open the link dialog with its text fields', () => {
        cy.findByRole('dialog', {name: 'Insert Link'}).should('be.visible');
        cy.findByRole('textbox', {name: 'Link Text'}).should('be.visible').and('have.focus');
        cy.findByRole('textbox', {name: 'URL'}).should('be.visible');
      });
    });
  });
});
