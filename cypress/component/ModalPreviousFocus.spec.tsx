import React from 'react';

import {DynamicTrigger} from '../../modules/react/modal/stories/examples/DynamicTrigger';
import {PreviousFocus} from '../../modules/react/modal/stories/examples/PreviousFocus';

describe('Modal previous focus', () => {
  context('given native triggers without a target ref', () => {
    beforeEach(() => {
      cy.mount(
        <React.StrictMode>
          <PreviousFocus />
        </React.StrictMode>
      );
    });

    it('should not have any axe errors', () => {
      cy.findByRole('button', {name: 'First trigger'}).realClick();
      cy.findByRole('dialog', {name: 'Previous focus'}).should('be.visible');
      cy.checkA11y();
    });

    it('should return focus to each trigger after closing', () => {
      for (const name of ['First trigger', 'Second trigger']) {
        cy.findByRole('button', {name}).realClick();
        cy.findByRole('heading', {name: 'Previous focus'}).should('have.focus');
        cy.findByRole('button', {name: 'Close'}).realClick();
        cy.findByRole('dialog').should('not.exist');
        cy.findByRole('button', {name}).should('have.focus');
      }
    });

    it('should return focus after keyboard opening and Escape', () => {
      cy.findByRole('button', {name: 'Second trigger'}).focus().realPress('Enter');
      cy.findByRole('heading', {name: 'Previous focus'}).should('have.focus');
      cy.realPress('Escape');
      cy.findByRole('dialog').should('not.exist');
      cy.findByRole('button', {name: 'Second trigger'}).should('have.focus');
    });
  });
});

context('given a trigger that changes while the modal is open', () => {
  beforeEach(() => cy.mount(<DynamicTrigger />));

  it('should not have any axe errors', () => {
    cy.findByRole('button', {name: 'Open modal'}).realClick();
    cy.findByRole('dialog', {name: 'Dynamic trigger'}).should('be.visible');
    cy.checkA11y();
  });

  ['Remove trigger', 'Replace trigger'].forEach(action => {
    it(`should return focus to the current target after ${action.toLowerCase()}`, () => {
      cy.findByRole('button', {name: 'Open modal'}).realClick();
      cy.findByRole('button', {name: action}).realClick();
      cy.findByRole('button', {name: 'Close'}).realClick();
      cy.findByRole('dialog').should('not.exist');
      cy.findByRole('button', {name: 'Fallback trigger'}).should('have.focus');
    });
  });
});

context('given a modal with a native autofocus input', () => {
  beforeEach(() => cy.mount(<PreviousFocus autoFocus />));

  it('should not have any axe errors', () => {
    cy.findByRole('button', {name: 'First trigger'}).realClick();
    cy.checkA11y();
  });

  it('should return focus to the trigger after closing', () => {
    cy.findByRole('button', {name: 'First trigger'}).realClick();
    cy.findByRole('dialog', {name: 'Previous focus'}).should('be.visible');
    cy.realPress('Escape');
    cy.findByRole('dialog').should('not.exist');
    cy.findByRole('button', {name: 'First trigger'}).should('have.focus');
  });
});
