import {queries} from '@testing-library/dom';

const getStackedParent = (element: HTMLElement): HTMLElement | null => {
  if (element.style.zIndex !== '') {
    return element;
  } else {
    if (element.parentElement) {
      return getStackedParent(element.parentElement);
    } else {
      return null;
    }
  }
};

/**
 * Determines if the current element is stacked on top of the element with the given label.
 * @param labelText element with the given labelText
 * @example
 * cy.findByLabelText('Popup 1')
 *   .should(h.popup.beOnTopOfLabelledByText('Popup 2'))
 */
export const beOnTopOfLabelledByText = (labelText: string) => ($el: JQuery) => {
  const comparingElement = queries.getByRole(Cypress.$('body')[0], 'dialog', {name: labelText});

  const comparingElementZIndex = parseFloat(
    getStackedParent(comparingElement)?.style?.zIndex || ''
  );
  const actualElementZIndex = parseFloat(getStackedParent($el[0])?.style?.zIndex || '');
  expect(actualElementZIndex).to.be.greaterThan(comparingElementZIndex);
};
