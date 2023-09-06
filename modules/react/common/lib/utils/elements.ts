/**
 * Is an element focusable? This function performs various tests to see if the element in question
 * can receive focus. Should skip disabled elements as they are not focusable.
 */
export const isFocusable = (element: Element): boolean => {
  if (element.hasAttribute('disabled')) {
    return false;
  }

  const nodeName = element.nodeName.toLowerCase();
  const validInput = nodeName === 'input' && element.getAttribute('type') !== 'hidden';
  const validAnchor = nodeName === 'a' && element.hasAttribute('href');
  const validAudioVideo = ['audio', 'video'].includes(nodeName) && element.hasAttribute('controls');
  const validImgObject = ['img', 'object'].includes(nodeName) && element.hasAttribute('usemap');
  const validNativelyFocusable =
    ['button', 'details', 'embed', 'iframe', 'select', 'textarea'].includes(nodeName) &&
    element.getAttribute('tabindex') !== '-1';
  const hasTabIndex = element.getAttribute('tabindex') === '0';

  return (
    validInput ||
    validAnchor ||
    validAudioVideo ||
    validImgObject ||
    validNativelyFocusable ||
    hasTabIndex
  );
};

/**
 * Get the first focusable element in a container.
 */
export const getFirstFocusableElement = (container: HTMLElement): HTMLElement | null => {
  const elements = container.querySelectorAll('*');

  for (let i = 0; i < elements.length; i++) {
    const element = elements.item(i);
    if (element && isFocusable(element) && element.getAttribute('tabindex') !== '-1') {
      return element as HTMLElement;
    }
  }

  return null;
};

const isRadioInput = (element: Element): element is HTMLInputElement => {
  return element.nodeName.toLowerCase() === 'input' && element.getAttribute('type') === 'radio';
};

const getRadioGroup = (
  container: HTMLElement,
  element: HTMLInputElement
): NodeListOf<HTMLInputElement> => {
  return container.querySelectorAll(`input[type="radio"][name="${element.getAttribute('name')}"]`);
};

/**
 * Get the last focusable element in a container.
 *
 * Returns an array of elements if the last focusable element is a radio group
 */
export const getLastFocusableElement = (container: HTMLElement): Element[] | Element | null => {
  const elements = container.querySelectorAll('*');

  for (let i = elements.length - 1; i >= 0; i--) {
    const element = elements.item(i);
    if (element && isFocusable(element) && element.getAttribute('tabindex') !== '-1') {
      if (isRadioInput(element)) {
        const radioGroup = getRadioGroup(container, element);

        return radioGroup.length > 1 ? Array.from(radioGroup) : element;
      }
      return element as HTMLElement;
    }
  }

  return null;
};
