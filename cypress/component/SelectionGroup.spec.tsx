import {Basic} from '../../modules/labs-react/selection-group/stories/examples/Basic';
import {Caution} from '../../modules/labs-react/selection-group/stories/examples/Caution';
import {ColumnWidth} from '../../modules/labs-react/selection-group/stories/examples/ColumnWidth';
import {Disabled} from '../../modules/labs-react/selection-group/stories/examples/Disabled';
import {EqualWidth} from '../../modules/labs-react/selection-group/stories/examples/EqualWidth';
import {Error} from '../../modules/labs-react/selection-group/stories/examples/Error';
import {MultiSelect} from '../../modules/labs-react/selection-group/stories/examples/MultiSelect';
import {RTL} from '../../modules/labs-react/selection-group/stories/examples/RTL';
import {SingleSelect} from '../../modules/labs-react/selection-group/stories/examples/SingleSelect';

describe('SelectionGroup', () => {
  [
    Basic,
    SingleSelect,
    MultiSelect,
    ColumnWidth,
    EqualWidth,
    Disabled,
    Error,
    Caution,
    RTL,
  ].forEach(Example => {
    context(`given the ${Example.name} story is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });
    });
  });

  context('given the Basic story is rendered', () => {
    beforeEach(() => {
      cy.mount(<Basic />);
    });

    it('should render a radiogroup', () => {
      cy.findByRole('radiogroup').should('be.visible');
    });

    it('should start with nothing selected', () => {
      cy.findAllByRole('radio').each($item => {
        cy.wrap($item).should('have.attr', 'aria-checked', 'false');
      });
    });

    context('when an item is clicked', () => {
      beforeEach(() => {
        cy.findByRole('radio', {name: 'Phone'}).click();
      });

      it('should select that item', () => {
        cy.findByRole('radio', {name: 'Phone'}).should('have.attr', 'aria-checked', 'true');
      });

      it('should deselect the item when another is clicked', () => {
        cy.findByRole('radio', {name: 'Email'}).click();
        cy.findByRole('radio', {name: 'Phone'}).should('have.attr', 'aria-checked', 'false');
      });
    });

    context('when navigating with the keyboard', () => {
      beforeEach(() => {
        cy.findByRole('radio', {name: 'Email'}).focus();
      });

      it('should move focus to the next item with the right arrow key', () => {
        cy.realPress('ArrowRight');
        cy.findByRole('radio', {name: 'Phone'}).should('have.focus');
      });

      it('should move selection along with focus, as a radio group does', () => {
        cy.realPress('ArrowRight');
        cy.findByRole('radio', {name: 'Phone'}).should('have.attr', 'aria-checked', 'true');
      });

      it('should have a single tab stop for the whole group', () => {
        cy.findAllByRole('radio').filter('[tabindex="0"]').should('have.length', 1);
      });
    });
  });

  context('given the MultiSelect story is rendered', () => {
    beforeEach(() => {
      cy.mount(<MultiSelect />);
    });

    it('should keep every item in the tab order, as a checkbox group does', () => {
      cy.findAllByRole('checkbox').each($item => {
        cy.wrap($item).should('not.have.attr', 'tabindex', '-1');
      });
    });

    it('should allow more than one item to be selected', () => {
      cy.findByRole('checkbox', {name: 'Tuesday'}).click();
      cy.findByRole('checkbox', {name: 'Monday'}).should('have.attr', 'aria-checked', 'true');
      cy.findByRole('checkbox', {name: 'Tuesday'}).should('have.attr', 'aria-checked', 'true');
    });

    it('should deselect an item when it is clicked again', () => {
      cy.findByRole('checkbox', {name: 'Monday'}).click();
      cy.findByRole('checkbox', {name: 'Monday'}).should('have.attr', 'aria-checked', 'false');
    });
  });

  context('given the Disabled story is rendered', () => {
    beforeEach(() => {
      cy.mount(<Disabled />);
    });

    it('should disable every item when the whole group is disabled', () => {
      cy.findByRole('radiogroup', {name: 'Fully disabled selection group (select one)'}).within(
        () => {
          cy.findAllByRole('radio').each($item => {
            cy.wrap($item).should('be.disabled');
          });
        }
      );
    });

    it('should only disable the non-interactive item in a partially disabled group', () => {
      cy.findByRole('radiogroup', {name: 'Partially disabled selection group (select one)'}).within(
        () => {
          cy.findByRole('radio', {name: 'Option C'}).should('be.disabled');
          cy.findByRole('radio', {name: 'Option A'}).should('not.be.disabled');
        }
      );
    });
  });

  context('given the EqualWidth story is rendered', () => {
    beforeEach(() => {
      cy.mount(<EqualWidth />);
    });

    it('should render every item at the same width', () => {
      const widths: number[] = [];

      cy.findAllByRole('radio')
        .each($item => {
          widths.push(Math.round($item[0].getBoundingClientRect().width));
        })
        .then(() => {
          expect(new Set(widths).size, `widths were ${widths.join(', ')}`).to.equal(1);
        });
    });
  });

  context('given the Error story is rendered', () => {
    beforeEach(() => {
      cy.mount(<Error />);
    });

    it('should mark the group as invalid', () => {
      cy.findByRole('radiogroup').should('have.attr', 'aria-invalid', 'true');
    });

    it('should associate the hint text with the group', () => {
      cy.findByRole('radiogroup')
        .should('have.attr', 'aria-describedby')
        .then(id => {
          cy.get(`#${id}`).should('contain.text', 'Please select a crust to continue');
        });
    });
  });
});
