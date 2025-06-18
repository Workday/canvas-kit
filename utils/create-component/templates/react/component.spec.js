module.exports = ({pascalCaseName, titleCaseName, prerelease, moduleName}) => `
import React from 'react';

import {Basic} from '../../modules/${prerelease && prerelease + 'react'}/${moduleName}/stories/examples/Basic';

  children: React.ReactNode;
}

describe('${pascalCaseName}', () => {
  context(\`given the [Components/Inputs/Checkbox, ${Example.name}] story is rendered\`, () => {
    beforeEach(() => {
      cy.mount(<Example />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when clicked', () => {
      beforeEach(() => {
        getCheckbox().click();
      });

      it('should be checked', () => {
        getCheckbox().should('be.checked');
      });
    });
  });
});
`;
