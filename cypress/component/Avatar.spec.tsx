import * as React from 'react';
import {
  Light,
  Dark,
  Image,
  LightButton,
  DarkButton,
  ImageButton,
} from '../../modules/react/avatar/stories/examples';

describe('Avatar', () => {
  [Light, Dark, LightButton, DarkButton].forEach(Example => {
    context(`${Example.name} Example`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });
    });
  });

  [Image, ImageButton].forEach(Example => {
    context(`${Example.name} Example`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('should have images', () => {
        cy.get('img').should('be.visible'); // wait for image to load
      });
    });
  });
});
