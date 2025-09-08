import {Default} from '../../modules/react/tooltip/stories/examples/Default';
import {DescribeType} from '../../modules/react/tooltip/stories/examples/DescribeType';
import {DescriptionType} from '../../modules/react/tooltip/stories/examples/DescriptionType';
import {Muted} from '../../modules/react/tooltip/stories/examples/Muted';
import {Ellipsis} from '../../modules/react/tooltip/stories/examples/Ellipsis';
import {NonInteractive, Overflow} from '../../modules/react/tooltip/stories/testing.stories';
import {TooltipWithFallbackPlacements} from '../../modules/react/tooltip/stories/testingFallback.stories';

describe('Tooltip', () => {
  context('given the DefaultStory example is rendered', () => {
    beforeEach(() => {
      cy.mount(<Default />); // Default gets converted to Default Story in MDX
    });

    it('should not have any axe-core errors', () => {
      cy.checkA11y();
    });

    it('the button should have an aria-label of "Close"', () => {
      cy.findByRole('button', {name: 'Close'}).should('have.ariaLabel', 'Close');
    });

    context('when the close icon is hovered', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Close'}).trigger('mouseover');
      });

      it('should open the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      it('should not have any axe-core errors', () => {
        cy.checkA11y();
      });

      context('when the tooltip is hovered', () => {
        beforeEach(() => {
          cy.clock();
          cy.tick(300); // advance the timer by the amount of default delay time
          cy.findByRole('button', {name: 'Close'}).trigger('mouseout');
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
          cy.findByRole('tooltip').should('not.exist');
        });
      });

      context('when the target is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Close'}).click();
        });

        it('should not close the tooltip', () => {
          cy.findByRole('tooltip').should('not.exist');
        });
      });
    });

    context('when the close icon gains focus', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Close'}).focus();
      });

      it('should open the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      context('then the close icon loses focus', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Close'}).blur();
        });

        it('should close the tooltip', () => {
          cy.findByRole('tooltip').should('not.exist');
        });
      });

      context('then the Escape key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Close'}).trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should not remove focus from the close icon button', () => {
          cy.findByRole('button', {name: 'Close'}).should('have.focus');
        });
      });

      context('then a click happens outside both tooltip and icon button', () => {
        beforeEach(() => {
          cy.get('body').click();
        });

        it('should close immediately, not waiting for blur or intent', () => {
          cy.findByRole('tooltip', {timeout: 0}).should('not.exist');
        });
      });
    });
  });

  context('given the DescribeType example is rendered', () => {
    beforeEach(() => {
      cy.mount(<DescribeType />);
    });

    it('should not have any axe-core errors', () => {
      cy.checkA11y();
    });

    it('the "Delete" button should not have an aria-describedby before hovering', () => {
      cy.findByRole('button', {name: 'Delete'}).should('not.have.attr', 'aria-describedby');
    });

    context('when the "Delete" button is hovered', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Delete'}).trigger('mouseover');
      });

      it('should show the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      it('should not have any axe-core errors', () => {
        cy.checkA11y();
      });

      it('the "Delete" button should have an aria-describedby linking to the role="tooltip" element', () => {
        cy.findByRole('button', {name: 'Delete'}).should(
          'have.ariaDescription',
          'The service will restart after this action'
        );
      });
    });
  });

  context('given the DescriptionType example is rendered', () => {
    beforeEach(() => {
      cy.mount(<DescriptionType />);
    });

    it('should not have any axe-core errors', () => {
      cy.checkA11y();
    });

    it('the "Delete" button should have an aria-description before hovering', () => {
      cy.findByRole('button', {name: 'Delete'}).should('have.attr', 'aria-description');
    });

    context('when the "Delete" button is hovered', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Delete'}).trigger('mouseover');
      });

      it('should show the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      it('should not have any axe-core errors', () => {
        cy.checkA11y();
      });

      it('the "Delete" button should have an accessible description equal to the tooltip text', () => {
        cy.findByRole('button', {name: 'Delete'}).should(
          'have.attr',
          'aria-description',
          'The service will restart after this action'
        );
      });
    });
  });

  context('given the [Components/Popups/Tooltip, Muted] example is rendered', () => {
    beforeEach(() => {
      cy.mount(<Muted />);
    });

    it('should not have any axe-core errors', () => {
      cy.checkA11y();
    });

    it('the span element should not have an aria-describedby attribute', () => {
      cy.get('span').should('not.have.attr', 'aria-describedby');
    });

    it('the span element should not have an aria-label attribute', () => {
      cy.get('span').should('not.have.attr', 'aria-describedby');
    });

    context('when the "Some Text" text is hovered', () => {
      beforeEach(() => {
        cy.contains('span', 'Some text').trigger('mouseover');
      });

      it('should show the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      it('should not have any axe-core errors', () => {
        cy.checkA11y();
      });

      it('the span element should not have an aria-describedby attribute', () => {
        cy.get('span').should('not.have.attr', 'aria-describedby');
      });

      it('the span element should not have an aria-label attribute', () => {
        cy.get('span').should('not.have.attr', 'aria-describedby');
      });
    });
  });

  context('given the Ellipsis example is rendered', () => {
    beforeEach(() => {
      cy.mount(<Ellipsis />);
    });

    it('should not have any axe-core errors', () => {
      cy.checkA11y();
    });

    it('the button should not have an aria-label', () => {
      cy.contains('button', 'Super Mega').should('not.have.attr', 'aria-label');
    });

    context('when the "Short Content" button is hovered', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Short Content'}).trigger('mouseover');
      });

      it('should not show the tooltip', () => {
        cy.findByRole('tooltip').should('not.exist');
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
        cy.findByRole('tooltip').should('not.exist');
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

  context('given the [Testing/Popups/Tooltip, Non Interactive] example is rendered', () => {
    const Example = NonInteractive.render;
    beforeEach(() => {
      cy.mount(<Example />);
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
  context('given the [Testing/Popups/Tooltip, Overflow] example is rendered', () => {
    const Example = Overflow.render;
    beforeEach(() => {
      cy.mount(<Example />);
    });

    context('when the = button is hovered', () => {
      beforeEach(() => {
        cy.findByTestId('overflow-tooltip').trigger('mouseover');
      });

      it('should open the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });
    });
  });

  context(
    `given the [Testing/Popups/Tooltip, TooltipWithFallbackPlacements] example is rendered`,
    () => {
      beforeEach(() => {
        cy.mount(<TooltipWithFallbackPlacements />);
      });

      context('check the fallback placements', () => {
        [
          {
            placement: 'top',
            fallbackPlacement: 'bottom',
            buttonName: 'Placement Top',
            isMovedToSide: false,
          },
          {
            placement: 'left',
            fallbackPlacement: 'right',
            buttonName: 'Placement Left',
            isMovedToSide: true,
          },
          {
            placement: 'right',
            fallbackPlacement: 'left',
            buttonName: 'Placement Right',
            isMovedToSide: true,
          },
          {
            placement: 'bottom',
            fallbackPlacement: 'top',
            buttonName: 'Placement Bottom',
            isMovedToSide: true,
          },
        ].forEach(io => {
          context(`when the preferred placement is set to ${io.placement}`, () => {
            it(`should show the fallback placement: ${io.fallbackPlacement}`, () => {
              cy.findByRole('button', {name: io.buttonName}).trigger('mouseover', {
                scrollBehavior: false,
              });
              cy.findByRole('tooltip')
                .parents('div[data-popper-placement]')
                .should('have.attr', 'data-popper-placement', io.fallbackPlacement);
            });
          });
        });
      });
    }
  );
});
