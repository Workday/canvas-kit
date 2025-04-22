import {
  Basic,
  DeleteAction,
  Icons,
  OverflowActionBar,
  OverflowActionBarCustomButtonCount,
} from '../../modules/react/action-bar/stories/examples';

describe('ActionBar', () => {
  [Basic, DeleteAction, Icons].forEach(Example => {
    describe(`${Example.name} Example`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
        cy.wait(150);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have an element with a role of "region"', () => {
        cy.findByRole('region').should('be.visible');
      });

      it('should have 2 buttons inside the "region"', () => {
        cy.findByRole('region').findAllByRole('button').should('have.length', 2);
      });

      context('when the first button focused', () => {
        beforeEach(() => {
          cy.findAllByRole('button').eq(0).focus();
        });

        context('when the tab key is pressed', () => {
          beforeEach(() => {
            cy.tab();
          });

          it('should move focus to the tabpanel', () => {
            cy.findByRole('button', {name: 'Second Action'}).should('have.focus');
          });
        });
      });
    });
  });

  // Skipped for now as this keeps failing in CI but passes in local
  describe.skip(`OverflowActionBar Example`, () => {
    beforeEach(() => {
      cy.mount(<OverflowActionBar />);
      cy.wait(150);
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });

    it('should have 4 buttons inside the "region"', () => {
      cy.findByRole('region').findAllByRole('button').should('have.length', 4);
    });

    it('should show the "More" button', () => {
      cy.findByLabelText('More actions').should('be.visible');
    });

    it('should have aria-haspopup as true in "More" button', () => {
      cy.findByLabelText('More actions').should('have.attr', 'aria-haspopup', 'true');
    });

    it('should have menu closed', () => {
      cy.findByLabelText('More actions').should('have.attr', 'aria-expanded', 'false');
    });

    context('when action list container is only 420px wide', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: '420px'}).click();
      });

      it('should have 3 buttons inside the "region"', () => {
        cy.findByRole('region').findAllByRole('button').should('have.length', 3);
      });

      context('when the "Second Action" is focused and tab key is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Second Action'}).focus();
          cy.focused().tab();
        });

        it('should focus on the "More" button', () => {
          cy.findByRole('button', {name: 'More actions'}).should('have.focus');
        });
      });

      context('when the "More" button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'More actions'}).click();
        });

        it('should show the overflow menu', () => {
          cy.findByRole('menu').should('exist');
        });

        it('should contain Third Action', () => {
          cy.findAllByRole('menuitem').eq(0).should('contain', 'Third Action');
        });
      });
    });

    context('when action list container is only 320px wide', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Extra Small'}).click();
      });

      it('should have 2 buttons inside the "region"', () => {
        cy.findByRole('region').findAllByRole('button').should('have.length', 2);
      });

      context('when the "First Action" is focused and tab key is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'First Action'}).focus();
          cy.focused().tab();
        });

        it('should focus on the "More" button', () => {
          cy.findByRole('button', {name: 'More actions'}).should('have.focus');
        });
      });

      context('when the "More" button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'More actions'}).click();
        });

        it('should show the overflow menu', () => {
          cy.findByRole('menu').should('exist');
        });

        it('should contain Second Action', () => {
          cy.findAllByRole('menuitem').eq(0).should('contain', 'Second Action');
        });
      });
    });
  });

  describe(`OverflowActionBarCustomButtonCount Example`, () => {
    beforeEach(() => {
      cy.mount(<OverflowActionBarCustomButtonCount />);
      cy.wait(150);
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });

    it('should have 3 visible buttons inside the "region"', () => {
      cy.findByRole('region').findAllByRole('button').should('have.length', 3);
    });

    it('should focus on the "More" button', () => {
      cy.findByRole('button', {name: 'More actions'}).should('be.visible');
    });

    it('should have button inside the "menu"', () => {
      cy.findByRole('button', {name: 'More actions'}).click();
      cy.findByRole('menu').findAllByRole('menuitem').should('have.length', 1);
    });
  });
});
