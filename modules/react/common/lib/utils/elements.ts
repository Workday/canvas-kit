/**
 * Is an element focusable? This function performs various tests to see if the element in question
 * can receive focus.
 */
export const isFocusable = (element: HTMLElement) => {
  const nodeName = element.nodeName.toLowerCase();
  const validInput = nodeName === 'input' && element.getAttribute('type') !== 'hidden';
  const validAnchor = nodeName === 'a' && element.hasAttribute('href');
  const validAudioVideo = ['audio', 'video'].includes(nodeName) && element.hasAttribute('controls');
  const validImgObject = ['img', 'object'].includes(nodeName) && element.hasAttribute('usemap');
  const validNativelyFocusable = [
    'button',
    'details',
    'embed',
    'iframe',
    'select',
    'textarea',
  ].includes(nodeName);
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
    if (element && isFocusable(element as HTMLElement)) {
      return element as HTMLElement;
    }
  }

  return null;
};

/**
 * Get the last focusable element in a container.
 */
export const getLastFocusableElement = (container: HTMLElement): HTMLElement | null => {
  const elements = container.querySelectorAll('*');

  for (let i = elements.length - 1; i >= 0; i--) {
    const element = elements.item(i);
    if (element && isFocusable(element as HTMLElement)) {
      return element as HTMLElement;
    }
  }

  return null;
};
