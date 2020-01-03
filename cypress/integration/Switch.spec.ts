import * as h from '../helpers';

const getSwitch = () => {
  return cy.get(`[type="checkbox"]`);
};

describe('Non-disabled Switch', () => {
  before(() => {
    h.stories.visit();
  });
  ['Default', 'Alert', 'Error'].forEach(story => {
    context(`Given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Inputs/Switch/React/Top Label', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when the tab key is pressed', () => {
        it('should be the focused item on the page', () => {
          cy.tab();
          getSwitch().should('have.focus');
        });
      });

      context('when the switch is clicked', () => {
        it('should be toggled', () => {
          getSwitch()
            .invoke('prop', 'checked')
            .as('checked');
          getSwitch().click();
          getSwitch().should(this.checked ? 'not.be.checked' : 'be.checked');
          getSwitch().click();
          getSwitch().should(this.checked ? 'be.checked' : 'not.be.checked');
        });
      });
    });
  });
});

describe('Disabled Switch', () => {
  before(() => {
    h.stories.visit();
  });
  context(`Given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Switch/React/Top Label', 'Disabled');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
    it('should be disabled', () => {
      getSwitch().should('be.disabled');
    });
    it('should not toggle when clicked', () => {
      getSwitch()
        .invoke('prop', 'checked')
        .as('beforeClick');
      getSwitch().click({force: true});
      getSwitch()
        .invoke('prop', 'checked')
        .as('afterClick');
      expect(this.beforeClick).to.eq(this.afterClick);
    });
  });
});
