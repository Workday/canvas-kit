import * as h from '../helpers';

function getSlider() {
  return cy.contains('div', 'Label'); // No accessibility attributes yet. Best and easiest way for now.
}

describe('Slider', () => {
  before(() => {
    h.stories.visit();
  });

  context('given the Default story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Labs|Slider/React', 'Default');
    });

    it('should render an input with a [type=range]', () => {
      getSlider()
        .pipe(h.slider.getRangeInput)
        .should('be.visible');
    });

    it('should have an id attribute on the range input', () => {
      getSlider()
        .pipe(h.slider.getRangeInput)
        .should('have.attr', 'id');
    });

    it('should link the label and range input together', () => {
      getSlider().should($story => {
        const inputId = h.slider.getRangeInput($story).attr('id');
        const labelId = $story.find('label').attr('for');

        expect(inputId).to.equal(labelId);
      });
    });
  });
});
