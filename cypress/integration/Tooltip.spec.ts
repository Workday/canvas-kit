import * as h from '../helpers';

describe('Tooltip', () => {
  before(() => {
    h.stories.visit();
  });

  context('given the [Components/Popups/Tooltip/React, DefaultStory] example is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Tooltip/React', 'DefaultStory'); // Default gets converted to Default Story in MDX
    });

    it('should not have any axe-core errors', () => {
      cy.checkA11y();
    });

    it('the button should have an aria-label of "Close"', () => {
      cy.get('button').should('have.ariaLabel', 'Close');
    });

    context('when the close icon is hovered', () => {
      beforeEach(() => {
        cy.get('button').trigger('mouseover');
      });

      it('should open the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      it('should not have any axe-core errors', () => {
        cy.checkA11y();
      });

      context('when the tooltip is hovered', () => {
        beforeEach(() => {
          cy.get('button').trigger('mouseout');
          cy.findByRole('tooltip').trigger('mouseover');
        });

        it('should not close the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      });

      context('when the Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should close the tooltip', () => {
          cy.findByRole('tooltip').should('not.be.visible');
        });
      });

      context('when the target is clicked', () => {
        beforeEach(() => {
          cy.get('button').click();
        });

        it('should not close the tooltip', () => {
          cy.findByRole('tooltip').should('not.be.visible');
        });
      });
    });

    context('when the close icon gains focus', () => {
      beforeEach(() => {
        cy.get('button').focus();
      });

      it('should open the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      context('then the close icon loses focus', () => {
        beforeEach(() => {
          cy.get('button').blur();
        });

        it('should close the tooltip', () => {
          cy.findByRole('tooltip').should('not.be.visible');
        });
      });

      context('then the Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('button').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should not remove focus from the close icon button', () => {
          cy.get('button').should('have.focus');
        });
      });

      context('then a click happens outside both tooltip and icon button', () => {
        beforeEach(() => {
          cy.get('body').click();
        });

        it('should close immediately, not waiting for blur or intent', () => {
          cy.findByRole('tooltip', {timeout: 0}).should('not.be.visible');
        });
      });
    });
  });

  context('given the [Components/Popups/Tooltip/React, Describe Type] example is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Tooltip/React', 'Describe Type');
    });

    it('should not have any axe-core errors', () => {
      cy.checkA11y();
    });

    it('the "Delete" button should not have an aria-describedby', () => {
      cy.get('button').should('not.have.attr', 'aria-describedby');
    });

    context('when the "Delete" button is hovered', () => {
      beforeEach(() => {
        cy.get('button').trigger('mouseover');
      });

      it('should show the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      it('should not have any axe-core errors', () => {
        cy.checkA11y();
      });

      it('the "Delete" button should have an aria-describedby linking to the role="tooltip" element', () => {
        cy.get('button').should(
          'have.ariaDescription',
          'The service will restart after this action'
        );
      });
    });
  });

  context('given the [Components/Popups/Tooltip/React, Muted] example is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Tooltip/React', 'Muted');
    });

    it('should not have any axe-core errors', () => {
      cy.checkA11y();
    });

    it('the span element should not have an aria-describedby attribute', () => {
      cy.get('button').should('not.have.attr', 'aria-describedby');
    });

    it('the span element should not have an aria-label attribute', () => {
      cy.get('button').should('not.have.attr', 'aria-describedby');
    });

    context('when the "Delete" button is hovered', () => {
      beforeEach(() => {
        cy.get('span').trigger('mouseover');
      });

      it('should show the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      it('should not have any axe-core errors', () => {
        cy.checkA11y();
      });

      it('the span element should not have an aria-describedby attribute', () => {
        cy.get('button').should('not.have.attr', 'aria-describedby');
      });

      it('the span element should not have an aria-label attribute', () => {
        cy.get('button').should('not.have.attr', 'aria-describedby');
      });
    });
  });

  context('given the [Components/Popups/Tooltip/React, Ellipsis] example is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Tooltip/React', 'Ellipsis');
    });

    it('should not have any axe-core errors', () => {
      cy.checkA11y();
    });

    it('the button should not have an aria-label', () => {
      cy.get('button').should('not.have.attr', 'aria-label');
    });

    context('when the "Short Content" button is hovered', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Short Content'}).trigger('mouseover');
      });

      it('should not show the tooltip', () => {
        cy.findByRole('tooltip').should('not.be.visible');
      });
    });

    context(
      'when the "Super Mega Ultra Long Content With Max Width On The Button" button is hovered',
      () => {
        beforeEach(() => {
          cy.findByRole('button', {
            name: 'Super Mega Ultra Long Content With Max Width On The Button',
          }).trigger('mouseover');
        });

        it('should show the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      }
    );

    context(
      'when the "Super Mega Ultra Long Content With Max Width Custom" button is hovered',
      () => {
        beforeEach(() => {
          cy.findByRole('button', {
            name: 'Super Mega Ultra Long Content With Max Width Custom',
          }).trigger('mouseover');
        });

        it('should show the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      }
    );

    context('when the "Short Content" button is focused', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Short Content'}).focus();
      });

      it('should not show the tooltip', () => {
        cy.findByRole('tooltip').should('not.be.visible');
      });
    });

    context(
      'when the "Super Mega Ultra Long Content With Max Width On The Button" button is focused',
      () => {
        beforeEach(() => {
          cy.findByRole('button', {
            name: 'Super Mega Ultra Long Content With Max Width On The Button',
          }).focus();
        });

        it('should show the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      }
    );

    context(
      'when the "Super Mega Ultra Long Content With Max Width Custom" button is focused',
      () => {
        beforeEach(() => {
          cy.findByRole('button', {
            name: 'Super Mega Ultra Long Content With Max Width Custom',
          }).focus();
        });

        it('should show the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      }
    );
  });

  context('given the [Testing/React/Popups/Tooltip, NonInteractive] example is rendered', () => {
    beforeEach(() => {
      h.stories.load('Testing/React/Popups/Tooltip', 'NonInteractive');
    });

    context('when the "Non-interactive Tooltip" text is hovered', () => {
      beforeEach(() => {
        cy.findByTestId('non-interactive').trigger('mouseover');
      });

      it('should open the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      context('then the "Non-interactive Tooltip" text is clicked', () => {
        beforeEach(() => {
          cy.findByTestId('non-interactive').click();
        });

        it('should not close the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      });
    });
  });
});
