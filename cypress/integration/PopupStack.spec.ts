import * as h from '../helpers';
import {queries} from '@testing-library/dom';

const getStackedParent = (element: HTMLElement): HTMLElement | null => {
  if (element.style.zIndex !== '') {
    return element;
  } else {
    if (element.parentElement) {
      return getStackedParent(element.parentElement);
    } else {
      return null;
    }
  }
};

const beOnTopOfLabelledByText = (labelText: string) => ($el: JQuery) => {
  const comparingElement = queries.getByLabelText(Cypress.$('body')[0], labelText);

  const comparingElementZIndex = parseFloat(
    getStackedParent(comparingElement)?.style?.zIndex || ''
  );
  const actualElementZIndex = parseFloat(getStackedParent($el[0])?.style?.zIndex || '');
  expect(actualElementZIndex).to.be.greaterThan(comparingElementZIndex);
};

describe('PopupStack', () => {
  before(() => {
    h.stories.visit();
  });

  beforeEach(() => {
    h.stories.load('Testing/React/Popups/Popup Stack', 'MixedPopupTypes');
  });

  it('should start with Window 3 stacked on top of 3 Windows', () => {
    cy.findByLabelText('Window 3')
      .should(beOnTopOfLabelledByText('Window 2'))
      .should(beOnTopOfLabelledByText('Window 4'))
      .should(beOnTopOfLabelledByText('Window 1'));
  });

  context('when Window 2 is clicked', () => {
    beforeEach(() => {
      cy.findByLabelText('Window 2').click();
    });

    it('should place Window 2 above others', () => {
      cy.findByLabelText('Window 2')
        .should(beOnTopOfLabelledByText('Window 3'))
        .should(beOnTopOfLabelledByText('Window 1'));
    });
  });

  context('when Window 1 Tooltip is hovered', () => {
    beforeEach(() => {
      cy.findByText('Contents of Window 1').trigger('mouseover');
    });

    it('should place Window 1 Tooltip all stacked items', () => {
      cy.findByRole('tooltip')
        .should(beOnTopOfLabelledByText('Window 1'))
        .should(beOnTopOfLabelledByText('Window 2'))
        .should(beOnTopOfLabelledByText('Window 4'));
    });
  });

  context('when Delete Item button is clicked', () => {
    beforeEach(() => {
      cy.contains('button', 'Delete Item').click();
    });

    it('should open Delete Item popup', () => {
      cy.findByLabelText('Delete Item').should('be.visible');
    });

    context('when Window 2 is clicked', () => {
      beforeEach(() => {
        cy.findByLabelText('Window 2').click();
      });

      it('should close Delete Item popup', () => {
        cy.findByLabelText('Delete Item').should('not.exist');
      });

      it('should place Window 2 above others', () => {
        cy.findByLabelText('Window 2')
          .should(beOnTopOfLabelledByText('Window 1'))
          .should(beOnTopOfLabelledByText('Window 3'));
      });
    });

    context('when Window 2 Tooltip is hovered', () => {
      beforeEach(() => {
        cy.findByText('Contents of Window 2').trigger('mouseover');
      });

      context('when Window 2 Tooltip is clicked', () => {
        beforeEach(() => {
          cy.findByText('Contents of Window 2').click();
        });

        it('should close Delete Item popup', () => {
          cy.findByLabelText('Delete Item').should('not.exist');
        });

        it('should place Window 2 above others', () => {
          cy.findByLabelText('Window 2')
            .should(beOnTopOfLabelledByText('Window 1'))
            .should(beOnTopOfLabelledByText('Window 3'));
        });
      });

      context('when the Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('html').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should close the Tooltip', () => {
          cy.findByRole('tooltip').should('not.exist');
        });

        it('should not close the Delete Item popup', () => {
          cy.findByLabelText('Delete Item').should('be.visible');
        });

        context('when the Escape key is pressed again', () => {
          beforeEach(() => {
            cy.get('html').trigger('keydown', {
              key: 'Escape',
            });
          });

          it('should close the Delete Item popup', () => {
            cy.findByLabelText('Delete Item').should('not.exist');
          });
        });
      });
    });

    context('when user clicks outside', () => {
      beforeEach(() => {
        cy.get('html').click('bottomRight');
      });

      it('should close Delete Item popup', () => {
        cy.findByLabelText('Delete Item').should('not.exist');
      });
    });

    context('when the Escape key is pressed', () => {
      beforeEach(() => {
        cy.get('html').trigger('keydown', {
          key: 'Escape',
        });
      });

      it('should close Delete Item popup', () => {
        cy.findByLabelText('Delete Item').should('not.exist');
      });
    });
  });
});
