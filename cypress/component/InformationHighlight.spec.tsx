import {Basic} from '../../modules/react/information-highlight/stories/examples/Basic';
import {Body} from '../../modules/react/information-highlight/stories/examples/Body';
import {Caution} from '../../modules/react/information-highlight/stories/examples/Caution';
import {Critical} from '../../modules/react/information-highlight/stories/examples/Critical';
import {Heading} from '../../modules/react/information-highlight/stories/examples/Heading';
import {Informational} from '../../modules/react/information-highlight/stories/examples/Informational';

describe('Information Highlight', () => {
  [Informational, Caution, Critical].forEach(Example => {
    context(`${Example.name} Example`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have an element with a role of "heading"', () => {
        cy.findAllByRole('heading').should('be.visible');
      });
    });
  });

  context('given the Heading is the last element', () => {
    beforeEach(() => {
      cy.mount(<Heading />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should not add space below the Heading', () => {
      cy.findByRole('heading').should('have.css', 'margin-bottom', '0px');
    });
  });

  context('given the Body is the last element', () => {
    beforeEach(() => {
      cy.mount(<Body />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should not add space below the Body', () => {
      cy.findByText('Only the body of an information highlight').should(
        'have.css',
        'margin-bottom',
        '0px'
      );
    });
  });

  context('given the Heading and Body are followed by other content', () => {
    beforeEach(() => {
      cy.mount(<Basic />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should add space between the Heading and the Body', () => {
      cy.findByRole('heading').invoke('css', 'margin-bottom').should('not.equal', '0px');
    });

    it('should add space between the Body and the Link', () => {
      cy.findByText(/This is what an information highlight looks like/)
        .invoke('css', 'margin-bottom')
        .should('not.equal', '0px');
    });
  });
});
