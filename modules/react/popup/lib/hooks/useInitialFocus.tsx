import React from 'react';

import {PopupModel} from '../usePopupModel';
import {changeFocus} from '../../../common';

const isFocusable = (element: HTMLElement) => {
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

const getFirstFocusableElement = (content: HTMLElement): HTMLElement | null => {
  const elements = content.querySelectorAll('*');

  for (let i = 0; i < elements.length; i++) {
    const element = elements.item(i);
    if (element && isFocusable(element as HTMLElement)) {
      return element as HTMLElement;
    }
  }

  console.log(
    'No focusable element was found. Please ensure popup has at least one focusable element'
  );
  return null;
};

/**
 * Transfer focus to an appropriate element within the popup.
 */
export const useInitialFocus = (model: PopupModel, elemProps = {}) => {
  // Using `useEffect` instead of `useLayoutEffect` so that focus doesn't change _before_ PopperJS
  // has positioned the Popup. If we change focus before positioning, the browser will scroll to the
  // top of the page.
  React.useEffect(() => {
    if (model.state.visible && model.state.stackRef.current) {
      const element =
        model.state.initialFocusRef?.current ||
        getFirstFocusableElement(model.state.stackRef.current);

      if (element) {
        console.log('useInitialFocus changeFocus');
        changeFocus(element);
      }
    }

    // The eslint rule wants to add refs as dependencies, but that is not what we want. We want to
    // only run this callback when visibility changes, not risk focusing something when someone
    // unintentionally changes a ref's pointer

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model.state.visible]);

  return elemProps;
};
