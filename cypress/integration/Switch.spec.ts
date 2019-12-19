import * as h from '../helpers';

function getSwitch() {
  return cy.get('input');
}

describe('Switch', () => {
  before(() => {
    h.stories.visit();
  });

  context('given switch is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Switch/React/Top Label', 'Default');
    });
    
    it('should not be checked', () => {
      getSwitch().should('not.be.checked');
    });
    
    it('should not have focus', () => {
      getSwitch().should('not.have.focus');
    });


    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

  });

  context('when switch is clicked', () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Switch/React/Top Label', 'Default');
      getSwitch().click();
    });
    
    it('should have focus', () => {
      getSwitch().should('have.focus');
    });


    it('should be checked', () => {
      getSwitch().should('be.checked');
    });
  }); 

  context('given disabled switch is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Switch/React/Top Label', 'Disabled');
    });

    it('should be disabled', () => {
      getSwitch().should('be.disabled');
    });

  });

});
