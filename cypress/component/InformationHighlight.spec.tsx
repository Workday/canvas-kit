import * as React from 'react';
import {Informational} from '../../modules/preview-react/InformationHighlight/stories/examples/Informational';
import {Caution} from '../../modules/preview-react/InformationHighlight/stories/examples/Caution';
import {Critical} from '../../modules/preview-react/InformationHighlight/stories/examples/Critical';

describe('Information Highlight', () => {
  [Informational, Caution, Critical].forEach(Example => {
    context(`${Example.name} Example`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });
    });
  });
});
